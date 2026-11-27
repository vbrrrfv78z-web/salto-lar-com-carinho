import { describe, expect, it } from "vitest";
import { maskCelular, mergeUtms } from "@/lib/lead";

describe("lead form", () => {
  it("masks mobile phone", () => expect(maskCelular("11945338583")).toBe("(11) 94533-8583"));
  it("keeps stored UTMs when URL has none", () => {
    expect(mergeUtms("", JSON.stringify({ utm_source: "google" })).utm_source).toBe("google");
  });
  it("URL UTMs replace stored ones", () => {
    const u = mergeUtms("?utm_source=meta&utm_campaign=nov", JSON.stringify({ utm_source: "google", utm_term: "x" }));
    expect([u.utm_source, u.utm_campaign, u.utm_term]).toEqual(["meta", "nov", ""]);
  });
});
