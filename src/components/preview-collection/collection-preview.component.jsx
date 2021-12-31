import React from "react";
import './collection-preview.styles.scss'
import { CollectionItem } from "./collection-item.component";

export const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.slice(0,4).map(({id, ...item}) => (
                        <CollectionItem key={id} {...item}/>
                    ))
                }
            </div>
        </div>
    )
}