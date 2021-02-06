import React from 'react';
import {Helmet} from 'react-helmet'
import {Link } from 'react-router-dom'
import { FaCubes } from 'react-icons/fa';

const Home =()=>{
    return (
        <>
        <Helmet><title>QuizApp-Home</title></Helmet>
        <div id="home">
           <section>
               <div style={{textAlign: "center"}}>
                   <span className="cube"><FaCubes/></span>
               </div>
               <h1>Toon-Quiz</h1>
               <div className="play-button-container">
                   <ul>
                       <Link className="play-button"to="/play/instructions">Play</Link>
                       
                   </ul>
               </div>
           </section>
        </div>
    </>
    );
}

export default Home