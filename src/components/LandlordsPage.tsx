import React from 'react';
import { ArrowRight, CheckCircle, DollarSign, Users, Shield, Zap, Clock, TrendingUp } from 'lucide-react';

interface LandlordsPageProps {
  onNavigateToContact: () => void;
}

const LandlordsPage: React.FC<LandlordsPageProps> = ({ onNavigateToContact }) => {
  const benefits = [
    "Higher NOI than traditional leases",
    "No long-term tenants or turnover issues", 
    "Professional guests screened and monitored",
    "Dynamic pricing, automation & revenue tools",
    "Cleaning, communication, and setup fully handled"
  ];

  const idealFor = [
    "Have vacant or underperforming properties",
    "Want higher returns without managing day-to-day details",
    "Prefer working with a selective, systems-driven partner",
    "Care about preserving the long-term health of their asset"
  ];

  return (
    
   <div className="min-h-screen bg-white ">
      {/* Hero Section */}


      <section className="bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] py-24"  style={{
          backgroundImage: "url('https://ik.imagekit.io/nwfkojxnt/IMG-20250714-WA0011.jpeg?updatedAt=1753889047316')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>

      {/* <section className="bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] relative w-full h-screen overflow-hidden"  style={{
          backgroundImage: "url('https://ik.imagekit.io/nwfkojxnt/IMG-20250714-WA0011.jpeg?updatedAt=1753889047316')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}> */}

{/* 
<section className="relative h-screen w-full overflow-hidden">
  <img
    src="https://ik.imagekit.io/nwfkojxnt/IMG-20250714-WA0011.jpeg?updatedAt=1753889047316"
    alt="Hero Background"
    className="w-full h-full object-contain"
  />
</section> */}


        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Earn More.
                <span className="block text-5xl md:text-6xl font-bold text-white mb-6 leading-tight ">
                  Do Less.
                </span>
              </h1>
            </div>
              <div className="mt-6 bg-black bg-opacity-50 p-6 rounded-lg inline-block">
              <p className="text-2xl text-white mb-4 leading-relaxed">
                We turn your rental into a high-performing short-term property—without adding work to your plate.
              </p></div>
              <button
                onClick={onNavigateToContact}
                className="mt-6 group bg-[#C09D68] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A89F91] transition-all duration-300 flex items-center space-x-2"
              >
                <span>Apply for Pilot Program</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/40 p-6 rounded-xl">
                <DollarSign className="h-10 w-10 text-[#C09D68] mb-4" />
                <div className="text-3xl font-extrabold text-white">35%</div>
                <div className="text-lg font-medium text-white/100">Higher NOI</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl">
                <Users className="h-10 w-10 text-[#8DA9C4] mb-4" />
                <div className="text-3xl font-extrabold text-white">90%</div>
                <div className="text-lg font-medium text-white/100">Occupancy</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl">
                <Shield className="h-10 w-10 text-[#A89F91] mb-4" />
                <div className="text-3xl font-extrabold text-white">100%</div>
                <div className="text-lg font-medium text-white/100">Insured</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl">
                <Clock className="h-10 w-10 text-[#C09D68] mb-4" />
                <div className="text-3xl font-extrabold text-white">24/7</div>
                <div className="text-lg font-medium text-white/100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Better Way Section */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
                A Better Way for
                <span className="block text-[#C09D68]">Landlords</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Magnus & Co. partners with experienced landlords who want better returns without tenant management. Whether you're managing a single property or multiple doors, we offer a fully managed short-term rental solution—from pricing optimization to 24/7 guest support—so you earn more while staying hands-off.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-6">Why Landlords Choose Us</h3>
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

      {/* Who This Is For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
              Who This Is For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our solution is designed for landlords who value their time and want to maximize returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {idealFor.map((item, index) => (
              <div key={index} className="bg-[#F9F9F9] p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#C09D68] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-lg">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 60-Day Pilot Program */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our 60-Day Pilot Program
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Test our system with no long-term commitment. See the results, then decide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C09D68] text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Fit Call</h3>
              <p className="text-gray-300">We evaluate your unit's potential and STR viability.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8DA9C4] text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">We Launch Everything</h3>
              <p className="text-gray-300">From listings and tech to guest SOPs and pricing engines.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A89F91] text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Monitor Performance</h3>
              <p className="text-gray-300">At day 60, review your returns and decide whether to scale or walk away—no strings.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-[#C09D68] to-[#8DA9C4] p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to See What Your Property Can Earn?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Apply for our 60-day pilot program
              </p>
              <p className="text-white/80 mb-8">
                No cost. No long-term contracts. Just results.
              </p>
              <button
                onClick={onNavigateToContact}
                className="bg-white text-[#0B0B0B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandlordsPage;
