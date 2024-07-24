import { PiMonitorLight } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";

export const options = [
    {
        name: "Dashboard",
        icon: <PiMonitorLight size="25px" color='blue' />,
        link:"/"
    },
    {
        name: "Subject",
        icon: <MdOutlineDashboard size="25px" color='green' />,
        link:"/subject"
    },
    {
        name: "Test",
        icon: <SiTestcafe size="25px" color='orange' />,
        link:"/test"
    },
    {
        name: "History",
        icon: <FaHistory size="25px" color='#22c1c3' />,
        link:"/history"
    },
    {
        name: "Profile",
        icon: <MdAccountCircle size="25px" color='#a200ff' />,
        link:"/profile"
    },
    {
        name: "Sign out",
        icon: <RxExit size="25px" color='#94bbe9' />,
        link:'/signout'
    },
]