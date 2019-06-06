import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_FOOD':
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    foods: [
      {
        id: '1',
        name: 'Cartof',
        quantity: '200',
        calories: '80',
        protein: '3',
        carbohydrate: '17',
        fat: '0'
      },
      {
        id: '2',
        name: 'Muschi Porc',
        quantity: '150',
        calories: '250',
        protein: '25',
        carbohydrate: '0',
        fat: '3'
      },
      {
        id: '3',
        name: 'Ou',
        quantity: '200',
        calories: '150',
        protein: '15',
        carbohydrate: '0',
        fat: '8'
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
