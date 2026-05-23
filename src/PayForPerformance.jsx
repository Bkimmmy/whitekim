import React from 'react';

export default function PayForPerformance() {
  const whatWeDo = [
    {
      title: "Build the outbound system",
      description: "We set up targeting, sequences, and the full technical infrastructure so your pipeline is built to last."
    },
    {
      title: "Test messaging angles",
      description: "We run controlled tests on positioning and copy until we find the angle that generates real replies from your ICP."
    },
    {
      title: "Handle replies and book meetings",
      description: "We manage responses on your behalf, qualify prospects, and get qualified meetings on your calendar."
    },
    {
      title: "Report transparently",
      description: "You see what's working and what isn't. No vanity metrics. Numbers that actually tell the story."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Application Call",
      description: "We diagnose if there's a real fit. Takes 20 minutes. No pitch, just an honest look at your situation."
    },
    {
      step: "2",
      title: "Proposal",
      description: "We outline the pricing model, target market, and what success looks like before anything starts."
    },
    {
      step: "3",
      title: "Launch",
      description: "System builds in weeks 1-2. First tests run in weeks 2-3. You start seeing data before month one is done."
    }
  ];

  const faqs = [
    {
      question: "Why do you charge a retainer if it's performance-based?",
      answer: "Infrastructure, time, and list building have real costs regardless of outcomes. The retainer covers that. The per-meeting fee is tied to delivery."
    },
    {
      question: "What counts as a 'qualified meeting'?",
      answer: "We define this together before we start. Typically: booked on your calendar, fits your ICP, and showed up to the call."
    },
    {
      question: "Can I do this without the Sprint first?",
      answer: "Possibly. If you have a proven message and past data, we can discuss skipping it. Most new clients start with the Sprint to de-risk the ramp-up."
    },
    {
      question: "What if no meetings are booked?",
      answer: "You pay the retainer only. We don't charge per-meeting if none land. We'll also be honest with you early if the numbers aren't moving."
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>

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

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '80px 32px 64px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#9ca3af', color: 'white', fontSize: '12px', fontWeight: '700', letterSpacing: '0.1em', padding: '6px 16px', borderRadius: '9999px', marginBottom: '24px' }}>
            FOR QUALIFIED CLIENTS ONLY
          </div>

          <h1 style={{ fontSize: '52px', fontWeight: 'bold', color: '#7d472a', marginBottom: '20px', lineHeight: '1.15' }}>
            Performance Partnership
          </h1>

          <p style={{ fontSize: '20px', color: '#7d472a', opacity: 0.75, maxWidth: '620px', margin: '0 auto 48px', lineHeight: '1.6' }}>
            When you have a proven offer and the capacity to close, we put skin in the game with you. Custom pricing. Aligned incentives. Real accountability.
          </p>

          {/* Pricing Options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '700px', margin: '0 auto 20px' }}>
            {/* Option A */}
            <div style={{ backgroundColor: 'white', border: '2px solid rgba(220, 105, 47, 0.2)', borderRadius: '16px', padding: '28px 24px', textAlign: 'left' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#dc692f', marginBottom: '10px' }}>OPTION A</div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a', lineHeight: '1.3', marginBottom: '8px' }}>
                $2,500<span style={{ fontSize: '14px', fontWeight: '500' }}>/mo retainer</span>
              </div>
              <div style={{ fontSize: '16px', color: '#dc692f', fontWeight: '600' }}>
                + $750 per qualified meeting booked
              </div>
            </div>

            {/* Option B */}
            <div style={{ backgroundColor: 'white', border: '2px solid rgba(220, 105, 47, 0.2)', borderRadius: '16px', padding: '28px 24px', textAlign: 'left' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#dc692f', marginBottom: '10px' }}>OPTION B</div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a', lineHeight: '1.3', marginBottom: '8px' }}>
                $2,500<span style={{ fontSize: '14px', fontWeight: '500' }}>/mo retainer</span>
              </div>
              <div style={{ fontSize: '16px', color: '#dc692f', fontWeight: '600' }}>
                + $1,500 per meeting that showed
              </div>
            </div>
          </div>

          {/* Option C */}
          <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.65, marginBottom: '36px' }}>
            Option C: Custom structure for the right fit -- let's talk.
          </p>

          <a href="/book-a-call" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 48px', borderRadius: '9999px', fontWeight: '700', fontSize: '17px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(220, 105, 47, 0.3)' }}>
              Apply for a Conversation
            </button>
          </a>
        </div>
      </div>

      {/* Who This Is For */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', textAlign: 'center', marginBottom: '48px' }}>
          Who This Is For
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {/* Good fit */}
          <div style={{ backgroundColor: '#fff5f0', border: '2px solid rgba(220, 105, 47, 0.15)', borderRadius: '16px', padding: '36px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#7d472a', marginBottom: '24px' }}>You are a good fit if:</h3>
            {[
              "$3k+/month offer or $10k+ average deal value",
              "Proven results with past clients you can point to",
              "Clear ICP -- you know who your best client is",
              "Capacity to take on new clients when meetings land",
              "You or your team can close the meeting"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#dc692f', fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>&#10003;</span>
                <span style={{ fontSize: '15px', color: '#7d472a', lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Not a good fit */}
          <div style={{ backgroundColor: '#f9fafb', border: '2px solid #e5e7eb', borderRadius: '16px', padding: '36px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#7d472a', marginBottom: '24px' }}>This is NOT for you if:</h3>
            {[
              "New offers still figuring out product-market fit",
              "Companies that can't close meetings once booked",
              "Deal sizes under $3k/month",
              "Teams without bandwidth to respond to inbound replies"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#9ca3af', fontSize: '18px', flexShrink: 0, marginTop: '1px' }}>&#10005;</span>
                <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.75, lineHeight: '1.5' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div style={{ backgroundColor: '#fff5f0', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', textAlign: 'center', marginBottom: '12px' }}>
            What We Do
          </h2>
          <p style={{ textAlign: 'center', color: '#7d472a', opacity: 0.65, fontSize: '16px', marginBottom: '48px' }}>
            The full scope of what we own inside the partnership.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {whatWeDo.map((item, i) => (
              <div key={i} style={{ backgroundColor: 'white', border: '2px solid rgba(220, 105, 47, 0.12)', borderRadius: '16px', padding: '32px' }}>
                <div style={{ width: '36px', height: '36px', backgroundColor: '#dc692f', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#7d472a', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7, lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 32px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', textAlign: 'center', marginBottom: '12px' }}>
          How It Works
        </h2>
        <p style={{ textAlign: 'center', color: '#7d472a', opacity: 0.65, fontSize: '16px', marginBottom: '56px' }}>
          Three steps from conversation to live outbound.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {howItWorks.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '28px', alignItems: 'flex-start', position: 'relative' }}>
              {/* Step indicator + connector line */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#dc692f', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>{item.step}</span>
                </div>
                {i < howItWorks.length - 1 && (
                  <div style={{ width: '2px', height: '56px', backgroundColor: 'rgba(220, 105, 47, 0.2)', marginTop: '4px' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < howItWorks.length - 1 ? '40px' : '0', paddingTop: '8px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#7d472a', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7, lineHeight: '1.6' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ backgroundColor: '#f9fafb', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', textAlign: 'center', marginBottom: '48px' }}>
            Common Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '28px 32px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#7d472a', marginBottom: '12px' }}>{faq.question}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.75, lineHeight: '1.65' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div style={{ backgroundColor: '#1c0a02', padding: '96px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
            This isn't for everyone. It's for the right fit.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', lineHeight: '1.6' }}>
            If you have a proven offer and want a partner who only wins when you win, let's have an honest conversation.
          </p>
          <a href="/book-a-call" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '18px 52px', borderRadius: '9999px', fontWeight: '700', fontSize: '18px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(220, 105, 47, 0.4)' }}>
              Apply for a Conversation
            </button>
          </a>
        </div>
      </div>

    </div>
  );
}
