import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

let persistor = persistStore(store);


function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/cart" element={<Cart />}></Route>
                        </Routes>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    );
}

export default App;
