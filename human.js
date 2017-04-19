//Class Human construct
function Human(name, age){
  //abstract class
  if(this.__proto__.__proto__.constructor === Object) throw 'need to be extended';
  //polymorphism
  switch (arguments.length) {
    case 0:
      console.log('A human has created!');
      break;
    case 1:
      if(typeof arguments[0] != 'string') throw 'You need pass a string';
      this.setName(arguments[0]);
      console.log("human "+this.name+" has created.");
      break;
    case 2:
      if( (typeof arguments[0] != 'string') ||
          (typeof arguments[1] != 'number') ) throw 'You need pass corrects args';
      this.setName(arguments[0]);
      this.setAge(arguments[1]);
      console.log("the human "+this.name+" with "+this.age+" has created.");
      break;
    default:
      throw 'bad args';
  }
  Human.incleasePopulation();
}
//properties
Human.prototype.name = null;
Human.prototype.age = null;
//methods
Human.prototype.setName = function (name) {
  this.name = name
};
Human.prototype.setAge = function (age) {
  this.age = age
};
Human.prototype.speak = function () {
  console.log('Hi! Im '+this.name+'. Im a human being');
};
//abstract methods
Human.prototype.saySomething = function () {
  throw 'need to be implemented';
};
//static properties
Human.totalPopulation = 0;
//static methods
Human.incleasePopulation = function(){
  Human.totalPopulation++;
  console.log('Total of population is '+Human.totalPopulation);
}
