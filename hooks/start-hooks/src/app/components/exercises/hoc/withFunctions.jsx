import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (WrappedComponent) => {
    const isAuth = localStorage.getItem("auth") !== null;

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    // eslint-disable-next-line react/display-name
    return (props) => (
        <CardWrapper>
            <WrappedComponent
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
