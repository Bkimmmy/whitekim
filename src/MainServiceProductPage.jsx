import React from 'react';
import Nav from './Nav';
import {
  IconTarget, IconSettings, IconEdit, IconBarChart, IconTrendingUp, IconRefresh,
  IconUsers, IconMail, IconMessageSquare, IconCheckCircle, IconCalendar, IconUserCheck,
  IconDollarSign, IconFlask, IconArrowRightCircle, IconSearch, IconZap, IconActivity,
  IconStar, IconCheck
} from './icons';

export default function MainServiceProductPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const features = [
    { icon: <IconTarget size={48} color="#dc692f" />, title: "ICP Revenue Map", description: "We identify which accounts and buyer titles are most likely to buy based on your deal size and market." },
    { icon: <IconSettings size={48} color="#dc692f" />, title: "Full Infrastructure Setup", description: "Domains, inboxes, LinkedIn workflows, call tracking, CRM integration, and deliverability — all configured." },
    { icon: <IconEdit size={48} color="#dc692f" />, title: "Multi-Channel Outreach", description: "Cold email, LinkedIn/DM, and phone — coordinated across all three so buyers see you everywhere." },
    { icon: <IconBarChart size={48} color="#dc692f" />, title: "Reply + Call Handling", description: "We handle every reply, qualify prospects, and book them on your calendar. You get a brief before every call." },
    { icon: <IconTrendingUp size={48} color="#dc692f" />, title: "Weekly Pipeline Intelligence", description: "Every week you see exactly which segment, title, pain point, angle, and channel is converting." },
    { icon: <IconRefresh size={48} color="#dc692f" />, title: "Scale the Winner", description: "Once we know what works, we double down on the best-performing segment and message each month." }
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechFlow SaaS", role: "Head of Sales", quote: "We went from 2 meetings per month to 15+ qualified calls in the first 60 days. The ROI was immediate.", result: "15+ meetings/month" },
    { name: "Michael Chen", company: "CloudScale Solutions", role: "Founder & CEO", quote: "White Kim built an outbound engine that consistently fills our calendar. Best decision we made this year.", result: "$240K pipeline in 90 days" },
    { name: "Jennifer Martinez", company: "DataDrive Analytics", role: "VP of Growth", quote: "The team handles everything - from infrastructure to booking meetings. We just show up and close deals.", result: "8 new clients in Q1" }
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "Infrastructure setup takes about 2 weeks. First campaigns launch in week 3."
    },
    {
      question: "What if results don't meet expectations?",
      answer: "We'll be transparent early. If a message isn't generating replies, we'll tell you why and test new angles. We don't wait 3 months to tell you something isn't working."
    },
    {
      question: "What's the difference between Sprint and Managed Pipeline?",
      answer: "The Sprint is a 4-week, one-time engagement to find your winning message. Managed Pipeline is ongoing - we run the full system after that, with continuous optimization."
    },
    {
      question: "What kind of businesses is this for?",
      answer: "Best for B2B companies with deal values of $4,000+ and capacity to onboard 5+ new clients monthly or handle $20,000+ in additional revenue."
    },
    {
      question: "Can we cancel anytime?",
      answer: "Yes. This is a month-to-month service with no long-term contracts. Cancel anytime with 30 days notice."
    },
    {
      question: "What's included in the infrastructure cost?",
      answer: "Domains ($12/each), email accounts ($5/each), outbound sending tools, and any other tools needed for deliverability and tracking. Typically runs $500-700/month depending on your volume."
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Nav activePage="/services" />

      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="wk-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
                MOST POPULAR
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                Monthly Outbound Engine
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                We run your full outbound system every month across cold email, LinkedIn/DM, and phone. We handle targeting, lead lists, messaging, inbox setup, outreach, calling, follow-up, reply handling, and weekly pipeline intelligence. You only show up to close.
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>$4,000</div>
                <div style={{ fontSize: '20px', color: '#7d472a', opacity: 0.6 }}>/mo</div>
              </div>

              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '4px' }}>
                  <strong>Plus infrastructure:</strong>
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

            {/* Hero Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* What's Included Card */}
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '2px solid rgba(220,105,47,0.12)' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>What's Included</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'ICP diagnosis and targeting strategy',
                    'Complete infrastructure setup (DNS, CRM, domains)',
                    'Outbound messaging and ongoing A/B testing',
                    'Campaign management (ongoing, not just 30 days)',
                    'Reply handling and meeting booking',
                    'Weekly reporting with actionable insights',
                    'Continuous message optimization',
                    'Slack alerts for positive replies',
                    'Full training and documentation'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: '#dc692f', flexShrink: 0 }}><IconCheck size={18} color="#dc692f" /></span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Makes This Different Card */}
              <div style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(220,105,47,0.15)', border: '2px solid #dc692f' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>What Makes This Different</h3>
                  <IconStar size={22} color="#dc692f" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Ongoing campaign management (not a one-time setup)',
                    'We test new message angles every month',
                    'ICP expansion as data comes in',
                    'Custom AI workflow integrations',
                    'White-glove updates on demand'
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: '#dc692f', flexShrink: 0 }}><IconCheck size={18} color="#dc692f" /></span>
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
              Everything You Need to Fill Your Calendar
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
              A complete outbound lead generation system designed to consistently generate qualified leads and book meetings
            </p>
          </div>

          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ padding: '32px', backgroundColor: '#fff5f0', borderRadius: '16px', border: '1px solid rgba(220,105,47,0.12)' }}>
                <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{feature.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>{feature.description}</p>
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
              WEEKLY REPORTING
            </div>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>
              You Will Always Know What Is Happening
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto' }}>
              Every client gets full visibility into their pipeline. No black boxes. No vanity metrics. Clear data every week so you can make real decisions.
            </p>
          </div>
          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {[
              { icon: <IconUsers size={28} color="rgba(255,255,255,0.85)" />, metric: 'Leads Added', detail: 'New verified contacts added to your pipeline each week, broken down by segment.' },
              { icon: <IconMail size={28} color="rgba(255,255,255,0.85)" />, metric: 'Emails Sent', detail: 'Total outreach volume by campaign and angle so you know exactly what is active.' },
              { icon: <IconMessageSquare size={28} color="rgba(255,255,255,0.85)" />, metric: 'Replies', detail: 'Total replies received, categorized by positive, neutral, negative, and out-of-office.' },
              { icon: <IconCheckCircle size={28} color="rgba(255,255,255,0.85)" />, metric: 'Positive Replies', detail: 'Prospects that showed genuine interest -- the number that actually matters.' },
              { icon: <IconCalendar size={28} color="rgba(255,255,255,0.85)" />, metric: 'Calls Booked', detail: 'Meetings that made it onto your calendar and which campaign drove them.' },
              { icon: <IconUserCheck size={28} color="rgba(255,255,255,0.85)" />, metric: 'Calls Shown', detail: 'Prospects who actually showed up so you track no-show rates and show quality.' },
              { icon: <IconTrendingUp size={28} color="rgba(255,255,255,0.85)" />, metric: 'Pipeline Created', detail: 'Dollar value of new pipeline created from outbound activity each month.' },
              { icon: <IconFlask size={28} color="rgba(255,255,255,0.85)" />, metric: 'Campaign Tests Running', detail: 'Active A/B tests so you always know what is being optimized and why.' },
              { icon: <IconArrowRightCircle size={28} color="rgba(255,255,255,0.85)" />, metric: 'Next Actions', detail: 'Clear priorities for the coming week based on what the data is showing.' },
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

      {/* Process Section - Expandable Timeline */}
      <ManagedProcessTimeline />

      {/* Testimonials Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Results Our Clients Are Seeing
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Real stories from businesses using the Managed Outbound Pipeline System
            </p>
          </div>

          <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', border: '2px solid rgba(220,105,47,0.12)' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                    {testimonial.result}
                  </div>
                  <p style={{ fontSize: '16px', color: '#7d472a', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '16px' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid rgba(220,105,47,0.12)', paddingTop: '16px' }}>
                  <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#7d472a', marginBottom: '4px' }}>{testimonial.name}</p>
                  <p style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>{testimonial.role}</p>
                  <p style={{ fontSize: '13px', color: '#dc692f', fontWeight: '600' }}>{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ROICalculator />

      {/* FAQ Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Everything you need to know about the Managed Outbound Pipeline System
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(220,105,47,0.12)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '18px', fontWeight: '600', color: '#7d472a' }}>{faq.question}</span>
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

      {/* Final CTA Section */}
      <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>
            Ready to Build a Predictable Outbound Pipeline?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Book a strategy call and we'll outline what the Managed Pipeline system would look like for your business specifically.
          </p>

          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
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
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Month-to-month</span>
            </div>
          </div>

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

function ManagedProcessTimeline() {
  const [expandedStep, setExpandedStep] = React.useState(null);

  const steps = [
    {
      icon: <IconSearch size={36} color="currentColor" />,
      title: 'Diagnose',
      subtitle: 'ICP Review\nOffer Audit\nTargeting',
      timeline: 'Week 1',
      description: 'We start by understanding your business, your best clients, and what makes your offer resonate before a single email goes out.',
      deliverables: [
        'Review your ideal customer profile and refine target segments',
        'Audit your offer positioning and identify the strongest angles',
        'Assess any past outbound data or campaign history',
        'Map decision-maker titles and buying signals for your market',
        'Define 2-4 distinct campaign angles to test'
      ]
    },
    {
      icon: <IconZap size={36} color="currentColor" />,
      title: 'Test',
      subtitle: 'Infrastructure\nLead Lists\nCampaigns Live',
      timeline: 'Weeks 2-3',
      description: 'We set up the full infrastructure, build verified lead lists, write copy, and get campaigns live to real prospects.',
      deliverables: [
        'Configure domains, email accounts, DNS, and deliverability setup',
        'Build and verify lead lists matching your ICP',
        'Write cold email copy for 2-4 different campaign angles',
        'Set up reply tracking and Slack alerts for positive replies',
        'Launch all campaigns for split-test data from day one'
      ]
    },
    {
      icon: <IconActivity size={36} color="currentColor" />,
      title: 'Validate',
      subtitle: 'Reply Tracking\nWinning Angle\nOptimization',
      timeline: 'Week 4+',
      description: 'We track every reply, identify what is working, and optimize targeting and copy based on real market signal.',
      deliverables: [
        'Categorize every reply: positive, neutral, negative, out-of-office',
        'Measure booked-call rate from positive replies',
        'Identify the top-performing angle, segment, and message framing',
        'Optimize targeting and copy based on response data',
        'Weekly reporting call to review performance and next steps'
      ]
    },
    {
      icon: <IconTrendingUp size={36} color="currentColor" />,
      title: 'Scale',
      subtitle: 'Monthly System\nWeekly Reports\nExpansion',
      timeline: 'Ongoing',
      description: 'Once the message works, we run the system month over month — expanding volume, testing new segments, and continuously improving results.',
      deliverables: [
        'Full monthly campaign management and execution',
        'Weekly reporting: leads, emails, replies, calls booked, and pipeline',
        'Monthly strategy review and ICP expansion based on what converts',
        'Continuous A/B testing on copy and targeting',
        'CRM updates, Slack alerts, and dedicated pipeline manager as your point of contact'
      ]
    }
  ];

  return (
    <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 20px', borderRadius: '9999px', fontSize: '13px', fontWeight: '700', marginBottom: '20px', letterSpacing: '0.05em' }}>
            HOW THE MANAGED PIPELINE WORKS
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
            From Setup to Consistent Lead Generation
          </h2>
          <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '640px', margin: '0 auto' }}>
            A four-phase system to find your winning message, then scale outbound lead generation month over month.
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

function ROICalculator() {
  const [selectedPlan, setSelectedPlan] = React.useState('managed');

  // Business Metrics
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);

  // Time period
  const [daysTracked, setDaysTracked] = React.useState(90);

  // Performance model
  const [performanceModel, setPerformanceModel] = React.useState('you-handle');

  // Infrastructure
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);

  // Cost calculations
  const baseCost = selectedPlan === 'managed' ? 4000 :
                   selectedPlan === 'sprint' ? 0 :
                   2500; // performance retainer

  const domainCost = (numDomains * 12) / 12;
  const emailAccountCost = numEmailAccounts * 5;
  const instantlyCost = 97;
  const emailVerificationCost = 120;
  const leadsPerMonthCost = 70;
  const apolloPhoneVerifierCost = 60;

  const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost;

  // Email & Meeting calculations
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
  let totalCost, netProfit;

  if (selectedPlan === 'performance') {
    totalCost = Math.round((domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost + baseCost) * monthsTracked + emailVerificationCost);
    const grossProfit = totalRevenue - totalCost;
    const commissionRate = performanceModel === 'you-handle' ? 0.15 : 0.30;
    const commissionToWhiteKim = Math.round(totalRevenue * commissionRate);
    netProfit = grossProfit - commissionToWhiteKim;
  } else if (selectedPlan === 'sprint') {
    totalCost = Math.round((domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost) * monthsTracked + emailVerificationCost);
    netProfit = totalRevenue - totalCost;
  } else {
    totalCost = Math.round(totalMonthlyCost * monthsTracked + emailVerificationCost);
    netProfit = totalRevenue - totalCost;
  }

  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const plans = [
    { id: 'sprint', name: 'Sprint', basePrice: '$5,000 one-time' },
    { id: 'managed', name: 'Managed Pipeline', basePrice: 'From $4,000/mo' },
    { id: 'performance', name: 'Performance Partnership', basePrice: 'Custom + Per Meeting' }
  ];

  return (
    <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
            Calculate Your Managed Pipeline ROI
          </h2>
          <p style={{ fontSize: '20px', color: '#7d472a', opacity: 0.7 }}>
            See your potential return with the Managed Outbound Pipeline System
          </p>
        </div>

        {/* Plan Selection Tabs */}
        <div style={{ maxWidth: '900px', margin: '0 auto 32px auto' }}>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  backgroundColor: selectedPlan === plan.id ? '#dc692f' : '#fff5f0',
                  color: selectedPlan === plan.id ? '#ffffff' : '#7d472a',
                  border: selectedPlan === plan.id ? 'none' : '2px solid rgba(220,105,47,0.12)',
                  cursor: 'pointer',
                  transform: selectedPlan === plan.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.2s'
                }}
              >
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{plan.name}</div>
                <div style={{ fontSize: '12px', marginTop: '4px', opacity: 0.85 }}>{plan.basePrice}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sprint note */}
        {selectedPlan === 'sprint' && (
          <div style={{ maxWidth: '900px', margin: '0 auto 24px auto', padding: '16px 24px', backgroundColor: '#fff5f0', borderRadius: '12px', borderLeft: '4px solid #dc692f', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: '#7d472a' }}>
              <strong>Sprint is $5,000 one-time.</strong> The calculator shows ongoing infrastructure costs only for this plan.
            </p>
          </div>
        )}

        {/* ROI Calculator */}
        <div style={{ background: 'linear-gradient(135deg, #fff5f0, #ffffff)', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '2px solid #dc692f', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#dc692f' }}>
              Configuration and setup takes about 2 weeks.
            </p>
            <p style={{ fontSize: '15px', marginTop: '4px', color: '#7d472a' }}>
              Below are the numbers post successful setup.
            </p>
          </div>

          <div className="wk-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            {/* Left - Input Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a', marginBottom: '8px' }}>Your Configuration</h3>

              {/* Infrastructure Section */}
              <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #dc692f' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: '17px', marginBottom: '20px', color: '#7d472a' }}>Infrastructure Setup</h4>

                {/* Domains */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Domains</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{numDomains} (${numDomains * 12}/year)</span>
                  </div>
                  <input
                    type="range" min="0" max="100" step="1" value={numDomains}
                    onChange={(e) => setNumDomains(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>0</span>
                    <span>$12/domain/year</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Email Accounts */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Email Accounts</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                  </div>
                  <input
                    type="range" min="1" max="500" step="1" value={numEmailAccounts}
                    onChange={(e) => setNumEmailAccounts(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>1</span>
                    <span>$5/account/mo</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Business Metrics Section */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h4 style={{ fontWeight: 'bold', fontSize: '17px', color: '#7d472a' }}>Your Business Metrics</h4>

                {/* Average Deal Size */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Average Deal Size</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                  </div>
                  <input
                    type="range" min="1000" max="100000" step="500" value={avgDealSize}
                    onChange={(e) => setAvgDealSize(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>$1K</span>
                    <span>$100K</span>
                  </div>
                </div>

                {/* Close Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Close Rate (Meeting to Deal)</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{closeRate}%</span>
                  </div>
                  <input
                    type="range" min="5" max="100" step="1" value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>5%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reply Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Expected Reply Rate</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{replyRate}%</span>
                  </div>
                  <input
                    type="range" min="0.5" max="20" step="0.25" value={replyRate}
                    onChange={(e) => setReplyRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>0.5%</span>
                    <span>Our avg: 2.5%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Positive Reply Rate */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Positive Reply Rate</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{positiveReplyRate}%</span>
                  </div>
                  <input
                    type="range" min="1" max="100" step="1" value={positiveReplyRate}
                    onChange={(e) => setPositiveReplyRate(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((positiveReplyRate - 1) / 99) * 100}%, #e5e7eb ${((positiveReplyRate - 1) / 99) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>1%</span>
                    <span>Our avg: 33%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* Reply to Meeting */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Positive Reply to Meeting Rate</label>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>{replyToMeeting}%</span>
                  </div>
                  <input
                    type="range" min="0" max="50" step="1" value={replyToMeeting}
                    onChange={(e) => setReplyToMeeting(Number(e.target.value))}
                    style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${(replyToMeeting / 50) * 100}%, #e5e7eb ${(replyToMeeting / 50) * 100}%)`, cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px', color: '#7d472a', opacity: 0.6 }}>
                    <span>0%</span>
                    <span>Our avg: 35%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', border: '1px solid rgba(220,105,47,0.12)' }}>
                <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#7d472a' }}>Monthly Cost Breakdown:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: '#7d472a', opacity: 0.85 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Base Service:</span>
                    <span style={{ fontWeight: '600' }}>
                      {selectedPlan === 'sprint' ? '$0 (one-time $5,000)' : `$${baseCost.toLocaleString()}`}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Domains ({numDomains} x $12/year):</span>
                    <span style={{ fontWeight: '600' }}>${domainCost.toFixed(0)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Email Accounts ({numEmailAccounts} x $5):</span>
                    <span style={{ fontWeight: '600' }}>${emailAccountCost}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Instantly.ai:</span>
                    <span style={{ fontWeight: '600' }}>$97</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Leads:</span>
                    <span style={{ fontWeight: '600' }}>$70</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Email Verification (one-time):</span>
                    <span style={{ fontWeight: '600' }}>$120</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', marginTop: '8px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
                    <span style={{ fontWeight: 'bold' }}>Total/Month:</span>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>${(domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost).toFixed(0)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', marginTop: '8px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
                    <span style={{ fontWeight: 'bold' }}>Total Investment ({daysTracked} days):</span>
                    <span style={{ fontWeight: 'bold', color: '#dc692f' }}>${totalCost.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a' }}>Post Setup {daysTracked}-Day Projection</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <label style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Days:</label>
                  <input
                    type="number" min="1" max="365" value={daysTracked}
                    onChange={(e) => setDaysTracked(Number(e.target.value))}
                    style={{ width: '80px', padding: '8px 12px', border: '2px solid #dc692f', borderRadius: '8px', fontWeight: 'bold', textAlign: 'center', color: '#dc692f', fontSize: '15px' }}
                  />
                </div>
              </div>

              {/* Email Volume Stats */}
              <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(220,105,47,0.12)' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#7d472a' }}>Outbound Volume ({daysTracked} days)</h4>
                <div className="wk-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f' }}>{totalEmailsForPeriod.toLocaleString()}</div>
                    <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Total Sent</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f' }}>{totalRepliesForPeriod}</div>
                    <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Total Replies</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f' }}>{totalPositiveRepliesForPeriod}</div>
                    <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Positive Replies</div>
                  </div>
                </div>
              </div>

              {/* Meeting & Deal Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalMeetingsForPeriod}</div>
                  <div style={{ fontSize: '14px', color: '#7d472a' }}>Total Meetings</div>
                </div>
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalClosedDealsForPeriod}</div>
                  <div style={{ fontSize: '14px', color: '#7d472a' }}>Total Closed Deals</div>
                </div>
              </div>

              {/* Revenue Breakdown */}
              <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '20px', color: '#7d472a' }}>Financial Projection</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Total Revenue</span>
                      <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '16px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '9999px', backgroundColor: '#dc692f', width: totalRevenue > 0 ? '100%' : '0%', transition: 'width 0.3s' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '600', fontSize: '14px', color: '#7d472a' }}>Total Investment</span>
                      <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '16px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', borderRadius: '9999px', backgroundColor: '#9ca3af', width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%', transition: 'width 0.3s' }} />
                    </div>
                    {/* Cost breakdown under Total Investment */}
                    <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '12px', color: '#7d472a', opacity: 0.75 }}>
                      {selectedPlan === 'sprint' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Sprint (one-time)</span>
                          <span style={{ fontWeight: '600' }}>$5,000</span>
                        </div>
                      )}
                      {selectedPlan === 'managed' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Managed Pipeline (monthly)</span>
                          <span style={{ fontWeight: '600' }}>$4,000/mo</span>
                        </div>
                      )}
                      {selectedPlan === 'performance' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span>Base Retainer (monthly)</span>
                          <span style={{ fontWeight: '600' }}>$2,500/mo</span>
                        </div>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Domains ({numDomains} x $12/yr)</span>
                        <span style={{ fontWeight: '600' }}>${domainCost.toFixed(0)}/mo</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Email Accounts ({numEmailAccounts} x $5)</span>
                        <span style={{ fontWeight: '600' }}>${emailAccountCost}/mo</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Instantly.ai</span>
                        <span style={{ fontWeight: '600' }}>$97/mo</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Leads</span>
                        <span style={{ fontWeight: '600' }}>$70/mo</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Email Verification (one-time)</span>
                        <span style={{ fontWeight: '600' }}>$120</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Apollo Phone Verifier</span>
                        <span style={{ fontWeight: '600' }}>$60/mo</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px', marginTop: '4px', borderTop: '1px solid rgba(220,105,47,0.2)', fontWeight: 'bold', opacity: 1 }}>
                        <span style={{ color: '#7d472a' }}>Monthly Infra</span>
                        <span style={{ color: '#dc692f' }}>${(domainCost + emailAccountCost + instantlyCost + leadsPerMonthCost + apolloPhoneVerifierCost).toFixed(0)}/mo</span>
                      </div>
                    </div>
                  </div>

                  {/* Performance Model Toggle */}
                  {selectedPlan === 'performance' && (
                    <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', border: '1px solid rgba(220,105,47,0.25)' }}>
                      <h5 style={{ fontWeight: 'bold', marginBottom: '12px', textAlign: 'center', fontSize: '14px', color: '#7d472a' }}>Performance Model</h5>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        {[
                          { id: 'you-handle', label: 'You Handle', sub: 'Positive Replies', pct: '15%' },
                          { id: 'white-kim', label: 'White Kim Handles', sub: 'Positive Replies', pct: '30%' }
                        ].map((model) => (
                          <button
                            key={model.id}
                            onClick={() => setPerformanceModel(model.id)}
                            style={{
                              padding: '12px',
                              borderRadius: '8px',
                              fontWeight: '600',
                              fontSize: '13px',
                              border: '2px solid',
                              cursor: 'pointer',
                              backgroundColor: performanceModel === model.id ? '#dc692f' : '#ffffff',
                              color: performanceModel === model.id ? '#ffffff' : '#7d472a',
                              borderColor: performanceModel === model.id ? '#dc692f' : 'rgba(220,105,47,0.25)',
                              transition: 'all 0.2s'
                            }}
                          >
                            <div style={{ fontSize: '12px', marginBottom: '2px' }}>{model.label}</div>
                            <div style={{ fontSize: '11px', opacity: 0.8 }}>{model.sub}</div>
                            <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '4px' }}>{model.pct}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{ paddingTop: '16px', borderTop: '2px solid rgba(220,105,47,0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: '600', fontSize: '18px', color: '#7d472a' }}>Net Profit</span>
                      <span style={{ fontWeight: 'bold', fontSize: '32px', color: '#dc692f' }}>${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Result */}
              <div style={{ background: 'linear-gradient(135deg, #fde8d8, #fff5f0)', padding: '24px', borderRadius: '12px', textAlign: 'center', border: '2px solid #dc692f' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#7d472a' }}>Your ROI</div>
                <div style={{ fontSize: '56px', fontWeight: 'bold', color: '#dc692f', lineHeight: '1' }}>{roi}%</div>
                <p style={{ fontSize: '14px', marginTop: '12px', color: '#7d472a', opacity: 0.7 }}>
                  For every $1 spent, you get back ${totalCost > 0 ? ((netProfit / totalCost) + 1).toFixed(2) : '0'}
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(220,105,47,0.15)' }}>
            <a href="/book-a-call" style={{ textDecoration: 'none' }}>
              <button style={{ padding: '16px 40px', borderRadius: '9999px', fontWeight: '600', fontSize: '18px', boxShadow: '0 8px 24px rgba(220,105,47,0.3)', color: 'white', backgroundColor: '#dc692f', border: 'none', cursor: 'pointer' }}>
                Book a Call to Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
