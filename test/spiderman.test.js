const spiderman = require("../app/spiderman");

describe("Unit test for spiderman class", () => {
    test('1) Create an spiderman object', () => {
      const andrewGarfield = new spiderman ("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
      const tomHolland = new spiderman ("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")

      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
      expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
    });
  })