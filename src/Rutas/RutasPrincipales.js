import React from 'react'
import { Routes, Route, Link, BrowserRouter, Navigate } from 'react-router-dom'
import { Login } from '../Components/Login/Login'
import { Home } from '../Components/Home/Home'
import { Error } from '../Components/Error/Error'
import { Account } from '../Components/Account/Account'
import { Footer } from '../Components/Layout/Footer'
import { Header } from '../Components/Layout/Header'
import './index.scss'
import { Coheader } from '../Components/Layout/Co-header'

export const RutasPrincipales = () => {
  return (
    < BrowserRouter >
      {/* Cabecera o Header */}
      <div className='menu'>
        <Header />
        <Coheader/>
      </div>
      {/* Cuerpo de la pagina */}
      <div className='project'>
        <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>

    </BrowserRouter >
  )
}
