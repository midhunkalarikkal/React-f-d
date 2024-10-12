import {LOGO} from '../utils/constants'

export const Header = () => {
    return (
      <nav className="header">
        <div className="logo-container">
          <img
            src={LOGO}
            alter=""
            className="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="" className="nav-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Explore
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Cart
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
