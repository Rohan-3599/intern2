import React from 'react'

const footer = () => {
    return (
       < footer className="footer-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-text">
                        <div className="reserved">
Copyright &copy;{(new Date().getFullYear())} All rights reserved | This Website is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="#" target="_blank">Rohan Sinha</a>
</div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default footer
