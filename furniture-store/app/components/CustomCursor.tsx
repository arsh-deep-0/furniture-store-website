import { useEffect, useState } from 'react';
import '../css/app.css'; // Create a CSS module for styling

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
   <div>
    <div className="cursor-dot"></div>
    <div className="cursor-outline"></div>
   </div>
  );
};

export default CustomCursor;
