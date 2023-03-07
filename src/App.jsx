import React from "react";
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Footer from "./Footer"
import ItemDescription from "./ItemDescription";
import PostLists from "./PostLists";
  function App (){  
        return(
        <>
        <NavBar />
        <MainContent />  
        <ItemDescription
            name="shopCollection"/> 
        <PostLists />  
        <Footer />                    
        </>
        )
    };
export default App
