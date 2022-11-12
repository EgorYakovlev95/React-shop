import React from 'react'
import BoxPageList from '../components/BoxPageList/BoxPageList'
import { useAppSelector } from '../hooks/redux'
import s from './../styles/BoxPage.module.scss'

const BoxPage = () => {
   const items = useAppSelector(state => state.box.itemsInBox)
   const tottalPrice = items.reduce((acc, i) => acc += (i.price), 0)

   return (
      <div className={s.wrapper}>
         <div className={s.page_title}>Товары в Корзине</div>
         <div className={s.list}>

            {items.length > 0
               ? items.map((item) => 
                  <BoxPageList
                     key={item.id} 
                     price={item.price} 
                     title={item.title}
                     id={item.id}
                     image={item.image}
                  />

               )
               
               : <div className={s.boxIsEmpty}>Нужно добавить что-то в корзину <span>🤔</span></div>
            }

         </div>
         {items.length > 0 && 
            <>
               <div className={s.line}></div>
               <div className={s.price_sum}>
                  Итого к оплате: {tottalPrice.toFixed(2)}&nbsp;£
               </div>
            </>
         }
      </div>
   )
}

export default BoxPage;