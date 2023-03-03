import PropTypes from "prop-types"
import defaultImage from './default.jpg';

const Painting =({
  imgUrl= defaultImage,
  title,
  authorUrl,
  authorName = 'КУКУРУЗА О.А.',
  price
}) => {

  return (
    <div>
      <img src={imgUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  )
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number

}

export default Painting


