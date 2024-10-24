import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { Filters } from "../components";
import {NavLinks} from "../components"
const Navbar = () => {
  return (
    <nav className="bg-white flex justify-between ">
      <div className="navbar align-element ">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex font-bold text-3xl items-center "
          >
            SHOP.CO
          </NavLink>

          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 text-white rounded-box w-52"
            >
            <NavLinks/>

              
            </ul>

            {/* Nav links components */}

          </div>
        </div>
        <div >
          <Filters />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            {/* <li><Link to='/products'>Shop</Link></li>
            <li><Link>New Arrival</Link></li>
            <li><Link>On Sale</Link></li> */}

            <NavLinks/>


          </ul>
        </div>

        <div className="navbar-end">
          {/* THEME ICONS */}
          {/* CART LINK*/}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
