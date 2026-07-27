import { Hero } from '@/components/sections/Hero'
import { TechTicker } from '@/components/ui/TechTicker'
import { SelectedWork } from '@/components/sections/SelectedWork'
import { FrontendExpertise } from '@/components/sections/FrontendExpertise'
import { AIWorkflow } from '@/components/sections/AIWorkflow'
import { Process } from '@/components/sections/Process'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechTicker />
      <SelectedWork />
      <FrontendExpertise />
      <AIWorkflow />
      <Process />
      <About />
      <Contact />
    </>
  )
}
