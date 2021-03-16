
import {
  ADD_FEATURE,
  REMOVE_FEATURE
} from './actionTypes';

export const addFeature = (feature) => ({
  type: ADD_FEATURE,
  payload: feature
});

export const removeFeature = (feature) => ({
  type: REMOVE_FEATURE,
  payload: feature
});