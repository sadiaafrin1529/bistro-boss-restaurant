import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contextProvider/AuthProvider';
import { IoCartSharp } from "react-icons/io5";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useCart from '../../../../hooks/useCart';


function NavBar() {
  const { user, logout } = useContext(AuthContext);
//   const[cart,setCart]=useState([])
//   const axiosSecure =useAxiosSecure()
//  axiosSecure.get(`/carts?email=${user?.email}`) 
//     .then(res => {
//     setCart(res.data)
//     })
  const [cart]=useCart()
  const handleLogOut = () => {
    logout()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error)
      });
  }
    const navOption = (
      <>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/order/salad"}>Order Food</Link>
        </li>
        <li>
          <Link to={"secure"}>Secure</Link>
        </li>
        <button className="btn">
          <IoCartSharp />
          <div className="badge badge-secondary">+{ cart.length}</div>
        </button>
        {user ? (
          <>
            {/* <img className='w-[50px] h-[50px]' src={user?.photoURL}></img> */}

            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              LogOut
            </button>
            <span>{user?.displayName}</span>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </>
    );
    
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              > 
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
}

export default NavBar