import { Component } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  getDatabase,
  ref,
  child,
  set,
  get,
  remove,
  update,
  onValue
} from "firebase/database";
import { database } from "../../Firebase/Firebase";
import { uid } from "uid";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      taskInput: "",
      tasks: [],
      tempUUID: "",
      isEdit: false,
    };
  }
  handleTaskInput = (e) => {
    if (e.key === "Enter") {
      this.handleAddToDo();
      this.setState({ taskInput: "" });
    }
  };
  handleAddToDo = () => {
    const uuid = uid();
    const values = { uuid: uuid, task: this.state.taskInput };
    handleDbData();
    function handleDbData() {
      set(ref(database, `todo/${values.uuid}`), values);
    }
    this.handalGetData();
  };
  handalGetData() {
    const dbRef = ref(getDatabase(), `todo/`);
    onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
            const data = snapshot.val();
            this.setState({ tasks: data });
          } else {
            console.log("No data available");
          }
    })
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       const data = snapshot.val();
    //       this.setState({ tasks: data });
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
  handleDelete = (ITEM) => {
    remove(ref(database, `todo/${ITEM.uuid}`));
  
  };
  handleUpdate = (ITEM) => {
    this.setState({ isEdit: true, tempUUID: ITEM.uuid, taskInput: ITEM.task });
 
  };
  handleSubmitChange = () => {
    const TempUuid = this.state.tempUUID;
    let TASKINPUT = this.state.taskInput;
    let TEMPUUID = this.state.tempUUID;
    update(ref(database, `todo/${TempUuid}`), {
      task: TASKINPUT,
      uuid: TEMPUUID,
    });
    this.setState({ isEdit: false, taskInput: "" });
  
  };
  componentDidMount() {
    this.handalGetData();
  }

  render() {
    return (
      <>
        <Typography
          variant="h3"
          textAlign="center"
          color="orange"
          mb={5}
          sx={{ borderBottom: "2px solid orange" }}
        >
          TO DO LIST
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "400px",
              padding: "5px",
            }}
          >
            <TextField
              type="text"
              placeholder="Task"
              varient="outlined"
              value={this.state.taskInput}
              label="Add Task"
              color="warning"
              onChange={(e) => this.setState({ taskInput: e.target.value })}
              onKeyDown={this.handleTaskInput}
            />
            {this.state.isEdit ? (
              <>
                <Button
                  variant="outlined"
                  color="warning"
                  onClick={() => this.handleSubmitChange()}
                >
                  Change
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                color="warning"
                onClick={() => this.handleAddToDo()}
              >
                ADD
              </Button>
            )}
          </Box>
        </Box>
        <Box></Box>

        <Box>
          {Object.values(this.state.tasks).length !== 0 ? (
            Object.values(this.state.tasks).map((item) => {
              return (
                <Box
                  key={item.uuid}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "5px",
                    textTransform: "capitalize",
                  }}
                >
                  <Typography
                    color="red"
                    mr={5}
                    sx={{ width: "120px", borderBottom: "1px solid grey" }}
                  >
                    {item.task}
                  </Typography>
                  <Button
                    color="success"
                    onClick={() => this.handleUpdate(item)}
                  >
                    <EditIcon />
                  </Button>
                  <Button color="error" onClick={() => this.handleDelete(item)}>
                    <DeleteIcon />
                  </Button>
                </Box>
              );
            })
          ) : null}
        </Box>
      </>
    );
  }
}
export default Main;
