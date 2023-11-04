import React, { useState, useEffect } from "react";

const LoadingPage = () => {
  // Simulate a loading time with a state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Loading...</h1>
          {/* You can add a loading animation or other content here */}
        </div>
      ) : (
        // Redirect to the login page once loading is complete
        window.location.replace("/register")
      )}
    </div>
  );
};

export default LoadingPage;
