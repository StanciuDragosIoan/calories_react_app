import React, { Component } from 'react';

class SearchFood extends Component {
  render() {
    return (
      <div className='mb-5'>
        <h1 className='text-center'>Selector Principal</h1>
        <p>Cauta mancarurile tale preferate</p>
        <div className='container'>
          <div className='col-sm-8 mx-auto'>
            <input
              className='form-control'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFood;
