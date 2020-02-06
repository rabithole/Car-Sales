import React from 'react';
// import { connect } from 'react-redux';

const AddedFeature = props => {
	console.log(props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature}
    </li>
  );
};

export default AddedFeature;
