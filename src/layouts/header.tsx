
import manstanding from '../assets/images/manstanding.svg'
import larryCommunication from '../assets/images/Larry__Communication.svg'
import Navbar from './navbar'

function Header() {
  return (
    <header className="text-4xl w-screen   font-semibold text-blak">
            <div className="py-12 overflow-x-hidden">
              <Navbar/>
                <div className='py-10  px-4 md:mt-10 md:w-4/5 mx-auto max-w-7xl'>
                    <div className=' md:flex md:justify-evenly'>
                        <div className='md:w-3/5 border-b-4 border-black p-4 '>
                            <h1 className=' text-4xl md:text-6xl font-light leading-tight my-auto'>Leading your digital transformation <span className=' font-medium font-SG'>Remotely</span></h1>
                        </div>
                        <div className='bg-gradient-to-r from-rose-200 to-orange-200 p-2 rounded-xl w-72 mt-5 md:mt-0'>
                          <img src={larryCommunication} className='mx-auto my-auto'/>
                        </div>
                    </div>
                    <div className=' md:flex p-4 justify-evenly'>
                        <div className='bg-gradient-to-br from-green-200 via-blue-200 to-purple-300 p-2 rounded-xl w-50'>
                            <img src={manstanding} className='mx-auto my-auto'/>
                        </div>
                        <div className='md:w-3/5'>
                            <h1 className='text-2xl font-SG font-light leading-snug mt-10'>
                                We are more than a technology broker. We design and operate your IT services, 
                                so you can focus on your core business. Whether you are an organization thriving to scale up
                                 its software delivery capacity on short to long term, or a start-up looking to bringing 
                                 some new idea to life, we are the right partner for your project.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header