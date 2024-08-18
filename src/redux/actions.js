// Action Types
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_WIDGET = 'ADD_WIDGET';
export const REMOVE_WIDGET = 'REMOVE_WIDGET';

// Action Creators

export const addCategory = (newcateg) => ({
    type: ADD_CATEGORY,
    payload: newcateg,
  });
export const addWidget = (categname, widgetname, widgettext) => ({
  type: ADD_WIDGET,
  payload: { categname, widgetname, widgettext }
});

export const removeWidget = (widgetId, widgetname) => ({
  type: REMOVE_WIDGET,
  payload: { widgetId, widgetname }
});
