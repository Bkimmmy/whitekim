import React from 'react';
import Nav from './Nav';
import {
  IconTarget, IconEdit, IconMessageSquare, IconBarChart, IconDollarSign, IconRefresh,
  IconLayers, IconMail, IconCheckCircle, IconCalendar, IconUserCheck, IconTrendingUp,
  IconFlask, IconArrowRightCircle, IconPhone, IconZap, IconFileText, IconStar, IconCheck
} from './icons';

function PerformanceCalculator() {
  const [pricingModel, setPricingModel] = React.useState('per-meeting');
  const [retainer, setRetainer] = React.useState(2000);
  const [rates, setRates] = React.useState({
    'per-lead': 150,
    'per-meeting': 750,
    'per-show': 1500,
    'per-closed-deal': 2000,
    'revenue-share': 10,
  });
  const [closedDealType, setClosedDealType] = React.useState('fixed');
  const [volumePerMonth, setVolumePerMonth] = React.useState(10);
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);

  const models = [
    { id: 'per-lead', label: 'Per Qualified Lead', unit: 'leads/mo' },
    { id: 'per-meeting', label: 'Per Booked Meeting', unit: 'meetings/mo' },
    { id: 'per-show', label: 'Per Meeting Showed', unit: 'shows/mo' },
    { id: 'per-closed-deal', label: 'Per Closed Deal', unit: 'deals/mo' },
    { id: 'revenue-share', label: 'Revenue Share', unit: 'deals/mo' },
  ];

  const currentModel = models.find(m => m.id === pricingModel);
  const setRate = (id, val) => setRates(prev => ({ ...prev, [id]: val }));
  const parseRate = (val) => { const n = parseFloat(val); return isNaN(n) ? 0 : n; };

  const monthlyRevenue = Math.round(volumePerMonth * (closeRate / 100) * avgDealSize);

  let performanceFee = 0;
  if (pricingModel === 'revenue-share') {
    performanceFee = Math.round(monthlyRevenue * (rates['revenue-share'] / 100));
  } else if (pricingModel === 'per-closed-deal' && closedDealType === 'percent') {
    performanceFee = Math.round(monthlyRevenue * (rates['per-closed-deal'] / 100));
  } else {
    performanceFee = Math.round(rates[pricingModel] * volumePerMonth);
  }

  const totalMonthly = retainer + performanceFee;
  const netProfit = monthlyRevenue - totalMonthly;
  const roi = totalMonthly > 0 ? ((netProfit / totalMonthly) * 100).toFixed(0) : 0;

  const inputStyle = {
    border: '1.5px solid rgba(220,105,47,0.3)', borderRadius: '8px', padding: '8px 10px',
    fontSize: '14px', fontWeight: '600', color: '#7d472a', outline: 'none',
    width: '100px', textAlign: 'right', backgroundColor: 'white'
  };
  const prefixStyle = {
    position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
    fontSize: '13px', color: '#dc692f', fontWeight: '700', pointerEvents: 'none'
  };
  const toggleBtn = (active) => ({
    padding: '4px 12px', fontSize: '12px', fontWeight: '700', border: '1.5px solid',
    borderColor: active ? '#dc692f' : 'rgba(220,105,47,0.2)',
    backgroundColor: active ? '#dc692f' : 'white',
    color: active ? 'white' : '#7d472a',
    borderRadius: '6px', cursor: 'pointer'
  });

  return (
    <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
            Model Your Performance Partnership Cost
          </h2>
          <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
            Set your rates, pick a pricing model, adjust expected volume -- see your projected cost and return.
          </p>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #fff5f0, #ffffff)', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '2px solid #dc692f' }}>

          {/* Row 1: Rate Configuration */}
          <div style={{ marginBottom: '36px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#7d472a', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Set Your Rates</h3>
            <div className="wk-rate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '16px', alignItems: 'end' }}>

              {/* Retainer */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Monthly Retainer</label>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>$</span>
                  <input type="number" min="0" value={retainer}
                    onChange={e => setRetainer(parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>/mo</span>
              </div>

              {/* Per Lead */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Per Qualified Lead</label>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>$</span>
                  <input type="number" min="0" value={rates['per-lead']}
                    onChange={e => setRate('per-lead', parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>/lead</span>
              </div>

              {/* Per Meeting */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Per Booked Meeting</label>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>$</span>
                  <input type="number" min="0" value={rates['per-meeting']}
                    onChange={e => setRate('per-meeting', parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>/meeting</span>
              </div>

              {/* Per Show */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Per Meeting Showed</label>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>$</span>
                  <input type="number" min="0" value={rates['per-show']}
                    onChange={e => setRate('per-show', parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>/show</span>
              </div>

              {/* Per Closed Deal - fixed or % toggle */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Per Closed Deal</label>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                  <button onClick={() => setClosedDealType('fixed')} style={toggleBtn(closedDealType === 'fixed')}>$</button>
                  <button onClick={() => setClosedDealType('percent')} style={toggleBtn(closedDealType === 'percent')}>%</button>
                </div>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>{closedDealType === 'fixed' ? '$' : '%'}</span>
                  <input type="number" min="0" value={rates['per-closed-deal']}
                    onChange={e => setRate('per-closed-deal', parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>{closedDealType === 'fixed' ? '/deal (flat)' : '% of deal value'}</span>
              </div>

              {/* Revenue Share */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>Revenue Share</label>
                <div style={{ position: 'relative' }}>
                  <span style={prefixStyle}>%</span>
                  <input type="number" min="0" max="100" value={rates['revenue-share']}
                    onChange={e => setRate('revenue-share', parseRate(e.target.value))}
                    style={{ ...inputStyle, width: '100%', paddingLeft: '22px' }} />
                </div>
                <span style={{ fontSize: '11px', color: '#7d472a', opacity: 0.5 }}>% of closed revenue</span>
              </div>

            </div>
          </div>

          {/* Row 2: Model Selector */}
          <div style={{ marginBottom: '36px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#7d472a', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Pricing Model</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {models.map(m => (
                <button key={m.id} onClick={() => setPricingModel(m.id)} style={{
                  padding: '10px 20px', borderRadius: '9999px', fontWeight: '600', fontSize: '14px',
                  border: '2px solid', cursor: 'pointer', transition: 'all 0.2s',
                  backgroundColor: pricingModel === m.id ? '#dc692f' : '#fff5f0',
                  color: pricingModel === m.id ? 'white' : '#7d472a',
                  borderColor: pricingModel === m.id ? '#dc692f' : 'rgba(220,105,47,0.2)',
                }}>
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Volume sliders + Output */}
          <div className="wk-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

            {/* Left: Volume Inputs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#7d472a', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Volume Assumptions</h3>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Expected {currentModel.unit}</label>
                  <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{volumePerMonth}/mo</span>
                </div>
                <input type="range" min="1" max="50" step="1" value={volumePerMonth}
                  onChange={e => setVolumePerMonth(Number(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((volumePerMonth - 1) / 49) * 100}%, #e5e7eb ${((volumePerMonth - 1) / 49) * 100}%)`, cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                  <span>1</span><span>50</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Average Deal Size</label>
                  <span style={{ fontWeight: 'bold', color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                </div>
                <input type="range" min="5000" max="200000" step="1000" value={avgDealSize}
                  onChange={e => setAvgDealSize(Number(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((avgDealSize - 5000) / 195000) * 100}%, #e5e7eb ${((avgDealSize - 5000) / 195000) * 100}%)`, cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                  <span>$5K</span><span>$200K</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Your Close Rate</label>
                  <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{closeRate}%</span>
                </div>
                <input type="range" min="5" max="80" step="5" value={closeRate}
                  onChange={e => setCloseRate(Number(e.target.value))}
                  style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 75) * 100}%, #e5e7eb ${((closeRate - 5) / 75) * 100}%)`, cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                  <span>5%</span><span>80%</span>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#7d472a', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Monthly Projection</h3>

              {/* Cost Breakdown */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(220,105,47,0.12)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#7d472a', marginBottom: '16px' }}>Cost Breakdown</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#7d472a' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Base Retainer</span>
                    <span style={{ fontWeight: '600' }}>${retainer.toLocaleString()}/mo</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>
                      {pricingModel === 'revenue-share'
                        ? `Revenue Share (${rates['revenue-share']}% of $${monthlyRevenue.toLocaleString()})`
                        : pricingModel === 'per-closed-deal' && closedDealType === 'percent'
                          ? `Per Closed Deal (${rates['per-closed-deal']}% x $${monthlyRevenue.toLocaleString()} rev)`
                          : `${currentModel.label} (${volumePerMonth} x $${rates[pricingModel].toLocaleString()})`}
                    </span>
                    <span style={{ fontWeight: '600' }}>${performanceFee.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(220,105,47,0.15)', fontWeight: '700', fontSize: '15px' }}>
                    <span style={{ color: '#7d472a' }}>Total Monthly</span>
                    <span style={{ color: '#dc692f' }}>${totalMonthly.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Revenue & ROI */}
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid rgba(220,105,47,0.12)' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#7d472a', marginBottom: '16px' }}>Revenue Projection</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', color: '#7d472a' }}>Expected Monthly Revenue</span>
                      <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#dc692f' }}>${monthlyRevenue.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', backgroundColor: '#dc692f', borderRadius: '9999px', width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '13px', color: '#7d472a' }}>Total Investment</span>
                      <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#7d472a' }}>${totalMonthly.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', backgroundColor: '#9ca3af', borderRadius: '9999px', width: monthlyRevenue > 0 ? `${Math.min((totalMonthly / monthlyRevenue) * 100, 100)}%` : '0%' }} />
                    </div>
                  </div>
                  <div style={{ paddingTop: '10px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '15px', fontWeight: '600', color: '#7d472a' }}>Net Profit</span>
                      <span style={{ fontSize: '26px', fontWeight: 'bold', color: netProfit >= 0 ? '#dc692f' : '#ef4444' }}>${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Box */}
              <div style={{ background: 'linear-gradient(135deg, #fde8d8, #fff5f0)', padding: '28px', borderRadius: '16px', textAlign: 'center', border: '2px solid #dc692f' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: '#7d472a' }}>Your Monthly ROI</div>
                <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#dc692f', lineHeight: '1' }}>{roi}%</div>
                <p style={{ fontSize: '14px', marginTop: '12px', color: '#7d472a', opacity: 0.7 }}>
                  For every $1 invested, you get back ${totalMonthly > 0 ? ((netProfit / totalMonthly) + 1).toFixed(2) : '0'}
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
            <a href="/book-a-call" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '16px 40px', borderRadius: '9999px', fontWeight: '600', fontSize: '17px', boxShadow: '0 8px 24px rgba(220,105,47,0.3)', color: 'white', backgroundColor: '#dc692f', border: 'none', cursor: 'pointer' }}>
                Apply for Partnership
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = React.useState(null);

  const steps = [
    {
      icon: <IconPhone size={36} color="currentColor" />,
      title: 'Application Call',
      subtitle: 'Fit Assessment\nOffer Review\nEligibility',
      timeline: '30 min',
      description: 'We start with an honest diagnostic call to determine if there is a real fit. No pitch. Just a look at your offer, market, and whether performance pricing makes sense for your situation.',
      deliverables: [
        'Review your offer, deal size, and average ticket value',
        'Assess your sales process and ability to close inbound meetings',
        'Evaluate your CRM tracking and close-rate data',
        'Confirm you meet the minimum eligibility requirements',
        'Walk through what success looks like and set realistic expectations'
      ]
    },
    {
      icon: <IconFileText size={36} color="currentColor" />,
      title: 'Proposal',
      subtitle: 'Pricing Model\nSuccess Definition\nAgreement',
      timeline: '1-2 days',
      description: 'We put together a custom proposal outlining the pricing structure, target segment, what counts as a qualified meeting, and what the engagement looks like in practice.',
      deliverables: [
        'Custom retainer + per-meeting pricing outlined in writing',
        'Clear definition of what constitutes a qualified meeting',
        'ICP and target segment agreed upon before any outreach begins',
        'Timeline for infrastructure setup and first campaign launch',
        'Full scope of work with roles, responsibilities, and reporting cadence'
      ]
    },
    {
      icon: <IconZap size={36} color="currentColor" />,
      title: 'Setup & Launch',
      subtitle: 'Infrastructure\nCampaigns Live\nFirst Data',
      timeline: 'Weeks 1-3',
      description: 'We build the outbound system, get campaigns live, and you start seeing real data within the first 30 days.',
      deliverables: [
        'Full infrastructure setup: domains, email accounts, DNS, deliverability',
        'ICP targeting strategy and lead list build',
        'Outbound copy written for 2-4 proven angles',
        'Campaigns launched to your target market',
        'Reply tracking and Slack alerts configured from day one'
      ]
    },
    {
      icon: <IconTrendingUp size={36} color="currentColor" />,
      title: 'Ongoing',
      subtitle: 'Performance Billing\nWeekly Reports\nOptimization',
      timeline: 'Monthly',
      description: 'You pay the base retainer each month and the per-meeting fee for every qualified meeting that lands on your calendar. Complete transparency every step of the way.',
      deliverables: [
        'Weekly performance report: emails sent, replies, meetings booked',
        'Monthly optimization review: adjust targeting, copy, and ICP as data comes in',
        'Per-meeting billing tied to qualified meetings that actually showed up',
        'Ongoing A/B testing to improve reply and booking rates',
        'Strategic check-ins to align outbound with your capacity and pipeline goals'
      ]
    }
  ];

  return (
    <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 20px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.05em' }}>
            HOW THE PARTNERSHIP WORKS
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
            From Application to Consistent Meetings
          </h2>
          <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '640px', margin: '0 auto' }}>
            A four-step process from eligibility check to ongoing performance-based outbound.
          </p>
        </div>

        <div className="wk-grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setExpandedStep(expandedStep === index ? null : index)}
              style={{
                padding: '28px 20px',
                borderRadius: '16px',
                border: '2px solid',
                borderColor: expandedStep === index ? '#dc692f' : 'rgba(220,105,47,0.18)',
                backgroundColor: expandedStep === index ? '#dc692f' : '#ffffff',
                color: expandedStep === index ? '#ffffff' : '#7d472a',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{step.title}</h3>
              <p style={{ fontSize: '12px', opacity: 0.75, whiteSpace: 'pre-line', marginBottom: '12px', lineHeight: '1.5' }}>{step.subtitle}</p>
              <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '700', backgroundColor: expandedStep === index ? 'rgba(255,255,255,0.2)' : '#dc692f', color: '#ffffff' }}>
                {step.timeline}
              </div>
            </button>
          ))}
        </div>

        {expandedStep !== null && (
          <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '40px', border: '2px solid #dc692f', boxShadow: '0 8px 32px rgba(220,105,47,0.1)' }}>
            <h4 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{steps[expandedStep].title}</h4>
            <p style={{ fontSize: '17px', color: '#7d472a', opacity: 0.85, marginBottom: '28px', lineHeight: '1.6' }}>{steps[expandedStep].description}</p>
            <div style={{ backgroundColor: '#fff5f0', borderRadius: '12px', padding: '28px' }}>
              <h5 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#7d472a' }}>What happens in this step:</h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {steps[expandedStep].deliverables.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#dc692f', flexShrink: 0, marginTop: '2px' }}>•</span>
                    <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.85, lineHeight: '1.6' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PayForPerformance() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const features = [
    { icon: <IconLayers size={48} color="#dc692f" />, title: 'Full Outbound System', description: 'We set up targeting, sequences, and the complete technical infrastructure. You get a system built to run month over month, not a one-time setup.' },
    { icon: <IconEdit size={48} color="#dc692f" />, title: 'Message Testing', description: 'We run controlled tests on positioning and copy until we find the angle that generates real replies from your specific ICP.' },
    { icon: <IconMessageSquare size={48} color="#dc692f" />, title: 'Reply Handling', description: 'We manage positive replies on your behalf, qualify prospects, and get confirmed meetings on your calendar -- so you only show up to close.' },
    { icon: <IconBarChart size={48} color="#dc692f" />, title: 'Transparent Reporting', description: 'Weekly reports showing emails sent, replies received, meetings booked, and which campaigns are performing. No vanity metrics.' },
    { icon: <IconDollarSign size={48} color="#dc692f" />, title: 'Performance Billing', description: 'You pay a base retainer that covers infrastructure and management, plus a per-meeting fee for every qualified meeting that shows up on your calendar.' },
    { icon: <IconRefresh size={48} color="#dc692f" />, title: 'Ongoing Optimization', description: 'We continuously test new angles, expand your ICP, and optimize targeting based on what the data shows is working each month.' }
  ];

  const pricingOptions = [
    {
      label: 'Option 1',
      title: 'Retainer + Per Qualified Lead',
      description: 'Pay the base retainer plus a flat fee for every verified prospect that meets your ICP definition and replies with interest.',
      best: 'Best for: teams building large pipelines who do their own qualification'
    },
    {
      label: 'Option 2',
      title: 'Retainer + Per Booked Meeting',
      description: 'Pay the base retainer plus a fee for every qualified meeting booked on your calendar — regardless of whether they show.',
      best: 'Best for: teams with strong closers and reliable show rates'
    },
    {
      label: 'Option 3',
      title: 'Retainer + Per Meeting That Showed',
      description: 'Pay only for meetings where the prospect actually showed up and engaged. No-shows do not count.',
      best: 'Best for: teams that want to pay only for real sales conversations'
    },
    {
      label: 'Option 4',
      title: 'Retainer + Per Closed Deal',
      description: 'Pay the base retainer plus a flat fee for every deal that closes with attribution to outbound. Requires CRM tracking.',
      best: 'Best for: high-ticket offers with long sales cycles and trackable close data'
    },
    {
      label: 'Option 5',
      title: 'Retainer + Revenue Share',
      description: 'Pay the base retainer plus a percentage of revenue from deals closed that trace back to outbound activity.',
      best: 'Best for: established partnerships with verified revenue attribution in place'
    }
  ];

  const testimonials = [
    { name: 'Sarah Chen', company: 'TechFlow Solutions', role: 'VP of Sales', quote: 'The performance model aligned us perfectly. We only paid more when we were actually closing business. It changed how we thought about outbound spend.', result: '52 meetings/month' },
    { name: 'Michael Torres', company: 'Apex Consulting', role: 'Founder & CEO', quote: 'The retainer covered the system costs and the per-meeting fee felt like pure ROI. Best outbound arrangement we have had.', result: '$280K pipeline in 45 days' },
    { name: 'Jennifer Park', company: 'DataSync Industries', role: 'Director of BD', quote: 'We were skeptical about performance pricing but it forced both sides to be accountable. That is actually what we needed.', result: '45 meetings/month' }
  ];

  const faqs = [
    { question: 'Why is there a base retainer if it is performance-based?', answer: 'Infrastructure, list building, copy, and management have real costs regardless of how many meetings book. The base retainer covers those fixed costs. The per-meeting fee is where the performance alignment kicks in.' },
    { question: 'What counts as a qualified meeting?', answer: 'We define this together before we start. Typically: booked on your calendar, fits your ICP definition, and showed up to the call. We agree on the definition upfront so there is no ambiguity later.' },
    { question: 'Do I need to do the Sprint first?', answer: 'Not always. If you have proven messaging, past outbound data, and a clear ICP, we may be able to skip directly to the Partnership. Most new clients start with the Sprint to validate message-market fit before committing to performance pricing.' },
    { question: 'What if no meetings are booked in a month?', answer: 'You pay the base retainer only. We do not charge a per-meeting fee if no meetings land. We will also flag this early and work to identify the issue before it becomes a pattern.' },
    { question: 'What are the eligibility requirements?', answer: 'You need a proven offer with real client results, an average deal value of $10k+ or monthly retainer of $3k+, CRM tracking in place, a sales team ready to close, and the ability to track closed revenue. We will confirm all of this on the application call.' },
    { question: 'Can we cancel anytime?', answer: 'Yes. This is a month-to-month arrangement with 30 days notice. We do not do long-term contracts because we want to earn your business each month based on results.' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      <Nav activePage="/services" />

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="wk-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#9ca3af', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.05em' }}>
                FOR QUALIFIED CLIENTS
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                Performance Partnership
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                For established high-ticket B2B agencies ready to scale outbound with pricing tied to actual results. We run the full system and you pay a base retainer plus a performance fee for every qualified meeting that lands on your calendar.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>Custom</div>
              </div>
              <p style={{ fontSize: '16px', color: '#7d472a', opacity: 0.6, marginBottom: '28px' }}>Base retainer + per qualified meeting booked</p>

              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '8px' }}>
                  <strong>To qualify you need:</strong>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['$10k+ average deal value or $3k+/mo retainer offer', 'Proven offer with real client results', 'CRM tracking and close-rate data in place', 'Sales team ready to close inbound meetings'].map((req, i) => (
                    <p key={i} style={{ fontSize: '14px', color: '#7d472a', opacity: 0.8 }}>• {req}</p>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 32px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 4px 12px rgba(220,105,47,0.3)' }}>
                    Apply for Partnership
                  </button>
                </a>
                <a href="/case-studies" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: 'white', color: '#7d472a', padding: '16px 32px', borderRadius: '9999px', fontWeight: '600', border: '2px solid #dc692f', cursor: 'pointer', fontSize: '16px' }}>
                    View Case Studies
                  </button>
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '2px solid rgba(220,105,47,0.12)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>Pricing Options</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {pricingOptions.map((opt, idx) => (
                    <div key={idx} style={{ padding: '16px', borderRadius: '10px', border: '1px solid rgba(220,105,47,0.15)', backgroundColor: '#fff5f0' }}>
                      <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: '700', marginBottom: '8px' }}>{opt.label}</div>
                      <p style={{ fontSize: '15px', fontWeight: '700', color: '#7d472a', marginBottom: '6px' }}>{opt.title}</p>
                      <p style={{ fontSize: '13px', color: '#7d472a', opacity: 0.8, lineHeight: '1.5', marginBottom: '6px' }}>{opt.description}</p>
                      <p style={{ fontSize: '12px', color: '#dc692f', fontWeight: '600' }}>{opt.best}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(220,105,47,0.15)', border: '2px solid #dc692f' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>What Makes This Different</h3>
                  <IconStar size={22} color="#dc692f" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'We have skin in the game — we win when you win',
                    'Full outbound system managed end-to-end',
                    'Performance fee tied to meetings that actually showed',
                    'No long-term contracts, month-to-month',
                    'Complete transparency on every metric'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ flexShrink: 0 }}><IconCheck size={18} color="#dc692f" /></span>
                      <span style={{ fontSize: '15px', color: '#7d472a', fontWeight: '500' }}>{item}</span>
                    </div>
                  ))}
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
              Everything Included in the Partnership
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
              Full outbound lead generation system with pricing tied to the results we deliver together.
            </p>
          </div>
          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {features.map((f, idx) => (
              <div key={idx} style={{ padding: '32px', backgroundColor: '#fff5f0', borderRadius: '16px', border: '1px solid rgba(220,105,47,0.12)' }}>
                <div style={{ marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{f.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data & Reporting Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#1c0a02' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(220,105,47,0.2)', color: '#dc692f', padding: '6px 20px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.05em' }}>
              COMPLETE TRANSPARENCY
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              Data You Can Hold Us Accountable To
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto' }}>
              Because you pay based on results, you get full visibility into every number that drives those results. No hiding behind vanity metrics.
            </p>
          </div>
          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: <IconMail size={28} color="rgba(255,255,255,0.85)" />, metric: 'Emails Sent by Campaign', detail: 'Volume and delivery rate by angle, so you know exactly what outreach is active.' },
              { icon: <IconMessageSquare size={28} color="rgba(255,255,255,0.85)" />, metric: 'Reply Rate by Angle', detail: 'Which messages are getting responses and at what rate -- the core leading indicator.' },
              { icon: <IconCheckCircle size={28} color="rgba(255,255,255,0.85)" />, metric: 'Positive Reply Count', detail: 'Prospects showing genuine interest, separated cleanly from neutrals and negatives.' },
              { icon: <IconCalendar size={28} color="rgba(255,255,255,0.85)" />, metric: 'Meetings Booked', detail: 'Every booking tied to the campaign that drove it so attribution is always clear.' },
              { icon: <IconUserCheck size={28} color="rgba(255,255,255,0.85)" />, metric: 'Meetings Showed', detail: 'Actual show rate so you know how many real sales conversations happened.' },
              { icon: <IconTrendingUp size={28} color="rgba(255,255,255,0.85)" />, metric: 'Pipeline Value Created', detail: 'Dollar value of opportunities sourced from outbound so ROI is always visible.' },
              { icon: <IconDollarSign size={28} color="rgba(255,255,255,0.85)" />, metric: 'Performance Fee Breakdown', detail: 'Exact calculation of what you owe each billing cycle with full line-item transparency.' },
              { icon: <IconFlask size={28} color="rgba(255,255,255,0.85)" />, metric: 'Active Tests & Changes', detail: 'What we are testing this month, why, and what we expect it to improve.' },
              { icon: <IconArrowRightCircle size={28} color="rgba(255,255,255,0.85)" />, metric: 'Next Month Strategy', detail: 'What we are expanding, cutting, or changing based on last month\'s data.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(220,105,47,0.2)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>{item.metric}</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Calculator */}
      <PerformanceCalculator />

      {/* Process Section */}
      <ProcessTimeline />

      {/* Testimonials */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Results From the Partnership</h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>What clients on performance pricing have achieved.</p>
          </div>
          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((t, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', border: '2px solid rgba(220,105,47,0.12)' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                    {t.result}
                  </div>
                  <p style={{ fontSize: '16px', color: '#7d472a', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '16px' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(220,105,47,0.12)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#7d472a', marginBottom: '4px' }}>{t.name}</p>
                  <p style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>{t.role}</p>
                  <p style={{ fontSize: '13px', color: '#dc692f', fontWeight: '600' }}>{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Frequently Asked Questions</h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>Everything you need to know about the Performance Partnership.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(220,105,47,0.12)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '17px', fontWeight: '600', color: '#7d472a' }}>{faq.question}</span>
                  <span style={{ fontSize: '24px', color: '#dc692f', transition: 'transform 0.3s', transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '16px' }}>+</span>
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

      {/* Final CTA */}
      <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>
            Ready to Apply for the Partnership?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Book a 30-minute application call. We will assess your offer, your market, and whether the Performance Partnership is the right fit for your business.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconCheck size={20} color="#dc692f" />
              <span style={{ fontSize: '16px', color: '#7d472a' }}>No setup fees</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconCheck size={20} color="#dc692f" />
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Cancel anytime</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconCheck size={20} color="#dc692f" />
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Pricing tied to results</span>
            </div>
          </div>
          <a href="/book-a-call" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '20px 56px', borderRadius: '9999px', fontWeight: '600', fontSize: '20px', border: 'none', cursor: 'pointer', boxShadow: '0 12px 32px rgba(220,105,47,0.4)' }}>
              Apply for Partnership
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
