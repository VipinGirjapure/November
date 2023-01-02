import { Component } from "react";
import Draggable from "react-draggable";
import { connect } from "react-redux";
import Header from "../Header/Header";
import { AddAction, DeleteAction, EditAction } from "../REDUX/Action";
import "../StickyNote/StickyNote.css";
import "./MainPage.css";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false,
      inputValue: "",
      setID: "",
    };
  }

  handleAddButton = () => this.setState({ isAdd: true });
  handleDelete = (ID) => {
    let updatedNotesArr = this.props.State.NotesReducer.notesArr.filter(
      (item) => {
        return item.id !== ID;
      }
    );
    this.props.DeleteAction(updatedNotesArr);
  };
  handleEdit = () => {
    this.setState({ isAdd: true });

    let editUpdatedNotesArr = this.props.State.NotesReducer.notesArr.map(
      (item) => {
        if (item.id === this.state.setID) {
          item.noteText = this.state.inputValue;
        }
        return item;
      }
    );

    this.props.EditAction(editUpdatedNotesArr);
  };

  handleSaveButton = () => {
    this.props.AddAction({
      id: Math.random(),
      noteText: this.state.inputValue,
    });
    this.setState({ inputValue: "" });
    this.setState({ isAdd: false });
  };

  render() {
    return (
      <>
        <Header />
        <div className="main-page">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "20px",
            }}
          >
            <div className="add-note-btn" onClick={this.handleAddButton}>
              ADD Note
            </div>
          </div>
          <div>
            {this.state.isAdd ? (
              <div className="sticky-add-note-container">
                <div className="sticky-note-heading">Add Note</div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <textarea
                    type="text"
                    className="input-note-item"
                    placeholder="write note here..."
                    value={this.state.inputValue}
                    onChange={(e) =>
                      this.setState({ inputValue: e.target.value })
                    }
                  />
                </div>
                <div className="sticky-note-buttons">
                  {/* <div
                    className="sticky-note-edit"
                    // onClick={()=>this.handleSaveEdit()}
                  >
                    Changes
                  </div> */}
                  <div
                    className="sticky-note-edit"
                    onClick={this.handleSaveButton}
                  >
                    Save
                  </div>
                  <div className="sticky-note-edit" onClick={this.handleEdit()}>
                    Save Edited
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {this.props.State.NotesReducer.notesArr !== 0
              ? this.props.State.NotesReducer.notesArr.map((item) => {
                  return (
                    <Draggable key={item.id}>
                      <div className="sticky-note-container" key={item.id}>
                        <div className="sticky-note-heading">Note</div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div className="sticky-note-text">
                            {item.noteText}
                          </div>
                        </div>
                        <div className="sticky-note-buttons">
                          <div
                            className="sticky-note-edit"
                            onClick={() => {
                              this.setState({ setID: item.id });
                              this.setState({ isAdd: true });
                            }}
                          >
                            Edit
                          </div>
                          <div
                            className="sticky-note-delete"
                            onClick={() => this.handleDelete(item.id)}
                          >
                            Delete
                          </div>
                        </div>
                      </div>
                    </Draggable>
                  );
                })
              : null}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (State) => ({
  State: State,
});
const mapDispatchToProps = {
  AddAction: AddAction,
  DeleteAction: DeleteAction,
  EditAction: EditAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
