export interface DaySchedule {
  day: string;
  hours: string;
}

export interface GroupedAvailability {
  days: string;
  hours: string;
}

const DAYS_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/**
 * Parses the semicolon-separated preferred hours string from the database.
 * Example input: "Monday: Evening (5 PM - 9 PM); Tuesday: Evening (5 PM - 9 PM)"
 */
export function parsePreferredHours(preferredHoursStr: string): DaySchedule[] {
  if (!preferredHoursStr) return [];
  return preferredHoursStr
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const idx = part.indexOf(":");
      if (idx === -1) return { day: part, hours: "" };
      const day = part.substring(0, idx).trim();
      const hours = part.substring(idx + 1).trim();
      return { day, hours };
    });
}

/**
 * Formats a time string into standard 12-hour format: h:mm A (e.g. 17:00 -> 5:00 PM).
 * This operates purely on string values to avoid UTC/timezone offsets.
 */
function formatTime(timeStr: string): string {
  const cleaned = timeStr.trim().toUpperCase();
  
  // Case A: 24-hour time like "17:00" or "09:30"
  const match24 = cleaned.match(/^(\d{1,2}):(\d{2})$/);
  if (match24) {
    let hour = parseInt(match24[1], 10);
    const minute = match24[2];
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute} ${ampm}`;
  }
  
  // Case B: 12-hour time with AM/PM but maybe missing minutes, e.g. "5 PM" or "5:00 PM"
  const match12 = cleaned.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/);
  if (match12) {
    const hour = match12[1];
    const minute = match12[2] || '00';
    const ampm = match12[3];
    return `${hour}:${minute} ${ampm}`;
  }
  
  // Case C: Just a single digit like "5" or "17"
  const matchNum = cleaned.match(/^(\d{1,2})$/);
  if (matchNum) {
    let hour = parseInt(matchNum[1], 10);
    if (hour <= 12) {
      return `${hour}:00 PM`;
    } else {
      const ampm = hour >= 12 ? 'PM' : 'AM';
      hour = hour % 12;
      if (hour === 0) hour = 12;
      return `${hour}:00 ${ampm}`;
    }
  }
  
  return timeStr; // Return unmodified fallback
}

/**
 * Standardizes raw hours ranges to clean 12-hour ranges (e.g. "Evening (5 PM - 9 PM)" -> "5:00 PM – 9:00 PM").
 */
export function standardizeHours(hoursStr: string): string {
  let cleaned = hoursStr.trim();
  
  // 1. If it contains parenthesis, e.g. "Evening (5 PM - 9 PM)", extract the inside
  const matchParen = cleaned.match(/\(([^)]+)\)/);
  if (matchParen) {
    cleaned = matchParen[1].trim();
  }
  
  // 2. Split into start/end and format each
  const parts = cleaned.split(/[-–—]/).map((p) => p.trim());
  if (parts.length === 2) {
    return `${formatTime(parts[0])} – ${formatTime(parts[1])}`;
  }
  
  return formatTime(cleaned);
}

/**
 * Formats a list of days into a grouped range string (e.g. Monday-Friday or Monday-Sunday).
 */
export function formatDaysList(days: string[]): string {
  if (days.length === 0) return "";
  if (days.length === 1) return days[0];
  if (days.length === 7) return "Monday – Sunday";
  
  // Sort days according to week order
  const sortedDays = [...days].sort((a, b) => DAYS_ORDER.indexOf(a) - DAYS_ORDER.indexOf(b));
  
  // Check if they are consecutive in DAYS_ORDER
  let isConsecutive = true;
  const startIndex = DAYS_ORDER.indexOf(sortedDays[0]);
  for (let i = 0; i < sortedDays.length; i++) {
    if (DAYS_ORDER.indexOf(sortedDays[i]) !== startIndex + i) {
      isConsecutive = false;
      break;
    }
  }
  
  if (isConsecutive) {
    return `${sortedDays[0]} – ${sortedDays[sortedDays.length - 1]}`;
  }
  
  return sortedDays.join(", ");
}

/**
 * Main function: parses a preferred_hours string and groups identical schedules together.
 */
export function groupAvailability(preferredHoursStr: string, fallbackDays: string = ""): GroupedAvailability[] {
  if (!preferredHoursStr) {
    return [{ days: fallbackDays || "Available Days", hours: "Contact for hours" }];
  }
  
  if (!preferredHoursStr.includes(":")) {
    return [{ days: fallbackDays || "Available Days", hours: preferredHoursStr }];
  }

  try {
    const schedules = parsePreferredHours(preferredHoursStr);
    if (schedules.length === 0) {
      return [{ days: fallbackDays || "Available Days", hours: preferredHoursStr }];
    }
    
    const standardizedSchedules = schedules.map(s => ({
      day: s.day,
      hours: standardizeHours(s.hours)
    }));
    
    // Group identical schedules
    const groupsMap = new Map<string, string[]>();
    standardizedSchedules.forEach((s) => {
      if (!groupsMap.has(s.hours)) {
        groupsMap.set(s.hours, []);
      }
      groupsMap.get(s.hours)!.push(s.day);
    });
    
    const result: GroupedAvailability[] = [];
    groupsMap.forEach((days, hours) => {
      result.push({
        days: formatDaysList(days),
        hours: hours
      });
    });
    
    return result;
  } catch (e) {
    console.error("Failed to parse/group preferred hours:", e);
    return [{ days: fallbackDays || "Available Days", hours: preferredHoursStr }];
  }
}
