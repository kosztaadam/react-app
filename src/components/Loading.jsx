import React from "react";
import $ from 'jquery';

class Loading extends React.Component {

    render() {

        if (this.props.loading == 'loading') {
            $(".right_container").hide();
            $(".loading").show();
        } else {
            $(".right_container").show();
            $(".loading").hide();
            return false;
        }

        return (
            <div>
                <div className="spinner">
                    <div className="dot1"/>
                    <div className="dot2"/>
                </div>
            </div>
        )
    }
}

export default Loading