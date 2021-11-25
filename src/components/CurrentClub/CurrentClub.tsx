import React from 'react'
import './CurrentClub.scss'
import spartak from './images/spartak.svg'
import krasnodar from './images/krasnodar.svg'
import sochi from './images/sochi.svg'
import star from './images/star.svg'
import change from './images/change.svg'

export const CurrentClub = () => {
  return (
    <div className="currentClub">
      <h3 className="currentClub__title">Текущий клуб</h3>
      <div className="currentClub__clubWrapper">
        <img
          src={spartak}
          alt="spartak"
          className="currentClub__spartak currentClub__spartak_large"
        />
        <h3 className="currentClub__clubName">Спартак Москва</h3>
      </div>
      <ul className="currentClub__list">
        <li className="currentClub__favorites">
          <img src={star} alt="star" className="currentClub__star" />
          Избранные клубы
        </li>
        <li className="currentClub__item">
          <img src={spartak} alt="spartak" className="currentClub__spartak" />
          Спартак Москва
        </li>
        <li className="currentClub__item">
          <img src={sochi} alt="sochi" className="currentClub__sochi" />
          Сочи
        </li>
        <li className="currentClub__item">
          <img src={krasnodar} alt="krasnodar" className="currentClub__krasnodar" />
          Краснодар
        </li>
      </ul>
      <button className="currentClub__change-button">
        <img src={change} alt="change" className="currentClub__change-icon" /> Выбрать другой клуб
      </button>
    </div>
  )
}
