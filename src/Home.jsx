import React from 'react';
import { Link } from 'react-router-dom';
import Founder1 from "./assets/1760379034665.jpeg";
import Founder2 from "./assets/1659489877820.jpeg";

 // add this at the top of Home.jsx


 function ROICalculator() {
  const [selectedPlan, setSelectedPlan] = React.useState('done-for-you');
  
  // Business Metrics
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);
  
  // Time period
  const [daysTracked, setDaysTracked] = React.useState(90);
  
  // Performance model
  const [performanceModel, setPerformanceModel] = React.useState('you-handle');
  
  // Infrastructure
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);

  // Cost calculations
  const baseCost = selectedPlan === 'done-for-you' ? 2800 : 
                   selectedPlan === 'setup-launch' ? 1595 : 
                   0; // Performance-based has no base cost
  
  const domainCost = (numDomains * 12) / 12; // $12 per domain per year, divided by 12 for monthly cost
  const emailAccountCost = numEmailAccounts * 5; // $5 per email account
  const instantlyCost = 97; // Instantly.ai subscription
  const emailVerificationCost = 120; // One-time fee for email verification
  const leadsPerMonthCost = 70; // Average of $40-100 range for leads
  const deliverabilityCheckerCost = 47; // Monthly deliverability checker
  
  const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost;

  // Email & Meeting calculations
  const emailsPerDay = numEmailAccounts * 20; // 20 emails per account per day
  const emailsPerMonth = emailsPerDay * 22; // 22 business days
  const totalReplies = Math.round((emailsPerMonth * replyRate) / 100);
  const positiveReplies = Math.round((totalReplies * positiveReplyRate) / 100);
  const meetingsBooked = Math.round((positiveReplies * replyToMeeting) / 100);
  
  // Revenue calculations - all based on the days tracked
  const monthsTracked = daysTracked / 30; // Convert days to months
  const totalEmailsForPeriod = Math.round(emailsPerMonth * monthsTracked);
  const totalRepliesForPeriod = Math.round(totalReplies * monthsTracked);
  const totalPositiveRepliesForPeriod = Math.round(positiveReplies * monthsTracked);
  const totalMeetingsForPeriod = Math.round(meetingsBooked * monthsTracked);
  const closedDealsPerMonth = Math.round((meetingsBooked * closeRate) / 100);
  const totalClosedDealsForPeriod = Math.round(closedDealsPerMonth * monthsTracked);
  
  // Calculate revenue and costs
  const totalRevenue = totalClosedDealsForPeriod * avgDealSize;
  let totalCost, netProfit;
  
  if (selectedPlan === 'performance') {
    // Performance-based: infrastructure costs only
    totalCost = Math.round((domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost) * monthsTracked + emailVerificationCost);
    const grossProfit = totalRevenue - totalCost;
    
    // Deduct commission that goes to White Kim
    const commissionRate = performanceModel === 'you-handle' ? 0.15 : 0.30;
    const commissionToWhiteKim = Math.round(totalRevenue * commissionRate);
    netProfit = grossProfit - commissionToWhiteKim;
  } else {
    // Regular pricing (Done-For-You or Setup & Launch)
    totalCost = Math.round(totalMonthlyCost * monthsTracked + emailVerificationCost);
    netProfit = totalRevenue - totalCost;
  }
  
  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const plans = [
    { id: 'done-for-you', name: 'Done-For-You', basePrice: '$2,800/mo' },
    { id: 'setup-launch', name: 'Setup & Launch', basePrice: '$1,595 one-time' },
    { id: 'performance', name: 'Performance-Based', basePrice: '$0 base' }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
            See For Yourself: ROI Calculator
          </h2>
          <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
            Calculate your potential return with custom infrastructure
          </p>
        </div>

        {/* Plan Selection Tabs */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex gap-4 justify-center">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className="px-8 py-4 rounded-full font-semibold transition-all"
                style={{
                  backgroundColor: selectedPlan === plan.id ? '#dc692f' : '#fff5f0',
                  color: selectedPlan === plan.id ? '#ffffff' : '#7d472a',
                  border: selectedPlan === plan.id ? 'none' : '2px solid #dc692f20',
                  transform: selectedPlan === plan.id ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div className="text-base font-bold">{plan.name}</div>
                <div className="text-xs mt-1" style={{ opacity: 0.8 }}>{plan.basePrice}</div>
              </button>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl shadow-2xl border-2 max-w-7xl mx-auto" style={{ borderColor: '#dc692f' }}>
          {/* Setup Notice */}
          <div className="text-center mb-8">
            <p className="text-lg font-bold" style={{ color: '#dc692f' }}>
              Configuration and setup takes 30 days.
            </p>
            <p className="text-base mt-1" style={{ color: '#7d472a' }}>
              Below are the numbers post successful setup.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            {/* Left - Input Controls */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#7d472a' }}>Your Configuration</h3>
              
              {/* Infrastructure Section */}
              <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: '#dc692f' }}>
                <h4 className="font-bold text-lg mb-4" style={{ color: '#7d472a' }}>Infrastructure Setup</h4>
                
                {/* Domains */}
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Domains</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{numDomains} (${numDomains * 12}/year)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={numDomains}
                    onChange={(e) => setNumDomains(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0</span>
                    <span>$12/domain/year</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Email Accounts */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Email Accounts</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    step="1"
                    value={numEmailAccounts}
                    onChange={(e) => setNumEmailAccounts(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>1</span>
                    <span>$5/account/mo</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Business Metrics Section */}
              <div className="space-y-4">
                <h4 className="font-bold text-lg" style={{ color: '#7d472a' }}>Your Business Metrics</h4>
                
                {/* Average Deal Size */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Average Deal Size</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="500"
                    value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>$1K</span>
                    <span>$100K</span>
                  </div>
                </div>

                {/* Close Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Close Rate (Meeting → Deal)</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{closeRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    step="1"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>5%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reply Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Expected Reply Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{replyRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="20"
                    step="0.25"
                    value={replyRate}
                    onChange={(e) => setReplyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0.5%</span>
                    <span>Our avg: 2.5%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Positive Reply Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{positiveReplyRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={positiveReplyRate}
                    onChange={(e) => setPositiveReplyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((positiveReplyRate - 1) / 99) * 100}%, #e5e7eb ${((positiveReplyRate - 1) / 99) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>1%</span>
                    <span>Our avg: 33%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reply to Meeting Conversion */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply → Meeting Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{replyToMeeting}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={replyToMeeting}
                    onChange={(e) => setReplyToMeeting(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${(replyToMeeting / 50) * 100}%, #e5e7eb ${(replyToMeeting / 50) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0%</span>
                    <span>Our avg: 35%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-white p-4 rounded-xl border" style={{ borderColor: '#dc692f20' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Monthly Cost Breakdown:</p>
                <div className="space-y-1 text-sm" style={{ color: '#7d472a', opacity: 0.8 }}>
                  <div className="flex justify-between">
                    <span>Base Service:</span>
                    <span className="font-semibold">${baseCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domains ({numDomains} × $12/year):</span>
                    <span className="font-semibold">${domainCost.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Accounts ({numEmailAccounts} × $5):</span>
                    <span className="font-semibold">${emailAccountCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Instantly.ai:</span>
                    <span className="font-semibold">$97</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deliverability Checker:</span>
                    <span className="font-semibold">$47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Leads:</span>
                    <span className="font-semibold">$70</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Verification (one-time fee):</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t" style={{ borderColor: '#dc692f20' }}>
                    <span className="font-bold">Total/Month:</span>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${totalMonthlyCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t" style={{ borderColor: '#dc692f20' }}>
                    <span className="font-bold">Initial Payment:</span>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${(totalMonthlyCost + emailVerificationCost).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Yearly (domains only):</span>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${(numDomains * 12).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Results & Projections */}
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold" style={{ color: '#7d472a' }}>Post Setup {daysTracked}-Day Projection</h3>
                <div className="flex items-center gap-3">
                  <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Days:</label>
                  <input
                    type="number"
                    min="1"
                    max="365"
                    value={daysTracked}
                    onChange={(e) => setDaysTracked(Number(e.target.value))}
                    className="w-20 px-3 py-2 border-2 rounded-lg font-bold text-center"
                    style={{ borderColor: '#dc692f', color: '#dc692f' }}
                  />
                </div>
              </div>
              
              {/* Email Volume Stats */}
              <div className="bg-white p-6 rounded-xl shadow border" style={{ borderColor: '#dc692f20' }}>
                <h4 className="font-bold mb-4" style={{ color: '#7d472a' }}>Email Volume ({daysTracked} days)</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalEmailsForPeriod.toLocaleString()}</div>
                    <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Total Emails</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalRepliesForPeriod}</div>
                    <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Total Replies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalPositiveRepliesForPeriod}</div>
                    <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Positive Replies</div>
                  </div>
                </div>
              </div>

              {/* Meeting & Deal Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl text-center shadow">
                  <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>{totalMeetingsForPeriod}</div>
                  <div className="text-sm" style={{ color: '#7d472a' }}>Total Meetings</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center shadow">
                  <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>{totalClosedDealsForPeriod}</div>
                  <div className="text-sm" style={{ color: '#7d472a' }}>Total Closed Deals</div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold mb-4" style={{ color: '#7d472a' }}>Financial Projection</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Closed Deals</span>
                      <span className="font-bold text-xl" style={{ color: '#dc692f' }}>{totalClosedDealsForPeriod}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Revenue</span>
                      <span className="font-bold text-xl" style={{ color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-300" 
                        style={{ 
                          width: totalRevenue > 0 ? '100%' : '0%', 
                          backgroundColor: '#dc692f' 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Investment</span>
                      <span className="font-bold text-xl" style={{ color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-400 rounded-full transition-all duration-300" 
                        style={{ 
                          width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Performance Model Selection - Only show for Performance-Based plan */}
                  {selectedPlan === 'performance' && (
                    <div className="p-4 bg-orange-50 rounded-xl border" style={{ borderColor: '#dc692f40' }}>
                      <h5 className="font-bold mb-3 text-center text-sm" style={{ color: '#7d472a' }}>Performance Model</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPerformanceModel('you-handle')}
                          className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                          style={{
                            backgroundColor: performanceModel === 'you-handle' ? '#dc692f' : '#ffffff',
                            color: performanceModel === 'you-handle' ? '#ffffff' : '#7d472a',
                            borderColor: performanceModel === 'you-handle' ? '#dc692f' : '#dc692f40'
                          }}
                        >
                          <div className="text-xs mb-1">You Handle</div>
                          <div className="text-xs opacity-80">Positive Replies</div>
                          <div className="text-base font-bold mt-1">15%</div>
                        </button>
                        <button
                          onClick={() => setPerformanceModel('white-kim')}
                          className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                          style={{
                            backgroundColor: performanceModel === 'white-kim' ? '#dc692f' : '#ffffff',
                            color: performanceModel === 'white-kim' ? '#ffffff' : '#7d472a',
                            borderColor: performanceModel === 'white-kim' ? '#dc692f' : '#dc692f40'
                          }}
                        >
                          <div className="text-xs mb-1">White Kim Handles</div>
                          <div className="text-xs opacity-80">Positive Replies</div>
                          <div className="text-base font-bold mt-1">30%</div>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t-2" style={{ borderColor: '#dc692f20' }}>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg" style={{ color: '#7d472a' }}>Net Profit</span>
                      <span className="font-bold text-3xl" style={{ color: '#dc692f' }}>${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Result */}
              <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-xl text-center border-2" style={{ borderColor: '#dc692f' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Your ROI</div>
                <div className="text-5xl font-bold" style={{ color: '#dc692f' }}>{roi}%</div>
                <p className="text-sm mt-2" style={{ color: '#7d472a', opacity: 0.7 }}>
                  For every $1 spent, you make ${totalCost > 0 ? ((netProfit / totalCost) + 1).toFixed(2) : '0'}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 pt-8 border-t" style={{ borderColor: '#dc692f20' }}>
            <button className="px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
              Book a Call to Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function HeroSection() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: '#dc692f' }}
          >
            <span className="text-white font-bold text-xl">WK</span>
          </Link>
          <span className="font-semibold text-xl" style={{ color: '#7d472a' }}>White Kim</span>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <Link to="/" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Home</Link>
          <Link to="/services" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Services and Solutions</Link>
          <Link to="/resources" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Free Resources</Link>
          <Link to="/case-studies" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Case Studies</Link>
        </div>
        
        <Link to="/book-a-call">
          <button
            className="text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md"
            style={{ backgroundColor: '#dc692f' }}
          >
            BOOK A CALL
          </button>
        </Link>

      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-8 py-24 grid grid-cols-2 gap-20 items-center">
        {/* Left Side - Copy */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold leading-tight" style={{ color: '#7d472a' }}>
            COLD EMAIL SYSTEMS THAT BOOK 40+ MEETINGS PER MONTH
          </h1>
          
          <p className="text-lg leading-relaxed" style={{ color: '#7d472a' }}>
            Done-for-you cold email infrastructure that fills your pipeline in 30 days—no spam, no fluff, just booked calls with buyers ready to talk.
          </p>
          
          <p style={{ color: '#7d472a', opacity: 0.8 }}>
            Built, launched, and managed for you. From tech setup to copywriting to deliverability—we handle everything so you can focus on closing deals.
          </p>
          
          <div className="flex gap-4 pt-6">
          <Link to="/book-a-call">
            <button
              className="text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg shadow-lg"
              style={{ backgroundColor: '#dc692f' }}
            >
              Book Strategy Call
            </button>
          </Link>

          <button
            onClick={() => (window.location.href = '/case-studies')}
            className="border-2 px-10 py-4 rounded-full font-semibold hover:text-white transition"
            style={{ borderColor: '#dc692f', color: '#dc692f' }}
          >
            See Case Studies
          </button>
          </div>
          
          <div className="pt-8">
            {/* Removed - trust badge moved to logo section */}
          </div>
        </div>

  {/* Right Side - Founder Photos */}
  <div className="relative">
          <div className="grid grid-cols-2 gap-6">
            {/* Founder 1 */}
            <div className="relative">
              <div className="w-60 h-60 rounded-full border-4 overflow-hidden shadow-xl" style={{ backgroundColor: 'rgba(220, 105, 47, 0.1)', borderColor: 'rgba(220, 105, 47, 0.3)' }}>
              <img src={Founder1} alt="Founder 1" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-lg" style={{ color: '#7d472a' }}>Brendon Kim</p>
                <p className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>Co-Founder</p>
                <div className="flex gap-2 justify-center mt-2">
                  <div className="w-6 h-6 rounded cursor-pointer hover:opacity-70 transition" style={{ backgroundColor: 'rgba(220, 105, 47, 0.2)' }}></div>
                  <div className="w-6 h-6 rounded cursor-pointer hover:opacity-70 transition" style={{ backgroundColor: 'rgba(220, 105, 47, 0.2)' }}></div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="relative mt-16">
              <div className="w-60 h-60 rounded-full border-4 overflow-hidden shadow-xl" style={{ backgroundColor: 'rgba(220, 105, 47, 0.1)', borderColor: 'rgba(220, 105, 47, 0.3)' }}>
              <img src={Founder2} alt="Founder 1" className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-lg" style={{ color: '#7d472a' }}>Josh White</p>
                <p className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>Co-Founder</p>
                <div className="flex gap-2 justify-center mt-2">
                  <div className="w-6 h-6 rounded cursor-pointer hover:opacity-70 transition" style={{ backgroundColor: 'rgba(220, 105, 47, 0.2)' }}></div>
                  <div className="w-6 h-6 rounded cursor-pointer hover:opacity-70 transition" style={{ backgroundColor: 'rgba(220, 105, 47, 0.2)' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-2 rounded-full" style={{ borderColor: 'rgba(220, 105, 47, 0.2)' }}></div>
          <div className="absolute -bottom-8 -left-4 w-16 h-16 rotate-45" style={{ backgroundColor: 'rgba(220, 105, 47, 0.1)' }}></div>
          <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full" style={{ backgroundColor: '#dc692f' }}></div>
        </div>
      </div>

     {/* Company Logo Slider */}
     <div className="py-12 border-t border-gray-200">
  <div className="container mx-auto px-8">
    <h2 className="text-center text-3xl font-bold mb-4" style={{ color: '#7d472a' }}>
      Inspired by Leading B2B Companies
    </h2>
    <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
      Built with the same strategies and precision used by top SaaS teams like Asana, Notion, and Figma to scale their outbound systems.
    </p>

    <div className="relative overflow-hidden">
      <div className="flex gap-12 items-center animate-scroll">
        {/* Repeat logos twice for seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <React.Fragment key={setIndex}>
            {/* Asana */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" alt="Asana" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Notion */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Airtable */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" alt="Airtable" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Calendly */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Calendly_Logo.svg" alt="Calendly" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Webflow */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Webflow_Logo.svg" alt="Webflow" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Figma */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Slack */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Dropbox */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg" alt="Dropbox" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Stripe */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Intercom */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Intercom-logo.svg" alt="Intercom" className="max-w-full max-h-full object-contain" />
            </div>
            {/* HubSpot */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Zendesk */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg" alt="Zendesk" className="max-w-full max-h-full object-contain" />
            </div>
            {/* Mailchimp */}
            <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Mailchimp_Logo.svg" alt="Mailchimp" className="max-w-full max-h-full object-contain" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
</div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>

      {/* Problem We Solve Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Problem */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold" style={{ color: '#7d472a' }}>
              Your Cold Emails Are Getting Ignored. Here's Why.
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
                  <span className="text-white font-bold">✕</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>Landing in Spam</h3>
                  <p style={{ color: '#7d472a', opacity: 0.7 }}>Your emails never reach the inbox because your infrastructure isn't properly configured</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
                  <span className="text-white font-bold">✕</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>Generic Copy That Sounds Like Everyone Else</h3>
                  <p style={{ color: '#7d472a', opacity: 0.7 }}>Prospects delete your emails in 2 seconds because they've seen the same pitch 100 times</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
                  <span className="text-white font-bold">✕</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>Wrong Targeting</h3>
                  <p style={{ color: '#7d472a', opacity: 0.7 }}>You're emailing the wrong people who will never buy, wasting time and burning your domain</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
                  <span className="text-white font-bold">✕</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>No Consistent System</h3>
                  <p style={{ color: '#7d472a', opacity: 0.7 }}>You're manually sending emails with no follow-up sequences, leaving money on the table</p>
                </div>
              </div>
            </div>
          </div>

         {/* Right Side - Video */}
<div className="relative">
  <div className="rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#dc692f' }}>
    <div className="aspect-video bg-gray-800 flex items-center justify-center">
      <video
        className="w-full h-full object-cover"
        controls
        controlsList="nodownload"
        preload="metadata"
        style={{ borderRadius: '1rem' }}
      >
        <source src="/wk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
  <p className="text-center mt-6 text-xl font-semibold" style={{ color: '#7d472a' }}>
    "Hear it from them first"
  </p>
</div>

</div>
</div>



      {/* Metrics Dashboard Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
              The Numbers Don't Lie
            </h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
              Average client results in 90 days
            </p>
          </div>

          {/* Main Dashboard */}
          <div className="bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl shadow-2xl border-2 max-w-5xl mx-auto" style={{ borderColor: '#dc692f' }}>
            
            {/* Top 3 Metrics */}
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2" style={{ color: '#dc692f' }}>42</div>
                <div className="text-lg font-semibold" style={{ color: '#7d472a' }}>Meetings Booked</div>
                <div className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>per month</div>
              </div>
              <div className="text-center border-x-2 border-gray-200">
                <div className="text-6xl font-bold mb-2" style={{ color: '#dc692f' }}>$285K</div>
                <div className="text-lg font-semibold" style={{ color: '#7d472a' }}>Pipeline Created</div>
                <div className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>in 90 days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold mb-2" style={{ color: '#dc692f' }}>19%</div>
                <div className="text-lg font-semibold" style={{ color: '#7d472a' }}>Reply Rate</div>
                <div className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>vs 6% average</div>
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#7d472a' }}>Monthly Meeting Growth</h3>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 600 200">
                  {/* Grid lines */}
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#e5e7eb" strokeWidth="1"/>
                  
                  {/* Line chart */}
                  <polyline
                    points="50,150 150,130 250,100 350,70 450,40 550,20"
                    fill="none"
                    stroke="#dc692f"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* Data points */}
                  <circle cx="50" cy="150" r="6" fill="#dc692f"/>
                  <circle cx="150" cy="130" r="6" fill="#dc692f"/>
                  <circle cx="250" cy="100" r="6" fill="#dc692f"/>
                  <circle cx="350" cy="70" r="6" fill="#dc692f"/>
                  <circle cx="450" cy="40" r="6" fill="#dc692f"/>
                  <circle cx="550" cy="20" r="6" fill="#dc692f"/>
                  
                  {/* Labels */}
                  <text x="50" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 1</text>
                  <text x="150" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 4</text>
                  <text x="250" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 8</text>
                  <text x="350" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 10</text>
                  <text x="450" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 11</text>
                  <text x="550" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 12</text>
                  
                  {/* Values */}
                  <text x="50" y="145" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">8</text>
                  <text x="150" y="125" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">18</text>
                  <text x="250" y="95" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">28</text>
                  <text x="350" y="65" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">38</text>
                  <text x="450" y="35" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">42</text>
                  <text x="550" y="15" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">45</text>
                </svg>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold" style={{ color: '#dc692f' }}>30 Days</div>
                <div className="text-sm" style={{ color: '#7d472a' }}>To First Meeting</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold" style={{ color: '#dc692f' }}>97%</div>
                <div className="text-sm" style={{ color: '#7d472a' }}>Inbox Delivery</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <div className="text-2xl font-bold" style={{ color: '#dc692f' }}>5.2x</div>
                <div className="text-sm" style={{ color: '#7d472a' }}>ROI Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
              Choose Your Path to Predictable Pipeline
            </h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
              Three ways to work with us — pick what fits your business
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Done For You */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 hover:shadow-2xl transition" style={{ borderColor: '#dc692f' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#dc692f20', color: '#dc692f' }}>
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Done-For-You</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>
                  Fully managed cold email system
                </p>
                <div className="text-4xl font-bold" style={{ color: '#dc692f' }}>$2,800<span className="text-xl">/mo</span></div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>+ email infrastructure (~$657/mo)</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Complete system setup & management</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>5 email variations + A/B testing</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Daily inbox & deliverability management</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Weekly performance reports</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Meetings in 10-21 days</span>
                </li>
              </ul>

              <a href="/services/main-recruiting-service">
                <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                  Learn More
                </button>
              </a>
            </div>

            {/* Card 2 - Setup & Launch */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 hover:shadow-xl transition" style={{ borderColor: '#e5e7eb' }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Setup & Launch</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>
                  We build it, you run it
                </p>
                <div className="text-4xl font-bold" style={{ color: '#dc692f' }}>$1,595</div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>one-time + infrastructure costs</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Complete infrastructure setup</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>30-day campaign buildout</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Training videos & documentation</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>7-day guided transition</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: '#dc692f' }}>✓</span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>Option to upgrade to full management</span>
                </li>
              </ul>
              <Link to="/book-a-call">
              <button className="w-full py-3 rounded-full font-semibold transition border-2 hover:bg-gray-50" style={{ borderColor: '#dc692f', color: '#dc692f' }}>
                Learn More
              </button>
              </Link>
            </div>

          {/* Card 3 - Performance Based */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 hover:shadow-xl transition" style={{ borderColor: '#e5e7eb' }}>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Performance-Based</h3>
              <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>
                Pay only for results
              </p>
              <div className="text-4xl font-bold" style={{ color: '#dc692f' }}>Custom</div>
              <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>per meeting or closed deal</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex gap-2">
                <span style={{ color: '#dc692f' }}>✓</span>
                <span className="text-sm" style={{ color: '#7d472a' }}>Zero upfront investment</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#dc692f' }}>✓</span>
                <span className="text-sm" style={{ color: '#7d472a' }}>Pay per qualified meeting</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#dc692f' }}>✓</span>
                <span className="text-sm" style={{ color: '#7d472a' }}>Full system setup included</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#dc692f' }}>✓</span>
                <span className="text-sm" style={{ color: '#7d472a' }}>Transparent dashboard tracking</span>
              </li>
              <li className="flex gap-2">
                <span style={{ color: '#dc692f' }}>✓</span>
                <span className="text-sm" style={{ color: '#7d472a' }}>You only cover tool costs (~$457/mo)</span>
              </li>
            </ul>

            <div className="mb-6 p-3 rounded-lg" style={{ backgroundColor: '#fff5f0' }}>
              <p className="text-xs font-semibold mb-2" style={{ color: '#7d472a' }}>Requirements (must meet one):</p>
              <div className="space-y-2 text-xs" style={{ color: '#7d472a', opacity: 0.8 }}>
                <div>
                  <p className="font-semibold">Option 1:</p>
                  <p>• $4,000+ minimum deal value</p>
                  <p>• Capacity for 5+ new clients monthly</p>
                </div>
                <div className="pt-1">
                  <p className="font-semibold">Option 2:</p>
                  <p>• Capacity for $20,000+ additional monthly revenue</p>
                </div>
              </div>
            </div>

            <Link to="/book-a-call">
              <button className="w-full text-white py-3 rounded-full font-semibold hover:opacity-90 transition" style={{ backgroundColor: '#dc692f' }}>
                Discuss Pricing
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
   

          <ROICalculator />
        </div>

  );
}

function WhiteKimMethodSection() {
  
  const [expandedStep, setExpandedStep] = React.useState(null);

  const steps = [
    {
      title: "Intro Call",
      subtitle: "Pre-Sale\nFit Assessment\nPlan Selection",
      timeline: "30-45 min",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      description: "This is where we determine if working together makes sense. We analyze your current outreach, offer, and bottlenecks holding back growth.",
      deliverables: [
        "Business Deep-Dive: Analyze current outreach, offer, and growth bottlenecks",
        "Fit Assessment: Evaluate if our outbound system aligns with your goals and capacity to scale",
        "Plan Selection: Review which model makes the most sense and realistic ROI expectations for first 30 days",
        "If it's a fit, we move straight into discovery and setup where we build out the customized plan"
      ]
    },
    {
      title: "Discovery & Setup",
      subtitle: "Custom plan\nScope & financials\nTool setup",
      timeline: "1-2 days",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      description: "We'll go over your customized plan, scope of work, financials, deadlines, and expected returns — ensuring full alignment before kickoff. Payment will be processed on the call to officially begin the engagement.",
      deliverables: [
        "Deep-dive call to define your ICP, messaging angles, and dream-client profile",
        "Access setup for tools (Instantly, Apollo, Slack, etc.)",
        "Outline your full outreach system — messaging, targeting, and volume goals",
        "Send Stripe link for your tool subscriptions",
        "Loom walkthroughs to guide you through Instantly setup + inbox warming"
      ]
    },
    {
      title: "💳 Payment",
      subtitle: "Secure payment\nEngagement begins\nOfficial kickoff",
      timeline: "Same day",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: "Payment is processed securely via Stripe to officially begin your engagement. Once payment is confirmed, we immediately move into Week 1 infrastructure build.",
      deliverables: [
        "Stripe payment link sent and processed on Discovery call",
        "Payment confirms official start of engagement",
        "Immediate access to all tools and systems",
        "Week 1 infrastructure build begins within 24 hours"
      ]
    },
    {
      title: "Week 1: Infrastructure",
      subtitle: "Domain setup\nEmail configuration\nDNS & warm-up",
      timeline: "Week 1",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      description: "This week focuses on building the technical foundation for your outbound system via live Zoom sessions and tool configuration.",
      deliverables: [
        "Live Zoom session to walk through setup and configuration",
        "Purchase and configure 30 domains (we recommend which to buy)",
        "Create 30 email addresses and connect them to Instantly.ai",
        "Configure DNS records (SPF, DKIM, DMARC)",
        "Begin inbox warm-up (critical for high deliverability)",
        "Verify all tool connections (Apollo, Slack, tracking systems)"
      ]
    },
    {
      title: "Week 2: Targeting",
      subtitle: "List building\nEmail verification\nMessaging scripts",
      timeline: "Week 2",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "We build your target audience, verify contacts, and craft compelling messaging tailored to your positioning and tone.",
      deliverables: [
        "Build and export your first list from Apollo.io (CEOs, CTOs, Founders in tech/healthcare/SaaS)",
        "Verify all emails to ensure a clean, validated list",
        "Write 5 versions of cold email scripts tailored to your positioning and tone",
        "Set up Slack alerts so you're notified instantly when someone replies"
      ]
    },
    {
      title: "Week 3: Audit",
      subtitle: "System check\nDeliverability test\nPre-launch review",
      timeline: "Week 3",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      description: "Perform a full technical and strategic audit before launch to ensure every system is healthy and ready to scale.",
      deliverables: [
        "Validate inbox health, warm-up status, and DNS configurations",
        "Test deliverability, spam placement, and automation flows",
        "Verify tracking, sequences, and Slack integrations",
        "Ensure every system is healthy and ready to scale",
        "Final pre-launch checklist and approval"
      ]
    },
    {
      title: "Week 4: Launch",
      subtitle: "Campaign live\nDaily monitoring\nWeekly optimization",
      timeline: "Week 4",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Your cold email engine goes live. We launch your first campaign and begin daily monitoring and optimization.",
      deliverables: [
        "Launch your first campaign to 500–1,000 prospects",
        "Monitor deliverability, open rates, and reply rates daily",
        "Optimize messaging and targeting based on early responses",
        "Provide weekly Loom updates covering performance + next steps",
        "First meetings typically book within 10-14 days"
      ]
    },
    {
      title: "Ongoing",
      subtitle: "Continuous optimization\nA/B testing\nScale & expand",
      timeline: "Weekly",
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      description: "Complete transparency on what's working, continuous testing, and optimization to consistently improve your results month over month.",
      deliverables: [
        "Test new angles, subject lines, and audience segments",
        "Expand your ICP based on top-performing responses",
        "Maintain inbox health with consistent domain rotation",
        "Run ongoing performance reviews and optimization loops",
        "Weekly Loom reports with metrics, insights, and next week's roadmap"
      ]
    }
  ];

  return (
    <div className="py-20" style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
            THE PROVEN WHITE KIM METHOD
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>
            From Payment to First Meetings in 4 Weeks<br />with High-Quality Client Management
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            Our complete 8-step cold email system—from discovery to ongoing optimization
          </p>
        </div>

        {/* Process Timeline with Zigzag Heights */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="relative">
            {/* Horizontal Row with Alternating Heights */}
            <div className="flex items-start justify-between relative">
              {steps.map((step, index) => {
                const isPaymentStep = step.title === "💳 Payment";
                return (
                  <div key={index} className="flex-1 text-center relative z-10 group px-2" style={{ marginTop: index % 2 === 0 ? '0' : '100px' }}>
                    <button
                      onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                      onMouseEnter={(e) => {
                        if (!isPaymentStep) {
                          const icon = e.currentTarget.querySelector('.icon-circle');
                          if (icon) {
                            icon.style.transform = 'scale(1.15) rotate(0deg)';
                            icon.style.boxShadow = '0 15px 40px rgba(220, 105, 47, 0.4)';
                            icon.style.animation = 'zoomShake 0.6s ease-in-out';
                          }
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isPaymentStep) {
                          const icon = e.currentTarget.querySelector('.icon-circle');
                          if (icon) {
                            icon.style.transform = 'scale(1) rotate(0deg)';
                            icon.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
                            icon.style.animation = 'none';
                          }
                        }
                      }}
                      className="w-full relative"
                    >
                      {isPaymentStep ? (
                        // Special styling for payment step
                        <div 
                          className="icon-circle w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4 cursor-pointer relative border-4"
                          style={{ 
                            backgroundColor: '#f3f4f6',
                            borderColor: '#9ca3af',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                          }}
                        >
                          <div style={{ color: '#6b7280' }}>
                            {step.icon}
                          </div>
                        </div>
                      ) : (
                        // Regular styling for other steps
                        <div 
                          className="icon-circle w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 text-white cursor-pointer relative"
                          style={{ 
                            backgroundColor: expandedStep === index ? '#b85832' : '#dc692f',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
                          }}
                        >
                          <div style={{ transform: 'scale(0.7)' }}>
                            {step.icon}
                          </div>
                        </div>
                      )}

                      <h3 className="text-base font-bold mb-2 transition-all" style={{ color: '#7d472a' }}>{step.title}</h3>
                      <p className="text-xs leading-relaxed mb-2 whitespace-pre-line" style={{ color: '#7d472a', opacity: 0.7 }}>
                        {step.subtitle}
                      </p>
                      <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold transition-transform mb-2" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
                        {step.timeline}
                      </div>
                      <div className="mt-1">
                        <span className="text-xs font-bold hover:underline transition-all" style={{ color: '#dc692f' }}>
                          {expandedStep === index ? '▲ Hide' : '▼ Details'}
                        </span>
                      </div>
                    </button>

                    {/* Dotted Connection Line to Next Step (except last) */}
                    {index < steps.length - 1 && (
                      <svg
                        className="absolute left-full"
                        style={{
                          top: isPaymentStep ? '16px' : '14px',
                          width: '100%',
                          height: index % 2 === 0 ? '100px' : '100px',
                          zIndex: 0,
                          overflow: 'visible',
                          pointerEvents: 'none'
                        }}
                      >
                        <path
                          d={index % 2 === 0 
                            ? "M 10 14 Q 40 14, 50 45 T 90 86"  // Down curve - starts and ends closer to circles
                            : "M 10 86 Q 40 86, 50 55 T 90 14"  // Up curve - starts and ends closer to circles
                          }
                          stroke="#dc692f"
                          strokeWidth="2.5"
                          fill="none"
                          strokeDasharray="6 6"
                          opacity="0.4"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Expanded Content Below All Steps */}
            {expandedStep !== null && (
              <div className="w-full mt-16">
                <div className="bg-white rounded-2xl shadow-2xl p-10 border-2 animate-fadeIn" style={{ borderColor: '#dc692f' }}>
                  <h4 className="text-3xl font-bold mb-6" style={{ color: '#7d472a' }}>
                    {steps[expandedStep].title}
                  </h4>
                  
                  <p className="text-lg leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.85 }}>
                    {steps[expandedStep].description}
                  </p>

                  <div className="rounded-2xl p-8" style={{ backgroundColor: '#fff5f0' }}>
                    <h5 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>What You Get:</h5>
                    <ul className="space-y-4">
                      {steps[expandedStep].deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="text-xl mt-0.5 flex-shrink-0" style={{ color: '#dc692f' }}>•</span>
                          <span className="text-lg leading-relaxed" style={{ color: '#7d472a', opacity: 0.85 }}>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          @keyframes zoomShake {
            0% {
              transform: scale(1) rotate(0deg);
            }
            15% {
              transform: scale(1.1) rotate(-2deg);
            }
            30% {
              transform: scale(1.15) rotate(2deg);
            }
            45% {
              transform: scale(1.18) rotate(-2deg);
            }
            60% {
              transform: scale(1.2) rotate(2deg);
            }
            75% {
              transform: scale(1.18) rotate(-1deg);
            }
            90% {
              transform: scale(1.2) rotate(1deg);
            }
            100% {
              transform: scale(1.2) rotate(0deg);
            }
          }
        `}</style>
      

        {/* What's Included Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2" style={{ borderColor: '#dc692f' }}>
            <h3 className="text-4xl font-bold text-center mb-16" style={{ color: '#7d472a' }}>
              What's Included in Every Campaign
            </h3>

            <div className="grid grid-cols-2 gap-x-16 gap-y-10">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Complete Infrastructure</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>DNS setup, domain warmup, 20-50 email accounts</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>5 Email Variations</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Different angles tested for max replies</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Verified Lead Lists</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>5,000-15,000 contacts matching your ICP</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>5-7 Touch Sequences</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Strategic follow-ups that convert</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>AI Personalization</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Custom variables for every prospect</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>CRM Integration</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Syncs with HubSpot, Salesforce, etc.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Slack Notifications</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Instant alerts for every reply</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Weekly Reports</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Loom videos with full metrics breakdown</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f20' }}>
                  <span style={{ color: '#dc692f', fontSize: '16px' }}>✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Daily Monitoring</h4>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>Deliverability protection & optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 30-Day Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#7d472a' }}>
            Your 30-Day Timeline to Results
          </h3>

          <div className="bg-gradient-to-r from-orange-50 to-white rounded-3xl p-12 border-2" style={{ borderColor: '#dc692f20' }}>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <div className="text-5xl mb-4">📅</div>
                <div className="font-bold text-xl mb-2" style={{ color: '#dc692f' }}>Day 1-2</div>
                <div className="text-base" style={{ color: '#7d472a' }}>Strategy & Setup</div>
              </div>
              
              <div className="flex-shrink-0 w-16 h-1" style={{ backgroundColor: '#dc692f40' }}></div>

              <div className="text-center flex-1">
                <div className="text-5xl mb-4">🔧</div>
                <div className="font-bold text-xl mb-2" style={{ color: '#dc692f' }}>Day 3-10</div>
                <div className="text-base" style={{ color: '#7d472a' }}>System Build</div>
              </div>

              <div className="flex-shrink-0 w-16 h-1" style={{ backgroundColor: '#dc692f40' }}></div>

              <div className="text-center flex-1">
                <div className="text-5xl mb-4">👀</div>
                <div className="font-bold text-xl mb-2" style={{ color: '#dc692f' }}>Day 11-14</div>
                <div className="text-base" style={{ color: '#7d472a' }}>Review & Launch</div>
              </div>
              <div className="flex-shrink-0 w-16 h-1" style={{ backgroundColor: '#dc692f40' }}></div>

              <div className="text-center flex-1">
                <div className="text-5xl mb-4">📧</div>
                <div className="font-bold text-xl mb-2" style={{ color: '#dc692f' }}>Day 15-21</div>
                <div className="text-base" style={{ color: '#7d472a' }}>First Replies</div>
              </div>

              <div className="flex-shrink-0 w-16 h-1" style={{ backgroundColor: '#dc692f40' }}></div>

              <div className="text-center flex-1">
                <div className="text-5xl mb-4">🎉</div>
                <div className="font-bold text-xl mb-2" style={{ color: '#dc692f' }}>Day 22-30</div>
                <div className="text-base" style={{ color: '#7d472a' }}>Meetings Booked</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-3xl font-bold mb-4" style={{ color: '#7d472a' }}>
            Ready to Fill Your Calendar?
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            Book a 15-minute strategy call—no pressure, just a diagnostic to see if we're a fit
          </p>
          <Link to="/book-a-call">
            <button
              className="px-14 py-6 rounded-full font-bold text-2xl shadow-2xl hover:scale-105 transition-transform text-white"
              style={{ backgroundColor: '#dc692f' }}
            >
              Book Your Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [expandedCase, setExpandedCase] = React.useState(null);

  // Load Calendly script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "B2B SaaS • 45 employees",
      preview: "Went from zero cold email infrastructure to 52 qualified meetings per month in just 60 days. Reply rates hit 21% (3x industry average), generating $340K in sales-ready pipeline. The system scaled seamlessly as they added new reps.",
      fullStory: "TechFlow had tried cold email before but struggled with deliverability and targeting. Within 30 days of launching with White Kim, they booked their first 12 meetings. By day 60, they hit 52 meetings/month and haven't looked back. The key was nailing their ICP and building sequences that actually resonated with VP-level buyers.",
      metrics: {
        meetings: 52,
        replyRate: 21,
        pipeline: 340000,
        timeframe: "60 days"
      },
      chartData: [
        { week: "Week 2", meetings: 3, y: 3 },
        { week: "Week 4", meetings: 12, y: 12 },
        { week: "Week 8", meetings: 35, y: 35 },
        { week: "Week 12", meetings: 52, y: 52 }
      ],
      name: "Sarah Chen",
      title: "VP of Sales",
      avatar: null
    },
    {
      company: "Apex Consulting",
      industry: "Professional Services • 120 employees",
      preview: "Built a predictable meeting machine generating 38 qualified conversations monthly with a 19% reply rate. Created $280K in pipeline within 45 days, all while maintaining white-glove deliverability and sender reputation.",
      fullStory: "Apex needed to scale their outbound without burning their domain. We implemented a multi-domain strategy with 30 warmed inboxes, allowing them to send 500+ emails daily while maintaining 96% inbox placement. Their messaging focused on specific pain points in the consulting buying process, which drove the high reply rate.",
      metrics: {
        meetings: 38,
        replyRate: 19,
        pipeline: 280000,
        timeframe: "45 days"
      },
      chartData: [
        { week: "Week 2", meetings: 5, y: 5 },
        { week: "Week 4", meetings: 15, y: 15 },
        { week: "Week 8", meetings: 28, y: 28 },
        { week: "Week 10", meetings: 38, y: 38 }
      ],
      name: "Michael Torres",
      title: "Founder & CEO",
      avatar: null
    },
    {
      company: "DataSync Industries",
      industry: "Manufacturing Tech • 200+ employees",
      preview: "Achieved 45 meetings per month with an exceptional 23% reply rate targeting enterprise accounts. Generated $520K in qualified pipeline over 90 days using multi-touch sequences and strategic personalization at scale.",
      fullStory: "DataSync sells to enterprise manufacturers—a notoriously hard-to-reach audience. We built sequences specifically designed for long sales cycles, with content that educated rather than pitched. The 23% reply rate came from deep personalization using AI snippets pulled from company news, LinkedIn activity, and industry trends. Meetings converted at 40% to opportunities.",
      metrics: {
        meetings: 45,
        replyRate: 23,
        pipeline: 520000,
        timeframe: "90 days"
      },
      chartData: [
        { week: "Week 3", meetings: 4, y: 4 },
        { week: "Week 6", meetings: 18, y: 18 },
        { week: "Week 10", meetings: 32, y: 32 },
        { week: "Week 13", meetings: 45, y: 45 }
      ],
      name: "Jennifer Park",
      title: "Director of Business Development",
      avatar: null
    }
  ];

  return (
    <div className="py-24" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fff5f0 100%)' }}>
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
            PROVEN RESULTS
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>
            Real Companies. Real Results.
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-2" style={{ color: '#7d472a', opacity: 0.7 }}>
            See how we've helped B2B companies fill their pipeline with qualified meetings
          </p>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.6 }}>
            Click any case study below to see detailed metrics and growth charts
          </p>
        </div>

        {/* Case Study Expandable Cards */}
        <div className="max-w-6xl mx-auto space-y-6 mb-20">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300"
              style={{ borderColor: expandedCase === index ? '#dc692f' : '#e5e7eb' }}
            >
              {/* Collapsed Preview */}
              <button
                onClick={() => setExpandedCase(expandedCase === index ? null : index)}
                className="w-full p-10 hover:bg-gray-50 transition text-left"
              >
                <div className="flex items-start gap-8">
                  {/* Company Logo Placeholder */}
                  <div 
                    className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg"
                    style={{ backgroundColor: '#dc692f' }}
                  >
                    {study.company.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2" style={{ color: '#7d472a' }}>
                          {study.company}
                        </h3>
                        <p className="text-base mb-4" style={{ color: '#7d472a', opacity: 0.6 }}>
                          {study.industry}
                        </p>
                      </div>
                      
                      <svg 
                        className="w-10 h-10 transition-transform duration-300 flex-shrink-0"
                        style={{ 
                          transform: expandedCase === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          color: '#dc692f'
                        }}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    <p className="text-lg leading-relaxed" style={{ color: '#7d472a', opacity: 0.85 }}>
                      {study.preview}
                    </p>

                    {expandedCase !== index && (
                      <div className="mt-6 flex items-center gap-3">
                        <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: '#fff5f0', color: '#dc692f' }}>
                          Click to see detailed metrics & growth chart
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <div 
                className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: expandedCase === index ? '1000px' : '0px' }}
              >
                <div className="px-10 pb-10">
                  <div className="border-t-2 pt-8 mb-8" style={{ borderColor: '#dc692f20' }}>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.85 }}>
                      {study.fullStory}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    {/* Left - Chart */}
                    <div className="rounded-2xl p-8" style={{ backgroundColor: '#fff5f0' }}>
                      <h4 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>
                        Meeting Growth Over Time
                      </h4>
                      <div className="relative h-64">
                        <svg className="w-full h-full" viewBox="0 0 400 220">
                          {/* Grid */}
                          <line x1="40" y1="20" x2="40" y2="180" stroke="#e5e7eb" strokeWidth="2"/>
                          <line x1="40" y1="180" x2="380" y2="180" stroke="#e5e7eb" strokeWidth="2"/>
                          
                          {/* Grid lines */}
                          {[0, 1, 2, 3, 4].map((i) => (
                            <line key={i} x1="40" y1={180 - i * 40} x2="380" y2={180 - i * 40} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>
                          ))}
                          
                          {/* Line path */}
                          <polyline
                            points={study.chartData.map((d, i) => `${60 + i * 100},${180 - (d.y * 2.8)}`).join(' ')}
                            fill="none"
                            stroke="#dc692f"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Data points */}
                          {study.chartData.map((d, i) => (
                            <g key={i}>
                              <circle cx={60 + i * 100} cy={180 - (d.y * 2.8)} r="8" fill="#dc692f"/>
                              <circle cx={60 + i * 100} cy={180 - (d.y * 2.8)} r="4" fill="#ffffff"/>
                              <text x={60 + i * 100} y={205} textAnchor="middle" fill="#7d472a" fontSize="14">{d.week}</text>
                              <text x={60 + i * 100} y={180 - (d.y * 2.8) - 15} textAnchor="middle" fill="#dc692f" fontSize="16" fontWeight="bold">{d.meetings}</text>
                            </g>
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* Right - Metrics Grid */}
                    <div>
                      <h4 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>
                        Final Results
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>
                            {study.metrics.meetings}
                          </div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>
                            Meetings/Month
                          </div>
                        </div>

                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>
                            {study.metrics.replyRate}%
                          </div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>
                            Reply Rate
                          </div>
                        </div>

                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>
                            ${(study.metrics.pipeline / 1000).toFixed(0)}K
                          </div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>
                            Pipeline Created
                          </div>
                        </div>

                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>
                            {study.metrics.timeframe}
                          </div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>
                            Timeframe
                          </div>
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: '#fff5f0' }}>
                        <div className="flex items-start gap-4">
                          <div 
                            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white"
                            style={{ backgroundColor: '#dc692f' }}
                          >
                            {study.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>
                              {study.name}
                            </div>
                            <div className="text-sm mb-3" style={{ color: '#7d472a', opacity: 0.6 }}>
                              {study.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendly Embed Section */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2" style={{ borderColor: '#dc692f' }}>
            <div className="text-center p-12 pb-8">
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
                Ready to Get Similar Results?
              </h3>
              <p className="text-xl max-w-2xl mx-auto mb-2" style={{ color: '#7d472a', opacity: 0.7 }}>
                Book a 15-minute strategy call to see if the White Kim Method is right for your business
              </p>
              <p className="text-base" style={{ color: '#7d472a', opacity: 0.6 }}>
                No pressure. No sales pitch. Just an honest diagnostic.
              </p>
            </div>

            <div className="px-12 pb-12">
              <div 
                className="calendly-inline-widget rounded-2xl overflow-hidden shadow-inner" 
                data-url="https://calendly.com/joshbrendonai" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Load Calendly Script */}
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhiteKimMethodSection />
      <TestimonialsSection />
    </>
  );
}
