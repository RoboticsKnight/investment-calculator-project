import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id="calculator">

        <form>

          <table> 
            <td><label>Starting Amount</label></td>
            <td>
              <span>R</span>
              <input type="text"></input>
            </td>
          </table>

          <table>
            <td><label>After</label></td>
            <td>
              <input type="text"></input>
              <span>years</span>
            </td>
          </table>

          <table>
            <td><label>Rate of Return</label></td>
            <td>
              <input type="text"></input>
              <span>%</span>
            </td>
          </table>

          <table>
            <td><label>Compounded</label></td>
            <td>
              <select name="compounding-period" id="compounding-period">

                <option value="continuously">continuously</option>
                <option value="daily">daily</option>
                <option value="weekly">weekly</option>
                <option value="biweekly">biweekly</option>
                <option value="semimonthly">semimonthly</option>
                <option value="monthly">monthly</option>
                <option value="quarterly">quarterly</option>
                <option value="semiannually">semiannually</option>
                <option value="annually">annually</option>

              </select>
            </td>
          </table>

          <table>
            <td><label>Additional Contribution</label></td>
            <td>
              <span>R</span>
              <input type="text"></input> 
            </td>
          </table>

          <section>
            <label>Contribute at the</label>
            <input type="radio"></input> <label>beginning</label>
            <input type="radio"></input> <label>end</label>

            <br/>

            <label>of each</label>
            <input type="radio"></input> <label>week</label>
            <input type="radio"></input> <label>fortnight</label>
            <input type="radio"></input> <label>month</label>
            <input type="radio"></input> <label>year</label>
            
          </section>

          <input type="button" value="Calculate"></input>

        </form>

      </div>

    </>
  )
}

export default App
