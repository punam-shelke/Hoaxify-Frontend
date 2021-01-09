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
    const changeEvent = (content) => {
      return {
        target: {
          value: content,
        },
      };
    };

    it("sets the displayName value into state", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const displayNameInput = queryByPlaceholderText("Your display name");

      fireEvent.change(displayNameInput, changeEvent("my-display-name"));

      expect(displayNameInput).toHaveValue("my-display-name");
    });

    it("sets the username value into state", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const userNameInput = queryByPlaceholderText("Your username");

      fireEvent.change(userNameInput, changeEvent("my-user-name"));

      expect(userNameInput).toHaveValue("my-user-name");
    });

    it("sets the password value into state", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const passwordInput = queryByPlaceholderText("Your password");

      fireEvent.change(passwordInput, changeEvent("P4ssword"));

      expect(passwordInput).toHaveValue("P4ssword");
    });

    it("sets the password repeat value into state", () => {
      const { queryByPlaceholderText } = render(<UserSignupPage />);
      const passwordRepeatInput = queryByPlaceholderText(
        "Repeat your password"
      );

      fireEvent.change(passwordRepeatInput, changeEvent("P4ssword"));

      expect(passwordRepeatInput).toHaveValue("P4ssword");
    });

    it("calls postSignup when the fields are valid and the actions are provided in the props", () => {
      const actions = {
        postSignup: jest.fn().mockResolvedValueOnce({}),
      };
      const { container, queryByPlaceholderText } = render(
        <UserSignupPage actions={actions} />
      );
      const displayNameInput = queryByPlaceholderText("Your display name");
      const userNameInput = queryByPlaceholderText("Your username");
      const passwordInput = queryByPlaceholderText("Your password");
      const passwordRepeatInput = queryByPlaceholderText(
        "Repeat your password"
      );
      fireEvent.change(displayNameInput, changeEvent("my-display-name"));
      fireEvent.change(userNameInput, changeEvent("my-user-name"));
      fireEvent.change(passwordInput, changeEvent("P4ssword"));
      fireEvent.change(passwordRepeatInput, changeEvent("P4ssword"));
      const button = container.querySelector("button");

      fireEvent.click(button);

      expect(actions.postSignup).toHaveBeenCalledTimes(1);
    });

    it("does not throw exception when clicking button when actions are not provided in the props", () => {
      const { container, queryByPlaceholderText } = render(<UserSignupPage />);
      const displayNameInput = queryByPlaceholderText("Your display name");
      const userNameInput = queryByPlaceholderText("Your username");
      const passwordInput = queryByPlaceholderText("Your password");
      const passwordRepeatInput = queryByPlaceholderText(
        "Repeat your password"
      );
      fireEvent.change(displayNameInput, changeEvent("my-display-name"));
      fireEvent.change(userNameInput, changeEvent("my-user-name"));
      fireEvent.change(passwordInput, changeEvent("P4ssword"));
      fireEvent.change(passwordRepeatInput, changeEvent("P4ssword"));
      const button = container.querySelector("button");

      expect(() => fireEvent.click(button)).not.toThrow();
    });
  });
});
