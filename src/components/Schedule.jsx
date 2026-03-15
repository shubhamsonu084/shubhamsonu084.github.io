import { InlineWidget } from 'react-calendly'

export default function Schedule() {
  return (
    <section className="section section-alt schedule-section" id="schedule">
      <div className="container">
        <p className="section-label reveal">Let's Connect</p>
        <h2 className="section-title reveal reveal-delay-1">
          Schedule a <span className="gradient-text">Chat</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '2.5rem' }}>
          Whether it's a quick intro, a collaboration idea, or just to talk AI & product — grab time on my calendar.
        </p>

        <div className="calendly-wrap reveal reveal-delay-3">
          <InlineWidget
            url="https://calendly.com/shubhamsonu/new-meeting"
            styles={{ height: '700px', minWidth: '320px' }}
            pageSettings={{
              backgroundColor: '050b1a',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '00c6ff',
              textColor: 'f1f5f9',
            }}
          />
        </div>
      </div>
    </section>
  )
}
