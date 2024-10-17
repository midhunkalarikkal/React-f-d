import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo : {
        name : "Midhun",
        location : "Kerala",
        url : "No url",
        bio : "No bio",
        avatar_url : "No url"
      }
    };

  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/midhunkalarikkal")
    const json = await data.json()
    this.setState({
        userInfo : json
    })
    console.log(json)
  }

  render() {
    const {name , location, url , avatar_url, bio} = this.state.userInfo;
    return (
      <>
      <h1>Class component</h1>
        <h1>Name : {name}</h1>
        <h1>Location : {location}</h1>
        <h1>Bio : {bio}</h1>
        <h1>Url : {url}</h1>
        <img src={avatar_url} alt="avatar_image" />
      </>
    );
  }
}

export default UserClass;
