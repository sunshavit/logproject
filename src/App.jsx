import { useEffect, createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getCasesRows } from './services';

export const AppContext = createContext({
  casesRows: { isLoading: true, data: null }
})

// Fetching data will be here at the top level component
function App() {
  const [casesRows, setCasesRows] = useState({ isLoading: true, data: null })

  useEffect(() => {
    getCasesRows()
    .then(rows => setCasesRows({ isLoading: false, data: rows }))
  }, []);

  return (
    <AppContext.Provider value={{ casesRows }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
