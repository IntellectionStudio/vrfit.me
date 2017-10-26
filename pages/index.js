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
import CloseIcon from "grommet/components/icons/base/Close";
import DocHead from "components/head";
import Logo from "../components/Logo";
import { Component } from "react";
import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`;

const ModalWindow = styled.div`
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const ModalBackground = styled.div`
  animation: ${backgroundAnimation} 0.5s linear;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShadowDiv = styled.div`
  box-shadow: 0 30px 50px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

class HomePage extends Component {
  state = {
    isOpen: false
  };
  render() {
    return (
      <App style={{ height: "100vh" }} centered={false}>
        <DocHead />

        <Header size="small" colorIndex="light-2" style={{ zIndex: 1 }}>
          <Box pad="small">
            <Logo />
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
                <CirclePlayIcon size="large" colorIndex="light-1" />
              </div>
            </Box>
          </Box>
        </Hero>

        {this.state.isOpen && (
          <ModalBackground onClick={() => this.setState({ isOpen: false })}>
            <ModalWindow>
              <div
                onClick={() => this.setState({ isOpen: false })}
                style={{ cursor: "pointer" }}
              >
                <CloseIcon size="small" colorIndex="light-1" />
              </div>

              <ShadowDiv>
                <iframe
                  style={{ borderRadius: 5, display: "block" }}
                  width={window.innerWidth < 854 ? window.innerWidth - 50 : 854}
                  height={
                    window.innerWidth < 854
                      ? window.innerWidth / 1.77916667
                      : 480
                  }
                  src="https://www.youtube.com/embed/HvzyeukKeL4?ecver=1"
                  frameborder="0"
                  gesture="media"
                  allowFullScreen
                />
              </ShadowDiv>
            </ModalWindow>
          </ModalBackground>
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
    );
  }
}
export default HomePage;
