import { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    // Automatically close the toast after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer); // Clear the timer on component unmount
    };
  }, [onClose]);

  // Apply different styles based on the toast type
  const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white max-w-md"
      : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white max-w-md";

  return (
    <div className={styles}>
      <div className="flex justify-center items-center">
        <span className="text-lg font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
