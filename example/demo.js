(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../package/dist/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position() {
  return window.scrollY || window.pageYOffset;
}

window.addEventListener('scroll', function (e) {
  var speed = (0, _index2.default)(position(), e, {
    interval: 1000
  });

  if (speed > 200) {
    console.log('fast!');
  }
});

},{"../package/dist/index.js":2}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var time=0,prevtime=0,distance=0,prevscroll=0,pool=[];exports.default=function(a,b){var c=b.timeStamp,d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},e=0;time=c-prevtime,distance=Math.abs(a-prevscroll),prevscroll=a,prevtime=c,pool.push(distance/(time*(1/d.interval||100))),pool.length>(d.pool||10)&&pool.shift();for(var f=0;f<pool.length;f++)return e=pool[f]+e,e/(f+1)};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIi4uL3BhY2thZ2UvZGlzdC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixTQUFPLE9BQU8sT0FBUCxJQUFrQixPQUFPLFdBQWhDO0FBQ0Q7O0FBRUQsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxhQUFLO0FBQ3JDLE1BQU0sUUFBUSxxQkFBSyxVQUFMLEVBQWlCLENBQWpCLEVBQW9CO0FBQ2hDLGNBQVU7QUFEc0IsR0FBcEIsQ0FBZDs7QUFJQSxNQUFJLFFBQVEsR0FBWixFQUFpQjtBQUNmLFlBQVEsR0FBUixDQUFZLE9BQVo7QUFDRDtBQUNGLENBUkQ7OztBQ05BIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBzdmVsIGZyb20gJy4uL3BhY2thZ2UvZGlzdC9pbmRleC5qcydcblxuZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXRcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICBjb25zdCBzcGVlZCA9IHN2ZWwocG9zaXRpb24oKSwgZSwge1xuICAgIGludGVydmFsOiAxMDAwLFxuICB9KVxuXG4gIGlmIChzcGVlZCA+IDIwMCkge1xuICAgIGNvbnNvbGUubG9nKCdmYXN0IScpXG4gIH1cbn0pXG4iLCJcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdGltZT0wLHByZXZ0aW1lPTAsZGlzdGFuY2U9MCxwcmV2c2Nyb2xsPTAscG9vbD1bXTtleHBvcnRzLmRlZmF1bHQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iLnRpbWVTdGFtcCxkPTI8YXJndW1lbnRzLmxlbmd0aCYmYXJndW1lbnRzWzJdIT09dm9pZCAwP2FyZ3VtZW50c1syXTp7fSxlPTA7dGltZT1jLXByZXZ0aW1lLGRpc3RhbmNlPU1hdGguYWJzKGEtcHJldnNjcm9sbCkscHJldnNjcm9sbD1hLHByZXZ0aW1lPWMscG9vbC5wdXNoKGRpc3RhbmNlLyh0aW1lKigxL2QuaW50ZXJ2YWx8fDEwMCkpKSxwb29sLmxlbmd0aD4oZC5wb29sfHwxMCkmJnBvb2wuc2hpZnQoKTtmb3IodmFyIGY9MDtmPHBvb2wubGVuZ3RoO2YrKylyZXR1cm4gZT1wb29sW2ZdK2UsZS8oZisxKX07Il19
