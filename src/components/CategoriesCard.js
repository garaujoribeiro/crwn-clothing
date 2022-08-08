import React from 'react';
import './CategoriesCard.styles.scss';
function CategoriesCard({ titulo, imageUrl }) {
  return (
    <>
      <div className="category-container">
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
