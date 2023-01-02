import {
  deleteObject,
  getDownloadURL,
  //   listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { useRef, useState } from "react";
import { storage } from "../App";
import "./Main.css";
const Main = () => {
  const [imgUpload, setImgUpload] = useState([]);
  const [URL, setURL] = useState("");
  const [NAME, setNAME] = useState("");
  //   const [imgList, setImgList] = useState([]);
  //   const imagesListRef = ref(storage, "images/");
  const inputRef = useRef(null);

  const handleUpload = () => {
    if (imgUpload === null) return;
    const imagesRef = ref(storage, `images/${imgUpload.name}`);
    console.log(imgUpload);
    setNAME(imgUpload.name);
    alert("Image Uploaded!,Click on Download to display image ");
    uploadBytes(imagesRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        // setImgList((prev) => [...prev, url]);
      });
    });
  };
  const deleteImage = () => {
    const desertRef = ref(storage, `images/${NAME}`);
    deleteObject(desertRef)
      .then((f) => {
        console.log("FILE------------", f);
        alert("Image deleted...bye :)");
        setNAME("");
        setURL("");
        inputRef.current.value = null;
      })
      .catch((error) => {
        console.log(error);
        if (URL === "") {
          alert("upload image first");
        }
      });
  };

  const downloadImage = () => {
    const imagesRef = ref(storage, `images/${imgUpload.name}`);
    uploadBytes(imagesRef, imgUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          setURL(url);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  //   useEffect(() => {
  //     listAll(imagesListRef).then((res) =>
  //       res.items.forEach((item) => {
  //         getDownloadURL(item).then((url) => {
  //           setImgList((prev) => [...prev, url]);
  //         });
  //       })
  //     );
  //   }, [URL]);
  console.log(NAME);
  return (
    <>
      <div className="main-page">
        <div className="main-container">
          {/* <div className="images"> */}
          {/* {imgList.map((url, i) => {
              return (
                <div>
                  <img
                    src={url}
                    key={i}
                    height="150px"
                    alt="profile"
                    style={{ margin: "2px", cursor: "pointer" }}
                    onClick={() => setURL(url)}
                  />
                </div>
              );
            })} */}
          {/* </div> */}

          {URL !== "" ? (
            <img src={URL} height="250px" alt="profile" className="image" />
          ) : null}

          <div className="main-buttons-bar">
            <input
              type="file"
              onChange={(e) => setImgUpload(e.target.files[0])}
              ref={inputRef}
            />
            <button className="upload" onClick={() => handleUpload()}>
              UPLOAD
            </button>
            <button className="download" onClick={() => downloadImage()}>
              DOWNLOAD
            </button>
            <button className="delete" onClick={() => deleteImage(URL)}>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
