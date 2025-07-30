import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B0B0B] via-gray-900 to-[#0B0B0B] py-24"  style={{
          backgroundImage: "url('Magnus/IMG-20250714-WA0003.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#766b5b] to-[#A89F91] rounded-2xl mb-8">
            <img src="Magnus/magnus.png" alt="Magnus & Co" className="h-8 w-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Maximize
            <span className="block text-transparent bg-clip-text bg-white">
              Your Property's Potential?
            </span>
          </h1>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg inline-block">
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our 60-day pilot program can transform your property into a high-performing short-term rental.
          </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#0B0B0B] mb-6">
                  Get Started Today
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to see what your property can earn? Our team is here to evaluate your property's STR potential and guide you through our proven process.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-[#F9F9F9] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C09D68] to-[#A89F91] rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B]">Email Us</h3>
                    <p className="text-gray-600">abbas@magnus-property.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-[#F9F9F9] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8DA9C4] to-[#C09D68] rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B]">Call Us</h3>
                    <p className="text-gray-600">+1 (832)-340-5243</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-[#F9F9F9] rounded-xl">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#A89F91] to-[#8DA9C4] rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B]">Visit Us</h3>
                    <p className="text-gray-600">9139 Wallisville Rd<br /> Houston, Texas, 77029</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-[#0B0B0B] text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C09D68] rounded-full"></div>
                    <span>Property evaluation within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C09D68] rounded-full"></div>
                    <span>Custom STR potential analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C09D68] rounded-full"></div>
                    <span>60-day pilot program details</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#C09D68] rounded-full"></div>
                    <span>No obligation consultation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-8">
                Apply for Our 60-Day Pilot Program
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C09D68] focus:border-transparent transition-all outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C09D68] focus:border-transparent transition-all outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell Us About Your Property *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C09D68] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Property type, location, current status, and your goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C09D68] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#A89F91] hover:to-[#8DA9C4] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Apply Now</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500">
                  We typically respond within 24 hours with your property evaluation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;