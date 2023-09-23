import React from 'react';

const Item = props => {
  return (
    <div className={`item${props.item.purchased ? ' purchased' : ''}`}
    onClick={() => {props.toggleItem(props.item.id)}}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;

//ALSO LOOKS LIKE THIS IN CLASS COMPONENT FORM:

//class Item extends React.component {
//  render() {
//    return(<h1>Hello</h1>)    
//  } 
//}