import React from 'react';

export default function SetupLaunchProductPage() {
  const [avgDealSize, setAvgDealSize] = React.useState(15000);
  const [closeRate, setCloseRate] = React.useState(25);
  const [replyRate, setReplyRate] = React.useState(18);
  const [positiveReplyRate, setPositiveReplyRate] = React.useState(50);
  const [replyToMeeting, setReplyToMeeting] = React.useState(35);
  const [daysTracked, setDaysTracked] = React.useState(90);
  const [numDomains, setNumDomains] = React.useState(20);
  const [numEmailAccounts, setNumEmailAccounts] = React.useState(50);
  const [openFaq, setOpenFaq] = React.useState(null);

  const baseCost = 1595; // One-time
  const domainCost = numDomains * 12;
  const emailAccountCost = numEmailAccounts * 5;
  const instantlyCost = 97;
  const monthlyInfrastructureCost = domainCost + emailAccountCost + instantlyCost;

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
  const totalCost = baseCost + Math.round(monthlyInfrastructureCost * monthsTracked);
  const netProfit = totalRevenue - totalCost;
  const roi = totalCost > 0 ? ((netProfit / totalCost) * 100).toFixed(0) : 0;

  const features = [
    { icon: "🎯", title: "ICP Strategy & Targeting", description: "We work with you to define your ideal customer profile and build a comprehensive targeting strategy that identifies decision-makers in your market." },
    { icon: "🔧", title: "Tech Stack Setup", description: "Complete infrastructure buildout including Instantly.ai configuration, DNS records, domain setup, email warming, and all technical integrations." },
    { icon: "✍️", title: "5 Email Script Variations", description: "Five custom-written email sequences tailored to your offer, with multiple variations for A/B testing and optimization." },
    { icon: "📋", title: "List Building & Verification", description: "We build your first target list with verified contact data, ensuring high deliverability and relevant prospects from day one." },
    { icon: "🔔", title: "Slack Notifications Setup", description: "Real-time Slack alerts for positive replies so you never miss an opportunity to engage with interested prospects." },
    { icon: "🎥", title: "Full Training & Documentation", description: "Complete video training library and written documentation so your team can manage and scale the system independently." }
  ];

  const timeline = [
    { week: "Week 1", title: "Discovery & Strategy", items: ["Kickoff call and goal setting", "ICP definition workshop", "Offer positioning strategy", "Target market research"] },
    { week: "Week 2", title: "Infrastructure Build", items: ["Domain purchase & DNS setup", "Email account configuration", "Instantly.ai setup", "CRM integrations"] },
    { week: "Week 3", title: "Content & Lists", items: ["Email copywriting (5 variations)", "Lead list building", "Email verification", "Slack notification setup"] },
    { week: "Week 4", title: "Launch & Training", items: ["Campaign launch", "Initial monitoring", "Team training sessions", "Documentation delivery"] },
    { week: "Week 5-6", title: "Coaching Period", items: ["Daily support via Slack", "Campaign optimization", "Reply handling guidance", "Performance review calls"] }
  ];

  const testimonials = [
    { name: "David Park", company: "GrowthLabs", role: "Founder", quote: "The setup was flawless. Within 30 days we had a complete outbound system running. The training made it easy for our team to take over.", result: "Launched in 28 days" },
    { name: "Amanda Foster", company: "CloudSync", role: "Head of Sales", quote: "Best investment we made. They built everything, trained our team, and we've been running it successfully for 6 months.", result: "12 meetings first month" },
    { name: "Robert Chen", company: "DataFlow Pro", role: "CEO", quote: "Professional setup from start to finish. The documentation and training were incredibly thorough. Worth every penny.", result: "3x ROI in 90 days" }
  ];

  const faqs = [
    { question: "What happens after the 30-day setup + 7-day coaching?", answer: "You own the entire system. Your team runs the campaigns independently using the training and documentation we provide. We're available for ongoing support if needed." },
    { question: "Do we need technical knowledge to run this?", answer: "No. We provide complete training and documentation that makes it simple for anyone on your team to manage the system, even without technical experience." },
    { question: "What if we need help after the coaching period?", answer: "We offer ongoing support packages, or you can upgrade to our Done-For-You service where we manage everything for you." },
    { question: "Can we start campaigns before the 30 days?", answer: "Sometimes! If everything comes together quickly, we can launch earlier. But we budget 30 days to ensure everything is properly configured and tested." },
    { question: "What's included in the infrastructure cost?", answer: "Domains ($12/each/month), email accounts ($5/each/month), and Instantly.ai subscription ($97/month). These are ongoing costs you'll pay directly to the providers." },
    { question: "Is there a refund policy?", answer: "Yes. If we don't complete the setup within 30 days as promised, you get a full refund. We stand behind our timeline." }
  ];

  const whatYouGet = [
    { category: "Strategy & Planning", items: ["ICP Definition Workshop", "Market Research Report", "Targeting Strategy Document", "Campaign Planning Roadmap"] },
    { category: "Technical Infrastructure", items: ["20+ Domain Setup", "50+ Email Account Configuration", "DNS & SPF/DKIM Records", "Instantly.ai Full Setup", "Email Warming Schedule"] },
    { category: "Content & Data", items: ["5 Email Sequence Variations", "Subject Line Library (50+)", "First Target List (2,500+ contacts)", "Reply Templates", "A/B Testing Framework"] },
    { category: "Training & Support", items: ["Video Training Library", "Written Documentation", "7 Days Live Coaching", "Slack Channel Access", "Campaign Playbooks"] }
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '24px' }}>
                Best for DIY Teams
              </div>
              <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a', lineHeight: '1.2' }}>
                System Setup & Launch
              </h1>
              <p style={{ fontSize: '20px', marginBottom: '32px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
                We build and launch your entire cold email engine in 30 days, then coach your team for 7 days so you can run it independently. Perfect for teams who want to own their outbound system.
              </p>
              
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '32px' }}>
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#dc692f' }}>$1,595</div>
                <div style={{ fontSize: '20px', color: '#7d472a', opacity: 0.6 }}>one-time</div>
              </div>
              
              <div style={{ padding: '16px', backgroundColor: '#fff5f0', borderRadius: '12px', marginBottom: '32px', borderLeft: '4px solid #dc692f' }}>
                <p style={{ fontSize: '14px', color: '#7d472a', marginBottom: '8px' }}>
                  <strong>Plus ongoing infrastructure:</strong>
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

            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', border: '2px solid #dc692f20' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>What's Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['ICP Strategy & Targeting', 'Tech Stack Setup (Instantly, DNS, Domains)', '5 Email Script Variations', 'List Building & Verification', 'Slack Notifications Setup', 'Full Training Videos & Documentation'].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '20px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #dc692f40' }}>
                  <p style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#7d472a' }}>Total Investment:</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#7d472a', opacity: 0.8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>One-Time Setup:</span>
                      <span style={{ fontWeight: '600' }}>${baseCost.toLocaleString()}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Monthly Infrastructure:</span>
                      <span style={{ fontWeight: '600' }}>${monthlyInfrastructureCost}/mo</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid #dc692f20', fontSize: '14px', fontWeight: 'bold', color: '#7d472a' }}>
                      <span>Total for {daysTracked} days:</span>
                      <span style={{ color: '#dc692f' }}>${totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Results */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7d472a' }}>{daysTracked}-Day Projection</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#7d472a' }}>Days:</label>
                    <input type="number" min="1" max="365" value={daysTracked} onChange={(e) => setDaysTracked(Number(e.target.value))} style={{ width: '70px', padding: '8px', border: '2px solid #dc692f', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', color: '#dc692f', textAlign: 'center' }} />
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Email Volume</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', textAlign: 'center' }}>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalEmailsForPeriod.toLocaleString()}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Total Emails</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalRepliesForPeriod}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Replies</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>{totalPositiveRepliesForPeriod}</div>
                      <div style={{ fontSize: '12px', color: '#7d472a', opacity: 0.7 }}>Positive</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalMeetingsForPeriod}</div>
                    <div style={{ fontSize: '13px', color: '#7d472a' }}>Meetings</div>
                  </div>
                  <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#dc692f', marginBottom: '4px' }}>{totalClosedDealsForPeriod}</div>
                    <div style={{ fontSize: '13px', color: '#7d472a' }}>Closed Deals</div>
                  </div>
                </div>

                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px', color: '#7d472a' }}>Financial Projection</h4>
                  
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Total Revenue</span>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc692f' }}>${totalRevenue.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: totalRevenue > 0 ? '100%' : '0%', height: '100%', backgroundColor: '#dc692f', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Total Investment</span>
                      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#7d472a' }}>${totalCost.toLocaleString()}</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e5e7eb', borderRadius: '9999px', overflow: 'hidden' }}>
                      <div style={{ width: totalRevenue > 0 ? `${Math.min((totalCost / totalRevenue) * 100, 100)}%` : '0%', height: '100%', backgroundColor: '#9ca3af', transition: 'width 0.3s' }}></div>
                    </div>
                  </div>

                  <div style={{ paddingTop: '16px', borderTop: '2px solid #dc692f20' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px', fontWeight: '600', color: '#7d472a' }}>Net Profit</span>
                      <span style={{ fontSize: '28px', fontWeight: 'bold', color: '#dc692f' }}>${netProfit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #dc692f 0%, #ff8c5a 100%)', padding: '24px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 16px rgba(220, 105, 47, 0.3)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: 'white', opacity: 0.9, marginBottom: '8px' }}>Your ROI</div>
                  <div style={{ fontSize: '56px', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>{roi}%</div>
                  <p style={{ fontSize: '14px', color: 'white', opacity: 0.9 }}>
                    For every $1 spent, you make ${totalCost > 0 ? (totalRevenue / totalCost).toFixed(2) : '0'}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '32px', borderTop: '2px solid #dc692f40' }}>
              <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: '#dc692f', color: 'white', padding: '16px 48px', borderRadius: '9999px', fontWeight: '600', fontSize: '18px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(220, 105, 47, 0.3)' }}>
                  Book a Call to Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Everything you need to know about Setup & Launch
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #dc692f20' }}>
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

      {/* Comparison Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Setup & Launch vs Done-For-You
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Choose the model that fits your team and budget
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ backgroundColor: '#fff5f0', padding: '40px', borderRadius: '16px', border: '2px solid #dc692f' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                YOU'RE VIEWING
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Setup & Launch</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#dc692f', marginBottom: '8px' }}>$1,595</div>
              <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>one-time + infrastructure</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a' }}>Your team runs campaigns</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a' }}>30-day complete setup</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a' }}>7 days coaching included</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a' }}>Full training & docs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#dc692f' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a' }}>Best for DIY teams</span>
                </div>
              </div>

              <a href="/book-a-call" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', marginTop: '24px', backgroundColor: '#dc692f', color: 'white', padding: '14px', borderRadius: '9999px', fontWeight: '600', border: 'none', cursor: 'pointer' }}>
                  Get Started
                </button>
              </a>
            </div>

            <div style={{ backgroundColor: '#f9fafb', padding: '40px', borderRadius: '16px', border: '2px solid #e5e7eb' }}>
              <div style={{ display: 'inline-block', backgroundColor: '#9ca3af', color: 'white', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
                ALTERNATIVE
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px', color: '#7d472a' }}>Done-For-You</h3>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#7d472a', marginBottom: '8px' }}>$2,800</div>
              <p style={{ fontSize: '14px', color: '#7d472a', opacity: 0.7, marginBottom: '24px' }}>/month + infrastructure</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#7d472a' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7 }}>We run everything for you</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#7d472a' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7 }}>Ongoing campaign management</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#7d472a' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7 }}>Weekly optimization</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#7d472a' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7 }}>Completely hands-off</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ fontSize: '18px', color: '#7d472a' }}>✓</span>
                  <span style={{ fontSize: '15px', color: '#7d472a', opacity: 0.7 }}>Best for busy founders</span>
                </div>
              </div>

              <a href="/services" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', marginTop: '24px', backgroundColor: 'white', color: '#7d472a', padding: '14px', borderRadius: '9999px', fontWeight: '600', border: '2px solid #7d472a', cursor: 'pointer' }}>
                  View Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div style={{ padding: '80px 32px', background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#7d472a' }}>
            Ready to Build Your Cold Email System?
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', color: '#7d472a', opacity: 0.8, lineHeight: '1.6' }}>
            Book a strategy call and we'll have your complete system built, launched, and your team trained in just 30 days.
          </p>
          
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>30-day delivery guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>7 days live coaching</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>✓</span>
              <span style={{ fontSize: '16px', color: '#7d472a' }}>Full refund if delayed</span>
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
}))}
              </div>
              
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #dc692f20' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '24px' }}>⏱️</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>30-Day Setup</div>
                    <div style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>Complete buildout & launch</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>🎓</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>7-Day Coaching</div>
                    <div style={{ fontSize: '13px', color: '#7d472a', opacity: 0.7 }}>Daily support & training</div>
                  </div>
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
              Everything Built & Delivered in 30 Days
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7, maxWidth: '600px', margin: '0 auto' }}>
              A complete cold email system that your team can run independently
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

      {/* Timeline Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Your 30-Day Setup Timeline
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              From kickoff to fully launched system in just one month
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {timeline.map((phase, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', border: '2px solid #dc692f20' }}>
                <div>
                  <div style={{ display: 'inline-block', backgroundColor: '#dc692f', color: 'white', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', fontWeight: '600', marginBottom: '12px' }}>
                    {phase.week}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#7d472a' }}>{phase.title}</h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                  {phase.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ fontSize: '16px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What You Get Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Complete Deliverables Package
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Everything you need to run successful cold email campaigns
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {whatYouGet.map((section, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff5f0', padding: '32px', borderRadius: '16px', border: '2px solid #dc692f20' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '20px', color: '#7d472a' }}>{section.category}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '18px', color: '#dc692f', flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: '15px', color: '#7d472a' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ padding: '80px 32px', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Success Stories from DIY Teams
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              Teams who launched and scaled with our Setup & Launch service
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', border: '2px solid #dc692f20' }}>
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

      {/* ROI Calculator - Similar to Main Service but adjusted for one-time cost */}
      <div style={{ padding: '80px 32px', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>
              Calculate Your ROI
            </h2>
            <p style={{ fontSize: '18px', color: '#7d472a', opacity: 0.7 }}>
              See your potential return with Setup & Launch
            </p>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #fff5f0 0%, #ffffff 100%)', padding: '48px', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', border: '2px solid #dc692f' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
              {/* Left Column - Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#7d472a' }}>Your Configuration</h3>
                
                {/* Infrastructure */}
                <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', border: '2px solid #dc692f' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px', color: '#7d472a' }}>Infrastructure Setup</h4>
                  
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Domains</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{numDomains} (${domainCost}/mo)</span>
                    </div>
                    <input type="range" min="0" max="100" value={numDomains} onChange={(e) => setNumDomains(Number(e.target.value))} style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${(numDomains / 100) * 100}%, #e5e7eb ${(numDomains / 100) * 100}%)`, cursor: 'pointer' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Email Accounts</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{numEmailAccounts} (${emailAccountCost}/mo)</span>
                    </div>
                    <input type="range" min="1" max="500" value={numEmailAccounts} onChange={(e) => setNumEmailAccounts(Number(e.target.value))} style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((numEmailAccounts - 1) / 499) * 100}%, #e5e7eb ${((numEmailAccounts - 1) / 499) * 100}%)`, cursor: 'pointer' }} />
                  </div>
                </div>

                {/* Business Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7d472a' }}>Your Business Metrics</h4>
                  
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Average Deal Size</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>${avgDealSize.toLocaleString()}</span>
                    </div>
                    <input type="range" min="1000" max="100000" step="500" value={avgDealSize} onChange={(e) => setAvgDealSize(Number(e.target.value))} style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((avgDealSize - 1000) / 99000) * 100}%, #e5e7eb ${((avgDealSize - 1000) / 99000) * 100}%)`, cursor: 'pointer' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Close Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{closeRate}%</span>
                    </div>
                    <input type="range" min="5" max="100" value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))} style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((closeRate - 5) / 95) * 100}%, #e5e7eb ${((closeRate - 5) / 95) * 100}%)`, cursor: 'pointer' }} />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '14px', fontWeight: '600', color: '#7d472a' }}>Reply Rate</label>
                      <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#dc692f' }}>{replyRate}%</span>
                    </div>
                    <input type="range" min="0.5" max="20" step="0.25" value={replyRate} onChange={(e) => setReplyRate(Number(e.target.value))} style={{ width: '100%', height: '8px', borderRadius: '4px', appearance: 'none', background: `linear-gradient(to right, #dc692f ${((replyRate - 0.5) / 19.5) * 100}%, #e5e7eb ${((replyRate - 0.5) / 19.5) * 100}%)`, cursor: 'pointer' }} />
                  </div>