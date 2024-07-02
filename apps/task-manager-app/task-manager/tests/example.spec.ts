function addNumbers(a, b) {
    return a + b;
}
  
describe('addNumbers', () => {
    it('should add 2 and 3 correctly', () => {
        const result = addNumbers(2, 3);
        expect(result).toBe(5);
    });
  
    it('should add -5 and 10 correctly', () => {
        const result = addNumbers(-5, 10);
        expect(result).toBe(5);
    });
  
    it('should add 0 and 0 correctly', () => {
        const result = addNumbers(0, 0);
        expect(result).toBe(0);
    });
});