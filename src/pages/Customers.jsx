import React from 'react'

import Table from '../components/table/Table'

import scholarList from '../assets/JsonData/scholars-list.json'

const customerTableHead = [
    '',
    'name',
    'Ronin',
    'Manager Share',
    'Isko Share',
    'Total Slp',
    'Average'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.eth}</td>
        <td>{item.managerShare}</td>
        <td>{item.iskoShare}</td>
        <td>{item.totalSlp}</td>
        <td>{item.average}</td>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={scholarList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
