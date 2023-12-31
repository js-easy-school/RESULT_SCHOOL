import React, { useState } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut }) => {
    const [isAuth, setIsAuth] = useState(false);

    const handleLogin = () => {
        setIsAuth(true);
        onLogin();
    };

    const handleLogOut = () => {
        setIsAuth(false);
        onLogOut();
    };

    return (
        <div>
            {isAuth ? (
                <button className="btn btn-danger" onClick={handleLogOut}>
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={handleLogin}>
                    Войти
                </button>
            )}
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired
};

export default SimpleComponent;

// import React from "react";
// import PropTypes from "prop-types";
//
// const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
//     const handleLogin = () => {
//         onLogin();
//     };
//
//     const handleLogOut = () => {
//         onLogOut();
//     };
//
//     return (
//         <div>
//             {isAuth ? (
//                 <button className="btn btn-danger" onClick={handleLogOut}>Выйти из системы</button>
//             ) : (
//                 <button className="btn btn-primary" onClick={handleLogin}>Войти</button>
//             )}
//         </div>
//     );
// };
//
// SimpleComponent.propTypes = {
//     onLogin: PropTypes.func.isRequired,
//     onLogOut: PropTypes.func.isRequired,
//     isAuth: PropTypes.bool.isRequired
// };
//
// export default SimpleComponent;
