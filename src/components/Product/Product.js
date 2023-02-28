import React, { Component } from 'react';
import './Product.css';

const products = [
    {
        emoji: '🍦',
        name: 'ice cream',
        price: 5
      },
      {
        emoji: '🍩',
        name: 'donuts',
        price: 2.5,
      },
      {
        emoji: '🍉',
        name: 'watermelon',
        price: 4
      }
    ];

export default class Product extends Component {

  // @notes: only put information that you expect to change in state
  state = {
    cart: [],
    total: 0
  }

  currencyOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.currencyOptions)
  }

  // @dev different implementation of Digital Ocean 
  // @dev instead of making a copy of the state object then update on top of the local copy of the state object
  // @dev diectly update the global state object within the Product class
  // @dev then pass in the updated global state object to the setState() method
  // @dev reckon would be a better implementation in terms of performance. 
  add = (product) => {
    this.state.cart.push(product.name) 
    this.state.total += (product.price)
    this.setState(this.state)
  }

  remove = () => {
    this.setState({
        cart: []
    })
  }

  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total {this.getTotal()}</div>

        <div>
            {products.map(product => 
                (<div>
                    <div className={product.name}>
                        <div className='product'>
                            <span role="img" aria-label={product.name}>{product.emoji}</span>
                        </div>
                    </div>
                    <button onClick={ () => this.add(product)}>Add</button>
                    <button onClick={this.remove}>Remove</button>
                </div>)
            )}    
        </div>
        
      </div>
    )
  }
}