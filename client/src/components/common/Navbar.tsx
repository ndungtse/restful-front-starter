import { showSidebarState } from '@/utils/atoms';
import { ActionIcon } from '@mantine/core';
import { BiSearch, BiSidebar } from 'react-icons/bi';
// import { FaCog } from 'react-icons/fa';
import { FaBell, FaUser } from 'react-icons/fa6';
import { useRecoilState } from 'recoil';

function Navbar() {
   const [showSidebar, setShowSidebar] = useRecoilState(showSidebarState);
   console.log(showSidebar);

   const openSidebar = () => setShowSidebar(true);

   return (
      <div className="flex gap-x-3 w-full p-3 px-6 bg-white items-center justify-between border-b">
         <div className="flex items-center gap-x-3">
            {<ActionIcon onClick={openSidebar} className='lg:!hidden' variant='transparent'>
               <BiSidebar className=' text-black' size={30} />
            </ActionIcon>
            }
            <h1 className=' font-semibold text-xl'>Dashboard</h1>
         </div>
         <div className="flex items-center gap-x-6">
            <div className="flex rounded-3xl items-center bg-light px-5 py-2">
               <BiSearch size={20} />
               <input type="text" placeholder="Search" className="bg-transparent px-2 w-full outline-none" />
            </div>
            {/* <ActionIcon radius={'100%'} size={'xl'} className=' !bg-light text-lightText'>
               <BiCog size={24} className=' text-lightText' />
            </ActionIcon> */}
            <ActionIcon radius={'100%'} size={'xl'} className=' !bg-light text-lightText'>
               <FaBell size={24} className=' text-lightText' />
            </ActionIcon>
            <div className="p-2 border flex items-center justify-center bg-stone-100 rounded-full ">
               <FaUser size={30} />
            </div>
         </div>
      </div>
   );
}

export default Navbar;
