import React from 'react'
import { useState } from 'react';
import "../Style/Home.css"
import startVideo from "../assets/StartVideo.mp4"
import endVideo from "../assets/EndVideo.mp4"
import intrtoImg from "../assets/CocaCola.png"
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
const Home = () => {
  const [counter,setCounter]=useState(5);
  const [countf,setCountef]=useState(false);
  function updatetime()
  {
    if(counter>=1)
    {
      console.log(counter)
      setCounter(counter-1);
    }
    else{
      setCountef(true);
    }
  }
  setTimeout(updatetime,2000);
  const reviewVideo=()=>{
    var Home=document.getElementById("Home");
    var endDiv=document.getElementById("endDiv");
    var endVideo=document.getElementById("endVideo");
    Home.style.display="none";
    endDiv.style.display="flex";
    endVideo.play();
    endVideo.addEventListener("ended",function(){
      window.open("https://www.coca-cola.com/in/en", "_self");
     })
  }
  const videoPlay=()=>{
   var startVideo=document.getElementById("startVideo");
   var Home=document.getElementById("Home");
   var startVideoDiv=document.getElementById("startVideoDiv");
   startVideoDiv.style.display="inline-block";
   startVideo.play();
   var count=document.getElementById("count");
   count.style.display="none";
   startVideo.addEventListener("ended",function(){
    startVideoDiv.style.display="none";
    Home.style.display="inline-block";
   })
  }
  return (
    <>
    <div className="main">
      <div className="count" id='count'>
        <div className="counterBox">
     {
      countf==false?<h3>{counter}</h3>:<h3 onClick={videoPlay}>Start</h3>
     } 
        </div>
      </div>
      <div className="startVideoDiv" id='startVideoDiv'>
        <video id='startVideo' className='startVideo' src={startVideo}></video>
      </div>
      <div className="Home" id="Home">
      <div className="nav">
        <div className="logo">
          <img className='logoimg' src={logo} alt="Coca Cola" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="introDiv">
        <div className="intro">
          <h3 className='introHead'>Taste the Feeling</h3>
          <div className="introCont">
          Welcome to the vibrant world of Coca-Cola! Explore the legacy of this iconic beverage through our website, where we share the rich history, diverse flavors, and joyous moments that define the Coca-Cola experience. Join us in celebrating the timeless refreshment that has been bringing people together for generations. Here's to the fizzy, flavorful journey that transcends borders and cultures welcome to the essence of Coca-Cola!
          <button onClick={reviewVideo} className='introBtn'>Click Here</button>
          </div>
        </div>
        <div className="introImg">
          <img className='introCocaImg' src={intrtoImg} alt="CocaCola" />
        </div>
      </div>
      </div>
      <div className="endDiv" id='endDiv'>
        <video id='endVideo' className='endVideo' src={endVideo}></video>
      </div>
    </div>
    </>
  )
}

export default Home
