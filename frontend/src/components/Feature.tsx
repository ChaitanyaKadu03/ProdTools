import { note, server, page } from '../assets/icons/icons'

const Feature = () => {
  return (
    <div className='flex justify-between gap-4 px-[64px] py-[96px] w-full bg-black5 text-black1'>
      {data.map(res => {
        return <FeatureCard key={res.id} imageLink={res.imageLink} text={res.text} />
      })}
    </div>
  )
}

const data = [
  { id: 1, imageLink: page, text: `Collaborate seamlessly with live note editing and sharing.` },
  { id: 2, imageLink: server, text: `Organize your projects effortlessly with our intuitive task board.` },
  { id: 3, imageLink: note, text: `Share and manage notes with ease—boost teamwork and productivity.` },
]

interface inputs {
  imageLink: any,
  text: string
}

const FeatureCard = ({ imageLink, text }: inputs) => {
  return <div className='flex items-center gap-8'>
    <img src={imageLink} alt='icon' className='h-12 w-12'/>
    <p className='p1 w-[260px]'>"{text}"</p>
  </div>
}

export default Feature