import React,{Component,Fragment} from 'react';
import { Link } from  'react-router-dom';
import {Helmet} from 'react-helmet'
const QuizInstructions=()=>{
    return(
        <>
        <Helmet><title>Instructions</title></Helmet>
        <div className="instructions container">
            <h1>How to Play the Game</h1>
            <p> Ensure you read this guide from start to finish</p>
            <ul className="browser-default" id="main-list">
                <li>This is one of the many useless instructions in this page</li>
                <li>This is one of the many useless instructions in this page</li>
                <li>This is one of the many useless instructions in this page</li>
                <li>This is one of the many useless instructions in this page</li>
            </ul>
            <div className="button">
                <span className="left">
                    <Link to = "/">No, take me back</Link>
                </span>
                <span className="right">
                    <Link to = "/play">Okay, Lets do this</Link>
                </span>
            </div>
        </div>
        </>
    );
    
}

export default QuizInstructions