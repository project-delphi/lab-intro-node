class SortedList {
  constructor(){
    this.items = []
    this.length = 0
  }
  add(item){
    this.items.push(item)
    this.items.sort((a,b) => {return(a-b)})
    this.length ++

  }
  get(pos){
    return this.items[(pos-1)]
  }
  max(){
    return Math.max(...this.items)
  }
  min(){
    return Math.min(...this.items)
  }
  sum(){
    return this.items.reduce((a,b)=> a+b,0)
  }
  average(){
   return this.sum()/this.length
  }
}

module.exports = SortedList;
