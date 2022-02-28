import React, { Component } from "react";
import { SHOP_DATA } from "../../data/shop.data";
import { CollectionPreview } from "../../components/preview-collection/collection-preview.component";
import './shop.style.scss';

export class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        //console.log(collections)
        return (
            <div className='shop-page'>
                {collections.map(({id, ...collection}) => (<CollectionPreview key={id} {...collection} />))}
            </div>
        )
    }

}