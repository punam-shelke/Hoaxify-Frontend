import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserSignupPage } from "./UserSignupPage";

describe("UserSignUpPage", () => {
  describe("Layout", () => {
    it("has header of Sign Up", () => {
      const { container } = render(<UserSignupPage />);

      const header = container.querySelector("h1");

      expect(header).toHaveTextContent("Sign Up");
    });
    it("has input for display name", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const displayNameInput = queryByPlaceholderText("Your display name");

      expect(displayNameInput).toBeInTheDocument();
    });
    it("has input for username", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const usernameInput = queryByPlaceholderText("Your username");

      expect(usernameInput).toBeInTheDocument();
    });
    it("has input for password", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const passwordInput = queryByPlaceholderText("Your password");

      expect(passwordInput).toBeInTheDocument();
    });
    it("has password type for password input", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const passwordInput = queryByPlaceholderText("Your password");

      expect(passwordInput.type).toBe("password");
    });
    it("has input for password repeat", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const passwordRepeatInput = queryByPlaceholderText(
        "Repeat your password"
      );

      expect(passwordRepeatInput).toBeInTheDocument();
    });
    it("has password type for repeat password input", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);

      const passwordRepeatInput = queryByPlaceholderText(
        "Repeat your password"
      );

      expect(passwordRepeatInput.type).toBe("password");
    });
    it("has submit button", () => {
      const { container } = render(<UserSignupPage />);

      const button = container.querySelector("button");

      expect(button).toBeInTheDocument();
    });
  });
  describe("Interactions", () => {
    it("sets the displayName value into state", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const displayNameInput = queryByPlaceholderText("Your display name");
      const changeEvent = {
        target: {
          value: "my-display-name",
        },
      };

      fireEvent.change(displayNameInput, changeEvent);

      expect(displayNameInput).toHaveValue("my-display-name");
    });
  });
});
