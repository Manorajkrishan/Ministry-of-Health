import React from 'react'
import { Link } from 'react-router-dom'

const Viewst = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-mt- 5'>
                <Link className='btn btn-primary' to={"/"}>Home</Link>
            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">Student details</li>
                <li class="list-group-item">Name : Krishan</li>
                <li class="list-group-item">Address : shanthi road</li>
                <li class="list-group-item">subject :Database</li>
                <li class="list-group-item">And a fifth one</li>
                </ul>

            </div>

        </div>

    </div>
  )
}

export default Viewst