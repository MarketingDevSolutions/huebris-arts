import React from "react";
import Layout from "../components/layout/Layout";

function About(){

    return(
        <Layout>
        <div className="maincontent">
            <img src="../static/Logo Blue.JPG" alt="Huebris" />

            <h1>
            About the Artist – “Huebris” (Lauren Rust) 
            </h1>

            <div className="Containerp">
                <p>
                Biography: Since I was a child, I have been drawing, painting, taking photos and creating things. I continue this 
                childhood passion with the aim of expressing ideas, opinions and feelings that I have. I go by the name 'Huebris' 
                as an artist because I like anonymity and I identify with the concept of 'hubris' from Greek tragedies; a character 
                flaw marked by excessive pride which brings the hero to her ultimate demise. I changed the spelling of the word to 
                include "hue" in reference to the bright colors I work with. In this site you will see various original works that 
                I have converted into prints, as well as drawings and photos. I am happy to do customized or commission work, if 
                interested, please call or email me and we can set up a time to meet or video call. 
                </p>

            </div>

            <style jsx>
            {`
            
            .maincontent{
               margin: 0 10vw;
            }

            img{
                height: 250px;
                width: 250px;
                
                border-radius: 350px;
                display: block;
                margin:auto;
               /* margin: 10% auto auto;*/
                
                }
                
                img:hover { 

                    opacity: .89;
              
                }
            

            p{
                font-size: 20px;
                text-aling: justify;
            }


            h1 {
                font-size:50px;
                margin-top: 30px;
                text-align: center;
                }


           




            `}
            </style>

         </div>
    </Layout>
    );

}



export default About;


