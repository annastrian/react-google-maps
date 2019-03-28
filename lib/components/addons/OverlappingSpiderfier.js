"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.OverlappingSpiderfier = undefined

var _defineProperty2 = require("babel-runtime/helpers/defineProperty")

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of")

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck")

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = require("babel-runtime/helpers/createClass")

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn")

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = require("babel-runtime/helpers/inherits")

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = require("../../utils/MapChildHelper")

var _constants = require("../../constants")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `OverlappingMarker`
 *
 */
var OverlappingSpiderfier = (exports.OverlappingSpiderfier = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(OverlappingSpiderfier, _React$PureComponent)

  /*
   * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
   */
  function OverlappingSpiderfier(props, context) {
    ;(0, _classCallCheck3.default)(this, OverlappingSpiderfier)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        OverlappingSpiderfier.__proto__ ||
        (0, _getPrototypeOf2.default)(OverlappingSpiderfier)
      ).call(this, props, context)
    )

    var overlappingSpiderfier = new OverlappingMarkerSpiderfier(
      _this.context[_constants.MAP],
      {
        nearbyDistance: _this.props.nearbyDistance,
      }
    )
    ;(0, _MapChildHelper.construct)(
      OverlappingSpiderfier.propTypes,
      updaterMap,
      _this.props,
      overlappingSpiderfier
    )
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.OVERLAPPING_SPIDERFIER,
      overlappingSpiderfier
    )
    return _this
  }

  ;(0, _createClass3.default)(OverlappingSpiderfier, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        var overlappingSpiderfier = this.state[
          _constants.OVERLAPPING_SPIDERFIER
        ]
        return (0, _defineProperty3.default)(
          {},
          _constants.OVERLAPPING_SPIDERFIER,
          overlappingSpiderfier
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.OVERLAPPING_SPIDERFIER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.OVERLAPPING_SPIDERFIER],
          eventMap,
          updaterMap,
          prevProps
        )
        google.maps.event.trigger(this.context[_constants.MAP], "resize")
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var overlappingSpiderfier = this.state[
          _constants.OVERLAPPING_SPIDERFIER
        ]
        if (overlappingSpiderfier) {
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },
    },
  ])
  return OverlappingSpiderfier
})(_react2.default.PureComponent))

OverlappingSpiderfier.propTypes = {
  /**
   * function
   */
  onClick: _propTypes2.default.func,

  nearbyDistance: _propTypes2.default.number,

  onSpiderFormat: _propTypes2.default.func,
}
OverlappingSpiderfier.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
OverlappingSpiderfier.childContextTypes = (0, _defineProperty3.default)(
  {},
  _constants.OVERLAPPING_SPIDERFIER,
  _propTypes2.default.object
)
exports.default = OverlappingSpiderfier

var eventMap = {
  onClick: "click",
  onSpiderFormat: "spider_format",
}

var updaterMap = {
  averageCenter: function averageCenter(instance, _averageCenter) {
    instance.setAverageCenter(_averageCenter)
  },
  batchSizeIE: function batchSizeIE(instance, _batchSizeIE) {
    instance.setBatchSizeIE(_batchSizeIE)
  },
  batchSize: function batchSize(instance, _batchSize) {
    instance.setBatchSize(_batchSize)
  },
  calculator: function calculator(instance, _calculator) {
    instance.setCalculator(_calculator)
  },
  clusterClass: function clusterClass(instance, _clusterClass) {
    instance.setClusterClass(_clusterClass)
  },
  enableRetinaIcons: function enableRetinaIcons(instance, _enableRetinaIcons) {
    instance.setEnableRetinaIcons(_enableRetinaIcons)
  },
  gridSize: function gridSize(instance, _gridSize) {
    instance.setGridSize(_gridSize)
  },
  ignoreHidden: function ignoreHidden(instance, _ignoreHidden) {
    instance.setIgnoreHidden(_ignoreHidden)
  },
  imageExtension: function imageExtension(instance, _imageExtension) {
    instance.setImageExtension(_imageExtension)
  },
  imagePath: function imagePath(instance, _imagePath) {
    instance.setImagePath(_imagePath)
  },
  imageSizes: function imageSizes(instance, _imageSizes) {
    instance.setImageSizes(_imageSizes)
  },
  maxZoom: function maxZoom(instance, _maxZoom) {
    instance.setMaxZoom(_maxZoom)
  },
  minimumClusterSize: function minimumClusterSize(
    instance,
    _minimumClusterSize
  ) {
    instance.setMinimumClusterSize(_minimumClusterSize)
  },
  styles: function styles(instance, _styles) {
    instance.setStyles(_styles)
  },
  title: function title(instance, _title) {
    instance.setTitle(_title)
  },
  zoomOnClick: function zoomOnClick(instance, _zoomOnClick) {
    instance.setZoomOnClick(_zoomOnClick)
  },
}
