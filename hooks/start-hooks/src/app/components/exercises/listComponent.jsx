import React from "react";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
    const numberedChildren = React.Children.map(children, (child, index) => {
        return (
            <div>
                <span>{index + 1}. </span>
                {child}
            </div>
        );
    });

    return <div>{numberedChildren}</div>;
};

ListComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default ListComponent;

