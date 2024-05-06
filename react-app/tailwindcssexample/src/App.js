import './App.css';
import AppBar from './components/AppBar';
import Filters from './components/Filters';
import Items from './components/Items'
import SeasonSpecial from './components/SeasonSpecial';

function App() {
  return (
    <>
      <AppBar />
      <Filters />
      <Items />
      <SeasonSpecial />
    </>
  );
}

export default App;
/*
<div>
        <span class="text-green-500 text-5xl font-bold">Fruit</span>
        <span class="text-slate-400 text-4xl font-light">Shop</span>
      </div>
      <div>
        <span class="text-stone-500 text-4xl font-display">Seasons Specials</span>
      </div>
      <div>
        <span class="text-stone-500 text-4xl font-display">Find us on</span>
      </div>
*/