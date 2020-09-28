// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

// Our Components
import CollectionItem from '../../components/collection-item/collection-item.component';

// Styles
import { CollectionContainer, CollectionTitle, Collectionitems } from './collection.styles';

/* This is the page of each category that we have in our shop */
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return(
    <CollectionContainer>
        <CollectionTitle className='title'>{title}</CollectionTitle>
        <Collectionitems className="items">
            {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
        </Collectionitems>
    </CollectionContainer>
    )
};

// Redux Functions
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);