import {Stack} from '@mui/material/';
import styled from '@emotion/styled'

const ButtonLink=styled.a`
        color: "#FFFFF";
        text-decoration: none;
        width:20px;
        height:30px;
        align-item:center
    }  
`;

const Button=styled.button`
        color: black;
        background-color:yellow;
        width:220px;
        height:30px;
        margin:100px;
        margin-top:170px;
        border-radius:40px;
        text-family:TimeRoman;
        cursor:pointer;
        font-size:18px;
    }  
`;

export default function Home(){
    return( <> 
                <Stack direction="column" spacing={2} style={{width:"30%",height:"70vh",backgroundColor:"black",marginLeft:"450px",marginTop:"100px"}}>
                    <ButtonLink href='/login'><Button>Login</Button></ButtonLink>
                    <ButtonLink href='/signup'><Button>Register</Button></ButtonLink>  
                </Stack>
             
            </>
    )
}