import './App.scss'
import { Navbar } from './components'

import data from './assets/data/data.json'

function App() {
  return (
    <div className="App">
      <Navbar data={data.navbar} />
    </div>
  );
}

export default App;
