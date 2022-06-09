import { useEffect, useState } from "react";

import LoadingPage from "./_pages/LoadingPage";
import ResponsiveTopNav from "./_components/ResponsiveTopNav";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <ResponsiveTopNav />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
