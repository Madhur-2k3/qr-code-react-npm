import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Form from './components/Form';
import Qr from './components/Qr';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
 
  return (
    <div className='h-[100vh] bg-blue-100'>
      <Header/>
      <div className=' '>
        <Form/>
        
       
        <Toaster position="top-center" reverseOrder={true}/>
      </div> 
      <Footer/>
      
    </div>
  );
}

export default App;
