import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4 l2'></div>
          <div className='input-field col s12 m4 l8'>
            <form>
              <label>Escuelas</label>
              <select className='browser-default'>
                <option value='' disabled selected>Choose your option</option>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
              <br/>
              <label>Grupo</label>
              <select className='browser-default'>
                <option value='' disabled selected>Choose your option</option>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
              <br/>
              <label>Profesor</label>
              <select className='browser-default'>
                <option value='' disabled selected>Choose your option</option>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </select>
            </form>
          </div>
          <div className='col s12 m4 l2'></div>
        </div>
        <div className='row'>
          <div className='col s12 m4 l2'></div>
            <div className='col s12 m4 l8'>
              <tbody className='highlight'>
                <tr>
                  <th>Escuela:</th>
                  <td>nombreEscuela</td>
                </tr>
                <tr>
                  <th>Profesor:</th>
                  <td>nombreProf</td>
                </tr>
                <tr>
                  <th>Numero:</th>
                  <td>numero</td>
                </tr>
                <tr>
                  <th>Pedidos</th>
                </tr>
              </tbody>
            </div>
            <div className='col s12 m4 l2'></div>
        </div>
      </div>
    );
  }
}
export default Home;
