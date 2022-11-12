import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/redux'
import BoxItem from '../BoxItem/BoxItem'
import s from './CartList.module.scss'


const CartList = () => {
    const items = useAppSelector(state => state.box.itemsInBox)
    const tottalPrice = items.reduce((acc, i) => acc += i.price, 0)

    return (
        <div className={s.wrapper}>
            <div className={s.cart_list}>
                <div className={s.items}>
                    {items.length > 0
                        ? items.map((item) => 
                            <BoxItem
                                key={item.id} 
                                price={item.price} 
                                title={item.title}
                                id={item.id}
                        />)

                        : <span className={s.boxIsEmpty}>Корзина пуста</span>
                    }
                </div>
                    {items.length > 0
                        ? <div className={s.offer}>
                            <div className={s.total_price}>
                                <span>Итого:</span>
                                <span>{tottalPrice.toFixed(2)}&nbsp;£</span>
                            </div>
                            <Link to='/cart'>
                                <button className={s.order}>Перейти к оформлению</button>
                            </Link>
                        </div>
                        : null
                    }
            </div>
        </div>
    )
}

export default CartList;