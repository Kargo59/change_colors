import React from 'react';

function ColorDisplay({currentColor}) {
    return <div className="colorBox"
                style={{backgroundColor: currentColor}}  
            >
    </div>
  }

export default ColorDisplay;
