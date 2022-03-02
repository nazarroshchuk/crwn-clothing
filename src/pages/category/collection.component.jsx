import React from "react";
import './collection.styles.scss';
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { CollectionItem } from "../../components/preview-collection/collection-item.component";

export const CollectionPage = ({ match }) => {
    const collection = useSelector(selectCollection(match.params.collectionId));
    const {items, title } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem  key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}