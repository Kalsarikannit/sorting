
describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it("handles random array",function(){
    expect( mergeSort([5,2,9,1])).toEqual([1,2,5,9]);
  });
  it("handles non-numbers",function(){
    expect(mergeSort(['z','b']).toEqual(['b','z']));
  });
});
