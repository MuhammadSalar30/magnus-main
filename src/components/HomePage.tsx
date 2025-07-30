import React from 'react';
import { ArrowRight, TrendingUp, Users, Award, Building, Home, DollarSign } from 'lucide-react';

interface HomePageProps {
  onNavigateToContact: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToContact }) => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] overflow-hidden py-24"
        style={{
          backgroundImage: "url('Magnus/IMG-20250714-WA0008.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#C09D68] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8DA9C4] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Premium STR
                <span className="block text-transparent bg-clip-text bg-[#C09D68] font-extrabold tracking-tight py-4">
                  Management
                </span>
              </h1>
         
              <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
  <p className="text-xl md:text-3xl text-white mx-auto leading-relaxed" style={{ maxWidth: '40rem' }}>
    Turn your properties into high-performing short-term rentals with our fully managed solution.
  </p>
</div>
              </div>
          

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={onNavigateToContact}
                className="group bg-[#C09D68] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A89F91] transition-all duration-300 flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#C09D68] hover:text-[#C09D68] transition-all duration-300">
                View Results
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-gray-800">
            <div className="bg-black/50 p-6 rounded-xl">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C09D68] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">35%</div>
                <div className="text-lg font-medium text-white/100">Average NOI Increase</div>
              </div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8DA9C4] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">90%</div>
                <div className="text-lg font-medium text-white/100">Average Occupancy</div>
              </div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A89F91] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">60</div>
                <div className="text-lg font-medium text-white/100">Day Pilot Program</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized solutions for property owners who want better returns without the hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Landlords Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#C09D68] to-[#A89F91] mb-6">
                <Home className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-4">
                For Landlords
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Turn your rental into a high-performing short-term property without adding work to your plate. Perfect for single properties or small portfolios.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#C09D68] rounded-full mr-3"></div>
                  Higher NOI than traditional leases
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#C09D68] rounded-full mr-3"></div>
                  No tenant management
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#C09D68] rounded-full mr-3"></div>
                  Fully managed solution
                </li>
              </ul>
              
              <button className="text-[#C09D68] font-semibold hover:text-[#A89F91] transition-colors">
                Learn More →
              </button>
            </div>

            {/* Multi-Family Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#8DA9C4] to-[#C09D68] mb-6">
                <Building className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-4">
                For Multi-Family
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Unlock NOI from vacant units with premium STR integration that respects your asset and elevates operations.
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#8DA9C4] rounded-full mr-3"></div>
                  20-35% NOI uplift per unit
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#8DA9C4] rounded-full mr-3"></div>
                  No disruption to tenants
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-[#8DA9C4] rounded-full mr-3"></div>
                  Integrates with existing ops
                </li>
              </ul>
              
              <button className="text-[#8DA9C4] font-semibold hover:text-[#C09D68] transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
              Our 60-Day Pilot Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No cost. No long-term contracts. Just results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C09D68] text-white rounded-full text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Schedule a Fit Call</h3>
              <p className="text-gray-600">We evaluate your property's potential and STR viability.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8DA9C4] text-white rounded-full text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">We Launch Everything</h3>
              <p className="text-gray-600">From listings and tech to guest SOPs and pricing engines.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#A89F91] text-white rounded-full text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-[#0B0B0B] mb-4">Monitor Performance</h3>
              <p className="text-gray-600">Review returns at day 60 and decide to scale or walk away.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={onNavigateToContact}
              className="bg-[#C09D68] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A89F91] transition-colors"
            >
              Apply for Pilot Program
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}

    </>
  );
};

export default HomePage;
