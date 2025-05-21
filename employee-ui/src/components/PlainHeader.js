import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsChatDots, BsChevronDown, BsChevronUp, BsCreditCard2Back } from 'react-icons/bs'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdAccountBalance, MdLogout, MdOutlineAddTask, MdOutlineMessage } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { apiUrl } from '../Variables'
import { useAppContext } from '../context/AppContext'
import logo from '../images/aceva.png'

function PlainHeader({ mobileSidebar, setMobileSidebar, isMobile, toggleLoggedInState}) {

  const [dropdownToggle, setDropdownToggle] = useState(false)
  const [mode, setMode] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light-theme')
  const [userDetails, setUserDetails] = useState({})
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

  const {userInfo, sidebarToggle, setSidebarToggle} = useAppContext();
  /* Method that will fix header after a specific scrollable */
  const scrollHandler = () => {
      const header = document.querySelector('header');
      const scrollTop = window.scrollY;
      (scrollTop >= 200) ? header.classList.add('active') : header.classList.remove('active');
  }

  useEffect(() => {
    if(isMobile) {
      window.addEventListener('scroll', scrollHandler)
        return () => {
          window.removeEventListener('scroll', scrollHandler)
      }
    }
  }, [isMobile , userInfo])

  // get user details
  useEffect(() => {
    const fetchUser = async () => {
      try {

        // Retrieve userInfo from localStorage
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (!userInfo || !userInfo.token) {
          console.error('User token not found.');
          return;
        }

        // Add headers to include JWT token
        const headers = {
          Authorization: `Bearer ${userInfo.token}`,
        };

        const {data} = await axios.get(`${apiUrl}/user/${userInfo?._id}`, {headers})
        setUserDetails(data)

        const {data:userData} = await axios.get(`${apiUrl}/user`, {headers})
        setUsers(userData)

      } catch (error) {
        console.log('user fetch fail:', error)
      }
    }
    fetchUser();
  },[])

  console.log('userDetails', userDetails)

  // logout handler
  const handleLogout = async () => {

    // Clear the local storage
    await localStorage.clear();
    if (typeof toggleLoggedInState === 'function') {
      toggleLoggedInState()
    }
    navigate('/login')
      
  }

  const toggleTheme = () => {
    setMode(!mode)
    if(theme == 'light-theme') {
      localStorage.setItem('theme', 'dark-theme')
      const dark = localStorage.getItem('theme')
      setTheme(dark)
    } else {
      localStorage.setItem('theme', 'light-theme')
      const light = localStorage.getItem('theme')
      setTheme(light)  
    }
  }

  useEffect(() => {
    document.body.className = theme; 
  }, [theme, mode])

  // console.log('userInfo from header:', userInfo)
  
  return (
    <>
      <header>
        {/* header option */}
        <div className="header-option">

          <Link to="/">
            <div className="plain-header-logo">
              <img src={logo} alt="header logo" />
            </div>
          </Link>

          {/* <div className="mode" onClick={toggleTheme}>
            { mode ? <MdDarkMode />  : <MdOutlineLightMode /> }
          </div> */}
          
        </div>
        {/* header profile */}
        <div className="header-profile" onClick={() => setDropdownToggle(!dropdownToggle)}>

          {/* navbar */}
          <div className="header-nav">
            <ul>
              <Link to="/chatlogs">
                <li>
                  <MdOutlineMessage />
                  <span>Chatlogs</span>
                </li>
              </Link>
              
              <Link to="/billing">
                <li>
                  <BsCreditCard2Back />
                  <span>Billing</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* profile */}
          <div className='relative'>
            <div className='header-logo-wrap new-header-logo-wrap'>
              {
                userDetails?.profile_image && (
                  <div className='header-logo'>
                    <img src={userDetails?.profile_image ? `${userDetails?.profile_image}` : 'https://cdn3d.iconscout.com/3d/premium/thumb/trendy-person-avatar-6299537-5187869.png'} alt="header" />
                  </div>
                )
              }
              
              <div className='header-logo-content'>

                  {
                  userDetails?.first_name && <p>{userDetails?.first_name} {userDetails?.last_name}</p>
                  } 

                  { dropdownToggle ? <BsChevronUp /> : <BsChevronDown /> }
                  {userDetails?.first_name && userDetails?.role && <p className="role-badge">{userDetails?.role}</p>} 
                </div>
            </div>
            {
              dropdownToggle && (
                <div className="dropdown-wrapper">
              <ul>
                {/* <Link to="/billing" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <li>
                    <MdAccountBalance />
                    <span>Accounts & Billing</span>
                  </li>
                </Link> */}
                <Link to="/settings" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <li>
                    <IoSettingsOutline />
                    <span>Settings</span>
                  </li>
                </Link>
                {/* <Link to="/billing" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <li>
                    <MdOutlineAddTask />
                    <span>Add Plan</span>
                  </li>
                </Link> */}
                <Link to="/chatlogs" className={({ isActive }) =>isActive ? "active-link" : ""}>
                  <li>
                    <BsChatDots />
                    <span>Chatlogs</span>
                  </li>
                </Link>
                
                <Link onClick={handleLogout} to="/logout">
                  <li className='logout-btn'>
                    <MdLogout />
                    <span>Logout</span>
                  </li>
                </Link>
              </ul>
            </div>
              )
            }
          </div>

          {/* <li onClick={handleLogout} className='logout-btn'><MdLogout /> Logout</li> */}

          {/* { dropdownToggle ? <MdOutlineKeyboardArrowDown /> : <BsX /> }  */}
        
          {/* dropdown profile */}
          {/* <div className={dropdownToggle ? "header-profile-dropdown" : "header-profile-dropdown active"}>
            <ul>
              <li><Link to="/"> <AiOutlineUser /> Profile pictures</Link></li>
              <li><Link to="/"> <AiOutlineMail /> Inbox</Link></li>
              <li><Link to="/"> <AiOutlineSetting /> Settings</Link></li>
              <li onClick={handleLogout} className='logout-btn'><Link to="/"> <MdLogout /> Logout</Link></li>
            </ul>
          </div> */}
          
        </div>

      </header>
    </>
  )
}

export default PlainHeader