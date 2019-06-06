import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Food extends Component {
  render() {
    const {
      name,
      quantity,
      calories,
      protein,
      carbohydrate,
      fat
    } = this.props.food;

    return (
      <Consumer>
        {value => {
          return (
            <div>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <table className='table'>
                      <tbody>
                        <tr style={{ border: '2px solid #ddd' }}>
                          <th
                            scope='row'
                            style={{
                              width: '10rem'
                            }}
                            className='text-center'
                          >
                            {name}
                          </th>
                          <td className='text-center'>{quantity} g</td>
                          <td className='text-center'>{calories} cal</td>
                          <td className='text-center'>{protein} g</td>
                          <td className='text-center'>{carbohydrate} g</td>
                          <td className='text-center'>{fat} g</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Food.propTypes = {
  food: PropTypes.object.isRequired
};

export default Food;
