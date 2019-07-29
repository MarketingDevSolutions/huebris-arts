import React from "react";



function Footer(){
return( 
         
            <footer>
                
                
                <div className="div-general">  
                   
                    <div className="container">
               
                        <div className="colum1">
                            <h1>Mas informacion</h1>
                             <p> lorem ipsum dolor sit amet, con
                                sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                 n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              Excepteur sint o       
                             </p>
                        </div>
                
                        <div className="colum2">
                            <h1>Redes sociales</h1>
                    
                            <div className="row">
                                <img src="/face.png"/>
                                <label>Sigueme en Facebook </label>
                            </div>

                            <div className="row">
                                <img src="ig.PNG" />
                                <label>Sigueme en Instagram </label>
                            </div>

                            

                        </div>

                    </div>

                    <div className="containerCr">
                        <div className="copyright">© 2019 Copyright: </div>
                    </div>
                
                
                </div> 

                <style jsx>
                    {`
                    
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            
          }

          footer{
            width: 100%; 
            margin-top: 70vh;
            
          }


          .div-general {
            
            width: 100%;
          
          }
          
          .container{
            display:flex;
            
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
            margin:10px 10px 10px 15%;
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