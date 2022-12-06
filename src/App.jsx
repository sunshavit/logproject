import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// Fetching data will be here at the top level component
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
