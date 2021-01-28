import React from 'react'

export default function Signup() {
    return (
        <div className="card m-2">
            <div className="card-header">
                <h5 className="card-title">Edit Profil</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Username</label>
                            <input type="text" className="form-control" id="inputUserName" placeholder="" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >First Name</label>
                            <input type="text" className="form-control" id="inputFirstName" placeholder="First Name ...." />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Last Name</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Last Name..." />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Address...." />
                        </div>
                        <div className="form-group col-md-3">
                            <label>Country</label>
                            <input type="text" className="form-control" id="inputCounty" />
                        </div>
                        <div className="form-group col-md-3">
                            <label>City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label>Country</label>
                            <input type="text" className="form-control" id="inputCounty" />
                        </div>
                        <div className="form-group col-md-4">
                            <label>City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label class="form-check-label" for="gridCheck1">
                                ADMIN</label>
                        </div>
                    </div>
                    <div className="form-row mt-2">
                        <div className="form-group col-md-6">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
