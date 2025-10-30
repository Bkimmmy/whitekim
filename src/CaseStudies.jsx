import React from 'react';

export default function CaseStudiesPage() {
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

  const industries = [
    "B2B SaaS",
    "Professional Services",
    "Manufacturing Tech",
    "Marketing Agencies",
    "Recruiting Firms",
    "Consulting",
    "Healthcare",
    "Education",
  ];

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "B2B SaaS • 45 employees",
      preview: "Went from zero cold email infrastructure to 52 qualified meetings per month in just 60 days. Reply rates hit 21% (3x industry average), generating $340K in sales-ready pipeline.",
      fullStory: "TechFlow had tried cold email before but struggled with deliverability and targeting. Within 30 days of launching with White Kim, they booked their first 12 meetings. By day 60, they hit 52 meetings/month. The key was nailing their ICP and building sequences that resonated with VP-level buyers.",
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
      title: "VP of Sales"
    },
    {
      company: "Apex Consulting",
      industry: "Professional Services • 120 employees",
      preview: "Built a predictable meeting machine generating 38 qualified conversations monthly with a 19% reply rate. Created $280K in pipeline within 45 days.",
      fullStory: "Apex needed to scale their outbound without burning their domain. We implemented a multi-domain strategy with 30 warmed inboxes, allowing them to send 500+ emails daily while maintaining 96% inbox placement.",
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
      title: "Founder & CEO"
    },
    {
      company: "DataSync Industries",
      industry: "Manufacturing Tech • 200+ employees",
      preview: "Achieved 45 meetings per month with an exceptional 23% reply rate targeting enterprise accounts. Generated $520K in qualified pipeline over 90 days.",
      fullStory: "DataSync sells to enterprise manufacturers—a notoriously hard-to-reach audience. We built sequences specifically designed for long sales cycles, with content that educated rather than pitched.",
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
      title: "Director of Business Development"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb' }}>
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
          <a href="/case-studies" style={{ color: '#dc692f', fontWeight: '600', borderBottom: '2px solid #dc692f', textDecoration: 'none' }}>Case Studies</a>
        </div>
        
        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '12px 28px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
            BOOK A CALL
          </button>
        </a>
      </nav>

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '100px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '56px', fontWeight: 'bold', color: '#7d472a', marginBottom: '16px' }}>
          See How Businesses Win with White Kim
        </h1>
        <p style={{ fontSize: '20px', color: '#7d472a', opacity: 0.8, marginBottom: '32px' }}>
          Real companies, measurable outcomes, and the systems behind them.
        </p>
        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#dc692f', color: 'white', fontWeight: '600', border: 'none', padding: '16px 48px', borderRadius: '9999px', fontSize: '18px', cursor: 'pointer' }}>
            Book Strategy Call
          </button>
        </a>
      </div>

      {/* Industry Scroll Bar */}
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', padding: '24px 16px', borderBottom: '1px solid #e5e7eb' }}>
        {industries.map((industry, index) => (
          <span 
            key={index}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              marginRight: '12px',
              backgroundColor: '#fff5f0',
              color: '#7d472a',
              borderRadius: '9999px',
              fontWeight: '600',
              cursor: 'pointer',
              border: '1px solid #dc692f20'
            }}
          >
            {industry}
          </span>
        ))}
      </div>

      {/* Case Studies Section */}
      <div style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #fff5f0 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', padding: '10px 24px', borderRadius: '9999px', backgroundColor: '#dc692f', color: 'white', fontWeight: 'bold', marginBottom: '20px' }}>
              PROVEN RESULTS
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: '#7d472a', marginBottom: '16px' }}>
              Real Companies. Real Results.
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Click any case study below to see detailed metrics and charts.
            </p>
          </div>

          {caseStudies.map((study, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                marginBottom: '32px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                border: expandedCase === index ? '2px solid #dc692f' : '2px solid #e5e7eb',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setExpandedCase(expandedCase === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '40px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
              >
                <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#7d472a' }}>{study.company}</h3>
                <p style={{ color: '#7d472a', opacity: 0.6, marginBottom: '16px' }}>{study.industry}</p>
                <p style={{ color: '#7d472a', opacity: 0.8 }}>{study.preview}</p>
                {expandedCase !== index && (
                  <div style={{ marginTop: '12px', fontSize: '14px', color: '#dc692f', fontWeight: '600' }}>
                    Click to view detailed metrics →
                  </div>
                )}
              </button>

              {/* Expanded section */}
              {expandedCase === index && (
                <div style={{ padding: '0 40px 40px 40px', borderTop: '1px solid #f3f4f6' }}>
                  <p style={{ marginBottom: '20px', color: '#7d472a', opacity: 0.8 }}>{study.fullStory}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                    <div style={{ textAlign: 'center', backgroundColor: '#fff5f0', padding: '20px', borderRadius: '12px' }}>
                      <div style={{ color: '#dc692f', fontSize: '32px', fontWeight: 'bold' }}>{study.metrics.meetings}</div>
                      <div style={{ color: '#7d472a', fontSize: '14px' }}>Meetings/Month</div>
                    </div>
                    <div style={{ textAlign: 'center', backgroundColor: '#fff5f0', padding: '20px', borderRadius: '12px' }}>
                      <div style={{ color: '#dc692f', fontSize: '32px', fontWeight: 'bold' }}>{study.metrics.replyRate}%</div>
                      <div style={{ color: '#7d472a', fontSize: '14px' }}>Reply Rate</div>
                    </div>
                    <div style={{ textAlign: 'center', backgroundColor: '#fff5f0', padding: '20px', borderRadius: '12px' }}>
                      <div style={{ color: '#dc692f', fontSize: '32px', fontWeight: 'bold' }}>${(study.metrics.pipeline / 1000).toFixed(0)}K</div>
                      <div style={{ color: '#7d472a', fontSize: '14px' }}>Pipeline</div>
                    </div>
                    <div style={{ textAlign: 'center', backgroundColor: '#fff5f0', padding: '20px', borderRadius: '12px' }}>
                      <div style={{ color: '#dc692f', fontSize: '32px', fontWeight: 'bold' }}>{study.metrics.timeframe}</div>
                      <div style={{ color: '#7d472a', fontSize: '14px' }}>Timeframe</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Calendly CTA */}
      <div style={{ backgroundColor: '#ffffff', padding: '100px 32px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#7d472a', marginBottom: '16px' }}>
            Ready to Get Similar Results?
          </h2>
          <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.8, marginBottom: '32px' }}>
            Book a 15-minute strategy call to see if the White Kim Method is right for your business.
          </p>
          <div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/joshbrendonai"
            style={{ minWidth: '320px', height: '700px', borderRadius: '24px', overflow: 'hidden' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
