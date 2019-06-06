import React, { Component } from 'react';
import Food from './Food';
import { Consumer } from '../../context';

class Foods extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { foods } = value;

          return (
            <div>
              <div className='container'>
                <div className='row'>
                  <div className='col-sm-12'>
                    <h2>Zona Mancaruri</h2>
                    <table className='table text-center'>
                      <thead
                        style={{
                          border: '2px solid #ddd'
                        }}
                      >
                        <tr>
                          <th
                            scope='col'
                            style={{
                              width: '10rem'
                            }}
                          >
                            Aliment
                          </th>
                          <th scope='col'>Cantitate</th>
                          <th scope='col'>Calorii/100g</th>
                          <th scope='col'>Proteina</th>
                          <th scope='col'>Carbohidrat</th>
                          <th scope='col'>Grasimi</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>

              {foods.map(food => (
                <Food key={food.id} food={food} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Foods;
