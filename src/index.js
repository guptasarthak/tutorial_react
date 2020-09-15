import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return ( 
        <div>
            <h1>Hi! Sarthak</h1>
            <p>I am learning React JS so that I can build apps and website</p>
            <ul>
                <li>Iceland</li>
                <li>Croatia</li>
                <li>Brazil</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))