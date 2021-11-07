import React from 'react'

function Header() {
    return (
        <div id = 'main'>
            <div className = 'header-heading'>
                <h3>Its a Great Time for a Good Taste of Burger</h3>
                <h1><span>BURGER</span> FOR<br></br>WEEK</h1>

                <p className = 'details'>Winner Winner Burger Dinner</p>   
                <div className = 'header-btns'>
                    <a href = '/#' className='header-btn'>Order </a>
                </div>
            </div>
        </div>
    )
}

export default Header
