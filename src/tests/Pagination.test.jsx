import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/table/Pagination";

describe("Pagination", () => {
  it("renders the current page and buttons", () => {
    const onPageChange = vi.fn();

    render(
      <Pagination
        page={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );

    expect(screen.getByText("Page 2 of 5")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Back" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });

  it("calls onPageChange when Next is clicked", () => {
    const onPageChange = vi.fn();

    render(
      <Pagination
        page={2}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(onPageChange).toHaveBeenCalled();
  });
});