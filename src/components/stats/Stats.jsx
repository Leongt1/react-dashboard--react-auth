import React from 'react'

import './stats.scss';

const UserData = () => {
  return (
    <section className='stats'>

      <div className="card-item">
        <span className='revenue-icon'>
          <img src="revenue.png" alt="" />
        </span>
        <div className="card-data">
          <div className="data">
            <h4>Total Revenues</h4>
            <span>$2,129,430</span>  
          </div>
          <span className="status">
            +2.5%
          </span>
        </div>
      </div>

      <div className="card-item">
        <span className='transaction-icon'>
          <img src="transaction.png" alt="" />
        </span>
        <div className="card-data">
          <div className="data">
            <h4>Total Transactions</h4>
            <span>1,520</span>  
          </div>
          <span className="status">
            +1.7%
          </span>
        </div>
      </div>

      <div className="card-item">
      <span className='like-icon'>
          <img src="thumbsup.png" alt="" />
        </span>
        <div className="card-data">
          <div className="data">
            <h4>Total Likes</h4>
            <span>9,721</span>  
          </div>
          <span className="status">
            +1.4%
          </span>
        </div>
      </div>      

      <div className="card-item">
        <span className='users-icon'>
          <img src="users.png" alt="" />
        </span>
        <div className="card-data">
          <div className="data">
            <h4>Total Users</h4>
            <span>9,721</span>  
          </div>
          <span className="status">
            +4.2%
          </span>
        </div>
      </div>
    </section>
  )
}

export default UserData