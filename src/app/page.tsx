import ExeivPage from "./page-client";

/**
 * Server component entry point.
 * Keeps the root page a React Server Component — all client-side
 * interactivity lives inside ExeivPage (marked "use client").
 */
export default function Page() {
  return <ExeivPage />;
}
