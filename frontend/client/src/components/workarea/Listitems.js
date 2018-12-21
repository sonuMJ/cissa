import React from 'react';
import Item from './Item';
import Purchaseditem from './Purchaseditem';

class Listitems extends React.Component{
    state = {
        products:[],
        output:[]
    }

    componentDidMount(){
        this.setState({
            products:this.props.productlist
        })
    }
    componentWillReceiveProps(){
    }


    cartButtonAction(product_ID, product_item, qty){
        this.props.addtocart(product_ID, product_item, qty);
    }

    render(){
        var op ="";
        return(
            <div>
                {
                    // Object.keys(this.state.products).map((item,i) => {
                    //     // console.log(this.state.products[item].product_id);
                    //     if(this.props.cart != ""){
                    //         this.props.cart.map(_cart => {
                    //             // console.log(_cart.Product_id);
                    //             if(_cart.Product_id == this.state.products[item].product_id){
                    //                 console.log("same");
                                    
                    //                 op =  <React.Fragment><span>from cart</span><Purchaseditem item={this.state.products[item]} key={i} cartbtnaction={this.cartButtonAction.bind(this)}/></React.Fragment>
                    //             }else{
                    //                 console.log("diff");
                    //                 op = <Item item={this.state.products[item]} key={i} cartbtnaction={this.cartButtonAction.bind(this)}/>
                    //             }
                    //         })
                    //     }else{
                    //         return <Item item={this.state.products[item]} key={i} cartbtnaction={this.cartButtonAction.bind(this)}/>
                    //     }
                    //     return op
                    // })
                }
                {
                    Object.keys(this.state.products).map((item,i) => {
                        return <Item item={this.state.products[item]} cart={this.props.cart} key={i} cartbtnaction={this.cartButtonAction.bind(this)}/>
                    })
                }
            </div>
        )
    }
}

export default Listitems;