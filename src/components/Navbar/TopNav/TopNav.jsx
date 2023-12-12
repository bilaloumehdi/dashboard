import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { tokens, useTheme } from '../../../theme';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Avatar, Badge } from '@mui/material';
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';

const TopNav = () => {
    const colors = tokens();
    const username = "Anima Agrawal";
    const company = "Company LLC";

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", padding: "20px", backgroundColor: colors.primary[500], borderBottomStyle: "solid", borderBottomColor: colors.secondary[500] }}>
            <Typography variant="h3" component="div" flexGrow={1}>
                Dashbord
            </Typography>

            {/* Profile Section */}
            <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: 4, backgroundColor: 'primary' }}>
                {/* Notification Badge */}
                <Badge badgeContent={1} color="accent" fontSize="small"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <NotificationsRoundedIcon fontSize='large' color='accent' sx={{ bgcolor: "accent.light", borderRadius: "50%", p: 0.5 }} />
                </Badge>

                {/* Profile info */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
                    <Box sx={{ textAlign: "end", display: { xs: "none", sm: "block" } }}>
                        <Typography variant="h5">
                            {username}
                        </Typography>
                        <Typography variant="p" sx={{ color: "#787486" }}>
                            {company}
                        </Typography>
                    </Box>
                    <Avatar sx={{ backgroundColor: colors.accent[400], borderRadius: 2 }}>
                        <DoubleArrowTwoToneIcon color='accent' />
                    </Avatar>
                </Box>
            </Box>
        </Box>
    );
}

export default TopNav;