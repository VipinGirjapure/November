import { async } from "@firebase/util";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { onValue, query, ref } from "firebase/database";
// import {
//   Database,
//   onValue,
//   // orderByChild,
//   // orderByKey,
//   push,
//   query,
//   ref,
//   set,
//   update,
// } from "firebase/database";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestoreDb } from "../../App";
import "./Main.css";
const Main = () => {
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("uid");
  const loggedInUserName = localStorage.getItem("name");
  const [chatName, setChatName] = useState("");
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatMsg, setChatMsg] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  // const setStatus = async (status) => {
  //   const myRef = ref(firestoreDb, "chat-rooms/" + localStorage.getItem("uid"));
  //   const res = await update(myRef, {
  //     online: status,
  //   });
  // };

  const getUsers = () => {
    // try {
    //   const myRef = ref(database, "chat-rooms");
    //   onValue(myRef, (snapshot) => {
    //     const userList = snapshot.val();
    //     let data = Object.entries(userList).map((i) => ({
    //       id: i[0],
    //       ...i[1],
    //     }));
    //     setUsers(data);
    //   });
    // } catch (e) {
    //   console.log("error", e);
    // }
    // try {
    //   const myMsgRef = ref(database, `/chat-rooms/${selectedUser}/chat`);
    //   onValue(myMsgRef, (snapshot) => {
    //     const msgList = snapshot.val();
    //     // console.log("msgList", msgList);
    //     if (msgList !== null || msgList !== undefined) {
    //       let msgData = Object.entries(msgList).map((i) => ({
    //         id: i[0],
    //         ...i[1],
    //       }));
    //       // console.log(msgData, "msgData");
    //       setMessages(msgData);
    //     } else {
    //       return setMessages([]);
    //     }
    //   });
    // } catch (e) {
    //   console.log("error", e);
    // }
    // const colref = collection(
    //   firestoreDb,
    //   `users/${selectedUser===""?
    //  " xTNVr2sNrCaiBWPBbI0B":selectedUser}/chats/messeges`
    // );
    // getDocs(colref)
    //   .then((snapshot) => {
    //     let messages = [];
    //     // snapshot.docs.forEach((doc) => {
    //     //   messages.push({ ...doc.data(), id: doc.id });
    //     // });
    //     // // setUsers(users);
    //     console.log(snapshot.doc);
    //   })
    //   .catch((err) => console.log(err));
    try {
      const myRef = ref(firestoreDb, "users");
      onValue(myRef, (snapshot) => {
        const userList = snapshot.val();
        console.log(userList);
        let data = Object.entries(userList).map((i) => ({
          id: i[0],
          ...i[1],
        }));
        setUsers(data);
        // console.log("data-----------------",data)
      });
    } catch (e) {
      console.log("error", e);
    }
  };
  const getMessages = () => {
    try {
      const myQeury = query(
        collection(firestoreDb, "chat"),
        where("chatId", "==", [loggedInUser, selectedUser].sort().join(".")),
        // orderBy('time', 'asc')
      );
      onSnapshot(myQeury, (snapshot) => {
        const mssage = snapshot.docs.map((i) =>({
          id: i.id,
          ...i.data
          }))
        console.log("----------message", mssage);
        // setMessages(message)
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  const e = useRef(null);
  // function sendMessage(e) {
  //   e.preventDefault();
  //   const timestamp = new Date().toLocaleTimeString;
  //   const messageInput = document.getElementById("message-input");
  //   const message = messageInput.value;
  //   messageInput.value = "";

  //   document
  //     .getElementById("messages")
  //     .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  //     Database.ref("messages/" + timestamp).set({
  //     username,
  //     message,
  //   });
  // }
  // const order = () => {
  //   // const topUserPostsRef = query(ref(database, "/users"), orderByKey('147d9kdm9DhuG200fvCXb5VynIV2'));
  //   // console.log("topUserPostsRef",topUserPostsRef)
  //   // var playersRef = Firebase.database().ref("/users");

  //   // playersRef.orderByKey().on("child_added", function (data) {
  //   //   console.log(data.key);
  //   });

  const handleSendChat = async () => {
    // const chatRef = ref(firestoreDb, `user/${selectedUser}/chat`);
    // const newChatRef = push(chatRef);
    // set(newChatRef, {
    //   msg: chatMsg,
    //   timestamp: new Date().toLocaleString("en-us", {
    //     hour: "numeric",
    //     minute: "numeric",
    //   }),
    // });
    // setChatMsg("");
    // await setDoc(doc(firestoreDb, `users/${selectedUser}/chats/messeges`), {
    //   msg: chatMsg,
    //   timestamp: new Date().toLocaleString("en-us", {
    //     hour: "numeric",
    //     minute: "numeric",
    //   }),
    // });
    addDoc(collection(firestoreDb, "chat"), {
      text: chatMsg,
      // name: loggedInUserName,
      chatId: [selectedUser.id, loggedInUser].sort().join("."),
      time: serverTimestamp(),
    });
    getMessages()
  };
  const handleSelectingChat = (ITEM) => {
    setChatName(ITEM.name);
    setSelectedUser(ITEM.id);
  };

  useEffect(() => {
    getUsers();
    getMessages()
    // setStatus(true);
    return () => {
      // setStatus(false);
    };
  }, [selectedUser]);
  useEffect(() => {
    e.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  }, [messages]);

  //.......................FIRESORE-START......................
  useEffect(() => {
    const colref = collection(firestoreDb, "/users");
    getDocs(colref)
      .then((snapshot) => {
        let users = [];
        snapshot.docs.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });
        setUsers(users);
        // console.log(users);
      })
      .catch((err) => console.log(err));
  }, []);
  //.......................FIRESORE-END......................
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        // console.log("Sign-out successful.")
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flexStart",
            alignItems: "center",
            flexDirection: "column",
            border: "1px solid black",
            height: "88vh",
            width: "316px",
            borderTop: "none",
          }}
        >
          <Typography
            margin={5}
            color="white"
            backgroundColor="purple"
            border={"1px solid purple"}
            padding="2px"
            sx={{ cursor: "pointer" }}
            onClick={() => handleSignOut()}
          >
            Home
          </Typography>

          {users
            .filter((item) => item.uid !== localStorage.getItem("uid"))
            .map((item) => {
              return (
                // console.log(item.id)
                <Box key={item.id} className="user-list">
                  <Typography
                    variant="span"
                    fontSize="22px"
                    fontWeight="bold"
                    color="purple"
                    onClick={() => handleSelectingChat(item)}
                    className="user-list"
                  >
                    {item.name}{" "}
                    {item.online ? (
                      <Typography color="green" fontSize="0.6rem">
                        Online
                      </Typography>
                    ) : (
                      <Typography color="red" fontSize="0.6rem">
                        Offline
                      </Typography>
                    )}
                  </Typography>
                </Box>
              );
            })}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            height: "88vh",
            // width: "515px",
            width: "100%",
            margin: "0",
            border: "1px solid purple",
            borderLeft: "none",
            borderTop: "none",
            backgroundColor: " #ece5dd",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid purple",
              width: "100%",
              padding: "5px 0",
              backgroundColor: "purple",
              color: "white",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Profile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz9p7mvvvH-5V3jRPtBVnLe7sIFpVUszfBEoWBMWJqYg&s"
              sx={{
                width: "60px",
                height: "60px",
                marginLeft: "15px ",
                marginRight: "10px",
              }}
            />
            <Typography marginRight={5} sx={{ fontSize: "15px" }}>
              {chatName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              height: "100%",
              width: "97%",
              overflowY: "scroll",
            }}
          >
            {messages.map((item) => (
              <Box
                color="purple"
                backgroundColor="white"
                border="0.2px solid purple"
                borderRadius="8px"
                textAlign="left"
                padding="2px 5px"
                width="fit-content"
                m={2}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ textAlign: "left", marginLeft: "-10px" }}>
                  {item.msg}
                </Typography>
                <Typography sx={{ fontSize: "3px", marginLeft: "35px" }}>
                  {item.timestamp}
                </Typography>
                <div ref={e} />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              border: "1px solid purple",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px 0",
              backgroundColor: " white",
            }}
          >
            <TextField
              type="text"
              placeholder="Type here..."
              sx={{ width: "80%", color: "purple", outline: "none" }}
              onChange={(e) => setChatMsg(e.target.value)}
              value={chatMsg}
              className="textF"
            />
            <Button
              sx={{
                color: "purple",
                border: "1px solid purple",
                padding: "2px 5px",
                height: "100%",
              }}
              onClick={() => handleSendChat()}
              disabled={chatName === ""}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
