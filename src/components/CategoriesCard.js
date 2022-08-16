import React from 'react';
import {useNavigate} from 'react-router-dom'
import './CategoriesCard.styles.scss';
function CategoriesCard({ titulo, imageUrl }) {

    /**
   * hook para criar um link para a rota do titulo da div
   */

     const navigateToTitle = useNavigate();

     /*
      * Função para manusear o click e utilizar o hook useNavigate no card
      * params@route = rota a qual quero navegar (titulo)
      */
   
     const handleClick = ()=>{
       navigateToTitle(`/shop/${titulo}`)
     }

  return (
    <>
      <div className="category-container" onClick={handleClick}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />

        <article className="category-body-container">
          <h2>{titulo}</h2>
          <p>Shop Now</p>
        </article>
      </div>
    </>
  );
}

export default CategoriesCard;
