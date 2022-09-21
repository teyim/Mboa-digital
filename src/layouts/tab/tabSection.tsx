import React from 'react'
import { TabSectionProps } from '../../types'
import agileDeliveryTabImage from '../../assets/images/agile_delivery.svg'
import ourProductsTabImage from '../../assets/images/our_products.svg'
import careersTabImage from '../../assets/images/career.svg'
import { Agile_Delivery, Our_Products, Careers } from '../../constants'

const TabSection: React.FC<TabSectionProps> = ({ sectionName }) => {

    const agileDeliveryTabSection = (
        <>
            <div className='md:w-2/5 bg-gradient-to-br from-green-100 via-blue-100 to-purple-200 rounded-xl md:flex justify-center align-middle'>
                <img src={agileDeliveryTabImage} className='w-[25rem]' />
            </div>
            <div className='md:w-1/2 text-xl md:p-5 p-2  font-SG font-normal'>
                <h1 className='font-semibold font-lexend'>
                    At MBOA DIGITAL, we have agile delivery teams. We view software as a living entity 
                    that needs to evolve to continuously meet your customers expectations.
                    </h1>

                <h2 className='my-2'>We believe in small increments adding value, and have DevOps consultants to sustain that model and quickly bring changes to live - automated regression testing Continuous Integration / Continuous Deployment.
                We are passionate about problem solving. We integrate the best from design patterns, open source, cloud infrastructures, to write neat, cost effective, and fit for purpose software.</h2>

                <h2>We are essentially delivering service to IT service providers, or to start-ups, looking for a Proof of Concept or Minimum Viable Products to get started without investing hiring developers. We understand their strategy and deliver best value to their customers.</h2>
            </div>
        </>
    )
    
    const productsTabSection=(
         <>
            <div className='md:w-2/5 bg-gradient-to-br from-red-100 via-pink-100 to-purple-200 rounded-xl md:flex justify-center align-middle'>
                <img src={ourProductsTabImage} className='w-[25rem]' />
            </div>
            <div className='md:w-1/2 text-xl md:p-5 p-2  font-SG font-normal'>
                <h1 className='font-semibold font-lexend text-2xl'>
                    Web Apps
                </h1>
                <h2 className='my-2'>Get your applications developed and accessible from any browser. Simple presentation websites or business applications, they deliver great user experience.</h2>

                <h1 className='font-semibold font-lexend text-2xl'>
                   Mobile Apps
                </h1>
                <h2 className='my-2'>Because mobility is a must. We have experience building cross-platform native applications, so you can invest once and offer your service on both iOs and Android devices, with a native look and feel.</h2>

                <h1 className='font-semibold font-lexend text-2xl'>
                    Enterprise Application Integration
                </h1>
                <h2 className='my-2'>Get even more value by interconnecting your applications and devices together. Whether real-time or business process integration, our teams can find the right solution for your an enhanced user experience.</h2>
            </div>
        </>
    )

    const careersTabSection=(
        <>
        <div className='md:w-2/5 bg-gradient-to-br from-blue-100 via-pink-100 to-indigo-200 rounded-xl md:flex md:justify-center md:align-middle '>
                <img src={careersTabImage } className='w-[25rem]' />
            </div>
            <div className='md:w-1/2 text-xl md:p-5 p-2  font-SG font-normal'>
                <h1 className='font-semibold font-lexend text-2xl'>
                   Please check our open positions, and tell us how great you would do.
                </h1>
                <h2 className='my-2'>We aim to build a work environment were talents can express. People’s implication and autonomy prime over management, and collective over individual achievement. If you also believe that you are more than a developer, and you aim at transcending your coding skill to what it is supposed to be: a language to write your solution in, then you are surely here at the right place.</h2>

                <h2 className='font-light italic'>
                    Send us your CV and expression of interest at careers@mboadigital.tech, we will be happy to get back to you.
                </h2>

            </div>
        </>
    )
    return (
        <div className='p-6 md:flex my-3 justify-evenly  max-w-7xl'>
            {sectionName === Agile_Delivery ? agileDeliveryTabSection : null}
            {sectionName === Our_Products ? productsTabSection : null}
            {sectionName === Careers ? careersTabSection : null}
        </div>
    )
}

export default TabSection