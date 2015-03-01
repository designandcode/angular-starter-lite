app.service('permissionService', [function(){
  var t = this;
  this.currentID = null;
  this.userID = null;
  this.permissions = {}
  //this.set = function(permissions, currentID, userID){
  //  console.log('permissions loaded from service');
  //  if(permissions){
  //    t.currentID = currentID;
  //    t.userID = userID;
  //    for(var i in permissions){
  //      if(permissions[i] == 1 && currentID == userID){
  //        t.permissions[i] = true;
  //      } else if(permissions[i] == 2){
  //        t.permissions[i] = true;
  //      } else{
  //        t.permissions[i] = false;
  //      }
  //    }
  //  }
  //  //return permissions;
  //  return t;
  //}
  this.set = function(permissions, currentID){
    t.currentID = currentID;
    t.permissions = permissions;
    return t;
  }
  this.show = function(id){
    if(t.permissions){
      if(id){
        if(t.permissions.show == 2 || (t.permissions.show == 1 && t.currentID == id)){
          return true;
        }
      } /*else{
        if(t.permissions.show && t.permissions.show != 0){
          return true;
        }
      }*/
    }
    return false;
  }
  this.edit = function(id){
    if(t.permissions){
      if(id && t.permissions){
        if(t.permissions.edit == 2 || (t.permissions.edit == 1 && t.currentID == id)){
          return true;
        }
      } /*else{
        if(t.permissions.edit && t.permissions.edit != 0){
          return true;
        }
      }*/
    }
    return false;
  }
  this.delete = function(id){
    // not sure if want to allow delete self
    if(t.permissions){
      if(id && t.permissions){
        if(t.permissions.delete == 2 && t.currentID != id){
          return true;
        }
      }
    }
    return false;
  }
  this.view = function(){
    if(t.permissions){
      if(t.permissions.view && t.permissions.view != 0){
        return true;
      }
    }
    return false;
  }
  this.create = function(){
    if(t.permissions){
      if(t.permissions.create == 2){
        return true;
      }
    }
    return false;
  }
  // persist then return permissions
  //this.permissions = ['show', 'view', 'edit'];
  //this.permissions = {show: true, view: true, edit: true, delete: false}
  //this.permissions = null;
}]);
