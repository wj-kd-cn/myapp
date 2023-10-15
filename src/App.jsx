
import Hello from './components/Hello/Hello'
import Lifetimer from './components/Lifetimer/Lifetimer';

function App() {
  return (
    <div >
      <Hello/>
      <Lifetimer name='wangjun' count={11}/>
    </div>
  );
}

export default App;
