// components/Container.js
// Wrapper for max-width + centered padding, used on all pages
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:px-8 w-full ${className}`}>
      {children}
    </div>
  );
}
