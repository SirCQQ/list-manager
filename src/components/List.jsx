import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToList,
  clearItemsList,
  removeFromListById,
} from "../Redux/ListAction";
import {Link} from 'react-router-dom'
import { setItem } from "../Redux/ItemAction";
class List extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.addToList({
              id: makeid(5),
              name: makeid(10),
              price: Math.floor(Math.random()*1000),
              created: Date.now(),
              // update:Date.now()
            });
          }}
        >
          Fast Add for Tets
        </button>
        <button
          onClick={() => {
            this.props.clearItemsList();
          }}
        >
          Clear List{" "}
        </button>
        <Link to='/item'>
        <button>
          Add item
        </button>
        </Link>
        <table className="items-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Created</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item) => (
              <tr
                key={item.id}
                onClick={() => {
                  this.props.setItem({ ...item, status: "update" });
                  this.props.history.push('/item',{})
                }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{formatDate(item.created)}</td>
                <td>{item.update && item.uptate!==null? formatDate(item.update):'-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function formatDate(date) {
  let time = new Date(date);
  return `${time.getHours()}:${time.getMinutes()} ${time.getDate()}/${
    time.getMonth() + 1
  }/${time.getFullYear()}`;
}

const mapStateToProps = (state) => ({
  list: state.list,
  item: state.item,
});

const mapDispatchToProps = {
  addToList,
  clearItemsList,
  removeFromListById,
  setItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);



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