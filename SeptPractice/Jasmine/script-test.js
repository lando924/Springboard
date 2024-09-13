describe('getCurrentUIValues tests', function() {
  it('should calculate the monthly rate correctly', function () {
    
    });
    
    
    it("should return a result with 2 decimal places", function() {
      
    });
})    

describe('CalculateMonthlyPayment', function() {
  it('should calculate the monthly payment correctly', function() {
    const values = { amount: 1000, years: 10, rate: 4.5 };
    expect(calculateMonthlyPayment(values)).toEqual('10.36');
  });
  it('should return a result with 2 decimal places', function () {
    const values = { amount: 500, years: 5, rate: 3.5};
    expect(calculateMonthlyPayment(values)).toMatch(/^\d+\.\d{2}$/);
  })
})