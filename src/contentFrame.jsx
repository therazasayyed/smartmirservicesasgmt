import React from "react";

const ContentFrame = (props) => {

    return (
        <div className="col-lg-6">
            <div id='frameOne'>
                <div className={`${props.frame453} ${props.frameOneImg}`}>
                    {props.children && props.children}
                    <div className="title frame-title">
                        <p>
                            {props.title}
                        </p>
                    </div>
                    <div className="title frame-text">
                        <p>
                            {props.paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentFrame;