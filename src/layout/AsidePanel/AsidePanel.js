import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Drawer,
} from '@mui/material';
import { IconSettings } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';



const AsidePanel = ({open,handleToggle,...props}) => {
    const theme = useTheme();

    return (
        <>          
            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: [props.width?props.width:200]
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    {props.children}
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default AsidePanel;
