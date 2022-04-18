import './button.css'
import React from 'react'
import { Link } from "react-router-dom";

function Button(){
    return(
        <div className="button">
          <Link to="/seasons">
            
              <button className="button-watch"><bold>Assistir agora</bold></button>
       

          </Link>
     
        </div>
    );
}

export default Button;