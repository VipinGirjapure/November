import { Component } from "react";

type IState = {
  inputValue: string;
  ID: string;
  toDoArr: [];
  taskValue: string;
};
class Main extends Component {
  state: IState = {
    inputValue: "",
    toDoArr: [],
    ID: "",
    taskValue: "",
  };
  handleAdd = () => {
    if (this.state.ID === "") {
      const updatedArr = [
        ...this.state.toDoArr,
        {
          item: this.state.inputValue,
          id: this.state.toDoArr.length + 1,
        },
      ];
      this.setState({ toDoArr: updatedArr, inputValue: "" });
    } else {
      this.handleEdited();
    }
  };
  handleDelete = (ITEM: any) => {
    const updatedArr = this.state.toDoArr.filter(
      (item: any) => item.id !== ITEM.id
    );
    this.setState({ toDoArr: updatedArr });
  };
  handleEdit = (ITEM: any) => {
    this.setState({ ID: ITEM.id, taskValue: ITEM.item, inputValue: ITEM.item });
  };
  handleEdited = () => {
    const updatedArr = this.state.toDoArr.map((item: any) => {
      return item.id === this.state.ID
        ? { ...item, item: this.state.inputValue, id: this.state.ID }
        : item;
    });
    this.setState({ toDoArr: updatedArr, inputValue: "", ID: "" });
  };

  render() {
    console.log(this.state.toDoArr);
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="add to do"
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <button onClick={() => this.handleAdd()} data-testid="add-btn">ADD</button>
        </div>

        {this.state.toDoArr.map((item: any) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "4px",
              }}
            >
              <div>{item.item}</div>
              <button
                onClick={() => this.handleEdit(item)}
                style={{
                  backgroundColor: "dodgerblue",
                  color: "white",
                  marginLeft: "3px",
                }}
              >
                Edit
              </button>
              <button
                onClick={() => this.handleDelete(item)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginLeft: "3px",
                }}
              >
                Del
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
