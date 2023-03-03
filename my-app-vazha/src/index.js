// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//==================================================================================================


// import  ReactDOM  from 'react-dom';

// const span1 = <span>Важико</span>

// const span2 = <span>Тут</span>

// const jsxElement = <div>    
//   {span1}    /
//   {span2}
// </div>
//                                      // backspace divides each child

// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'))     // 1st argument is "what" we want insert,
//                             // 2nd argument is "where" we want insert

//===============================================================================================

// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }

// console.log(typeof data.author.url);

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// ReactDOM.render(painting, document.querySelector('#root'))



//-=======================================================================================

// import ReactDOM from 'react-dom';
// import paintings from './paintings.json'



// const data1 = paintings[0];
// const data2 = paintings[1]

// const painting1 = (
//   <div>
//     <img src={data1.url} alt={data1.title} width="480" />
//     <h2>{data1.title}</h2>
//     <p>
//       Автор: <a href={data1.author.url}>{data1.author.tag}</a>
//     </p>
//     <p>Цена: {data1.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )


// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>
//       Автор: <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Цена: {data2.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// )

// const elements = <div>
//   {painting1}
//   {painting2}
// </div>


// ReactDOM.render(elements, document.querySelector('#root'))  // not reusable code

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
//Component

// import ReactDOM from "react-dom";
// import paintings from "./paintings.json"
// import App from "./componensts/App"

// function Painting(props) {
//   console.log(props);
//   return (
//     <div>
//       <img src="" alt="" width="480" />
//       <h2></h2>
//       <p>Автор: <a href=""></a></p>
//       <p>Цена: кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии}</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   )
// }





// ReactDOM.render(<Painting a="5" b={5 + 5} />, document.querySelector('#root')) // custom component from big letter
/////////////==============================================================================================
// const painting = paintings[2]

// function Painting({ url, title, authorUrl, authorName, price }) {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={authorUrl}>{authorName}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   )
// }

// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     authorUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector('#root'))


  
// const data = {
//   "id": "id-1",
//   "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   "title": "Feathers. Art abstract",
//   "price": 500,
//   "author": {
//     "tag": "ractapopulous",
//     "url": "https://pixabay.com/users/ractapopulous-24766/"
//   },
//   "quantity": 10
// }


//========================================================================================

import ReactDOM from "react-dom";
// import paintings from "./paintings.json"
import App from "./App"



// const painting = paintings[2]

ReactDOM.render(<App />, document.querySelector('#root'))
