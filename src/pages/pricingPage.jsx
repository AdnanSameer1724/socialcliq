import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function PricingPage() {
    const [openIndex, setOpenIndex] = useState(0);

const faqs = [
  {
    question: "How much does Jasper cost?",
    answer: (
      <div className="space-y-3">
        <p>
          Jasper’s pricing is transparent and meets your business needs as you grow. There are three plans to choose from:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Business:</strong> Custom pricing tailored for your company’s needs. Includes personalized AI features, security, team training & support.
          </li>
          <li>
            <strong>Pro:</strong> $59/seat/month billed yearly or $69 billed monthly. Includes advanced AI features for brands & collaboration.
          </li>
          <li>
            <strong>Creator:</strong> $39/mo billed yearly or $49/mo monthly. Includes powerful AI features to create & improve content.
          </li>
        </ul>
        <p>
          The Pro plan is the most popular for teams. Business is for tailored enterprise needs. Creator is great for individuals.
        </p>
        <p>
          If you prefer to explore Jasper on your own, {" "}
          <a href="#" className="text-[#fa4128] underline">start a free trial</a> or {" "}
          <a href="#" className="text-[#fa4128] underline">talk with sales</a>.
        </p>
      </div>
    ),
  },
  {
    question: "What is Jasper?",
    answer: <p>Jasper is an AI content generation platform designed for marketing teams and businesses.</p>,
  },
  {
    question: "Why should I choose Jasper?",
    answer: <p>It helps you scale content creation with high quality, consistency, and speed using AI.</p>,
  },
];
    const FeatureItem = ({ children }) => (
        <li className="flex items-start gap-2">
            <svg className="w-4 h-4 text-[#fa4128] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-lg text-black">{children}</span>
        </li>
    );
  return (
    <>
      <Header />

        <section
            className="pt-40 px-4 md:px-10 text-center
                bg-[length:45px_30px]
                bg-[linear-gradient(to_right,_white_2px,_transparent_1px),linear-gradient(to_bottom,_white_2px,_transparent_2px)]"
            style={{ backgroundColor: '#e5e7eb' }}
            >
            <h1 className="text-7xl font-serif font-semibold text-[#0B0C2A] leading-tight mb-6">
               Flexible Pricing <br /> For Every Team
            </h1>
            <p className="text-lg font-normal text-[#0B0C2A] pb-20">
                Choose a plan that fits your needs,<br /> from solo marketers to enterprise teams.
            </p>
            <h1 className="text-center font-semibold font-serif text-6xl text-[#fa4128] pb-10">Pricing</h1>
        </section>
        
        
        <section 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 pb-16 bg-gray-100
            bg-[length:45px_30px]
            bg-[linear-gradient(to_right,_white_2px,_transparent_1px),linear-gradient(to_bottom,_white_2px,_transparent_2px)]"
            style={{ backgroundColor: '#e5e7eb' }}
        >
            <div className="bg-white p-6">
                <div className="flex justify-between items-center">
                <h2 className="text-3xl font-serif text-black">Creator</h2>
                <p className="text-[#fa4128] text-3xl font-bold">$29<span className="text-lg font-normal text-black">/month</span></p>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <p className="text-lg text-black mb-8">Perfect for solo marketers and small businesses starting out.</p>
                <button className="border border-black text-black px-4 py-2 mb-8 hover:bg-gray-100 transition">Start Free 7-Day Trial</button>
                <p className="text-lg text-black mb-2">Plan Includes:</p>
                <ul className="text-lg text-black space-y-5">
                <FeatureItem> Access to 100M+ ad database</FeatureItem>
                <FeatureItem> Basic AI creative tools</FeatureItem>
                <FeatureItem> Meta integration</FeatureItem>
                <FeatureItem> Email support</FeatureItem>
                </ul>
            </div>

            <div className="relative bg-white border border-[#fa4128] p-6 shadow-md">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fa4128] text-white text-lg font-semibold px-3 pt-1 rounded">
                    Most Popular
                </div>

                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-serif text-black">Pro</h2>
                    <p className="text-[#fa4128] text-3xl font-bold">$99<span className="text-lg font-normal text-black">/month</span></p>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <p className="text-lg text-black mb-8">Ideal for growing teams needing advanced insights and tools.</p>
                <button className="border border-black text-black px-4 py-2 mb-8 hover:bg-gray-100 transition">Start Free 7-Day Trial</button>
                <p className="text-lg text-black mb-2">Plan Includes:</p>
                <ul className="text-lg text-black space-y-5">
                <FeatureItem> Access to 1B+ ad database</FeatureItem>
                <FeatureItem> Advanced AI creative tools</FeatureItem>
                <FeatureItem> Meta & Google integration</FeatureItem>
                <FeatureItem> Priority support</FeatureItem>
                <FeatureItem> Performance analytics</FeatureItem>
                </ul>
            </div>

            <div className="bg-white p-6 shadow-sm">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-serif text-black">Enterprise</h2>
                    <p className="text-[#fa4128] text-xl font-bold">Custom pricing</p>
                </div>
                <hr className="border-t border-gray-300 my-4" />
                <p className="text-lg text-black mb-8">Tailored for large teams with custom needs and dedicated support.</p>
                <button className="bg-[#fa4128] text-white px-4 py-2 mb-8 hover:bg-[#cc361f] transition">Contact Sales</button>
                <p className="text-lg text-black mb-2">Plan Includes:</p>
                <ul className="text-lg text-black space-y-5">
                    <FeatureItem> Full ad database access</FeatureItem>
                    <FeatureItem> Custom AI workflows</FeatureItem>
                    <FeatureItem> Multi-platform integration</FeatureItem>
                    <FeatureItem> Dedicated account manager</FeatureItem>
                    <FeatureItem> Advanced analytics & reporting</FeatureItem>
                </ul>
            </div>
        </section>

        <section className="bg-white py-10 border-t">
            
  <div className="ml-auto w-full md:w-1/2 overflow-x-auto">
    <div className="min-w-[600px] grid grid-cols-3 text-center">
      <div className="py-4 border-r">
        <h2 className="text-2xl font-serif font-semibold text-[#0B0C2A]">Creator</h2>
      </div>
      <div className="py-4 border-r">
        <h2 className="text-2xl font-serif font-semibold text-[#0B0C2A]">Pro</h2>
      </div>
      <div className="py-4">
        <h2 className="text-2xl font-serif font-semibold text-[#0B0C2A]">Business</h2>
      </div>

      <div className="py-6 border-t border-r">
        <button className="border border-[#0B0C2A] px-4 py-2 text-[#0B0C2A] font-medium hover:bg-gray-100 transition">
          Start Free Trial
        </button>
      </div>
      <div className="py-6 border-t border-r">
        <button className="border border-[#0B0C2A] px-4 py-2 text-[#0B0C2A] font-medium hover:bg-gray-100 transition">
          Start Free Trial
        </button>
      </div>
      <div className="py-6 border-t">
        <button className="bg-[#fa4128] text-white px-4 py-2 font-medium hover:bg-[#cc361f] transition">
          Contact Sales
        </button>
      </div>
    </div>
  </div>
    <div className="ml-auto w-full">
        <div className="grid grid-cols-6 border-t border-gray-300 bg-[#f6fff6] min-h-[120px]">
        
            <div className="col-span-3 py-6 px-12 text-left text-4xl font-serif text-[#0B0C2A]">
            Jasper IQ
            </div>

            
            <div className="border-gray-300"></div>
            <div className="border-l border-gray-300"></div>
            <div className="border-l border-gray-300"></div>
        </div>                
  
<div className="ml-auto w-full">
  
  {[
    {
      title: "Audiences",
      desc: "Transform static personas into dynamic, actionable AI inputs, to define, manage, and apply audience insights across every asset.",
      values: ["1 audience", "3 audiences", "Unlimited"],
    },
    {
      title: "Brand Voice",
      desc: "Let AI analyze your content's tone of voice, then set tone and formatting rules so Jasper's writing always sounds like you.",
      values: ["2 voices", "3 voices", "Unlimited voices"],
      highlight: true,
    },
    {
      title: "Marketing Best Practices",
      desc: "Jasper’s proprietary marketing knowledge layer deeply understands marketing, and sits atop the general purpose LLM.",
      values: ["", "✔", "✔"],
    },
    {
      title: "Multi-Modal Company Knowledge",
      desc: "Ground your outputs in institutional knowledge by uploading video, audio, data, and more for Jasper to ingest.",
      values: [
        "5 multi-modal knowledge assets",
        "10 Assets",
        "Unlimited multi-modal knowledge asset",
      ],
      highlight: true,
    },
    {
      title: "Style Guide",
      desc: "Maintain a visual style guide that ensures you're always on-brand, with updates directly visible in the editor.",
      values: ["-", "-", "✔"],
    },
    {
      title: "Visual Guidelines",
      desc: "Eliminate design bottlenecks by ensuring that high-quality, on-brand content reaches the market faster.",
      values: ["1", "2", "Unlimited"],
      highlight: true,
    },
  ].map((row, index) => (
    <div
      key={index}
      className={`grid grid-cols-6 border-t border-gray-200 ${
        row.highlight ? "bg-[#e8ffe8]" : "bg-[#f6fff6]"
      }`}
    >
      
      <div className="col-span-3 px-12 py-6 text-left">
        <div className="text-lg font-semibold text-[#0B0C2A]">{row.title}</div>
        <p className="text-sm text-[#0B0C2A] mt-1">{row.desc}</p>
      </div>

      
      {row.values.map((val, i) => (
        <div
          key={i}
          className="flex items-center justify-center px-4 py-6 text-[#0B0C2A] text-sm border-l border-gray-200"
        >
          {val === "✔" ? (
            <svg
              className="w-4 h-4 text-[#0B0C2A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            val
          )}
        </div>
      ))}
    </div>
  ))}
</div>
<div className="grid grid-cols-6 border-t border-gray-300 bg-blue-100 min-h-[120px]">
            <div className="col-span-3 py-6 px-12 text-left text-4xl font-serif text-[#0B0C2A]">
            Jasper IQ
            </div>

            <div className="border-gray-300"></div>
            <div className="border-l border-gray-300"></div>
            <div className="border-l border-gray-300"></div>
        </div>
</div>
<div className="ml-auto w-full">
  
  {[
    {
      title: "LLM Routing & Maintenance",
      desc: "Jasper's AI Engine leverages several large language models, fine tuned for marketing-specific needs, so you get the highest quality outputs and superior uptime.",
      values: ["✔", "✔", "✔"],
    },
    {
      title: "30+ Languages",
      desc: "Easily create or repurpose content in over 30 languages.",
      values: ["✔", "✔", "✔"],
      highlight: true,
    },
  ].map((row, index) => (
    <div
      key={index}
      className={`grid grid-cols-6 border-t border-gray-200 ${
        row.highlight ? "bg-blue-100" : "bg-blue-200"
      }`}
    >
      
      <div className="col-span-3 px-12 py-6 text-left">
        <div className="text-lg font-semibold text-[#0B0C2A]">{row.title}</div>
        <p className="text-sm text-[#0B0C2A] mt-1">{row.desc}</p>
      </div>

      
      {row.values.map((val, i) => (
        <div
          key={i}
          className="flex items-center justify-center px-4 py-6 text-[#0B0C2A] text-sm border-l border-gray-200"
        >
          {val === "✔" ? (
            <svg
              className="w-4 h-4 text-[#0B0C2A]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            val
          )}
        </div>
      ))}
    </div>
  ))}
</div>

</section>

<section className="flex flex-col md:flex-row bg-white border-t border-gray-300 py-16 px-6 md:px-20">
  
  <div className="w-[20%] mb-10 md:mb-0">
    <div className="text-5xl font-serif text-[#fa4128] font-bold mb-4">FAQs</div>
    <h2 className="text-3xl font-serif font-semibold text-[#0B0C2A]">Jasper Basics</h2>
  </div>

  
  <div className="w-[80%]">
    {faqs.map((faq, index) => (
      <div key={index} className="border border-[#fa4128]">
        <button
          className="w-full bg-[#ffeae6] flex justify-between items-center p-5 text-left text-2xl font-serif text-[#0B0C2A] font-semibold"
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        >
          {faq.question}
          {openIndex === index ? (
            <ChevronUp className="w-5 h-5 text-[#fa4128]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#fa4128]" />
          )}
        </button>
        {openIndex === index && (
          <div className="bg-[#ffeae6] text-[#0B0C2A] px-6 pb-6 text-base leading-relaxed">
            {faq.answer}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

<Footer />
    </>
  );
}