import React, { useState } from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: ''

    }
  }

  handleChanges = e => {
    // update state with each keystroke
    e.preventDefault();
    this.setState({...this.state, item: e.target.value})
  };

  // class property to submit form
  submitForm = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    this.setState({...this.state, item: ''})
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges}/>
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;

//ALSO LOOKS LIKE THIS IN FUNCTIONAL COMPONENT FORM:

// const ListForm = props => {
//   return(
//     <form>
//       {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
//       <input type="text" name="item" />
//       <button>Add</button>
//     </form>
//   )
// }


//Instead of this:
// const ListForm = () => {
//   const [item, setItem] = useState(null);
//   const updateItem = (i) => {
//     setItem(i);
//   } 
// }
//REFER TO THIS.STATE OBJECT
