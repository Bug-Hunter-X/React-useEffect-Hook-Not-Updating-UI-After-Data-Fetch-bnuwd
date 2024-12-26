```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []); // The empty dependency array [] ensures it only runs once on mount

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Use data directly for conditional rendering
  return (
    <div>
      {data ? (
        <div>
          {/* ... render data ... */}
          {JSON.stringify(data, null, 2)} 
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MyComponent;
```