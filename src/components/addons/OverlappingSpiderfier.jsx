import React from "react"
import PropTypes from "prop-types"
import { OverlappingMarkerSpiderfier } from "ts-overlapping-marker-spiderfier"

import {
  construct,
  componentDidMount,
  componentDidUpdate,
  componentWillUnmount,
} from "../../utils/MapChildHelper"

import { MAP, ANCHOR, OVERLAPPING_SPIDERFIER } from "../../constants"

/**
 * A wrapper around `OverlappingMarker`
 *
 */
export class OverlappingSpiderfier extends React.PureComponent {
  static propTypes = {
    /**
     * function
     */
    onClick: PropTypes.func,

    nearbyDistance: PropTypes.number,

    onSpiderFormat: PropTypes.func,
  }

  static contextTypes = {
    [MAP]: PropTypes.object,
  }

  static childContextTypes = {
    [OVERLAPPING_SPIDERFIER]: PropTypes.object,
  }

  /*
   * @see https://github.com/mahnunchik/markerclustererplus/blob/master/docs/reference.html
   */
  constructor(props, context) {
    super(props, context)
    const overlappingSpiderfier = new OverlappingMarkerSpiderfier(
      this.context[MAP],
      {
        nearbyDistance: this.props.nearbyDistance,
      }
    )
    construct(
      OverlappingSpiderfier.propTypes,
      updaterMap,
      this.props,
      overlappingSpiderfier
    )
    this.state = {
      [OVERLAPPING_SPIDERFIER]: overlappingSpiderfier,
    }
  }

  getChildContext() {
    const overlappingSpiderfier = this.state[OVERLAPPING_SPIDERFIER]
    return {
      [OVERLAPPING_SPIDERFIER]: overlappingSpiderfier,
    }
  }

  componentDidMount() {
    componentDidMount(this, this.state[OVERLAPPING_SPIDERFIER], eventMap)
  }

  componentDidUpdate(prevProps) {
    componentDidUpdate(
      this,
      this.state[OVERLAPPING_SPIDERFIER],
      eventMap,
      updaterMap,
      prevProps
    )
    google.maps.event.trigger(this.context[MAP], "resize")
  }

  componentWillUnmount() {
    componentWillUnmount(this)
    const overlappingSpiderfier = this.state[OVERLAPPING_SPIDERFIER]
    if (overlappingSpiderfier) {
    }
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}

export default OverlappingSpiderfier

const eventMap = {
  onClick: "click",
  onSpiderFormat: "spider_format",
}

const updaterMap = {
  averageCenter(instance, averageCenter) {
    instance.setAverageCenter(averageCenter)
  },

  batchSizeIE(instance, batchSizeIE) {
    instance.setBatchSizeIE(batchSizeIE)
  },

  batchSize(instance, batchSize) {
    instance.setBatchSize(batchSize)
  },

  calculator(instance, calculator) {
    instance.setCalculator(calculator)
  },

  clusterClass(instance, clusterClass) {
    instance.setClusterClass(clusterClass)
  },

  enableRetinaIcons(instance, enableRetinaIcons) {
    instance.setEnableRetinaIcons(enableRetinaIcons)
  },

  gridSize(instance, gridSize) {
    instance.setGridSize(gridSize)
  },

  ignoreHidden(instance, ignoreHidden) {
    instance.setIgnoreHidden(ignoreHidden)
  },

  imageExtension(instance, imageExtension) {
    instance.setImageExtension(imageExtension)
  },

  imagePath(instance, imagePath) {
    instance.setImagePath(imagePath)
  },

  imageSizes(instance, imageSizes) {
    instance.setImageSizes(imageSizes)
  },

  maxZoom(instance, maxZoom) {
    instance.setMaxZoom(maxZoom)
  },

  minimumClusterSize(instance, minimumClusterSize) {
    instance.setMinimumClusterSize(minimumClusterSize)
  },

  styles(instance, styles) {
    instance.setStyles(styles)
  },

  title(instance, title) {
    instance.setTitle(title)
  },

  zoomOnClick(instance, zoomOnClick) {
    instance.setZoomOnClick(zoomOnClick)
  },
}
