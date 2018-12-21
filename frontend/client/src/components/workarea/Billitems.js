import React from 'react';

class Billitems extends React.Component{
    state ={
        i_qty:"",
        i_price:"",
        no_qty: 1
    }

    componentDidMount(){
        //this.props.itemDetail.Product.quantity
        this.setState({
            i_qty: this.props.itemDetail.Product.quantity,
            i_price : this.props.itemDetail.Product.price
        })
    }

    incrementQty(prod_id){
        this.setState({
            i_price : (this.state.no_qty + 1) * this.props.itemDetail.Product.price ,
            no_qty : this.state.no_qty + 1
        })
        //find by prod_id
        console.log(prod_id);
        
    }
    decrementQty(prod_id){
        if(this.state.no_qty === 1){
            //pop
            this.props.removeBillItem(prod_id)   
        }else{
            this.setState({
                i_price : (this.state.no_qty - 1) * this.props.itemDetail.Product.price ,
                no_qty : this.state.no_qty - 1
            })
        }
    }
    removeItem(id){
        this.props.removeBillItem(id)
    }

    render(){
        var item = this.props.itemDetail;
        return(
            <React.Fragment>
                <div className="row" key={item.Product.id}>
                    <div className="col-lg-4 c_bill_itemimage">
                        <img src={item.Product.img_url} className="img-responsive"/>
                    </div>
                    <div className="col-lg-8 c_bill_itemdetails">
                        <p className="c_bill_text"><b>{item.Product.name}({item.Product.translated})</b></p>
                        <p className="c_bill_text">{this.state.i_qty} x {this.state.no_qty}<span className="c_item_remove_btn" onClick={this.removeItem.bind(this,item.Product_id)}>&nbsp;</span></p>
                        <p className="c_bill_text">&#8377; {this.state.i_price} &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="text-center">
                                <button className="c_round_btn" onClick={this.decrementQty.bind(this,item.Product_id)}>-</button>
                                <input type="number" value={this.state.no_qty} readOnly style={{width:"40px",textAlign: "right"}} name="qty"/>
                                <button className="c_round_btn" onClick={this.incrementQty.bind(this,item.Product_id)}>+</button>
                            </span>
                        </p>
                    </div>
                </div>
                <hr className="c_bill_linebreak"/>
            </React.Fragment>
        )
    }
}

export default Billitems;