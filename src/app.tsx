import Marquee from "react-fast-marquee"
import Header from "./layouts/header"
import Mainsection from "./layouts/mainsection"
import Subheader from "./layouts/subheader"


function App() {
    const programmingLanguages = ['NodeJs', 'JAVA 7', 'APACHE CAMEL', 'GOOGLE CLOUD', 'PAYMENT GATEWAY', 'ELK', 'PYTHON', 'BAMBOO', 'Angular 4', 'REACT', 'NEW RELIC', 'JENKINS', 'AZURE']
    return (
        <section className="bg-gray-100 font-lexend overflow-x-hidden px-6">
            <Header />
            <Marquee gradientColor={[245, 244, 242]}>
                {programmingLanguages.map(language => {
                    return <div className="font-SG font-semibold text-lg mx-6 underline ">{language}</div>
                })}
            </Marquee>
            <Subheader/>
            <Mainsection/>
        </section>
    )
}
export default App