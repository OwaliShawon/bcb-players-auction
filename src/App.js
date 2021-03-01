import logo from './logo.svg';
import './App.css';
import Player from './components/Player/Player';
import Team from './components/Team/Team';

function App() {

  return (
    <div>
      <div ClassName="team">
        <div className="all-players">
          <Team> </Team>
        </div>
        <div className="playing-eleven">

        </div>
      </div>

    </div>
  );
}

export default App;
