import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative">
{/*       <div className="fixed w-full h-full">
        <Background />
      </div> */}
      {/* Hero section */}
      <section className='max-w-6xl mx-auto px-4 lg:px-10 py-4'>
        <Hero />
      </section>
    </main>
  )
}
