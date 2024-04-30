import {
  InputBoolean
} from "./chunk-A4L4YVTT.js";
import {
  coerceElement
} from "./chunk-PA6IY4WI.js";
import {
  ANIMATION_MODULE_TYPE,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgModule,
  Optional,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-2P2HMI5Y.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-no-animation.mjs
var DISABLED_CLASSNAME = "nz-animate-disabled";
var _NzNoAnimationDirective = class _NzNoAnimationDirective {
  constructor(element, renderer, animationType) {
    this.element = element;
    this.renderer = renderer;
    this.animationType = animationType;
    this.nzNoAnimation = false;
  }
  ngOnChanges() {
    this.updateClass();
  }
  ngAfterViewInit() {
    this.updateClass();
  }
  updateClass() {
    const element = coerceElement(this.element);
    if (!element) {
      return;
    }
    if (this.nzNoAnimation || this.animationType === "NoopAnimations") {
      this.renderer.addClass(element, DISABLED_CLASSNAME);
    } else {
      this.renderer.removeClass(element, DISABLED_CLASSNAME);
    }
  }
};
_NzNoAnimationDirective.ɵfac = function NzNoAnimationDirective_Factory(t) {
  return new (t || _NzNoAnimationDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ANIMATION_MODULE_TYPE, 8));
};
_NzNoAnimationDirective.ɵdir = ɵɵdefineDirective({
  type: _NzNoAnimationDirective,
  selectors: [["", "nzNoAnimation", ""]],
  inputs: {
    nzNoAnimation: "nzNoAnimation"
  },
  exportAs: ["nzNoAnimation"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzNoAnimationDirective = _NzNoAnimationDirective;
__decorate([InputBoolean()], NzNoAnimationDirective.prototype, "nzNoAnimation", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationDirective, [{
    type: Directive,
    args: [{
      selector: "[nzNoAnimation]",
      exportAs: "nzNoAnimation",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    nzNoAnimation: [{
      type: Input
    }]
  });
})();
var _NzNoAnimationModule = class _NzNoAnimationModule {
};
_NzNoAnimationModule.ɵfac = function NzNoAnimationModule_Factory(t) {
  return new (t || _NzNoAnimationModule)();
};
_NzNoAnimationModule.ɵmod = ɵɵdefineNgModule({
  type: _NzNoAnimationModule,
  imports: [NzNoAnimationDirective],
  exports: [NzNoAnimationDirective]
});
_NzNoAnimationModule.ɵinj = ɵɵdefineInjector({});
var NzNoAnimationModule = _NzNoAnimationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzNoAnimationModule, [{
    type: NgModule,
    args: [{
      imports: [NzNoAnimationDirective],
      exports: [NzNoAnimationDirective]
    }]
  }], null, null);
})();

export {
  NzNoAnimationDirective,
  NzNoAnimationModule
};
//# sourceMappingURL=chunk-HVVV2P4P.js.map
