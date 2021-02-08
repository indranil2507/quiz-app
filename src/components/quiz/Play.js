import React,{Component} from 'react'
import {Helmet} from 'react-helmet'
import{ FaLightbulb,FaStarHalf} from 'react-icons/fa'
import{ AiOutlineClockCircle} from 'react-icons/ai'
class Play extends Component{
   
    /*constructor(props){
        super(props)
       ;
    }*/
    
    render(){
        return(
            <>
            <Helmet><title>Quiz Page</title></Helmet>
          
            <div className="questions">
            <div className="lifeline-container">
                <p>
                    <span className="lifeline-icon"><FaLightbulb/></span>
                </p>
                <p>
                    <span className="lifeline-icon"><FaStarHalf/></span>
                </p>
            </div>
            <div>
                <p>
                    <span>1 of 15</span>
                    2:15
                <span className="lifeline-icon"><AiOutlineClockCircle/></span>
                </p>
               
            </div>
            <h1>Google was Founded in what year?</h1>
            <div className="options-container">
                <p className="options">1997</p>
                <p className="options">1997</p>
            </div>
            <div className="options-container">
                <p className="options">1997</p>
                <p className="options">1997</p>
            </div>
            <div className="button-container">
                <button>Previous</button>
                <button>Next</button>
                <button>Quit</button>
            </div>
            </div>
            </>
               
            )
    }
        
    
}

export default Play