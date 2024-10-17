import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <>
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
