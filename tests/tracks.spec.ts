import { describe, it, expect } from "vitest";
import { tracks } from "../src/data/tracks";

describe("track metadata", () => {
  it("exposes at least three certification tracks", () => {
    expect(tracks.length).toBeGreaterThanOrEqual(3);
  });

  it("aligns every track with a CertPrep repository", () => {
    for (const track of tracks) {
      expect(track.repoUrl).toMatch(/^https:\/\/github.com\/certforge\//);
      expect(track.quickStart).toMatch(/docs\/.+\.md$/);
    }
  });

  it("ensures domain weights always equal 100%", () => {
    for (const track of tracks) {
      const total = track.domains.reduce((sum, domain) => sum + domain.weight, 0);
      expect(total).toBe(100);
    }
  });

  it("ships at least one lab or script per track", () => {
    for (const track of tracks) {
      expect(track.labs.length).toBeGreaterThan(0);
      for (const lab of track.labs) {
        expect(lab.path.length).toBeGreaterThan(0);
      }
    }
  });
});
