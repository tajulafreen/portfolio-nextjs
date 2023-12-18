import Hero from '@/components/main/Hero'
import Skills from '@/components/main/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-full h-full'>
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  )
}
