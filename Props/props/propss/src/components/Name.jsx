import React from "react";


const Name = (props)=> {

    return (
        <div>
            <h1>{props.fn}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Hair Color: {props.hc} </h3>

        </div>
    )
}

export default Name;