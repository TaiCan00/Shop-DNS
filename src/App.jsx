import { BrowserRouter } from "react-router-dom";

import './App.scss'

import Header from './components/header/Header'
import Router from './router/Router'
import Footer from './components/footer/Footer'

import { ToastContainer } from "react-toastify";
import { UserAuthContextProvider } from './context/UserAuthContext'

import ScrollToTop from './scroll-to-top/ScrollToTop'

function App() {
    return (
      <BrowserRouter>
        <UserAuthContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          
          <Header />
          
          <div className='container'>
            <div className='main'>
              <Router />
            </div>
          </div>

          <ScrollToTop />

          <Footer/>

        </UserAuthContextProvider>
      </BrowserRouter>
    );
}

export default App;
