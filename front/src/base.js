import React from 'react'
const Base=({
    title="myTitle",
    desc="decs",
    className="bg-dark mt-5 mt-5 p-5",
    children
})=> {
    return (
        <div>
            <div className="container-fluid text-center">
                <div className=" bg-dark text-white text-center mt-2 py-2">
                    <h2 className="display-4">
                        {title}
                    </h2>
                    <p className="lead">
                        {desc}
                    </p>
                </div >
                <div className={className}> {children}</div>
                
            </div>

            <footer className="footer container-fluid bg-dark mt-5 d-flex bd-highlight py-3">
                <div className="container-fluid bg-success text-white text-center">
                    <h4>Covid-19 Patient management System</h4>
                    <p>A small project about managing covid patients in the hospital</p>
                </div>
            </footer>
        </div>
    )
}
export default Base
