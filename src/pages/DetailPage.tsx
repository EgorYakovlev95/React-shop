import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BottomDescription from '../components/BottomDescription/BottomDescription';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { ProductDetailAction } from '../store/actions/ProductDetailAction';
import s from './../styles/detailPage.module.scss'


const DetailPage = () => {
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()
    const { laoding, error, product } = useAppSelector(state => state.productDetail)
    const [size, setSize] = useState({size: ""})

    useEffect(() => {
        dispatch(ProductDetailAction(params.id!))
    }, [dispatch, params.id])

    const sizeChange = (size: string) => {
        setSize({size})
    }

    return (
        <div className={s.wrapper}>

            {laoding && <p style={{ textAlign: 'center',  fontSize: '30px' }}>... Loading</p>}
            {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

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
                            <input id='s' type='radio' name='size' value='S' onClick={() => sizeChange('S')}/>
                            <label htmlFor="s">S</label>

                            <input id='m' type='radio' name='size' value='M' onClick={() => sizeChange('M')}/>
                            <label htmlFor="m">M</label>

                            <input id='l' type='radio' name='size' value='L' onClick={() => sizeChange('L')}/>
                            <label htmlFor="l">L</label>

                            <input id='xl' type='radio' name='size' value='XL' onClick={() => sizeChange('XL')}/>
                            <label htmlFor="xl">XL</label>
                        </div>
                    </div>

                    <button
                        className={s.btn_box}
                        disabled={size.size ? false : true}
                    >
                        {size.size ? "Добавить в корзину" : "Выберите размер"}
                    </button>
                </div>
            </div>
            <BottomDescription/>
        </div>
        
    )
}

export default DetailPage;