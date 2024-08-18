import React from 'react';
import '../styles/Widget.css';
import { useDispatch } from "react-redux";
import { removeWidget } from "../redux/actions";

const Widget = ({ widget }) => {
  const dispatch = useDispatch();

  const deleteWidget = () =>{
    dispatch(removeWidget(widget.id ,widget.name));
  }
  return (
    <div className="widget-container">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button className="remove-widget-button" onClick={deleteWidget}>×</button>
    </div>
  );
};

export default Widget;
