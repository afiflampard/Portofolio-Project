import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import avatar from "../IMG_20200427_151315-removebg-preview (1).png";

// CSS STYLES
const useStyle = makeStyles(theme=>({
    menuSliderContainer : {
        width:250,
        background : "#511",
        height : "100%"
    },
    avatar :{
        display :"block",
        margin : "0.5rem auto",
        width:theme.spacing(13),
        height : theme.spacing(13)
    },
    listItem :{
        color : "tan"
    }
}));

const menuItems = [
    {
        listIcon : <Home/>,
        listText:"Home"

    },
    {
        listIcon : <AssignmentInd/>,
        listText:"Resume"

    },
    {
        listIcon : <Apps/>,
        listText:"Portofolio"

    },
    {
        listIcon : <ContactMail/>,
        listText:"Contacts"

    }
]

const Navbar = () => {
    const [state,setState] = useState({
        right:false
    })
    const toogleSlider = (slider,open)=>()=>{
        setState({...state,[slider]:open});
    }

    const classes = useStyle();

    const slideList = slider =>(
        <Box className={classes.menuSliderContainer} component="div"
        onClick={toogleSlider(slider,false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="AFIF MUSYAYYIDIN" />
            <Divider/>
            <List>
                {menuItems.map((lsItem,key)=>(
                    <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
                
                
            </List>
        </Box>
    );

    
    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
               <Toolbar>
                   <IconButton onClick={toogleSlider("right",true)}>
                   <ArrowBack style={{color: "tomato"}}/> 
                   </IconButton>
                   <Typography variant="h5" style={{color:"tan"}}>
                        Portofolio
                   </Typography>
                   <MobileRightMenuSlider
                   anchor="right"
                   open={state.right}
                   onClose ={toogleSlider("right",false)}
                   >
                    {slideList("right")}
                   </MobileRightMenuSlider>
                   </Toolbar> 
            </AppBar>
            
        </Box>
        </>
    )
}

export default Navbar;
