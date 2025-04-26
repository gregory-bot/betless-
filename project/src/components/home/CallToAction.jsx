import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Join our community of people committed to reducing betting addiction 
          and creating a healthier relationship with money and entertainment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/register" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Create Account
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;