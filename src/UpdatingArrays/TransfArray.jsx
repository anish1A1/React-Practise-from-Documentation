import { useState } from "react";

export default function TransfArray() {
    
    let initialShapes = [
        { id: 0, type: 'circle', x: 50, y: 1000 },
        { id: 2, type: 'circle', x: 250, y: 1000 },
        { id: 1, type: 'square', x: 150, y: 1000 },
      ];
      
      const [shapes, setShapes] = useState(initialShapes);
      
      function handleClick() {
        const nextShapes = shapes.map(shape => {
          if (shape.type === 'square') {
            // No change
            return shape;
          } else {
            // Return a new circle 50px below
            return {
              ...shape,
              y: shape.y + 50,
            };
          }
        });
        // Re-render with the new array
        setShapes(nextShapes);
      }
      
      return (
        <>
          <button onClick={handleClick}>
            Move circles down!
          </button>
          {shapes.map(shape => (
            <div
              key={shape.id}
              style={{
              background: 'green',
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              borderRadius:
                shape.type === 'circle'
                  ? '50%' : '',
              width: 20,
              height: 20,
            }} />
          ))}
        </>
      );
    }
    