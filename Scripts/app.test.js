import { describe, it, expect } from "@jest/globals";
import {translate} from "./app.js"

describe("Translator function tests", () => {
  it("Translator function alerts an error 'Please type a sentence' if the translate button is pressed whilst the input box is empty", () => {
    //Arrange
    const input = "";
    //Act
    const result = translate(input);
    //Assert
    expect(result).toBe('Please type a sentence')
  })
  it("Translator function takes an input of 'a' and outputs '.-'", () => {
    //Arrange
    const input = 'a'
    //Act
    const result = translate(input)
    //Assert
    expect(result).toBe(".-")
  })
  it("Translator function takes an input of 'hello' and outputs '.... . .-.. .-.. ---'", () => {
    //Arrange
    const input = "hello"
    //Act
    const result = translate(input)
    //Assert
    expect(result).toBe(".... . .-.. .-.. ---")
  })
  it("Translator function takes an input of 'hello world' and outputs '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    //Arrange
    const input = "hello world"
    //Act
    const result = translate(input);
    //Assert
    expect(result).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')
  })
  it("Translator function takes an input of '7' and outputs '--...'", () => {
    //Arrange
    const input = "7"
    //Act
    const result = translate(input)
    //Assert
    expect(result).toBe('--...');
  })
})