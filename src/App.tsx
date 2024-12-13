import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForms from './_auth/forms/SignUpForms';
import { Home } from './_root/pages/Home';
import './globals.css';
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
   <main className='flex h-screen'>
     <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
           <Route path="sign-in" element={<SignInForm />} />
           <Route path="sign-up" element={<SignUpForms />} />
        </Route>

        {/* Private Routes */}
        <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>

     </Routes>
   </main>
  )
}

export default App