import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useFilteredJobs from "../hooks/useFilteredJobs";

describe("useFilteredJobs", () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Vienna",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      location: "Berlin",
      type: "Part-time",
    },
    {
      title: "UI Designer",
      location: "Vienna",
      type: "Full-time",
    },
  ];

  it("filters jobs by search term", () => {
    const { result } = renderHook(() =>
      useFilteredJobs(jobs, "Frontend", {})
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].title).toBe("Frontend Developer");
  });

  it("filters jobs by active filters", () => {
    const { result } = renderHook(() =>
      useFilteredJobs(jobs, "", { location: "Vienna" })
    );

    expect(result.current).toHaveLength(2);
    expect(result.current.every((job) => job.location === "Vienna")).toBe(true);
  });

  it("returns jobs matching both search and filters", () => {
    const { result } = renderHook(() =>
      useFilteredJobs(jobs, "Developer", { location: "Vienna" })
    );

    expect(result.current).toHaveLength(1);
    expect(result.current[0].title).toBe("Frontend Developer");
  });
});