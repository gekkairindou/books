import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import SellIcon from '@mui/icons-material/Sell';
import Home from '../pages/Home';
import Overview from '../pages/Overview';
import AppHome from '../pages/app/AppHome';
import Credit from '../pages/Credit';
import Theme from '../pages/app/Theme';
import Evaluation from '../pages/app/Evaluation';

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

export const SideberLinkData = [
    {
        link:"/books",
        component:<Home />
    },
    {
        link:"/home",
        component:<Home />
    },
    {
        link:"/overview",
        component:<Overview />
    },
    {
        link:"/app",
        component:<AppHome />
    },
    {
        link:"/credit",
        component:<Credit />
    },
    {
        link:"/App/theme",
        component:<Theme />
    },
    {
        link:"/App/evaluation",
        component:<Evaluation />
    }
]


