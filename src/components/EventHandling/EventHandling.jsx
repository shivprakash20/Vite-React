import { useState } from 'react';
import './EventHandling.scss';

const EventHandlingPractice = () => {
    
  const [text, setText] = useState('');
  const [hoverMessage, setHoverMessage] = useState('Hover over me!');
  const [count, setCount] = useState(0);

  // Click event
  const handleClick = () => {
    alert('Button Clicked!');
    setCount(count + 1);
  };

  // Input change event
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Mouse enter and leave event
  const handleMouseEnter = () => setHoverMessage('You hovered over me!');
  const handleMouseLeave = () => setHoverMessage('Hover over me!');

  // Keydown event (Replaces deprecated onKeyPress)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You pressed Enter! Input: ${text}`);
    }
  };

  // Double-click event
  const handleDoubleClick = () => {
    alert('You double-clicked!');
  };

  // Focus and Blur events
  const handleFocus = () => console.log('Input focused');
  const handleBlur = () => console.log('Input lost focus');

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title text-primary">Event Handling Practice</h2>

          {/* Button Click Event */}
          <button className="btn btn-success my-2" onClick={handleClick}>
            Click Me
          </button>
          <p className="text-muted">Button Clicked: {count} times</p>

          {/* Input Events */}
          <input
            type="text"
            className="form-control my-2"
            placeholder="Type something..."
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <p className="text-muted">Typed Text: {text}</p>

          {/* Hover Event */}
          <p
            className="text-info"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onDoubleClick={handleDoubleClick} // New event
            style={{ cursor: 'pointer' }}
          >
            {hoverMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventHandlingPractice;