import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserInput from "./components/UserInput";
import TitleLists from "./components/TitleLists";

function App() {


  return (
    <>
      <UserInput />
      <TitleLists />
    </>
  )
}

export default App
