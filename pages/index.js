import Link from "next/link";
import Head from "../components/head";
import App from "grommet/components/App";
import Article from "grommet/components/Article";
import Header from "grommet/components/Header";
import Section from "grommet/components/Section";
import Hero from "grommet/components/Hero";
import Headline from "grommet/components/Headline";
import Title from "grommet/components/Title";
import Video from "grommet/components/Video";
import Image from "grommet/components/Image";
import Heading from "grommet/components/Heading";
import Search from "grommet/components/Search";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Footer from "grommet/components/Footer";
import CirclePlayIcon from "grommet/components/icons/base/CirclePlay";
import DocHead from "components/head";
import Logo from "../components/Logo";

export default () => (
  <App centered={false}>
    <DocHead />

    <Header size="small" colorIndex="light-2">
      <Box pad="small">
        <Logo />
      </Box>
    </Header>

    <Hero
      background={
        <Video
          autoPlay={true}
          showControls={false}
          loop={true}
          muted={true}
          fit="cover"
          style={{ opacity: 0.8 }}
        >
          <source src="/static/video/promovideo.mp4" type="video/mp4" />
        </Video>
      }
      size="large"
      style={{ backgroundColor: "black" }}
    />

    <Box
      style={{
        position: "absolute",
        top: 200,
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        color: "white"
      }}
      direction="row"
      justify="center"
      align="center"
    >
      <Box direction="column" justify="center" align="center">
        <Headline size="xlarge" uppercase="true" strong>
          VR FIT
        </Headline>
        <Headline
          align="center"
          size="small"
          style={{ marginLeft: 50, marginRight: 50 }}
        >
          Cinematic 360 VR rowing experience with elite teams and beautiful
          locations
        </Headline>

        <a href onClick={() => console.log("clicked")}>
          <CirclePlayIcon size="large" colorIndex="light-1" />
        </a>
      </Box>
    </Box>

    <Footer
      primary={true}
      appCentered={true}
      direction="column"
      align="center"
      pad="small"
    >
      <p>
        Created by {" "}
        <Anchor href="https://intellectionstudio.com" target="_blank">
          Intellection Studio
        </Anchor>
      </p>
    </Footer>
  </App>
);
