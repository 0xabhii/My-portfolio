import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { navItems } from "@/data/portfolio";
import { routeTree } from "@/routeTree.gen";

describe("Portfolio navigation", () => {
  it("shows only the five requested buttons, in order", () => {
    expect(navItems.map((n) => n.label)).toEqual([
      "Work",
      "Experience",
      "Spaces",
      "Highlights",
      "Contact",
    ]);
  });

  it("every nav button opens a real page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const item of navItems) {
      const matches = router.matchRoutes(item.to);
      expect(matches.at(-1)?.routeId).toBe(item.to);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });
});
