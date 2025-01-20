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
          {() => (
              <div className="w-10/12 md:w-6/12 p-4 bg-gray-100 mx-auto mt-2 rounded-lg shadow-lg border-2 border-orange-300">
                <h1 className="text-center font-bold text-3xl mb-4">
                  Project overview
                </h1>
                <p className="text-justify leading-relaxed">
                  This is my first React application, created as part of my
                  learning journey. The application is inspired by Swiggy and
                  built entirely from scratch using React.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Key Features Includes
                </p>
                <ul className="list-disc list-inside pl-4 leading-relaxed">
                  <li>
                    Authentication with <strong className="text-orange-600">firebase</strong>.
                  </li>
                  <li>
                    Restaurant listing with a custom-built search and filtering system, including top-rated restaurants.
                  </li>
                  <li>
                    Restaurant menu list with a custom-built accordion for smooth, user-friendly navigation.
                  </li>
                  <li>
                    Cart feature that integrates with user profiles for personalized experience.
                  </li>
                  <li>
                    Fully responsive UI, ensuring seamless experience across all devices.
                  </li>
                </ul>
                <p className="text-justify leading-relaxed mt-4">
                  What Technologies Were Used In This Project
                </p>
                <ul className="list-disc list-inside pl-4 leading-relaxed">
                  <li>
                    Built with <strong className="text-orange-600">React</strong> components (both class and
                    functional).
                  </li>
                  <li>
                    Used <strong className="text-orange-600">Redux</strong> for state management and{" "}
                    <strong className="text-orange-600">useContext</strong> for passing data across
                    components.
                  </li>
                  <li>
                    Implemented <strong className="text-orange-600">routing</strong> for seamless navigation
                    between pages.
                  </li>
                  <li>
                    Added <strong className="text-orange-600">early return</strong> and{" "}
                    <strong className="text-orange-600">conditional rendering</strong> for better user
                    experience.
                  </li>
                  <li>
                    Created <strong className="text-orange-600">custom hooks</strong> to manage reusable
                    logic.
                  </li>
                  <li>
                    Implemented <strong className="text-orange-600">shimmer loading effects</strong> for a
                    polished UI.
                  </li>
                  <li>
                    Implemented <strong className="text-orange-600">Higher order compoenent</strong> for the
                    restaurant cards.
                  </li>
                  <li>
                    Built features like a filter button to sort restaurants by
                    rating and a search bar to find restaurants by name.
                  </li>
                  <li>
                    Designed a <strong className="text-orange-600">cart system</strong> for users to add and
                    manage items.
                  </li>
                  <li>
                    Used <strong className="text-orange-600">Jest</strong> for testing components and
                    functionality.
                  </li>
                  <li>
                    Styled using <strong className="text-orange-600">Tailwind CSS</strong> for a modern and
                    responsive design.
                  </li>
                  <li>
                    Configured and optimized the application using{" "}
                    <strong className="text-orange-600">Parcel Bundler</strong>.
                  </li>
                </ul>
                <p className="text-justify leading-relaxed mt-4">
                  This project has been a great learning experience, combining
                  multiple React concepts and tools to build a functional and
                  feature-rich application.
                </p>
              </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
