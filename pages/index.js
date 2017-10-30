import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "../components/head";
import App from "grommet/components/App";
import Article from "grommet/components/Article";
import Header from "grommet/components/Header";
import Section from "grommet/components/Section";
import Hero from "grommet/components/Hero";
import Headline from "grommet/components/Headline";
import Title from "grommet/components/Title";
import Video from "grommet/components/Video";
import Label from "grommet/components/Label";
import Image from "grommet/components/Image";
import Heading from "grommet/components/Heading";
import Search from "grommet/components/Search";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Footer from "grommet/components/Footer";
import CirclePlayIcon from "grommet/components/icons/base/CirclePlay";
import CloseIcon from "grommet/components/icons/base/Close";
import DocHead from "components/head";
import Logo from "../components/Logo";
import PlayButton from "../components/PlayButton";
import { Component } from "react";

const DynamicComponent = dynamic(import("../components/ChatBot"), {
  ssr: false
});

const DynamicModal = dynamic(import("../components/Modal"), {
  ssr: false
});

class HomePage extends Component {
  state = {
    isOpen: false,
    isChatFormOpened: false
  };
  render() {
    return (
      <div>
        <App style={{ height: "100vh" }} centered={false}>
          <DocHead />
          <Header size="small" colorIndex="light-2" style={{ zIndex: 1 }}>
            <Box pad="small">
              <Logo />
            </Box>

            <Box
              flex
              justify="end"
              direction="row"
              style={{ paddingRight: 25 }}
            >
              <Anchor
                href="#"
                onClick={() =>
                  this.setState({
                    isChatFormOpened: !this.state.isChatFormOpened
                  })}
              >
                Contact Us
              </Anchor>
            </Box>
          </Header>

          <Hero
            background={
              <Video
                autoPlay
                showControls={false}
                loop
                muted
                playsInline
                fit="cover"
                style={{
                  backgroundColor: "black",
                  opacity: 0.8
                }}
              >
                <source src="/static/video/promovideo.mp4" type="video/mp4" />
              </Video>
            }
            size="large"
            style={{ backgroundColor: "black", height: "80vh" }}
          >
            <Box
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                textAlign: "center",
                color: "white",
                zIndex: 0
              }}
              direction="row"
              justify="center"
              align="center"
            >
              <Box
                direction="column"
                justify="center"
                align="center"
                styles={{
                  paddingLeft: 50
                }}
              >
                <Headline align="center" size="xlarge" uppercase="true" strong>
                  VR FIT
                </Headline>
                <Headline align="center" size="small">
                  Cinematic 360 VR rowing experience with elite teams and
                  beautiful locations
                </Headline>
                <div
                  onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                  style={{ cursor: "pointer" }}
                >
                  <PlayButton />
                </div>
              </Box>
            </Box>
          </Hero>

          {this.state.isOpen && (
            <DynamicModal close={() => this.setState({ isOpen: false })} />
          )}
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
        <DynamicComponent
          opened={this.state.isChatFormOpened}
          toggle={() =>
            this.setState({ isChatFormOpened: !this.state.isChatFormOpened })}
        />
      </div>
    );
  }
}
export default HomePage;
