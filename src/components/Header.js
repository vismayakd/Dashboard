import React,  {useState} from 'react';
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/actions";
import '../styles/Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newcateg, setNewCateg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCategory(newcateg));
        setNewCateg('');
        setIsFormVisible(false);
      };
    
  return (
    <div className="header-container">
        {!isFormVisible &&
       <button className="add-categ-button" onClick={() => setIsFormVisible(!isFormVisible)}>
        + ADD CATEGORY
        </button>
        }
      {isFormVisible && (
        <form className="align-left" onSubmit={handleSubmit}>
          <div>
            <label>
              Category Name
              <input 
                type="text" 
                value={newcateg} 
                onChange={(e) => setNewCateg(e.target.value)} 
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Header;
