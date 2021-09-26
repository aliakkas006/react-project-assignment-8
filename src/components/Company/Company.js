import React from 'react';

const Company = props => {
    console.log(props.company);
    const { companyName, ceoName, img, salary, address } = props.company;
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img-fluid rounded-start" alt="ceo-img" />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{companyName}</h5>
                            <p className="card-text"> {ceoName} </p>
                            <p><small> ${salary} </small></p>
                            <p><small> {address} </small></p>
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Company;