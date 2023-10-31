import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../lib/img/favicon.png'
const Layout = () => {
  return (
    <div>
      <header
        style={{
          background: '#D9D9D9',
          padding: 10,
          fontSize: 24,
          textAlign: 'center',
        }}
      >
        <span style={{ fontFamily: 'Gruppo' }}>
          <Link to="/">
            <img src={logo} style={{ width: '30px' }} />
          </Link>
        </span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
