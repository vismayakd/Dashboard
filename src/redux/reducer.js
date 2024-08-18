import { ADD_CATEGORY, ADD_WIDGET, REMOVE_WIDGET } from './actions';

const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
        { id: 2, name: "Widget 2", text: "Random text for Widget 2" }
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [{ id: 3, name: "Widget 3", text: "Random text for Widget 3" }]
    }
  ]
};

// eslint-disable-next-line import/no-anonymous-default-export
const roorReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_CATEGORY:
        const newCategoryList = [...state.categories];
        newCategoryList.push({
            id:Math.random(),
            name: action.payload,
        });
        return {
          ...state,
          categories: newCategoryList,
        };

    case ADD_WIDGET:
        const updatedCategories = state.categories.map(categ =>
          categ.name === action.payload.categname
            ? {
                ...categ,
                widgets: [
                  ...(categ.widgets|| []),
                  {
                    id: Math.random(),
                    name: action.payload.widgetname,
                    text: action.payload.widgettext
                  }
                ]
              }
            : categ
        );
        
        console.log('Updated Categories:', updatedCategories);
        
        return {
          ...state,
          categories: updatedCategories
        };
        
        

    case REMOVE_WIDGET:

      const CategoriesList = state.categories.map(category => {
        if (category.widgets.some(widget => widget.name === action.payload.widgetname)) {
          return {
            ...category,
            widgets: category.widgets.filter(widget => widget.name !== action.payload.widgetname) 
          };
        }
        return category;
      });

      return {
        ...state,
        categories: CategoriesList
      };
    default:
      return state;
  }
};
export default roorReducer;
