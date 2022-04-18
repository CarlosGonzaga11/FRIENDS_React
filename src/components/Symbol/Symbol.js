import React from 'react';
import friends from '../img/friends.png'
import './symbol.css';
function Symbol(){
    return(
        <div className="area-simbolo">
            <div className="simbolo">
                <img src={friends} width="20%" height="20%"/>   
            </div>

        </div>
    );
}


export default Symbol;