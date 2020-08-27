import React from "react";
import './App.css';

function Home() {
    return (
        <>
     <div class="container">
       <div class="header"><h2 align="center">Price Tracker</h2></div>
       <div class="content">
        <div> <h3 align="center">Free Price Tracker for Amazon</h3> </div>
        <div> <input type="text" placeholder="Enter URL" /> </div>
        <div> <input type="button" value="CHECK" class="btn" /> </div>
       </div>
    </div>
        </>
    );
};
export default Home;