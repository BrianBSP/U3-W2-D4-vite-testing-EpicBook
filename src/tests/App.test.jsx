import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App";
import { expect } from "vitest";

describe("Welcome is in the page", () => {
  it("mounts the component correctly", () => {
    render(<App />);

    //screen.debug();

    const welcome = screen.getByText(/benvenuto su epic book/i);

    expect(welcome).toBeInTheDocument();
  });
});
