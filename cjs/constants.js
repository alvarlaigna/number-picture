(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.constants = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MOUSE_EVENTS = exports.MOUSE_EVENTS = ['onClick', 'onContextMenu', 'onDoubleClick', 'onDrag', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp'];

  var TWEENABLE_SVG_PRESENTATION_ATTRS = exports.TWEENABLE_SVG_PRESENTATION_ATTRS = [
  // 'alignmentBaseline',
  // 'baselineShift',
  // 'clip',
  // 'clipPath',
  // 'clipRule',
  'color',
  // 'colorInterpolation',
  // 'colorInterpolationFilters',
  // 'colorProfile',
  // 'colorRendering',
  // 'cursor',
  // 'direction',
  // 'display',
  // 'dominantBaseline',
  // 'enableBackground',
  'fill', 'fillOpacity',
  // 'fillRule',
  // 'filter',
  'floodColor', 'floodOpacity',
  // 'fontFamily',
  'fontSize', 'fontSizeAdjust', 'fontStretch',
  // 'fontStyle',
  // 'fontVariant',
  // 'fontWeight',
  // 'glyphOrientationHorizontal',
  // 'glyphOrientationVertical',
  // 'imageRendering',
  'kerning', 'letterSpacing', 'lightingColor',
  // 'markerEnd',
  // 'markerMid',
  // 'markerStart',
  // 'mask',
  'opacity',
  // 'overflow',
  // 'pointerEvents',
  // 'shapeRendering',
  'stopColor', 'stopOpacity', 'stroke',
  // 'strokeDasharray',
  'strokeDashoffset',
  // 'strokeLinecap',
  // 'strokeLinejoin',
  'strokeMiterlimit', 'strokeOpacity', 'strokeWidth',
  // 'textAnchor',
  // 'textDecoration',
  // 'textRendering',
  // 'unicodeBidi',
  // 'visibility',
  'wordSpacing'];
});