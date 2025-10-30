import React from 'react';

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Main Recruiting Service",
      price: "$2,800/month",
      subPrice: "+ email infrastructure (~$657/mo)",
      description: "Full end-to-end cold email recruiting operation—from infrastructure to meeting conversion.",
      features: [
        "Strategy & ICP Targeting",
        "Complete System Setup (DNS, CRM, Analytics)",
        "Messaging & A/B Testing",
        "30-Day Campaign Management",
        "Weekly Reporting & Optimization",
        "Full Training & Documentation"
      ],
      highlight: "Most Popular"
    },
    {
      title: "System Setup & Launch",
      price: "$1,595",
      subPrice: "one-time + infrastructure",
      description: "We build and launch your entire cold email engine in 30 days + 7 days coaching.",
      features: [
        "ICP Strategy & Targeting",
        "Tech Stack Setup (Instantly, DNS, Domains)",
        "5 Email Script Variations",
        "List Building & Verification",
        "Slack Notifications Setup",
        "Full Training Videos & Documentation"
      ],
      highlight: "Best for DIY Teams"
    },
    {
      title: "Pay-for-Performance",
      price: "Custom",
      subPrice: "per meeting or closed deal",
      description: "Pay only when we deliver results—qualified leads, booked meetings, or closed deals.",
      features: [
        "Per Qualified Lead Pricing",
        "Per Booked Meeting Pricing",
        "Per Closed Deal Pricing",
        "Complete System Management",
        "Transparent Tracking Dashboards",
        "Two Options: You Handle Replies OR We Book Meetings"
      ],
      requirements: {
        title: "Requirements (must meet one):",
        options: [
          {
            label: "Option 1:",
            items: ["$4,000+ minimum deal value", "Capacity for 5+ new clients monthly"]
          },
          {
            label: "Option 2:",
            items: ["Capacity for $20,000+ additional monthly revenue"]
          }
        ]
      },
      highlight: "Zero Risk"
    }
  ];

  const subServices = [
    {
      title: "Audit & Strategy Only",
      price: "$495",
      description: "Expert cold email audit with actionable roadmap and 30-min consultation."
    },
    {
      title: "Copy & Messaging Pack",
      price: "$750",
      description: "5 custom email variations with positioning workshop and reply templates."
    },
    {
      title: "Deliverability & Domain Setup",
      price: "$995",
      description: "Fix inbox issues with DNS setup, domain warming, and spam prevention."
    },
    {
      title: "Lead Sourcing Service",
      price: "$1,000/month",
      description: "2,000-3,000 verified leads delivered monthly with custom targeting."
    },
    {
      title: "Inbox Management & Reply Handling",
      price: "$1,500/month",
      description: "Human response handling, qualification, and calendar booking."
    },
    {
      title: "Consultation Calls",
      price: "$200/hour",
      description: "1-hour strategy session to determine if cold email is right for you."
    },
    {
      title: "Email Warming Service",
      price: "$350/month",
      description: "Dedicated email warming and reputation management."
    },
    {
      title: "Advanced Analytics Package",
      price: "$495/month",
      description: "Custom dashboards and deep-dive performance reporting."
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
          <a href="/" style={{ color: '#7d472a', textDecoration: 'none', transition: 'opacity 0.3s' }}>Home</a>
          <a href="/services" style={{ color: '#dc692f', fontWeight: '600', borderBottom: '2px solid #dc692f', textDecoration: 'none' }}>Services and Solutions</a>
          <a href="/resources" style={{ color: '#7d472a', textDecoration: 'none', transition: 'opacity 0.3s' }}>Free Resources</a>
          <a href="/case-studies" style={{ color: '#7d472a', textDecoration: 'none', transition: 'opacity 0.3s' }}>Case Studies</a>
        </div>
        
        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '12px 28px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            BOOK A CALL
          </button>
        </a>
      </nav>

      {/* Page Header */}
      <div style={{ padding: '64px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Services & Solutions</h1>
          <p style={{ fontSize: '20px', maxWidth: '672px', margin: '0 auto', color: '#7d472a', opacity: 0.7 }}>
            Choose the cold email system that fits your goals—from full-service management to DIY setup.
          </p>
        </div>
      </div>

      {/* Main Services Section - 3 Column Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Main Services</h2>
          <p style={{ color: '#7d472a', opacity: 0.7 }}>Complete cold email solutions that book qualified meetings</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {mainServices.map((service, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '2px solid rgba(220, 105, 47, 0.1)', position: 'relative', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s' }}>
              {service.highlight && (
                <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#dc692f', color: 'white', padding: '4px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600' }}>
                  {service.highlight}
                </div>
              )}
              
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#7d472a' }}>{service.title}</h3>
                <p style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '4px', color: '#dc692f' }}>{service.price}</p>
                <p style={{ fontSize: '12px', marginBottom: '12px', color: '#7d472a', opacity: 0.6 }}>{service.subPrice}</p>
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.7 }}>{service.description}</p>
              </div>

              <div style={{ marginBottom: service.requirements ? '24px' : '32px' }}>
                {service.features.map((feature, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '18px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '14px', color: '#7d472a' }}>{feature}</span>
                  </div>
                ))}
              </div>

              {service.requirements && (
                <div style={{ marginBottom: '24px', padding: '12px', borderRadius: '8px', backgroundColor: '#fff5f0' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: '#7d472a' }}>{service.requirements.title}</p>
                  <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.8 }}>
                    {service.requirements.options.map((option, optIdx) => (
                      <div key={optIdx} style={{ marginBottom: optIdx < service.requirements.options.length - 1 ? '8px' : '0' }}>
                        <p style={{ fontWeight: '600', marginBottom: '4px' }}>{option.label}</p>
                        {option.items.map((item, itemIdx) => (
                          <p key={itemIdx} style={{ marginLeft: '8px', marginBottom: '2px' }}>• {item}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', padding: '12px', borderRadius: '9999px', fontWeight: '600', backgroundColor: '#dc692f', color: 'white', border: 'none', cursor: 'pointer', transition: 'opacity 0.3s' }}>
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Sub Services Section - 4 Column Grid */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Sub Services</h2>
            <p style={{ color: '#7d472a', opacity: 0.7 }}>Specialized solutions for specific needs</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {subServices.map((service, index) => (
              <div key={index} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: '#9ca3af', color: 'white', fontSize: '10px', padding: '4px 12px', borderRadius: '9999px', fontWeight: '600' }}>
                  COMING SOON
                </div>
                
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: '#7d472a', marginTop: '24px' }}>{service.title}</h3>
                <p style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px', color: '#dc692f' }}>{service.price}</p>
                <p style={{ fontSize: '13px', marginBottom: '24px', color: '#7d472a', lineHeight: '1.5' }}>{service.description}</p>
                
                <button style={{ width: '100%', backgroundColor: '#d1d5db', color: '#6b7280', padding: '8px', borderRadius: '9999px', fontWeight: '600', cursor: 'not-allowed', fontSize: '13px', border: 'none' }} disabled>
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Ready to Fill Your Calendar?</h2>
        <p style={{ fontSize: '18px', marginBottom: '32px', maxWidth: '672px', margin: '0 auto 32px auto', color: '#7d472a', opacity: 0.7 }}>
          Book a strategy call to discuss which service fits your goals and get started in 48 hours.
        </p>
        <a href="/book-a-call" style={{ textDecoration: 'none' }}>
          <button style={{ color: 'white', backgroundColor: '#dc692f', padding: '16px 48px', borderRadius: '9999px', fontWeight: '600', fontSize: '18px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)', border: 'none', cursor: 'pointer', transition: 'opacity 0.3s' }}>
            Book Strategy Call
          </button>
        </a>
      </div>
    </div>
  );
}