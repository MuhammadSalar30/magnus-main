import React from 'react';
import { Briefcase, Target, Lightbulb, BarChart3, Palette, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Transform your business with data-driven strategies and expert guidance tailored to your unique challenges.",
      color: "from-[#C09D68] to-[#A89F91]"
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Elevate your brand with sophisticated design and creative solutions that captivate and convert.",
      color: "from-[#8DA9C4] to-[#C09D68]"
    },
    {
      icon: BarChart3,
      title: "Growth Optimization",
      description: "Accelerate your growth with proven methodologies and performance-driven optimization strategies.",
      color: "from-[#A89F91] to-[#8DA9C4]"
    },
    {
      icon: Lightbulb,
      title: "Innovation Workshops",
      description: "Foster innovation and breakthrough thinking with collaborative workshops designed for results.",
      color: "from-[#C09D68] to-[#8DA9C4]"
    },
    {
      icon: Briefcase,
      title: "Executive Coaching",
      description: "Develop leadership excellence and unlock potential with personalized executive coaching programs.",
      color: "from-[#8DA9C4] to-[#A89F91]"
    },
    {
      icon: Cog,
      title: "Process Excellence",
      description: "Streamline operations and enhance efficiency with systematic process improvement initiatives.",
      color: "from-[#A89F91] to-[#C09D68]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
            Exceptional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive solutions that drive sustainable growth and create lasting impact for your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-4 group-hover:text-[#C09D68] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-[#C09D68] font-semibold hover:text-[#A89F91] transition-colors flex items-center space-x-2 group">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;