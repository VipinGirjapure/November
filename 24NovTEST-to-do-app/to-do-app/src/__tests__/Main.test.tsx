import { render } from "@testing-library/react";
import Main from "../Components/Main";

describe("App.tsx test suit", () => {
    it("check text field", () => {
      render(<Main />);
    //   const para = screen.getByTestId('add-btn')
      console.log(getByTestId('add-btn'))
    //   expect(para.textContent).toBe("Edit src/App.tsx and save to reload.")
    })
})