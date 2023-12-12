import { Box, Breadcrumbs, Typography } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
    const colors = tokens();

    return <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 1, backgroundColor: colors.primary[500] }}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link to="/" color="accent" underline="hover">
                <HomeRoundedIcon color="accent" />
            </Link>
            <Typography variant="h6" color="text.light" sx={{ cursor: "pointer" }}>Page</Typography>
            <Typography variant="h6" color="text.light" sx={{ cursor: "pointer" }}>Page</Typography>
            <Typography variant="h6" color="text.light" sx={{ cursor: "pointer" }}>Page</Typography>
        </Breadcrumbs>
    </Box>
}

export default BreadCrumbs;