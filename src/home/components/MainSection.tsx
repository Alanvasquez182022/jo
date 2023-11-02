import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

const MainSection = () => {
  const title = "j.\n ";
  const subtitle =
    "¡Usar roomsite es realmente sencillo! sigue estos tips para que tu experiencia sea realmente sensacional.";
  const sm = useMediaQuery("min-width(600px)");

  return (
    <Container
      sx={{
        background: "none",
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
        }}
        gridTemplateRows="auto"
        gridTemplateAreas={{
          xs: "'.' '.' 'title' 'subtitle' 'btn' 'texto' 'textito'",
          sm: "'. img' 'title img' 'subtitle img' 'btn img' '. img'",
        }}
        columnGap={{
          xs: 0,
          sm: 2,
        }}
        height={{
          xs: "92vh",
        }}
      >
        <Box
          gridArea={"title"}
          alignSelf={{
            xs: "end",
            sm: "end",
          }}
          textAlign={{
            xs: "center",
            sm: "left",
          }}
        >
          <img src="/edificios.jpg"  width="280" height="280" alt="Logo de HTML5"></img>

        </Box>
        <Box
          textAlign={{
            xs: "center",
            sm: "left",
          }}
          gridArea={"subtitle"}
          alignSelf={{
            xs: "center",
          }}
        >
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        <Box
          gridArea={"btn"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Button href="/login" variant="contained">Siguiente</Button>
        </Box>
        <Box
          gridArea={"texto"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Typography variant="h6">¿no quieres ver esto?</Typography>
        </Box>
        <Box
          gridArea={"textito"}
          alignSelf={{
            xs: "start",
            sm: "start",
          }}
          display={"flex"}
          justifySelf={{
            xs: "center",
            sm: "left",
          }}
        >
          <Typography variant="h6">saltar</Typography>
        </Box>

        <Box
          gridArea={"img"}
          sx={{
            backgroundImage: `url("https://picsum.photos/1200/800")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
    </Container>
  );
};

export default MainSection;
