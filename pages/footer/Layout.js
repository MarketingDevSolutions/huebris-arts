import React from "react";

function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
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
            text-aling: center;
            margin-top: 15px;
          }

          .colum1 p{
            font-size: 14px;
            margin-top: 20px;
          }

          .colum2 {
            max-width:1200px;
            width: 900px;
            margin:10px;
          }
          
          .colum2 h1{
            
            
            font-size:20px;
          }
          
           .row{
            margin-top: 17px;
          }

          .row img{
            width: 35px;
            height: 35px;
          }

        `}</style>
      </div>
    )
  }

export default Layout;