import React from 'react'
import { Badge, Button } from 'react-bootstrap';


class Product extends React.Component {
    state = {
        productCount: 0
    }

    addProductCount = () => {
        this.setState({
            productCount: this.state.productCount + 1
        })
    }

    substractProductCount = () => {
        if (this.state.productCount > 0) {
            this.setState({
                productCount: this.state.productCount - 1
            })
        }
    }
  

    render() {
        return <div>
            <div>
                Reset Button
            </div>
            <div >
                {this.state.productCount === 0 ?
                    <Badge variant="warning m-2" >Zero</Badge>
                    :
                    <Badge variant="primary m-2" >{this.state.productCount}</Badge>
                }
                <Button variant="dark m-2" size="sm" onClick={this.addProductCount}>+</Button>
                <Button variant="dark m-2" size="sm" onClick={this.substractProductCount}>-</Button>
                <Button variant="danger m-2" size="sm" onClick={this.deleteEntireComponent}>Delete</Button>
            </div>
        </div>
    }
}

export default Product