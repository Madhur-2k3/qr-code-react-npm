
import './App.css';

import toast, { Toaster } from 'react-hot-toast';

import Header from './components/Header';
import Form from './components/Form';



function App() {
 
 

  return (
    <div className='h-[100vh] bg-blue-100'>
      <Header/>

      <div className=' '>
        <Form/>

        <Toaster position="top-center" reverseOrder={true}/>
      </div>

      
    </div>
  );
}

export default App;
