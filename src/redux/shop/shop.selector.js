import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectDirectoryCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectDirectoryCollections],
        (collections) => collections[collectionUrlParam]
    );

export const selectCollectionsForPreview = createSelector(
    [selectDirectoryCollections],
    collections => Object.keys(collections).map(key => (collections[key]))
);