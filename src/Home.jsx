import React from 'react';
import { Link } from 'react-router-dom';
import brendonPhoto from './assets/1760379034665.jpeg';
import {
  IconUsers, IconMail, IconMessageSquare, IconCheckCircle, IconCalendar,
  IconUserCheck, IconTrendingUp, IconFlask, IconArrowRightCircle, IconCheck
} from './icons';

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
  const apolloPhoneVerifierCost = 60;

  const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost;

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
    const infraCost = Math.round((domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost) * monthsTracked + emailVerificationCost);
    totalCost = 5000 + infraCost;
    netProfit = totalRevenue - totalCost;
  } else if (selectedPlan === 'performance') {
    const baseRetainer = 2500 * monthsTracked;
    const infraCost = Math.round((domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost) * monthsTracked + emailVerificationCost);
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
                    {/* Cost breakdown under Total Investment */}
                    <div className="mt-3 space-y-1 text-xs" style={{ color: '#7d472a', opacity: 0.75 }}>
                      {selectedPlan === 'sprint' && (
                        <div className="flex justify-between">
                          <span>Sprint (one-time)</span>
                          <span className="font-semibold">$5,000</span>
                        </div>
                      )}
                      {selectedPlan === 'managed' && (
                        <div className="flex justify-between">
                          <span>Managed Pipeline (monthly)</span>
                          <span className="font-semibold">$4,000/mo</span>
                        </div>
                      )}
                      {selectedPlan === 'performance' && (
                        <div className="flex justify-between">
                          <span>Base Retainer (monthly)</span>
                          <span className="font-semibold">$2,500/mo</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Domains ({numDomains} x $12/yr)</span>
                        <span className="font-semibold">${domainCost.toFixed(0)}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email Accounts ({numEmailAccounts} x $5)</span>
                        <span className="font-semibold">${emailAccountCost}/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instantly.ai</span>
                        <span className="font-semibold">$97/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Leads</span>
                        <span className="font-semibold">$70/mo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email Verification (one-time)</span>
                        <span className="font-semibold">$120</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Apollo Phone Verifier</span>
                        <span className="font-semibold">$60/mo</span>
                      </div>
                      <div className="flex justify-between pt-1 mt-1 border-t font-semibold" style={{ borderColor: 'rgba(220,105,47,0.2)', opacity: 1 }}>
                        <span style={{ color: '#7d472a' }}>Monthly Infra</span>
                        <span style={{ color: '#dc692f' }}>${(domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost).toFixed(0)}/mo</span>
                      </div>
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
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* Nav */}
      <nav className="wk-nav">
        <div className="flex items-center gap-2">
          <Link to="/" className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
            <span className="text-white font-bold text-xl">WK</span>
          </Link>
          <span className="font-semibold text-xl" style={{ color: '#7d472a' }}>White Kim</span>
        </div>
        <div className="wk-nav-links">
          <Link to="/" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Home</Link>
          <Link to="/services" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Services</Link>
          <Link to="/resources" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Free Resources</Link>
          <Link to="/case-studies" className="transition hover:opacity-70" style={{ color: '#7d472a' }}>Case Studies</Link>
        </div>
        <Link to="/book-a-call" className="wk-nav-cta">
          <button className="text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md" style={{ backgroundColor: '#dc692f' }}>
            BOOK A CALL
          </button>
        </Link>
        <button className="wk-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`wk-mobile-nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/resources" onClick={() => setMenuOpen(false)}>Free Resources</Link>
        <Link to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
        <Link to="/book-a-call" onClick={() => setMenuOpen(false)} style={{ color: '#dc692f', fontWeight: '700' }}>Book a Call</Link>
      </div>

      {/* Hero */}
      <div className="w-full px-5 sm:px-8 lg:px-16 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fff5f0', color: '#dc692f' }}>
            Fully Managed Outbound for $2M+ High-Ticket B2B Companies
          </div>
          <h1 className="text-5xl font-bold leading-tight" style={{ color: '#7d472a' }}>
            We book your qualified sales meetings. You just take the calls.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#7d472a' }}>
            WhiteKim helps $2M+ high-ticket B2B companies book qualified sales meetings through a fully managed outbound system across cold email, LinkedIn/DM, and phone. We handle targeting, lead lists, messaging, inbox setup, cold email, LinkedIn/DM outreach, calling, follow-up, testing, reporting, and weekly pipeline intelligence. You only take qualified sales calls.
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

        {/* Right side — Quick Qualifier card + Brendon intro */}
        <div className="flex flex-col gap-4">
        <div className="rounded-2xl p-8 border-2 shadow-xl" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(220,105,47,0.15)' }}>
          <div className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3" style={{ backgroundColor: '#dc692f', color: 'white' }}>
              QUICK QUALIFIER
            </div>
            <h3 className="text-xl font-bold mb-1" style={{ color: '#7d472a' }}>Is WhiteKim the right fit?</h3>
            <p className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>Check every box before booking a call.</p>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { label: 'Revenue', value: '$2M+ annual revenue (prefer $5M+)' },
              { label: 'Deal size', value: '$10k+ deal value or $3k+/mo retainer' },
              { label: 'Offer', value: 'Proven offer with real client results' },
              { label: 'Sales', value: 'You or your team can close sales calls' },
              { label: 'Process', value: 'CRM, pipeline stages, and follow-up in place' },
              { label: 'Capacity', value: 'Room to take on new clients right now' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#dc692f' }}>
                  <IconCheck size={10} color="white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#dc692f' }}>{item.label} </span>
                  <span className="text-sm" style={{ color: '#7d472a' }}>{item.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t" style={{ borderColor: 'rgba(220,105,47,0.15)' }}>
            <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>If you checked all six, let's talk about whether outbound can move the needle for you.</p>
            <Link to="/book-a-call">
              <button className="w-full py-3 rounded-full font-semibold text-white hover:opacity-90 transition" style={{ backgroundColor: '#dc692f' }}>
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>

        {/* Brendon intro card */}
        <div className="flex items-center gap-4 p-5 rounded-2xl" style={{ backgroundColor: '#fff5f0', border: '1px solid rgba(220,105,47,0.15)' }}>
          <img
            src={brendonPhoto}
            alt="Brendon Kim"
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '3px solid #dc692f', flexShrink: 0 }}
          />
          <div>
            <div className="font-bold text-base" style={{ color: '#7d472a' }}>Brendon Kim</div>
            <div className="text-sm font-semibold" style={{ color: '#dc692f' }}>Founder, WhiteKim</div>
            <div className="text-sm mt-1" style={{ color: '#7d472a', opacity: 0.7 }}>Founder-led. Direct access to decision-making from day one.</div>
          </div>
        </div>

        </div>

      </div>

      {/* Logo Slider */}
      <div className="py-12 border-t border-gray-200">
        <div className="w-full px-5 sm:px-8 lg:px-16">
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
        <div className="w-full px-5 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
        <div className="w-full px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Outbound That Actually Performs</h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>Average client results in 90 days</p>
          </div>
          <div className="bg-gradient-to-br from-white to-orange-50 p-12 rounded-3xl shadow-2xl border-2 max-w-5xl mx-auto" style={{ borderColor: '#dc692f' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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
        <div className="w-full px-5 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Your 90-Day Pipeline Sprint</h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
              Get the full outbound engine running in 90 days. Then scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto">

            {/* Sprint */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 hover:shadow-2xl transition" style={{ borderColor: '#dc692f' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#dc692f20', color: '#dc692f' }}>
                  BEST PLACE TO START
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>90-Day Pipeline Sprint</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>Full outbound engine with market intelligence attached.</p>
                <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>$5,000</div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>one-time + infrastructure costs</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['ICP Revenue Map', 'Market message testing (pain, offer, angle)', 'Email infrastructure setup', 'Cold email outreach', 'LinkedIn/DM outreach', 'Cold calling', 'Reply handling + meeting booking', 'Lead handoff brief before every call', 'Weekly pipeline intelligence report', 'Scale plan for month 2+'].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <IconCheck size={16} color="#dc692f" />
                    <span className="text-sm" style={{ color: '#7d472a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link to="/services/sprint">
                  <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                    See Full Details
                  </button>
                </Link>
                <Link to="/book-a-call">
                  <button className="w-full py-3 rounded-full font-semibold transition border-2" style={{ borderColor: '#dc692f', color: '#dc692f', backgroundColor: 'transparent' }}>
                    Book a Call
                  </button>
                </Link>
              </div>
            </div>

            {/* Managed Pipeline */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 hover:shadow-2xl transition" style={{ borderColor: '#dc692f' }}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>Monthly Outbound Engine</h3>
                <p className="text-sm mb-4" style={{ color: '#7d472a', opacity: 0.7 }}>We run the full multi-channel system every month.</p>
                <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>$4,000<span className="text-xl">/mo</span></div>
                <p className="text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>+ infrastructure</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Lead sourcing', 'Cold email infrastructure', 'Copywriting', 'Campaign management', 'Reply handling', 'CRM updates', 'Weekly reporting', 'Meeting booking process', 'Ongoing optimization'].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <IconCheck size={16} color="#dc692f" />
                    <span className="text-sm" style={{ color: '#7d472a' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link to="/services/managed-pipeline">
                  <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                    See Full Details
                  </button>
                </Link>
                <Link to="/book-a-call">
                  <button className="w-full py-3 rounded-full font-semibold transition border-2" style={{ borderColor: '#dc692f', color: '#dc692f', backgroundColor: 'transparent' }}>
                    Book a Call
                  </button>
                </Link>
              </div>
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
                    <IconCheck size={16} color="#dc692f" />
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
              <div className="flex flex-col gap-3">
                <Link to="/services/performance-partnership">
                  <button className="w-full py-3 rounded-full font-semibold hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                    See Full Details
                  </button>
                </Link>
                <Link to="/book-a-call">
                  <button className="w-full py-3 rounded-full font-semibold transition border-2" style={{ borderColor: '#dc692f', color: '#dc692f', backgroundColor: 'transparent' }}>
                    Book a Call
                  </button>
                </Link>
              </div>
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
  const rows = [
    { category: 'Revenue', requirement: '$5M+/year preferred' },
    { category: 'Minimum revenue', requirement: '$2M+/year minimum — only if sales process is proven' },
    { category: 'Business type', requirement: 'High-ticket B2B agency' },
    { category: 'Offer', requirement: 'Proven offer with real client results' },
    { category: 'Deal size', requirement: '$10k+ average deal value or $3k+/mo retainer' },
    { category: 'Sales ability', requirement: 'Can already close sales calls' },
    { category: 'Sales process', requirement: 'Has CRM, pipeline stages, follow-up process, and close-rate tracking' },
    { category: 'Capacity', requirement: 'Can take on new clients without fulfillment breaking' },
    { category: 'Follow-up speed', requirement: 'Can respond to positive replies within 24 hours' },
    { category: 'Financial stability', requirement: 'Can pay base retainer and commit for 90+ days' },
    { category: 'Best-fit industries', requirement: 'Agencies, MSPs, recruiting/staffing, software dev, consulting, fractional CFO/accounting, high-ticket service firms' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>Who WhiteKim Works With</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            We work best with established high-ticket B2B agencies that have a proven offer, a working sales process, and the capacity to close new business.
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(220,105,47,0.15)', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#dc692f' }}>
                <th style={{ padding: '14px 24px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px', width: '30%' }}>Category</th>
                <th style={{ padding: '14px 24px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Requirement</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : '#fff5f0', borderBottom: '1px solid rgba(220,105,47,0.08)' }}>
                  <td style={{ padding: '14px 24px', fontSize: '14px', fontWeight: '600', color: '#7d472a', verticalAlign: 'top' }}>{row.category}</td>
                  <td style={{ padding: '14px 24px', fontSize: '14px', color: '#7d472a', lineHeight: '1.5' }}>{row.requirement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function WhoWeDoNotWorkWith() {
  const rows = [
    { category: 'Revenue', reason: 'Under $1M/year' },
    { category: 'Business stage', reason: 'Brand-new business or early agency' },
    { category: 'Offer', reason: 'No proven offer or case studies' },
    { category: 'Deal size', reason: 'Average deal value under $10k or monthly retainer under $3k/mo' },
    { category: 'Sales ability', reason: 'Cannot close leads' },
    { category: 'Sales process', reason: 'No CRM, no pipeline, no follow-up system' },
    { category: 'Tracking', reason: 'No close-rate tracking or sales data' },
    { category: 'Capacity', reason: 'Already at full capacity' },
    { category: 'Cash flow', reason: 'Volatile cash flow / needs leads to survive this month' },
    { category: 'Payment preference', reason: 'Wants commission-only with no base retainer' },
    { category: 'Fulfillment', reason: 'Cannot onboard new clients within 30-60 days' },
    { category: 'Lead handling', reason: 'Cannot follow up with positive replies fast' },
  ];

  return (
    <div className="py-20" style={{ backgroundColor: '#1c0a02' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Who WhiteKim Is Not For</h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Small, volatile businesses become our volatility. If the structure below isn't in place, outbound won't fix it.
          </p>
        </div>
        <div style={{ maxWidth: '900px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(220,105,47,0.3)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(220,105,47,0.25)' }}>
                <th style={{ padding: '14px 24px', textAlign: 'left', color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '14px', width: '30%' }}>Category</th>
                <th style={{ padding: '14px 24px', textAlign: 'left', color: 'rgba(255,255,255,0.9)', fontWeight: '600', fontSize: '14px' }}>Not a Fit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <td style={{ padding: '14px 24px', fontSize: '14px', fontWeight: '600', color: '#dc692f', verticalAlign: 'top' }}>{row.category}</td>
                  <td style={{ padding: '14px 24px', fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
      title: 'Revenue + ICP Map',
      subtitle: 'Who Is Most Likely to Buy',
      timeline: 'Week 1',
      description: 'We identify the accounts and buyer titles most likely to convert for your specific offer, deal size, and market.',
      deliverables: [
        'Map your revenue profile and ICP against total addressable market',
        'Identify the buyer titles, company sizes, and industries most likely to buy',
        'Build a prioritized target segment list ranked by conversion potential',
        'Define the outbound entry point and angle for each segment',
        'Confirm capacity and onboarding constraints before launch'
      ]
    },
    {
      number: '02',
      title: 'Market Message Test',
      subtitle: 'Pain Points, Offers, Angles',
      timeline: 'Week 2',
      description: 'We write and test multiple pain points, offer angles, and message frames to find what gets qualified buyers to respond.',
      deliverables: [
        'Write 3-5 distinct outbound angles targeting different pains and outcomes',
        'Build verified lead lists of 500-1,000 contacts per angle',
        'Set up deliverability infrastructure and inbox warming',
        'Launch controlled split tests across all angles simultaneously',
        'Track reply rate, positive reply rate, and qualified interest by angle'
      ]
    },
    {
      number: '03',
      title: 'Infrastructure Build',
      subtitle: 'Inboxes, Domains, Tools, Tracking',
      timeline: 'Week 2-3',
      description: 'We build and configure your complete outbound infrastructure so every message lands in the inbox and every reply is tracked.',
      deliverables: [
        'Set up sending domains and configure DNS records',
        'Create and warm email inboxes for safe volume',
        'Configure LinkedIn outreach workflows and DM sequences',
        'Set up cold calling system with call tracking and notes',
        'Connect CRM, reporting dashboards, and Slack reply alerts'
      ]
    },
    {
      number: '04',
      title: 'Multi-Channel Outreach',
      subtitle: 'Email, LinkedIn/DM, Phone',
      timeline: 'Weeks 3-4+',
      description: 'We run coordinated outreach across cold email, LinkedIn DMs, and phone to reach buyers through every channel they actually respond to.',
      deliverables: [
        'Launch cold email sequences to verified, segmented prospect lists',
        'Run LinkedIn connection and DM outreach to the same target accounts',
        'Execute cold calling to high-priority accounts that opened or engaged',
        'Coordinate multi-touch sequences so each channel reinforces the others',
        'Monitor volume, deliverability, and response rates in real time'
      ]
    },
    {
      number: '05',
      title: 'Reply + Call Handling',
      subtitle: 'Follow Up, Qualify, Book',
      timeline: 'Ongoing',
      description: 'We handle every reply, follow up with interested prospects, qualify them against your ICP, and book them on your calendar.',
      deliverables: [
        'Respond to every positive reply within business hours',
        'Qualify prospects against your ICP definition before booking',
        'Handle objections and re-engage prospects who went cold',
        'Book confirmed meetings directly on your sales calendar',
        'Log every conversation outcome in your CRM'
      ]
    },
    {
      number: '06',
      title: 'Lead Handoff Brief',
      subtitle: 'Context Before Every Call',
      timeline: 'Before Each Call',
      description: 'Before every qualified meeting, you get a written brief with the buyer context, pain point they responded to, and conversation history.',
      deliverables: [
        'Buyer name, title, company, and LinkedIn profile',
        'Which pain point and offer angle they responded to',
        'Full conversation thread from outreach to booking',
        'Company size, revenue estimate, and relevant context',
        'Suggested opening and known objections to prepare for'
      ]
    },
    {
      number: '07',
      title: 'Weekly Pipeline Intelligence',
      subtitle: 'What Market, Title, Pain, Channel Is Working',
      timeline: 'Every Week',
      description: 'Every week you get a full report showing exactly which segment, buyer title, pain point, offer angle, and channel is converting.',
      deliverables: [
        'Emails sent, LinkedIn touches, calls made, and reply rates by channel',
        'Positive reply rate and meeting booking rate by angle and segment',
        'Which buyer titles and company sizes are responding best',
        'Which pain point and offer framing is outperforming others',
        'Recommended adjustments for the following week based on data'
      ]
    },
    {
      number: '08',
      title: 'Scale the Winner',
      subtitle: 'Double Down on What Converts',
      timeline: 'Month 2+',
      description: 'Once we know what segment, message, and channel is working, we expand volume and scale the winning combination.',
      deliverables: [
        'Increase outreach volume on the highest-converting segment and angle',
        'Expand lead lists in the proven ICP category',
        'Add additional channels or sequences to the winning segment',
        'Retire underperforming angles and replace with new tests',
        'Build a repeatable monthly outbound engine around the proven formula'
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
          <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>8 Steps From First Call to a Full Pipeline Engine</h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
            We identify, test, build, launch, handle, brief, report, and scale. You close.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {steps.slice(0, 4).map((step, index) => (
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
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ opacity: 0.7 }}>{step.subtitle}</p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: expandedStep === index ? 'rgba(255,255,255,0.2)' : '#dc692f', color: '#ffffff' }}>
                  {step.timeline}
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {steps.slice(4).map((step, index) => (
              <button
                key={index + 4}
                onClick={() => setExpandedStep(expandedStep === index + 4 ? null : index + 4)}
                className="text-center p-6 rounded-2xl border-2 transition-all hover:shadow-lg"
                style={{
                  backgroundColor: expandedStep === index + 4 ? '#dc692f' : '#ffffff',
                  borderColor: expandedStep === index + 4 ? '#dc692f' : '#dc692f30',
                  color: expandedStep === index + 4 ? '#ffffff' : '#7d472a'
                }}
              >
                <div className="text-4xl font-bold mb-3" style={{ color: expandedStep === index + 4 ? 'rgba(255,255,255,0.3)' : '#dc692f15' }}>
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ opacity: 0.7 }}>{step.subtitle}</p>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: expandedStep === index + 4 ? 'rgba(255,255,255,0.2)' : '#dc692f', color: '#ffffff' }}>
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
    { label: 'Leads Added', icon: <IconUsers size={32} color="#dc692f" /> },
    { label: 'Emails Sent', icon: <IconMail size={32} color="#dc692f" /> },
    { label: 'Replies', icon: <IconMessageSquare size={32} color="#dc692f" /> },
    { label: 'Positive Replies', icon: <IconCheckCircle size={32} color="#dc692f" /> },
    { label: 'Calls Booked', icon: <IconCalendar size={32} color="#dc692f" /> },
    { label: 'Calls Shown', icon: <IconUserCheck size={32} color="#dc692f" /> },
    { label: 'Pipeline Created', icon: <IconTrendingUp size={32} color="#dc692f" /> },
    { label: 'Campaign Tests Running', icon: <IconFlask size={32} color="#dc692f" /> },
    { label: 'Next Actions', icon: <IconArrowRightCircle size={32} color="#dc692f" /> }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto mb-12">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center p-6 rounded-2xl border-2 hover:shadow-lg transition" style={{ borderColor: '#dc692f20', backgroundColor: '#fff5f0' }}>
              <div className="mb-3 flex justify-center">{metric.icon}</div>
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

function GuaranteeSection() {
  return (
    <div className="py-20" style={{ backgroundColor: '#1c0a02' }}>
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: 'rgba(220,105,47,0.2)', color: '#dc692f' }}>
            OUR GUARANTEE
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            We put our fee on the line.
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Two guarantees. Both in writing. No fine print.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(220,105,47,0.3)' }}>
            <div className="text-3xl font-bold mb-4" style={{ color: '#dc692f' }}>10 / 30</div>
            <h3 className="text-xl font-bold text-white mb-3">Launch + Market Response Guarantee</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>
              If we do not launch your full email + LinkedIn/DM + call system in 10 business days and generate qualified market response data in 30 days, your next monthly management fee is free.
            </p>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(220,105,47,0.3)' }}>
            <div className="text-3xl font-bold mb-4" style={{ color: '#dc692f' }}>No Quota = No Fee</div>
            <h3 className="text-xl font-bold text-white mb-3">Meeting Quota Guarantee</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>
              If we do not hit the agreed qualified-meeting quota in the sprint window, we continue managing outreach at no additional management fee until we hit it. Client-paid infrastructure and software costs still apply.
            </p>
          </div>
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
              <div className="calendly-inline-widget rounded-2xl overflow-hidden shadow-inner" data-url="https://calendly.com/brendon-whitekim/15min" style={{ minWidth: '320px', height: '700px' }}></div>
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
      <GuaranteeSection />
      <TestimonialsSection />
    </>
  );
}
