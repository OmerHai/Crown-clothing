import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

/* This is component for all the collections that display in shop page(the title hats and all the images below) */
const CollectionPreview = ({ title, items }) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id}{...otherItemProps}></CollectionItem>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;