'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { Viewport } from 'next'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa6'
import { type Tab, TabNav } from '@/components/tab-nav'
import { SkillsComponent } from '@/components/skills'
import ExperienceCollection from '@/components/experiences/experiencecollection'
import { ProjectsComponent } from '@/components/projects'
import { AwardsComponent } from '@/components/awards'
import { Experiences, Extracurriculars, Socials } from '@/content/portfolio'

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
}

async function openResume() {
  const win = window.open('', '_blank')
  const response = await fetch('/api/getResumeSignedUrl', { method: 'POST' })
  const data = await response.json()
  if (win) {
    win.location.href = data.url
  } else {
    alert('Popup was blocked. Please allow popups for this site.')
  }
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('about')

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-bg text-text-primary">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 flex-shrink-0 border-r border-border p-8">
        <div>
          <h1 className="font-display text-xl font-semibold text-text-primary">Ethan Chen</h1>
          <p className="text-text-secondary text-sm mt-1">Computer Engineering</p>
          <p className="text-text-secondary text-sm">University of Waterloo</p>
          <button
            onClick={openResume}
            className="text-accent text-sm mt-4 hover:opacity-70 transition-opacity cursor-pointer"
          >
            Resume ↗
          </button>
        </div>
        <div className="mt-12">
          <TabNav active={activeTab} onChange={setActiveTab} />
        </div>
        <div className="mt-auto pt-8 flex flex-col gap-3">
          <div className="flex gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.destination}
                target={social.destination.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={social.name}
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-text-muted text-xs">© {new Date().getFullYear()} Ethan Chen</p>
        </div>
      </aside>

      {/* Mobile: full-width column */}
      <div className="flex md:hidden flex-col w-full overflow-hidden">
        <header className="flex-shrink-0 border-b border-border">
          <div className="px-6 pt-5 pb-3">
            <h1 className="font-display text-lg font-semibold text-text-primary">Ethan Chen</h1>
            <p className="text-text-secondary text-xs mt-0.5">Computer Engineering · UWaterloo</p>
          </div>
          <TabNav active={activeTab} onChange={setActiveTab} orientation="horizontal" />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <PanelContent activeTab={activeTab} />
        </main>
        <footer className="flex-shrink-0 border-t border-border px-6 py-3 flex items-center justify-between">
          <div className="flex gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.destination}
                target={social.destination.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={social.name}
                className="text-text-muted hover:text-text-primary transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-text-muted text-xs">© {new Date().getFullYear()} Ethan Chen</p>
        </footer>
      </div>

      {/* Desktop Panel */}
      <main className="hidden md:flex flex-col flex-1 overflow-hidden p-12">
        <PanelContent activeTab={activeTab} />
      </main>

    </div>
  )
}

function PanelContent({ activeTab }: { activeTab: Tab }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex-1 min-h-0 flex flex-col"
        >
          {activeTab === 'about'    && <AboutPanel />}
          {activeTab === 'work'     && <WorkPanel />}
          {activeTab === 'projects' && <ProjectsPanel />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function ScrollableSection({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [canScrollUp, setCanScrollUp] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollUp(el.scrollTop > 4)
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 4)
  }

  useEffect(() => {
    updateScrollState()
    const timer = setTimeout(updateScrollState, 100)
    const ro = new ResizeObserver(updateScrollState)
    if (scrollRef.current) ro.observe(scrollRef.current)
    if (contentRef.current) ro.observe(contentRef.current)
    return () => {
      clearTimeout(timer)
      ro.disconnect()
    }
  }, [])

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ top: dir * 120, behavior: 'smooth' })
  }

  return (
    <div className="relative flex-1 min-h-0">
      {canScrollUp && (
        <button
          onClick={() => scroll(-1)}
          className="absolute top-0 inset-x-0 z-10 flex justify-center pt-1 pb-5 bg-gradient-to-b from-bg to-transparent cursor-pointer"
        >
          <FaChevronUp size={12} className="text-text-primary drop-shadow-sm" />
        </button>
      )}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="h-full overflow-y-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        <div ref={contentRef} className="pb-4">{children}</div>
      </div>
      {canScrollDown && (
        <button
          onClick={() => scroll(1)}
          className="absolute bottom-0 inset-x-0 z-10 flex justify-center pb-1 pt-5 bg-gradient-to-t from-bg to-transparent cursor-pointer"
        >
          <FaChevronDown size={12} className="text-text-primary drop-shadow-sm" />
        </button>
      )}
    </div>
  )
}

function AboutPanel() {
  return (
    <div className="h-full flex flex-col max-w-2xl">
      <div className="flex-shrink-0 flex flex-col sm:flex-row gap-8 items-start">
        <Image
          src="/IMG_0098.jpg"
          alt="Ethan Chen"
          width={128}
          height={128}
          className="rounded-full flex-shrink-0 object-cover"
          style={{ width: 128, height: 128 }}
        />
        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mt-0">
            Ethan Chen
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            Computer Engineering · University of Waterloo
          </p>
          <div className="w-8 h-px bg-border mt-3 mb-4" />
          <p className="text-text-secondary text-sm leading-relaxed">
            I&apos;m a Computer Engineering student at the University of Waterloo,
            currently interning at Pratt &amp; Whitney on internal developer tooling.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mt-3">
            Previously a full-stack developer co-op at BTNX, shipping product across .NET,
            React, and AngularJS. On the side, I&apos;m a backend developer at Hack the North
            and a project developer at UW Blueprint — building software for nonprofits.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed mt-3">
            I work across the full stack, from TypeScript frontends to Python backends and
            C++ firmware. I&apos;ve shipped projects at 5+ hackathons. Graduated with the
            UW President&apos;s Scholarship of Distinction.
          </p>
          <button
            onClick={openResume}
            className="mt-5 text-sm text-accent hover:opacity-70 transition-opacity cursor-pointer"
          >
            Resume ↗
          </button>
        </div>
      </div>
      <hr className="border-border my-8 flex-shrink-0" />
      <p className="flex-shrink-0 text-text-secondary text-xs uppercase tracking-widest mb-4">Technologies</p>
      <ScrollableSection>
        <SkillsComponent categorized />
      </ScrollableSection>
    </div>
  )
}

function WorkPanel() {
  return (
    <ScrollableSection>
      <div className="flex flex-col gap-12">
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-6 mt-0">Experience</h2>
          <ExperienceCollection experiences={Experiences} />
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-6 mt-0">Extracurriculars</h2>
          <ExperienceCollection experiences={Extracurriculars} />
        </section>
        <section>
          <h2 className="font-display text-lg font-semibold text-text-primary mb-6 mt-0">Awards</h2>
          <AwardsComponent />
        </section>
      </div>
    </ScrollableSection>
  )
}

function ProjectsPanel() {
  return (
    <ScrollableSection>
      <h2 className="font-display text-lg font-semibold text-text-primary mb-6 mt-0">Projects</h2>
      <ProjectsComponent />
    </ScrollableSection>
  )
}

