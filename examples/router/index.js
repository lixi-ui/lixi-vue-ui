import nav from "nav.config.json";

var routerObj = []
for(var i = 0;i < nav.length; i++){
  var obj = {}
  obj.name = nav[i].name;
  obj.path = nav[i].path;
  obj.compoment = nav[i].component;
  obj.mate = nav.mate;
  routerObj.push(obj)
}

return routerObj;