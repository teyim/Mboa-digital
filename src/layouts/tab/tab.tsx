import { useState } from 'react'
import TabSection from './tabSection'
import { Agile_Delivery, Our_Products, Careers } from '../../constants'


function Tab() {
    const [activeTabSection, setActiveTabSection] = useState([
        { id: 1, name: Agile_Delivery, isActive: true },
        { id: 2, name: Our_Products, isActive: false },
        { id: 3, name: Careers, isActive: false }
    ])

    const switchSection = (sectionID: number) => {
        const tempState = activeTabSection.map(section => {
            if (section.id !== sectionID) {
                return { ...section, isActive: false }
            }
            return { ...section, isActive: true }

        })
        setActiveTabSection(tempState)
    }



    return (
        <div className="my-10  max-w-7xl">
            <div className="md:w-3/5 mx-auto ring-2 ring-black  rounded-xl overflow-x-scroll md:overflow-hidden">
                <ul className="list-none flex md:justify-between py-2 px-2 items-center content-center">
                    {activeTabSection.map(section => (
                        <li key={section.id} className={`${section.isActive && "bg-gradient-to-br from-green-200 via-blue-200 to-purple-300  p-5  rounded-xl font-semibold"} text-xl cursor-pointer mx-3 md:mx-0`} onClick={() => switchSection(section.id)}>{section.name}</li>
                    ))}
                </ul>
            </div>
            <div>
                {activeTabSection[0].isActive && <TabSection sectionName={Agile_Delivery} />}
                {activeTabSection[1].isActive && <TabSection sectionName={Our_Products} />}
                {activeTabSection[2].isActive && <TabSection sectionName={Careers} />}
            </div>
        </div>
    )
}

export default Tab