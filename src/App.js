import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import {
  QueryClient,
  QueryClientProvider
  } from '@tanstack/react-query';

  const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
