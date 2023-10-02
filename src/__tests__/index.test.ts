import { generateRandomCharacters } from "../index";
import * as core from "@actions/core";
import { mocked } from "jest-mock";

// Mock the external dependencies
jest.mock("@octokit/graphql");
jest.mock("@actions/core");

const mockedGetInput = mocked(core.getInput);
const mockedSetOutput = mocked(core.setOutput);

beforeEach(() => {
  // Clear mock calls and reset any mocked values before each test
  jest.clearAllMocks();

  // Mock getInput, setFailed, and setOutput from @actions/core
  jest.mock("@actions/core", () => ({
    getInput: mockedGetInput,
    setOutput: mockedSetOutput,
  }));
});

test("function returns random chars", async () => {
  // Mock the input values
  mockedGetInput.mockReturnValueOnce("50");

  // Run the `run` function
  await generateRandomCharacters();

  // Assertions
  expect(mockedGetInput).toHaveBeenCalledTimes(1);
  expect(mockedGetInput).toHaveBeenCalledWith("input1");
  expect(mockedSetOutput).toHaveBeenCalledTimes(1);
  expect(mockedSetOutput).toHaveBeenCalledWith("output1", expect.any(String));
});
