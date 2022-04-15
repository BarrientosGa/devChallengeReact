import React from 'react'

const Header = () => {
    return (
        <div className='navbar navbar-dark bg-dark container-fluid'>
            <button className='btn btn-outline-danger'>
                <i className='fas fa-sign-out-alt'></i>
                <span> Salir</span>
            </button>
        </div>
    )
}

export default Header