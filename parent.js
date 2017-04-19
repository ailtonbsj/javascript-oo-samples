//Class Parent construct
function Parent(name, age){
  //heritage
  Grand.apply(this, arguments);
}
//heritage
Parent.prototype = Object.create(Grand.prototype);
Parent.prototype.constructor = Parent;
//properties
Parent.prototype.propFromParent = 'genesParent';
//methods
Parent.prototype.getPropParent = function () {
  return this.propFromParent
};
