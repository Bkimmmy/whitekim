import React from 'react';

export default function BookingPage() {
  // Load Calendly script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No Sales Pitch",
      description: "Just an honest diagnostic to see if we're a fit"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast & Focused",
      description: "15 minutes to discuss your goals and challenges"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Custom Roadmap",
      description: "Walk away with a plan, whether you work with us or not"
    }
  ];

  const whatToExpect = [
    "Review your current outbound approach (if any)",
    "Define your ideal customer profile and targeting strategy",
    "Identify gaps in your cold email infrastructure",
    "Get a custom 30-day roadmap to 40+ meetings/month",
    "See if the White Kim Method is right for your business"
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation - Same as Home Page */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dc692f' }}>
            <span className="text-white font-bold text-xl">WK</span>
          </div>
          <span className="font-semibold text-xl" style={{ color: '#7d472a' }}>White Kim</span>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500' }}>
          <a href="/" style={{ color: '#7d472a', textDecoration: 'none' }}>Home</a>
          <a href="/services" style={{ color: '#7d472a', textDecoration: 'none' }}>Services and Solutions</a>
          <a href="/resources" style={{ color: '#7d472a', textDecoration: 'none' }}>Free Resources</a>
          <a href="/case-studies" style={{ color: '#dc692f', fontWeight: '600', borderBottom: '2px solid #dc692f', textDecoration: 'none' }}>Case Studies</a>
        </div>
        
        <button className="text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-md" style={{ backgroundColor: '#dc692f' }}>
          BOOK A CALL
        </button>
      </nav>

      {/* Hero Section */}
      <div className="py-20" style={{ background: 'linear-gradient(to bottom, #fff5f0 0%, #ffffff 100%)' }}>
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: '#dc692f', color: '#ffffff' }}>
              FREE 15-MINUTE STRATEGY CALL
            </div>
            <h1 className="text-6xl font-bold mb-6" style={{ color: '#7d472a' }}>
              See If Cold Email Can Fill Your Pipeline
            </h1>
            <p className="text-2xl leading-relaxed mb-8" style={{ color: '#7d472a', opacity: 0.8 }}>
              Book a quick call to discuss your outbound strategy. No pressure, no pitch—just an honest conversation about whether the White Kim Method is right for your business.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border-2 hover:shadow-xl transition"
                  style={{ borderColor: '#dc692f20' }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#fff5f0', color: '#dc692f' }}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#7d472a' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Two Column Layout */}
      <div className="py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-5 gap-12">
            {/* Left Column - What to Expect */}
            <div className="col-span-2">
              <div className="sticky top-8">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#7d472a' }}>
                  What to Expect on the Call
                </h2>
                <p className="text-lg mb-8" style={{ color: '#7d472a', opacity: 0.8 }}>
                  This isn't a sales call. It's a diagnostic session to see if cold email is the right channel for your business.
                </p>

                <div className="space-y-4 mb-10">
                  {whatToExpect.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#dc692f' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-base" style={{ color: '#7d472a', opacity: 0.85 }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#fff5f0' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-white"
                          style={{ backgroundColor: '#dc692f' }}
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: '#7d472a' }}>100+ Companies</div>
                      <div className="text-sm" style={{ color: '#7d472a', opacity: 0.7 }}>have booked this call</div>
                    </div>
                  </div>
                  <p className="text-sm italic" style={{ color: '#7d472a', opacity: 0.8 }}>
                    "Best 15 minutes I've spent on my outbound strategy. Even if we didn't work together, the roadmap was invaluable."
                  </p>
                  <div className="mt-3">
                    <span className="font-semibold text-sm" style={{ color: '#7d472a' }}>— Sarah Chen</span>
                    <span className="text-sm" style={{ color: '#7d472a', opacity: 0.6 }}>, VP of Sales at TechFlow</span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t" style={{ borderColor: '#dc692f20' }}>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>18%</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Avg Reply Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>42</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Meetings/Month</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1" style={{ color: '#dc692f' }}>30</div>
                      <div className="text-xs" style={{ color: '#7d472a', opacity: 0.7 }}>Days to Launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 sticky top-8" style={{ borderColor: '#dc692f' }}>
                <div className="p-8 pb-6 text-center border-b" style={{ borderColor: '#dc692f20' }}>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#7d472a' }}>
                    Pick a Time That Works for You
                  </h3>
                  <p className="text-base" style={{ color: '#7d472a', opacity: 0.7 }}>
                    Most slots fill up within 48 hours
                  </p>
                </div>
                
                <div className="p-8 pt-6">
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/joshbrendonai" 
                    style={{ minWidth: '320px', height: '700px' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16" style={{ backgroundColor: '#fff5f0' }}>
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#7d472a' }}>
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Who is this call for?</h3>
                <p className="text-base" style={{ color: '#7d472a', opacity: 0.8 }}>
                  B2B companies with deal sizes over $5K who want to fill their pipeline with qualified meetings. If you sell to other businesses and need predictable outbound, this call is for you.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>What if I've tried cold email before and it didn't work?</h3>
                <p className="text-base" style={{ color: '#7d472a', opacity: 0.8 }}>
                  Perfect. We'll diagnose what went wrong and show you how to fix it. Most failures come from deliverability issues, wrong targeting, or generic copy—all fixable problems.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Will you try to sell me something?</h3>
                <p className="text-base" style={{ color: '#7d472a', opacity: 0.8 }}>
                  No. This is a diagnostic call. If we're not a fit, we'll tell you. If cold email isn't right for your business, we'll tell you that too. You'll get value regardless.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-bold text-lg mb-2" style={{ color: '#7d472a' }}>Can I reschedule if something comes up?</h3>
                <p className="text-base" style={{ color: '#7d472a', opacity: 0.8 }}>
                  Absolutely. You'll receive a confirmation email with a link to reschedule or cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}