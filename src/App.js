import './App.css';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CollectionsDetailPage from './pages/CollectionsDetailPage';
import PaintingPage from './pages/PaintingPage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AboutPage from './pages/AboutPage';



// import { Provider } from 'react-redux';
// import appStore from './app/store';

function App() {
  const RootLayout = () => (
    <div>

    <Header />

    <main>
      <Outlet />  {/* This renders the matched child route */}
    </main>
    <Footer />
  </div>
);

  
  const appRouter=createBrowserRouter([
    {
    path: "/",
    element: <RootLayout />,  // Layout wraps all child routes
    errorElement: <ErrorPage />,  // For errors in this tree
    children: [
      { index: true,
         element: <HomePage /> 
      },  
      {
        path:"signup",
        element:<SignUp/>
      }, 
      {
        path:"signin",
        element:<SignIn/>
      },           
      { path: "collection/:id", 
        element: <CollectionsDetailPage /> 
      },        
      { 
        path: "painting/:id", 
        element: <PaintingPage /> 
      },
      {
        path:"about",
        element:<AboutPage/>
      },
      {
        path:"contact",
        element:<ContactPage/>
      },   
    ],
  },
  
]);
      
    return(
     
        <RouterProvider router={appRouter} />
     
  );
  }
 

export default App;
