import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {}

  render() {
    return (
      <div>
        <UserContext.Consumer>
            {(data) => (
                <div>
                    <h1>About us</h1>
                    <h2>{data.logginedUser}</h2>
                    <p>{data.address}</p>
                </div>
            )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
