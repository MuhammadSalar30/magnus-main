import React from 'react';
import { CheckCircle, Users, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    "Strategic thinking with creative execution",
    "Data-driven insights and decision making",
    "Collaborative partnership approach",
    "Sustainable and scalable solutions"
  ];

  const achievements = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Served",
      description: "Trusted by industry leaders"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries",
      description: "Global reach and impact"
    },
    {
      icon: Award,
      number: "50+",
      label: "Awards Won",
      description: "Industry recognition"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] mb-6">
                Crafting Excellence 
                <span className="block text-[#C09D68]">Since 2009</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Magnus & Co stands at the intersection of strategy and creativity, delivering transformative solutions that elevate businesses to new heights of success.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our multidisciplinary team combines deep industry expertise with innovative thinking to solve complex challenges and unlock new opportunities for growth.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-6">Our Core Values</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-[#C09D68] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#F9F9F9] to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-8 text-center">
                Proven Track Record
              </h3>
              
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C09D68] to-[#A89F91] rounded-lg flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl font-bold text-[#0B0B0B]">
                        {achievement.number}
                      </div>
                      <div className="text-lg font-semibold text-gray-700">
                        {achievement.label}
                      </div>
                      <div className="text-sm text-gray-500">
                        {achievement.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-[#0B0B0B] text-white p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-4">Ready to Transform Your Business?</h4>
                <p className="text-gray-300 mb-6">
                  Let's discuss how we can help you achieve extraordinary results.
                </p>
                <button className="bg-[#C09D68] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A89F91] transition-colors">
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;