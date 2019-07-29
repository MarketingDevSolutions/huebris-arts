import React from "react";
import './footer.styles.css';

function Footer(){
    return( 
            <footer>
                <div className="div-general">  
                    <div className="container">
                        <div className="column-1">
                            <h1>More Information</h1>
                             <p> lorem ipsum dolor sit amet, con
                                sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                 n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                 Duis aute irure dolor
                                 n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                 Duis aute irure dolor
                                 n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                             </p>
                        </div>
                
                        <div className="column-2">
                            <h1>Social Networks</h1>
                            <div className="row">
                               <a href="https://www.facebook.com/huebris.arts" target="_blank">
                                  <img src="./../../static/face.png"/>
                               </a> 
                                <label>Follow me on Facebook </label>
                            </div>
                            <div className="row">
                                <a href="https://www.instagram.com/huebris.arts/" target="_blank">
                                  <img src="./../../static/ig.png" />
                                </a>
                                <label>Follow me on Instagram </label>
                            </div>
                        </div>
                    </div>
                    <div className="containerCr">
                        <div className="copyright"><b>© 2019. Huebris Arts. All rights reserved.</b></div>
                    </div>
                </div> 
            </footer>
           
 );

}

export default Footer;