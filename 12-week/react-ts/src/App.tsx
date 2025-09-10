
import './App.css'
import BmiCalculator from './components/Day1/bmiCalculator'
import Day1 from './components/Day1/day1'
import Day2 from './components/day2/day2'
import Day2P1 from './components/day2/day2P1'
import Day2Cal from './components/day2/day2CalCalculater'

function App() {

  return (
    <>
      {/* Day 1 */}
      <div>
        <h3 style={{ color: "rgb(24, 94, 170)", fontStyle: "italic" }}> # Day One: Basics Of TS</h3>
        <Day1 name='Async Dev' />
        <BmiCalculator />
      </div>

      <br />

      {/* Day 2 */}
      <div>
        <h3 style={{ color: "rgb(24, 94, 170)", fontStyle: "italic" }}># Day Two: Functions & Type Aliases in TypeScript</h3>
        <Day2 />
        <h4 style={{ color: "#333", fontStyle: "italic" }}># Day Two: 2.1</h4>
        <Day2P1 />
        <h4 style={{ color: "#333", fontStyle: "italic" }}># Day Two: 2.2 {"=>"} Proj</h4>
        <Day2Cal />
      </div>
      {/* Day 2 */}
      <div>
        <h3 style={{ color: "rgb(24, 94, 170)", fontStyle: "italic" }}># Day Three: Interfaces & Objects in TypeScript</h3>

      </div>

    </>
  )
}

export default App
