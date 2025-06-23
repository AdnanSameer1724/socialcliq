import React from "react";
const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white px-8 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Platform →</h3>
          <div className="mb-4">
            <h4 className="font-medium">Agents →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>App Library</li>
              <li>AI Studio</li>
              <li>Integrations & Extensions</li>
              <li>API</li>
              <li>Jasper Browser Extensions</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Canvas →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Marketing AI Editor</li>
              <li>Jasper Chat</li>
              <li>AI Image Suite</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Jasper IQ →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Brand IQ</li>
              <li>Brand Voice</li>
              <li>Visual Guidelines</li>
              <li>Style Guide</li>
              <li>Marketing IQ</li>
              <li>Knowledge Base</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Trust Foundation →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>LLM-Optimized Architecture</li>
              <li>Security</li>
              <li>Governance</li>
              <li>Compliance</li>
              <li>Ethics at Jasper</li>
            </ul>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions →</h3>
          <div className="mb-4">
            <h4 className="font-medium">Solutions by Role →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Product Marketing</li>
              <li>Content Marketing</li>
              <li>Performance Marketing</li>
              <li>Field & Events Marketing</li>
              <li>Brand Marketing</li>
              <li>PR & Communications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Solutions by Industry →</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Technology</li>
              <li>eCommerce & Retail</li>
              <li>Insurance</li>
              <li>Media & Publishing</li>
            </ul>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources →</h3>
          <div className="mb-4">
            <h4 className="font-medium">Discover</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Events & Webinars</li>
              <li>Prompt Library</li>
              <li>The State of AI in Marketing Report</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Learn</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Courses</li>
              <li>The Jasper Community</li>
              <li>Jasper Foundations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Get Support</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Contact Support</li>
              <li>FAQs & Help Center</li>
              <li>Customer Success</li>
              <li>Hire a Professional Partner</li>
            </ul>
          </div>
        </div>

        
        <div>
          <h3 className="text-xl font-semibold mb-4">Company →</h3>
          <div className="mb-4">
            <h4 className="font-medium">Information</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>About Jasper</li>
              <li>Newsroom</li>
              <li>Careers at Jasper</li>
              <li>Legal Information</li>
              <li>Company Logos</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-medium">Become a Partner</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>Become a Solutions Partner</li>
              <li>Become a Tech Partner</li>
            </ul>
          </div>
          <ul className="text-sm text-gray-400 space-y-1 mb-4">
            <li className="font-medium">Pricing →</li>
            <li className="font-medium">Enterprise →</li>
          </ul>
          <div className="flex flex-col space-y-2">
            <button className="bg-[#FF4F3E] text-white py-2 px-4 rounded">Get A Demo</button>
            <button className="border border-white py-2 px-4 rounded">Start Free Trial</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;