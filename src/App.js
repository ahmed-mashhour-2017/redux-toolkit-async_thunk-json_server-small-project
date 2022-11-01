 
import './App.css';
 import Header from './components/header/Header';
import SideBar from './components/slide_bar/Side_bar';
import Form from './components/form/Form';
 
function App() {
 
  return (
    <div className="App" >
    <Header/>
    <div className='main'>
      <SideBar/> 
      <Form/>
    </div>

    </div>
  );
}

export default App;
