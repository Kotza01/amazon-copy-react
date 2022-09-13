import './App.css';
import {
  QueryClient,
  QueryClientProvider
  } from '@tanstack/react-query';
import { Routes, Route, useNavigate} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import { useState } from 'react';
import ListProductPage from './components/ListProductPage/ListProductPage';
import Modal from './components/Modal/Modal';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
  const queryClient = new QueryClient();

  const initialProductCart = {
    cart: [],
    count : 0,
    totalPrice: 0  
  };

function App() {

  const [idProduct, setIdProduct] = useState(-1);
  const [productCart, setProductCart] = useState(initialProductCart);
  const [modalSuccessfully, setModalSuccessfully] = useState(false);

  
  let navigate = useNavigate();

  const addToCart = (product, count) => {
    
    if(productCart.totalPrice===0){
      setProductCart(
        {
          ...productCart, 
          cart: [...productCart.cart, {...product, count :count}],
          totalPrice: product.price * count,
          count : count
        }
      )  
    } else {
      const emptyProduct = productCart.cart.find((item) => product.id ===item.id);
      if(emptyProduct){
        setProductCart(
          {
            ...productCart, cart: productCart.cart.map(item => product.id ===item.id ? {...item, count : item.count+1}: item),
             totalPrice : productCart.totalPrice + (emptyProduct.price*count),
             count : productCart.count + count
          }
        ) 
      } else {
        setProductCart(
          {
            ...productCart, cart: [...productCart.cart, {...product, count :count}],
             totalPrice : productCart.totalPrice + (product.price*count),
             count : productCart.count + count
          }
        )
      }
    }

    
    openModal();
  }

  const openModal = () =>{
    navigate('/');
    setModalSuccessfully(true);
  }

  const clickProduct = (id) => {
    setIdProduct(id);
    navigate('/product');
  }

  const deleteOne = (id) => {
    let item = productCart.cart.find(el => el.id ===id);

    if(item.count === 1){
      setProductCart({
        ...productCart,
        cart : productCart.cart.filter((el) => el.id!== id),
        totalPrice : productCart.totalPrice - item.price,
        count : productCart.count - 1
      })
    } else {
      setProductCart({
        ...productCart,
        cart : productCart.cart.map((el) => el.id=== id ? {...el, count: el.count-1} : el ),
        totalPrice : productCart.totalPrice - item.price,
        count : productCart.count - 1,
      })
    }
  }

  const deleteAll = (id) => {
    let item = productCart.cart.find(el => el.id ===id);
    setProductCart({
      ...productCart,
      cart : productCart.cart.filter((el) => el.id!== id),
      totalPrice : productCart.totalPrice - (item.price* item.count),
      count : productCart.count - item.count
    })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      {modalSuccessfully && <Modal closeModal={()=> setModalSuccessfully(false)}/>}
      <Header countCart={productCart.count}/>
        <Routes>
            <Route index element={<Content clickProduct={clickProduct}/>} />
            <Route path='/product' element={<ProductPage id={idProduct} addToCart={addToCart} openModal={openModal} />} />
            <Route path='/list-products/:idCategory' element={<ListProductPage clickProduct={clickProduct}/>} />
            <Route path='/shopping-cart' element={<ShoppingCart productCart={productCart} deleteOne={deleteOne} deleteAll={deleteAll}/>} />
        </Routes>
        
        <Footer/>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;
