import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function HomePage() {
    const roles = [
    { name: "Advanced Ad Spying", image: "/assets/images/performance.png", bgColor: "bg-green-400" },
    { name: "AI-Powered Creation", image: "/assets/images/pr.png", bgColor: "bg-blue-400" },
    { name: "Meta Integration", image: "/assets/images/product.png", bgColor: "bg-yellow-400" },
    { name: "Performance Analytics", image: "/assets/images/brand.png", bgColor: "bg-pink-400"  },
    { name: "Global Database", image: "/assets/images/content.png", bgColor: "bg-red-400" },
    { name: "Real-time Updates", image: "/assets/images/field.png", bgColor: "bg-purple-400" },
  ];

  const [selectedRole, setSelectedRole] = useState(roles[0]);

  return (
    <div className="bg-[#f1f1f1] min-h-screen pt-20">
        <Header />
        <section className="py-16 px-6 mb-10 md:mb-12 lg:mb-1">
            <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center bg-white shadow-sm px-1 py-2 rounded-md mb-10">
                <p className="text-sm bg-green-100 text-green-700 mr-2">New!</p>
                <p className="text-sm text-gray-900">
                    Invitation for beta at  <strong>80% off</strong>
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 text-gray-800" viewBox="0 0 17 18" fill="none">
                    <path d="M8.56911 17.7295L6.85528 15.9622L12.4114 10.4639H0L0 8.02322H12.3561L6.82765 2.52487L8.56911 0.729492L17 9.25754L8.56911 17.7295Z" fill="currentColor" />
                </svg>
                </div>

                <h1 className="text-9xl md:text-7xl font-bold font-serif text-gray-900 mb-6">
                  Spy. Create.
                  <br />
                  Dominate
                </h1>

                <p className="text-lg md:text-xl font-medium text-black mb-6 max-w-2xl mx-[20%]">
                  Uncover your competitors' winning ad strategies, create stunning campaigns with AI, and launch directly to Meta ads—all from one powerful platform.
                </p>

                <div className="flex justify-center gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 border border-gray-900 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    Start Spying Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-[#fa4128] text-white font-semibold hover:bg-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6 4l12 6-12 6V4z" />
                    </svg>
                    Watch Demo
                  </a>
                </div>

            </div>
        </section>

        <section className="relative bg-[#f1f1f1] overflow-hidden px-6">

            <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between z-10 gap-10 lg:gap-20">
                
                
                <div className="max-w-lg bg-white shadow-sm rounded-xl p-6 md:p-8 border border-[#E1E6F9]">
                <p className="text-xl md:text-2xl font-semibold text-[#0B0C2A] leading-snug">
                    <span className="inline-block align-middle mr-2 text-red-500 text-3xl font-bold">j</span>
                    Scale a launch campaign into 8 markets, within days
                </p>
                </div>

                
                <div className="relative w-full max-w-md lg:max-w-xl">
                <img
                    src="/assets/images/Image1.png"
                    alt="Smiling man"
                    className="w-full rounded-xl z-10 relative"
                />
                </div>
            </div>
        </section>

        <section className="py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-xl md:text-2xl font-serif font-semibold text-[#0B0C2A] mb-10">
                World-class marketing teams trust Jasper
                </h2>

                <div className="relative w-full overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {Array(2)
                    .fill([
                        "Kelly",
                        "L'ORÉAL",
                        "MARS",
                        "NOOM",
                        "Sanofi",
                        "HubSpot",
                        "Zapier",
                        "Spotify",
                        "Adobe",
                    ])
                    .flat()
                    .map((brand, index) => (
                        <span
                        key={index}
                        className="mx-8 text-3xl font-serif text-gray-900"
                        >
                        {brand}
                        </span>
                    ))}
                </div>
                </div>
            </div>
        </section>

        <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <p className="inline-block bg-[#F8EAE5] text-[#0B0C2A] font-semibold text-sm px-3 py-1 rounded mb-6 tracking-wide">
                The Jasper Platform
                </p>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0B0C2A] leading-tight mb-6">
                The agentic platform that transforms marketing
                </h2>

                <p className="text-base md:text-lg text-[#0B0C2A] font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
                Jasper is the industry's first intelligent, intuitive workspace for marketers. 
                Powered by intelligent Agents, Jasper helps redefine marketing processes while 
                providing a rich context layer, ensuring content is resonant and compliant – even at scale.
                </p>

                <a
                href="#"
                className="inline-block bg-[#0B0C2A] text-white px-6 py-3 text-lg font-semibold hover:bg-[#1c1d4b] transition rounded"
                >
                Explore The Platform
                </a>
            </div>
        </section>

<section className="pb-20 px-6">
  <div className="max-w-8xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        title: "Telescope",
        sub: "Search our massive database of ads using advanced filters. Find what's working in your niche.",
        bg: "bg-green-200",
        hoverBg: "hover:bg-green-400",
        image: "/assets/images/ads-tracked.png",
        href: "#",
      },
      {
        title: "Library",
        sub: "Trusted by marketers, agencies, and brands",
        bg: "bg-red-200",
        hoverBg: "hover:bg-red-400",
        image: "/assets/images/active-users.png",
        href: "#",
      },
      {
        title: "Studio",
        sub: "Generated through our smart creative tools",
        bg: "bg-blue-200",
        hoverBg: "hover:bg-blue-400",
        image: "assets/images/ads-created.png",
        href: "#",
      },
      {
        title: "Bakery",
        sub: "Proven ROI across diverse campaigns",
        bg: "bg-yellow-200",
        hoverBg: "hover:bg-yellow-400",
        image: "/assets/images/success-rate.png",
        href: "#",
      },
    ].map((item, i) => (
      <a
        key={i}
        href={item.href}
        className={`${item.bg} ${item.hoverBg} transition duration-200 p-6 shadow-sm flex flex-col justify-between min-h-[350px] rounded`}
      >
        <div>
          <h3 className="text-3xl font-serif font-bold text-[#0B0C2A] mb-1">
            {item.title}
            <span className="text-[#0B0C2A] ml-2 text-lg font-medium mb-4">
              {item.desc}
            </span>
          </h3>
        </div>

        <div className="flex justify-center items-center mb-6">
          <img src={item.image} alt={item.desc} className="h-50 w-50 object-contain" />
        </div>

        <div className="flex justify-between items-center text-[#0B0C2A] font-medium opacity-80">
          <span>{item.sub}</span>
          <span>→</span>
        </div>
      </a>
    ))}
  </div>
</section>

        <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C2A] mb-6">
            Everything You Need <br />To Dominate Ads
          </h2>

          <p className="text-xl md:text-2xl text-[#0B0C2A] font-medium mb-2">
            From competitive intelligence to campaign creation and deployment, we've got every <br /> aspect of your ad strategy covered.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {roles.map((role) => (
              <button
                key={role.name}
                onClick={() => setSelectedRole(role)}
                className={`px-4 py-2 rounded-full transition font-medium ${
                  selectedRole.name === role.name
                    ? `${role.bgColor} text-white`
                    : "bg-gray-100 text-[#0B0C2A] hover:bg-gray-200"
                }`}
              >
                {role.name}
              </button>
            ))}
          </div>

          <div className="w-full px-4 md:px-6">
            <img
              src={selectedRole.image}
              alt={selectedRole.name}
              className="w-full max-w-6xl mx-auto rounded-xl transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
  <div className="max-w-4xl mx-auto text-center">
    
    <p className="inline-block bg-yellow-100 text-[#0B0C2A] font-mono font-semibold text-sm px-3 py-1 rounded mb-4 tracking-wide">
      Customer Stories
    </p>

    
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C2A] leading-tight mb-8">
      Proven strategies,<br />real results
    </h2>

    
    <a
      href="#"
      className="inline-block bg-[#0B0C2A] text-white px-6 py-3 text-lg font-semibold hover:bg-[#1c1d4b] transition rounded"
    >
      Explore Customer Stories
    </a>
  </div>

   <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

    
    <div className="bg-green-100 p-6 flex flex-col justify-between">
      <h3 className="text-4xl font-serif font-bold text-[#0B0C2A] mb-2">10,000+</h3>
      <p className="text-sm text-[#0B0C2A]">hours saved annually</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">Cushman & Wakefield</p>
    </div>

    <div className="bg-blue-100 p-6">
      <h3 className="text-2xl font-serif font-bold text-[#0B0C2A] mb-2">Compliant,</h3>
      <p className="text-sm text-[#0B0C2A]">high-quality, and localized marketing content at scale</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">Opella</p>
    </div>

    <div className="bg-white p-6 col-span-full lg:col-span-2">
      <div className="flex gap-4 items-start mb-2">
        <img src="/assets/images/peter.png" alt="Peter So" className="w-40 h-40 object-cover" />
        <div>
          <p className="text-sm font-semibold text-[#0B0C2A]">Peter So</p>
          <p className="text-xs text-[#0B0C2A] mb-2">VP of Digital Innovation</p>
          <p className="text-[#0B0C2A]">
            “Thrilled to be on Jasper’s Customer Advisory Board. It’s not just about efficiency gains...”
          </p>
          <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">PGIM</p>
        </div>
      </div>
    </div>

    
    <div className="bg-white p-6 col-span-full lg:col-span-2">
      <div className="flex gap-4 items-start mb-2">
        <img src="/assets/images/elaina.png" alt="Elaina" className="w-40 h-40 object-cover" />
        <div>
          <p className="text-sm font-semibold text-[#0B0C2A]">Elaina Shekhter</p>
          <p className="text-xs text-[#0B0C2A] mb-2">Chief Marketing & Strategy Officer</p>
          <p className="text-sm text-[#0B0C2A]">
            “Our marketing teams have cracked the code of using Jasper as an agentic partner in our day-to-day lives...”
          </p>
          <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">EPAM</p>
        </div>
      </div>
    </div>

    <div className="bg-pink-100 p-6">
      <h3 className="text-4xl font-serif font-bold text-[#0B0C2A] mb-2">60%</h3>
      <p className="text-sm text-[#0B0C2A]">of SEO now automated with Jasper</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">Anthropologie</p>
    </div>

    <div className="bg-yellow-100 p-6 flex flex-col justify-between">
      <h3 className="text-4xl font-serif font-bold text-[#0B0C2A] mb-2">7,500</h3>
      <p className="text-sm text-[#0B0C2A]">product descriptions written by Jasper in 24 hours</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">Adidas</p>
    </div>

    
    <div className="bg-blue-100 p-6">
      <h3 className="text-3xl font-serif font-bold text-[#0B0C2A] mb-2">3x</h3>
      <p className="text-sm text-[#0B0C2A]">content production</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">CDW</p>
    </div>

    <div className="bg-green-100 p-6">
      <h3 className="text-2xl font-serif font-bold text-[#0B0C2A] mb-2">Time-to-market</h3>
      <p className="text-sm text-[#0B0C2A]">Faster end-to-end campaigns</p>
      <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">ULTA</p>
    </div>

    <div className="bg-white p-6 col-span-full lg:col-span-2">
      <div className="flex gap-4 items-start mb-2">
        <img src="/assets/images/bryan.png" alt="Bryan" className="w-40 h-40 object-cover" />
        <div>
          <p className="text-sm font-semibold text-[#0B0C2A]">Bryan Olshock</p>
          <p className="text-sm text-[#0B0C2A]">
            “Jasper has the potential to fundamentally transform the way marketing teams operate by boosting efficiency...”
          </p>
          <p className="text-sm font-semibold text-right mt-4 text-[#0B0C2A]">GE Health</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-4">
  <div className="text-center mb-12">
    <p className="text-sm font-mono text-green-600 uppercase tracking-wide">Resources</p>
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B0C2A] mt-2">Your AI success starts here</h2>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    <div className="border">
      <img src="/assets/images/community.png" alt="Connect with community" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Connect with community</h3>
        <p className="text-sm text-gray-700 mt-1">
          Self-paced guides, courses, events, and resources, plus channels to connect with fellow marketers.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>

    <div className="border">
      <img src="/assets/images/foundations.png" alt="Watch Jasper Foundations" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Watch Jasper Foundations</h3>
        <p className="text-sm text-gray-700 mt-1">
          The foundational knowledge and skills to leverage Jasper for any type of marketing project.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>

    <div className="border">
      <img src="/assets/images/knowledge.png" alt="Search Knowledge Center" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Search Knowledge Center</h3>
        <p className="text-sm text-gray-700 mt-1">
          Learn how to use generative AI for your specific marketing role and use case.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>

    
    <div className="border">
      <img src="/assets/images/likes.png" alt="Row 2 Card 1" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Second Row Card 1</h3>
        <p className="text-sm text-gray-700 mt-1">
          Description for the second row card 1.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>

    <div className="border">
      <img src="/assets/images/support.png" alt="Row 2 Card 2" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Second Row Card 2</h3>
        <p className="text-sm text-gray-700 mt-1">
          Description for the second row card 2.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>

    <div className="border">
      <img src="/assets/images/documents.png" alt="Row 2 Card 3" className="w-full h-70 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-serif font-semibold text-[#0B0C2A]">Second Row Card 3</h3>
        <p className="text-sm text-gray-700 mt-1">
          Description for the second row card 3.
        </p>
        <a href="#" className="text-red-500 text-sm font-semibold mt-2 inline-block">
          Learn More →
        </a>
      </div>
    </div>
  </div>
</section>

            <Footer />
    </div>
  );
}