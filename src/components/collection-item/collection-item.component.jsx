import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

/* This is the component for the cards in the shop page its include price, button(Add to cart), image */
const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
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
        <CustomButton onClick={() => addItem(item)} className="custom-button" inverted>Add To Cart</CustomButton>
    </div>
    );
};

 const mapDispatchToProps = dispatch => ({
     addItem: item => dispatch(addItem(item))
 })

 export default connect(null, mapDispatchToProps)(CollectionItem);