// This file intentionally redirects to the canonical blogs page.
// The real implementation lives in page.jsx.
// Having both page.js and page.jsx causes a Next.js route conflict (404).
// Keeping this as a re-export resolves the conflict without deleting a file.
export { default } from "./page.jsx";
