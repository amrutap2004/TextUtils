import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {

  const [ mode , setMode ] = useState('light');
  const [ alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);         // after 2 sec alert is automatically aet to null
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#06244f' ;
      showAlert("The Dark mode has been enabled" , "success");
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("The Light mode has been enabled" , "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" aboutText ="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path='/About' element={<About mode = {mode}/>}/>
          <Route exact path='/' element={<TextForm heading = "Try TextUtils - Word Counter , Character Counter" showAlert = {showAlert} mode ={mode}/>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;


// return <BrowserRouter> always

// syntax ->
//<Router>
//   <Routes>
//     <Route path='/About' element={<About/>}/>
//     <Route path='/' element={<TextForm/>} />
//   </Routes>
// </Router>