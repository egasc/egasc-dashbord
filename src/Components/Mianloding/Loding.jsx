// import React from "react";
// import "./loding.css";
// function Loding({ progress }) {
//   return (
//     <div className="loading-stage">
//       <div className="loading-container">
//         <div class="typing-indicator">
//           <div class="typing-circle"></div>
//           <div class="typing-circle"></div>
//           <div class="typing-circle"></div>
//           <div class="typing-shadow"></div>
//           <div class="typing-shadow"></div>
//           <div class="typing-shadow"></div>
//         </div>
//         <div className="text-center mt-2">{progress && progress + "%"}</div>
//       </div>
//     </div>
//   );
// }

// export default Loding;
import React from "react";
import "./loding.css";
function Loding({ progress }) {
  return (
    <div className="loading-stage">
      <div className="loading-container">
        <div class="loader loader--style5" title="4">
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="65px"
            height="65px"
            viewBox="0 0 24 30"
            style={{
              enableBackground: "new 0 0 50 50",
            }}
            xmlSpace="preserve"
          >
            <rect x={0} y={0} width={4} height={10} fill="#333">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin={0}
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x={10} y={0} width={4} height={10} fill="#333">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.2s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x={20} y={0} width={4} height={10} fill="#333">
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="translate"
                values="0 0; 0 20; 0 0"
                begin="0.4s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
        <div className="text-center mt-2" style={{"color":"#fff"}}>{progress && progress + "%"}</div>
      </div>
    </div>
  );
}

export default Loding;
