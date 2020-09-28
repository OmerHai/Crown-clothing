// General
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { selectShopColllectionForPreview } from '../../redux/shop/shop.selectors';

// Reselect
import { createStructuredSelector } from 'reselect';

// Our Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// Styles
import { CollectionsOverviewContainer } from './collections-overview.styles';

/* This is componet for all the shop overview(before we choose one catagory) */
const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
    </CollectionsOverviewContainer>
);

// Redux Functions
const mapStateToProps = createStructuredSelector({
    collections: selectShopColllectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);