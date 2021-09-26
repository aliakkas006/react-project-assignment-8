import React, { useEffect, useState } from 'react';
import Company from '../Company/Company';

const Companies = () => {

    // Load data
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('companyInfo.json')
            .then(response => response.json())
            .then(data => setCompanies(data));
    } , [])

    return (
        <div>
            <div className="row">

                <div className="col-md-9">
                    {/* Companies load on UI */}
                    <div className="row">
                        {
                            companies.map(company => <Company
                                key={company.key}
                                company={company}
                            />)
                        }
                    </div>
                </div>

                <div className="col-md-3">
                    {/* Cart calculation */}
                    {/* <Cart
                        cart={cart}
                    /> */}

                </div>

            </div>
        </div>
    );
};

export default Companies;