import React from 'react';
import { BarChart2, MapPin, Users, AlertTriangle } from 'lucide-react';

function DataScience() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Science for Impact</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            We use data science to understand betting patterns, identify at-risk individuals, 
            and create targeted interventions that work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-blue-800 p-6 rounded-lg transition-transform hover:scale-105">
            <BarChart2 className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Behavioral Analysis</h3>
            <p className="text-blue-200">
              Analyze large-scale betting behavior patterns to identify addiction trends and triggers.
            </p>
          </div>
          
          <div className="bg-blue-800 p-6 rounded-lg transition-transform hover:scale-105">
            <MapPin className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Geographic Mapping</h3>
            <p className="text-blue-200">
              Create heatmaps of most affected areas to direct resources where they're needed most.
            </p>
          </div>
          
          <div className="bg-blue-800 p-6 rounded-lg transition-transform hover:scale-105">
            <Users className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Demographic Insights</h3>
            <p className="text-blue-200">
              Identify at-risk age groups and demographics to create targeted prevention programs.
            </p>
          </div>
          
          <div className="bg-blue-800 p-6 rounded-lg transition-transform hover:scale-105">
            <AlertTriangle className="h-12 w-12 text-blue-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Early Warning System</h3>
            <p className="text-blue-200">
              Develop predictive models to identify individuals at risk before addiction sets in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataScience;