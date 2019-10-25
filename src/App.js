import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import AdditionalFeature from './components/AdditionalFeature';
import { buyItem, removeFeature } from './actions/actions';
import Total from './components/Total';

const App = (props) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  props.buyItem();
  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   console.log('buy item')
  //   // props.dispatch({ type: 'ADD_FEATURE', payload: item.id });
  //   props.buyItem()
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          // additionalFeatures={props.additionalFeatures} 
          // buyItem={buyItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) { 
// store parameter in the mapStateToProps is our global state. Assigned in index file. 
// mapStateToProps is assigning prop values to the component behind the scenes.
// Each key below is a prop value 
  return {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    buyItem: () => dispatch(buyItem()),
    removeFeature: () => dispatch(removeFeature())
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App); // Calling a function twice is currying. Connect is an HOC.
