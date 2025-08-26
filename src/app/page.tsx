'use client'

import React, { useRef, useState, useId } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import Image from 'next/image';
import type { Viewport } from 'next';
import { MobileNavbar, Navbar } from '@/components/navbar';
import { SkillsComponent } from '@/components/skills';
import { ProjectsComponent } from '@/components/projects';
import { container } from "@/utils/constants";
import { AwardsComponent } from '@/components/awards';
import { SocialsComponent } from '@/components/socials';
import ExperienceCollection from '@/components/experiences/experiencecollection';
import { Experiences, Extracurriculars } from '@/content/portfolio';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}


export default function Home() {
  const awardsRef = useRef(null);
  const awardsInView = useInView(awardsRef, { once: true });

  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true });

  async function openResume() {
    const win = window.open('', '_blank');
    const response = await fetch('/api/getResumeSignedUrl', { method: 'POST' });
    const data = await response.json();
    if (win) {
      win.location.href = data.url;
    } else {
      // Optionally, handle the case where the popup was blocked
      alert('Popup was blocked. Please allow popups for this site.');
    }
  }


  return (
    <div id='top' className='bg-base-100 relative'>
      {/* NAVBAR */}
      <div className="sticky top-0 z-20 navbar bg-base-100 shadow-lg">
        <MobileNavbar />
        <Navbar />
      </div>


      <div className="prose lg:prose-xl bg-base-100 min-w-full">
        {/* INTRODUCTION */}
        <div className="mb-16 mx-10 lg:mx-40 relative z-10" style={{ overflow: 'hidden' }}>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <motion.div whileHover={{
              scale: 1.1,
              transition: {
                type: "spring",
                duration: 1
              },
            }}>
              <Image
                src="/IMG_0098.jpg"
                alt='Portrait'
                width={309}
                height={469}
                className="max-w-2xs sm:max-w-sm rounded-full shadow-2xl mb-8" />
            </motion.div>
            <div className="text-center lg:text-left lg:ml-16">
              <h1 className="text-4xl font-bold text-shadow-lg mb-2 lg:mb-2">Ethan Chen</h1>
              <h4 className="text-xl mt-0 lg:mt-0">UWaterloo Computer Engineering Student</h4>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={async e => {
                    await openResume();
                  }}
                  className="bg-transparent border-none p-0 m-0 font-[500] underline cursor-pointer font-inherit"
                  style={{ background: "none" }}
                >
                  Download my resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div id="skills">
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Skills</h2>
            <SkillsComponent />
          </div>
        </div>

        {/* EXPERIENCES */}
        <div id='experiences'>
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Experiences</h2>
            <ExperienceCollection experiences={Experiences} />
          </div>
        </div>

        {/* EXTRACURRICULARS */}
        <div id='extracurriculars'>
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Extracurriculars</h2>
            <ExperienceCollection experiences={Extracurriculars} />
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className='min-h-screen'>
          <div className="mx-10 lg:mx-40 my-16">
            <h2 ref={projectsRef}>Projects</h2>

            <ProjectsComponent projectsInView={projectsInView} />
          </div>
        </div>

        {/* AWARDS */}
        <div id="awards" ref={awardsRef}>
          <div className="mx-10 lg:mx-40 my-16">
            <h2>Awards</h2>
            <div>
              <AwardsComponent awardsInView={awardsInView} />
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <footer id='footer' className="footer bg-base-100 text-base-content items-center px-10 lg:px-40 py-4">
          <aside className="grid-flow-col items-center">
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <SocialsComponent />
        </footer>
      </div>
    </div >
  )
}
