import { useState } from 'react'

function Mainsection() {
    const [activeSection, setActiveSection] = useState([
        { id: 1, name: 'AGILE DELIVERY', isActive: true },
        { id: 2, name: 'OUR PRODUCTS', isActive: false },
        { id: 3, name: 'CAREERS', isActive: false }
    ])

    const switchSection = (sectionID: number) => {
        const tempState = activeSection.map(section => {
            if (section.id !== sectionID) {
                return { ...section, isActive: false }
            }
            return { ...section, isActive: true }

        })
        setActiveSection(tempState)
    }
    return (
        <div className="my-10">
            <div className="w-3/5 mx-auto ring-2 ring-black  rounded-xl">
                <ul className="list-none flex justify-between py-2 px-6 items-center content-center">
                    {activeSection.map(section => (
                        <li key={section.id} className={`${section.isActive && "bg-gradient-to-br from-green-200 via-blue-200 to-purple-300  p-5 rounded-xl font-semibold"} text-xl cursor-pointer`} onClick={() => switchSection(section.id)}>{section.name}</li>
                    ))}
                </ul>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Mainsection