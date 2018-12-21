import React from 'react';
import Billitems from './Billitems';

class Mybill extends React.Component{

    state ={
        cartItem:[]
    }

    componentWillReceiveProps(){
        setTimeout(() => {
            this.setState({
                cartItem:this.props.cartitems
            })
        }, 100);
    }
    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">MY BILL</div>
                <div className="">
                    <div className="c_cart_items">
                        {
                            this.state.cartItem.map(item => {
                                return(
                                    <Billitems itemDetail={item} removeBillItem={this.props.removeCartItem.bind(this)} key={item.Product.id}/>
                                )
                            })
                        }
                    </div>
                    <span style={{marginTop:"20px"}}>
                        <button className="btn c_bill_btn">Clear Cart</button>
                        <button className="btn c_bill_btn" style={{backgroundColor:"#ffdd00"}}>CHECK OUT</button>
                    </span>
                </div>
            </div>
        )
    }
}

export default Mybill;