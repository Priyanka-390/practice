
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <div className='bg-black min-h-screen flex justify-center flex-col items-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-white text-center text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, vel.</p>
            <p className='text-white text-center text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, vel.</p>
                  <p className='text-white text-center text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas similique consectetur quisquam autem blanditiis ducimus nulla quas sit cumque.</p>
                  <Link href="/"><Button text="home"/></Link>
          </div>
    </div>
  )
}

export default About
