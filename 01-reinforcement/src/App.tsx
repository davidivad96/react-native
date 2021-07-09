// import { BasicTypes } from "./typescript/BasicTypes";
// import { ObjectLiterals } from "./typescript/ObjectLiterals";
// import { Functions } from "./typescript/Functions";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduction to TS React</h1>
      <hr />
      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <Functions /> */}
      <Counter />
    </div>
  );
};

export default App;
