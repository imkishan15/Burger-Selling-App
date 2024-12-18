import '../styles/auth.css'
import { Link } from 'react-router-dom'
export const AddressForm = () => {


  return (
    <div className='login'> <br />
      <div className="head" style={{ width: '15%' }}>
        <center>Address Form</center>
      </div><br />
      <div className="form">
        <center>
          <div className="con">
            <table>
              <tr>
                <td>Flat/Block no.: </td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Society/Area Name: </td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Street Name: </td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>City: </td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td>Pin-code: </td>
                <td><input type="number" /></td>
              </tr>
            </table>

            <Link to='/payment'>
              <button>Place order</button>
            </Link>
          </div>
        </center>
      </div>
    </div>
  )
}