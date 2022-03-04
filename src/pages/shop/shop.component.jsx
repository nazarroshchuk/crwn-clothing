import React from "react";
import './shop.style.scss';

import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";
import { Route } from 'react-router-dom';
import { CollectionPage } from "../category/collection.component";

const  ShopPage = ({ match }) => {

    return (
        <div className='shop-page'>
            <Route  exact path={`${match.path}`} component={CollectionsOverview} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>

    )
}

export default ShopPage;