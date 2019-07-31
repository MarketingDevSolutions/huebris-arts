import React from "react";
import Layout from "../components/layout/Layout";

function About(){

    return(
        <Layout title="About | Huebris Arts">
        <div className="maincontent">
            <img src="../static/huebris.png" alt="Huebris" className="girl"/>

            <h1>
            Huebris (Lauren Rust) 
            </h1>

            <div className="Containerp">
                <p>
                Since I was a child, I have been drawing, painting, taking photos and creating things. I continue this 
                childhood passion with the aim of expressing ideas, opinions and feelings that I have. I go by the name 'Huebris' 
                as an artist because I like anonymity and I identify with the concept of 'hubris' from Greek tragedies; a character 
                flaw marked by excessive pride which brings the hero to her ultimate demise. I changed the spelling of the word to 
                include "hue" in reference to the bright colors I work with. In this site you will see various original works that 
                I have converted into prints, as well as drawings and photos. I am happy to do customized or commission work, if 
                interested, please call or email me and we can set up a time to meet or video call. 
                </p>

            </div>

            <h4>Social Networks</h4>
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

            <style jsx>
            {`

            .girl{
                height: 250px;
                width: 250px;
                border-radius: 350px;
                display: block;
                margin:auto;
                }
            .girl:hover { 
                opacity: .89;
            }
            p{
                font-size: 20px;
                text-align: justify;
            }
            h1 {
                font-size:50px;
                margin-top: 30px;
                text-align: center;
                }

            .column-2 {
              width: 50%;
            }

            .column-2 h1{
              text-align: center;
              font-size:20px;
            }

            .column-2 .row{
              justify-content: center;
              text-align: center;
            }

            h4{
                text-align: center;
            }

            .row{
              margin-top: 17px;
              display: flex;
              justify-content: center;
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

         </div>
    </Layout>
    );

}



export default About;


