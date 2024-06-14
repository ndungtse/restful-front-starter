import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/sidebar';
import { Suspense } from 'react';
import DashBoardSkeleton from '../components/core/skeletons/DashBoardSkeleton';
import Navbar from '../components/common/Navbar';

export default function DashboardLayout({ routes }: { routes: any[] }) {
   return (
      <>
         <div className="w-full h-screen flex flex-col overflowhidden">
            <div className={'w-full h-screen flex flex-row gap-x-4 px-6 py-6  bg-[#EDF3F7]'}>
               <Sidebar eRoutes={routes} />
               <Suspense fallback={<DashBoardSkeleton />}>
                  <div className="flex flex-1">
                     <Outlet />
                  </div>
               </Suspense>
               <div className="absolute right-10">
                  <Navbar />
               </div>
            </div>
         </div>
      </>
   );
}