import {
  _isNumberValue,
  coerceBooleanProperty,
  coerceCssPixelValue
} from "./chunk-XVKPKO6U.js";
import {
  TemplateRef,
  isDevMode
} from "./chunk-Y4OPO6BX.js";
import {
  Subject,
  from,
  isObservable,
  of,
  take
} from "./chunk-ELRSAQZ7.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-environments.mjs
var environment = {
  isTestMode: false
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-logger.mjs
var record = {};
var PREFIX = "[NG-ZORRO]:";
function notRecorded(...args) {
  const asRecord = args.reduce((acc, c) => acc + c.toString(), "");
  if (record[asRecord]) {
    return false;
  } else {
    record[asRecord] = true;
    return true;
  }
}
function consoleCommonBehavior(consoleFunc, ...args) {
  if (environment.isTestMode || isDevMode() && notRecorded(...args)) {
    consoleFunc(...args);
  }
}
var warn = (...args) => consoleCommonBehavior((...arg) => console.warn(PREFIX, ...arg), ...args);

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-util.mjs
function toArray(value) {
  let ret;
  if (value == null) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  } else {
    ret = value;
  }
  return ret;
}
function arraysEqual(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  const len = array1.length;
  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
function isNotNil(value) {
  return typeof value !== "undefined" && value !== null;
}
function isNil(value) {
  return typeof value === "undefined" || value === null;
}
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let idx = 0; idx < keysA.length; idx++) {
    const key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}
function isNonEmptyString(value) {
  return typeof value === "string" && value !== "";
}
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
function toBoolean(value) {
  return coerceBooleanProperty(value);
}
function toNumber(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function toCssPixel(value) {
  return coerceCssPixelValue(value);
}
function valueFunctionProp(prop, ...args) {
  return typeof prop === "function" ? prop(...args) : prop;
}
function propDecoratorFactory(name, fallback) {
  function propDecorator(target, propName, originalDescriptor) {
    const privatePropName = `$$__zorroPropDecorator__${propName}`;
    if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
      warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
    }
    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });
    return {
      get() {
        return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
      },
      set(value) {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value));
        }
        this[privatePropName] = fallback(value);
      }
    };
  }
  return propDecorator;
}
function InputBoolean() {
  return propDecoratorFactory("InputBoolean", toBoolean);
}
function InputNumber(fallbackValue) {
  return propDecoratorFactory("InputNumber", (value) => toNumber(value, fallbackValue));
}
function silentEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}
function getElementOffset(elem) {
  if (!elem.getClientRects().length) {
    return { top: 0, left: 0 };
  }
  const rect = elem.getBoundingClientRect();
  const win = elem.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
}
function isTouchEvent(event) {
  return event.type.startsWith("touch");
}
function getEventPosition(event) {
  return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
function getRegExp(prefix) {
  const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
  let prefixToken = prefixArray.join("").replace(/(\$|\^)/g, "\\$1");
  if (prefixArray.length > 1) {
    prefixToken = `[${prefixToken}]`;
  }
  return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, "g");
}
function getMentions(value, prefix = "@") {
  if (typeof value !== "string") {
    return [];
  }
  const regex = getRegExp(prefix);
  const mentions = value.match(regex);
  return mentions !== null ? mentions.map((e) => e.trim()) : [];
}
function padStart(toPad, length, element) {
  if (toPad.length > length) {
    return toPad;
  }
  const joined = `${getRepeatedElement(length, element)}${toPad}`;
  return joined.slice(joined.length - length, joined.length);
}
function getRepeatedElement(length, element) {
  return Array(length).fill(element).join("");
}
function isPromise(obj) {
  return !!obj && typeof obj.then === "function" && typeof obj.catch === "function";
}
function getPercent(min, max, value) {
  return (value - min) / (max - min) * 100;
}
function getPrecision(num) {
  const numStr = num.toString();
  const dotIndex = numStr.indexOf(".");
  return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
function ensureNumberInRange(num, min, max) {
  if (isNaN(num) || num < min) {
    return min;
  } else if (num > max) {
    return max;
  } else {
    return num;
  }
}
function isNumberFinite(value) {
  return typeof value === "number" && isFinite(value);
}
function toDecimal(value, decimal) {
  return Math.round(value * Math.pow(10, decimal)) / Math.pow(10, decimal);
}
function sum(input, initial = 0) {
  return input.reduce((previous, current) => previous + current, initial);
}
function scrollIntoView(node) {
  const nodeAsAny = node;
  if (nodeAsAny.scrollIntoViewIfNeeded) {
    nodeAsAny.scrollIntoViewIfNeeded(false);
    return;
  }
  if (node.scrollIntoView) {
    node.scrollIntoView(false);
    return;
  }
}
var properties = [
  "direction",
  // RTL support
  "boxSizing",
  "width",
  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  "height",
  "overflowX",
  "overflowY",
  // copy the scrollbar for IE
  "borderTopWidth",
  "borderRightWidth",
  "borderBottomWidth",
  "borderLeftWidth",
  "borderStyle",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "fontStretch",
  "fontSize",
  "fontSizeAdjust",
  "lineHeight",
  "fontFamily",
  "textAlign",
  "textTransform",
  "textIndent",
  "textDecoration",
  // might not make a difference, but better be safe
  "letterSpacing",
  "wordSpacing",
  "tabSize",
  "MozTabSize"
];
var isBrowser = typeof window !== "undefined";
var isFirefox = isBrowser && window.mozInnerScreenX != null;
var _parseInt = (str) => parseInt(str, 10);
function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
  }
  const debug = options && options.debug || false;
  if (debug) {
    const el = document.querySelector("#input-textarea-caret-position-mirror-div");
    if (el) {
      el.parentNode.removeChild(el);
    }
  }
  const div = document.createElement("div");
  div.id = "input-textarea-caret-position-mirror-div";
  document.body.appendChild(div);
  const style = div.style;
  const computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;
  const isInput = element.nodeName === "INPUT";
  style.whiteSpace = "pre-wrap";
  if (!isInput) {
    style.wordWrap = "break-word";
  }
  style.position = "absolute";
  if (!debug) {
    style.visibility = "hidden";
  }
  properties.forEach((prop) => {
    if (isInput && prop === "lineHeight") {
      style.lineHeight = computed.height;
    } else {
      style[prop] = computed[prop];
    }
  });
  if (isFirefox) {
    if (element.scrollHeight > _parseInt(computed.height)) {
      style.overflowY = "scroll";
    }
  } else {
    style.overflow = "hidden";
  }
  div.textContent = element.value.substring(0, position);
  if (isInput) {
    div.textContent = div.textContent.replace(/\s/g, " ");
  }
  const span = document.createElement("span");
  span.textContent = element.value.substring(position) || ".";
  div.appendChild(span);
  const coordinates = {
    top: span.offsetTop + _parseInt(computed.borderTopWidth),
    left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
    height: _parseInt(computed.lineHeight)
  };
  if (debug) {
    span.style.backgroundColor = "#eee";
    createDebugEle(element, coordinates);
  } else {
    document.body.removeChild(div);
  }
  return coordinates;
}
function createDebugEle(element, coordinates) {
  const fontSize = getComputedStyle(element).getPropertyValue("font-size");
  const rect = document.querySelector("#DEBUG") || document.createElement("div");
  document.body.appendChild(rect);
  rect.id = "DEBUG";
  rect.style.position = "absolute";
  rect.style.backgroundColor = "red";
  rect.style.height = fontSize;
  rect.style.width = "1px";
  rect.style.top = `${element.getBoundingClientRect().top - element.scrollTop + window.pageYOffset + coordinates.top}px`;
  rect.style.left = `${element.getBoundingClientRect().left - element.scrollLeft + window.pageXOffset + coordinates.left}px`;
}
function isStyleSupport(styleName) {
  if (typeof window !== "undefined" && window.document && window.document.documentElement) {
    const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    const { documentElement } = window.document;
    return styleNameList.some((name) => name in documentElement.style);
  }
  return false;
}
function getStyleAsText(styles) {
  if (!styles) {
    return "";
  }
  return Object.keys(styles).map((key) => {
    const val = styles[key];
    return `${key}:${typeof val === "string" ? val : `${val}px`}`;
  }).join(";");
}
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var ellipsisContainer;
var wrapperStyle = {
  padding: "0",
  margin: "0",
  display: "inline",
  lineHeight: "inherit"
};
function pxToNumber(value) {
  if (!value) {
    return 0;
  }
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}
function styleToString(style) {
  const styleNames = Array.prototype.slice.apply(style);
  return styleNames.map((name) => `${name}: ${style.getPropertyValue(name)};`).join("");
}
function mergeChildren(children) {
  const childList = [];
  children.forEach((child) => {
    const prevChild = childList[childList.length - 1];
    if (prevChild && child.nodeType === TEXT_NODE && prevChild.nodeType === TEXT_NODE) {
      prevChild.data += child.data;
    } else {
      childList.push(child);
    }
  });
  return childList;
}
function measure(originEle, rows, contentNodes, fixedContent, ellipsisStr, suffixStr = "") {
  if (!ellipsisContainer) {
    ellipsisContainer = document.createElement("div");
    ellipsisContainer.setAttribute("aria-hidden", "true");
    document.body.appendChild(ellipsisContainer);
  }
  const originStyle = window.getComputedStyle(originEle);
  const originCSS = styleToString(originStyle);
  const lineHeight = pxToNumber(originStyle.lineHeight);
  const maxHeight = Math.round(lineHeight * (rows + 1) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
  ellipsisContainer.setAttribute("style", originCSS);
  ellipsisContainer.style.position = "fixed";
  ellipsisContainer.style.left = "0";
  ellipsisContainer.style.height = "auto";
  ellipsisContainer.style.minHeight = "auto";
  ellipsisContainer.style.maxHeight = "auto";
  ellipsisContainer.style.top = "-999999px";
  ellipsisContainer.style.zIndex = "-1000";
  ellipsisContainer.style.textOverflow = "clip";
  ellipsisContainer.style.whiteSpace = "normal";
  ellipsisContainer.style.webkitLineClamp = "none";
  const contentList = mergeChildren(contentNodes);
  const container = document.createElement("div");
  const contentContainer = document.createElement("span");
  const suffixContainer = document.createTextNode(suffixStr);
  const fixedContainer = document.createElement("span");
  Object.assign(container.style, wrapperStyle);
  Object.assign(contentContainer.style, wrapperStyle);
  Object.assign(fixedContainer.style, wrapperStyle);
  contentList.forEach((n) => {
    contentContainer.appendChild(n);
  });
  contentContainer.appendChild(suffixContainer);
  fixedContent.forEach((node) => {
    fixedContainer.appendChild(node.cloneNode(true));
  });
  container.appendChild(contentContainer);
  container.appendChild(fixedContainer);
  ellipsisContainer.appendChild(container);
  function inRange() {
    return ellipsisContainer.offsetHeight < maxHeight;
  }
  if (inRange()) {
    const text = ellipsisContainer.innerHTML;
    ellipsisContainer.removeChild(container);
    return { contentNodes, text, ellipsis: false };
  }
  const childNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[0].cloneNode(true).childNodes).filter(({ nodeType }) => nodeType !== COMMENT_NODE);
  const fixedNodes = Array.prototype.slice.apply(ellipsisContainer.childNodes[0].childNodes[1].cloneNode(true).childNodes);
  ellipsisContainer.removeChild(container);
  ellipsisContainer.innerHTML = "";
  const ellipsisContentHolder = document.createElement("span");
  ellipsisContainer.appendChild(ellipsisContentHolder);
  const ellipsisTextNode = document.createTextNode(ellipsisStr + suffixStr);
  ellipsisContentHolder.appendChild(ellipsisTextNode);
  fixedNodes.forEach((childNode) => {
    ellipsisContainer.appendChild(childNode);
  });
  function appendChildNode(node) {
    ellipsisContentHolder.insertBefore(node, ellipsisTextNode);
  }
  function measureText(textNode, fullText, startLoc = 0, endLoc = fullText.length, lastSuccessLoc = 0) {
    const midLoc = Math.floor((startLoc + endLoc) / 2);
    textNode.textContent = fullText.slice(0, midLoc);
    if (startLoc >= endLoc - 1) {
      for (let step = endLoc; step >= startLoc; step -= 1) {
        const currentStepText = fullText.slice(0, step);
        textNode.textContent = currentStepText;
        if (inRange() || !currentStepText) {
          return step === fullText.length ? {
            finished: false,
            node: document.createTextNode(fullText)
          } : {
            finished: true,
            node: document.createTextNode(currentStepText)
          };
        }
      }
    }
    if (inRange()) {
      return measureText(textNode, fullText, midLoc, endLoc, midLoc);
    } else {
      return measureText(textNode, fullText, startLoc, midLoc, lastSuccessLoc);
    }
  }
  function measureNode(childNode, index) {
    const type = childNode.nodeType;
    if (type === ELEMENT_NODE) {
      if (inRange()) {
        return {
          finished: false,
          node: contentList[index]
        };
      }
      ellipsisContentHolder.removeChild(childNode);
      return {
        finished: true,
        node: null
      };
    } else if (type === TEXT_NODE) {
      const fullText = childNode.textContent || "";
      const textNode = document.createTextNode(fullText);
      appendChildNode(textNode);
      return measureText(textNode, fullText);
    }
    return {
      finished: false,
      node: null
    };
  }
  const ellipsisNodes = [];
  childNodes.some((childNode, index) => {
    const { finished, node } = measureNode(childNode, index);
    if (node) {
      ellipsisNodes.push(node);
    }
    return finished;
  });
  const result = {
    contentNodes: ellipsisNodes,
    text: ellipsisContainer.innerHTML,
    ellipsis: true
  };
  while (ellipsisContainer.firstChild) {
    ellipsisContainer.removeChild(ellipsisContainer.firstChild);
  }
  return result;
}
var scrollbarVerticalSize;
var scrollbarHorizontalSize;
var scrollbarMeasure = {
  position: "absolute",
  top: "-9999px",
  width: "50px",
  height: "50px"
};
function measureScrollbar(direction = "vertical", prefix = "ant") {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return 0;
  }
  const isVertical = direction === "vertical";
  if (isVertical && scrollbarVerticalSize) {
    return scrollbarVerticalSize;
  } else if (!isVertical && scrollbarHorizontalSize) {
    return scrollbarHorizontalSize;
  }
  const scrollDiv = document.createElement("div");
  Object.keys(scrollbarMeasure).forEach((scrollProp) => {
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  });
  scrollDiv.className = `${prefix}-hide-scrollbar scroll-div-append-to-body`;
  if (isVertical) {
    scrollDiv.style.overflowY = "scroll";
  } else {
    scrollDiv.style.overflowX = "scroll";
  }
  document.body.appendChild(scrollDiv);
  let size = 0;
  if (isVertical) {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    scrollbarVerticalSize = size;
  } else {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    scrollbarHorizontalSize = size;
  }
  document.body.removeChild(scrollDiv);
  return size;
}
function ensureInBounds(value, boundValue) {
  return value ? value < boundValue ? value : boundValue : boundValue;
}
function inNextTick() {
  const timer = new Subject();
  Promise.resolve().then(() => timer.next());
  return timer.pipe(take(1));
}
function wrapIntoObservable(value) {
  if (isObservable(value)) {
    return value;
  }
  if (isPromise(value)) {
    return from(Promise.resolve(value));
  }
  return of(value);
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var MARK_KEY = `rc-util-key`;
function getMark({ mark } = {}) {
  if (mark) {
    return mark.startsWith("data-") ? mark : `data-${mark}`;
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  const head = document.querySelector("head");
  return head || document.body;
}
function injectCSS(css, options = {}) {
  if (!canUseDom()) {
    return null;
  }
  const styleNode = document.createElement("style");
  if (options.cspNonce) {
    styleNode.nonce = options.cspNonce;
  }
  styleNode.innerHTML = css;
  const container = getContainer(options);
  const { firstChild } = container;
  if (options.prepend && container.prepend) {
    container.prepend(styleNode);
  } else if (options.prepend && firstChild) {
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
var containerCache = /* @__PURE__ */ new Map();
function findExistNode(key, option = {}) {
  const container = getContainer(option);
  return Array.from(containerCache.get(container)?.children || []).find((node) => node.tagName === "STYLE" && node.getAttribute(getMark(option)) === key);
}
function updateCSS(css, key, options = {}) {
  const container = getContainer(options);
  if (!containerCache.has(container)) {
    const placeholderStyle = injectCSS("", options);
    const { parentNode } = placeholderStyle;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
  const existNode = findExistNode(key, options);
  if (existNode) {
    if (options.cspNonce && existNode.nonce !== options.cspNonce) {
      existNode.nonce = options.cspNonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  const newNode = injectCSS(css, options);
  newNode?.setAttribute(getMark(options), key);
  return newNode;
}
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return {
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  };
}

export {
  environment,
  PREFIX,
  warn,
  toArray,
  arraysEqual,
  isNotNil,
  isNil,
  shallowEqual,
  isNonEmptyString,
  isTemplateRef,
  toBoolean,
  toNumber,
  toCssPixel,
  valueFunctionProp,
  InputBoolean,
  InputNumber,
  silentEvent,
  getElementOffset,
  isTouchEvent,
  getEventPosition,
  getMentions,
  padStart,
  isPromise,
  getPercent,
  getPrecision,
  ensureNumberInRange,
  isNumberFinite,
  toDecimal,
  sum,
  scrollIntoView,
  getCaretCoordinates,
  isStyleSupport,
  getStyleAsText,
  measure,
  measureScrollbar,
  ensureInBounds,
  inNextTick,
  wrapIntoObservable,
  canUseDom,
  updateCSS,
  getStatusClassNames
};
//# sourceMappingURL=chunk-O6NELX6U.js.map
