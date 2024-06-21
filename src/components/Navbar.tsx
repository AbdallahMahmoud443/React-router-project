import { NavLink } from "react-router-dom";
//* Link component prevent reload of page instead of link
//* NavLink => used to add active property to <a></a> vs Link used for buttom for example
const Navbar = () => {
  return (
    <nav className="max-w-2xl mx-auto mt-10 mb-20 app-navbar">
      <ul className="flex items-center justify-between text-2xl space-x-2">
        <li className="hover:text-[#149eca] ">
          <NavLink className="px-3 py-2 duration-100 " to="/">
            Home
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2 duration-100" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2 duration-100" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2 duration-100" to="/learn">
            Learn
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2 duration-100" to="/contribute">
            Contribute
          </NavLink>
        </li>
        <li className="hover:text-[#149eca] duration-200">
          <NavLink className="px-3 py-2 duration-100" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;