/* This is the selector of the shop state */
import { createSelector } from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

/* fixed the problem that we do map on object so it is transform object to array */
export const selectShopColllectionForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
);