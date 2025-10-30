import React from 'react';

export default function MainServiceProductPage() {
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);
  const [daysTracked, setDaysTracked] = React.useState(90);
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);
  const [openFaq, setOpenFaq] = React.useState(null);

  const baseCost = 2800;
  const domainCost = numDomains * 12;
  const emailAccountCost = numEmailAccounts * 5;
  const instantlyCost = 97;
  const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost;

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
  const totalCost = Math.round(totalMonthlyCost * monthsTracked);
  const netProfit = totalRevenue - totalCost;
  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const features = [
    { icon: "🎯", title: "Strategy & ICP Targeting", description: "We identify your ideal customer profile and build a targeting strategy that reaches decision-makers who need your solution." },
    { icon: "⚙️", title: "Complete System Setup", description: "DNS configuration, domain warming, CRM integration, analytics dashboards—we handle every technical detail so you don't have to." },
    { icon: "✍️", title: "Messaging & A/B Testing", description: "Custom email sequences crafted for your offer, with continuous A/B testing to optimize open rates and replies." },
    { icon: "📊", title: "30-Day Campaign Management", description: "Full hands-off campaign execution including list building, sending, reply monitoring, and meeting coordination." },
    { icon: "📈", title: "Weekly Reporting & Optimization", description: "Detailed performance reports every week with actionable insights and continuous campaign optimization." },
    { icon: "📚", title: "Full Training & Documentation", description: "Complete training videos and documentation so your team understands the system and can manage it if needed." }
  ];

  const processSteps = [
    { step: "1", title: "Strategy Session", description: "We kick off with a deep-dive into your offer, ICP, and goals to build a custom outreach strategy.", timeline: "Week 1" },
    { step: "2", title: "Infrastructure Setup", description: "We configure domains, email accounts, DNS records, and warm up your sending infrastructure.", timeline: "Week 1-2" },
    { step: "3", title: "Campaign Launch", description: "We build your lead lists, craft messaging, and launch your first campaigns with A/B tests running.", timeline: "Week 2-3" },
    { step: "4", title: "Optimize & Scale", description: "We monitor performance, handle replies, book meetings, and continuously optimize for better results.", timeline: "Week 3+" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechFlow SaaS", role: "Head of Sales", quote: "We went from 2 meetings per month to 15+ qualified calls in the first 60 days. The ROI was immediate.", result: "15+ meetings/month" },
    { name: "Michael Chen", company: "CloudScale Solutions", role: "Founder & CEO", quote: "White Kim built an outbound engine that consistently fills our calendar. Best decision we made this year.", result: "$240K pipeline in 90 days" },
    { name: "Jennifer Martinez", company: "DataDrive Analytics", role: "VP of Growth", quote: "The team handles everything—from infrastructure to booking meetings. We just show up and close deals.", result: "8 new clients in Q1" }
  ];

  const faqs = [
    { question: "How quickly can we get started?", answer: "We can have your infrastructure set up and first campaigns launched within 14 days of our kickoff call." },
    { question: "What if we don't get results?", answer: "We guarantee meeting bookings within the first 60 days or we'll work for free until you do. Our success is tied to yours." },
    { question: "Do we need our own email accounts?", answer: "No. We handle everything—domain purchase, email account setup, DNS configuration, and warming. You just need to show up to meetings." },
    { question: "What kind of businesses is this for?", answer: "Best for B2B companies with deal values of $4,000+ and capacity to onboard 5+ new clients monthly or handle $20,000+ in additional revenue." },
    { question: "Can we cancel anytime?", answer: "Yes. This is a month-to-month service with no long-term contracts. Cancel anytime with 30 days notice." },
    { question: "What's included in the infrastructure cost?", answer: "Domains ($12/each), email accounts ($5/each), Instantly.ai subscription ($97), and any other tools needed for deliverability and tracking." }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid #e5e7eb', backgroundColor: '#ffffff' }}>
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
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
                Our Main Service • Most Popular • Best Value
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                Main Recruiting Service
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                This is our flagship service and most popular choice. Full end-to-end cold email recruiting operation—from infrastructure setup to qualified meetings on your calendar. We handle everything including custom AI automation workflows so you can focus on closing deals. This is the best option for businesses serious about scaling their outbound.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>$2,800</div>
                <div style={{ fontSize: '20px', color: '#7d472a', opacity: 0.6 }}>/month</div>
              </div>
              
              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '8px' }}>
                  <strong>Plus infrastructure costs:</strong>
                </p>
                <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.8 }}>
                  ~$657/month (domains, email accounts, tools)
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '2px solid #dc692f20' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>What's Included</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Strategy & ICP Targeting', 'Complete System Setup (DNS, CRM, Analytics)', 'Messaging & A/B Testing', '30-Day Campaign Management', 'Weekly Reporting & Optimization', 'Full Training & Documentation'].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '20px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(220, 105, 47, 0.15)', border: '2px solid #dc692f' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>Exclusive</h3>
                  <span style={{ fontSize: '24px' }}>⭐</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['Ongoing Campaign Management', 'Back-End Custom CRM Implementations', 'Automated AI Workflows (Custom Built)', 'White Glove Services On-Demand for Updates', 'Extra Strategy Calls for Hands-On Support'].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '20px', color: '#dc692f', flexShrink: 0 }}>✓</span>
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
              A complete cold email system designed to consistently book qualified meetings
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {features.map((feature, idx) => (
              <div key={idx} style={{ padding: '32px', backgroundColor: '#fff5f0', borderRadius: '16px', border: '1px solid #dc692f20' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{feature.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>{feature.title}</h3>
                <p style={{ fontSize: '15px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
  
      <WhiteKimMethodSection />
      {/* Testimonials Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Results Our Clients Are Seeing
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Real stories from businesses using our Main Recruiting Service
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', border: '2px solid #dc692f20' }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                    {testimonial.result}
                  </div>
                  <p style={{ fontSize: '16px', color: '#7d472a', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '16px' }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid #dc692f20', paddingTop: '16px' }}>
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
              Everything you need to know about our Main Recruiting Service
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #dc692f20' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '18px', fontWeight: '600', color: '#7d472a' }}>{faq.question}</span>
                  <span style={{ fontSize: '24px', color: '#dc692f', transition: 'transform 0.3s', transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
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
            Ready to Fill Your Calendar with Qualified Meetings?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Book a strategy call to discuss your goals and get started with our Main Recruiting Service. We'll have your first campaigns live within 14 days.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>No setup fees</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Cancel anytime</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>60-day guarantee</span>
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

function WhiteKimMethodSection() {

  const [expandedStep, setExpandedStep] = React.useState(null);
  
  const steps = [
  {
  title: "Intro Call",
  subtitle: "Pre-Sale\nFit Assessment\nPlan Selection",
  timeline: "30-45 min",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
  ),
  description: "This is where we determine if working together makes sense. We analyze your current outreach, offer, and bottlenecks holding back growth.",
  deliverables: [
  "Business Deep-Dive: Analyze current outreach, offer, and growth bottlenecks",
  "Fit Assessment: Evaluate if our outbound system aligns with your goals and capacity to scale",
  "Plan Selection: Review which model makes the most sense and realistic ROI expectations for first 30 days",
  "If it's a fit, we move straight into discovery and setup where we build out the customized plan"
  ]
  },
  {
  title: "Discovery & Setup",
  subtitle: "Custom plan\nScope & financials\nTool setup",
  timeline: "1-2 days",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
  ),
  description: "We'll go over your customized plan, scope of work, financials, deadlines, and expected returns — ensuring full alignment before kickoff. Payment will be processed on the call to officially begin the engagement.",
  deliverables: [
  "Deep-dive call to define your ICP, messaging angles, and dream-client profile",
  "Access setup for tools (Instantly, Apollo, Slack, etc.)",
  "Outline your full outreach system — messaging, targeting, and volume goals",
  "Send Stripe link for your tool subscriptions",
  "Loom walkthroughs to guide you through Instantly setup + inbox warming"
  ]
  },
  {
  title: "💳 Payment",
  subtitle: "Secure payment\nEngagement begins\nOfficial kickoff",
  timeline: "Same day",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
  ),
  description: "Payment is processed securely via Stripe to officially begin your engagement. Once payment is confirmed, we immediately move into Week 1 infrastructure build.",
  deliverables: [
  "Stripe payment link sent and processed on Discovery call",
  "Payment confirms official start of engagement",
  "Immediate access to all tools and systems",
  "Week 1 infrastructure build begins within 24 hours"
  ]
  },
  {
  title: "Week 1: Infrastructure",
  subtitle: "Domain setup\nEmail configuration\nDNS & warm-up",
  timeline: "Week 1",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
  ),
  description: "This week focuses on building the technical foundation for your outbound system via live Zoom sessions and tool configuration.",
  deliverables: [
  "Live Zoom session to walk through setup and configuration",
  "Purchase and configure 30 domains (we recommend which to buy)",
  "Create 30 email addresses and connect them to Instantly.ai",
  "Configure DNS records (SPF, DKIM, DMARC)",
  "Begin inbox warm-up (critical for high deliverability)",
  "Verify all tool connections (Apollo, Slack, tracking systems)"
  ]
  },
  {
  title: "Week 2: Targeting",
  subtitle: "List building\nEmail verification\nMessaging scripts",
  timeline: "Week 2",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
  ),
  description: "We build your target audience, verify contacts, and craft compelling messaging tailored to your positioning and tone.",
  deliverables: [
  "Build and export your first list from Apollo.io (CEOs, CTOs, Founders in tech/healthcare/SaaS)",
  "Verify all emails to ensure a clean, validated list",
  "Write 5 versions of cold email scripts tailored to your positioning and tone",
  "Set up Slack alerts so you're notified instantly when someone replies"
  ]
  },
  {
  title: "Week 3: Audit",
  subtitle: "System check\nDeliverability test\nPre-launch review",
  timeline: "Week 3",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
  ),
  description: "Perform a full technical and strategic audit before launch to ensure every system is healthy and ready to scale.",
  deliverables: [
  "Validate inbox health, warm-up status, and DNS configurations",
  "Test deliverability, spam placement, and automation flows",
  "Verify tracking, sequences, and Slack integrations",
  "Ensure every system is healthy and ready to scale",
  "Final pre-launch checklist and approval"
  ]
  },
  {
  title: "Week 4: Launch",
  subtitle: "Campaign live\nDaily monitoring\nWeekly optimization",
  timeline: "Week 4",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
  ),
  description: "Your cold email engine goes live. We launch your first campaign and begin daily monitoring and optimization.",
  deliverables: [
  "Launch your first campaign to 500–1,000 prospects",
  "Monitor deliverability, open rates, and reply rates daily",
  "Optimize messaging and targeting based on early responses",
  "Provide weekly Loom updates covering performance + next steps",
  "First meetings typically book within 10-14 days"
  ]
  },
  {
  title: "Ongoing",
  subtitle: "Continuous optimization\nA/B testing\nScale & expand",
  timeline: "Weekly",
  icon: (
  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
  ),
  description: "Complete transparency on what's working, continuous testing, and optimization to consistently improve your results month over month.",
  deliverables: [
  "Test new angles, subject lines, and audience segments",
  "Expand your ICP based on top-performing responses",
  "Maintain inbox health with consistent domain rotation",
  "Run ongoing performance reviews and optimization loops",
  "Weekly Loom reports with metrics, insights, and next week's roadmap"
  ]
  }
  ];
  
  return (
  <div className="py-20" style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
  <div className="container mx-auto px-8">
  {/* Header */}
  <div className="text-center mb-16">
  <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
  THE PROVEN WHITE KIM METHOD
  </div>
  <h2 className="text-5xl font-bold mb-6" style={{ color: '#7d472a' }}>
  From Payment to First Meetings in 4 Weeks<br />with High-Quality Client Management
  </h2>
  <p className="text-lg max-w-3xl mx-auto" style={{ color: '#7d472a', opacity: 0.7 }}>
  Our complete 8-step cold email system—from discovery to ongoing optimization
  </p>
  </div>
  
  {/* Process Timeline with Zigzag Heights */}
  <div className="max-w-7xl mx-auto mb-16">
  <div className="relative">
  {/* Horizontal Row with Alternating Heights */}
  <div className="flex items-start justify-between relative">
  {steps.map((step, index) => {
  const isPaymentStep = step.title === "💳 Payment";
  return (
  <div key={index} className="flex-1 text-center relative z-10 group px-2" style={{ marginTop: index % 2 === 0 ? '0' : '100px' }}>
  <button
  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
  onMouseEnter={(e) => {
  if (!isPaymentStep) {
  const icon = e.currentTarget.querySelector('.icon-circle');
  if (icon) {
  icon.style.transform = 'scale(1.15) rotate(0deg)';
  icon.style.boxShadow = '0 15px 40px rgba(220, 105, 47, 0.4)';
  icon.style.animation = 'zoomShake 0.6s ease-in-out';
  }
  }
  }}
  onMouseLeave={(e) => {
  if (!isPaymentStep) {
  const icon = e.currentTarget.querySelector('.icon-circle');
  if (icon) {
  icon.style.transform = 'scale(1) rotate(0deg)';
  icon.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
  icon.style.animation = 'none';
  }
  }
  }}
  className="w-full relative"
  >
  {isPaymentStep ? (
  // Special styling for payment step
  <div
  className="icon-circle w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4 cursor-pointer relative border-4"
  style={{
  backgroundColor: '#f3f4f6',
  borderColor: '#9ca3af',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }}
  >
  <div style={{ color: '#6b7280' }}>
  {step.icon}
  </div>
  </div>
  ) : (
  // Regular styling for other steps
  <div
  className="icon-circle w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 text-white cursor-pointer relative"
  style={{
  backgroundColor: expandedStep === index ? '#b85832' : '#dc692f',
  boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
  }}
  >
  <div style={{ transform: 'scale(0.7)' }}>
  {step.icon}
  </div>
  </div>
  )}
  
  <h3 className="text-base font-bold mb-2 transition-all" style={{ color: '#7d472a' }}>{step.title}</h3>
  <p className="text-xs leading-relaxed mb-2 whitespace-pre-line" style={{ color: '#7d472a', opacity: 0.7 }}>
  {step.subtitle}
  </p>
  <div className="inline-block px-3 py-1.5 rounded-full text-xs font-bold transition-transform mb-2" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
  {step.timeline}
  </div>
  <div className="mt-1">
  <span className="text-xs font-bold hover:underline transition-all" style={{ color: '#dc692f' }}>
  {expandedStep === index ? '▲ Hide' : '▼ Details'}
  </span>
  </div>
  </button>
  
  {/* Dotted Connection Line to Next Step (except last) */}
  {index < steps.length - 1 && (
  <svg
  className="absolute left-full"
  style={{
  top: isPaymentStep ? '16px' : '14px',
  width: '100%',
  height: index % 2 === 0 ? '100px' : '100px',
  zIndex: 0,
  overflow: 'visible',
  pointerEvents: 'none'
  }}
  >
  <path
  d={index % 2 === 0
  ? "M 10 14 Q 40 14, 50 45 T 90 86" // Down curve - starts and ends closer to circles
  : "M 10 86 Q 40 86, 50 55 T 90 14" // Up curve - starts and ends closer to circles
  }
  stroke="#dc692f"
  strokeWidth="2.5"
  fill="none"
  strokeDasharray="6 6"
  opacity="0.4"
  />
  </svg>
  )}
  </div>
  );
  })}
  </div>
  
  {/* Expanded Content Below All Steps */}
  {expandedStep !== null && (
  <div className="w-full mt-16">
  <div className="bg-white rounded-2xl shadow-2xl p-10 border-2 animate-fadeIn" style={{ borderColor: '#dc692f' }}>
  <h4 className="text-3xl font-bold mb-6" style={{ color: '#7d472a' }}>
  {steps[expandedStep].title}
  </h4>
  
  <p className="text-lg leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.85 }}>
  {steps[expandedStep].description}
  </p>
  
  <div className="rounded-2xl p-8" style={{ backgroundColor: '#fff5f0' }}>
  <h5 className="font-bold text-xl mb-6" style={{ color: '#7d472a' }}>What You Get:</h5>
  <ul className="space-y-4">
  {steps[expandedStep].deliverables.map((deliverable, idx) => (
  <li key={idx} className="flex gap-4 items-start">
  <span className="text-xl mt-0.5 flex-shrink-0" style={{ color: '#dc692f' }}>•</span>
  <span className="text-lg leading-relaxed" style={{ color: '#7d472a', opacity: 0.85 }}>{deliverable}</span>
  </li>
  ))}
  </ul>
  </div>
  </div>
  </div>
  )}
  </div>
  </div>
  
  <style jsx>{`
  @keyframes fadeIn {
  from {
  opacity: 0;
  transform: translateY(-10px);
  }
  to {
  opacity: 1;
  transform: translateY(0);
  }
  }
  .animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
  }
  @keyframes zoomShake {
  0% {
  transform: scale(1) rotate(0deg);
  }
  15% {
  transform: scale(1.1) rotate(-2deg);
  }
  30% {
  transform: scale(1.15) rotate(2deg);
  }
  45% {
  transform: scale(1.18) rotate(-2deg);
  }
  60% {
  transform: scale(1.2) rotate(2deg);
  }
  75% {
  transform: scale(1.18) rotate(-1deg);
  }
  90% {
  transform: scale(1.2) rotate(1deg);
  }
  100% {
  transform: scale(1.2) rotate(0deg);
  }
  }
  `}</style>
  </div>
  </div>
  );
  }
  function ROICalculator() {
    const [selectedPlan, setSelectedPlan] = React.useState('done-for-you');
    
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
    const baseCost = selectedPlan === 'done-for-you' ? 2800 : 
                     selectedPlan === 'setup-launch' ? 1595 : 
                     0; // Performance-based has no base cost
    
    const domainCost = (numDomains * 12) / 12; // $12 per domain per year, divided by 12 for monthly cost
    const emailAccountCost = numEmailAccounts * 5; // $5 per email account
    const instantlyCost = 97; // Instantly.ai subscription
    const emailVerificationCost = 120; // One-time fee for email verification
    const leadsPerMonthCost = 70; // Average of $40-100 range for leads
    const deliverabilityCheckerCost = 47; // Monthly deliverability checker
    
    const totalMonthlyCost = baseCost + domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost;
  
    // Email & Meeting calculations
    const emailsPerDay = numEmailAccounts * 20; // 20 emails per account per day
    const emailsPerMonth = emailsPerDay * 22; // 22 business days
    const totalReplies = Math.round((emailsPerMonth * replyRate) / 100);
    const positiveReplies = Math.round((totalReplies * positiveReplyRate) / 100);
    const meetingsBooked = Math.round((positiveReplies * replyToMeeting) / 100);
    
    // Revenue calculations - all based on the days tracked
    const monthsTracked = daysTracked / 30; // Convert days to months
    const totalEmailsForPeriod = Math.round(emailsPerMonth * monthsTracked);
    const totalRepliesForPeriod = Math.round(totalReplies * monthsTracked);
    const totalPositiveRepliesForPeriod = Math.round(positiveReplies * monthsTracked);
    const totalMeetingsForPeriod = Math.round(meetingsBooked * monthsTracked);
    const closedDealsPerMonth = Math.round((meetingsBooked * closeRate) / 100);
    const totalClosedDealsForPeriod = Math.round(closedDealsPerMonth * monthsTracked);
    
    // Calculate revenue and costs
    const totalRevenue = totalClosedDealsForPeriod * avgDealSize;
    let totalCost, netProfit;
    
    if (selectedPlan === 'performance') {
      // Performance-based: infrastructure costs only
      totalCost = Math.round((domainCost + emailAccountCost + instantlyCost + deliverabilityCheckerCost + leadsPerMonthCost) * monthsTracked + emailVerificationCost);
      const grossProfit = totalRevenue - totalCost;
      
      // Deduct commission that goes to White Kim
      const commissionRate = performanceModel === 'you-handle' ? 0.15 : 0.30;
      const commissionToWhiteKim = Math.round(totalRevenue * commissionRate);
      netProfit = grossProfit - commissionToWhiteKim;
    } else {
      // Regular pricing (Done-For-You or Setup & Launch)
      totalCost = Math.round(totalMonthlyCost * monthsTracked + emailVerificationCost);
      netProfit = totalRevenue - totalCost;
    }
    
    const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;
  
    const plans = [
      { id: 'done-for-you', name: 'Done-For-You', basePrice: '$2,800/mo' },
      { id: 'setup-launch', name: 'Setup & Launch', basePrice: '$1,595 one-time' },
      { id: 'performance', name: 'Performance-Based', basePrice: '$0 base' }
    ];
  
    return (
      <div className="py-20" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#7d472a' }}>
              See For Yourself: ROI Calculator
            </h2>
            <p className="text-xl" style={{ color: '#7d472a', opacity: 0.7 }}>
              Calculate your potential return with custom infrastructure
            </p>
          </div>
  
          {/* Plan Selection Tabs */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-4 justify-center">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className="px-8 py-4 rounded-full font-semibold transition-all"
                  style={{
                    backgroundColor: selectedPlan === plan.id ? '#dc692f' : '#fff5f0',
                    color: selectedPlan === plan.id ? '#ffffff' : '#7d472a',
                    border: selectedPlan === plan.id ? 'none' : '2px solid #dc692f20',
                    transform: selectedPlan === plan.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                >
                  <div className="text-base font-bold">{plan.name}</div>
                  <div className="text-xs mt-1" style={{ opacity: 0.8 }}>{plan.basePrice}</div>
                </button>
              ))}
            </div>
          </div>
  
          {/* ROI Calculator */}
          <div className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-3xl shadow-2xl border-2 max-w-7xl mx-auto" style={{ borderColor: '#dc692f' }}>
            {/* Setup Notice */}
            <div className="text-center mb-8">
              <p className="text-lg font-bold" style={{ color: '#dc692f' }}>
                Configuration and setup takes 30 days.
              </p>
              <p className="text-base mt-1" style={{ color: '#7d472a' }}>
                Below are the numbers post successful setup.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-12">
              {/* Left - Input Controls */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#7d472a' }}>Your Configuration</h3>
                
                {/* Infrastructure Section */}
                <div className="bg-white p-6 rounded-xl border-2" style={{ borderColor: '#dc692f' }}>
                  <h4 className="font-bold text-lg mb-4" style={{ color: '#7d472a' }}>Infrastructure Setup</h4>
                  
                  {/* Domains */}
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Domains</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{numDomains} (${numDomains * 12}/year)</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={numDomains}
                      onChange={(e) => setNumDomains(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>0</span>
                      <span>$12/domain/year</span>
                      <span>100</span>
                    </div>
                  </div>
  
                  {/* Email Accounts */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Email Accounts</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="500"
                      step="1"
                      value={numEmailAccounts}
                      onChange={(e) => setNumEmailAccounts(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>1</span>
                      <span>$5/account/mo</span>
                      <span>500</span>
                    </div>
                  </div>
                </div>
  
                {/* Business Metrics Section */}
                <div className="space-y-4">
                  <h4 className="font-bold text-lg" style={{ color: '#7d472a' }}>Your Business Metrics</h4>
                  
                  {/* Average Deal Size */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Average Deal Size</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="500"
                      value={avgDealSize}
                      onChange={(e) => setAvgDealSize(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>$1K</span>
                      <span>$100K</span>
                    </div>
                  </div>
  
                  {/* Close Rate */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Close Rate (Meeting → Deal)</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{closeRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="1"
                      value={closeRate}
                      onChange={(e) => setCloseRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>5%</span>
                      <span>100%</span>
                    </div>
                  </div>
  
                  {/* Reply Rate */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Expected Reply Rate</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{replyRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="20"
                      step="0.25"
                      value={replyRate}
                      onChange={(e) => setReplyRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>0.5%</span>
                      <span>Our avg: 2.5%</span>
                      <span>20%</span>
                    </div>
                  </div>
  
                  {/* Positive Reply Rate */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply Rate</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{positiveReplyRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={positiveReplyRate}
                      onChange={(e) => setPositiveReplyRate(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${((positiveReplyRate - 1) / 99) * 100}%, #e5e7eb ${((positiveReplyRate - 1) / 99) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>1%</span>
                      <span>Our avg: 33%</span>
                      <span>100%</span>
                    </div>
                  </div>
  
                  {/* Reply to Meeting Conversion */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Positive Reply → Meeting Rate</label>
                      <span className="font-bold" style={{ color: '#dc692f' }}>{replyToMeeting}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      value={replyToMeeting}
                      onChange={(e) => setReplyToMeeting(Number(e.target.value))}
                      className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                      style={{ background: `linear-gradient(to right, #dc692f ${(replyToMeeting / 50) * 100}%, #e5e7eb ${(replyToMeeting / 50) * 100}%)` }}
                    />
                    <div className="flex justify-between text-xs mt-1" style={{ color: '#7d472a', opacity: 0.6 }}>
                      <span>0%</span>
                      <span>Our avg: 35%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
  
                {/* Cost Breakdown */}
                <div className="bg-white p-4 rounded-xl border" style={{ borderColor: '#dc692f20' }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Monthly Cost Breakdown:</p>
                  <div className="space-y-1 text-sm" style={{ color: '#7d472a', opacity: 0.8 }}>
                    <div className="flex justify-between">
                      <span>Base Service:</span>
                      <span className="font-semibold">${baseCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domains ({numDomains} × $12/year):</span>
                      <span className="font-semibold">${domainCost.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email Accounts ({numEmailAccounts} × $5):</span>
                      <span className="font-semibold">${emailAccountCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Instantly.ai:</span>
                      <span className="font-semibold">$97</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deliverability Checker:</span>
                      <span className="font-semibold">$47</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Leads:</span>
                      <span className="font-semibold">$70</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Email Verification (one-time fee):</span>
                      <span className="font-semibold">$120</span>
                    </div>
                    <div className="flex justify-between pt-2 mt-2 border-t" style={{ borderColor: '#dc692f20' }}>
                      <span className="font-bold">Total/Month:</span>
                      <span className="font-bold" style={{ color: '#dc692f' }}>${totalMonthlyCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-2 mt-2 border-t" style={{ borderColor: '#dc692f20' }}>
                      <span className="font-bold">Initial Payment:</span>
                      <span className="font-bold" style={{ color: '#dc692f' }}>${(totalMonthlyCost + emailVerificationCost).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Yearly (domains only):</span>
                      <span className="font-bold" style={{ color: '#dc692f' }}>${(numDomains * 12).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Right - Results & Projections */}
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold" style={{ color: '#7d472a' }}>Post Setup {daysTracked}-Day Projection</h3>
                  <div className="flex items-center gap-3">
                    <label className="font-semibold text-sm" style={{ color: '#7d472a' }}>Days:</label>
                    <input
                      type="number"
                      min="1"
                      max="365"
                      value={daysTracked}
                      onChange={(e) => setDaysTracked(Number(e.target.value))}
                      className="w-20 px-3 py-2 border-2 rounded-lg font-bold text-center"
                      style={{ borderColor: '#dc692f', color: '#dc692f' }}
                    />
                  </div>
                </div>
                
                {/* Email Volume Stats */}
                <div className="bg-white p-6 rounded-xl shadow border" style={{ borderColor: '#dc692f20' }}>
                  <h4 className="font-bold mb-4" style={{ color: '#7d472a' }}>Email Volume ({daysTracked} days)</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalEmailsForPeriod.toLocaleString()}</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Total Emails</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalRepliesForPeriod}</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Total Replies</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#dc692f' }}>{totalPositiveRepliesForPeriod}</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Positive Replies</div>
                    </div>
                  </div>
                </div>
  
                {/* Meeting & Deal Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>{totalMeetingsForPeriod}</div>
                    <div className="text-sm" style={{ color: '#7d472a' }}>Total Meetings</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>{totalClosedDealsForPeriod}</div>
                    <div className="text-sm" style={{ color: '#7d472a' }}>Total Closed Deals</div>
                  </div>
                </div>
  
                {/* Revenue Breakdown */}
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="font-bold mb-4" style={{ color: '#7d472a' }}>Financial Projection</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Closed Deals</span>
                        <span className="font-bold text-xl" style={{ color: '#dc692f' }}>{totalClosedDealsForPeriod}</span>
                      </div>
                    </div>
  
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Revenue</span>
                        <span className="font-bold text-xl" style={{ color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-300" 
                          style={{ 
                            width: totalRevenue > 0 ? '100%' : '0%', 
                            backgroundColor: '#dc692f' 
                          }}
                        ></div>
                      </div>
                    </div>
  
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>Total Investment</span>
                        <span className="font-bold text-xl" style={{ color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gray-400 rounded-full transition-all duration-300" 
                          style={{ 
                            width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%' 
                          }}
                        ></div>
                      </div>
                    </div>
  
                    {/* Performance Model Selection - Only show for Performance-Based plan */}
                    {selectedPlan === 'performance' && (
                      <div className="p-4 bg-orange-50 rounded-xl border" style={{ borderColor: '#dc692f40' }}>
                        <h5 className="font-bold mb-3 text-center text-sm" style={{ color: '#7d472a' }}>Performance Model</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setPerformanceModel('you-handle')}
                            className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                            style={{
                              backgroundColor: performanceModel === 'you-handle' ? '#dc692f' : '#ffffff',
                              color: performanceModel === 'you-handle' ? '#ffffff' : '#7d472a',
                              borderColor: performanceModel === 'you-handle' ? '#dc692f' : '#dc692f40'
                            }}
                          >
                            <div className="text-xs mb-1">You Handle</div>
                            <div className="text-xs opacity-80">Positive Replies</div>
                            <div className="text-base font-bold mt-1">15%</div>
                          </button>
                          <button
                            onClick={() => setPerformanceModel('white-kim')}
                            className="p-3 rounded-lg font-semibold transition-all border-2 text-xs"
                            style={{
                              backgroundColor: performanceModel === 'white-kim' ? '#dc692f' : '#ffffff',
                              color: performanceModel === 'white-kim' ? '#ffffff' : '#7d472a',
                              borderColor: performanceModel === 'white-kim' ? '#dc692f' : '#dc692f40'
                            }}
                          >
                            <div className="text-xs mb-1">White Kim Handles</div>
                            <div className="text-xs opacity-80">Positive Replies</div>
                            <div className="text-base font-bold mt-1">30%</div>
                          </button>
                        </div>
                      </div>
                    )}
  
                    <div className="pt-4 border-t-2" style={{ borderColor: '#dc692f20' }}>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg" style={{ color: '#7d472a' }}>Net Profit</span>
                        <span className="font-bold text-3xl" style={{ color: '#dc692f' }}>${netProfit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
  
                {/* ROI Result */}
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-xl text-center border-2" style={{ borderColor: '#dc692f' }}>
                  <div className="text-sm font-semibold mb-2" style={{ color: '#7d472a' }}>Your ROI</div>
                  <div className="text-5xl font-bold" style={{ color: '#dc692f' }}>{roi}%</div>
                  <p className="text-sm mt-2" style={{ color: '#7d472a', opacity: 0.7 }}>
                    For every $1 spent, you make ${totalCost > 0 ? ((netProfit / totalCost) + 1).toFixed(2) : '0'}
                  </p>
                </div>
              </div>
            </div>
  
            {/* CTA */}
            <div className="text-center mt-10 pt-8 border-t" style={{ borderColor: '#dc692f20' }}>
              <button className="px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition text-white" style={{ backgroundColor: '#dc692f' }}>
                Book a Call to Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  