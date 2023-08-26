import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div className='main'>
        <div className="wrapper">
  <div className="container">
    <div className="grid-row">
      <div className="colmun colmun-left">
        <img src="image-left.png" alt="image-left"/>
        <h1 className="px-spc-b-20">We can't find the page you are looking for.</h1>
        <span className="px-spc-b-20">This page has been relocated or removed.</span>
        <Link to={'/'}>
        <button className="go-home"><i className="fa fa-home"></i> Go Home</button>
        </Link>
      </div>
      <div className="colmun colmun-right">
        <img src="right-shape.png" alt="right-shape"/>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
