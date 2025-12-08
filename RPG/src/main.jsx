import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import Search from './search.jsx'
import './index.css'
import Results from './results.jsx'
import Login from './login.jsx'
import Library from './library.jsx'
import Account from './account.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<App />} />
    <Route path="/search" element={<Search />} />
    <Route path="/results" element={<Results />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/library" element={<Library />}/>
    <Route path="/account" element={<Account />}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)
