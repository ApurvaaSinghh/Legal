import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {

    // Icons
   

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                      <span>Legal</span>
                    </h3>
                    <p></p>
                    <div className="btn_wrapper">
                        
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} style={{height:"500px", width:"1500px"}} alt="Banner_image" />
                    </div>
                
                       
                        <h4></h4>
                    </div>
                 
                   
                        <h4></h4>
                    </div>
                   
                       
                        <h4></h4>
                    </div>
           
       
    
    </section>
    </>
  )
}
