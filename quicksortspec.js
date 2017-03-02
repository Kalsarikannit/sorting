describe('Quick Sort', function(){
  it('handles an empty array', function(){
    expect( quickSort([], compareTo) ).toEqual( [] );
  });
  it("handles random array",function(){
    expect( quickSort([5,2,9,1])).toEqual([1,2,5,9]);
  });
  it("handles random array",function(){
    expect( quickSort([5,2,9,1,15,20])).toEqual([1,2,5,9,15,20]);
  });
  it("handles non-numbers",function(){
    expect(quickSort(['z','b'])).toEqual(['b','z']);
  });
  it("handles string with different length", function(){
    expect(quickSort(['strings', 'string', 'str'])).toEqual(['str', 'string', 'strings']);
  });
});
