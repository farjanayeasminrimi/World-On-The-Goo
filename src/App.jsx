import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries";

const CountriesDataRes = fetch("https://openapi.programming-hero.com/api/all").then((res) =>
  res.json(),
);
function App() {
  return (
    <>
      <h1>World On The Go...</h1>

      <Suspense fallback={<h2>Countries Loading...</h2>}>
        <Countries CountriesDataRes={CountriesDataRes}></Countries>
      </Suspense>
    </>
  );
}

export default App;
