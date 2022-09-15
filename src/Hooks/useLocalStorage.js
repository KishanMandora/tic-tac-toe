import { useState, useEffect } from "react";

function useLocalStorage(initialValue, key) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  });

  return [state, setState];
}

export { useLocalStorage };
