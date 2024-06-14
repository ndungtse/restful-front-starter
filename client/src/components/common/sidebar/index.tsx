import { Menu } from '@mantine/core';
import { FC, useState } from 'react';
import { BiChevronUp, BiLogOutCircle } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

interface SideBarProps {
   routes?: any;
   eRoutes?: any[];
}

const Sidebar: FC<SideBarProps> = ({ eRoutes }) => {
   const [opened, setOpened] = useState('');
   const [mobileNav, _setMobileNav] = useState(false);
   const location = useLocation();

   const isActiveLink = (linkPath: string, index: number) => {
      if (index === 0) return location.pathname === linkPath;
      console.log(location.pathname, linkPath);
      return location.pathname.startsWith(linkPath);
   };

   return (
      <>
         <div className="bg-white drop-shadow-xl   min-w-[230px] rounded-2xl px-4 py-4 flex flex-col">
            <Link to={'/'} className="py-8">
               {/* <Logo withText={false} /> */}
            </Link>
            {eRoutes?.map((route: any, i: any) => (
               <Link
                  key={i}
                  to={route.path}
                  className={`${isActiveLink(route.path, i)
                     ? 'w-full  items-center px-4 flex flex-row gap-x-2 rounded-lg bg-[#1B60AC] text-white duration-300 '
                     : 'w-full items-center px-4 flex flex-row gap-x-2 text-[#4F4F4F] rounded-lg hover:bg-[#1B60AC] duration-300 hover:text-white'
                     } py-3 whitespace-nowrap`}
               >
                  <route.icon isActive={isActiveLink(route.path, i)} size={route.iconSize ?? 24} />
                  <p className=" whitespace-nowrap">{route.name}</p>
               </Link>
            ))}
            <button className="flex flex-row text-[#1D5FAD] gap-x-2 py-[30%] justify-center">
               <BiLogOutCircle size={24} />
               <p>Logout</p>
            </button>
         </div>
         {/* </div> */}
      </>
   );
};

const WithSubRoutes: FC<{
   route: any;
   path: string;
   opened: string;
   setOpened: any;
}> = ({ route, path, opened, setOpened }) => {
   const isActiveLink = (linkPath: string) => path.startsWith(linkPath);
   return (
      <div key={route.name} className="w-full relative flex flex-col">
         <Menu width={220} withArrow shadow="lg">
            <Menu.Target>
               <button
                  className={`${isActiveLink(route.path)
                     ? 'border-t border-l border-r gap-2 text-white rounded-t-xl bg-dark-blue border-medium-blue'
                     : 'w-full flex flex-row gap-2 items-center px-4  rounded-t-xl hover:bg-dark-blue duration-300 bg-white text-[#008dd4]  hover:text-white'
                     }
                     w-full px-4 h-full whitespace-nowrap flex flex-row py-3`}
                  onClick={() => setOpened(opened === route.name ? '' : route.name)}
               >
                  <route.icon size={route.iconSize ?? 20} />
                  {route.name}
                  <BiChevronUp
                     size={25}
                     className={`ml-auto duration-300 ${opened === route.name ? ' rotate-180' : ' rotate-0'} hover:rotate-180`}
                  />
               </button>
            </Menu.Target>
            <Menu.Dropdown p={0}>
               {/*<div className="flex flex-col w-full hover:text-white">*/}
               {route.routes?.map((subRoute: any, i: number) => (
                  <Menu.Item p={0} key={i}>
                     <Link
                        to={subRoute.path}
                        className={`${isActiveLink(subRoute.path)
                           ? 'flex flex-row gap-5 items-center py-3 rounded-lg bg-color-a4 text-medium-blue '
                           : 'flex flex-row gap-5 items-center py-3 rounded-lg text-[#008dd4] '
                           } hover:bg-dark-blue hover:text-white px-4`}
                     >
                        <subRoute.icon size={subRoute.iconSize ?? 20} />
                        <p className=" whitespace-nowrap transition-all duration-200">{subRoute.name}</p>
                     </Link>
                  </Menu.Item>
               ))}
               {/*</div>*/}
            </Menu.Dropdown>
         </Menu>
      </div>
   );
};

export default Sidebar;
