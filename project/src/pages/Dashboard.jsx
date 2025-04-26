import React from 'react';
import { PieChart, TrendingDown, Calendar, Award, Clock, AlertTriangle } from 'lucide-react';

function Dashboard() {
  const { currentUser } = useAuth();
  
  // Mock data for demonstration
  const stats = [
    { title: 'Days Bet-Free', value: '14', icon: <Calendar className="h-6 w-6 text-green-600" />, color: 'bg-green-100' },
    { title: 'Money Saved', value: 'KSh 12,450', icon: <TrendingDown className="h-6 w-6 text-blue-600" />, color: 'bg-blue-100' },
    { title: 'Points Earned', value: '750', icon: <Award className="h-6 w-6 text-purple-600" />, color: 'bg-purple-100' },
    { title: 'Streak Record', value: '21 days', icon: <Clock className="h-6 w-6 text-amber-600" />, color: 'bg-amber-100' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome, {currentUser?.displayName || 'User'}
          </h1>
          <p className="text-gray-600">
            Track your progress, monitor your savings, and stay committed to your betting-free journey.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.color} rounded-lg p-6 flex items-center`}>
              <div className="mr-4">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Graph Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Money Saved vs. Time</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm">Week</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Month</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">Year</button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center">
            <PieChart className="h-32 w-32 text-gray-400" />
            <p className="text-gray-500 ml-4">
              This is where your saving progress chart would appear.
              <br />
              Connect your data to see real-time statistics.
            </p>
          </div>
        </div>
        
        {/* Risk Assessment */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Betting Risk Assessment</h2>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                Based on your activity patterns, our AI detects a <span className="font-medium text-amber-600">moderate risk</span> of 
                returning to betting habits. Here are some personalized recommendations:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                <li>Try our breathing exercises when you feel the urge to bet</li>
                <li>Join a community support group this week</li>
                <li>Review your financial goals to stay motivated</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Challenge Section */}
        <div className="bg-blue-600 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">This Week's Challenge</h2>
          <p className="mb-4">
            Complete 7 days without visiting any betting sites and earn 100 bonus points 
            redeemable for airtime or meal vouchers!
          </p>
          <div className="flex justify-end">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">
              Accept Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;