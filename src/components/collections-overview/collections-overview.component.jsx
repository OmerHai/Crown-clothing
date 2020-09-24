/* THis is componet for all the shop overview(before we choose one catagory) */
import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopColllectionForPreview } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss'
/* Component for shop page */
const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopColllectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);