import React from 'react';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

interface HeroProps {
  onNavigateToContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] overflow-hidden">
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
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C09D68] to-[#8DA9C4]">
                Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic consulting and creative solutions that transform ambitious visions into extraordinary results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={onNavigateToContact}
              className="group bg-[#C09D68] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A89F91] transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white border border-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:border-[#C09D68] hover:text-[#C09D68] transition-all duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 mt-16 border-t border-gray-800">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C09D68] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">250+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#8DA9C4] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#A89F91] rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-gray-400">Years Experience</div>
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
  );
};

export default Hero;