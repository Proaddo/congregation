// src/components/ui/button.jsx

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded hover:text-white hover:bg-red-600 transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
};
