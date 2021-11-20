function Checkbox() {
  return (
    <div>
      <label className="toggleButton">
        <input type="checkbox" />
        <div>
          <svg viewBox="0 0 44 44" className={`stroke-current text-red-500`}>
            <path d="M14,24 L21,31 L39.7428882,11.5937758 C35.2809627,6.53125861 30.0333333,4 24,4 C12.95,4 4,12.95 4,24 C4,35.05 12.95,44 24,44 C35.05,44 44,35.05 44,24 C44,19.3 42.5809627,15.1645919 39.7428882,11.5937758" transform="translate(-2.000000, -2.000000)"></path>
          </svg>
        </div>
      </label>

      <style jsx>{`
              .toggleButton {
                  cursor: pointer;
                  display: block;
                  transform-origin: 50% 50%;
                  transform: scale(0.8);
                  transform-style: preserve-3d;
                  transition: transform 0.14s ease;
              }
              .toggleButton:active {
                  transform: rotateX(30deg);
              }
              .toggleButton input {
                  display: none;
              }
              .toggleButton input + div {
                  border: 3px solid rgba(255, 255, 255, 0.4);
                  border-radius: 50%;
                  position: relative;
                  width: 40px;
                  height: 40px;
              }
              .toggleButton input + div svg {
                  fill: none;
                  stroke-width: 3.6;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  width: 41px;
                  height: 41px;
                  display: block;
                  position: absolute;
                  left: -3.5px;
                  top: -3.5px;
                  right: -3px;
                  bottom: -3px;
                  z-index: 0;
                  stroke-dashoffset: 124.6;
                  stroke-dasharray: 0 162.6 133 29.6;
                  transition: all 0.4s ease 0s;
              }
              .toggleButton input:checked + div svg {
                  stroke-dashoffset: 162.6;
                  stroke-dasharray: 0 162.6 28 134.6;
                  transition: all 0.4s ease 0.2s;
              }
              `}</style>
    </div>

  )
}

export default Checkbox
