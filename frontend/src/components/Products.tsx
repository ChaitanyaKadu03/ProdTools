import Button from './Button'
import { asimplepage, taskflow, httptracer } from '../assets/images'

const Products = () => {
  return (
    <div className='flex flex-col px-[64px] py-[96px] gap-16'>
      {data.map(res => {
        return <ProductsCard id={res.id} text={res.text} pageLink={res.pageLink} imageLink={res.imageLink} />
      })}
    </div>
  )
}

const data = [
  { id: 1, pageLink: '/taskflow', imageLink: taskflow, text: `Stay organized and in control with our Task Management board. Designed for simplicity and functionality, users can create multiple boards, add tasks, and track their progress through customizable stages like "To Do," "In Progress," and "Done." With drag-and-drop functionality, managing tasks becomes intuitive, making it easier to handle complex projects or daily workflows. It's the ultimate tool to streamline your productivity.` },
  { id: 2, pageLink: '/http-tracer', imageLink: httptracer, text: `Hook Monitoring keeps you informed by actively tracking webhooks sent to your endpoint. With real-time notifications and detailed logs of each interaction, you can quickly verify if webhooks are reaching your application successfully. This ensures that your integrations work as expected, saving you time and effort when debugging external services.` },
  { id: 3, pageLink: '/asimplepage', imageLink: asimplepage, text: `Our Note Sharing feature makes it effortless to collaborate with others by securely sharing notes via email or username. Whether it's a document review or sharing ideas, users can grant access to their notes and collaborate in real-time. Shared users can edit, comment, and contribute, making teamwork more dynamic and efficient. It's the perfect solution for teams looking to improve communication and project transparency.` },
]

interface IProductsCard {
  id: number,
  text: string,
  pageLink: string,
  imageLink: any
}

const ProductsCard = ({ id, text, pageLink, imageLink }: IProductsCard) => {
  const isTrue: Boolean = (id / 2 == 1)
  return <div className={`${isTrue ? 'flex flex-row-reverse' : 'flex'} gap-10 text-black1 items-center`}>
    <img src={imageLink} alt='product interface' className='w-[560px]' />
    <div className={`flex flex-col ${isTrue ? 'items-start' : 'items-end'} w-full gap-8`}>
      <p className={`p1 ${isTrue ? 'text-left' : 'text-right'} leading-7 tracking-widest`}>{text}</p>
      <Button link={pageLink} />
    </div>
  </div>
}

export default Products