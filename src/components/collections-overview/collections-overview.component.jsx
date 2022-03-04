import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { CollectionPreview } from "../preview-collection/collection-preview.component";

export const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <div className='collections-overview'>
            {collections.map((el) => (
                <CollectionPreview key={el.id} {...el} />
            ))}
        </div>
    )
}