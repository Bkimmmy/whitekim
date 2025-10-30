import React from 'react';

export default function FreeResourcesPage() {
  const tools = [
    {
      title: "ROI Calculator",
      description: "Estimate your return on investment from cold email campaigns using realistic metrics.",
      link: "/roi-calculator",
      status: "Available"
    },
    {
      title: "Cold Email Script Generator",
      description: "Generate personalized cold email copy based on your ICP, tone, and offer instantly.",
      status: "Coming Soon"
    },
    {
      title: "Deliverability Health Checker",
      description: "Analyze your domain and inbox performance to detect spam issues before campaigns go live.",
      status: "Coming Soon"
    }
  ];

  const resources = [
    {
      title: "Cold Email Templates",
      description: "Ready-to-use templates for outreach, follow-ups, and reactivation campaigns.",
      status: "Coming Soon"
    },
    {
      title: "Blog & Insights",
      description: "In-depth breakdowns of successful campaigns, deliverability tips, and growth strategies.",
      status: "Coming Soon"
    },
    {
      title: "Campaign ROI Tracker Sheet",
      description: "Google Sheets template to monitor open rates, replies, booked meetings, and revenue attribution.",
      status: "Coming Soon"
    },
    {
      title: "Outreach Playbook PDF",
      description: "Step-by-step playbook covering ICP building, copywriting, targeting, and optimization systems.",
      status: "Coming Soon"
    },
    {
      title: "Cold Email Masterclass (Video Series)",
      description: "A full video breakdown of how to build, launch, and scale cold email systems that convert.",
      status: "Coming Soon"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div onClick={() => (window.location.href = '/')}
            style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dc692f',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>WK</span>
        </div>
          <span style={{ fontWeight: '600', fontSize: '20px', color: '#7d472a' }}>White Kim</span>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500' }}>
          <a href="/" style={{ color: '#7d472a', textDecoration: 'none' }}>Home</a>
          <a href="/services" style={{ color: '#7d472a', textDecoration: 'none' }}>Services and Solutions</a>
          <a href="/resources" style={{ color: '#dc692f', fontWeight: '600', borderBottom: '2px solid #dc692f', textDecoration: 'none' }}>Free Resources</a>
          <a href="/case-studies" style={{ color: '#7d472a', textDecoration: 'none' }}>Case Studies</a>
        </div>
        
        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '12px 28px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
            BOOK A CALL
          </button>
        </a>
      </nav>

      {/* Header */}
      <div style={{ padding: '64px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Free Resources</h1>
          <p style={{ fontSize: '20px', maxWidth: '672px', margin: '0 auto', color: '#7d472a', opacity: 0.7 }}>
            Tools, templates, and insights designed to help you scale your outreach and close more deals.
          </p>
        </div>
      </div>

      {/* Tools Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Tools</h2>
          <p style={{ color: '#7d472a', opacity: 0.7 }}>Interactive tools that give you actionable insights</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {tools.map((tool, index) => (
            <div key={index} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'relative' }}>
              {tool.status === "Coming Soon" && (
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#9ca3af', color: 'white', fontSize: '10px', padding: '4px 12px', borderRadius: '9999px', fontWeight: '600' }}>
                  {tool.status}
                </div>
              )}
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a', marginBottom: '12px' }}>{tool.title}</h3>
              <p style={{ color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>{tool.description}</p>
              {tool.status === "Available" ? (
                <a href={tool.link} style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', backgroundColor: '#dc692f', color: 'white', padding: '12px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                    Open Tool
                  </button>
                </a>
              ) : (
                <button disabled style={{ width: '100%', backgroundColor: '#d1d5db', color: '#6b7280', padding: '12px', borderRadius: '9999px', fontWeight: '600', border: 'none' }}>
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div style={{ backgroundColor: '#f9fafb', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Learning Resources</h2>
            <p style={{ color: '#7d472a', opacity: 0.7 }}>Guides, blogs, and templates to level up your outreach</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {resources.map((item, index) => (
              <div key={index} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#9ca3af', color: 'white', fontSize: '10px', padding: '4px 12px', borderRadius: '9999px', fontWeight: '600' }}>
                  {item.status}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>{item.description}</p>
                <button disabled style={{ width: '100%', backgroundColor: '#d1d5db', color: '#6b7280', padding: '12px', borderRadius: '9999px', fontWeight: '600', border: 'none' }}>
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
