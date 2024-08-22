import React from 'react'
import './NewProject.css'

export default function NewProject(props) {

  return (
    <>
      <div className="anncCont container d-flex mt-4">

                <div className="card lgcard border-0 w-200 mb-3">

                    <div className="row" style={{ backgroundColor: 'rgb(250 199 170)'}}>

                        <div className='card-body' id='aaa' style={{padding: '0rem 3rem' }}>

                            <div className="d-grid mt-5 mb-4" >
                                <button className="btn py-2 border-0" type="button" style={{ backgroundColor: 'rgb(243,130,33)', color: 'white', fontSize: '1.5rem' }}><strong>New Project</strong></button>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Project Title</strong></label>
                                <input type="text"  className="form-control py-3" id="exampleFormControlInput1" placeholder="Enter Project Title"/>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Project Description</strong></label>
                                <textarea className="form-control pb-5" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Project Description"></textarea>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Skills Required</strong></label>
                                <input type="text"  className="form-control py-3" id="exampleFormControlInput1" placeholder="Enter Skills Required"/>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="exampleFormControlInput1" className="form-label"><strong>Members Required</strong></label>
                                <input type="text"  className="form-control py-3" id="exampleFormControlInput1" placeholder="Enter Members Required"/>
                            </div>

                            <div className='my-5 container d-flex justify-content-center align-items-center'>
                                <button type="button"  className="btn btn-lg px-5 border-0" onClick={props.projectform} style={{ backgroundColor: 'rgb(243,130,33)', fontSize: "1.5rem", borderRadius: '5px' }}>Submit</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

    </>
  )
}
