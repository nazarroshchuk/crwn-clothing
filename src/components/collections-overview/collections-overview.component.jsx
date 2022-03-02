import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import { selectDirectoryCollections } from "../../redux/shop/shop.selector";
import { CollectionPreview } from "../preview-collection/collection-preview.component";

export const CollectionsOverview = () => {
    const collections = useSelector(selectDirectoryCollections);

    return (
        <div className='collections-overview'>
            {collections.map(({id, ...collection}) => (
                <CollectionPreview key={id} {...collection} />
            ))}
        </div>
    )
}