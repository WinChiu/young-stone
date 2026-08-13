(function () {
  'use strict';

  const DESIGN_VIEWPORT_WIDTH = 1440;
  const BASE_ROOT_FONT_SIZE = 16;
  const initialDevicePixelRatio = window.devicePixelRatio || 1;
  let layoutScaleAnimationFrame = null;

  function getZoomNeutralViewportWidth() {
    const viewportWidth =
      document.documentElement.clientWidth || window.innerWidth || 0;
    const currentDevicePixelRatio = window.devicePixelRatio || 1;
    const devicePixelRatioScale =
      currentDevicePixelRatio / initialDevicePixelRatio;
    const dprAdjustedViewportWidth = viewportWidth * devicePixelRatioScale;

    if (window.outerWidth && window.outerWidth > viewportWidth) {
      return window.outerWidth;
    }

    return dprAdjustedViewportWidth || viewportWidth;
  }

  function applyLayoutResolutionScale() {
    const zoomNeutralViewportWidth = getZoomNeutralViewportWidth();
    const scale = Math.max(1, zoomNeutralViewportWidth / DESIGN_VIEWPORT_WIDTH);
    const rootFontSize = BASE_ROOT_FONT_SIZE * scale;

    document.documentElement.style.setProperty(
      '--layout-resolution-scale',
      scale.toFixed(4),
    );
    document.documentElement.style.setProperty(
      '--layout-root-font-size',
      `${rootFontSize.toFixed(2)}px`,
    );
  }

  function scheduleLayoutResolutionScale() {
    if (layoutScaleAnimationFrame) {
      window.cancelAnimationFrame(layoutScaleAnimationFrame);
    }

    layoutScaleAnimationFrame = window.requestAnimationFrame(() => {
      layoutScaleAnimationFrame = null;
      applyLayoutResolutionScale();
    });
  }

  applyLayoutResolutionScale();
  window.addEventListener('resize', scheduleLayoutResolutionScale);
  window.visualViewport?.addEventListener(
    'resize',
    scheduleLayoutResolutionScale,
  );
})();
