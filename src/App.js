import './App.css';
import {
  QueryClient,
  QueryClientProvider
  } from '@tanstack/react-query';
import { Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  const queryClient = new QueryClient();


function App() {

  const [idProduct, setIdProduct] = useState(-1);
  let navigate = useNavigate();

  const clickProduct = (id) => {
    setIdProduct(id);
    navigate('/product');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <Header/>
        <Routes>
            <Route index element={<Content clickProduct={clickProduct}/>} />
            <Route path='/product' element={<ProductPage id={idProduct}/>} />
        </Routes>
        <Footer/>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;
