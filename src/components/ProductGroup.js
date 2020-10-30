import React from 'react';
import Product from './Product'

import './ProductGroup.css'

class ProductGroup extends React.Component {
    render() {
        return <div className="main-body">

            <div>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    }
}
export default ProductGroup