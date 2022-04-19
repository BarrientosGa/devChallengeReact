import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme)=>({
    box_view: {
        width: 'calc(100% - 130px)',
        marginLeft: '125px',
        [theme.breakpoints.down('sm')]:{
            marginLeft: '60px'
        },
    },
    containerList: {
        overflowX: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '15px',
        padding: '10px',
        margin: '10px'
    },
    box_spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tr: {
        height: '40px !important'
    },
    th: {
        maxWidth: '125px',
        minWidth: '125px',
        padding: '0 !important',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        textAlign: 'center !important',
    },
    td: {
        height: '80px !important',
        padding: '5px !important',
        textAlign: 'center !important',
    },
}))