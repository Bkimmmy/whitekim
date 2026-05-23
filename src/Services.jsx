import React from 'react';

export default function ServicesPage() {
  const mainServices = [
    {
      title: "Outbound Message-Market Fit Sprint",
      price: "$5,000",
      subPrice: "one-time",
      badge: "BEST PLACE TO START",
      badgeColor: "#7d472a",
      description: "Designed to test your outbound messaging with real prospects before you commit to a full system.",
      features: [
        "ICP diagnosis — who you should actually be targeting",
        "5 message variants built and tested",
        "500–1,000 prospect outreach to validate messaging",
        "Split-test reporting to see what's working",
        "Weekly check-in throughout the Sprint",
        "Deliverability setup so messages land in inbox",
        "Reply handling guidance for your team",
        "Performance dashboard",
        "Message scorecard with takeaways",
        "Sprint summary report with next-step recommendation"
      ],
      cta: "Start With the Sprint",
      requirements: null
    },
    {
      title: "Managed Outbound Pipeline System",
      price: "From $4,000/mo",
      subPrice: "ongoing",
      badge: "MOST POPULAR",
      badgeColor: "#dc692f",
      description: "Full-service outbound pipeline management — we run the system so you focus on closing.",
      features: [
        "Everything in the Sprint",
        "Ongoing campaign management month to month",
        "Monthly message testing to improve results",
        "ICP expansion as you learn what converts",
        "Weekly reporting with clear pipeline metrics",
        "Custom CRM integration",
        "AI workflow setup for lead research and sequencing",
        "Slack alerts for hot replies",
        "Dedicated pipeline manager as your point of contact"
      ],
      cta: "Book a Strategy Call",
      requirements: null
    },
    {
      title: "Performance Partnership",
      price: "Custom",
      subPrice: "skin-in-the-game pricing",
      badge: "FOR QUALIFIED CLIENTS",
      badgeColor: "#9ca3af",
      description: "For businesses ready to scale with a pricing model tied to results.",
      features: null,
      pricingOptions: [
        { label: "Option 1:", detail: "Retainer + per qualified meeting booked" },
        { label: "Option 2:", detail: "Retainer + per meeting that showed" },
        { label: "Option 3:", detail: "Custom structure for the right fit" }
      ],
      requirements: {
        title: "To qualify, you should have:",
        items: [
          "$3k+/mo offer or $10k+ average deal value",
          "Proven results with your current clients",
          "Real capacity to close new business"
        ]
      },
      cta: "Apply for Partnership"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            onClick={() => (window.location.href = '/')}
            style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dc692f', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
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
            Three ways to work with WhiteKim — from testing your first message to running a full outbound pipeline.
          </p>
        </div>
      </div>

      {/* Main Services Section - 3 Column Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'start' }}>
          {mainServices.map((service, index) => (
            <div
              key={index}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '2px solid rgba(220, 105, 47, 0.1)', position: 'relative', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s' }}
            >
              {/* Badge */}
              <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', backgroundColor: service.badgeColor, color: 'white', padding: '4px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                {service.badge}
              </div>

              {/* Title and Price */}
              <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '8px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{service.title}</h3>
                <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px', color: '#dc692f' }}>{service.price}</p>
                <p style={{ fontSize: '12px', marginBottom: '12px', color: '#7d472a', opacity: 0.6 }}>{service.subPrice}</p>
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.75, lineHeight: '1.5' }}>{service.description}</p>
              </div>

              {/* Feature list */}
              {service.features && (
                <div style={{ marginBottom: '24px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ fontSize: '16px', color: '#dc692f', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span style={{ fontSize: '14px', color: '#7d472a' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Pricing options (Performance Partnership) */}
              {service.pricingOptions && (
                <div style={{ marginBottom: '20px' }}>
                  {service.pricingOptions.map((opt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '8px', marginBottom: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: '#dc692f', flexShrink: 0 }}>{opt.label}</span>
                      <span style={{ fontSize: '14px', color: '#7d472a' }}>{opt.detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Requirements box */}
              {service.requirements && (
                <div style={{ marginBottom: '24px', padding: '14px 16px', borderRadius: '8px', backgroundColor: '#fff5f0' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', marginBottom: '8px', color: '#7d472a' }}>{service.requirements.title}</p>
                  <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.85 }}>
                    {service.requirements.items.map((item, itemIdx) => (
                      <p key={itemIdx} style={{ marginBottom: '4px' }}>• {item}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', padding: '12px', borderRadius: '9999px', fontWeight: '600', backgroundColor: '#dc692f', color: 'white', border: 'none', cursor: 'pointer', transition: 'opacity 0.3s', fontSize: '14px' }}>
                  {service.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Not Sure Which Is Right for You?</h2>
        <p style={{ fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto', color: '#7d472a', opacity: 0.7 }}>
          Book a quick strategy call. We'll look at your offer, your market, and your goals — then tell you honestly which path fits best.
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
