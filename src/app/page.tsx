'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Viewport } from 'next'
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
      <main className="hidden md:block flex-1 overflow-y-auto p-12">
        <PanelContent activeTab={activeTab} />
      </main>

    </div>
  )
}

function PanelContent({ activeTab }: { activeTab: Tab }) {
  return (
    <>
      {activeTab === 'about'    && <AboutPanel />}
      {activeTab === 'work'     && <WorkPanel />}
      {activeTab === 'projects' && <ProjectsPanel />}
    </>
  )
}

function AboutPanel() {
  return (
    <div className="max-w-xl">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <Image
          src="/IMG_0098.jpg"
          alt="Ethan Chen"
          width={120}
          height={120}
          className="rounded-full flex-shrink-0 object-cover"
          style={{ width: 120, height: 120 }}
        />
        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary mt-0">
            Ethan Chen
          </h2>
          <p className="text-text-secondary text-sm mt-1">
            Computer Engineering · University of Waterloo
          </p>
          <p className="text-text-primary text-sm mt-4 leading-relaxed">
            I build software — full-stack web, embedded systems, and everything in between.
            Currently studying Computer Engineering at UWaterloo and interning at Pratt & Whitney.
          </p>
          <button
            onClick={openResume}
            className="mt-5 text-sm text-accent hover:opacity-70 transition-opacity cursor-pointer"
          >
            Resume ↗
          </button>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-text-secondary text-xs uppercase tracking-widest mb-4">Technologies</p>
        <SkillsComponent />
      </div>
    </div>
  )
}

function WorkPanel() {
  return (
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
  )
}

function ProjectsPanel() {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-text-primary mb-6 mt-0">Projects</h2>
      <ProjectsComponent />
    </div>
  )
}

