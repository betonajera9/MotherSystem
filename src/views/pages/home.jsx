import React, { Component } from 'react';
import Orders from '../req/orders.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grade: '',
      searchTeacher: false,
    };
    this.handleSearchTeacher = this.handleSearchTeacher.bind(this);
    this.handleSetTeacher = this.handleSetTeacher.bind(this);
  }

  handleSearchTeacher(evt) {
    this.setState({
      searchTeacher: true,
    });
    evt.preventDefault();
  }

  handleSetTeacher(evt) {
    this.setState({
      searchTeacher: false,
    });
    const { id, value } = evt.target;
    this.setState({
      [id]: value,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4 l2'></div>
          <div className='input-field col s12 m4 l8'>

            <form onSubmit={this.handleSearchTeacher}>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" className="autocomplete" onChange={this.handleSetTeacher}/>
              <br/>
              <label htmlFor="grade">Grado</label>
              <input type="text" id="grade" className="autocomplete" onChange={this.handleSetTeacher}/>
              <br/>
              <button className='btn waves-effect waves-light' type='submit' name='action'>Buscar
                <i className='material-icons right'>send</i>
              </button>
            </form>
            {this.state.login ?
            <Orders name={this.state.name} grade={this.state.grade}/> :
            null }
          </div>
          <div className='col s12 m4 l2'></div>
        </div>


      </div>
    );
  }
}
export default Home;
