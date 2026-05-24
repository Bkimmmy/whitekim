import React from 'react';

export default function FreeResourcesPage() {
  const tools = [
    {
      title: "ROI Calculator",
      description: "Model your potential return based on offer size, close rate, and outbound volume.",
      link: "/roi-calculator",
      status: "Available"
    },
    {
      title: "Outbound Message Generator",
      description: "Generate outbound message variants based on your ICP, offer, and positioning.",
      status: "Coming Soon"
    },
    {
      title: "Deliverability Health Checker",
      description: "Check your domain and inbox health before campaigns go live.",
      status: "Coming Soon"
    }
  ];

  const resources = [
    {
      title: "Outbound Message Templates",
      description: "Frameworks for initial outreach, follow-ups, and re-engagement -- built for high-ticket B2B agencies.",
      status: "Coming Soon"
    },
    {
      title: "Blog & Insights",
      description: "Campaign breakdowns, message-market fit lessons, and outbound strategy deep-dives.",
      status: "Coming Soon"
    },
    {
      title: "Campaign ROI Tracker Sheet",
      description: "Track replies, meetings, and pipeline attribution for your outbound campaigns.",
      status: "Coming Soon"
    },
    {
      title: "Outbound Playbook PDF",
      description: "The WhiteKim framework for ICP definition, message testing, and pipeline scaling.",
      status: "Coming Soon"
    },
    {
      title: "Outbound Pipeline Masterclass (Video Series)",
      description: "Full breakdown of how to set up, test, manage, and scale outbound lead generation for high-ticket B2B agencies.",
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
            Tools and resources for high-ticket B2B agencies building consistent outbound lead generation. Most are in progress -- check back as we add more.
          </p>
        </div>
      </div>

      {/* Tools Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Tools</h2>
          <p style={{ color: '#7d472a', opacity: 0.7 }}>Interactive tools to help you model, plan, and measure your outbound pipeline.</p>
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
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Coming Soon</h2>
            <p style={{ color: '#7d472a', opacity: 0.7 }}>We're building these out. Sign up for the strategy call to get guidance now.</p>
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
