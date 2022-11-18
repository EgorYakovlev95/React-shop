import React from 'react'
import BottomDescription from '../components/BottomDescription/BottomDescription';
import s from './../styles/feedback.module.scss';
import WhatsappImage from './../assets/feedbackPage/whatsapp.png'
import InstagramImage from './../assets/feedbackPage/instagram.png'
import YoutubeImage from './../assets/feedbackPage/YOUTUBE.png'

const Feedback = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title_h1}>Обратная связь</h1>
            <div className={s.description}>
                Мы любим наших покупателей, именно поэтому мы всегда на связи! <br />
                Свяжитесь с нами в удобной для вас соц.сети или обратитесь по телефону&nbsp;+8&nbsp;(800)&nbsp;321&nbsp;23&nbsp;44
            </div>
            <div className={s.icons}>
                <div className={s.icons_current}>
                    <img className={s.img} src={WhatsappImage} alt="" />
                    <p className={s.title}>WhatsApp</p>
                </div>
                <div className={s.icons_current}>
                    <img className={s.img} src={InstagramImage} alt="" />
                    <p className={s.title}>Instagram</p>
                </div>
                <div className={s.icons_current}>
                    <img className={s.img} src={YoutubeImage} alt="" />
                    <p className={s.title}>YouTube</p>
                </div>
            </div>
           <BottomDescription/>
        </div>
    )
}

export default Feedback;