import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

const heroImage =
  'https://www.maxmuller.com/templates/yootheme/cache/46/MM_Flow_indicators_v25-03-10-B-4656c309.jpeg';

const madeInEuropeIcon =
  'https://www.maxmuller.com/images/03_Logos_und_Symbole/01_Intern/Symbole/MM_ICON_Made_in_Europe_v25-01-15.svg';

const pdfIcon =
  'https://www.maxmuller.com/images/03_Logos_und_Symbole/01_Intern/Symbole/MM_ICON_PDF_file_v24-11-13.svg';

const series = [
  {
    name: 'SFI S',
    headline: 'Welded ends for compact installations',
    copy:
      'Slim sight glasses with hygienic weld ends, ideal for tight pipe runs and retrofit upgrades of legacy systems.',
    metrics: ['DN 15 - DN 200', 'Up to 40 bar', 'Up to 280 deg C'],
  },
  {
    name: 'SFI F-VG',
    headline: 'Robust cast flanged housing',
    copy:
      'Cast body with bolted cover, engineered for process industry pipelines requiring maximum mechanical stability.',
    metrics: ['DN 25 - DN 300', 'EN 1092 / ANSI B16.5', 'ATEX-ready'],
  },
  {
    name: 'SFI F-VS',
    headline: 'Modular welded flanges',
    copy:
      'Fully welded flanged frame for custom face-to-face lengths and special-purpose process monitoring projects.',
    metrics: ['DN 50 - DN 250', 'Vacuum tight', 'Dead-space free'],
  },
  {
    name: 'SFI P',
    headline: 'Sterile pharmaceutical design',
    copy:
      'Polished internals and FDA-compliant gaskets for clean room and biotech skids with rigorous validation needs.',
    metrics: ['Ra < 0.4 um', 'Tri-Clamp option', 'Documentation pack'],
  },
];

const capabilities = [
  {
    title: 'Version portfolio',
    details: [
      'Four modular series covering welded, cast, and sterile applications',
      'Rotor, flap, or ball indicators to visualise the flow state instantly',
    ],
  },
  {
    title: 'Sizing & operating envelope',
    details: [
      'Nominal diameters from DN 15 to DN 300 (½" to 12")',
      'Designed for pressures up to 40 bar, including full vacuum',
      'Thermal resilience up to 280 deg C with borosilicate plates',
    ],
  },
  {
    title: 'Compliance & approvals',
    details: [
      'Elastomers certified to FDA, USP Class VI, and (EC) 1935/2004',
      'Material traceability and third-party pressure certificates on request',
    ],
  },
  {
    title: 'Process-centric engineering',
    details: [
      'Dead-space free geometries that prevent product deposits',
      'PTFE linings or electropolishing for aggressive media',
      'Custom viewing windows and nozzle arrangements available',
    ],
  },
];

const addOns = [
  {
    title: 'Light fittings',
    description:
      'High-output LED fittings in aluminium or stainless steel safeguard process visibility in dark or foaming media. Available for safe and Ex zones with on-site or remote switching.',
  },
  {
    title: 'Camera systems',
    description:
      'Digitise visual inspections with IP-streaming camera systems in rugged stainless housings. Integrate with DCS, historian, or cloud dashboards for remote decision-making.',
  },
  {
    title: 'Automation upgrades',
    description:
      'Augment flow indicators with inductive sensors, timers, and control cabinets to create closed-loop monitoring solutions for critical production steps.',
  },
];

const quickLinks = [
  { label: 'Product inquiry', href: '#contact' },
  { label: 'Data sheets', href: '#downloads' },
  { label: 'Contact locations', href: '#contact' },
  { label: 'Camera systems', href: '#add-ons' },
];

export default function Page() {
  return (
    <main>
      <section className="section" style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)' }}>
        <div className="container">
          <div
            style={{
              position: 'relative',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              minHeight: '460px',
              background: '#0f172a',
              color: '#fff',
            }}
          >
            <Image
              src={heroImage}
              alt="Flow indicator installed in an industrial process line"
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              priority
              style={{ objectFit: 'cover', opacity: 0.45 }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                padding: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                display: 'grid',
                gap: '1.5rem',
                maxWidth: '620px',
              }}
            >
              <span className="tag">Flow indicators</span>
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 600,
                  fontSize: 'clamp(2.25rem, 4.8vw, 3.6rem)',
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                Visibility that never blinks. Reliable flow insight for the
                toughest process conditions.
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  margin: 0,
                  color: 'rgba(226, 232, 240, 0.9)',
                }}
              >
                The MAX MÜLLER SFI series delivers decades-long durability for
                chemical, energy, and pharmaceutical plants. Configure your
                indicator to match any pipe class, pressure rating, or
                compliance requirement.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="#contact" className="btn">
                  Plan your configuration
                </Link>
                <Link
                  href="#downloads"
                  className="btn"
                  style={{
                    background: 'rgba(241, 245, 249, 0.15)',
                    color: '#fff',
                    boxShadow: 'none',
                  }}
                >
                  Download overview
                </Link>
              </div>
              <div className="badge-grid" style={{ marginTop: '0.5rem' }}>
                <span className="badge">
                  <Image
                    src={madeInEuropeIcon}
                    alt="Made in Europe icon"
                    width={28}
                    height={28}
                  />
                  Swiss Excellence since 1936
                </span>
                <span className="badge">ATEX / IECEx ready</span>
                <span className="badge">Traceable materials</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="overview">
        <div className="container">
          <div className="grid" style={{ gap: '2.5rem' }}>
            <div className="grid" style={{ gap: '1.25rem' }}>
              <h2 className="section-title">Built for relentless operation</h2>
              <p className="section-lead">
                MAX MÜLLER flow indicators provide visual feedback wherever
                electronic sensors reach their limits. Direct observation
                prevents downtime, supports maintenance, and keeps product
                quality measurable in real time.
              </p>
              <div
                className="subtle-card"
                style={{
                  display: 'grid',
                  gap: '0.75rem',
                  alignItems: 'center',
                  maxWidth: '560px',
                }}
              >
                <div className="accent-chip">Process monitoring on site or remote</div>
                <p style={{ margin: 0, color: 'var(--color-slate-700)' }}>
                  Combine with EX-certified light fittings or digital camera systems to
                  maintain clear visibility even in opaque, foaming, or dark media. No
                  matter the pressure rating or media aggressiveness, we support the
                  complete observation chain.
                </p>
              </div>
            </div>
            <div
              className="grid"
              style={{
                gap: '1.25rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}
            >
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="card">
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-primary-accent)',
                      fontWeight: 700,
                      marginBottom: '0.5rem',
                    }}
                  >
                    Explore
                  </span>
                  <span
                    style={{ fontWeight: 600, fontSize: '1.2rem', lineHeight: 1.4 }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }} id="capabilities">
        <div className="container">
          <div className="grid" style={{ gap: '2rem' }}>
            <div>
              <h2 className="section-title">Configure every detail</h2>
              <p className="section-lead">
                Four modular series cover the majority of process scenarios. Combine
                flange classes, glass materials, indicator types, or surface finishes to
                match your production standards.
              </p>
            </div>
            <div
              className="grid"
              style={{
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              }}
            >
              {capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="card"
                  style={{ background: 'linear-gradient(160deg,#0f172a 0%,#1d4ed8 100%)', color: '#fff' }}
                >
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: '0.75rem',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                    }}
                  >
                    {capability.title}
                  </h3>
                  <ul className="list" style={{ color: 'rgba(241,245,249,0.9)' }}>
                    {capability.details.map((detail) => (
                      <li key={detail}>
                        <span>+</span>
                        <div>{detail}</div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="series">
        <div className="container">
          <div className="grid" style={{ gap: '2rem' }}>
            <div style={{ maxWidth: '620px' }}>
              <h2 className="section-title">Four series. One philosophy.</h2>
              <p className="section-lead">
                Every flow indicator shares the same foundation: long-term mechanical
                integrity, premium optics, and swift maintenance. Select the housing
                concept that fits your project, then tailor the details.
              </p>
            </div>
            <div
              className="grid"
              style={{
                gap: '1.75rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              }}
            >
              {series.map((item) => (
                <article key={item.name} className="card">
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.85rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--color-primary-accent)',
                        fontWeight: 700,
                      }}
                    >
                      {item.name}
                    </span>
                    <span className="accent-chip">Available now</span>
                  </div>
                  <h3
                    style={{
                      marginTop: 0,
                      marginBottom: '0.75rem',
                      fontSize: '1.35rem',
                      fontWeight: 600,
                      color: 'var(--color-slate-900)',
                    }}
                  >
                    {item.headline}
                  </h3>
                  <p style={{ margin: '0 0 1.25rem 0', color: 'var(--color-slate-700)' }}>
                    {item.copy}
                  </p>
                  <div className="badge-grid" style={{ gap: '0.5rem' }}>
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="badge"
                        style={{
                          background: 'rgba(10, 77, 104, 0.08)',
                          color: 'var(--color-primary)',
                          fontSize: '0.85rem',
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <div
            className="grid"
            style={{
              gap: '2rem',
              color: '#f8fafc',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 className="section-title" style={{ color: '#fff' }}>
                Safety built into every detail
              </h2>
              <p className="section-lead" style={{ color: 'rgba(226,232,240,0.92)' }}>
                Testing, documentation, and lifecycle support keep your plant audit ready.
              </p>
            </div>
            <ul className="list" style={{ color: 'rgba(241,245,249,0.9)' }}>
              <li>
                <span>1</span>
                <div>Hydrostatic pressure testing according to EN 13445 or AD 2000</div>
              </li>
              <li>
                <span>2</span>
                <div>Material certificates (3.1) and gasket compliance on request</div>
              </li>
              <li>
                <span>3</span>
                <div>ATEX, IECEx, and SIL-ready monitoring setups with add-on packages</div>
              </li>
              <li>
                <span>4</span>
                <div>Lifecycle service, spare parts, and retrofit support for all SFI series</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="add-ons">
        <div className="container">
          <div className="grid" style={{ gap: '2rem' }}>
            <div>
              <h2 className="section-title">Enhance visibility with smart add-ons</h2>
              <p className="section-lead">
                Expand each flow indicator with lighting, automation, or digital video to
                keep operators informed in any scenario.
              </p>
            </div>
            <div className="grid" style={{ gap: '1.5rem' }}>
              {addOns.map((item) => (
                <article key={item.title} className="card">
                  <h3
                    style={{
                      marginTop: 0,
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--color-slate-900)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: 'var(--color-slate-700)' }}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="downloads" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid" style={{ gap: '1.5rem' }}>
            <div>
              <h2 className="section-title">Downloads & documentation</h2>
              <p className="section-lead">
                Download data sheets, certificates, and user manuals tailored to your
                configuration. Reach out for additional validation or qualification files.
              </p>
            </div>
            <div
              className="grid"
              style={{
                gap: '1.25rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              }}
            >
              {['Product overview', 'SFI S data sheet', 'SFI F-VG data sheet', 'SFI P compliance pack'].map(
                (name) => (
                  <article key={name} className="subtle-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Image src={pdfIcon} alt={`${name} icon`} width={32} height={32} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '1rem' }}>{name}</strong>
                        <span style={{ color: 'var(--color-slate-500)', fontSize: '0.9rem' }}>
                          Request latest revision via form
                        </span>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div
            className="card"
            style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              alignItems: 'center',
            }}
          >
            <div>
              <h2 className="section-title" style={{ marginBottom: '1rem' }}>
                Let&apos;s configure your flow indicator
              </h2>
              <p className="section-lead">
                Share your process parameters and we will recommend the optimal SFI
                variant, accessories, and documentation package.
              </p>
            </div>
            <form
              style={{
                display: 'grid',
                gap: '0.85rem',
              }}
            >
              <label style={{ display: 'grid', gap: '0.4rem', fontSize: '0.9rem' }}>
                Company / project
                <input
                  type="text"
                  placeholder="Company name"
                  required
                  style={inputStyle}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.4rem', fontSize: '0.9rem' }}>
                Email address
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  style={inputStyle}
                />
              </label>
              <label style={{ display: 'grid', gap: '0.4rem', fontSize: '0.9rem' }}>
                Process details
                <textarea
                  placeholder="Medium, pressure, temperature, preferred indicator type…"
                  rows={4}
                  style={textareaStyle}
                  required
                />
              </label>
              <button type="submit" className="btn">
                Send inquiry
              </button>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-slate-500)' }}>
                By submitting, you agree to be contacted by MAX MÜLLER for project
                follow-up.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div
            className="grid"
            style={{
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            }}
          >
            <div>
              <strong style={{ fontSize: '1.1rem' }}>
                MAX MÜLLER – Intelligent Observation
              </strong>
              <p style={{ marginTop: '0.5rem', marginBottom: '0.75rem', color: 'rgba(241,245,249,0.72)' }}>
                Swiss engineering trusted in critical production plants around the globe.
              </p>
              <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                © {new Date().getFullYear()} MAX MÜLLER. All rights reserved.
              </span>
            </div>
            <div className="grid" style={{ gap: '0.75rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>Quick access</strong>
              <Link href="#overview">Applications</Link>
              <Link href="#series">Product series</Link>
              <Link href="#add-ons">Add-ons</Link>
              <Link href="#contact">Contact</Link>
            </div>
            <div className="grid" style={{ gap: '0.75rem' }}>
              <strong style={{ fontSize: '0.95rem' }}>Get support</strong>
              <Link href="tel:+41615600500">+41 61 560 0500</Link>
              <Link href="mailto:info@maxmuller.com">info@maxmuller.com</Link>
              <Link href="https://www.maxmuller.com/en/distribution/distribution-network-and-contact/contact-form">
                Global distribution
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const inputStyle: CSSProperties = {
  borderRadius: '0.75rem',
  border: '1px solid rgba(15,23,42,0.1)',
  padding: '0.75rem 1rem',
  fontSize: '0.95rem',
  transition: 'border 0.2s ease, box-shadow 0.2s ease',
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  resize: 'vertical',
};
