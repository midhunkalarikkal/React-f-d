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
            <div className="w-10/12 md:w-6/12 p-4 bg-gray-200 mx-auto mt-2 rounded-lg shadow-lg">
              <h1 className="text-center font-bold text-3xl mb-4">About Us</h1>
              <p className="text-justify leading-relaxed">
                This is my first React application, created for study purposes.
                The application is inspired by Swiggy and built from scratch. It
                uses the Swiggy API to fetch a list of restaurants and their
                respective dishes.
              </p>
              <p className="text-justify leading-relaxed mt-4">
                Key features include:
              </p>
              <ul className="list-disc list-inside pl-4 leading-relaxed">
                <li>
                  Built with <strong>React</strong> components (both class and
                  functional).
                </li>
                <li>
                  Used <strong>Redux</strong> for state management and{" "}
                  <strong>useContext</strong> for passing data across
                  components.
                </li>
                <li>
                  Implemented <strong>routing</strong> for seamless navigation
                  between pages.
                </li>
                <li>
                  Added <strong>early return</strong> and{" "}
                  <strong>conditional rendering</strong> for better user
                  experience.
                </li>
                <li>
                  Created <strong>custom hooks</strong> to manage reusable
                  logic.
                </li>
                <li>
                  Implemented <strong>shimmer loading effects</strong> for a
                  polished UI.
                </li>
                <li>
                  Implemented <strong>Higher order compoenent</strong> for the
                  restaurant cards.
                </li>
                <li>
                  Built features like a filter button to sort restaurants by
                  rating and a search bar to find restaurants by name.
                </li>
                <li>
                  Designed a <strong>cart system</strong> for users to add and
                  manage items.
                </li>
                <li>
                  Used <strong>Jest</strong> for testing components and
                  functionality.
                </li>
                <li>
                  Styled using <strong>Tailwind CSS</strong> for a modern and
                  responsive design.
                </li>
                <li>
                  Configured and optimized the application using{" "}
                  <strong>Parcel Bundler</strong>.
                </li>
              </ul>
              <p className="text-justify leading-relaxed mt-4">
                This project has been a great learning experience, combining
                multiple React concepts and tools to build a functional and
                feature-rich application.
              </p>
              <p className="mt-4">Developed by {data.logginedUser}</p>
            </div>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
