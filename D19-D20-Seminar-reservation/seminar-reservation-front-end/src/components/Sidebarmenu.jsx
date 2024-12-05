import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const SideBarMenu = () => (
    
    <div className='d-flex flex-column justify-content-space-between bg-dark text-white h-100' style={{ borderTop: '2px solid #1e1e1e' }}>
        <ul className='nav nav-pills flex-column p-0 m-0'>
            <li className="nav-item">
                <a href="/" className='nav-link text-white px-4 py-3'>
                    <MdOutlineDashboard className='fs-4'/>
                    <span className='fs-6 px-2'>Dashboard</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="/users" className='nav-link text-white px-4 py-3'>
                    <FaUsers className='fs-4'/>
                    <span className='fs-6 px-2'>Users</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="/seminars" className='nav-link text-white px-4 py-3'>
                    <FaCalendarDays className='fs-4'/>
                    <span className='fs-6 px-2'>Seminars</span>
                </a>
            </li>
        </ul>

    </div>
    
);

export default SideBarMenu;