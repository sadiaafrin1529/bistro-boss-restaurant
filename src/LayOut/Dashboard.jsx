import React from 'react'
import { FaCalendar, FaDollarSign, FaHome, FaShoppingCart, FaStarAndCrescent } from 'react-icons/fa'
import { FaBook, FaBookBookmark, FaStarOfLife } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-300 ">
        <ul className="menu p-4">
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
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBook/>Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard