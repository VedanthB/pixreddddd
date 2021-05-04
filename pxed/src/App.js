import './App.css';
import Header from './components/Header';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="app">
       <Header /> 
       <div className='app__body'>
         <TextEditor />
       </div>
    </div>
  );
}

export default App;
