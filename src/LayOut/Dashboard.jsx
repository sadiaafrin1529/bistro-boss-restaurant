import React from 'react'
import { FaBars, FaCalendar, FaDollarSign, FaHome, FaShoppingCart, FaStarAndCrescent, FaUsers } from 'react-icons/fa'
import { FaBook, FaBookBookmark, FaStarOfLife } from 'react-icons/fa6';
import { ImSpoonKnife } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
   const isAdmin = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-300 ">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <ImSpoonKnife /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaBars />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook /> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers /> All USers
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendar /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaDollarSign /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStarOfLife /> Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaBookBookmark /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBook />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard