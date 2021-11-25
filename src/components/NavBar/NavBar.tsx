import React from 'react'
import './NavBar.scss'
import comparison from './images/comparison.svg'
import field from './images/field.svg'
import house from './images/house.svg'
import reports from './images/reports.svg'

export const NavBar = () => {
  return (
    <nav className="navBar">
      <h3 className="navBar__title">Меню</h3>
      <ul className="navBar__list">
        <li className="navBar__item">
          <img src={house} alt="house" className="navBar__icon navBar__house-icon" />
          Обзор команды
        </li>
        <li className="navBar__item">
          <img src={field} alt="field" className="navBar__icon navBar__field-icon" />
          Обзор матча
        </li>
        <li className="navBar__item">
          <img src={comparison} alt="comparison" className="navBar__icon navBar__comparison-icon" />
          Сравнение игроков
        </li>
        <li className="navBar__item">
          <img src={reports} alt="reports" className="navBar__icon navBar__reports-icon" />
          Отчеты
        </li>
      </ul>
    </nav>
  )
}
