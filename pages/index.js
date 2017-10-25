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
import { Component } from "react";
import Modal from "../components/Modal";

class HomePage extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <App style={{ height: "100vh" }} centered={false}>
        <DocHead />

        <Header size="small" colorIndex="light-2">
          <Box pad="small">
            <Logo />
          </Box>
        </Header>

        {this.state.isOpen && <Modal />}

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
        >
          <Box
            style={{
              position: "absolute",
              top: 112,
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "white"
            }}
            direction="row"
            justify="center"
            align="center"
          >
            <Box direction="column" justify="center" align="center">
              <Headline align="center" size="xlarge" uppercase="true" strong>
                VR FIT
              </Headline>
              <Headline align="center" size="small">
                Cinematic 360 VR rowing experience with elite teams and
                beautiful locations
              </Headline>

              <a
                href
                onClick={() => this.setState({ isOpen: !this.state.isOpen })}
              >
                <CirclePlayIcon size="large" colorIndex="light-1" />
              </a>
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
  }
}
export default HomePage;
