import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div id="calculator">

        <form>

          <table id="starting-amt-tbl"> 
            <tr>
              <td width="250"><label>Starting Amount</label></td>
              <td>
                <input type="text" ></input>
                <span class="inuirandspan">R</span>
              </td>
            </tr>
          </table>

          <table id="amt-time-tbl">
            <tr>
              <td width="250"><label>After</label></td>
              <td>
                <input type="text"></input>
                <span class="inuiyearspan">years</span>
              </td>
            </tr>
          </table>

          <table id="rate-of-return-tbl">
            <tr>
              <td width="250"><label>Rate of Return</label></td>
              <td>
                <input type="text"></input>
                <span class="inuipercentspan">%</span>
              </td>
            </tr>
          </table>

          <table id="compounding-period-tbl">
            <tr>
              <td width="250"><label>Compounded</label></td>
              <td>
                <select name="compounding-period" id="compounding-period" class="custom-dropdown">

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
            </tr>
          </table>

          <table id="add-contribution-tbl">
            <tr>
              <td width="250"><label>Additional Contribution</label></td>
              <td>
                <input type="text"></input> 
                <span class="inuirandspan">R</span>
              </td>
            </tr>
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
