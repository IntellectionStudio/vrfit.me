import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#6e48aa",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#6E48AA",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

class Response extends Component {
  state = {
    response: "Processing..."
  };

  componentWillMount() {
    const { steps } = this.props;
    const MAND_LINK = "https://mandrillapp.com/api/1.0/messages/send.json";
    const KEY = "B1AoYTIo1KTLERLF1WOiRg";
    const MAND_EMAIL = "info@intellection.kz";
    const INTELLECTION_EMAIL = "telegin.zhenya@gmail.com";

    const MESSAGE_RECEVIED = "Сообщение доставлено";
    const MESSAGE_NOT_RECEVIED = "Сообщение не доставлено";
    var message;
    var EMAIL_TO;
    if (steps.contactMessageIliyas) {
      message = steps.contactMessageIliyas.value;
      EMAIL_TO = "iliyas@vrfit.me";
    }

    if (steps.contactMessageBakytzhan) {
      message = steps.contactMessageBakytzhan.value;
      EMAIL_TO = "bb@vrfit.me";
    }

    if (steps.contactMessageCompany) {
      message = steps.contactMessageCompany.value;
      EMAIL_TO = "contact@vrfit.me";
    }

    fetch(MAND_LINK, {
      method: "POST",
      body: JSON.stringify({
        key: KEY,
        message: {
          from_email: MAND_EMAIL,
          to: [
            {
              email: EMAIL_TO,
              type: "to"
            }
          ],
          subject: `For ${EMAIL_TO}`,
          html: `For ${EMAIL_TO}:\n${message}`
        }
      })
    })
      .then(() =>
        this.setState({ response: "Thank you! Your message was sended :)" })
      )
      .catch(() => this.setState({ response: "Error. Please try again :(" }));
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>{this.state.response}</div>
      </div>
    );
  }
}

class ChatForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          handleEnd={this.handleEnd}
          opened={this.props.opened}
          toggleFloating={this.props.toggle}
          floating
          steps={[
            {
              id: "1",
              message:
                "Welcome to VRFIT's official website! We develop immersive 8K cinematic VR rowing experience at the most beautiful locations with elite rowing teams.\nWant to know more?",
              trigger: "2"
            },
            {
              id: "2",
              message:
                "We develop immersive 8K cinematic VR rowing experience at the most beautiful locations with elite rowing teams.",
              trigger: "3"
            },
            {
              id: "3",
              message: "Want to know more?",
              trigger: "4"
            },
            {
              id: "4",
              options: [
                {
                  value: "learnMore",
                  label: "Learn More",
                  trigger: "learnMore"
                },
                {
                  value: "contactUsButton",
                  label: "Contact Us",
                  trigger: "contactUs"
                }
              ]
            },
            {
              id: "learnMore",
              message:
                "We are currently at the stage of building a product and looking for an investor. If you would like to know more about our project and team, please, choose one of the following options",
              trigger: "learnMoreOptions"
            },
            {
              id: "learnMoreOptions",
              options: [
                {
                  value: "seePresentation",
                  label: "See presentation",
                  trigger: "seePresentation"
                },
                { value: "seeVideo", label: "See video", trigger: "seeVideo" },
                {
                  value: "contactUsButton",
                  label: "Contact Us",
                  trigger: "contactUs"
                }
              ]
            },
            {
              id: "seePresentation",
              component: (
                <div style={{ textAlign: "center" }}>
                  <a href="#">Link for presentation</a>
                </div>
              ),
              trigger: "learnMoreOptions"
            },
            {
              id: "seeVideo",
              component: (
                <div style={{ textAlign: "center" }}>
                  <a href="https://www.youtube.com/watch?v=HvzyeukKeL4">
                    https://www.youtube.com/watch?v=HvzyeukKeL4
                  </a>
                </div>
              ),
              trigger: "learnMoreOptions"
            },

            {
              id: "contactUs",
              message:
                "You can always email us on contact@vrfit.me. Alternatively, you can contact one of our team members or write your message in this chat.",
              trigger: "contactUsOptions"
            },

            {
              id: "contactUsOptions",
              options: [
                {
                  value: "contactIliyas",
                  label: "Iliyas Issatayev",
                  trigger: "contactIliyas"
                },
                {
                  value: "contactBakytzhan",
                  label: "Bakytzhan Baizhikenov",
                  trigger: "contactBakytzhan"
                },
                {
                  value: "contactCompany",
                  label: "Company Email",
                  trigger: "contactCompany"
                }
              ]
            },

            {
              id: "contactIliyas",
              message: "Type your message for Iliyas Issatayev",
              trigger: "contactMessageIliyas"
            },

            {
              id: "contactBakytzhan",
              message: "Type your message for Bakytzhan Baizhikenov",
              trigger: "contactMessageBakytzhan"
            },

            {
              id: "contactCompany",
              message:
                "Type your message, and one of our team members will contact you.",
              trigger: "contactMessageCompany"
            },

            {
              id: "contactMessageIliyas",
              user: true,
              trigger: "getMessage"
            },

            {
              id: "contactMessageBakytzhan",
              user: true,
              trigger: "getMessage"
            },

            {
              id: "contactMessageCompany",
              user: true,
              trigger: "getMessage"
            },

            {
              id: "getMessage",
              component: <Response />
            }
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default ChatForm;
