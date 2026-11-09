import { MotionConfig } from 'framer-motion'
import { Header } from './components/layout/Header'
import { Rodape } from './components/layout/Rodape'
import { WhatsFlutuante } from './components/layout/WhatsFlutuante'
import { ChamadaFinal } from './components/sections/ChamadaFinal'
import { ComoPedir } from './components/sections/ComoPedir'
import { FaixaCategorias } from './components/sections/FaixaCategorias'
import { Hero } from './components/sections/Hero'
import { Loja } from './components/sections/Loja'
import { Manifesto } from './components/sections/Manifesto'
import { Mural } from './components/sections/Mural'
import { Prateleiras } from './components/sections/Prateleiras'
import { Visite } from './components/sections/Visite'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <FaixaCategorias />
          <Loja />
          <Prateleiras />
          <Manifesto />
          <ComoPedir />
          <Mural />
          <Visite />
          <ChamadaFinal />
        </main>
        <Rodape />
        <WhatsFlutuante />
      </div>
    </MotionConfig>
  )
}
