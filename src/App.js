import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routers/Routers';

function App() {
  
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
