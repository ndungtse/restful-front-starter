import { cn } from '@/utils/cn';
import { BiLayout, BiLogOutCircle } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const sidebarRoutes = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: BiLayout,
    },
]


const NavbarItems = () => {
    const location = useLocation();


    const isActiveLink = (linkPath: string, index: number) => {
        if (index === 0) return location.pathname === linkPath;
        console.log(location.pathname, linkPath);
        return location.pathname.startsWith(linkPath);
    };
    return (
        <>
            <Link to={'/'} className="p-8 mx-auto flex justify-center">
                {/* <Logo withText={false} /> */}
                <h1 className=' font-bold text-4xl'>RestFull</h1>
            </Link>
            {sidebarRoutes?.map((route, i) => (
                <Link to={route.path} className={cn(" w-full flex items-center", isActiveLink(route.path, i) ? "text-primary" : " text-stone-800")}>
                    <div className={cn("w-2 flex h-11 rounded-r-lg", isActiveLink(route.path, i) ? "bg-primary" : "bg-transparent")}></div>
                    <div className="w-full px-8 py-2 flex items-center gap-x-4">
                        <route.icon size={25} />
                        <p className="whitespace-nowrap">{route.name}</p>
                    </div>
                </Link>
            ))}
            <button className="flex w-full px-8 py-2 mt-auto flex-row text-primary gap-x-2 ">
                {/* <div className={cn("h-full w-2 rounded-r-lg")}></div> */}
                <BiLogOutCircle size={24} className='ml-2' />
                <p>Logout</p>
            </button>
        </>
    )
}

export default NavbarItems