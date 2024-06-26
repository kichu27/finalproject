import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage('Welcome to SkillSail! How can I assist you today?')],
  botName: "SkillSailBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      borderRadius: "10px",
      padding: "10px",
      color: "#ffffff",
      fontFamily: "'Arial', sans-serif",
      fontSize: "14px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      margin: "5px",
      maxWidth: "80%",
      wordWrap: "break-word",
      whiteSpace: "pre-line",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      border: "none",
      outline: "none",
      transition: "background-color 0.3s, transform 0.3s",
    },
    userMessageBox: {
      backgroundColor: "#f4f4f4",
      borderRadius: "10px",
      padding: "10px",
      color: "#000000",
      fontFamily: "'Arial', sans-serif",
      fontSize: "14px",
      border: "1px solid #ddd",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      margin: "5px",
      maxWidth: "80%",
      wordWrap: "break-word",
      whiteSpace: "pre-line",
      alignSelf: "flex-end",
    },
    chatContainer: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
    },
    chatHeader: {
      backgroundColor: "#376B7E",
      padding: "15px",
      color: "#ffffff",
      fontFamily: "'Arial', sans-serif",
      fontSize: "16px",
      textAlign: "center",
      borderBottom: "1px solid #ddd",
    },
    chatFooter: {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderTop: "1px solid #ddd",
      display: "flex",
      alignItems: "center",
    },
    inputField: {
      flex: "1",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      fontFamily: "'Arial', sans-serif",
      fontSize: "14px",
      marginRight: "10px",
      outline: "none",
    },
    sendButton: {
      backgroundColor: "#376B7E",
      borderRadius: "10px",
      padding: "10px 15px",
      color: "#ffffff",
      fontFamily: "'Arial', sans-serif",
      fontSize: "14px",
      border: "none",
      cursor: "pointer",
      outline: "none",
      transition: "background-color 0.3s, transform 0.3s",
    },
    sendButtonHover: {
      backgroundColor: "#2c5361",
    },
    sendButtonActive: {
      transform: "scale(0.95)",
    },
    chatBot: {
      backgroundColor: "#ffffff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    messageList: {
      flex: "1",
      overflowY: "auto",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#e5e5e5",
    },
    messageWrapper: {
      display: "flex",
      flexDirection: "row",
      marginBottom: "10px",
    },
    botAvatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#376B7E",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffffff",
      marginRight: "10px",
      fontFamily: "'Arial', sans-serif",
      fontSize: "16px",
    },
    userAvatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#f4f4f4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#000000",
      marginLeft: "10px",
      fontFamily: "'Arial', sans-serif",
      fontSize: "16px",
    },
    messageContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    timestamp: {
      fontSize: "10px",
      color: "#888888",
      marginTop: "5px",
      fontFamily: "'Arial', sans-serif",
    },
  },
};

export default config;
