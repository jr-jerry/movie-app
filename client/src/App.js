import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import { Provider } from 'react-redux';
import {store} from './store/store'


function App() {
  return (
    <>
      <Provider store={store}>
      <Routes>
        
        <Route path='/' element={<Home/>}/>
      </Routes>
      </Provider>
    </>
   
  );
}

export default App;
