
describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it("handles random array",function(){
    expect( bubbleSort([5,2,9,1])).toEqual([1,2,5,9]);
  });
  it("handles non-numbers",function(){
    expect(bubbleSort(['z','b']).toEqual(['b','z']));
  });
});
