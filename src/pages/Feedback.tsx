import React from 'react'
import BottomDescription from '../components/BottomDescription/BottomDescription';
import s from './../styles/feedback.module.scss';

const Feedback = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title_h1}>Обратная связь</h1>
            <div className={s.description}>
                Мы любим наших покупателей, именно поэтому мы всегда на связи! <br />
                Свяжитесь с нами в удобной для вас соц.сети или обратитесь по телефону  +8 (800) 321 23 44
            </div>
            <div className={s.icons}>
                <div className={s.icons_current}>
                    <img className={s.img} src={require("./../assets/feedbackPage/whatsapp.png")} alt="" />
                    <p className={s.title}>WhatsApp</p>
                </div>
                <div className={s.icons_current}>
                    <img className={s.img} src={require("./../assets/feedbackPage/instagram.png")} alt="" />
                    <p className={s.title}>Instagram</p>
                </div>
                <div className={s.icons_current}>
                    <img className={s.img} src={require("./../assets/feedbackPage/YOUTUBE.png")} alt="" />
                    <p className={s.title}>YouTube</p>
                </div>
            </div>
           <BottomDescription/>
        </div>
    )
}

export default Feedback;