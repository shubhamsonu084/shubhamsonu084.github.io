const MOMENTS = [
  {
    id: 1,
    src: '/moment-aws.JPG',
    label: 'Amazon Web Services · Seattle, WA',
    caption: 'First week as Senior PM-T, AWS Config',
    objectPosition: 'center 70%',
  },
  {
    id: 2,
    src: '/moment-psl.jpg',
    label: 'Pioneer Square Labs · 2025',
    caption: 'Chorus VC Pitch — Winner',
    objectPosition: 'center top',
  },
  {
    id: 3,
    src: '/moment-foster-speaker.PNG',
    label: 'UW Foster School of Business',
    caption: 'Andy Jassy speaking in Software Entrepreneurship class',
    objectPosition: 'center top',
  },
  {
    id: 4,
    src: '/moment-ms.PNG',
    label: 'Microsoft · Redmond, WA',
    caption: 'MBA Product Consulting Project with Microsoft',
    objectPosition: 'center top',
  },
  {
    id: 5,
    src: '/moment-foster-team.JPG',
    label: 'UW Foster · Case Competition',
    caption: 'MBA Consulting Team',
    objectPosition: 'center top',
  },
  {
    id: 6,
    src: '/moment-uw.JPG',
    label: 'University of Washington',
    caption: 'Foster MBA 2026 (STEM)',
    objectPosition: 'center top',
  },
]

export default function Moments() {
  return (
    <section className="section section-alt" id="moments">
      <div className="container">
        <p className="section-label reveal">Life in Photos</p>
        <h2 className="section-title reveal reveal-delay-1">
          Moments &amp; <span className="gradient-text">Milestones</span>
        </h2>
        <p className="section-subtitle reveal reveal-delay-2" style={{ marginBottom: '2.5rem' }}>
          Snapshots from the journey — AWS, Foster MBA, Pioneer Square Labs, and more.
        </p>

        <div className="moments-grid reveal reveal-delay-2">
          {MOMENTS.map((m) => (
            <div key={m.id} className="moment-item">
              <div className="moment-img-wrap">
                <img
                  src={m.src}
                  alt={m.label}
                  className="moment-img"
                  loading="lazy"
                  style={{ objectPosition: m.objectPosition }}
                />
              </div>
              <div className="moment-caption">
                <span className="moment-label">{m.label}</span>
                <span className="moment-sub">{m.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
