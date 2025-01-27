import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Page/Home/Shared/Footer/Footer'
import NavBar from '../Page/Home/Shared/NavBar/NavBar'
import { Toaster } from 'sonner'

function Main() {
  const loaction = useLocation()
  // console.log(location.pathname)
  const noHeadrFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeadrFooter || <NavBar />}
      <Outlet />
      {noHeadrFooter || <Footer />}

      <Toaster position="top-center" richColors />
    </div>
  );
}

export default Main