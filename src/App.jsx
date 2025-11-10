import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, Github, Mail, Linkedin, ArrowRight, Download } from 'lucide-react'
import HackerText from './HackerText'

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-[1px]">
              <div className="h-full w-full rounded-lg bg-black"></div>
            </div>
            <span className="text-sm font-mono tracking-widest text-cyan-300">MANTHAN.DARJI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/80">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.35)_55%,rgba(2,6,23,0.85)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-200">Open to opportunities</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            <HackerText text="Manthan Darji" speed={22} />
          </h1>
          <p className="mb-8 max-w-xl text-zinc-300">
            Tech-focused developer crafting premium, high-performance experiences. I blend clean architecture with playful, interactive interfaces to build products people love.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-[1.02]">
              Contact Me
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={16} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              View Work
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-zinc-400">
            <a href="https://github.com/" target="_blank" className="hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="mailto:hello@example.com" className="hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-2 font-mono text-xs tracking-widest text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl"><HackerText text={title} speed={24} /></h2>
      {subtitle && <p className="mt-3 text-zinc-400">{subtitle}</p>}
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-[linear-gradient(180deg,#020617_0%,#020617_40%,#030a1a_100%)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="ABOUT" title="Techy. Hacker vibe. Premium finish." subtitle="Focused on building elegant, performant, and secure digital experiences." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
            <h3 className="mb-2 text-lg font-semibold text-white">What I do</h3>
            <p className="leading-relaxed">Full‑stack development with a strong focus on delightful UI, robust APIs, and scalable architectures. I love shipping polished details – micro‑interactions, smooth motion, and crisp typography – while keeping codebases clean and maintainable.</p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 p-6 text-zinc-300">
            <h3 className="mb-2 text-lg font-semibold text-white">Current focus</h3>
            <p className="leading-relaxed">Interactive 3D web, performance optimization, design systems, and secure backend services. Always learning, always experimenting.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'FastAPI', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Docker', 'Git'
  ]
  return (
    <section id="skills" className="relative bg-[radial-gradient(800px_400px_at_50%_0%,rgba(34,211,238,0.18),rgba(244,114,182,0)_60%)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="SKILLS" title="Tools I craft with" subtitle="A blend of front‑end polish and back‑end reliability." />
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const items = [
    {
      role: 'Frontend Developer',
      company: 'Premium Studio',
      period: '2022 — Present',
      points: [
        'Built interactive product experiences with React and 3D web.',
        'Implemented design systems and component libraries.',
        'Optimized performance and accessibility across devices.'
      ]
    },
    {
      role: 'Full‑stack Developer',
      company: 'Tech Startup',
      period: '2020 — 2022',
      points: [
        'Developed APIs and services with Node/FastAPI.',
        'Integrated analytics, auth, and payments.',
        'Led migrations and CI/CD improvements.'
      ]
    }
  ]
  return (
    <section id="experience" className="relative bg-[linear-gradient(180deg,#030a1a_0%,#020617_100%)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="EXPERIENCE" title="What I've shipped" subtitle="Selected roles and impact." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                <span className="text-xs text-zinc-400">{item.period}</span>
              </div>
              <p className="mb-3 text-sm text-zinc-400">{item.company}</p>
              <ul className="list-disc space-y-2 pl-5">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  const items = [
    { degree: 'B.E. in Computer Engineering', school: 'Your University', period: '2016 — 2020' },
    { degree: 'HSC (Science)', school: 'Your High School', period: '2014 — 2016' }
  ]
  return (
    <section id="education" className="relative bg-[radial-gradient(800px_500px_at_50%_0%,rgba(244,114,182,0.15),rgba(2,6,23,0)_60%)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="EDUCATION" title="Foundations" subtitle="Formal learning and certifications." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((e, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300">
              <h3 className="text-lg font-semibold text-white">{e.degree}</h3>
              <p className="text-sm text-zinc-400">{e.school}</p>
              <p className="mt-2 text-xs text-zinc-500">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="CONTACT" title="Let's build something" subtitle="Reach out for collaborations, roles, or just to say hi." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a href="mailto:hello@example.com" className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300 hover:border-cyan-400/40 hover:bg-cyan-500/5">
            <div className="mb-3 text-white">Email</div>
            <div className="font-mono text-sm">hello@example.com</div>
          </a>
          <a href="https://linkedin.com/" target="_blank" className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300 hover:border-cyan-400/40 hover:bg-cyan-500/5">LinkedIn</a>
          <a href="https://github.com/" target="_blank" className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-300 hover:border-cyan-400/40 hover:bg-cyan-500/5">GitHub</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-zinc-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Manthan Darji. Crafted with a hacker‑type vibe.
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
