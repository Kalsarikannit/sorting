
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([], compareTo) ).toEqual( [] );
  });
  it("handles random array",function(){
    expect( bubbleSort([5,2,9,1])).toEqual([1,2,5,9]);
  });
  it("handles non-numbers",function(){
    expect(bubbleSort(['z','b'])).toEqual(['b','z']);
  });
  it("handles string with different length", function(){
    expect(bubbleSort(['strings', 'string', 'str'])).toEqual(['str', 'string', 'strings']);
  });
});
