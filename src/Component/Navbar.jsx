import React, { useEffect } from 'react'
import { useState } from "react"
import {RiFundsFill, RiLuggageDepositLine} from 'react-icons/ri'
import {FaIndianRupeeSign} from 'react-icons/fa6'
import {BsCoin} from 'react-icons/bs'
import {SiCoinmarketcap} from 'react-icons/si'
import{FcSalesPerformance} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Landing from './../pages/Landing';
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const modal = () => {
        setOpen(!open)
    } 
  return (
    <div id='navbar'>
          <div className="nav">
            <div className="logo">
            <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9EcgTvjz2iTXxdSoC1YW36-iQ8mhlovwSQ&usqp=CAU"
          alt="images"
          className="cardimg"
        />
                <p style={{ fontSize: "30px", marginLeft: "20px" }}>InvestPe</p>
                <button style={{marginLeft: "20px" }}>Gateway</button>
            </div>
            <div  className="modal">
                <p style={{ fontSize: "30px" }}><Link to={'/'}>Home</Link></p>
                <a style={{ fontSize: "30px", cursor:"pointer" }} id='pointer' onClick={()=>modal()}>Products <span>&#8595;</span></a>
                <p style={{ fontSize: "30px" }}><Link to={'/landing'}>Landing Page</Link></p>
                <a style={{ fontSize: "30px" }}>AboutUs</a>
                {
                    open&&
                    <div id='modal1' className="box">
                            <button style={{height:'40px',position:'absolute',right:'10px',}} onClick={()=>{modal()}}>X</button>
                        <div>
                            <p style={{ color: "green", fontSize: "20px" }}>INVESTMENTS</p>
                            <div className="modaldiv">
                            <div>  
                                 <RiFundsFill id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                </div>
                                <div>
                                    <h2 >Mutual Funds</h2>
                                    <p className="navtext">E2E infrastructure for mutual fund investing</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                     <FaIndianRupeeSign id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                   
                                </div>
                                <div>
                                    <h2>Indian Equity</h2>
                                    <p className="navtext">Ready-made stock baskets with major broker integrations</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                     <BsCoin id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                </div>
                                <div>
                                    <h2>Digital Gold</h2>
                                    <p className="navtext">Allow your user to buy & sell digital gold</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                <RiLuggageDepositLine id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                </div>
                                <div>
                                    <h2>Fixed Deposits</h2>
                                    <p className="navtext">Book Fds in one-click without opening a bank account</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: "green", fontSize: "20px" }}>DATA</p>
                            <div className="modaldiv">
                                <div>
                                   <SiCoinmarketcap id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                </div>
                                <div>
                                    <h2>Market Research</h2>
                                    <p className="navtext">Deep-tech stock research & analysis</p>
                                </div>
                            </div>
                            <div className="modaldiv">
                                <div>
                                   <FcSalesPerformance id='icons' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}} size={'80px'} color='green'/>
                                </div>
                                <div>
                                    <h2>Historical Performance</h2>
                                    <p className="navtext">Multi timeframe historical data for stocks mutual funds & digital gold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}