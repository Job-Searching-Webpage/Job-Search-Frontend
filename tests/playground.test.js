//no need to import anything because jest will import them by default

import { evenOrOdd, multiply } from "@/playground";

//to run use the command
//npm run test:unit

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two numbers", () => {
    expect(5 - 3).toBe(2);
    expect(2 - 1).toBe(1);
  });

  describe("evenOrOdd", () => {
    describe("When the number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });
    describe("When the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(3)).toBe("Odd");
      });
    });
  });
  describe("multiply", () => {
    it("multiplies two numbers", () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
