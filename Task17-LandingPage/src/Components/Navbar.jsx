import React from 'react'

function Navbar(props) {
  return (
    <div>
        <nav>
            <a href = "">{props.children}</a>
        </nav>
    </div>
  )
}

export default Navbar