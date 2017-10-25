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
      style={{ height: "100%", backgroundColor: "black" }}
      backgroundColorIndex="dark"
    >
      <Box
        margin="none"
        pad="large"
        direction="row"
        align="stretch"
        alignSelf="stretch"
        basis="full"
      >
        <Box basis="1/3" />
        <Box direction="column" justify="center" align="center" basis="1/3">
          <Headline size="xlarge" margin="50px" uppercase="true" strong="true">
            VR FIT
          </Headline>
          <Headline margin="50px" align="center" size="small">
            Cinematic 360 VR rowing experience with elite teams and beautiful
            locations
          </Headline>
          <CirclePlayIcon size="large" colorIndex="white" />
        </Box>
      </Box>
    </Hero>

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
