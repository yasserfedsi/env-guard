import { describe, expect, test, beforeEach } from "vitest";
import { validateEnv } from "../src";

describe("validateEnv", () => {
  test("validates string", () => {
    process.env.NAME = "Ahmed";

    const env = validateEnv({
      NAME: "string",
    });

    expect(env.NAME).toBe("Ahmed");
  });

  test("validates number", () => {
    process.env.PORT = "3000";

    const env = validateEnv({
      PORT: "number",
    });

    expect(env.PORT).toBe(3000);
  });

  test("validates boolean", () => {
    process.env.DEBUG = "true";

    const env = validateEnv({
      DEBUG: "boolean",
    });

    expect(env.DEBUG).toBe(true);
  });

  test("throws when missing", () => {
    delete process.env.MISSING;

    expect(() => {
      validateEnv({
        MISSING: "string",
      });
    }).toThrow();
  });
});

beforeEach(() => {
  delete process.env.NAME;
  delete process.env.PORT;
  delete process.env.DEBUG;
  delete process.env.MISSING;
});
