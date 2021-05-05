import React, { Component } from 'react'
import { connect } from 'react-redux'
import {clearItem} from '../Redux/ItemAction'
import {updateItemById,addToList} from '../Redux/ListAction'

class Item extends Component {
    constructor(props){
      super(props)
      this.state={
        id:'',
        name:'',
        price:''
      }
      this.onChange=this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }

    componentDidMount(){
      let {item}= this.props
      if(item.status==='update'){
        this.setState({...item})
      }
      else{
        this.setState({id:makeid(5)})
      }
    }

    onChange(e){
      this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
      e.preventDefault();
      if(this.props.item.status==='update'){
        this.props.updateItemById({...this.state,update:Date.now()})
        this.props.clearItem()
        this.props.history.push("/")
      }
      else{
        this.props.addToList({...this.state,created:formatSaveDate(Date.now())})
        this.props.clearItem()
        this.props.history.push("/")
      }
    }

  render() {
    return (
      <div className='container'>
        <form className='item-form' onSubmit={this.onSubmit}>
          <label>
            Name
            <input type="text" placeholder='Name of the product ' required value={this.state.name}name="name" onChange={this.onChange}/>
          </label>
          <label>
            Price
            <input type="number" placeholder='Price of the product ' required value={this.state.price}name="price" onChange={this.onChange} min='1'/>
          </label>
          <div className='btn-group'>
          <button type="button" onClick={()=>{
            this.props.clearItem()
            this.props.history.push("/")
          }}> Back </button>
          <button type="submit">{this.props.item.status==="create"? "Add to list":"Update"}</button>
          </div>
        </form>
        
      </div>
    )
  }
}



const mapStateToProps=state=>({
  item:state.item
})
const mapDispatchToProps ={
  clearItem,
  updateItemById,
  addToList
}
export default connect(mapStateToProps,mapDispatchToProps)(Item)



function makeid(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * 
charactersLength)));
 }
 return result.join('');
}


function formatSaveDate(date){
  let newDate= new Date(date)
  return `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
}