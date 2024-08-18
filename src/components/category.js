import React , {useState} from 'react';
import Widget from './widget';
import { useDispatch } from "react-redux";
import { addWidget } from "../redux/actions";
import '../styles/Category.css';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [newWidgetForm, setNewWidgetForm] = useState(false);
  const [newwidgetname,setNewWidgetName] = useState('')
  const [newwidgettext,setNewWidgetText] = useState('')
  
  const addNewWidget = () =>{
    setNewWidgetForm(true);
  }
  const closeWidgetForm = () =>{
    setNewWidgetForm(false); 
  }
  const handleInput = (event) => {
    setNewWidgetName(event.target.value);
  }
  const handleTextInput = (event) =>{
    setNewWidgetText(event.target.value);
  }
  const saveNewWidget = () =>{
    dispatch(addWidget(category.name, newwidgetname, newwidgettext));
  }
  return (
    <div className="category-container">
      <h2>{category.name}</h2>
      {category && !category.widgets &&
        <div className="widgets-container">
           <button className="add-widget-button" onClick={addNewWidget}>+ ADD WIDGET</button>
        </div>  
      }
      {category.widgets &&
        <div className="widgets-container">
          
          
            {category.widgets.map(widget => (
              <Widget key={widget.id} widget={widget} />
            ))}
          <button className="add-widget-button" onClick={addNewWidget}>+ ADD WIDGET</button>
        </div>
        }
        {newWidgetForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeWidgetForm}>&times;</span>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter Widget name" onChange={handleInput} ></input>
              </div>
              <div className="form-group">
                <label>Text</label>
                <textarea name="message" placeholder="Enter Widget Text"  onChange={handleTextInput}></textarea>
              </div>
              <button type="submit" className="submit-btn" onClick={saveNewWidget}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
