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

var name;
var age;
var gender;

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      gender: "",
      age: ""
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class ChatForm extends Component {
  handleEnd({ steps, values }) {
    const MAND_LINK = "https://mandrillapp.com/api/1.0/messages/send.json";
    const KEY = "B1AoYTIo1KTLERLF1WOiRg";
    const MAND_EMAIL = "info@intellection.kz";
    const INTELLECTION_EMAIL = "intellection.kz@gmail.com";

    const MESSAGE_RECEVIED = "Сообщение доставлено";
    const MESSAGE_NOT_RECEVIED = "Сообщение не доставлено";
    console.log(steps.age.value, steps.name.value, steps.gender.value);
    fetch(MAND_LINK, {
      method: "POST",
      body: JSON.stringify({
        key: KEY,
        message: {
          from_email: MAND_EMAIL,
          to: [
            {
              email: INTELLECTION_EMAIL,
              type: "to"
            }
          ],
          subject: "CONTACT US FORM (vrfit.me)",
          html: `test`
        }
      })
    })
      .then(() => console.log("message sended successfuly"))
      .catch(() => console.log("error"));
  }
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
              message: "What is your name?",
              trigger: "name"
            },
            {
              id: "name",
              user: true,
              trigger: "3"
            },
            {
              id: "3",
              message: "Hi {previousValue}! What is your gender?",
              trigger: "gender"
            },
            {
              id: "gender",
              options: [
                { value: "male", label: "Male", trigger: "5" },
                { value: "female", label: "Female", trigger: "5" }
              ]
            },
            {
              id: "5",
              message: "How old are you?",
              trigger: "age"
            },
            {
              id: "age",
              user: true,
              trigger: "7",
              validator: value => {
                if (isNaN(value)) {
                  return "value must be a number";
                } else if (value < 0) {
                  return "value must be positive";
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }

                return true;
              }
            },
            {
              id: "7",
              message: "Great! Check out your summary",
              trigger: "review"
            },
            {
              id: "review",
              component: <Review />,
              asMessage: true,
              trigger: "update"
            },
            {
              id: "update",
              message: "Would you like to update some field?",
              trigger: "update-question"
            },
            {
              id: "update-question",
              options: [
                { value: "yes", label: "Yes", trigger: "update-yes" },
                { value: "no", label: "No", trigger: "end-message" }
              ]
            },
            {
              id: "update-yes",
              message: "What field would you like to update?",
              trigger: "update-fields"
            },
            {
              id: "update-fields",
              options: [
                { value: "name", label: "Name", trigger: "update-name" },
                { value: "gender", label: "Gender", trigger: "update-gender" },
                { value: "age", label: "Age", trigger: "update-age" }
              ]
            },
            {
              id: "update-name",
              update: "name",
              trigger: "7"
            },
            {
              id: "update-gender",
              update: "gender",
              trigger: "7"
            },
            {
              id: "update-age",
              update: "age",
              trigger: "7"
            },
            {
              id: "end-message",
              message: "Thanks! Your data was submitted successfully!",
              end: true
            }
          ]}
        />
      </ThemeProvider>
    );
  }
}

export default ChatForm;
