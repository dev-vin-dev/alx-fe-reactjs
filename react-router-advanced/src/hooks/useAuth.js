import { useState } from "react";

// Simple mock auth hook (replace with real logic later if needed)
export function useAuth() {
  // Here we just simulate an "authenticated" state
  const [isAuthenticated] = useState(true); // change to false to test redirect

  return { isAuthenticated };
}
