//Class Useful construct
function Useful(){}
//properties
Useful.total = 0;
Useful.now = 0;
Useful.include = function(){
  var _args = arguments;
  var len = _args.length;
  var mod = _args[0];
  if(Useful.total == 0){
    Useful.total = len;
    Useful.now = 0;
  }
  if(len > 1){
    var i;
    for(i = 1; i < len; i++){
      _args[i-1] = _args[i];
    }
    delete _args[i];
    _args.length--;
    $.getScript(mod, function(){
      Useful.now++;
      $('.useful-loader').text(Math.trunc((Useful.now / Useful.total)*100));
      Useful.include.apply(this,_args);
    });
  } else {
    Useful.now++;
    $('.useful-loader').text((Useful.now / Useful.total)*100);
    Useful.total = 0;
    Useful.now = 0;
    mod();
  }
}
