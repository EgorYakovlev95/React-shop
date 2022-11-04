import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { ProductAction } from '../../store/actions/ProductAction'
import ProductCard from '../ProductCard/ProductCard'
import s from './Products.module.scss'


const Products = () => {

    const dispatch = useAppDispatch()
    const { error, loading, products } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(ProductAction())
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.products}>

                {loading && <p style={{ textAlign: 'center', fontSize: '30px' }}>... Loading</p>}
                {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

                {products.map(product => <ProductCard key={product.id} product={product}/>)}

            </div>
        </div>
    )
}

export default Products;