import React from 'react'
import { useAppDispatch } from '../../hooks/redux'
import { InCart } from '../../model/model'
import { removeFromBox } from '../../store/slices/BoxSlice'
import s from './BoxPageList.module.scss'


const BoxPageList = ({price, title, id, image}: InCart) => {
   const dispatch = useAppDispatch()

   const delItem = (event: React.MouseEvent<HTMLElement>) => {
      dispatch(removeFromBox(id))
   }

   return (
      <div className={s.wrapper}>
         <div className={s.product_list}>
            <div className={s.imgage}>
               <div className={s.del_item} onClick={delItem}>x</div>
               <img src={image} />
            </div>
            <div className={s.title}>{title}</div>
            <div className={s.price}>{price}&nbsp;£</div>
         </div>
      </div>
   )
}

export default BoxPageList