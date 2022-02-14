import './App.scss'
import { Cards } from './components';

import data from './assets/data/data.json'

function App() {
  return (
    <div className="App">
      <Cards data={data}/>
    </div>
  );
}

export default App;
