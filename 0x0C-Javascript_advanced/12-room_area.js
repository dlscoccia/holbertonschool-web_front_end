const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
      return this.width * this.length;
    }
};

const unboundGetArea = roomDimensions.getArea;
console.log(unboundGetArea()); // The function gets invoked at the global scope
  // expected output: undefined

const boundGetArea = unboundGetArea.bind(roomDimensions);
console.log(boundGetArea());
