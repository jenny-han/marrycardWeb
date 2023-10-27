import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../lib/img/logo2.png'
const CardLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer
        style={{
          background: 'rgb(136, 125, 119)',
          padding: 10,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        <img src={logo} alt="logo" style={{ width: '100px' }} />
        {/* <span style={{ fontFamily: 'Gruppo' }}>
          <Link to="/">CH. WEDDING</Link>
        </span> */}
      </footer>
    </div>
  )
}

export default CardLayout
