import { useEffect, useRef, useState } from 'react';
const products = [
    { name: 'Race singlet', color: 'Black / Graphite', type: 'Vests', category: 'Running', image: 'singlet' },
    { name: 'Wave training tee', color: 'Brown / Slate', type: 'T-shirts', category: 'Training', image: 'tee' },
    { name: 'Race short', color: 'Black', type: 'Shorts & tights', category: 'Running', image: 'short' },
];
const groups = [
    { title: 'Product', items: ['T-shirts', 'Shorts & tights', 'Vests'] },
    { title: 'Category', items: ['Running', 'Training'] },
    { title: 'Collection', items: ['Performance essentials', 'View all'] },
];
function Wordmark() { return <span className="wordmark"><img src="/75.png" alt="Afterzero"/></span>; }
export default function App() {
    const [shop, setShop] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [search, setSearch] = useState(false);
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('View all');
    const [detail, setDetail] = useState<(typeof products)[number] | 'bag' | null>(null);
    const header = useRef<HTMLElement>(null);
    const shopButton = useRef<HTMLButtonElement>(null);
    const mobileButton = useRef<HTMLButtonElement>(null);
    const dialog = useRef<HTMLDialogElement>(null);
    const filtered = products.filter(p => (['View all', 'Performance essentials'].includes(filter) || p.type === filter || p.category === filter) && `${p.name} ${p.color}`.toLowerCase().includes(query.toLowerCase()));
    useEffect(() => {
        function dismiss(e: PointerEvent) { if (!header.current?.contains(e.target as Node)) {
            setShop(false);
            setMobile(false);
        } }
        document.addEventListener('pointerdown', dismiss);
        return () => document.removeEventListener('pointerdown', dismiss);
    }, []);
    useEffect(() => { if (detail)
        dialog.current?.showModal();
    else
        dialog.current?.close(); }, [detail]);
    function choose(item: string) { setFilter(item); setQuery(''); setShop(false); setMobile(false); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }
    const menuGroups = groups.map(group => <div className="menu-group" key={group.title}><h2>{group.title}</h2><ul>{group.items.map(item => <li key={item}><button onClick={() => choose(item)}>{item}</button></li>)}</ul></div>);
    return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header ref={header} className="site-header" onMouseLeave={() => { if (matchMedia('(hover: hover)').matches)
        setShop(false); }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) {
        setShop(false);
        setMobile(false);
    } }} onKeyDown={e => { if (e.key === 'Escape') {
        setShop(false);
        setMobile(false);
        (mobile ? mobileButton : shopButton).current?.focus();
    } }}>
      <div className="header-bar">
        <a href="#" aria-label="Afterzero home"><Wordmark /></a>
        <nav className="desktop-nav" aria-label="Main navigation"><button ref={shopButton} className="nav-link" aria-expanded={shop} aria-controls="shop-menu" onMouseEnter={() => { if (matchMedia('(hover: hover)').matches)
        setShop(true); }} onClick={e => setShop(e.detail === 0 ? !shop : true)}>Shop <span>{shop ? '−' : '+'}</span></button><a className="nav-link" href="#about" onMouseEnter={() => setShop(false)}>About</a></nav>
        <div className="header-actions"><button className="nav-link search-toggle" aria-expanded={search} aria-controls="search-panel" onClick={() => { setSearch(!search); setShop(false); }}>Search <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/></svg></button><button className="nav-link bag" onClick={() => setDetail('bag')}>Bag (0)</button><button ref={mobileButton} className="mobile-toggle" aria-expanded={mobile} aria-controls="mobile-nav" onClick={() => { setMobile(!mobile); setShop(false); }}>{mobile ? 'Close −' : 'Menu +'}</button></div>
      </div>
      <div id="shop-menu" className="mega-menu" hidden={!shop}>{menuGroups}</div>
      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!mobile}><button className="mobile-shop" aria-expanded={shop} aria-controls="mobile-groups" onClick={e => setShop(e.detail === 0 ? !shop : true)}>Shop <span>{shop ? '−' : '+'}</span></button><div id="mobile-groups" hidden={!shop}>{menuGroups}</div><a href="#about" onClick={() => setMobile(false)}>About</a><button onClick={() => { setSearch(true); setMobile(false); }}>Search</button></nav>
      {search && <form id="search-panel" className="search-panel" onSubmit={e => { e.preventDefault(); document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' }); }}><label htmlFor="search">Find your essentials</label><input id="search" autoFocus type="search" placeholder="Search products or colors" value={query} onChange={e => { setQuery(e.target.value); setFilter('View all'); }}/><button>Search ↗</button><button type="button" aria-label="Close search" onClick={() => { setSearch(false); setQuery(''); }}>×</button></form>}
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src="/images/hero.png" alt="Two athletes running in Afterzero wave-pattern performance apparel" fetchPriority="high"/><div className="hero-shade"/><div className="hero-content"><p className="eyebrow">Afterzero / Collection 001</p><h1 id="hero-title">After zero.<br />Forward.</h1><p className="hero-description">Performance essentials.<br />Made for movement.</p><a href="#collection" className="button">Explore the collection <span>↗</span></a></div><span className="hero-caption">Built around movement. / 01</span></section>
      <div className="wave-divider" aria-hidden="true"/>
      <section id="collection" className="collection" aria-labelledby="collection-title"><div className="section-heading"><div><p className="eyebrow">01 / The collection</p><h2 id="collection-title">Performance essentials</h2></div><button className="text-link" onClick={() => { setFilter('View all'); setQuery(''); }}>View all ↗</button></div>
        {(filter !== 'View all' || query) && <div className="filter-status" role="status"><span>{query ? `Search: “${query}”` : filter} · {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}</span><button onClick={() => { setFilter('View all'); setQuery(''); }}>Clear ×</button></div>}
        <div className="product-grid">{filtered.map(p => <button className="product-card" key={p.name} onClick={() => setDetail(p)} aria-label={`View ${p.name}, ${p.color}`}><span className={`product-image ${p.image}`} role="img" aria-label={`${p.color} ${p.name}`}/><span className="product-meta"><strong>{p.name}</strong><span>{p.color}</span></span></button>)}</div>
        {!filtered.length && <p className="empty-state">No pieces match your search. Try “black” or “tee”.</p>}<p className="concept-note">Collection preview — product concepts shown.</p>
      </section>
      <section id="about" className="about" aria-labelledby="about-title"><div className="about-art"><img src="/78.png" alt="AZ Afterzero Race brand mark" loading="lazy"/></div><div className="about-copy"><p className="eyebrow">Afterzero / Made for movement</p><h2 id="about-title">Find your<br />forward.</h2><p>For the work. For the rhythm.<br />For what comes next.</p><a className="text-link" href="#collection">Explore the essentials ↗</a></div></section>
    </main>
    <footer className="site-footer"><div className="footer-top"><div><p className="eyebrow">The next step starts here.</p><h2>Stay in motion.</h2><p>Performance essentials. An everyday pursuit.</p></div><a href="#collection" className="text-link">Discover the collection ↗</a></div><div className="footer-bottom"><a href="#" aria-label="Afterzero home"><Wordmark /></a><span>© {new Date().getFullYear()} Afterzero</span><a href="#main">Back to top ↑</a></div></footer>
    <dialog ref={dialog} aria-labelledby="dialog-title" onCancel={() => setDetail(null)} onClose={() => setDetail(null)} onClick={e => { if (e.target === e.currentTarget)
        setDetail(null); }}><div className="dialog-inner"><button className="dialog-close" onClick={() => setDetail(null)} aria-label="Close dialog">×</button>{detail && detail !== 'bag' ? <><div className={`product-image ${detail.image}`} role="img" aria-label={detail.name}/><p className="eyebrow">Performance essentials / Preview</p><h2 id="dialog-title">{detail.name}</h2><p>{detail.color}</p><p className="dialog-note">A first look at the Afterzero collection. Product details, sizing and shopping will be available in a future release.</p></> : <><p className="eyebrow">Afterzero</p><h2 id="dialog-title">Your bag is empty.</h2><p className="dialog-note">You're viewing our collection preview. Shopping isn't available yet.</p></>}<button className="button button-dark" onClick={() => setDetail(null)}>Continue exploring ↗</button></div></dialog>
  </>;
}
