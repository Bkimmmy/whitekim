import React from 'react';
import { Link } from 'react-router-dom';

function ROICalculator() {
  const [selectedPlan, setSelectedPlan] = React.useState('managed');

  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);

  const [daysTracked, setDaysTracked] = React.useState(90);
  const [performanceModel, setPerformanceModel] = React.useState('you-handle');
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);

  const baseCost = selectedPlan === 'managed' ? 4000 :
                   selectedPlan === 'sprint' ? 0 :
                   2500;

  const domainCost = (numDomains * 12) / 12;
  const emailAccountCost = numEmailAccounts * 5;
  const instantlyCost = 97;
  const emailVerificationCost = 120;
  const leadsPerMonthCost = 70;
  const deliverabilityCheckerCost = 47;

  const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost;

  const emailsPerDay = numEmailAccounts * 20;
  const emailsPerMonth = emailsPerDay * 22;
  const totalReplies = Math.round((emailsPerMonth * replyRate) / 100);
  const positiveReplies = Math.round((totalReplies * positiveReplyRate) / 100);
  const meetingsBooked = Math.round((positiveReplies * replyToMeeting) / 100);

  const monthsTracked = daysTracked / 30;
  const totalEmailsForPeriod = Math.round(emailsPerMonth * monthsTracked);
  const totalRepliesForPeriod = Math.round(totalReplies * monthsTracked);
  const totalPositiveRepliesForPeriod = Math.round(positiveReplies * monthsTracked);
  const totalMeetingsForPeriod = Math.round(meetingsBooked * monthsTracked);
  const closedDealsPerMonth = Math.round((meetingsBooked * closeRate) / 100);
  const totalClosedDealsForPeriod = Math.round(closedDealsPerMonth * monthsTracked);

  const totalRevenue = totalClosedDealsForPeriod * avgDealSize;
  let totalCost, netProfit;

  if (selectedPlan === 'sprint') {
    const infraCost = Math.round((domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost) * monthsTracked + emailVerificationCost);
    totalCost = 5000 + infraCost;
    netProfit = totalRevenue - totalCost;
  } else if (selectedPlan === 'performance') {
    const baseRetainer = 2500 * monthsTracked;
    const infraCost = Math.round((domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost) * monthsTracked + emailVerificationCost);
    totalCost = Math.round(baseRetainer + infraCost);
    const grossProfit = totalRevenue - totalCost;
    const performanceFee = performanceModel === 'you-handle' ? totalMeetingsForPeriod * 750 :
                           performanceModel === 'white-kim' ? totalMeetingsForPeriod * 1500 : 0;
    netProfit = grossProfit - performanceFee;
  } else {
    totalCost = Math.round(totalMonthlyCost * monthsTracked + emailVerificationCost);
    netProfit = totalRevenue - totalCost;
  }

  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const plans = [
    { id: 'sprint', name: 'Sprint', basePrice: '$5,000 one-time' },
    { id: 'managed', name: 'Managed Pipeline', basePrice: 'From $4,000/mo' },
    { id: 'performance', name: 'Performance Partnership', basePrice: 'Custom + Per Meeting' }
  ];

  return (
    <div className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
            Estimate Your Return
          </h2>
          <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
            See what a WhiteKim outbound system could return based on your business metrics.
          </p>
        </div>

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

        <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl shadow-2xl border-2 max-w-7xl mx-auto" style={{ borderColor: '#dc692f' }}>
          <div className="text-center mb-8">
            <p className="text-lg font-bold" style={{ color: '#dc692f' }}>
              Configuration and setup takes 30 days.
            </p>
            <p className="text-base mt-1" style={{ color: '#7d472a' }}>
              Below are the numbers post successful setup.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#7d472a' }}>Your Configuration</h3>

              <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: '#dc692f' }}>
                <h4 className="font-bold text-lg mb-4" style={{ color: '#7d472a' }}>Infrastructure Setup</h4>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Domains</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{numDomains} (${numDomains * 12}/year)</span>
                  </div>
                  <input
                    type="range" min="0" max="100" step="1" value={numDomains}
                    onChange={(e) => setNumDomains(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0</span><span>$12/domain/year</span><span>100</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Email Accounts</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                  </div>
                  <input
                    type="range" min="1" max="500" step="1" value={numEmailAccounts}
                    onChange={(e) => setNumEmailAccounts(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>1</span><span>$5/account/mo</span><span>500</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg" style={{ color: '#7d472a' }}>Your Business Metrics</h4>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Average Deal Size</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="1000" max="100000" step="500" value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>$1K</span><span>$100K</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Close Rate (Meeting to Deal)</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{closeRate}%</span>
                  </div>
                  <input
                    type="range" min="5" max="100" step="1" value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>5%</span><span>100%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Expected Reply Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{replyRate}%</span>
                  </div>
                  <input
                    type="range" min="0.5" max="20" step="0.25" value={replyRate}
                    onChange={(e) => setReplyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0.5%</span><span>Our avg: 2.5%</span><span>20%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{positiveReplyRate}%</span>
                  </div>
                  <input
                    type="range" min="1" max="100" step="1" value={positiveReplyRate}
                    onChange={(e) => setPositiveReplyRate(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${((positiveReplyRate - 1) / 99) * 100}%, #e5e7eb ${((positiveReplyRate - 1) / 99) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>1%</span><span>Our avg: 33%</span><span>100%</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply to Meeting Rate</label>
                    <span className="font-bold" style={{ color: '#dc692f' }}>{replyToMeeting}%</span>
                  </div>
                  <input
                    type="range" min="0" max="50" step="1" value={replyToMeeting}
                    onChange={(e) => setReplyToMeeting(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #dc692f ${(replyToMeeting / 50) * 100}%, #e5e7eb ${(replyToMeeting / 50) * 100}%)` }}
                  />
                  <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                    <span>0%</span><span>Our avg: 35%</span><span>50%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border" style={{ borderColor: '#dc692f20' }}>
                <p className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Monthly Cost Breakdown:</p>
                <div className="space-y-1 text-sm" style={{ color: '#7d472a', opacity: 0.8 }}>
                  <div className="flex justify-between">
                    <span>{selectedPlan === 'sprint' ? 'Sprint (one-time):' : selectedPlan === 'managed' ? 'Base Service (monthly):' : 'Base Retainer (monthly):'}</span>
                    <span className="font-semibold">{selectedPlan === 'sprint' ? '$5,000' : selectedPlan === 'managed' ? '$4,000' : '$2,500'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domains ({numDomains} x $12/year):</span>
                    <span className="font-semibold">${domainCost.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Accounts ({numEmailAccounts} x $5):</span>
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
                    <span>Email Verification (one-time):</span>
                    <span className="font-semibold">$120</span>
                  </div>
                  <div className="flex justify-between pt-2 mt-2 border-t" style={{ borderColor: '#dc692f20' }}>
                    <span className="font-bold">Total/Month:</span>
                    <span className="font-bold" style={{ color: '#dc692f' }}>${totalMonthlyCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold" style={{ color: '#7d472a' }}>Post Setup {daysTracked}-Day Projection</h3>
                <div className="flex items-center gap-3">
                  <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Days:</label>
                  <input
                    type="number" min="1" max="365" value={daysTracked}
                    onChange={(e) => setDaysTracked(Number(e.target.value))}
                    className="w-20 px-3 py-2 border-2 rounded-lg font-bold text-center"
                    style={{ borderColor: '#dc692f', color: '#dc692f' }}
                  />
                </div>
              </div>

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

              <div className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold mb-4" style={{ color: '#7d472a' }}>Financial Projection</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Revenue</span>
                      <span className="font-bold text-xl" style={{ color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-300" style={{ width: totalRevenue > 0 ? '100%' : '0%', backgroundColor: '#dc692f' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Investment</span>
                      <span className="font-bold text-xl" style={{ color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-full transition-all duration-300" style={{ width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%' }}></div>
                    </div>
                  </div>

                  {selectedPlan === 'performance' && (
                    <div className="p-4 bg-orange-50 rounded-xl border" style={{ borderColor: '#dc692f40' }}>
                      <h5 className="font-bold mb-3 text-center text-sm" style={{ color: '#7d472a' }}>Performance Model</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPerformanceModel('you-handle')}
                          className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                          style={{ backgroundColor: performanceModel === 'you-handle' ? '#dc692f' : '#ffffff', color: performanceModel === 'you-handle' ? '#ffffff' : '#7d472a', borderColor: performanceModel === 'you-handle' ? '#dc692f' : '#dc692f40' }}
                        >
                          <div className="text-xs mb-1">Per Booked Meeting</div>
                          <div className="text-base font-bold mt-1">$750/meeting</div>
                        </button>
                        <button
                          onClick={() => setPerformanceModel('white-kim')}
                          className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                          style={{ backgroundColor: performanceModel === 'white-kim' ? '#dc692f' : '#ffffff', color: performanceModel === 'white-kim' ? '#ffffff' : '#7d472a', borderColor: performanceModel === 'white-kim' ? '#dc692f' : '#dc692f40' }}
                        >
                          <div className="text-xs mb-1">Per Qualified Show</div>
                          <div className="text-base font-bold mt-1">$1,500/show</div>
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

              <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-xl text-center border-2" style={{ borderColor: '#dc692f' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Your ROI</div>
                <div className="text-5xl font-bold" style={{ color: '#dc692f' }}>{roi}%</div>
                <p className="text-sm mt-2" style={{ color: '#7d472a', opacity: 0.7 }}>
                  For every $1 spent, you make ${totalCost > 0 ? ((netProfit / totalCost) + 1).toFixed(2) : '0'}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 pt-8 border-t" style={{ borderColor: '#dc692f20' }}>
            <Link to="/book-a-call">
              <button className="px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                Book a Pipeline Sprint Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Link to="/" className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
            <span className="text-white font-bold text-xl">WK</span>
          </Link>
          <span className="font-semibold text-xl" style={{ color: '#7d472a' }}>White Kim</span>
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <Link to="/" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Home</Link>
          <Link to="/services" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Services</Link>
          <Link to="/resources" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Free Resources</Link>
          <Link to="/case-studies" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Case Studies</Link>
        </div>
        <Link to="/book-a-call">
          <button className="text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md" style={{ backgroundColor: '#dc692f' }}>
            BOOK A CALL
          </button>
        </Link>
      </nav>

      {/* Hero */}
      <div className="container mx-auto px-8 py-24 grid grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fff5f0', color: '#dc692f' }}>
            Outbound Pipeline Agency for High-Ticket B2B Service Companies
          </div>
          <h1 className="text-5xl font-bold leading-tight" style={{ color: '#7d472a' }}>
            Find the outbound message that gets qualified prospects to reply.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#7d472a' }}>
            WhiteKim helps high-ticket B2B service companies test their market, validate outbound messaging, and build a repeatable system for booked sales calls.
          </p>
          <div className="flex gap-4 pt-6">
            <Link to="/book-a-call">
              <button className="text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition text-lg shadow-lg" style={{ backgroundColor: '#dc692f' }}>
                Book a Pipeline Sprint Call
              </button>
            </Link>
            <a href="#sprint">
              <button className="border-2 px-10 py-4 rounded-full font-semibold hover:opacity-90 transition" style={{ borderColor: '#dc692f', color: '#dc692f' }}>
                See How the Sprint Works
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Logo Slider */}
      <div className="py-12 border-t border-gray-200">
        <div className="container mx-auto px-8">
          <h2 className="text-center text-3xl font-bold mb-4" style={{ color: '#7d472a' }}>
            Inspired by Leading B2B Companies
          </h2>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            Built with the same outbound strategies used by top B2B teams to scale their pipeline systems.
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll">
              {[...Array(2)].map((_, setIndex) => (
                <React.Fragment key={setIndex}>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg" alt="Asana" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Airtable_Logo.svg" alt="Airtable" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Calendly_Logo.svg" alt="Calendly" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="max-w-full max-h-full object-contain" />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 10s linear infinite; }
      `}</style>

      {/* Problem Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold" style={{ color: '#7d472a' }}>
              Most B2B companies don't have a lead problem. They have a message-market fit problem.
            </h2>
            <p className="text-lg" style={{ color: '#7d472a', opacity: 0.8 }}>
              They don't know which market, list, pain point, or offer angle actually gets qualified prospects to respond. WhiteKim tests this first before scaling volume.
            </p>
            <div className="space-y-4">
              {[
                { title: 'Wrong Market', body: "You're targeting companies that will never buy, no matter how sharp your message is." },
                { title: 'Untested Message', body: "You don't know which offer angle, pain point, or framing actually gets replies. You're guessing." },
                { title: 'Scaling Before Validating', body: "You're sending volume before finding what works, burning budget and domain reputation." },
                { title: 'No Reply-to-Call System', body: "Positive replies fall through the cracks because there is no clear process to turn them into booked sales calls." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
                    <span className="text-white font-bold text-xs">X</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>{item.title}</h3>
                    <p style={{ color: '#7d472a', opacity: 0.7 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: '#dc692f' }}>
              <div className="aspect-video bg-gray-800">
                <iframe
                  src="https://player.vimeo.com/video/1131957554"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Client Video"
                ></iframe>
              </div>
            </div>
            <p className="text-center mt-6 text-xl font-semibold" style={{ color: '#7d472a' }}>
              "Hear it from them first"
            </p>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Outbound That Actually Performs</h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>Average client results in 90 days</p>
          </div>
          <div className="bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl shadow-2xl border-2 max-w-5xl mx-auto" style={{ borderColor: '#dc692f' }}>
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#7d472a' }}>Monthly Meeting Growth</h3>
              <div className="relative h-64">
                <svg className="w-full h-full" viewBox="0 0 600 200">
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#e5e7eb" strokeWidth="1"/>
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#e5e7eb" strokeWidth="1"/>
                  <polyline points="50,150 150,130 250,100 350,70 450,40 550,20" fill="none" stroke="#dc692f" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="50" cy="150" r="6" fill="#dc692f"/>
                  <circle cx="150" cy="130" r="6" fill="#dc692f"/>
                  <circle cx="250" cy="100" r="6" fill="#dc692f"/>
                  <circle cx="350" cy="70" r="6" fill="#dc692f"/>
                  <circle cx="450" cy="40" r="6" fill="#dc692f"/>
                  <circle cx="550" cy="20" r="6" fill="#dc692f"/>
                  <text x="50" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 1</text>
                  <text x="150" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 4</text>
                  <text x="250" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 8</text>
                  <text x="350" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 10</text>
                  <text x="450" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 11</text>
                  <text x="550" y="185" textAnchor="middle" fill="#7d472a" fontSize="12">Week 12</text>
                  <text x="50" y="145" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">8</text>
                  <text x="150" y="125" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">18</text>
                  <text x="250" y="95" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">28</text>
                  <text x="350" y="65" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">38</text>
                  <text x="450" y="35" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">42</text>
                  <text x="550" y="15" textAnchor="middle" fill="#7d472a" fontSize="14" fontWeight="bold">45</text>
                </svg>
              </div>
            </div>
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

      {/* Offer Section */}
      <div id="sprint" className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Three Ways to Work With WhiteKim</h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
              Start with the Sprint. Scale into managed outbound. Partner on performance when the time is right.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Sprint */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 hover:shadow-2xl transition" style={{ borderColor: '#dc692f' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#dc692f20', color: '#dc692f' }}>
                  BEST PLACE TO START
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Outbound Message-Market Fit Sprint</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>Test your market before committing to full outbound.</p>
                <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>Starting at $5,000</div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>one-time</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['ICP audit', 'Offer audit', 'Lead list test (500-1,000 contacts)', '2-4 outbound campaign angles', 'Cold email copy', 'Deliverability and infrastructure check', 'Positive reply tracking', 'Booked-call process', 'Final performance report', 'Scaling recommendation for managed outbound'].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: '#dc692f' }}>✓</span>
                    <span className="text-sm" style={{ color: '#7d472a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/book-a-call">
                <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                  Start With the Sprint
                </button>
              </Link>
            </div>

            {/* Managed Pipeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 hover:shadow-2xl transition" style={{ borderColor: '#dc692f' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Managed Outbound Pipeline System</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>We run the system monthly once the message works.</p>
                <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>Starting at $4,000<span className="text-xl">/mo</span></div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>custom based on volume and scope</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Lead sourcing', 'Cold email infrastructure', 'Copywriting', 'Campaign management', 'Reply handling', 'CRM updates', 'Weekly reporting', 'Meeting booking process', 'Ongoing optimization'].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: '#dc692f' }}>✓</span>
                    <span className="text-sm" style={{ color: '#7d472a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/book-a-call">
                <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                  Get Started
                </button>
              </Link>
            </div>

            {/* Performance Partnership */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 hover:shadow-xl transition" style={{ borderColor: '#e5e7eb' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#f3f4f6', color: '#6b7280' }}>
                  FOR QUALIFIED CLIENTS
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Performance Partnership</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>Aligned on pipeline and revenue outcomes.</p>
                <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>Custom</div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>base retainer + performance fee</p>
              </div>
              <ul className="space-y-3 mb-6">
                {['Option A: Lower retainer + pay per qualified booked meeting', 'Option B: Lower retainer + pay per qualified show', 'Option C: Custom retainer + revenue share on closed deals'].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span style={{ color: '#dc692f' }}>✓</span>
                    <span className="text-sm" style={{ color: '#7d472a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: '#fafafa', border: '1px solid #e5e7eb' }}>
                <p className="text-xs font-semibold mb-2" style={{ color: '#7d472a' }}>Requirements:</p>
                <ul className="space-y-1 text-xs" style={{ color: '#7d472a', opacity: 0.8 }}>
                  <li>Proven offer with case studies</li>
                  <li>$5k+ average deal value</li>
                  <li>CRM tracking in place</li>
                  <li>Sales team available for calls</li>
                  <li>Ability to track closed revenue</li>
                </ul>
                <p className="text-xs mt-3" style={{ color: '#9ca3af' }}>
                  Not available for new businesses, low-ticket offers, or companies without CRM tracking.
                </p>
              </div>
              <Link to="/book-a-call">
                <button className="w-full py-3 rounded-full font-semibold transition border-2 hover:bg-gray-50" style={{ borderColor: '#dc692f', color: '#dc692f' }}>
                  Discuss Eligibility
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <ROICalculator />
    </div>
  );
}

function WhoWeWorkWith() {
  const criteria = [
    '$500k+ annual revenue preferred',
    '$3k+/month or $10k+ offer value',
    'Proven client results and case studies',
    'Can take sales calls weekly',
    'Has capacity for new clients',
    'Uses or will use a CRM'
  ];
  const industries = [
    'B2B agencies',
    'MSPs and IT service providers',
    'Recruiting and staffing firms',
    'Software development agencies',
    'Paid ads, SEO, and web agencies',
    'Fractional CFO and accounting advisory firms',
    'Consulting firms',
    'Commercial service companies with high contract values'
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Who WhiteKim Works With</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            WhiteKim is built for B2B service companies with a proven offer, clear client results, and the ability to close new sales conversations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: '#fff5f0', borderColor: '#dc692f20' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#7d472a' }}>Client Criteria</h3>
            <ul className="space-y-4">
              {criteria.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#dc692f' }}>
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-base" style={{ color: '#7d472a' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 border-2" style={{ backgroundColor: '#fff5f0', borderColor: '#dc692f20' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#7d472a' }}>Industries We Serve</h3>
            <ul className="space-y-4">
              {industries.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#dc692f20' }}>
                    <span style={{ color: '#dc692f', fontSize: '12px' }}>+</span>
                  </div>
                  <span className="text-base" style={{ color: '#7d472a' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhoWeDoNotWorkWith() {
  const disqualifiers = [
    'No proven offer or case studies',
    'No real sales process',
    'No CRM or pipeline tracking',
    'Low-ticket services (under $3k/month or $10k deal value)',
    'Already at full capacity',
    'Cannot follow up with leads within 24 hours',
    'Brand-new businesses with no client results',
    'Want commission-only with no base retainer or tracking visibility'
  ];

  return (
    <div className="py-20" style={{ backgroundColor: '#1c0a02' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Who WhiteKim Is Not For</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            We are not a fit for brand-new businesses, low-ticket offers, companies with no sales process, or teams that cannot handle new sales conversations.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(220,105,47,0.3)' }}>
            <ul className="space-y-4">
              {disqualifiers.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: 'rgba(220,105,47,0.2)' }}>
                    <span style={{ color: '#dc692f', fontSize: '12px', fontWeight: 'bold' }}>X</span>
                  </div>
                  <span className="text-base" style={{ color: 'rgba(255,255,255,0.8)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const [expandedStep, setExpandedStep] = React.useState(null);

  const steps = [
    {
      number: '01',
      title: 'Diagnose',
      subtitle: 'ICP Review\nOffer Audit\nSales Process',
      timeline: 'Week 1',
      description: 'We review your ICP, offer, sales process, current pipeline, and past outbound performance.',
      deliverables: [
        'Review your ideal customer profile and buyer persona',
        'Audit your offer, positioning, and proof points',
        'Assess your current sales process and CRM setup',
        'Review any past outbound data or campaign history',
        'Identify the biggest gaps before we test'
      ]
    },
    {
      number: '02',
      title: 'Test',
      subtitle: 'Lead Lists\nCampaign Angles\nEmail Copy',
      timeline: 'Weeks 2-3',
      description: 'We build verified lead lists and test multiple outbound angles to find what gets qualified prospects to reply.',
      deliverables: [
        'Build and verify lead lists matching your ICP (500-1,000 contacts)',
        'Write 2-4 different campaign angles and cold email copy',
        'Set up deliverability and infrastructure',
        'Launch test campaigns with reply tracking active',
        'Monitor replies and positive replies in real time'
      ]
    },
    {
      number: '03',
      title: 'Validate',
      subtitle: 'Reply Tracking\nCall Quality\nMessage Fit',
      timeline: 'Week 4',
      description: 'We track replies, positive replies, booked calls, and lead quality to find the message-market fit.',
      deliverables: [
        'Track and categorize every reply (positive, neutral, negative)',
        'Measure booked-call rate from positive replies',
        'Assess quality and ICP fit of leads booking calls',
        'Identify which angle, segment, and message performs best',
        'Deliver a final performance report with clear recommendations'
      ]
    },
    {
      number: '04',
      title: 'Scale',
      subtitle: 'Monthly System\nWeekly Reports\nOptimization',
      timeline: 'Ongoing',
      description: 'Once the message works, we turn it into a managed outbound system with weekly reporting and continuous optimization.',
      deliverables: [
        'Transition to Managed Outbound Pipeline System',
        'Expand lead lists and volume based on validated messaging',
        'Weekly reporting: leads, emails, replies, calls, and pipeline',
        'Ongoing copy and targeting optimization',
        'Monthly strategy reviews and ICP expansion'
      ]
    }
  ];

  return (
    <div className="py-20" style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
            THE WHITEKIM PROCESS
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>Diagnose. Test. Validate. Scale.</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            Four steps from first call to a repeatable outbound pipeline.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                className="text-center p-6 rounded-2xl border-2 transition-all hover:shadow-lg"
                style={{
                  backgroundColor: expandedStep === index ? '#dc692f' : '#ffffff',
                  borderColor: expandedStep === index ? '#dc692f' : '#dc692f30',
                  color: expandedStep === index ? '#ffffff' : '#7d472a'
                }}
              >
                <div className="text-4xl font-bold mb-3" style={{ color: expandedStep === index ? 'rgba(255,255,255,0.3)' : '#dc692f15' }}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-xs leading-relaxed whitespace-pre-line mb-3" style={{ opacity: 0.7 }}>{step.subtitle}</p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: expandedStep === index ? 'rgba(255,255,255,0.2)' : '#dc692f', color: '#ffffff' }}>
                  {step.timeline}
                </div>
              </button>
            ))}
          </div>

          {expandedStep !== null && (
            <div className="bg-white rounded-2xl shadow-2xl p-10 border-2" style={{ borderColor: '#dc692f' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-bold" style={{ color: '#dc692f15' }}>{steps[expandedStep].number}</div>
                <h4 className="text-3xl font-bold" style={{ color: '#7d472a' }}>{steps[expandedStep].title}</h4>
              </div>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.85 }}>
                {steps[expandedStep].description}
              </p>
              <div className="rounded-2xl p-8" style={{ backgroundColor: '#fff5f0' }}>
                <h5 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>What happens in this step:</h5>
                <ul className="space-y-4">
                  {steps[expandedStep].deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: '#dc692f' }}>•</span>
                      <span className="text-lg leading-relaxed" style={{ color: '#7d472a', opacity: 0.85 }}>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <Link to="/book-a-call">
            <button className="px-14 py-6 rounded-full font-bold text-2xl shadow-2xl hover:scale-105 transition-transform text-white" style={{ backgroundColor: '#dc692f' }}>
              Book a Pipeline Sprint Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReportingSection() {
  const metrics = [
    { label: 'Leads Added', icon: '👥' },
    { label: 'Emails Sent', icon: '📧' },
    { label: 'Replies', icon: '↩' },
    { label: 'Positive Replies', icon: '✅' },
    { label: 'Calls Booked', icon: '📅' },
    { label: 'Calls Shown', icon: '🎯' },
    { label: 'Pipeline Created', icon: '💰' },
    { label: 'Campaign Tests Running', icon: '🧪' },
    { label: 'Next Actions', icon: '→' }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
            You will always know what is happening.
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            Every client gets full visibility into their outbound pipeline. No black boxes. No vanity metrics. Weekly reporting covers:
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border-2 hover:shadow-lg transition" style={{ borderColor: '#dc692f20', backgroundColor: '#fff5f0' }}>
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="font-semibold text-base" style={{ color: '#7d472a' }}>{metric.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/book-a-call">
            <button className="px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
              Book a Pipeline Sprint Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [expandedCase, setExpandedCase] = React.useState(null);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "B2B SaaS - 45 employees",
      preview: "Went from zero cold email infrastructure to 52 qualified meetings per month in just 60 days. Reply rates hit 21% (3x industry average), generating $340K in sales-ready pipeline.",
      fullStory: "TechFlow had tried cold email before but struggled with deliverability and targeting. Within 30 days of launching with White Kim, they booked their first 12 meetings. By day 60, they hit 52 meetings/month. The key was nailing their ICP and building sequences that actually resonated with VP-level buyers.",
      metrics: { meetings: 52, replyRate: 21, pipeline: 340000, timeframe: "60 days" },
      chartData: [{ week: "Week 2", meetings: 3, y: 3 }, { week: "Week 4", meetings: 12, y: 12 }, { week: "Week 8", meetings: 35, y: 35 }, { week: "Week 12", meetings: 52, y: 52 }],
      name: "Sarah Chen", title: "VP of Sales"
    },
    {
      company: "Apex Consulting",
      industry: "Professional Services - 120 employees",
      preview: "Built a predictable meeting machine generating 38 qualified conversations monthly with a 19% reply rate. Created $280K in pipeline within 45 days.",
      fullStory: "Apex needed to scale their outbound without burning their domain. We implemented a multi-domain strategy with 30 warmed inboxes, allowing them to send 500+ emails daily while maintaining 96% inbox placement.",
      metrics: { meetings: 38, replyRate: 19, pipeline: 280000, timeframe: "45 days" },
      chartData: [{ week: "Week 2", meetings: 5, y: 5 }, { week: "Week 4", meetings: 15, y: 15 }, { week: "Week 8", meetings: 28, y: 28 }, { week: "Week 10", meetings: 38, y: 38 }],
      name: "Michael Torres", title: "Founder & CEO"
    },
    {
      company: "DataSync Industries",
      industry: "Manufacturing Tech - 200+ employees",
      preview: "Achieved 45 meetings per month with an exceptional 23% reply rate targeting enterprise accounts. Generated $520K in qualified pipeline over 90 days.",
      fullStory: "DataSync sells to enterprise manufacturers. We built sequences specifically designed for long sales cycles, with content that educated rather than pitched. The 23% reply rate came from deep personalization using company news, LinkedIn activity, and industry trends.",
      metrics: { meetings: 45, replyRate: 23, pipeline: 520000, timeframe: "90 days" },
      chartData: [{ week: "Week 3", meetings: 4, y: 4 }, { week: "Week 6", meetings: 18, y: 18 }, { week: "Week 10", meetings: 32, y: 32 }, { week: "Week 13", meetings: 45, y: 45 }],
      name: "Jennifer Park", title: "Director of Business Development"
    }
  ];

  return (
    <div className="py-24" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fff5f0 100%)' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
            CLIENT RESULTS
          </div>
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>What Clients Have Achieved</h2>
          <p className="text-xl max-w-3xl mx-auto mb-2" style={{ color: '#7d472a', opacity: 0.7 }}>
            Qualified meetings, pipeline created, and outbound systems that run month over month.
          </p>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#7d472a', opacity: 0.6 }}>
            Click any result below to see detailed metrics and growth charts.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-300" style={{ borderColor: expandedCase === index ? '#dc692f' : '#e5e7eb' }}>
              <button onClick={() => setExpandedCase(expandedCase === index ? null : index)} className="w-full p-10 hover:bg-gray-50 transition text-left">
                <div className="flex items-start gap-8">
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg" style={{ backgroundColor: '#dc692f' }}>
                    {study.company.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold mb-2" style={{ color: '#7d472a' }}>{study.company}</h3>
                        <p className="text-base mb-4" style={{ color: '#7d472a', opacity: 0.6 }}>{study.industry}</p>
                      </div>
                      <svg className="w-10 h-10 transition-transform duration-300 flex-shrink-0" style={{ transform: expandedCase === index ? 'rotate(180deg)' : 'rotate(0deg)', color: '#dc692f' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <p className="text-lg leading-relaxed" style={{ color: '#7d472a', opacity: 0.85 }}>{study.preview}</p>
                    {expandedCase !== index && (
                      <div className="mt-6">
                        <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: '#fff5f0', color: '#dc692f' }}>Click to see detailed metrics and growth chart</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>

              <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: expandedCase === index ? '1000px' : '0px' }}>
                <div className="px-10 pb-10">
                  <div className="border-t-2 pt-8 mb-8" style={{ borderColor: '#dc692f20' }}>
                    <p className="text-lg leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.85 }}>{study.fullStory}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="rounded-2xl p-8" style={{ backgroundColor: '#fff5f0' }}>
                      <h4 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>Meeting Growth Over Time</h4>
                      <div className="relative h-64">
                        <svg className="w-full h-full" viewBox="0 0 400 220">
                          <line x1="40" y1="20" x2="40" y2="180" stroke="#e5e7eb" strokeWidth="2"/>
                          <line x1="40" y1="180" x2="380" y2="180" stroke="#e5e7eb" strokeWidth="2"/>
                          {[0,1,2,3,4].map((i) => (<line key={i} x1="40" y1={180 - i * 40} x2="380" y2={180 - i * 40} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4"/>))}
                          <polyline points={study.chartData.map((d, i) => `${60 + i * 100},${180 - (d.y * 2.8)}`).join(' ')} fill="none" stroke="#dc692f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
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
                    <div>
                      <h4 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>Results</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>{study.metrics.meetings}</div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>Meetings/Month</div>
                        </div>
                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>{study.metrics.replyRate}%</div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>Reply Rate</div>
                        </div>
                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>${(study.metrics.pipeline / 1000).toFixed(0)}K</div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>Pipeline Created</div>
                        </div>
                        <div className="rounded-xl p-6 text-center border-2" style={{ borderColor: '#dc692f20' }}>
                          <div className="text-4xl font-bold mb-2" style={{ color: '#dc692f' }}>{study.metrics.timeframe}</div>
                          <div className="text-sm font-semibold" style={{ color: '#7d472a' }}>Timeframe</div>
                        </div>
                      </div>
                      <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: '#fff5f0' }}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold text-white" style={{ backgroundColor: '#dc692f' }}>
                            {study.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-bold text-lg mb-1" style={{ color: '#7d472a' }}>{study.name}</div>
                            <div className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>{study.title}</div>
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

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2" style={{ borderColor: '#dc692f' }}>
            <div className="text-center p-12 pb-8">
              <h3 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Ready to Find Your Winning Message?</h3>
              <p className="text-xl max-w-2xl mx-auto mb-2" style={{ color: '#7d472a', opacity: 0.7 }}>
                Book a call to see if the WhiteKim Sprint is right for your business.
              </p>
              <p className="text-base" style={{ color: '#7d472a', opacity: 0.6 }}>
                No pressure. No pitch. An honest look at whether we can help.
              </p>
            </div>
            <div className="px-12 pb-12">
              <div className="calendly-inline-widget rounded-2xl overflow-hidden shadow-inner" data-url="https://calendly.com/joshbrendonai" style={{ minWidth: '320px', height: '700px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeWorkWith />
      <WhoWeDoNotWorkWith />
      <ProcessSection />
      <ReportingSection />
      <TestimonialsSection />
    </>
  );
}
