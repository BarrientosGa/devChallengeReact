import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme)=>({
    box_datePicker : {
        display: 'flex',
        justifyContent: 'flex-end',
        columnGap : '10px',
        marginRight: '10px',
        marginTop: '15px',
        [theme.breakpoints.down('sm')]:{
            marginRight: '0px',
        },
    },
}))