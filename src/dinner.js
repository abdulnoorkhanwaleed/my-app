import React from 'react';
function Dinner(props){
    return(
        <div>

            <h1>My full name is =>>{props.myName} </h1>
            <p>And i am studing in {props.uniName}</p>
        </div>
    )
}
export default Dinner;