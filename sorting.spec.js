describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('handles an array with only one element', function(){
    	expect( bubbleSort([10])).toEqual([10])
    });

    it('handles an array with multiple elements', function(){
    	expect( bubbleSort([10,2,1,6,52,41])).toEqual([1,2,6,10,41,52])
    });

	 it('handles an array with elements in order', function(){
    	expect( bubbleSort([1,2,6,10,41,52])).toEqual([1,2,6,10,41,52])
    });
});


describe('merge', function(){
	it('is able to merge two arrays with one element', function(){
    	expect( merge([2],[1])).toEqual([1,2])
        // test the merging algorithm
    })
    it('is able to merge two sorted arrays of equal length', function(){
    	expect( merge([2,3,5,8,10],[3,4,6,7,12])).toEqual([2,3,3,4,5,6,7,8,10,12])
        // test the merging algorithm
    });
    it('is able to merge two sorted arrays of different length', function(){
    	expect( merge([2,3,5,8],[3,4,6,7,12])).toEqual([2,3,3,4,5,6,7,8,12])
        // test the merging algorithm
    })
});


describe('mergeSort', function() {
  
  it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });

    it('handles an array with only one element', function(){
    	expect( mergeSort([10])).toEqual([10])
    });

    it('handles an array with multiple elements', function(){
    	expect( mergeSort([10,2,1,6,52,41])).toEqual([1,2,6,10,41,52])
    });

	 it('handles an array with elements in order', function(){
    	expect( mergeSort([1,2,6,10,41,52])).toEqual([1,2,6,10,41,52])
    });

});

