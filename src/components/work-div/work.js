import React from "react";
import "./work.css";

export default class WorkBlock extends React.Component {
    render() {
        return(
                <div className="wrapper-work">
                    

                    <br></br>
                    <div className="fon">
                    <br></br>
                    <div className="text_work">КАК МЫ РАБОТАЕМ</div>
                    <br></br>
                    <div className="how-work">
                        <div className="elements"><div className="number_work">01</div></div>
                        <div className="elements"><div className="number_work">02</div></div>
                        <div className="elements"><div className="number_work">03</div></div>
                        <div className="elements"><div className="number_work">04</div></div>
                        <div className="elements"><div className="number_work">05</div></div>
                        <br></br>
                    </div>
                    </div>
                </div>
        );
    }
}