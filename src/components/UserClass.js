import React from "react";
import Sample from './Sample'

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };

    console.log(this.props.name + " Child class component constructor USERCLASS")
  }

  componentDidMount(){
    console.log( this.props.name + " Child class component componentDidMount USERCLASS")
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;

    console.log(name  + " Child class component render USERCLASS")
    return (
      <>
      <Sample name={name}/>
      <h1>Class component</h1>
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <h1>Name from Class component : {name}</h1>
        <h1>Location : {location}</h1>
      </>
    );
  }
}

export default UserClass;
