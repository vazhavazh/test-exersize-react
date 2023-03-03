import Painting from "./Painting"
import PropTypes from "prop-types"


const PaintingList = ({ items }) => {
    return (
         <ul>
        {items.map(item => (
            <li key={item.id}>
        <Painting    
        imgUrl={item.url}      
        title={item.title}
        authorName={item.author.tag}
        authorUrl={item.author.url}
        price={item.price}
        />
            </li>
        ))}
    </ul>
    )
   
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    )
}

export default PaintingList