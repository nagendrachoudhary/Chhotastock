import React from 'react'
import {GrFacebook, GrInstagram, GrTwitter, GrYoutube} from 'react-icons/gr'
export default function Footer() {
  return (
    <footer>
        <div id='logo'>
            <img style={{width:'200px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9EcgTvjz2iTXxdSoC1YW36-iQ8mhlovwSQ&usqp=CAU'/>
            <h1>INVEST Pe</h1>
        </div>
        <div id='contact'>
          <div>
            <h3>
                Contact Us:
            </h3>
            <p>
                +25470896
                </p>
                <a href="mailto:info@investpe.com">info@investpe.com</a>
          </div>
          <div>
            <h3>
                Follow us on social media!
            </h3>
            <ul className='social-media'>
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-instagram"></i></li>
            </ul>
          </div>
          <div>
            <h3>
                Address:
                </h3>
                <p>
                    1st Floor, Block A, Nairobi West Business District, Kenya

                </p>

          </div>
          <div>
            <h3>
                Copyright &copy; InvestPe 2021 All Rights Reserved.

            </h3>

          </div>
        </div>
        <div id='find'>
            <h3>Find on Us</h3>
            <div>
            <GrFacebook size={50} color='red'/>
            <GrYoutube size={50} color='red'/>
            <GrInstagram size={50} color='red'/>
            <GrTwitter size={50} color='red'/>
            </div>
        </div>
        <div>
            <p>
            ©2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999\WWB2012PTC184187Chhotastock Technologies Private Limited.

Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.

Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing

Registered Office: L151,3rd Floor,CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102,India Forany query / feedback / clarifications, email at contact@chhotastock.com

All Investment ideas, model portfolios &advisory are built by SEBI Registered Investment advisors (RIAs) &Chhotastock only facilitates investments in such baskets, portfolios.
            </p>
        </div>
    </footer>
  )
}
