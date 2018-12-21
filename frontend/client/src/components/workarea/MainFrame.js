import React from 'react';
import Categorylist from './Categorylist';
import Mybill from './Mybill';
import Listitems from './Listitems';
import './product.css';

class Mainframe extends React.Component{
    state = {
        products:[],
        cart:[],
        isFetching : false
    }
    componentDidMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('http://localhost:5000/product/getall')
        .then(res => res.json())
        .then(result => {
            this.setState({
                products:result,
                isFetching: true
            })
        })
    }

    addToCart(product_ID, product_item, qty){
        console.log("cartbtn clicked from parent");
        var purchase = {Product_id: product_ID, Product:product_item, Qty: qty};
        this.setState({
            cart:[...this.state.cart, purchase]
        });
        
        // setTimeout(() => { console.log(this.state.cart); }, 100);
    }
    removeCartItem(prod_id){
        var index = "";
        var cart = [...this.state.cart];
        this.state.cart.map(i => {
            if(i.Product_id === prod_id){
               index = cart.indexOf(i);
               this.setState({
                cart: this.state.cart.filter((_, i) => i !== index)
              });
            }
        })
    }   

    render(){
        
        return(
            <div className="container-fluid">
                <div className="col-lg-2">
                    <Categorylist />
                </div>
                <div className="col-lg-8">
                {
                    this.state.isFetching ? <Listitems productlist={this.state.products} cart={this.state.cart} addtocart={this.addToCart.bind(this)}/> : "Loading...."
                }
                </div>
                <div className="col-lg-2">
                    <Mybill cartitems={this.state.cart} removeCartItem={this.removeCartItem.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Mainframe;