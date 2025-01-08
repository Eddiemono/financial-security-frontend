import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contextApi/AuthContext';
import { TransactionContextProvider } from './contextApi/TransactionContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <AuthContextProvider>
  <TransactionContextProvider>
  <BrowserRouter>
  <Routes>
  
  <Route path='/*' element={<App />}/>

    </Routes>
  </BrowserRouter>
  </TransactionContextProvider>
  </AuthContextProvider>
  </React.StrictMode>
);


