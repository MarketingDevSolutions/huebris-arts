import React from "react";

function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizin: border-box;
            font-family: sans-serif; 
          }
          footer{
            width: 100%;  
            background-color: #202020;
            color: #f5f5f5;
          }
          .div-general {
            width: 100%;
            max-width: 
          }
        `}</style>
      </div>
    )
  }

export default Layout;