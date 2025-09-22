import './App.css';
import React from 'react'
import ContactBook from './Frontend/Components/ContectBook/ContectBook';
import ContactList from './Frontend/Components/ContectList/ContectList';

const App = () => {
  return (
    <div className='title'>
        <h1>Contact Book</h1>
        <ContactBook />
        <ContactList />
    </div>

  )
}

export default App

