import Button from './components/button';
import InlineButton from './components/button-inline';
import ButtonProps from './components/button-props';
import Toolbar from './components/button-event-props';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button/>
      <InlineButton/>
      <br/>
      <ButtonProps message="I'm a prop named John Doe!">John Doe</ButtonProps>
      <ButtonProps message="I'm a prop named John Snow!">John Snow</ButtonProps>
      <Toolbar />
    </div>
  );
}

export default App;
