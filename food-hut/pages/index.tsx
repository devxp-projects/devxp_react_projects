import { Typography } from "@mui/material";
import Navbar from "food-hut/components/Navbar";
import styles from "../styles/Index.module.css";

const Index = () => {
    return (
        <div>
            <Navbar />
            <Typography> 
                We're <Typography sx={ {display: 'inline', color: 'secondary.main'}}>Serious</Typography> For <Typography sx={{display: 'inline', color: 'secondary.main'}}>Food</Typography>
            </Typography>
        </div>
    );
};

export default Index;
