import React from 'react'
import './SideBar.scss'
import logo from './images/logo.svg'
import message from './images/message.svg'
import { NavBar } from '../NavBar'
import { CurrentClub } from '../CurrentClub'

export const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBar__container">
        <img src={logo} alt="logo" className="sideBar__logo" />
        <div className="sideBar__greyLine"></div>
        <NavBar />
        <div className="sideBar__greyLine"></div>
        <CurrentClub />
        <div className="sideBar__greyLine"></div>
      </div>
      <button className="sideBar__button">
        <img src={message} alt="message" className="sideBar__message-icon" /> Дать обратную связь
      </button>
    </aside>
  )
}
