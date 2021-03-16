import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from 'store/actions';

const AdditionalFeature = props => {
  const { feature, features, addFeature } = props;

  const handleClick = () => {
    addFeature(feature);
  };

  const isDisabled = features && features.some(element => element.id === feature.id);

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleClick} disabled={isDisabled}>Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = (state) => ({
  features: state.car.features
});

export default connect(mapStateToProps, {
  addFeature
})(AdditionalFeature);
