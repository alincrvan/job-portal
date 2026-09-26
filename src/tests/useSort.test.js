import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useSort from "../hooks/useSort";

describe("useSort", () => {
  const jobs = [
    { title: "Zebra", postedDate: "2024-03-01" },
    { title: "Apple", postedDate: "2024-01-01" },
    { title: "Microsoft", postedDate: "2024-02-01" },
  ];

  it("sorts data by a column", () => {
    const { result } = renderHook(() => useSort(jobs));

    act(() => {
      result.current.handleSort("title");
    });

    expect(result.current.sortedData[0].title).toBe("Apple");
    expect(result.current.sortedData[2].title).toBe("Zebra");
  });

  it("changes direction when sorting the same column again", () => {
    const { result } = renderHook(() => useSort(jobs));

    act(() => {
      result.current.handleSort("title");
    });

    act(() => {
      result.current.handleSort("title");
    });

    expect(result.current.sort.direction).toBe("desc");
    expect(result.current.sortedData[0].title).toBe("Zebra");
  });
});