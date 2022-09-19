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
import HeaderWeb from './components/HeaderWeb/HeaderWeb';
import DarkBackground from './components/DarkBackground/DarkBackground';
import ContentWeb from './components/ContentWeb/ContentWeb';
  const queryClient = new QueryClient();

  const initialProductCart = {
    cart: [],
    count : 0,
    totalPrice: 0  
  };

function App() {

  const [productCart, setProductCart] = useState(initialProductCart);
  const [modalSuccessfully, setModalSuccessfully] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);
  const [modalHoverLanguage, setModalHoverLanguage] = useState(false);
  const [modalHoverReturn, setModalHoverReturn] = useState(false);
  
  let navigate = useNavigate();

  const handleDarkBackground = (e) => {
    
    if(e.target.classList.value==="input-web-center"){
      setDarkBackground(true);
    } else {
      setDarkBackground(false);
    }
    
  }

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

  const openModal = (e) =>{
    navigate('/');
    setModalSuccessfully(true);
  }

  const clickProduct = (id) => {
    
    navigate(`/product/${id}`);
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

  window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  if(window.mobileCheck()) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
        {modalSuccessfully && <Modal closeModal={()=> setModalSuccessfully(false)}/>}
        <Header countCart={productCart.count}/>
          <Routes>
              <Route index element={<Content clickProduct={clickProduct}/>} />
              <Route path='/product/:idProduct' element={<ProductPage addToCart={addToCart} openModal={openModal} />} />
              <Route path='/list-products/:idCategory' element={<ListProductPage clickProduct={clickProduct}/>} />
              <Route path='/shopping-cart' element={<ShoppingCart productCart={productCart} deleteOne={deleteOne} deleteAll={deleteAll}/>} />
          </Routes>
          <Footer/>
        </div>
        
      </QueryClientProvider>
    );
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App' onClick={(e)=> handleDarkBackground(e)}>
        <HeaderWeb 
          setModalHoverLanguage={setModalHoverLanguage} 
          modalHoverLanguage={modalHoverLanguage} 
          setDarkBackground={setDarkBackground}
          modalHoverReturn={modalHoverReturn}
          setModalHoverReturn={setModalHoverReturn}
          />
          <ContentWeb/>
        {darkBackground && <DarkBackground/>} 
        {modalHoverLanguage&&<DarkBackground/>}
        {modalHoverReturn&&<DarkBackground/>}
      </div>
    </QueryClientProvider>
  )
}

export default App;
