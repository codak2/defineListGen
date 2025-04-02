import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(callback, delay, dependencies = []) {
  // Use the custom useTimeout hook to handle the debouncing.
  const { reset, clear } = useTimeout(callback, delay);

  // Reset the debounce when the dependencies change.
  useEffect(() => {
    reset(); // Call the reset function from useTimeout
  }, [...dependencies, reset]); // Ensure that reset is recalculated whenever dependencies change.

  // Clear the timeout when the component unmounts or when the debounce delay changes.
  useEffect(() => {
    clear(); // Clean up the timeout when component is unmounted
  }, [clear]);

  // Return any other necessary data, though typically, you'd be using the reset and clear internally.
}
