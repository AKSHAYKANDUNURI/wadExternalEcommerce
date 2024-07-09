import React from 'react';
import './catalogue.css';

const items = [
  { id: 1, name: 'Item 1',  price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3',  price: '$30', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Item 1',  price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Item 2',  price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Item 3',  price: '$30', imageUrl: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Item 1',  price: '$10', imageUrl: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Item 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Item 3',  price: '$30', imageUrl: 'https://via.placeholder.com/150' },
 
];

const Catalogue = () => {
  return (
    <div className="catalogue">
      {items.map(item => (
        <div key={item.id} className="card">
          <img src={item.imageUrl} alt={item.name} />
          <div className="card-content">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalogue;
