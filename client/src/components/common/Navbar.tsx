import { FaBell, FaUser } from 'react-icons/fa6';

function Navbar() {
   return (
      <div className="flex gap-x-3">
         <FaBell color="#1B60AC" size={24} style={{ marginTop: 8 }} />
         <div className="h-10 w-10 rounded-full ">
            <FaUser size={30} />
         </div>
      </div>
   );
}

export default Navbar;
