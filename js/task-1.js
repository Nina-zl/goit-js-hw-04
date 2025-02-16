function isEnoughCapacity(products, containerSize) {
    let total = 0;
  
    const values = Object.values(products);
    for (const value of values) {
        total += value;
    }
    if (total <= containerSize) {
        return true;
    } else {
        return false;
    }
    
}




console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false