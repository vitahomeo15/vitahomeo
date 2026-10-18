"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  FileText, 
  Percent, 
  Clock, 
  Scale, 
  AlertCircle, 
  Printer, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Info
} from "lucide-react";

export function DoctorAgreementFlow() {
  const [hasAgreed, setHasAgreed] = useState(false);
  const [understandsCommission, setUnderstandsCommission] = useState(false);
  const [understandsVerification, setUnderstandsVerification] = useState(false);

  const allChecked = hasAgreed && understandsCommission && understandsVerification;

  const whatsappMessage = encodeURIComponent(
    "Hi VitaHomeo Team! I am a homeopathic doctor and I want to join your platform. I have read and agree to the Doctor Partnership & Onboarding Agreement (v1.0). Please share the official doctor registration Google Form with me."
  );
  const whatsappUrl = `https://wa.me/917765991145?text=${whatsappMessage}`;

  const handlePrint = () => {
    window.print();
  };

  const handleToggleAll = (checked: boolean) => {
    setHasAgreed(checked);
    setUnderstandsCommission(checked);
    setUnderstandsVerification(checked);
  };

  return (
    <div className="w-full">
      {/* 4-Step Onboarding Workflow Banner */}
      <div className="mb-10 bg-white dark:bg-[#101c0f]/70 border border-line-custom dark:border-[#1d2a1a] rounded-2xl p-6 shadow-sm">
        <h3 className="text-xs font-bold text-brand uppercase tracking-wider mb-4 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Streamlined 4-Step Doctor Onboarding
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft dark:bg-[#142313]/60 border border-line-custom/60 dark:border-[#1d2a1a]">
            <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
            <div>
              <p className="text-xs font-bold text-ink dark:text-white">Review Agreement</p>
              <p className="text-[11px] text-body-text dark:text-[#aebba8] mt-0.5">Read terms, commission split & clinical responsibilities below.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft dark:bg-[#142313]/60 border border-line-custom/60 dark:border-[#1d2a1a]">
            <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
            <div>
              <p className="text-xs font-bold text-ink dark:text-white">Agree to Policy</p>
              <p className="text-[11px] text-body-text dark:text-[#aebba8] mt-0.5">Tick the electronic consent checkboxes at the bottom.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft dark:bg-[#142313]/60 border border-line-custom/60 dark:border-[#1d2a1a]">
            <span className="w-6 h-6 rounded-full bg-[#25D366] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
            <div>
              <p className="text-xs font-bold text-ink dark:text-white">Connect on WhatsApp</p>
              <p className="text-[11px] text-body-text dark:text-[#aebba8] mt-0.5">Click WhatsApp button to receive our official Google Form.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-bg-soft dark:bg-[#142313]/60 border border-line-custom/60 dark:border-[#1d2a1a]">
            <span className="w-6 h-6 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
            <div>
              <p className="text-xs font-bold text-ink dark:text-white">Profile Activation</p>
              <p className="text-[11px] text-body-text dark:text-[#aebba8] mt-0.5">We verify credentials and publish your profile on the website.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Commercial Terms Highlight Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
        <div className="bg-white dark:bg-[#101c0f]/60 border border-line-custom dark:border-[#1d2a1a] rounded-xl p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-brand">
            <Percent className="w-4 h-4" />
            <span className="text-[11px] uppercase font-bold tracking-wider">Revenue Split</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-ink dark:text-white mt-1">75% Doctor / 25% Platform</p>
          <p className="text-[11px] text-body-text dark:text-[#aebba8]">Transparent earnings on every completed consultation</p>
        </div>

        <div className="bg-white dark:bg-[#101c0f]/60 border border-line-custom dark:border-[#1d2a1a] rounded-xl p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#0ea98b]">
            <Clock className="w-4 h-4" />
            <span className="text-[11px] uppercase font-bold tracking-wider">Payout Schedule</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-ink dark:text-white mt-1">Within 7 Business Days</p>
          <p className="text-[11px] text-body-text dark:text-[#aebba8]">Prompt settlement following completed appointments</p>
        </div>

        <div className="bg-white dark:bg-[#101c0f]/60 border border-line-custom dark:border-[#1d2a1a] rounded-xl p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-brand">
            <Scale className="w-4 h-4" />
            <span className="text-[11px] uppercase font-bold tracking-wider">Clinical Autonomy</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-ink dark:text-white mt-1">Independent Practice</p>
          <p className="text-[11px] text-body-text dark:text-[#aebba8]">You retain 100% independent diagnostic authority</p>
        </div>

        <div className="bg-white dark:bg-[#101c0f]/60 border border-line-custom dark:border-[#1d2a1a] rounded-xl p-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#0ea98b]">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px] uppercase font-bold tracking-wider">Verification</span>
          </div>
          <p className="text-lg md:text-xl font-bold text-ink dark:text-white mt-1">Verified Homeopaths</p>
          <p className="text-[11px] text-body-text dark:text-[#aebba8]">Maintaining high standards of clinical credibility</p>
        </div>
      </div>

      {/* Main Document Box */}
      <div className="bg-white dark:bg-[#101c0f] border-2 border-line-custom dark:border-[#1d2a1a] rounded-2xl shadow-card-premium overflow-hidden mb-10">
        
        {/* Document Header Bar */}
        <div className="bg-bg-soft dark:bg-[#142313] border-b border-line-custom dark:border-[#1d2a1a] px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand/10 dark:bg-brand/20 text-brand flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand">Official Policy Document</span>
                <span className="text-[10px] font-semibold bg-brand/15 text-brand-dark dark:text-brand-light px-2 py-0.5 rounded-full">v1.0</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-ink dark:text-white font-display">
                Doctor Partnership & Onboarding Agreement
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line-custom dark:border-[#1d2a1a] bg-white dark:bg-[#0a120a] text-xs font-semibold text-body-text dark:text-[#aebba8] hover:text-brand hover:border-brand transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save Copy</span>
            </button>
            <a
              href="#consent-section"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand text-white text-xs font-semibold hover:bg-brand-hover transition-colors"
            >
              <span>Jump to Agree</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Document Metadata Strip */}
        <div className="px-6 py-3.5 bg-bg-soft-2 dark:bg-[#0a120a] border-b border-line-custom dark:border-[#1d2a1a] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-body-text dark:text-[#aebba8]">
          <div>
            <strong className="text-ink dark:text-white">Platform:</strong> VitaHomeo — Online Homeopathy Consultation Platform
          </div>
          <div>
            <strong className="text-ink dark:text-white">Document Version:</strong> 1.0
          </div>
          <div>
            <strong className="text-ink dark:text-white">Effective Date:</strong> Date of electronic acceptance
          </div>
        </div>

        {/* Document Body */}
        <div className="p-6 md:p-10 space-y-8 text-sm text-body-text dark:text-[#c0d1c0] leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <h3>Purpose of the Partnership</h3>
            </div>
            <p>
              VitaHomeo is an emerging digital platform designed to connect patients seeking homeopathic consultations with qualified and eligible homeopathic practitioners.
            </p>
            <p>
              Our mission is to help doctors establish a stronger digital presence, reach potential patients, and develop new consultation opportunities through a growing online platform.
            </p>
            <p>
              We aim to build a professional, transparent, and mutually beneficial network in which doctors can grow alongside VitaHomeo.
            </p>
            <p className="font-semibold text-ink dark:text-white">
              By proceeding with onboarding, you acknowledge and agree to the following terms.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 2 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <h3>Doctor Onboarding and Verification</h3>
            </div>
            <p>The onboarding process follows these steps:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Read and accept the Doctor Partnership &amp; Onboarding Agreement on the VitaHomeo website.</li>
              <li>Click the <strong className="text-ink dark:text-white">&ldquo;Connect with Us on WhatsApp&rdquo;</strong> button to contact the VitaHomeo team.</li>
              <li>Receive the official doctor registration form from our team.</li>
              <li>Complete the form and provide accurate information regarding your identity, qualifications, professional registration, experience, and other requested details.</li>
              <li>Submit the necessary supporting documents for verification.</li>
              <li>Wait for the VitaHomeo team to review your application and communicate its decision.</li>
            </ol>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <div>
                <strong>Important:</strong> Accepting this agreement or submitting the registration form does not guarantee approval. A doctor profile will be activated only after the required verification and approval process has been completed.
              </div>
            </div>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <h3>Commission and Revenue-Sharing Policy</h3>
            </div>
            <p>
              VitaHomeo follows a transparent revenue-sharing model for eligible consultations facilitated through the platform.
            </p>
            <div className="p-4 rounded-xl bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] space-y-1">
              <p className="font-bold text-ink dark:text-white text-xs uppercase tracking-wider">Agreed Revenue-Sharing Arrangement:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 font-semibold text-brand-dark dark:text-white">
                <li><strong className="text-brand">VitaHomeo platform commission: 25%</strong></li>
                <li><strong className="text-[#0ea98b]">Doctor&apos;s share: 75%</strong></li>
              </ul>
            </div>

            {/* Example Table */}
            <div>
              <p className="text-xs font-bold text-ink dark:text-white mb-2 uppercase tracking-wider">Example Breakdown:</p>
              <div className="overflow-x-auto rounded-xl border border-line-custom dark:border-[#1d2a1a]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-bg-soft dark:bg-[#142313] text-ink dark:text-white font-bold border-b border-line-custom dark:border-[#1d2a1a]">
                    <tr>
                      <th className="py-2.5 px-4">Consultation Fee Breakdown</th>
                      <th className="py-2.5 px-4 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line-custom dark:divide-[#1d2a1a]">
                    <tr>
                      <td className="py-2.5 px-4">Total consultation fee, excluding applicable taxes</td>
                      <td className="py-2.5 px-4 text-right font-bold text-ink dark:text-white">₹1,000</td>
                    </tr>
                    <tr className="bg-bg-soft/40 dark:bg-[#142313]/40">
                      <td className="py-2.5 px-4">VitaHomeo&apos;s 25% commission</td>
                      <td className="py-2.5 px-4 text-right font-bold text-brand">₹250</td>
                    </tr>
                    <tr className="bg-brand/5 dark:bg-brand/10 font-bold">
                      <td className="py-2.5 px-4 text-brand-dark dark:text-brand-light">Doctor&apos;s 75% share</td>
                      <td className="py-2.5 px-4 text-right text-brand-dark dark:text-brand-light">₹750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p>
              The commission will be calculated on the consultation fee actually collected, excluding separately charged taxes payable to the government and amounts refunded to the patient.
            </p>
            <p>
              Ordinary payment-processing charges will be borne from VitaHomeo&apos;s platform share unless a different arrangement is expressly disclosed and agreed upon in writing before it applies.
            </p>
            <p>
              The doctor will receive their eligible share within <strong className="text-ink dark:text-white">7 business days after completion of the consultation and clearance of the corresponding payment</strong>, subject to applicable payment-provider processing and lawful requirements.
            </p>
            <p>
              Cancellation, refund, failed-payment, and chargeback cases will be handled under the applicable payment policy. No commission will be earned on an amount fully refunded to the patient.
            </p>
            <p>
              Any material change to the commission structure will be communicated in advance and implemented only in accordance with the applicable agreement and legal requirements.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 4 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <h3>Patient Acquisition and Consultation Opportunities</h3>
            </div>
            <p>
              VitaHomeo is committed to developing its patient base and creating meaningful consultation opportunities for its participating doctors.
            </p>
            <p>
              As an early-stage startup operating with a minimum viable product (MVP), the platform is continuously improving its technology, marketing, visibility, and patient-acquisition processes.
            </p>
            <p className="font-semibold text-ink dark:text-white">Accordingly:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>VitaHomeo will make reasonable and sustained efforts to attract patients and facilitate suitable consultation opportunities for approved doctors.</li>
              <li>We intend to grow patient demand through digital marketing, search visibility, platform improvements, and other appropriate acquisition channels.</li>
              <li>The number of consultation requests may vary depending on patient demand, platform growth, specialization, language, availability, location, and other relevant factors.</li>
              <li><strong className="text-ink dark:text-white">VitaHomeo does not guarantee a minimum number of patients, bookings, consultations, or monthly earnings at this stage.</strong></li>
              <li>There may be months when a doctor receives fewer consultation requests or no requests.</li>
              <li>Our objective is to increase patient reach and create more consistent consultation opportunities as the platform develops.</li>
            </ol>
            <p className="italic text-xs text-body-text dark:text-[#aebba8]">
              We appreciate doctors who join VitaHomeo during its early growth stage. Our intention is to build a sustainable platform that creates increasing opportunities for its professional partners.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 5 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">5</span>
              <h3>Fair Patient Allocation and Future Partnership Benefits</h3>
            </div>
            <p>
              VitaHomeo intends to introduce a structured and transparent patient-allocation system as the platform grows.
            </p>
            <p>
              Our long-term objective is to provide eligible participating doctors with fair opportunities to receive suitable consultation requests, rather than allowing opportunities to depend entirely on arbitrary ranking or visibility.
            </p>
            <p>Subject to patient requirements and the availability of suitable doctors, the allocation system may consider:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Relevant qualifications and verified professional credentials.</li>
              <li>The patient&apos;s preferred language and consultation requirements.</li>
              <li>The doctor&apos;s availability and ability to accept appointments.</li>
              <li>Relevant specialization and scope of practice.</li>
              <li>Responsiveness, reliability, and adherence to platform policies.</li>
              <li>Fair rotation or distribution of suitable consultation opportunities where appropriate.</li>
            </ul>
            <p>
              Doctors who remain active, maintain complete profiles, respond reliably, and comply with platform standards may be considered for additional visibility and future partnership benefits under published eligibility criteria.
            </p>
            <div className="p-3.5 rounded-xl bg-bg-soft dark:bg-[#142313] border border-line-custom dark:border-[#1d2a1a] text-xs space-y-1.5">
              <p><strong className="text-ink dark:text-white">Current commitment:</strong> VitaHomeo aims to provide fair consideration and suitable consultation opportunities to eligible doctors.</p>
              <p><strong className="text-ink dark:text-white">Future plans:</strong> A structured patient-rotation system, priority visibility, minimum allocation targets, and additional partnership benefits may be introduced as the platform grows. These are future development objectives, not current guarantees.</p>
            </div>
            <p className="text-xs">
              No doctor is promised a fixed ranking, preferential allocation, or equal number of patients unless such an arrangement is separately documented and agreed upon.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 6 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">6</span>
              <h3>Professional Eligibility and Responsibilities</h3>
            </div>
            <p className="font-semibold text-ink dark:text-white">Every participating doctor must:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Provide accurate and genuine information regarding identity, educational qualifications, experience, and professional registration.</li>
              <li>Maintain valid professional credentials and any authorizations required to practise lawfully.</li>
              <li>Cooperate with verification and provide updated documents when reasonably requested.</li>
              <li>Practise within their lawful scope of professional competence.</li>
              <li>Maintain professional conduct and respectful communication with patients.</li>
              <li>Comply with applicable healthcare, telemedicine, privacy, and professional-conduct requirements.</li>
              <li>Make independent clinical decisions and ensure that advice, diagnosis, and prescriptions are appropriate and lawful.</li>
              <li>Recommend in-person assessment or urgent medical care when clinically necessary.</li>
            </ol>
            <p className="text-xs text-muted-text dark:text-[#71806c]">
              VitaHomeo&apos;s verification process does not replace a doctor&apos;s professional responsibilities or constitute a guarantee of clinical competence or treatment outcomes.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 7 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">7</span>
              <h3>Patient Safety and Ethical Practice</h3>
            </div>
            <p>
              Patient safety and responsible communication are essential conditions of participation.
            </p>
            <p className="font-semibold text-ink dark:text-white">Doctors must not:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Make false, misleading, or unsupported claims about treatment effectiveness.</li>
              <li>Guarantee cures or specific medical outcomes.</li>
              <li>Misrepresent professional qualifications, experience, or registration.</li>
              <li>Encourage patients to delay necessary medical assessment or discontinue prescribed treatment inappropriately.</li>
              <li>Engage in fraudulent, abusive, discriminatory, or otherwise unprofessional conduct.</li>
            </ul>
            <p>
              Doctors must respect the limitations of online consultations and refer patients to appropriate medical services whenever necessary.
            </p>
            <p>
              VitaHomeo does not represent that homeopathy is a proven treatment for every condition. Medical claims and treatment decisions must be consistent with reliable evidence, applicable professional standards, and the law.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 8 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">8</span>
              <h3>Confidentiality and Patient Data Protection</h3>
            </div>
            <p>Doctors must maintain the confidentiality of patient information accessed through VitaHomeo.</p>
            <p className="font-semibold text-ink dark:text-white">Doctors agree to:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Use patient information only for authorized professional and administrative purposes.</li>
              <li>Protect consultation notes, medical reports, prescriptions, contact details, and other personal information.</li>
              <li>Apply appropriate safeguards when storing, accessing, or sharing patient information.</li>
              <li>Obtain required consent before collecting, using, or disclosing personal information.</li>
              <li>Comply with applicable data-protection and professional-confidentiality requirements.</li>
              <li>Promptly report suspected unauthorized access, disclosure, or misuse of patient information.</li>
            </ul>
            <p>
              Patient information must not be sold, disclosed without a lawful basis, or used for unrelated marketing. VitaHomeo and participating doctors must each comply with the privacy obligations applicable to their respective activities.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 9 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">9</span>
              <h3>Doctor Profile and Appointment Management</h3>
            </div>
            <p>Approved doctors agree to maintain an accurate and professional presence on VitaHomeo.</p>
            <p className="font-semibold text-ink dark:text-white">Doctors should:</p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Keep profile information, qualifications, languages, and availability up to date.</li>
              <li>Respond to consultation requests within a reasonable time.</li>
              <li>Attend confirmed appointments or provide timely notice when rescheduling is necessary.</li>
              <li>Communicate professionally with patients and the VitaHomeo team.</li>
              <li>Cooperate with reasonable verification, quality, and administrative processes.</li>
            </ul>
            <p className="text-xs text-muted-text dark:text-[#71806c]">
              VitaHomeo may update website features, profile presentation, and operational processes as the platform evolves, subject to applicable agreements and law.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 10 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">10</span>
              <h3>Payment, Cancellation, and Refund Procedures</h3>
            </div>
            <p>
              All consultation payments, cancellations, refunds, settlements, and payment disputes will be handled according to the applicable policies communicated by VitaHomeo.
            </p>
            <p>
              Doctors agree to cooperate in resolving legitimate payment discrepancies and refund matters.
            </p>
            <p>
              The commission and settlement terms in Section 3 will govern the calculation and payment of the doctor&apos;s eligible share, subject to applicable law and the relevant transaction circumstances.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 11 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">11</span>
              <h3>Partnership Relationship</h3>
            </div>
            <p>
              VitaHomeo and participating doctors are expected to maintain a professional and transparent working relationship.
            </p>
            <p>
              Unless a separate written agreement states otherwise, participating doctors operate as independent professionals and are responsible for their own clinical decisions and professional obligations.
            </p>
            <p>
              Participation in VitaHomeo does not, by itself, create an employment relationship, partnership firm, or joint venture in the legal sense. Neither party may make unauthorized commitments or representations on behalf of the other.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 12 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">12</span>
              <h3>Platform Policy Updates</h3>
            </div>
            <p>
              VitaHomeo may introduce improvements to its technology, onboarding process, verification standards, payment administration, patient allocation, and partnership benefits.
            </p>
            <p>
              Material changes will be communicated to affected doctors with reasonable notice where appropriate.
            </p>
            <p>
              Changes to material commercial terms will be subject to the acceptance requirements of the applicable agreement and law. Merely displaying an updated term on the website will not constitute acceptance where additional consent is required.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 13 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">13</span>
              <h3>Suspension and Termination</h3>
            </div>
            <p>
              VitaHomeo may suspend or terminate participation in accordance with the applicable agreement and law, including where there is credible evidence of:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>False credentials or material misrepresentation.</li>
              <li>Invalid, suspended, or expired professional authorization.</li>
              <li>Serious professional misconduct or patient-safety concerns.</li>
              <li>Fraud, payment abuse, or misuse of patient information.</li>
              <li>Material violations of applicable law or platform policies.</li>
            </ul>
            <p>
              Where appropriate and legally permissible, the doctor will be informed of the concern and given an opportunity to respond.
            </p>
            <p>
              A doctor may request to discontinue participation by contacting the VitaHomeo team and providing reasonable notice. Outstanding payments, confirmed appointments, patient-care responsibilities, confidentiality obligations, and other accrued obligations must be addressed appropriately upon termination.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 14 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">14</span>
              <h3>No Guarantee of Business Results</h3>
            </div>
            <p>
              VitaHomeo is an early-stage platform that continues to develop its patient base, technology, marketing, and operational infrastructure.
            </p>
            <p className="font-semibold text-ink dark:text-white">
              Although we intend to expand patient reach and create meaningful opportunities for participating doctors, VitaHomeo does not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>A fixed number of patients or consultations.</li>
              <li>Minimum monthly earnings or revenue.</li>
              <li>Immediate patient acquisition after onboarding.</li>
              <li>Specific search rankings, profile views, or conversion rates.</li>
              <li>Guaranteed priority or a fixed allocation of patients under future systems.</li>
            </ul>
            <p>
              Actual results will depend on patient demand, doctor availability, platform development, and other factors. VitaHomeo remains committed to making reasonable efforts to improve the platform and increase consultation opportunities over time.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 15 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">15</span>
              <h3>Acceptance and Electronic Consent</h3>
            </div>
            <p>
              By selecting <strong className="text-ink dark:text-white">&ldquo;I Agree to All Terms &amp; Conditions&rdquo;</strong>, the doctor confirms that:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>They have read and understood this agreement.</li>
              <li>They accept the applicable platform participation and professional responsibilities.</li>
              <li>They understand the 25% platform commission and 75% doctor revenue-sharing arrangement.</li>
              <li>They understand that VitaHomeo does not currently guarantee a minimum number of patients, consultations, or earnings.</li>
              <li>They understand that future patient-allocation systems and priority benefits are subject to separate implementation and eligibility criteria.</li>
              <li>They agree to provide accurate information and cooperate with verification.</li>
              <li>They understand that onboarding remains subject to approval.</li>
            </ol>
            <p>
              VitaHomeo may maintain a record of the accepted agreement version, acceptance date and time, and other appropriate consent information.
            </p>
            <p className="text-xs text-muted-text dark:text-[#71806c]">
              Electronic acceptance will be handled in accordance with applicable law. The definitive legal effect of this acceptance, and any additional agreement required, will be determined by the applicable contractual terms.
            </p>
          </section>

          <hr className="border-line-custom dark:border-[#1d2a1a]" />

          {/* Section 16 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-ink dark:text-white font-bold text-base md:text-lg">
              <span className="w-7 h-7 rounded-lg bg-brand/10 dark:bg-brand/20 text-brand text-xs font-bold flex items-center justify-center shrink-0">16</span>
              <h3>Contact and Onboarding</h3>
            </div>
            <p>
              For questions about eligibility, commission, verification, or onboarding, doctors may contact VitaHomeo through the official WhatsApp contact provided on the website.
            </p>
            <div className="mt-4 pt-4 border-t border-line-custom dark:border-[#1d2a1a] flex flex-col items-center text-center gap-1.5 py-4 bg-bg-soft dark:bg-[#142313] rounded-xl">
              <span className="text-base font-bold tracking-widest text-ink dark:text-white">VITAHOMEO</span>
              <p className="text-xs italic text-brand-dark dark:text-brand font-medium max-w-md">
                Growing together with healthcare professionals through transparency, trust, and responsible digital access to consultations.
              </p>
              <span className="text-[10px] uppercase font-bold text-muted-text dark:text-[#71806c] tracking-widest mt-1">
                — End of Agreement (v1.0) —
              </span>
            </div>
          </section>

        </div>
      </div>

      {/* Electronic Agreement & Consent Section */}
      <div id="consent-section" className="bg-white dark:bg-[#101c0f] border-2 border-brand/40 dark:border-brand/30 rounded-2xl p-6 md:p-8 shadow-floating-premium mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center shrink-0 shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-wider">Step 2 of Onboarding</span>
            <h3 className="text-xl md:text-2xl font-bold text-ink dark:text-white font-display">
              Doctor Electronic Acceptance
            </h3>
          </div>
        </div>

        <p className="text-xs md:text-sm text-body-text dark:text-[#aebba8] mb-6">
          To unlock the official WhatsApp connection and receive the Doctor Registration Google Form, please confirm your agreement below:
        </p>

        {/* Checkbox Group */}
        <div className="space-y-3.5 mb-6">
          
          {/* Main Acceptance Checkbox */}
          <label className="flex items-start gap-3.5 p-4 rounded-xl border-2 transition-all cursor-pointer bg-bg-soft/70 dark:bg-[#142313]/60 hover:border-brand border-line-custom dark:border-[#1d2a1a]">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={(e) => handleToggleAll(e.target.checked)}
              className="mt-0.5 w-5 h-5 rounded text-brand focus:ring-brand cursor-pointer accent-[#6F8F72] shrink-0"
            />
            <div className="space-y-1">
              <span className="text-sm font-bold text-ink dark:text-white block">
                I Agree to All Terms &amp; Conditions (Doctor Partnership &amp; Onboarding Agreement v1.0)
              </span>
              <span className="text-xs text-body-text dark:text-[#aebba8] block leading-relaxed">
                I confirm that I have read, understood, and accept all 16 sections of this agreement, including the 25% platform commission / 75% doctor share, clinical independence, and verification criteria.
              </span>
            </div>
          </label>

          {/* Sub check 1 */}
          <label className="flex items-start gap-3 p-3 rounded-lg border border-line-custom dark:border-[#1d2a1a] cursor-pointer hover:bg-bg-soft/50 dark:hover:bg-[#142313]/40 transition-colors">
            <input
              type="checkbox"
              checked={understandsCommission}
              onChange={(e) => setUnderstandsCommission(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-brand focus:ring-brand cursor-pointer accent-[#6F8F72] shrink-0"
            />
            <span className="text-xs text-body-text dark:text-[#c0d1c0]">
              I acknowledge the <strong className="text-ink dark:text-white">75% Doctor / 25% Platform</strong> revenue sharing structure and that earnings are disbursed within 7 business days following completed consultations.
            </span>
          </label>

          {/* Sub check 2 */}
          <label className="flex items-start gap-3 p-3 rounded-lg border border-line-custom dark:border-[#1d2a1a] cursor-pointer hover:bg-bg-soft/50 dark:hover:bg-[#142313]/40 transition-colors">
            <input
              type="checkbox"
              checked={understandsVerification}
              onChange={(e) => setUnderstandsVerification(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded text-brand focus:ring-brand cursor-pointer accent-[#6F8F72] shrink-0"
            />
            <span className="text-xs text-body-text dark:text-[#c0d1c0]">
              I understand that submitting the Google Form on WhatsApp does not guarantee automatic approval; profile activation is subject to credential verification by the VitaHomeo medical panel.
            </span>
          </label>
        </div>

        {/* WhatsApp CTA Action Section */}
        <div className="pt-4 border-t border-line-custom dark:border-[#1d2a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left w-full md:w-auto">
            {allChecked ? (
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Agreement Accepted! You are now eligible to connect on WhatsApp.</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-muted-text dark:text-[#71806c] text-xs">
                <Info className="w-4 h-4" />
                <span>Please check the agreement box above to activate the WhatsApp button.</span>
              </div>
            )}
          </div>

          <div className="w-full md:w-auto">
            {allChecked ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-button text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Connect with Us on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-button text-sm font-bold text-gray-400 bg-gray-100 dark:bg-white/5 dark:text-white/30 border border-gray-200 dark:border-white/10 cursor-not-allowed transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Connect with Us on WhatsApp (Locked)</span>
              </button>
            )}
          </div>
        </div>

        {/* WhatsApp Reassurance details */}
        <div className="mt-5 p-4 rounded-xl bg-bg-soft dark:bg-[#142313] border border-line-custom/60 dark:border-[#1d2a1a] text-xs text-body-text dark:text-[#aebba8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-brand shrink-0" />
            <span>Official VitaHomeo Doctor Desk: <strong className="text-ink dark:text-white">+91 77659 91145</strong></span>
          </div>
          <span className="text-[11px] text-muted-text dark:text-[#71806c]">Typical response time: Under 15 minutes</span>
        </div>
      </div>
    </div>
  );
}
