import React from'react';
import './App.css';
import Profile from'./Profile';
function Shop() {
  return (
    <div className="App">
      <h1>Start Shopping</h1>
      <Profile text={{name:'Turab'}} data="profile data"/>
    </div>
  );
}

export default Shop;
