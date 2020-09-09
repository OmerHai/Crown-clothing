import React from 'react';
import './collection-item.styles.scss';

/* This is the component for the cards in the shop page its include price, button(Add to cart), image */
 const CollectionItem = ({ id, name, price, imageUrl }) => (
     <div className='collection-item'>
         <div 
         className='image'
         style={{
             backgroundImage: `url(${imageUrl})`
         }}
         />
         <div className='collection-footer'>
             <span className='name'>{ name }</span>
             <span className='price'>{ price }</span>
         </div>
     </div>
 )
 export default CollectionItem;