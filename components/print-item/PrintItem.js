import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux'

class PrintItem extends React.Component{
constructor(){
    super();
    this.state = {
      amount: 0,
      addedToCart: false
    }
  }

  handleChange =(event)=>{
    this.setState({
      amount: event.target.value 
    });
  }

  addToCart = (event) =>{
    const { title, id } = this.props.print
    const { amount } = this.state

    let price = 35;
    if(amount != 2){
      price = 20;
    };

    this.props.addItemToCart({
      type: 'print',
      title,
      id,
      amount,
      price
    });

    console.log('Added');

    this.setState({
      addedToCart: true
    });
  }
render(){
  const { print } = this.props
  const { url } = print.image.fields.file;
  const { title } = print;
  const { amount, addedToCart } = this.state

  let price = 35;
  if(amount != 2){
    price = 20;
  }

  return <div className='print-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${url})`
      }}
    />
      <span className='title'>{title}</span>
      <div className="amount-div">
         <label>AMOUNT:</label>
         <input 
           className="amount-input" 
           type="number" 
           name="amount" 
           min="1" 
           max="2"
           onChange={this.handleChange}
           />
         <label>PRICE: {price}$</label>
      </div>
    <div className="buttons">
        <CustomButton disabled={addedToCart}>CHECKOUT</CustomButton>
        <div className="margin-div"></div>
        <span onClick={this.addToCart}>
          <CustomButton>{addedToCart ? 'ADDED' : 'ADD TO CART'}</CustomButton>
        </span>
    </div>
    <style jsx>
      {`
        .amount-div{
          content-align: center;
        }
        .amount-div label{
          margin-right: 5px;
        }
        .amount-input{
          margin-right: 5px;
          width:20%;
        }
        .print-item {
          width: 90%;
          display: flex;
          flex-direction: column;
          height: 500px;
          align-items: center;
          margin-bottom: 20%;
          margin-right: 10%;
        }

        .margin-div{
          margin-bottom:5%;
        }

        .buttons{
          margin: 5% 0;
          display: flex;
          flex-direction: column;
        }

  .image {
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    display: block;
    margin: 5px auto;
  }

  .print-footer {
    width: 100%;
    height: 5%;
    display: block;
    justify-content: space-between;

  }
    .title {
      font-size: 18px;
      text-align: center;
      width: 100%;
      margin-bottom: 15px;
    }
`}
    </style>
  </div>

}
}
function mapStateToProps(state) {
  const { prints } = state
  return { prints }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addItemToCart: (item) => dispatch({
      type: 'ADD_ITEM_TO_CART',
      item
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrintItem);