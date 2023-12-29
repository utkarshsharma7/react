import { useState } from 'react'
import './App.css'
import BGCHANGER from './BGCHANGER';
// import Card from './Components/Card'
// import Counter from './Counter'

function App() {
  const image = "https://images.pexels.com/photos/5724972/pexels-photo-5724972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let myObj = {
    userName: "Utkarsh",
    age: 22
  }
  return (
    <>
      

      {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
      <Card username="somethingg" object = {myObj} btnTxt = "Hindi ke liye 2 dabaye"/>
      <Card username="somethingg" object = {myObj}/> */}
      {/* <Counter /> */}
      <BGCHANGER/>

      
    </>
  );
}

export default App
