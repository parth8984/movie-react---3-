
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./App.css"
import { hover } from "@testing-library/user-event/dist/hover";

class VideoCard extends React.Component{
    
    
    render(){
        return(
            <>
          
            <div id="sub-div">
            <img  src= { this.props.image } />
            <div id="content">
            <p>{this.props.Title}</p>
            </div>
        
           
            </div> 
    
            </>
         
    
    
    

        )
    }
}

export default VideoCard;

// = {this.props.Image}
{/* 
{/* 
// function VideoCard(props){ */}
{/* //     return(
//         <>
//         <div className='video-card'>
//         <img className='videothumbnil' */}
{/* //         src= {props.thumbnailUrl}/>
//        <h3>{props.title}</h3>
//        <p  id="Auther">{props.likes} <span id="Date">| {props.views }</span></p>
//        <div id="Description"> 
//        <div>{props.channelName}</div>
//         </div>
//        </div> */}
      
      
        
//       </>
      
//     );
// }

// export default VideoCard;


