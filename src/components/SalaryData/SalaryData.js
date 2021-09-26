import React from 'react';

const SalaryData = props => {
    const { ceoName, salary } = props.company;
    return (
        <ul>
            <li className="text-light"> {ceoName} </li>
            <p className="text-light">__ Salary: {salary} BDT.</p>
        </ul>
    );
};

export default SalaryData;