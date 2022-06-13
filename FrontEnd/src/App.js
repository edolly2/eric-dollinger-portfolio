import { useEffect, useState } from "react";

import LoadingPage from "./_pages/LoadingPage";
import ResponsiveTopNav from "./_components/ResponsiveTopNav";
import Stars from "./_components/Stars";

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
          <main>
            <Stars />
          </main>
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
}

export default App;
