import { useState, useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  {/* Chart code */}
  const chartRef = useRef(null);

  useEffect(() => {

    const chart = new Chart(chartRef.current, {
      type: 'doughnut', 
      data: {
        labels: ['Starting Amount', 'Contributions', 'Interest'],
        datasets: [{
          data: [55, 30, 15],
          backgroundColor: [ 
            '#b91d47', 
            '#00aba9', 
            '#2b5797' 
          ]
        }]

      },

      options: {
        responsive: true,

        layout: {
          padding: {
            left: -18,
            right: 0
        }
  },

        plugins: {
          /*title: {
            display: true,
            text: 'Investment Breakdown',
                      
          },*/

          legend: {

            position: 'left',
            align: 'center',

            labels: {

              padding: 20
              
            }

          }

        }
      }

    })

    return () => {

      chart.destroy()

    }

    {/* Chart code */}
  }, [])

  return (
    <>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>

      <table id="calc-layout">
        <tr>

          <td class="input-col">

            <div id="calculator">

              <form>

                <table id="starting-amt-tbl"> 
                  <tr>
                    <td width="250"><label>Starting Amount</label></td>
                    <td>
                      <input type="text" class="input-controls monetary-field"></input>
                      <span class="inuirandspan">R</span>
                    </td>
                  </tr>
                </table>

                <table id="amt-time-tbl">
                  <tr>
                    <td width="250"><label>After</label></td>
                    <td>
                      <input type="text" class="input-controls" maxLength={4}></input>
                      <span class="inuiyearspan">years</span>
                    </td>
                  </tr>
                </table>

                <table id="rate-of-return-tbl">
                  <tr>
                    <td width="250"><label>Rate of Return</label></td>
                    <td>
                      <input type="text" class="input-controls" maxLength={9}></input>
                      <span class="inuipercentspan">%</span>
                    </td>
                  </tr>
                </table>

                <table id="compounding-period-tbl">
                  <tr>
                    <td width="250"><label>Compounded</label></td>
                    <td>
                      <select name="compounding-period" id="compounding-period" class="custom-dropdown input-controls">

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
                      <input type="text" class="input-controls monetary-field"></input> 
                      <span class="inuirandspan">R</span>
                    </td>
                  </tr>
                </table>

                <table id="contribution-timing">
                  <tr>
                    <td>

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
                      
                    </td>
                  </tr>
                </table>

              </form>

            </div>

          </td>

          <td class="gap-col"></td>{/* spacing */}

          <td class="output-col">

            <div id="outputs">
            
              <h1 align="left">Results</h1>

              <table cellPadding={6} width="100%">

                <tr>

                  <td align="left"><b>Final Balance</b></td>
                  <td align="right"><b>R000.00</b></td>

                </tr>

                <tr>

                  <td align="left">Starting Amount</td>
                  <td align="right">R000.00</td>

                </tr>

                <tr>

                  <td align="left">Total Contributions</td>
                  <td align="right">R000.00</td>

                </tr>

                <tr>

                  <td align="left">Total Interest</td>
                  <td align="right">R000.00</td>

                </tr>

              </table>

              {/*<br></br>*/}

              <div id="graph-info">

                <h4 id="graph-heading">Investment Breakdown</h4>
                <canvas id="my-chart" ref={chartRef}></canvas>          

              </div>

            </div>

          </td>

        </tr>
        <input type="button" value="Calculate"></input>
      </table>

    </>
  )
}

export default App
