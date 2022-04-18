import React from 'react';

import  './style.css'
import backgroundf from "../img/backgroundf.png";
function Background(){
    return(

        <div className="back">
            <div className="background-f">
            <img src={backgroundf} width="100%" height="100%" />
            </div>
            <div className="gradient"></div>
        </div>
       
    );

}

export default Background;