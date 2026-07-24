const Button = ({ children }) => {
  return (
    <button
      className="
      px-7
      py-3
      rounded-xl
      bg-sky-500
      hover:bg-sky-400
      transition-all
      duration-300
      font-semibold
      "
    >
      {children}
    </button>
  );
};

export default Button;