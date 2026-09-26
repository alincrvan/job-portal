import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { DataContext } from "../context/DataContext";
import { INITIAL_FILTERS } from "../constants/filters";
import JobFilters from "../components/filter/JobFilters";

describe("JobFilters", () => {
  const jobList = [
    {
      location: "Vienna",
      type: "Full-time",
      category: "Development",
    },
  ];

  it("renders the reset button", () => {
    const setActiveFilters = vi.fn();

    render(
      <DataContext.Provider
        value={{
          jobList,
          activeFilters: INITIAL_FILTERS,
          setActiveFilters,
        }}
      >
        <JobFilters />
      </DataContext.Provider>
    );

    expect(
      screen.getByRole("button", { name: "Reset Filters" })
    ).toBeInTheDocument();
  });

  it("resets the filters when clicked", () => {
    const setActiveFilters = vi.fn();

    render(
      <DataContext.Provider
        value={{
          jobList,
          activeFilters: INITIAL_FILTERS,
          setActiveFilters,
        }}
      >
        <JobFilters />
      </DataContext.Provider>
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Reset Filters" })
    );

    expect(setActiveFilters).toHaveBeenCalledWith(INITIAL_FILTERS);
  });
});