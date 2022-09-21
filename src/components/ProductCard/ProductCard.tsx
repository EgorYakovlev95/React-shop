import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Product } from '../../model/model';
import s from './ProductCard.module.scss';

interface ProductProps {product: Product}

export function ProductCard ({product}: ProductProps) {
  const navigate = useNavigate()
  const clickHandler = () => navigate('/products/' + product.id)

  return (
    <div className={s.card} onClick={clickHandler}>
        <img className={s.image} src={product.image} alt="" />
        <div className={s.title}><p>{product.title}</p></div>
        <div className={s.price}>{product.price} £</div>
    </div>
  )
}

export default ProductCard;