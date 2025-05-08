import React from 'react';
import './Dashboard.css';
import Header from '../../component/Header/Header';

function Dashboard() {
  return (
    <>
    <Header/>
    <div className="dashboard-container">
      <div className="sidebar">
        <h3 className="sidebar-title">Admin Dashboard</h3>
        <ul className="sidebar-links">
          <li><a href="/statistiques">Statistiques</a></li>
          <li><a href="/add-product">Ajouter Produit</a></li>
        </ul>
      </div>
      <div className="content">
        <div className="card">
          <h4>Product Overview</h4>
          <p>Manage your products here</p>
        </div>
        <div className="card">
          <h4>Stock Stats</h4>
          <p>View current stock levels</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
