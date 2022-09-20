
import teamWork from '../assets/images/teamWork.svg'
import smart from '../assets/images/smart.svg'

function Subheader() {
  return (
    <div>
        <div className="flex justify-between my-5 h-[40rem] py-10 px-6 w-full">
                <div className=" w-2/5 p-5 overflow-hidden my-auto ">
                    <h1 className="text-6xl">OUR MISSION</h1>
                    <h2 className="font-light font-SG text-2xl  my-3 text-gray-700">Companies struggling to attract the right IT talents; structural shortage of qualified engineers; high turnover due to the tight market, are business productivity undermining factors</h2>
                </div>
                <div className="w-3/5 overflow-hidden rounded-lg  bg-gradient-to-br from-green-100 via-blue-100 to-purple-200 shadow-sm">
                    <div className="mx-auto text-center py-6 px-14 ">
                        <h1 className="font-semibold text-3xl">We believe in a different model</h1>
                        <h2 className="font-light text-lg font-SG my-3">IT service should be thought and designed in consideration for flexibility, in order to address those challenges. Software delivery should be industrialized and leverage the potential of automation to its fullest. Enterprises should benefit from talents from around the world.

                            This is <strong>MBOA DIGITAL</strong> mission. A quality nearshore IT service offer to companies, leveraging the youth and talents from Africa.</h2>
                    </div>
                    <img src={teamWork} className='w-72 mx-auto ' />
                </div>
            </div>
            <div className="flex justify-between my-5 h-[50 rem] py-10 px-6">
                <div className=" pb-5 w-3/5 overflow-hidden rounded-lg  bg-gradient-to-r from-rose-100 to-orange-100 shadow-sm">
                    <div className="mx-auto text-center py-6 px-14 ">
                        <h1 className="font-semibold text-3xl">At MBOA DIGITAL we hire consultants, not developers.</h1>
                        <h2 className="font-light text-lg  font-SG my-3">We are not about C# wizards, Java gurus. We hire smart people, bilingual <span className="font-semibold">(English and French)</span>, with strong personal skills, that enjoy learning and keeping up to the pace. That is why they will hit the ground running as you hand over your problem, and will advise you to the best.
                            Process
                            When it comes to outsourcing, we understand our clients need to know their projects are in good hands. Our delivery process is thought to ensure we understand your problem, we give you enough visibility before writing the solution, and keep you up to date while implementing it. We value transparency and ownership, so that at any stage you know your software is in good hands.</h2>
                    </div>
                    <img src={smart} className='w-64 mx-auto ' />
                </div>
                <div className="p-5 overflow-hidden my-auto text-right w-2/5 ">
                    <h1 className="text-6xl">OUR SERVICES</h1>
                    <h2 className="font-light font-SG text-2xl  my-3 text-gray-700">REMOTE WORK, CLOSE PARTNERSHIP</h2>
                </div>
            </div>
    </div>
  )
}

export default Subheader