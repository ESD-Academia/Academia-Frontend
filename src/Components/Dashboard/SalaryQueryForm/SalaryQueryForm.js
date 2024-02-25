import React, { useState } from 'react'
import axios from 'axios'
import './SalaryQueryForm.css'

const SalaryQueryForm = ({ profile }) => {
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [queryStat, setQueryStat] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios({
            url: "http://localhost:9191/employeeSalary/getEmployeeSalaryPDF/" + profile.empId + "/" + year + "/" + month,
            method: 'GET',
            responseType: 'arraybuffer'
        })
        .then(response => {
            setQueryStat(true)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'SalarySlip' + year + '-' + month + '.pdf');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        }).catch((error) => {
            console.log(error)
            setQueryStat(false)
        })
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='row form-row'>
                <div className='col-4'/>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <label>
                                Year:
                            </label>
                        </div>
                        <div className='col-6'>
                            <input type='text' value={year} onChange={e => setYear(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='col-4'/>
            </div>
            <div className='row form-row'>
                <div className='col-4'/>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <label>
                                Month:
                            </label>
                        </div>
                        <div className='col-6'>
                            <input type='text' value={month} onChange={e => setMonth(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className='col-4'/>
            </div>
            {!queryStat ? <div className='row form-row'>
            <div className='col-4'/>
                <div className='col-4'>
                    <p style={{color: 'red'}}>Please enter correct Year or Month</p>
                </div>
                <div className='col-4'/>
            </div> : ""}
            <div className='row form-row'>
                <div className='col-4'/>
                <div className='col-4'>
                    <button type='submit' className='download-btn'>Download PDF</button>
                </div>
                <div className='col-4'/>
            </div>
        </form>
    </div>
  )
}

export default SalaryQueryForm