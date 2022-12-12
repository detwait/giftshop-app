import './App.css';
import { AppProps } from './App.props';

function App(props: AppProps) {

  return (
    <div className="App">
      <header className="App-header">
        {props.children}
      </header>
    </div>
  );
}

export default App;
