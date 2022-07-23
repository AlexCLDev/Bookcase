import React from 'react'
import { Footer } from '../Layout/Footer'
import { Header } from '../Layout/Header'
import './index.scss'
import { Fragment } from 'react'

export const Home = () => {
  return (
    <div className='home'>
      <section className='content'>
        <div className='button'></div>
        <div className='button'></div>
        <div className='button  '></div>
      </section>

      <section className='menu1'>
        <div className='items'>
          <p>Hola</p>
        </div>
        <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>
      </section>

      <section className='menu2'>
      <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>
        <div className='items'></div>
      </section>
    </div>
  )
}
