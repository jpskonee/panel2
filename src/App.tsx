import { Container } from "@material-ui/core";
import Panel from "./components/Panel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container style={{ padding: "0px" }} maxWidth="md">
        <Panel />
      </Container>
    </div>
  );
}

export default App;
