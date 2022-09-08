import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import {
  QueryClient,
  QueryClientProvider
  } from '@tanstack/react-query';
import Footer from './components/Footer/Footer';

  const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
