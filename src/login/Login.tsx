import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

const Login = () => {
  const theme = useTheme();
  return (
    <Container
      style={{
        color: theme.palette.primary.main,
      }}
    >
      <Stack spacing={"1.5rem"} marginTop={"20vh"}>
        <Typography variant="h5" color={"inherit"}>
          Ingresa a tu cuenta
        </Typography>
        <TextField
          id="standard-basic"
          label="Correo electronico"
          variant="standard"
        />
        <TextField
          id="standard-basic"
          label="Contraseña"
          variant="standard"
          type="password"
        />
        <Button
          variant="contained"
          style={{
            marginTop: "1rem",
          }}
        >
           <Button href="/plantillas" variant="contained">iniciar sesion</Button>
        </Button>
        <Button variant="text">olvidaste tu contraseña</Button>
        <Button variant="text">recuperarla</Button>
      </Stack>
      
    </Container>
    
  );
};

export default Login;
