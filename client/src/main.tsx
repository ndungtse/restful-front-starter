import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { RecoilRoot } from 'recoil';
import AppProvider from './contexts/AppProvider.tsx';
import AuthProvider from './contexts/AuthProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <AppProvider>
          <Suspense fallback={<div className=" h-screen flex items-center justify-center w-full">Loading...</div>}>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Suspense>
        </AppProvider>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>,
)
