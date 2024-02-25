import React, { useEffect } from 'react'
import axios from 'axios'
import SalaryQueryForm from './SalaryQueryForm/SalaryQueryForm';
import './Dashboard.css'


const Dashboard = ({ login, profile, setProfile }) => {


  const downloadHandler = () => {
    axios({
      url: "http://localhost:9191/employeeSalary/getEmployeeSalaryCSV/" + profile.empId,
      method: 'GET',
      responseType: 'blob' 
    })
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'SalaryHistoryFor' + profile.firstName + profile.lastName + '.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
  }
  return (
    <>
      <div className='container'>
        <div className='profile-header'>
          <h2>{profile.firstName + " " + profile.lastName + "'s Profile"}</h2>
        </div>
        <div className='profile-div'>
            <div className='row'>
              <div className='col-4'/>
              <div className='col-2'>
                <p><b>First Name:</b></p>
              </div>
              <div className='col-2'>
                <p>{profile.firstName ? profile.firstName : ""}</p>
              </div>
              <div className='col-4'/>
            </div>
            <div className='row'>
              <div className='col-4'/>
              <div className='col-2'>
                <p><b>Last Name:</b></p>
              </div>
              <div className='col-2'>
                <p>{profile.lastName ? profile.lastName : ""}</p>
              </div>
              <div className='col-4'/>
            </div>
            <div className='row'>
              <div className='col-4'/>
              <div className='col-2'>
                <p><b>Email:</b></p>
              </div>
              <div className='col-2'>
                <p>{profile.email ? profile.email : ""}</p>
              </div>
              <div className='col-4'/>
            </div>
            <div className='row'>
              <div className='col-4'/>
              <div className='col-2'>
                <p><b>Department:</b></p>
              </div>
              <div className='col-2'>
                <p>{profile.department.name ? profile.department.name : ""}</p>
              </div>
              <div className='col-4'/>
            </div>
        </div>
        <div className='profile-header'>
          <h2>Recent Salary Payments</h2>
        </div>
        <div className='salary-payment-table '>
          <div className='row'> 
            <div className='col-2'/>
            <div className='col-8 payment-scroll'>
              <div className='row tabletop-row'>
                <div className='col-4 table-column'>
                  <b>Payment Date</b>
                </div>
                <div className='col-4 table-column'>
                  <b>Amount</b>
                </div>
                <div className='col-4 table-right-column'>
                  <b>Description</b>
                </div>
              </div>
              {profile && profile.employeeSalaries.map(employeeSalary => {return (
                  <div className='row table-row'>
                    <div className='col-4 table-column'>{employeeSalary.paymentDate.slice(0, 10)}</div>
                    <div className='col-4 table-column'>{employeeSalary.amount}</div>
                    <div className='col-4 table-right-column'>{employeeSalary.description}</div>
                  </div>
                )})}
              <div className='row salary-payment-table'>
                <div className='col-8'/>
                <div className='col-2'/>
                <div className='col-2'>
                  <button onClick={downloadHandler} className='download-btn'>Download CSV</button>
                </div>
              </div>
            </div>
            <div className='col-2'/>
          </div>
        </div>
        <div className='profile-header'>
          <h2>
            Retrieve Salary Info for a Particular Month
          </h2>
        </div>
        <div className='salary-payment-table'>
          <SalaryQueryForm profile={profile}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard