import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import BottomDescription from '../components/BottomDescription/BottomDescription';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ProductDetailAction } from '../store/actions/ProductDetailAction';
import s from './../styles/detailPage.module.scss'


const DetailPage = () => {
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()
    const { laoding, error, product } = useAppSelector(state => state.productDetail)

    useEffect(() => {
        dispatch(ProductDetailAction(params.id!))
    }, [dispatch, params.id])

    if (laoding) return <p>... Loading</p>

    return (
        <div className={s.wrapper}>
            <div className={s.product_info}>
                <img className={s.img} src={product?.image} alt=""/>
                <div className={s.description}>
                    <div className={s.box_title}>
                        <div className={s.title}>{product?.title}</div>
                        <div className={s.price}>Price - {product?.price} £</div>
                    </div>
                    <div className={s.size}>
                        <p>Размер</p>
                        <div className={s.size_names}>
                            <input id='s' type='radio' name='size' value='S'/>
                            <label htmlFor="s">S</label>

                            <input id='m' type='radio' name='size' value='M'/>
                            <label htmlFor="m">M</label>

                            <input id='l' type='radio' name='size' value='M'/>
                            <label htmlFor="l">L</label>

                            <input id='xl' type='radio' name='size' value='M'/>
                            <label htmlFor="xl">XL</label>
                        </div>
                    </div>
                    <button className={s.btn_box}>Добавить в корзину</button>
                </div>
            </div>
            <BottomDescription/>
        </div>
        
    )
}

export default DetailPage;