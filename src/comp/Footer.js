import React from "react";


class Footer extends React.Component{
    render(){
        return(
            <div className="fixed-bottom">
                <footer className="text-center text-lg-start bg-light text-dark">
                    <div className="row p-5 justify-content-center g-2">
                        <div className="col-lg-5 col-md-12 mb-4 mb-md-0 border-end ms-2 me-2">
                            <h5 className="text-uppercase">Footer text</h5>

                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>

                        <div className="col-lg-5 col-md-12 mb-4 mb-md-0 ms-2 me-2">
                            <h5 className="text-uppercase">Footer text</h5>

                            <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                            aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                    </div>
                    <div className="text-center p-4">
                        © 2021 Copyright:
                        <a className="text-reset fw-bold" href="/">MDBootstrap.com</a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer