import React from 'react'


const Header = () => {
  return (
    <div className="headerSection" >
      <div className="left">
        <div className="title">
          <h2>Shopping Mall</h2>
        </div>
      </div>

      <div className="center">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder='search...' />
      </div>

      <div className="right">

        <div className="signin">
          Signin / signup
        </div>

        <div className="cart">Cart</div>

      </div>
    </div>
  )
}

export default Header
