import React from 'react';
import styles from './App.module.css'; 
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (

    <div className={styles.App}>
      <BrowserRouter>
        <Navbar />
        </BrowserRouter>
    </div>
  );
} 

export default App;
