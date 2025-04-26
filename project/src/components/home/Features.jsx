import React from 'react';
import { Brain, LineChart, Coins, Heart, Award } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

function Features() {
  const features = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: 'AI-Based Behavioral Monitoring',
      description: 'Our AI monitors transaction patterns and online behavior to detect risky betting habits, offering real-time support and wellness check-ins.',
    },
    {
      icon: <LineChart className="h-12 w-12 text-green-600" />,
      title: 'Gamified Financial Awareness',
      description: 'Visualize how much you would have saved instead of betting, with simulations showing growth of alternative investments.',
    },
    {
      icon: <Coins className="h-12 w-12 text-amber-600" />,
      title: 'Blockchain for Accountability',
      description: 'A transparent, decentralized ledger showing betting trends to educate the public on real outcomes of betting addiction.',
    },
    {
      icon: <Heart className="h-12 w-12 text-red-600" />,
      title: 'Mental Health Integration',
      description: 'Direct connections to mental health resources and AI chatbots offering real-time support for those struggling with betting addiction.',
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: 'Alternative Rewards System',
      description: 'Earn tokens for staying off betting platforms, convertible into airtime, food vouchers, or free courses.',
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BetAware uses cutting-edge technology to address betting addiction through education, prevention, and support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;