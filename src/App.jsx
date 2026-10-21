import { Link, Route, Routes, useLocation } from 'react-router-dom';

const pageContent = {
  '/': {
    eyebrow: 'A small space for big ideas',
    title: <>Make room for<br /><span>what’s next.</span></>,
    description: 'Thoughtful digital experiences begin with a clear point of view. We help teams find theirs, then bring it to life.',
    action: 'Get to know us',
    actionTo: '/about',
    number: '01',
    label: 'THE STUDIO',
  },
  '/about': {
    eyebrow: 'A little about us',
    title: <>Good work starts<br /><span>with good people.</span></>,
    description: 'We’re an independent creative studio partnering with curious teams to turn ambitious ideas into useful, lasting experiences.',
    action: 'Start a conversation',
    actionTo: '/contact',
    number: '02',
    label: 'OUR STORY',
  },
  '/contact': {
    eyebrow: 'Have a good one in mind?',
    title: <>Let’s make<br /><span>it happen.</span></>,
    description: 'Tell us what you’re thinking. Big plans, early sketches, and “what if?” questions are all welcome here.',
    action: 'hello@northstar.studio',
    actionTo: 'mailto:hello@northstar.studio',
    number: '03',
    label: 'SAY HELLO',
  },
};

const links = [
  { to: '/', label: 'Home', index: '01' },
  { to: '/about', label: 'About', index: '02' },
  { to: '/contact', label: 'Contact', index: '03' },
];

function Header() {
  const location = useLocation();
  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Northstar home">
        <span className="brand-mark" aria-hidden="true">✳</span>
        <span>NORTHSTAR<span className="brand-dot">.</span></span>
      </Link>
      <nav className="navigation" aria-label="Main navigation">
        {links.map(({ to, label, index }) => (
          <Link key={to} to={to} className={`nav-link${location.pathname === to ? ' active' : ''}`} aria-current={location.pathname === to ? 'page' : undefined}>
            <span className="nav-index">{index}</span>{label}
          </Link>
        ))}
      </nav>
      <Link to="/contact" className="header-cta">Let’s talk <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

function Page({ content }) {
  return (
    <main className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" />{content.eyebrow}</div>
        <h1>{content.title}</h1>
        <p className="hero-description">{content.description}</p>
        <Link className="primary-link" to={content.actionTo}>{content.action}<span className="arrow" aria-hidden="true">↗</span></Link>
        <div className="hero-footer"><span>INDEPENDENT BY NATURE</span><span>EST. 2024</span></div>
      </div>
      <div className="hero-art" aria-label="Abstract sun and rolling landscape illustration" role="img">
        <div className="art-grain" />
        <div className="sun-halo" /><div className="sun" />
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hill hill-back" /><div className="hill hill-front" />
        <div className="art-caption"><span>{content.number} / 03</span><span>{content.label}</span></div>
        <div className="art-stamp">N<br />S</div>
      </div>
      <div className="side-note"><span className="side-note-line" /> GOOD THINGS TAKE SHAPE</div>
    </main>
  );
}

function NotFound() {
  return <main className="not-found"><span className="eyebrow"><span className="eyebrow-line" />404 — OFF THE MAP</span><h1>That page is<br /><span>somewhere else.</span></h1><p className="hero-description">Looks like this path doesn’t lead anywhere. Let’s get you back on track.</p><Link className="primary-link" to="/">Back to home <span className="arrow" aria-hidden="true">↗</span></Link></main>;
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Routes>
        {Object.entries(pageContent).map(([path, content]) => <Route key={path} path={path} element={<Page content={content} />} />)}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-bottom"><span>INDEPENDENT THINKING. GOOD COMPANY.</span><span>© NORTHSTAR STUDIO 2025</span></footer>
    </div>
  );
}
