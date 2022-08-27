import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Liste from "./Component/List"
import Add from "./Component/Add.js"

function App() {
  return (
    <div className="container">
      <Add/>
      <Liste/>
    </div>
  );
}

export default App;