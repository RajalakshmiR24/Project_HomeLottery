import React from 'react';
import { 
  Home, 
  Trophy, 
  Shield, 
  Star, 
  Users, 
  Calendar, 
  ArrowRight,
  CheckCircle,
  CreditCard,
  Lock,
  Mail
} from 'lucide-react';
import { Lottery, Winner, Participant } from '../types';

interface LandingPageProps {
  onSignUp: () => void;
  onSignIn: () => void;
  onSocialSignIn: (provider: 'google' | 'instagram' | 'facebook') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSignUp, onSignIn, onSocialSignIn }) => {
  const currentLottery: Lottery = {
    id: '1',
    title: 'Luxury Villa Paradise',
    description: 'A stunning 4-bedroom villa with ocean views, private pool, and modern amenities',
    prizeValue: '$850,000',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    drawDate: '2025-02-15',
    ticketPrice: 25,
    totalTickets: 5000,
    soldTickets: 3247,
    status: 'active'
  };

  const upcomingLotteries: Lottery[] = [
    {
      id: '2',
      title: 'Modern City Penthouse',
      description: 'Luxurious penthouse in downtown with panoramic city views',
      prizeValue: '$1,200,000',
      image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      drawDate: '2025-03-20',
      ticketPrice: 30,
      totalTickets: 6000,
      soldTickets: 0,
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Countryside Estate',
      description: 'Charming estate with gardens, stables, and guest house',
      prizeValue: '$650,000',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      drawDate: '2025-04-10',
      ticketPrice: 20,
      totalTickets: 4000,
      soldTickets: 0,
      status: 'upcoming'
    }
  ];

  const recentWinners: Winner[] = [
    { name: 'Sarah M.', prize: 'Beach House ($750K)', date: '2024-12-20', ticketHash: 'WH7X9K2' },
    { name: 'Michael R.', prize: 'Mountain Cabin ($450K)', date: '2024-11-15', ticketHash: 'MC5Y8L1' },
    { name: 'Emma L.', prize: 'City Apartment ($320K)', date: '2024-10-28', ticketHash: 'CA3Z6N9' }
  ];

  const recentParticipants: Participant[] = [
    { maskedName: 'John D.', maskedPhone: '+1***-***-7890', ticketCount: 5, joinDate: '2025-01-15' },
    { maskedName: 'Lisa M.', maskedPhone: '+1***-***-2341', ticketCount: 3, joinDate: '2025-01-15' },
    { maskedName: 'Robert S.', maskedPhone: '+1***-***-8765', ticketCount: 8, joinDate: '2025-01-14' },
    { maskedName: 'Maria G.', maskedPhone: '+1***-***-4523', ticketCount: 2, joinDate: '2025-01-14' }
  ];

  const testimonials = [
    {
      name: 'Jennifer K.',
      text: 'I won my dream home! The process was transparent and secure. Highly recommend!',
      rating: 5
    },
    {
      name: 'David M.',
      text: 'Amazing platform with fair draws. Won a beautiful cabin last year!',
      rating: 5
    },
    {
      name: 'Sophie R.',
      text: 'Trustworthy and exciting. Love participating in their lotteries!',
      rating: 5
    }
  ];

  const soldPercentage = (currentLottery.soldTickets / currentLottery.totalTickets) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Home className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">DreamHome Lottery</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={onSignIn}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={onSignUp}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Secure & Licensed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-green-500" />
              <span>Encrypted Payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Verified Winners</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-4 h-4 text-green-500" />
              <span>Mobile Payment Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section - Current Lottery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Win Your <span className="text-blue-600">Dream Home</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enter our secure lottery system for a chance to win luxury properties. 
            Transparent draws, verified winners, and your dream home awaits!
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={currentLottery.image}
                alt={currentLottery.title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Active Draw
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {currentLottery.soldTickets} tickets sold
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentLottery.title}</h2>
              <p className="text-gray-600 mb-6">{currentLottery.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{currentLottery.prizeValue}</div>
                  <div className="text-sm text-gray-500">Prize Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">${currentLottery.ticketPrice}</div>
                  <div className="text-sm text-gray-500">Per Ticket</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Tickets Sold</span>
                  <span>{currentLottery.soldTickets} / {currentLottery.totalTickets}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${soldPercentage}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">
                  Draw Date: <strong>{new Date(currentLottery.drawDate).toLocaleDateString()}</strong>
                </span>
              </div>

              <button
                onClick={onSignUp}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                Buy Tickets Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Lotteries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Upcoming Lotteries</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingLotteries.map((lottery) => (
            <div key={lottery.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={lottery.image}
                alt={lottery.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <span className="text-2xl font-bold text-blue-600">{lottery.prizeValue}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{lottery.title}</h3>
                <p className="text-gray-600 mb-4">{lottery.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {new Date(lottery.drawDate).toLocaleDateString()}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-green-600">${lottery.ticketPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Winners */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Winners</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentWinners.map((winner, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                  <div>
                    <div className="font-bold text-gray-800">{winner.name}</div>
                    <div className="text-sm text-gray-600">{winner.date}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{winner.prize}</p>
                <p className="text-sm text-gray-500">Ticket: {winner.ticketHash}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Participants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Recent Participants</h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recentParticipants.map((participant, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold text-gray-800">{participant.maskedName}</span>
                  </div>
                  <p className="text-sm text-gray-600">{participant.maskedPhone}</p>
                  <p className="text-sm text-blue-600">{participant.ticketCount} tickets</p>
                  <p className="text-xs text-gray-500">{participant.joinDate}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Winners Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-gray-800">- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Win Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of participants in our secure, transparent lottery system
          </p>
          <button
            onClick={onSignUp}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="w-6 h-6" />
                <span className="text-lg font-bold">DreamHome Lottery</span>
              </div>
              <p className="text-gray-400">
                Your trusted platform for winning luxury properties through secure, transparent lotteries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Lotteries</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Active Draws</li>
                <li>Upcoming</li>
                <li>Past Winners</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>How It Works</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Responsible Gaming</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DreamHome Lottery. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;