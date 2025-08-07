import Link from 'next/link'

export default function LegalDisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Legal Disclaimer
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Important information about our services, limitations, and legal framework
            </p>
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> This service provides notifications only and does not constitute legal advice. 
                    Please consult with qualified legal professionals for estate planning and legal document preparation.
                  </p>
                </div>
              </div>
            </div>

            <h2>Service Limitations</h2>
            <p>
              Digital Legacy Service operates as a notification and delivery platform. We want to be clear about 
              what our service does and does not provide:
            </p>

            <h3>What We Do Provide</h3>
            <ul>
              <li>Secure storage of your final messages and documents</li>
              <li>Automated delivery system with check-in monitoring</li>
              <li>Professional partnerships with estate planning attorneys</li>
              <li>End-to-end encryption for data security</li>
              <li>Customer support and technical assistance</li>
            </ul>

            <h3>What We Do NOT Provide</h3>
            <ul>
              <li><strong>Legal Execution:</strong> We do not execute legal transfers or act as legal representatives</li>
              <li><strong>Legal Advice:</strong> We do not provide legal advice or create legal documents</li>
              <li><strong>Property Transfers:</strong> We do not handle actual property or asset transfers</li>
              <li><strong>Will Creation:</strong> We do not create or validate wills or legal documents</li>
            </ul>

            <h2>Critical Legal Requirements</h2>
            
            <h3>User Consent</h3>
            <p>
              By using our service, you explicitly agree to all terms and conditions. We require written 
              agreement for all services and maintain records of user consent as required by law.
            </p>

            <h3>Identity Verification</h3>
            <p>
              We implement multi-factor authentication and may require document verification for certain 
              services to ensure the security and integrity of our platform.
            </p>

            <h3>Data Protection</h3>
            <p>
              We comply with GDPR, CCPA, and other international data protection standards. Your personal 
              information is encrypted and protected according to industry best practices.
            </p>

            <h2>Professional Partnerships</h2>
            <p>
              We maintain a network of qualified estate planning attorneys and legal professionals. 
              For complex legal matters, we will refer you to licensed professionals in your jurisdiction.
            </p>

            <h2>Jurisdictional Compliance</h2>
            <p>
              Our services vary based on local laws and regulations. We recommend consulting with 
              local legal professionals to ensure compliance with your jurisdiction&apos;s requirements.
            </p>

            <h2>Liability and Insurance</h2>
            <p>
              Digital Legacy Service maintains comprehensive business insurance and follows industry-standard 
              security practices. However, we cannot guarantee the outcome of legal proceedings or 
              the validity of documents in all jurisdictions.
            </p>

            <h2>Service Limitations by Tier</h2>
            
            <h3>Basic Tier</h3>
            <ul>
              <li>Email delivery only</li>
              <li>Monthly check-ins</li>
              <li>Basic support</li>
            </ul>

            <h3>Premium Tier</h3>
            <ul>
              <li>Video/audio support</li>
              <li>Bi-weekly check-ins</li>
              <li>Legal document delivery (not creation)</li>
              <li>Priority support</li>
            </ul>

            <h3>Estate Tier</h3>
            <ul>
              <li>All Premium features</li>
              <li>Property notification services</li>
              <li>Legal professional network access</li>
              <li>Weekly check-ins</li>
              <li>Phone support</li>
              <li>Notary service partnerships</li>
            </ul>

            <h2>Recommendations</h2>
            <p>
              We strongly recommend that you:
            </p>
            <ul>
              <li>Consult with qualified estate planning attorneys</li>
              <li>Have your legal documents reviewed by professionals</li>
              <li>Understand the laws in your jurisdiction</li>
              <li>Keep your account information secure</li>
              <li>Regularly update your contact information</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Need Legal Help?</strong> Contact our team to connect with qualified legal professionals 
                    in your area for estate planning and legal document preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Our Legal Framework?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help clarify any legal aspects of our service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/terms" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 