import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Midhun",
        location: "Kerala",
        url: "No url",
        bio: "No bio",
        avatar_url: "No url",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/midhunkalarikkal");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, url, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="max-w-lg mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-4">
        <h1 className="text-2xl font-bold text-center mb-6">Dev</h1>
        <div className="flex flex-col items-center space-y-4">
          <img
            src={avatar_url}
            alt="avatar_image"
            className="w-32 h-32 rounded-full shadow-md border-2 border-gray-300"
          />
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Name: {name}
            </h2>
            <h3 className="text-md text-gray-600">Location: {location}</h3>
            <p className="text-sm text-gray-700 mt-2">Bio: {bio}</p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition"
            >
              Visit Profile
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
