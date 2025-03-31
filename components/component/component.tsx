'use client';
import { useEffect, useState } from "react";

export function Component() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <p>Client-side rendering works!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
