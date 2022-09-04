import axios from 'axios';
import React from 'react';
import { Product } from '../../model/model';
import s from './Categories.module.scss';


const Categories = (props: any) => {

    const { setItems } = props

    const changeCategory = async (category: string) => {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        setItems(response.data)
    }
    
    const allProductsList = async () => {
        const responce = await axios.get('https://fakestoreapi.com/products')
        setItems(responce.data)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.categories}>
                <button className={s.current_category} onClick={() => allProductsList()}>Все товары</button>
                <button className={s.current_category} onClick={() => changeCategory('jewelery')}>jewelery</button>
                <button className={s.current_category} onClick={() => changeCategory('electronics')}>electronics</button>
                <button className={s.current_category} onClick={() => changeCategory('men\'s%20clothing')}>men's clothing</button>
                <button className={s.current_category} onClick={() => changeCategory('women\'s%20clothing')}>women's clothing</button>
            </div>
        </div>
    )
}

export default Categories;