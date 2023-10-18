import React from "react";
import "./App.css"
import VideoCard from "./VideoCard";
import axios from "axios";



class App extends React.Component{

  constructor(){
    super()
   }
   
   state = { users : [],
          filterdUser : [],
             typeFirstName : ""        
  }
  
componentDidMount(){
  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
  .then((Response)=>{
   this.setState({users:Response.data.results})
  })
}
changeFirstName= (e) => {
 var  typeFirstName = e.target.value
  
  var filterdUser = this.state.users.filter((user,i) =>{
    if(user.title.toLowerCase().includes(typeFirstName.toLowerCase())){
    return true}
  })
  console.log(filterdUser)
  this.setState({filterdUser , typeFirstName})
  }

  render(){
    const imgPath = "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    return(
      <>
      <input  type = "search" value={this.state.typeFirstName} onChange={(e) => {this.changeFirstName(e)}} placeholder="Search for Movie Titel ..."/>
      <div className="video-card">
        
      {this.state.filterdUser.length > 0 ?
         this.state.filterdUser.map((Project,i) => {
          return  <VideoCard  image = { imgPath + Project.poster_path}  Title = {Project.title} />
         }) :
      this.state.users.map((Project,i) => {
       return  <VideoCard  image = { imgPath + Project.poster_path}  Title = {Project.title} />
      })}
        </div>
        
      </>
    )}
    /* return  <VideoCard key={i} 
    Name = {Project.titel}/> */}
  {/* //   return(
  //   <>
  //   <input placeholder="Search for Movie Titel ..."/>
  //   {/* <VideoCard/> */}
     {/* <>
        <div className="video-card">
      <div id="sub-div">
       <img src="https://t3.ftcdn.net/jpg/04/70/37/00/360_F_470370030_TxVCOsONUxh659YzwP2wCkX0ijAetDh9.jpg" />
       <p> Name : </p>
       {this.state.user.map((users,i) => { */} 
     {/* return <p key={i}> {users.name}</p> 
         </div>
        </div> */}
   {/* {this.state.user.map((users,i) => { */}
    {/* return <p key={i}> {users.name}</p> 
         */}
 

export default App;

