import Header from '@/components/custom/Header'
import { AtomIcon, Edit, Share2, ArrowRight, Sparkles, Github } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero */}
      <section className='relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-indigo-50'>
        <div className='absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10' />
        <div className='mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-36'>

          <a
            href='https://github.com/IshitaBansal09'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-1.5 text-sm text-gray-600 shadow-sm hover:bg-purple-50 transition mb-8'
          >
            <Github className='h-4 w-4' />
            <span>Built by Ishita Bansal</span>
            <ArrowRight className='h-3.5 w-3.5 text-primary' />
          </a>

          <h1 className='mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl'>
            Build Your Resume{' '}
            <span className='bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
              With AI
            </span>
          </h1>

          <p className='mx-auto mb-10 max-w-2xl text-lg text-gray-500 lg:text-xl'>
            Craft a standout, ATS-friendly resume in minutes — powered by AI, tailored to your next role.
          </p>

          <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
            <Link
              to='/dashboard'
              className='inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:opacity-90 transition'
            >
              Get Started Free
              <ArrowRight className='h-4 w-4' />
            </Link>
            <a
              href='https://github.com/IshitaBansal09'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-50 transition'
            >
              <Github className='h-4 w-4' />
              View on GitHub
            </a>
          </div>

          {/* Stats */}
          <div className='mt-16 flex flex-wrap justify-center gap-10 text-center'>
            {[
              { value: 'AI-Powered', label: 'Smart Content Generation' },
              { value: 'ATS-Ready', label: 'Pass Resume Screeners' },
              { value: 'Instant', label: 'One-Click PDF Export' },
            ].map((stat) => (
              <div key={stat.value}>
                <p className='text-2xl font-bold text-primary'>{stat.value}</p>
                <p className='mt-1 text-sm text-gray-500'>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className='bg-white py-20 px-4'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <span className='inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-4'>
            How it Works
          </span>
          <h2 className='text-3xl font-extrabold text-gray-900 md:text-4xl'>
            Your resume in 3 simple steps
          </h2>
          <p className='mt-4 text-gray-500 max-w-xl mx-auto'>
            No design skills needed. Just fill in your details and let AI do the heavy lifting.
          </p>

          <div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-3'>
            {[
              {
                icon: <Sparkles className='h-7 w-7 text-primary' />,
                step: '01',
                title: 'Describe Your Role',
                desc: 'Enter your job title and experience. Our AI generates tailored content, summaries, and bullet points for you.',
              },
              {
                icon: <Edit className='h-7 w-7 text-primary' />,
                step: '02',
                title: 'Customize & Edit',
                desc: 'Fine-tune every section — skills, experience, education — with a live preview that updates as you type.',
              },
              {
                icon: <Share2 className='h-7 w-7 text-primary' />,
                step: '03',
                title: 'Download & Share',
                desc: 'Export a polished PDF instantly or share a unique link directly with recruiters.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className='relative rounded-2xl border border-gray-100 bg-white p-8 shadow-md hover:shadow-xl transition text-left'
              >
                <span className='absolute top-6 right-6 text-4xl font-black text-gray-100 select-none'>
                  {item.step}
                </span>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10'>
                  {item.icon}
                </div>
                <h3 className='mb-2 text-lg font-bold text-gray-900'>{item.title}</h3>
                <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-gradient-to-r from-primary to-purple-600 py-20 px-4'>
        <div className='mx-auto max-w-screen-xl text-center'>
          <h2 className='text-3xl font-extrabold text-white md:text-4xl'>
            Ready to land your next job?
          </h2>
          <p className='mt-4 text-purple-100 max-w-lg mx-auto'>
            Join thousands of job seekers who built their resume in minutes with AI.
          </p>
          <Link
            to='/dashboard'
            className='mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-purple-50 transition'
          >
            Build My Resume
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t bg-white py-8 px-4 text-center text-sm text-gray-400'>
        Built with care by{' '}
        <a
          href='https://github.com/IshitaBansal09'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary hover:underline font-medium'
        >
          Ishita Bansal
        </a>
      </footer>
    </div>
  )
}

export default Home
