import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';
import Salary from '../Salary/Salary';

const Companies = () => {

    // Load data state set
    const [companies, setCompanies] = useState([]);

    // Salary calculation
    const [salaries, setSalaries] = useState([]);

    const handleAddToSalary = company => {
        const newSalaries = [...salaries, company];
        setSalaries(newSalaries);
    }

    useEffect(() => {
        fetch('companyInfo.json')
            .then(response => response.json())
            .then(data => setCompanies(data));
    } , [])

    return (
        <div>
            <div className="row ms-5">

                <div className="col-md-9 ">
                    {/* Companies load on UI */}
                    <div className="row gy-5">
                        {
                            companies.map(company => <Company
                                key={company.id}
                                company={company}
                                addSalary={handleAddToSalary}
                            />)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    {/* Salary calculation */}
                    <Salary
                        salaries={salaries}
                    />

                </div>

            </div>
        </div>
    );
};

export default Companies;