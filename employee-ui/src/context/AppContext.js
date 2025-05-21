import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiUrl } from '../Variables';

const AppContext = createContext({})
const AppContextProvider = (props) => {

    const [userInfo, setUserInfo] = useState(null)
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const navigate = useNavigate()

    // get local storage token and user data
    // const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    // Load userInfo from localStorage on the client side
    useEffect(() => {
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
        setUserInfo(JSON.parse(storedUserInfo));
        }

        // Retrieve userInfo from localStorage
        const getUserDetails = JSON.parse(localStorage.getItem('userInfo'));

        if (!getUserDetails || !getUserDetails.token) {
        console.error('User token not found.');
        navigate('/login')
        }

    }, [navigate]);

    console.log('userInfo AppContext', userInfo)

    // const {userInfo} = useAppContext(); 
    const location = useLocation();
    
    // const [isUpdated,setIsUpdated] = useState(false)  

    // useEffect(() => {
    //     if(!userInfo && location.pathname !== "/forgot-password" && location.pathname !== "/bot-demo" && location.pathname !== "/register" && !location.pathname.includes("/reset-password/")) {
    //         navigate('/login')
    //     }
    // },[userInfo, navigate, location])

    const { children, values = {} } = props
    return (
        <AppContext.Provider
            value={{
                userInfo,
                setUserInfo,
                apiUrl,
                sidebarToggle,
                setSidebarToggle,
                ...values
            }}
        >
            {children}
        </AppContext.Provider>

    )
}
const useAppContext = () => useContext(AppContext)
export { AppContextProvider, useAppContext };

