import LoginDialog from './account/LoginDialouge'
import { AppBar, Toolbar, styled , Box} from "@mui/material";
import ChatDialog from './chat/ChatDialog';
const Header = styled(AppBar)`
    height: 220px;
    background-color: #00A884;
`
const Boxi = styled(Box)`
    height: 100vh;
    background: #F0F2F5;
`
const Messenger = () =>{
    return (
        <Boxi>
        <Header>
                <Toolbar>
                    
                </Toolbar>
        </Header>
            <LoginDialog/>
        </Boxi>

    )
}

export default Messenger;