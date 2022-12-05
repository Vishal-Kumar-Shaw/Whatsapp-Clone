import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { width } from "@mui/system";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const Boxi = styled(Box)`
    display: flex;
`
const Boxie = styled(Box)`
    padding: 56px 0 56px 56px;
`
const QRCode = styled('img')({
    height:264,
    width: 264,
    margin: '50px 0 0 50px'

});

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    fonr-family: inherit;
    margin-bottom: 25px
`
const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:'none',
    overflow: 'hidden'

}

const StyledList = styled(List)`
        & > li {
            padding: 0;
            margin-top: 15px;
            font-size: 18px;
            line-height: 28px;
            color: #4a4a4a;

        }

`


const LoginDialog = () =>{
    const onLoginSuccess = (res) =>{
        const decode =  jwt_decode(res.credential);
        console.log(decode);
    }
    const onLoginError = (res) => {
        console.log("Login Failed", res);
    }
    return (
        <Dialog open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true}>
           <Boxi>
                <Boxie>
                    <Title>To use WhatsApp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsAppWeb</ListItem>
                        <ListItem>3. Point your phone to this screen and capture the code</ListItem>
                    </StyledList>
                </Boxie>
                <Box style={{position:'relative'}}>
                        <QRCode src={qrCodeImage} alt=""/>
                        <Box style={{position:'absolute', top:'50%', transform:'translate(26%)'}}>
                            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
                        </Box>
                </Box>
           </Boxi>
        </Dialog>
    )
}
export default LoginDialog;