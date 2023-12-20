import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      {/* Hero section */}
      <section className='max-w-6xl xl:max-w-7xl mx-auto px-4 md:px-10 py-4'>
        <Hero />
      </section>
    </main>
  )
}
