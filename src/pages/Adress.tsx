import React from 'react'
import BottomDescription from '../components/BottomDescription/BottomDescription';
import s from './../styles/adress.module.scss'
import AdressImage from './../assets/adressPage/image1.jpg'

const Adress = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title_h1}>Адреса магазинов</h1>
            <div className={s.adress}>
                <img className={s.img} src={AdressImage} alt="" />
                <p className={s.text}>Москва, Чонгарский бульвар, 7 <br /> Ежедневно, 10:00 - 22:00</p>
            </div>
            <BottomDescription/>
        </div>
    )
}

export default Adress;