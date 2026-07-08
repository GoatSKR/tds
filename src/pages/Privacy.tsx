import { PageLayout } from "@/components/layout/PageLayout";
import { config } from "@/lib/config";

const Privacy = () => (
  <PageLayout>
    <section className="container py-16 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Legal</p>
      <h1 className="font-display text-5xl font-extrabold text-primary mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: July 2026</p>

      <p className="text-muted-foreground leading-relaxed mb-8">
        At Trushna Disinfecting Services ("TDS", "we", "us"), we are committed to protecting your privacy and the security of your
        personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit
        our website or use our pest control and disinfection services across Odisha.
      </p>

      {[
        ["Information We Collect", "When you request a quote, book a service, or contact us, we collect your name, phone number, email address, and service address. We may also collect photos of the treated premises for service documentation and warranty records. We automatically collect basic usage data such as IP address, browser type, and pages visited when you browse our website."],
        ["How We Use Your Information", "We use your information to provide and schedule pest control and disinfection services, respond to your enquiries, honour our 5-year Anti-Termite Treatment warranty, and send service reminders or offers. You can opt out of promotional communications at any time by replying \"unsubscribe\" or contacting us directly."],
        ["Information Sharing and Disclosure", "We do not sell, trade, or rent your personal information. We may share your details with our own field technicians and trusted service partners solely to fulfil your booking, and with authorities if required by law."],
        ["Data Security", "We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, or disclosure. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security."],
        ["Cookies and Tracking Technologies", "Our website may use cookies and similar technologies to understand how visitors use the site and to improve your experience. You can disable cookies in your browser settings, though some features may not work as intended."],
        ["Third-Party Links", "Our website may link to third-party sites (such as Google Maps or social media). We are not responsible for the privacy practices of those sites and encourage you to review their policies separately."],
        ["Children's Privacy", "Our services and website are intended for adults arranging pest control services and are not directed at children under 13. We do not knowingly collect information from children."],
        ["Your Rights", "You may request access to, correction of, or deletion of your personal data at any time by contacting us using the details below."],
        ["Changes to This Policy", "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."],
        ["Contact Us", `Questions or requests regarding this Privacy Policy can be sent to ${config.email} or by calling ${config.phoneDisplay}.`],
      ].map(([t, b]) => (
        <div key={t} className="mb-6">
          <h2 className="font-display font-bold text-primary text-xl mb-2">{t}</h2>
          <p className="text-muted-foreground leading-relaxed">{b}</p>
        </div>
      ))}
    </section>
  </PageLayout>
);

export default Privacy;
