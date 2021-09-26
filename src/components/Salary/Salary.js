import React from 'react';
import SalaryData from '../SalaryData/SalaryData';

const Salary = props => {
    
    const { salaries } = props;

    const totalSalary = salaries.reduce((previousValue, currentValue) => previousValue + currentValue.salary, 0);

    // Total person calculation
    const totalPerson = salaries.reduce((previousValue, currentValue) => previousValue + currentValue.person, 0);

    return (
        <div className="border border-4 p-3 me-3">
                <h6 className="text-warning">Central Executive Officer's salary</h6>
                {
                salaries.map(company => <SalaryData
                        key={company.id}
                        company={company}
                    />)
                }
            <h4 className="text-light"><i class="fas fa-user-friends text-info"></i> {totalPerson} </h4>
                <h4 className="text-light">Total salary: {totalSalary} BDT.</h4>           

        </div>
    );
};

export default Salary;