import { Container, Typography } from "@mui/material";
import "./Index.css";
import Content from "../Helper/AbtHelper";
import TextAndContent from "./TextAndContent";
import Navbar from "../Navbar/Index";

function Index() {
  return (
    <div className="abt-pg">
      <Navbar/>
      <Container
        maxWidth={"100%"}
        sx={{
          margin: "10px auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" margin={"30px auto"} className="heading-about">
        OUR STORY
        </Typography>
        <TextAndContent Content={Content} />
      </Container>
      <Container>
        <Typography variant="h3"></Typography>
      </Container>
    </div>
  );
}

export default Index;
