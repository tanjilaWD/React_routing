import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'red' : 'black'
            })}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'red' : 'black'
            })}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/services" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'red' : 'black'
            })}
          >
            Services
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
