import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Filter from './components/Filters/Filters';
import Card from './components/Cards/Cards';
function App() {

  let api = "https://rickandmortyapi.com/api/character";

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Ricky & Morty <span className="text-primary">Wiki</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filter />
          </div>
          <div className="col-8">
            <div className="row">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
