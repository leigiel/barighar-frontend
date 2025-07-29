import React from 'react';

const TermsPrivacyPage = () => {
 return (
    <section className="px-6 lg:px-24 py-16 bg-base-100 text-base-content">
      <h1 className="text-4xl font-bold text-primary text-center mb-12">Terms & Privacy Policy</h1>

      {/* Terms Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-4">Terms of Use</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/80">
          <li>Users may browse and save property listings for personal use.</li>
          <li>Posting listings requires an active verified account.</li>
          <li>No spam, fraudulent activity, or misuse of services allowed.</li>
          <li>We reserve the right to suspend accounts violating our terms.</li>
        </ul>
      </div>

      {/* Privacy Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-secondary mb-4">Privacy Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/80">
          <li>We collect basic user info to improve your experience (e.g. email, preferences).</li>
          <li>Data is kept secure and not shared with third parties without consent.</li>
          <li>You may delete your account and data at any time.</li>
          <li>Cookies are used only for essential site performance and analytics.</li>
        </ul>
      </div>

      <p className="text-center text-sm text-base-content/60 mt-8">
        Last updated: July 2025. For questions or concerns, reach out via our Contact Page.
      </p>
    </section>
  );
};

export default TermsPrivacyPage;