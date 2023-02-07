import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


export const Ayuda = () => {

    return (
        <>
            <div className="container text-center" style={{height:"75vh", backgroundImage: `url("https://res.cloudinary.com/dmo7sg1on/image/upload/v1674325248/TEAyudo_App_-_Isotipo_qzc6k4.svg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} >
                <div className="col-5 bg-white position-absolute top-50 start-50 translate-middle text_azul border border-3 border-dark">
                    {/* <div className="m-3"> */}
                        <h2>
                            COMO UTILIZAR TEAyudoApp:
                        </h2>
                        <div className="col">
                            <ReactPlayer
                            url="https://res.cloudinary.com/dmo7sg1on/video/upload/v1675786429/TEAyudo_nwllgu.mp4"
                            className='react-player'
                            playing={false}
                            width='100%'
                            height='100%'
                            controls={true}
                            />
                            
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}