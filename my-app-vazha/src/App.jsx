import PaintingList from "./componensts/PaintingList"
import paintings from "./paintings.json"
import Section from "./componensts/Section"



const App = () => {
    return (
        <div>
        <Section title="PRIVET">
        <PaintingList items={paintings} />
            </Section>
        
    </div>
 )   
}

export default App