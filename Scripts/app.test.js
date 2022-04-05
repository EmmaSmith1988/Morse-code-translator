import { describe, it, expect } from "@jest/globals";
import {} from "./app"

describe("Translator function tests", () => {
  it("Translator function alerts an error 'Please type a sentence' if the translate button is pressed whilst the input box is empty", () => {
    //Arrange
    const input = "";
    //Act
    const result = translate(input);
    //Assert
    expect(result).toBe('Please type a sentence')
  })
  it("Translator function takes an input of 'Hello World' and outputs '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' to the <p> tag", () => {
    //Arrange
    const input = "Hello World"
    //Act
    const result = translate(input);
    //Assert
    expect(result).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
  })
})