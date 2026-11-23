import { describe, expect, it } from "vitest";
import { canLoadMeasurement, parseConsent } from "@/lib/consent";
import { searchSite } from "@/lib/navigation";
import { BUSINESS_SCHEMA, breadcrumbSchema, SITE_URL } from "@/lib/site";

describe("Privacy choices", () => {
  it("does not load optional measurement without permission", () => {
    expect(canLoadMeasurement(null)).toBe(false);
    expect(canLoadMeasurement("rejected")).toBe(false);
    expect(canLoadMeasurement("unexpected")).toBe(false);
  });
  it("loads measurement only after acceptance", () => {
    expect(canLoadMeasurement("accepted")).toBe(true);
    expect(parseConsent("accepted")).toBe("accepted");
  });
});
describe("Site discovery", () => {
  it("finds product information without requiring accents", () => {
    expect(searchSite("valvula").pages.map((page) => page.to)).toContain("/produtos");
    expect(searchSite("caixas de isopor").pages.map((page) => page.to)).toContain("/produtos");
  });
  it("finds articles and returns no fabricated results", () => {
    expect(searchSite("borracha").posts.map((post) => post.slug)).toContain("quando-trocar-a-borracha-da-panela-de-pressao");
    expect(searchSite("xyznonexistent")).toEqual({ pages: [], posts: [] });
  });
  it("keeps the complete article breadcrumb self-referencing", () => {
    const schema = breadcrumbSchema("/blog/exemplo", "Exemplo");
    expect(schema.itemListElement.map((item) => item.item)).toEqual([SITE_URL + "/", SITE_URL + "/blog", SITE_URL + "/blog/exemplo"]);
  });
});
describe("Confirmed business details", () => {
  it("uses 849 and the official phone", () => {
    expect(BUSINESS_SCHEMA.address.streetAddress).toContain("849");
    expect(BUSINESS_SCHEMA.telephone).toBe("+551140281879");
  });
  it("closes at 18h Monday to Friday and 13h Saturday, never opens Sunday", () => {
    expect(BUSINESS_SCHEMA.openingHoursSpecification[0]?.closes).toBe("18:00");
    expect(BUSINESS_SCHEMA.openingHoursSpecification[1]?.closes).toBe("13:00");
    expect(BUSINESS_SCHEMA.openingHoursSpecification.flatMap((entry) => entry.dayOfWeek)).not.toContain("Sunday");
  });
});