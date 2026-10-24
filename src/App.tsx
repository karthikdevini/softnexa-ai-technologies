import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Braces, Check, ChevronDown,
  Code2, Cpu, ExternalLink, Layers3, Menu, MessageCircle, MousePointer2,
  Network, Orbit, Send, Sparkles, Workflow, X, Zap,
} from 'lucide-react'

const EMAIL = 'softnexaaitechnologies@gmail.com'
const INSTAGRAM = 'https://www.instagram.com/softnexaaitechnologies/'

const services = [
  { n: '01', icon: Code2, title: 'Web development', text: 'Fast, responsive websites that make your business look as good as the work you do.', tags: ['Business websites', 'Landing pages', 'Web apps'] },
  { n: '02', icon: Layers3, title: 'Software engineering', text: 'Thoughtful digital products and custom software shaped around your real-world workflows.', tags: ['Custom software', 'Applications', 'Integrations'] },
  { n: '03', icon: Bot, title: 'AI solutions', text: 'Useful AI experiences that help people find answers, work smarter, and move faster.', tags: ['AI assistants', 'AI integration', 'Smart tools'] },
  { n: '04', icon: Workflow, title: 'Automation', text: 'Connect repetitive tasks into cleaner workflows so your team can focus on higher-value work.', tags: ['Workflow design', 'Process automation', 'Productivity'] },
  { n: '05', icon: Braces, title: 'Student project guidance', text: 'Practical technical mentoring for planning, building, debugging, and explaining software projects.', tags: ['Project planning', 'Mentoring', 'Technical guidance'] },
]

const process = [
  ['01', 'Discover', 'We start by understanding your goals, audience, and the problem worth solving.'],
  ['02', 'Plan', 'We shape the scope, experience, and technical approach before building.'],
  ['03', 'Build', 'We turn the plan into a clean, responsive, carefully engineered solution.'],
  ['04', 'Refine', 'We test the details, improve the experience, and prepare for handover.'],
]

const faqs = [
  ['What does Softnexa AI Technologies do?', 'We focus on web development, custom software, AI integrations, workflow automation, and technical project guidance.'],
  ['Can I request a website for my business?', 'Yes. Share your goals, required pages, references, and preferred timeline through the contact form so we can discuss the right approach.'],
  ['Do you build AI-powered applications?', 'AI assistants, AI integrations, and automation are among our intended service areas. The exact approach depends on your use case, data, and technical requirements.'],
  ['Do you provide support for student projects?', 'We offer technical guidance around project planning, architecture, implementation, debugging, and demonstrations. Students should understand and present their own work.'],
  ['How much does a project cost?', 'Pricing depends on scope, complexity, integrations, and delivery requirements. Contact us with your brief to discuss an estimate.'],
]

function BrandMark({ small = false }: { small?: boolean }) {
  return <span className={`brand-mark ${small ? 'brand-mark-small' : ''}`} aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><defs><linearGradient id="sGrad" x1="5" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#70F4FF"/><stop offset=".5" stopColor="#377DFF"/><stop offset="1" stopColor="#9D72FF"/></linearGradient></defs><path d="M34.8 10.1C31.8 7.4 27.9 6 23.4 6 15.1 6 9.5 10.6 9.5 17.2c0 5.5 4.1 8.3 12.8 10.4 6.2 1.5 8.4 2.6 8.4 5.4 0 3-3 4.9-7.6 4.9-5.1 0-9.5-2.1-12.9-5.9" stroke="url(#sGrad)" strokeWidth="5.5" strokeLinecap="round"/><path d="M13.3 37.9c3 2.7 6.9 4.1 11.4 4.1 8.3 0 13.9-4.6 13.9-11.2 0-5.5-4.1-8.3-12.8-10.4-6.2-1.5-8.4-2.6-8.4-5.4 0-3 3-4.9 7.6-4.9 5.1 0 9.5 2.1 12.9 5.9" stroke="url(#sGrad)" strokeWidth="5.5" strokeLinecap="round" opacity=".82"/><circle cx="39.5" cy="7.5" r="2" fill="#70F4FF"/><circle cx="8" cy="40" r="1.7" fill="#9D72FF"/></svg></span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [submitted, setSubmitted] = useState(false)

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '')
    const from = String(form.get('email') || '')
    const service = String(form.get('service') || '')
    const budget = String(form.get('budget') || 'Not specified')
    const brief = String(form.get('brief') || '')
    const subject = encodeURIComponent(`Project enquiry from ${name} — ${service}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\nService: ${service}\nBudget: ${budget}\n\nProject brief:\n${brief}`)
    setSubmitted(true)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a href="#home" className="brand" onClick={() => setMenuOpen(false)} aria-label="Softnexa home"><BrandMark/><span className="brand-type"><strong>softnexa</strong><small>AI TECHNOLOGIES</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        {[['Services','services'],['Solutions','solutions'],['Our process','process'],['About','about'],['Contact','contact']].map(([label,id]) => <button key={id} className="nav-link" onClick={() => goTo(id)}>{label}</button>)}
        <button className="nav-cta mobile-cta" onClick={() => goTo('contact')}>Let's talk <ArrowUpRight size={15}/></button>
      </nav>
      <button className="nav-cta desktop-cta" onClick={() => goTo('contact')}>Let's talk <ArrowUpRight size={15}/></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="eyebrow-dot"/> WEB · SOFTWARE · ARTIFICIAL INTELLIGENCE</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>Ideas deserve<br/> <span className="gradient-text">intelligent</span> execution.</motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .18 }}>We create modern websites, useful software, and AI-powered experiences that turn ambitious ideas into practical digital solutions.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .25 }}><button className="button button-primary" onClick={() => goTo('contact')}>Start a project <ArrowRight size={17}/></button><button className="button button-quiet" onClick={() => goTo('services')}>Explore services <ArrowDownRight size={17}/></button></motion.div>
          <div className="hero-proof"><div className="proof-icon"><Sparkles size={16}/></div><p><strong>Built around your goals.</strong><span>Thoughtful technology, made practical.</span></p></div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} aria-label="Abstract technology illustration">
          <div className="art-grid"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/>
          <div className="art-core"><BrandMark/><span className="core-glow"/></div>
          <div className="art-node node-a"><Code2 size={18}/></div><div className="art-node node-b"><Cpu size={18}/></div><div className="art-node node-c"><Network size={18}/></div>
          <div className="art-label label-top"><span className="label-pulse"/> INTELLIGENT BY DESIGN</div><div className="art-label label-bottom">IDEA <span>→</span> IMPACT</div>
          <div className="floating-chip chip-one"><span className="chip-spark"><Zap size={13}/></span> Human-first design</div><div className="floating-chip chip-two"><span className="chip-bars"><i/><i/><i/></span> Built to evolve</div>
        </motion.div>
        <div className="hero-scroll"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="marquee-strip" aria-label="Our capabilities"><div className="marquee-track">{Array.from({length:2}).map((_,i)=><div className="marquee-set" key={i}><span>WEB DEVELOPMENT</span><i>✳</i><span>SOFTWARE ENGINEERING</span><i>✳</i><span>AI SOLUTIONS</span><i>✳</i><span>SMART AUTOMATION</span><i>✳</i></div>)}</div></section>

      <section className="section-wrap section-pad" id="services">
        <div className="section-heading"><div><span className="section-kicker">WHAT WE DO / 01</span><h2>Technology with<br/><span className="muted-heading">a clear purpose.</span></h2></div><p>From the first sketch to the final interaction, we focus on making technology useful, approachable, and ready for what comes next.</p></div>
        <div className="services-grid">{services.map((service,index)=>{const Icon=service.icon;return <motion.article className={`service-card ${index===2?'service-featured':''}`} key={service.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45,delay:index*.07}}><div className="card-top"><span className="service-number">{service.n}</span><span className="service-icon"><Icon size={21}/></span></div><h3>{service.title}</h3><p>{service.text}</p><div className="tag-row">{service.tags.map(tag=><span key={tag}>{tag}</span>)}</div><button className="card-arrow" aria-label={`Ask about ${service.title}`} onClick={()=>goTo('contact')}><ArrowUpRight size={19}/></button></motion.article>})}</div>
      </section>

      <section className="solution-section" id="solutions"><div className="section-wrap solution-inner"><div className="solution-copy"><span className="section-kicker">THINK BEYOND THE ORDINARY / 02</span><h2>Make room for<br/><span className="gradient-text">what's next.</span></h2><p>AI isn't the goal by itself. The goal is a better way to work, a more helpful product, or a simpler experience. We explore where intelligent tools can make a meaningful difference.</p><button className="button button-primary" onClick={()=>goTo('contact')}>Explore an idea <ArrowRight size={17}/></button><div className="solution-note"><Check size={16}/><span>Practical applications. Clear purpose. Human oversight.</span></div></div>
        <div className="ai-visual"><div className="ai-visual-head"><span className="live-indicator"/> CONCEPT / AI SYSTEMS <span className="visual-code">SN—AI.01</span></div><div className="ai-network"><div className="network-ring ring-1"/><div className="network-ring ring-2"/><svg viewBox="0 0 440 360" role="img" aria-label="Abstract connected AI nodes"><defs><linearGradient id="lineGradient"><stop stopColor="#397dff"/><stop offset="1" stopColor="#48e6ef"/></linearGradient></defs><g stroke="url(#lineGradient)" strokeWidth="1.3" opacity=".65" fill="none"><path d="M220 180 90 88 48 177 112 279 220 180 342 83 391 172 322 276 220 180"/><path d="M90 88 342 83M48 177 391 172M112 279 322 276M90 88 112 279M342 83 322 276" strokeDasharray="4 7"/></g>{[[220,180,7],[90,88,5],[48,177,4],[112,279,5],[342,83,5],[391,172,4],[322,276,5],[220,50,3],[220,310,3],[150,130,3],[290,230,3]].map(([cx,cy,r],i)=><g key={i}><circle cx={cx} cy={cy} r={r*2.5} fill="#2e7cff" opacity=".12"/><circle cx={cx} cy={cy} r={r} fill={i===0?'#7bf3ff':'#6a9bff'}/></g>)}</svg><div className="network-center"><Orbit size={28}/><span>INTELLIGENCE<br/>LAYER</span></div><div className="network-caption caption-left">INPUT <span>01</span></div><div className="network-caption caption-right">INSIGHT <span>02</span></div></div><div className="ai-visual-foot"><span>CONNECT THE DOTS</span><span>DESIGN WITH INTENT <ArrowUpRight size={13}/></span></div></div>
      </div></section>

      <section className="section-wrap section-pad process-section" id="process"><div className="section-heading"><div><span className="section-kicker">HOW WE WORK / 03</span><h2>Clear thinking.<br/><span className="muted-heading">Careful building.</span></h2></div><p>Good work comes from a clear process. We keep the steps understandable and the focus on the outcome.</p></div><div className="process-grid">{process.map(([num,title,text],i)=><motion.div className="process-step" key={num} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="step-number">{num}<span>{i===0?<MousePointer2 size={15}/>:i===1?<Layers3 size={15}/>:i===2?<Code2 size={15}/>:<Check size={15}/>}</span></div><h3>{title}</h3><p>{text}</p>{i<3&&<div className="step-connector"><span/></div>}</motion.div>)}</div></section>

      <section className="values-section" id="about"><div className="section-wrap values-inner"><div className="values-art"><div className="values-orbit orbit-1"/><div className="values-orbit orbit-2"/><div className="values-orbit orbit-3"/><div className="values-core"><BrandMark/><span>SN</span></div><div className="values-chip values-chip-a"><Sparkles size={14}/> Curiosity</div><div className="values-chip values-chip-b"><Check size={14}/> Clarity</div></div><div className="values-copy"><span className="section-kicker">A LITTLE ABOUT US / 04</span><h2>Small enough<br/>to <span className="gradient-text">care.</span><br/>Curious enough<br/>to build what's next.</h2><p>Softnexa AI Technologies is an emerging technology brand focused on web experiences, software solutions, and thoughtful applications of AI. Our approach starts with listening, continues through careful execution, and stays grounded in real needs.</p><div className="values-list"><div><span className="value-check"><Check size={14}/></span><span><strong>Purpose over noise</strong><small>Every feature should have a reason to exist.</small></span></div><div><span className="value-check"><Check size={14}/></span><span><strong>People at the center</strong><small>Technology should make the experience better.</small></span></div><div><span className="value-check"><Check size={14}/></span><span><strong>Built to keep growing</strong><small>Clear foundations make future improvements easier.</small></span></div></div></div></div></section>

      <section className="section-wrap section-pad faq-section"><div className="faq-layout"><div className="faq-intro"><span className="section-kicker">GOOD QUESTIONS / 05</span><h2>Before we<br/><span className="muted-heading">get started.</span></h2><p>A few quick answers to help you take the next step with confidence.</p><a className="text-link" href={`mailto:${EMAIL}`}>Ask us something else <ArrowUpRight size={16}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'faq-open':''}`} key={q}><button className="faq-question" onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="contact-copy"><span className="section-kicker">YOUR NEXT STEP / 06</span><h2>Have an idea?<br/><span className="gradient-text">Let's make it real.</span></h2><p>Tell us what you're working on, what you'd like to improve, or what you want to build. We'll start with a conversation.</p><div className="contact-method"><span className="contact-method-icon"><Send size={17}/></span><div><small>EMAIL US</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><a className="contact-external" href={`mailto:${EMAIL}`} aria-label="Email Softnexa"><ExternalLink size={16}/></a></div><div className="contact-method"><span className="contact-method-icon insta-icon">◎</span><div><small>FOLLOW ALONG</small><a href={INSTAGRAM} target="_blank" rel="noreferrer">@softnexaaitechnologies</a></div><a className="contact-external" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Open Instagram"><ExternalLink size={16}/></a></div></div>
        <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>PROJECT ENQUIRY</span><span className="form-dot"/><small>Tell us a little about it</small></div><div className="form-row"><label>Your name<input name="name" placeholder="Name" required autoComplete="name"/></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required autoComplete="email"/></label></div><label>What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Web development</option><option>Software development</option><option>AI solutions</option><option>Automation</option><option>Student project guidance</option><option>Something else</option></select></label><label>Estimated budget <span className="optional">(optional)</span><select name="budget" defaultValue="Not specified"><option>Not specified</option><option>Under ₹10,000</option><option>₹10,000 – ₹30,000</option><option>₹30,000 – ₹75,000</option><option>₹75,000+</option><option>Let's discuss</option></select></label><label>Tell us about your idea<textarea name="brief" placeholder="What are you hoping to build or improve?" rows={4} required/></label><button type="submit" className="button button-primary form-submit">Send project enquiry <ArrowRight size={17}/></button>{submitted&&<p className="form-note" role="status">Your email app should open with the enquiry drafted. If it doesn't, email us directly at {EMAIL}.</p>}<p className="form-disclaimer">This form opens your default email app; it does not send data to a server.</p></form>
      </div></section>
    </main>

    <footer className="footer"><div className="section-wrap footer-main"><a href="#home" className="brand footer-brand"><BrandMark/><span className="brand-type"><strong>softnexa</strong><small>AI TECHNOLOGIES</small></span></a><p>Smart solutions.<br/>Real impact.</p><div className="footer-links"><button onClick={()=>goTo('services')}>Services</button><button onClick={()=>goTo('solutions')}>AI solutions</button><button onClick={()=>goTo('about')}>About</button><button onClick={()=>goTo('contact')}>Contact</button></div><a className="back-top" href="#home" aria-label="Back to top"><ArrowUpRight size={20}/></a></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Softnexa AI Technologies</span><span>Built with intention <span className="footer-heart">✳</span></span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></footer>
    <a className="floating-contact" href={`mailto:${EMAIL}`} aria-label="Email Softnexa"><MessageCircle size={19}/><span>Let's talk</span></a>
  </div>
}

export default App
