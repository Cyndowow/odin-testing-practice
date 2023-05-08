const caesarCipher = require("./caesarCipher")

test("abcde should return bcdef", () => {
    expect(caesarCipher("abcde", 1)).toBe("bcdef");
})

test("wrap from a to z", () => {
    expect(caesarCipher("a", -1)).toBe("z");
})

test("keep upper case", () => {
    expect(caesarCipher("ABCDE", 1)).toBe("BCDEF");
})

test("test punctuation", () => {
    expect(caesarCipher("hello.!", 1)).toBe("ifmmp.!")
})