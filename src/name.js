import React from 'react';
function Names(props){
    return(
        <div>

            <h1>My full name is {props.myName} </h1>
            <hr/>
            <p>And i am studing in {props.uniName}</p>
        </div>
    )
}
export default Names;