import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Item } from '../../model/model'
import { removeFromBox } from '../../store/slices/BoxSlice'
import s from './BoxItem.module.scss'


const BoxItem = ({price, title, id}: Item) => {
   const dispatch = useAppDispatch()
   const items = useAppSelector(state => state.box.itemsInBox)

   const deleteItem = (event: React.MouseEvent<HTMLElement>) => {
      dispatch(removeFromBox(id))
   }

   return (
      <div className={s.wrapper}>
         <div className={s.all_order}>
            <div className={s.title_block}>
               <div className={s.title}>
                  {title}
                  <div className={s.del_item} onClick={deleteItem}>x</div>
               </div>
            </div>
            <div className={s.price}>{price}&nbsp;£</div>
         </div>
         <div className={s.line}></div>
      </div>
   )
}

export default BoxItem;