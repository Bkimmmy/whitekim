import React from 'react';

export default function OutboundSprintPage() {
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);
  const [daysTracked, setDaysTracked] = React.useState(90);
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);
  const [openFaq, setOpenFaq] = React.useState(null);

  const baseCost = 5000;
  const domainCost = numDomains * 12;
  const emailAccountCost = numEmailAccounts * 5;
  const instantlyCost = 97;
  const monthlyInfrastructureCost = domainCost + emailAccountCost + instantlyCost;

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
  const totalCost = baseCost + Math.round(monthlyInfrastructureCost * monthsTracked);
  const netProfit = totalRevenue - totalCost;
  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const features = [
    {
      icon: '🎯',
      title: 'ICP Diagnosis',
      description: 'We define exactly who to target and why -- your ideal customer profile mapped to the right buying signals and decision-makers.'
    },
    {
      icon: '✍️',
      title: 'Message Variant Testing',
      description: '5 different angles written and tested simultaneously so you learn what actually resonates, not just what sounds good.'
    },
    {
      icon: '📤',
      title: 'Real Prospect Outreach',
      description: '500-1,000 real prospects contacted over 4 weeks, giving you actual market signal instead of guesses.'
    },
    {
      icon: '🔧',
      title: 'Deliverability Setup',
      description: 'Full DNS, domain purchasing, and warm-up configuration so your emails land in inboxes from day one.'
    },
    {
      icon: '📊',
      title: 'Split-Test Reporting',
      description: 'Clear data on which message performed and why -- open rates, reply rates, and patterns across all 5 variants.'
    },
    {
      icon: '📋',
      title: 'Sprint Summary Report',
      description: 'Winning message, key insights, and a direct recommendation on what to do next -- whether that is scale, pivot, or pause.'
    }
  ];

  const timeline = [
    {
      week: 'Week 1',
      title: 'Diagnose',
      items: [
        'ICP definition session',
        'Offer positioning review',
        'Domain purchase and DNS setup',
        'Infrastructure warm-up begins'
      ]
    },
    {
      week: 'Week 2-3',
      title: 'Test',
      items: [
        '5 message variants written',
        'Real prospect outreach begins',
        'Daily monitoring and adjustments',
        'Reply tracking across all variants'
      ]
    },
    {
      week: 'Week 4',
      title: 'Validate',
      items: [
        'Full result analysis',
        'Best-performing message identified',
        'Reply handling and conversation review',
        'Data compiled for final report'
      ]
    },
    {
      week: 'End of Sprint',
      title: 'Scale Recommendation',
      items: [
        'Sprint summary report delivered',
        'Winning message and positioning documented',
        'Clear recommendation on whether to continue',
        'Roadmap for next steps if applicable'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What happens after the Sprint?',
      answer: "You'll have real data on what message works. From there, you can continue independently, upgrade to our Managed Pipeline system, or just walk away with the winning message. We'll give you a clear recommendation."
    },
    {
      question: 'Do we need technical knowledge?',
      answer: 'No. We handle the full setup -- domains, DNS, warm-up, and tool configuration. You just show up for the kickoff call and review the results.'
    },
    {
      question: 'What if no message gets replies?',
      answer: "We'll tell you clearly what happened and why. Sometimes it's the offer, sometimes the ICP. We don't spin bad results -- we give you the honest read."
    },
    {
      question: 'How many prospects do you contact?',
      answer: 'Between 500 and 1,000 targeted prospects over the 4 weeks, depending on your ICP and list availability. Every contact is manually verified against your target criteria.'
    },
    {
      question: 'Can we upgrade to the Managed Pipeline after the Sprint?',
      answer: 'Yes. If the Sprint identifies a message that works, moving to the Managed Pipeline system is a natural next step. We will walk you through what that looks like at the end of the Sprint.'
    }
  ];

  const whatsIncluded = [
    'ICP diagnosis and targeting strategy',
    '5 outbound message variants crafted for your offer',
    '500-1,000 prospect outreach over 4 weeks',
    'Real split-test results across all variants',
    'Full deliverability setup (DNS, domains, warm-up)',
    'Sprint summary report with winning message and next-step recommendation'
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dc692f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>WK</span>
          </div>
          <span style={{ fontWeight: '600', fontSize: '20px', color: '#7d472a' }}>White Kim</span>
        </div>

        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500' }}>
          <a href="/" style={{ color: '#7d472a', textDecoration: 'none' }}>Home</a>
          <a href="/services" style={{ color: '#7d472a', textDecoration: 'none' }}>Services and Solutions</a>
          <a href="/resources" style={{ color: '#7d472a', textDecoration: 'none' }}>Free Resources</a>
          <a href="/case-studies" style={{ color: '#7d472a', textDecoration: 'none' }}>Case Studies</a>
        </div>

        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '12px 28px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            BOOK A CALL
          </button>
        </a>
      </nav>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            {/* Left -- Offer Details */}
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
                FRONT-END OFFER
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                Outbound Message-Market Fit Sprint
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                A focused 4-week engagement to find the outbound message that gets your target buyers to reply. One-time investment, no ongoing commitment.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>$5,000</div>
                <div style={{ fontSize: '20px', color: '#7d472a', opacity: 0.6 }}>one-time</div>
              </div>

              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '4px' }}>
                  <strong>Plus ongoing infrastructure if you continue:</strong>
                </p>
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.8 }}>
                  ~$500-700/month (domains, email accounts, tools)
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 32px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 4px 12px rgba(220, 105, 47, 0.3)' }}>
                    Book Strategy Call
                  </button>
                </a>
                <a href="/case-studies" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: 'white', color: '#7d472a', padding: '16px 32px', borderRadius: '9999px', fontWeight: '600', border: '2px solid #dc692f', cursor: 'pointer', fontSize: '16px' }}>
                    View Case Studies
                  </button>
                </a>
              </div>
            </div>

            {/* Right -- What's Included Card */}
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '2px solid rgba(220,105,47,0.12)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>What's Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                {whatsIncluded.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '20px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '24px' }}>⏱️</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>4-Week Sprint</div>
                    <div style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>From kickoff to summary report</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>📊</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Real Market Data</div>
                    <div style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>Actual reply data from real prospects</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              What We Do During the Sprint
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
              Four weeks of focused testing to find the outbound message your buyers actually respond to
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ padding: '32px', backgroundColor: '#fff5f0', borderRadius: '16px', border: '1px solid rgba(220,105,47,0.12)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{feature.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Your 4-Week Sprint Timeline
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              From ICP diagnosis to winning message in one month
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {timeline.map((phase, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '32px', backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid rgba(220,105,47,0.12)' }}>
                <div>
                  <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                    {phase.week}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a' }}>{phase.title}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ fontSize: '16px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              See What the Sprint Could Unlock
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Estimate what happens when you find a message that gets replies.
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '48px', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '2px solid #dc692f' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

              {/* Left Column -- Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7d472a' }}>Your Configuration</h3>

                {/* Infrastructure */}
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #dc692f' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Infrastructure Setup</h4>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Domains</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{numDomains} (${domainCost}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={numDomains}
                      onChange={(e) => setNumDomains(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Email Accounts</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={numEmailAccounts}
                      onChange={(e) => setNumEmailAccounts(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>
                </div>

                {/* Business Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7d472a' }}>Your Business Metrics</h4>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Average Deal Size</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="500"
                      value={avgDealSize}
                      onChange={(e) => setAvgDealSize(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Close Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{closeRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Reply Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{replyRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="20"
                      step="0.25"
                      value={replyRate}
                      onChange={(e) => setReplyRate(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Positive Reply Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{positiveReplyRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={positiveReplyRate}
                      onChange={(e) => setPositiveReplyRate(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((positiveReplyRate - 5) / 95) * 100}%, #e5e7eb ${((positiveReplyRate - 5) / 95) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Reply to Meeting Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{replyToMeeting}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={replyToMeeting}
                      onChange={(e) => setReplyToMeeting(Number(e.target.value))}
                      style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((replyToMeeting - 5) / 95) * 100}%, #e5e7eb ${((replyToMeeting - 5) / 95) * 100}%)`, cursor: 'pointer' }}
                    />
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid rgba(220,105,47,0.25)' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#7d472a' }}>Total Investment:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#7d472a', opacity: 0.8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Sprint Fee (one-time):</span>
                      <span style={{ fontWeight: '600' }}>${baseCost.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Monthly Infrastructure:</span>
                      <span style={{ fontWeight: '600' }}>${monthlyInfrastructureCost}/mo</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid rgba(220,105,47,0.12)', fontSize: '14px', fontWeight: 'bold', color: '#7d472a' }}>
                      <span>Total for {daysTracked} days:</span>
                      <span style={{ color: '#dc692f' }}>${totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column -- Results */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7d472a' }}>{daysTracked}-Day Projection</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#7d472a' }}>Days:</label>
                    <input
                      type="number"
                      min="1"
                      max="365"
                      value={daysTracked}
                      onChange={(e) => setDaysTracked(Number(e.target.value))}
                      style={{ width: '70px', padding: '8px', border: '2px solid #dc692f', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', color: '#dc692f', textAlign: 'center' }}
                    />
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Email Volume</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalEmailsForPeriod.toLocaleString()}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Total Emails</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalRepliesForPeriod}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Replies</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalPositiveRepliesForPeriod}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Positive</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalMeetingsForPeriod}</div>
                    <div style={{ fontSize: '13px', color: '#7d472a' }}>Meetings</div>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalClosedDealsForPeriod}</div>
                    <div style={{ fontSize: '13px', color: '#7d472a' }}>Closed Deals</div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#7d472a' }}>Financial Projection</h4>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Total Revenue</span>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: totalRevenue > 0 ? '100%' : '0%', height: '100%', backgroundColor: '#dc692f', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Total Investment</span>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%', height: '100%', backgroundColor: '#9ca3af', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(220,105,47,0.12)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#7d472a' }}>Net Profit</span>
                      <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #dc692f 0%, #ff8c5a 100%)', padding: '24px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 16px rgba(220, 105, 47, 0.3)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', opacity: 0.9, marginBottom: '8px' }}>Your ROI</div>
                  <div style={{ fontSize: '56px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{roi}%</div>
                  <p style={{ fontSize: '14px', color: 'white', opacity: 0.9 }}>
                    For every $1 spent, you make ${totalCost > 0 ? (totalRevenue / totalCost).toFixed(2) : '0'}
                  </p>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                  <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                    <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 48px', borderRadius: '9999px', fontWeight: '600', fontSize: '18px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(220, 105, 47, 0.3)' }}>
                      Book a Call to Get Started
                    </button>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Everything you need to know about the Sprint
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(220,105,47,0.12)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '18px', fontWeight: '600', color: '#7d472a' }}>{faq.question}</span>
                  <span style={{ fontSize: '24px', color: '#dc692f', transition: 'transform 0.3s', transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <p style={{ fontSize: '16px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Sprint vs Managed Pipeline
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Start with the Sprint, then decide what comes next
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Left -- Current Offer */}
            <div style={{ backgroundColor: '#fff5f0', padding: '40px', borderRadius: '16px', border: '2px solid #dc692f' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                YOU'RE VIEWING
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Outbound Message-Market Fit Sprint</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#dc692f', marginBottom: '8px' }}>$5,000</div>
              <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>one-time</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Find your winning outbound message',
                  '4-week focused timeline',
                  'Real prospect data, not guesses',
                  'No ongoing commitment required',
                  'Best starting point for outbound'
                ].map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                    <span style={{ fontSize: '15px', color: '#7d472a' }}>{bullet}</span>
                  </div>
                ))}
              </div>

              <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', marginTop: '24px', backgroundColor: '#dc692f', color: 'white', padding: '14px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  Get Started
                </button>
              </a>
            </div>

            {/* Right -- What's Next */}
            <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '16px', border: '2px solid #e5e7eb' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#9ca3af', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                WHAT'S NEXT
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Managed Outbound Pipeline System</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', marginBottom: '8px' }}>From $4,000</div>
              <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>/month</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'We run everything ongoing',
                  'Continuous message testing and iteration',
                  'ICP expansion as you scale',
                  'Weekly performance reporting',
                  'Dedicated pipeline manager'
                ].map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ fontSize: '18px', color: '#9ca3af' }}>✓</span>
                    <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.6 }}>{bullet}</span>
                  </div>
                ))}
              </div>

              <a href="/services" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', marginTop: '24px', backgroundColor: 'white', color: '#7d472a', padding: '14px', borderRadius: '9999px', fontWeight: '600', border: '2px solid #7d472a', cursor: 'pointer' }}>
                  View Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>
            Ready to Find Your Winning Message?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '48px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Start with the Sprint and get real data on what resonates with your buyers -- before committing to anything ongoing.
          </p>

          <a href="/book-a-call" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '20px 56px', borderRadius: '9999px', fontWeight: '600', fontSize: '20px', border: 'none', cursor: 'pointer', boxShadow: '0 12px 32px rgba(220, 105, 47, 0.4)' }}>
              Book Your Strategy Call Now
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}
