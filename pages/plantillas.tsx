import {
  Button,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';





const plantillas = () => {
  const theme = useTheme();
  return (
    <Container
    style={{
      color: theme.palette.primary.main,
    }}
  >
    


    
<Stack spacing={"1.0rem"} marginTop={"1vh"}>

<TextField id="outlined-basic" label="Ingrese su ubicacion" variant="outlined" />

<TextField id="outlined-basic" label="Seleccione huespedes" variant="outlined" />

<TextField id="outlined-basic" label="Ingrese fechas" variant="outlined" />

<Button variant="contained">buscar</Button>

<Button variant="text">vistos anteriormente</Button>
</Stack>

</Container>
  );
};









export default plantillas;
