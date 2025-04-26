import React from 'react';

function Problem() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Betting Crisis in Kenya</h2>
            <p className="text-lg text-gray-700 mb-6">
              In Kenya and many African countries, betting has emerged as one of the most addictive and problematic activities among youth. The consequences are devastating:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 mr-3 mt-0.5">1</span>
                <span className="text-gray-700">Increased suicide rates and depression cases directly linked to betting losses</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 mr-3 mt-0.5">2</span>
                <span className="text-gray-700">Financial ruin for individuals and families due to compulsive betting</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 mr-3 mt-0.5">3</span>
                <span className="text-gray-700">Widespread discussion on radio stations and social media platforms highlighting the epidemic</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-100 text-red-800 mr-3 mt-0.5">4</span>
                <span className="text-gray-700">Traditional interventions failing to address the growing problem</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6055177/pexels-photo-6055177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Person looking distressed at phone" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-lg font-medium">
                  "The betting crisis has reached epidemic proportions among Kenyan youth."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;