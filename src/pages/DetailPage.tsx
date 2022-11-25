import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BottomDescription from '../components/BottomDescription/BottomDescription';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Product } from '../model/model';
import { ProductDetailAction } from '../store/actions/ProductDetailAction';
import { addToBox, removeFromBox } from '../store/slices/BoxSlice';
import s from './../styles/detailPage.module.scss'


const DetailPage = () => {
    const params = useParams<'id'>()
    const dispatch = useAppDispatch()

    const { laoding, error, product } = useAppSelector(state => state.productDetail)
    const items = useAppSelector(state => state.box.itemsInBox)
    
    const isItemInBox = items.some((item: Product) => item.id === product?.id)
    const [size, setSize] = useState({size: ''})


    useEffect(() => {
        dispatch(ProductDetailAction(params.id!))
    }, [dispatch, params.id])

    const addItemToBox = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(addToBox(product!))
    }
    const removeItemFromBox = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(removeFromBox(product?.id!))
    }

    const changeSize = (size: string) => {
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
                            <input id='s' type='radio' name='size' value='S' onClick={() => changeSize("S")}/>
                            <label htmlFor="s">S</label>

                            <input id='m' type='radio' name='size' value='M' onClick={() => changeSize("M")}/>
                            <label htmlFor="m">M</label>

                            <input id='l' type='radio' name='size' value='L' onClick={() => changeSize("L")}/>
                            <label htmlFor="l">L</label>

                            <input id='xl' type='radio' name='size' value='XL' onClick={() => changeSize("XL")}/>
                            <label htmlFor="xl">XL</label>
                        </div>
                    </div>

                    <div className={s.btns}>
                        {!isItemInBox 
                            ? <button
                                onClick={addItemToBox}
                                className={s.btn_box}
                                disabled={(size.size && !isItemInBox) ? false : true}
                            >
                                {!size.size ? "Выберите размер" : "Добавить в корзину"}
                            </button>
                            
                            : <button 
                                className={s.btn_box}
                                onClick={removeItemFromBox}
                            >
                                    Убрать из корзины
                            </button>
                        }
                    </div>
                </div>
            </div>
            <BottomDescription/>
        </div>
        
    )
}

export default DetailPage;