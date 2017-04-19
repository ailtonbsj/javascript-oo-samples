//Class Grand construct
function Grand(name, age){
  //heritage
  Human.apply(this,arguments);
}
//heritage
Grand.prototype = Object.create(Human.prototype);
Grand.prototype.constructor = Grand;
//properties
Grand.prototype.propFromGrand = 'genesGrand';
//methods
Grand.prototype.saySomething = function () {
  console.log('My genes is from Grand');
};
