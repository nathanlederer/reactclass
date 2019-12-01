import React from "react";

function Joke(props)
{
    var text = "";
    if(props.question)
        text = "Question: ";
    return(
        <div>
        <h4 style={{color: "blue"}}>{text} {props.question}</h4>
        <h4 className="answer">{props.punchLine}</h4>
        <hr />
        </div>);
}

export default Joke; 