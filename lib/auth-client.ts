import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const authClient = createAuthClient({
  // you can pass client configuration here if desired
});

// Small helper that starts the OAuth flow by redirecting to the server handler.
// This keeps the client-side code decoupled from the exact server route shape.
export function signInWithProvider(provider: string) {
  // matches the server catch-all route at /api/auth/[...all]
  if (typeof window !== "undefined") {
    window.location.href = `/api/auth/oauth/${encodeURIComponent(provider)}`;
  }
}
