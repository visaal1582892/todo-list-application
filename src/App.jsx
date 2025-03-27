import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import MainBody from './components/MainBody';

function App() {

  return (
    <div className='flex flex-col w-[100%] items-center justify-start'>
      <Header />
      <MainBody />
    </div>
  )
}

export default App
