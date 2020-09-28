// General
import React from 'react';

// Our Components
import CollectionItem from '../collection-item/collection-item.component';

// Styles
import { CollectionPreviewContainer, TitleContainer, PreviewContianer } from './collection-preview.styles';

/* This is component for all the collections that display in shop page(the title hats and all the images below) */
const CollectionPreview = ({ title, items }) =>(
    <CollectionPreviewContainer>
        <TitleContainer className='title'>{title.toUpperCase()}</TitleContainer>
        <PreviewContianer className='preview'>
            {items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item}></CollectionItem>
                ))}
        </PreviewContianer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;