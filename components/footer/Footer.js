import React from "react";
import Layout from "./Layout";

function Footer(){
return( 
            <footer>
                
                
                <div class="div-general">  
                   
                    <div class="container">
               
                        <div class="colum1">
                            <h1>Mas informacion</h1>
                             <p> lorem ipsum dolor sit amet, con
                                sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                 n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint o       
                             </p>
                        </div>
                
                        <div class="colum2">
                            <h1>Redes sociales</h1>
                    
                            <div class="row">
                                <img src="icons/face.png" />
                                <label>Sigueme en Facebook </label>
                            </div>

                            <div class="row">
                                <img src="icons/twitter.png" />
                                <label>Sigueme en Twitter </label>
                            </div>

                            <div class="row">
                                <img src="icons/ig.png" />
                                <label>Sigueme en Instagram</label>
                             </div>

                            <div class="row">
                                <img src="icons/printerest.png" />
                                <label>Sigueme en Printerest </label>
                            </div>

                        </div>

                    </div>

                    <div class="containerCr">
                        <div class="copyright">© 2019 Copyright: </div>
                    </div>
                
                
                </div> 

                <style jsx>
                    {`
                    
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: sans-serif; 
          }

          footer{
            width: 100%;  
            background-color: #202020;
            color: #f5f5f5;
          }

          
          .div-general {
            width: 100%;
            margin: auto;
            
          }
          
          .container{
            display: flex;
            justify-content: center;
          }
          
            .colum1{
             margin: 10px 10px 10px 20px;
            }            

          .colum1 h1{
            font-size: 20px;
            text-align: center;
            margin: 15px;
            
          }

          .colum1 p{
            font-size: 14px;
            margin-top: 20px;
          }

          .colum2 {
            max-width:1400px;
            width: 900px;
            margin:10px;
          }
          
          .colum2 h1{
            
            
            font-size:20px;
          }
          
          .row{
            margin-top: 17px;
            display: felx;
          }

        .row img{
            width: 36px;
             height: 36px;
        }

        .row label{
            margin-left:5px; 
            margin-bottom: 10px;
                    }
                    
                    `}
                </style>
            
            </footer>
       
);

}

export default Footer;