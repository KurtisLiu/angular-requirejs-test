define(function(require, exports) {
  return function(testDirectives) {
    testDirectives.directive('dialog', function() {
      var defaultOptions = {
        overlay: true,
        draggable: true
      };
      var showOverlay = function(dialog) {
        if(dialog.overlay) {
          $('<div></div>').addClass('overlay').appendTo($('body'));
        }
      };
      var removeOverlay = function() {
        $('.overlay').remove();
      };
      var bindDragEvent = function(dialog) {
        if(dialog.draggable) {
          var drag = false,
              mouseX = 0,
              mouseY = 0;
          $('.dialog-header').on('mousedown', function(e) {
            drag = true;
            mouseX = e.pageX;
            mouseY = e.pageY;
            console.log('drag start');
          });
          $('body').on('mousemove', function(e) {
            if(drag) {
              var dx = e.pageX - mouseX, dy = e.pageY - mouseY;
              dialog.element.css('top', (parseInt(dialog.element.css('top')) + dy) + 'px');
              dialog.element.css('left', (parseInt(dialog.element.css('left')) + dx) + 'px');
              mouseX = e.pageX;
              mouseY = e.pageY;
              console.log('drag move, [%d, %d]', dx, dy);
            }
          });
          $('.dialog-header').on('mouseup', function(e) {
            drag = false;
            console.log('drag end');
          });
        }
      }
      var bindEvents = function(dialog) {
        bindDragEvent(dialog);
      };
      return {
        restrict: 'A',
        templateUrl: '/tpls/directives/dialog.html',
        scope: {
          dialog: '=dialog'
        },
        transclude: true,
        replace: true,
        link: function(scope, element, attrs) {
          var dialog = scope.dialog;
          $.extend(dialog, $.extend({}, defaultOptions, dialog));
          dialog.element = element;
          bindEvents(dialog);
          dialog.open = function() {
            showOverlay(dialog);
            element.show();
          };
          dialog.close = function() {
            removeOverlay();
            element.hide();
          };
          dialog.destroy = function() {
            element.remove();
          }
        }
      };
    });
  };
});