import { useReducer } from 'react';

// Define action types
export const ActionTypes = {
  SET_LIST_NAME: 'SET_LIST_NAME',
  SET_ROW_LABEL: 'SET_ROW_LABEL',
  TOGGLE_ROW_VALUES: 'TOGGLE_ROW_VALUES',
  TOGGLE_COLLAPSE_DUPES: 'TOGGLE_COLLAPSE_DUPES',
  ADD_STYLEVAR: 'ADD_STYLEVAR',
  REMOVE_STYLEVAR: 'REMOVE_STYLEVAR',
  SET_LIST_ROWS: 'SET_LIST_ROWS',
  UPDATE_STYLEVAR_NAME: 'UPDATE_STYLEVAR_NAME',
  UPDATE_STYLEVAR_VALUE: 'UPDATE_STYLEVAR_VALUE',
  RESET_LIST_DATA: 'RESET_LIST_DATA',
};

// Initial state
export const initialState = {
  listName: "BrandList",
  styleVars: {
    name: ["category", "country", "timezone"],
    values: [
      ["type1", "type1", "type1", "type1", "type2", "type2", "type2", "type2"],
      ["US", "US", "US", "US", "UK", "UK", "UK", "UK"],
      ["EST", "EST", "EST", "EST", "GMT", "GMT", "GMT", "GMT"],
    ],
  },
  rowLabel: "Br",
  isRowValues: true,
  isCollapseDupes: true,
  listRows: ["Brand 1", "Brand 2", "Brand 3", "Brand 4", "Brand 5", "Brand 6", "Brand 7", "Brand 8"],
};

export function listDataReducer(state, action) {
  switch (action.type) {
    case ActionTypes.SET_LIST_NAME:
      return { ...state, listName: action.payload };
    case ActionTypes.SET_ROW_LABEL:
      return { ...state, rowLabel: action.payload };
    case ActionTypes.TOGGLE_ROW_VALUES:
      return { ...state, isRowValues: !state.isRowValues };
    case ActionTypes.TOGGLE_COLLAPSE_DUPES:
      return { ...state, isCollapseDupes: !state.isCollapseDupes };
    case ActionTypes.ADD_STYLEVAR:
      return {
        ...state,
        styleVars: {
          name: [...state.styleVars.name, ''],
          values: [...state.styleVars.values, ['']],
        }
      };
    case ActionTypes.REMOVE_STYLEVAR:
      const { index } = action.payload;
      return {
        ...state,
        styleVars: {
          name: state.styleVars.name.filter((_, idx) => idx !== index),
          values: state.styleVars.values.filter((_, idx) => idx !== index),
        }
      };
    case ActionTypes.SET_LIST_ROWS:
      return { ...state, listRows: action.payload.split('\n') };
    case ActionTypes.UPDATE_STYLEVAR_NAME:
      const { index: nameIndex, value: updatedName } = action.payload;
      return {
        ...state,
        styleVars: {
          ...state.styleVars,
          name: state.styleVars.name.map((name, idx) => (idx === nameIndex ? updatedName : name)),
        }
      };
    case ActionTypes.UPDATE_STYLEVAR_VALUE:
      const { index: valueIndex, value: updatedValues } = action.payload;
      return {
        ...state,
        styleVars: {
          ...state.styleVars,
          values: state.styleVars.values.map((values, idx) => 
            (idx === valueIndex ? updatedValues.split('\n') : values)),
        }
      };
    case ActionTypes.RESET_LIST_DATA:
      return initialState;
    default:
      return state;
  }
}




//======================================================
// NOT IN USE