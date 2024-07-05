import './App.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from './components/Header';
import AlertDialog from './components/Instructions';
import Table from './components/Table';
import { GameProvider } from './Context/GameProvider';



function App() {


  return (
    <>
    <GameProvider>
    <Header />
    <Table />
  </GameProvider>
    
    </>
  )
}
export default App
