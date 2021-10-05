import React from 'react';

const Company = props => {

    const { companyName, ceoName, img, salary, address } = props.company;
    
    return (
        <div className="col-md-6">
            <div className="card h-100 bg-secondary bg-gradient shadow-lg" style={{ maxWidth: '500px', }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-circle" alt="ceo-img" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-text"><span className="text-warning">{ceoName}</span> </h5>
                            <h6 className="card-title">CEO at <span className="text-info">{companyName}</span></h6>
                            <p className="text-light">Address:<small> {address} </small>.</p>
                            <p className="text-warning">Salary: {salary} BDT.</p>
                            <button
                                onClick={() => props.addSalary(props.company)}
                                className="btn btn-primary"><i class="fas fa-shopping-bag"></i> Add to salary
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Company;
