import {
  NzResizeObserver
} from "./chunk-BIQWFBPC.js";
import {
  NzScrollService
} from "./chunk-LSYZCG4Q.js";
import {
  BidiModule,
  Directionality
} from "./chunk-LRQUJQFB.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-MRMDAZCE.js";
import {
  InputNumber,
  getStyleAsText,
  shallowEqual
} from "./chunk-D5P6R4L2.js";
import {
  Platform,
  PlatformModule
} from "./chunk-ZLMMQMEL.js";
import {
  DOCUMENT
} from "./chunk-DIUYAEL7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-FNVBMXYR.js";
import {
  ReplaySubject,
  Subject,
  Subscription,
  fromEvent,
  map,
  merge,
  takeUntil,
  throttleTime
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KA6IPRFH.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-affix.mjs
var _c0 = ["fixedEl"];
var _c1 = ["*"];
var AffixRespondEvents;
(function(AffixRespondEvents2) {
  AffixRespondEvents2["resize"] = "resize";
  AffixRespondEvents2["scroll"] = "scroll";
  AffixRespondEvents2["touchstart"] = "touchstart";
  AffixRespondEvents2["touchmove"] = "touchmove";
  AffixRespondEvents2["touchend"] = "touchend";
  AffixRespondEvents2["pageshow"] = "pageshow";
  AffixRespondEvents2["load"] = "LOAD";
})(AffixRespondEvents || (AffixRespondEvents = {}));
function isTargetWindow(target) {
  return typeof window !== "undefined" && target === window;
}
function getTargetRect(target) {
  return !isTargetWindow(target) ? target.getBoundingClientRect() : {
    top: 0,
    left: 0,
    bottom: 0
  };
}
var NZ_CONFIG_MODULE_NAME = "affix";
var NZ_AFFIX_CLS_PREFIX = "ant-affix";
var NZ_AFFIX_DEFAULT_SCROLL_TIME = 20;
var _NzAffixComponent = class _NzAffixComponent {
  get target() {
    const el = this.nzTarget;
    return (typeof el === "string" ? this.document.querySelector(el) : el) || window;
  }
  constructor(el, doc, nzConfigService, scrollSrv, ngZone, platform, renderer, nzResizeObserver, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.scrollSrv = scrollSrv;
    this.ngZone = ngZone;
    this.platform = platform;
    this.renderer = renderer;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzChange = new EventEmitter();
    this.dir = "ltr";
    this.positionChangeSubscription = Subscription.EMPTY;
    this.offsetChanged$ = new ReplaySubject(1);
    this.destroy$ = new Subject();
    this.placeholderNode = el.nativeElement;
    this.document = doc;
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.registerListeners();
      this.updatePosition({});
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzOffsetBottom,
      nzOffsetTop,
      nzTarget
    } = changes;
    if (nzOffsetBottom || nzOffsetTop) {
      this.offsetChanged$.next();
    }
    if (nzTarget) {
      this.registerListeners();
    }
  }
  ngAfterViewInit() {
    this.registerListeners();
  }
  ngOnDestroy() {
    this.removeListeners();
  }
  registerListeners() {
    if (!this.platform.isBrowser) {
      return;
    }
    this.removeListeners();
    const el = this.target === window ? this.document.body : this.target;
    this.positionChangeSubscription = this.ngZone.runOutsideAngular(() => merge(...Object.keys(AffixRespondEvents).map((evName) => fromEvent(this.target, evName)), this.offsetChanged$.pipe(map(() => ({}))), this.nzResizeObserver.observe(el)).pipe(throttleTime(NZ_AFFIX_DEFAULT_SCROLL_TIME, void 0, {
      trailing: true
    }), takeUntil(this.destroy$)).subscribe((e) => this.updatePosition(e)));
    this.timeout = setTimeout(() => this.updatePosition({}));
  }
  removeListeners() {
    clearTimeout(this.timeout);
    this.positionChangeSubscription.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  getOffset(element, target) {
    const elemRect = element.getBoundingClientRect();
    const targetRect = getTargetRect(target);
    const scrollTop = this.scrollSrv.getScroll(target, true);
    const scrollLeft = this.scrollSrv.getScroll(target, false);
    const docElem = this.document.body;
    const clientTop = docElem.clientTop || 0;
    const clientLeft = docElem.clientLeft || 0;
    return {
      top: elemRect.top - targetRect.top + scrollTop - clientTop,
      left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
      width: elemRect.width,
      height: elemRect.height
    };
  }
  setAffixStyle(e, affixStyle) {
    const originalAffixStyle = this.affixStyle;
    const isWindow = this.target === window;
    if (e.type === "scroll" && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if (shallowEqual(originalAffixStyle, affixStyle)) {
      return;
    }
    const fixed = !!affixStyle;
    const wrapEl = this.fixedEl.nativeElement;
    this.renderer.setStyle(wrapEl, "cssText", getStyleAsText(affixStyle));
    this.affixStyle = affixStyle;
    if (fixed) {
      wrapEl.classList.add(NZ_AFFIX_CLS_PREFIX);
    } else {
      wrapEl.classList.remove(NZ_AFFIX_CLS_PREFIX);
    }
    this.updateRtlClass();
    if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
      this.nzChange.emit(fixed);
    }
  }
  setPlaceholderStyle(placeholderStyle) {
    const originalPlaceholderStyle = this.placeholderStyle;
    if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", getStyleAsText(placeholderStyle));
    this.placeholderStyle = placeholderStyle;
  }
  syncPlaceholderStyle(e) {
    if (!this.affixStyle) {
      return;
    }
    this.renderer.setStyle(this.placeholderNode, "cssText", "");
    this.placeholderStyle = void 0;
    const styleObj = {
      width: this.placeholderNode.offsetWidth,
      height: this.fixedEl.nativeElement.offsetHeight
    };
    this.setAffixStyle(e, __spreadValues(__spreadValues({}, this.affixStyle), styleObj));
    this.setPlaceholderStyle(styleObj);
  }
  updatePosition(e) {
    if (!this.platform.isBrowser) {
      return;
    }
    const targetNode = this.target;
    let offsetTop = this.nzOffsetTop;
    const scrollTop = this.scrollSrv.getScroll(targetNode, true);
    const elemOffset = this.getOffset(this.placeholderNode, targetNode);
    const fixedNode = this.fixedEl.nativeElement;
    const elemSize = {
      width: fixedNode.offsetWidth,
      height: fixedNode.offsetHeight
    };
    const offsetMode = {
      top: false,
      bottom: false
    };
    if (typeof offsetTop !== "number" && typeof this.nzOffsetBottom !== "number") {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === "number";
      offsetMode.bottom = typeof this.nzOffsetBottom === "number";
    }
    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
      const width = elemOffset.width;
      const top = targetRect.top + offsetTop;
      this.setAffixStyle(e, {
        position: "fixed",
        top,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemSize.height
      });
    } else if (scrollTop <= elemOffset.top + elemSize.height + this.nzOffsetBottom - targetInnerHeight && offsetMode.bottom) {
      const targetBottomOffset = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
      const width = elemOffset.width;
      this.setAffixStyle(e, {
        position: "fixed",
        bottom: targetBottomOffset + this.nzOffsetBottom,
        left: targetRect.left + elemOffset.left,
        width
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height
      });
    } else {
      if (e.type === AffixRespondEvents.resize && this.affixStyle && this.affixStyle.position === "fixed" && this.placeholderNode.offsetWidth) {
        this.setAffixStyle(e, __spreadProps(__spreadValues({}, this.affixStyle), {
          width: this.placeholderNode.offsetWidth
        }));
      } else {
        this.setAffixStyle(e);
      }
      this.setPlaceholderStyle();
    }
    if (e.type === "resize") {
      this.syncPlaceholderStyle(e);
    }
  }
  updateRtlClass() {
    const wrapEl = this.fixedEl.nativeElement;
    if (this.dir === "rtl") {
      if (wrapEl.classList.contains(NZ_AFFIX_CLS_PREFIX)) {
        wrapEl.classList.add(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      } else {
        wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
      }
    } else {
      wrapEl.classList.remove(`${NZ_AFFIX_CLS_PREFIX}-rtl`);
    }
  }
};
_NzAffixComponent.ɵfac = function NzAffixComponent_Factory(t) {
  return new (t || _NzAffixComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzScrollService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzResizeObserver), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzAffixComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAffixComponent,
  selectors: [["nz-affix"]],
  viewQuery: function NzAffixComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fixedEl = _t.first);
    }
  },
  inputs: {
    nzTarget: "nzTarget",
    nzOffsetTop: "nzOffsetTop",
    nzOffsetBottom: "nzOffsetBottom"
  },
  outputs: {
    nzChange: "nzChange"
  },
  exportAs: ["nzAffix"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["fixedEl", ""]],
  template: function NzAffixComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", null, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
  },
  dependencies: [BidiModule, PlatformModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzAffixComponent = _NzAffixComponent;
__decorate([WithConfig(), InputNumber(void 0)], NzAffixComponent.prototype, "nzOffsetTop", void 0);
__decorate([WithConfig(), InputNumber(void 0)], NzAffixComponent.prototype, "nzOffsetBottom", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixComponent, [{
    type: Component,
    args: [{
      selector: "nz-affix",
      exportAs: "nzAffix",
      standalone: true,
      imports: [BidiModule, PlatformModule],
      template: `
    <div #fixedEl>
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: NzScrollService
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: Renderer2
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    fixedEl: [{
      type: ViewChild,
      args: ["fixedEl", {
        static: true
      }]
    }],
    nzTarget: [{
      type: Input
    }],
    nzOffsetTop: [{
      type: Input
    }],
    nzOffsetBottom: [{
      type: Input
    }],
    nzChange: [{
      type: Output
    }]
  });
})();
var _NzAffixModule = class _NzAffixModule {
};
_NzAffixModule.ɵfac = function NzAffixModule_Factory(t) {
  return new (t || _NzAffixModule)();
};
_NzAffixModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAffixModule,
  imports: [NzAffixComponent],
  exports: [NzAffixComponent]
});
_NzAffixModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAffixComponent]
});
var NzAffixModule = _NzAffixModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAffixModule, [{
    type: NgModule,
    args: [{
      exports: [NzAffixComponent],
      imports: [NzAffixComponent]
    }]
  }], null, null);
})();

export {
  NzAffixComponent,
  NzAffixModule
};
//# sourceMappingURL=chunk-TXKVNJAK.js.map
