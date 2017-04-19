//Class Child construct
function Child(){
  //heritage
  Parent.apply(this, arguments);
}
//heritage
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
//properties
Child.prototype.myProp = 'gene child';
//methods
Child.prototype.getMyProp = function () {
  return this.getMyProp
};
