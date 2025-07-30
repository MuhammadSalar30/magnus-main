import React from 'react';
import { ArrowRight, CheckCircle, Building, TrendingUp, Shield, Users, Clock, BarChart3 } from 'lucide-react';

interface MultiFamilyPageProps {
  onNavigateToContact: () => void;
}

const MultiFamilyPage: React.FC<MultiFamilyPageProps> = ({ onNavigateToContact }) => {
  const benefits = [
    "Increase NOI within 60 days using idle units",
    "No displacement, no disruption to tenants",
    "Professionally screened guests, insured stays",
    "24/7 guest support and resolution team",
    "Syncs with maintenance and leasing teams",
    "Live dashboards and full transparency",
    "Works with Class A, B, and C assets"
  ];

  const integration = [
    "We coordinate with ownership, not just leasing",
    "Clean integration with existing SOPs",
    "Guest experience, tech stack, and enforcement fully handled",
    "Optional white-label or asset-lite model",
    "Scale only if the numbers justify it"
  ];

  const results = [
    {
      metric: "20–35%",
      description: "NOI uplift per unit compared to long-term leases"
    },
    {
      metric: "80–90%",
      description: "Average occupancy across stabilized STR units"
    },
    {
      metric: "100%",
      description: "Guest compliance via automated rules and in-stay monitoring"
    },
    {
      metric: "24–48hrs",
      description: "Pre-staged units go live within 24–48 hours of vacancy"
    },
    {
      metric: "0%",
      description: "Onsite disruption reported across all managed properties"
    },
    {
      metric: "2%",
      description: "Incident rate across hundreds of stays—fully insured"
    }
  ];

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] py-24"  style={{
          backgroundImage: "url('Magnus/IMG-20250714-WA0009.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock NOI from Your
                <span className="block text-transparent bg-clip-text bg-[#C09D68]">
                  Vacant Units
                </span>
              </h1>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
              <p className="text-2xl text-white/100 mb-8 leading-relaxed">
                Premium STR integration that respects your asset, elevates your operations, and increases revenue—with no disruption.
              </p>
              </div>
              <button
                onClick={onNavigateToContact}
                className="mt-6 group bg-[#C09D68] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A89F91] transition-all duration-300 flex items-center space-x-2"
              >
                <span>Let's Talk Potential</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/40 p-6 rounded-xl">
                <TrendingUp className="h-10 w-10 text-[#C09D68] mb-4" />
                <div className="text-3xl font-extrabold text-white">35%</div>
                <div className="text-lg font-medium text-white/100">NOI Uplift</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl">
                <Building className="h-10 w-10 text-[#8DA9C4] mb-4" />
                <div className="text-3xl font-extrabold text-white">90%</div>
                <div className="text-lg font-medium text-white/100">Occupancy</div>
              </div>
               <div className="bg-black/40 p-6 rounded-xl">
                <Shield className="h-10 w-10 text-[#A89F91] mb-4" />
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="text-lg font-medium text-white/100">Compliance</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl">
                <Clock className="h-10 w-10 text-[#C09D68] mb-4" />
                <div className="text-3xl font-extrabold text-white">48hrs</div>
                <div className="text-lg font-medium text-white/100">Go Live</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multifamily STR Done Right */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
                Multifamily STR,
                <span className="block text-[#C09D68]">Done Right</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Magnus & Co. partners with multifamily owners and operators to turn idle units into fully managed short-term rentals. We don't lease units—we integrate into your workflow with a system that protects your asset, supports your team, and drives NOI.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-6">Why Owners Work With Us</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#C09D68] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Fit Into Your Ops */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
              How We Fit Into Your Ops
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seamless integration that enhances your existing operations without disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integration.map((item, index) => (
              <div key={index} className="bg-[#F9F9F9] p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#8DA9C4] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results in Multifamily STR Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              All metrics are tracked, summarized, and reported directly to your asset or operations team during the pilot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
                <div className="text-4xl font-bold text-[#C09D68] mb-4">{result.metric}</div>
                <p className="text-gray-300">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 60-Day Pilot Program */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
              Our 60-Day Pilot Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic implementation designed for multifamily operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C09D68] text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Strategic Unit Selection</h3>
              <p className="text-gray-600">We align with ownership to select units that make operational and financial sense.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8DA9C4] text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Full-Service Launch</h3>
              <p className="text-gray-600">We onboard within 15 days: listings, pricing, SOPs, guest support, cleaning, and tech.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A89F91] text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Review Results</h3>
              <p className="text-gray-600">Clear financial reports delivered in a format your asset management team can act on.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#C09D68] to-[#8DA9C4] p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's Talk Potential
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                See What Your Underused Space Could Earn
              </p>
              <button
                onClick={onNavigateToContact}
                className="bg-white text-[#0B0B0B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Strategic Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiFamilyPage;