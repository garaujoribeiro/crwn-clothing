import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
          <Link to={`/shop/${titulo}`}>
            <h2>{titulo}</h2>
          </Link>
          <p>Shop Now</p>
        </article>
      </div>
    </>
  );
}

export default CategoriesCard;
