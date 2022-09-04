import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { Product } from '../../model/model'
import { ProductAction } from '../../store/actions/ProductAction'
import ProductCard from '../ProductCard/ProductCard'
import s from './Products.module.scss'


const Products = (props: any) => {

    const { items } = props
    const dispatch = useAppDispatch()
    const { error, loading, products } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(ProductAction())
    }, [])

    const filteringProducts = () => {
        const allProducts = products.map(product => <ProductCard key={product.id} product={product}/>)
        const filteredProducts = items?.map((item: Product) => <ProductCard key={item.id} product={item}/>)

        return (items.length) ? filteredProducts : allProducts
    }

    return (
        <div className={s.wrapper}>
            <div className={s.products}>

                {loading && <p style={{ textAlign: 'center', fontSize: '30px' }}>... Loading</p>}
                {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

                {filteringProducts()}

            </div>
        </div>
    )
}

export default Products;