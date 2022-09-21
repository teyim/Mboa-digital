import {useRef} from 'react'

function ContactSection() {
    const  firstNameRef = useRef<HTMLInputElement>(null);
    const  lastNameRef = useRef<HTMLInputElement>(null);
    const  emailRef = useRef<HTMLInputElement>(null);
    const  passwordRef = useRef<HTMLInputElement>(null);
    return (
        <div className='my-6 p-6  shadow-md rounded-lg font-SG text-xl  md:flex justify-evenly ring-2 ring-black  max-w-7xl w-full'>
            <div className='text-center md:w-[40%] '>
                <h1 className='font-semibold font-lexend text-4xl my-4'>CONTACT US</h1>
                <div className=' my-2 '>
                  <h1 className='font-semibold font-lexend mx-2 '>Tel 1:</h1>
                  <h2 className='font-light'>+237 6 58 59 45 45</h2>
                </div>
                 <div className='my-2'>
                  <h1 className='font-semibold font-lexend mx-2'>Tel 2:</h1>
                  <h2 className='font-light'>+33 1 88 61 02 02</h2>
                </div>
                 <div className='my-2'>
                  <h1 className='font-semibold font-lexend mx-2'>Email:</h1>
                  <a href='mailto:contact@mboadigital.tech' className='font-light underline'>contact@mboadigital.tech</a>
                </div>
                 <div className=' my-2'>
                  <h1 className='font-semibold font-lexend mx-2'>LinkedIn:</h1>
                   <a href='https://www.linkedin.com/company/mboadigital/' className='font-light underline'>@mboadigital</a>
                </div>
                 <div className=' my-2'>
                  <h1 className='font-semibold font-lexend mx-2'>Locations:</h1>
                  <h2 className='font-light'>France - Cameroon</h2>
                </div>
            </div>
            <div className='md:w-[40%]  p-6 md:flex-col  '>
            <div className='md:flex justify-evenly my-2  '>
            <input type='text' placeholder='First name' className='py-4 px-2 rounded-xl my-2 md:my-0 w-full md:w-[45%]' ref={firstNameRef}/>
             <input type='text' placeholder='Last name' className='py-4 px-2 rounded-xl my-2 md:my-0 w-full md:w-[45%]' ref={lastNameRef}/>
            </div>
            <div className='flex-col content-center items-center '>
             <input type='email' placeholder='Email' className='py-4 px-2 rounded-xl w-full my-2' ref={emailRef}/>
             <input type='text' placeholder='Valid phone number' className='py-4 px-2 rounded-xl w-full my-2' ref={passwordRef}/>
             <button className='ring-1 mx-auto w-full font-semibold justify-self-center ring-black px-4 py-2 my-2 hover:bg-black hover:text-white rounded-lg'>
                Contact us
            </button>
             </div>
            </div>
            
        </div>
    )
}

export default ContactSection