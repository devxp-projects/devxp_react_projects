import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  HelpIcon,
  OverviewIcon,
  CheronRightIcon,
  Logo,
  SideNavToggleIcon,
  ProductIcon,
  ReportIcon,
  OrderIcon,
  SettingIcon,
  UserIcon,
  ToolIcon,
} from '../assets';

interface SidebarItemProps {
  icon: string;
  label: string;
  path: string;
  isActive: boolean;
  notification?: number;
  openSidebar: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  path,
  isActive,
  notification,
  openSidebar,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 25px',
        cursor: 'pointer',
        borderLeft: isActive ? '3px solid #ffffff' : '3px solid #363740',
        background: isActive ? '#DBDADE08' : '#363740',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Box component="img" src={icon} />
        {openSidebar && <Typography>{label}</Typography>}
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {notification && (
          <Typography
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#7367F0',
              borderRadius: '100%',
              padding: '4px',
              height: '14px',
              width: '14px',
              fontSize: '12px',
            }}
          >
            {notification}
          </Typography>
        )}
        {openSidebar && <Box component="img" src={CheronRightIcon} />}
      </Box>
    </Box>
  );
};

interface SidebarProps {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ openSidebar, setOpenSidebar }) => {
  const navItems = [
    {
      icon: OverviewIcon,
      label: 'Overview',
      path: '/',
      isActive: true,
    },
    {
      icon: ProductIcon,
      label: 'Products',
      path: '/',
      isActive: false,
    },
    {
      icon: OrderIcon,
      label: 'Orders',
      path: '/',
      isActive: false,
      notification: 20,
    },
    {
      icon: ReportIcon,
      label: 'Reports',
      path: '/',
      isActive: false,
    },
    {
      icon: SettingIcon,
      label: 'Settings',
      path: '/',
      isActive: false,
    },
    {
      icon: UserIcon,
      label: 'Administration',
      path: '/',
      isActive: false,
    },
    {
      icon: ToolIcon,
      label: 'Maintenance',
      path: '/',
      isActive: false,
    },
    {
      icon: HelpIcon,
      label: 'Help',
      path: '/',
      isActive: false,
    },
  ];
  return (
    <Box
      sx={{
        height: '100vh',
        width: openSidebar ? '255px' : '75px',
        backgroundColor: '#363740',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0',
        color: '#ffffff',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          gap: '20px',
        }}
      >
        <Box
          component="img"
          sx={{
            width: '24px',
          }}
          alt="Logo"
          src={SideNavToggleIcon}
        />
        {openSidebar && (
          <Box
            component="img"
            sx={{
              width: '100%',
            }}
            alt="Logo"
            src={Logo}
          />
        )}
      </Box>

      {/* Sidebar Navs */}
      <Box
        sx={{
          marginTop: '100px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {navItems.map((item: Record<string, any>) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isActive={item.isActive}
            notification={item?.notification}
            openSidebar={openSidebar}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
