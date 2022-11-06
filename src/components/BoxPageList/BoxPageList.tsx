import React from 'react'
import { InCart } from '../../model/model'
import s from './BoxPageList.module.scss'


const BoxPageList = ({price, title, id, image}: InCart) => {
   return (
      <div className={s.wrapper}>
         <div className={s.product_list}>
            <div className={s.imgage}>
               <div className={s.del_item}>x</div>
               <img src={image} />
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.price}>{price}&nbsp;£</div>
         </div>
      </div>
   )
}

export default BoxPageList