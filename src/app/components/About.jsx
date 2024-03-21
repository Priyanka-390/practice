
import Button from './Button'
import Link from 'next/link'

const About = () => {
  return (
    <div className='bg-black'>
          <p className='text-white text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, vel.</p>
          <p className='text-white text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, vel.</p>
      <p className='text-white text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptas similique consectetur quisquam autem blanditiis ducimus nulla quas sit cumque.</p>
      <Link href="./homepage"><Button text="home"/></Link>
    </div>
  )
}

export default About
