import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { AuthSlice } from '../../store/slices/AuthSlice';
import CartList from '../CartList/CartList';
import s from './Header.module.scss'
import LoginImage from './../../assets/mobile-menu/enter.png'
import BoxImage from './../../assets/box/box.png'
import MenuImage from './../../assets/mobile-menu/menu.png'


const Header = () => {
   const dispatch = useAppDispatch()
   const { isAuth, username } = useAppSelector(state => state.auth)
   const items = useAppSelector(state => state.box.itemsInBox)
   const [boxListVisible, setBoxListVisible] = useState(false)
   const navigate = useNavigate()
   const windowWidth = document.documentElement.clientWidth;

   const logoutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      dispatch(AuthSlice.actions.logout())
   }
   
   window.addEventListener('click', (e) => {
      e.stopPropagation()
      const boxList = document.querySelector('.CartList_cart_list__MD8XR')
      const clickOnBox = e.composedPath().includes(boxList!)

      if (!clickOnBox) {
         setBoxListVisible(false)
      }
   })

   const routHandler = (event: React.MouseEvent<HTMLImageElement>) => {
      if (windowWidth > 430) {
         setBoxListVisible(!boxListVisible)
      } else {
         navigate('/cart')
      }
   }

   const ShowMenu = (event: React.MouseEvent<HTMLSpanElement>) => {
      const div = document.getElementById('1');
      
      if (windowWidth < 431) {
         if (div?.classList.contains('Header_pages__xDiLq')) {
            div.classList.replace('Header_pages__xDiLq', 'Header_active__OcOMM')
         } else {
            div?.classList.replace('Header_active__OcOMM', 'Header_pages__xDiLq')
         }
      } 
   }


   return (
      <header className={s.main}>
         <div className={s.logo}>
            <svg width="164" height="38" viewBox="0 0 164 38" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.26367 37H0.0761719V6.97656C4.12305 6.78516 6.95996 6.68945 8.58691 6.68945C11.7041 6.68945 14.1377 7.35938 15.8877 8.69922C17.6514 10.0254 18.5332 11.9258 18.5332 14.4004C18.5332 16.7793 17.2754 18.6592 14.7598 20.04C18.4922 21.3389 20.3584 24.0186 20.3584 28.0791C20.3584 30.8135 19.3262 32.9873 17.2617 34.6006C15.1973 36.2002 12.5312 37 9.26367 37ZM5.4082 11.2422V18.4404C6.22852 18.4951 7.08984 18.5225 7.99219 18.5225C11.4648 18.5225 13.2012 17.2168 13.2012 14.6055C13.2012 12.2949 11.6221 11.1396 8.46387 11.1396C7.62988 11.1396 6.61133 11.1738 5.4082 11.2422ZM5.4082 22.6035V32.5293C6.48828 32.625 7.36328 32.6729 8.0332 32.6729C10.4121 32.6729 12.1348 32.2695 13.2012 31.4629C14.2812 30.6562 14.8213 29.3164 14.8213 27.4434C14.8213 25.7344 14.3223 24.4902 13.3242 23.7109C12.3262 22.9316 10.583 22.542 8.09473 22.542C7.5752 22.542 6.67969 22.5625 5.4082 22.6035ZM25.0957 6.95605H30.4277V27.3203C30.4277 28.9336 30.9199 30.2461 31.9043 31.2578C32.8887 32.2695 34.2422 32.7754 35.9648 32.7754C37.8926 32.7754 39.3896 32.2832 40.4561 31.2988C41.5361 30.3008 42.0762 28.9404 42.0762 27.2178V6.95605H47.4082V27.6279C47.4082 30.7178 46.3691 33.1377 44.291 34.8877C42.2266 36.6377 39.4648 37.5127 36.0059 37.5127C32.5195 37.5127 29.8262 36.6582 27.9258 34.9492C26.0391 33.2402 25.0957 30.793 25.0957 27.6074V6.95605ZM62.748 37H53.5605V6.97656C57.6074 6.78516 60.4443 6.68945 62.0713 6.68945C65.1885 6.68945 67.6221 7.35938 69.3721 8.69922C71.1357 10.0254 72.0176 11.9258 72.0176 14.4004C72.0176 16.7793 70.7598 18.6592 68.2441 20.04C71.9766 21.3389 73.8428 24.0186 73.8428 28.0791C73.8428 30.8135 72.8105 32.9873 70.7461 34.6006C68.6816 36.2002 66.0156 37 62.748 37ZM58.8926 11.2422V18.4404C59.7129 18.4951 60.5742 18.5225 61.4766 18.5225C64.9492 18.5225 66.6855 17.2168 66.6855 14.6055C66.6855 12.2949 65.1064 11.1396 61.9482 11.1396C61.1143 11.1396 60.0957 11.1738 58.8926 11.2422ZM58.8926 22.6035V32.5293C59.9727 32.625 60.8477 32.6729 61.5176 32.6729C63.8965 32.6729 65.6191 32.2695 66.6855 31.4629C67.7656 30.6562 68.3057 29.3164 68.3057 27.4434C68.3057 25.7344 67.8066 24.4902 66.8086 23.7109C65.8105 22.9316 64.0674 22.542 61.5791 22.542C61.0596 22.542 60.1641 22.5625 58.8926 22.6035ZM87.7676 37H78.5801V6.97656C82.627 6.78516 85.4639 6.68945 87.0908 6.68945C90.208 6.68945 92.6416 7.35938 94.3916 8.69922C96.1553 10.0254 97.0371 11.9258 97.0371 14.4004C97.0371 16.7793 95.7793 18.6592 93.2637 20.04C96.9961 21.3389 98.8623 24.0186 98.8623 28.0791C98.8623 30.8135 97.8301 32.9873 95.7656 34.6006C93.7012 36.2002 91.0352 37 87.7676 37ZM83.9121 11.2422V18.4404C84.7324 18.4951 85.5938 18.5225 86.4961 18.5225C89.9688 18.5225 91.7051 17.2168 91.7051 14.6055C91.7051 12.2949 90.126 11.1396 86.9678 11.1396C86.1338 11.1396 85.1152 11.1738 83.9121 11.2422ZM83.9121 22.6035V32.5293C84.9922 32.625 85.8672 32.6729 86.5371 32.6729C88.916 32.6729 90.6387 32.2695 91.7051 31.4629C92.7852 30.6562 93.3252 29.3164 93.3252 27.4434C93.3252 25.7344 92.8262 24.4902 91.8281 23.7109C90.8301 22.9316 89.0869 22.542 86.5986 22.542C86.0791 22.542 85.1836 22.5625 83.9121 22.6035ZM103.6 37V6.95605H108.932V32.2627H122.508V37H103.6ZM146.112 27.5869H130.424C130.52 29.3369 131.121 30.6973 132.229 31.668C133.336 32.6387 134.826 33.124 136.699 33.124C139.037 33.124 140.814 32.5156 142.031 31.2988L144.021 35.2158C142.216 36.6787 139.522 37.4102 135.94 37.4102C132.591 37.4102 129.938 36.4326 127.983 34.4775C126.042 32.5088 125.071 29.7676 125.071 26.2539C125.071 22.7949 126.138 19.9922 128.271 17.8457C130.417 15.6992 132.987 14.626 135.981 14.626C139.167 14.626 141.724 15.5762 143.651 17.4766C145.579 19.377 146.543 21.7969 146.543 24.7363C146.543 25.3652 146.399 26.3154 146.112 27.5869ZM130.608 23.7314H141.396C141.04 20.5186 139.263 18.9121 136.063 18.9121C133.138 18.9121 131.319 20.5186 130.608 23.7314Z" fill="black" />
               <line x1="150" y1="23.5" x2="164" y2="23.5" stroke="black" />
               <path d="M149.348 20.6523L151.086 16.7656C152.544 17.9245 154.191 18.5039 156.027 18.5039C157.928 18.5039 158.879 17.8268 158.879 16.4727C158.879 15.6784 158.592 15.0273 158.02 14.5195C157.447 14.0117 156.333 13.4128 154.68 12.7227C151.073 11.2253 149.27 9.12891 149.27 6.43359C149.27 4.6237 149.96 3.21745 151.34 2.21484C152.72 1.19922 154.484 0.691406 156.633 0.691406C158.807 0.691406 160.852 1.17969 162.766 2.15625L161.359 5.94531C160.292 5.03385 158.807 4.57812 156.906 4.57812C155.201 4.57812 154.348 5.25521 154.348 6.60938C154.348 7.14323 154.628 7.625 155.188 8.05469C155.747 8.48438 156.945 9.0638 158.781 9.79297C160.617 10.5091 161.939 11.3815 162.746 12.4102C163.553 13.4388 163.957 14.6823 163.957 16.1406C163.957 18.0807 163.234 19.6107 161.789 20.7305C160.357 21.8372 158.404 22.3906 155.93 22.3906C154.536 22.3906 153.417 22.2734 152.57 22.0391C151.737 21.8177 150.663 21.3555 149.348 20.6523Z" fill="black" />
            </svg>
         </div>
         <div className={s.links}>
            <div>
               <span 
                  className={s.mobile_menu}
                  onClick={ShowMenu}
               >
                  ????????&nbsp;<img src={MenuImage} alt="" />
               </span>
               <div className={s.pages} id='1'>
                  <Link onClick={ShowMenu} to='/'>??????????????</Link>
                  <Link onClick={ShowMenu} to='/feedback'>???????????????? ??????????</Link>
                  <Link onClick={ShowMenu} to='/adress'>?????????? ????????????????</Link>
               </div>
            </div>
            <div className={s.enter}>
               <div className={s.box} onClick={(e) => e.stopPropagation()}>
                  <img 
                     onClick={routHandler}
                     className={s.box_icon}
                     src={BoxImage} 
                  />
                  { items.length > 0 && <div className={s.box_quantity}>{items.length}</div> }
                  
                  {windowWidth > 430 && boxListVisible
                     ? <CartList />
                     : null
                  }

               </div>
               <div className={s.enter_btn}>
                  {!isAuth
                     ? <>
                        <Link className={s.login} to='/login'>??????????</Link>
                        <Link className={s.login_icon} to='/login'>
                           <img src={LoginImage} alt="" />
                        </Link>
                     </>
                     : <>
                        <span>{username}</span> /
                        <a href="#" onClick={logoutHandler}>??????????</a>
                     </>
                  }
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;