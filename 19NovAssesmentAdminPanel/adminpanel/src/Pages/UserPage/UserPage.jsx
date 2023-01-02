import { Box, Typography, Button, TextField } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import { useEffect, useState } from "react";
import "./UserPage.css";
// import { ref as sRef, getDownloadURL, uploadBytes } from "firebase/storage";
import {
  collection,
  addDoc,
  onSnapshot,
  updateDoc,
  doc,
} from "firebase/firestore";

import { firestoreDb, storage } from "../../App";

const UserPage = () => {
  const [likes, setLikes] = useState(1);
  const [isComments, setIsComments] = useState(false);
  const [comments, setComments] = useState("");
  const [commentsARR, setCommentsARR] = useState([]);
  const [currentCommentId, setCurrentCommentId] = useState("");
  const [valueArr, setValueArr] = useState([]);

  const download = async () => {
    try {
      const docRef = collection(firestoreDb, "/caption");

      onSnapshot(docRef, (snapshot) => {
        const textValue = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        setValueArr(textValue);
      });
    } catch (e) {
      console.log("error", e);
    }
  };
  const downloadComments = async (ITEM) => {
    console.log(currentCommentId === ITEM.id);
    try {
      const docRef = collection(
        firestoreDb,
        `caption/${currentCommentId}/comments`
      );

      onSnapshot(docRef, (snapshot) => {
        const textValue = snapshot.docs.map((i) => ({
          id: i.id,
          ...i.data(),
        }));
        setCommentsARR(textValue);
        setComments("");
      });
    } catch (e) {
      console.log("error", e);
    }
  };
  const handleLikes = async (ITEM) => {
    const likesRef = doc(firestoreDb, `caption/${ITEM.id}`);

    await updateDoc(likesRef, {
      likes: likes + 1,
    });
  };

  const handleComments = async (ITEM) => {
    const commentsRef = await addDoc(
      collection(firestoreDb, `caption/${ITEM.id}/comments`),
      {
        comments: comments,
      }
    );

    downloadComments(ITEM);
  };
  useEffect(() => {
    download();
  }, []);
  useEffect(() => {}, []);
  console.log(currentCommentId);
  return (
    <>
      <Box className="user-page">
        <Typography className="heading-text" m={5} variant="h6">
          User Page{" "}
          <PersonPinIcon sx={{ fontSize: "30px", color: " #74BDCB" }} />
        </Typography>

        {valueArr.map((item, i) => (
          <Box className="main-user-container" key={i}>
            <Box className="preview-box">
              <img
                src={item.imgurl}
                alt="POST's IMAGE"
                style={{ height: "250px" }}
              />
            </Box>
            <Box
              sx={{
                maxHeight: "150px",
                padding: "10px 1px",
                width: "450px",
                fontSize: "20px",
                color: "#FFA384",
                marginBottom: "22px",
                textAlign: "center",
              }}
            >
              {item.caption}
            </Box>
            <Box className="buttons">
              <Box
                sx={{
                  border: "0.5px solid #FFA384",
                  padding: "5px 10px",
                  display: "flex",
                  alignItems: "center",
                  color: "#74BDCB",
                }}
              >
                {item.likes} Likes{" "}
                <ThumbUpAltIcon
                  sx={{ color: "#FFA384", cursor: "pointer" }}
                  onClick={() => handleLikes(item)}
                />
              </Box>

              <Box
                sx={{
                  border: "0.5px solid #FFA384",
                  padding: "5px 10px",
                  display: "flex",
                  alignItems: "center",
                  color: "#74BDCB",
                }}
                onClick={() => {
                  setIsComments(!isComments);
                  setCurrentCommentId(item.id);
                }}
              >
                {currentCommentId === item.id ? commentsARR.length : null}{" "}
                Comments <CommentIcon sx={{ color: "#FFA384" }} />
              </Box>
            </Box>
            {isComments ? (
              <>
                <Box>
                  <TextField
                    type="text"
                    placeholder="write comment..."
                    variant="standard"
                    onChange={(e) => setComments(e.target.value)}
                    // value={comments}
                  />
                  <Button
                    sx={{
                      marginTop: "5px",
                      color: " #74BDCB",
                      border: "0.2px solid #74BDCB",
                      fontSize: "12px",
                      padding: "2px",
                    }}
                    onClick={() => handleComments(item)}
                  >
                    {commentsARR.length === 0 ? "comments" : "Send"}
                  </Button>
                </Box>
                {currentCommentId === item.id
                  ? commentsARR.map((item, i) => {
                      console.log(currentCommentId);
                      console.log(item.id);
                      return (
                        <Box key={i}>
                          <Box
                            sx={{
                              borderBottom: "0.2px solid grey",
                              width: "100%",
                            }}
                          >
                            {item.comments}
                          </Box>
                        </Box>
                      );
                    })
                  : null}
              </>
            ) : null}
          </Box>
        ))}
      </Box>
    </>
  );
};
export default UserPage;
