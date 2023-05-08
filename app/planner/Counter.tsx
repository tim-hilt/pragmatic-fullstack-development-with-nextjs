"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-2xl my-3">Counter</h2>
      <div className="flex flex-col items-center">
        <div className="text-xl">Count: {count}</div>
        <div className="space-x-4 mt-3 text-xl">
          <button onClick={() => setCount((c) => c - 1)}>-</button>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
