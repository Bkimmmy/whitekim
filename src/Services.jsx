import React from 'react';
import { IconCheck } from './icons';
import Nav from './Nav';

export default function ServicesPage() {
  const mainServices = [
    {
      title: "90-Day Pipeline Sprint",
      price: "$5,000",
      originalPrice: "$12,000",
      discount: "58% OFF",
      spotsLeft: "Only 3 spots left — closes June 15",
      subPrice: "one-time + infrastructure",
      badge: "BEST PLACE TO START",
      badgeColor: "#7d472a",
      description: "Full outbound engine launched in 90 days — email, LinkedIn/DM, and phone — with market intelligence attached.",
      features: [
        "ICP Revenue Map — who is most likely to buy",
        "Market message testing — pain points, offers, and angles",
        "Email infrastructure — domains, inboxes, warming, deliverability",
        "Cold email outreach to verified prospect lists",
        "LinkedIn/DM outreach to the same target accounts",
        "Cold calling to high-priority accounts",
        "Reply handling and meeting booking",
        "Lead handoff brief before every qualified call",
        "Weekly pipeline intelligence report",
        "Scale plan showing what to double down on after 90 days"
      ],
      cta: "Start With the Sprint",
      link: "/services/sprint",
      requirements: null
    },
    {
      title: "Monthly Outbound Engine",
      price: "$4,000/mo",
      originalPrice: "$7,500/mo",
      discount: "47% OFF",
      spotsLeft: "Only 2 spots left at this rate",
      subPrice: "ongoing + infrastructure",
      badge: "MOST POPULAR",
      badgeColor: "#dc692f",
      description: "We run the full multi-channel system every month — email, LinkedIn/DM, and phone — so you only show up to close.",
      features: [
        "Everything in the 90-Day Sprint",
        "Cold email, LinkedIn/DM, and phone outreach every month",
        "Ongoing message and angle testing by channel",
        "Reply handling, follow-up, and meeting booking",
        "Lead handoff brief before every qualified call",
        "Weekly pipeline intelligence report",
        "ICP expansion as winning segments emerge",
        "Slack alerts for positive replies",
        "Dedicated pipeline manager as your point of contact"
      ],
      cta: "See Full Details",
      link: "/services/managed-pipeline",
      requirements: null
    },
    {
      title: "Performance Partnership",
      price: "Custom",
      originalPrice: null,
      discount: null,
      spotsLeft: null,
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
      cta: "See Full Details",
      link: "/services/performance-partnership"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Nav activePage="/services" />

      {/* Page Header */}
      <div style={{ padding: '64px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Services & Solutions</h1>
          <p style={{ fontSize: '20px', maxWidth: '672px', margin: '0 auto 16px auto', color: '#7d472a', opacity: 0.7 }}>
            A fully managed outbound system across cold email, LinkedIn/DM, and phone — built to book qualified sales meetings for $2M+ high-ticket B2B companies.
          </p>
          <p style={{ display: 'inline-block', fontSize: '14px', fontWeight: '600', padding: '8px 20px', borderRadius: '9999px', backgroundColor: '#fff5f0', color: '#dc692f', border: '1px solid rgba(220,105,47,0.3)' }}>
            Our AI-qualified system lets us cut costs and pass the savings directly to you.
          </p>
        </div>
      </div>

      {/* Main Services Section - 3 Column Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', alignItems: 'start' }}>
          {mainServices.map((service, index) => (
            <div
              key={index}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', border: '2px solid rgba(220, 105, 47, 0.1)', position: 'relative', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', overflow: 'hidden' }}
            >
              {/* Discount ribbon top right */}
              {service.discount && (
                <div style={{ position: 'absolute', top: '16px', right: '-30px', backgroundColor: '#dc692f', color: 'white', fontWeight: '800', fontSize: '11px', padding: '4px 40px', transform: 'rotate(45deg)', letterSpacing: '0.05em' }}>
                  {service.discount}
                </div>
              )}

              {/* Badge */}
              <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)', backgroundColor: service.badgeColor, color: 'white', padding: '4px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>
                {service.badge}
              </div>

              {/* Title and Price */}
              <div style={{ textAlign: 'center', marginBottom: '24px', marginTop: '8px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{service.title}</h3>
                {service.originalPrice && (
                  <p style={{ fontSize: '16px', textDecoration: 'line-through', color: '#9ca3af', marginBottom: '2px' }}>{service.originalPrice}</p>
                )}
                <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '4px', color: '#dc692f' }}>{service.price}</p>
                <p style={{ fontSize: '12px', marginBottom: '8px', color: '#7d472a', opacity: 0.6 }}>{service.subPrice}</p>
                {service.spotsLeft && (
                  <div style={{ display: 'inline-block', backgroundColor: '#fff5f0', color: '#dc692f', border: '1px solid rgba(220,105,47,0.3)', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', fontWeight: '700', marginBottom: '12px' }}>
                    {service.spotsLeft}
                  </div>
                )}
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.75, lineHeight: '1.5' }}>{service.description}</p>
              </div>

              {/* Feature list */}
              {service.features && (
                <div style={{ marginBottom: '24px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ flexShrink: 0, marginTop: '1px' }}><IconCheck size={16} color="#dc692f" /></span>
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

              {/* CTA Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href={service.link} style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', padding: '12px', borderRadius: '9999px', fontWeight: '600', backgroundColor: '#dc692f', color: 'white', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
                    {service.cta}
                  </button>
                </a>
                <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                  <button style={{ width: '100%', padding: '11px', borderRadius: '9999px', fontWeight: '600', backgroundColor: 'transparent', color: '#dc692f', border: '2px solid #dc692f', cursor: 'pointer', fontSize: '14px' }}>
                    Book a Call
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Ready to Build Your Outbound Pipeline?</h2>
        <p style={{ fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px auto', color: '#7d472a', opacity: 0.7 }}>
          Book a strategy call. We will look at your offer, your market, and your pipeline goals — then show you exactly what the 90-Day Sprint would target.
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
