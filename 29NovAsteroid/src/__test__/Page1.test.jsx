import { fireEvent, render, screen, act } from "@testing-library/react";
import Page1 from "../Pages/Page1";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

global.alert = (e) => {
  console.log("error", e);
};

describe("Page1 test suit", () => {
  beforeEach(() => {
    jest.spyOn(window, "fetch").mockImplementationOnce((url) => {
      if (
        url ===
        "https://api.nasa.gov/neo/rest/v1/neo/123?api_key=0cDupsui0V2X1B412ivprzPhKjMAHazLgzlsVICV"
      ) {
        return Promise.reject("please enter valid asteroid id");
      }
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 123,
          }),
      });
    });
  });

  test("render Page1 component correctly", () => {
    render(<Page1 />);
    expect(screen).toBeTruthy();
  });

  test("Should value change when user enter any value in asteroid id text field", () => {
    const { getByTestId } = render(<Page1 />);
    const asteroidId = getByTestId("asteroidId").querySelector("input");

    fireEvent.change(asteroidId, { target: { value: "12345" } });
    expect(asteroidId.value).toBe("12345");
  });

  test("try to get asteroid data when user enter wrong id", () => {
    const { getByTestId } = render(<Page1 />);
    const submitBtn = getByTestId("submitBtn");
    const asteroidId = getByTestId("asteroidId").querySelector("input");

    expect(submitBtn).toBeDisabled();

    fireEvent.change(asteroidId, { target: { value: "123" } });

    expect(submitBtn).toBeEnabled();

    fireEvent.click(submitBtn);

    const loader = getByTestId("loader");
    expect(loader).toBeDefined();
  });

  test("try to get asteroid data when user enter correct id", async () => {
    const { getByTestId } = render(<Page1 />);
    const submitBtn = getByTestId("submitBtn");
    const asteroidId = getByTestId("asteroidId").querySelector("input");
    await act(async () => {
      await fireEvent.change(asteroidId, { target: { value: "123567" } });
      await fireEvent.click(submitBtn);
    });

    expect(mockNavigate).toBeCalledWith("/page2", {
      state: { result: expect.any(Object) },
    });
  });
});

test("random asteroid id", async () => {
  const { getByTestId } = render(<Page1 />);
  const randomId = getByTestId("randomId");

  await act(async () => {
    fireEvent.click(randomId);
  });
});

global.alert = jest.fn();

const mockData = [
  {
    name: "n1",
    email: "test@maul.com",
  },
  {
    name: "n2",
    email: "test2@maul.com",
  },
];

global.fetch = jest.fn().mockImplementationOnce(() => {
  return new Promise((resolve, reject) => {
    reject("network error");
  });
});

describe("App.tsx test suit", () => {
  beforeEach(() => {
    global.fetch = jest
      .fn()

      .mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            json: () =>
              new Promise((res, rej) => {
                res(mockData);
              }),
          });
        });
      });
  });

  it("snapshot testing", () => {
    const { container } = render(<Page1 />);
    expect(container).toMatchSnapshot();
  });

  it("Should error handle when got error from fetch", async () => {
    const { getByTestId } = render(<Page1 />);
    const randomId = getByTestId("randomId");
    await act(async () => {
      await fireEvent.click(randomId);
    });
    // const row = getByTestId('row-0')
    // expect(row).toBeDefined()
  });
});
