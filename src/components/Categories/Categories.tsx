import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CategoryFilter } from '../../model/model';
import {ProductSlice} from '../../store/slices/ProductSlice';
import s from './Categories.module.scss';


const Categories = () => {

    const dispatch = useAppDispatch()
    const [filter, setFilter] = useState<CategoryFilter>({category: ''})

    const changeHandler = (category: string) => setFilter({category})
    
    useEffect(() => {
        dispatch(ProductSlice.actions.productFilter(filter))
    }, [filter])


    return (
        <div className={s.wrapper}>
            <div className={s.filter_image}><img src={require('./../../assets/filters/filter.png')} alt="" /></div>
            <div className={s.categories}>
                <button className={s.current_category} onClick={() => changeHandler('')}>Все товары</button>
                <button className={s.current_category} onClick={() => changeHandler('jewelery')}>jewelery</button>
                <button className={s.current_category} onClick={() => changeHandler('electronics')}>electronics</button>
                <button className={s.current_category} onClick={() => changeHandler("men's clothing")}>men's clothing</button>
                <button className={s.current_category} onClick={() => changeHandler("women's clothing")}>women's clothing</button>
            </div>
        </div>
    )
}

export default Categories;