import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { ref as sRef, uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import "./AdminPage.css";
import { firestoreDb, storage } from "../../App";

const AdminPage = () => {
  const [fields, setFields] = useState({
    image: null,
    likes: "1",
    comments: "1",
  });
  const [caption, setCaption] = useState("");
  const [imgPreview, setImgPreview] = useState("");
  const [imgName, setImgName] = useState("");
  const navigate = useNavigate();
  const HandleOnChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
    setFields({ image: e.target.files[0] });

    setImgName(e.target.files[0].name);

    setImgPreview(URL.createObjectURL(e.target.files[0]));
  };
  const uploadFileHandler = async () => {
    try {
      const imagesRef = sRef(storage, `caption`);
      const uploadInstance = uploadBytesResumable(imagesRef, fields.image);
      const url = await getDownloadURL(uploadInstance.snapshot.ref)
      handleCaption(url);
      alert("image uploaded...");
      navigate("/user", { state: imgName.name });
    } catch (error) {
      console.log(error);
    }
  };
  const handleCaption = async (url) => {
    const docRef = await addDoc(collection(firestoreDb, `caption`), {
      name: fields.image.name,
      imgurl: url,
      caption: caption,
      likes: 1,

    });
    console.log("Document written with ID: ", docRef);
  };
console.log(imgName)
  return (
    <>
      <Box className="admin-page">
        <Typography className="heading-text" m={5} variant="h6">
          Admin Page{" "}
          <PersonPinIcon sx={{ fontSize: "30px", color: " #74BDCB" }} />
        </Typography>
        <Box className="main-container">
          <textarea
            type="text"
            placeholder="To write caption type here..."
            style={{
              maxHeight: "150px",
              height: "150px",
              width: "280px",
              fontSize: "20px",
              color: "#FFA384",
              marginBottom: "22px",
            }}
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <input type="file" name="image" onChange={HandleOnChange} />
          <Box className="preview-box">
            {imgPreview !== "" ? (
              <img
                src={imgPreview}
                alt="postImage"
                style={{ height: "250px" }}
              />
            ) : null}
          </Box>
          {imgPreview !== "" ? (
            <Button
              sx={{
                marginTop: "5px",
                color: " #74BDCB",
                border: "0.2px solid #74BDCB",
              }}
              onClick={uploadFileHandler}
            >
              Submit Post
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
};
export default AdminPage;
