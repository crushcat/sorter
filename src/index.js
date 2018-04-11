class Sorter {
  constructor() {
    
    this.sorter = [];
    this.comparator = null;
  }

  add(element) {
    this.sorter.push(element);
  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    let tArr = [];
    for (let i = 0; i < indices.length; i++) {
      tArr.push(this.sorter[indices[i]]);
    }
      if(this.comparator != null){
        tArr.sort(this.comparator);
      }
      else{
        tArr.sort((f,s)=>{return f-s;});
      }
      for (let i = 0; i < indices.length; i++) {
        this.sorter[indices[i]] = tArr[i];
        
      }
      return tArr;
      
    }
  

  setComparator(compareFunction) {
    this.comparator = compareFunction;
}
}

module.exports = Sorter;