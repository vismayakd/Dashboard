import React from 'react';
import Category from './category';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const categories = useSelector(state => state.categories);
  console.log("categoriess", categories)
  return (
    <div className="dashboard-container">
      <Header />
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
