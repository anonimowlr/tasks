import React from 'react';




const Button = ({children,funcaoOnclick}) => {
    return (
        <button onClick={funcaoOnclick} className="button">
            {children}

        </button>
      );
}
 
export default Button;