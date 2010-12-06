// ==========================================================================
// Project:   Todos.tasksController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Todos */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Todos.tasksController = SC.ArrayController.create(
/** @scope Todos.tasksController.prototype */ {

  // TODO: Add your own code here.

  summary: function() {
    var len = this.get('length'), ret;

    if (len && len > 0) {
      ret = len === 1 ? "1 task" : "%@ tasks".fmt(len);
    } else ret = "No tasks";

    return ret;
  }.property('length').cacheable()
}) ;
