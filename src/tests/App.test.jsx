import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from '../App.jsx';
import CustomButton from '../function-based/CustomButton.jsx';


describe("App component", () => {
    it("renders magnificent monkeys", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
});
});

describe("CustomButton", () => {
    it("should render a button with the text 'click me'", () => {
        render(<CustomButton onClick={ () => {} } />);

        const button = screen.getByRole("button", { name: "Click Me" });

        expect(button).toBeInTheDocument();

    });

    it("should call the onClick function when clicked", async() => {
        const onClick = vi.fn();
        const user = userEvent.setup()
        render(<CustomButton onClick={onClick} />);

        const button = screen.getByRole("button", { name: "Click Me" });

        await user.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("should not call the onClick function when it isn't clicked", async () => {
        const onClick = vi.fn();
        render(<CustomButton onClick={onClick} />);

        expect(onClick).not.toHaveBeenCalled();
    });
});