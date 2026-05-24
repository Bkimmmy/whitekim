import React from 'react';

function ProcessTimeline() {
  const [expandedStep, setExpandedStep] = React.useState(null);

  const steps = [
    {
      icon: '🔍',
      title: 'Diagnose',
      subtitle: 'ICP Audit\nOffer Review\nTargeting',
      timeline: 'Week 1',
      description: 'We start by understanding who you should actually be targeting and whether your current offer angle resonates with that market.',
      deliverables: [
        'Review your ideal customer profile and refine the target segment',
        'Audit your offer positioning and identify the strongest angles',
        'Assess any past outbound data or campaign history',
        'Map decision-maker titles and buying signals for your market',
        'Define 2-4 distinct campaign angles to test'
      ]
    },
    {
      icon: '🚀',
      title: 'Build & Launch',
      subtitle: 'Infrastructure\nLead Lists\nCampaigns Live',
      timeline: 'Weeks 2-3',
      description: 'We set up your full outbound infrastructure, build verified lead lists, write copy for each angle, and get campaigns live.',
      deliverables: [
        'Configure domains, email accounts, DNS, and deliverability setup',
        'Build and verify lead lists of 500-1,000 contacts matching your ICP',
        'Write cold email copy for 2-4 different campaign angles',
        'Set up reply tracking and Slack alerts for positive replies',
        'Launch all campaigns simultaneously for split-test data'
      ]
    },
    {
      icon: '📊',
      title: 'Validate',
      subtitle: 'Reply Tracking\nWinning Angle\nOptimization',
      timeline: 'Month 2',
      description: 'We track every reply, identify which angle generates the most qualified interest, and optimize based on real market signal.',
      deliverables: [
        'Categorize every reply (positive, neutral, negative, out-of-office)',
        'Measure booked-call rate from positive replies',
        'Identify the top-performing angle, segment, and message framing',
        'Optimize targeting and copy based on early response data',
        'Weekly check-in calls to review performance and adjust'
      ]
    },
    {
      icon: '📋',
      title: 'Sprint Report',
      subtitle: 'Performance Data\nScaling Plan\nNext Steps',
      timeline: 'Month 3',
      description: 'At the end of your Sprint, you receive a full report showing exactly what worked, what did not, and the recommended next step.',
      deliverables: [
        'Complete campaign performance report with reply and meeting data',
        'Message scorecard ranking each angle by performance',
        'ICP validation summary showing which segments responded best',
        'Clear scaling recommendation for Managed Outbound if the data supports it',
        'Handoff documentation if you continue with a managed system'
      ]
    }
  ];

  return (
    <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 20px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.05em' }}>
            THE SPRINT PROCESS
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
            3 Months. Real Market Data. Clear Next Step.
          </h2>
          <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '640px', margin: '0 auto' }}>
            One flat fee covers everything from setup to your final sprint report.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
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
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{step.icon}</div>
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

export default function OutboundSprintPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const features = [
    { icon: '🎯', title: 'ICP Diagnosis', description: 'We define who to actually target — your ideal customer profile mapped to the right buying signals and decision-makers in your market.' },
    { icon: '✍️', title: 'Message Variant Testing', description: '2-4 different angles written and tested simultaneously so you learn what actually resonates, not just what sounds good internally.' },
    { icon: '📤', title: 'Real Prospect Outreach', description: '500-1,000 verified contacts reached over 3 months, giving you actual market signal instead of assumptions.' },
    { icon: '🔧', title: 'Deliverability Setup', description: 'Full DNS, domain purchasing, and warm-up configuration so your emails land in inboxes and do not go to spam.' },
    { icon: '↩', title: 'Reply Tracking', description: 'Every reply categorized and tracked. You always know how many positive replies, booked calls, and which angle drove them.' },
    { icon: '📋', title: 'Sprint Report', description: 'A full performance report at the end with what worked, what did not, and a clear recommendation for what to do next.' }
  ];

  const testimonials = [
    { name: 'Sarah Chen', company: 'TechFlow Solutions', role: 'VP of Sales', quote: 'The Sprint gave us clarity we could not have gotten any other way. We found the one angle that actually got replies and scaled from there.', result: '21% reply rate in Sprint' },
    { name: 'Michael Torres', company: 'Apex Consulting', role: 'Founder & CEO', quote: 'I had been guessing about our ICP for months. The Sprint showed us exactly which segment was most interested in 30 days.', result: '38 meetings booked' },
    { name: 'Jennifer Park', company: 'DataSync Industries', role: 'Director of BD', quote: 'We tested 4 angles. One of them performed 3x better than the rest. Now we know what to scale.', result: '$280K pipeline in 45 days' }
  ];

  const faqs = [
    { question: 'What does the $5,000 one-time fee cover?', answer: 'Everything for 3 months: ICP diagnosis, infrastructure setup, lead list building, copy for 2-4 campaign angles, campaign management, reply tracking, weekly check-ins, and a final sprint report with scaling recommendation.' },
    { question: 'What are the infrastructure costs on top?', answer: 'Domains ($12/each/year), email accounts ($5/each/month), Instantly.ai ($97/mo), Apollo Phone Verifier ($60/mo), leads ($70/mo), and email verification ($120 one-time). Typically $500-700/month depending on your volume.' },
    { question: 'How quickly will I see results?', answer: 'Infrastructure setup takes about 2 weeks. Campaigns go live in week 3. You can start seeing replies within the first 30 days of launch.' },
    { question: 'What if the messaging does not work?', answer: 'That is valuable data. The Sprint tells you what does and does not work. A negative result (no replies) is still a result — it tells you something is wrong with the market, segment, or offer that needs to be addressed before scaling.' },
    { question: 'What happens after the Sprint?', answer: 'You get a full sprint report and scaling recommendation. If the data supports it, we will outline what the Managed Outbound Pipeline would look like for your business. There is no obligation to continue.' },
    { question: 'Who is the Sprint right for?', answer: 'High-ticket B2B agencies that have not done outbound before, have tried outbound but did not get results, or want to validate a new market or offer angle before committing to full managed outbound.' }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div onClick={() => window.location.href = '/'} style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#dc692f', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#7d472a', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.05em' }}>
                BEST PLACE TO START
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                Outbound Message-Market Fit Sprint
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                Test your outbound messaging with real prospects before committing to full management. Find the angle that gets replies, validate your ICP, and get a clear data-backed recommendation for what to do next.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '12px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>$5,000</div>
                <div style={{ fontSize: '20px', color: '#7d472a', opacity: 0.6 }}>one-time</div>
              </div>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '28px' }}>
                Covers 3 full months of outbound setup, testing, and validation
              </div>

              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '4px' }}>
                  <strong>Plus infrastructure costs:</strong>
                </p>
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.8 }}>
                  ~$500-700/month (domains, email accounts, tools)
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                  <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 32px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 4px 12px rgba(220,105,47,0.3)' }}>
                    Start With the Sprint
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
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>What's Included</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'ICP audit and targeting strategy',
                    'Offer positioning audit',
                    'Lead list build and verification (500-1,000 contacts)',
                    '2-4 outbound campaign angles written and tested',
                    'Full deliverability and infrastructure setup',
                    'Reply tracking with positive reply categorization',
                    'Booked-call process and Slack alerts',
                    'Weekly check-in throughout the Sprint',
                    'Final performance report and message scorecard',
                    'Scaling recommendation for Managed Outbound'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '18px', color: '#dc692f', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(220,105,47,0.15)', border: '2px solid #dc692f' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>Why Start With the Sprint</h3>
                  <span style={{ fontSize: '22px' }}>⭐</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'De-risks committing to full managed outbound',
                    'Find your winning message before scaling volume',
                    'Real prospect data, not agency assumptions',
                    'Flat one-time fee — no monthly commitment',
                    '3 months of full coverage included'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '18px', color: '#dc692f', flexShrink: 0, fontWeight: 'bold' }}>✓</span>
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
              Everything You Need to Find Your Winning Message
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
              A complete 3-month outbound test designed to give you real market signal before you scale.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {features.map((f, idx) => (
              <div key={idx} style={{ padding: '32px', backgroundColor: '#fff5f0', borderRadius: '16px', border: '1px solid rgba(220,105,47,0.12)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{f.icon}</div>
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
              SPRINT DATA
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              Data That Tells You Exactly What Happened
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto' }}>
              Every Sprint ends with a full data report so you can make an informed, confident decision about what to do next.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: '📧', metric: 'Emails Sent by Angle', detail: 'Total volume broken down by each campaign variant so you see exactly what was tested.' },
              { icon: '↩', metric: 'Reply Rate by Angle', detail: 'Which message got the most replies and by how much — the core signal for message-market fit.' },
              { icon: '✅', metric: 'Positive Reply Rate', detail: 'Replies that showed genuine interest, separated from neutrals and negatives.' },
              { icon: '📅', metric: 'Meetings Booked', detail: 'Calls that made it to your calendar and which campaign angle drove each one.' },
              { icon: '🎯', metric: 'ICP Validation', detail: 'Which segments responded most — helps you refine targeting before you scale.' },
              { icon: '📊', metric: 'Message Scorecard', detail: 'Side-by-side ranking of every angle by reply rate, positive rate, and meeting conversion.' },
              { icon: '👥', metric: 'Lead Quality Assessment', detail: 'How well the leads that responded matched your ideal customer profile.' },
              { icon: '🔧', metric: 'Deliverability Health', detail: 'Inbox placement rate and domain health throughout the Sprint.' },
              { icon: '📋', metric: 'Scaling Recommendation', detail: 'A clear go/no-go with the supporting data to back the decision either way.' },
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '24px', border: '1px solid rgba(220,105,47,0.2)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>{item.metric}</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <ProcessTimeline />

      {/* Testimonials */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Results From the Sprint</h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>Real outcomes from businesses that started with the Sprint.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
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
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>Everything you need to know about the Sprint.</p>
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
            Ready to Find Your Winning Message?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Book a call and we will walk through your offer, your market, and whether the Sprint is the right first step for your business.
          </p>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', color: '#dc692f' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Flat one-time fee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', color: '#dc692f' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>3 months covered</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', color: '#dc692f' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>No long-term commitment</span>
            </div>
          </div>
          <a href="/book-a-call" style={{ textDecoration: 'none' }}>
            <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '20px 56px', borderRadius: '9999px', fontWeight: '600', fontSize: '20px', border: 'none', cursor: 'pointer', boxShadow: '0 12px 32px rgba(220,105,47,0.4)' }}>
              Book a Sprint Call
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
