import './App.css';
import Tile from './components/Tile.jsx';
import data from './plantData.js'

const PLANT_DATA = data

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Plant Shop</h1>
      <div id="tileContainer">
        {PLANT_DATA.map((plant, index) => (
          <Tile
            key={index}
            name={plant.name}
            img={plant.img}
            desc={plant.description}
            more={plant.more}
            cost={plant.cost}
          />
        ))}
      </div>
    </div>
  )
}

export default App