import React, { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query"; // Fixed import statement
import * as apiClient from "../api-client"; // Added missing import for apiClient



// Create the AppContext with an initial value of undefined
const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  // State for toast messages
  const [toast, setToast] = useState(undefined);

  // Function to show a toast message
  const showToast = (toastMessage) => {
    setToast(toastMessage);
  };

  // Check if the user is logged in using a token validation query
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  

  
  
  return (
    <AppContext.Provider
      value={{
        showToast,
        isLoggedIn: !isError,
      }}
    >
      {/* Render the toast component if a toast message is present */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);

  // Ensure the context is being used within a provider
  // if (!context) {
  //   throw new Error("useAppContext must be used within an AppContextProvider");
  // }

  return context;
};
