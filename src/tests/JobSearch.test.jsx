import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataContext } from "../context/DataContext";
import JobSearch from "../components/JobSearch";

describe("JobSearch", () => {
  it("renders the search input", () => {
    const setSearch = vi.fn();

    render(
      <DataContext.Provider value={{ setSearch }}>
        <JobSearch />
      </DataContext.Provider>
    );

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Search Job" })
    ).toBeInTheDocument();
  });

  it("searches for the entered job", () => {
    const setSearch = vi.fn();

    render(
      <DataContext.Provider value={{ setSearch }}>
        <JobSearch />
      </DataContext.Provider>
    );

    const input = screen.getByRole("searchbox");

    fireEvent.change(input, {
      target: { value: "Developer" },
    });

    fireEvent.submit(input.closest("form"));

    expect(setSearch).toHaveBeenCalledWith("Developer");
  });
});