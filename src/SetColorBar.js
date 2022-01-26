import React from 'react';

function SetColorBar({currentColor, setCurrentColor}) {
  return <form>
            <input
                type="text"
                placeholder="Set the color..." 
                value={currentColor}
                onChange={(e => setCurrentColor(e.target.value))}
            >

            </input>
        </form>;
}

export default SetColorBar;
