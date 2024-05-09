import {
  NzDestroyService
} from "./chunk-VRJBQ73G.js";
import "./chunk-V3IX2XEX.js";
import {
  Platform,
  normalizePassiveListenerOptions
} from "./chunk-KFL6KJZO.js";
import {
  InputBoolean,
  ensureInBounds,
  isTouchEvent
} from "./chunk-O6NELX6U.js";
import "./chunk-XVKPKO6U.js";
import {
  DOCUMENT,
  NgForOf
} from "./chunk-D5TAH3ZD.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵinject,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-Y4OPO6BX.js";
import {
  Subject,
  filter,
  fromEvent,
  merge,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-JN3CWD3G.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-resizable.mjs
var _c0 = ["*"];
function NzResizeHandlesComponent_nz_resize_handle_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-resize-handle", 1);
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    ɵɵproperty("nzDirection", option_r1.direction)("nzCursorType", option_r1.cursorType);
  }
}
function getEventWithPoint(event) {
  return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}
var _NzResizableService = class _NzResizableService {
  constructor(ngZone, document) {
    this.ngZone = ngZone;
    this.listeners = /* @__PURE__ */ new Map();
    this.handleMouseDownOutsideAngular$ = new Subject();
    this.documentMouseUpOutsideAngular$ = new Subject();
    this.documentMouseMoveOutsideAngular$ = new Subject();
    this.mouseEnteredOutsideAngular$ = new Subject();
    this.document = document;
  }
  startResizing(event) {
    const _isTouchEvent = isTouchEvent(event);
    this.clearListeners();
    const moveEvent = _isTouchEvent ? "touchmove" : "mousemove";
    const upEvent = _isTouchEvent ? "touchend" : "mouseup";
    const moveEventHandler = (e) => {
      this.documentMouseMoveOutsideAngular$.next(e);
    };
    const upEventHandler = (e) => {
      this.documentMouseUpOutsideAngular$.next(e);
      this.clearListeners();
    };
    this.listeners.set(moveEvent, moveEventHandler);
    this.listeners.set(upEvent, upEventHandler);
    this.ngZone.runOutsideAngular(() => {
      this.listeners.forEach((handler, name) => {
        this.document.addEventListener(name, handler);
      });
    });
  }
  clearListeners() {
    this.listeners.forEach((handler, name) => {
      this.document.removeEventListener(name, handler);
    });
    this.listeners.clear();
  }
  ngOnDestroy() {
    this.handleMouseDownOutsideAngular$.complete();
    this.documentMouseUpOutsideAngular$.complete();
    this.documentMouseMoveOutsideAngular$.complete();
    this.mouseEnteredOutsideAngular$.complete();
    this.clearListeners();
  }
};
_NzResizableService.ɵfac = function NzResizableService_Factory(t) {
  return new (t || _NzResizableService)(ɵɵinject(NgZone), ɵɵinject(DOCUMENT));
};
_NzResizableService.ɵprov = ɵɵdefineInjectable({
  token: _NzResizableService,
  factory: _NzResizableService.ɵfac
});
var NzResizableService = _NzResizableService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizableService, [{
    type: Injectable
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _NzResizableDirective = class _NzResizableDirective {
  constructor(elementRef, renderer, nzResizableService, platform, ngZone, destroy$) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nzResizableService = nzResizableService;
    this.platform = platform;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.nzBounds = "parent";
    this.nzMinHeight = 40;
    this.nzMinWidth = 40;
    this.nzGridColumnCount = -1;
    this.nzMaxColumn = -1;
    this.nzMinColumn = -1;
    this.nzLockAspectRatio = false;
    this.nzPreview = false;
    this.nzDisabled = false;
    this.nzResize = new EventEmitter();
    this.nzResizeEnd = new EventEmitter();
    this.nzResizeStart = new EventEmitter();
    this.resizing = false;
    this.currentHandleEvent = null;
    this.ghostElement = null;
    this.sizeCache = null;
    this.nzResizableService.handleMouseDownOutsideAngular$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (this.nzDisabled) {
        return;
      }
      this.resizing = true;
      this.nzResizableService.startResizing(event.mouseEvent);
      this.currentHandleEvent = event;
      if (this.nzResizeStart.observers.length) {
        this.ngZone.run(() => this.nzResizeStart.emit({
          mouseEvent: event.mouseEvent,
          direction: event.direction
        }));
      }
      this.elRect = this.el.getBoundingClientRect();
    });
    this.nzResizableService.documentMouseUpOutsideAngular$.pipe(takeUntil(this.destroy$), filter(Boolean)).subscribe((event) => {
      if (this.resizing) {
        this.resizing = false;
        this.nzResizableService.documentMouseUpOutsideAngular$.next(null);
        this.endResize(event);
      }
    });
    this.nzResizableService.documentMouseMoveOutsideAngular$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (this.resizing) {
        this.resize(event);
      }
    });
  }
  setPosition() {
    const position = getComputedStyle(this.el).position;
    if (position === "static" || !position) {
      this.renderer.setStyle(this.el, "position", "relative");
    }
  }
  calcSize(width, height, ratio) {
    let newWidth;
    let newHeight;
    let maxWidth;
    let maxHeight;
    let col = 0;
    let spanWidth = 0;
    let minWidth = this.nzMinWidth;
    let boundWidth = Infinity;
    let boundHeight = Infinity;
    if (this.nzBounds === "parent") {
      const parent = this.renderer.parentNode(this.el);
      if (parent instanceof HTMLElement) {
        const parentRect = parent.getBoundingClientRect();
        boundWidth = parentRect.width;
        boundHeight = parentRect.height;
      }
    } else if (this.nzBounds === "window") {
      if (typeof window !== "undefined") {
        boundWidth = window.innerWidth;
        boundHeight = window.innerHeight;
      }
    } else if (this.nzBounds && this.nzBounds.nativeElement && this.nzBounds.nativeElement instanceof HTMLElement) {
      const boundsRect = this.nzBounds.nativeElement.getBoundingClientRect();
      boundWidth = boundsRect.width;
      boundHeight = boundsRect.height;
    }
    maxWidth = ensureInBounds(this.nzMaxWidth, boundWidth);
    maxHeight = ensureInBounds(this.nzMaxHeight, boundHeight);
    if (this.nzGridColumnCount !== -1) {
      spanWidth = maxWidth / this.nzGridColumnCount;
      minWidth = this.nzMinColumn !== -1 ? spanWidth * this.nzMinColumn : minWidth;
      maxWidth = this.nzMaxColumn !== -1 ? spanWidth * this.nzMaxColumn : maxWidth;
    }
    if (ratio !== -1) {
      if (/(left|right)/i.test(this.currentHandleEvent.direction)) {
        newWidth = Math.min(Math.max(width, minWidth), maxWidth);
        newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
        if (newHeight >= maxHeight || newHeight <= this.nzMinHeight) {
          newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
        }
      } else {
        newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
        newWidth = Math.min(Math.max(newHeight * ratio, minWidth), maxWidth);
        if (newWidth >= maxWidth || newWidth <= minWidth) {
          newHeight = Math.min(Math.max(newWidth / ratio, this.nzMinHeight), maxHeight);
        }
      }
    } else {
      newWidth = Math.min(Math.max(width, minWidth), maxWidth);
      newHeight = Math.min(Math.max(height, this.nzMinHeight), maxHeight);
    }
    if (this.nzGridColumnCount !== -1) {
      col = Math.round(newWidth / spanWidth);
      newWidth = col * spanWidth;
    }
    return {
      col,
      width: newWidth,
      height: newHeight
    };
  }
  resize(event) {
    const elRect = this.elRect;
    const resizeEvent = getEventWithPoint(event);
    const handleEvent = getEventWithPoint(this.currentHandleEvent.mouseEvent);
    let width = elRect.width;
    let height = elRect.height;
    const ratio = this.nzLockAspectRatio ? width / height : -1;
    switch (this.currentHandleEvent.direction) {
      case "bottomRight":
        width = resizeEvent.clientX - elRect.left;
        height = resizeEvent.clientY - elRect.top;
        break;
      case "bottomLeft":
        width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        height = resizeEvent.clientY - elRect.top;
        break;
      case "topRight":
        width = resizeEvent.clientX - elRect.left;
        height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
        break;
      case "topLeft":
        width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
        height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
        break;
      case "top":
        height = elRect.height + handleEvent.clientY - resizeEvent.clientY;
        break;
      case "right":
        width = resizeEvent.clientX - elRect.left;
        break;
      case "bottom":
        height = resizeEvent.clientY - elRect.top;
        break;
      case "left":
        width = elRect.width + handleEvent.clientX - resizeEvent.clientX;
    }
    const size = this.calcSize(width, height, ratio);
    this.sizeCache = __spreadValues({}, size);
    if (this.nzResize.observers.length) {
      this.ngZone.run(() => {
        this.nzResize.emit(__spreadProps(__spreadValues({}, size), {
          mouseEvent: event,
          direction: this.currentHandleEvent.direction
        }));
      });
    }
    if (this.nzPreview) {
      this.previewResize(size);
    }
  }
  endResize(event) {
    this.removeGhostElement();
    const size = this.sizeCache ? __spreadValues({}, this.sizeCache) : {
      width: this.elRect.width,
      height: this.elRect.height
    };
    if (this.nzResizeEnd.observers.length) {
      this.ngZone.run(() => {
        this.nzResizeEnd.emit(__spreadProps(__spreadValues({}, size), {
          mouseEvent: event,
          direction: this.currentHandleEvent.direction
        }));
      });
    }
    this.sizeCache = null;
    this.currentHandleEvent = null;
  }
  previewResize({
    width,
    height
  }) {
    this.createGhostElement();
    this.renderer.setStyle(this.ghostElement, "width", `${width}px`);
    this.renderer.setStyle(this.ghostElement, "height", `${height}px`);
  }
  createGhostElement() {
    if (!this.ghostElement) {
      this.ghostElement = this.renderer.createElement("div");
      this.renderer.setAttribute(this.ghostElement, "class", "nz-resizable-preview");
    }
    this.renderer.appendChild(this.el, this.ghostElement);
  }
  removeGhostElement() {
    if (this.ghostElement) {
      this.renderer.removeChild(this.el, this.ghostElement);
    }
  }
  ngAfterViewInit() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.el = this.elementRef.nativeElement;
    this.setPosition();
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.el, "mouseenter").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.nzResizableService.mouseEnteredOutsideAngular$.next(true);
      });
      fromEvent(this.el, "mouseleave").pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.nzResizableService.mouseEnteredOutsideAngular$.next(false);
      });
    });
  }
  ngOnDestroy() {
    this.ghostElement = null;
    this.sizeCache = null;
  }
};
_NzResizableDirective.ɵfac = function NzResizableDirective_Factory(t) {
  return new (t || _NzResizableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzResizableService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
};
_NzResizableDirective.ɵdir = ɵɵdefineDirective({
  type: _NzResizableDirective,
  selectors: [["", "nz-resizable", ""]],
  hostAttrs: [1, "nz-resizable"],
  hostVars: 4,
  hostBindings: function NzResizableDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("nz-resizable-resizing", ctx.resizing)("nz-resizable-disabled", ctx.nzDisabled);
    }
  },
  inputs: {
    nzBounds: "nzBounds",
    nzMaxHeight: "nzMaxHeight",
    nzMaxWidth: "nzMaxWidth",
    nzMinHeight: "nzMinHeight",
    nzMinWidth: "nzMinWidth",
    nzGridColumnCount: "nzGridColumnCount",
    nzMaxColumn: "nzMaxColumn",
    nzMinColumn: "nzMinColumn",
    nzLockAspectRatio: "nzLockAspectRatio",
    nzPreview: "nzPreview",
    nzDisabled: "nzDisabled"
  },
  outputs: {
    nzResize: "nzResize",
    nzResizeEnd: "nzResizeEnd",
    nzResizeStart: "nzResizeStart"
  },
  exportAs: ["nzResizable"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzResizableService, NzDestroyService])]
});
var NzResizableDirective = _NzResizableDirective;
__decorate([InputBoolean()], NzResizableDirective.prototype, "nzLockAspectRatio", void 0);
__decorate([InputBoolean()], NzResizableDirective.prototype, "nzPreview", void 0);
__decorate([InputBoolean()], NzResizableDirective.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizableDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-resizable]",
      exportAs: "nzResizable",
      providers: [NzResizableService, NzDestroyService],
      host: {
        class: "nz-resizable",
        "[class.nz-resizable-resizing]": "resizing",
        "[class.nz-resizable-disabled]": "nzDisabled"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzResizableService
  }, {
    type: Platform
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    nzBounds: [{
      type: Input
    }],
    nzMaxHeight: [{
      type: Input
    }],
    nzMaxWidth: [{
      type: Input
    }],
    nzMinHeight: [{
      type: Input
    }],
    nzMinWidth: [{
      type: Input
    }],
    nzGridColumnCount: [{
      type: Input
    }],
    nzMaxColumn: [{
      type: Input
    }],
    nzMinColumn: [{
      type: Input
    }],
    nzLockAspectRatio: [{
      type: Input
    }],
    nzPreview: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzResize: [{
      type: Output
    }],
    nzResizeEnd: [{
      type: Output
    }],
    nzResizeStart: [{
      type: Output
    }]
  });
})();
var NzResizeHandleMouseDownEvent = class {
  constructor(direction, mouseEvent) {
    this.direction = direction;
    this.mouseEvent = mouseEvent;
  }
};
var passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true
});
var _NzResizeHandleComponent = class _NzResizeHandleComponent {
  constructor(ngZone, nzResizableService, renderer, host, destroy$) {
    this.ngZone = ngZone;
    this.nzResizableService = nzResizableService;
    this.renderer = renderer;
    this.host = host;
    this.destroy$ = destroy$;
    this.nzDirection = "bottomRight";
    this.nzCursorType = "window";
    this.nzMouseDown = new EventEmitter();
  }
  ngOnInit() {
    this.nzResizableService.mouseEnteredOutsideAngular$.pipe(takeUntil(this.destroy$)).subscribe((entered) => {
      if (entered) {
        this.renderer.addClass(this.host.nativeElement, "nz-resizable-handle-box-hover");
      } else {
        this.renderer.removeClass(this.host.nativeElement, "nz-resizable-handle-box-hover");
      }
    });
    this.ngZone.runOutsideAngular(() => {
      merge(fromEvent(this.host.nativeElement, "mousedown", passiveEventListenerOptions), fromEvent(this.host.nativeElement, "touchstart", passiveEventListenerOptions)).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        this.nzResizableService.handleMouseDownOutsideAngular$.next(new NzResizeHandleMouseDownEvent(this.nzDirection, event));
      });
    });
  }
  onPointerDown(event) {
    event.target.setPointerCapture(event.pointerId);
  }
  onPointerUp(event) {
    event.target.releasePointerCapture(event.pointerId);
  }
};
_NzResizeHandleComponent.ɵfac = function NzResizeHandleComponent_Factory(t) {
  return new (t || _NzResizeHandleComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzResizableService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzDestroyService));
};
_NzResizeHandleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzResizeHandleComponent,
  selectors: [["nz-resize-handle"], ["", "nz-resize-handle", ""]],
  hostAttrs: [1, "nz-resizable-handle"],
  hostVars: 20,
  hostBindings: function NzResizeHandleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("pointerdown", function NzResizeHandleComponent_pointerdown_HostBindingHandler($event) {
        return ctx.onPointerDown($event);
      })("pointerup", function NzResizeHandleComponent_pointerup_HostBindingHandler($event) {
        return ctx.onPointerUp($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("nz-resizable-handle-top", ctx.nzDirection === "top")("nz-resizable-handle-right", ctx.nzDirection === "right")("nz-resizable-handle-bottom", ctx.nzDirection === "bottom")("nz-resizable-handle-left", ctx.nzDirection === "left")("nz-resizable-handle-topRight", ctx.nzDirection === "topRight")("nz-resizable-handle-bottomRight", ctx.nzDirection === "bottomRight")("nz-resizable-handle-bottomLeft", ctx.nzDirection === "bottomLeft")("nz-resizable-handle-topLeft", ctx.nzDirection === "topLeft")("nz-resizable-handle-cursor-type-grid", ctx.nzCursorType === "grid")("nz-resizable-handle-cursor-type-window", ctx.nzCursorType === "window");
    }
  },
  inputs: {
    nzDirection: "nzDirection",
    nzCursorType: "nzCursorType"
  },
  outputs: {
    nzMouseDown: "nzMouseDown"
  },
  exportAs: ["nzResizeHandle"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzResizeHandleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzResizeHandleComponent = _NzResizeHandleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeHandleComponent, [{
    type: Component,
    args: [{
      selector: "nz-resize-handle, [nz-resize-handle]",
      exportAs: "nzResizeHandle",
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "nz-resizable-handle",
        "[class.nz-resizable-handle-top]": `nzDirection === 'top'`,
        "[class.nz-resizable-handle-right]": `nzDirection === 'right'`,
        "[class.nz-resizable-handle-bottom]": `nzDirection === 'bottom'`,
        "[class.nz-resizable-handle-left]": `nzDirection === 'left'`,
        "[class.nz-resizable-handle-topRight]": `nzDirection === 'topRight'`,
        "[class.nz-resizable-handle-bottomRight]": `nzDirection === 'bottomRight'`,
        "[class.nz-resizable-handle-bottomLeft]": `nzDirection === 'bottomLeft'`,
        "[class.nz-resizable-handle-topLeft]": `nzDirection === 'topLeft'`,
        "[class.nz-resizable-handle-cursor-type-grid]": `nzCursorType === 'grid'`,
        "[class.nz-resizable-handle-cursor-type-window]": `nzCursorType === 'window'`
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: NzResizableService
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: NzDestroyService
  }], {
    nzDirection: [{
      type: Input
    }],
    nzCursorType: [{
      type: Input
    }],
    nzMouseDown: [{
      type: Output
    }],
    onPointerDown: [{
      type: HostListener,
      args: ["pointerdown", ["$event"]]
    }],
    onPointerUp: [{
      type: HostListener,
      args: ["pointerup", ["$event"]]
    }]
  });
})();
var DEFAULT_RESIZE_DIRECTION = ["bottomRight", "topRight", "bottomLeft", "topLeft", "bottom", "right", "top", "left"];
function normalizeResizeHandleOptions(value) {
  return value.map((val) => {
    if (typeof val === "string") {
      return {
        direction: val,
        cursorType: "window"
      };
    }
    return val;
  });
}
var _NzResizeHandlesComponent = class _NzResizeHandlesComponent {
  constructor() {
    this.nzDirections = DEFAULT_RESIZE_DIRECTION;
    this.resizeHandleOptions = normalizeResizeHandleOptions(this.nzDirections);
  }
  ngOnChanges(changes) {
    if (changes.nzDirections) {
      this.resizeHandleOptions = normalizeResizeHandleOptions(changes.nzDirections.currentValue);
    }
  }
};
_NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) {
  return new (t || _NzResizeHandlesComponent)();
};
_NzResizeHandlesComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzResizeHandlesComponent,
  selectors: [["nz-resize-handles"]],
  inputs: {
    nzDirections: "nzDirections"
  },
  exportAs: ["nzResizeHandles"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "nzDirection", "nzCursorType", 4, "ngFor", "ngForOf"], [3, "nzDirection", "nzCursorType"]],
  template: function NzResizeHandlesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 2, "nz-resize-handle", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.resizeHandleOptions);
    }
  },
  dependencies: [NzResizeHandleComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzResizeHandlesComponent = _NzResizeHandlesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeHandlesComponent, [{
    type: Component,
    args: [{
      selector: "nz-resize-handles",
      exportAs: "nzResizeHandles",
      template: `
    <nz-resize-handle
      *ngFor="let option of resizeHandleOptions"
      [nzDirection]="option.direction"
      [nzCursorType]="option.cursorType"
    ></nz-resize-handle>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzResizeHandleComponent, NgForOf],
      standalone: true
    }]
  }], null, {
    nzDirections: [{
      type: Input
    }]
  });
})();
var _NzResizableModule = class _NzResizableModule {
};
_NzResizableModule.ɵfac = function NzResizableModule_Factory(t) {
  return new (t || _NzResizableModule)();
};
_NzResizableModule.ɵmod = ɵɵdefineNgModule({
  type: _NzResizableModule,
  imports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
  exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
});
_NzResizableModule.ɵinj = ɵɵdefineInjector({});
var NzResizableModule = _NzResizableModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizableModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
      exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
    }]
  }], null, null);
})();
export {
  DEFAULT_RESIZE_DIRECTION,
  NzResizableDirective,
  NzResizableModule,
  NzResizableService,
  NzResizeHandleComponent,
  NzResizeHandleMouseDownEvent,
  NzResizeHandlesComponent,
  getEventWithPoint
};
//# sourceMappingURL=ng-zorro-antd_resizable.js.map
