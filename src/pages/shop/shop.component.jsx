import React, { Component } from "react";
import { CollectionPreview } from "../../components/preview-collection/collection-preview.component";
import './shop.style.scss';
import { connect } from "react-redux";

export class ShopPage extends Component {

    render() {
        const { collections } = this.props

        return (
            <div className='shop-page'>
                {collections.map(({id, ...collection}) => (
                    <CollectionPreview key={id} {...collection} />
                ))}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        collections: state.directory.collection
    }
}

export default connect(mapStateToProps)(ShopPage);