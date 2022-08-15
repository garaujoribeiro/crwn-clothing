import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';
import './CategoriesContainer.styles.scss';
function CategoriesContainer() {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <section className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoriesCard titulo={title} key={id} imageUrl={imageUrl} />
      ))}
    </section>
  );
}

export default CategoriesContainer;
