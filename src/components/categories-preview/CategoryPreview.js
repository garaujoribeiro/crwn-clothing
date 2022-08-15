import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../productCard/productCard';
import './category-preview.styles.scss';
function CategoryPreview({ title, products, ...props }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`./${title}`}>
          <span className="title">{title.toUpperCase()}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((products) => {
            return <ProductCard key={products.id} product={products} />;
          })}
      </div>
    </div>
  );
}

export default CategoryPreview;
