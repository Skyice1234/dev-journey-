import Greeting from "./Greeting";

function App() {
  return(
    <div>
      <Greeting name="Emmanuel" isLearning={true}/>
      <Greeting name="Ann" isLearning={false}/>
    </div>
  );
}

export default App;