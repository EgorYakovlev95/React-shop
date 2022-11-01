import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import s from './CartList.module.scss'

const CartList = () => {
    const items = useAppSelector(state => state.box.itemsInBox)
    const tottalPrice = items.reduce((acc, i) => acc += i.price, 0)

    return (
        <div className={s.cart_list}>
            <div className={s.items}>

                {items.length > 0
                    ? items.map(item => item.title)
                    : 'Корзина пуста'
                }

            </div>
                {items.length > 0
                    ? <div className={s.offer}>
                        <div className={s.total_price}>
                            <span>Итого: </span>
                            <span>{tottalPrice} £</span>
                        </div>
                        <button className={s.order}>
                            Оформить
                        </button>
                      </div>
                    : null
                }
        </div>
    )
}

export default CartList;