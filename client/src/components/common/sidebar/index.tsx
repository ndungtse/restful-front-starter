import { cn } from '@/utils/cn';
import { Menu } from '@mantine/core';
import { FC } from 'react';
import { BiChevronUp, BiLayout, BiLogOutCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
   eRoutes?: any[];
}

const sidebarRoutes = [
   {
      name: 'Dashboard',
      path: '/dashboard',
      icon: BiLayout,
   },
]

const Sidebar: FC<SideBarProps> = ({ eRoutes }) => {
   const location = useLocation();


   const isActiveLink = (linkPath: string, index: number) => {
      if (index === 0) return location.pathname === linkPath;
      console.log(location.pathname, linkPath);
      return location.pathname.startsWith(linkPath);
   };

   return (
      <>
         <div className="bg-white border-r  min-w-[230px] rounded-2xl py-4 flex flex-col">
            <Link to={'/'} className="p-8">
               {/* <Logo withText={false} /> */}
               <h1 className=' font-bold text-4xl'>RestFull</h1>
            </Link>
            {sidebarRoutes?.map((route, i) => (
               <Link to={route.path} className={cn(" w-full flex items-center", isActiveLink(route.path, i) ? "text-primary" : " text-stone-800")}>
                  <div className={cn("h-full w-2 rounded-r-lg", isActiveLink(route.path, i) ? "bg-primary" : "bg-transparent")}></div>
                  <div className=" px-8 py-2 flex items-center gap-x-4">
                     <route.icon size={25} />
                     <p className="whitespace-nowrap">{route.name}</p>
                  </div>
               </Link>
            ))}
            <button className="flex mt-auto flex-row text-primary gap-x-2  justify-center">
               <BiLogOutCircle size={24} />
               <p>Logout</p>
            </button>
         </div>
         {/* </div> */}
      </>
   );
};

// const WithSubRoutes: FC<{
//    route: any;
//    path: string;
//    opened: string;
//    setOpened: any;
// }> = ({ route, path, opened, setOpened }) => {
//    const isActiveLink = (linkPath: string) => path.startsWith(linkPath);
//    return (
//       <div key={route.name} className="w-full relative flex flex-col">
//          <Menu width={220} withArrow shadow="lg">
//             <Menu.Target>
//                <button
//                   className={`${isActiveLink(route.path)
//                      ? 'border-t border-l border-r gap-2 text-white rounded-t-xl bg-dark-blue border-medium-blue'
//                      : 'w-full flex flex-row gap-2 items-center px-4  rounded-t-xl hover:bg-dark-blue duration-300 bg-white text-[#008dd4]  hover:text-white'
//                      }
//                      w-full px-4 h-full whitespace-nowrap flex flex-row py-3`}
//                   onClick={() => setOpened(opened === route.name ? '' : route.name)}
//                >
//                   <route.icon size={route.iconSize ?? 20} />
//                   {route.name}
//                   <BiChevronUp
//                      size={25}
//                      className={`ml-auto duration-300 ${opened === route.name ? ' rotate-180' : ' rotate-0'} hover:rotate-180`}
//                   />
//                </button>
//             </Menu.Target>
//             <Menu.Dropdown p={0}>
//                {/*<div className="flex flex-col w-full hover:text-white">*/}
//                {route.routes?.map((subRoute: any, i: number) => (
//                   <Menu.Item p={0} key={i}>
//                      <Link
//                         to={subRoute.path}
//                         className={`${isActiveLink(subRoute.path)
//                            ? 'flex flex-row gap-5 items-center py-3 rounded-lg bg-color-a4 text-medium-blue '
//                            : 'flex flex-row gap-5 items-center py-3 rounded-lg text-[#008dd4] '
//                            } hover:bg-dark-blue hover:text-white px-4`}
//                      >
//                         <subRoute.icon size={subRoute.iconSize ?? 20} />
//                         <p className=" whitespace-nowrap transition-all duration-200">{subRoute.name}</p>
//                      </Link>
//                   </Menu.Item>
//                ))}
//                {/*</div>*/}
//             </Menu.Dropdown>
//          </Menu>
//       </div>
//    );
// };

export default Sidebar;
