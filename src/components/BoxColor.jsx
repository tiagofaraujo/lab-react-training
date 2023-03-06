import React from "react";


const BoxColor =({r, g, b}) => {

    const divStyle = {
        color: 'white',
        backgroundColor: `rgb(${r},${g},${b})`
      };
      function rgb(r, g, b){
        function decToHex(c) {
          if (c < 0) return "00";
          else
            return c
              .toString(16)
              .padStart(2, "0")
              .toUpperCase()
        }
        return decToHex(r) + decToHex(g) + decToHex(b)
      }


      return (
        <div>
           <div style={divStyle}>{ `rgb(${r},${g},${b})} # ${rgb(r,g,b)}`}</div>
        </div>
      );
    }
    
export default BoxColor