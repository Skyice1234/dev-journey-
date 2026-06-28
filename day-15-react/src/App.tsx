// import Greeting from "./Greeting";


// function App() {
//   return(
//     <div>
//       <Greeting name="Emmanuel" isLearning={true}/>
//       <Greeting name="Ann" isLearning={false}/>
//     </div>
//   );
// }

// export default App;

import Counter from "./Counter";
import GitHubCard from "./GitHubCard";
import Toggle from "./Toggle";

function App() {
  return (
    <div>
      <Counter/>
      <Toggle/>
      <GitHubCard/>
    </div>
  );
}

export default App