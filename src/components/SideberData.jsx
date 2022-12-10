import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SellIcon from '@mui/icons-material/Sell';

export const SideberData = [
    {
        title:"ホーム",
        icon: <HomeIcon />,
        link:"/home"
    },
    {
        title:"概要",
        icon: <DesktopMacIcon />,
        link:"/overview"
    },
    {
        title:"アプリ",
        icon: <AppsIcon />,
        link:"/app"
    },
    {
        title:"使用素材",
        icon: <SellIcon />,
        link:"/credit"
    }
]


