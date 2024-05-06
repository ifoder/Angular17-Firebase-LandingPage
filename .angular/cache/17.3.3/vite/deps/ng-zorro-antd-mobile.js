import {
  CdkObserveContent,
  ObserversModule
} from "./chunk-TLRFD67R.js";
import {
  Overlay,
  OverlayConfig,
  OverlayModule
} from "./chunk-2WDYTXJ5.js";
import "./chunk-GWWQI25Q.js";
import {
  ComponentPortal
} from "./chunk-2CGA3OMX.js";
import "./chunk-27BDGVS6.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-GRCHAQNP.js";
import "./chunk-UA6AN7W3.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  PatternValidator,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-M6FD3VIN.js";
import {
  DomSanitizer
} from "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Pipe,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵattributeInterpolate1,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassMapInterpolate2,
  ɵɵclassMapInterpolate3,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  BehaviorSubject,
  Subject,
  first,
  merge,
  startWith,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import "./chunk-ECDNAN6X.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-activity-indicator.mjs
function ActivityIndicatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵelement(2, "span", 1);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r0.spinnerClass);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-toast");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.text);
  }
}
function ActivityIndicatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵelement(2, "span", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r1.spinnerClass);
  }
}
function ActivityIndicatorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span", 3);
    ɵɵelementStart(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r2.spinnerClass);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-tip");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.text);
  }
}
function ActivityIndicatorComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r3.spinnerClass);
  }
}
var _ActivityIndicatorComponent = class _ActivityIndicatorComponent {
  get animating() {
    return this._animating;
  }
  set animating(v) {
    this._animating = v;
    this.setClass();
  }
  set size(v) {
    this._size = v;
    this.setClass();
  }
  get toast() {
    return this._toast;
  }
  set toast(v) {
    this._toast = v;
    this.setClass();
  }
  get text() {
    return this._text;
  }
  set text(v) {
    this._text = v;
  }
  constructor() {
    this.prefixCls = "am-activity-indicator";
    this.spinnerClass = {};
    this._size = "small";
    this._toast = false;
    this._animating = true;
    this.clsActIndicator = true;
  }
  setClass() {
    if (this._animating) {
      this.clsActIndicator = true;
      this.clsActIndicatorToast = !!this._toast;
      this.clsActIndicatorLg = this._size === "large";
      this.clsActIndicatorSm = this._size === "small";
      this.spinnerClass = {
        [`${this.prefixCls}-spinner`]: true,
        [`${this.prefixCls}-spinner-lg`]: !!this._toast || this._size === "large"
      };
    } else {
      this.clsActIndicator = false;
      this.clsActIndicatorLg = false;
      this.clsActIndicatorSm = false;
      this.clsActIndicatorToast = false;
    }
  }
  ngOnInit() {
    this.setClass();
  }
};
_ActivityIndicatorComponent.ɵfac = function ActivityIndicatorComponent_Factory(t) {
  return new (t || _ActivityIndicatorComponent)();
};
_ActivityIndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _ActivityIndicatorComponent,
  selectors: [["ActivityIndicator"], ["nzm-ctivity-indicator"]],
  hostVars: 8,
  hostBindings: function ActivityIndicatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-activity-indicator", ctx.clsActIndicator)("am-activity-indicator-toast", ctx.clsActIndicatorToast)("am-activity-indicator-lg", ctx.clsActIndicatorLg)("am-activity-indicator-sm", ctx.clsActIndicatorSm);
    }
  },
  inputs: {
    animating: "animating",
    size: "size",
    toast: "toast",
    text: "text"
  },
  decls: 4,
  vars: 4,
  consts: [[4, "ngIf"], ["aria-hidden", "'true'", 3, "ngClass"], ["aria-label", "'Loading'", 3, "ngClass"], ["aria-hidden", "true", 3, "ngClass"], ["aria-label", "'loading'", 3, "ngClass"]],
  template: function ActivityIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ActivityIndicatorComponent_div_0_Template, 5, 8, "div", 0)(1, ActivityIndicatorComponent_div_1_Template, 3, 4, "div", 0)(2, ActivityIndicatorComponent_div_2_Template, 4, 5, "div", 0)(3, ActivityIndicatorComponent_div_3_Template, 2, 1, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.animating && ctx.toast && ctx.text && ctx.text.length > 0);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.animating && ctx.toast && !ctx.text);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.animating && !ctx.toast && ctx.text && ctx.text.length > 0);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.animating && !ctx.toast && !ctx.text);
    }
  },
  dependencies: [NgClass, NgIf],
  encapsulation: 2
});
var ActivityIndicatorComponent = _ActivityIndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityIndicatorComponent, [{
    type: Component,
    args: [{
      selector: "ActivityIndicator , nzm-ctivity-indicator",
      template: `<div *ngIf="animating && toast && text && text.length > 0">
  <div class="{{ prefixCls }}-content">
    <span [ngClass]="spinnerClass" aria-hidden="'true'"></span>
    <span class="{{ prefixCls }}-toast">{{ text }}</span>
  </div>
</div>
<div *ngIf="animating && toast && !text">
  <div class="{{ prefixCls }}-content">
    <span [ngClass]="spinnerClass" aria-label="'Loading'"></span>
  </div>
</div>
<div *ngIf="animating && !toast && text && text.length > 0">
  <span [ngClass]="spinnerClass" aria-hidden="true"></span>
  <span class="{{ prefixCls }}-tip">{{ text }}</span>
</div>
<div *ngIf="animating && !toast && !text">
  <span [ngClass]="spinnerClass" aria-label="'loading'"></span>
</div>
`
    }]
  }], () => [], {
    animating: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    toast: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    clsActIndicator: [{
      type: HostBinding,
      args: ["class.am-activity-indicator"]
    }],
    clsActIndicatorToast: [{
      type: HostBinding,
      args: ["class.am-activity-indicator-toast"]
    }],
    clsActIndicatorLg: [{
      type: HostBinding,
      args: ["class.am-activity-indicator-lg"]
    }],
    clsActIndicatorSm: [{
      type: HostBinding,
      args: ["class.am-activity-indicator-sm"]
    }]
  });
})();
var _ActivityIndicatorModule = class _ActivityIndicatorModule {
};
_ActivityIndicatorModule.ɵfac = function ActivityIndicatorModule_Factory(t) {
  return new (t || _ActivityIndicatorModule)();
};
_ActivityIndicatorModule.ɵmod = ɵɵdefineNgModule({
  type: _ActivityIndicatorModule,
  declarations: [ActivityIndicatorComponent],
  imports: [CommonModule, FormsModule],
  exports: [ActivityIndicatorComponent]
});
_ActivityIndicatorModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule]
});
var ActivityIndicatorModule = _ActivityIndicatorModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActivityIndicatorModule, [{
    type: NgModule,
    args: [{
      exports: [ActivityIndicatorComponent],
      declarations: [ActivityIndicatorComponent],
      imports: [CommonModule, FormsModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-card.mjs
var _c0 = ["*"];
function CardHeaderComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("src", ctx_r0.thumb, ɵɵsanitizeUrl);
    ɵɵproperty("ngStyle", ctx_r0.thumbStyle);
  }
}
function CardHeaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.thumb);
  }
}
function CardHeaderComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.title);
  }
}
function CardHeaderComponent_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.extra);
  }
}
function CardHeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CardHeaderComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r7 = ɵɵreference(8);
    ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-extra");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.isTemplateRef(ctx_r3.extra))("ngIfElse", _r7);
  }
}
function CardHeaderComponent_ng_template_5_ng_template_0_Template(rf, ctx) {
}
function CardHeaderComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardHeaderComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.title);
  }
}
function CardHeaderComponent_ng_template_7_ng_template_0_Template(rf, ctx) {
}
function CardHeaderComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardHeaderComponent_ng_template_7_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.extra);
  }
}
function CardFooterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.content);
  }
}
function CardFooterComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r6.extra);
  }
}
function CardFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CardFooterComponent_div_2_ng_container_1_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r5 = ɵɵreference(6);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-extra");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isTemplateRef(ctx_r1.extra))("ngIfElse", _r5);
  }
}
function CardFooterComponent_ng_template_3_ng_template_0_Template(rf, ctx) {
}
function CardFooterComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardFooterComponent_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.content);
  }
}
function CardFooterComponent_ng_template_5_ng_template_0_Template(rf, ctx) {
}
function CardFooterComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CardFooterComponent_ng_template_5_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.extra);
  }
}
var _CardComponent = class _CardComponent {
  get cardFull() {
    return this.full;
  }
  constructor() {
    this.full = false;
    this.cardWrapper = true;
  }
};
_CardComponent.ɵfac = function CardComponent_Factory(t) {
  return new (t || _CardComponent)();
};
_CardComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardComponent,
  selectors: [["Card"], ["nzm-card"]],
  hostVars: 4,
  hostBindings: function CardComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-card", ctx.cardWrapper)("am-card-full", ctx.cardFull);
    }
  },
  inputs: {
    full: "full"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "Card, nzm-card",
      encapsulation: ViewEncapsulation$1.None,
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [], {
    full: [{
      type: Input
    }],
    cardWrapper: [{
      type: HostBinding,
      args: ["class.am-card"]
    }],
    cardFull: [{
      type: HostBinding,
      args: ["class.am-card-full"]
    }]
  });
})();
var _CardHeaderComponent = class _CardHeaderComponent {
  constructor() {
    this.prefixCls = "am-card-header";
    this.thumb = null;
    this.thumbStyle = null;
    this.title = null;
    this.extra = null;
    this.cardBodyWrapper = true;
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
};
_CardHeaderComponent.ɵfac = function CardHeaderComponent_Factory(t) {
  return new (t || _CardHeaderComponent)();
};
_CardHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardHeaderComponent,
  selectors: [["CardHeader"], ["nzm-card-header"]],
  hostVars: 2,
  hostBindings: function CardHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-card-header", ctx.cardBodyWrapper);
    }
  },
  inputs: {
    thumb: "thumb",
    thumbStyle: "thumbStyle",
    title: "title",
    extra: "extra"
  },
  decls: 9,
  vars: 8,
  consts: [[3, "src", "ngStyle", 4, "ngIf"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["titleTemplate", ""], ["extraTemplate", ""], [3, "src", "ngStyle"], [3, "ngTemplateOutlet"]],
  template: function CardHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, CardHeaderComponent_img_1_Template, 1, 2, "img", 0)(2, CardHeaderComponent_ng_container_2_Template, 1, 1, "ng-container", 1)(3, CardHeaderComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(4, CardHeaderComponent_div_4_Template, 2, 5, "div", 3)(5, CardHeaderComponent_ng_template_5_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(7, CardHeaderComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r5 = ɵɵreference(6);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.thumb && !ctx.isTemplateRef(ctx.thumb));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.thumb && ctx.isTemplateRef(ctx.thumb));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.title))("ngIfElse", _r5);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.extra);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var CardHeaderComponent = _CardHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardHeaderComponent, [{
    type: Component,
    args: [{
      selector: "CardHeader, nzm-card-header",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="{{ prefixCls }}-content">\n  <img *ngIf="thumb && !isTemplateRef(thumb)" src="{{ thumb }}" [ngStyle]="thumbStyle" />\n  <ng-container *ngIf="thumb && isTemplateRef(thumb)" [ngTemplateOutlet]="thumb"></ng-container>\n  <ng-container *ngIf="!isTemplateRef(title); else titleTemplate">{{ title }}</ng-container>\n</div>\n<div *ngIf="extra" class="{{ prefixCls }}-extra">\n  <ng-container *ngIf="!isTemplateRef(extra); else extraTemplate">{{ extra }}</ng-container>\n</div>\n<ng-template #titleTemplate>\n  <ng-template [ngTemplateOutlet]="title"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]="extra"></ng-template>\n</ng-template>\n'
    }]
  }], () => [], {
    thumb: [{
      type: Input
    }],
    thumbStyle: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    cardBodyWrapper: [{
      type: HostBinding,
      args: ["class.am-card-header"]
    }]
  });
})();
var _CardBodyComponent = class _CardBodyComponent {
  constructor() {
    this.cardBodyWrapper = true;
  }
};
_CardBodyComponent.ɵfac = function CardBodyComponent_Factory(t) {
  return new (t || _CardBodyComponent)();
};
_CardBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardBodyComponent,
  selectors: [["CardBody"], ["nzm-card-body"]],
  hostVars: 2,
  hostBindings: function CardBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-card-body", ctx.cardBodyWrapper);
    }
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function CardBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CardBodyComponent = _CardBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardBodyComponent, [{
    type: Component,
    args: [{
      selector: "CardBody, nzm-card-body",
      template: `
    <ng-content></ng-content>
  `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [], {
    cardBodyWrapper: [{
      type: HostBinding,
      args: ["class.am-card-body"]
    }]
  });
})();
var _CardFooterComponent = class _CardFooterComponent {
  constructor() {
    this.prefixCls = "am-card-footer";
    this.content = null;
    this.extra = null;
    this.cardFooterWrapper = true;
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
};
_CardFooterComponent.ɵfac = function CardFooterComponent_Factory(t) {
  return new (t || _CardFooterComponent)();
};
_CardFooterComponent.ɵcmp = ɵɵdefineComponent({
  type: _CardFooterComponent,
  selectors: [["CardFooter"], ["nzm-card-footer"]],
  hostVars: 2,
  hostBindings: function CardFooterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-card-footer", ctx.cardFooterWrapper);
    }
  },
  inputs: {
    content: "content",
    extra: "extra"
  },
  decls: 7,
  vars: 6,
  consts: [[4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["contentTemplate", ""], ["extraTemplate", ""], [3, "ngTemplateOutlet"]],
  template: function CardFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, CardFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
      ɵɵelementEnd();
      ɵɵtemplate(2, CardFooterComponent_div_2_Template, 2, 5, "div", 1)(3, CardFooterComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, CardFooterComponent_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r3 = ɵɵreference(4);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.content))("ngIfElse", _r3);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.extra);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var CardFooterComponent = _CardFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardFooterComponent, [{
    type: Component,
    args: [{
      selector: "CardFooter, nzm-card-footer",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="{{ prefixCls }}-content">\n  <ng-container *ngIf="!isTemplateRef(content); else contentTemplate">{{ content }}</ng-container>\n</div>\n<div *ngIf="extra" class="{{ prefixCls }}-extra">\n  <ng-container *ngIf="!isTemplateRef(extra); else extraTemplate">{{ extra }}</ng-container>\n</div>\n<ng-template #contentTemplate>\n  <ng-template [ngTemplateOutlet]="content"></ng-template>\n</ng-template>\n<ng-template #extraTemplate>\n  <ng-template [ngTemplateOutlet]="extra"></ng-template>\n</ng-template>\n'
    }]
  }], () => [], {
    content: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    cardFooterWrapper: [{
      type: HostBinding,
      args: ["class.am-card-footer"]
    }]
  });
})();
var _CardModule = class _CardModule {
};
_CardModule.ɵfac = function CardModule_Factory(t) {
  return new (t || _CardModule)();
};
_CardModule.ɵmod = ɵɵdefineNgModule({
  type: _CardModule,
  declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
  imports: [CommonModule],
  exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
});
_CardModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var CardModule = _CardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent],
      exports: [CardComponent, CardHeaderComponent, CardBodyComponent, CardFooterComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-badge.mjs
function BadgeComponent_sup_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "sup", 1)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.scrollNumberCls)("ngStyle", ctx_r0.style);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.text);
  }
}
var _c02 = ["*"];
var _BadgeComponent = class _BadgeComponent {
  set size(v) {
    this._size = v;
    this.setCls();
  }
  get text() {
    return this._text;
  }
  set text(v) {
    this._text = v;
    this.setCls();
  }
  set corner(v) {
    this._corner = v;
    this.setCls();
  }
  get dot() {
    return this._dot;
  }
  set dot(v) {
    this._dot = v;
    if (this._dot) {
      this._text = "";
    }
    this.setCls();
  }
  set overflowCount(v) {
    this._overflowCount = v;
  }
  set hot(v) {
    this._hot = v;
    this.setCls();
  }
  set setStyle(v) {
    this.style = v;
  }
  set className(v) {
    this._setClass = v;
    const clsArr = this._setClass.split(" ");
    clsArr.forEach((cls) => {
      this.render.addClass(this._ref.nativeElement, cls);
    });
  }
  constructor(_ref, render) {
    this._ref = _ref;
    this.render = render;
    this.prefixCls = "am-badge";
    this.scrollNumberCls = {};
    this.style = {};
    this._size = "small";
    this._dot = false;
    this._hot = false;
    this._corner = false;
    this._children = false;
    this._overflowCount = 99;
    this.clsBadge = true;
    this.clsBadgeWrp = !this._children;
    this.clsBadgeCornerWrp = this._corner;
    this.clsBadgeHot = !!this._hot;
    this.clsBadgeCornerWrpLg = this._corner && this._size === "large";
  }
  setCls() {
    this.scrollNumberCls = {
      [`${this.prefixCls}-dot`]: this._dot,
      [`${this.prefixCls}-dot-large`]: this._dot && this._size === "large",
      [`${this.prefixCls}-text`]: !this._dot && !this._corner,
      [`${this.prefixCls}-corner`]: this._corner,
      [`${this.prefixCls}-corner-large`]: this._corner && this._size === "large"
    };
    this.clsBadgeWrp = !this._children;
    this.clsBadgeCornerWrp = this._corner;
    this.clsBadgeHot = !!this._hot;
    this.clsBadgeCornerWrpLg = this._corner && this._size === "large";
  }
  ngOnChanges() {
    if (typeof this._text === "number" && this._text > this._overflowCount) {
      this._text = this._overflowCount + "+";
    }
  }
  ngOnInit() {
    this.setCls();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      if (this._ref.nativeElement.children.length > 1 || this._ref.nativeElement.children.length === 1 && !this.dot && !this.text) {
        this._children = true;
        this.setCls();
      }
    }, 10);
  }
};
_BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
  return new (t || _BadgeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_BadgeComponent.ɵcmp = ɵɵdefineComponent({
  type: _BadgeComponent,
  selectors: [["Badge"], ["nzm-badge"]],
  hostVars: 10,
  hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-badge", ctx.clsBadge)("am-badge-not-a-wrapper", ctx.clsBadgeWrp)("am-badge-corner-wrapper", ctx.clsBadgeCornerWrp)("am-badge-hot", ctx.clsBadgeHot)("am-badge-corner-wrapper-large", ctx.clsBadgeCornerWrpLg);
    }
  },
  inputs: {
    size: "size",
    text: "text",
    corner: "corner",
    dot: "dot",
    overflowCount: "overflowCount",
    hot: "hot",
    setStyle: "setStyle",
    className: "className"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c02,
  decls: 2,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]],
  template: function BadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, BadgeComponent_sup_1_Template, 3, 3, "sup", 0);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dot || ctx.text);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle],
  encapsulation: 2
});
var BadgeComponent = _BadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "Badge, nzm-badge",
      template: '<ng-content></ng-content>\n<sup *ngIf="dot || text" [ngClass]="scrollNumberCls" [ngStyle]="style">\n  <span>{{ text }}</span>\n</sup>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    size: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    corner: [{
      type: Input
    }],
    dot: [{
      type: Input
    }],
    overflowCount: [{
      type: Input
    }],
    hot: [{
      type: Input
    }],
    setStyle: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    clsBadge: [{
      type: HostBinding,
      args: ["class.am-badge"]
    }],
    clsBadgeWrp: [{
      type: HostBinding,
      args: ["class.am-badge-not-a-wrapper"]
    }],
    clsBadgeCornerWrp: [{
      type: HostBinding,
      args: ["class.am-badge-corner-wrapper"]
    }],
    clsBadgeHot: [{
      type: HostBinding,
      args: ["class.am-badge-hot"]
    }],
    clsBadgeCornerWrpLg: [{
      type: HostBinding,
      args: ["class.am-badge-corner-wrapper-large"]
    }]
  });
})();
var _BadgeModule = class _BadgeModule {
};
_BadgeModule.ɵfac = function BadgeModule_Factory(t) {
  return new (t || _BadgeModule)();
};
_BadgeModule.ɵmod = ɵɵdefineNgModule({
  type: _BadgeModule,
  declarations: [BadgeComponent],
  imports: [CommonModule, FormsModule],
  exports: [BadgeComponent]
});
_BadgeModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule]
});
var BadgeModule = _BadgeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      exports: [BadgeComponent],
      declarations: [BadgeComponent],
      imports: [CommonModule, FormsModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-core.mjs
var INTERFACE_TOKEN = new InjectionToken("InterfaceToken");
var _TouchFeedbackDirective = class _TouchFeedbackDirective {
  constructor(_elementRef, _renderer) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this.activeStyle = true;
    this.clickStart = new EventEmitter();
    this.clickEnd = new EventEmitter();
  }
  addClass(className) {
    this._renderer.addClass(this._elementRef.nativeElement, className);
  }
  removeClass(className) {
    this._renderer.removeClass(this._elementRef.nativeElement, className);
  }
  ngOnInit() {
    this._className = this.className;
  }
  touchStart() {
    if (this.activeStyle) {
      this.addClass(this._className);
      this.clickStart.emit();
    }
  }
  touchEnd() {
    if (this.activeStyle) {
      this.removeClass(this._className);
      this.clickEnd.emit();
    }
  }
};
_TouchFeedbackDirective.ɵfac = function TouchFeedbackDirective_Factory(t) {
  return new (t || _TouchFeedbackDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_TouchFeedbackDirective.ɵdir = ɵɵdefineDirective({
  type: _TouchFeedbackDirective,
  selectors: [["", "TouchFeedbackDirective", ""]],
  hostBindings: function TouchFeedbackDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart", function TouchFeedbackDirective_touchstart_HostBindingHandler() {
        return ctx.touchStart();
      })("mousedown", function TouchFeedbackDirective_mousedown_HostBindingHandler() {
        return ctx.touchStart();
      })("touchend", function TouchFeedbackDirective_touchend_HostBindingHandler() {
        return ctx.touchEnd();
      })("mouseup", function TouchFeedbackDirective_mouseup_HostBindingHandler() {
        return ctx.touchEnd();
      });
    }
  },
  inputs: {
    className: "className",
    activeStyle: "activeStyle"
  },
  outputs: {
    clickStart: "clickStart",
    clickEnd: "clickEnd"
  }
});
var TouchFeedbackDirective = _TouchFeedbackDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TouchFeedbackDirective, [{
    type: Directive,
    args: [{
      selector: "[TouchFeedbackDirective]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    className: [{
      type: Input
    }],
    activeStyle: [{
      type: Input
    }],
    clickStart: [{
      type: Output
    }],
    clickEnd: [{
      type: Output
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart"]
    }, {
      type: HostListener,
      args: ["mousedown"]
    }],
    touchEnd: [{
      type: HostListener,
      args: ["touchend"]
    }, {
      type: HostListener,
      args: ["mouseup"]
    }]
  });
})();
var _TouchFeedbackModule = class _TouchFeedbackModule {
};
_TouchFeedbackModule.ɵfac = function TouchFeedbackModule_Factory(t) {
  return new (t || _TouchFeedbackModule)();
};
_TouchFeedbackModule.ɵmod = ɵɵdefineNgModule({
  type: _TouchFeedbackModule,
  declarations: [TouchFeedbackDirective],
  imports: [CommonModule],
  exports: [TouchFeedbackDirective]
});
_TouchFeedbackModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var TouchFeedbackModule = _TouchFeedbackModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TouchFeedbackModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [TouchFeedbackDirective],
      declarations: [TouchFeedbackDirective]
    }]
  }], null, null);
})();
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var _a;
var PopupService = (_a = class {
  constructor(_overlay) {
    this._overlay = _overlay;
    this.overlay = null;
    this.overlayRef = null;
    this.currentServiceName = null;
    this.serviceArray = [];
    this.overlay = this._overlay;
  }
  showPopup(component, childInjector, hasBackdrop, positionStrategy = this.overlay.position().global().centerVertically().centerHorizontally()) {
    let overlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = hasBackdrop;
    overlayConfig.positionStrategy = positionStrategy;
    this.overlayRef = this.overlay.create(overlayConfig);
    this.overlayRef.backdropClick().subscribe(() => {
      this.hidePopup();
    });
    return this.overlayRef.attach(new ComponentPortal(component, void 0, childInjector));
  }
  hidePopup() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}, _a.ɵfac = function PopupService_Factory(t) {
  return new (t || _a)(ɵɵinject(Overlay));
}, _a.ɵprov = ɵɵdefineInjectable({
  token: _a,
  factory: _a.ɵfac,
  providedIn: "root"
}), _a);
PopupService = __decorate([Injectable(), __metadata("design:paramtypes", [Overlay])], PopupService);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Injectable
  }], () => [{
    type: Overlay
  }], null);
})();
function isTemplateRef(value) {
  return value instanceof TemplateRef;
}
var svgSprite = (contents) => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink"
  id="__ANTD_MOBILE_SVG_SPRITE_NODE__"
  style="position:absolute;width:0;height:0"
>
  <defs>
    ${contents}
  </defs>
</svg>
`;
var _IconHandler = class _IconHandler {
  constructor() {
    this.contents = [];
    this.icons = {
      check: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M34.538 8L38 11.518 17.808 32 8 22.033l3.462-3.518 6.346 6.45z"/></svg>',
      "check-circle": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zM13.1 23.2l-2.2 2.1 10 9.9L38.1 15l-2.2-2-15.2 17.8-7.6-7.6z" fill-rule="evenodd"/></svg>',
      "check-circle-o": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M12.2 23.2L10 25.3l10 9.9L37.2 15 35 13 19.8 30.8z"/></g></svg>',
      cross: '<svg viewBox="0 0 44 44"><path fill-rule="evenodd" d="M24.008 21.852l8.97-8.968L31.092 11l-8.97 8.968L13.157 11l-1.884 1.884 8.968 8.968-9.24 9.24 1.884 1.885 9.24-9.24 9.24 9.24 1.885-1.884-9.24-9.24z"/></svg>',
      "cross-circle": '<svg viewBox="0 0 48 48"><g fill-rule="evenodd"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm0-3c11.598 0 21-9.402 21-21S35.598 3 24 3 3 12.402 3 24s9.402 21 21 21z"/><path d="M24.34 22.22l-7.775-7.775a1.5 1.5 0 1 0-2.12 2.12l7.773 7.775-7.774 7.775a1.5 1.5 0 1 0 2.12 2.12l7.775-7.773 7.774 7.774a1.5 1.5 0 1 0 2.12-2.12L26.46 24.34l7.774-7.774a1.5 1.5 0 1 0-2.12-2.12l-7.776 7.773z"/></g></svg>',
      "cross-circle-o": '<svg viewBox="0 0 48 48"><path d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm.353-25.77l-7.593-7.593c-.797-.8-1.538-.822-2.263-.207-.724.614-.56 1.617-.124 2.067l7.852 7.847-7.72 7.723c-.727.728-.56 1.646-.066 2.177.493.532 1.553.683 2.31-.174l7.588-7.584 7.644 7.623c.796.798 1.608.724 2.21.145.605-.58.72-1.442-.074-2.24l-7.657-7.67 7.545-7.52c.81-.697.9-1.76.297-2.34-.92-.885-1.85-.338-2.264.078l-7.685 7.667z" fill-rule="evenodd"/></svg>',
      // Todo: simplify direction to 2, use css transform
      left: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M16.247 21.4L28.48 9.165l2.12 2.12-10.117 10.12L30.6 31.524l-2.12 2.12-12.233-12.232.007-.006z"/></svg>',
      right: '<svg viewBox="0 0 44 44"><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M30.6 21.4L18.37 9.165l-2.12 2.12 10.117 10.12-10.118 10.118 2.12 2.12 12.234-12.232-.005-.006z"/></svg>',
      down: '<svg viewBox="0 0 44 44"><path d="M22.355 28.237l-11.483-10.9c-.607-.576-1.714-.396-2.48.41l.674-.71c-.763.802-.73 2.07-.282 2.496l11.37 10.793-.04.04 2.088 2.195L23.3 31.52l12.308-11.682c.447-.425.48-1.694-.282-2.496l.674.71c-.766-.806-1.873-.986-2.48-.41L22.355 28.237z" fill-rule="evenodd"/></svg>',
      up: '<svg viewBox="0 0 44 44"><path fill="none" d="M-1-1h46v46H-1z"/><defs><path id="a" d="M-129-845h24v24h-24z"/></defs><clipPath id="b"><use xlink:href="#a"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-903-949H947V996H-903z"/></defs></g><path d="M23.417 14.23L11.184 26.46l2.12 2.12 10.12-10.117 10.118 10.118 2.12-2.12L23.43 14.228l-.006.005z"/></svg>',
      loading: '<svg viewBox="0 -2 59.75 60.25"><path fill="#ccc" d="M29.69-.527C14.044-.527 1.36 12.158 1.36 27.806S14.043 56.14 29.69 56.14c15.65 0 28.334-12.686 28.334-28.334S45.34-.527 29.69-.527zm.185 53.75c-14.037 0-25.417-11.38-25.417-25.417S15.838 2.39 29.875 2.39s25.417 11.38 25.417 25.417-11.38 25.416-25.417 25.416z"/><path fill="none" stroke="#108ee9" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="M56.587 29.766c.37-7.438-1.658-14.7-6.393-19.552"/></svg>',
      search: '<svg viewBox="0 0 44 44"><path d="M32.98 29.255l8.915 8.293L39.603 40l-8.86-8.242a15.952 15.952 0 0 1-10.753 4.147C11.16 35.905 4 28.763 4 19.952 4 11.142 11.16 4 19.99 4s15.99 7.142 15.99 15.952c0 3.472-1.112 6.685-3 9.303zm.05-9.21c0 7.123-5.7 12.918-12.88 12.918-7.176 0-13.015-5.795-13.015-12.918 0-7.12 5.84-12.917 13.017-12.917 7.178 0 12.88 5.797 12.88 12.917z" fill-rule="evenodd"/></svg>',
      ellipsis: '<svg viewBox="0 0 44 44"><circle cx="21.888" cy="22" r="4.045"/><circle cx="5.913" cy="22" r="4.045"/><circle cx="37.863" cy="22" r="4.045"/></svg>',
      "ellipsis-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M22.13.11C10.05.11.255 9.902.255 21.983S10.05 43.86 22.13 43.86s21.875-9.795 21.875-21.876S34.21.11 22.13.11zm0 40.7c-10.396 0-18.825-8.43-18.825-18.826S11.735 3.16 22.13 3.16c10.396 0 18.825 8.428 18.825 18.824S32.525 40.81 22.13 40.81z"/><circle cx="21.888" cy="22.701" r="2.445"/><circle cx="12.23" cy="22.701" r="2.445"/><circle cx="31.546" cy="22.701" r="2.445"/></g></svg>',
      "exclamation-circle": '<svg viewBox="0 0 64 64"><path d="M59.58 40.89L41.193 9.11C39.135 5.382 35.723 3 31.387 3c-3.11 0-6.52 2.382-8.58 6.11L4.42 40.89c-2.788 4.635-3.126 8.81-1.225 12.22C5.015 56.208 7.572 58 13 58h36.773c5.428 0 9.21-1.792 11.03-4.89 1.9-3.41 1.565-7.583-1.224-12.22zm-2.452 11c-.635 1.694-3.802 2.443-7.354 2.443H13c-3.59 0-5.493-.75-6.13-2.444-1.71-2.41-1.374-5.263 0-8.557l18.387-31.777c2.116-3.168 4.394-4.89 6.13-4.89 2.96 0 5.238 1.722 7.354 4.89l18.387 31.777c1.374 3.294 1.713 6.146 0 8.556zm-25.74-33c-.405 0-1.227.835-1.227 2.443v15.89c0 1.608.823 2.444 1.227 2.444 1.628 0 2.452-.836 2.452-2.445v-15.89c0-1.607-.825-2.443-2.453-2.443zm0 23.22c-.405 0-1.227.79-1.227 1.223v2.445c0 .434.823 1.222 1.227 1.222 1.628 0 2.452-.788 2.452-1.222v-2.445c0-.434-.825-1.222-2.453-1.222z" fill-rule="evenodd"/></svg>',
      "info-circle": '<svg viewBox="0 0 44 44"><circle cx="13.828" cy="19.63" r="1.938"/><circle cx="21.767" cy="19.63" r="1.938"/><circle cx="29.767" cy="19.63" r="1.938"/><path d="M22.102 4.16c-9.918 0-17.958 7.147-17.958 15.962 0 4.935 2.522 9.345 6.48 12.273v5.667l.04.012a2.627 2.627 0 1 0 4.5 1.455h.002l5.026-3.54c.628.06 1.265.094 1.91.094 9.92 0 17.96-7.146 17.96-15.96C40.06 11.306 32.02 4.16 22.1 4.16zm-.04 29.902c-.902 0-1.78-.08-2.642-.207l-5.882 4.234c-.024.024-.055.04-.083.06l-.008.005a.51.51 0 0 1-.284.095.525.525 0 0 1-.525-.525l.005-6.375c-3.91-2.516-6.456-6.544-6.456-11.1 0-7.628 7.107-13.812 15.875-13.812s15.875 6.184 15.875 13.812-7.107 13.812-15.875 13.812z"/></svg>',
      "question-circle": '<svg viewBox="0 0 44 44"><g fill-rule="evenodd"><path d="M21.186 3c-10.853 0-19.36 8.506-19.36 19.358C1.827 32.494 10.334 41 21.187 41c10.133 0 18.64-8.506 18.64-18.642C39.827 11.506 31.32 3 21.187 3m15.64 19c0 8.823-7.178 16-16 16s-16-7.177-16-16 7.178-16 16-16 16 7.177 16 16z"/><path d="M22.827 31.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-15.48c0 .957-.203 1.822-.61 2.593-.427.792-1.117 1.612-2.073 2.457-.867.734-1.453 1.435-1.754 2.096-.302.7-.453 1.693-.453 2.98a.828.828 0 0 1-.823.854.828.828 0 0 1-.584-.22.877.877 0 0 1-.24-.635c0-1.305.168-2.38.506-3.227.336-.883.93-1.682 1.78-2.4 1.01-.883 1.71-1.692 2.1-2.428.336-.645.503-1.38.503-2.21-.02-.935-.3-1.7-.85-2.288-.655-.717-1.62-1.075-2.897-1.075-1.506 0-2.596.535-3.27 1.6-.46.754-.688 1.645-.688 2.677a.92.92 0 0 1-.266.66.747.747 0 0 1-.56.25.73.73 0 0 1-.584-.194c-.16-.164-.24-.393-.24-.69 0-1.82.585-3.272 1.755-4.357C18.645 11.486 19.928 11 21.434 11h.293c1.452 0 2.638.414 3.56 1.24 1.028.903 1.54 2.163 1.54 3.78z"/></g></svg>',
      voice: '<svg viewBox="0 0 38 33"><g fill-rule="evenodd"><path d="M17.838 28.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014 0-.027.005-.04.005-.015 0-.028-.006-.042-.006H3.562c-.734 0-.903-.203-.903-.928v-12.62c0-.49.057-.8.66-.8H9.1c.694 0 1.76-.28 6.4-3.63.83-.596 1.638-1.196 2.337-1.722V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983 1.552-4.152 3.125C10.34 6.21 9.243 6.664 9.02 6.737H3.676c-.027 0-.053.003-.08.004H1.183c-.608 0-1.1.487-1.1 1.086V25.14c0 .598.492 1.084 1.1 1.084h8.71c.22.08 1.257.55 4.605 3.24 1.947 1.562 3.694 3.088 3.712 3.103.25.22.568.333.89.333.186 0 .373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z" mask="url(#mask-2)"/><path d="M31.42 16.475c0-3.363-1.854-6.297-4.606-7.876-.125-.067-.42-.193-.625-.193-.613 0-1.11.488-1.11 1.09 0 .404.22.764.55.952 2.13 1.19 3.566 3.44 3.566 6.024 0 2.627-1.486 4.913-3.677 6.087-.32.19-.53.54-.53.935 0 .602.495 1.09 1.106 1.09.26.002.568-.15.568-.15 2.835-1.556 4.754-4.538 4.754-7.96" mask="url(#mask-4)"/><path d="M30.14 3.057c-.205-.122-.41-.22-.658-.22-.608 0-1.1.485-1.1 1.084 0 .434.26.78.627.978 4.042 2.323 6.76 6.636 6.76 11.578 0 4.938-2.715 9.248-6.754 11.572-.354.19-.66.55-.66.993 0 .6.494 1.085 1.102 1.085.243 0 .438-.092.65-.213 4.692-2.695 7.848-7.7 7.848-13.435 0-5.723-3.142-10.718-7.817-13.418" mask="url(#mask-6)"/></g></svg>',
      plus: '<svg viewBox="0 0 30 30"><path d="M14 14H0v2h14v14h2V16h14v-2H16V0h-2v14z" fill-rule="evenodd"/></svg>',
      minus: '<svg viewBox="0 0 30 2"><path d="M0 0h30v2H0z" fill-rule="evenodd"/></svg>',
      dislike: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path fill="#FFF" d="M47 22h2v6h-2zm-24 0h2v6h-2z"/><path d="M21 51s4.6-7 15-7 15 7 15 7" stroke="#FFF" stroke-width="2"/></g></svg>',
      fail: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path d="M22 22l28.304 28.304m-28.304 0L50.304 22" stroke="#FFF" stroke-width="2"/></g></svg>',
      success: '<svg viewBox="0 0 72 72"><g fill="none" fill-rule="evenodd"><path d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36zm0-2c18.778 0 34-15.222 34-34S54.778 2 36 2 2 17.222 2 36s15.222 34 34 34z" fill="#FFF"/><path stroke="#FFF" stroke-width="2" d="M19 34.54l11.545 11.923L52.815 24"/></g></svg>'
    };
  }
  renderSvgSprite() {
    const symbols = Object.keys(this.icons).map((iconName) => {
      const svgContent = this.icons[iconName].split("svg")[1];
      return `<symbol id=${iconName}${svgContent}symbol>`;
    }).join("");
    return svgSprite(symbols);
  }
  load() {
    if (!document) {
      return;
    }
    const existing = document.getElementById("__ANTD_MOBILE_SVG_SPRITE_NODE__");
    const mountNode = document.body;
    if (!existing) {
      mountNode.insertAdjacentHTML("afterbegin", this.renderSvgSprite());
    }
  }
};
_IconHandler.ɵfac = function IconHandler_Factory(t) {
  return new (t || _IconHandler)();
};
_IconHandler.ɵprov = ɵɵdefineInjectable({
  token: _IconHandler,
  factory: _IconHandler.ɵfac
});
var IconHandler = _IconHandler;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconHandler, [{
    type: Injectable
  }], () => [], null);
})();
function getAllStyles(element) {
  return window.getComputedStyle(element);
}
function getStyle(element, prop) {
  return getAllStyles(element)[prop];
}
function isStaticPositioned(element) {
  return (getStyle(element, "position") || "static") === "static";
}
function getOffsetParent(element) {
  let offsetParentEl = element.offsetParent || document.documentElement;
  while (offsetParentEl && offsetParentEl !== document.documentElement && isStaticPositioned(offsetParentEl)) {
    offsetParentEl = offsetParentEl.offsetParent;
  }
  return offsetParentEl || document.documentElement;
}
function getOffset(element) {
  let elBcr = element.getBoundingClientRect();
  let viewportOffset = {
    top: window.pageYOffset - document.documentElement.clientTop,
    left: window.pageXOffset - document.documentElement.clientLeft
  };
  let elOffset = {
    height: elBcr.height || element.offsetHeight,
    width: elBcr.width || element.offsetWidth,
    top: elBcr.top + viewportOffset.top,
    bottom: elBcr.bottom + viewportOffset.top,
    left: elBcr.left + viewportOffset.left,
    right: elBcr.right + viewportOffset.left
  };
  return elOffset;
}
function getPosition(element) {
  let elPosition;
  let parentOffset = {
    width: 0,
    height: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
  if (getStyle(element, "position") === "fixed") {
    elPosition = __spreadValues({}, element.getBoundingClientRect());
  } else {
    let offsetParentEl = getOffsetParent(element);
    elPosition = getOffset(element);
    if (offsetParentEl !== document.documentElement) {
      parentOffset = getOffset(offsetParentEl);
    }
    parentOffset.top += offsetParentEl.clientTop;
    parentOffset.left += offsetParentEl.clientLeft;
  }
  elPosition.top -= parentOffset.top;
  elPosition.bottom -= parentOffset.top;
  elPosition.left -= parentOffset.left;
  elPosition.right -= parentOffset.left;
  return elPosition;
}
function getPositionElements(hostElement, targetElement, placement, appendToBody) {
  let hostElPosition = appendToBody ? getOffset(hostElement) : getPosition(hostElement);
  let targetElStyles = getAllStyles(targetElement);
  let targetElBCR = targetElement.getBoundingClientRect();
  let placementPrimary = placement.split("-")[0] || "top";
  let placementSecondary = placement.split("-")[1] || "center";
  let targetElPosition = {
    height: targetElBCR.height || targetElement.offsetHeight,
    width: targetElBCR.width || targetElement.offsetWidth,
    top: 0,
    bottom: targetElBCR.height || targetElement.offsetHeight,
    left: 0,
    right: targetElBCR.width || targetElement.offsetWidth
  };
  switch (placementPrimary) {
    case "top":
      targetElPosition.top = hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
      break;
    case "bottom":
      targetElPosition.top = hostElPosition.top + hostElPosition.height;
      break;
    case "left":
      targetElPosition.left = hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
      break;
    case "right":
      targetElPosition.left = hostElPosition.left + hostElPosition.width;
      break;
  }
  switch (placementSecondary) {
    case "top":
      targetElPosition.top = hostElPosition.top;
      break;
    case "bottom":
      targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
      break;
    case "left":
      targetElPosition.left = hostElPosition.left;
      break;
    case "right":
      targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
      break;
    case "center":
      if (placementPrimary === "top" || placementPrimary === "bottom") {
        targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
      } else {
        targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
      }
      break;
  }
  targetElPosition.top = Math.round(targetElPosition.top);
  targetElPosition.bottom = Math.round(targetElPosition.bottom);
  targetElPosition.left = Math.round(targetElPosition.left);
  targetElPosition.right = Math.round(targetElPosition.right);
  return targetElPosition;
}
function getEventTarget(event) {
  if (event.type === "mousedown" || event.type === "mousemove" || event.type === "mouseup" || event.type === "mouseleave") {
    return event;
  } else {
    if (event && event.changedTouches && event.changedTouches[0]) {
      return event.changedTouches[0];
    }
  }
}
function getVelocity() {
  return /* @__PURE__ */ ((minInterval = 30, maxInterval = 100) => {
    let _time = 0;
    let _y = 0;
    let _velocity = 0;
    const recorder = {
      record: (y) => {
        const now = +/* @__PURE__ */ new Date();
        _velocity = (y - _y) / (now - _time);
        if (now - _time >= minInterval) {
          _velocity = now - _time <= maxInterval ? _velocity : 0;
          _y = y;
          _time = now;
        }
      },
      getVelocity: (y) => {
        if (y !== _y) {
          recorder.record(y);
        }
        return _velocity;
      }
    };
    return recorder;
  })();
}

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-locale-provider.mjs
var Picker$4 = {
  okText: "Ok",
  dismissText: "Cancel",
  extra: "please select"
};
var DatePicker$4 = {
  okText: "OK",
  dismissText: "Cancel",
  extra: "please select",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var DatePickerView$4 = {
  okText: "OK",
  dismissText: "Cancel",
  extra: "please select",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var Menu$4 = {
  okText: "Ok",
  cancelText: "Cancel"
};
var Calendar$2 = {
  title: "Calendar",
  today: "Today",
  month: "Month",
  year: "Year",
  am: "AM",
  pm: "PM",
  dateTimeFormat: "MM/dd/yyyy w hh:mm",
  dateFormat: "yyyy/MM/dd w",
  noChoose: "No Choose",
  week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  clear: "Clear",
  selectTime: "Select Time",
  selectStartTime: "Select Start Time",
  selectEndTime: "Select End Time",
  start: "Start",
  end: "End",
  begin: "Start",
  over: "End",
  begin_over: "S/E",
  confirm: "Confirm",
  monthTitle: "yyyy/MM",
  loadPrevMonth: "Load Prev Month",
  yesterday: "Yesterday",
  lastWeek: "Last Week",
  lastMonth: "Last Month"
};
var SearchBar$4 = {
  cancelText: "Cancel"
};
var InputItem$4 = {
  confirmLabel: "Done",
  backspaceLabel: "Backspace",
  cancelKeyboardLabel: "CancelKeyboard"
};
var Pagination$4 = {
  prevText: "Prev",
  nextText: "Next"
};
var PullToRefresh$4 = {
  activateText: "Refresh immediately after release",
  deactivateText: "Pull down to refresh",
  finishText: "Finish refresh"
};
var ActionSheet$4 = {
  dismissText: "Cancel"
};
var en_US = {
  locale: "en_US",
  Picker: Picker$4,
  DatePicker: DatePicker$4,
  DatePickerView: DatePickerView$4,
  Menu: Menu$4,
  Calendar: Calendar$2,
  SearchBar: SearchBar$4,
  InputItem: InputItem$4,
  Pagination: Pagination$4,
  PullToRefresh: PullToRefresh$4,
  ActionSheet: ActionSheet$4
};
var Picker$3 = {
  okText: "Ок",
  dismissText: "Отмена",
  extra: ""
};
var DatePicker$3 = {
  okText: "Ок",
  dismissText: "Отмена",
  extra: "",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var DatePickerView$3 = {
  okText: "Ок",
  dismissText: "Отмена",
  extra: "",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var Menu$3 = {
  okText: "Ок",
  cancelText: "Отмена"
};
var SearchBar$3 = {
  cancelText: "Отмена"
};
var InputItem$3 = {
  confirmLabel: "Ок",
  backspaceLabel: "возврат на одну позицию",
  cancelKeyboardLabel: "Отменить клавиатуру"
};
var Pagination$3 = {
  prevText: "Назад",
  nextText: "Вперёд"
};
var PullToRefresh$3 = {
  activateText: "Обновить сразу после выпуска",
  deactivateText: "Потяните вниз, чтобы обновить",
  finishText: "Завершить обновление"
};
var ActionSheet$3 = {
  dismissText: "Отмена"
};
var ru_RU = {
  locale: "ru_RU",
  Picker: Picker$3,
  DatePicker: DatePicker$3,
  DatePickerView: DatePickerView$3,
  Menu: Menu$3,
  // Calendar,
  SearchBar: SearchBar$3,
  InputItem: InputItem$3,
  Pagination: Pagination$3,
  PullToRefresh: PullToRefresh$3,
  ActionSheet: ActionSheet$3
};
var Picker$2 = {
  okText: "Ok",
  dismissText: "Avbryt",
  extra: "vänligen välj"
};
var DatePicker$2 = {
  okText: "Ok",
  dismissText: "Avbryt",
  extra: "vänligen välj",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var DatePickerView$2 = {
  okText: "Ok",
  dismissText: "Avbryt",
  extra: "vänligen välj",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var Menu$2 = {
  okText: "Ok",
  cancelText: "Avbryt"
};
var SearchBar$2 = {
  cancelText: "Avbryt"
};
var InputItem$2 = {
  confirmLabel: "Ok",
  backspaceLabel: "Backspace",
  cancelKeyboardLabel: "CancelKeyboard"
};
var Pagination$2 = {
  prevText: "Föreg",
  nextText: "Nästa"
};
var PullToRefresh$2 = {
  activateText: "Uppdatera omedelbart efter utsläpp",
  deactivateText: "Dra ner för att uppdatera",
  finishText: "Avsluta uppdateringen"
};
var ActionSheet$2 = {
  dismissText: "Avbryt"
};
var sv_SE = {
  locale: "sv_SE",
  Picker: Picker$2,
  DatePicker: DatePicker$2,
  DatePickerView: DatePickerView$2,
  Menu: Menu$2,
  // Calendar,
  SearchBar: SearchBar$2,
  InputItem: InputItem$2,
  Pagination: Pagination$2,
  PullToRefresh: PullToRefresh$2,
  ActionSheet: ActionSheet$2
};
var Picker$1 = {
  okText: "确定",
  dismissText: "取消",
  extra: "请选择"
};
var DatePicker$1 = {
  errorMessage: "当前时间与设定最大或最小日期格式不一致",
  curTMorethanMax: "当前时间大于设定最大日期",
  curTLessthanMin: "当前时间小于设定最小日期",
  okText: "确定",
  dismissText: "取消",
  extra: "请选择",
  // DatePickerLocale,
  year: "年",
  month: "月",
  day: "日",
  hour: "时",
  minute: "分",
  am: "上午",
  pm: "下午"
};
var DatePickerView$1 = {
  okText: "确定",
  dismissText: "取消",
  extra: "请选择",
  // DatePickerLocale,
  year: "年",
  month: "月",
  day: "日",
  hour: "时",
  minute: "分",
  am: "上午",
  pm: "下午"
};
var Menu$1 = {
  okText: "确定",
  cancelText: "取消"
};
var Calendar$1 = {
  title: "日期选择",
  today: "今天",
  month: "月",
  year: "年",
  am: "上午",
  pm: "下午",
  dateTimeFormat: "yyyy年MM月dd日 星期w hh:mm",
  dateFormat: "yyyy年MM月dd日 星期w",
  noChoose: "未选择",
  week: ["日", "一", "二", "三", "四", "五", "六"],
  clear: "清除",
  selectTime: "选择时间",
  selectStartTime: "选择开始时间",
  selectEndTime: "选择结束时间",
  start: "开始",
  end: "结束",
  begin: "起",
  over: "止",
  begin_over: "起/止",
  confirm: "确认",
  monthTitle: "yyyy年MM月",
  loadPrevMonth: "加载上一个月",
  yesterday: "昨天",
  lastWeek: "近一周",
  lastMonth: "近一个月"
};
var SearchBar$1 = {
  cancelText: "取消"
};
var InputItem$1 = {
  confirmLabel: "确定",
  backspaceLabel: "退格",
  cancelKeyboardLabel: "收起键盘"
};
var Pagination$1 = {
  prevText: "上一页",
  nextText: "下一页"
};
var PullToRefresh$1 = {
  activateText: "松开立即刷新",
  deactivateText: "下拉可以刷新",
  finishText: "完成刷新"
};
var ActionSheet$1 = {
  dismissText: "取消"
};
var zh_CN = {
  locale: "zh_CN",
  Picker: Picker$1,
  DatePicker: DatePicker$1,
  DatePickerView: DatePickerView$1,
  Menu: Menu$1,
  Calendar: Calendar$1,
  SearchBar: SearchBar$1,
  InputItem: InputItem$1,
  Pagination: Pagination$1,
  PullToRefresh: PullToRefresh$1,
  ActionSheet: ActionSheet$1
};
var Picker = {
  okText: "Ok",
  dismissText: "Annuller",
  extra: "Vælg venligst"
};
var DatePicker = {
  okText: "Ok",
  dismissText: "Annuller",
  extra: "Vælg venligst",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var DatePickerView = {
  okText: "Ok",
  dismissText: "Annuller",
  extra: "Vælg venligst",
  // DatePickerLocale,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  am: "AM",
  pm: "PM"
};
var Menu = {
  okText: "Ok",
  cancelText: "Annuller"
};
var Calendar = {
  title: "Kalender",
  today: "I dag",
  month: "Måned",
  year: "År",
  am: "AM",
  pm: "PM",
  dateTimeFormat: "dd/MM/yyyy w hh:mm",
  dateFormat: "dd/MM/yyyy w",
  noChoose: "Intet valgt",
  week: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
  clear: "Fjern",
  selectTime: "Vælg tidspunkt",
  selectStartTime: "Vælg starttidspunkt",
  selectEndTime: "Vælg sluttidspunkt",
  start: "Start",
  end: "Slut",
  begin: "Start",
  over: "Slut",
  begin_over: "Start/Stop",
  confirm: "Bekræft",
  monthTitle: "MM yyyy",
  loadPrevMonth: "Indlæs forrige måned",
  yesterday: "I går",
  lastWeek: "Sidste uge",
  lastMonth: "Sidste måned"
};
var SearchBar = {
  cancelText: "Annuller"
};
var InputItem = {
  confirmLabel: "Ok",
  backspaceLabel: "Backspace",
  cancelKeyboardLabel: "CancelKeyboard"
};
var Pagination = {
  prevText: "Forrige",
  nextText: "Næste"
};
var PullToRefresh = {
  activateText: "Opdater umiddelbart efter slip",
  deactivateText: "Træk ned for at opdatere",
  finishText: "Afslut opdatering"
};
var ActionSheet = {
  dismissText: "Annuller"
};
var da_DK = {
  locale: "da_DK",
  Picker,
  DatePicker,
  DatePickerView,
  Menu,
  Calendar,
  SearchBar,
  InputItem,
  Pagination,
  PullToRefresh,
  ActionSheet
};
var LOCAL_PROVIDER_TOKEN = new InjectionToken("locale-provider-token");
var _LocaleProviderService = class _LocaleProviderService {
  constructor(locale) {
    this._locale = void 0;
    this._change = new BehaviorSubject(this._locale);
    this.setLocale(locale || zh_CN);
  }
  get localeChange() {
    return this._change.asObservable();
  }
  getLocaleValue(keyPath) {
    const content = this._getObjectPath(this._locale, keyPath);
    if (typeof content === "string") {
      return content;
    }
    return "";
  }
  getLocaleSubObj(keyPath) {
    const content = this._getObjectPath(this._locale, keyPath);
    if (typeof content === "object") {
      return content;
    }
    return null;
  }
  setLocale(locale) {
    if (!locale || this._locale && this._locale.locale === locale.locale) {
      return;
    }
    this._locale = locale;
    this._change.next(locale);
  }
  getLocaleId() {
    return this._locale && this._locale.locale ? this._locale.locale : "";
  }
  getLocale() {
    return this._locale;
  }
  _getObjectPath(obj, path) {
    let res = obj;
    const paths = path.split(".");
    const depth = paths.length;
    let index = 0;
    while (res && index < depth) {
      res = res[paths[index++]];
    }
    return index === depth ? res : null;
  }
};
_LocaleProviderService.ɵfac = function LocaleProviderService_Factory(t) {
  return new (t || _LocaleProviderService)(ɵɵinject(LOCAL_PROVIDER_TOKEN));
};
_LocaleProviderService.ɵprov = ɵɵdefineInjectable({
  token: _LocaleProviderService,
  factory: _LocaleProviderService.ɵfac
});
var LocaleProviderService = _LocaleProviderService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocaleProviderService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LOCAL_PROVIDER_TOKEN]
    }]
  }], null);
})();
function LOCALE_PROVIDER_SERVICE_FACTORY(exist, locale) {
  return exist || new LocaleProviderService(locale);
}
var LOCALE_PROVIDER_SERVICE_PROVIDER = {
  provide: LocaleProviderService,
  useFactory: LOCALE_PROVIDER_SERVICE_FACTORY,
  deps: [[new Optional(), new SkipSelf(), LocaleProviderService], LOCAL_PROVIDER_TOKEN]
};
var _LocaleProviderPipe = class _LocaleProviderPipe {
  constructor(_locale) {
    this._locale = _locale;
  }
  transform(keyPath) {
    return this._locale.getLocaleValue(keyPath);
  }
};
_LocaleProviderPipe.ɵfac = function LocaleProviderPipe_Factory(t) {
  return new (t || _LocaleProviderPipe)(ɵɵdirectiveInject(LocaleProviderService, 16));
};
_LocaleProviderPipe.ɵpipe = ɵɵdefinePipe({
  name: "localeProvider",
  type: _LocaleProviderPipe,
  pure: true
});
var LocaleProviderPipe = _LocaleProviderPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocaleProviderPipe, [{
    type: Pipe,
    args: [{
      name: "localeProvider"
    }]
  }], () => [{
    type: LocaleProviderService
  }], null);
})();
var _LocaleProviderModule = class _LocaleProviderModule {
};
_LocaleProviderModule.ɵfac = function LocaleProviderModule_Factory(t) {
  return new (t || _LocaleProviderModule)();
};
_LocaleProviderModule.ɵmod = ɵɵdefineNgModule({
  type: _LocaleProviderModule,
  declarations: [LocaleProviderPipe],
  exports: [LocaleProviderPipe]
});
_LocaleProviderModule.ɵinj = ɵɵdefineInjector({
  providers: [{
    provide: LOCAL_PROVIDER_TOKEN,
    useValue: zh_CN
  }, LOCALE_PROVIDER_SERVICE_PROVIDER]
});
var LocaleProviderModule = _LocaleProviderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocaleProviderModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [LocaleProviderPipe],
      exports: [LocaleProviderPipe],
      providers: [{
        provide: LOCAL_PROVIDER_TOKEN,
        useValue: zh_CN
      }, LOCALE_PROVIDER_SERVICE_PROVIDER]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-input-item.mjs
function CustomInputComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r0.placeholder, "\n");
  }
}
var _c03 = ["lableContent"];
var _c1 = ["inputElement"];
function InputItemComponent_3_ng_template_0_Template(rf, ctx) {
}
function InputItemComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputItemComponent_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.content);
  }
}
function InputItemComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.content);
  }
}
function InputItemComponent_CustomInput_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "CustomInput", 6);
    ɵɵlistener("onChange", function InputItemComponent_CustomInput_6_Template_CustomInput_onChange_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.inputChange($event));
    })("onBlur", function InputItemComponent_CustomInput_6_Template_CustomInput_onBlur_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.inputBlur(ctx_r11.value));
    })("onFocus", function InputItemComponent_CustomInput_6_Template_CustomInput_onFocus_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.inputFocus(ctx_r12.value));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r3.value)("defaultValue", ctx_r3.defaultValue)("placeholder", ctx_r3.placeholder)("disabled", ctx_r3.disabled)("editable", ctx_r3.editable)("fontColor", ctx_r3.fontColor)("moneyKeyboardAlign", ctx_r3.moneyKeyboardAlign)("setFocus", ctx_r3.setFocus)("maxLength", ctx_r3.maxLength);
  }
}
function InputItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "input", 7, 8);
    ɵɵlistener("ngModelChange", function InputItemComponent_div_7_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.value = $event);
    })("ngModelChange", function InputItemComponent_div_7_Template_input_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.inputChange($event));
    })("compositionstart", function InputItemComponent_div_7_Template_input_compositionstart_1_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.compositionStart());
    })("compositionend", function InputItemComponent_div_7_Template_input_compositionend_1_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.compositionEnd());
    })("blur", function InputItemComponent_div_7_Template_input_blur_1_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.inputBlur(ctx_r19.value));
    })("focus", function InputItemComponent_div_7_Template_input_focus_1_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.inputFocus(ctx_r20.value));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵstyleProp("color", ctx_r4.fontColor);
    ɵɵproperty("type", ctx_r4.type)("name", ctx_r4.name)("ngModel", ctx_r4.value)("defaultValue", ctx_r4.defaultValue)("placeholder", ctx_r4.placeholder)("disabled", ctx_r4.disabled)("readOnly", !ctx_r4.editable)("autofocus", ctx_r4.autoFocus)("maxlength", ctx_r4.maxLength)("pattern", ctx_r4.pattern);
  }
}
function InputItemComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function InputItemComponent_div_8_Template_div_click_0_listener() {
      ɵɵrestoreView(_r22);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.clearInput());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-clear");
  }
}
function InputItemComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function InputItemComponent_div_9_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r23 = ɵɵnextContext();
      return ɵɵresetView(ctx_r23.errorClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-error-extra");
  }
}
function InputItemComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r25.extra);
  }
}
function InputItemComponent_div_10_2_ng_template_0_Template(rf, ctx) {
}
function InputItemComponent_div_10_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputItemComponent_div_10_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r26.extra);
  }
}
function InputItemComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function InputItemComponent_div_10_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r29);
      const ctx_r28 = ɵɵnextContext();
      return ɵɵresetView(ctx_r28.extraClick($event));
    });
    ɵɵtemplate(1, InputItemComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 2)(2, InputItemComponent_div_10_2_Template, 1, 1, null, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r7.prefixCls, "-extra");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.ngTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.ngTemplate);
  }
}
var _CustomKeyboardComponent = class _CustomKeyboardComponent {
  constructor(_localeProvider) {
    this._localeProvider = _localeProvider;
    this.prefixCls = "am-number-keyboard";
    this.okText = "";
    this._locale = {};
    this._unsubscribe$ = new Subject();
    this.onClick = new EventEmitter();
  }
  tdClick(e) {
    this.onClick.emit(e);
  }
  ngOnInit() {
    this.wrapCls = {
      [`${this.prefixCls}-item`]: true
    };
    this.wrapperCls = {
      [`${this.prefixCls}-wrapper`]: true
    };
    this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      this._locale = this._localeProvider.getLocaleSubObj("InputItem");
      this.okText = this._locale.confirmLabel;
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_CustomKeyboardComponent.ɵfac = function CustomKeyboardComponent_Factory(t) {
  return new (t || _CustomKeyboardComponent)(ɵɵdirectiveInject(LocaleProviderService));
};
_CustomKeyboardComponent.ɵcmp = ɵɵdefineComponent({
  type: _CustomKeyboardComponent,
  selectors: [["CustomKeyboard"]],
  outputs: {
    onClick: "onClick"
  },
  features: [ɵɵProvidersFeature([LocaleProviderService])],
  decls: 33,
  vars: 18,
  consts: [[3, "ngClass"], [3, "ngClass", "click"], [1, "keyboard-delete", 3, "rowSpan", "ngClass", "click"], [1, "keyboard-confirm", 3, "rowSpan", "ngClass", "click"], [1, "keyboard-hide", 3, "ngClass", "click"]],
  template: function CustomKeyboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "table")(2, "tbody")(3, "tr")(4, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_4_listener() {
        return ctx.tdClick(1);
      });
      ɵɵtext(5, "1");
      ɵɵelementEnd();
      ɵɵelementStart(6, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_6_listener() {
        return ctx.tdClick(2);
      });
      ɵɵtext(7, "2");
      ɵɵelementEnd();
      ɵɵelementStart(8, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_8_listener() {
        return ctx.tdClick(3);
      });
      ɵɵtext(9, "3");
      ɵɵelementEnd();
      ɵɵelementStart(10, "td", 2);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_10_listener() {
        return ctx.tdClick("delete");
      });
      ɵɵelementEnd()();
      ɵɵelementStart(11, "tr")(12, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_12_listener() {
        return ctx.tdClick(4);
      });
      ɵɵtext(13, "4");
      ɵɵelementEnd();
      ɵɵelementStart(14, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_14_listener() {
        return ctx.tdClick(5);
      });
      ɵɵtext(15, "5");
      ɵɵelementEnd();
      ɵɵelementStart(16, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_16_listener() {
        return ctx.tdClick(6);
      });
      ɵɵtext(17, "6");
      ɵɵelementEnd()();
      ɵɵelementStart(18, "tr")(19, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_19_listener() {
        return ctx.tdClick(7);
      });
      ɵɵtext(20, "7");
      ɵɵelementEnd();
      ɵɵelementStart(21, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_21_listener() {
        return ctx.tdClick(8);
      });
      ɵɵtext(22, "8");
      ɵɵelementEnd();
      ɵɵelementStart(23, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_23_listener() {
        return ctx.tdClick(9);
      });
      ɵɵtext(24, "9");
      ɵɵelementEnd();
      ɵɵelementStart(25, "td", 3);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_25_listener() {
        return ctx.tdClick("confirm");
      });
      ɵɵtext(26);
      ɵɵelementEnd()();
      ɵɵelementStart(27, "tr")(28, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_28_listener() {
        return ctx.tdClick(".");
      });
      ɵɵtext(29, ".");
      ɵɵelementEnd();
      ɵɵelementStart(30, "td", 1);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_30_listener() {
        return ctx.tdClick(0);
      });
      ɵɵtext(31, "0");
      ɵɵelementEnd();
      ɵɵelementStart(32, "td", 4);
      ɵɵlistener("click", function CustomKeyboardComponent_Template_td_click_32_listener() {
        return ctx.tdClick("hide");
      });
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.wrapperCls);
      ɵɵadvance(4);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("rowSpan", 2)("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(3);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("rowSpan", 2)("ngClass", ctx.wrapCls);
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.okText);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.wrapCls);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2
});
var CustomKeyboardComponent = _CustomKeyboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomKeyboardComponent, [{
    type: Component,
    args: [{
      selector: "CustomKeyboard",
      encapsulation: ViewEncapsulation$1.None,
      providers: [LocaleProviderService],
      template: `<div [ngClass]="wrapperCls">
  <table>
    <tbody>
      <tr>
        <td [ngClass]="wrapCls" (click)="tdClick(1)">1</td>
        <td [ngClass]="wrapCls" (click)="tdClick(2)">2</td>
        <td [ngClass]="wrapCls" (click)="tdClick(3)">3</td>
        <td class="keyboard-delete" [rowSpan]="2" [ngClass]="wrapCls" (click)="tdClick('delete')"></td>
      </tr>
      <tr>
        <td [ngClass]="wrapCls" (click)="tdClick(4)">4</td>
        <td [ngClass]="wrapCls" (click)="tdClick(5)">5</td>
        <td [ngClass]="wrapCls" (click)="tdClick(6)">6</td>
      </tr>
      <tr>
        <td [ngClass]="wrapCls" (click)="tdClick(7)">7</td>
        <td [ngClass]="wrapCls" (click)="tdClick(8)">8</td>
        <td [ngClass]="wrapCls" (click)="tdClick(9)">9</td>
        <td class="keyboard-confirm" [rowSpan]="2" [ngClass]="wrapCls" (click)="tdClick('confirm')">{{ okText }}</td>
      </tr>
      <tr>
        <td [ngClass]="wrapCls" (click)="tdClick('.')">.</td>
        <td [ngClass]="wrapCls" (click)="tdClick(0)">0</td>
        <td class="keyboard-hide" [ngClass]="wrapCls" (click)="tdClick('hide')"></td>
      </tr>
    </tbody>
  </table>
</div>
`
    }]
  }], () => [{
    type: LocaleProviderService
  }], {
    onClick: [{
      type: Output
    }]
  });
})();
var _CustomInputService = class _CustomInputService {
  constructor(_appRef, _cfr) {
    this._appRef = _appRef;
    this._cfr = _cfr;
    _CustomInputService.appRef = this._appRef;
    _CustomInputService._inputCompFactory = this._cfr.resolveComponentFactory(CustomKeyboardComponent);
  }
  static getShowStatus() {
    return _CustomInputService.isShow;
  }
  static showKeyboard() {
    if (!this.isShow) {
      if (this.compRef) {
        this.compRef.instance.wrapperCls = {
          [`am-number-keyboard-wrapper`]: true
        };
      } else {
        let container = document.querySelector(`#${this._keyboardPrefixCls}-container`);
        if (!container) {
          container = document.createElement("div");
          container.setAttribute("id", `${this._keyboardPrefixCls}-container`);
          document.body.appendChild(container);
          container.appendChild(document.createElement(_CustomInputService._inputCompFactory.selector));
          this.compRef = this.appRef.bootstrap(_CustomInputService._inputCompFactory);
          this.compRef.instance.onClick.subscribe((e) => {
            this.clickValue = e;
          });
        }
      }
      this.isShow = true;
    }
  }
  static hideKeyboard() {
    if (this.compRef && this.isShow) {
      this.isShow = false;
      this.compRef.instance.wrapperCls = {
        [`am-number-keyboard-wrapper`]: true,
        [`am-number-keyboard-wrapper-hide`]: true
      };
    }
  }
};
_CustomInputService.compRef = null;
_CustomInputService.appRef = null;
_CustomInputService.isShow = false;
_CustomInputService.clickValue = null;
_CustomInputService._inputCompFactory = null;
_CustomInputService._keyboardPrefixCls = "am-number-keyboard";
_CustomInputService.ɵfac = function CustomInputService_Factory(t) {
  return new (t || _CustomInputService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1));
};
_CustomInputService.ɵprov = ɵɵdefineInjectable({
  token: _CustomInputService,
  factory: _CustomInputService.ɵfac
});
var CustomInputService = _CustomInputService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomInputService, [{
    type: Injectable
  }], () => [{
    type: ApplicationRef
  }, {
    type: ComponentFactoryResolver$1
  }], null);
})();
var _CustomInputComponent = class _CustomInputComponent {
  get value() {
    return this._value;
  }
  set value(v) {
    if (typeof v === "undefined" || v === null) {
      this._value = "";
    } else if (this._maxLength !== void 0 && this._maxLength >= 0) {
      this._value = v.toString().substr(0, this._maxLength);
    } else {
      this._value = v.toString();
    }
  }
  set defaultValue(value) {
    this._defaultValue = value;
    if (!this._value) {
      this._value = this._defaultValue.toString();
    }
  }
  set maxLength(value) {
    this._maxLength = value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  set editable(value) {
    this._editable = value;
  }
  set disabled(value) {
    this._disabled = value;
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(value) {
    this._fontColor = value;
  }
  set moneyKeyboardAlign(value) {
    this._moneyKeyboardAlign = value;
    this.setContainerCls();
  }
  set setFocus(value) {
    if (value) {
      this._setFocus = value.focus;
      if (this._setFocus) {
        this.inputFocus();
      }
    }
  }
  constructor(_ref, _customInputService, _ngZone) {
    this._ref = _ref;
    this._customInputService = _customInputService;
    this._ngZone = _ngZone;
    this.keyboardPrefixCls = "am-number-keyboard";
    this.focus = false;
    this._value = "";
    this._defaultValue = "";
    this._placeholder = "";
    this._editable = true;
    this._disabled = false;
    this._setFocus = false;
    this.onChange = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.clsFakeContainer = true;
    this.inputFocus = () => {
      this.removeBlurListener();
      const focus = this.focus;
      if (!focus || this._setFocus) {
        this.onInputFocus();
      }
      setTimeout(() => {
        this.addBlurListener();
      }, 50);
    };
    this.doBlur = (ev) => {
      const value = this._value;
      let parentFound = false;
      let isInput = false;
      let isKeyboard = false;
      let isClear = false;
      let target = ev.target;
      while (target && target !== null && !parentFound) {
        if (target === this._ref.nativeElement) {
          parentFound = true;
        }
        if (target.localName === "custominput") {
          isInput = true;
        }
        if (target.localName === "customkeyboard") {
          isKeyboard = true;
        }
        if (target.className.indexOf("am-input-clear") >= 0) {
          isClear = true;
        }
        target = target.parentElement;
      }
      if (parentFound) {
        this.focus = true;
      } else if (isInput) {
        this._setFocus = false;
        this.focus = false;
        this.onBlur.emit(this._value);
      }
      if (this.focus && isKeyboard) {
        this.focus = true;
        this.onKeyboardClick(CustomInputService.clickValue);
      }
      if (!parentFound && !isInput && !isKeyboard && !isClear && !this._setFocus) {
        this.focus = false;
        this._setFocus = false;
        this.onBlur.emit(this._value);
        CustomInputService.hideKeyboard();
      }
      this.setFakeInputCls();
    };
    this.removeBlurListener = () => {
      document.removeEventListener("click", this.doBlur, false);
    };
    this.addBlurListener = () => {
      document.addEventListener("click", this.doBlur, false);
    };
    this.onInputBlur = (value) => {
      this.focus = false;
      this.setFakeInputCls();
      this.onBlur.emit(this._value);
      CustomInputService.hideKeyboard();
    };
    this.onInputFocus = () => {
      this.onFocus.emit(this._value);
      this.focus = true;
      this._setFocus = false;
      this.setFakeInputCls();
      setTimeout(() => {
        CustomInputService.showKeyboard();
      }, 100);
    };
    this.setFakeInputCls = () => {
      this.fakeInputCls = {
        [`fake-input`]: true,
        ["fake-input-disabled"]: this._disabled,
        ["focus"]: this.focus
      };
    };
    this.setContainerCls = () => {
      this.clsFakeContainerLeft = this._moneyKeyboardAlign === "left";
    };
    this.onKeyboardClick = (keyboardItemValue) => {
      if (keyboardItemValue === "." && (this._value.includes(".") || this._value === "")) {
        return;
      }
      let valueAfterChange;
      if (keyboardItemValue === "delete") {
        valueAfterChange = this._value.substring(0, this._value.length - 1);
        this.onChange.emit(valueAfterChange);
      } else if (keyboardItemValue === "confirm") {
        valueAfterChange = this._value;
        this.onChange.emit(valueAfterChange);
        this.onInputBlur(this._value);
      } else if (keyboardItemValue === "hide") {
        valueAfterChange = this._value;
        this.onInputBlur(valueAfterChange);
      } else {
        if (this._maxLength !== void 0 && +this._maxLength >= 0 && (this._value + keyboardItemValue).length > this._maxLength) {
          valueAfterChange = (this._value + keyboardItemValue).substr(0, this._maxLength);
          this.onChange.emit(valueAfterChange);
        } else {
          valueAfterChange = this._value + keyboardItemValue;
          this.onChange.emit(valueAfterChange);
        }
      }
      this._ngZone.run(() => {
        this._value = valueAfterChange;
      });
    };
  }
  onFakeInputClick() {
    if (this._preventKeyboard) {
      return;
    }
    this.inputFocus();
  }
  ngOnInit() {
    this._preventKeyboard = this._disabled || !this._editable;
    this.setFakeInputCls();
    this.setContainerCls();
  }
  ngOnDestroy() {
    this.removeBlurListener();
    if (CustomInputService) {
      CustomInputService.hideKeyboard();
      CustomInputService.compRef = null;
    }
    const container = document.querySelector(`#${this.keyboardPrefixCls}-container`);
    if (container) {
      container.remove();
    }
  }
};
_CustomInputComponent.ɵfac = function CustomInputComponent_Factory(t) {
  return new (t || _CustomInputComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(CustomInputService), ɵɵdirectiveInject(NgZone));
};
_CustomInputComponent.ɵcmp = ɵɵdefineComponent({
  type: _CustomInputComponent,
  selectors: [["CustomInput"]],
  hostVars: 4,
  hostBindings: function CustomInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("fake-input-container", ctx.clsFakeContainer)("fake-input-container-left", ctx.clsFakeContainerLeft);
    }
  },
  inputs: {
    value: "value",
    defaultValue: "defaultValue",
    maxLength: "maxLength",
    placeholder: "placeholder",
    editable: "editable",
    disabled: "disabled",
    fontColor: "fontColor",
    moneyKeyboardAlign: "moneyKeyboardAlign",
    setFocus: "setFocus"
  },
  outputs: {
    onChange: "onChange",
    onBlur: "onBlur",
    onFocus: "onFocus"
  },
  features: [ɵɵProvidersFeature([CustomInputService])],
  decls: 3,
  vars: 5,
  consts: [["class", "fake-input-placeholder", 4, "ngIf"], [3, "ngClass", "click"], [1, "fake-input-placeholder"]],
  template: function CustomInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CustomInputComponent_div_0_Template, 2, 1, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵlistener("click", function CustomInputComponent_Template_div_click_1_listener() {
        return ctx.onFakeInputClick();
      });
      ɵɵtext(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.value === "");
      ɵɵadvance(1);
      ɵɵstyleProp("color", ctx.fontColor);
      ɵɵproperty("ngClass", ctx.fakeInputCls);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.value, "\n");
    }
  },
  dependencies: [NgClass, NgIf],
  encapsulation: 2
});
var CustomInputComponent = _CustomInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomInputComponent, [{
    type: Component,
    args: [{
      selector: "CustomInput",
      encapsulation: ViewEncapsulation$1.None,
      providers: [CustomInputService],
      template: `<div *ngIf="value === ''" class="fake-input-placeholder">
  {{ placeholder }}
</div>
<div [ngClass]="fakeInputCls" [style.color]="fontColor" (click)="onFakeInputClick()">
  {{ value }}
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: CustomInputService
  }, {
    type: NgZone
  }], {
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fontColor: [{
      type: Input
    }],
    moneyKeyboardAlign: [{
      type: Input
    }],
    setFocus: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    clsFakeContainer: [{
      type: HostBinding,
      args: ["class.fake-input-container"]
    }],
    clsFakeContainerLeft: [{
      type: HostBinding,
      args: ["class.fake-input-container-left"]
    }]
  });
})();
var _InputItemComponent = class _InputItemComponent {
  get type() {
    return this._type;
  }
  set type(value) {
    if (value && value.length > 0) {
      this.inputType = value;
      if (value === "bankCard" || value === "phone") {
        this._type = "tel";
      } else if (value === "password") {
        this._type = "password";
      } else if (value === "digit") {
        this._type = "number";
      } else {
        this._type = value;
      }
      if (value === "number") {
        this._type = "text";
        this.pattern = "[0-9]*";
      }
    }
  }
  get value() {
    return this._value;
  }
  set value(v) {
    if (typeof v === "undefined" || v === null) {
      this._value = "";
    } else {
      this._value = v;
    }
  }
  get defaultValue() {
    return this._defaultValue;
  }
  set defaultValue(value) {
    this._defaultValue = value;
    if (!this._value) {
      this._value = this._defaultValue;
    }
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get editable() {
    return this._editable;
  }
  set editable(value) {
    this._editable = value;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.clsDisabled = value;
  }
  get clear() {
    return this._clear;
  }
  set clear(value) {
    this._clear = value;
  }
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(value) {
    this._maxLength = value;
  }
  get error() {
    return this._error;
  }
  set error(value) {
    this._error = value;
    this.clsError = value;
  }
  get extra() {
    return this._extra;
  }
  set extra(value) {
    if (value instanceof TemplateRef) {
      this.ngTemplate = true;
    } else {
      this.ngTemplate = false;
    }
    this._extra = value;
  }
  set labelNumber(value) {
    this._labelNumber = value;
    this.setCls();
  }
  set updatePlaceholder(value) {
    this._updatePlaceholder = value;
  }
  get prefixListCls() {
    return this._prefixListCls;
  }
  set prefixListCls(value) {
    this._prefixListCls = value;
    this.render.addClass(this._el, value + "-item");
    this.render.addClass(this._el, value + "-item-middle");
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get moneyKeyboardAlign() {
    return this._moneyKeyboardAlign;
  }
  set moneyKeyboardAlign(value) {
    this._moneyKeyboardAlign = value;
  }
  set locale(value) {
    this._locale = value;
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(value) {
    this._fontColor = value;
  }
  set focus(value) {
    if (value && value.focus) {
      this.autoFocus = value.focus;
      if (this._type === "money") {
        this.setFocus = value;
      } else if (this.inputElementRef) {
        this._focus = true;
        this.inputElementRef.nativeElement.focus();
        this.inputFocus("");
      }
    }
  }
  get content() {
    return this._content;
  }
  set content(value) {
    this._content = value;
    this.setCls();
  }
  constructor(element, render) {
    this.element = element;
    this.render = render;
    this.prefixCls = "am-input";
    this.setFocus = {};
    this.pattern = "";
    this.autoFocus = false;
    this.inputType = "text";
    this.ngTemplate = false;
    this.isTemplateRef = isTemplateRef;
    this._type = "text";
    this._defaultValue = "";
    this._placeholder = "";
    this._editable = true;
    this._disabled = false;
    this._clear = false;
    this._error = false;
    this._extra = "";
    this._labelNumber = 5;
    this._updatePlaceholder = false;
    this._prefixListCls = "am-list";
    this._moneyKeyboardAlign = "right";
    this._focus = false;
    this._isClear = false;
    this._content = "";
    this._inputLock = false;
    this.compositionFilter = true;
    this.onChange = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onErrorClick = new EventEmitter();
    this.onExtraClick = new EventEmitter();
    this.clsItem = true;
    this.clsDisabled = this._disabled;
    this.clsError = this._error;
    this.clsFocus = this._focus;
    this.clsAndroid = this._focus;
    this._onChange = (_) => {
    };
    this._el = element.nativeElement;
  }
  setCls() {
    if (this.lableRef.nativeElement.children.length > 0 || this.lableRef.nativeElement && this.lableRef.nativeElement.innerText !== "" || this._content != void 0) {
      this.labelCls = {
        [`${this.prefixCls}-label`]: true,
        [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
        [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
        [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
        [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
        [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
        [`${this.prefixCls}-label-7`]: this._labelNumber === 7
      };
    }
    this.controlCls = {
      [`${this.prefixCls}-control`]: true
    };
  }
  inputChange(inputValue) {
    setTimeout(() => {
      if (this.compositionFilter && this._inputLock && this.inputType === "text") {
        return;
      }
      let value = inputValue;
      switch (this.inputType) {
        case "bankCard":
          value = value.replace(/\D/g, "").replace(/(....)(?=.)/g, "$1 ");
          break;
        case "phone":
          value = value.replace(/\D/g, "").substring(0, 11);
          const valueLen = value.length;
          if (valueLen > 3 && valueLen < 8) {
            value = `${value.substr(0, 3)} ${value.substr(3)}`;
          } else if (valueLen >= 8) {
            value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
          }
          break;
        case "number":
          value = value.replace(/\D/g, "");
          break;
      }
      if (this.inputType !== "text") {
        this._value = value;
      }
      this._onChange(this._value);
      this.onChange.emit(this._value);
    }, 0);
  }
  compositionStart() {
    this._inputLock = true;
  }
  compositionEnd() {
    this._inputLock = false;
  }
  inputFocus(value) {
    if (!this._editable && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setTimeout(() => {
      this._focus = true;
      this.clsFocus = true;
      this.clsAndroid = true;
    }, 100);
    this.onFocus.emit(value);
  }
  inputBlur(value) {
    setTimeout(() => {
      if (!this._isClear) {
        this._focus = false;
        this.clsFocus = false;
        this.clsAndroid = false;
        this.onBlur.emit(value);
      }
      this._isClear = false;
    }, 100);
  }
  clearInput() {
    if (this._type !== "password" && this._updatePlaceholder) {
      this._placeholder = this._value;
    }
    this._value = "";
    this.onChange.emit(this._value);
    this._onChange(this._value);
    this._isClear = true;
    this.inputFocus(this._value);
  }
  errorClick(e) {
    if (this.onErrorClick) {
      this.onErrorClick.emit(e);
    }
  }
  extraClick(e) {
    if (this.onExtraClick) {
      this.onExtraClick.emit(e);
    }
  }
  writeValue(value) {
    if (typeof value === void 0 || value === null) {
      this._value = "";
    } else {
      this._value = value;
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
  }
  ngOnInit() {
    this.setCls();
    this.render.addClass(this._el, this._prefixListCls + "-item");
    this.render.addClass(this._el, this._prefixListCls + "-item-middle");
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.setCls();
    }, 0);
  }
};
_InputItemComponent.ɵfac = function InputItemComponent_Factory(t) {
  return new (t || _InputItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_InputItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _InputItemComponent,
  selectors: [["InputItem"], ["nzm-input-item"]],
  viewQuery: function InputItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c03, 7);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lableRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElementRef = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function InputItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-input-item", ctx.clsItem)("am-input-disabled", ctx.clsDisabled)("am-input-error", ctx.clsError)("am-input-focus", ctx.clsFocus)("am-input-android,", ctx.clsAndroid);
    }
  },
  inputs: {
    type: "type",
    value: "value",
    defaultValue: "defaultValue",
    placeholder: "placeholder",
    editable: "editable",
    disabled: "disabled",
    clear: "clear",
    maxLength: "maxLength",
    error: "error",
    extra: "extra",
    labelNumber: "labelNumber",
    updatePlaceholder: "updatePlaceholder",
    prefixListCls: "prefixListCls",
    name: "name",
    moneyKeyboardAlign: "moneyKeyboardAlign",
    locale: "locale",
    fontColor: "fontColor",
    focus: "focus",
    content: "content",
    compositionFilter: "compositionFilter"
  },
  outputs: {
    onChange: "onChange",
    onBlur: "onBlur",
    onFocus: "onFocus",
    onErrorClick: "onErrorClick",
    onExtraClick: "onExtraClick"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _InputItemComponent),
    multi: true
  }])],
  decls: 11,
  vars: 12,
  consts: [[3, "ngClass"], ["lableContent", ""], [4, "ngIf"], [3, "value", "defaultValue", "placeholder", "disabled", "editable", "fontColor", "moneyKeyboardAlign", "setFocus", "maxLength", "onChange", "onBlur", "onFocus", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "value", "defaultValue", "placeholder", "disabled", "editable", "fontColor", "moneyKeyboardAlign", "setFocus", "maxLength", "onChange", "onBlur", "onFocus"], [2, "outline", "none", 3, "type", "name", "ngModel", "defaultValue", "placeholder", "disabled", "readOnly", "autofocus", "maxlength", "pattern", "ngModelChange", "compositionstart", "compositionend", "blur", "focus"], ["inputElement", ""], [3, "click"]],
  template: function InputItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div", 0, 1);
      ɵɵtemplate(3, InputItemComponent_3_Template, 1, 1, null, 2)(4, InputItemComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 0);
      ɵɵtemplate(6, InputItemComponent_CustomInput_6_Template, 1, 9, "CustomInput", 3)(7, InputItemComponent_div_7_Template, 3, 12, "div", 2);
      ɵɵelementEnd();
      ɵɵtemplate(8, InputItemComponent_div_8_Template, 1, 3, "div", 4)(9, InputItemComponent_div_9_Template, 1, 3, "div", 4)(10, InputItemComponent_div_10_Template, 3, 5, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixListCls, "-line");
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.labelCls);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.content));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.content));
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.controlCls);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.type === "money");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.type !== "money");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.clear && ctx.editable && !ctx.disabled && ctx.value && ctx.value.length > 0);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.error);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.extra !== "");
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, PatternValidator, NgModel, CustomInputComponent],
  encapsulation: 2
});
var InputItemComponent = _InputItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputItemComponent, [{
    type: Component,
    args: [{
      selector: "InputItem, nzm-input-item",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputItemComponent),
        multi: true
      }],
      template: `<div class="{{ prefixListCls }}-line">
  <div #lableContent [ngClass]="labelCls">
    <ng-template *ngIf="isTemplateRef(content)" [ngTemplateOutlet]="content"></ng-template>
    <ng-container *ngIf="!isTemplateRef(content)">{{ content }}</ng-container>
  </div>
  <div [ngClass]="controlCls">
    <CustomInput
      *ngIf="type === 'money'"
      [value]="value"
      [defaultValue]="defaultValue"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [editable]="editable"
      [fontColor]="fontColor"
      [moneyKeyboardAlign]="moneyKeyboardAlign"
      [setFocus]="setFocus"
      [maxLength]="maxLength"
      (onChange)="inputChange($event)"
      (onBlur)="inputBlur(value)"
      (onFocus)="inputFocus(value)"
    >
    </CustomInput>
    <div *ngIf="type !== 'money'">
      <input
        #inputElement
        style="outline:none"
        [type]="type"
        [name]="name"
        [(ngModel)]="value"
        [defaultValue]="defaultValue"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readOnly]="!editable"
        [autofocus]="autoFocus"
        [maxlength]="maxLength"
        [pattern]="pattern"
        [style.color]="fontColor"
        (ngModelChange)="inputChange($event)"
        (compositionstart)="compositionStart()"
        (compositionend)="compositionEnd()"
        (blur)="inputBlur(value)"
        (focus)="inputFocus(value)"
      />
    </div>
  </div>
  <div
    *ngIf="clear && editable && !disabled && (value && value.length > 0)"
    class="{{ prefixCls }}-clear"
    (click)="clearInput()"
  ></div>
  <div *ngIf="error" class="{{ prefixCls }}-error-extra" (click)="errorClick($event)"></div>
  <div *ngIf="extra !== ''" class="{{ prefixCls }}-extra" (click)="extraClick($event)">
    <ng-container *ngIf="!ngTemplate">{{ extra }}</ng-container>
    <ng-template *ngIf="ngTemplate" [ngTemplateOutlet]="extra"></ng-template>
  </div>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    lableRef: [{
      type: ViewChild,
      args: ["lableContent", {
        static: true
      }]
    }],
    inputElementRef: [{
      type: ViewChild,
      args: ["inputElement"]
    }],
    type: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    clear: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    labelNumber: [{
      type: Input
    }],
    updatePlaceholder: [{
      type: Input
    }],
    prefixListCls: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    moneyKeyboardAlign: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    fontColor: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    compositionFilter: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onErrorClick: [{
      type: Output
    }],
    onExtraClick: [{
      type: Output
    }],
    clsItem: [{
      type: HostBinding,
      args: ["class.am-input-item"]
    }],
    clsDisabled: [{
      type: HostBinding,
      args: ["class.am-input-disabled"]
    }],
    clsError: [{
      type: HostBinding,
      args: ["class.am-input-error"]
    }],
    clsFocus: [{
      type: HostBinding,
      args: ["class.am-input-focus"]
    }],
    clsAndroid: [{
      type: HostBinding,
      args: ["class.am-input-android,"]
    }]
  });
})();
var _InputItemModule = class _InputItemModule {
};
_InputItemModule.ɵfac = function InputItemModule_Factory(t) {
  return new (t || _InputItemModule)();
};
_InputItemModule.ɵmod = ɵɵdefineNgModule({
  type: _InputItemModule,
  declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent]
});
_InputItemModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
});
var InputItemModule = _InputItemModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputItemModule, [{
    type: NgModule,
    args: [{
      exports: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
      declarations: [InputItemComponent, CustomKeyboardComponent, CustomInputComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-icon.mjs
var _c04 = (a0) => ({
  color: a0
});
function IconComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2);
    ɵɵelement(1, "use", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.clsMap)("ngStyle", ɵɵpureFunction1(3, _c04, ctx_r0.color));
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("href", "#", ctx_r0.type, "", null, "xlink");
  }
}
function IconComponent_img_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("src", ctx_r1.src, ɵɵsanitizeUrl);
    ɵɵproperty("ngClass", ctx_r1.clsMap);
  }
}
var _c12 = ["*"];
var _IconComponent = class _IconComponent {
  get type() {
    return this._type;
  }
  set type(value) {
    this._type = value;
    this.setClsMap();
  }
  get src() {
    return this._src;
  }
  set src(value) {
    this._src = value;
    this.setClsMap();
  }
  get size() {
    return this._size;
  }
  set size(value) {
    this._size = value;
    this.setClsMap();
  }
  constructor(_iconHandler) {
    this._iconHandler = _iconHandler;
    this.clsMap = {};
    this._type = "";
    this._size = "md";
    this._src = "";
    this.color = "";
    this._iconHandler.load();
  }
  setClsMap() {
    this.clsMap = {
      [`am-icon-${this._type}`]: true,
      [`am-icon-${this._size}`]: true
    };
  }
};
_IconComponent.ɵfac = function IconComponent_Factory(t) {
  return new (t || _IconComponent)(ɵɵdirectiveInject(IconHandler));
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["Icon"], ["nzm-icon"]],
  inputs: {
    color: "color",
    type: "type",
    src: "src",
    size: "size"
  },
  features: [ɵɵProvidersFeature([IconHandler])],
  ngContentSelectors: _c12,
  decls: 3,
  vars: 2,
  consts: [["class", "am-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "am-icon", 3, "src", "ngClass", 4, "ngIf"], [1, "am-icon", 3, "ngClass", "ngStyle"], [0, "xmlns", "xlink", "https://www.w3.org/1999/xlink"], [1, "am-icon", 3, "src", "ngClass"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, IconComponent__svg_svg_0_Template, 2, 5, "svg", 0)(1, IconComponent_img_1_Template, 1, 2, "img", 1);
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.type);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.src);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle],
  encapsulation: 2
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      selector: "Icon, nzm-icon",
      encapsulation: ViewEncapsulation$1.None,
      providers: [IconHandler],
      template: '<svg *ngIf="type" class="am-icon" [ngClass]="clsMap" [ngStyle]="{ color: color }">\n  <use xmlns:xlink="https://www.w3.org/1999/xlink" attr.xlink:href="#{{ type }}"></use>\n</svg>\n<img *ngIf="src" src="{{ src }}" class="am-icon" [ngClass]="clsMap" />\n<ng-content></ng-content>\n'
    }]
  }], () => [{
    type: IconHandler
  }], {
    color: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    src: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(t) {
  return new (t || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  declarations: [IconComponent],
  imports: [CommonModule],
  exports: [IconComponent]
});
_IconModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [IconComponent],
      declarations: [IconComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-wing-blank.mjs
var _c05 = ["*"];
var _WingBlankComponent = class _WingBlankComponent {
  get amWingBlnkSm() {
    return this.size === "sm";
  }
  get amWingBlnkMd() {
    return this.size === "md";
  }
  get amWingBlnkLg() {
    return this.size === "lg";
  }
  constructor() {
    this.prefixCls = "am-wingblank";
    this.size = "lg";
    this.amWingBlank = true;
  }
};
_WingBlankComponent.ɵfac = function WingBlankComponent_Factory(t) {
  return new (t || _WingBlankComponent)();
};
_WingBlankComponent.ɵcmp = ɵɵdefineComponent({
  type: _WingBlankComponent,
  selectors: [["WingBlank"], ["nzm-wingblank"]],
  hostVars: 8,
  hostBindings: function WingBlankComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-wingblank", ctx.amWingBlank)("am-wingblank-sm", ctx.amWingBlnkSm)("am-wingblank-md", ctx.amWingBlnkMd)("am-wingblank-lg", ctx.amWingBlnkLg);
    }
  },
  inputs: {
    size: "size"
  },
  ngContentSelectors: _c05,
  decls: 1,
  vars: 0,
  template: function WingBlankComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var WingBlankComponent = _WingBlankComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WingBlankComponent, [{
    type: Component,
    args: [{
      selector: "WingBlank, nzm-wingblank",
      encapsulation: ViewEncapsulation$1.None,
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [], {
    size: [{
      type: Input
    }],
    amWingBlank: [{
      type: HostBinding,
      args: ["class.am-wingblank"]
    }],
    amWingBlnkSm: [{
      type: HostBinding,
      args: ["class.am-wingblank-sm"]
    }],
    amWingBlnkMd: [{
      type: HostBinding,
      args: ["class.am-wingblank-md"]
    }],
    amWingBlnkLg: [{
      type: HostBinding,
      args: ["class.am-wingblank-lg"]
    }]
  });
})();
var _WingBlankModule = class _WingBlankModule {
};
_WingBlankModule.ɵfac = function WingBlankModule_Factory(t) {
  return new (t || _WingBlankModule)();
};
_WingBlankModule.ɵmod = ɵɵdefineNgModule({
  type: _WingBlankModule,
  declarations: [WingBlankComponent],
  imports: [CommonModule],
  exports: [WingBlankComponent]
});
_WingBlankModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var WingBlankModule = _WingBlankModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WingBlankModule, [{
    type: NgModule,
    args: [{
      declarations: [WingBlankComponent],
      exports: [WingBlankComponent],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-white-space.mjs
var _WhiteSpaceComponent = class _WhiteSpaceComponent {
  get amWhitespaceXs() {
    return this.size === "xs";
  }
  get amWhitespaceSm() {
    return this.size === "sm";
  }
  get amWhitespaceMd() {
    return this.size === "md";
  }
  get amWhitespaceLg() {
    return this.size === "lg";
  }
  get amWhitespaceXl() {
    return this.size === "xl";
  }
  constructor() {
    this.prefixCls = "am-whitespace";
    this.size = "md";
    this.amWhiteSpace = true;
  }
};
_WhiteSpaceComponent.ɵfac = function WhiteSpaceComponent_Factory(t) {
  return new (t || _WhiteSpaceComponent)();
};
_WhiteSpaceComponent.ɵcmp = ɵɵdefineComponent({
  type: _WhiteSpaceComponent,
  selectors: [["WhiteSpace"], ["nzm-whitespace"]],
  hostVars: 12,
  hostBindings: function WhiteSpaceComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-whitespace", ctx.amWhiteSpace)("am-whitespace-xs", ctx.amWhitespaceXs)("am-whitespace-sm", ctx.amWhitespaceSm)("am-whitespace-md", ctx.amWhitespaceMd)("am-whitespace-lg", ctx.amWhitespaceLg)("am-whitespace-xl", ctx.amWhitespaceXl);
    }
  },
  inputs: {
    size: "size"
  },
  decls: 0,
  vars: 0,
  template: function WhiteSpaceComponent_Template(rf, ctx) {
  },
  encapsulation: 2
});
var WhiteSpaceComponent = _WhiteSpaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhiteSpaceComponent, [{
    type: Component,
    args: [{
      selector: "WhiteSpace, nzm-whitespace",
      template: ``
    }]
  }], () => [], {
    size: [{
      type: Input
    }],
    amWhiteSpace: [{
      type: HostBinding,
      args: ["class.am-whitespace"]
    }],
    amWhitespaceXs: [{
      type: HostBinding,
      args: ["class.am-whitespace-xs"]
    }],
    amWhitespaceSm: [{
      type: HostBinding,
      args: ["class.am-whitespace-sm"]
    }],
    amWhitespaceMd: [{
      type: HostBinding,
      args: ["class.am-whitespace-md"]
    }],
    amWhitespaceLg: [{
      type: HostBinding,
      args: ["class.am-whitespace-lg"]
    }],
    amWhitespaceXl: [{
      type: HostBinding,
      args: ["class.am-whitespace-xl"]
    }]
  });
})();
var _WhiteSpaceModule = class _WhiteSpaceModule {
};
_WhiteSpaceModule.ɵfac = function WhiteSpaceModule_Factory(t) {
  return new (t || _WhiteSpaceModule)();
};
_WhiteSpaceModule.ɵmod = ɵɵdefineNgModule({
  type: _WhiteSpaceModule,
  declarations: [WhiteSpaceComponent],
  imports: [CommonModule],
  exports: [WhiteSpaceComponent]
});
_WhiteSpaceModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var WhiteSpaceModule = _WhiteSpaceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhiteSpaceModule, [{
    type: NgModule,
    args: [{
      declarations: [WhiteSpaceComponent],
      exports: [WhiteSpaceComponent],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-list.mjs
function ListComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-header");
    ɵɵproperty("innerHTML", ctx_r0.renderHeader, ɵɵsanitizeHtml);
  }
}
function ListComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-header");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.renderHeader(), "\n");
  }
}
function ListComponent_2_ng_template_0_Template(rf, ctx) {
}
function ListComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.renderHeader);
  }
}
function ListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r3.defaultProps.prefixCls, "-footer");
    ɵɵproperty("innerHTML", ctx_r3.renderFooter, ɵɵsanitizeHtml);
  }
}
function ListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r4.defaultProps.prefixCls, "-footer");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.renderFooter(), "\n");
  }
}
function ListComponent_7_ng_template_0_Template(rf, ctx) {
}
function ListComponent_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_7_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.renderFooter);
  }
}
var _c06 = ["*"];
function ListItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "img", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-thumb");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("src", ctx_r0.thumb_src, ɵɵsanitizeUrl);
  }
}
function ListItemComponent_div_1_ng_template_1_Template(rf, ctx) {
}
function ListItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ListItemComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-thumb");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.thumb);
  }
}
function ListItemComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.defaultProps.prefixCls, "-extra");
    ɵɵproperty("innerHTML", ctx_r2.extra_title, ɵɵsanitizeHtml);
  }
}
function ListItemComponent_div_6_ng_template_1_Template(rf, ctx) {
}
function ListItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ListItemComponent_div_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r3.defaultProps.prefixCls, "-extra");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.extra);
  }
}
function ListItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.arrowCls);
  }
}
var _ListComponent = class _ListComponent {
  set className(value) {
    this._className = value;
  }
  get renderHeader() {
    return this._renderHeader;
  }
  set renderHeader(value) {
    if (value instanceof TemplateRef) {
      this.renderHeaderType = "templateRef";
    } else {
      this.renderHeaderType = typeof value;
    }
    this._renderHeader = value;
  }
  get renderFooter() {
    return this._renderFooter;
  }
  set renderFooter(value) {
    if (value instanceof TemplateRef) {
      this.renderFooterType = "templateRef";
    } else {
      this.renderFooterType = typeof value;
    }
    this._renderFooter = value;
  }
  get hostClassName() {
    return "am-list " + this._className;
  }
  constructor() {
    this.defaultProps = {
      prefixCls: "am-list"
    };
    this.renderHeaderType = "";
    this.renderFooterType = "";
    this._renderHeader = "";
    this._renderFooter = "";
    this._className = "";
  }
};
_ListComponent.ɵfac = function ListComponent_Factory(t) {
  return new (t || _ListComponent)();
};
_ListComponent.ɵcmp = ɵɵdefineComponent({
  type: _ListComponent,
  selectors: [["List"], ["nzm-list"]],
  hostVars: 2,
  hostBindings: function ListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.hostClassName);
    }
  },
  inputs: {
    className: "className",
    renderHeader: "renderHeader",
    renderFooter: "renderFooter"
  },
  ngContentSelectors: _c06,
  decls: 8,
  vars: 9,
  consts: [[3, "class", "innerHTML", 4, "ngIf"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML"], [3, "ngTemplateOutlet"]],
  template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ListComponent_div_0_Template, 1, 4, "div", 0)(1, ListComponent_div_1_Template, 2, 4, "div", 1)(2, ListComponent_2_Template, 1, 1, null, 2);
      ɵɵelementStart(3, "div");
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, ListComponent_div_5_Template, 1, 4, "div", 0)(6, ListComponent_div_6_Template, 2, 4, "div", 1)(7, ListComponent_7_Template, 1, 1, null, 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "string");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "function");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.renderHeader && ctx.renderHeaderType === "templateRef");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-body");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "string");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "function");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.renderFooter && ctx.renderFooterType === "templateRef");
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var ListComponent = _ListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "List, nzm-list",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div
  *ngIf="renderHeader && renderHeaderType === 'string'"
  class="{{ defaultProps.prefixCls }}-header"
  [innerHTML]="renderHeader"
></div>
<div *ngIf="renderHeader && renderHeaderType === 'function'" class="{{ defaultProps.prefixCls }}-header">
  {{ renderHeader() }}
</div>
<ng-template *ngIf="renderHeader && renderHeaderType === 'templateRef'" [ngTemplateOutlet]="renderHeader">
</ng-template>
<div class="{{ defaultProps.prefixCls }}-body">
  <ng-content></ng-content>
</div>
<div
  *ngIf="renderFooter && renderFooterType === 'string'"
  class="{{ defaultProps.prefixCls }}-footer"
  [innerHTML]="renderFooter"
></div>
<div *ngIf="renderFooter && renderFooterType === 'function'" class="{{ defaultProps.prefixCls }}-footer">
  {{ renderFooter() }}
</div>
<ng-template *ngIf="renderFooter && renderFooterType === 'templateRef'" [ngTemplateOutlet]="renderFooter">
</ng-template>
`
    }]
  }], () => [], {
    className: [{
      type: Input
    }],
    renderHeader: [{
      type: Input
    }],
    renderFooter: [{
      type: Input
    }],
    hostClassName: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _ListItemComponent = class _ListItemComponent {
  get extra() {
    return this._extra;
  }
  get extra_component() {
    return this._extra_component;
  }
  get extra_title() {
    return this._extra_title;
  }
  set extra(value) {
    if (value instanceof TemplateRef) {
      this._extra_component = true;
      this._extra = value;
    } else {
      this._extra_component = false;
      this._extra_title = value;
    }
  }
  set className(value) {
    this._className = value;
    this.setClsMap();
  }
  get arrow() {
    return this._arrow;
  }
  set arrow(value) {
    this._arrow = value;
    this.setClsMap();
  }
  set multipleLine(value) {
    this.defaultProps.multipleLine = value === "" ? true : value;
    this.setClsMap();
  }
  set error(value) {
    this.defaultProps.error = value === "" ? true : value;
    this.setClsMap();
  }
  set wrap(value) {
    this.defaultProps.wrap = value === "" ? true : value;
    this.setClsMap();
  }
  set align(value) {
    this.defaultProps.align = value;
    this.setClsMap();
  }
  set platform(value) {
    this.defaultProps.platform = value;
  }
  set disabled(value) {
    if (typeof value === "boolean") {
      this._disabled = value;
    } else {
      if (value === "true") {
        this._disabled = true;
      } else {
        this._disabled = false;
      }
    }
    this.setClsMap();
  }
  get thumb() {
    return this._thumb;
  }
  get thumb_component() {
    return this._thumb_component;
  }
  get thumb_src() {
    return this._thumb_src;
  }
  set thumb(value) {
    if (value instanceof TemplateRef) {
      this._thumb_component = true;
      this._thumb = value;
    } else {
      this._thumb_component = false;
      this._thumb_src = value;
    }
  }
  get bingClassName() {
    return this.wrapCls;
  }
  click(event) {
    this.onItemClick(event);
  }
  start() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = true;
      this.setClsMap();
    }
  }
  move() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }
  end() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }
  mouse_start() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = true;
      this.setClsMap();
    }
  }
  mouse_end() {
    if (!this._disabled && this.onClick.observers.length > 0) {
      this._active = false;
      this.setClsMap();
    }
  }
  constructor() {
    this.defaultProps = {
      prefixCls: "am-list",
      align: "middle",
      error: false,
      multipleLine: false,
      wrap: false,
      platform: "ios",
      rippleStyle: {}
    };
    this.arrowCls = {};
    this.lineCls = {};
    this.wrapCls = "";
    this.rippleCls = {};
    this.rippleClicked = false;
    this._thumb_component = false;
    this._thumb_src = "";
    this._extra_component = false;
    this._extra_title = "";
    this._arrow = "";
    this._disabled = false;
    this._className = "";
    this._active = false;
    this.onClick = new EventEmitter();
  }
  setClsMap() {
    const classNameList = this._className.split(" ");
    let classNameObj = {};
    this.wrapCls = "";
    for (const value of classNameList) {
      if (value) {
        classNameObj = __spreadValues(__spreadValues({}, classNameObj), {
          [`${value}`]: true
        });
      }
    }
    const wrapClsObj = __spreadValues({
      [`${this.defaultProps.prefixCls}-item`]: true,
      [`${this.defaultProps.prefixCls}-item-disabled`]: this._disabled,
      [`${this.defaultProps.prefixCls}-item-active`]: this._active,
      [`${this.defaultProps.prefixCls}-item-error`]: this.defaultProps.error,
      [`${this.defaultProps.prefixCls}-item-top`]: this.defaultProps.align === "top",
      [`${this.defaultProps.prefixCls}-item-middle`]: this.defaultProps.align === "middle",
      [`${this.defaultProps.prefixCls}-item-bottom`]: this.defaultProps.align === "bottom"
    }, classNameObj);
    for (const key in wrapClsObj) {
      if (wrapClsObj[key]) {
        this.wrapCls += ` ${key}`;
      }
    }
    this.rippleCls = {
      [`${this.defaultProps.prefixCls}-ripple`]: true,
      [`${this.defaultProps.prefixCls}-ripple-animate`]: this.rippleClicked
    };
    this.lineCls = {
      [`${this.defaultProps.prefixCls}-line`]: true,
      [`${this.defaultProps.prefixCls}-line-multiple`]: this.defaultProps.multipleLine,
      [`${this.defaultProps.prefixCls}-line-wrap`]: this.defaultProps.wrap
    };
    this.arrowCls = {
      [`${this.defaultProps.prefixCls}-arrow`]: true,
      [`${this.defaultProps.prefixCls}-arrow-horizontal`]: this._arrow === "horizontal",
      [`${this.defaultProps.prefixCls}-arrow-vertical`]: this._arrow === "down" || this._arrow === "up",
      [`${this.defaultProps.prefixCls}-arrow-vertical-up`]: this._arrow === "up"
    };
  }
  onItemClick(ev) {
    const isAndroid = this.defaultProps.platform === "android";
    if (isAndroid) {
      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
        this.debounceTimeout = null;
      }
      const Item = ev.currentTarget;
      const RippleWidth = Math.max(Item.offsetHeight, Item.offsetWidth);
      const ClientRect = ev.currentTarget.getBoundingClientRect();
      const pointX = ev.clientX - ClientRect.left - Item.offsetWidth / 2;
      const pointY = ev.clientY - ClientRect.top - Item.offsetWidth / 2;
      const coverRippleStyle = {
        width: `${RippleWidth}px`,
        height: `${RippleWidth}px`,
        left: `${pointX}px`,
        top: `${pointY}px`
      };
      this.defaultProps.rippleStyle = coverRippleStyle;
      this.rippleClicked = true;
      this.setClsMap();
      this.debounceTimeout = setTimeout(() => {
        this.rippleClicked = false;
        this.defaultProps.rippleStyle = {
          display: "none"
        };
        this.setClsMap();
      }, 1e3);
    }
    this.onClick.emit(ev);
  }
  ngOnInit() {
    this.defaultProps.rippleStyle = {
      display: "none"
    };
    this.setClsMap();
  }
  ngOnDestroy() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = null;
    }
  }
};
_ListItemComponent.ɵfac = function ListItemComponent_Factory(t) {
  return new (t || _ListItemComponent)();
};
_ListItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _ListItemComponent,
  selectors: [["ListItem"], ["nzm-list-item"]],
  hostVars: 2,
  hostBindings: function ListItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function ListItemComponent_click_HostBindingHandler($event) {
        return ctx.click($event);
      })("touchstart", function ListItemComponent_touchstart_HostBindingHandler() {
        return ctx.start();
      })("touchmove", function ListItemComponent_touchmove_HostBindingHandler() {
        return ctx.move();
      })("touchend", function ListItemComponent_touchend_HostBindingHandler() {
        return ctx.end();
      })("mousedown", function ListItemComponent_mousedown_HostBindingHandler() {
        return ctx.mouse_start();
      })("mouseup", function ListItemComponent_mouseup_HostBindingHandler() {
        return ctx.mouse_end();
      });
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.bingClassName);
    }
  },
  inputs: {
    extra: "extra",
    className: "className",
    arrow: "arrow",
    multipleLine: "multipleLine",
    error: "error",
    wrap: "wrap",
    align: "align",
    platform: "platform",
    disabled: "disabled",
    thumb: "thumb"
  },
  outputs: {
    onClick: "onClick"
  },
  ngContentSelectors: _c06,
  decls: 9,
  vars: 11,
  consts: [[3, "class", 4, "ngIf"], [3, "ngClass"], [3, "class", "innerHTML", 4, "ngIf"], ["aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [3, "ngClass", "ngStyle"], [3, "src"], [3, "ngTemplateOutlet"], [3, "innerHTML"], ["aria-hidden", "true", 3, "ngClass"]],
  template: function ListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ListItemComponent_div_0_Template, 2, 4, "div", 0)(1, ListItemComponent_div_1_Template, 2, 4, "div", 0);
      ɵɵelementStart(2, "div", 1)(3, "div");
      ɵɵprojection(4);
      ɵɵelementEnd();
      ɵɵtemplate(5, ListItemComponent_div_5_Template, 1, 4, "div", 2)(6, ListItemComponent_div_6_Template, 2, 4, "div", 0)(7, ListItemComponent_div_7_Template, 1, 1, "div", 3);
      ɵɵelementEnd();
      ɵɵelement(8, "div", 4);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.thumb_src && !ctx.thumb_component);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.thumb && ctx.thumb_component);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.lineCls);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-content");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.extra_title && !ctx.extra_component);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.extra && ctx.extra_component);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.arrow);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.rippleCls)("ngStyle", ctx.defaultProps.rippleStyle);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var ListItemComponent = _ListItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListItemComponent, [{
    type: Component,
    args: [{
      selector: "ListItem, nzm-list-item",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div *ngIf="thumb_src && !thumb_component" class="{{ defaultProps.prefixCls }}-thumb">\n  <img src="{{ thumb_src }}" />\n</div>\n<div *ngIf="thumb && thumb_component" class="{{ defaultProps.prefixCls }}-thumb">\n  <ng-template [ngTemplateOutlet]="thumb"></ng-template>\n</div>\n<div [ngClass]="lineCls">\n  <div class="{{ defaultProps.prefixCls }}-content">\n    <ng-content></ng-content>\n  </div>\n  <div\n    *ngIf="extra_title && !extra_component"\n    class="{{ defaultProps.prefixCls }}-extra"\n    [innerHTML]="extra_title"\n  ></div>\n  <div *ngIf="extra && extra_component" class="{{ defaultProps.prefixCls }}-extra">\n    <ng-template [ngTemplateOutlet]="extra"></ng-template>\n  </div>\n  <div *ngIf="arrow" [ngClass]="arrowCls" aria-hidden="true"></div>\n</div>\n<div [ngClass]="rippleCls" [ngStyle]="defaultProps.rippleStyle"></div>\n'
    }]
  }], () => [], {
    extra: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    arrow: [{
      type: Input
    }],
    multipleLine: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    platform: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    thumb: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    bingClassName: [{
      type: HostBinding,
      args: ["class"]
    }],
    click: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    start: [{
      type: HostListener,
      args: ["touchstart"]
    }],
    move: [{
      type: HostListener,
      args: ["touchmove"]
    }],
    end: [{
      type: HostListener,
      args: ["touchend"]
    }],
    mouse_start: [{
      type: HostListener,
      args: ["mousedown"]
    }],
    mouse_end: [{
      type: HostListener,
      args: ["mouseup"]
    }]
  });
})();
var _BriefComponent = class _BriefComponent {
  constructor() {
    this.defaultProps = {
      prefixCls: "am-list"
    };
  }
};
_BriefComponent.ɵfac = function BriefComponent_Factory(t) {
  return new (t || _BriefComponent)();
};
_BriefComponent.ɵcmp = ɵɵdefineComponent({
  type: _BriefComponent,
  selectors: [["Brief"], ["nzm-brief"]],
  ngContentSelectors: _c06,
  decls: 2,
  vars: 3,
  template: function BriefComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div");
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-brief");
    }
  },
  encapsulation: 2
});
var BriefComponent = _BriefComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BriefComponent, [{
    type: Component,
    args: [{
      selector: "Brief, nzm-brief",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="{{ defaultProps.prefixCls }}-brief">\n  <ng-content></ng-content>\n</div>\n'
    }]
  }], null, null);
})();
var _ListModule = class _ListModule {
};
_ListModule.ɵfac = function ListModule_Factory(t) {
  return new (t || _ListModule)();
};
_ListModule.ɵmod = ɵɵdefineNgModule({
  type: _ListModule,
  declarations: [ListComponent, ListItemComponent, BriefComponent],
  imports: [CommonModule, FormsModule],
  exports: [ListComponent, ListItemComponent, BriefComponent]
});
_ListModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule]
});
var ListModule = _ListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule],
      exports: [ListComponent, ListItemComponent, BriefComponent],
      declarations: [ListComponent, ListItemComponent, BriefComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-button.mjs
var _c07 = ["Button", ""];
function ButtonComponent_Icon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-icon");
    ɵɵproperty("type", ctx_r0.iconType)("size", ctx_r0.size === "small" ? "xxs" : "md");
  }
}
function ButtonComponent_1_ng_template_0_Template(rf, ctx) {
}
function ButtonComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ButtonComponent_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.icon);
  }
}
var _c13 = [[["img"]], "*"];
var _c2 = ["img", "*"];
var _ButtonComponent = class _ButtonComponent {
  get type() {
    return this._type;
  }
  get size() {
    return this._size;
  }
  get disabled() {
    return this._disabled;
  }
  get loading() {
    return this._loading;
  }
  get inline() {
    return this._inline;
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    if (value instanceof TemplateRef) {
      this.ngTemplate = true;
      this._icon = value;
    } else {
      this.ngTemplate = false;
      this._icon = value;
      this.setClassMap();
    }
  }
  set className(v) {
    this._className = this._className + " " + v;
    this.setClassMap();
  }
  touchStart(event) {
    if (this._disabled) {
      return;
    }
    this._active = true;
    this.setClassMap();
  }
  touchEnd(event) {
    if (this._disabled) {
      return;
    }
    this._active = false;
    this.setClassMap();
  }
  click(event) {
    if (this._disabled) {
      return;
    }
    this.onClick.emit();
  }
  constructor(_elementRef, _render) {
    this._elementRef = _elementRef;
    this._render = _render;
    this.prefixCls = "am-button";
    this.ngTemplate = false;
    this._className = "";
    this._classList = [];
    this._size = "large";
    this._loading = false;
    this._active = false;
    this._inline = false;
    this._disabled = false;
    this._icon = "";
    this._userAgent = navigator.userAgent || navigator.vendor || window.opera;
    this.onClick = new EventEmitter();
    this._el = this._elementRef.nativeElement;
    this._render.addClass(this._el, this.prefixCls);
    this._className = this._el.className;
  }
  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
    return false;
  }
  set type(value) {
    this._type = value;
    this.setClassMap();
  }
  set disabled(value) {
    this._disabled = value;
    this.setClassMap();
  }
  set loading(value) {
    this._loading = value;
    if (this._el.querySelector("icon")) {
      const icon = this._el.querySelector("icon");
      icon.style.display = value ? "" : "none";
    }
    this.setClassMap();
  }
  set size(value) {
    this._size = value;
    this.setClassMap();
  }
  set inline(value) {
    this._inline = value;
    this.setClassMap();
  }
  ngAfterViewInit() {
    if (this._el.querySelector("img")) {
      const amSize = this._size === "small" ? "am-icon-xxs" : "am-icon-md";
      this._el.querySelector("img").setAttribute("class", `am-icon ${this.prefixCls}-icon ${amSize}`);
      this._render.addClass(this._el, `${this.prefixCls}-icon`);
    }
  }
  setClassMap() {
    this.iconType = this._loading ? "loading" : this._icon;
    this._classList = [this._type && `${this.prefixCls}-${this._type}`, this._size === "small" && `${this.prefixCls}-${this._size}`, this._disabled && `${this.prefixCls}-disabled`, this._loading && `${this.prefixCls}-loading`, this.iconType && `${this.prefixCls}-icon`, this._active && `${this.prefixCls}-active`, this._inline && `${this.prefixCls}-inline`].filter((item) => {
      return !!item;
    });
    this._el.className = this._className + " " + this._classList.join(" ");
  }
};
_ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
  return new (t || _ButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _ButtonComponent,
  selectors: [["", "Button", ""], ["nzm-button"]],
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart", function ButtonComponent_touchstart_HostBindingHandler($event) {
        return ctx.touchStart($event);
      })("mousedown", function ButtonComponent_mousedown_HostBindingHandler($event) {
        return ctx.touchStart($event);
      })("touchend", function ButtonComponent_touchend_HostBindingHandler($event) {
        return ctx.touchEnd($event);
      })("mouseup", function ButtonComponent_mouseup_HostBindingHandler($event) {
        return ctx.touchEnd($event);
      })("touchmove", function ButtonComponent_touchmove_HostBindingHandler($event) {
        return ctx.touchEnd($event);
      })("mousemove", function ButtonComponent_mousemove_HostBindingHandler($event) {
        return ctx.touchEnd($event);
      })("touchcancel", function ButtonComponent_touchcancel_HostBindingHandler($event) {
        return ctx.touchEnd($event);
      })("click", function ButtonComponent_click_HostBindingHandler($event) {
        return ctx.click($event);
      });
    }
  },
  inputs: {
    type: "type",
    size: "size",
    disabled: "disabled",
    loading: "loading",
    inline: "inline",
    icon: "icon",
    className: "className"
  },
  outputs: {
    onClick: "onClick"
  },
  attrs: _c07,
  ngContentSelectors: _c2,
  decls: 6,
  vars: 5,
  consts: [[3, "class", "type", "size", 4, "ngIf"], [4, "ngIf"], [3, "type", "size"], [3, "ngTemplateOutlet"]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c13);
      ɵɵtemplate(0, ButtonComponent_Icon_0_Template, 1, 5, "Icon", 0)(1, ButtonComponent_1_Template, 1, 1, null, 1);
      ɵɵprojection(2);
      ɵɵelementStart(3, "div")(4, "span");
      ɵɵprojection(5, 1);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.ngTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.ngTemplate);
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, IconComponent],
  encapsulation: 2
});
var ButtonComponent = _ButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "[Button], nzm-button",
      encapsulation: ViewEncapsulation$1.None,
      template: `<Icon
  *ngIf="!ngTemplate"
  class="{{ prefixCls }}-icon"
  [type]="iconType"
  [size]="size === 'small' ? 'xxs' : 'md'"
></Icon>
<ng-template *ngIf="ngTemplate" [ngTemplateOutlet]="icon"></ng-template>
<ng-content select="img"></ng-content>
<div class="{{ prefixCls }}-content">
  <span>
    <ng-content></ng-content>
  </span>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    type: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }, {
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    touchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }, {
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }, {
      type: HostListener,
      args: ["mousemove", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    click: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var NZ_BUTTON_DIRECTIVES = [ButtonComponent];
var _ButtonModule = class _ButtonModule {
};
_ButtonModule.ɵfac = function ButtonModule_Factory(t) {
  return new (t || _ButtonModule)();
};
_ButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _ButtonModule,
  declarations: [ButtonComponent],
  imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule],
  exports: [ButtonComponent]
});
_ButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
});
var ButtonModule = _ButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      declarations: NZ_BUTTON_DIRECTIVES,
      exports: NZ_BUTTON_DIRECTIVES,
      imports: [CommonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-switch.mjs
var _SwitchComponent = class _SwitchComponent {
  set color(value) {
    this._color = value;
    this.colorStyle = {
      background: this._color
    };
  }
  set platform(value) {
    this.wrapCls = value === "android" ? `${this.prefixCls}-android` : this.prefixCls;
  }
  set checked(value) {
    this.switchChecked = value;
    this.checkboxCls = {
      "checkbox-disabled": this._disabled,
      "checkbox-active": this.switchChecked,
      "checkbox-inactive": !this.switchChecked
    };
    this.colorStyle = {
      background: value ? this._color : ""
    };
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.checkboxCls = {
      "checkbox-disabled": value,
      "checkbox-active": this.switchChecked,
      "checkbox-inactive": !this.switchChecked
    };
  }
  constructor() {
    this.prefixCls = "am-switch";
    this.wrapCls = "am-switch";
    this.checkboxCls = {
      "checkbox-disabled": false,
      "checkbox-active": false,
      "checkbox-inactive": true
    };
    this.colorStyle = {};
    this.switchChecked = false;
    this._color = "";
    this._disabled = false;
    this.onChanged = Function.prototype;
    this.onTouched = Function.prototype;
    this.onChange = new EventEmitter();
    this.onClick = new EventEmitter();
    this.dispaly = true;
  }
  changeSwitch(checkedValue) {
    this.onChanged(checkedValue);
    this.switchChecked = checkedValue;
    this.checkboxCls = {
      "checkbox-disabled": this._disabled,
      "checkbox-active": this.switchChecked,
      "checkbox-inactive": !this.switchChecked
    };
    this.colorStyle = {
      background: checkedValue ? this._color : ""
    };
    this.onChange.emit(checkedValue);
  }
  click() {
    this.onClick.emit(this.switchChecked);
  }
  writeValue(value) {
    this.switchChecked = value;
  }
  registerOnChange(fn) {
    this.onChanged = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
};
_SwitchComponent.ɵfac = function SwitchComponent_Factory(t) {
  return new (t || _SwitchComponent)();
};
_SwitchComponent.ɵcmp = ɵɵdefineComponent({
  type: _SwitchComponent,
  selectors: [["Switch"], ["nzm-switch"]],
  hostVars: 2,
  hostBindings: function SwitchComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.dispaly);
    }
  },
  inputs: {
    color: "color",
    name: "name",
    platform: "platform",
    checked: "checked",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange",
    onClick: "onClick"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SwitchComponent),
    multi: true
  }])],
  decls: 4,
  vars: 12,
  consts: [[3, "ngClass"], ["type", "checkbox", "name", "name", 3, "checked", "value", "disabled", "change"], ["switchValue", ""], [1, "checkbox", 3, "ngClass", "ngStyle", "click"]],
  template: function SwitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "label", 0)(1, "input", 1, 2);
      ɵɵlistener("change", function SwitchComponent_Template_input_change_1_listener() {
        ɵɵrestoreView(_r1);
        const _r0 = ɵɵreference(2);
        return ɵɵresetView(ctx.changeSwitch(_r0.checked));
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3);
      ɵɵlistener("click", function SwitchComponent_Template_div_click_3_listener() {
        return ctx.click();
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-checkbox");
      ɵɵproperty("checked", ctx.switchChecked)("value", ctx.switchChecked)("disabled", ctx.disabled);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.checkboxCls)("ngStyle", ctx.colorStyle);
    }
  },
  dependencies: [NgClass, NgStyle],
  encapsulation: 2
});
var SwitchComponent = _SwitchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchComponent, [{
    type: Component,
    args: [{
      selector: "Switch, nzm-switch",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SwitchComponent),
        multi: true
      }],
      template: '<label class="{{ prefixCls }}" [ngClass]="wrapCls">\n  <input\n    #switchValue\n    type="checkbox"\n    name="name"\n    class="{{ prefixCls }}-checkbox"\n    [checked]="switchChecked"\n    [value]="switchChecked"\n    [disabled]="disabled"\n    (change)="changeSwitch(switchValue.checked)"\n  />\n  <div class="checkbox" [ngClass]="checkboxCls" [ngStyle]="colorStyle" (click)="click()"></div>\n</label>\n'
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    platform: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    dispaly: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var _SwitchModule = class _SwitchModule {
};
_SwitchModule.ɵfac = function SwitchModule_Factory(t) {
  return new (t || _SwitchModule)();
};
_SwitchModule.ɵmod = ɵɵdefineNgModule({
  type: _SwitchModule,
  declarations: [SwitchComponent],
  imports: [CommonModule, WingBlankModule],
  exports: [SwitchComponent]
});
_SwitchModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, WingBlankModule]
});
var SwitchModule = _SwitchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwitchModule, [{
    type: NgModule,
    args: [{
      exports: [SwitchComponent],
      declarations: [SwitchComponent],
      imports: [CommonModule, WingBlankModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-search-bar.mjs
var _c08 = ["search"];
var _c14 = (a0) => ({
  visibility: a0
});
var _SearchBarComponent = class _SearchBarComponent {
  set defaultValue(value) {
    this._defaultValue = value;
    this._value = value;
    this.inputElementRef.nativeElement.value = this._value;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v || "";
    this.inputElementRef.nativeElement.value = this._value;
    this.setClass();
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get showCancelButton() {
    return this._showCancelButton;
  }
  set showCancelButton(value) {
    this._showCancelButton = value;
    this.setClass();
  }
  get cancelText() {
    return this._cancelText;
  }
  set cancelText(value) {
    if (value !== void 0) {
      this._cancelText = value;
      this._isCustomText = true;
    }
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(value) {
    this._maxLength = value;
  }
  set setFocus(value) {
    if (value) {
      if (value.focusValue) {
        this._focus = true;
        this.inputElementRef.nativeElement.focus();
        this._blurFromOnClear = true;
        this.onSearchbarFocus();
      } else {
        this._blurFromOnClear = false;
        this.onSearchbarBlur();
      }
    }
  }
  constructor(_elementRef, _localeProvider) {
    this._elementRef = _elementRef;
    this._localeProvider = _localeProvider;
    this.prefixCls = "am-search";
    this.cancelCls = {
      [`${this.prefixCls}-cancel`]: true
    };
    this.isComposing = false;
    this._defaultValue = "";
    this._value = "";
    this._placeholder = "";
    this._showCancelButton = false;
    this._disabled = false;
    this._focus = false;
    this._isSubmit = false;
    this._isCustomText = false;
    this._isClearClicking = false;
    this._blurFromOnClear = false;
    this.locale = {};
    this._unsubscribe$ = new Subject();
    this.onSubmit = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onCancel = new EventEmitter();
    this.onClear = new EventEmitter();
    this.onChangeFn = () => {
    };
    this.onTouchFn = () => {
    };
  }
  setClass() {
    this.wrapCls = {
      [`${this.prefixCls}`]: true,
      [`${this.prefixCls}-start`]: !!(this._focus || this._value && this._value.length > 0) && !this._disabled
    };
    this.cancelCls = {
      [`${this.prefixCls}-cancel`]: true,
      [`${this.prefixCls}-cancel-show`]: this._showCancelButton || this._focus || this._value && this._value.length > 0,
      [`${this.prefixCls}-cancel-anim`]: this._focus
    };
    this.clearCls = {
      [`${this.prefixCls}-clear`]: this._value && this._value.length > 0,
      [`${this.prefixCls}-clear-show`]: this._value && this._value.length > 0 && !this._isSubmit,
      [`${this.prefixCls}-clear-active`]: this._isClearClicking
    };
  }
  setStyle() {
    if (this._inputContainerRef.className.indexOf(`${this.prefixCls}-start`) > -1) {
      const realWidth = this._syntheticPhContainerRef.getBoundingClientRect().width;
      this._syntheticPhRef.style.width = Math.ceil(realWidth) + "px";
      if (!this._showCancelButton) {
        this._rightBtnRef.style.marginRight = "0";
      }
    } else {
      this._syntheticPhRef.style.width = "100%";
      if (!this._showCancelButton) {
        this._rightBtnInitMarginLeft = window.getComputedStyle(this._rightBtnRef)["margin-left"];
        const btnMarginRight = this._rightBtnRef.offsetWidth + parseInt(this._rightBtnInitMarginLeft, 10);
        this._rightBtnRef.style.marginRight = "-" + btnMarginRight + "px";
      }
    }
  }
  onSearchbarBlur() {
    const self = this;
    setTimeout(() => {
      if (!self._blurFromOnClear && self._value === "" && self._focus) {
        self._focus = false;
        self._value = "";
        self.onBlur.emit();
        self.setClass();
      }
      self._blurFromOnClear = false;
    }, 50);
  }
  onSearchbarFocus() {
    this._focus = true;
    this._isSubmit = false;
    this.onFocus.emit();
    this.setClass();
  }
  onSearchbarChange(e) {
    this._focus = true;
    this._value = e;
    this.onChange.emit(e);
    this.onChangeFn(e);
    this.setClass();
  }
  onSearchSubmit(e) {
    e.preventDefault();
    this._value = e.target[0].value;
    this._isSubmit = true;
    this.onSubmit.emit(this._value);
    this.setClass();
    this._blurFromOnClear = true;
    this.inputElementRef.nativeElement.blur();
  }
  onSearchbarCancel() {
    this._focus = false;
    this._value = "";
    this.onCancel.emit();
    this.setClass();
  }
  onSearchbarClear() {
    this._blurFromOnClear = true;
    this._isClearClicking = true;
    this.onSearchbarChange("");
    this.inputElementRef.nativeElement.focus();
    this.onClear.emit(this._value);
    this.setClass();
    setTimeout(() => {
      this._value = "";
      this._isClearClicking = false;
      this._blurFromOnClear = false;
      this.setClass();
    }, 100);
    this.onSearchbarFocus();
  }
  onSetCompositionState(isComposing) {
    this.isComposing = isComposing;
  }
  writeValue(value) {
    this._value = value || "";
    this.inputElementRef.nativeElement.value = this._value;
    this.setClass();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  ngOnInit() {
    this.setClass();
    this._localeProvider.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      this.locale = this._localeProvider.getLocaleSubObj("SearchBar");
      this._cancelText = this._isCustomText ? this._cancelText : this.locale.cancelText;
    });
  }
  ngAfterViewInit() {
    this._syntheticPhContainerRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}-synthetic-ph-container`)[0];
    this._syntheticPhRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}-synthetic-ph`)[0];
    this._rightBtnRef = this._elementRef.nativeElement.getElementsByClassName("cancel")[0];
    this._inputContainerRef = this._elementRef.nativeElement.getElementsByClassName(`${this.prefixCls}`)[0];
  }
  ngAfterViewChecked() {
    this.setStyle();
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) {
  return new (t || _SearchBarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocaleProviderService));
};
_SearchBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _SearchBarComponent,
  selectors: [["SearchBar"], ["nzm-search-bar"]],
  viewQuery: function SearchBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c08, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElementRef = _t.first);
    }
  },
  inputs: {
    defaultValue: "defaultValue",
    value: "value",
    placeholder: "placeholder",
    showCancelButton: "showCancelButton",
    cancelText: "cancelText",
    disabled: "disabled",
    maxLength: "maxLength",
    setFocus: "setFocus"
  },
  outputs: {
    onSubmit: "onSubmit",
    onChange: "onChange",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onCancel: "onCancel",
    onClear: "onClear"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SearchBarComponent),
    multi: true
  }])],
  decls: 12,
  vars: 36,
  consts: [["name", "myForm", "action", "#", 3, "ngClass", "submit"], [2, "box-sizing", "unset"], [3, "ngStyle"], [2, "outline", "none", 3, "name", "type", "disabled", "maxlength", "placeholder", "ngModel", "blur", "focus", "ngModelChange", "compositionstart", "compositionend"], ["search", ""], [2, "box-sizing", "content-box", "transition", "0s", 3, "ngClass", "click"], [1, "cancel", 3, "ngClass", "click"]],
  template: function SearchBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function SearchBarComponent_Template_form_submit_0_listener($event) {
        return ctx.onSearchSubmit($event);
      });
      ɵɵelementStart(1, "div")(2, "div", 1)(3, "span");
      ɵɵelement(4, "i");
      ɵɵelementStart(5, "span", 2);
      ɵɵtext(6);
      ɵɵelementEnd()()();
      ɵɵelementStart(7, "input", 3, 4);
      ɵɵlistener("blur", function SearchBarComponent_Template_input_blur_7_listener() {
        return ctx.onSearchbarBlur();
      })("focus", function SearchBarComponent_Template_input_focus_7_listener() {
        return ctx.onSearchbarFocus();
      })("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_7_listener($event) {
        return ctx.onSearchbarChange($event);
      })("compositionstart", function SearchBarComponent_Template_input_compositionstart_7_listener() {
        return ctx.onSetCompositionState(true);
      })("compositionend", function SearchBarComponent_Template_input_compositionend_7_listener() {
        return ctx.onSetCompositionState(false);
      });
      ɵɵelementEnd();
      ɵɵelementStart(9, "a", 5);
      ɵɵlistener("click", function SearchBarComponent_Template_a_click_9_listener() {
        return ctx.onSearchbarClear();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(10, "div", 6);
      ɵɵlistener("click", function SearchBarComponent_Template_div_click_10_listener() {
        return ctx.onSearchbarCancel();
      });
      ɵɵtext(11);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵproperty("ngClass", ctx.wrapCls);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph");
      ɵɵproperty("@cancelButtonState", ctx.showCancelButton ? "visible" : "hidden");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-container");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-icon");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-synthetic-ph-placeholder");
      ɵɵproperty("ngStyle", ɵɵpureFunction1(34, _c14, ctx.placeholder && !ctx.isComposing && !ctx.value ? "visible" : "hidden"));
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.placeholder, " ");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-value");
      ɵɵproperty("name", "search")("type", "search")("disabled", ctx.disabled)("maxlength", ctx.maxLength)("placeholder", ctx.placeholder)("ngModel", ctx.value);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ctx.clearCls);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.cancelCls);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.cancelText, " ");
    }
  },
  dependencies: [NgClass, NgStyle, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm],
  encapsulation: 2,
  data: {
    animation: [trigger("cancelButtonState", [state("visible", style({
      width: "*"
    })), state("hidden", style({
      width: "100%"
    })), transition("visible =>hidden", [animate(300, style({
      width: "100%"
    }))]), transition("hidden => visible", [animate(300, style({
      width: "*"
    }))])])]
  }
});
var SearchBarComponent = _SearchBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarComponent, [{
    type: Component,
    args: [{
      selector: "SearchBar, nzm-search-bar",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SearchBarComponent),
        multi: true
      }],
      animations: [trigger("cancelButtonState", [state("visible", style({
        width: "*"
      })), state("hidden", style({
        width: "100%"
      })), transition("visible =>hidden", [animate(300, style({
        width: "100%"
      }))]), transition("hidden => visible", [animate(300, style({
        width: "*"
      }))])])],
      template: `<form name="myForm" class="{{ prefixCls }}" [ngClass]="wrapCls" action="#" (submit)="onSearchSubmit($event)">
  <div class="{{ prefixCls }}-input">
    <div
      class="{{ prefixCls }}-synthetic-ph"
      style="box-sizing:unset"
      [@cancelButtonState]="showCancelButton ? 'visible' : 'hidden'"
    >
      <span class="{{ prefixCls }}-synthetic-ph-container">
        <i class="{{ prefixCls }}-synthetic-ph-icon"></i>
        <span
          class="{{ prefixCls }}-synthetic-ph-placeholder"
          [ngStyle]="{ visibility: placeholder && !isComposing && !value ? 'visible' : 'hidden' }"
        >
          {{ placeholder }}
        </span>
      </span>
    </div>
    <input
      #search
      class="{{ prefixCls }}-value"
      style="outline:none;"
      [name]="'search'"
      [type]="'search'"
      [disabled]="disabled"
      [maxlength]="maxLength"
      [placeholder]="placeholder"
      [ngModel]="value"
      (blur)="onSearchbarBlur()"
      (focus)="onSearchbarFocus()"
      (ngModelChange)="onSearchbarChange($event)"
      (compositionstart)="onSetCompositionState(true)"
      (compositionend)="onSetCompositionState(false)"
    />
    <a [ngClass]="clearCls" style="box-sizing: content-box;transition: 0s" (click)="onSearchbarClear()"></a>
  </div>
  <div class="cancel" [ngClass]="cancelCls" (click)="onSearchbarCancel()">
    {{ cancelText }}
  </div>
</form>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LocaleProviderService
  }], {
    inputElementRef: [{
      type: ViewChild,
      args: ["search", {
        static: true
      }]
    }],
    defaultValue: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    showCancelButton: [{
      type: Input
    }],
    cancelText: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    maxLength: [{
      type: Input
    }],
    setFocus: [{
      type: Input
    }],
    onSubmit: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }]
  });
})();
var _SearchBarModule = class _SearchBarModule {
};
_SearchBarModule.ɵfac = function SearchBarModule_Factory(t) {
  return new (t || _SearchBarModule)();
};
_SearchBarModule.ɵmod = ɵɵdefineNgModule({
  type: _SearchBarModule,
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule, LocaleProviderModule],
  exports: [SearchBarComponent]
});
_SearchBarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, LocaleProviderModule]
});
var SearchBarModule = _SearchBarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchBarModule, [{
    type: NgModule,
    args: [{
      exports: [SearchBarComponent],
      declarations: [SearchBarComponent],
      imports: [CommonModule, FormsModule, LocaleProviderModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-stepper.mjs
var _StepperComponent = class _StepperComponent {
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = value;
  }
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = value;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
  }
  set step(value) {
    this._step = value;
  }
  set defaultValue(value) {
    if (value) {
      this._defaultValue = value;
      this._value = value;
    }
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this._downDisabled = value;
      this._upDisabled = value;
    }
    this._disabled = value;
    this.clsStpDisabled = value;
  }
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(value) {
    this._readOnly = value;
  }
  set showNumber(value) {
    this._showNumber = value;
    this.clsShowNum = value;
  }
  constructor() {
    this.prefixCls = "am-stepper";
    this._max = Infinity;
    this._min = -Infinity;
    this._step = 1;
    this._disabled = false;
    this._readOnly = false;
    this._showNumber = false;
    this._upDisabled = false;
    this._downDisabled = false;
    this._isUpClick = false;
    this._isDownClick = false;
    this._inputLock = false;
    this.onChange = new EventEmitter();
    this.clsStepper = true;
    this.clsStpDisabled = this._disabled;
    this.clsShowNum = this._showNumber;
    this.onChangeFn = () => {
    };
    this.onTouchFn = () => {
    };
  }
  onIncrease() {
    if (!this._upDisabled) {
      this._value = this.plus(this._value, this._step);
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
      if (this.plus(this._value, this._step) > this._max) {
        this._upDisabled = true;
      }
      if (this.minus(this._value, this._step) >= this._min) {
        this._downDisabled = false;
      }
      this._isUpClick = true;
      this.setCls();
      setTimeout(() => {
        this._isUpClick = false;
        this.setCls();
      }, 100);
    }
  }
  onDecrease() {
    if (!this._downDisabled) {
      this._value = this.minus(this._value, this._step);
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
      if (this.minus(this._value, this._step) < this._min) {
        this._downDisabled = true;
      }
      if (this.plus(this._value, this._step) <= this._max) {
        this._upDisabled = false;
      }
      this._isDownClick = true;
      this.setCls();
      setTimeout(() => {
        this._isDownClick = false;
        this.setCls();
      }, 100);
    }
  }
  compositionStart() {
    this._inputLock = true;
  }
  compositionEnd() {
    this._inputLock = false;
  }
  inputChange(event) {
    setTimeout(() => {
      if (this._inputLock) {
        return;
      }
      const allowDecimal = this._step % 1 !== 0;
      const allowNegative = this._min < 0;
      let decimalFlag = false;
      let negativeFlag = false;
      if (!event)
        event = "";
      let value = event.toString().replace(/\D/g, (match, index, str) => {
        if (allowDecimal && match === "." && !decimalFlag) {
          decimalFlag = true;
          return ".";
        }
        if (allowNegative && match === "-" && !negativeFlag) {
          negativeFlag = true;
          return "-";
        }
        return "";
      });
      if (negativeFlag && value.indexOf("-") > 0) {
        value = value.replace(/-/g, "");
      }
      if (!isNaN(value)) {
        this._value = +value;
        this._upDisabled = this.plus(this._value, this._step) > this._max ? true : false;
        this._downDisabled = this.minus(this._value, this._step) < this._min ? true : false;
      }
      this.setCls();
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
    }, 0);
  }
  inputBlur() {
    let value = +this._value;
    if (+this._value === -0) {
      value = 0;
    }
    if (this._value < this._min) {
      value = this._min;
    } else if (this._value > this._max) {
      value = this._max;
    }
    const len = this._step.toString().length - this._step.toString().indexOf(".") - 1;
    value = +value.toFixed(len);
    if (value !== this._value) {
      this._value = value;
      this.onChange.emit(this._value);
      this.onChangeFn(this._value);
    }
  }
  setCls() {
    this.upDisableCls = {
      [`${this.prefixCls}-handler-up-disabled`]: this._upDisabled,
      [`${this.prefixCls}-handler-active`]: this._isUpClick
    };
    this.downDisableCls = {
      [`${this.prefixCls}-handler-down-disabled`]: this._downDisabled,
      [`${this.prefixCls}-handler-active`]: this._isDownClick
    };
  }
  ngOnChanges() {
    if (this._disabled) {
      this._downDisabled = true;
      this._upDisabled = true;
    } else {
      this._upDisabled = this.plus(this._value, this._step) > this._max ? true : false;
      this._downDisabled = this.minus(this._value, this._step) < this._min ? true : false;
    }
    this.setCls();
  }
  writeValue(value) {
    this._value = value;
    this.ngOnChanges();
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  plus(num1, num2) {
    if (num1 === void 0 || num1 === null || num2 === void 0 || num2 === null) {
      return;
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) + this.times(num2, baseNum)) / baseNum;
  }
  minus(num1, num2) {
    if (num1 === void 0 || num1 === null || num2 === void 0 || num2 === null) {
      return;
    }
    const baseNum = Math.pow(10, Math.max(this.digitLength(num1), this.digitLength(num2)));
    return (this.times(num1, baseNum) - this.times(num2, baseNum)) / baseNum;
  }
  digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  times(num1, num2) {
    const num1Changed = this.floatToFixed(num1);
    const num2Changed = this.floatToFixed(num2);
    const baseNum = this.digitLength(num1) + this.digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    return leftValue / Math.pow(10, baseNum);
  }
  floatToFixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = this.digitLength(num);
    return dLen > 0 ? this.strip(num * Math.pow(10, dLen)) : num;
  }
  strip(num, precision = 12) {
    return +parseFloat(num.toPrecision(precision));
  }
};
_StepperComponent.ɵfac = function StepperComponent_Factory(t) {
  return new (t || _StepperComponent)();
};
_StepperComponent.ɵcmp = ɵɵdefineComponent({
  type: _StepperComponent,
  selectors: [["Stepper"], ["nzm-stepper"]],
  hostVars: 6,
  hostBindings: function StepperComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-stepper", ctx.clsStepper)("am-stepper-disabled", ctx.clsStpDisabled)("showNumber", ctx.clsShowNum);
    }
  },
  inputs: {
    max: "max",
    min: "min",
    value: "value",
    step: "step",
    defaultValue: "defaultValue",
    disabled: "disabled",
    readOnly: "readOnly",
    showNumber: "showNumber"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _StepperComponent),
    multi: true
  }]), ɵɵNgOnChangesFeature],
  decls: 7,
  vars: 29,
  consts: [["role", "button", 2, "line-height", "28px", 3, "ngClass", "click"], [3, "type", "size"], ["type", "number", "pattern", "\\-?\\d+(\\.\\d+)?", 2, "outline", "none", 3, "disabled", "readonly", "autocomplete", "max", "min", "ngModel", "ngModelChange", "compositionstart", "compositionend", "blur"]],
  template: function StepperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "span", 0);
      ɵɵlistener("click", function StepperComponent_Template_span_click_1_listener() {
        return ctx.onIncrease();
      });
      ɵɵelement(2, "Icon", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "span", 0);
      ɵɵlistener("click", function StepperComponent_Template_span_click_3_listener() {
        return ctx.onDecrease();
      });
      ɵɵelement(4, "Icon", 1);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "div")(6, "input", 2);
      ɵɵlistener("ngModelChange", function StepperComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.value = $event;
      })("ngModelChange", function StepperComponent_Template_input_ngModelChange_6_listener($event) {
        return ctx.inputChange($event);
      })("compositionstart", function StepperComponent_Template_input_compositionstart_6_listener() {
        return ctx.compositionStart();
      })("compositionend", function StepperComponent_Template_input_compositionend_6_listener() {
        return ctx.compositionEnd();
      })("blur", function StepperComponent_Template_input_blur_6_listener() {
        return ctx.inputBlur();
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-handler-wrap");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate2("", ctx.prefixCls, "-handler ", ctx.prefixCls, "-handler-up");
      ɵɵproperty("ngClass", ctx.upDisableCls);
      ɵɵadvance(1);
      ɵɵproperty("type", "plus")("size", "xxs");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate2("", ctx.prefixCls, "-handler ", ctx.prefixCls, "-handler-down");
      ɵɵproperty("ngClass", ctx.downDisableCls);
      ɵɵadvance(1);
      ɵɵproperty("type", "minus")("size", "xxs");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input-wrap");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
      ɵɵproperty("disabled", ctx.disabled)("readonly", ctx.readOnly)("autocomplete", "off")("max", ctx.max)("min", ctx.min)("ngModel", ctx.value);
    }
  },
  dependencies: [NgClass, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, PatternValidator, MinValidator, MaxValidator, NgModel, IconComponent],
  encapsulation: 2
});
var StepperComponent = _StepperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperComponent, [{
    type: Component,
    args: [{
      selector: "Stepper, nzm-stepper",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => StepperComponent),
        multi: true
      }],
      template: `<div class="{{ prefixCls }}-handler-wrap">
  <span
    role="button"
    class="{{ prefixCls }}-handler {{ prefixCls }}-handler-up"
    style="line-height:28px;"
    [ngClass]="upDisableCls"
    (click)="onIncrease()"
  >
    <Icon [type]="'plus'" [size]="'xxs'"> </Icon>
  </span>
  <span
    role="button"
    class="{{ prefixCls }}-handler {{ prefixCls }}-handler-down"
    style="line-height:28px;"
    [ngClass]="downDisableCls"
    (click)="onDecrease()"
  >
    <Icon [type]="'minus'" [size]="'xxs'"> </Icon>
  </span>
</div>
<div class="{{ prefixCls }}-input-wrap">
  <input
    type="number"
    pattern="\\-?\\d+(\\.\\d+)?"
    style="outline:none"
    class="{{ prefixCls }}-input"
    [disabled]="disabled"
    [readonly]="readOnly"
    [autocomplete]="'off'"
    [max]="max"
    [min]="min"
    [(ngModel)]="value"
    (ngModelChange)="inputChange($event)"
    (compositionstart)="compositionStart()"
    (compositionend)="compositionEnd()"
    (blur)="inputBlur()"
  />
</div>
`
    }]
  }], () => [], {
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    showNumber: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    clsStepper: [{
      type: HostBinding,
      args: ["class.am-stepper"]
    }],
    clsStpDisabled: [{
      type: HostBinding,
      args: ["class.am-stepper-disabled"]
    }],
    clsShowNum: [{
      type: HostBinding,
      args: ["class.showNumber"]
    }]
  });
})();
var _StepperModule = class _StepperModule {
};
_StepperModule.ɵfac = function StepperModule_Factory(t) {
  return new (t || _StepperModule)();
};
_StepperModule.ɵmod = ɵɵdefineNgModule({
  type: _StepperModule,
  declarations: [StepperComponent],
  imports: [CommonModule, FormsModule, IconModule],
  exports: [StepperComponent]
});
_StepperModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, IconModule]
});
var StepperModule = _StepperModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepperModule, [{
    type: NgModule,
    args: [{
      exports: [StepperComponent],
      declarations: [StepperComponent],
      imports: [CommonModule, FormsModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-steps.mjs
function StepComponent_span_4_ng_template_1_Template(rf, ctx) {
}
function StepComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, StepComponent_span_4_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconCls);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.icon);
  }
}
function StepComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵelement(1, "Icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.iconCls);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r1.icon)("size", ctx_r1.iconSize);
  }
}
function StepComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.iconCls);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r2.stepNumber, " ");
  }
}
function StepComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.title);
  }
}
function StepComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r10.description);
  }
}
function StepComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, StepComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const _r8 = ɵɵreference(14);
    ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-item-description");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.isTemplateRef(ctx_r4.description))("ngIfElse", _r8);
  }
}
function StepComponent_ng_template_11_ng_template_0_Template(rf, ctx) {
}
function StepComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepComponent_ng_template_11_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.title);
  }
}
function StepComponent_ng_template_13_ng_template_0_Template(rf, ctx) {
}
function StepComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StepComponent_ng_template_13_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r7.description);
  }
}
var _c09 = ["*"];
var _StepComponent = class _StepComponent {
  get status() {
    return this._status;
  }
  set status(value) {
    if (value) {
      this._status = value;
      this.isCustomStatus = true;
      this.setIcon();
      this.setClass();
    }
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    if (value) {
      this._icon = value;
      this.isCustomIcon = true;
      this.setClass();
    }
  }
  set currentIndex(current) {
    this._currentIndex = current;
    if (!this.isCustomStatus) {
      this._status = current > this.stepNumber ? StepStatusEnum.FINISH : current === this.stepNumber ? this.outStatus || "" : StepStatusEnum.WAIT;
      this.setIcon();
      this.setClass();
    }
  }
  constructor(_el) {
    this._el = _el;
    this.prefixCls = "am-steps";
    this.stepItemCls = {};
    this.iconCls = {
      [`${this.prefixCls}-icon`]: true
    };
    this.isIconString = true;
    this.outStatus = "process";
    this.isCustomStatus = false;
    this.isCustomIcon = false;
    this.title = null;
    this.description = null;
    this._currentIndex = 0;
    this.clsStepItem = true;
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
  setClass() {
    this.stepItemCls = {
      [`${this.prefixCls}-item-${this.status}`]: true,
      [`${this.prefixCls}-item-custom`]: this.isCustomIcon || this.icon && this._currentIndex !== this.stepNumber
    };
  }
  setIcon() {
    if (!this.isCustomIcon) {
      switch (this._status) {
        case StepStatusEnum.FINISH:
          this._icon = "check-circle-o";
          break;
        case StepStatusEnum.ERROR:
          this._icon = "cross-circle-o";
          break;
        case StepStatusEnum.WAIT:
          this._icon = "ellipsis";
          break;
        default:
          break;
      }
    }
  }
  ngOnInit() {
  }
};
_StepComponent.ɵfac = function StepComponent_Factory(t) {
  return new (t || _StepComponent)(ɵɵdirectiveInject(ElementRef));
};
_StepComponent.ɵcmp = ɵɵdefineComponent({
  type: _StepComponent,
  selectors: [["Step"], ["nzm-step"]],
  hostVars: 2,
  hostBindings: function StepComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-steps-item", ctx.clsStepItem);
    }
  },
  inputs: {
    status: "status",
    title: "title",
    description: "description",
    icon: "icon"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _StepComponent),
    multi: true
  }])],
  decls: 15,
  vars: 20,
  consts: [[3, "ngClass"], [3, "ngClass", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"], ["titleTemplate", ""], ["descriptionTemplate", ""], [3, "ngTemplateOutlet"], [3, "type", "size"]],
  template: function StepComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "div");
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div");
      ɵɵtemplate(4, StepComponent_span_4_Template, 2, 2, "span", 1)(5, StepComponent_span_5_Template, 2, 3, "span", 1)(6, StepComponent_span_6_Template, 2, 2, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(7, "div")(8, "div");
      ɵɵtemplate(9, StepComponent_ng_container_9_Template, 2, 1, "ng-container", 2);
      ɵɵelementEnd();
      ɵɵtemplate(10, StepComponent_div_10_Template, 2, 5, "div", 3);
      ɵɵelementEnd()();
      ɵɵtemplate(11, StepComponent_ng_template_11_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor)(13, StepComponent_ng_template_13_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r6 = ɵɵreference(12);
      ɵɵproperty("ngClass", ctx.stepItemCls);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-tail");
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.tailContent, " ");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-icon");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.icon));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.icon) && (ctx.status === "error" || ctx.status === "finish" || ctx.status === "wait"));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.icon) && !(ctx.status === "error" || ctx.status === "finish" || ctx.status === "wait"));
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-content");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-item-title");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.title))("ngIfElse", _r6);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.description);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, IconComponent],
  encapsulation: 2
});
var StepComponent = _StepComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepComponent, [{
    type: Component,
    args: [{
      selector: "Step, nzm-step",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => StepComponent),
        multi: true
      }],
      template: `<div [ngClass]="stepItemCls">
  <div class="{{ prefixCls }}-item-tail">
    {{ tailContent }}
  </div>
  <div class="{{ prefixCls }}-item-icon">
    <span *ngIf="isTemplateRef(icon)" [ngClass]="iconCls">
      <ng-template [ngTemplateOutlet]="icon"></ng-template>
    </span>
    <span *ngIf="!isTemplateRef(icon) && (status === 'error' || status === 'finish' || status === 'wait')" [ngClass]="iconCls">
      <Icon [type]="icon" [size]="iconSize"> </Icon>
    </span>
    <span *ngIf="!isTemplateRef(icon) && !(status === 'error' || status === 'finish' || status === 'wait')" [ngClass]="iconCls"
      >{{ stepNumber }}
    </span>
  </div>
  <div class="{{ prefixCls }}-item-content">
    <div class="{{ prefixCls }}-item-title">
      <ng-container *ngIf="!isTemplateRef(title); else titleTemplate">{{ title }}</ng-container>
    </div>
    <div *ngIf="description" class="{{ prefixCls }}-item-description">
      <ng-container *ngIf="!isTemplateRef(description); else descriptionTemplate">{{ description }}</ng-container>
    </div>
  </div>
</div>
<ng-template #titleTemplate>
  <ng-template [ngTemplateOutlet]="title"></ng-template>
</ng-template>
<ng-template #descriptionTemplate>
  <ng-template [ngTemplateOutlet]="description"></ng-template>
</ng-template>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    status: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    clsStepItem: [{
      type: HostBinding,
      args: ["class.am-steps-item"]
    }]
  });
})();
var StepStatusEnum;
(function(StepStatusEnum2) {
  StepStatusEnum2["WAIT"] = "wait";
  StepStatusEnum2["PROCESS"] = "process";
  StepStatusEnum2["FINISH"] = "finish";
  StepStatusEnum2["ERROR"] = "error";
})(StepStatusEnum || (StepStatusEnum = {}));
var StepDirectionEnum;
(function(StepDirectionEnum2) {
  StepDirectionEnum2["VERTICAL"] = "vertical";
  StepDirectionEnum2["HORIZONTAL"] = "horizontal";
})(StepDirectionEnum || (StepDirectionEnum = {}));
var _StepsComponent = class _StepsComponent {
  set current(value) {
    if (value >= 0) {
      this._current = value;
      if (this.stepItems) {
        this.setStepStyle();
      }
    }
  }
  set size(value) {
    this._size = value;
    this.setCls();
  }
  set status(value) {
    this._status = value;
    if (this.stepItems) {
      this.setStepStyle();
    }
  }
  set direction(value) {
    this._direction = value;
    this.setCls();
  }
  constructor(_elf, _render) {
    this._elf = _elf;
    this._render = _render;
    this.prefixCls = "am-steps";
    this._current = 0;
    this._status = StepStatusEnum.PROCESS;
    this._direction = StepDirectionEnum.VERTICAL;
    this.clsSteps = true;
  }
  setStepStyle() {
    const itemCount = this.stepItems.length;
    const itemArr = this.stepItems["_results"];
    for (let index = 0; index < itemCount; index++) {
      const step = itemArr[index];
      step.stepNumber = index + 1;
      step.outStatus = this._status;
      step.currentIndex = this._current + 1;
      step.iconSize = this._size === "small" ? this._status === StepStatusEnum.WAIT ? "xxs" : "xs" : "md";
      if (index < itemCount - 1 && itemArr[index + 1].status === StepStatusEnum.ERROR) {
        step.stepItemCls = step.stepItemCls ? Object.assign(step.stepItemCls, {
          "error-tail": true
        }) : {
          "error-tail": true
        };
      }
    }
  }
  setCls() {
    if (this._direction === StepDirectionEnum.HORIZONTAL) {
      this.clsStepsLabelVtl = true;
      this.clsStepsHztl = true;
      this.clsStepsVtl = false;
    } else if (this._direction === StepDirectionEnum.VERTICAL) {
      this.clsStepsVtl = true;
      this.clsStepsHztl = false;
    }
    if (this._size === "small") {
      this.clsStepsSmall = true;
    } else {
      this.clsStepsSmall = false;
    }
  }
  ngOnInit() {
    this.setCls();
  }
  ngAfterContentInit() {
    setTimeout(() => {
      this.setStepStyle();
    }, 0);
    this.stepItems.changes.subscribe((change) => {
      setTimeout(() => {
        this.setStepStyle();
      }, 0);
    });
  }
};
_StepsComponent.ɵfac = function StepsComponent_Factory(t) {
  return new (t || _StepsComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_StepsComponent.ɵcmp = ɵɵdefineComponent({
  type: _StepsComponent,
  selectors: [["Steps"], ["nzm-steps"]],
  contentQueries: function StepsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, StepComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stepItems = _t);
    }
  },
  hostVars: 10,
  hostBindings: function StepsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-steps", ctx.clsSteps)("am-steps-small", ctx.clsStepsSmall)("am-steps-label-vertical", ctx.clsStepsLabelVtl)("am-steps-vertical", ctx.clsStepsVtl)("am-steps-horizontal", ctx.clsStepsHztl);
    }
  },
  inputs: {
    current: "current",
    size: "size",
    status: "status",
    direction: "direction"
  },
  ngContentSelectors: _c09,
  decls: 1,
  vars: 0,
  template: function StepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var StepsComponent = _StepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsComponent, [{
    type: Component,
    args: [{
      selector: "Steps,nzm-steps",
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    stepItems: [{
      type: ContentChildren,
      args: [StepComponent]
    }],
    current: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    status: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    clsSteps: [{
      type: HostBinding,
      args: ["class.am-steps"]
    }],
    clsStepsSmall: [{
      type: HostBinding,
      args: ["class.am-steps-small"]
    }],
    clsStepsLabelVtl: [{
      type: HostBinding,
      args: ["class.am-steps-label-vertical"]
    }],
    clsStepsVtl: [{
      type: HostBinding,
      args: ["class.am-steps-vertical"]
    }],
    clsStepsHztl: [{
      type: HostBinding,
      args: ["class.am-steps-horizontal"]
    }]
  });
})();
var _StepsModule = class _StepsModule {
};
_StepsModule.ɵfac = function StepsModule_Factory(t) {
  return new (t || _StepsModule)();
};
_StepsModule.ɵmod = ɵɵdefineNgModule({
  type: _StepsModule,
  declarations: [StepsComponent, StepComponent],
  imports: [CommonModule, FormsModule, IconModule],
  exports: [StepsComponent, StepComponent]
});
_StepsModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, IconModule]
});
var StepsModule = _StepsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsModule, [{
    type: NgModule,
    args: [{
      exports: [StepsComponent, StepComponent],
      declarations: [StepsComponent, StepComponent],
      imports: [CommonModule, FormsModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-carousel.mjs
var _c010 = ["*"];
function DotIndicatorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵelement(1, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("am-carousel-wrap-dot-active", item_r1.active);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", item_r1.active ? ctx_r0.dotActiveStyle : ctx_r0.dotStyle);
  }
}
function CarouselComponent_DotIndicator_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "DotIndicator", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("page", ctx_r0.page)("dotStyle", ctx_r0.dotStyle)("pageCount", ctx_r0.pageCount)("dotActiveStyle", ctx_r0.dotActiveStyle);
  }
}
var _c15 = (a0) => ({
  overflow: a0
});
var _CarouselSlideComponent = class _CarouselSlideComponent {
  constructor() {
    this.container = true;
    this.height = "auto";
    this.overflow = "hidden";
  }
};
_CarouselSlideComponent.ɵfac = function CarouselSlideComponent_Factory(t) {
  return new (t || _CarouselSlideComponent)();
};
_CarouselSlideComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselSlideComponent,
  selectors: [["CarouselSlide"], ["nzm-carousel-slide"]],
  hostVars: 14,
  hostBindings: function CarouselSlideComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height)("left", ctx.left, "px")("top", ctx.top, "px")("margin", ctx.margin)("overflow", ctx.overflow);
      ɵɵclassProp("am-carousel-container", ctx.container);
    }
  },
  ngContentSelectors: _c010,
  decls: 1,
  vars: 0,
  template: function CarouselSlideComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var CarouselSlideComponent = _CarouselSlideComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideComponent, [{
    type: Component,
    args: [{
      selector: "CarouselSlide, nzm-carousel-slide",
      encapsulation: ViewEncapsulation$1.None,
      template: "<ng-content></ng-content>\n"
    }]
  }], null, {
    container: [{
      type: HostBinding,
      args: ["class.am-carousel-container"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width.px"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    left: [{
      type: HostBinding,
      args: ["style.left.px"]
    }],
    top: [{
      type: HostBinding,
      args: ["style.top.px"]
    }],
    margin: [{
      type: HostBinding,
      args: ["style.margin"]
    }],
    overflow: [{
      type: HostBinding,
      args: ["style.overflow"]
    }]
  });
})();
var _DotIndicatorComponent = class _DotIndicatorComponent {
  constructor() {
    this.items = [];
    this._page = 0;
    this._pageCount = 0;
    this.dotStyle = {};
    this.dotActiveStyle = {};
    this.dotColor = "white";
    this.dotIndicator = true;
  }
  set page(p) {
    this._page = p;
    this.updateSelected();
  }
  set pageCount(p) {
    this._pageCount = p || 0;
    this.updateItems();
  }
  updateItems() {
    this.items = new Array(this._pageCount);
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i] = {
        active: i == this._page
      };
    }
  }
  updateSelected() {
    if (this.items.length != this._pageCount) {
      return this.updateItems();
    }
    if (this.items.length == 0) {
      return;
    }
    for (let i = 0; i < this._pageCount; i++) {
      this.items[i].active = false;
    }
    this.items[this._page].active = true;
  }
};
_DotIndicatorComponent.ɵfac = function DotIndicatorComponent_Factory(t) {
  return new (t || _DotIndicatorComponent)();
};
_DotIndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _DotIndicatorComponent,
  selectors: [["DotIndicator"], ["nzm-dot-indicator"]],
  hostVars: 2,
  hostBindings: function DotIndicatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("dot-indicator", ctx.dotIndicator);
    }
  },
  inputs: {
    page: "page",
    pageCount: "pageCount",
    dotStyle: "dotStyle",
    dotActiveStyle: "dotActiveStyle",
    dotColor: "dotColor"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "am-carousel-wrap"], ["class", "am-carousel-wrap-dot", 3, "am-carousel-wrap-dot-active", 4, "ngFor", "ngForOf"], [1, "am-carousel-wrap-dot"], [3, "ngStyle"]],
  template: function DotIndicatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DotIndicatorComponent_div_1_Template, 2, 3, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: [NgForOf, NgStyle],
  encapsulation: 2
});
var DotIndicatorComponent = _DotIndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DotIndicatorComponent, [{
    type: Component,
    args: [{
      selector: "DotIndicator, nzm-dot-indicator",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="am-carousel-wrap">\n  <div *ngFor="let item of items" class="am-carousel-wrap-dot" [class.am-carousel-wrap-dot-active]="item.active">\n    <span [ngStyle]="item.active ? dotActiveStyle : dotStyle"></span>\n  </div>\n</div>\n'
    }]
  }], null, {
    page: [{
      type: Input
    }],
    pageCount: [{
      type: Input
    }],
    dotStyle: [{
      type: Input
    }],
    dotActiveStyle: [{
      type: Input
    }],
    dotColor: [{
      type: Input
    }],
    dotIndicator: [{
      type: HostBinding,
      args: ["class.dot-indicator"]
    }]
  });
})();
var _CarouselComponent = class _CarouselComponent {
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    if (typeof value === "undefined") {
      value = 0;
    }
    this._selectedIndex = Math.abs(value);
    if (this._nodeArr.length > 0) {
      this.carousel(1);
    }
  }
  panstart(event) {
    event.stopPropagation();
    event.preventDefault();
    if (!this._dragging) {
      return;
    }
    this.stopTimer();
    this._isMouseDown = true;
    this.touchObject = {
      startX: getEventTarget(event).pageX,
      startY: getEventTarget(event).pageY,
      direction: this.touchObject.direction
    };
  }
  panmove(event) {
    event.stopPropagation();
    event.preventDefault();
    if (!this._dragging || !this._isMouseDown) {
      return;
    }
    const {
      direction
    } = this.swipeDirection(this.touchObject.startX, getEventTarget(event).pageX, this.touchObject.startY, getEventTarget(event).pageY);
    if (direction === 0) {
      return;
    }
    const length = this.vertical ? Math.abs(getEventTarget(event).pageY - this.touchObject.startY) : Math.abs(getEventTarget(event).pageX - this.touchObject.startX);
    const offset = -this.touchObject.direction * length - this.currentSelectedIndex * this._rationWidth;
    this.touchObject = {
      startX: this.touchObject.startX,
      startY: this.touchObject.startY,
      endX: getEventTarget(event).pageX,
      endY: getEventTarget(event).pageY,
      length,
      direction,
      offset
    };
    if (direction !== 0) {
      this.setSlideStyles(this.currentSelectedIndex, this.touchObject.direction);
    }
    this.getListStyles(offset);
  }
  panend(event) {
    event.stopPropagation();
    event.preventDefault();
    if (!this._dragging || !this._isMouseDown || !this.touchObject.length || this.touchObject.length === void 0) {
      this._isMouseDown = false;
      return;
    }
    this._isMouseDown = false;
    if (this.touchObject.length > this.swipeSpeed) {
      this.carousel(this.touchObject.direction);
    } else {
      this.getListStyles(this.touchObject.direction * this.touchObject.length + this.touchObject.offset);
      this.style["transition"] = this._transition;
    }
    setTimeout(() => {
      this.startTimer();
    }, this.speed);
  }
  cancel() {
    setTimeout(() => {
      this.startTimer();
    }, this.speed);
  }
  resize() {
    if (this._resizeTimer) {
      clearTimeout(this._resizeTimer);
    }
    this._resizeTimer = setTimeout(() => {
      this.ngAfterViewInit();
      clearTimeout(this._resizeTimer);
    }, 200);
  }
  constructor(_ele) {
    this._ele = _ele;
    this.style = {
      height: "auto",
      width: "100%",
      transform: "translate3d(0px, 0px, 0px)",
      margin: ""
    };
    this.lastIndex = 0;
    this.currentSelectedIndex = 0;
    this._nodeArr = [];
    this._isMouseDown = false;
    this._rationWidth = 0;
    this._currentSlideWidth = 0;
    this._currentSlideHeight = 0;
    this._transition = "";
    this._spaceWidth = 0;
    this._dragging = true;
    this._selectedIndex = 0;
    this.speed = 500;
    this.dots = true;
    this.vertical = false;
    this.autoplay = false;
    this.autoplayInterval = 3e3;
    this.infinite = false;
    this.dotStyle = {};
    this.dotActiveStyle = {};
    this.frameOverflow = "hidden";
    this.cellSpacing = 0;
    this.slideWidth = 1;
    this.swipeSpeed = 12;
    this.dragging = true;
    this.afterChange = new EventEmitter();
    this.beforeChange = new EventEmitter();
    this.carouselWrapper = true;
    this.carouselwrap = true;
  }
  initCarouselSize() {
    const nativeElement = this._ele.nativeElement;
    this.slideHeight = nativeElement.querySelector("carouselslide").clientHeight;
    this._currentSlideHeight = this.slideHeight * this.slideWidth;
    this._currentSlideWidth = nativeElement.clientWidth;
    this._rationWidth = this.vertical ? this._currentSlideHeight : this._currentSlideWidth * this.slideWidth;
    this._spaceWidth = ((this.vertical ? this.slideHeight : this._currentSlideWidth) - this._rationWidth) / 2;
  }
  carouselInit(items) {
    this.infinite = this.infinite || true;
    this._nodeArr = items["_results"];
    const shouldDragging = this._nodeArr.length > 1;
    this._dragging = this.dragging && shouldDragging ? true : false;
    if (this._nodeArr.length > 1) {
      this.lastIndex = this._nodeArr.length - 1;
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          v.width = this.vertical ? "auto" : this._rationWidth - this.cellSpacing;
          v.left = this.vertical ? 0 : index === this.lastIndex ? -this._rationWidth : index * this._rationWidth;
          v.top = this.vertical ? index === this.lastIndex ? -this._rationWidth : index * this._rationWidth : 0;
          v.margin = this.vertical ? `${this.cellSpacing / 2}px auto` : `auto ${this.cellSpacing / 2}px`;
        });
        this.startTimer();
      }, 0);
    } else if (this._nodeArr.length === 1) {
      setTimeout(() => {
        this._nodeArr.forEach((v) => {
          v.width = this.vertical ? "auto" : this._rationWidth - this.cellSpacing;
          v.left = 0;
          v.top = 0;
          v.margin = `auto ${this.cellSpacing / 2}px`;
        });
        this.stopTimer();
      }, 0);
    }
  }
  startTimer() {
    if (!this.autoplay) {
      return;
    }
    this.stopTimer();
    this._timer = this.autoplayInterval ? setInterval(() => {
      if (document.getElementsByTagName("carousel").length === 0) {
        return;
      }
      this.carousel(1);
    }, this.autoplayInterval) : 0;
  }
  stopTimer() {
    clearInterval(this._timer);
  }
  carousel(moveDirection) {
    if (this.vertical) {
      if (moveDirection === 1) {
        this.moveUp();
      } else if (moveDirection === -1) {
        this.moveDown();
      }
    } else {
      if (moveDirection === 1) {
        this.moveLeft();
      } else if (moveDirection === -1) {
        this.moveRight();
      }
    }
    this.style["transition"] = this._transition;
  }
  moveUp() {
    this.gotoCarousel(this.getAfterNode(false));
  }
  moveDown() {
    this.gotoCarousel(this.getAfterNode(true));
  }
  moveLeft() {
    this.gotoCarousel(this.getAfterNode(false));
  }
  moveRight() {
    this.gotoCarousel(this.getAfterNode(true));
  }
  getAfterNode(pre) {
    let nextIndex;
    if (pre) {
      if (this.currentSelectedIndex <= 0) {
        this.getListStyles(this._rationWidth);
        setTimeout(() => {
          this._nodeArr.forEach((v, tempIndex) => {
            if (tempIndex === 0) {
              v.left = this.vertical ? 0 : this._nodeArr.length * this._rationWidth;
              v.top = this.vertical ? this._nodeArr.length * this._rationWidth : 0;
            } else {
              v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
              v.top = this.vertical ? tempIndex * this._rationWidth : 0;
            }
          });
          this.getListStyles(-this._rationWidth * (this.items.length - 1));
        }, this.speed);
        nextIndex = !this.infinite ? null : this.lastIndex;
        this.beforeChange.emit({
          from: this.currentSelectedIndex,
          to: nextIndex
        });
        return nextIndex;
      }
      nextIndex = this.currentSelectedIndex - 1;
      this.getListStyles(nextIndex * this._rationWidth * this.touchObject.direction);
      this._nodeArr.forEach((v, tempIndex) => {
        if (0 === tempIndex && nextIndex === this._nodeArr.length - 2) {
          v.left = 0;
          v.top = 0;
        }
      });
      this.beforeChange.emit({
        from: this.currentSelectedIndex,
        to: nextIndex
      });
      return nextIndex;
    } else {
      if (this.currentSelectedIndex >= this.lastIndex) {
        this.setSlideStyles(this.currentSelectedIndex, 1);
        this.getListStyles(-(this.lastIndex + 1) * this._rationWidth);
        nextIndex = !this.infinite ? null : 0;
        this.beforeChange.emit({
          from: this.currentSelectedIndex,
          to: nextIndex
        });
        return nextIndex;
      }
      nextIndex = this.currentSelectedIndex + 1;
      this.setSlideStyles(this.currentSelectedIndex, 1);
      this.getListStyles(-nextIndex * this._rationWidth);
      this.beforeChange.emit({
        from: this.currentSelectedIndex,
        to: nextIndex
      });
      return nextIndex;
    }
  }
  caculateDirectionLeftCurrentIndex() {
    const previousIndex = this.currentSelectedIndex;
    this.currentSelectedIndex = (previousIndex + 1) % this.items.length;
  }
  caculateDirectionRightCurrentIndex() {
    if (this.currentSelectedIndex === 0) {
      this.currentSelectedIndex = this.items.length;
    }
    const previousIndex = this.currentSelectedIndex;
    this.currentSelectedIndex = (previousIndex - 1) % this.items.length;
  }
  gotoCarousel(afterIndex) {
    if (afterIndex === null) {
      return;
    }
    this.getCurrentIndex();
    if (afterIndex === 0) {
      setTimeout(() => {
        this._nodeArr.forEach((v, index) => {
          if (this._nodeArr.length > 1 && index === this._nodeArr.length - 1) {
            v.left = this.vertical ? 0 : -this._rationWidth;
            v.top = this.vertical ? -this._rationWidth : 0;
          } else {
            v.left = this.vertical ? 0 : index * this._rationWidth;
            v.top = this.vertical ? index * this._rationWidth : 0;
          }
        });
        if (this._nodeArr.length > 1) {
          this.startTimer();
        }
        this.getListStyles(0);
      }, this.speed);
    }
    this.currentSelectedIndex = afterIndex;
    this.afterChange.emit(this.currentSelectedIndex);
  }
  getCurrentIndex() {
    if (this.touchObject.direction === 1) {
      this.caculateDirectionLeftCurrentIndex();
    } else {
      this.caculateDirectionRightCurrentIndex();
    }
  }
  setSlideStyles(index, direction, xDist = 0) {
    if (direction === 1) {
      this._nodeArr.forEach((v, tempIndex) => {
        if (index < this._nodeArr.length && index - 1 === tempIndex) {
          if (xDist === 0 || xDist > this._spaceWidth) {
            v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
            v.top = this.vertical ? (this._nodeArr.length + tempIndex) * this._rationWidth : 0;
          }
        } else if (this._nodeArr.length - 1 === tempIndex && index !== 2) {
          if (xDist === 0 || xDist > this._spaceWidth) {
            v.left = this.vertical ? 0 : (this._nodeArr.length - 1) * this._rationWidth;
            v.top = this.vertical ? (this._nodeArr.length - 1) * this._rationWidth : 0;
          }
        } else if (index === this._nodeArr.length - 1 && tempIndex === 1 && this.autoplay) {
          v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        } else if (index === this._nodeArr.length - 1 && tempIndex === 0 && !this.autoplay) {
          v.left = this.vertical ? 0 : (this._nodeArr.length + tempIndex) * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        }
      });
    } else if (direction === -1) {
      this._nodeArr.forEach((v, tempIndex) => {
        if (index === 0 && this._nodeArr.length - 1 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index === this._nodeArr.length - 2 && index + 1 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index === 1 && 0 === tempIndex) {
          v.left = this.vertical ? 0 : direction * this._rationWidth * tempIndex;
          v.top = this.vertical ? direction * this._rationWidth : 0;
        } else if (index > 1) {
          v.left = this.vertical ? 0 : tempIndex * this._rationWidth;
          v.top = this.vertical ? tempIndex * this._rationWidth : 0;
        }
      });
    }
  }
  getListStyles(offset = 0) {
    const positionOffset = offset + (this.vertical ? (this.slideHeight - this._currentSlideHeight) / 2 : (this._currentSlideWidth - this._rationWidth) / 2) - this.cellSpacing;
    this.style = {
      height: this._currentSlideHeight + "px",
      width: "100%",
      transform: this.vertical ? `translate3d(0px, ${positionOffset}px, 0px)` : `translate3d(${positionOffset}px, 0px, 0px)`,
      margin: this.vertical ? `${this.cellSpacing / 2 * -1}px 0px` : `0px ${this.cellSpacing / 2 * -1}px`
    };
  }
  swipeDirection(x1, x2, y1, y2) {
    const xDist = x1 - x2;
    const yDist = y1 - y2;
    const r = Math.atan2(yDist, xDist);
    let swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return {
        direction: 1,
        xDist
      };
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return {
        direction: 1,
        xDist
      };
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return {
        direction: -1,
        xDist
      };
    }
    if (this.vertical === true) {
      if (swipeAngle >= 35 + 33 && swipeAngle <= 135) {
        return {
          direction: 1,
          xDist
        };
      } else {
        return {
          direction: -1,
          xDist
        };
      }
    }
    return {
      direction: 0,
      xDist
    };
  }
  get page() {
    return this.dots ? this.currentSelectedIndex : 0;
  }
  get pageCount() {
    return this.dots ? this.items.length : 0;
  }
  get dotindicatorStatus() {
    return this.dots ? this.items.length > 1 : this.dots;
  }
  ngAfterViewInit() {
    this.touchObject = {
      direction: 1
    };
    this._transition = `transform ${this.speed / 1e3}s`;
    this.items.changes.subscribe((items) => {
      this.carouselInit(items);
    });
    this.initCarouselSize();
    if (!this._resizeTimer) {
      this.selectedIndex = this.items.length - 1 < this.selectedIndex ? 0 : this.selectedIndex;
      setTimeout(() => {
        this.currentSelectedIndex = this.selectedIndex;
      }, 0);
    }
    const selectedIndex = this._resizeTimer ? this.currentSelectedIndex : this.selectedIndex;
    const index = this.items.length > 1 ? this.items.length - 1 === selectedIndex ? -1 : selectedIndex : 0;
    this.getListStyles(-index * this._rationWidth);
    this.carouselInit(this.items);
    const nativeElement = this._ele.nativeElement;
    const targetNode = nativeElement.querySelector("carouselslide");
    const config = {
      attributes: true,
      childList: true,
      subtree: true
    };
    const callback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type == "attributes") {
          if (this.slideHeight !== nativeElement.querySelector("carouselslide").clientHeight) {
            this.initCarouselSize();
            this.getListStyles(-index * this._rationWidth);
            this.carouselInit(this.items);
          }
        }
      }
    };
    if (this._observer) {
      this._observer.disconnect();
    }
    this._observer = new MutationObserver(callback);
    this._observer.observe(targetNode, config);
  }
  ngOnDestroy() {
    this._observer.disconnect();
    this._observer = null;
    this.stopTimer();
  }
};
_CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
  return new (t || _CarouselComponent)(ɵɵdirectiveInject(ElementRef));
};
_CarouselComponent.ɵcmp = ɵɵdefineComponent({
  type: _CarouselComponent,
  selectors: [["Carousel"], ["nzm-carousel"]],
  contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, CarouselSlideComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  hostVars: 4,
  hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function CarouselComponent_mousedown_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("touchstart", function CarouselComponent_touchstart_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("mousemove", function CarouselComponent_mousemove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("touchmove", function CarouselComponent_touchmove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("mouseleave", function CarouselComponent_mouseleave_HostBindingHandler($event) {
        return ctx.panend($event);
      })("mouseup", function CarouselComponent_mouseup_HostBindingHandler($event) {
        return ctx.panend($event);
      })("touchend", function CarouselComponent_touchend_HostBindingHandler($event) {
        return ctx.panend($event);
      })("touchcancel", function CarouselComponent_touchcancel_HostBindingHandler() {
        return ctx.cancel();
      })("resize", function CarouselComponent_resize_HostBindingHandler() {
        return ctx.resize();
      }, false, ɵɵresolveWindow);
    }
    if (rf & 2) {
      ɵɵclassProp("am-carousel", ctx.carouselWrapper)("carousel", ctx.carouselwrap);
    }
  },
  inputs: {
    speed: "speed",
    dots: "dots",
    vertical: "vertical",
    autoplay: "autoplay",
    autoplayInterval: "autoplayInterval",
    infinite: "infinite",
    dotStyle: "dotStyle",
    dotActiveStyle: "dotActiveStyle",
    frameOverflow: "frameOverflow",
    cellSpacing: "cellSpacing",
    slideWidth: "slideWidth",
    swipeSpeed: "swipeSpeed",
    dragging: "dragging",
    selectedIndex: "selectedIndex"
  },
  outputs: {
    afterChange: "afterChange",
    beforeChange: "beforeChange"
  },
  ngContentSelectors: _c010,
  decls: 4,
  vars: 5,
  consts: [[1, "slider-frame", 3, "ngStyle"], [1, "slider-list", 3, "ngStyle"], ["class", "am-carousel-wrap-dot", 3, "page", "dotStyle", "pageCount", "dotActiveStyle", 4, "ngIf"], [1, "am-carousel-wrap-dot", 3, "page", "dotStyle", "pageCount", "dotActiveStyle"]],
  template: function CarouselComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "ul", 1);
      ɵɵprojection(2);
      ɵɵelementEnd()();
      ɵɵtemplate(3, CarouselComponent_DotIndicator_3_Template, 1, 4, "DotIndicator", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c15, ctx.frameOverflow));
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ctx.style);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.dotindicatorStatus);
    }
  },
  dependencies: [NgIf, NgStyle, DotIndicatorComponent],
  encapsulation: 2
});
var CarouselComponent = _CarouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "Carousel, nzm-carousel",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="slider-frame" [ngStyle]="{ overflow: frameOverflow }">\n  <ul class="slider-list" [ngStyle]="style">\n    <ng-content></ng-content>\n  </ul>\n</div>\n<DotIndicator\n  *ngIf="dotindicatorStatus"\n  class="am-carousel-wrap-dot"\n  [page]="page"\n  [dotStyle]="dotStyle"\n  [pageCount]="pageCount"\n  [dotActiveStyle]="dotActiveStyle"\n></DotIndicator>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    items: [{
      type: ContentChildren,
      args: [CarouselSlideComponent]
    }],
    speed: [{
      type: Input
    }],
    dots: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }],
    autoplay: [{
      type: Input
    }],
    autoplayInterval: [{
      type: Input
    }],
    infinite: [{
      type: Input
    }],
    dotStyle: [{
      type: Input
    }],
    dotActiveStyle: [{
      type: Input
    }],
    frameOverflow: [{
      type: Input
    }],
    cellSpacing: [{
      type: Input
    }],
    slideWidth: [{
      type: Input
    }],
    swipeSpeed: [{
      type: Input
    }],
    dragging: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    afterChange: [{
      type: Output
    }],
    beforeChange: [{
      type: Output
    }],
    carouselWrapper: [{
      type: HostBinding,
      args: ["class.am-carousel"]
    }],
    carouselwrap: [{
      type: HostBinding,
      args: ["class.carousel"]
    }],
    panstart: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    panmove: [{
      type: HostListener,
      args: ["mousemove", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    panend: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }, {
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    cancel: [{
      type: HostListener,
      args: ["touchcancel"]
    }],
    resize: [{
      type: HostListener,
      args: ["window:resize"]
    }]
  });
})();
var _CarouselModule = class _CarouselModule {
};
_CarouselModule.ɵfac = function CarouselModule_Factory(t) {
  return new (t || _CarouselModule)();
};
_CarouselModule.ɵmod = ɵɵdefineNgModule({
  type: _CarouselModule,
  declarations: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent],
  imports: [CommonModule],
  exports: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent]
});
_CarouselModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var CarouselModule = _CarouselModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent],
      exports: [CarouselComponent, CarouselSlideComponent, DotIndicatorComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-checkbox.mjs
var _c011 = ["Checkbox", ""];
var _c16 = ["*"];
function CheckboxItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 2);
    ɵɵlistener("onChange", function CheckboxItemComponent_ng_template_2_Template_label_onChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.change($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.name)("value", ctx_r0.value)("checked", ctx_r0.checked)("disabled", ctx_r0.disabled);
  }
}
var _CheckboxComponent = class _CheckboxComponent {
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this.updateClassMap();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.updateClassMap();
  }
  onClick(event) {
    event.preventDefault();
    if (!this._disabled) {
      this.updateValue(!this.checked);
    }
  }
  constructor() {
    this.prefixCls = "am-checkbox";
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: false,
      [`${this.prefixCls}-disabled`]: false
    };
    this._checked = false;
    this._disabled = false;
    this.onChange = new EventEmitter();
    this.checkBoxWrapper = true;
  }
  updateValue(value) {
    this.checked = value;
    this.onChange.emit({
      name: this.name,
      value: this.value,
      checked: value
    });
  }
  ngOnInit() {
    this.updateClassMap();
  }
  updateClassMap() {
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
  }
};
_CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
  return new (t || _CheckboxComponent)();
};
_CheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _CheckboxComponent,
  selectors: [["", "Checkbox", ""], ["", "nzm-checkbox", ""]],
  hostVars: 2,
  hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CheckboxComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("am-checkbox-wrapper", ctx.checkBoxWrapper);
    }
  },
  inputs: {
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange"
  },
  attrs: _c011,
  ngContentSelectors: _c16,
  decls: 4,
  vars: 11,
  consts: [[3, "ngClass"], ["type", "checkbox", 3, "checked", "disabled"]],
  template: function CheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵelement(1, "input", 1)(2, "span");
      ɵɵelementEnd();
      ɵɵprojection(3);
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.classMap);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
      ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
      ɵɵattribute("name", ctx.name)("value", ctx.value);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-inner");
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var CheckboxComponent = _CheckboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{
      selector: "[Checkbox], [nzm-checkbox]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<span [ngClass]="classMap">\n  <input\n    type="checkbox"\n    class="{{ prefixCls }}-input"\n    [attr.name]="name"\n    [attr.value]="value"\n    [checked]="checked"\n    [disabled]="disabled"\n  />\n  <span class="{{ prefixCls }}-inner"></span>\n</span>\n<ng-content></ng-content>\n'
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    checkBoxWrapper: [{
      type: HostBinding,
      args: ["class.am-checkbox-wrapper"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _AgreeItemComponent = class _AgreeItemComponent {
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.prefixCls = "am-checkbox";
    this.checked = false;
    this._disabled = false;
    this.onChange = new EventEmitter();
    this.checkboxAgree = true;
  }
  change(event) {
    this.checked = event.checked;
    this._ngModelOnChange(event.checked);
    this.onChange.emit(event);
  }
  writeValue(value) {
    this.checked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
};
_AgreeItemComponent.ɵfac = function AgreeItemComponent_Factory(t) {
  return new (t || _AgreeItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_AgreeItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _AgreeItemComponent,
  selectors: [["AgreeItem"], ["nzm-agree-item"]],
  hostVars: 2,
  hostBindings: function AgreeItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-checkbox-agree", ctx.checkboxAgree);
    }
  },
  inputs: {
    name: "name",
    value: "value",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _AgreeItemComponent),
    multi: true
  }])],
  ngContentSelectors: _c16,
  decls: 2,
  vars: 7,
  consts: [["Checkbox", "", 3, "name", "value", "checked", "disabled", "onChange"]],
  template: function AgreeItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "label", 0);
      ɵɵlistener("onChange", function AgreeItemComponent_Template_label_onChange_0_listener($event) {
        return ctx.change($event);
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-agree-label");
      ɵɵproperty("name", ctx.name)("value", ctx.value)("checked", ctx.checked)("disabled", ctx.disabled);
    }
  },
  dependencies: [CheckboxComponent],
  encapsulation: 2,
  changeDetection: 0
});
var AgreeItemComponent = _AgreeItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AgreeItemComponent, [{
    type: Component,
    args: [{
      selector: "AgreeItem, nzm-agree-item",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AgreeItemComponent),
        multi: true
      }],
      template: '<label\n  Checkbox\n  class="{{ prefixCls }}-agree-label"\n  [name]="name"\n  [value]="value"\n  [checked]="checked"\n  [disabled]="disabled"\n  (onChange)="change($event)"\n>\n  <ng-content></ng-content>\n</label>\n'
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    checkboxAgree: [{
      type: HostBinding,
      args: ["class.am-checkbox-agree"]
    }]
  });
})();
var _CheckboxItemComponent = class _CheckboxItemComponent {
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.prefixCls = "am-checkbox";
    this.checked = false;
    this._disabled = false;
    this.wrap = false;
    this.error = false;
    this.multipleLine = false;
    this.platform = "ios";
    this.align = "middle";
    this.onChange = new EventEmitter();
  }
  onCheckboxClick(event) {
  }
  change(event) {
    this.checked = event.checked;
    this._ngModelOnChange(event.checked);
    this.onChange.emit(event);
  }
  writeValue(value) {
    this.checked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
};
_CheckboxItemComponent.ɵfac = function CheckboxItemComponent_Factory(t) {
  return new (t || _CheckboxItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_CheckboxItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _CheckboxItemComponent,
  selectors: [["CheckboxItem"], ["nzm-checkbox-item"]],
  inputs: {
    name: "name",
    value: "value",
    arrow: "arrow",
    extra: "extra",
    wrap: "wrap",
    error: "error",
    multipleLine: "multipleLine",
    platform: "platform",
    align: "align",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _CheckboxItemComponent),
    multi: true
  }])],
  ngContentSelectors: _c16,
  decls: 4,
  vars: 10,
  consts: [[3, "className", "wrap", "align", "arrow", "error", "extra", "thumb", "disabled", "platform", "multipleLine", "onClick"], ["checkbox", ""], ["Checkbox", "", 3, "name", "value", "checked", "disabled", "onChange"]],
  template: function CheckboxItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ListItem", 0);
      ɵɵlistener("onClick", function CheckboxItemComponent_Template_ListItem_onClick_0_listener($event) {
        return ctx.onCheckboxClick($event);
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, CheckboxItemComponent_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(3);
      ɵɵproperty("className", "am-checkbox-item " + (ctx.disabled ? "am-checkbox-item-disabled" : ""))("wrap", ctx.wrap)("align", ctx.align)("arrow", ctx.arrow)("error", ctx.error)("extra", ctx.extra)("thumb", _r1)("disabled", ctx.disabled)("platform", ctx.platform)("multipleLine", ctx.multipleLine);
    }
  },
  dependencies: [ListItemComponent, CheckboxComponent],
  encapsulation: 2,
  changeDetection: 0
});
var CheckboxItemComponent = _CheckboxItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxItemComponent, [{
    type: Component,
    args: [{
      selector: "CheckboxItem, nzm-checkbox-item",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CheckboxItemComponent),
        multi: true
      }],
      template: `<ListItem
  [className]="'am-checkbox-item ' + (disabled ? 'am-checkbox-item-disabled' : '')"
  [wrap]="wrap"
  [align]="align"
  [arrow]="arrow"
  [error]="error"
  [extra]="extra"
  [thumb]="checkbox"
  [disabled]="disabled"
  [platform]="platform"
  [multipleLine]="multipleLine"
  (onClick)="onCheckboxClick($event)"
>
  <ng-content></ng-content>
</ListItem>
<ng-template #checkbox>
  <label Checkbox [name]="name" [value]="value" [checked]="checked" [disabled]="disabled" (onChange)="change($event)">
  </label>
</ng-template>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    arrow: [{
      type: Input
    }],
    extra: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    multipleLine: [{
      type: Input
    }],
    platform: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var _CheckboxModule = class _CheckboxModule {
};
_CheckboxModule.ɵfac = function CheckboxModule_Factory(t) {
  return new (t || _CheckboxModule)();
};
_CheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: _CheckboxModule,
  declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
  imports: [CommonModule, FormsModule, ListModule],
  exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
});
_CheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, ListModule]
});
var CheckboxModule = _CheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ListModule],
      declarations: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent],
      exports: [CheckboxComponent, CheckboxItemComponent, AgreeItemComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-radio.mjs
var _c012 = ["Radio", ""];
var _c17 = ["*"];
function RadioItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 2);
    ɵɵlistener("onChange", function RadioItemComponent_ng_template_2_Template_label_onChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.change($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.name)("value", ctx_r0.value)("checked", ctx_r0.checked)("disabled", ctx_r0.disabled);
  }
}
var _RadioComponent = class _RadioComponent {
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this.updateClassMap();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.updateClassMap();
  }
  onClick(event) {
    event.preventDefault();
    if (!this._disabled && !this._checked) {
      this.updateValue(true);
    }
  }
  constructor() {
    this.prefixCls = "am-radio";
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
    this._checked = false;
    this._disabled = false;
    this.onChange = new EventEmitter();
    this.radioWrapper = true;
  }
  updateValue(checkValue) {
    this.checked = checkValue;
    this.onChange.emit({
      name: this.name,
      value: this.value
    });
  }
  ngOnInit() {
    this.updateClassMap();
  }
  updateClassMap() {
    this.classMap = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-checked`]: this.checked,
      [`${this.prefixCls}-disabled`]: this.disabled
    };
  }
};
_RadioComponent.ɵfac = function RadioComponent_Factory(t) {
  return new (t || _RadioComponent)();
};
_RadioComponent.ɵcmp = ɵɵdefineComponent({
  type: _RadioComponent,
  selectors: [["", "Radio", ""], ["", "nzm-radio", ""]],
  hostVars: 2,
  hostBindings: function RadioComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function RadioComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("am-radio-wrapper", ctx.radioWrapper);
    }
  },
  inputs: {
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange"
  },
  attrs: _c012,
  ngContentSelectors: _c17,
  decls: 4,
  vars: 11,
  consts: [[3, "ngClass"], ["type", "radio", 3, "checked", "disabled"]],
  template: function RadioComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0);
      ɵɵelement(1, "input", 1)(2, "span");
      ɵɵelementEnd();
      ɵɵprojection(3);
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.classMap);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-input");
      ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
      ɵɵattribute("name", ctx.name)("value", ctx.value);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-inner");
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var RadioComponent = _RadioComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioComponent, [{
    type: Component,
    args: [{
      selector: "[Radio], [nzm-radio]",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<span [ngClass]="classMap">\n  <input\n    type="radio"\n    class="{{ prefixCls }}-input"\n    [attr.name]="name"\n    [attr.value]="value"\n    [checked]="checked"\n    [disabled]="disabled"\n  />\n  <span class="{{ prefixCls }}-inner"></span>\n</span>\n<ng-content></ng-content>\n'
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    radioWrapper: [{
      type: HostBinding,
      args: ["class.am-radio-wrapper"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _RadioItemComponent = class _RadioItemComponent {
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this.cdr.markForCheck();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.cdr.markForCheck();
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.select$ = new Subject();
    this.prefixCls = "am-radio";
    this._checked = false;
    this._disabled = false;
    this.wrap = false;
    this.error = false;
    this.multipleLine = false;
    this.platform = "ios";
    this.align = "middle";
  }
  onRadioItemClick(event) {
  }
  change(event) {
    if (!this.disabled && !this.checked) {
      this.select$.next(this);
    }
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
};
_RadioItemComponent.ɵfac = function RadioItemComponent_Factory(t) {
  return new (t || _RadioItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_RadioItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _RadioItemComponent,
  selectors: [["RadioItem"], ["nzm-radio-item"]],
  inputs: {
    name: "name",
    value: "value",
    arrow: "arrow",
    thumb: "thumb",
    wrap: "wrap",
    error: "error",
    multipleLine: "multipleLine",
    platform: "platform",
    align: "align",
    disabled: "disabled"
  },
  ngContentSelectors: _c17,
  decls: 4,
  vars: 10,
  consts: [[3, "wrap", "align", "arrow", "error", "extra", "thumb", "disabled", "platform", "multipleLine", "className", "onClick"], ["radio", ""], ["Radio", "", 3, "name", "value", "checked", "disabled", "onChange"]],
  template: function RadioItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ListItem", 0);
      ɵɵlistener("onClick", function RadioItemComponent_Template_ListItem_onClick_0_listener($event) {
        return ctx.onRadioItemClick($event);
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
      ɵɵtemplate(2, RadioItemComponent_ng_template_2_Template, 1, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(3);
      ɵɵproperty("wrap", ctx.wrap)("align", ctx.align)("arrow", ctx.arrow)("error", ctx.error)("extra", _r1)("thumb", ctx.thumb)("disabled", ctx.disabled)("platform", ctx.platform)("multipleLine", ctx.multipleLine)("className", "am-radio-item " + (ctx.disabled ? "am-radio-item-disabled" : ""));
    }
  },
  dependencies: [ListItemComponent, RadioComponent],
  encapsulation: 2,
  changeDetection: 0
});
var RadioItemComponent = _RadioItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioItemComponent, [{
    type: Component,
    args: [{
      selector: "RadioItem, nzm-radio-item",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ListItem
  [wrap]="wrap"
  [align]="align"
  [arrow]="arrow"
  [error]="error"
  [extra]="radio"
  [thumb]="thumb"
  [disabled]="disabled"
  [platform]="platform"
  [multipleLine]="multipleLine"
  [className]="'am-radio-item ' + (disabled ? 'am-radio-item-disabled' : '')"
  (onClick)="onRadioItemClick($event)"
>
  <ng-content></ng-content>
</ListItem>
<ng-template #radio>
  <label
    Radio
    [name]="name"
    [value]="value"
    [checked]="checked"
    [disabled]="disabled"
    (onChange)="change($event)"
  ></label>
</ng-template>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    arrow: [{
      type: Input
    }],
    thumb: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    multipleLine: [{
      type: Input
    }],
    platform: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var RADIO_ITEM_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioItemGroupComponent),
  multi: true
};
var _RadioItemGroupComponent = class _RadioItemGroupComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.destroy$ = new Subject();
    this.onChange = new EventEmitter();
  }
  updateChildrenStatus() {
    if (this.radioItems && typeof this.selectedValue !== "undefined" && null !== this.selectedValue) {
      Promise.resolve().then(() => {
        this.radioItems.forEach((radioItem) => {
          radioItem.checked = radioItem.value === this.selectedValue;
          radioItem.markForCheck();
        });
      });
    }
  }
  ngAfterContentInit() {
    this.radioItems.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
      this.updateChildrenStatus();
      if (this.selectSubscription) {
        this.selectSubscription.unsubscribe();
      }
      this.selectSubscription = merge(...this.radioItems.map((radioItem) => radioItem.select$)).pipe(takeUntil(this.destroy$)).subscribe((radioItem) => {
        if (typeof this.selectedValue !== "undefined" && null !== this.selectedValue) {
          this.selectedValue = radioItem.value;
          this._ngModelOnChange(radioItem.value);
          this.updateChildrenStatus();
          if (this.onChange) {
            this.onChange.emit({
              name: radioItem.name,
              value: radioItem.value
            });
          }
        }
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next("");
    this.destroy$.complete();
  }
  writeValue(value) {
    if (typeof value !== "undefined" && null !== value) {
      this.selectedValue = value;
      this.updateChildrenStatus();
      this.cdr.markForCheck();
    }
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
};
_RadioItemGroupComponent.ɵfac = function RadioItemGroupComponent_Factory(t) {
  return new (t || _RadioItemGroupComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_RadioItemGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _RadioItemGroupComponent,
  selectors: [["RadioItemGroup"], ["nzm-radio-item-group"]],
  contentQueries: function RadioItemGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, RadioItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.radioItems = _t);
    }
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([RADIO_ITEM_GROUP_VALUE_ACCESSOR])],
  ngContentSelectors: _c17,
  decls: 1,
  vars: 0,
  template: function RadioItemGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var RadioItemGroupComponent = _RadioItemGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioItemGroupComponent, [{
    type: Component,
    args: [{
      selector: "RadioItemGroup, nzm-radio-item-group",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [RADIO_ITEM_GROUP_VALUE_ACCESSOR],
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    radioItems: [{
      type: ContentChildren,
      args: [forwardRef(() => RadioItemComponent)]
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var _RadioModule = class _RadioModule {
};
_RadioModule.ɵfac = function RadioModule_Factory(t) {
  return new (t || _RadioModule)();
};
_RadioModule.ɵmod = ɵɵdefineNgModule({
  type: _RadioModule,
  declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
  imports: [CommonModule, FormsModule, ListModule],
  exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
});
_RadioModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, ListModule]
});
var RadioModule = _RadioModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ListModule],
      declarations: [RadioComponent, RadioItemComponent, RadioItemGroupComponent],
      exports: [RadioComponent, RadioItemComponent, RadioItemGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-progress.mjs
var _ProgressComponent = class _ProgressComponent {
  get percent() {
    return this._percent;
  }
  set percent(value) {
    this._percent = value;
    if (value > 100) {
      this._exceedance = true;
    } else {
      this._exceedance = false;
    }
  }
  get value() {
    return this.percent;
  }
  get fixOuter() {
    return "fixed" === this.position;
  }
  get hideOuter() {
    return !this.unfilled && !this._exceedance;
  }
  get exceedance() {
    return this._exceedance;
  }
  constructor() {
    this.prefixCls = "am-progress";
    this._percent = 0;
    this._exceedance = false;
    this.unfilled = true;
    this.position = "fixed";
    this.barStyle = {};
    this.max = 100;
    this.amProgress = true;
    this.outer = true;
  }
};
_ProgressComponent.ɵfac = function ProgressComponent_Factory(t) {
  return new (t || _ProgressComponent)();
};
_ProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _ProgressComponent,
  selectors: [["Progress"], ["nzm-progress"]],
  hostVars: 12,
  hostBindings: function ProgressComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("max", ctx.max)("value", ctx.value);
      ɵɵclassProp("am-progress", ctx.amProgress)("am-progress-outer", ctx.outer)("am-progress-fixed-outer", ctx.fixOuter)("am-progress-hide-outer", ctx.hideOuter)("am-progress-exceedance", ctx.exceedance);
    }
  },
  inputs: {
    unfilled: "unfilled",
    position: "position",
    barStyle: "barStyle",
    percent: "percent"
  },
  decls: 1,
  vars: 6,
  consts: [[3, "ngStyle"]],
  template: function ProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-bar");
      ɵɵstyleProp("width", ctx.percent <= 100 ? ctx.percent : 1e4 / ctx.percent, "%");
      ɵɵproperty("ngStyle", ctx.barStyle);
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2
});
var ProgressComponent = _ProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressComponent, [{
    type: Component,
    args: [{
      selector: "Progress, nzm-progress",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div\n  class="{{ prefixCls }}-bar"\n  [ngStyle]="barStyle"\n  [style.width.%]="percent <= 100 ? percent : 10000 / percent"\n></div>\n'
    }]
  }], () => [], {
    unfilled: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    barStyle: [{
      type: Input
    }],
    percent: [{
      type: Input
    }],
    max: [{
      type: HostBinding,
      args: ["attr.max"]
    }],
    value: [{
      type: HostBinding,
      args: ["attr.value"]
    }],
    amProgress: [{
      type: HostBinding,
      args: ["class.am-progress"]
    }],
    outer: [{
      type: HostBinding,
      args: ["class.am-progress-outer"]
    }],
    fixOuter: [{
      type: HostBinding,
      args: ["class.am-progress-fixed-outer"]
    }],
    hideOuter: [{
      type: HostBinding,
      args: ["class.am-progress-hide-outer"]
    }],
    exceedance: [{
      type: HostBinding,
      args: ["class.am-progress-exceedance"]
    }]
  });
})();
var _ProgressModule = class _ProgressModule {
};
_ProgressModule.ɵfac = function ProgressModule_Factory(t) {
  return new (t || _ProgressModule)();
};
_ProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _ProgressModule,
  declarations: [ProgressComponent],
  imports: [CommonModule],
  exports: [ProgressComponent]
});
_ProgressModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var ProgressModule = _ProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ProgressComponent],
      exports: [ProgressComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-accordion.mjs
function AccordionGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.header);
  }
}
function AccordionGroupComponent_3_ng_template_0_Template(rf, ctx) {
}
function AccordionGroupComponent_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AccordionGroupComponent_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.header);
  }
}
function AccordionGroupComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _c013 = (a0) => ({
  "am-accordion-content-active": a0
});
var _c18 = ["*"];
var _AccordionService = class _AccordionService {
  constructor() {
    this.accordion = false;
  }
  getComponent(component) {
    this.accordion = component.accordion;
    this.component = component;
  }
};
_AccordionService.ɵfac = function AccordionService_Factory(t) {
  return new (t || _AccordionService)();
};
_AccordionService.ɵprov = ɵɵdefineInjectable({
  token: _AccordionService,
  factory: _AccordionService.ɵfac
});
var AccordionService = _AccordionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionService, [{
    type: Injectable
  }], null, null);
})();
var _AccordionGroupComponent = class _AccordionGroupComponent {
  constructor(_accordionService, _cdr) {
    this._accordionService = _accordionService;
    this._cdr = _cdr;
    this.isShowChild = true;
    this.isOpened = false;
    this.disabled = false;
    this.onOpen = new EventEmitter();
    this.onClose = new EventEmitter();
    this.onChange = new EventEmitter();
    this.isTemplateRef = isTemplateRef;
    this.amItem = true;
    this.isActive = this.isOpened;
    this.addon = true;
  }
  checkAndToggle() {
    this.toggle();
  }
  get slide() {
    return this.isOpened ? "down" : "up";
  }
  toggle() {
    if (this.disabled) {
      return;
    }
    this.isShowChild = true;
    const isOpenedBeforeWeChange = this.isOpened;
    if (this._accordionService.accordion) {
      this._accordionService.component.closeAll();
    }
    this.isOpened = !isOpenedBeforeWeChange;
    if (this.isOpened) {
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
    this.onChange.emit(this.isOpened);
  }
  openOnInitialization() {
    setTimeout(() => {
      this.isOpened = true;
      this._cdr.detectChanges();
    }, 0);
  }
  slideAnimationDoen(event) {
    if (event.fromState === "down" && event.toState === "up") {
      setTimeout(() => {
        this.isShowChild = false;
      }, 0);
    }
  }
};
_AccordionGroupComponent.ɵfac = function AccordionGroupComponent_Factory(t) {
  return new (t || _AccordionGroupComponent)(ɵɵdirectiveInject(AccordionService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_AccordionGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionGroupComponent,
  selectors: [["AccordionPanel"], ["nzm-accordion-panel"]],
  hostVars: 6,
  hostBindings: function AccordionGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-accordion-item", ctx.amItem)("am-accordion-item-active", ctx.isActive)("addon", ctx.addon);
    }
  },
  inputs: {
    key: "key",
    header: "header",
    isOpened: "isOpened",
    disabled: "disabled"
  },
  outputs: {
    onOpen: "onOpen",
    onClose: "onClose",
    onChange: "onChange"
  },
  ngContentSelectors: _c18,
  decls: 6,
  vars: 8,
  consts: [["role", "tab", "data-scale", "true", 1, "am-accordion-header", 3, "click"], [1, "arrow"], [4, "ngIf"], ["role", "tabpanel", 1, "am-accordion-content", 3, "ngClass"], ["class", "am-accordion-content-box", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "am-accordion-content-box"]],
  template: function AccordionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function AccordionGroupComponent_Template_div_click_0_listener() {
        return ctx.checkAndToggle();
      });
      ɵɵelement(1, "i", 1);
      ɵɵtemplate(2, AccordionGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 2)(3, AccordionGroupComponent_3_Template, 1, 1, null, 2);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 3);
      ɵɵlistener("@slide.done", function AccordionGroupComponent_Template_div_animation_slide_done_4_listener($event) {
        return ctx.slideAnimationDoen($event);
      });
      ɵɵtemplate(5, AccordionGroupComponent_div_5_Template, 2, 0, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵattribute("aria-expanded", ctx.isOpened);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.isTemplateRef(ctx.header));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isTemplateRef(ctx.header));
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c013, ctx.isOpened))("@slide", ctx.slide);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isShowChild);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [trigger("slide", [state("up", style({
      height: 0
    })), state("down", style({
      height: "*"
    })), transition("down => up", [animate(200, style({
      height: 0
    }))]), transition("up => down", [animate(200, style({
      height: "*"
    }))])])]
  }
});
var AccordionGroupComponent = _AccordionGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionGroupComponent, [{
    type: Component,
    args: [{
      selector: "AccordionPanel, nzm-accordion-panel",
      encapsulation: ViewEncapsulation$1.None,
      animations: [trigger("slide", [state("up", style({
        height: 0
      })), state("down", style({
        height: "*"
      })), transition("down => up", [animate(200, style({
        height: 0
      }))]), transition("up => down", [animate(200, style({
        height: "*"
      }))])])],
      template: `<div
  role="tab"
  class="am-accordion-header"
  data-scale="true"
  [attr.aria-expanded]="isOpened"
  (click)="checkAndToggle()"
>
  <i class="arrow"></i>
  <ng-container *ngIf="!isTemplateRef(header)">{{ header }}</ng-container>
  <ng-template *ngIf="isTemplateRef(header)" [ngTemplateOutlet]="header"></ng-template>
</div>
<div
  role="tabpanel"
  class="am-accordion-content"
  [ngClass]="{ 'am-accordion-content-active': isOpened }"
  [@slide]="slide"
  (@slide.done)="slideAnimationDoen($event)"
>
  <div *ngIf="isShowChild" class="am-accordion-content-box">
    <ng-content></ng-content>
  </div>
</div>
`
    }]
  }], () => [{
    type: AccordionService
  }, {
    type: ChangeDetectorRef
  }], {
    key: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    isOpened: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onOpen: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    amItem: [{
      type: HostBinding,
      args: ["class.am-accordion-item"]
    }],
    isActive: [{
      type: HostBinding,
      args: ["class.am-accordion-item-active"]
    }],
    addon: [{
      type: HostBinding,
      args: ["class.addon"]
    }]
  });
})();
var _AccordionComponent = class _AccordionComponent {
  click() {
    let result = [];
    this.groups.toArray().forEach((group) => {
      if (group.isOpened) {
        if (this.accordion) {
          result = group.key;
        } else {
          result.push(group.key);
        }
      }
    });
    this.onChange.emit(result);
  }
  constructor(_accordionService) {
    this._accordionService = _accordionService;
    this.isFirstChange = true;
    this.expandAll = false;
    this.openAnimation = {};
    this.accordion = false;
    this.onChange = new EventEmitter();
    this.amAccordion = true;
    this._accordionService.getComponent(this);
  }
  closeAll() {
    this.groups.toArray().forEach((group) => {
      group.isOpened = false;
    });
  }
  init() {
    if (this.expandAll && this.groups && this.groups.length > 0) {
      this._oldGroups = this.groups.toArray();
      this._oldGroups.forEach((group) => {
        group.openOnInitialization();
      });
      this._subscription = this.groups.changes.subscribe((change) => {
        const newGroups = this.groups.toArray().filter((group) => {
          return this._oldGroups.indexOf(group) === -1;
        });
        newGroups.forEach((group) => {
          group.openOnInitialization();
        });
        this._oldGroups = this.groups.toArray();
      });
    }
    let currentActiveKey = [];
    if (this.activeKey && this.activeKey.length > 0) {
      currentActiveKey = this.toArray(this.activeKey);
      if (this.accordion) {
        currentActiveKey = currentActiveKey.slice(0, 1);
      }
    } else if (this.defaultActiveKey) {
      currentActiveKey = [this.defaultActiveKey];
    }
    if (this.groups && this.groups.length > 0) {
      this.groups.forEach((group, index) => {
        currentActiveKey.forEach((key) => {
          if (index === parseInt(key, 0)) {
            setTimeout(() => {
              group.isOpened = true;
              group.openOnInitialization();
            }, 0);
          }
        });
      });
    }
  }
  toArray(activeKey) {
    let currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
      currentActiveKey = currentActiveKey !== void 0 && currentActiveKey !== "" ? [currentActiveKey] : [];
    }
    return currentActiveKey;
  }
  ngOnChanges(changes) {
    if (changes.accordion) {
      this._accordionService.getComponent(this);
    }
    if (changes.expandAll || changes.accordion) {
      this.init();
    }
  }
  ngAfterContentInit() {
    if (this.groups && this.groups.length > 0) {
      this.init();
    } else {
      this.groupsSubscription = this.groups.changes.subscribe((group) => {
        if (this.isFirstChange) {
          this.init();
        }
        this.isFirstChange = false;
      });
    }
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    if (this.groupsSubscription) {
      this.groupsSubscription.unsubscribe();
    }
  }
};
_AccordionComponent.ɵfac = function AccordionComponent_Factory(t) {
  return new (t || _AccordionComponent)(ɵɵdirectiveInject(AccordionService));
};
_AccordionComponent.ɵcmp = ɵɵdefineComponent({
  type: _AccordionComponent,
  selectors: [["Accordion"], ["nzm-accordion"]],
  contentQueries: function AccordionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AccordionGroupComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groups = _t);
    }
  },
  hostVars: 2,
  hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function AccordionComponent_click_HostBindingHandler() {
        return ctx.click();
      });
    }
    if (rf & 2) {
      ɵɵclassProp("am-accordion", ctx.amAccordion);
    }
  },
  inputs: {
    expandAll: "expandAll",
    activeKey: "activeKey",
    defaultActiveKey: "defaultActiveKey",
    openAnimation: "openAnimation",
    accordion: "accordion"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([AccordionService]), ɵɵNgOnChangesFeature],
  ngContentSelectors: _c18,
  decls: 1,
  vars: 0,
  template: function AccordionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var AccordionComponent = _AccordionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionComponent, [{
    type: Component,
    args: [{
      selector: "Accordion, nzm-accordion",
      providers: [AccordionService],
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [{
    type: AccordionService
  }], {
    groups: [{
      type: ContentChildren,
      args: [forwardRef(() => AccordionGroupComponent)]
    }],
    expandAll: [{
      type: Input
    }],
    activeKey: [{
      type: Input
    }],
    defaultActiveKey: [{
      type: Input
    }],
    openAnimation: [{
      type: Input
    }],
    accordion: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    amAccordion: [{
      type: HostBinding,
      args: ["class.am-accordion"]
    }],
    click: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _AccordionModule = class _AccordionModule {
};
_AccordionModule.ɵfac = function AccordionModule_Factory(t) {
  return new (t || _AccordionModule)();
};
_AccordionModule.ɵmod = ɵɵdefineNgModule({
  type: _AccordionModule,
  declarations: [AccordionComponent, AccordionGroupComponent],
  imports: [CommonModule, WhiteSpaceModule],
  exports: [AccordionComponent, AccordionGroupComponent]
});
_AccordionModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, WhiteSpaceModule]
});
var AccordionModule = _AccordionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, WhiteSpaceModule],
      declarations: [AccordionComponent, AccordionGroupComponent],
      exports: [AccordionComponent, AccordionGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-notice-bar.mjs
function NoticeBarComponent_div_0_div_1_ng_template_1_Template(rf, ctx) {
}
function NoticeBarComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NoticeBarComponent_div_0_div_1_ng_template_1_Template, 0, 0, "ng-template", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const _r2 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.option.icon || _r2);
  }
}
function NoticeBarComponent_div_0_div_9_1_ng_template_0_Template(rf, ctx) {
}
function NoticeBarComponent_div_0_div_9_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NoticeBarComponent_div_0_div_9_1_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.option.action || _r4);
  }
}
function NoticeBarComponent_div_0_div_9_2_ng_template_0_Template(rf, ctx) {
}
function NoticeBarComponent_div_0_div_9_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NoticeBarComponent_div_0_div_9_2_ng_template_0_Template, 0, 0, "ng-template", 11);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    const _r6 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.option.action || _r6);
  }
}
function NoticeBarComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, NoticeBarComponent_div_0_div_9_1_Template, 1, 1, null, 13)(2, NoticeBarComponent_div_0_div_9_2_Template, 1, 1, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.option.mode === "closable");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.option.mode === "link");
  }
}
function NoticeBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4);
    ɵɵlistener("click", function NoticeBarComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.click());
    });
    ɵɵtemplate(1, NoticeBarComponent_div_0_div_1_Template, 2, 1, "div", 5);
    ɵɵelementStart(2, "div", 6)(3, "div", 7)(4, "div", 8)(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "span");
    ɵɵtext(8);
    ɵɵelementEnd()()()();
    ɵɵtemplate(9, NoticeBarComponent_div_0_div_9_Template, 3, 2, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.icon !== null);
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ctx_r0.marqueeScroll)("ngStyle", ctx_r0.style);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.option.content);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.option.content);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.mode && ctx_r0.option.action !== null);
  }
}
function NoticeBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("type", "voice")("size", "xxs");
  }
}
function NoticeBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("type", "cross")("size", "md");
  }
}
function NoticeBarComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 14);
  }
  if (rf & 2) {
    ɵɵproperty("type", "right")("size", "md");
  }
}
function insertKeyFrame(rule, className) {
  const style2 = document.createElement("style");
  style2.setAttribute("class", className);
  style2.innerHTML = rule;
  document.body.appendChild(style2);
}
function deleteKeyFrame(className) {
  const styleDom = document.getElementsByClassName(className);
  while (styleDom.length > 0) {
    styleDom[0].remove();
  }
}
function getWidthHeight() {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName("body")[0];
  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight || e.clientHeight || g.clientHeight
  };
}
function getTextWidth(text, font) {
  const _dom = document.createElement("div");
  _dom.innerHTML = text;
  _dom.style.position = "absolute";
  _dom.style.left = "-9999";
  _dom.style.whiteSpace = "nowrap";
  _dom.style.fontSize = font;
  document.body.appendChild(_dom);
  const _w = _dom.clientWidth + 10;
  document.body.removeChild(_dom);
  return _w;
}
var _NoticeBarComponent = class _NoticeBarComponent {
  get option() {
    return this._option;
  }
  set option(value) {
    Object.assign(this._option, value);
    this.dataProcess();
    if (this._option.scrolling) {
      this.marqueeScroll = "scrolling";
    } else {
      this.marqueeScroll = "scrolling-stop";
    }
  }
  constructor(_iconHandler) {
    this._iconHandler = _iconHandler;
    this.visiable = false;
    this.marqueeScroll = "scrolling";
    this.style = {};
    this._option = {
      mode: "",
      icon: "",
      action: "",
      content: "",
      fontSize: "14px",
      scrolling: true,
      marqueeProps: {
        loop: true,
        leading: 500,
        trailing: 8e3,
        fps: 200,
        style: {}
      }
    };
    this.onClick = new EventEmitter();
    this._iconHandler.load();
  }
  click() {
    this.onClick.emit(this._option.mode);
    if (this._option.mode === "closable") {
      this.visiable = false;
    }
  }
  dataProcess() {
    this.visiable = true;
    this.style = {
      width: "200%"
    };
    this._width = getTextWidth(this._option.content, this._option.fontSize);
    if (getWidthHeight().width < this._width) {
      const count = this._option.marqueeProps.loop ? "infinite" : 1;
      let animationName = `noticebarmarquee_${this._width}`;
      this.style = {
        width: this._width * 2 + "px",
        "animation-name": animationName,
        "animation-delay": `${this._option.marqueeProps.leading}ms`,
        "animation-duration": `${1 / this._option.marqueeProps.fps * this._width / getWidthHeight().width * 1e3}s`,
        "animation-iteration-count": `${count}`
      };
      this.marqueeScroll = "scrolling";
      this.insetKeyframe(animationName);
    } else {
      this.marqueeScroll = "scrolling-stop";
    }
  }
  insetKeyframe(animationName) {
    insertKeyFrame(`@keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, "notice_bar_animation_cls");
    insertKeyFrame(`@-webkit-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, "notice_bar_animation_cls");
    insertKeyFrame(`@-moz-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, "notice_bar_animation_cls");
    insertKeyFrame(`@-o-keyframes ${animationName} {
      0% { left: 0px; }
      100% { left: -${this._width}px }
    }`, "notice_bar_animation_cls");
  }
  ngOnInit() {
    document.addEventListener("touchstart", () => {
      this.marqueeScroll = "scrolling-stop";
    });
    document.addEventListener("touchend", () => {
      this.marqueeScroll = "scrolling";
    });
  }
  ngOnDestroy() {
    deleteKeyFrame("notice_bar_animation_cls");
  }
};
_NoticeBarComponent.ɵfac = function NoticeBarComponent_Factory(t) {
  return new (t || _NoticeBarComponent)(ɵɵdirectiveInject(IconHandler));
};
_NoticeBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NoticeBarComponent,
  selectors: [["NoticeBar"], ["nzm-notice-bar"]],
  inputs: {
    option: "option"
  },
  outputs: {
    onClick: "onClick"
  },
  features: [ɵɵProvidersFeature([IconHandler])],
  decls: 7,
  vars: 1,
  consts: [["role", "alert", "class", "am-notice-bar", 3, "click", 4, "ngIf"], ["voice", ""], ["cross", ""], ["right", ""], ["role", "alert", 1, "am-notice-bar", 3, "click"], ["class", "am-notice-bar-icon", 4, "ngIf"], [1, "am-notice-bar-content"], [1, "marquee"], [3, "ngClass", "ngStyle"], ["role", "button", "class", "am-notice-bar-operation", 4, "ngIf"], [1, "am-notice-bar-icon"], [3, "ngTemplateOutlet"], ["role", "button", 1, "am-notice-bar-operation"], [4, "ngIf"], [3, "type", "size"]],
  template: function NoticeBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NoticeBarComponent_div_0_Template, 10, 6, "div", 0)(1, NoticeBarComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, NoticeBarComponent_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, NoticeBarComponent_ng_template_5_Template, 1, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visiable);
    }
  },
  dependencies: [IconComponent, NgClass, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var NoticeBarComponent = _NoticeBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoticeBarComponent, [{
    type: Component,
    args: [{
      selector: "NoticeBar, nzm-notice-bar",
      providers: [IconHandler],
      template: `<div role="alert" *ngIf="visiable" class="am-notice-bar" (click)="click()">
  <div *ngIf="option.icon !== null" class="am-notice-bar-icon">
    <ng-template [ngTemplateOutlet]="option.icon || voice"></ng-template>
  </div>
  <div class="am-notice-bar-content">
    <div class="marquee">
      <div [ngClass]="marqueeScroll" [ngStyle]="style">
        <span>{{ option.content }}</span>
        <span>{{ option.content }}</span>
      </div>
    </div>
  </div>
  <div role="button" *ngIf="option.mode && option.action !== null" class="am-notice-bar-operation">
    <ng-template *ngIf="option.mode === 'closable'" [ngTemplateOutlet]="option.action || cross"></ng-template>
    <ng-template *ngIf="option.mode === 'link'" [ngTemplateOutlet]="option.action || right"></ng-template>
  </div>
</div>

<ng-template #voice>
  <Icon [type]="'voice'" [size]="'xxs'"></Icon>
</ng-template>
<ng-template #cross>
  <Icon [type]="'cross'" [size]="'md'"></Icon>
</ng-template>
<ng-template #right>
  <Icon [type]="'right'" [size]="'md'"></Icon>
</ng-template>
`
    }]
  }], () => [{
    type: IconHandler
  }], {
    option: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var _NoticeBarModule = class _NoticeBarModule {
};
_NoticeBarModule.ɵfac = function NoticeBarModule_Factory(t) {
  return new (t || _NoticeBarModule)();
};
_NoticeBarModule.ɵmod = ɵɵdefineNgModule({
  type: _NoticeBarModule,
  declarations: [NoticeBarComponent],
  imports: [IconModule, CommonModule, FormsModule],
  exports: [NoticeBarComponent]
});
_NoticeBarModule.ɵinj = ɵɵdefineInjector({
  imports: [IconModule, CommonModule, FormsModule]
});
var NoticeBarModule = _NoticeBarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoticeBarModule, [{
    type: NgModule,
    args: [{
      imports: [IconModule, CommonModule, FormsModule],
      declarations: [NoticeBarComponent],
      exports: [NoticeBarComponent],
      providers: []
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-toast.mjs
function ToastComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-text-info");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.content);
  }
}
function ToastComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "Icon", 2);
    ɵɵtemplate(2, ToastComponent_div_2_div_2_Template, 2, 4, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-text ", ctx_r0.prefixCls, "-text-icon");
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r0.iconType)("size", "lg");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isContentString);
  }
}
function ToastComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-text-info");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.content);
  }
}
function ToastComponent_div_3_2_ng_template_0_Template(rf, ctx) {
}
function ToastComponent_div_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToastComponent_div_3_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.content);
  }
}
function ToastComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ToastComponent_div_3_div_1_Template, 2, 4, "div", 3)(2, ToastComponent_div_3_2_Template, 1, 1, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-text");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isContentString);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isContentString);
  }
}
var _ToastComponent = class _ToastComponent {
  get content() {
    return this._content;
  }
  set content(value) {
    if (value instanceof TemplateRef) {
      this.isContentString = false;
    } else {
      this.isContentString = true;
    }
    this._zone.run(() => {
      this._content = value;
    });
  }
  get iconType() {
    return this._iconType;
  }
  set iconType(value) {
    this._zone.run(() => {
      this._iconType = value;
    });
  }
  constructor(_zone) {
    this._zone = _zone;
    this.prefixCls = "am-toast";
    this.isContentString = true;
    this.transitionName = "am-fade-enter am-fade-enter-active";
    this._iconType = "";
    this._content = "";
    this.mask = true;
    this.position = "middle";
  }
};
_ToastComponent.ɵfac = function ToastComponent_Factory(t) {
  return new (t || _ToastComponent)(ɵɵdirectiveInject(NgZone));
};
_ToastComponent.ɵcmp = ɵɵdefineComponent({
  type: _ToastComponent,
  selectors: [["Toast"]],
  hostVars: 18,
  hostBindings: function ToastComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-toast", true)("am-toast-mask", ctx.mask)("am-toast-mask-top", ctx.mask && ctx.position === "top")("am-toast-mask-middle", ctx.mask && ctx.position === "middle")("am-toast-mask-bottom", ctx.mask && ctx.position === "bottom")("am-toast-nomask", !ctx.mask)("am-toast-nomask-top", !ctx.mask && ctx.position === "top")("am-toast-nomask-middle", !ctx.mask && ctx.position === "middle")("am-toast-nomask-bottom", !ctx.mask && ctx.position === "bottom");
    }
  },
  inputs: {
    mask: "mask",
    content: "content",
    iconType: "iconType",
    position: "position"
  },
  decls: 6,
  vars: 16,
  consts: [["role", "alert", "aria-live", "assertive", 3, "class", 4, "ngIf"], ["role", "alert", "aria-live", "assertive"], [3, "type", "size"], [3, "class", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function ToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "div");
      ɵɵtemplate(2, ToastComponent_div_2_Template, 3, 7, "div", 0)(3, ToastComponent_div_3_Template, 3, 5, "div", 0);
      ɵɵelementEnd();
      ɵɵelementStart(4, "a");
      ɵɵelement(5, "span");
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate3("", ctx.prefixCls, "-notice ", ctx.prefixCls, "-notice-closable ", ctx.transitionName, "");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-content");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.iconType);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.iconType);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-close");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-notice-close-x");
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, IconComponent],
  encapsulation: 2
});
var ToastComponent = _ToastComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastComponent, [{
    type: Component,
    args: [{
      selector: "Toast",
      encapsulation: ViewEncapsulation$1.None,
      host: {
        "[class.am-toast]": "true",
        "[class.am-toast-mask]": "mask",
        "[class.am-toast-mask-top]": `mask && position === 'top'`,
        "[class.am-toast-mask-middle]": `mask && position === 'middle'`,
        "[class.am-toast-mask-bottom]": `mask && position === 'bottom'`,
        "[class.am-toast-nomask]": "!mask",
        "[class.am-toast-nomask-top]": `!mask && position === 'top'`,
        "[class.am-toast-nomask-middle]": `!mask && position === 'middle'`,
        "[class.am-toast-nomask-bottom]": `!mask && position === 'bottom'`
      },
      template: `<div class="{{ prefixCls }}-notice {{ prefixCls }}-notice-closable {{ transitionName }}">
  <div class="{{ prefixCls }}-notice-content">
    <div role="alert" *ngIf="iconType" class="{{ prefixCls }}-text {{ prefixCls }}-text-icon" aria-live="assertive">
      <Icon [type]="iconType" [size]="'lg'"></Icon>
      <div *ngIf="isContentString" class="{{ prefixCls }}-text-info">{{ content }}</div>
    </div>
    <div *ngIf="!iconType" class="{{ prefixCls }}-text" role="alert" aria-live="assertive">
      <div *ngIf="isContentString" class="{{ prefixCls }}-text-info">{{ content }}</div>
      <ng-template *ngIf="!isContentString" [ngTemplateOutlet]="content"></ng-template>
    </div>
  </div>
  <a class="{{ prefixCls }}-notice-close">
    <span class="{{ prefixCls }}-notice-close-x"></span>
  </a>
</div>
`
    }]
  }], () => [{
    type: NgZone
  }], {
    mask: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    iconType: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var _ToastOptions = class _ToastOptions {
};
_ToastOptions.ɵfac = function ToastOptions_Factory(t) {
  return new (t || _ToastOptions)();
};
_ToastOptions.ɵprov = ɵɵdefineInjectable({
  token: _ToastOptions,
  factory: _ToastOptions.ɵfac
});
var ToastOptions = _ToastOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastOptions, [{
    type: Injectable
  }], null, null);
})();
var __decorate2 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata2 = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var _a2;
var ToastService = (_a2 = class {
  constructor(_appRef, _cfr, _zone) {
    this._appRef = _appRef;
    this._cfr = _cfr;
    this._zone = _zone;
    this.timeout = null;
    this.zone = null;
    this.compRef = null;
    this.insertElement = null;
    this.toastCompFactory = null;
    this.appRef = null;
    this.zone = this._zone;
    this.appRef = this._appRef;
    this.toastCompFactory = this._cfr.resolveComponentFactory(ToastComponent);
  }
  _initConfig(config, options) {
    const props = {};
    const optionalParams = ["content", "iconType", "mask", "position"];
    config = Object.assign(options, config);
    optionalParams.forEach((key) => {
      if (config[key] !== void 0) {
        props[key] = config[key];
      }
    });
    const iconType = {
      info: "",
      success: "success",
      fail: "fail",
      offline: "dislike",
      loading: "loading"
    }[options.iconType];
    props["iconType"] = iconType;
    props["mask"] = options.mask;
    props["position"] = options.position;
    return props;
  }
  notice(config, type, timeInterval = 2e3, onClose, mask = true, position = "middle") {
    return __async(this, null, function* () {
      if (this.compRef) {
        this.hide();
      }
      const options = new ToastOptions();
      options.iconType = type;
      options.mask = mask;
      options.position = position;
      const props = this._initConfig(config, options);
      this.insertElement = document.body.insertBefore(document.createElement(this.toastCompFactory.selector), document.body.firstChild);
      let instance;
      let subject;
      if (!this._zone.isStable) {
        yield this._appRef.isStable.pipe(first((stable) => stable));
      }
      this.compRef = this._appRef.bootstrap(this.toastCompFactory);
      instance = this.compRef.instance;
      subject = instance.subject;
      if (timeInterval) {
        this.timeout = setTimeout(() => {
          if (onClose) {
            onClose();
          }
          this.hide();
        }, timeInterval);
      }
      Object.assign(instance, props);
      return subject;
    });
  }
  /**
   * Open info dialog
   */
  info(content, timeInterval, onClose, mask, position) {
    const config = Object.assign({
      iconType: "info",
      content
    });
    return this.notice(config, "info", timeInterval, onClose, mask, position);
  }
  /**
   * Open success dialog
   */
  success(content, timeInterval, onClose, mask, position) {
    const config = Object.assign({
      iconType: "success",
      content
    });
    return this.notice(config, "success", timeInterval, onClose, mask, position);
  }
  show(content, timeInterval, mask, position) {
    const config = Object.assign({
      iconType: "info",
      content
    });
    return this.notice(config, "info", timeInterval, () => {
    }, mask, position);
  }
  fail(content, timeInterval, onClose, mask, position) {
    const config = Object.assign({
      iconType: "fail",
      content
    });
    return this.notice(config, "fail", timeInterval, onClose, mask, position);
  }
  offline(content, timeInterval, onClose, mask, position) {
    const config = Object.assign({
      iconType: "offline",
      content
    });
    return this.notice(config, "offline", timeInterval, onClose, mask, position);
  }
  loading(content, timeInterval, onClose, mask, position) {
    const config = Object.assign({
      iconType: "loading",
      content
    });
    return this.notice(config, "loading", timeInterval, onClose, mask, position);
  }
  hide() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.compRef) {
      this._zone.run(() => {
        this.compRef.destroy();
        document.body.removeChild(this.insertElement);
      });
      this.compRef = null;
      this.insertElement = null;
    }
  }
}, _a2.ɵfac = function ToastService_Factory(t) {
  return new (t || _a2)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(NgZone));
}, _a2.ɵprov = ɵɵdefineInjectable({
  token: _a2,
  factory: _a2.ɵfac,
  providedIn: "root"
}), _a2);
ToastService = __decorate2([Injectable(), __metadata2("design:paramtypes", [ApplicationRef, ComponentFactoryResolver$1, NgZone])], ToastService);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Injectable
  }], () => [{
    type: ApplicationRef
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: NgZone
  }], null);
})();
var _ToastModule = class _ToastModule {
};
_ToastModule.ɵfac = function ToastModule_Factory(t) {
  return new (t || _ToastModule)();
};
_ToastModule.ɵmod = ɵɵdefineNgModule({
  type: _ToastModule,
  declarations: [ToastComponent],
  imports: [CommonModule, IconModule, WingBlankModule],
  exports: [ToastComponent]
});
_ToastModule.ɵinj = ɵɵdefineInjector({
  providers: [ToastService],
  imports: [CommonModule, IconModule, WingBlankModule]
});
var ToastModule = _ToastModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, WingBlankModule],
      exports: [ToastComponent],
      declarations: [ToastComponent],
      providers: [ToastService]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-modal.mjs
function ModalComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵelement(2, "span", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close-x");
  }
}
function ModalComponent_div_0_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r15.option.title);
  }
}
function ModalComponent_div_0_div_6_2_ng_template_0_Template(rf, ctx) {
}
function ModalComponent_div_0_div_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalComponent_div_0_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r16.option.title);
  }
}
function ModalComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ModalComponent_div_0_div_6_div_1_Template, 2, 4, "div", 7)(2, ModalComponent_div_0_div_6_2_Template, 1, 1, null, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-header");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.option.title));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.option.title));
  }
}
function ModalComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r9.option.prefixCls, "-alert-content");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.option.message, " ");
  }
}
function ModalComponent_div_0_10_ng_template_0_Template(rf, ctx) {
}
function ModalComponent_div_0_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalComponent_div_0_10_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.option.message);
  }
}
function ModalComponent_div_0_11_ng_template_0_Template(rf, ctx) {
}
function ModalComponent_div_0_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalComponent_div_0_11_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r6 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", _r6);
  }
}
function ModalComponent_div_0_12_ng_template_0_Template(rf, ctx) {
}
function ModalComponent_div_0_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalComponent_div_0_12_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function ModalComponent_div_0_13_ng_template_0_Template(rf, ctx) {
}
function ModalComponent_div_0_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalComponent_div_0_13_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r2);
  }
}
function ModalComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("onClick", function ModalComponent_div_0_div_16_Template_div_onClick_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r24);
      const button_r22 = restoredCtx.$implicit;
      return ɵɵresetView(button_r22.onPress());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r22 = ctx.$implicit;
    ɵɵproperty("className", "am-modal-button")("ngStyle", button_r22.style);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", button_r22.text, " ");
  }
}
function ModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div");
    ɵɵelementStart(2, "div", 4)(3, "div", 5)(4, "div");
    ɵɵtemplate(5, ModalComponent_div_0_div_5_Template, 3, 6, "div", 6)(6, ModalComponent_div_0_div_6_Template, 3, 5, "div", 7);
    ɵɵelementStart(7, "div");
    ɵɵprojection(8);
    ɵɵtemplate(9, ModalComponent_div_0_div_9_Template, 2, 4, "div", 7)(10, ModalComponent_div_0_10_Template, 1, 1, null, 0)(11, ModalComponent_div_0_11_Template, 1, 1, null, 0)(12, ModalComponent_div_0_12_Template, 1, 1, null, 0)(13, ModalComponent_div_0_13_Template, 1, 1, null, 0);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div")(15, "div", 8);
    ɵɵtemplate(16, ModalComponent_div_0_div_16_Template, 2, 3, "div", 9);
    ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-mask ", ctx_r0.maskTransitionName, "");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-wrap ", ctx_r0.transitionName, "");
    ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.option.prefixCls);
    ɵɵproperty("ngClass", ctx_r0.cls);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.closable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isNoTitle(ctx_r0.option.title));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-body");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "default");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "secure-text");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "login-password");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-footer");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r0.btnGroupClass);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.option.footer);
  }
}
function ModalComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div")(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.inputChange("text", $event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 16)(5, "input", 17, 15);
    ɵɵlistener("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.option.defaultValue[1] = $event);
    })("ngModelChange", function ModalComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.inputChange("password", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "text")("placeholder", ctx_r1.option.placeholders[0] || "")("ngModel", ctx_r1.option.defaultValue[0]);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("className", "", ctx_r1.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "password")("placeholder", ctx_r1.option.placeholders[1] || "")("ngModel", ctx_r1.option.defaultValue[1]);
  }
}
function ModalComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 16)(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r34);
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r34);
      const ctx_r35 = ɵɵnextContext();
      return ɵɵresetView(ctx_r35.inputChange("password", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("className", "", ctx_r3.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("className", "", ctx_r3.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "password")("placeholder", ctx_r3.option.placeholders[0] || "")("ngModel", ctx_r3.option.defaultValue[0]);
  }
}
function ModalComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 16)(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.inputChange("text", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("className", "", ctx_r5.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("className", "", ctx_r5.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "text")("placeholder", ctx_r5.option.placeholders[0] || "")("ngModel", ctx_r5.option.defaultValue[0]);
  }
}
var _c014 = ["*"];
function ModalServiceComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵelement(2, "span", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r7.option.prefixCls, "-close-x");
  }
}
function ModalServiceComponent_div_0_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r15.option.title);
  }
}
function ModalServiceComponent_div_0_div_6_2_ng_template_0_Template(rf, ctx) {
}
function ModalServiceComponent_div_0_div_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalServiceComponent_div_0_div_6_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r16.option.title);
  }
}
function ModalServiceComponent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ModalServiceComponent_div_0_div_6_div_1_Template, 2, 4, "div", 7)(2, ModalServiceComponent_div_0_div_6_2_Template, 1, 1, null, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-header");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.isTemplateRef(ctx_r8.option.title));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.option.title));
  }
}
function ModalServiceComponent_div_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r9.option.prefixCls, "-alert-content");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.option.message, " ");
  }
}
function ModalServiceComponent_div_0_10_ng_template_0_Template(rf, ctx) {
}
function ModalServiceComponent_div_0_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalServiceComponent_div_0_10_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.option.message);
  }
}
function ModalServiceComponent_div_0_11_ng_template_0_Template(rf, ctx) {
}
function ModalServiceComponent_div_0_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalServiceComponent_div_0_11_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r6 = ɵɵreference(6);
    ɵɵproperty("ngTemplateOutlet", _r6);
  }
}
function ModalServiceComponent_div_0_12_ng_template_0_Template(rf, ctx) {
}
function ModalServiceComponent_div_0_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalServiceComponent_div_0_12_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function ModalServiceComponent_div_0_13_ng_template_0_Template(rf, ctx) {
}
function ModalServiceComponent_div_0_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ModalServiceComponent_div_0_13_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const _r2 = ɵɵreference(2);
    ɵɵproperty("ngTemplateOutlet", _r2);
  }
}
function ModalServiceComponent_div_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("onClick", function ModalServiceComponent_div_0_div_16_Template_div_onClick_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r24);
      const button_r22 = restoredCtx.$implicit;
      return ɵɵresetView(button_r22.onPress());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r22 = ctx.$implicit;
    ɵɵproperty("className", "am-modal-button")("ngStyle", button_r22.style);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", button_r22.text, " ");
  }
}
function ModalServiceComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "div");
    ɵɵelementStart(2, "div", 4)(3, "div", 5)(4, "div");
    ɵɵtemplate(5, ModalServiceComponent_div_0_div_5_Template, 3, 6, "div", 6)(6, ModalServiceComponent_div_0_div_6_Template, 3, 5, "div", 7);
    ɵɵelementStart(7, "div");
    ɵɵprojection(8);
    ɵɵtemplate(9, ModalServiceComponent_div_0_div_9_Template, 2, 4, "div", 7)(10, ModalServiceComponent_div_0_10_Template, 1, 1, null, 0)(11, ModalServiceComponent_div_0_11_Template, 1, 1, null, 0)(12, ModalServiceComponent_div_0_12_Template, 1, 1, null, 0)(13, ModalServiceComponent_div_0_13_Template, 1, 1, null, 0);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div")(15, "div", 8);
    ɵɵtemplate(16, ModalServiceComponent_div_0_div_16_Template, 2, 3, "div", 9);
    ɵɵelementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-mask ", ctx_r0.maskTransitionName, "");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.option.prefixCls, "-wrap ", ctx_r0.transitionName, "");
    ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0.option.prefixCls);
    ɵɵproperty("ngClass", ctx_r0.cls);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-content");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.closable);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isNoTitle(ctx_r0.option.title));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-body");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.message));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "default");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "secure-text");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.option.type === "login-password");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.option.prefixCls, "-footer");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ctx_r0.btnGroupClass);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.option.footer);
  }
}
function ModalServiceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "div")(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r29 = ɵɵnextContext();
      return ɵɵresetView(ctx_r29.inputChange("text", $event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 16)(5, "input", 17, 15);
    ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r30 = ɵɵnextContext();
      return ɵɵresetView(ctx_r30.option.defaultValue[1] = $event);
    })("ngModelChange", function ModalServiceComponent_ng_template_1_Template_input_ngModelChange_5_listener($event) {
      ɵɵrestoreView(_r28);
      const ctx_r31 = ɵɵnextContext();
      return ɵɵresetView(ctx_r31.inputChange("password", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r1.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "text")("placeholder", ctx_r1.option.placeholders[0] || "")("ngModel", ctx_r1.option.defaultValue[0]);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("className", "", ctx_r1.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "password")("placeholder", ctx_r1.option.placeholders[1] || "")("ngModel", ctx_r1.option.defaultValue[1]);
  }
}
function ModalServiceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 16)(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r34);
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalServiceComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r34);
      const ctx_r35 = ɵɵnextContext();
      return ɵɵresetView(ctx_r35.inputChange("password", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("className", "", ctx_r3.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("className", "", ctx_r3.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "password")("placeholder", ctx_r3.option.placeholders[0] || "")("ngModel", ctx_r3.option.defaultValue[0]);
  }
}
function ModalServiceComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "div", 16)(2, "input", 14, 15);
    ɵɵlistener("ngModelChange", function ModalServiceComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.option.defaultValue[0] = $event);
    })("ngModelChange", function ModalServiceComponent_ng_template_5_Template_input_ngModelChange_2_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.inputChange("text", $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵpropertyInterpolate1("className", "", ctx_r5.option.prefixCls, "-input-container");
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("className", "", ctx_r5.option.prefixCls, "-input");
    ɵɵadvance(1);
    ɵɵproperty("type", "text")("placeholder", ctx_r5.option.placeholders[0] || "")("ngModel", ctx_r5.option.defaultValue[0]);
  }
}
var ModalBaseOptions = class {
  constructor() {
    this.visible = false;
    this.focus = true;
    this.prefixCls = "am-modal";
    this.animated = true;
    this.closable = false;
    this.maskClosable = true;
    this.transparent = false;
    this.popup = false;
    this.animationType = "slide-down";
    this.footer = [];
    this.platform = "ios";
    this.defaultValue = [];
    this.placeholders = [];
    this.transitionName = "am-zoom";
    this.maskTransitionName = "am-fade";
  }
};
var _ModalOptions = class _ModalOptions extends ModalBaseOptions {
  constructor() {
    super(...arguments);
    this.transitionName = "am-fade";
    this.maskTransitionName = "am-fade";
  }
};
_ModalOptions.ɵfac = /* @__PURE__ */ (() => {
  let ɵModalOptions_BaseFactory;
  return function ModalOptions_Factory(t) {
    return (ɵModalOptions_BaseFactory || (ɵModalOptions_BaseFactory = ɵɵgetInheritedFactory(_ModalOptions)))(t || _ModalOptions);
  };
})();
_ModalOptions.ɵprov = ɵɵdefineInjectable({
  token: _ModalOptions,
  factory: _ModalOptions.ɵfac
});
var ModalOptions = _ModalOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalOptions, [{
    type: Injectable
  }], null, null);
})();
var _Action = class _Action {
};
_Action.ɵfac = function Action_Factory(t) {
  return new (t || _Action)();
};
_Action.ɵprov = ɵɵdefineInjectable({
  token: _Action,
  factory: _Action.ɵfac
});
var Action = _Action;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Action, [{
    type: Injectable
  }], null, null);
})();
var ModalRef = class {
};
var _ModalComponent = class _ModalComponent extends ModalRef {
  set title(value) {
    this.option.title = value;
  }
  set closable(value) {
    this.option.closable = value;
  }
  set maskClosable(value) {
    this.option.maskClosable = value;
  }
  set popup(value) {
    this.option.popup = value;
    this.setClassMap();
  }
  set animationType(value) {
    this.option.animationType = value;
    this.setClassMap();
  }
  set transparent(value) {
    this.option.transparent = value;
    this.setClassMap();
  }
  set footer(value) {
    this.option.footer = value;
  }
  set platform(value) {
    this.option.platform = value;
    this.setClassMap();
  }
  set className(value) {
    this.option.className = value;
    this.setClassMap();
  }
  set wrapClassName(value) {
    this.option.wrapClassName = value;
    this.setClassMap();
  }
  set actions(value) {
    this.option.footer = value;
    this.setClassMap();
  }
  set defaultValue(value) {
    this.option.defaultValue = value !== void 0 ? value : ["", ""];
  }
  set type(value) {
    this.option.type = value;
  }
  set placeholders(value) {
    this.option.placeholders = value;
  }
  set operation(value) {
    this.option.operation = value;
    this.setClassMap();
  }
  panend(event) {
    if (this.option.closable || this.option.maskClosable) {
      if (event && event.target && event.target.getAttribute("role") === "dialog" || event.target.getAttribute("role") === "close") {
        event.preventDefault();
        event.stopPropagation();
        if (this.option.close) {
          this.option.close();
        } else {
          this.onClose.emit();
          this.leaveAnimation();
        }
      }
    }
  }
  constructor(option, elementRef) {
    super();
    this.option = option;
    this.elementRef = elementRef;
    this.autoFocus = {
      focus: true,
      date: /* @__PURE__ */ new Date()
    };
    this.transitionName = "";
    this.maskTransitionName = "";
    this.wrapCls = {};
    this.cls = {};
    this.btnGroupClass = {};
    this.data = {
      text: "",
      password: ""
    };
    this.onClose = new EventEmitter();
    this.afterOpenEmitter = new EventEmitter();
    this.afterCloseEmitter = new EventEmitter();
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
  isNoTitle(value) {
    return value === "" || value === null || value === void 0;
  }
  setTransitionName(visible) {
    if (!visible) {
      this.leaveAnimation();
    } else {
      if (this.option.animated) {
        if (this.option.transparent) {
          if (this.setActiveName(this.option.transitionName)) {
            this.transitionName = this.setActiveName(this.option.transitionName);
            this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
          } else {
            this.transitionName = this.maskTransitionName = this.setActiveName("am-fade");
          }
        } else {
          if (this.setActiveName(this.option.transitionName)) {
            this.transitionName = this.setActiveName(this.option.transitionName);
            this.maskTransitionName = this.setActiveName(this.option.maskTransitionName);
          } else {
            this.transitionName = this.maskTransitionName = this.setActiveName("am-slide-up");
          }
        }
        if (this.option.popup) {
          this.transitionName = this.option.animationType === "slide-up" ? this.setActiveName("am-slide-up") : this.setActiveName("am-slide-down");
          this.maskTransitionName = this.setActiveName("am-fade");
        }
      }
      this.setClassMap();
    }
  }
  setActiveName(name) {
    return name.length > 0 ? `${name}-enter ${name}-enter-active` : null;
  }
  setLeaveActiveName(name) {
    return name.length > 0 ? `${name}-leave ${name}-leave-active` : null;
  }
  setClassMap() {
    this.wrapCls = {
      [this.option.wrapClassName]: true,
      [`${this.option.prefixCls}-wrap-popup`]: this.option.popup
    };
    this.cls = {
      [this.option.className]: true,
      [`${this.option.prefixCls}-transparent`]: this.option.transparent,
      [`${this.option.prefixCls}-popup`]: this.option.popup,
      [`${this.option.prefixCls}-popup-${this.option.animationType}`]: this.option.popup && this.option.animationType,
      [`${this.option.prefixCls}-android`]: this.option.platform === "android"
    };
    this.btnGroupClass = {
      [`${this.option.prefixCls}-button-group-${this.option.footer.length === 2 && !this.option.operation ? "h" : "v"}`]: true,
      [`${this.option.prefixCls}-button-group-${this.option.operation ? "operation" : "normal"}`]: true
    };
  }
  inputChange(type, value) {
    this.data[type] = value;
  }
  leaveAnimation() {
    if (this.option.animated) {
      if (this.option.transparent) {
        if (this.setLeaveActiveName(this.option.transitionName)) {
          this.transitionName = this.setLeaveActiveName(this.option.transitionName);
          this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
        } else {
          this.transitionName = this.maskTransitionName = this.setLeaveActiveName("am-fade");
        }
      } else {
        if (this.setLeaveActiveName(this.option.transitionName)) {
          this.transitionName = this.setLeaveActiveName(this.option.transitionName);
          this.maskTransitionName = this.setLeaveActiveName(this.option.maskTransitionName);
        } else {
          this.transitionName = this.maskTransitionName = this.setLeaveActiveName("am-slide-up");
        }
      }
      if (this.option.popup) {
        this.transitionName = this.option.animationType === "slide-up" ? this.setLeaveActiveName("am-slide-up") : this.setLeaveActiveName("am-slide-down");
        this.maskTransitionName = this.setLeaveActiveName("am-fade");
      }
    }
    setTimeout(() => {
      this.option.visible = false;
      if (this.onChanged) {
        this.onChanged(this.option.visible);
      }
    }, 200);
  }
  writeValue(value) {
    if (value) {
      this.option.visible = value;
    }
    this.setTransitionName(value);
  }
  registerOnChange(fn) {
    this.onChanged = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  get afterOpen() {
    return this.afterOpenEmitter.asObservable();
  }
  get afterClose() {
    return this.afterCloseEmitter.asObservable();
  }
  getInstance() {
    return this;
  }
  getElement() {
    return this.elementRef && this.elementRef.nativeElement;
  }
  close() {
    if (this.option.closeWithAnimation) {
      this.option.closeWithAnimation();
    } else {
      this.onClose.emit();
      this.leaveAnimation();
    }
  }
  triggerOk() {
    if (this.option.footer.length > 1) {
      const button = this.option.footer[1];
      button.onPress();
    }
  }
  triggerCancel() {
    if (this.option.footer.length > 0) {
      const button = this.option.footer[0];
      button.onPress();
    }
  }
  destroy() {
    this.close();
  }
};
_ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || _ModalComponent)(ɵɵdirectiveInject(ModalOptions), ɵɵdirectiveInject(ElementRef));
};
_ModalComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalComponent,
  selectors: [["Modal"]],
  hostBindings: function ModalComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mouseup", function ModalComponent_mouseup_HostBindingHandler($event) {
        return ctx.panend($event);
      })("touchend", function ModalComponent_touchend_HostBindingHandler($event) {
        return ctx.panend($event);
      });
    }
  },
  inputs: {
    title: "title",
    closable: "closable",
    maskClosable: "maskClosable",
    popup: "popup",
    animationType: "animationType",
    transparent: "transparent",
    footer: "footer",
    platform: "platform",
    className: "className",
    wrapClassName: "wrapClassName",
    actions: "actions",
    defaultValue: "defaultValue",
    type: "type",
    placeholders: "placeholders",
    operation: "operation"
  },
  outputs: {
    onClose: "onClose",
    afterOpenEmitter: "afterOpenEmitter",
    afterCloseEmitter: "afterCloseEmitter"
  },
  features: [ɵɵProvidersFeature([ModalOptions, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _ModalComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c014,
  decls: 7,
  vars: 1,
  consts: [[4, "ngIf"], ["promptPassword", ""], ["promptSecure", ""], ["promptDefault", ""], ["role", "dialog", 3, "ngClass"], ["role", "document", 3, "ngClass"], ["style", "width: 100%; height: 21px;", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "group", 3, "ngClass"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "21px"], ["role", "close"], [3, "ngTemplateOutlet"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick"], ["autofocus", "", 3, "type", "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [3, "className"], [3, "type", "placeholder", "ngModel", "ngModelChange"]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ModalComponent_div_0_Template, 17, 31, "div", 0)(1, ModalComponent_ng_template_1_Template, 7, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, ModalComponent_ng_template_3_Template, 4, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, ModalComponent_ng_template_5_Template, 4, 5, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.option.visible);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonComponent, DefaultValueAccessor, NgControlStatus, NgModel],
  encapsulation: 2
});
var ModalComponent = _ModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{
      selector: "Modal",
      encapsulation: ViewEncapsulation$1.None,
      providers: [ModalOptions, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ModalComponent),
        multi: true
      }],
      template: `<div *ngIf="option.visible">
  <div class="{{ option.prefixCls }}-mask {{ maskTransitionName }}"></div>
  <div role="dialog" class="{{ option.prefixCls }}-wrap {{ transitionName }}" [ngClass]="wrapCls">
    <div role="document" class="{{ option.prefixCls }}" [ngClass]="cls">
      <div class="{{ option.prefixCls }}-content">
        <div *ngIf="option.closable" style="width: 100%; height: 21px;">
          <div role="close" class="{{ option.prefixCls }}-close">
            <span role="close" class="{{ option.prefixCls }}-close-x"></span>
          </div>
        </div>
        <div *ngIf="!isNoTitle(option.title)" class="{{ option.prefixCls }}-header">
          <div *ngIf="!isTemplateRef(option.title)" class="{{ option.prefixCls }}-title">{{ option.title }}</div>
          <ng-template *ngIf="isTemplateRef(option.title)" [ngTemplateOutlet]="option.title"></ng-template>
        </div>
        <div class="{{ option.prefixCls }}-body">
          <ng-content></ng-content>
          <div *ngIf="!isTemplateRef(option.message)" class="{{ option.prefixCls }}-alert-content">
            {{ option.message }}
          </div>
          <ng-template *ngIf="isTemplateRef(option.message)" [ngTemplateOutlet]="option.message"></ng-template>
          <ng-template *ngIf="option.type === 'default'" [ngTemplateOutlet]="promptDefault"></ng-template>
          <ng-template *ngIf="option.type === 'secure-text'" [ngTemplateOutlet]="promptSecure"></ng-template>
          <ng-template *ngIf="option.type === 'login-password'" [ngTemplateOutlet]="promptPassword"></ng-template>
        </div>
        <div class="{{ option.prefixCls }}-footer">
          <div [ngClass]="btnGroupClass" role="group">
            <div
              Button
              role="button"
              *ngFor="let button of option.footer"
              [className]="'am-modal-button'"
              [ngStyle]="button.style"
              (onClick)="button.onPress()"
            >
              {{ button.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ng-template #promptPassword>
  <div class="{{ option.prefixCls }}-input-container">
    <div class="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'text'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('text', $event)"
      />
    </div>
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        [type]="'password'"
        [placeholder]="option.placeholders[1] || ''"
        [(ngModel)]="option.defaultValue[1]"
        (ngModelChange)="inputChange('password', $event)"
      />
    </div>
  </div>
</ng-template>
<ng-template #promptSecure>
  <div className="{{ option.prefixCls }}-input-container">
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'password'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('password', $event)"
      />
    </div>
  </div>
</ng-template>
<ng-template #promptDefault>
  <div className="{{ option.prefixCls }}-input-container">
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'text'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('text', $event)"
      />
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ModalOptions
  }, {
    type: ElementRef
  }], {
    title: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    maskClosable: [{
      type: Input
    }],
    popup: [{
      type: Input
    }],
    animationType: [{
      type: Input
    }],
    transparent: [{
      type: Input
    }],
    footer: [{
      type: Input
    }],
    platform: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    wrapClassName: [{
      type: Input
    }],
    actions: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    placeholders: [{
      type: Input
    }],
    operation: [{
      type: Input
    }],
    onClose: [{
      type: Output
    }],
    afterOpenEmitter: [{
      type: Output
    }],
    afterCloseEmitter: [{
      type: Output
    }],
    panend: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var _ModalServiceComponent = class _ModalServiceComponent extends ModalComponent {
  constructor(option, elementRef) {
    super(option, elementRef);
    this.option = option;
    this.elementRef = elementRef;
    this.setTransitionName(this.option.visible);
  }
};
_ModalServiceComponent.ɵfac = function ModalServiceComponent_Factory(t) {
  return new (t || _ModalServiceComponent)(ɵɵdirectiveInject(ModalOptions), ɵɵdirectiveInject(ElementRef));
};
_ModalServiceComponent.ɵcmp = ɵɵdefineComponent({
  type: _ModalServiceComponent,
  selectors: [["ModalService"]],
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c014,
  decls: 7,
  vars: 1,
  consts: [[4, "ngIf"], ["promptPassword", ""], ["promptSecure", ""], ["promptDefault", ""], ["role", "dialog", 3, "ngClass"], ["role", "document", 3, "ngClass"], ["style", "width: 100%; height: 21px;", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "group", 3, "ngClass"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick", 4, "ngFor", "ngForOf"], [2, "width", "100%", "height", "21px"], ["role", "close"], [3, "ngTemplateOutlet"], ["Button", "", "role", "button", 3, "className", "ngStyle", "onClick"], ["autofocus", "", 3, "type", "placeholder", "ngModel", "ngModelChange"], ["inputElement", ""], [3, "className"], [3, "type", "placeholder", "ngModel", "ngModelChange"]],
  template: function ModalServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ModalServiceComponent_div_0_Template, 17, 31, "div", 0)(1, ModalServiceComponent_ng_template_1_Template, 7, 13, "ng-template", null, 1, ɵɵtemplateRefExtractor)(3, ModalServiceComponent_ng_template_3_Template, 4, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, ModalServiceComponent_ng_template_5_Template, 4, 5, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.option.visible);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonComponent, DefaultValueAccessor, NgControlStatus, NgModel],
  encapsulation: 2
});
var ModalServiceComponent = _ModalServiceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalServiceComponent, [{
    type: Component,
    args: [{
      selector: "ModalService",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div *ngIf="option.visible">
  <div class="{{ option.prefixCls }}-mask {{ maskTransitionName }}"></div>
  <div role="dialog" class="{{ option.prefixCls }}-wrap {{ transitionName }}" [ngClass]="wrapCls">
    <div role="document" class="{{ option.prefixCls }}" [ngClass]="cls">
      <div class="{{ option.prefixCls }}-content">
        <div *ngIf="option.closable" style="width: 100%; height: 21px;">
          <div role="close" class="{{ option.prefixCls }}-close">
            <span role="close" class="{{ option.prefixCls }}-close-x"></span>
          </div>
        </div>
        <div *ngIf="!isNoTitle(option.title)" class="{{ option.prefixCls }}-header">
          <div *ngIf="!isTemplateRef(option.title)" class="{{ option.prefixCls }}-title">{{ option.title }}</div>
          <ng-template *ngIf="isTemplateRef(option.title)" [ngTemplateOutlet]="option.title"></ng-template>
        </div>
        <div class="{{ option.prefixCls }}-body">
          <ng-content></ng-content>
          <div *ngIf="!isTemplateRef(option.message)" class="{{ option.prefixCls }}-alert-content">
            {{ option.message }}
          </div>
          <ng-template *ngIf="isTemplateRef(option.message)" [ngTemplateOutlet]="option.message"></ng-template>
          <ng-template *ngIf="option.type === 'default'" [ngTemplateOutlet]="promptDefault"></ng-template>
          <ng-template *ngIf="option.type === 'secure-text'" [ngTemplateOutlet]="promptSecure"></ng-template>
          <ng-template *ngIf="option.type === 'login-password'" [ngTemplateOutlet]="promptPassword"></ng-template>
        </div>
        <div class="{{ option.prefixCls }}-footer">
          <div [ngClass]="btnGroupClass" role="group">
            <div
              Button
              role="button"
              *ngFor="let button of option.footer"
              [className]="'am-modal-button'"
              [ngStyle]="button.style"
              (onClick)="button.onPress()"
            >
              {{ button.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<ng-template #promptPassword>
  <div class="{{ option.prefixCls }}-input-container">
    <div class="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'text'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('text', $event)"
      />
    </div>
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        [type]="'password'"
        [placeholder]="option.placeholders[1] || ''"
        [(ngModel)]="option.defaultValue[1]"
        (ngModelChange)="inputChange('password', $event)"
      />
    </div>
  </div>
</ng-template>
<ng-template #promptSecure>
  <div className="{{ option.prefixCls }}-input-container">
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'password'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('password', $event)"
      />
    </div>
  </div>
</ng-template>
<ng-template #promptDefault>
  <div className="{{ option.prefixCls }}-input-container">
    <div className="{{ option.prefixCls }}-input">
      <input
        #inputElement
        autofocus
        [type]="'text'"
        [placeholder]="option.placeholders[0] || ''"
        [(ngModel)]="option.defaultValue[0]"
        (ngModelChange)="inputChange('text', $event)"
      />
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ModalOptions
  }, {
    type: ElementRef
  }], null);
})();
var __decorate3 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a3;
var ModalService = (_a3 = class extends PopupService {
  constructor() {
    super(...arguments);
    this.modalRef = null;
  }
  _open(props) {
    const childInjector = Injector.create({
      providers: [{
        provide: ModalOptions,
        useValue: props
      }]
    });
    this.modalRef = this.showPopup(ModalServiceComponent, childInjector);
    return this.modalRef && this.modalRef.instance;
  }
  closeWithAnimation() {
    const options = new ModalBaseOptions();
    this.modalRef.instance.transitionName = `${options.transitionName}-leave ${options.transitionName}-leave-active`;
    this.modalRef.instance.maskTransitionName = `${options.maskTransitionName}-leave ${options.maskTransitionName}-leave-active`;
    setTimeout(() => {
      this.close();
    }, 200);
  }
  alert(title, message, actions, platform) {
    const options = new ModalOptions();
    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      platform: platform || "ios",
      title: title || "",
      message: message || "",
      footer,
      actions: footer,
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };
    const props = __spreadValues(__spreadValues({}, options), defaultOptions);
    return this._open(props);
  }
  prompt(title, message, callbackOrActions, type, defaultValue, placeholders, platform) {
    const options = new ModalOptions();
    function getArgs(self, func) {
      let text, password;
      if (self.modalRef) {
        text = self.modalRef.instance.data.text || options.defaultValue[0];
        password = self.modalRef.instance.data.password || options.defaultValue[1];
      } else {
        text = options.defaultValue[0];
        password = options.defaultValue[1];
      }
      if (type === "login-password") {
        return func(text, password);
      } else if (type === "secure-text") {
        return func(password);
      }
      return func(text);
    }
    const actions = typeof callbackOrActions === "function" ? [{
      text: "Cancel"
    }, {
      text: "OK",
      onPress: () => {
        getArgs(this, callbackOrActions);
      }
    }] : callbackOrActions.map((item) => {
      return {
        text: item.text,
        onPress: () => {
          if (item.onPress) {
            return getArgs(this, item.onPress);
          }
        }
      };
    });
    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      operation: true,
      className: "m-modal-alert-content",
      defaultValue: defaultValue || ["", ""],
      placeholders: placeholders || [],
      type: type || "default",
      title: title || "",
      message: message || "",
      footer,
      actions: footer,
      platform: platform ? platform : "ios",
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };
    const props = __spreadValues(__spreadValues({}, options), defaultOptions);
    return this._open(props);
  }
  operation(actions, platform, customOptions) {
    const options = new ModalOptions();
    const footer = getFooter.call(this, actions);
    const defaultOptions = {
      visible: true,
      transparent: true,
      closable: false,
      maskClosable: false,
      operation: true,
      className: "am-modal-operation",
      footer,
      platform: platform ? platform : "ios",
      close: () => {
        this.closeWithAnimation();
      },
      closeWithAnimation: () => {
        this.closeWithAnimation();
      }
    };
    const props = __spreadValues(__spreadValues(__spreadValues({}, options), defaultOptions), customOptions);
    return this._open(props);
  }
  close() {
    this.hidePopup();
  }
}, _a3.ɵfac = /* @__PURE__ */ (() => {
  let ɵModalService_BaseFactory;
  return function ModalService_Factory(t) {
    return (ɵModalService_BaseFactory || (ɵModalService_BaseFactory = ɵɵgetInheritedFactory(_a3)))(t || _a3);
  };
})(), _a3.ɵprov = ɵɵdefineInjectable({
  token: _a3,
  factory: _a3.ɵfac,
  providedIn: "root"
}), _a3);
ModalService = __decorate3([Injectable()], ModalService);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }, {
    type: Injectable
  }], null, null);
})();
function getFooter(actions) {
  let _actions = actions ? actions : [{
    text: "OK",
    onPress: () => {
    }
  }];
  return _actions.map((button) => {
    const originPress = button.onPress || function() {
    };
    button.onPress = () => {
      const res = originPress();
      if (res && res.then) {
        res.then(() => {
          this.closeWithAnimation();
        });
      } else {
        this.closeWithAnimation();
      }
    };
    return button;
  });
}
var _ModalModule = class _ModalModule {
};
_ModalModule.ɵfac = function ModalModule_Factory(t) {
  return new (t || _ModalModule)();
};
_ModalModule.ɵmod = ɵɵdefineNgModule({
  type: _ModalModule,
  declarations: [ModalComponent, ModalServiceComponent],
  imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule, OverlayModule],
  exports: [ModalComponent, ModalServiceComponent]
});
_ModalModule.ɵinj = ɵɵdefineInjector({
  providers: [ModalService, PopupService],
  imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule, OverlayModule]
});
var ModalModule = _ModalModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ListModule, WingBlankModule, WhiteSpaceModule, ButtonModule, InputItemModule, FormsModule, ReactiveFormsModule, OverlayModule],
      exports: [ModalComponent, ModalServiceComponent],
      declarations: [ModalComponent, ModalServiceComponent],
      providers: [ModalService, PopupService]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-popover.mjs
function PopoverComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.defaultProps.prefixCls, "-arrow");
  }
}
function PopoverComponent_ng_template_7_Template(rf, ctx) {
}
var _c015 = (a0) => ({
  options: a0
});
var _c19 = ["*"];
function PopoverItemComponent_ng_template_2_Template(rf, ctx) {
}
var _PopoverOptions = class _PopoverOptions {
  constructor() {
    this.showArrow = false;
    this.mask = false;
    this.placement = "bottom";
    this.appendToBody = false;
    this.className = "";
    this.autoClose = true;
  }
};
_PopoverOptions.ɵfac = function PopoverOptions_Factory(t) {
  return new (t || _PopoverOptions)();
};
_PopoverOptions.ɵprov = ɵɵdefineInjectable({
  token: _PopoverOptions,
  factory: _PopoverOptions.ɵfac
});
var PopoverOptions = _PopoverOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverOptions, [{
    type: Injectable
  }], null, null);
})();
var _PopoverComponentOptions = class _PopoverComponentOptions extends PopoverOptions {
};
_PopoverComponentOptions.ɵfac = /* @__PURE__ */ (() => {
  let ɵPopoverComponentOptions_BaseFactory;
  return function PopoverComponentOptions_Factory(t) {
    return (ɵPopoverComponentOptions_BaseFactory || (ɵPopoverComponentOptions_BaseFactory = ɵɵgetInheritedFactory(_PopoverComponentOptions)))(t || _PopoverComponentOptions);
  };
})();
_PopoverComponentOptions.ɵprov = ɵɵdefineInjectable({
  token: _PopoverComponentOptions,
  factory: _PopoverComponentOptions.ɵfac
});
var PopoverComponentOptions = _PopoverComponentOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponentOptions, [{
    type: Injectable
  }], null, null);
})();
var _PopoverComponent = class _PopoverComponent {
  constructor(options) {
    this.options = options;
    this.defaultProps = {
      prefixCls: "am-popover"
    };
    this.maskCls = {};
    this.popoverCls = {};
  }
  setClassMap() {
    this.maskCls = {
      [`${this.defaultProps.prefixCls}-mask`]: this.options.mask,
      [`${this.defaultProps.prefixCls}-mask-hidden`]: !this.options.mask
    };
    this.popoverCls = {
      [`${this.defaultProps.prefixCls}`]: true,
      [`${this.defaultProps.prefixCls}-placement-${this.options.placement}`]: true,
      [`${this.defaultProps.prefixCls}-${this.options.className}`]: true
    };
  }
  ngOnInit() {
    this.setClassMap();
  }
  ngAfterViewInit() {
    this.options.onAfterViewInit();
  }
};
_PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
  return new (t || _PopoverComponent)(ɵɵdirectiveInject(PopoverComponentOptions));
};
_PopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: _PopoverComponent,
  selectors: [["Popover"]],
  ngContentSelectors: _c19,
  decls: 8,
  vars: 16,
  consts: [[3, "ngClass", "click"], [2, "color", "currentcolor", 3, "ngClass"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function PopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 0);
      ɵɵlistener("click", function PopoverComponent_Template_div_click_1_listener() {
        return ctx.options.hidePopover();
      });
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 1)(3, "div");
      ɵɵtemplate(4, PopoverComponent_div_4_Template, 1, 3, "div", 2);
      ɵɵelementStart(5, "div")(6, "div");
      ɵɵtemplate(7, PopoverComponent_ng_template_7_Template, 0, 0, "ng-template", 3);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.maskCls);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.popoverCls);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-content");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.options.showArrow);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-inner");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-inner-wrapper");
      ɵɵadvance(1);
      ɵɵproperty("ngTemplateOutlet", ctx.options.overlay)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c015, ctx.options));
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var PopoverComponent = _PopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverComponent, [{
    type: Component,
    args: [{
      selector: "Popover",
      encapsulation: ViewEncapsulation$1.None,
      template: '<ng-content></ng-content>\n<div [ngClass]="maskCls" (click)="options.hidePopover()"></div>\n<div [ngClass]="popoverCls" style="color: currentcolor;">\n  <div class="{{ defaultProps.prefixCls }}-content">\n    <div *ngIf="options.showArrow" class="{{ defaultProps.prefixCls }}-arrow"></div>\n    <div class="{{ defaultProps.prefixCls }}-inner">\n      <div class="{{ defaultProps.prefixCls }}-inner-wrapper">\n        <ng-template [ngTemplateOutlet]="options.overlay" [ngTemplateOutletContext]="{ options: options }">\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: PopoverComponentOptions
  }], null);
})();
var _PopoverDirective = class _PopoverDirective {
  togglePopover() {
    if (!this.popover) {
      this.showPopover();
    } else {
      this.hidePopover();
    }
  }
  constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer) {
    this._viewContainerRef = _viewContainerRef;
    this._elm = _elm;
    this._defaultOptions = _defaultOptions;
    this._cfr = _cfr;
    this._renderer = _renderer;
    this._eventListeners = [];
    this.onVisibleChange = new EventEmitter(true);
    this.onSelect = new EventEmitter();
  }
  positionMap(placement) {
    switch (placement) {
      case "topLeft":
        return "top-left";
      case "topRight":
        return "top-right";
      case "bottomLeft":
        return "bottom-left";
      case "bottomRight":
        return "bottom-right";
      case "leftTop":
        return "left-top";
      case "leftBottom":
        return "left-bottom";
      case "rightTop":
        return "right-top";
      case "rightBottom":
        return "right-bottom";
      case "fullScreen":
      case "landScape":
        return "bottom";
      default:
        return placement;
    }
  }
  ngOnInit() {
  }
  ngOnChanges(changes) {
    if (changes.visible && changes.visible.currentValue) {
      setTimeout(() => {
        this.showPopover();
      }, 0);
    } else {
      setTimeout(() => {
        this.hidePopover();
      }, 0);
    }
  }
  ngOnDestroy() {
    this.hidePopover();
  }
  onDocumentClick(event) {
    if (this.popover && !this._elm.nativeElement.contains(event.target) && !this.popover.location.nativeElement.contains(event.target)) {
      this.hidePopover();
    }
  }
  showPopover() {
    if (!this.popover) {
      setTimeout(() => {
        this._eventListeners = [this._renderer.listen("document", "click", (event) => this.onDocumentClick(event)), this._renderer.listen("document", "touchend", (event) => this.onDocumentClick(event)), this._renderer.listen("window", "resize", () => this.positionPopover())];
      });
      const options = new PopoverComponentOptions();
      options.placement = this.placement;
      Object.assign(options, this._defaultOptions, {
        hidePopover: (event) => {
          this.hidePopover();
        },
        onAfterViewInit: () => {
          this.positionPopover();
          const children = document.getElementsByClassName("am-popover-inner-wrapper")[0].children;
          if (children.length > 0) {
            for (let i = 0; i < children.length; i++) {
              children[i].id = `${i}`;
              children[i].addEventListener("click", () => {
                if (this.onSelect) {
                  this.onSelect.emit(children[i]);
                  if (options.autoClose) {
                    this.hidePopover();
                  }
                }
              }, false);
            }
          }
        }
      });
      const optionalParams = ["mask", "showArrow", "placement", "appendToBody", "overlay", "className", "autoClose"];
      optionalParams.forEach((param) => {
        if (typeof this[param] !== "undefined") {
          options[param] = this[param];
        }
      });
      const componentFactory = this._cfr.resolveComponentFactory(PopoverComponent);
      const childInjector = Injector.create([{
        provide: PopoverComponentOptions,
        useValue: options
      }], this._viewContainerRef.parentInjector);
      this.popover = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
      if (options.appendToBody) {
        this.appendToBodyElement = document.body.appendChild(this.popover.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }
  positionPopover() {
    if (this.popover) {
      const popoverElement = this.popover.location.nativeElement.children[1];
      const popoverPosition = getPositionElements(this._elm.nativeElement, popoverElement, this.positionMap(this.placement) || this._defaultOptions.placement, this.appendToBody || this._defaultOptions.appendToBody);
      if (this.placement === "landScape") {
        this._renderer.setStyle(popoverElement, "top", `${popoverPosition.top}px`);
        this._renderer.setStyle(popoverElement, "left", `0px`);
        this._renderer.setStyle(popoverElement, "width", `${window.innerWidth}px`);
        this._renderer.setStyle(popoverElement, "max-height", `${window.innerHeight - popoverPosition.height}px`);
      } else if (this.placement === "fullScreen") {
        this._renderer.setStyle(popoverElement, "top", `${0}px`);
        this._renderer.setStyle(popoverElement, "left", `0px`);
        this._renderer.setStyle(popoverElement, "width", `${window.innerWidth}px`);
        this._renderer.setStyle(popoverElement, "max-height", `${window.innerHeight - popoverPosition.height}px`);
      } else {
        this._renderer.setStyle(popoverElement, "top", `${popoverPosition.top}px`);
        this._renderer.setStyle(popoverElement, "left", `${popoverPosition.left}px`);
      }
    }
  }
  hidePopover() {
    if (this.appendToBodyElement) {
      document.body.removeChild(this.appendToBodyElement);
      this.appendToBodyElement = null;
    }
    if (this.popover) {
      this.popover.destroy();
      delete this.popover;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach((fn) => fn());
      this._eventListeners = [];
    }
  }
};
_PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
  return new (t || _PopoverDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopoverOptions), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(Renderer2));
};
_PopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _PopoverDirective,
  selectors: [["", "Popover", ""], ["", "nzm-popover", ""]],
  hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function PopoverDirective_click_HostBindingHandler() {
        return ctx.togglePopover();
      });
    }
  },
  inputs: {
    mask: "mask",
    showArrow: "showArrow",
    visible: "visible",
    placement: "placement",
    overlay: "overlay",
    appendToBody: "appendToBody",
    className: "className",
    autoClose: "autoClose"
  },
  outputs: {
    onVisibleChange: "onVisibleChange",
    onSelect: "onSelect"
  },
  features: [ɵɵProvidersFeature([PopoverOptions]), ɵɵNgOnChangesFeature]
});
var PopoverDirective = _PopoverDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[Popover], [nzm-popover]",
      providers: [PopoverOptions]
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: PopoverOptions
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: Renderer2
  }], {
    mask: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    onVisibleChange: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    appendToBody: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    togglePopover: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _PopoverItemComponent = class _PopoverItemComponent {
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
  }
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
  }
  set disabled(value) {
    this.defaultProps.disabled = value;
  }
  get amPopoverItemActive() {
    return this.isActive;
  }
  get amPopoverItemDisabled() {
    return this.defaultProps.disabled;
  }
  touchStart(e) {
    this.select.emit();
    this.isActive = true;
  }
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.defaultProps = {
      prefixCls: "am-popover",
      disabled: false
    };
    this.isActive = false;
    this.select = new EventEmitter();
    this.amPopoverItem = true;
  }
  ngAfterContentInit() {
  }
};
_PopoverItemComponent.ɵfac = function PopoverItemComponent_Factory(t) {
  return new (t || _PopoverItemComponent)(ɵɵdirectiveInject(ElementRef));
};
_PopoverItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _PopoverItemComponent,
  selectors: [["PopoverItem"], ["nzm-popover-item"]],
  hostVars: 6,
  hostBindings: function PopoverItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart", function PopoverItemComponent_touchstart_HostBindingHandler($event) {
        return ctx.touchStart($event);
      })("mousedown", function PopoverItemComponent_mousedown_HostBindingHandler($event) {
        return ctx.touchStart($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("am-popover-item", ctx.amPopoverItem)("am-popover-item-active", ctx.amPopoverItemActive)("am-popover-item-disabled", ctx.amPopoverItemDisabled);
    }
  },
  inputs: {
    icon: "icon",
    style: "style",
    disabled: "disabled"
  },
  outputs: {
    select: "select"
  },
  ngContentSelectors: _c19,
  decls: 5,
  vars: 10,
  consts: [["aria-hidden", "true"], [3, "ngTemplateOutlet"]],
  template: function PopoverItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div")(1, "span", 0);
      ɵɵtemplate(2, PopoverItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "span");
      ɵɵprojection(4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-container");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-icon");
      ɵɵadvance(1);
      ɵɵproperty("ngTemplateOutlet", ctx.icon);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-item-content");
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2
});
var PopoverItemComponent = _PopoverItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverItemComponent, [{
    type: Component,
    args: [{
      selector: "PopoverItem, nzm-popover-item",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="{{ defaultProps.prefixCls }}-item-container">\n  <span class="{{ defaultProps.prefixCls }}-item-icon" aria-hidden="true">\n    <ng-template [ngTemplateOutlet]="icon"></ng-template>\n  </span>\n  <span class="{{ defaultProps.prefixCls }}-item-content">\n    <ng-content></ng-content>\n  </span>\n</div>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    icon: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    amPopoverItem: [{
      type: HostBinding,
      args: ["class.am-popover-item"]
    }],
    amPopoverItemActive: [{
      type: HostBinding,
      args: ["class.am-popover-item-active"]
    }],
    amPopoverItemDisabled: [{
      type: HostBinding,
      args: ["class.am-popover-item-disabled"]
    }],
    touchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }, {
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }]
  });
})();
var _PopoverItemModule = class _PopoverItemModule {
};
_PopoverItemModule.ɵfac = function PopoverItemModule_Factory(t) {
  return new (t || _PopoverItemModule)();
};
_PopoverItemModule.ɵmod = ɵɵdefineNgModule({
  type: _PopoverItemModule,
  declarations: [PopoverItemComponent],
  imports: [CommonModule, IconModule],
  exports: [PopoverItemComponent]
});
_PopoverItemModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule]
});
var PopoverItemModule = _PopoverItemModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverItemModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule],
      exports: [PopoverItemComponent],
      declarations: [PopoverItemComponent]
    }]
  }], null, null);
})();
function PopoverOptionsFactory(userOptions) {
  const options = new PopoverOptions();
  Object.assign(options, userOptions);
  return options;
}
var _PopoverModule = class _PopoverModule {
};
_PopoverModule.ɵfac = function PopoverModule_Factory(t) {
  return new (t || _PopoverModule)();
};
_PopoverModule.ɵmod = ɵɵdefineNgModule({
  type: _PopoverModule,
  declarations: [PopoverDirective, PopoverComponent],
  imports: [CommonModule],
  exports: [PopoverDirective, PopoverComponent]
});
_PopoverModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var PopoverModule = _PopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopoverModule, [{
    type: NgModule,
    args: [{
      declarations: [PopoverDirective, PopoverComponent],
      imports: [CommonModule],
      exports: [PopoverDirective, PopoverComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-nav-bar.mjs
function NavBarComponent_1_ng_template_0_Template(rf, ctx) {
}
function NavBarComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavBarComponent_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.leftContent);
  }
}
function NavBarComponent_span_2_Icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 6);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("type", ctx_r4.icon);
  }
}
function NavBarComponent_span_2_2_ng_template_0_Template(rf, ctx) {
}
function NavBarComponent_span_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavBarComponent_span_2_2_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.icon);
  }
}
function NavBarComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, NavBarComponent_span_2_Icon_1_Template, 1, 1, "Icon", 5)(2, NavBarComponent_span_2_2_Template, 1, 1, null, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.defaultProps.prefixCls, "-left-icon");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isIconString);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isIconString);
  }
}
function NavBarComponent_8_ng_template_0_Template(rf, ctx) {
}
function NavBarComponent_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NavBarComponent_8_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.rightContent);
  }
}
var _c016 = ["*"];
var _NavBarComponent = class _NavBarComponent {
  set mode(value) {
    this.defaultProps.mode = value;
    this.amNavbarLight = this.defaultProps.mode === "light";
    this.amNavbardark = this.defaultProps.mode === "dark";
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    if (value instanceof TemplateRef) {
      this.isIconString = false;
    } else {
      this.isIconString = true;
    }
    this._icon = value;
  }
  get leftContent() {
    return this._leftContent;
  }
  set leftContent(value) {
    if (value instanceof TemplateRef) {
      this.isLeftContentString = false;
    } else {
      this.isLeftContentString = true;
    }
    this._leftContent = value;
  }
  get rightContent() {
    return this._rightContent;
  }
  set rightContent(value) {
    if (value instanceof TemplateRef) {
      this.isRightContentString = false;
    } else {
      this.isRightContentString = true;
    }
    this._rightContent = value;
  }
  constructor() {
    this.defaultProps = {
      prefixCls: "am-navbar",
      mode: "dark",
      onLeftClick: () => {
      }
    };
    this.navbarCls = {};
    this.isIconString = true;
    this.isLeftContentString = true;
    this.isRightContentString = true;
    this.onLeftClick = new EventEmitter();
    this.amNavbar = true;
  }
  click(event) {
    this.onLeftClick.emit(event);
  }
};
_NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || _NavBarComponent)();
};
_NavBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NavBarComponent,
  selectors: [["Navbar"], ["nzm-nav-bar"]],
  hostVars: 6,
  hostBindings: function NavBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-navbar", ctx.amNavbar)("am-navbar-light", ctx.amNavbarLight)("am-navbar-dark", ctx.amNavbardark);
    }
  },
  inputs: {
    mode: "mode",
    icon: "icon",
    leftContent: "leftContent",
    rightContent: "rightContent"
  },
  outputs: {
    onLeftClick: "onLeftClick"
  },
  ngContentSelectors: _c016,
  decls: 9,
  vars: 14,
  consts: [["role", "button", 3, "click"], [4, "ngIf"], ["aria-hidden", "true", 3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["aria-hidden", "true"], [3, "type", 4, "ngIf"], [3, "type"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function NavBarComponent_Template_div_click_0_listener($event) {
        return ctx.click($event);
      });
      ɵɵtemplate(1, NavBarComponent_1_Template, 1, 1, null, 1)(2, NavBarComponent_span_2_Template, 3, 5, "span", 2);
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div");
      ɵɵprojection(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div");
      ɵɵtext(7);
      ɵɵtemplate(8, NavBarComponent_8_Template, 1, 1, null, 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-left");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isLeftContentString);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.icon);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.isLeftContentString ? ctx.leftContent : null, "\n");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-title");
      ɵɵadvance(2);
      ɵɵclassMapInterpolate1("", ctx.defaultProps.prefixCls, "-right");
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.isRightContentString ? ctx.rightContent : null, " ");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isRightContentString);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, IconComponent],
  encapsulation: 2
});
var NavBarComponent = _NavBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavBarComponent, [{
    type: Component,
    args: [{
      selector: "Navbar, nzm-nav-bar",
      template: '<div role="button" class="{{ defaultProps.prefixCls }}-left" (click)="click($event)">\n  <ng-template *ngIf="!isLeftContentString" [ngTemplateOutlet]="leftContent"></ng-template>\n  <span *ngIf="icon" class="{{ defaultProps.prefixCls }}-left-icon" aria-hidden="true">\n    <Icon *ngIf="isIconString" [type]="icon"></Icon>\n    <ng-template *ngIf="!isIconString" [ngTemplateOutlet]="icon"></ng-template>\n  </span>\n  {{ isLeftContentString ? leftContent : null }}\n</div>\n<div class="{{ defaultProps.prefixCls }}-title">\n  <ng-content></ng-content>\n</div>\n<div class="{{ defaultProps.prefixCls }}-right">\n  {{ isRightContentString ? rightContent : null }}\n  <ng-template *ngIf="!isRightContentString" [ngTemplateOutlet]="rightContent"></ng-template>\n</div>\n'
    }]
  }], () => [], {
    mode: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    leftContent: [{
      type: Input
    }],
    rightContent: [{
      type: Input
    }],
    onLeftClick: [{
      type: Output
    }],
    amNavbar: [{
      type: HostBinding,
      args: ["class.am-navbar"]
    }],
    amNavbarLight: [{
      type: HostBinding,
      args: ["class.am-navbar-light"]
    }],
    amNavbardark: [{
      type: HostBinding,
      args: ["class.am-navbar-dark"]
    }]
  });
})();
var _NavBarModule = class _NavBarModule {
};
_NavBarModule.ɵfac = function NavBarModule_Factory(t) {
  return new (t || _NavBarModule)();
};
_NavBarModule.ɵmod = ɵɵdefineNgModule({
  type: _NavBarModule,
  declarations: [NavBarComponent],
  imports: [CommonModule, IconModule],
  exports: [NavBarComponent]
});
_NavBarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule]
});
var NavBarModule = _NavBarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule],
      exports: [NavBarComponent],
      declarations: [NavBarComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-date-picker.mjs
var _c017 = ["picker"];
function DatePickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("click", function DatePickerComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cancel());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("am-picker-popup-mask ", ctx_r0.maskTransitionName, "");
  }
}
function DatePickerComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    ɵɵpropertyInterpolate("id", i_r9);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", val_r8.label ? val_r8.label : val_r8, " ");
  }
}
function DatePickerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13)(2, "div", 14);
    ɵɵelementStart(3, "div", 15);
    ɵɵtemplate(4, DatePickerComponent_div_14_div_4_Template, 2, 2, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", i_r6);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r5);
  }
}
var _DatePickerOptions = class _DatePickerOptions {
  constructor() {
    this.mode = "date";
    this.value = /* @__PURE__ */ new Date();
    this.minDate = new Date(2e3, 6, 1, 0, 0, 0);
    this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
    this.use12Hours = false;
    this.minuteStep = 1;
    this.data = [];
    this.mask = true;
    this.title = "";
    this.okText = "确定";
    this.dismissText = "取消";
    this.disabled = false;
    this.appendToBody = false;
    this.showErrorToast = true;
    this.showErrorToastInterval = 2e3;
    this.onOk = new EventEmitter();
    this.onDismiss = new EventEmitter();
    this.onValueChange = new EventEmitter();
    this.onChange = new EventEmitter();
  }
};
_DatePickerOptions.ɵfac = function DatePickerOptions_Factory(t) {
  return new (t || _DatePickerOptions)();
};
_DatePickerOptions.ɵprov = ɵɵdefineInjectable({
  token: _DatePickerOptions,
  factory: _DatePickerOptions.ɵfac
});
var DatePickerOptions = _DatePickerOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerOptions, [{
    type: Injectable
  }], null, null);
})();
var _DatePickerComponent = class _DatePickerComponent {
  panstart(event) {
    if (!event.target.classList.contains("am-picker-col-mask")) {
      return;
    }
    this.isMouseDown = true;
    event.preventDefault();
    this.dom = event.target.parentElement.children[2];
    this.len = this.dom.children.length;
    this.maxY = -(this.len - 1);
    if (this.dom.style.transform === "translateY(0px)") {
      this.currentY = 0;
      this.maxY = -(this.len - 1);
    } else if (this.selectedTarget.length > 0) {
      this.selectedTarget.forEach((item) => {
        if (item.targetId === event.target.id) {
          this.currentY = item.currentY;
        }
      });
    }
    const ev = this.getEventTarget(event);
    this.startY = ev.clientY;
  }
  panmove(event) {
    if (!event.target.classList.contains("am-picker-col-mask") || !this.isMouseDown) {
      return;
    }
    event.preventDefault();
    const ev = this.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    this.Velocity.record(this.differY);
    this.dom.style.transition = "transform 0s";
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
  }
  panend(event) {
    if (!event.target.classList.contains("am-picker-col-mask") || !this.isMouseDown) {
      return;
    }
    this.isMouseDown = false;
    event.preventDefault();
    const ev = this.getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    let time = 0.3;
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
    if (velocityTemp) {
      this.differY = velocityTemp * 40 + this.differY;
      time = Math.abs(velocityTemp) * 0.1;
    }
    this.dom.style.transition = "transform " + (time < 0.3 ? 0.3 : time) + "s";
    if (this.differY <= -this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY <= this.maxY) {
        this.currentY = this.maxY;
      }
    } else if (this.differY >= this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight);
      if (this.currentY >= 0) {
        this.currentY = 0;
      }
    }
    if (this.selectedTarget.length > 0) {
      let hasKey = false;
      this.selectedTarget.forEach((item) => {
        if (item.targetId === event.target.id) {
          hasKey = true;
          item.targetId = event.target.id;
          item.currentY = this.currentY;
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({
          targetId: event.target.id,
          currentY: this.currentY
        });
      }
    } else {
      this.selectedTarget.push({
        targetId: event.target.id,
        currentY: this.currentY
      });
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY / 1));
    this.current_time[this.indexArray[parseInt(event.target.id, 0)]] = this.resultArr[this.indexArray[parseInt(event.target.id, 0)]] = this.data[parseInt(event.target.id, 0)][this.index];
    if (this.judgeTime(this.current_time, this.max_date)) {
      this.currentTime = this.current_time = this.max_date.slice(0, this.options.mode === "time" ? this.modeSwitch.length : this.indexArray.length);
      this.resultArr = this.current_time;
      this.options.onValueChange.emit({
        date: this.handleReslut(),
        index: event.target.id
      });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
      this.init();
    } else if (this.judgeTime(this.min_date, this.current_time)) {
      this.currentTime = this.current_time = this.min_date.slice(0, this.options.mode === "time" ? this.modeSwitch.length : this.indexArray.length);
      this.resultArr = this.currentTime;
      this.options.onValueChange.emit({
        date: this.handleReslut(),
        index: event.target.id
      });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
      this.init();
    } else {
      this.updateLessMoreState();
      this.setCurrentSelected(0, this.differY < 0, this.index);
      this.options.onValueChange.emit({
        date: this.handleReslut(),
        index: event.target.id
      });
      if (this.options.updateNgModel) {
        this.options.updateNgModel(this.handleReslut());
      }
      if (this.ngModelOnChange) {
        this.ngModelOnChange(this.handleReslut());
      }
    }
  }
  updateLessMoreState() {
    const minT = new Date(this.min_date[0], this.min_date[1], this.min_date[2], this.min_date[3], this.min_date[4]).getTime();
    const maxT = new Date(this.max_date[0], this.max_date[1], this.max_date[2], this.max_date[3], this.max_date[4]).getTime();
    const curT = new Date(this.current_time[0], this.current_time[1], this.current_time[2], this.current_time[3] || 0, this.current_time[4] || 0).getTime();
    this.curTLessThanMin = curT < minT;
    this.curTMoreThanMax = curT > maxT;
  }
  constructor(elementRef, options, toast, localeProviderService) {
    this.elementRef = elementRef;
    this.options = options;
    this.toast = toast;
    this.localeProviderService = localeProviderService;
    this.transitionName = "am-slide-up-enter am-slide-up-enter-active";
    this.maskTransitionName = "am-fade-enter am-fade-enter-active";
    this.modeSwitch = [1, 1, 1, 1, 1, 1];
    this.localMinDate = [];
    this.localMaxDate = [];
    this.currentTime = [];
    this.indexArray = [];
    this.min_date = [];
    this.max_date = [];
    this.current_time = [(/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, (/* @__PURE__ */ new Date()).getDate(), (/* @__PURE__ */ new Date()).getHours(), (/* @__PURE__ */ new Date()).getMinutes()];
    this.clos = 0;
    this.resultArr = [];
    this.data = [];
    this.dataWithStr = [];
    this.startY = 0;
    this.differY = 0;
    this.currentY = 0;
    this.len = 0;
    this.dom = null;
    this.index = 0;
    this.maxY = 0;
    this.lineHeight = 34;
    this.selectedTarget = [];
    this.isMouseDown = false;
    this.localeNew = {};
    this.unsubscribe$ = new Subject();
    this.Velocity = getVelocity();
    this.errorMessage = "";
    this.curTLessThanMin = false;
    this.curTMoreThanMax = false;
  }
  init() {
    if (!this.checkTime() && this.options.showErrorToast) {
      setTimeout(() => {
        this.toast.fail(this.errorMessage, this.options.showErrorToastInterval);
      }, 0);
    }
    this.initResult();
    this.initReady();
    this.getInitValueIndex();
  }
  reloadPicker() {
    if (!this.picker || this.picker === void 0) {
      return;
    }
    this.currentPicker = this.picker.element.nativeElement;
    if (this.currentPicker && this.currentPicker.children.length > 0) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = "transform .3s";
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }
  localeProvider() {
    const self = this;
    if (self.options.locale || self.options.locale !== void 0) {
      self.localeProviderService.setLocale(self.options.locale);
    }
    self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe((_) => {
      self.options.locale = self.localeProviderService.getLocale();
      self.localeNew = self.localeProviderService.getLocaleSubObj("DatePicker");
      self.options.okText = self.localeNew.okText;
      self.options.dismissText = self.localeNew.dismissText;
      self.init();
    });
  }
  transformDateFormat(date) {
    if (!date) {
      return "";
    } else {
      return "yyyy-mm-dd-HH-MM".replace("yyyy", date.getFullYear() + "").replace("mm", date.getMonth() + 1 + "").replace("dd", date.getDate() + "").replace("HH", date.getHours() + "").replace("MM", date.getMinutes() + "");
    }
  }
  preZero(val) {
    return val < 10 ? "0" + val : val + "";
  }
  getInitValueIndex() {
    this.selectedTarget = [];
    this.indexArray.map((index, i) => {
      this.data.forEach((item, j) => {
        item.forEach((item1, k) => {
          if (this.currentTime[index] === item1 && i === j) {
            this.selectedTarget.push({
              targetId: `${i}`,
              currentY: -k
            });
          }
        });
      });
    });
    this.reloadPicker();
  }
  checkMode(mode) {
    this.modeSwitch = [1, 1, 1, 1, 1, 1];
    switch (mode) {
      case "date":
        this.modeSwitch = [1, 1, 1, 0, 0, 0];
        break;
      case "time":
        if (this.options.use12Hours) {
          this.modeSwitch = [0, 0, 0, 1, 1, 1];
        } else {
          this.modeSwitch = [0, 0, 0, 1, 1, 0];
        }
        break;
      case "datetime":
        if (this.options.use12Hours) {
          this.modeSwitch = [1, 1, 1, 1, 1, 1];
        } else {
          this.modeSwitch = [1, 1, 1, 1, 1, 0];
        }
        break;
      case "year":
        this.modeSwitch = [1, 0, 0, 0, 0];
        break;
      case "month":
        this.modeSwitch = [1, 1, 0, 0, 0];
        break;
      default:
        break;
    }
    const tempIndexArray = [];
    for (let i = 0; i < this.modeSwitch.length; i++) {
      if (this.modeSwitch[i] > 0) {
        tempIndexArray.push(i);
      }
    }
    this.clos = tempIndexArray[tempIndexArray.length - 1] - tempIndexArray[0] + 1;
    this.indexArray = tempIndexArray;
  }
  initResult() {
    this.resultArr = [];
    for (let i = 0; i < this.clos; i++) {
      const res = this.currentTime[i];
      if (this.options.mode === "time") {
        this.resultArr = this.currentTime;
      } else {
        this.resultArr.push(res);
      }
    }
  }
  checkTime() {
    const min_Date = this.transformDateFormat(this.options.minDate).split("-");
    if (min_Date.length > 0) {
      this.min_date = min_Date.map((item) => {
        return parseInt(item, 0);
      });
    }
    const max_Date = this.transformDateFormat(this.options.maxDate).split("-");
    if (max_Date.length > 0) {
      this.max_date = max_Date.map((item) => {
        return parseInt(item, 0);
      });
    }
    const min_date = [...this.min_date];
    const max_date = [...this.max_date];
    const current_time = [...this.currentTime];
    this.localMinDate = [];
    if (this.localMinDate.length === 0) {
      for (let index = 0; index < this.indexArray.length; index++) {
        this.localMinDate.push(min_date[this.indexArray[index]]);
      }
    }
    this.localMaxDate = [];
    if (this.localMaxDate.length === 0) {
      for (let index = 0; index < this.indexArray.length; index++) {
        this.localMaxDate.push(max_date[this.indexArray[index]]);
      }
    }
    if (this.indexArray.length === this.localMinDate.length && this.localMinDate.length === this.localMaxDate.length) {
      const minT = new Date(min_date[0], min_date[1], min_date[2], min_date[3], min_date[4]).getTime();
      const maxT = new Date(max_date[0], max_date[1], max_date[2], max_date[3], max_date[4]).getTime();
      const curT = new Date(current_time[0], current_time[1], current_time[2], current_time[3] || 0, current_time[4] || 0).getTime();
      this.curTLessThanMin = false;
      this.curTMoreThanMax = false;
      if (curT < minT) {
        this.curTLessThanMin = true;
        this.currentTime = this.min_date;
        this.errorMessage = this.localeNew.curTLessthanMin;
      }
      if (curT > maxT) {
        this.curTMoreThanMax = true;
        this.currentTime = this.max_date;
        this.errorMessage = this.localeNew.curTMorethanMax;
      }
      let _indexArrayIndex = 0;
      let timeModeIndex = this.options.mode === "time" ? 3 : 0;
      for (let i = 0; i < this.modeSwitch.length; i++) {
        if (this.modeSwitch[i] === 0) {
          switch (i) {
            case 0:
              min_date[i] = (/* @__PURE__ */ new Date()).getFullYear();
              max_date[i] = (/* @__PURE__ */ new Date()).getFullYear();
              break;
            case 1:
              min_date[i] = (/* @__PURE__ */ new Date()).getMonth() + 1;
              max_date[i] = (/* @__PURE__ */ new Date()).getMonth() + 1;
              break;
            case 2:
              min_date[i] = (/* @__PURE__ */ new Date()).getDate();
              max_date[i] = (/* @__PURE__ */ new Date()).getDate();
              break;
            case 3:
              min_date[i] = (/* @__PURE__ */ new Date()).getHours();
              max_date[i] = (/* @__PURE__ */ new Date()).getHours();
              break;
            case 4:
              min_date[i] = (/* @__PURE__ */ new Date()).getMinutes();
              max_date[i] = (/* @__PURE__ */ new Date()).getMinutes();
              break;
            case 5:
              min_date[i] = 0;
              max_date[i] = 1;
              break;
          }
        } else {
          switch (i) {
            case 0:
              this.localMinDate[_indexArrayIndex] = min_date[i] = this.localMinDate[_indexArrayIndex] >= 1900 ? this.localMinDate[_indexArrayIndex] : (/* @__PURE__ */ new Date()).getFullYear();
              this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex] >= 1900 ? this.localMaxDate[_indexArrayIndex] : (/* @__PURE__ */ new Date()).getFullYear() + 1;
              break;
            case 1:
              this.localMinDate[_indexArrayIndex] = min_date[i] = this.localMinDate[_indexArrayIndex] > 0 && this.localMinDate[_indexArrayIndex] <= 12 ? this.localMinDate[_indexArrayIndex] : 1;
              this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex] > 0 && this.localMaxDate[_indexArrayIndex] <= 12 ? this.localMaxDate[_indexArrayIndex] : 12;
              break;
            case 2:
              this.localMinDate[_indexArrayIndex] = min_date[i] = this.localMinDate[_indexArrayIndex] > 0 && this.localMinDate[_indexArrayIndex] <= new Date(min_date[0], min_date[1], 0).getDate() ? this.localMinDate[_indexArrayIndex] : 1;
              this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex] > 0 && this.localMaxDate[_indexArrayIndex] <= new Date(max_date[0], max_date[1], 0).getDate() ? this.localMaxDate[_indexArrayIndex] : new Date(max_date[0], max_date[1], 0).getDate();
              break;
            case 3:
              this.localMinDate[_indexArrayIndex] = min_date[i] = this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 23 ? this.localMinDate[_indexArrayIndex - timeModeIndex] : 0;
              if (this.options.use12Hours) {
                this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 11 ? this.localMaxDate[_indexArrayIndex - timeModeIndex] : 11;
              } else {
                this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 23 ? this.localMaxDate[_indexArrayIndex - timeModeIndex] : 23;
              }
              break;
            case 4:
              this.localMinDate[_indexArrayIndex] = min_date[i] = this.localMinDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMinDate[_indexArrayIndex - timeModeIndex] <= 59 ? this.localMinDate[_indexArrayIndex - timeModeIndex] : 0;
              this.localMaxDate[_indexArrayIndex] = max_date[i] = this.localMaxDate[_indexArrayIndex - timeModeIndex] >= 0 && this.localMaxDate[_indexArrayIndex - timeModeIndex] <= 59 ? this.localMaxDate[_indexArrayIndex - timeModeIndex] : 59;
              break;
          }
        }
        _indexArrayIndex++;
      }
      return minT <= curT && curT <= maxT;
    } else {
      this.errorMessage = this.localeNew.errorMessage;
      return false;
    }
  }
  judgeTime(arr1, arr2) {
    let date1;
    let date2;
    date1 = arr1.slice(0, 3).join("-") + " " + arr1.slice(3, 5).join(":");
    date2 = arr2.slice(0, 3).join("-") + " " + arr2.slice(3, 5).join(":");
    return new Date(date1).getTime() > new Date(date2).getTime();
  }
  judgeEqualArray(arr1, arr2, length) {
    let status = true;
    for (let i = 0; i < length; i++) {
      if (arr1[i] != arr2[i]) {
        status = false;
      }
    }
    return status;
  }
  initReady() {
    let realIdx = 0;
    for (let i = 0; i < this.clos; i++) {
      realIdx = this.indexArray[i];
      let min = 0;
      let max = 0;
      const tempArray = [];
      switch (realIdx) {
        case 0:
          this.initData(tempArray, this.localMinDate[i], this.localMaxDate[i], this.localeNew.year, i);
          break;
        case 1:
          min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[i] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[i] : 12;
          this.initData(tempArray, min, max, this.localeNew.month, i);
          break;
        case 2:
          min = this.judgeEqualArray(this.min_date, this.current_time, 2) ? this.localMinDate[i] : this.curTLessThanMin ? this.localMinDate[i] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 2) ? this.localMaxDate[i] : new Date(this.current_time[0], this.current_time[1], 0).getDate();
          this.initData(tempArray, min, max, this.localeNew.day, i);
          break;
        case 3:
          min = this.judgeEqualArray(this.min_date, this.current_time, 3) ? this.localMinDate[i] : this.curTLessThanMin ? this.localMinDate[i] : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 3) ? this.localMaxDate[i] : this.curTMoreThanMax ? this.localMaxDate[i] : 23;
          this.initData(tempArray, min, max, this.localeNew.hour, i);
          break;
        case 4:
          min = this.judgeEqualArray(this.min_date, this.current_time, 4) ? this.localMinDate[i] : this.curTLessThanMin ? this.localMinDate[i] : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 4) ? this.localMaxDate[i] : this.curTMoreThanMax ? this.localMaxDate[i] : 59;
          this.initData(tempArray, min, max, this.localeNew.minute, i);
          break;
        case 5:
          min = 0;
          max = 1;
          this.initData(tempArray, min, max, "use12Hours", i);
          break;
      }
    }
  }
  initData(tempArr, min, max, str, idx) {
    const dataWithStr = [];
    const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
    for (min; min < max + 1; min += increaseValue) {
      tempArr.push(min);
      dataWithStr.push(min + str);
    }
    if (this.data.length > this.indexArray.length) {
      this.data = [];
      this.dataWithStr = [];
    }
    if (this.data.length > idx && this.data[idx].toString() !== tempArr.toString()) {
      this.data[idx] = tempArr;
    } else if (this.data.length > idx && this.data[idx].toString() === tempArr.toString()) {
      this.data[idx] = tempArr;
    } else {
      this.data.push(tempArr);
    }
    if (this.options.locale === void 0 || this.options.locale.locale === "zh_CN") {
      if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() !== dataWithStr.toString()) {
        this.dataWithStr[idx] = dataWithStr;
      } else if (this.dataWithStr.length > idx && this.dataWithStr[idx].toString() === dataWithStr.toString()) {
        this.dataWithStr[idx] = dataWithStr;
      } else {
        this.dataWithStr.push(dataWithStr);
      }
    } else {
      this.dataWithStr = this.data;
    }
  }
  ok() {
    this.options.onOk.emit(this.handleReslut());
    this.setTransitionName();
  }
  handleReslut() {
    let result = "";
    if (this.options.mode === "datetime" || this.options.mode === "time") {
      const temp = this.resultArr;
      result = temp.slice(0, 3).join("-") + " " + temp.slice(3, 5).join(":");
    } else {
      if (this.resultArr.length < 3) {
        this.resultArr.push("1");
      }
      result = this.resultArr.slice(0, 3).map((v) => {
        return this.preZero(parseInt(v, 0));
      }).join("-");
    }
    this.resultDate = new Date(result.replace(/-/g, "/"));
    if (this.options.minDate.getTime() > this.resultDate.getTime()) {
      if (this.resultArr.length > 0) {
        for (let index = 0; index < this.resultArr.length; index++) {
          this.resultArr = [...this.min_date];
          this.currentTime = this.resultArr;
          this.current_time = this.currentTime;
        }
      }
      this.resultDate = this.options.minDate;
    }
    return this.resultDate;
  }
  cancel() {
    this.options.onDismiss.emit();
    this.setTransitionName();
  }
  setTransitionName() {
    this.transitionName = "am-slide-up-leave am-slide-up-leave-active";
    this.maskTransitionName = "am-fade-leave am-fade-leave-active";
    setTimeout(() => {
      this.options.hidePicker();
    }, 200);
  }
  setCurrentSelected(checkIdx, sta, indexT) {
    if (checkIdx >= this.clos - 1) {
      return;
    }
    let status = null;
    if (sta) {
      status = this.judgeEqualArray(this.min_date, this.resultArr, this.options.mode === "time" ? checkIdx + 4 : checkIdx + 1);
    } else {
      status = this.judgeEqualArray(this.max_date, this.resultArr, this.options.mode === "time" ? checkIdx + 4 : checkIdx + 1);
    }
    if (!status) {
      let min = 0;
      let max = 0;
      let str = "";
      const realIdx = this.indexArray[checkIdx];
      switch (realIdx) {
        case 0:
          min = this.judgeEqualArray(this.min_date, this.current_time, 1) ? this.localMinDate[checkIdx + 1] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 1) ? this.localMaxDate[checkIdx + 1] : 12;
          str = "月";
          break;
        case 1:
          min = this.judgeEqualArray(this.min_date, this.current_time, 2) ? this.localMinDate[checkIdx + 1] : this.curTLessThanMin ? this.localMinDate[checkIdx + 1] : 1;
          max = this.judgeEqualArray(this.max_date, this.current_time, 2) ? this.localMaxDate[checkIdx + 1] : new Date(this.current_time[0], this.current_time[1], 0).getDate();
          str = "日";
          break;
        case 2:
          min = this.judgeEqualArray(this.min_date, this.current_time, 3) ? this.localMinDate[checkIdx + 1] : this.curTLessThanMin ? this.localMinDate[checkIdx + 1] : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 3) ? this.localMaxDate[checkIdx + 1] : this.curTMoreThanMax ? this.localMaxDate[checkIdx + 1] : 23;
          str = "时";
          break;
        case 3:
          min = this.judgeEqualArray(this.min_date, this.current_time, 4) ? this.localMinDate[checkIdx + 1] : this.curTLessThanMin ? this.localMinDate[checkIdx + 1] : 0;
          max = this.judgeEqualArray(this.max_date, this.current_time, 4) ? this.localMaxDate[checkIdx + 1] : this.curTMoreThanMax ? this.localMaxDate[checkIdx + 1] : 59;
          str = "分";
          break;
      }
      this.initRangeArr(min, max, indexT, checkIdx + 1, str);
    }
    this.setCurrentSelected(checkIdx + 1, sta, indexT);
  }
  initRangeArr(min, max, indexT, checkIdx, str) {
    const realIdx = this.indexArray[checkIdx];
    const arr = [];
    let targetLong = 0;
    const increaseValue = str === this.localeNew.minute ? this.options.minuteStep : 1;
    for (let index = min; index < max + 1; index += increaseValue) {
      arr.push(index);
    }
    if (arr.indexOf(this.resultArr[realIdx]) == -1) {
      if (-this.selectedTarget[checkIdx].currentY > max - min) {
        indexT = max - min;
        this.selectedTarget[checkIdx].currentY = -indexT;
      }
      targetLong = -arr.length * this.lineHeight;
    } else {
      targetLong = -arr.indexOf(this.resultArr[realIdx]) * this.lineHeight;
      this.selectedTarget[checkIdx].currentY = -arr.indexOf(this.resultArr[realIdx]);
    }
    if (this.data[checkIdx].toString() !== arr.toString()) {
      if (checkIdx >= 3) {
        this.current_time[realIdx] = -targetLong / this.lineHeight;
        this.resultArr[realIdx] = -targetLong / this.lineHeight;
      } else {
        const delta = this.judgeEqualArray(this.current_time, this.min_date, realIdx) ? this.min_date[realIdx] : 1;
        this.current_time[realIdx] = -targetLong / this.lineHeight + delta;
        this.resultArr[realIdx] = -targetLong / this.lineHeight + delta;
      }
      this.data[checkIdx] = arr;
      this.dataWithStr[checkIdx] = this.options.locale.locale === "zh_CN" ? arr.map((item) => {
        return item + str;
      }) : arr;
      setTimeout(() => {
        this.selectedTarget.forEach((item, i) => {
          if (i >= checkIdx) {
            this.currentPicker.children[i].children[2].style.transition = "";
            const index = parseInt(item.currentY, 0);
            this.currentPicker.children[i].children[2].style.transform = `translateY(${index * this.lineHeight}px)`;
          }
        });
      }, 0);
    }
  }
  getEventTarget(event) {
    if (event.type === "mousedown" || event.type === "mousemove" || event.type === "mouseup" || event.type === "mouseleave") {
      return event;
    } else {
      if (event && event.changedTouches && event.changedTouches[0]) {
        return event.changedTouches[0];
      }
      return null;
    }
  }
  ngOnInit() {
    this.checkMode(this.options.mode);
    const value = this.transformDateFormat(this.options.value).split("-");
    if (value.length > 1) {
      this.current_time = this.currentTime = value.map((item) => {
        return parseInt(item, 0);
      });
    } else {
      this.currentTime = this.current_time;
    }
    this.localeProvider();
  }
  ngAfterViewInit() {
    this.reloadPicker();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
};
_DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) {
  return new (t || _DatePickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DatePickerOptions), ɵɵdirectiveInject(ToastService), ɵɵdirectiveInject(LocaleProviderService));
};
_DatePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _DatePickerComponent,
  selectors: [["DatePicker"], ["nzm-date-picker"]],
  viewQuery: function DatePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c017, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.picker = _t.first);
    }
  },
  hostBindings: function DatePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function DatePickerComponent_mousedown_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("touchstart", function DatePickerComponent_touchstart_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("mousemove", function DatePickerComponent_mousemove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("touchmove", function DatePickerComponent_touchmove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("mouseleave", function DatePickerComponent_mouseleave_HostBindingHandler($event) {
        return ctx.panend($event);
      })("mouseup", function DatePickerComponent_mouseup_HostBindingHandler($event) {
        return ctx.panend($event);
      })("touchend", function DatePickerComponent_touchend_HostBindingHandler($event) {
        return ctx.panend($event);
      });
    }
  },
  decls: 15,
  vars: 8,
  consts: [[3, "class", "click", 4, "ngIf"], [2, "z-index", "1000"], [1, "am-picker-popup-content"], [1, "am-picker-popup-body"], [1, "am-picker-popup-header"], [1, "am-picker-popup-item", "am-picker-popup-header-left", 3, "click"], [1, "am-picker-popup-item", "am-picker-popup-title"], [1, "am-picker-popup-item", "am-picker-popup-header-right", 3, "click"], [1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [3, "click"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]],
  template: function DatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DatePickerComponent_div_0_Template, 1, 3, "div", 0);
      ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "div", 4)(6, "div", 5);
      ɵɵlistener("click", function DatePickerComponent_Template_div_click_6_listener() {
        return ctx.cancel();
      });
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 6);
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 7);
      ɵɵlistener("click", function DatePickerComponent_Template_div_click_10_listener() {
        return ctx.ok();
      });
      ɵɵtext(11);
      ɵɵelementEnd()();
      ɵɵelementStart(12, "div", 8, 9);
      ɵɵtemplate(14, DatePickerComponent_div_14_Template, 5, 2, "div", 10);
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.options.mask);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("am-picker-popup ", ctx.transitionName, "");
      ɵɵadvance(6);
      ɵɵtextInterpolate1(" ", ctx.options.dismissText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.options.title);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.options.okText, " ");
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.dataWithStr);
    }
  },
  dependencies: [NgForOf, NgIf],
  encapsulation: 2
});
var DatePickerComponent = _DatePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerComponent, [{
    type: Component,
    args: [{
      selector: "DatePicker, nzm-date-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div *ngIf="options.mask" class="am-picker-popup-mask {{ maskTransitionName }}" (click)="cancel()"></div>\n<div class="am-picker-popup {{ transitionName }}" style="z-index: 1000">\n  <div class="am-picker-popup-content">\n    <div class="am-picker-popup-body">\n      <div>\n        <div class="am-picker-popup-header">\n          <div class="am-picker-popup-item am-picker-popup-header-left" (click)="cancel()">\n            {{ options.dismissText }}\n          </div>\n          <div class="am-picker-popup-item am-picker-popup-title">{{ options.title }}</div>\n          <div class="am-picker-popup-item am-picker-popup-header-right" (click)="ok()">\n            {{ options.okText }}\n          </div>\n        </div>\n        <div #picker class="am-picker" style="flex-direction: row; align-items: center;">\n          <div *ngFor="let item of dataWithStr; let i = index" class="am-picker-col">\n            <div class="am-picker-col-indicator " style="top: 102px;"></div>\n            <div id="{{ i }}" class="am-picker-col-mask" style="background-size: 100% 102px;"></div>\n            <div class="am-picker-col-content">\n              <div id="{{ i }}" class="am-picker-col-item" *ngFor="let val of item; let i = index">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DatePickerOptions
  }, {
    type: ToastService
  }, {
    type: LocaleProviderService
  }], {
    picker: [{
      type: ViewChild,
      args: ["picker", {
        read: ViewContainerRef
      }]
    }],
    panstart: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    panmove: [{
      type: HostListener,
      args: ["mousemove", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    panend: [{
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }, {
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var _DatePickerDirective = class _DatePickerDirective {
  togglePicker() {
    if (!this.picker) {
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }
  constructor(_viewContainerRef, _defaultOptions, _cfr) {
    this._viewContainerRef = _viewContainerRef;
    this._defaultOptions = _defaultOptions;
    this._cfr = _cfr;
    this._eventListeners = [];
    this.minuteStep = 1;
    this.value = /* @__PURE__ */ new Date();
    this.onVisibleChange = new EventEmitter(true);
    this.onValueChange = new EventEmitter();
    this.onOk = new EventEmitter();
    this.onDismiss = new EventEmitter();
  }
  showPicker() {
    if (!this.picker && !this.disabled) {
      setTimeout(() => {
        this._eventListeners = [];
      });
      const options = new DatePickerOptions();
      Object.assign(options, this._defaultOptions, {
        hidePicker: (event) => {
          this.hidePicker();
        },
        updateNgModel: (value) => {
          if (this._ngModelOnChange) {
            this.value = value;
            this._ngModelOnChange(value);
          }
        }
      });
      const optionalParams = ["mode", "minDate", "maxDate", "minuteStep", "value", "mask", "title", "okText", "dismissText", "disabled", "locale", "appendToBody", "showErrorToast", "showErrorToastInterval", "onOk", "onDismiss", "onValueChange"];
      optionalParams.forEach((param) => {
        if (typeof this[param] !== "undefined") {
          options[param] = this[param];
        }
      });
      const componentFactory = this._cfr.resolveComponentFactory(DatePickerComponent);
      const childInjector = Injector.create([{
        provide: DatePickerOptions,
        useValue: options
      }]);
      this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
      if (options.appendToBody) {
        this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }
  hidePicker() {
    if (this.appendToBodyElement) {
      document.body.removeChild(this.appendToBodyElement);
      this.appendToBodyElement = null;
    }
    if (this.picker) {
      this.picker.destroy();
      delete this.picker;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach((fn) => fn());
      this._eventListeners = [];
    }
  }
  writeValue(value) {
    this.value = value;
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  ngOnInit() {
    this.onVisibleChange.emit(false);
  }
  ngOnChanges(changes) {
    if (changes.isOpen) {
      if (changes.isOpen.currentValue === true) {
        this.showPicker();
      } else {
        this.hidePicker();
      }
    }
  }
  ngOnDestroy() {
    this.hidePicker();
  }
};
_DatePickerDirective.ɵfac = function DatePickerDirective_Factory(t) {
  return new (t || _DatePickerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(DatePickerOptions), ɵɵdirectiveInject(ComponentFactoryResolver$1));
};
_DatePickerDirective.ɵdir = ɵɵdefineDirective({
  type: _DatePickerDirective,
  selectors: [["", "DatePicker", ""]],
  hostBindings: function DatePickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function DatePickerDirective_click_HostBindingHandler() {
        return ctx.togglePicker();
      });
    }
  },
  inputs: {
    isOpen: "isOpen",
    mode: "mode",
    minDate: "minDate",
    maxDate: "maxDate",
    use12Hours: "use12Hours",
    minuteStep: "minuteStep",
    value: "value",
    mask: "mask",
    title: "title",
    okText: "okText",
    dismissText: "dismissText",
    disabled: "disabled",
    locale: "locale",
    appendToBody: "appendToBody",
    showErrorToast: "showErrorToast",
    showErrorToastInterval: "showErrorToastInterval"
  },
  outputs: {
    onVisibleChange: "onVisibleChange",
    onValueChange: "onValueChange",
    onOk: "onOk",
    onDismiss: "onDismiss"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DatePickerDirective),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var DatePickerDirective = _DatePickerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerDirective, [{
    type: Directive,
    args: [{
      selector: "[DatePicker]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerDirective),
        multi: true
      }]
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: DatePickerOptions
  }, {
    type: ComponentFactoryResolver$1
  }], {
    isOpen: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    use12Hours: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    okText: [{
      type: Input
    }],
    dismissText: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    appendToBody: [{
      type: Input
    }],
    showErrorToast: [{
      type: Input
    }],
    showErrorToastInterval: [{
      type: Input
    }],
    onVisibleChange: [{
      type: Output
    }],
    onValueChange: [{
      type: Output
    }],
    onOk: [{
      type: Output
    }],
    onDismiss: [{
      type: Output
    }],
    togglePicker: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _DatePickerModule = class _DatePickerModule {
};
_DatePickerModule.ɵfac = function DatePickerModule_Factory(t) {
  return new (t || _DatePickerModule)();
};
_DatePickerModule.ɵmod = ɵɵdefineNgModule({
  type: _DatePickerModule,
  declarations: [DatePickerComponent, DatePickerDirective],
  imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerComponent, DatePickerDirective]
});
_DatePickerModule.ɵinj = ɵɵdefineInjector({
  providers: [DatePickerOptions],
  imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule]
});
var DatePickerModule = _DatePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, LocaleProviderModule, ToastModule, FormsModule],
      exports: [DatePickerComponent, DatePickerDirective],
      declarations: [DatePickerComponent, DatePickerDirective],
      providers: [DatePickerOptions]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-date-picker-view.mjs
function DatePickerViewComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    ɵɵpropertyInterpolate("id", i_r5);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", val_r4.label ? val_r4.label : val_r4, " ");
  }
}
function DatePickerViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵelement(1, "div", 2)(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵtemplate(4, DatePickerViewComponent_div_0_div_4_Template, 2, 2, "div", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r0.indicatorStyle);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", i_r2);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r1);
  }
}
var _DatePickerViewComponent = class _DatePickerViewComponent extends DatePickerComponent {
  constructor() {
    super(...arguments);
    this.mode = "date";
    this.minDate = new Date(2e3, 5, 1, 0, 0, 0);
    this.maxDate = new Date(2030, 1, 1, 23, 59, 59);
    this.value = /* @__PURE__ */ new Date();
    this.disabled = false;
    this.indicatorStyle = {};
    this.showErrorToast = true;
    this.showErrorToastInterval = 2e3;
    this.onValueChange = new EventEmitter();
    this.amPicker = true;
  }
  get locale() {
    return this.options.locale;
  }
  set locale(value) {
    this.options.locale = value;
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  reloadPicker() {
    if (this.currentPicker) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = "transform .3s";
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }
  writeValue(value) {
    if (value) {
      this.value = value;
      this.optionInit();
      this.init();
    }
  }
  registerOnChange(fn) {
    this.ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this.ngModelOnTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  optionInit() {
    this.options.mode = this.mode;
    this.options.minDate = this.minDate;
    this.options.maxDate = this.maxDate;
    this.options.disabled = this.disabled;
    this.options.locale = this.locale;
    this.options.value = this.value;
    this.options.showErrorToast = this.showErrorToast;
    this.options.showErrorToastInterval = this.showErrorToastInterval;
    this.options.onValueChange = this.onValueChange;
    this.checkMode(this.options.mode);
    const value = this.transformDateFormat(this.options.value).split("-");
    if (value.length > 0) {
      this.current_time = this.currentTime = value.map((item) => {
        return parseInt(item, 0);
      });
    }
  }
  ngOnInit() {
    this.optionInit();
    this.localeProvider();
  }
  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
  ngOnChanges(changes) {
    if (changes.value) {
      this.options.value = changes.value.currentValue;
      const value = this.transformDateFormat(this.options.value).split("-");
      if (value.length > 0) {
        this.currentTime = value.map((item) => {
          return parseInt(item, 0);
        });
      }
      if (!this.judgeEqualArray(this.currentTime, this.resultArr, this.resultArr.length) || this.judgeEqualArray(this.currentTime, this.min_date, this.currentTime.length) || this.judgeTime(this.currentTime, this.max_date)) {
        this.optionInit();
        this.init();
      }
    }
    if (changes.mode || changes.minDate || changes.maxDate || changes.disabled || changes.locale) {
      this.optionInit();
      this.init();
    }
  }
};
_DatePickerViewComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵDatePickerViewComponent_BaseFactory;
  return function DatePickerViewComponent_Factory(t) {
    return (ɵDatePickerViewComponent_BaseFactory || (ɵDatePickerViewComponent_BaseFactory = ɵɵgetInheritedFactory(_DatePickerViewComponent)))(t || _DatePickerViewComponent);
  };
})();
_DatePickerViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _DatePickerViewComponent,
  selectors: [["DatePickerView"], ["nzm-date-picker-view"]],
  hostVars: 2,
  hostBindings: function DatePickerViewComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-picker", ctx.amPicker);
    }
  },
  inputs: {
    mode: "mode",
    minDate: "minDate",
    maxDate: "maxDate",
    value: "value",
    disabled: "disabled",
    indicatorStyle: "indicatorStyle",
    locale: "locale",
    showErrorToast: "showErrorToast",
    showErrorToastInterval: "showErrorToastInterval"
  },
  outputs: {
    onValueChange: "onValueChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _DatePickerViewComponent),
    multi: true
  }, DatePickerOptions]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "am-picker-col", 4, "ngFor", "ngForOf"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px", 3, "ngStyle"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]],
  template: function DatePickerViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, DatePickerViewComponent_div_0_Template, 5, 3, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.dataWithStr);
    }
  },
  dependencies: [NgForOf, NgStyle],
  encapsulation: 2
});
var DatePickerViewComponent = _DatePickerViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerViewComponent, [{
    type: Component,
    args: [{
      selector: "DatePickerView, nzm-date-picker-view",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DatePickerViewComponent),
        multi: true
      }, DatePickerOptions],
      template: '<div *ngFor="let item of dataWithStr; let i = index" class="am-picker-col">\n  <div class="am-picker-col-indicator " style="top: 102px;" [ngStyle]="indicatorStyle"></div>\n  <div id="{{ i }}" class="am-picker-col-mask" style="background-size: 100% 102px;"></div>\n  <div class="am-picker-col-content">\n    <div id="{{ i }}" *ngFor="let val of item; let i = index" class="am-picker-col-item">\n      {{ val.label ? val.label : val }}\n    </div>\n  </div>\n</div>\n'
    }]
  }], null, {
    mode: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showErrorToast: [{
      type: Input
    }],
    showErrorToastInterval: [{
      type: Input
    }],
    onValueChange: [{
      type: Output
    }],
    amPicker: [{
      type: HostBinding,
      args: ["class.am-picker"]
    }]
  });
})();
var _DatePickerViewModule = class _DatePickerViewModule {
};
_DatePickerViewModule.ɵfac = function DatePickerViewModule_Factory(t) {
  return new (t || _DatePickerViewModule)();
};
_DatePickerViewModule.ɵmod = ɵɵdefineNgModule({
  type: _DatePickerViewModule,
  declarations: [DatePickerViewComponent],
  imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
  exports: [DatePickerViewComponent]
});
_DatePickerViewModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule]
});
var DatePickerViewModule = _DatePickerViewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerViewModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DatePickerModule, LocaleProviderModule, ToastModule, FormsModule],
      exports: [DatePickerViewComponent],
      declarations: [DatePickerViewComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-calendar.mjs
function CalendarSingleMonthComponent_div_3_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "test");
    ɵɵelementEnd();
  }
}
function CalendarSingleMonthComponent_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵelement(1, "span", 3);
    ɵɵelementStart(2, "div", 3);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngClass", cell_r4.lCls);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", cell_r4.cls);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", cell_r4.day && cell_r4.day.dayOfMonth || "", " ");
    ɵɵadvance(1);
    ɵɵproperty("ngClass", cell_r4.rCls);
  }
}
function CalendarSingleMonthComponent_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngClass", cell_r4.infoCls);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", cell_r4.info, " ");
  }
}
function CalendarSingleMonthComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function CalendarSingleMonthComponent_div_3_div_1_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r12);
      const cell_r4 = restoredCtx.$implicit;
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.onClickCell(cell_r4));
    });
    ɵɵtemplate(1, CalendarSingleMonthComponent_div_3_div_1_div_1_Template, 2, 0, "div", 6)(2, CalendarSingleMonthComponent_div_3_div_1_div_2_Template, 5, 4, "div", 7)(3, CalendarSingleMonthComponent_div_3_div_1_div_3_Template, 2, 2, "div", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const row_r1 = ɵɵnextContext().$implicit;
    ɵɵclassMap("cell " + (cell_r4.extra && cell_r4.extra.cellCls || ""));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r1.extra && row_r1.extra.cellRender);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r1.extra || row_r1.extra && row_r1.extra.cellRender);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r1.extra || row_r1.extra && row_r1.extra.cellRender);
  }
}
function CalendarSingleMonthComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, CalendarSingleMonthComponent_div_3_div_1_Template, 4, 6, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    ɵɵproperty("ngClass", row_r1.rowCls);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r1.weeksDataList);
  }
}
var _c018 = ["layout"];
var _c110 = ["panel"];
function CalendarDatePickerComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.props.locale.loadPrevMonth);
  }
}
function CalendarDatePickerComponent_CalendarSingleMonth_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarSingleMonth", 9);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵproperty("data", item_r4.component);
  }
}
var _c22 = (a0) => ({
  transform: a0
});
function CalendarHeaderComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 4);
    ɵɵlistener("click", function CalendarHeaderComponent_span_0_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.triggerCancel());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r0.closeIcon, ɵɵsanitizeHtml);
  }
}
function CalendarHeaderComponent_span_1_ng_template_1_Template(rf, ctx) {
}
function CalendarHeaderComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 5);
    ɵɵlistener("click", function CalendarHeaderComponent_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.triggerCancel());
    });
    ɵɵtemplate(1, CalendarHeaderComponent_span_1_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIcon);
  }
}
function CalendarHeaderComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function CalendarHeaderComponent_span_4_Template_span_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.triggerClear());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.clearIcon || ctx_r2.locale.clear);
  }
}
var _c3 = (a0) => ({
  height: a0,
  overflow: "hidden"
});
function CalendarConfirmPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "p");
    ɵɵtext(2);
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "p");
    ɵɵtext(6);
    ɵɵelementStart(7, "span");
    ɵɵtext(8);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.props.locale.start, ": ");
    ɵɵadvance(1);
    ɵɵclassMap(!ctx_r0.props.startDateTime ? "grey" : "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.startTimeStr);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.props.locale.end, ": ");
    ɵɵadvance(1);
    ɵɵclassMap(!ctx_r0.props.endDateTime ? "grey" : "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.endTimeStr);
  }
}
function CalendarComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "div");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap("mask " + ctx_r0.maskAnimateClass);
  }
}
function CalendarComponent_span_1_CalendarTimePicker_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarTimePicker", 7);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("propsData", ctx_r4.props)("title", ctx_r4.state.timePickerTitle)("clientHeight", ctx_r4.state.clientHight)("prefixCls", ctx_r4.props.timePickerPrefixCls)("defaultValue", ctx_r4.props.defaultTimeValue)("pickerPrefixCls", ctx_r4.props.timePickerPickerPrefixCls)("value", ctx_r4.state.endDate ? ctx_r4.state.endDate : ctx_r4.state.startDate)("onValueChange", ctx_r4.onTimeChange);
  }
}
function CalendarComponent_span_1_CalendarShortcutPanel_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarShortcutPanel", 8);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("locale", ctx_r5.props.locale)("onSelect", ctx_r5.shortcutSelect);
  }
}
function CalendarComponent_span_1_CalendarConfirmPanel_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CalendarConfirmPanel", 9);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("propsData", ctx_r6.props)("startDateTime", ctx_r6.state.startDate)("endDateTime", ctx_r6.state.endDate)("disableBtn", ctx_r6.state.disConfirmBtn)("formatStr", ctx_r6.props.pickTime ? ctx_r6.props.locale.dateTimeFormat : ctx_r6.props.locale.dateFormat)("onConfirm", ctx_r6.triggerConfirm);
  }
}
function CalendarComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span")(1, "div")(2, "CalendarHeader", 2);
    ɵɵlistener("onCancel", function CalendarComponent_span_1_Template_CalendarHeader_onCancel_2_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.triggerCancel());
    })("onClear", function CalendarComponent_span_1_Template_CalendarHeader_onClear_2_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.triggerClear());
    });
    ɵɵelementEnd();
    ɵɵelement(3, "CalendarDatePicker", 3);
    ɵɵtemplate(4, CalendarComponent_span_1_CalendarTimePicker_4_Template, 1, 8, "CalendarTimePicker", 4)(5, CalendarComponent_span_1_CalendarShortcutPanel_5_Template, 1, 2, "CalendarShortcutPanel", 5)(6, CalendarComponent_span_1_CalendarConfirmPanel_6_Template, 1, 6, "CalendarConfirmPanel", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵclassMap("content animate " + ctx_r1.contentAnimateClass);
    ɵɵadvance(1);
    ɵɵproperty("locale", ctx_r1.props.locale)("closeIcon", _r3)("showClear", ctx_r1.showClear);
    ɵɵadvance(1);
    ɵɵproperty("propsData", ctx_r1.props)("endDate", ctx_r1.state.endDate)("startDate", ctx_r1.state.startDate)("onCellClick", ctx_r1.onSelectedDate)("onSelectHasDisableDate", ctx_r1.triggerSelectHasDisableDate)("onLayout", ctx_r1.setClientHeight);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.state.showTimePicker);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.props.showShortcut && !ctx_r1.state.showTimePicker);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.state.startDate);
  }
}
function CalendarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 10);
  }
  if (rf & 2) {
    ɵɵproperty("type", "cross");
  }
}
var DateModels;
(function(DateModels2) {
  let SelectType;
  (function(SelectType2) {
    SelectType2[SelectType2["None"] = 0] = "None";
    SelectType2[SelectType2["Single"] = 1] = "Single";
    SelectType2[SelectType2["All"] = 2] = "All";
    SelectType2[SelectType2["Only"] = 3] = "Only";
    SelectType2[SelectType2["Start"] = 4] = "Start";
    SelectType2[SelectType2["Middle"] = 5] = "Middle";
    SelectType2[SelectType2["End"] = 6] = "End";
  })(SelectType = DateModels2.SelectType || (DateModels2.SelectType = {}));
})(DateModels || (DateModels = {}));
var mergeDateTime = (date, time) => {
  date = date || /* @__PURE__ */ new Date();
  if (!time) {
    return date;
  }
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());
};
var formatDate = (date, format, locale) => {
  const week = locale && locale.week;
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "w+": week && week[date.getDay()],
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
};
var isSameDate = (day_one, day_two) => {
  if (!day_one || !day_two) {
    console.error("isSameDate function need two params");
    return "need two params";
  }
  const compareDate = day_one.getDate() === day_two.getDate();
  const compareMonth = day_one.getMonth() === day_two.getMonth();
  const compareYear = day_one.getFullYear() === day_two.getFullYear();
  return compareDate && compareMonth && compareYear;
};
var CalendarDatePickerBaseComponent = class {
  constructor() {
    this.props = {
      prefixCls: "rmc-calendar",
      infinite: false,
      infiniteOpt: false,
      defaultDate: /* @__PURE__ */ new Date(),
      initalMonths: 6,
      locale: zh_CN.Calendar
    };
    this.state = {
      months: []
    };
    this.visibleMonth = [];
    this.getDateWithoutTime = (date) => {
      if (!date) {
        return 0;
      }
      return +new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    this.genWeekData = (firstDate) => {
      const minDateTime = this.getDateWithoutTime(this.props.minDate);
      const maxDateTime = this.getDateWithoutTime(this.props.maxDate) || Number.POSITIVE_INFINITY;
      const weeks = [];
      const nextMonth = this.getMonthDate(firstDate, 1).firstDate;
      let currentDay = firstDate;
      let currentWeek = [];
      weeks.push(currentWeek);
      let startWeekday = currentDay.getDay();
      if (startWeekday > 0) {
        for (let i = 0; i < startWeekday; i++) {
          currentWeek.push({});
        }
      }
      while (currentDay < nextMonth) {
        if (currentWeek.length === 7) {
          currentWeek = [];
          weeks.push(currentWeek);
        }
        const dayOfMonth = currentDay.getDate();
        const tick = +currentDay;
        currentWeek.push({
          tick,
          dayOfMonth,
          selected: DateModels.SelectType.None,
          isFirstOfMonth: dayOfMonth === 1,
          isLastOfMonth: false,
          outOfDate: tick < minDateTime || tick > maxDateTime
        });
        const year = currentDay.getFullYear();
        const month = currentDay.getMonth();
        const date = currentDay.getDate();
        currentDay = new Date(year, month, date + 1);
      }
      currentWeek[currentWeek.length - 1].isLastOfMonth = true;
      return weeks;
    };
    this.selectDateRange = (startDate, endDate, clear = false) => {
      const {
        getDateExtra,
        type,
        onSelectHasDisableDate
      } = this.props;
      if (type === "one") {
        endDate = void 0;
      }
      const time1 = this.getDateWithoutTime(startDate), time2 = this.getDateWithoutTime(endDate);
      const startDateTick = !time2 || time1 < time2 ? time1 : time2;
      const endDateTick = time2 && time1 > time2 ? time1 : time2;
      const startMonthDate = this.getMonthDate(new Date(startDateTick)).firstDate;
      const endMonthDate = endDateTick ? new Date(endDateTick) : this.getMonthDate(new Date(startDateTick)).lastDate;
      let unuseable = [], needUpdate = false;
      this.state.months.filter((m) => {
        return m.firstDate >= startMonthDate && m.firstDate <= endMonthDate;
      }).forEach((m) => {
        m.weeks.forEach((w) => w.filter((d) => {
          if (!endDateTick) {
            return d.tick && this.inDate(startDateTick, d.tick);
          } else {
            return d.tick && d.tick >= startDateTick && d.tick <= endDateTick;
          }
        }).forEach((d) => {
          const oldValue = d.selected;
          if (clear) {
            d.selected = DateModels.SelectType.None;
          } else {
            const info = getDateExtra && getDateExtra(new Date(d.tick)) || {};
            if (d.outOfDate || info.disable) {
              unuseable.push(d.tick);
            }
            if (this.inDate(startDateTick, d.tick)) {
              if (type === "one") {
                d.selected = DateModels.SelectType.Single;
              } else if (!endDateTick) {
                d.selected = DateModels.SelectType.Only;
              } else if (startDateTick !== endDateTick) {
                d.selected = DateModels.SelectType.Start;
              } else {
                d.selected = DateModels.SelectType.All;
              }
            } else if (this.inDate(endDateTick, d.tick)) {
              d.selected = DateModels.SelectType.End;
            } else {
              d.selected = DateModels.SelectType.Middle;
            }
          }
          needUpdate = needUpdate || d.selected !== oldValue;
        }));
        if (needUpdate && m.componentRef) {
          m.componentRef.updateWeeks();
        }
      });
      if (unuseable.length > 0) {
        if (onSelectHasDisableDate) {
          onSelectHasDisableDate(unuseable.map((tick) => new Date(tick)));
        } else {
          console.warn("Unusable date. You can handle by onSelectHasDisableDate.", unuseable);
        }
      }
    };
    this.computeVisible = (clientHeight, scrollTop) => {
      let needUpdate = false;
      const MAX_VIEW_PORT = clientHeight * 2;
      const MIN_VIEW_PORT = clientHeight;
      const filterFunc = (vm) => vm.y && vm.height && vm.y + vm.height > scrollTop - MAX_VIEW_PORT && vm.y < scrollTop + clientHeight + MAX_VIEW_PORT;
      if (this.props.infiniteOpt && this.visibleMonth.length > 12) {
        this.visibleMonth = this.visibleMonth.filter(filterFunc).sort((a, b) => +a.firstDate - +b.firstDate);
      }
      if (this.visibleMonth.length > 0) {
        const last = this.visibleMonth[this.visibleMonth.length - 1];
        if (last.y !== void 0 && last.height && last.y + last.height < scrollTop + clientHeight + MIN_VIEW_PORT) {
          const lastIndex = this.state.months.indexOf(last);
          for (let i = 1; i <= 2; i++) {
            const index = lastIndex + i;
            if (index < this.state.months.length && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
              this.visibleMonth.push(this.state.months[index]);
            } else {
              if (this.canLoadNext()) {
                this.genMonthData(void 0, 1);
              }
            }
          }
          needUpdate = true;
        }
        const first2 = this.visibleMonth[0];
        if (first2.y !== void 0 && first2.height && first2.y > scrollTop - MIN_VIEW_PORT) {
          const firstIndex = this.state.months.indexOf(first2);
          for (let i = 1; i <= 2; i++) {
            const index = firstIndex - i;
            if (index >= 0 && this.visibleMonth.indexOf(this.state.months[index]) < 0) {
              this.visibleMonth.unshift(this.state.months[index]);
              needUpdate = true;
            }
          }
        }
      } else if (this.state.months.length > 0) {
        this.visibleMonth = this.state.months.filter(filterFunc);
        needUpdate = true;
      }
      return needUpdate;
    };
    this.createOnScroll = () => {
      let clientHeight = 0, scrollTop = 0;
      return (data) => {
        const {
          client,
          top
        } = data;
        clientHeight = client;
        scrollTop = top;
        this.computeVisible(clientHeight, scrollTop);
      };
    };
    this.baseOnCellClick = (day) => {
      if (!day.tick) {
        return;
      }
      if (this.props.onCellClick) {
        this.props.onCellClick(new Date(day.tick));
      }
    };
  }
  init() {
    const {
      initalMonths = 6,
      defaultDate
    } = this.props;
    for (let i = 0; i < initalMonths; i++) {
      if (this.canLoadNext()) {
        this.genMonthData(defaultDate, i);
      }
    }
    this.visibleMonth = [...this.state.months];
  }
  receiveProps(oldValue, newValue) {
    if (oldValue && newValue) {
      if (oldValue.startDate !== newValue.startDate || oldValue.endDate !== newValue.endDate) {
        if (oldValue.startDate) {
          this.selectDateRange(oldValue.startDate, oldValue.endDate, true);
        }
        if (newValue.startDate) {
          this.selectDateRange(newValue.startDate, newValue.endDate);
        }
      }
    }
  }
  getMonthDate(date = /* @__PURE__ */ new Date(), addMonth = 0) {
    const y = date.getFullYear(), m = date.getMonth();
    return {
      firstDate: new Date(y, m + addMonth, 1),
      lastDate: new Date(y, m + 1 + addMonth, 0)
    };
  }
  canLoadPrev() {
    const {
      minDate
    } = this.props;
    return !minDate || this.state.months.length <= 0 || +this.getMonthDate(minDate).firstDate < +this.state.months[0].firstDate;
  }
  canLoadNext() {
    const {
      maxDate
    } = this.props;
    return !maxDate || this.state.months.length <= 0 || +this.getMonthDate(maxDate).firstDate > +this.state.months[this.state.months.length - 1].firstDate;
  }
  genMonthData(date, addMonth = 0) {
    if (!date) {
      date = addMonth >= 0 ? this.state.months[this.state.months.length - 1].firstDate : this.state.months[0].firstDate;
    }
    if (!date) {
      date = /* @__PURE__ */ new Date();
    }
    const {
      locale
    } = this.props;
    const {
      firstDate,
      lastDate
    } = this.getMonthDate(date, addMonth);
    const weeks = this.genWeekData(firstDate);
    const title = formatDate(firstDate, locale ? locale.monthTitle : "yyyy/MM", this.props.locale);
    const data = {
      title,
      firstDate,
      lastDate,
      weeks
    };
    data.component = this.genMonthComponent(data);
    if (addMonth >= 0) {
      this.state.months.push(data);
    } else {
      this.state.months.unshift(data);
    }
    const {
      startDate,
      endDate
    } = this.props;
    if (startDate) {
      this.selectDateRange(startDate, endDate);
    }
    return data;
  }
  inDate(date, tick) {
    return date <= tick && tick < date + 24 * 36e5;
  }
};
var _CalendarWeekPanelComponent = class _CalendarWeekPanelComponent {
  constructor() {
    this.week = ["日", "一", "二", "三", "四", "五", "六"];
    this.weekPanel = true;
  }
  set locale(value) {
    this._locale = value;
  }
  ngOnInit() {
    this.week = this._locale.week;
  }
};
_CalendarWeekPanelComponent.ɵfac = function CalendarWeekPanelComponent_Factory(t) {
  return new (t || _CalendarWeekPanelComponent)();
};
_CalendarWeekPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarWeekPanelComponent,
  selectors: [["CalendarWeekPanel"], ["nzm-calendar-week-panel"]],
  hostVars: 2,
  hostBindings: function CalendarWeekPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("week-panel", ctx.weekPanel);
    }
  },
  inputs: {
    locale: "locale"
  },
  decls: 14,
  vars: 7,
  consts: [[1, "cell", "cell-grey"], [1, "cell"]],
  template: function CalendarWeekPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 1);
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 1);
      ɵɵtext(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 1);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 1);
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 1);
      ɵɵtext(11);
      ɵɵelementEnd();
      ɵɵelementStart(12, "div", 0);
      ɵɵtext(13);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.week[0]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[1]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[2]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[3]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[4]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[5]);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.week[6]);
    }
  },
  encapsulation: 2
});
var CalendarWeekPanelComponent = _CalendarWeekPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarWeekPanelComponent, [{
    type: Component,
    args: [{
      selector: "CalendarWeekPanel, nzm-calendar-week-panel",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="cell cell-grey">{{ week[0] }}</div>\n<div class="cell">{{ week[1] }}</div>\n<div class="cell">{{ week[2] }}</div>\n<div class="cell">{{ week[3] }}</div>\n<div class="cell">{{ week[4] }}</div>\n<div class="cell">{{ week[5] }}</div>\n<div class="cell cell-grey">{{ week[6] }}</div>\n'
    }]
  }], () => [], {
    locale: [{
      type: Input
    }],
    weekPanel: [{
      type: HostBinding,
      args: ["class.week-panel"]
    }]
  });
})();
var _CalendarSingleMonthComponent = class _CalendarSingleMonthComponent {
  set data(value) {
    this.props = __spreadValues(__spreadValues({}, this.props), value);
  }
  constructor(_elementRef) {
    this._elementRef = _elementRef;
    this.props = {
      rowSize: "normal"
    };
    this.state = {
      weekComponents: []
    };
    this.singleMonth = true;
    this.genWeek = (weeksData, index) => {
      const {
        getDateExtra,
        monthData,
        onCellClick,
        locale,
        rowSize
      } = this.props;
      let rowCls = "row";
      let weeksDataList = [];
      if (rowSize === "xl") {
        rowCls += " row-xl";
      }
      weeksData.forEach((day, dayOfWeek) => {
        const extra = getDateExtra && getDateExtra(new Date(day.tick)) || {};
        let info = extra.info;
        const disable = extra.disable || day.outOfDate;
        let cls = "date";
        let lCls = "left";
        let rCls = "right";
        let infoCls = "info";
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          cls += " grey";
        }
        if (disable) {
          cls += " disable";
        } else if (info) {
          cls += " important";
        }
        if (day.selected) {
          cls += " date-selected";
          let styleType = day.selected;
          switch (styleType) {
            case DateModels.SelectType.Only:
              info = locale.begin;
              infoCls += " date-selected";
              break;
            case DateModels.SelectType.All:
              info = locale.begin_over;
              infoCls += " date-selected";
              break;
            case DateModels.SelectType.Start:
              info = locale.begin;
              infoCls += " date-selected";
              if (dayOfWeek === 6 || day.isLastOfMonth) {
                styleType = DateModels.SelectType.All;
              }
              break;
            case DateModels.SelectType.Middle:
              if (dayOfWeek === 0 || day.isFirstOfMonth) {
                if (day.isLastOfMonth || dayOfWeek === 6) {
                  styleType = DateModels.SelectType.All;
                } else {
                  styleType = DateModels.SelectType.Start;
                }
              } else if (dayOfWeek === 6 || day.isLastOfMonth) {
                styleType = DateModels.SelectType.End;
              }
              break;
            case DateModels.SelectType.End:
              info = locale.over;
              infoCls += " date-selected";
              if (dayOfWeek === 0 || day.isFirstOfMonth) {
                styleType = DateModels.SelectType.All;
              }
              break;
          }
          switch (styleType) {
            case DateModels.SelectType.Single:
            case DateModels.SelectType.Only:
            case DateModels.SelectType.All:
              cls += " selected-single";
              break;
            case DateModels.SelectType.Start:
              cls += " selected-start";
              rCls += " date-selected";
              break;
            case DateModels.SelectType.Middle:
              cls += " selected-middle";
              lCls += " date-selected";
              rCls += " date-selected";
              break;
            case DateModels.SelectType.End:
              cls += " selected-end";
              lCls += " date-selected";
              break;
          }
        }
        weeksDataList[dayOfWeek] = {
          lCls,
          cls,
          day,
          rCls,
          infoCls,
          info,
          extra,
          disable,
          onCellClick,
          monthData
        };
      });
      this.state.weekComponents[index] = {
        index,
        rowCls,
        weeksDataList
      };
    };
    this.updateWeeks = (monthData) => {
      (monthData || this.props.monthData).weeks.forEach((week, index) => {
        this.genWeek(week, index);
      });
    };
    this.setWarpper = (dom) => {
      this.wrapperDivDOM = dom;
    };
  }
  onClickCell(item) {
    if (!item.disable && item.onCellClick) {
      item.onCellClick(item.day, item.monthData);
    }
  }
  ngOnInit() {
    this.setWarpper(this._elementRef.nativeElement);
    this.props.monthData.weeks.forEach((week, index) => {
      this.genWeek(week, index);
    });
  }
  ngAfterViewInit() {
    this.ref = this.props.ref;
    this.ref(this);
  }
};
_CalendarSingleMonthComponent.ɵfac = function CalendarSingleMonthComponent_Factory(t) {
  return new (t || _CalendarSingleMonthComponent)(ɵɵdirectiveInject(ElementRef));
};
_CalendarSingleMonthComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarSingleMonthComponent,
  selectors: [["CalendarSingleMonth"], ["nzm-single-month"]],
  hostVars: 2,
  hostBindings: function CalendarSingleMonthComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("single-month", ctx.singleMonth);
    }
  },
  inputs: {
    data: "data"
  },
  decls: 4,
  vars: 2,
  consts: [[1, "month-title"], [1, "date"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], ["class", "date-wrapper", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "date-wrapper"]],
  template: function CalendarSingleMonthComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 1);
      ɵɵtemplate(3, CalendarSingleMonthComponent_div_3_Template, 2, 2, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.props.monthData.title, "\n");
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.state.weekComponents);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf],
  encapsulation: 2
});
var CalendarSingleMonthComponent = _CalendarSingleMonthComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarSingleMonthComponent, [{
    type: Component,
    args: [{
      selector: "CalendarSingleMonth, nzm-single-month",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="month-title">
  {{ props.monthData.title }}
</div>
<div class="date">
  <div *ngFor="let row of state.weekComponents; let i = index" [ngClass]="row.rowCls">
    <div
      *ngFor="let cell of row.weeksDataList; let j = index"
      class="{{ 'cell ' + ((cell.extra && cell.extra.cellCls) || '') }}"
      (click)="onClickCell(cell)"
    >
      <div *ngIf="row.extra && row.extra.cellRender">test</div>
      <div *ngIf="!row.extra || (row.extra && row.extra.cellRender)" class="date-wrapper">
        <span [ngClass]="cell.lCls"></span>
        <div [ngClass]="cell.cls">
          {{ (cell.day && cell.day.dayOfMonth) || '' }}
        </div>
        <span [ngClass]="cell.rCls"></span>
      </div>
      <div *ngIf="!row.extra || (row.extra && row.extra.cellRender)" [ngClass]="cell.infoCls">
        {{ cell.info }}
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    data: [{
      type: Input
    }],
    singleMonth: [{
      type: HostBinding,
      args: ["class.single-month"]
    }]
  });
})();
var _CalendarDatePickerComponent = class _CalendarDatePickerComponent extends CalendarDatePickerBaseComponent {
  constructor() {
    super();
    this.transform = "";
    this._initDelta = 0;
    this._lastY = 0;
    this._delta = this._initDelta;
    this.amCalendar = true;
    this.datePicker = true;
    this.genMonthComponent = (data) => {
      if (!data) {
        return;
      }
      return {
        monthData: data,
        locale: this.props.locale,
        rowSize: this.props.rowSize,
        onCellClick: this.baseOnCellClick,
        getDateExtra: this.props.getDateExtra,
        ref: (dom) => {
          data.componentRef = dom || data.componentRef || void 0;
          data.updateLayout = () => {
            this.computeHeight(data, dom);
          };
          data.updateLayout();
        }
      };
    };
    this.computeHeight = (data, singleMonth) => {
      if (singleMonth && singleMonth.wrapperDivDOM) {
        if (!data.height && !singleMonth.wrapperDivDOM.clientHeight) {
          setTimeout(() => this.computeHeight(data, singleMonth), 500);
          return;
        }
        data.height = singleMonth.wrapperDivDOM.clientHeight || data.height || 0;
        data.y = singleMonth.wrapperDivDOM.offsetTop || data.y || 0;
      }
    };
    this.setLayout = (dom) => {
      if (dom) {
        const {
          onLayout
        } = this.props;
        if (onLayout) {
          onLayout(dom.clientHeight);
        }
        const scrollHandler = this.createOnScroll();
        dom.onscroll = (evt) => {
          scrollHandler({
            client: dom.clientHeight,
            full: evt.currentTarget.clientHeight,
            top: evt.currentTarget.scrollTop
          });
        };
      }
    };
    this.setPanel = (dom) => {
      this._panel = dom;
    };
  }
  set onCellClick(value) {
    this.props.onCellClick = value;
  }
  set endDate(value) {
    const oldProps = Object.assign({}, this.props);
    this.props.endDate = value;
    this.receiveProps(oldProps, this.props);
  }
  set startDate(value) {
    const oldProps = Object.assign({}, this.props);
    this.props.startDate = value;
    this.receiveProps(oldProps, this.props);
  }
  set propsData(value) {
    this.props = __spreadValues(__spreadValues({}, this.props), value);
  }
  set onSelectHasDisableDate(value) {
    this.props.onSelectHasDisableDate = value;
  }
  set onLayout(value) {
    this.props.onLayout = value;
  }
  onTouchStart(event) {
    this._lastY = event.touches[0].screenY || event.touches[0].pageY;
    this._delta = this._initDelta;
  }
  onTouchMove(event) {
    const ele = event.currentTarget;
    const isReachTop = ele.scrollTop === 0;
    if (isReachTop) {
      this._delta = (event.touches[0].screenY || event.touches[0].pageY) - this._lastY;
      if (this._delta > 0) {
        event.preventDefault();
        if (this._delta > 80) {
          this._delta = 80;
        }
      } else {
        this._delta = 0;
      }
      this.setTransform(this._panel.style, `translate3d(0,${this._delta}px,0)`);
    }
  }
  onTouchEnd(event) {
    this.onFinish();
  }
  onFinish() {
    if (this._delta > 40 && this.canLoadPrev()) {
      this.genMonthData(this.state.months[0].firstDate, -1);
      this.visibleMonth = this.state.months.slice(0, this.props.initalMonths);
      this.state.months.forEach((m) => {
        if (m.updateLayout) {
          m.updateLayout();
        }
      });
    }
    this.setTransform(this._panel.style, `translate3d(0,0,0)`);
    this.setTransition(this._panel.style, ".3s");
    setTimeout(() => {
      if (this._panel) {
        this.setTransition(this._panel.style, "");
      }
    }, 300);
  }
  setTransform(nodeStyle, value) {
    this.transform = value;
    nodeStyle.transform = value;
    nodeStyle.webkitTransform = value;
  }
  setTransition(nodeStyle, value) {
    nodeStyle.transition = value;
    nodeStyle.webkitTransition = value;
  }
  ngOnInit() {
    this.init();
    this.setLayout(this.layoutDom.nativeElement);
    this.setPanel(this.panelDom.nativeElement);
  }
};
_CalendarDatePickerComponent.ɵfac = function CalendarDatePickerComponent_Factory(t) {
  return new (t || _CalendarDatePickerComponent)();
};
_CalendarDatePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarDatePickerComponent,
  selectors: [["CalendarDatePicker"], ["nzm-calendar-date-picker"]],
  viewQuery: function CalendarDatePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c018, 7);
      ɵɵviewQuery(_c110, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.layoutDom = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panelDom = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function CalendarDatePickerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-calendar", ctx.amCalendar)("date-picker", ctx.datePicker);
    }
  },
  inputs: {
    onCellClick: "onCellClick",
    endDate: "endDate",
    startDate: "startDate",
    propsData: "propsData",
    onSelectHasDisableDate: "onSelectHasDisableDate",
    onLayout: "onLayout"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 8,
  vars: 6,
  consts: [[3, "locale"], [1, "wrapper", 2, "overflow-x", "hidden", "overflow-y", "visible", "-webkit-overflow-scrolling", "touch", 3, "touchstart", "touchmove", "touchend"], ["layout", ""], [3, "ngStyle"], ["panel", ""], ["class", "load-tip", 4, "ngIf"], [1, "months"], ["style", "display: block;", 3, "data", 4, "ngFor", "ngForOf"], [1, "load-tip"], [2, "display", "block", 3, "data"]],
  template: function CalendarDatePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "CalendarWeekPanel", 0);
      ɵɵelementStart(1, "div", 1, 2);
      ɵɵlistener("touchstart", function CalendarDatePickerComponent_Template_div_touchstart_1_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function CalendarDatePickerComponent_Template_div_touchmove_1_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function CalendarDatePickerComponent_Template_div_touchend_1_listener($event) {
        return ctx.onTouchEnd($event);
      });
      ɵɵelementStart(3, "div", 3, 4);
      ɵɵtemplate(5, CalendarDatePickerComponent_div_5_Template, 2, 1, "div", 5);
      ɵɵelementStart(6, "div", 6);
      ɵɵtemplate(7, CalendarDatePickerComponent_CalendarSingleMonth_7_Template, 1, 1, "CalendarSingleMonth", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("locale", ctx.props.locale);
      ɵɵadvance(3);
      ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c22, ctx.transform));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.canLoadPrev());
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.visibleMonth);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle, CalendarWeekPanelComponent, CalendarSingleMonthComponent],
  encapsulation: 2
});
var CalendarDatePickerComponent = _CalendarDatePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarDatePickerComponent, [{
    type: Component,
    args: [{
      selector: "CalendarDatePicker, nzm-calendar-date-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: '<CalendarWeekPanel [locale]="props.locale"></CalendarWeekPanel>\n<div\n  #layout\n  class="wrapper"\n  style="overflow-x:hidden;overflow-y:visible;-webkit-overflow-scrolling:touch;"\n  (touchstart)="onTouchStart($event)"\n  (touchmove)="onTouchMove($event)"\n  (touchend)="onTouchEnd($event)"\n>\n  <div #panel [ngStyle]="{ transform: transform }">\n    <div *ngIf="canLoadPrev()" class="load-tip">{{ props.locale.loadPrevMonth }}</div>\n    <div class="months">\n      <CalendarSingleMonth\n        *ngFor="let item of visibleMonth; let i = index"\n        style="display: block;"\n        [data]="item.component"\n      ></CalendarSingleMonth>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [], {
    layoutDom: [{
      type: ViewChild,
      args: ["layout", {
        static: true
      }]
    }],
    panelDom: [{
      type: ViewChild,
      args: ["panel", {
        static: true
      }]
    }],
    onCellClick: [{
      type: Input
    }],
    endDate: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    propsData: [{
      type: Input
    }],
    onSelectHasDisableDate: [{
      type: Input
    }],
    onLayout: [{
      type: Input
    }],
    amCalendar: [{
      type: HostBinding,
      args: ["class.am-calendar"]
    }],
    datePicker: [{
      type: HostBinding,
      args: ["class.date-picker"]
    }]
  });
})();
var _CalendarHeaderComponent = class _CalendarHeaderComponent {
  get locale() {
    return this._locale;
  }
  set locale(value) {
    this._locale = value;
  }
  get closeIcon() {
    return this._closeIcon;
  }
  set closeIcon(value) {
    if (value instanceof TemplateRef) {
      this._closeIcon = value;
      this.closeIcon_component = true;
    } else {
      this._closeIcon = value;
      this.closeIcon_component = false;
    }
  }
  get showClear() {
    return this._showClear;
  }
  set showClear(value) {
    this._showClear = value;
  }
  constructor() {
    this.closeIcon_component = false;
    this._closeIcon = "X";
    this.onCancel = new EventEmitter();
    this.onClear = new EventEmitter();
    this.header = true;
  }
  triggerCancel() {
    if (this.onCancel) {
      this.onCancel.emit();
    }
  }
  triggerClear() {
    if (this.onClear) {
      this.onClear.emit();
    }
  }
};
_CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) {
  return new (t || _CalendarHeaderComponent)();
};
_CalendarHeaderComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarHeaderComponent,
  selectors: [["CalendarHeader"], ["nzm-calendar-header"]],
  hostVars: 2,
  hostBindings: function CalendarHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("header", ctx.header);
    }
  },
  inputs: {
    locale: "locale",
    closeIcon: "closeIcon",
    showClear: "showClear"
  },
  outputs: {
    onCancel: "onCancel",
    onClear: "onClear"
  },
  decls: 5,
  vars: 4,
  consts: [["class", "left", 3, "innerHTML", "click", 4, "ngIf"], ["class", "left", 3, "click", 4, "ngIf"], [1, "title"], ["class", "right", 3, "click", 4, "ngIf"], [1, "left", 3, "innerHTML", "click"], [1, "left", 3, "click"], [3, "ngTemplateOutlet"], [1, "right", 3, "click"]],
  template: function CalendarHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarHeaderComponent_span_0_Template, 1, 1, "span", 0)(1, CalendarHeaderComponent_span_1_Template, 2, 1, "span", 1);
      ɵɵelementStart(2, "span", 2);
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵtemplate(4, CalendarHeaderComponent_span_4_Template, 2, 1, "span", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.closeIcon_component);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.closeIcon_component);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.title || ctx.locale.title);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showClear);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var CalendarHeaderComponent = _CalendarHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarHeaderComponent, [{
    type: Component,
    args: [{
      selector: "CalendarHeader, nzm-calendar-header",
      encapsulation: ViewEncapsulation$1.None,
      template: '<span *ngIf="!closeIcon_component" class="left" (click)="triggerCancel()" [innerHTML]="closeIcon"></span>\n<span *ngIf="closeIcon_component" class="left" (click)="triggerCancel()">\n  <ng-template [ngTemplateOutlet]="closeIcon"></ng-template>\n</span>\n<span class="title">{{ title || locale.title }}</span>\n<span *ngIf="showClear" class="right" (click)="triggerClear()">{{ clearIcon || locale.clear }}</span>\n'
    }]
  }], () => [], {
    locale: [{
      type: Input
    }],
    closeIcon: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    onCancel: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    header: [{
      type: HostBinding,
      args: ["class.header"]
    }]
  });
})();
var _CalendarTimePickerComponent = class _CalendarTimePickerComponent {
  set propsData(value) {
    this.props = __spreadValues(__spreadValues({}, this.props), value);
    if (this.props.locale && this.props.locale.today === "Today") {
      this.props.datePickerViewLocale = en_US;
    } else {
      this.props.datePickerViewLocale = zh_CN;
    }
  }
  set title(value) {
    this.props.title = value;
  }
  set value(value) {
    this.props.value = value;
  }
  set prefixCls(value) {
    this.props.prefixCls = value;
  }
  set defaultValue(value) {
    this.props.defaultValue = value;
  }
  set pickerPrefixCls(value) {
    this.props.pickerPrefixCls = value;
  }
  set clientHeight(value) {
    this.props.clientHeight = value;
    const height = value && value * 3 / 8 - 52 || Number.POSITIVE_INFINITY;
    this.selfHeight = (height > 164 || height < 0 ? 164 : height) + "px";
  }
  set onValueChange(value) {
    this.props.onValueChange = value;
  }
  constructor() {
    this.defaultProps = {
      minDate: new Date(0, 0, 0, 0, 0),
      maxDate: new Date(9999, 11, 31, 23, 59, 59),
      defaultValue: new Date(2e3, 1, 1, 8),
      mode: "time",
      datePickerViewLocale: zh_CN
    };
    this.props = {
      minDate: new Date(0, 0, 0, 0, 0),
      maxDate: new Date(9999, 11, 31, 23, 59, 59),
      defaultValue: new Date(2e3, 1, 1, 8),
      mode: "time",
      datePickerViewLocale: zh_CN
    };
    this.timePicker = true;
    this.onDateChange = (date) => {
      const {
        onValueChange
      } = this.props;
      if (onValueChange) {
        onValueChange(date.date);
      }
    };
  }
  getMinTime(date) {
    const minDate = this.props.minDate;
    if (!date || date.getFullYear() > minDate.getFullYear() || date.getMonth() > minDate.getMonth() || date.getDate() > minDate.getDate()) {
      return this.defaultProps.minDate;
    }
    return minDate;
  }
  getMaxTime(date) {
    const maxDate = this.props.maxDate;
    if (!date || date.getFullYear() < maxDate.getFullYear() || date.getMonth() < maxDate.getMonth() || date.getDate() < maxDate.getDate()) {
      return this.defaultProps.maxDate;
    }
    return maxDate;
  }
};
_CalendarTimePickerComponent.ɵfac = function CalendarTimePickerComponent_Factory(t) {
  return new (t || _CalendarTimePickerComponent)();
};
_CalendarTimePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarTimePickerComponent,
  selectors: [["CalendarTimePicker"], ["nzm-calendar-time-picker"]],
  hostVars: 2,
  hostBindings: function CalendarTimePickerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("time-picker", ctx.timePicker);
    }
  },
  inputs: {
    propsData: "propsData",
    title: "title",
    value: "value",
    prefixCls: "prefixCls",
    defaultValue: "defaultValue",
    pickerPrefixCls: "pickerPrefixCls",
    clientHeight: "clientHeight",
    onValueChange: "onValueChange"
  },
  decls: 3,
  vars: 9,
  consts: [[1, "title"], [3, "ngStyle", "mode", "value", "locale", "minDate", "maxDate", "onValueChange"]],
  template: function CalendarTimePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "DatePickerView", 1);
      ɵɵlistener("onValueChange", function CalendarTimePickerComponent_Template_DatePickerView_onValueChange_2_listener($event) {
        return ctx.onDateChange($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.props.title);
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ɵɵpureFunction1(7, _c3, ctx.selfHeight))("mode", ctx.props.mode)("value", ctx.props.value)("locale", ctx.props.datePickerViewLocale)("minDate", ctx.getMinTime(ctx.props.value || ctx.props.defaultValue || void 0))("maxDate", ctx.getMaxTime(ctx.props.value || ctx.props.defaultValue || void 0));
    }
  },
  dependencies: [NgStyle, DatePickerViewComponent],
  encapsulation: 2
});
var CalendarTimePickerComponent = _CalendarTimePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarTimePickerComponent, [{
    type: Component,
    args: [{
      selector: "CalendarTimePicker, nzm-calendar-time-picker",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="title">{{ props.title }}</div>
<DatePickerView
  [ngStyle]="{ height: selfHeight, overflow: 'hidden' }"
  [mode]="props.mode"
  [value]="props.value"
  [locale]="props.datePickerViewLocale"
  [minDate]="getMinTime(props.value || props.defaultValue || undefined)"
  [maxDate]="getMaxTime(props.value || props.defaultValue || undefined)"
  (onValueChange)="onDateChange($event)"
></DatePickerView>
`
    }]
  }], () => [], {
    propsData: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    prefixCls: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    pickerPrefixCls: [{
      type: Input
    }],
    clientHeight: [{
      type: Input
    }],
    onValueChange: [{
      type: Input
    }],
    timePicker: [{
      type: HostBinding,
      args: ["class.time-picker"]
    }]
  });
})();
var _CalendarConfirmPanelComponent = class _CalendarConfirmPanelComponent {
  set propsData(value) {
    this.props = __spreadValues(__spreadValues({}, this.props), value);
  }
  set disableBtn(value) {
    this.props.disableBtn = value;
    const {
      type
    } = this.props;
    let btnCls = value ? "button button-disable" : "button";
    if (type === "one") {
      btnCls += " button-full";
    }
    this.btnCls = btnCls;
  }
  set formatStr(value) {
    this.props.formatStr = value;
  }
  set startDateTime(value) {
    this.props.startDateTime = value;
    this.formatTime();
  }
  set endDateTime(value) {
    this.props.endDateTime = value;
    this.formatTime();
  }
  set onConfirm(value) {
    this.props.onConfirm = value;
  }
  constructor() {
    this.props = {
      formatStr: "yyyy-MM-dd hh:mm"
    };
    this.confirmPane = true;
    this.triggerConfirm = () => {
      const {
        onConfirm,
        disableBtn
      } = this.props;
      if (!disableBtn) {
        onConfirm();
      }
    };
  }
  formatTime() {
    const {
      locale
    } = this.props;
    let {
      startDateTime,
      endDateTime
    } = this.props;
    if (startDateTime && endDateTime && +startDateTime > +endDateTime) {
      const tmp = startDateTime;
      startDateTime = endDateTime;
      endDateTime = tmp;
    }
    this.startTimeStr = startDateTime ? this.selfFormatDate(startDateTime) : locale.noChoose;
    this.endTimeStr = endDateTime ? this.selfFormatDate(endDateTime) : locale.noChoose;
  }
  selfFormatDate(date) {
    const {
      formatStr = "",
      locale
    } = this.props;
    return formatDate(date, formatStr, locale);
  }
};
_CalendarConfirmPanelComponent.ɵfac = function CalendarConfirmPanelComponent_Factory(t) {
  return new (t || _CalendarConfirmPanelComponent)();
};
_CalendarConfirmPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarConfirmPanelComponent,
  selectors: [["CalendarConfirmPanel"], ["nzm-calendar-confirm-panel"]],
  hostVars: 2,
  hostBindings: function CalendarConfirmPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("confirm-panel", ctx.confirmPane);
    }
  },
  inputs: {
    propsData: "propsData",
    disableBtn: "disableBtn",
    formatStr: "formatStr",
    startDateTime: "startDateTime",
    endDateTime: "endDateTime",
    onConfirm: "onConfirm"
  },
  decls: 3,
  vars: 3,
  consts: [["class", "info", 4, "ngIf"], [3, "ngClass", "click"], [1, "info"]],
  template: function CalendarConfirmPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarConfirmPanelComponent_div_0_Template, 9, 10, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵlistener("click", function CalendarConfirmPanelComponent_Template_div_click_1_listener() {
        return ctx.triggerConfirm();
      });
      ɵɵtext(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.props.type === "range");
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.btnCls);
      ɵɵadvance(1);
      ɵɵtextInterpolate1(" ", ctx.props.locale.confirm, "\n");
    }
  },
  dependencies: [NgClass, NgIf],
  encapsulation: 2
});
var CalendarConfirmPanelComponent = _CalendarConfirmPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarConfirmPanelComponent, [{
    type: Component,
    args: [{
      selector: "CalendarConfirmPanel, nzm-calendar-confirm-panel",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div *ngIf="props.type === 'range'" class="info">
  <p>
    {{ props.locale.start }}: <span class="{{ !props.startDateTime ? 'grey' : '' }}">{{ startTimeStr }}</span>
  </p>
  <p>
    {{ props.locale.end }}: <span class="{{ !props.endDateTime ? 'grey' : '' }}">{{ endTimeStr }}</span>
  </p>
</div>
<div [ngClass]="btnCls" (click)="triggerConfirm()">
  {{ props.locale.confirm }}
</div>
`
    }]
  }], () => [], {
    propsData: [{
      type: Input
    }],
    disableBtn: [{
      type: Input
    }],
    formatStr: [{
      type: Input
    }],
    startDateTime: [{
      type: Input
    }],
    endDateTime: [{
      type: Input
    }],
    onConfirm: [{
      type: Input
    }],
    confirmPane: [{
      type: HostBinding,
      args: ["class.confirm-panel"]
    }]
  });
})();
var _CalendarShortcutPanelComponent = class _CalendarShortcutPanelComponent {
  set locale(value) {
    this.props.locale = value;
  }
  set onSelect(value) {
    this.props.onSelect = value;
  }
  constructor() {
    this.props = {};
    this.shortcutPanel = true;
    this.onClick = (type) => {
      const {
        onSelect
      } = this.props;
      const today = /* @__PURE__ */ new Date();
      switch (type) {
        case "today":
          onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
          break;
        case "yesterday":
          onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12));
          break;
        case "lastweek":
          onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
          break;
        case "lastmonth":
          onSelect(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29, 0), new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12));
          break;
      }
    };
  }
};
_CalendarShortcutPanelComponent.ɵfac = function CalendarShortcutPanelComponent_Factory(t) {
  return new (t || _CalendarShortcutPanelComponent)();
};
_CalendarShortcutPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarShortcutPanelComponent,
  selectors: [["CalendarShortcutPanel"], ["nzm-calendar-shortcut-panel"]],
  hostVars: 2,
  hostBindings: function CalendarShortcutPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("shortcut-panel", ctx.shortcutPanel);
    }
  },
  inputs: {
    locale: "locale",
    onSelect: "onSelect"
  },
  decls: 8,
  vars: 4,
  consts: [[1, "item", 3, "click"]],
  template: function CalendarShortcutPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_0_listener() {
        return ctx.onClick("today");
      });
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 0);
      ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_2_listener() {
        return ctx.onClick("yesterday");
      });
      ɵɵtext(3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "div", 0);
      ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_4_listener() {
        return ctx.onClick("lastweek");
      });
      ɵɵtext(5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 0);
      ɵɵlistener("click", function CalendarShortcutPanelComponent_Template_div_click_6_listener() {
        return ctx.onClick("lastmonth");
      });
      ɵɵtext(7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵtextInterpolate(ctx.props.locale.today);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.props.locale.yesterday);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.props.locale.lastWeek);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.props.locale.lastMonth);
    }
  },
  encapsulation: 2
});
var CalendarShortcutPanelComponent = _CalendarShortcutPanelComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarShortcutPanelComponent, [{
    type: Component,
    args: [{
      selector: "CalendarShortcutPanel, nzm-calendar-shortcut-panel",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="item" (click)="onClick('today')">{{ props.locale.today }}</div>
<div class="item" (click)="onClick('yesterday')">{{ props.locale.yesterday }}</div>
<div class="item" (click)="onClick('lastweek')">{{ props.locale.lastWeek }}</div>
<div class="item" (click)="onClick('lastmonth')">{{ props.locale.lastMonth }}</div>
`
    }]
  }], () => [], {
    locale: [{
      type: Input
    }],
    onSelect: [{
      type: Input
    }],
    shortcutPanel: [{
      type: HostBinding,
      args: ["class.shortcut-panel"]
    }]
  });
})();
var _CalendarComponent = class _CalendarComponent {
  set locale(value) {
    if (value === "enUS") {
      this.props.locale = en_US.Calendar;
    } else if (value === "zhCN") {
      this.props.locale = zh_CN.Calendar;
    }
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  set defaultTimeValue(value) {
    if (value) {
      this.props.defaultTimeValue = value;
    }
  }
  set prefixCls(value) {
    if (value) {
      this.props.prefixCls = value;
    }
  }
  set enterDirection(value) {
    this._enterDirection = value;
    if (this._enterDirection === "horizontal") {
      this.contentAnimateClass = "slideH-enter slideH-enter-active";
    } else {
      this.contentAnimateClass = "slideV-enter slideV-enter-active";
    }
  }
  set visible(value) {
    this.props.visible = value;
    if (value === true || value === "true") {
      this.showAnimation();
      this.isShow = true;
    } else {
      this.hideAnimation();
      setTimeout(() => {
        this.isShow = false;
      }, 300);
    }
  }
  set getDateExtra(value) {
    this.props.getDateExtra = value;
  }
  set defaultDate(value) {
    this.props.defaultDate = value;
  }
  set minDate(value) {
    this.props.minDate = value;
  }
  set maxDate(value) {
    this.props.maxDate = value;
  }
  set pickTime(value) {
    this.props.pickTime = value;
  }
  set type(value) {
    this.props.type = value;
  }
  set showShortcut(value) {
    this.props.showShortcut = value;
  }
  set rowSize(value) {
    this.props.rowSize = value;
  }
  set infinite(value) {
  }
  set defaultValue(value) {
    this.props.defaultValue = value;
    if (value) {
      this.receiveProps(this.props);
    }
  }
  set onSelect(value) {
    this.props.onSelect = value;
  }
  constructor(_localeProviderService) {
    this._localeProviderService = _localeProviderService;
    this.isShow = false;
    this.showClear = false;
    this.isSameDate = isSameDate;
    this.props = {
      visible: false,
      showHeader: true,
      locale: zh_CN.Calendar,
      pickTime: false,
      showShortcut: false,
      prefixCls: "rmc-calendar",
      type: "range",
      defaultTimeValue: new Date(2e3, 0, 1, 8)
    };
    this.state = {
      showTimePicker: false,
      timePickerTitle: "",
      startDate: void 0,
      endDate: void 0,
      disConfirmBtn: true,
      clientHight: 0
    };
    this._unsubscribe$ = new Subject();
    this._dateModelTime = 0;
    this.onCancel = new EventEmitter();
    this.onConfirm = new EventEmitter();
    this.onSelectHasDisableDate = new EventEmitter();
    this.class = "am-calendar";
    this.selectDate = (date, useDateTime = false, oldState = {}, props = this.props) => {
      if (!date) {
        return {};
      }
      let newState = {};
      const {
        type,
        pickTime,
        defaultTimeValue,
        locale = {}
      } = props;
      const newDate = pickTime && !useDateTime ? mergeDateTime(date, defaultTimeValue) : date;
      const {
        startDate,
        endDate
      } = oldState;
      switch (type) {
        case "one":
          newState = __spreadProps(__spreadValues({}, newState), {
            startDate: newDate,
            disConfirmBtn: false
          });
          if (pickTime) {
            newState = __spreadProps(__spreadValues({}, newState), {
              timePickerTitle: locale.selectTime,
              showTimePicker: true
            });
          }
          break;
        case "range":
          if (!startDate || endDate) {
            newState = __spreadProps(__spreadValues({}, newState), {
              startDate: newDate,
              endDate: void 0,
              disConfirmBtn: true
            });
            if (pickTime) {
              newState = __spreadProps(__spreadValues({}, newState), {
                timePickerTitle: locale.selectStartTime,
                showTimePicker: true
              });
            }
          } else {
            newState = __spreadProps(__spreadValues({}, newState), {
              timePickerTitle: +newDate >= +startDate || this.isSameDate(startDate, newDate) ? locale.selectEndTime : locale.selectStartTime,
              disConfirmBtn: false,
              endDate: pickTime && !useDateTime && (+newDate >= +startDate || this.isSameDate(startDate, newDate)) ? /* @__PURE__ */ new Date(+mergeDateTime(newDate, startDate) + 36e5) : newDate
            });
          }
          break;
      }
      this.writeModelData(date);
      return newState;
    };
    this.onSelectedDate = (date) => {
      const {
        startDate,
        endDate
      } = this.state;
      const {
        onSelect
      } = this.props;
      if (onSelect) {
        const value = onSelect(date, [startDate, endDate]);
        if (value) {
          this.shortcutSelect(value[0], value[1]);
          return;
        }
      }
      this.state = __spreadValues(__spreadValues({}, this.state), this.selectDate(date, false, {
        startDate,
        endDate
      }));
      this.showClear = !!this.state.startDate;
    };
    this.triggerSelectHasDisableDate = (date) => {
      this.triggerClear();
      if (this.onSelectHasDisableDate) {
        this.onSelectHasDisableDate.emit(date);
      }
    };
    this.onClose = () => {
      this.state = {
        showTimePicker: false,
        timePickerTitle: "",
        startDate: void 0,
        endDate: void 0,
        disConfirmBtn: true,
        clientHight: 0
      };
      this.showClear = !!this.state.startDate;
    };
    this.triggerConfirm = () => {
      const {
        startDate,
        endDate
      } = this.state;
      if (startDate && endDate && +startDate > +endDate) {
        this.onClose();
        return this.onConfirm && this.onConfirm.emit({
          startDate: endDate,
          endDate: startDate
        });
      }
      if (this.onConfirm) {
        this.onConfirm.emit({
          startDate,
          endDate
        });
      }
      this.onClose();
    };
    this.triggerClear = () => {
      setTimeout(() => {
        this.state = __spreadValues(__spreadValues({}, this.state), {
          startDate: void 0,
          endDate: void 0,
          showTimePicker: false
        });
        if (this.props.onClear) {
          this.props.onClear();
        }
        this.showClear = !!this.state.startDate;
      }, 0);
    };
    this.onTimeChange = (date) => {
      const {
        startDate,
        endDate
      } = this.state;
      if (endDate) {
        this.state.endDate = date;
      } else if (startDate) {
        this.state.startDate = date;
      }
    };
    this.shortcutSelect = (startDate, endDate, props = this.props) => {
      this.state = __spreadValues(__spreadValues(__spreadValues({}, this.state), {
        startDate,
        showTimePicker: false
      }), this.selectDate(endDate, true, {
        startDate
      }, props));
      this.showClear = !!this.state.startDate;
    };
    this.setClientHeight = (height) => {
      this.state.clientHight = height;
    };
    this.onChangeFn = () => {
    };
    this.onTouchFn = () => {
    };
  }
  writeValue(value) {
    this._dateModelType = null;
    if (value && value instanceof Array) {
      if (value.length === 0) {
        console.error("[ng-zorro-antd-mobile]: calendar ngModel array need params!");
        return;
      }
      if (this.props.type === "one" && value.length >= 2) {
        this._dateModelType = 1;
        console.error("[ng-zorro-antd-mobile]: type is one, but ngmodel has more than one param, just use first one");
        this.onSelectedDate(value[0]);
      } else if (value.length === 1) {
        this._dateModelType = 1;
        this.onSelectedDate(value[0]);
      } else {
        this._dateModelType = 2;
        this.onSelectedDate(value[0]);
        this.onSelectedDate(value[1]);
      }
    } else if (value && value instanceof Date) {
      this._dateModelType = 3;
      this.onSelectedDate(value);
    }
  }
  registerOnChange(fn) {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn) {
    this.onTouchFn = fn;
  }
  receiveProps(nextProps) {
    if (nextProps.visible && nextProps.defaultValue) {
      this.shortcutSelect(nextProps.defaultValue[0], nextProps.defaultValue[1], nextProps);
    }
  }
  showAnimation() {
    if (this._enterDirection === "horizontal") {
      this.contentAnimateClass = "slideH-enter slideH-enter-active";
    } else {
      this.contentAnimateClass = "slideV-enter slideV-enter-active";
    }
    this.maskAnimateClass = "fade-enter fade-enter-active";
  }
  hideAnimation() {
    if (this._enterDirection === "horizontal") {
      this.contentAnimateClass = "slideH-leave slideH-leave-active";
    } else {
      this.contentAnimateClass = "slideV-leave slideV-leave-active";
    }
    this.maskAnimateClass = "fade-leave fade-leave-active";
  }
  writeModelData(date) {
    if (this._dateModelValue instanceof Array) {
      this._dateModelTime = this._dateModelValue.length;
    } else {
      this._dateModelTime = 0;
    }
    switch (this._dateModelType) {
      case 1:
        this._dateModelValue = [date];
        this.onChangeFn(this._dateModelValue);
        break;
      case 2:
        if (this._dateModelTime === 1) {
          if (+date < +this._dateModelValue[0]) {
            this._dateModelValue.unshift(date);
          } else {
            this._dateModelValue.push(date);
          }
          this.onChangeFn(this._dateModelValue);
        } else {
          this._dateModelValue = [];
          this._dateModelValue.push(date);
        }
        break;
      case 3:
        this._dateModelValue = date;
        this.onChangeFn(this._dateModelValue);
        break;
      default:
        break;
    }
  }
  triggerCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this.onClose();
    if (this.onCancel) {
      this.onCancel.emit();
    }
  }
  ngOnInit() {
    const defaultValue = this.props.defaultValue;
    if (defaultValue) {
      this.state = __spreadValues(__spreadValues({}, this.state), this.selectDate(defaultValue[1], true, {
        startDate: defaultValue[0]
      }, this.props));
    }
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      this.props.locale = __spreadValues({}, this._localeProviderService.getLocaleSubObj("Calendar"));
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
  return new (t || _CalendarComponent)(ɵɵdirectiveInject(LocaleProviderService));
};
_CalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: _CalendarComponent,
  selectors: [["Calendar"], ["nzm-calendar"]],
  viewQuery: function CalendarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CalendarDatePickerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.datepicker = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function CalendarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.class);
    }
  },
  inputs: {
    locale: "locale",
    defaultTimeValue: "defaultTimeValue",
    prefixCls: "prefixCls",
    enterDirection: "enterDirection",
    visible: "visible",
    getDateExtra: "getDateExtra",
    defaultDate: "defaultDate",
    minDate: "minDate",
    maxDate: "maxDate",
    pickTime: "pickTime",
    type: "type",
    showShortcut: "showShortcut",
    rowSize: "rowSize",
    infinite: "infinite",
    defaultValue: "defaultValue",
    onSelect: "onSelect"
  },
  outputs: {
    onCancel: "onCancel",
    onConfirm: "onConfirm",
    onSelectHasDisableDate: "onSelectHasDisableDate"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _CalendarComponent),
    multi: true
  }])],
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"], ["closeIconHtml", ""], [3, "locale", "closeIcon", "showClear", "onCancel", "onClear"], [3, "propsData", "endDate", "startDate", "onCellClick", "onSelectHasDisableDate", "onLayout"], [3, "propsData", "title", "clientHeight", "prefixCls", "defaultValue", "pickerPrefixCls", "value", "onValueChange", 4, "ngIf"], [3, "locale", "onSelect", 4, "ngIf"], [3, "propsData", "startDateTime", "endDateTime", "disableBtn", "formatStr", "onConfirm", 4, "ngIf"], [3, "propsData", "title", "clientHeight", "prefixCls", "defaultValue", "pickerPrefixCls", "value", "onValueChange"], [3, "locale", "onSelect"], [3, "propsData", "startDateTime", "endDateTime", "disableBtn", "formatStr", "onConfirm"], [3, "type"]],
  template: function CalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CalendarComponent_span_0_Template, 2, 3, "span", 0)(1, CalendarComponent_span_1_Template, 7, 15, "span", 0)(2, CalendarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isShow);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isShow);
    }
  },
  dependencies: [NgIf, IconComponent, CalendarHeaderComponent, CalendarDatePickerComponent, CalendarTimePickerComponent, CalendarConfirmPanelComponent, CalendarShortcutPanelComponent],
  encapsulation: 2
});
var CalendarComponent = _CalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarComponent, [{
    type: Component,
    args: [{
      selector: "Calendar, nzm-calendar",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CalendarComponent),
        multi: true
      }],
      template: `<span *ngIf="isShow">
  <div class="{{ 'mask ' + maskAnimateClass }}"></div>
</span>
<span *ngIf="isShow">
  <div class="{{ 'content animate ' + contentAnimateClass }}">
    <CalendarHeader
      [locale]="props.locale"
      [closeIcon]="closeIconHtml"
      [showClear]="showClear"
      (onCancel)="triggerCancel()"
      (onClear)="triggerClear()"
    ></CalendarHeader>
    <CalendarDatePicker
      [propsData]="props"
      [endDate]="state.endDate"
      [startDate]="state.startDate"
      [onCellClick]="onSelectedDate"
      [onSelectHasDisableDate]="triggerSelectHasDisableDate"
      [onLayout]="setClientHeight"
    ></CalendarDatePicker>
    <CalendarTimePicker
      *ngIf="state.showTimePicker"
      [propsData]="props"
      [title]="state.timePickerTitle"
      [clientHeight]="state.clientHight"
      [prefixCls]="props.timePickerPrefixCls"
      [defaultValue]="props.defaultTimeValue"
      [pickerPrefixCls]="props.timePickerPickerPrefixCls"
      [value]="state.endDate ? state.endDate : state.startDate"
      [onValueChange]="onTimeChange"
    ></CalendarTimePicker>
    <CalendarShortcutPanel
      *ngIf="props.showShortcut && !state.showTimePicker"
      [locale]="props.locale"
      [onSelect]="shortcutSelect"
    ></CalendarShortcutPanel>
    <CalendarConfirmPanel
      *ngIf="state.startDate"
      [propsData]="props"
      [startDateTime]="state.startDate"
      [endDateTime]="state.endDate"
      [disableBtn]="state.disConfirmBtn"
      [formatStr]="props.pickTime ? props.locale.dateTimeFormat : props.locale.dateFormat"
      [onConfirm]="triggerConfirm"
    ></CalendarConfirmPanel>
  </div>
</span>
<ng-template #closeIconHtml>
  <Icon [type]="'cross'"></Icon>
</ng-template>
`
    }]
  }], () => [{
    type: LocaleProviderService
  }], {
    datepicker: [{
      type: ViewChild,
      args: [CalendarDatePickerComponent]
    }],
    locale: [{
      type: Input
    }],
    defaultTimeValue: [{
      type: Input
    }],
    prefixCls: [{
      type: Input
    }],
    enterDirection: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    getDateExtra: [{
      type: Input
    }],
    defaultDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    pickTime: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    showShortcut: [{
      type: Input
    }],
    rowSize: [{
      type: Input
    }],
    infinite: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    onSelect: [{
      type: Input
    }],
    onCancel: [{
      type: Output
    }],
    onConfirm: [{
      type: Output
    }],
    onSelectHasDisableDate: [{
      type: Output
    }],
    class: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var _CalendarModule = class _CalendarModule {
};
_CalendarModule.ɵfac = function CalendarModule_Factory(t) {
  return new (t || _CalendarModule)();
};
_CalendarModule.ɵmod = ɵɵdefineNgModule({
  type: _CalendarModule,
  declarations: [CalendarComponent, CalendarHeaderComponent, CalendarWeekPanelComponent, CalendarDatePickerComponent, CalendarTimePickerComponent, CalendarSingleMonthComponent, CalendarConfirmPanelComponent, CalendarShortcutPanelComponent],
  imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
  exports: [CalendarComponent, CalendarHeaderComponent, CalendarWeekPanelComponent, CalendarDatePickerComponent, CalendarTimePickerComponent, CalendarSingleMonthComponent, CalendarConfirmPanelComponent, CalendarShortcutPanelComponent]
});
_CalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule]
});
var CalendarModule = _CalendarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, DatePickerViewModule, LocaleProviderModule],
      declarations: [CalendarComponent, CalendarHeaderComponent, CalendarWeekPanelComponent, CalendarDatePickerComponent, CalendarTimePickerComponent, CalendarSingleMonthComponent, CalendarConfirmPanelComponent, CalendarShortcutPanelComponent],
      exports: [CalendarComponent, CalendarHeaderComponent, CalendarWeekPanelComponent, CalendarDatePickerComponent, CalendarTimePickerComponent, CalendarSingleMonthComponent, CalendarConfirmPanelComponent, CalendarShortcutPanelComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-flex.mjs
var _c019 = ["*"];
var _FlexComponent = class _FlexComponent {
  set direction(value) {
    this._direction = value;
  }
  set wrap(value) {
    this._wrap = value;
  }
  set justify(value) {
    this._justify = value;
  }
  set align(value) {
    this.defaultProps.align = value;
  }
  set alignContent(value) {
    this._alignContent = value;
  }
  get amFlexboxDirRow() {
    return this._direction === "row";
  }
  get amFlexboxDirRowReverse() {
    return this._direction === "row-reverse";
  }
  get amFlexboxDirColumn() {
    return this._direction === "column";
  }
  get amFlexboxDirColumnReverse() {
    return this._direction === "column-reverse";
  }
  get amFlexboxNowrap() {
    return this._wrap === "nowrap";
  }
  get amFlexboxWrap() {
    return this._wrap === "wrap";
  }
  get amFlexboxWrapReverse() {
    return this._wrap === "wrap-reverse";
  }
  get amFlexboxJustifyStart() {
    return this._justify === "start";
  }
  get amFlexboxJustifyCenter() {
    return this._justify === "center";
  }
  get amFlexboxJustifyEnd() {
    return this._justify === "end";
  }
  get amFlexboxJustifyBetween() {
    return this._justify === "between";
  }
  get amFlexboxAlignAround() {
    return this._justify === "around";
  }
  get amFlexboxAlignStart() {
    return this.defaultProps.align === "start";
  }
  get amFlexboxAlignCenter() {
    return this.defaultProps.align === "center";
  }
  get amFlexboxAlignEnd() {
    return this.defaultProps.align === "end";
  }
  get amFlexboxAlignBaseline() {
    return this.defaultProps.align === "baseline";
  }
  get amFlexboxAlignStretch() {
    return this.defaultProps.align === "stretch";
  }
  get amFlexboxAlignContentStart() {
    return this._alignContent === "start";
  }
  get amFlexboxAlignCotentCenter() {
    return this._alignContent === "center";
  }
  get amFlexboxAlignContentEnd() {
    return this._alignContent === "end";
  }
  get amFlexboxAlignContentBetween() {
    return this._alignContent === "between";
  }
  get amFlexboxAlignContentAround() {
    return this._alignContent === "around";
  }
  get amFlexboxAlignContentStretch() {
    return this._alignContent === "stretch";
  }
  constructor() {
    this.defaultProps = {
      prefixCls: "am-flexbox",
      align: "center"
    };
    this._direction = "";
    this._justify = "";
    this._alignContent = "";
    this.amFlexbox = true;
  }
};
_FlexComponent.ɵfac = function FlexComponent_Factory(t) {
  return new (t || _FlexComponent)();
};
_FlexComponent.ɵcmp = ɵɵdefineComponent({
  type: _FlexComponent,
  selectors: [["Flex"], ["nzm-flex"]],
  hostVars: 48,
  hostBindings: function FlexComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-flexbox", ctx.amFlexbox)("am-flexbox-dir-row", ctx.amFlexboxDirRow)("am-flexbox-dir-row-reverse", ctx.amFlexboxDirRowReverse)("am-flexbox-dir-column", ctx.amFlexboxDirColumn)("am-flexbox-dir-column-reverse", ctx.amFlexboxDirColumnReverse)("am-flexbox-nowrap", ctx.amFlexboxNowrap)("am-flexbox-wrap", ctx.amFlexboxWrap)("am-flexbox-wrap-reverse", ctx.amFlexboxWrapReverse)("am-flexbox-justify-start", ctx.amFlexboxJustifyStart)("am-flexbox-justify-center", ctx.amFlexboxJustifyCenter)("am-flexbox-justify-end", ctx.amFlexboxJustifyEnd)("am-flexbox-justify-between", ctx.amFlexboxJustifyBetween)("am-flexbox-justify-around", ctx.amFlexboxAlignAround)("am-flexbox-align-start", ctx.amFlexboxAlignStart)("am-flexbox-align-center", ctx.amFlexboxAlignCenter)("am-flexbox-align-end", ctx.amFlexboxAlignEnd)("am-flexbox-align-baseline", ctx.amFlexboxAlignBaseline)("am-flexbox-align-stretch", ctx.amFlexboxAlignStretch)("am-flexbox-align-content-start", ctx.amFlexboxAlignContentStart)("am-flexbox-align-content-center", ctx.amFlexboxAlignCotentCenter)("am-flexbox-align-content-end", ctx.amFlexboxAlignContentEnd)("am-flexbox-align-content-between", ctx.amFlexboxAlignContentBetween)("am-flexbox-align-content-around", ctx.amFlexboxAlignContentAround)("am-flexbox-align-content-stretch", ctx.amFlexboxAlignContentStretch);
    }
  },
  inputs: {
    direction: "direction",
    wrap: "wrap",
    justify: "justify",
    align: "align",
    alignContent: "alignContent"
  },
  ngContentSelectors: _c019,
  decls: 1,
  vars: 0,
  template: function FlexComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FlexComponent = _FlexComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexComponent, [{
    type: Component,
    args: [{
      selector: "Flex, nzm-flex",
      encapsulation: ViewEncapsulation$1.None,
      template: "<ng-content></ng-content>\n"
    }]
  }], () => [], {
    direction: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    alignContent: [{
      type: Input
    }],
    amFlexbox: [{
      type: HostBinding,
      args: ["class.am-flexbox"]
    }],
    amFlexboxDirRow: [{
      type: HostBinding,
      args: ["class.am-flexbox-dir-row"]
    }],
    amFlexboxDirRowReverse: [{
      type: HostBinding,
      args: ["class.am-flexbox-dir-row-reverse"]
    }],
    amFlexboxDirColumn: [{
      type: HostBinding,
      args: ["class.am-flexbox-dir-column"]
    }],
    amFlexboxDirColumnReverse: [{
      type: HostBinding,
      args: ["class.am-flexbox-dir-column-reverse"]
    }],
    amFlexboxNowrap: [{
      type: HostBinding,
      args: ["class.am-flexbox-nowrap"]
    }],
    amFlexboxWrap: [{
      type: HostBinding,
      args: ["class.am-flexbox-wrap"]
    }],
    amFlexboxWrapReverse: [{
      type: HostBinding,
      args: ["class.am-flexbox-wrap-reverse"]
    }],
    amFlexboxJustifyStart: [{
      type: HostBinding,
      args: ["class.am-flexbox-justify-start"]
    }],
    amFlexboxJustifyCenter: [{
      type: HostBinding,
      args: ["class.am-flexbox-justify-center"]
    }],
    amFlexboxJustifyEnd: [{
      type: HostBinding,
      args: ["class.am-flexbox-justify-end"]
    }],
    amFlexboxJustifyBetween: [{
      type: HostBinding,
      args: ["class.am-flexbox-justify-between"]
    }],
    amFlexboxAlignAround: [{
      type: HostBinding,
      args: ["class.am-flexbox-justify-around"]
    }],
    amFlexboxAlignStart: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-start"]
    }],
    amFlexboxAlignCenter: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-center"]
    }],
    amFlexboxAlignEnd: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-end"]
    }],
    amFlexboxAlignBaseline: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-baseline"]
    }],
    amFlexboxAlignStretch: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-stretch"]
    }],
    amFlexboxAlignContentStart: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-start"]
    }],
    amFlexboxAlignCotentCenter: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-center"]
    }],
    amFlexboxAlignContentEnd: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-end"]
    }],
    amFlexboxAlignContentBetween: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-between"]
    }],
    amFlexboxAlignContentAround: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-around"]
    }],
    amFlexboxAlignContentStretch: [{
      type: HostBinding,
      args: ["class.am-flexbox-align-content-stretch"]
    }]
  });
})();
var _FlexItemComponent = class _FlexItemComponent {
  constructor() {
    this.defaultProps = {
      prefixCls: "am-flexbox",
      align: "center"
    };
    this.flexboxItem = true;
  }
};
_FlexItemComponent.ɵfac = function FlexItemComponent_Factory(t) {
  return new (t || _FlexItemComponent)();
};
_FlexItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _FlexItemComponent,
  selectors: [["FlexItem"], ["nzm-flex-item"]],
  hostVars: 2,
  hostBindings: function FlexItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-flexbox-item", ctx.flexboxItem);
    }
  },
  ngContentSelectors: _c019,
  decls: 1,
  vars: 0,
  template: function FlexItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var FlexItemComponent = _FlexItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexItemComponent, [{
    type: Component,
    args: [{
      selector: "FlexItem, nzm-flex-item",
      template: `
    <ng-content></ng-content>
  `,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], null, {
    flexboxItem: [{
      type: HostBinding,
      args: ["class.am-flexbox-item"]
    }]
  });
})();
var _FlexModule = class _FlexModule {
};
_FlexModule.ɵfac = function FlexModule_Factory(t) {
  return new (t || _FlexModule)();
};
_FlexModule.ɵmod = ɵɵdefineNgModule({
  type: _FlexModule,
  declarations: [FlexComponent, FlexItemComponent],
  imports: [CommonModule],
  exports: [FlexComponent, FlexItemComponent]
});
_FlexModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var FlexModule = _FlexModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [FlexComponent, FlexItemComponent],
      declarations: [FlexComponent, FlexItemComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-pipes.mjs
var _SafeHTMLPipe = class _SafeHTMLPipe {
  constructor(_sanitized) {
    this._sanitized = _sanitized;
  }
  transform(value) {
    return this._sanitized.bypassSecurityTrustHtml(value);
  }
};
_SafeHTMLPipe.ɵfac = function SafeHTMLPipe_Factory(t) {
  return new (t || _SafeHTMLPipe)(ɵɵdirectiveInject(DomSanitizer, 16));
};
_SafeHTMLPipe.ɵpipe = ɵɵdefinePipe({
  name: "safeHTML",
  type: _SafeHTMLPipe,
  pure: true
});
var SafeHTMLPipe = _SafeHTMLPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHTMLPipe, [{
    type: Pipe,
    args: [{
      name: "safeHTML"
    }]
  }], () => [{
    type: DomSanitizer
  }], null);
})();
var _NgZorroAntdMobilePipesModule = class _NgZorroAntdMobilePipesModule {
};
_NgZorroAntdMobilePipesModule.ɵfac = function NgZorroAntdMobilePipesModule_Factory(t) {
  return new (t || _NgZorroAntdMobilePipesModule)();
};
_NgZorroAntdMobilePipesModule.ɵmod = ɵɵdefineNgModule({
  type: _NgZorroAntdMobilePipesModule,
  declarations: [SafeHTMLPipe],
  exports: [SafeHTMLPipe]
});
_NgZorroAntdMobilePipesModule.ɵinj = ɵɵdefineInjector({});
var NgZorroAntdMobilePipesModule = _NgZorroAntdMobilePipesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgZorroAntdMobilePipesModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [SafeHTMLPipe],
      exports: [SafeHTMLPipe]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-grid.mjs
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
  if (rf & 2) {
    const subItem_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r10.defaultProps.prefixCls, "-icon");
    ɵɵpropertyInterpolate("src", subItem_r6.icon, ɵɵsanitizeUrl);
  }
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "Icon", 13);
  }
  if (rf & 2) {
    const subItem_r6 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("type", subItem_r6.icon)("size", subItem_r6.size);
  }
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 14);
    ɵɵpipe(1, "safeHTML");
  }
  if (rf & 2) {
    const subItem_r6 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, subItem_r6.icon), ɵɵsanitizeHtml);
  }
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_ng_template_0_Template(rf, ctx) {
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
  if (rf & 2) {
    const subItem_r6 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngTemplateOutlet", subItem_r6.icon);
  }
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext();
      const subItem_r6 = ctx_r20.$implicit;
      const j_r7 = ctx_r20.index;
      const i_r4 = ɵɵnextContext().index;
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.click(subItem_r6, i_r4 * ctx_r19.columnNum + j_r7));
    });
    ɵɵelementStart(1, "div");
    ɵɵtemplate(2, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_img_2_Template, 1, 4, "img", 9)(3, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Icon_3_Template, 1, 2, "Icon", 10)(4, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_div_4_Template, 2, 3, "div", 11)(5, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_5_Template, 1, 1, null, 0);
    ɵɵelementStart(6, "div");
    ɵɵtext(7);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const subItem_r6 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r8.defaultProps.prefixCls, "-item-content");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r8.defaultProps.prefixCls, "-item-inner-content column-num-", ctx_r8.columnNum, "");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "url");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "icon");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "innerHTML");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6.icon && ctx_r8.getContentType(subItem_r6.icon) === "TemplateRef");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r8.defaultProps.prefixCls, "-text");
    ɵɵadvance(1);
    ɵɵtextInterpolate(subItem_r6.text);
  }
}
function GridComponent_ng_container_0_Flex_1_FlexItem_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("", ctx_r9.defaultProps.prefixCls, "-null-item");
  }
}
var _c020 = () => ["am-grid-item-active"];
function GridComponent_ng_container_0_Flex_1_FlexItem_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "FlexItem", 5);
    ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_1_Template, 8, 15, "div", 6)(2, GridComponent_ng_container_0_Flex_1_FlexItem_1_div_2_Template, 1, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const subItem_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r5.itemCls)("ngStyle", ctx_r5.itemStyle)("className", ɵɵpureFunction0(6, _c020))("activeStyle", ctx_r5.activeStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6 !== null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r6 === null);
  }
}
function GridComponent_ng_container_0_Flex_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Flex", 3);
    ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_FlexItem_1_Template, 3, 7, "FlexItem", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵproperty("justify", "center")("align", "stretch");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", item_r3);
  }
}
function GridComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GridComponent_ng_container_0_Flex_1_Template, 2, 3, "Flex", 2);
    ɵɵprojection(2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.gridData);
  }
}
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r36);
      const ctx_r35 = ɵɵnextContext();
      const subItem_r30 = ctx_r35.$implicit;
      const j_r31 = ctx_r35.index;
      const i_r28 = ɵɵnextContext().index;
      const ctx_r34 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r34.click(subItem_r30, i_r28 * ctx_r34.columnNum + j_r31));
    });
    ɵɵelementStart(1, "div");
    ɵɵelement(2, "img", 12);
    ɵɵelementStart(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const subItem_r30 = ɵɵnextContext().$implicit;
    const ctx_r32 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-item-content");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-item-inner-content column-num-4");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-icon");
    ɵɵpropertyInterpolate("src", subItem_r30.icon, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r32.defaultProps.prefixCls, "-text");
    ɵɵadvance(1);
    ɵɵtextInterpolate(subItem_r30.text);
  }
}
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(5);
    ɵɵclassMapInterpolate1("", ctx_r33.defaultProps.prefixCls, "-null-item");
  }
}
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "FlexItem", 20);
    ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_1_Template, 5, 14, "div", 6)(2, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_div_2_Template, 1, 3, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const subItem_r30 = ctx.$implicit;
    const ctx_r29 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("", ctx_r29.defaultProps.prefixCls, "-item");
    ɵɵproperty("ngStyle", ctx_r29.itemStyle)("className", ɵɵpureFunction0(7, _c020));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r30 !== null);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", subItem_r30 === null);
  }
}
function GridComponent_Carousel_1_CarouselSlide_1_Flex_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Flex", 3);
    ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_FlexItem_1_Template, 3, 8, "FlexItem", 19);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    ɵɵproperty("justify", "center")("align", "stretch");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", item_r27);
  }
}
function GridComponent_Carousel_1_CarouselSlide_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "CarouselSlide", 18);
    ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Flex_1_Template, 2, 3, "Flex", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const gridData_r25 = ctx.$implicit;
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r24.defaultProps.prefixCls, "-carousel-page");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", gridData_r25);
  }
}
function GridComponent_Carousel_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Carousel", 16);
    ɵɵtemplate(1, GridComponent_Carousel_1_CarouselSlide_1_Template, 2, 4, "CarouselSlide", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("autoplay", false)("infinite", true)("selectedIndex", 0)("autoplayInterval", 3e3)("dots", ctx_r1.carouselProps.dots)("dragging", ctx_r1.carouselProps.dragging);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.carouselDataTmp);
  }
}
var _c111 = ["*"];
var _GridComponent = class _GridComponent {
  get columnNum() {
    return this.defaultProps.columnNum;
  }
  set columnNum(value) {
    if (typeof value === "number") {
      this.defaultProps.columnNum = value;
      this.init();
    }
  }
  get carouselMaxRow() {
    return this.defaultProps.carouselMaxRow;
  }
  set carouselMaxRow(value) {
    if (typeof value === "number") {
      this.defaultProps.carouselMaxRow = value;
      this.init();
    }
  }
  get isCarousel() {
    return this.defaultProps.isCarousel;
  }
  set isCarousel(value) {
    this.defaultProps.isCarousel = value;
    this.init();
  }
  set data(value) {
    this._data = value;
    this.init();
  }
  get amGridSquare() {
    return true === this.square;
  }
  get amGridLine() {
    return true === this.hasLine;
  }
  get amGridCarousel() {
    return true === this.isCarousel;
  }
  constructor() {
    this.wrapCls = {};
    this.itemCls = {};
    this.carouselProps = {
      dots: false,
      dragging: false
    };
    this.defaultProps = {
      data: [],
      hasLine: true,
      isCarousel: false,
      columnNum: 4,
      carouselMaxRow: 2,
      prefixCls: "am-grid",
      square: true,
      itemStyle: {}
    };
    this.carouselData = [];
    this.carouselDataTmp = [];
    this.gridData = [];
    this._data = [];
    this.itemStyle = {};
    this.square = true;
    this.hasLine = true;
    this.activeStyle = true;
    this.onClick = new EventEmitter();
    this.amGrid = true;
  }
  getContentType(value) {
    if ((value.indexOf("http") >= 0 || value.indexOf("assets") >= 0) && value.indexOf("<") < 0) {
      return "url";
    } else if (value.indexOf("<") >= 0) {
      return "innerHTML";
    } else if (value instanceof TemplateRef) {
      return "TemplateRef";
    } else {
      return "icon";
    }
  }
  init() {
    const dataLength = this._data && this._data.length || 0;
    let rowCount = Math.ceil(dataLength / this.columnNum);
    let rowsArr;
    if (this.defaultProps.isCarousel) {
      if (rowCount % this.carouselMaxRow !== 0) {
        rowCount = rowCount + this.carouselMaxRow - rowCount % this.carouselMaxRow;
      }
      const pageCount = Math.ceil(rowCount / this.carouselMaxRow);
      rowsArr = this.getRows(rowCount, dataLength);
      if (pageCount <= 1) {
        this.carouselProps = {
          dots: false,
          dragging: false
        };
      } else {
        this.carouselProps = {
          dots: true,
          dragging: true
        };
      }
      this.carouselDataTmp = this.getCarouselData(rowsArr, pageCount, rowCount);
    } else {
      this.gridData = this.getRows(rowCount, dataLength);
    }
  }
  getCarouselData(rowsArr, pageCount, rowCount) {
    const pagesArr = [];
    for (let pageIndex = 0; pageIndex < pageCount; pageIndex++) {
      const pageRows = [];
      for (let ii = 0; ii < this.carouselMaxRow; ii++) {
        const rowIndex = pageIndex * this.carouselMaxRow + ii;
        if (rowIndex < rowCount) {
          pageRows.push(rowsArr[rowIndex]);
        } else {
          pageRows.push(null);
        }
      }
      pagesArr.push(pageRows);
    }
    return pagesArr;
  }
  getRows(rowCount, dataLength) {
    const columnNum = this.columnNum;
    const rowArr = new Array();
    for (let i = 0; i < rowCount; i++) {
      rowArr[i] = new Array();
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          rowArr[i][j] = this._data[dataIndex];
        } else {
          rowArr[i][j] = null;
        }
      }
    }
    return rowArr;
  }
  click(data, index) {
    const outputData = {
      data,
      index
    };
    this.onClick.emit(outputData);
  }
  ngOnInit() {
    this.itemCls = {
      [`${this.defaultProps.prefixCls}-item`]: true,
      [`${this.defaultProps.prefixCls}-active-item`]: false
    };
  }
};
_GridComponent.ɵfac = function GridComponent_Factory(t) {
  return new (t || _GridComponent)();
};
_GridComponent.ɵcmp = ɵɵdefineComponent({
  type: _GridComponent,
  selectors: [["Grid"], ["nzm-grid"]],
  hostVars: 8,
  hostBindings: function GridComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-grid", ctx.amGrid)("am-grid-square", ctx.amGridSquare)("am-grid-line", ctx.amGridLine)("am-grid-carousel", ctx.amGridCarousel);
    }
  },
  inputs: {
    columnNum: "columnNum",
    carouselMaxRow: "carouselMaxRow",
    itemStyle: "itemStyle",
    square: "square",
    hasLine: "hasLine",
    isCarousel: "isCarousel",
    activeStyle: "activeStyle",
    data: "data"
  },
  outputs: {
    onClick: "onClick"
  },
  ngContentSelectors: _c111,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "autoplay", "infinite", "selectedIndex", "autoplayInterval", "dots", "dragging", 4, "ngIf"], [3, "justify", "align", 4, "ngFor", "ngForOf"], [3, "justify", "align"], ["TouchFeedbackDirective", "", 3, "ngClass", "ngStyle", "className", "activeStyle", 4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "ngClass", "ngStyle", "className", "activeStyle"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "click"], [3, "src", "class", 4, "ngIf"], [3, "type", "size", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "src"], [3, "type", "size"], [3, "innerHTML"], [3, "ngTemplateOutlet"], [3, "autoplay", "infinite", "selectedIndex", "autoplayInterval", "dots", "dragging"], ["style", "display: block;", 3, "class", 4, "ngFor", "ngForOf"], [2, "display", "block"], ["TouchFeedbackDirective", "", 3, "class", "ngStyle", "className", 4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "ngStyle", "className"]],
  template: function GridComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, GridComponent_ng_container_0_Template, 3, 1, "ng-container", 0)(1, GridComponent_Carousel_1_Template, 2, 7, "Carousel", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.isCarousel);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isCarousel && ctx.carouselDataTmp.length > 0);
    }
  },
  dependencies: [FlexComponent, FlexItemComponent, IconComponent, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, CarouselComponent, CarouselSlideComponent, TouchFeedbackDirective, SafeHTMLPipe],
  encapsulation: 2
});
var GridComponent = _GridComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridComponent, [{
    type: Component,
    args: [{
      selector: "Grid, nzm-grid",
      template: `<ng-container *ngIf="!isCarousel">
  <Flex *ngFor="let item of gridData; let i = index" [justify]="'center'" [align]="'stretch'">
    <FlexItem
      TouchFeedbackDirective
      *ngFor="let subItem of item; let j = index"
      [ngClass]="itemCls"
      [ngStyle]="itemStyle"
      [className]="['am-grid-item-active']"
      [activeStyle]="activeStyle"
    >
      <div
        *ngIf="subItem !== null"
        class="{{ defaultProps.prefixCls }}-item-content"
        (click)="click(subItem, i * columnNum + j)"
      >
        <div class="{{ defaultProps.prefixCls }}-item-inner-content column-num-{{ columnNum }}">
          <img
            *ngIf="subItem.icon && getContentType(subItem.icon) === 'url'"
            src="{{ subItem.icon }}"
            class="{{ defaultProps.prefixCls }}-icon"
          />
          <Icon
            *ngIf="subItem.icon && getContentType(subItem.icon) === 'icon'"
            [type]="subItem.icon"
            [size]="subItem.size"
          ></Icon>
          <div
            *ngIf="subItem.icon && getContentType(subItem.icon) === 'innerHTML'"
            [innerHTML]="subItem.icon | safeHTML"
          ></div>
          <ng-template
            *ngIf="subItem.icon && getContentType(subItem.icon) === 'TemplateRef'"
            [ngTemplateOutlet]="subItem.icon"
          ></ng-template>
          <div class="{{ defaultProps.prefixCls }}-text">{{ subItem.text }}</div>
        </div>
      </div>
      <div *ngIf="subItem === null" class="{{ defaultProps.prefixCls }}-null-item"></div>
    </FlexItem>
  </Flex>
  <ng-content></ng-content>
</ng-container>

<Carousel
  *ngIf="isCarousel && carouselDataTmp.length > 0"
  [autoplay]="false"
  [infinite]="true"
  [selectedIndex]="0"
  [autoplayInterval]="3000"
  [dots]="carouselProps.dots"
  [dragging]="carouselProps.dragging"
>
  <CarouselSlide
    *ngFor="let gridData of carouselDataTmp"
    class="{{ defaultProps.prefixCls }}-carousel-page"
    style="display: block;"
  >
    <Flex *ngFor="let item of gridData; let i = index" [justify]="'center'" [align]="'stretch'">
      <FlexItem
        TouchFeedbackDirective
        *ngFor="let subItem of item; let j = index"
        class="{{ defaultProps.prefixCls }}-item"
        [ngStyle]="itemStyle"
        [className]="['am-grid-item-active']"
      >
        <div
          *ngIf="subItem !== null"
          class="{{ defaultProps.prefixCls }}-item-content"
          (click)="click(subItem, i * columnNum + j)"
        >
          <div class="{{ defaultProps.prefixCls }}-item-inner-content column-num-4">
            <img class="{{ defaultProps.prefixCls }}-icon" src="{{ subItem.icon }}" />
            <div class="{{ defaultProps.prefixCls }}-text">{{ subItem.text }}</div>
          </div>
        </div>
        <div *ngIf="subItem === null" class="{{ defaultProps.prefixCls }}-null-item"></div>
      </FlexItem>
    </Flex>
  </CarouselSlide>
</Carousel>
`
    }]
  }], () => [], {
    columnNum: [{
      type: Input
    }],
    carouselMaxRow: [{
      type: Input
    }],
    itemStyle: [{
      type: Input
    }],
    square: [{
      type: Input
    }],
    hasLine: [{
      type: Input
    }],
    isCarousel: [{
      type: Input
    }],
    activeStyle: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    amGrid: [{
      type: HostBinding,
      args: ["class.am-grid"]
    }],
    amGridSquare: [{
      type: HostBinding,
      args: ["class.am-grid-square"]
    }],
    amGridLine: [{
      type: HostBinding,
      args: ["class.am-grid-line"]
    }],
    amGridCarousel: [{
      type: HostBinding,
      args: ["class.am-grid-carousel"]
    }]
  });
})();
var _GridModule = class _GridModule {
};
_GridModule.ɵfac = function GridModule_Factory(t) {
  return new (t || _GridModule)();
};
_GridModule.ɵmod = ɵɵdefineNgModule({
  type: _GridModule,
  declarations: [GridComponent],
  imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
  exports: [GridComponent]
});
_GridModule.ɵinj = ɵɵdefineInjector({
  imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule]
});
var GridModule = _GridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GridModule, [{
    type: NgModule,
    args: [{
      imports: [FlexModule, IconModule, CommonModule, CarouselModule, TouchFeedbackModule, NgZorroAntdMobilePipesModule],
      exports: [GridComponent],
      declarations: [GridComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-action-sheet.mjs
function ActionSheetComponent_ng_container_8_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_8_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_8_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.option.title);
  }
}
function ActionSheetComponent_ng_container_8_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r5.option.prefixCls, "-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.option.title);
  }
}
function ActionSheetComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_8_1_Template, 1, 1, null, 3)(2, ActionSheetComponent_ng_container_8_h3_2_Template, 2, 4, "h3", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.option.title));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.option.title));
  }
}
function ActionSheetComponent_ng_container_9_1_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_ng_container_9_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_ng_container_9_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.option.message);
  }
}
function ActionSheetComponent_ng_container_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r8.option.prefixCls, "-message");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r8.option.message, " ");
  }
}
function ActionSheetComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionSheetComponent_ng_container_9_1_Template, 1, 1, null, 3)(2, ActionSheetComponent_ng_container_9_div_2_Template, 2, 4, "div", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isTemplateRef(ctx_r1.option.message));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isTemplateRef(ctx_r1.option.message));
  }
}
function ActionSheetComponent_div_11_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r18);
      const i_r12 = ɵɵnextContext().index;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.option.onPress(i_r12, 0, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r11 = ɵɵnextContext().$implicit;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r13.option.prefixCls, "-button-list-item");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r11, " ");
  }
}
function ActionSheetComponent_div_11_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_3_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r22);
      const i_r12 = ɵɵnextContext().index;
      const ctx_r20 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r20.option.onPress(i_r12, 0, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r11 = ɵɵnextContext().$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r14.option.prefixCls, "-button-list-item ", ctx_r14.option.prefixCls, "-destructive-button");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r11, " ");
  }
}
function ActionSheetComponent_div_11_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13);
    ɵɵlistener("click", function ActionSheetComponent_div_11_ng_container_1_div_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r26);
      const i_r12 = ɵɵnextContext().index;
      const ctx_r24 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r24.option.onPress(i_r12, 0, $event));
    });
    ɵɵtext(1);
    ɵɵelement(2, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r11 = ɵɵnextContext().$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r15.option.prefixCls, "-button-list-item ", ctx_r15.option.prefixCls, "-cancel-button");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r11, " ");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r15.option.prefixCls, "-cancel-button-mask");
  }
}
function ActionSheetComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11);
    ɵɵtemplate(2, ActionSheetComponent_div_11_ng_container_1_div_2_Template, 2, 4, "div", 12)(3, ActionSheetComponent_div_11_ng_container_1_div_3_Template, 2, 5, "div", 12)(4, ActionSheetComponent_div_11_ng_container_1_div_4_Template, 3, 8, "div", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r10.option.prefixCls, "-button-list-item");
    ɵɵproperty("className", ctx_r10.setActiveClassName(ctx_r10.option, "button-list-item"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.option.destructiveButtonIndex !== i_r12 && ctx_r10.option.cancelButtonIndex !== i_r12);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.option.destructiveButtonIndex === i_r12);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.option.cancelButtonIndex === i_r12);
  }
}
function ActionSheetComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ActionSheetComponent_div_11_ng_container_1_Template, 5, 7, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.option.prefixCls, "-button-list");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.option.options);
  }
}
function ActionSheetComponent_div_12_div_1_ng_container_1_3_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_div_12_div_1_ng_container_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_div_12_div_1_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const item_r31 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r31.icon);
  }
}
function ActionSheetComponent_div_12_div_1_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
    ɵɵpipe(1, "safeHTML");
  }
  if (rf & 2) {
    const item_r31 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, item_r31.icon), ɵɵsanitizeHtml);
  }
}
function ActionSheetComponent_div_12_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function ActionSheetComponent_div_12_div_1_ng_container_1_Template_div_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r39);
      const i_r32 = restoredCtx.index;
      const ctx_r38 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r38.option.onPress(i_r32, 0, $event));
    });
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, ActionSheetComponent_div_12_div_1_ng_container_1_3_Template, 1, 1, null, 3)(4, ActionSheetComponent_div_12_div_1_ng_container_1_div_4_Template, 2, 3, "div", 14);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r30 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item-icon");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r30.isTemplateRef(item_r31.icon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r30.isTemplateRef(item_r31.icon));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r30.option.prefixCls, "-share-list-item-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r31.title);
  }
}
function ActionSheetComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ActionSheetComponent_div_12_div_1_ng_container_1_Template, 7, 12, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r28.option.prefixCls, "-share-list");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r28.option.options);
  }
}
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_ng_template_0_Template(rf, ctx) {
}
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const item_r44 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", item_r44.icon);
  }
}
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
    ɵɵpipe(1, "safeHTML");
  }
  if (rf & 2) {
    const item_r44 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, item_r44.icon), ɵɵsanitizeHtml);
  }
}
function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template_div_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r52);
      const i_r45 = restoredCtx.index;
      const rowIndex_r42 = ɵɵnextContext().index;
      const ctx_r51 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r51.option.onPress(i_r45, rowIndex_r42, $event));
    });
    ɵɵelementStart(2, "div");
    ɵɵtemplate(3, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_3_Template, 1, 1, null, 3)(4, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_div_4_Template, 2, 3, "div", 14);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    const ctx_r43 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item");
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item-icon");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r43.isTemplateRef(item_r44.icon));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r43.isTemplateRef(item_r44.icon));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r43.option.prefixCls, "-share-list-item-title");
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r44.title);
  }
}
function ActionSheetComponent_div_12_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ActionSheetComponent_div_12_ng_container_2_div_1_ng_container_1_Template, 7, 12, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r41 = ctx.$implicit;
    const ctx_r40 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r40.option.prefixCls, "-share-list");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", items_r41);
  }
}
function ActionSheetComponent_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ActionSheetComponent_div_12_ng_container_2_div_1_Template, 2, 4, "div", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r29.option.options);
  }
}
function ActionSheetComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ActionSheetComponent_div_12_div_1_Template, 2, 4, "div", 7)(2, ActionSheetComponent_div_12_ng_container_2_Template, 2, 1, "ng-container", 3);
    ɵɵelementStart(3, "div", 11);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate2("", ctx_r3.option.prefixCls, "-share ", ctx_r3.option.prefixCls, "-share-content");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.isArray(ctx_r3.option.options, ctx_r3.option.options[0]));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isArray(ctx_r3.option.options, ctx_r3.option.options[0]));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r3.option.prefixCls, "-share-cancel-button");
    ɵɵproperty("className", ctx_r3.setActiveClassName(ctx_r3.option, "share-cancel-button"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.option.cancelButtonText, " ");
  }
}
var ActionSheetRef = class {
};
var _ActionSheetComponent = class _ActionSheetComponent extends ActionSheetRef {
  constructor(localeProviderService, elementRef) {
    super();
    this.localeProviderService = localeProviderService;
    this.elementRef = elementRef;
    this.unsubscribe$ = new Subject();
  }
  ngOnInit() {
    this.localeProvider();
  }
  localeProvider() {
    const self = this;
    if (self.option.locale || self.option.locale !== void 0) {
      self.localeProviderService.setLocale(self.option.locale);
    }
    self.localeProviderService.localeChange.pipe(takeUntil(self.unsubscribe$)).subscribe((_) => {
      if (self.option.cancelButtonText) {
        self.option.cancelButtonText = self.localeProviderService.getLocaleSubObj("ActionSheet")["dismissText"];
      }
    });
  }
  onPress(index, rowIndex = 0, event) {
  }
  showShare(option) {
    const cls = {
      [`${option.prefixCls}-share`]: option.flag === "SHARE"
    };
    return cls;
  }
  setActiveClassName(option, suffix) {
    return [`${option.prefixCls}-${suffix}-active`];
  }
  isNoTitle(value) {
    return value === "" || value === null || value === void 0;
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
  isArray(options, value) {
    if (options.length > 0 && value) {
      return value instanceof Array;
    }
    return false;
  }
  getInstance() {
    return this;
  }
  getElement() {
    return this.elementRef && this.elementRef.nativeElement;
  }
  close() {
    if (this.option.close) {
      this.option.close();
    }
  }
  destroy() {
    this.close();
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
};
_ActionSheetComponent.ɵfac = function ActionSheetComponent_Factory(t) {
  return new (t || _ActionSheetComponent)(ɵɵdirectiveInject(LocaleProviderService), ɵɵdirectiveInject(ElementRef));
};
_ActionSheetComponent.ɵcmp = ɵɵdefineComponent({
  type: _ActionSheetComponent,
  selectors: [["ActionSheet"]],
  features: [ɵɵInheritDefinitionFeature],
  decls: 13,
  vars: 29,
  consts: [["role", "dialog", 3, "click"], ["role", "document", 3, "ngClass"], ["aria-label", "Close"], [4, "ngIf"], [3, "ngSwitch"], ["role", "group", 3, "class", 4, "ngSwitchCase"], [3, "class", 4, "ngSwitchCase"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["role", "group"], [4, "ngFor", "ngForOf"], ["TouchFeedbackDirective", "", 3, "className"], [3, "class", "click", 4, "ngIf"], [3, "click"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [3, "class", 4, "ngFor", "ngForOf"]],
  template: function ActionSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div");
      ɵɵelementStart(1, "div", 0);
      ɵɵlistener("click", function ActionSheetComponent_Template_div_click_1_listener($event) {
        return ctx.option.maskClose(-1, 0, $event);
      });
      ɵɵelementStart(2, "div", 1)(3, "div")(4, "button", 2);
      ɵɵelement(5, "span");
      ɵɵelementEnd();
      ɵɵelementStart(6, "div")(7, "div");
      ɵɵtemplate(8, ActionSheetComponent_ng_container_8_Template, 3, 2, "ng-container", 3)(9, ActionSheetComponent_ng_container_9_Template, 3, 2, "ng-container", 3);
      ɵɵelementContainerStart(10, 4);
      ɵɵtemplate(11, ActionSheetComponent_div_11_Template, 2, 4, "div", 5)(12, ActionSheetComponent_div_12_Template, 5, 11, "div", 6);
      ɵɵelementContainerEnd();
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate2("", ctx.option.prefixCls, "-mask ", ctx.option.maskTransitionName, "");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate2("", ctx.option.prefixCls, "-wrap ", ctx.option.transitionName, "");
      ɵɵadvance(1);
      ɵɵclassMap(ctx.option.prefixCls);
      ɵɵproperty("ngClass", ctx.showShare(ctx.option));
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-content");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-close");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-close-x");
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.option.prefixCls, "-body");
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.isNoTitle(ctx.option.title));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isNoTitle(ctx.option.message));
      ɵɵadvance(1);
      ɵɵproperty("ngSwitch", ctx.option.flag);
      ɵɵadvance(1);
      ɵɵproperty("ngSwitchCase", "NORMAL");
      ɵɵadvance(1);
      ɵɵproperty("ngSwitchCase", "SHARE");
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, TouchFeedbackDirective, SafeHTMLPipe],
  encapsulation: 2
});
var ActionSheetComponent = _ActionSheetComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetComponent, [{
    type: Component,
    args: [{
      selector: "ActionSheet",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="{{ option.prefixCls }}-mask {{ option.maskTransitionName }}"></div>
<div
  role="dialog"
  class="{{ option.prefixCls }}-wrap {{ option.transitionName }}"
  (click)="option.maskClose(-1, 0, $event)"
>
  <div role="document" class="{{ option.prefixCls }}" [ngClass]="showShare(option)">
    <div class="{{ option.prefixCls }}-content">
      <button aria-label="Close" class="{{ option.prefixCls }}-close">
        <span class="{{ option.prefixCls }}-close-x"></span>
      </button>
      <div class="{{ option.prefixCls }}-body">
        <div>
          <ng-container *ngIf="!isNoTitle(option.title)">
            <ng-template *ngIf="isTemplateRef(option.title)" [ngTemplateOutlet]="option.title"></ng-template>
            <h3 *ngIf="!isTemplateRef(option.title)" class="{{ option.prefixCls }}-title">{{ option.title }}</h3>
          </ng-container>
          <ng-container *ngIf="!isNoTitle(option.message)">
            <ng-template *ngIf="isTemplateRef(option.message)" [ngTemplateOutlet]="option.message"></ng-template>
            <div *ngIf="!isTemplateRef(option.message)" class="{{ option.prefixCls }}-message">
              {{ option.message }}
            </div>
          </ng-container>
          <ng-container [ngSwitch]="option.flag">
            <div *ngSwitchCase="'NORMAL'" class="{{ option.prefixCls }}-button-list" role="group">
              <ng-container *ngFor="let item of option.options; let i = index">
                <div
                  TouchFeedbackDirective
                  class="{{ option.prefixCls }}-button-list-item"
                  [className]="setActiveClassName(option, 'button-list-item')"
                >
                  <div
                    *ngIf="option.destructiveButtonIndex !== i && option.cancelButtonIndex !== i"
                    class="{{ option.prefixCls }}-button-list-item"
                    (click)="option.onPress(i, 0, $event)"
                  >
                    {{ item }}
                  </div>
                  <div
                    *ngIf="option.destructiveButtonIndex === i"
                    class="{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-destructive-button"
                    (click)="option.onPress(i, 0, $event)"
                  >
                    {{ item }}
                  </div>
                  <div
                    *ngIf="option.cancelButtonIndex === i"
                    class="{{ option.prefixCls }}-button-list-item {{ option.prefixCls }}-cancel-button"
                    (click)="option.onPress(i, 0, $event)"
                  >
                    {{ item }}
                    <span class="{{ option.prefixCls }}-cancel-button-mask"></span>
                  </div>
                </div>
              </ng-container>
            </div>
            <div *ngSwitchCase="'SHARE'" class="{{ option.prefixCls }}-share {{ option.prefixCls }}-share-content">
              <div *ngIf="!isArray(option.options, option.options[0])" class="{{ option.prefixCls }}-share-list">
                <ng-container *ngFor="let item of option.options; let i = index">
                  <div class="{{ option.prefixCls }}-share-list-item" (click)="option.onPress(i, 0, $event)">
                    <div class="{{ option.prefixCls }}-share-list-item-icon">
                      <ng-template *ngIf="isTemplateRef(item.icon)" [ngTemplateOutlet]="item.icon"></ng-template>
                      <div *ngIf="!isTemplateRef(item.icon)" [innerHTML]="item.icon | safeHTML"></div>
                    </div>
                    <div class="{{ option.prefixCls }}-share-list-item-title">{{ item.title }}</div>
                  </div>
                </ng-container>
              </div>
              <ng-container *ngIf="isArray(option.options, option.options[0])">
                <div
                  *ngFor="let items of option.options; let rowIndex = index"
                  class="{{ option.prefixCls }}-share-list"
                >
                  <ng-container *ngFor="let item of items; let i = index">
                    <div class="{{ option.prefixCls }}-share-list-item" (click)="option.onPress(i, rowIndex, $event)">
                      <div class="{{ option.prefixCls }}-share-list-item-icon">
                        <ng-template *ngIf="isTemplateRef(item.icon)" [ngTemplateOutlet]="item.icon"></ng-template>
                        <div *ngIf="!isTemplateRef(item.icon)" [innerHTML]="item.icon | safeHTML"></div>
                      </div>
                      <div class="{{ option.prefixCls }}-share-list-item-title">{{ item.title }}</div>
                    </div>
                  </ng-container>
                </div>
              </ng-container>
              <div
                TouchFeedbackDirective
                [className]="setActiveClassName(option, 'share-cancel-button')"
                class="{{ option.prefixCls }}-share-cancel-button"
              >
                {{ option.cancelButtonText }}
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LocaleProviderService
  }, {
    type: ElementRef
  }], null);
})();
var _ActionSheetOptions = class _ActionSheetOptions {
  constructor() {
    this.prefixCls = "am-action-sheet";
    this.maskClosable = true;
    this.transitionName = "am-slide-up";
    this.maskTransitionName = "am-fade";
  }
};
_ActionSheetOptions.ɵfac = function ActionSheetOptions_Factory(t) {
  return new (t || _ActionSheetOptions)();
};
_ActionSheetOptions.ɵprov = ɵɵdefineInjectable({
  token: _ActionSheetOptions,
  factory: _ActionSheetOptions.ɵfac
});
var ActionSheetOptions = _ActionSheetOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetOptions, [{
    type: Injectable
  }], null, null);
})();
var _ShareOption = class _ShareOption {
};
_ShareOption.ɵfac = function ShareOption_Factory(t) {
  return new (t || _ShareOption)();
};
_ShareOption.ɵprov = ɵɵdefineInjectable({
  token: _ShareOption,
  factory: _ShareOption.ɵfac
});
var ShareOption = _ShareOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareOption, [{
    type: Injectable
  }], null, null);
})();
var _ShareActionSheetWithOptions = class _ShareActionSheetWithOptions extends ActionSheetOptions {
  constructor() {
    super(...arguments);
    this.cancelButtonText = "Cancel";
  }
};
_ShareActionSheetWithOptions.ɵfac = /* @__PURE__ */ (() => {
  let ɵShareActionSheetWithOptions_BaseFactory;
  return function ShareActionSheetWithOptions_Factory(t) {
    return (ɵShareActionSheetWithOptions_BaseFactory || (ɵShareActionSheetWithOptions_BaseFactory = ɵɵgetInheritedFactory(_ShareActionSheetWithOptions)))(t || _ShareActionSheetWithOptions);
  };
})();
_ShareActionSheetWithOptions.ɵprov = ɵɵdefineInjectable({
  token: _ShareActionSheetWithOptions,
  factory: _ShareActionSheetWithOptions.ɵfac
});
var ShareActionSheetWithOptions = _ShareActionSheetWithOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareActionSheetWithOptions, [{
    type: Injectable
  }], null, null);
})();
var _ActionSheetWithOptions = class _ActionSheetWithOptions extends ActionSheetOptions {
};
_ActionSheetWithOptions.ɵfac = /* @__PURE__ */ (() => {
  let ɵActionSheetWithOptions_BaseFactory;
  return function ActionSheetWithOptions_Factory(t) {
    return (ɵActionSheetWithOptions_BaseFactory || (ɵActionSheetWithOptions_BaseFactory = ɵɵgetInheritedFactory(_ActionSheetWithOptions)))(t || _ActionSheetWithOptions);
  };
})();
_ActionSheetWithOptions.ɵprov = ɵɵdefineInjectable({
  token: _ActionSheetWithOptions,
  factory: _ActionSheetWithOptions.ɵfac
});
var ActionSheetWithOptions = _ActionSheetWithOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetWithOptions, [{
    type: Injectable
  }], null, null);
})();
var NORMAL = "NORMAL";
var SHARE = "SHARE";
function noop() {
}
var _ActionSheetService = class _ActionSheetService extends PopupService {
  constructor() {
    super(...arguments);
    this.compRef = null;
    this._actionSheetCompFactory = null;
    this.appRef = null;
    this.comRef = null;
    this.instance = null;
  }
  _initConfig(config, options = {}) {
    const props = new ActionSheetOptions();
    const optionalParams = ["prefixCls", "maskClosable", "cancelButtonText", "cancelButtonIndex", "destructiveButtonIndex", "title", "message", "className", "transitionName", "maskTransitionName", "options", "locale", "close"];
    const self = this;
    config = Object.assign(options, config, {
      close: () => {
        if (config.maskClosable) {
          self.closeWithAnimation(config.transitionName, config.maskTransitionName);
        }
      }
    });
    optionalParams.forEach((key) => {
      if (config[key] !== void 0) {
        props[key] = config[key];
      }
    });
    return props;
  }
  _open(props) {
    this.comRef = this.showPopup(ActionSheetComponent);
    this.comRef.instance.option = props;
    return this.comRef && this.comRef.instance;
  }
  createActionSheet(flag, config, callback) {
    const options = flag === NORMAL ? new ActionSheetOptions() : new ShareActionSheetWithOptions();
    const transitionName = config.transitionName ? config.transitionName : options.transitionName;
    options.transitionName = `${transitionName}-enter ${transitionName}-enter-active`;
    const maskTransitionName = config.maskTransitionName ? config.maskTransitionName : options.maskTransitionName;
    options.maskTransitionName = `${maskTransitionName}-enter ${maskTransitionName}-enter-active`;
    const props = this._initConfig(config, options);
    Object.assign(props, {
      onPress: cb
    }, {
      flag
    }, {
      maskClose: props.maskClosable ? cb : () => {
      }
    });
    const self = this;
    function cb(index, rowIndex = 0, event) {
      event.stopPropagation();
      const res = callback(index, rowIndex);
      if (res && res.then) {
        res.then(() => {
          self.closeWithAnimation(transitionName, maskTransitionName);
        });
      } else {
        self.closeWithAnimation(transitionName, maskTransitionName);
      }
    }
    return this._open(props);
  }
  closeWithAnimation(transitionName, maskTransitionName) {
    this.comRef.instance.option.transitionName = `${transitionName}-leave ${transitionName}-leave-active`;
    this.comRef.instance.option.maskTransitionName = `${maskTransitionName}-leave ${maskTransitionName}-leave-active`;
    setTimeout(() => {
      this.close();
    }, 200);
  }
  showActionSheetWithOptions(config, callback = noop) {
    return this.createActionSheet(NORMAL, config, callback);
  }
  showShareActionSheetWithOptions(config, callback = noop) {
    return this.createActionSheet(SHARE, config, callback);
  }
  close() {
    this.hidePopup();
  }
};
_ActionSheetService.ɵfac = /* @__PURE__ */ (() => {
  let ɵActionSheetService_BaseFactory;
  return function ActionSheetService_Factory(t) {
    return (ɵActionSheetService_BaseFactory || (ɵActionSheetService_BaseFactory = ɵɵgetInheritedFactory(_ActionSheetService)))(t || _ActionSheetService);
  };
})();
_ActionSheetService.ɵprov = ɵɵdefineInjectable({
  token: _ActionSheetService,
  factory: _ActionSheetService.ɵfac,
  providedIn: "root"
});
var ActionSheetService = _ActionSheetService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ActionSheetModule = class _ActionSheetModule {
};
_ActionSheetModule.ɵfac = function ActionSheetModule_Factory(t) {
  return new (t || _ActionSheetModule)();
};
_ActionSheetModule.ɵmod = ɵɵdefineNgModule({
  type: _ActionSheetModule,
  declarations: [ActionSheetComponent],
  imports: [CommonModule, OverlayModule, NgZorroAntdMobilePipesModule, ListModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, TouchFeedbackModule],
  exports: [ActionSheetComponent]
});
_ActionSheetModule.ɵinj = ɵɵdefineInjector({
  providers: [PopupService, ActionSheetService],
  imports: [CommonModule, OverlayModule, NgZorroAntdMobilePipesModule, ListModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, TouchFeedbackModule]
});
var ActionSheetModule = _ActionSheetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, NgZorroAntdMobilePipesModule, ListModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, TouchFeedbackModule],
      declarations: [ActionSheetComponent],
      exports: [ActionSheetComponent],
      providers: [PopupService, ActionSheetService]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-segmented-control.mjs
var _c021 = (a0) => ({
  "am-segment-item-selected": a0
});
var _c112 = (a0, a1, a2) => ({
  "border-color": a0,
  color: a1,
  "background-color": a2
});
var _c23 = (a0) => ({
  "background-color": a0
});
function SegmentedControlComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function SegmentedControlComponent_div_0_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r4);
      const i_r2 = restoredCtx.index;
      const value_r1 = restoredCtx.$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onClick(i_r2, value_r1));
    });
    ɵɵelement(1, "div", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-item");
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c021, i_r2 === ctx_r0.selectedIndex))("ngStyle", ɵɵpureFunction3(12, _c112, ctx_r0.tintColor, i_r2 === ctx_r0.selectedIndex ? "#fff" : ctx_r0.tintColor, i_r2 === ctx_r0.selectedIndex ? ctx_r0.tintColor : "transparent"));
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-item-inner");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(16, _c23, i_r2 === ctx_r0.selectedIndex ? ctx_r0.tintColor : "transparent"));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r1, "\n");
  }
}
var _SegmentedControlComponent = class _SegmentedControlComponent {
  get amDisabled() {
    return this.disabled;
  }
  constructor() {
    this.prefixCls = "am-segment";
    this.tintColor = "#2DB7F5";
    this.disabled = false;
    this.selectedIndex = 0;
    this.onChange = new EventEmitter();
    this.role = "tablist";
    this.amSegment = true;
  }
  onClick(index, value) {
    if (!this.disabled && index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.onChange.emit({
        selectedIndex: index,
        value
      });
    }
  }
};
_SegmentedControlComponent.ɵfac = function SegmentedControlComponent_Factory(t) {
  return new (t || _SegmentedControlComponent)();
};
_SegmentedControlComponent.ɵcmp = ɵɵdefineComponent({
  type: _SegmentedControlComponent,
  selectors: [["SegmentedControl"], ["nz-segmented-control"]],
  hostVars: 5,
  hostBindings: function SegmentedControlComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("am-segment", ctx.amSegment)("am-segment-disabled", ctx.amDisabled);
    }
  },
  inputs: {
    tintColor: "tintColor",
    disabled: "disabled",
    selectedIndex: "selectedIndex",
    values: "values"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 1,
  vars: 1,
  consts: [["role", "tab", 3, "class", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["role", "tab", 3, "ngClass", "ngStyle", "click"], [3, "ngStyle"]],
  template: function SegmentedControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SegmentedControlComponent_div_0_Template, 3, 18, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.values);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle],
  encapsulation: 2
});
var SegmentedControlComponent = _SegmentedControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentedControlComponent, [{
    type: Component,
    args: [{
      selector: "SegmentedControl, nz-segmented-control",
      template: `<div
  role="tab"
  *ngFor="let value of values; let i = index"
  class="{{ prefixCls }}-item"
  [ngClass]="{ 'am-segment-item-selected': i === selectedIndex }"
  [ngStyle]="{
    'border-color': tintColor,
    color: i === selectedIndex ? '#fff' : tintColor,
    'background-color': i === selectedIndex ? tintColor : 'transparent'
  }"
  (click)="onClick(i, value)"
>
  <div
    class="{{ prefixCls }}-item-inner"
    [ngStyle]="{ 'background-color': i === selectedIndex ? tintColor : 'transparent' }"
  ></div>
  {{ value }}
</div>
`
    }]
  }], () => [], {
    tintColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    selectedIndex: [{
      type: Input
    }],
    values: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    amSegment: [{
      type: HostBinding,
      args: ["class.am-segment"]
    }],
    amDisabled: [{
      type: HostBinding,
      args: ["class.am-segment-disabled"]
    }]
  });
})();
var _SegmentedControlModule = class _SegmentedControlModule {
};
_SegmentedControlModule.ɵfac = function SegmentedControlModule_Factory(t) {
  return new (t || _SegmentedControlModule)();
};
_SegmentedControlModule.ɵmod = ɵɵdefineNgModule({
  type: _SegmentedControlModule,
  declarations: [SegmentedControlComponent],
  imports: [CommonModule],
  exports: [SegmentedControlComponent]
});
_SegmentedControlModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var SegmentedControlModule = _SegmentedControlModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SegmentedControlModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SegmentedControlComponent],
      exports: [SegmentedControlComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-textarea-item.mjs
var _c022 = ["text"];
function TextareaItemComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.labelCls);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function TextareaItemComponent_div_1_ng_template_1_Template(rf, ctx) {
}
function TextareaItemComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, TextareaItemComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.labelCls);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.title);
  }
}
function TextareaItemComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵlistener("click", function TextareaItemComponent_div_5_Template_div_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.clearInput());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-clear");
    ɵɵproperty("ngClass", ctx_r3.clearCls);
  }
}
function TextareaItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function TextareaItemComponent_div_6_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.errorClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r4.prefixCls, "-error-extra");
  }
}
function TextareaItemComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span")(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-count");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.characterLength);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("/", ctx_r5.count, "\n");
  }
}
var _TextareaItemComponent = class _TextareaItemComponent {
  get value() {
    return this._value;
  }
  set value(v) {
    if (typeof v === "undefined" || v === null) {
      this._value = "";
    } else {
      this._value = v;
    }
    this.textRef.nativeElement.value = this._value;
    this._onChange(this._value);
  }
  get defaultValue() {
    return this._defaultValue;
  }
  set defaultValue(value) {
    this._defaultValue = value;
    this._value = this._defaultValue;
    this.textRef.nativeElement.value = this._value;
  }
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(value) {
    this._placeholder = value;
  }
  get editable() {
    return this._editable;
  }
  set editable(value) {
    this._editable = value;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.setCls();
  }
  get clear() {
    return this._clear;
  }
  set clear(value) {
    this._clear = value;
  }
  get rows() {
    return this._rows;
  }
  set rows(value) {
    this._rows = value;
    this.setCls();
  }
  get error() {
    return this._error;
  }
  set error(value) {
    this._error = value;
    this.setCls();
  }
  set labelNumber(value) {
    this._labelNumber = value;
    this.setCls();
  }
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
    this.setCls();
    this.setCharacterLength();
  }
  get prefixListCls() {
    return this._prefixListCls;
  }
  set prefixListCls(value) {
    this._prefixListCls = value;
    this.setCls();
  }
  set name(value) {
    this._name = value;
    this.textRef.nativeElement.name = this._name;
  }
  set autoHeight(value) {
    this._autoHeight = value;
  }
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.isTitleString = true;
    if (typeof value !== "string") {
      this.isTitleString = false;
    }
  }
  set focus(value) {
    if (value && value.focus) {
      this.textRef.nativeElement.focus();
      this.inputFocus("");
    }
  }
  get autoFocus() {
    return this._autoFocus;
  }
  set autoFocus(value) {
    this._autoFocus = value;
  }
  constructor(element, render) {
    this.element = element;
    this.render = render;
    this.prefixCls = "am-textarea";
    this.isTitleString = true;
    this.maxLength = Infinity;
    this._prefixListCls = "am-list";
    this._defaultValue = "";
    this._placeholder = "";
    this._editable = true;
    this._disabled = false;
    this._clear = false;
    this._rows = 1;
    this._error = false;
    this._labelNumber = 5;
    this._name = "";
    this._focus = false;
    this._autoFocus = false;
    this._isClear = false;
    this._isClickingClear = false;
    this.onChange = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onErrorClick = new EventEmitter();
    this.clsItem = true;
    this._onChange = (_) => {
    };
    this._el = element.nativeElement;
  }
  setCls() {
    this.hasCount = this._count > 0 && this._rows > 1;
    this.render.addClass(this._el, this._prefixListCls + "-item");
    this.clsSingleLine = this._rows === 1 && !this._autoHeight;
    this.clsDisabled = this._disabled;
    this.clsError = this._error;
    this.clsFocus = this._focus;
    this.clsHasCount = this.hasCount;
    this.labelCls = {
      [`${this.prefixCls}-label`]: true,
      [`${this.prefixCls}-label-2`]: this._labelNumber === 2,
      [`${this.prefixCls}-label-3`]: this._labelNumber === 3,
      [`${this.prefixCls}-label-4`]: this._labelNumber === 4,
      [`${this.prefixCls}-label-5`]: this._labelNumber === 5,
      [`${this.prefixCls}-label-6`]: this._labelNumber === 6,
      [`${this.prefixCls}-label-7`]: this._labelNumber === 7
    };
    this.controlCls = {
      [`${this.prefixCls}-control`]: true
    };
    this.clearCls = {
      [`${this.prefixCls}-clear-active`]: this._isClickingClear
    };
  }
  setCharacterLength() {
    this.characterLength = this.countSymbols(this._value);
    if (this._count > 0) {
      this.maxLength = this._count - this.characterLength + (this._value ? this._value.length : 0);
    }
  }
  inputChange(e) {
    this._value = e;
    this.textRef.nativeElement.value = this._value;
    this.setCharacterLength();
    this._onChange(this._value);
    this.onChange.emit(this._value);
  }
  inputFocus(value) {
    this._focus = true;
    this.setCls();
    if (value !== void 0) {
      this.onFocus.emit(value);
    }
  }
  inputBlur(value, event) {
    setTimeout(() => {
      this._focus = false;
      this.setCls();
      this.onBlur.emit(value);
      this._isClear = false;
    }, 100);
  }
  clearInput() {
    this._isClickingClear = true;
    this.setCls();
    setTimeout(() => {
      this._value = "";
      this.inputChange("");
      this.inputFocus(this._value);
      this._isClickingClear = false;
      this.setCls();
    }, 100);
  }
  errorClick(e) {
    if (this.onErrorClick) {
      this.onErrorClick.emit(e);
    }
  }
  reAlignHeight() {
    const textareaDom = this.textRef.nativeElement;
    textareaDom.style.height = "";
    textareaDom.style.height = `${textareaDom.scrollHeight}px`;
  }
  countSymbols(text = "") {
    const regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;
    return text.replace(regexAstralSymbols, "_").length;
  }
  writeValue(value) {
    if (typeof value === "undefined" || value === null) {
      this._value = "";
    } else {
      this._value = value;
    }
    this.setCharacterLength();
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
  }
  ngOnInit() {
    this.textRef.nativeElement.value = this._value;
    this.setCls();
    this.setCharacterLength();
  }
  ngAfterContentChecked() {
    if (this._autoHeight) {
      this.reAlignHeight();
    }
  }
};
_TextareaItemComponent.ɵfac = function TextareaItemComponent_Factory(t) {
  return new (t || _TextareaItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
_TextareaItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _TextareaItemComponent,
  selectors: [["TextareaItem"], ["nzm-textarea-item"]],
  viewQuery: function TextareaItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c022, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textRef = _t.first);
    }
  },
  hostVars: 12,
  hostBindings: function TextareaItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-textarea-item", ctx.clsItem)("am-textarea-disabled", ctx.clsDisabled)("am-textarea-error", ctx.clsError)("am-textarea-focus", ctx.clsFocus)("am-textarea-item-single-line", ctx.clsSingleLine)("am-textarea-has-count", ctx.clsHasCount);
    }
  },
  inputs: {
    value: "value",
    defaultValue: "defaultValue",
    placeholder: "placeholder",
    editable: "editable",
    disabled: "disabled",
    clear: "clear",
    rows: "rows",
    error: "error",
    labelNumber: "labelNumber",
    count: "count",
    prefixListCls: "prefixListCls",
    name: "name",
    autoHeight: "autoHeight",
    title: "title",
    focus: "focus",
    autoFocus: "autoFocus"
  },
  outputs: {
    onChange: "onChange",
    onBlur: "onBlur",
    onFocus: "onFocus",
    onErrorClick: "onErrorClick"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _TextareaItemComponent),
    multi: true
  }])],
  decls: 8,
  vars: 14,
  consts: [[3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "rows", "maxlength", "ngModel", "defaultValue", "placeholder", "disabled", "readOnly", "autofocus", "ngModelChange", "blur", "focus"], ["text", ""], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], [3, "ngClass", "click"], [3, "click"]],
  template: function TextareaItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TextareaItemComponent_div_0_Template, 2, 2, "div", 0)(1, TextareaItemComponent_div_1_Template, 2, 2, "div", 0);
      ɵɵelementStart(2, "div", 1)(3, "textarea", 2, 3);
      ɵɵlistener("ngModelChange", function TextareaItemComponent_Template_textarea_ngModelChange_3_listener($event) {
        return ctx.value = $event;
      })("ngModelChange", function TextareaItemComponent_Template_textarea_ngModelChange_3_listener($event) {
        return ctx.inputChange($event);
      })("blur", function TextareaItemComponent_Template_textarea_blur_3_listener($event) {
        return ctx.inputBlur(ctx.value, $event);
      })("focus", function TextareaItemComponent_Template_textarea_focus_3_listener() {
        return ctx.inputFocus(ctx.value);
      });
      ɵɵelementEnd()();
      ɵɵtemplate(5, TextareaItemComponent_div_5_Template, 1, 4, "div", 4)(6, TextareaItemComponent_div_6_Template, 1, 3, "div", 5)(7, TextareaItemComponent_span_7_Template, 4, 5, "span", 6);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.title && ctx.isTitleString);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.title && !ctx.isTitleString);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.controlCls);
      ɵɵadvance(1);
      ɵɵproperty("rows", ctx.rows)("maxlength", ctx.maxLength)("ngModel", ctx.value)("defaultValue", ctx.defaultValue)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("readOnly", !ctx.editable)("autofocus", ctx.autoFocus);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.clear && ctx.editable && !ctx.disabled && ctx.value && ctx.value.length > 0);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.error);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.hasCount);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel],
  encapsulation: 2
});
var TextareaItemComponent = _TextareaItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaItemComponent, [{
    type: Component,
    args: [{
      selector: "TextareaItem , nzm-textarea-item",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TextareaItemComponent),
        multi: true
      }],
      template: '<div *ngIf="title && isTitleString" [ngClass]="labelCls">{{ title }}</div>\n<div *ngIf="title && !isTitleString" [ngClass]="labelCls">\n  <ng-template [ngTemplateOutlet]="title"></ng-template>\n</div>\n<div [ngClass]="controlCls">\n  <textarea\n    #text\n    [rows]="rows"\n    [maxlength]="maxLength"\n    [(ngModel)]="value"\n    [defaultValue]="defaultValue"\n    [placeholder]="placeholder"\n    [disabled]="disabled"\n    [readOnly]="!editable"\n    [autofocus]="autoFocus"\n    (ngModelChange)="inputChange($event)"\n    (blur)="inputBlur(value, $event)"\n    (focus)="inputFocus(value)"\n  ></textarea>\n</div>\n<div\n  *ngIf="clear && editable && !disabled && (value && value.length > 0)"\n  class="{{ prefixCls }}-clear"\n  [ngClass]="clearCls"\n  (click)="clearInput()"\n></div>\n<div *ngIf="error" class="{{ prefixCls }}-error-extra" (click)="errorClick($event)"></div>\n<span *ngIf="hasCount" class="{{ prefixCls }}-count">\n  <span>{{ characterLength }}</span\n  >/{{ count }}\n</span>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    textRef: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }],
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    clear: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    error: [{
      type: Input
    }],
    labelNumber: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    prefixListCls: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    autoHeight: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    focus: [{
      type: Input
    }],
    autoFocus: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onErrorClick: [{
      type: Output
    }],
    clsItem: [{
      type: HostBinding,
      args: ["class.am-textarea-item"]
    }],
    clsDisabled: [{
      type: HostBinding,
      args: ["class.am-textarea-disabled"]
    }],
    clsError: [{
      type: HostBinding,
      args: ["class.am-textarea-error"]
    }],
    clsFocus: [{
      type: HostBinding,
      args: ["class.am-textarea-focus"]
    }],
    clsSingleLine: [{
      type: HostBinding,
      args: ["class.am-textarea-item-single-line"]
    }],
    clsHasCount: [{
      type: HostBinding,
      args: ["class.am-textarea-has-count"]
    }]
  });
})();
var _TextareaItemModule = class _TextareaItemModule {
};
_TextareaItemModule.ɵfac = function TextareaItemModule_Factory(t) {
  return new (t || _TextareaItemModule)();
};
_TextareaItemModule.ɵmod = ɵɵdefineNgModule({
  type: _TextareaItemModule,
  declarations: [TextareaItemComponent],
  imports: [CommonModule, FormsModule],
  exports: [TextareaItemComponent]
});
_TextareaItemModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule]
});
var TextareaItemModule = _TextareaItemModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaItemModule, [{
    type: NgModule,
    args: [{
      exports: [TextareaItemComponent],
      declarations: [TextareaItemComponent],
      imports: [CommonModule, FormsModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-tabs.mjs
var _c023 = ["content"];
function TabPaneComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c113 = ["*"];
var _c24 = ["tab-pane-body", ""];
function TabPaneBodyComponent_ng_container_0_ng_template_1_Template(rf, ctx) {
}
function TabPaneBodyComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabPaneBodyComponent_ng_container_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.content);
  }
}
var _c32 = ["TabTitle"];
var _c4 = ["TabsBarSwipe"];
function DefaultTabBarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-prevpage");
  }
}
function DefaultTabBarComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-nextpage");
  }
}
var _c5 = (a0) => ({
  "am-tabs-default-bar-animated": a0
});
var _c6 = (a0) => ({
  backgroundColor: a0
});
var _c7 = ["TabContent"];
var _c8 = ["DefaultTabBar"];
function TabsComponent_1_ng_template_0_Template(rf, ctx) {
}
function TabsComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabsComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.renderTabBar || _r5);
  }
}
function TabsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
  if (rf & 2) {
    const tabPane_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("content", tabPane_r7.content)("active", i_r8 === ctx_r2.selectedKey)("prerender", ctx_r2.prerenderingSiblingsNumber < 0 || ctx_r2.selectedKey - i_r8 <= ctx_r2.prerenderingSiblingsNumber && ctx_r2.selectedKey - i_r8 + ctx_r2.prerenderingSiblingsNumber >= 0);
  }
}
function TabsComponent_5_ng_template_0_Template(rf, ctx) {
}
function TabsComponent_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabsComponent_5_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.renderTabBar || _r5);
  }
}
function TabsComponent_ng_template_6_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tabPane_r12 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", tabPane_r12.title, " ");
  }
}
function TabsComponent_ng_template_6_div_2_ng_template_3_ng_template_0_Template(rf, ctx) {
}
function TabsComponent_ng_template_6_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabsComponent_ng_template_6_div_2_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const tabPane_r12 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", tabPane_r12.title);
  }
}
var _c9 = (a0, a1) => ({
  "am-tabs-default-bar-tab-active": a0,
  "am-tabs-default-bar-tab-disabled": a1
});
function TabsComponent_ng_template_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10, 11);
    ɵɵlistener("click", function TabsComponent_ng_template_6_div_2_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r22);
      const i_r13 = restoredCtx.index;
      const ctx_r21 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r21.clickTab(i_r13));
    });
    ɵɵtemplate(2, TabsComponent_ng_template_6_div_2_ng_container_2_Template, 2, 1, "ng-container", 12)(3, TabsComponent_ng_template_6_div_2_ng_template_3_Template, 1, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tabPane_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const _r17 = ɵɵreference(4);
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r11.prefixCls, "-default-bar-tab");
    ɵɵstyleProp("color", i_r13 === ctx_r11.selectedKey ? ctx_r11.tabBarActiveTextColor : ctx_r11.tabBarInactiveTextColor);
    ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c9, i_r13 === ctx_r11.selectedKey, tabPane_r12.disabled))("ngStyle", ctx_r11.tabBarTextStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", tabPane_r12.isTitleString)("ngIfElse", _r17);
  }
}
function TabsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "DefaultTabBar", 7, 8);
    ɵɵtemplate(2, TabsComponent_ng_template_6_div_2_Template, 5, 12, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("page", ctx_r4.page)("animated", ctx_r4.animated)("activeTab", ctx_r4.selectedKey)("tabTitleSize", ctx_r4.tabTitleSize)("tabBarPosition", ctx_r4.tabBarPosition)("tabBarUnderlineStyle", ctx_r4.tabBarUnderlineStyle)("tabBarBackgroundColor", ctx_r4.tabBarBackgroundColor);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.getCurrentTabPanes());
  }
}
var _c10 = (a0) => ({
  "am-tabs-content-wrap-animated": a0
});
var _c11 = (a0, a1) => ({
  transform: a0,
  webkitTransform: a1
});
var _TabPaneComponent = class _TabPaneComponent {
  get title() {
    return this._title;
  }
  set title(value) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }
  constructor() {
    this.isTitleString = true;
  }
};
_TabPaneComponent.ɵfac = function TabPaneComponent_Factory(t) {
  return new (t || _TabPaneComponent)();
};
_TabPaneComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabPaneComponent,
  selectors: [["TabPane"], ["nzm-tab-pane"]],
  viewQuery: function TabPaneComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c023, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    title: "title"
  },
  ngContentSelectors: _c113,
  decls: 2,
  vars: 0,
  consts: [["content", ""]],
  template: function TabPaneComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TabPaneComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  encapsulation: 2
});
var TabPaneComponent = _TabPaneComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPaneComponent, [{
    type: Component,
    args: [{
      selector: "TabPane, nzm-tab-pane",
      template: "<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
    }]
  }], () => [], {
    content: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    title: [{
      type: Input
    }]
  });
})();
var _TabPaneBodyComponent = class _TabPaneBodyComponent {
  get prerender() {
    return this._prerender;
  }
  set prerender(value) {
    this._prerender = value;
    if (value) {
      this.loaded = true;
    }
  }
  get wrapActive() {
    return this.active;
  }
  get wrapInactive() {
    return !this.active;
  }
  constructor() {
    this._prerender = false;
    this.active = false;
    this.loaded = false;
    this.paneWrap = true;
  }
  ngOnInit() {
  }
};
_TabPaneBodyComponent.ɵfac = function TabPaneBodyComponent_Factory(t) {
  return new (t || _TabPaneBodyComponent)();
};
_TabPaneBodyComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabPaneBodyComponent,
  selectors: [["", "tab-pane-body", ""]],
  hostVars: 6,
  hostBindings: function TabPaneBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-tabs-pane-wrap", ctx.paneWrap)("am-tabs-pane-wrap-active", ctx.wrapActive)("am-tabs-pane-wrap-inactive", ctx.wrapInactive);
    }
  },
  inputs: {
    active: "active",
    loaded: "loaded",
    content: "content",
    prerender: "prerender"
  },
  attrs: _c24,
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet"]],
  template: function TabPaneBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TabPaneBodyComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.loaded || ctx.prerender);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var TabPaneBodyComponent = _TabPaneBodyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabPaneBodyComponent, [{
    type: Component,
    args: [{
      selector: "[tab-pane-body]",
      encapsulation: ViewEncapsulation$1.None,
      template: '<ng-container *ngIf="loaded || prerender">\n  <ng-template [ngTemplateOutlet]="content"></ng-template>\n</ng-container>\n'
    }]
  }], () => [], {
    active: [{
      type: Input
    }],
    loaded: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    prerender: [{
      type: Input
    }],
    paneWrap: [{
      type: HostBinding,
      args: ["class.am-tabs-pane-wrap"]
    }],
    wrapActive: [{
      type: HostBinding,
      args: ["class.am-tabs-pane-wrap-active"]
    }],
    wrapInactive: [{
      type: HostBinding,
      args: ["class.am-tabs-pane-wrap-inactive"]
    }]
  });
})();
var _DefaultTabBarComponent = class _DefaultTabBarComponent {
  get activeTab() {
    return this.selectedKey;
  }
  set activeTab(index) {
    if (index !== this.selectedKey) {
      this.selectedKey = index;
      if (this.tabTitles && this.tabTitles.length > 0) {
        this.setTabBarStyleCenter();
        this.setInkBarStatus(this.selectedKey);
      }
    }
  }
  constructor(_renderer, _ref) {
    this._renderer = _renderer;
    this._ref = _ref;
    this.prefixCls = "am-tabs-default-bar";
    this.inkBarStyle = {};
    this.tabsBarStyle = {};
    this.showPrev = false;
    this.showNext = false;
    this.selectedKey = 0;
    this.inkBarOffSet = 0;
    this.inkBarLength = 0;
    this.tabBarNavSwipedPosition = 0;
    this.tabBarNavSwipingPosition = 0;
    this._startPosition = 0;
    this.page = 5;
    this.animated = true;
    this.tabBarBackgroundColor = "#FFF";
    this.tabTitleSize = 0;
    this.tabBarPosition = "top";
    this.tabBarWrap = true;
    this.getTabSize = (page, tabLength) => 100 / Math.min(page, tabLength);
  }
  onTouchStart(event) {
    if (this.tabTitleSize > 0 && this.tabTitleSize * this.tabTitles.length > ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition ? this.tabsBarSwipe.nativeElement.offsetWidth : this.tabsBarSwipe.nativeElement.offsetHeight) || this.tabTitleSize <= 0 && this.page < this.tabTitles.length) {
      if ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition) {
        this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      } else {
        this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
      }
    }
  }
  onTouchMove(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.tabTitleSize > 0 && this.tabTitleSize * this.tabTitles.length > ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition ? this.tabsBarSwipe.nativeElement.offsetWidth : this.tabsBarSwipe.nativeElement.offsetHeight) || this.tabTitleSize <= 0 && this.page < this.tabTitles.length) {
      if ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition) {
        this.setTabBarNavSwipingPosition(event.changedTouches[0].clientX - this._startPosition, this.tabTitles.first.nativeElement.offsetWidth, this.tabsBarSwipe.nativeElement.offsetWidth);
        this.tabsBarStyle = {
          transition: "0ms",
          transform: "translate3d(" + this.tabBarNavSwipingPosition + "px, 0px, 0px)",
          webkitTransform: "translate3d(" + this.tabBarNavSwipingPosition + "px, 0px, 0px)"
        };
      } else {
        this.setTabBarNavSwipingPosition(event.changedTouches[0].clientY - this._startPosition, this.tabTitles.first.nativeElement.offsetHeight, this.tabsBarSwipe.nativeElement.offsetHeight);
        this.tabsBarStyle = {
          transition: "0ms",
          transform: "translate3d(0, " + this.tabBarNavSwipingPosition + "px, 0px)",
          webkitTransform: "translate3d(0, " + this.tabBarNavSwipingPosition + "px, 0px)"
        };
      }
    }
  }
  onTouchEnd() {
    if (this.tabTitleSize > 0 && this.tabTitleSize * this.tabTitles.length > ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition ? this.tabsBarSwipe.nativeElement.offsetWidth : this.tabsBarSwipe.nativeElement.offsetHeight) || this.tabTitleSize <= 0 && this.page < this.tabTitles.length) {
      this.tabBarNavSwipedPosition = this.tabBarNavSwipingPosition;
    }
  }
  onContentChange() {
    this.setTabsStyle();
    this.setInkBarStatus(this.selectedKey);
  }
  ngAfterContentInit() {
    this.setTabsStyle();
    this.setTabBarStyleCenter();
    this.setInkBarStatus(this.selectedKey);
  }
  setTabsStyle() {
    if (this.tabTitles && this.tabTitles.length > 0) {
      if ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition) {
        this.tabTitles.forEach((tabTitle) => {
          this._renderer.setStyle(tabTitle.nativeElement, "width", this.tabTitleSize > 0 ? this.tabTitleSize + "px" : this.getTabSize(this.page, this.tabTitles.length) + "%");
        });
      } else {
        this.tabTitles.forEach((tabTitle) => {
          this._renderer.setStyle(tabTitle.nativeElement, "height", this.tabTitleSize > 0 ? this.tabTitleSize + "px" : this.getTabSize(this.page, this.tabTitles.length) + "%");
        });
      }
    }
  }
  setTabBarStyleCenter() {
    if ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition) {
      this.setTabBarNavSwipedPosition(this.tabTitleSize > 0 ? this.tabTitleSize : this.tabsBarSwipe.nativeElement.offsetWidth / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetWidth);
      this.tabsBarStyle = {
        transform: "translate3d(" + this.tabBarNavSwipedPosition + "px, 0px, 0px)",
        webkitTransform: "translate3d(" + this.tabBarNavSwipedPosition + ", 0px, 0px)"
      };
    } else {
      this.setTabBarNavSwipedPosition(this.tabTitleSize > 0 ? this.tabTitleSize : this.tabsBarSwipe.nativeElement.offsetHeight / Math.min(this.tabTitles.length, this.page), this.tabsBarSwipe.nativeElement.offsetHeight);
      this.tabsBarStyle = {
        transform: "translate3d(0, " + this.tabBarNavSwipedPosition + "px, 0px)",
        webkitTransform: "translate3d(0, " + this.tabBarNavSwipedPosition + "px, 0px)"
      };
    }
  }
  setInkBarStatus(key) {
    if (this.tabTitles && this.tabTitles.length > 0) {
      if ("top" === this.tabBarPosition || "bottom" === this.tabBarPosition) {
        this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetLeft;
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.width;
        this.inkBarStyle = {
          width: this.inkBarLength,
          left: this.tabTitleSize > 0 ? this.selectedKey * this.tabTitleSize + "px" : this.selectedKey * 100 / Math.min(this.tabTitles.length, this.page) + "%"
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      } else {
        this.inkBarOffSet = this.tabTitles.toArray()[key].nativeElement.offsetTop;
        this.inkBarLength = this.tabTitles.toArray()[key].nativeElement.style.height;
        this.inkBarStyle = {
          height: this.inkBarLength,
          top: this.tabTitleSize > 0 ? this.selectedKey * this.tabTitleSize + "px" : this.selectedKey * 100 / Math.min(this.tabTitles.length, this.page) + "%"
        };
        Object.assign(this.inkBarStyle, this.tabBarUnderlineStyle);
      }
      this._ref.detectChanges();
    }
  }
  setTabBarNavSwipingPosition(swipingDistance, swipingItemLength, viewportLength) {
    if (this.tabBarNavSwipedPosition + swipingDistance > 0) {
      this.tabBarNavSwipingPosition = 0;
    } else if (this.tabBarNavSwipedPosition + swipingDistance < viewportLength - swipingItemLength * this.tabTitles.length) {
      this.tabBarNavSwipingPosition = viewportLength - swipingItemLength * this.tabTitles.length;
      this.showNext = false;
    } else {
      this.tabBarNavSwipingPosition = this.tabBarNavSwipedPosition + swipingDistance;
      this.showNext = true;
    }
    if (this.tabBarNavSwipingPosition < 0) {
      this.showPrev = true;
    } else {
      this.showPrev = false;
    }
  }
  setTabBarNavSwipedPosition(swipingItemLength, viewportLength) {
    if (this.selectedKey * swipingItemLength + this.tabBarNavSwipedPosition <= 0) {
      if (0 === this.selectedKey) {
        this.tabBarNavSwipedPosition = 0;
      } else {
        this.tabBarNavSwipedPosition = (1 - this.selectedKey) * swipingItemLength;
      }
    } else if ((this.selectedKey + 1) * swipingItemLength >= viewportLength - this.tabBarNavSwipedPosition) {
      if (this.tabTitles.length - 1 === this.selectedKey) {
        this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 1) * swipingItemLength;
      } else {
        this.tabBarNavSwipedPosition = (viewportLength / swipingItemLength - this.selectedKey - 2) * swipingItemLength;
      }
    }
    if (this.tabBarNavSwipedPosition < 0) {
      this.showPrev = true;
    } else {
      this.showPrev = false;
    }
    if (this.tabBarNavSwipedPosition + swipingItemLength * this.tabTitles.length - viewportLength > 0) {
      this.showNext = true;
    } else {
      this.showNext = false;
    }
  }
};
_DefaultTabBarComponent.ɵfac = function DefaultTabBarComponent_Factory(t) {
  return new (t || _DefaultTabBarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
_DefaultTabBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _DefaultTabBarComponent,
  selectors: [["DefaultTabBar"], ["nzm-default-tab-bar"]],
  contentQueries: function DefaultTabBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c32, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabTitles = _t);
    }
  },
  viewQuery: function DefaultTabBarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabsBarSwipe = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function DefaultTabBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-tabs-tab-bar-wrap", ctx.tabBarWrap);
    }
  },
  inputs: {
    page: "page",
    animated: "animated",
    tabBarUnderlineStyle: "tabBarUnderlineStyle",
    tabBarBackgroundColor: "tabBarBackgroundColor",
    tabTitleSize: "tabTitleSize",
    tabBarPosition: "tabBarPosition",
    activeTab: "activeTab"
  },
  ngContentSelectors: _c113,
  decls: 7,
  vars: 21,
  consts: [[3, "ngClass", "ngStyle"], [3, "class", 4, "ngIf"], [3, "ngStyle", "touchstart", "touchmove", "touchend", "cdkObserveContent"], ["TabsBarSwipe", ""], [3, "ngStyle"]],
  template: function DefaultTabBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DefaultTabBarComponent_div_1_Template, 1, 3, "div", 1);
      ɵɵelementStart(2, "div", 2, 3);
      ɵɵlistener("touchstart", function DefaultTabBarComponent_Template_div_touchstart_2_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function DefaultTabBarComponent_Template_div_touchmove_2_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function DefaultTabBarComponent_Template_div_touchend_2_listener() {
        return ctx.onTouchEnd();
      })("cdkObserveContent", function DefaultTabBarComponent_Template_div_cdkObserveContent_2_listener() {
        return ctx.onContentChange();
      });
      ɵɵprojection(4);
      ɵɵelement(5, "div", 4);
      ɵɵelementEnd();
      ɵɵtemplate(6, DefaultTabBarComponent_div_6_Template, 1, 3, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate3("", ctx.prefixCls, " ", ctx.prefixCls, "-", ctx.tabBarPosition, "");
      ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c5, ctx.animated))("ngStyle", ɵɵpureFunction1(19, _c6, ctx.tabBarBackgroundColor || "#FFF"));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showPrev);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
      ɵɵproperty("ngStyle", ctx.tabsBarStyle);
      ɵɵadvance(3);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-underline");
      ɵɵproperty("ngStyle", ctx.inkBarStyle);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showNext);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle, CdkObserveContent],
  encapsulation: 2
});
var DefaultTabBarComponent = _DefaultTabBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultTabBarComponent, [{
    type: Component,
    args: [{
      selector: "DefaultTabBar, nzm-default-tab-bar",
      template: `<div
  class="{{ prefixCls }} {{ prefixCls }}-{{ tabBarPosition }}"
  [ngClass]="{ 'am-tabs-default-bar-animated': animated }"
  [ngStyle]="{ backgroundColor: tabBarBackgroundColor || '#FFF' }"
>
  <div *ngIf="showPrev" class="{{ prefixCls }}-prevpage"></div>
  <div
    #TabsBarSwipe
    class="{{ prefixCls }}-content"
    [ngStyle]="tabsBarStyle"
    (touchstart)="onTouchStart($event)"
    (touchmove)="onTouchMove($event)"
    (touchend)="onTouchEnd()"
    (cdkObserveContent)="onContentChange()"
  >
    <ng-content></ng-content>
    <div class="{{ prefixCls }}-underline" [ngStyle]="inkBarStyle"></div>
  </div>
  <div *ngIf="showNext" class="{{ prefixCls }}-nextpage"></div>
</div>
`
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    tabTitles: [{
      type: ContentChildren,
      args: ["TabTitle"]
    }],
    tabsBarSwipe: [{
      type: ViewChild,
      args: ["TabsBarSwipe", {
        static: true
      }]
    }],
    page: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    tabBarUnderlineStyle: [{
      type: Input
    }],
    tabBarBackgroundColor: [{
      type: Input
    }],
    tabTitleSize: [{
      type: Input
    }],
    tabBarPosition: [{
      type: Input
    }],
    activeTab: [{
      type: Input
    }],
    tabBarWrap: [{
      type: HostBinding,
      args: ["class.am-tabs-tab-bar-wrap"]
    }]
  });
})();
var _TabsComponent = class _TabsComponent {
  get activeTab() {
    return this.selectedKey;
  }
  set activeTab(value) {
    this.keyToSelect = value;
  }
  get tabBarPosition() {
    return this._tabBarPosition;
  }
  set tabBarPosition(position) {
    this._tabBarPosition = position;
    switch (position) {
      case "top":
        this.amTabsTop = true;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        break;
      case "left":
        this.amTabsTop = false;
        this.amTabsLeft = true;
        this.amTabsRight = false;
        this.amTabsBottom = false;
        break;
      case "bottom":
        this.amTabsTop = false;
        this.amTabsLeft = false;
        this.amTabsRight = false;
        this.amTabsBottom = true;
        break;
      case "right":
        this.amTabsTop = false;
        this.amTabsLeft = false;
        this.amTabsRight = true;
        this.amTabsBottom = false;
        break;
      default:
        break;
    }
  }
  get tabDirection() {
    return this._tabDirection;
  }
  set tabDirection(direction) {
    this._tabDirection = direction;
    switch (direction) {
      case "horizontal":
        this.amTabsHorizontal = true;
        this.amTabsVertical = false;
        break;
      case "vertical":
        this.amTabsHorizontal = false;
        this.amTabsVertical = true;
        break;
      default:
        break;
    }
  }
  constructor() {
    this.prefixCls = "am-tabs";
    this.selectedKey = 0;
    this.keyToSelect = 0;
    this.paneMoveStyle = "translate3d(0, 0, 0)";
    this._startTime = 0;
    this._startPosition = 0;
    this._velocityThreshold = 0.3;
    this._tabDirection = "horizontal";
    this._tabBarPosition = "top";
    this.page = 5;
    this.swipeable = true;
    this.useOnPan = true;
    this.animated = true;
    this.distanceToChangeTab = 0.3;
    this.tabTitleSize = 0;
    this.tabBarActiveTextColor = "";
    this.tabBarInactiveTextColor = "";
    this.renderTabBar = null;
    this.tabBarBackgroundColor = "#FFF";
    this.prerenderingSiblingsNumber = -1;
    this.tabBarTextStyle = {};
    this.tabPanesContent = null;
    this.onChange = new EventEmitter();
    this.onTabClick = new EventEmitter();
    this.amTabs = true;
    this.amTabsTop = true;
    this.amTabsLeft = false;
    this.amTabsRight = false;
    this.amTabsBottom = false;
    this.amTabsVertical = false;
    this.amTabsHorizontal = true;
  }
  clickTab(index) {
    if (this.selectedKey !== index) {
      this.keyToSelect = index;
      this.onTabClick.emit({
        index: this.keyToSelect
      });
    }
  }
  getCurrentTabPanes() {
    return this.tabPanesContent || this.tabPanes;
  }
  onTouchStart(event) {
    this._startTime = event.timeStamp;
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ("horizontal" === this._tabDirection) {
        this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      } else if ("vertical" === this._tabDirection) {
        this._startPosition = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientY;
      }
    }
  }
  onTouchMove(event) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ("horizontal" === this._tabDirection) {
        const distance = event.changedTouches[0].clientX - this._startPosition;
        if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
          return;
        } else if (distance > 0 && this.activeTab === 0) {
          return;
        }
        if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold && this.useOnPan && this.swipeable && this.animated) {
          this.paneMoveStyle = "translate3d(calc(-" + this.selectedKey * 100 + "% + " + distance + "px), 0, 0 )";
        }
      } else if ("vertical" === this._tabDirection) {
        const distance = event.changedTouches[0].clientY - this._startPosition;
        if (distance < 0 && this.activeTab === this.getCurrentTabPanes().length - 1) {
          return;
        } else if (distance > 0 && this.activeTab === 0) {
          return;
        }
        if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold && this.useOnPan && this.swipeable && this.animated) {
          this.paneMoveStyle = "translate3d(0, calc(-" + this.selectedKey * 100 + "% + " + distance + "px, 0 )";
        }
      }
    }
  }
  onTouchEnd(event) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      if ("horizontal" === this._tabDirection) {
        const distance = event.changedTouches[0].clientX - this._startPosition;
        const distanceToChangeTabPx = this.tabContent.nativeElement.offsetWidth * this.distanceToChangeTab;
        if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold && this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx || this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold && this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2) {
          if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
            this.keyToSelect++;
          } else if (distance > 0 && this.activeTab > 0) {
            this.keyToSelect--;
          }
        }
        this.paneMoveStyle = "translate3d(-" + this.selectedKey * 100 + "%, 0, 0 )";
      } else if ("vertical" === this._tabDirection) {
        const distance = event.changedTouches[0].clientY - this._startPosition;
        const distanceToChangeTabPx = this.tabContent.nativeElement.offsetHeight * this.distanceToChangeTab;
        if (this.getVelocity(distance, event.timeStamp - this._startTime) <= this._velocityThreshold && this.useOnPan && this.swipeable && Math.abs(distance) > distanceToChangeTabPx || this.getVelocity(distance, event.timeStamp - this._startTime) > this._velocityThreshold && this.swipeable && Math.abs(distance) > distanceToChangeTabPx / 2) {
          if (distance < 0 && this.activeTab < this.getCurrentTabPanes().length - 1) {
            this.keyToSelect++;
          } else if (distance > 0 && this.activeTab > 0) {
            this.keyToSelect--;
          }
        }
        this.paneMoveStyle = "translate3d(0, -" + this.selectedKey * 100 + "%, 0 )";
      }
    }
  }
  ngAfterContentInit() {
    this.selectTabPane(this.keyToSelect);
    this.selectedKey = this.keyToSelect;
  }
  ngDoCheck() {
    if (this.keyToSelect !== this.selectedKey && this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      this.selectTabPane(this.keyToSelect);
      this.selectedKey = this.keyToSelect;
      this.onChange.emit({
        index: this.selectedKey
      });
    }
  }
  selectTabPane(index) {
    if (this.getCurrentTabPanes() && this.getCurrentTabPanes().length > 0) {
      const actualKeyToSelect = Math.min(this.getCurrentTabPanes().length - 1, Math.max(index || 0, 0));
      if ("horizontal" === this._tabDirection) {
        this.paneMoveStyle = "translate3d(-" + actualKeyToSelect * 100 + "%, 0, 0 )";
      } else if ("vertical" === this._tabDirection) {
        this.paneMoveStyle = "translate3d(0, -" + actualKeyToSelect * 100 + "%, 0 )";
      }
    }
  }
  getVelocity(deltaDistance, deltaTime) {
    return Math.abs(deltaDistance / deltaTime);
  }
};
_TabsComponent.ɵfac = function TabsComponent_Factory(t) {
  return new (t || _TabsComponent)();
};
_TabsComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabsComponent,
  selectors: [["Tabs"], ["nzm-tabs"]],
  contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabPaneComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabPanes = _t);
    }
  },
  viewQuery: function TabsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c7, 7);
      ɵɵviewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultTabBar = _t.first);
    }
  },
  hostVars: 14,
  hostBindings: function TabsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-tabs", ctx.amTabs)("am-tabs-top", ctx.amTabsTop)("am-tabs-left", ctx.amTabsLeft)("am-tabs-right", ctx.amTabsRight)("am-tabs-bottom", ctx.amTabsBottom)("am-tabs-vertical", ctx.amTabsVertical)("am-tabs-horizontal", ctx.amTabsHorizontal);
    }
  },
  inputs: {
    page: "page",
    swipeable: "swipeable",
    useOnPan: "useOnPan",
    animated: "animated",
    tabBarUnderlineStyle: "tabBarUnderlineStyle",
    distanceToChangeTab: "distanceToChangeTab",
    tabTitleSize: "tabTitleSize",
    tabBarActiveTextColor: "tabBarActiveTextColor",
    tabBarInactiveTextColor: "tabBarInactiveTextColor",
    renderTabBar: "renderTabBar",
    tabBarBackgroundColor: "tabBarBackgroundColor",
    prerenderingSiblingsNumber: "prerenderingSiblingsNumber",
    tabBarTextStyle: "tabBarTextStyle",
    tabPanesContent: "tabPanesContent",
    activeTab: "activeTab",
    tabBarPosition: "tabBarPosition",
    tabDirection: "tabDirection"
  },
  outputs: {
    onChange: "onChange",
    onTabClick: "onTabClick"
  },
  decls: 8,
  vars: 13,
  consts: [[4, "ngIf"], [3, "ngClass", "ngStyle", "touchstart", "touchmove", "touchend"], ["TabContent", ""], ["tab-pane-body", "", 3, "content", "active", "prerender", 4, "ngFor", "ngForOf"], ["renderDefaultTabBar", ""], [3, "ngTemplateOutlet"], ["tab-pane-body", "", 3, "content", "active", "prerender"], [3, "page", "animated", "activeTab", "tabTitleSize", "tabBarPosition", "tabBarUnderlineStyle", "tabBarBackgroundColor"], ["DefaultTabBar", ""], [3, "class", "ngClass", "ngStyle", "color", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "click"], ["TabTitle", ""], [4, "ngIf", "ngIfElse"], ["titleTemplate", ""]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵtemplate(1, TabsComponent_1_Template, 1, 1, null, 0);
      ɵɵelementStart(2, "div", 1, 2);
      ɵɵlistener("touchstart", function TabsComponent_Template_div_touchstart_2_listener($event) {
        return ctx.onTouchStart($event);
      })("touchmove", function TabsComponent_Template_div_touchmove_2_listener($event) {
        return ctx.onTouchMove($event);
      })("touchend", function TabsComponent_Template_div_touchend_2_listener($event) {
        return ctx.onTouchEnd($event);
      });
      ɵɵtemplate(4, TabsComponent_div_4_Template, 1, 3, "div", 3);
      ɵɵelementEnd();
      ɵɵtemplate(5, TabsComponent_5_Template, 1, 1, null, 0);
      ɵɵelementContainerEnd();
      ɵɵtemplate(6, TabsComponent_ng_template_6_Template, 3, 8, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngIf", "top" === ctx.tabBarPosition || "left" === ctx.tabBarPosition);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content-wrap");
      ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c10, ctx.animated))("ngStyle", ɵɵpureFunction2(10, _c11, ctx.paneMoveStyle, ctx.paneMoveStyle));
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.getCurrentTabPanes());
      ɵɵadvance(1);
      ɵɵproperty("ngIf", "bottom" === ctx.tabBarPosition || "right" === ctx.tabBarPosition);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, TabPaneBodyComponent, DefaultTabBarComponent],
  encapsulation: 2
});
var TabsComponent = _TabsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      selector: "Tabs, nzm-tabs",
      encapsulation: ViewEncapsulation$1.None,
      template: `<ng-container>
  <ng-template
    *ngIf="'top' === tabBarPosition || 'left' === tabBarPosition"
    [ngTemplateOutlet]="renderTabBar || renderDefaultTabBar"
  >
  </ng-template>
  <div
    #TabContent
    class="{{ prefixCls }}-content-wrap"
    [ngClass]="{ 'am-tabs-content-wrap-animated': animated }"
    [ngStyle]="{ transform: paneMoveStyle, webkitTransform: paneMoveStyle }"
    (touchstart)="onTouchStart($event)"
    (touchmove)="onTouchMove($event)"
    (touchend)="onTouchEnd($event)"
  >
    <div
      tab-pane-body
      *ngFor="let tabPane of getCurrentTabPanes(); let i = index"
      [content]="tabPane.content"
      [active]="i === selectedKey"
      [prerender]="
        prerenderingSiblingsNumber < 0 ||
        (selectedKey - i <= prerenderingSiblingsNumber && selectedKey - i + prerenderingSiblingsNumber >= 0)
      "
    ></div>
  </div>
  <ng-template
    *ngIf="'bottom' === tabBarPosition || 'right' === tabBarPosition"
    [ngTemplateOutlet]="renderTabBar || renderDefaultTabBar"
  ></ng-template>
</ng-container>

<ng-template #renderDefaultTabBar>
  <DefaultTabBar
    #DefaultTabBar
    [page]="page"
    [animated]="animated"
    [activeTab]="selectedKey"
    [tabTitleSize]="tabTitleSize"
    [tabBarPosition]="tabBarPosition"
    [tabBarUnderlineStyle]="tabBarUnderlineStyle"
    [tabBarBackgroundColor]="tabBarBackgroundColor"
  >
    <div
      #TabTitle
      *ngFor="let tabPane of getCurrentTabPanes(); let i = index"
      class="{{ prefixCls }}-default-bar-tab"
      [ngClass]="{
        'am-tabs-default-bar-tab-active': i === selectedKey,
        'am-tabs-default-bar-tab-disabled': tabPane.disabled
      }"
      [ngStyle]="tabBarTextStyle"
      [style.color]="i === selectedKey ? tabBarActiveTextColor : tabBarInactiveTextColor"
      (click)="clickTab(i)"
    >
      <ng-container *ngIf="tabPane.isTitleString; else titleTemplate">
        {{ tabPane.title }}
      </ng-container>
      <ng-template #titleTemplate>
        <ng-template [ngTemplateOutlet]="tabPane.title"></ng-template>
      </ng-template>
    </div>
  </DefaultTabBar>
</ng-template>
`
    }]
  }], () => [], {
    tabPanes: [{
      type: ContentChildren,
      args: [TabPaneComponent, {
        descendants: false
      }]
    }],
    tabContent: [{
      type: ViewChild,
      args: ["TabContent", {
        static: true
      }]
    }],
    defaultTabBar: [{
      type: ViewChild,
      args: ["DefaultTabBar"]
    }],
    page: [{
      type: Input
    }],
    swipeable: [{
      type: Input
    }],
    useOnPan: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    tabBarUnderlineStyle: [{
      type: Input
    }],
    distanceToChangeTab: [{
      type: Input
    }],
    tabTitleSize: [{
      type: Input
    }],
    tabBarActiveTextColor: [{
      type: Input
    }],
    tabBarInactiveTextColor: [{
      type: Input
    }],
    renderTabBar: [{
      type: Input
    }],
    tabBarBackgroundColor: [{
      type: Input
    }],
    prerenderingSiblingsNumber: [{
      type: Input
    }],
    tabBarTextStyle: [{
      type: Input
    }],
    tabPanesContent: [{
      type: Input
    }],
    activeTab: [{
      type: Input
    }],
    tabBarPosition: [{
      type: Input
    }],
    tabDirection: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onTabClick: [{
      type: Output
    }],
    amTabs: [{
      type: HostBinding,
      args: ["class.am-tabs"]
    }],
    amTabsTop: [{
      type: HostBinding,
      args: ["class.am-tabs-top"]
    }],
    amTabsLeft: [{
      type: HostBinding,
      args: ["class.am-tabs-left"]
    }],
    amTabsRight: [{
      type: HostBinding,
      args: ["class.am-tabs-right"]
    }],
    amTabsBottom: [{
      type: HostBinding,
      args: ["class.am-tabs-bottom"]
    }],
    amTabsVertical: [{
      type: HostBinding,
      args: ["class.am-tabs-vertical"]
    }],
    amTabsHorizontal: [{
      type: HostBinding,
      args: ["class.am-tabs-horizontal"]
    }]
  });
})();
var _TabsModule = class _TabsModule {
};
_TabsModule.ɵfac = function TabsModule_Factory(t) {
  return new (t || _TabsModule)();
};
_TabsModule.ɵmod = ɵɵdefineNgModule({
  type: _TabsModule,
  declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
  imports: [CommonModule, ObserversModule],
  exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent]
});
_TabsModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, ObserversModule]
});
var TabsModule = _TabsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ObserversModule],
      declarations: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
      exports: [TabPaneComponent, TabsComponent, TabPaneBodyComponent, DefaultTabBarComponent],
      providers: []
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-tab-bar.mjs
var _c024 = ["tabBarTab"];
function TabBarItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function TabBarItemComponent_ng_template_2_Badge_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabBarItemComponent_ng_template_2_Badge_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Badge", 7);
    ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_1_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    const _r5 = ɵɵreference(5);
    const _r7 = ɵɵreference(7);
    ɵɵpropertyInterpolate1("className", "", ctx_r8.prefixCls, "-badge tab-badge");
    ɵɵproperty("text", ctx_r8.badge);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.isTemplateRef(ctx_r8.selected ? ctx_r8.selectedIcon : ctx_r8.icon))("ngIfThen", _r5)("ngIfElse", _r7);
  }
}
function TabBarItemComponent_ng_template_2_Badge_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabBarItemComponent_ng_template_2_Badge_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Badge", 9);
    ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    const _r5 = ɵɵreference(5);
    const _r7 = ɵɵreference(7);
    ɵɵpropertyInterpolate1("className", "", ctx_r9.prefixCls, "-badge tab-badge");
    ɵɵproperty("dot", ctx_r9.dot);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.isTemplateRef(ctx_r9.selected ? ctx_r9.selectedIcon : ctx_r9.icon))("ngIfThen", _r5)("ngIfElse", _r7);
  }
}
function TabBarItemComponent_ng_template_2_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TabBarItemComponent_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TabBarItemComponent_ng_template_2_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    const _r5 = ɵɵreference(5);
    const _r7 = ɵɵreference(7);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.isTemplateRef(ctx_r10.selected ? ctx_r10.selectedIcon : ctx_r10.icon))("ngIfThen", _r5)("ngIfElse", _r7);
  }
}
function TabBarItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TabBarItemComponent_ng_template_2_Badge_1_Template, 2, 5, "Badge", 4)(2, TabBarItemComponent_ng_template_2_Badge_2_Template, 2, 5, "Badge", 5)(3, TabBarItemComponent_ng_template_2_ng_container_3_Template, 2, 3, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-icon");
    ɵɵstyleProp("color", ctx_r2.selected ? ctx_r2.tintColor : ctx_r2.unselectedTintColor);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.badge);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.dot);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.badge && !ctx_r2.dot);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-title");
    ɵɵstyleProp("color", ctx_r2.selected ? ctx_r2.tintColor : ctx_r2.unselectedTintColor);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r2.title, " ");
  }
}
function TabBarItemComponent_ng_template_4_ng_template_0_Template(rf, ctx) {
}
function TabBarItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TabBarItemComponent_ng_template_4_ng_template_0_Template, 0, 0, "ng-template", 10);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.selected ? ctx_r4.selectedIcon : ctx_r4.icon);
  }
}
function TabBarItemComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 11);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵpropertyInterpolate("src", ctx_r6.selected ? ctx_r6.selectedIcon : ctx_r6.icon, ɵɵsanitizeUrl);
    ɵɵpropertyInterpolate("alt", ctx_r6.title);
  }
}
var _c114 = ["*"];
function TabBarComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("click", function TabBarComponent_ng_template_1_div_2_Template_div_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const i_r4 = restoredCtx.index;
      const tabBarItem_r3 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.tabBarTabOnPress({
        index: i_r4,
        key: tabBarItem_r3.key,
        title: tabBarItem_r3.title
      }));
    });
    ɵɵelementContainer(1, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tabBarItem_r3 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", tabBarItem_r3.tabBarTab);
  }
}
var _c25 = (a0, a1) => ({
  "am-tab-bar-bar-hidden-top": a0,
  "am-tab-bar-bar-hidden-bottom": a1
});
function TabBarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵtemplate(2, TabBarComponent_ng_template_1_div_2_Template, 2, 1, "div", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-bar");
    ɵɵstyleProp("background-color", ctx_r0.barTintColor);
    ɵɵproperty("ngClass", ɵɵpureFunction2(7, _c25, "top" === ctx_r0.tabBarPosition && ctx_r0.hidden, "bottom" === ctx_r0.tabBarPosition && ctx_r0.hidden));
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.tabBarItems);
  }
}
var _TabBarItemComponent = class _TabBarItemComponent extends TabPaneComponent {
  constructor() {
    super();
    this.prefixCls = "am-tab-bar-tab";
    this.selected = false;
    this.tintColor = "#108ee9";
    this.unselectedTintColor = "#888";
    this.key = "";
    this.dot = false;
    this.badge = null;
    this.icon = null;
    this.selectedIcon = null;
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
};
_TabBarItemComponent.ɵfac = function TabBarItemComponent_Factory(t) {
  return new (t || _TabBarItemComponent)();
};
_TabBarItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabBarItemComponent,
  selectors: [["TabBarItem"], ["nzm-tab-bar-item"]],
  viewQuery: function TabBarItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c024, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBarTab = _t.first);
    }
  },
  inputs: {
    key: "key",
    dot: "dot",
    badge: "badge",
    icon: "icon",
    selectedIcon: "selectedIcon"
  },
  features: [ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c114,
  decls: 8,
  vars: 0,
  consts: [["content", ""], ["tabBarTab", ""], ["domTemplate", ""], ["imgTemplate", ""], [3, "className", "text", 4, "ngIf"], [3, "className", "dot", 4, "ngIf"], [4, "ngIf"], [3, "className", "text"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "className", "dot"], [3, "ngTemplateOutlet"], [3, "src", "alt"]],
  template: function TabBarItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TabBarItemComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, TabBarItemComponent_ng_template_2_Template, 6, 14, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, TabBarItemComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, TabBarItemComponent_ng_template_6_Template, 1, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, BadgeComponent],
  encapsulation: 2
});
var TabBarItemComponent = _TabBarItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabBarItemComponent, [{
    type: Component,
    args: [{
      selector: "TabBarItem, nzm-tab-bar-item",
      template: '<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n\n<ng-template #tabBarTab>\n  <div class="{{ prefixCls }}-icon" [style.color]="selected ? tintColor : unselectedTintColor">\n    <Badge *ngIf="badge" className="{{ prefixCls }}-badge tab-badge" [text]="badge">\n      <ng-container *ngIf="isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate">\n      </ng-container>\n    </Badge>\n    <Badge className="{{ prefixCls }}-badge tab-badge" [dot]="dot" *ngIf="dot">\n      <ng-container *ngIf="isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate">\n      </ng-container>\n    </Badge>\n    <ng-container *ngIf="!badge && !dot">\n      <ng-container *ngIf="isTemplateRef(selected ? selectedIcon : icon); then domTemplate; else imgTemplate">\n      </ng-container>\n    </ng-container>\n  </div>\n  <p class="{{ prefixCls }}-title" [style.color]="selected ? tintColor : unselectedTintColor">\n    {{ title }}\n  </p>\n</ng-template>\n\n<ng-template #domTemplate>\n  <ng-template [ngTemplateOutlet]="selected ? selectedIcon : icon"></ng-template>\n</ng-template>\n\n<ng-template #imgTemplate>\n  <img src="{{ selected ? selectedIcon : icon }}" alt="{{ title }}" />\n</ng-template>\n'
    }]
  }], () => [], {
    tabBarTab: [{
      type: ViewChild,
      args: ["tabBarTab", {
        static: true
      }]
    }],
    key: [{
      type: Input
    }],
    dot: [{
      type: Input
    }],
    badge: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    selectedIcon: [{
      type: Input
    }]
  });
})();
var _TabBarComponent = class _TabBarComponent {
  get activeTab() {
    return this._activeTab;
  }
  set activeTab(tab) {
    this._activeTab = tab;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.selectTabBarItem(tab);
    }
  }
  get tintColor() {
    return this._tintColor;
  }
  set tintColor(color) {
    this._tintColor = color;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem) => {
        tabBarItem.tintColor = this._tintColor;
      });
    }
  }
  get unselectedTintColor() {
    return this._unselectedTintColor;
  }
  set unselectedTintColor(color) {
    this._unselectedTintColor = color;
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem) => {
        tabBarItem.unselectedTintColor = this._unselectedTintColor;
      });
    }
  }
  constructor() {
    this.prefixCls = "am-tab-bar";
    this._activeTab = 0;
    this._tintColor = "#108ee9";
    this._unselectedTintColor = "#888";
    this.hidden = false;
    this.prerenderingSiblingsNumber = -1;
    this.barTintColor = "white";
    this.tabBarPosition = "bottom";
    this.onPress = new EventEmitter();
    this.tabBar = true;
  }
  selectTabBarItem(index) {
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem) => {
        tabBarItem.selected = false;
      });
      this.tabBarItems.toArray()[index].selected = true;
    }
  }
  tabBarTabOnPress(pressParam) {
    this.onPress.emit(pressParam);
  }
  ngAfterContentInit() {
    if (this.tabBarItems && this.tabBarItems.length > 0) {
      this.tabBarItems.forEach((tabBarItem) => {
        tabBarItem.tintColor = this._tintColor;
        tabBarItem.unselectedTintColor = this._unselectedTintColor;
      });
    }
    this.selectTabBarItem(this.activeTab);
  }
};
_TabBarComponent.ɵfac = function TabBarComponent_Factory(t) {
  return new (t || _TabBarComponent)();
};
_TabBarComponent.ɵcmp = ɵɵdefineComponent({
  type: _TabBarComponent,
  selectors: [["TabBar"], ["nzm-tab-bar"]],
  contentQueries: function TabBarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabBarItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabBarItems = _t);
    }
  },
  hostVars: 2,
  hostBindings: function TabBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-tab-bar", ctx.tabBar);
    }
  },
  inputs: {
    hidden: "hidden",
    prerenderingSiblingsNumber: "prerenderingSiblingsNumber",
    activeTab: "activeTab",
    barTintColor: "barTintColor",
    tabBarPosition: "tabBarPosition",
    tintColor: "tintColor",
    unselectedTintColor: "unselectedTintColor"
  },
  outputs: {
    onPress: "onPress"
  },
  decls: 3,
  vars: 9,
  consts: [[3, "animated", "useOnPan", "swipeable", "activeTab", "renderTabBar", "tabDirection", "tabPanesContent", "tabBarPosition", "prerenderingSiblingsNumber"], ["TabBarBar", ""], [1, "am-tabs-tab-bar-wrap"], [3, "ngClass"], ["class", "am-tab-bar-tab", 3, "click", 4, "ngFor", "ngForOf"], [1, "am-tab-bar-tab", 3, "click"], [3, "ngTemplateOutlet"]],
  template: function TabBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "Tabs", 0);
      ɵɵtemplate(1, TabBarComponent_ng_template_1_Template, 3, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(2);
      ɵɵproperty("animated", false)("useOnPan", false)("swipeable", false)("activeTab", ctx.activeTab)("renderTabBar", _r1)("tabDirection", "horizontal")("tabPanesContent", ctx.tabBarItems)("tabBarPosition", ctx.tabBarPosition)("prerenderingSiblingsNumber", ctx.prerenderingSiblingsNumber);
    }
  },
  dependencies: [NgClass, NgForOf, NgTemplateOutlet, TabsComponent],
  encapsulation: 2
});
var TabBarComponent = _TabBarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabBarComponent, [{
    type: Component,
    args: [{
      selector: "TabBar, nzm-tab-bar",
      template: `<Tabs
  [animated]="false"
  [useOnPan]="false"
  [swipeable]="false"
  [activeTab]="activeTab"
  [renderTabBar]="TabBarBar"
  [tabDirection]="'horizontal'"
  [tabPanesContent]="tabBarItems"
  [tabBarPosition]="tabBarPosition"
  [prerenderingSiblingsNumber]="prerenderingSiblingsNumber"
></Tabs>

<ng-template #TabBarBar>
  <div class="am-tabs-tab-bar-wrap">
    <div
      class="{{ prefixCls }}-bar"
      [ngClass]="{
        'am-tab-bar-bar-hidden-top': 'top' === tabBarPosition && hidden,
        'am-tab-bar-bar-hidden-bottom': 'bottom' === tabBarPosition && hidden
      }"
      [style.background-color]="barTintColor"
    >
      <div
        class="am-tab-bar-tab"
        *ngFor="let tabBarItem of tabBarItems; let i = index"
        (click)="tabBarTabOnPress({ index: i, key: tabBarItem.key, title: tabBarItem.title })"
      >
        <ng-container [ngTemplateOutlet]="tabBarItem.tabBarTab"></ng-container>
      </div>
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [], {
    tabBarItems: [{
      type: ContentChildren,
      args: [TabBarItemComponent, {
        descendants: true
      }]
    }],
    hidden: [{
      type: Input
    }],
    prerenderingSiblingsNumber: [{
      type: Input
    }],
    activeTab: [{
      type: Input
    }],
    barTintColor: [{
      type: Input
    }],
    tabBarPosition: [{
      type: Input
    }],
    tintColor: [{
      type: Input
    }],
    unselectedTintColor: [{
      type: Input
    }],
    onPress: [{
      type: Output
    }],
    tabBar: [{
      type: HostBinding,
      args: ["class.am-tab-bar"]
    }]
  });
})();
var _TabBarModule = class _TabBarModule {
};
_TabBarModule.ɵfac = function TabBarModule_Factory(t) {
  return new (t || _TabBarModule)();
};
_TabBarModule.ɵmod = ɵɵdefineNgModule({
  type: _TabBarModule,
  declarations: [TabBarComponent, TabBarItemComponent],
  imports: [CommonModule, TabsModule, BadgeModule],
  exports: [TabBarComponent, TabBarItemComponent]
});
_TabBarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, TabsModule, BadgeModule]
});
var TabBarModule = _TabBarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, TabsModule, BadgeModule],
      exports: [TabBarComponent, TabBarItemComponent],
      declarations: [TabBarComponent, TabBarItemComponent],
      providers: []
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-picker.mjs
var _c025 = ["picker"];
function PickerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11);
    ɵɵlistener("click", function PickerComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.cancel());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("am-picker-popup-mask ", ctx_r0.maskTransitionName, "");
  }
}
function PickerComponent_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    ɵɵpropertyInterpolate("id", i_r9);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", val_r8.label ? val_r8.label : val_r8, " ");
  }
}
function PickerComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13)(2, "div", 14);
    ɵɵelementStart(3, "div", 15);
    ɵɵtemplate(4, PickerComponent_div_14_div_4_Template, 2, 2, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r2.options.indicatorStyle);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("id", i_r6);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r5);
  }
}
var _PickerOptions = class _PickerOptions {
  constructor() {
    this.data = [];
    this.value = [];
    this.cols = 3;
    this.mask = true;
    this.title = "";
    this.okText = "确定";
    this.dismissText = "取消";
    this.disabled = false;
    this.cascade = true;
    this.appendToBody = false;
    this.onDismiss = new EventEmitter();
    this.onPickerChange = new EventEmitter();
    this.indicatorStyle = {};
  }
};
_PickerOptions.ɵfac = function PickerOptions_Factory(t) {
  return new (t || _PickerOptions)();
};
_PickerOptions.ɵprov = ɵɵdefineInjectable({
  token: _PickerOptions,
  factory: _PickerOptions.ɵfac
});
var PickerOptions = _PickerOptions;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerOptions, [{
    type: Injectable
  }], null, null);
})();
var PickerRef = class {
};
var _PickerComponent = class _PickerComponent extends PickerRef {
  panstart(event) {
    if (!event.target.classList.contains("am-picker-col-mask") || this.options.disabled) {
      return;
    }
    this.isMouseDown = true;
    event.preventDefault();
    this.dom = getEventTarget(event).target.parentElement.children[2];
    this.len = this.dom.children.length;
    this.maxY = -(this.len - 1);
    if (this.dom.style.transform === "translateY(0px)") {
      this.currentY = 0;
      this.maxY = -(this.len - 1);
    } else if (this.selectedTarget.length > 0) {
      this.selectedTarget.forEach((item) => {
        if (item.targetId === event.target.id) {
          this.currentY = item.currentY;
        }
      });
    }
    this.startY = getEventTarget(event).clientY;
  }
  panmove(event) {
    if (!event.target.classList.contains("am-picker-col-mask") || !this.isMouseDown || this.options.disabled) {
      return;
    }
    event.preventDefault();
    const ev = getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    this.Velocity.record(this.differY);
    this.dom.style.transition = "transform 0s";
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight + this.differY}px)`;
  }
  panend(event) {
    if (!event.target.classList.contains("am-picker-col-mask") || !this.isMouseDown || this.options.disabled) {
      return;
    }
    this.isMouseDown = false;
    event.preventDefault();
    const ev = getEventTarget(event);
    this.differY = ev.clientY - this.startY;
    let time = 0.3;
    const velocityTemp = this.Velocity.getVelocity(this.differY) * 4;
    if (getVelocity) {
      this.differY = velocityTemp * 40 + this.differY;
      time = Math.abs(velocityTemp) * 0.1;
    }
    this.dom.style.transition = "transform " + (time < 0.3 ? 0.3 : time) + "s";
    if (this.differY <= -this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight + 0.5);
      if (this.currentY <= this.maxY) {
        this.currentY = this.maxY;
      }
    } else if (this.differY >= this.lineHeight / 2) {
      this.currentY += Math.floor(this.differY / this.lineHeight + 0.5);
      if (this.currentY >= 0) {
        this.currentY = 0;
      }
    }
    if (this.selectedTarget.length > 0) {
      let hasKey = false;
      this.selectedTarget.forEach((item) => {
        if (item.targetId === event.target.id) {
          hasKey = true;
          item.targetId = event.target.id;
          item.currentY = this.currentY;
        } else if (parseInt(item.targetId, 0) > parseInt(event.target.id, 0) && this.options.cascade) {
          item.currentY = 0;
        }
      });
      if (!hasKey) {
        this.selectedTarget.push({
          targetId: event.target.id,
          currentY: this.currentY
        });
      }
    } else {
      this.selectedTarget.push({
        targetId: event.target.id,
        currentY: this.currentY
      });
    }
    this.dom.style.transform = `translateY(${this.currentY * this.lineHeight}px)`;
    this.index = Math.floor(Math.abs(this.currentY / 1));
    this.setCurrentSelected(parseInt(event.target.id, 0), this.index);
    if (this.options.value !== this.combineReslut()) {
      this.options.onPickerChange.emit(this.combineReslut());
      this.onChange(this.combineReslut());
    }
  }
  constructor(elementRef, options, _localeProviderService) {
    super();
    this.elementRef = elementRef;
    this.options = options;
    this._localeProviderService = _localeProviderService;
    this.transitionName = "am-slide-up-enter am-slide-up-enter-active";
    this.maskTransitionName = "am-fade-enter am-fade-enter-active";
    this.startY = 0;
    this.differY = 0;
    this.currentY = 0;
    this.len = 0;
    this.dom = null;
    this.index = 0;
    this.maxY = 0;
    this.lineHeight = 34;
    this.dataForRender = [];
    this.selectedTarget = [];
    this.isMouseDown = false;
    this.Velocity = getVelocity();
    this._unsubscribe$ = new Subject();
    this.onChange = (_) => {
    };
  }
  init() {
    if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
      this.dataForRender.push(this.generateArrayData(this.options.data));
    }
    if (this.options.value.length > 0) {
      this.getInitValueIndex(this.dataForRender);
    } else {
      this.checkArrayDeep(this.options.data[0]);
      for (let index = 0; index < this.dataForRender.length; index++) {
        this.selectedTarget.push({
          targetId: `${index}`,
          currentY: 0
        });
      }
    }
  }
  getInitValueIndex(dataTemp) {
    const self = this;
    self.selectedTarget = [];
    self.options.value.forEach((element, i) => {
      dataTemp.forEach((item, j) => {
        item.forEach((item1, k) => {
          if ((element === item1.label || element === item1.value || element === item1) && i === j) {
            self.checkArrayDeep(self.dataForRender[i][k], false);
            self.selectedTarget.push({
              targetId: `${i}`,
              currentY: -k
            });
          }
        });
      });
    });
  }
  reloadPicker() {
    if (!this._picker || this._picker === void 0) {
      return;
    }
    this.currentPicker = this._picker.element.nativeElement;
    if (this.currentPicker && this.currentPicker.children.length > 0) {
      const self = this;
      setTimeout(() => {
        self.selectedTarget.forEach((item, i) => {
          self.currentPicker.children[i].children[2].style.transition = "transform .3s";
          const index = parseInt(item.currentY, 0);
          self.currentPicker.children[i].children[2].style.transform = `translateY(${index * self.lineHeight}px)`;
        });
      }, 0);
    }
  }
  generateArrayData(targetArr) {
    const tempArr = [];
    if (targetArr instanceof Array) {
      targetArr.forEach((item, i) => {
        if (item instanceof Array) {
          const keys = Object.keys(item);
          const element = {};
          keys.forEach((key) => {
            element[key] = targetArr[i][key] || targetArr[i];
          });
          tempArr.push(element);
        } else {
          tempArr.push(item);
        }
      });
      return tempArr;
    }
    return [];
  }
  checkArrayDeep(parent, init = true) {
    if (parent instanceof Object && parent.children && parent.children.length > 0) {
      if (this.generateArrayData(parent.children).length > 0 && this.dataForRender.length < this.options.cols) {
        let hasValue = false;
        this.dataForRender.filter((item, index) => {
          if (JSON.stringify(item) === JSON.stringify(parent.children)) {
            hasValue = true;
          }
        });
        if (!hasValue) {
          this.dataForRender.push(this.generateArrayData(parent.children));
        }
        if (init) {
          this.checkArrayDeep(parent.children[0]);
        }
      }
    }
  }
  ok() {
    if (this.options.updateNgModel) {
      this.options.updateNgModel(this.combineReslut());
    }
    if (this.options.confirm) {
      this.options.confirm(this.combineReslut());
    }
    this.setTransitionName();
  }
  combineReslut() {
    const result = [];
    const self = this;
    self.selectedTarget.forEach((item) => {
      if (self.dataForRender.length > 0 && self.dataForRender.length >= parseInt(item.targetId, 0) + 1) {
        const curItem = self.dataForRender[parseInt(item.targetId, 0)][-item.currentY];
        if (curItem !== void 0) {
          result.push(curItem);
        }
      }
    });
    return result;
  }
  cancel() {
    this.setTransitionName();
    this.options.onDismiss.emit();
    if (this.options.cancel) {
      this.options.cancel();
    }
  }
  setTransitionName() {
    this.transitionName = "am-slide-up-leave am-slide-up-leave-active";
    this.maskTransitionName = "am-fade-leave am-fade-leave-active";
    setTimeout(() => {
      this.options.hidePicker();
    }, 200);
  }
  setCurrentSelected(target, index) {
    if (!this.options.cascade) {
      return;
    }
    const a = this.dataForRender.slice(0, target + 1);
    this.dataForRender = a;
    this.checkArrayDeep(this.dataForRender[target][index]);
    if (this.selectedTarget.length > 0 && this.selectedTarget.length < this.dataForRender.length) {
      for (let i = 0; i < this.dataForRender.length; i++) {
        if (i > target) {
          if (i < this.selectedTarget.length) {
            this.selectedTarget[i] = {
              targetId: `${i}`,
              currentY: 0
            };
          } else {
            this.selectedTarget.push({
              targetId: `${i}`,
              currentY: 0
            });
          }
        }
      }
    }
    setTimeout(() => {
      this.dataForRender.forEach((item, i) => {
        if (target !== `${i}` && i > target) {
          this._picker.element.nativeElement.children[i].children[2].style.transition = "transform .3s";
          this._picker.element.nativeElement.children[i].children[2].style.transform = "translateY(0px)";
        }
      });
    }, 0);
  }
  getInstance() {
    return this;
  }
  getElement() {
    return this.elementRef && this.elementRef.nativeElement;
  }
  close() {
    if (this.options.hidePicker) {
      this.options.hidePicker();
    }
  }
  destroy() {
    this.close();
  }
  ngOnInit() {
    this.init();
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      const locale = this._localeProviderService.getLocaleSubObj("Picker");
      this.options.okText = this.options.okText === "确定" ? locale.okText : this.options.okText;
      this.options.dismissText = this.options.dismissText === "取消" ? locale.dismissText : this.options.dismissText;
    });
  }
  ngAfterViewInit() {
    this.reloadPicker();
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_PickerComponent.ɵfac = function PickerComponent_Factory(t) {
  return new (t || _PickerComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PickerOptions), ɵɵdirectiveInject(LocaleProviderService));
};
_PickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _PickerComponent,
  selectors: [["Picker"]],
  viewQuery: function PickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c025, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._picker = _t.first);
    }
  },
  hostBindings: function PickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("mousedown", function PickerComponent_mousedown_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("touchstart", function PickerComponent_touchstart_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("mousemove", function PickerComponent_mousemove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("touchmove", function PickerComponent_touchmove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("mouseup", function PickerComponent_mouseup_HostBindingHandler($event) {
        return ctx.panend($event);
      })("mouseleave", function PickerComponent_mouseleave_HostBindingHandler($event) {
        return ctx.panend($event);
      })("touchend", function PickerComponent_touchend_HostBindingHandler($event) {
        return ctx.panend($event);
      });
    }
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 15,
  vars: 8,
  consts: [[3, "class", "click", 4, "ngIf"], [2, "min-height", "280px"], [1, "am-picker-popup-content"], [1, "am-picker-popup-body"], [1, "am-picker-popup-header"], [1, "am-picker-popup-item", "am-picker-popup-header-left", 3, "click"], [1, "am-picker-popup-item", "am-picker-popup-title"], [1, "am-picker-popup-item", "am-picker-popup-header-right", 3, "click"], [1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [3, "click"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 2, "top", "102px", 3, "ngStyle"], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id"]],
  template: function PickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, PickerComponent_div_0_Template, 1, 3, "div", 0);
      ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "div", 4)(6, "div", 5);
      ɵɵlistener("click", function PickerComponent_Template_div_click_6_listener() {
        return ctx.cancel();
      });
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "div", 6);
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 7);
      ɵɵlistener("click", function PickerComponent_Template_div_click_10_listener() {
        return ctx.ok();
      });
      ɵɵtext(11);
      ɵɵelementEnd()();
      ɵɵelementStart(12, "div", 8, 9);
      ɵɵtemplate(14, PickerComponent_div_14_Template, 5, 3, "div", 10);
      ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.options.mask);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("am-picker-popup am-picker-popup-wrap ", ctx.transitionName, "");
      ɵɵadvance(6);
      ɵɵtextInterpolate1(" ", ctx.options.dismissText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.options.title);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.options.okText);
      ɵɵadvance(3);
      ɵɵproperty("ngForOf", ctx.dataForRender);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle],
  encapsulation: 2
});
var PickerComponent = _PickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerComponent, [{
    type: Component,
    args: [{
      selector: "Picker",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div *ngIf="options.mask" class="am-picker-popup-mask {{ maskTransitionName }}" (click)="cancel()"></div>\n<div class="am-picker-popup am-picker-popup-wrap {{ transitionName }}" style=" min-height: 280px">\n  <div class="am-picker-popup-content">\n    <div class="am-picker-popup-body">\n      <div>\n        <div class="am-picker-popup-header">\n          <div class="am-picker-popup-item am-picker-popup-header-left" (click)="cancel()">\n            {{ options.dismissText }}\n          </div>\n          <div class="am-picker-popup-item am-picker-popup-title">{{ options.title }}</div>\n          <div class="am-picker-popup-item am-picker-popup-header-right" (click)="ok()">{{ options.okText }}</div>\n        </div>\n        <div class="am-picker" style="flex-direction: row; align-items: center;" #picker>\n          <div *ngFor="let item of dataForRender; let i = index" class="am-picker-col">\n            <div class="am-picker-col-indicator " style="top: 102px;" [ngStyle]="options.indicatorStyle"></div>\n            <div class="am-picker-col-mask" style="background-size: 100% 102px;" id="{{ i }}"></div>\n            <div class="am-picker-col-content">\n              <div *ngFor="let val of item; let i = index" class="am-picker-col-item" id="{{ i }}">\n                {{ val.label ? val.label : val }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: PickerOptions
  }, {
    type: LocaleProviderService
  }], {
    _picker: [{
      type: ViewChild,
      args: ["picker", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    panstart: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    panmove: [{
      type: HostListener,
      args: ["mousemove", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    panend: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }, {
      type: HostListener,
      args: ["mouseleave", ["$event"]]
    }, {
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var _PickerDirective = class _PickerDirective {
  togglePicker() {
    if (!this.picker) {
      this.showPicker();
    } else {
      this.hidePicker();
    }
  }
  constructor(_viewContainerRef, _elm, _defaultOptions, _cfr, _renderer, _zone) {
    this._viewContainerRef = _viewContainerRef;
    this._elm = _elm;
    this._defaultOptions = _defaultOptions;
    this._cfr = _cfr;
    this._renderer = _renderer;
    this._zone = _zone;
    this._eventListeners = [];
    this.onVisibleChange = new EventEmitter(true);
    this.onPickerChange = new EventEmitter();
    this.onDismiss = new EventEmitter();
    this.onChange = () => null;
    this.onTouched = () => null;
  }
  ngOnInit() {
    this.onVisibleChange.emit(false);
  }
  ngOnChanges(value) {
    if (value.cols && this.picker) {
      this.picker.instance.options.cols = value.cols.currentValue;
    }
    if (value.data && this.picker) {
      if (!this.isPickerDataEqual(this.picker.instance.options.data, value.data.currentValue)) {
        this.picker.instance.options.data = value.data.currentValue;
        this.showPicker();
      }
    }
  }
  ngOnDestroy() {
    this.hidePicker();
  }
  onDocumentClick(event) {
    if (this.picker && !this._elm.nativeElement.contains(event.target) && !this.picker.location.nativeElement.contains(event.target)) {
      this.hidePicker();
    }
  }
  showPicker() {
    if (this.picker) {
      this._zone.run(() => {
        this.picker.instance.init();
      });
    } else if (!this.picker && !this.disabled) {
      setTimeout(() => {
        this._eventListeners = [this._renderer.listen("document", "click", (event) => this.onDocumentClick(event)), this._renderer.listen("document", "touchend", (event) => this.onDocumentClick(event))];
      });
      const options = new PickerOptions();
      Object.assign(options, this._defaultOptions, {
        hidePicker: (event) => {
          this.hidePicker();
        },
        updateNgModel: (value) => {
          this.value = value;
          this.onChange(value);
        }
      });
      const optionalParams = ["data", "value", "cols", "mask", "title", "okText", "dismissText", "disabled", "cascade", "appendToBody", "indicatorStyle", "onPickerChange", "onVisibleChange", "onDismiss"];
      optionalParams.forEach((param) => {
        if (typeof this[param] !== "undefined") {
          options[param] = this[param];
        }
      });
      const componentFactory = this._cfr.resolveComponentFactory(PickerComponent);
      const childInjector = Injector.create([{
        provide: PickerOptions,
        useValue: options
      }]);
      this.picker = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, childInjector);
      if (options.appendToBody) {
        this.appendToBodyElement = document.body.appendChild(this.picker.location.nativeElement);
      }
      this.onVisibleChange.emit(true);
    }
  }
  hidePicker() {
    if (this.appendToBodyElement) {
      document.body.removeChild(this.appendToBodyElement);
      this.appendToBodyElement = null;
    }
    if (this.picker) {
      this.picker.destroy();
      delete this.picker;
      this.onVisibleChange.emit(false);
      this._eventListeners.forEach((fn) => fn());
      this._eventListeners = [];
    }
  }
  writeValue(value) {
    this.value = Array.isArray(value) ? value : [];
    if (this.picker) {
      this.picker.instance.options.value = this.value;
      this.showPicker();
      this.picker.instance.reloadPicker();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  isPickerDataEqual(data1, data2) {
    if (!data1 && !data2) {
      return true;
    }
    if (!Array.isArray(data1) || !Array.isArray(data2) || data1.length !== data2.length) {
      return false;
    }
    for (let i = 0; i < data1.length; i++) {
      const item1 = data1[i];
      const item2 = data2[i];
      if (item1 && !item2 || !item1 && item2) {
        return false;
      }
      if (item1.value !== item2.value) {
        return false;
      }
      if (item1.label !== item2.label) {
        return false;
      }
      if (item1.children && item2.children) {
        return this.isPickerDataEqual(item1.children, item2.children);
      }
    }
    return true;
  }
};
_PickerDirective.ɵfac = function PickerDirective_Factory(t) {
  return new (t || _PickerDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PickerOptions), ɵɵdirectiveInject(ComponentFactoryResolver$1), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
};
_PickerDirective.ɵdir = ɵɵdefineDirective({
  type: _PickerDirective,
  selectors: [["", "Picker", ""], ["", "nzm-picker", ""]],
  hostBindings: function PickerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function PickerDirective_click_HostBindingHandler() {
        return ctx.togglePicker();
      });
    }
  },
  inputs: {
    data: "data",
    cols: "cols",
    mask: "mask",
    title: "title",
    visible: "visible",
    okText: "okText",
    dismissText: "dismissText",
    disabled: "disabled",
    cascade: "cascade",
    appendToBody: "appendToBody",
    indicatorStyle: "indicatorStyle"
  },
  outputs: {
    onVisibleChange: "onVisibleChange",
    onPickerChange: "onPickerChange",
    onDismiss: "onDismiss"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _PickerDirective),
    multi: true
  }]), ɵɵNgOnChangesFeature]
});
var PickerDirective = _PickerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerDirective, [{
    type: Directive,
    args: [{
      selector: "[Picker], [nzm-picker]",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PickerDirective),
        multi: true
      }]
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: PickerOptions
  }, {
    type: ComponentFactoryResolver$1
  }, {
    type: Renderer2
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    mask: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    okText: [{
      type: Input
    }],
    dismissText: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    cascade: [{
      type: Input
    }],
    appendToBody: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    onVisibleChange: [{
      type: Output
    }],
    onPickerChange: [{
      type: Output
    }],
    onDismiss: [{
      type: Output
    }],
    togglePicker: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var _PickerService = class _PickerService extends PopupService {
  constructor() {
    super(...arguments);
    this.comRef = null;
    this.defaultOptions = new PickerOptions();
  }
  showPicker(config = this.defaultOptions, confirmCallback, cancelCallback) {
    const options = new PickerOptions();
    Object.assign(options, config, {
      hidePicker: (event) => {
        this.hidePicker();
      },
      confirm: (event) => {
        if (confirmCallback) {
          confirmCallback(event);
        }
      },
      cancel: () => {
        if (cancelCallback) {
          cancelCallback();
        }
      }
    });
    const childInjector = Injector.create([{
      provide: PickerOptions,
      useValue: options
    }]);
    this.comRef = this.showPopup(PickerComponent, childInjector);
    return this.comRef && this.comRef.instance;
  }
  hidePicker() {
    this.hidePopup();
  }
};
_PickerService.ɵfac = /* @__PURE__ */ (() => {
  let ɵPickerService_BaseFactory;
  return function PickerService_Factory(t) {
    return (ɵPickerService_BaseFactory || (ɵPickerService_BaseFactory = ɵɵgetInheritedFactory(_PickerService)))(t || _PickerService);
  };
})();
_PickerService.ɵprov = ɵɵdefineInjectable({
  token: _PickerService,
  factory: _PickerService.ɵfac
});
var PickerService = _PickerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerService, [{
    type: Injectable
  }], null, null);
})();
var _PickerModule = class _PickerModule {
};
_PickerModule.ɵfac = function PickerModule_Factory(t) {
  return new (t || _PickerModule)();
};
_PickerModule.ɵmod = ɵɵdefineNgModule({
  type: _PickerModule,
  declarations: [PickerComponent, PickerDirective],
  imports: [CommonModule, OverlayModule],
  exports: [PickerComponent, PickerDirective]
});
_PickerModule.ɵinj = ɵɵdefineInjector({
  providers: [PickerOptions, PopupService, PickerService],
  imports: [CommonModule, OverlayModule]
});
var PickerModule = _PickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule],
      exports: [PickerComponent, PickerDirective],
      declarations: [PickerComponent, PickerDirective],
      providers: [PickerOptions, PopupService, PickerService]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-picker-view.mjs
function PickerViewComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("id", i_r7);
    ɵɵproperty("ngStyle", ctx_r5.itemStyle);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", val_r6.label ? val_r6.label : val_r6, " ");
  }
}
function PickerViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4, 5)(3, "div", 6);
    ɵɵelementStart(4, "div", 7);
    ɵɵtemplate(5, PickerViewComponent_div_2_div_5_Template, 2, 3, "div", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r1.indicatorStyle);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", i_r3);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", item_r2);
  }
}
var _PickerViewComponent = class _PickerViewComponent extends PickerComponent {
  constructor() {
    super(...arguments);
    this.data = [];
    this.cols = 3;
    this.indicatorStyle = {};
    this.itemStyle = {};
  }
  pickerViewInit() {
    this.options.data = this.data;
    this.options.cols = this.cols;
    this.options.cascade = this.cascade;
    this.init();
  }
  init() {
    this.selectedTarget = [];
    if (this.dataForRender.length === 0 && this.generateArrayData(this.options.data).length > 0) {
      this.dataForRender.push(this.generateArrayData(this.options.data));
    }
    if (this.options.value.length > 0) {
      this.getInitValueIndex(this.dataForRender);
    } else {
      for (let index = 0; index < this.dataForRender.length; index++) {
        this.selectedTarget.push({
          targetId: `${index}`,
          currentY: 0
        });
      }
    }
    setTimeout(() => {
      this.reloadPicker();
    });
  }
  writeValue(value) {
    if (value) {
      this.options.value = value;
      this.init();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
  }
  ngOnInit() {
    this.pickerViewInit();
  }
  ngOnChanges(changes) {
    if (changes.cols) {
      this.dataForRender = [];
    }
    if (changes.data || changes.cols) {
      this.pickerViewInit();
    }
  }
  ngAfterViewInit() {
    this.currentPicker = this.elementRef.nativeElement;
    this.reloadPicker();
  }
};
_PickerViewComponent.ɵfac = /* @__PURE__ */ (() => {
  let ɵPickerViewComponent_BaseFactory;
  return function PickerViewComponent_Factory(t) {
    return (ɵPickerViewComponent_BaseFactory || (ɵPickerViewComponent_BaseFactory = ɵɵgetInheritedFactory(_PickerViewComponent)))(t || _PickerViewComponent);
  };
})();
_PickerViewComponent.ɵcmp = ɵɵdefineComponent({
  type: _PickerViewComponent,
  selectors: [["PickerView"], ["nzm-picker-view"]],
  inputs: {
    data: "data",
    cols: "cols",
    cascade: "cascade",
    indicatorStyle: "indicatorStyle",
    itemStyle: "itemStyle"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _PickerViewComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
  decls: 3,
  vars: 1,
  consts: [[1, "am-picker", 2, "flex-direction", "row", "align-items", "center"], ["picker", ""], ["class", "am-picker-col", 4, "ngFor", "ngForOf"], [1, "am-picker-col"], [1, "am-picker-col-indicator", 3, "ngStyle"], ["indicator", ""], [1, "am-picker-col-mask", 2, "background-size", "100% 102px", 3, "id"], [1, "am-picker-col-content"], ["class", "am-picker-col-item", 3, "id", "ngStyle", 4, "ngFor", "ngForOf"], [1, "am-picker-col-item", 3, "id", "ngStyle"]],
  template: function PickerViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵtemplate(2, PickerViewComponent_div_2_Template, 6, 3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.dataForRender);
    }
  },
  dependencies: [NgForOf, NgStyle],
  encapsulation: 2
});
var PickerViewComponent = _PickerViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerViewComponent, [{
    type: Component,
    args: [{
      selector: "PickerView, nzm-picker-view",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PickerViewComponent),
        multi: true
      }],
      template: '<div #picker class="am-picker" style="flex-direction: row; align-items: center;">\n  <div *ngFor="let item of dataForRender; let i = index" class="am-picker-col">\n    <div #indicator class="am-picker-col-indicator " [ngStyle]="indicatorStyle"></div>\n    <div id="{{ i }}" class="am-picker-col-mask" style="background-size: 100% 102px;"></div>\n    <div class="am-picker-col-content">\n      <div *ngFor="let val of item; let i = index" id="{{ i }}" class="am-picker-col-item" [ngStyle]="itemStyle">\n        {{ val.label ? val.label : val }}\n      </div>\n    </div>\n  </div>\n</div>\n'
    }]
  }], null, {
    data: [{
      type: Input
    }],
    cols: [{
      type: Input
    }],
    cascade: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    itemStyle: [{
      type: Input
    }]
  });
})();
var _PickerViewModule = class _PickerViewModule {
};
_PickerViewModule.ɵfac = function PickerViewModule_Factory(t) {
  return new (t || _PickerViewModule)();
};
_PickerViewModule.ɵmod = ɵɵdefineNgModule({
  type: _PickerViewModule,
  declarations: [PickerViewComponent],
  imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
  exports: [PickerViewComponent]
});
_PickerViewModule.ɵinj = ɵɵdefineInjector({
  imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule]
});
var PickerViewModule = _PickerViewModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerViewModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, CommonModule, PickerModule, LocaleProviderModule],
      exports: [PickerViewComponent],
      declarations: [PickerViewComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-image-picker.mjs
var _c026 = ["fileSelectorInput"];
function ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r12);
      const j_r5 = ɵɵnextContext(2).index;
      const i_r2 = ɵɵnextContext().index;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.removeImage(i_r2 * ctx_r10.length + j_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(4);
    ɵɵclassMapInterpolate1("", ctx_r9.prefixCls, "-item-remove");
  }
}
var _c115 = (a0, a1) => ({
  "background-image": a0,
  transform: a1
});
function ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_div_1_div_1_Template, 1, 3, "div", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template_div_click_2_listener() {
      ɵɵrestoreView(_r16);
      const j_r5 = ɵɵnextContext().index;
      const i_r2 = ɵɵnextContext().index;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.imageClick(i_r2 * ctx_r14.length + j_r5));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-item");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.disableDelete);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r6.prefixCls, "-item-content");
    ɵɵproperty("ngStyle", ɵɵpureFunction2(8, _c115, item_r4.backgroundImage, item_r4.transform));
  }
}
function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵlistener("click", function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r20 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r20.addImageClick($event));
    });
    ɵɵelementStart(1, "input", 8, 9);
    ɵɵlistener("change", function ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r21);
      const ctx_r22 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r22.fileChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate2("", ctx_r7.prefixCls, "-item ", ctx_r7.prefixCls, "-upload-btn");
    ɵɵadvance(1);
    ɵɵproperty("accept", ctx_r7.accept)("multiple", ctx_r7.multiple);
    ɵɵattribute("capture", ctx_r7.capture ? ctx_r7.capture : null);
  }
}
function ImagePickerComponent_Flex_1_FlexItem_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate1("", ctx_r8.prefixCls, "-item-white");
  }
}
function ImagePickerComponent_Flex_1_FlexItem_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "FlexItem");
    ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_div_1_Template, 3, 11, "div", 2)(2, ImagePickerComponent_Flex_1_FlexItem_1_div_2_Template, 3, 7, "div", 3)(3, ImagePickerComponent_Flex_1_FlexItem_1_div_3_Template, 1, 3, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r4 && "img" === item_r4.type && item_r4.backgroundImage);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r4 && "select" === item_r4.type);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r4 && "white" === item_r4.type);
  }
}
function ImagePickerComponent_Flex_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "Flex");
    ɵɵtemplate(1, ImagePickerComponent_Flex_1_FlexItem_1_Template, 4, 3, "FlexItem", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const rowItem_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", rowItem_r1);
  }
}
var _ImagePickerComponent = class _ImagePickerComponent {
  get files() {
    return this._files;
  }
  set files(value) {
    this._files = value;
    this.sortItem();
  }
  get accept() {
    return this._accept;
  }
  set accept(value) {
    this._accept = value;
    this.sortItem();
  }
  get length() {
    return this._count;
  }
  set length(value) {
    if (value > 0) {
      this._count = value;
    } else {
      this._count = 4;
    }
    this.sortItem();
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this.sortItem();
  }
  get selectable() {
    return this._selectable;
  }
  set selectable(value) {
    this._selectable = value;
    this.sortItem();
  }
  constructor() {
    this.prefixCls = "am-image-picker";
    this.flexEl = [];
    this._accept = "image/*";
    this._count = 4;
    this._selectable = true;
    this._files = [];
    this._multiple = false;
    this.capture = false;
    this.disableDelete = false;
    this.onFail = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onImageClick = new EventEmitter();
    this.onAddImageClick = new EventEmitter();
  }
  sortItem() {
    if (!this._files) {
      return;
    }
    let count = parseInt("" + this._count, 10);
    if (count <= 0) {
      count = 4;
    }
    let allEl = this._files.map((item) => {
      return {
        type: "img",
        backgroundImage: "url(" + item.url + ")",
        transform: "rotate(" + this.getRotation(item.orientation) + "deg)"
      };
    });
    if (this._selectable) {
      allEl.push({
        type: "select",
        backgroundImage: "",
        transform: ""
      });
    }
    const length = allEl.length;
    if (length !== 0 && length % count !== 0) {
      const blankCount = count - length % count;
      const fillBlankEl = [];
      for (let i = 0; i < blankCount; i++) {
        fillBlankEl.push({
          type: "white",
          backgroundImage: "",
          transform: ""
        });
      }
      allEl = allEl.concat(fillBlankEl);
    }
    this.flexEl = [];
    for (let i = 0; i < allEl.length / count; i++) {
      const rowEl = allEl.slice(i * count, i * count + count);
      this.flexEl.push(rowEl);
    }
  }
  addImage(imgItem) {
    this._files.push({
      type: "img",
      url: imgItem.url,
      orientation: imgItem.orientation
    });
    this.sortItem();
    this.onChange.emit({
      files: this._files,
      operationType: "add",
      index: this._files.length - 1
    });
  }
  removeImage(index) {
    this._files.splice(index, 1);
    this.sortItem();
    this.onChange.emit({
      files: this._files,
      operationType: "remove",
      index
    });
  }
  imageClick(index) {
    this.onImageClick.emit({
      index,
      files: this._files
    });
  }
  addImageClick(e) {
    this.onAddImageClick.emit(e);
  }
  parseFile(file, index) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataURL = e.target.result;
      if (!dataURL) {
        this.onFail.emit(`Fail to get the ${index} image`);
        return;
      }
      let orientation = 1;
      this.getOrientation(file, (res) => {
        if (res > 0) {
          orientation = res;
        }
        this.addImage({
          url: dataURL,
          orientation,
          file
        });
      });
    };
    reader.readAsDataURL(file);
  }
  fileChange(event) {
    const fileList = event.target.files;
    if (fileList && fileList.length) {
      for (let i = 0; i < fileList.length; i++) {
        this.parseFile(fileList[i], i);
      }
    }
  }
  getRotation(orientation = 1) {
    let imgRotation = 0;
    switch (orientation) {
      case 3:
        imgRotation = 180;
        break;
      case 6:
        imgRotation = 90;
        break;
      case 8:
        imgRotation = 270;
        break;
      default:
    }
    return imgRotation;
  }
  // https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 65496) {
        return callback(-2);
      }
      const length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 65505) {
          const tmp = view.getUint32(offset += 2, false);
          if (tmp !== 1165519206) {
            return callback(-1);
          }
          const little = view.getUint16(offset += 6, false) === 18761;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 274) {
              return callback(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 65280) !== 65280) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  }
};
_ImagePickerComponent.ɵfac = function ImagePickerComponent_Factory(t) {
  return new (t || _ImagePickerComponent)();
};
_ImagePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _ImagePickerComponent,
  selectors: [["ImagePicker"], ["nzm-image-picker"]],
  viewQuery: function ImagePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c026, 5, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._fileSelectorInput = _t.first);
    }
  },
  inputs: {
    capture: "capture",
    disableDelete: "disableDelete",
    files: "files",
    accept: "accept",
    length: "length",
    multiple: "multiple",
    selectable: "selectable"
  },
  outputs: {
    onFail: "onFail",
    onChange: "onChange",
    onImageClick: "onImageClick",
    onAddImageClick: "onAddImageClick"
  },
  decls: 2,
  vars: 4,
  consts: [["role", "group"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], ["role", "button", "aria-label", "Choose and add image", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "Click and Remove this image", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "Image can be clicked", 3, "ngStyle", "click"], ["role", "button", "aria-label", "Click and Remove this image", 3, "click"], ["role", "button", "aria-label", "Choose and add image", 3, "click"], ["type", "file", 3, "accept", "multiple", "change"], ["fileSelectorInput", ""]],
  template: function ImagePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, ImagePickerComponent_Flex_1_Template, 2, 1, "Flex", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-list");
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.flexEl);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle, FlexComponent, FlexItemComponent],
  encapsulation: 2
});
var ImagePickerComponent = _ImagePickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePickerComponent, [{
    type: Component,
    args: [{
      selector: "ImagePicker, nzm-image-picker",
      template: `<div class="{{ prefixCls }}-list" role="group">
  <Flex *ngFor="let rowItem of flexEl; let i = index">
    <FlexItem *ngFor="let item of rowItem; let j = index">
      <div *ngIf="item && 'img' === item.type && item.backgroundImage" class="{{ prefixCls }}-item">
        <div
          role="button"
          *ngIf="!disableDelete"
          aria-label="Click and Remove this image"
          class="{{ prefixCls }}-item-remove"
          (click)="removeImage(i * length + j)"
        ></div>
        <div
          role="button"
          aria-label="Image can be clicked"
          class="{{ prefixCls }}-item-content"
          [ngStyle]="{ 'background-image': item.backgroundImage, transform: item.transform }"
          (click)="imageClick(i * length + j)"
        ></div>
      </div>
      <div
        role="button"
        aria-label="Choose and add image"
        *ngIf="item && 'select' === item.type"
        class="{{ prefixCls }}-item {{ prefixCls }}-upload-btn"
        (click)="addImageClick($event)"
      >
        <input
          #fileSelectorInput
          type="file"
          [accept]="accept"
          [multiple]="multiple"
          [attr.capture]="capture ? capture : null"
          (change)="fileChange($event)"
        />
      </div>
      <div *ngIf="item && 'white' === item.type" class="{{ prefixCls }}-item-white"></div>
    </FlexItem>
  </Flex>
</div>
`
    }]
  }], () => [], {
    _fileSelectorInput: [{
      type: ViewChild,
      args: ["fileSelectorInput", {
        read: ViewContainerRef
      }]
    }],
    capture: [{
      type: Input
    }],
    disableDelete: [{
      type: Input
    }],
    files: [{
      type: Input
    }],
    accept: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    selectable: [{
      type: Input
    }],
    onFail: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    onImageClick: [{
      type: Output
    }],
    onAddImageClick: [{
      type: Output
    }]
  });
})();
var _ImagePickerModule = class _ImagePickerModule {
};
_ImagePickerModule.ɵfac = function ImagePickerModule_Factory(t) {
  return new (t || _ImagePickerModule)();
};
_ImagePickerModule.ɵmod = ɵɵdefineNgModule({
  type: _ImagePickerModule,
  declarations: [ImagePickerComponent],
  imports: [CommonModule, FlexModule],
  exports: [ImagePickerComponent]
});
_ImagePickerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FlexModule]
});
var ImagePickerModule = _ImagePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImagePickerModule, [{
    type: NgModule,
    args: [{
      declarations: [ImagePickerComponent],
      exports: [ImagePickerComponent],
      imports: [CommonModule, FlexModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-result.mjs
function ResultComponent_div_0_ng_template_1_Template(rf, ctx) {
}
function ResultComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ResultComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-pic");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.img);
  }
}
var _c027 = (a0) => ({
  backgroundImage: a0
});
function ResultComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-pic");
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c027, "url(" + ctx_r1.imgUrl + ")"));
  }
}
function ResultComponent_div_2_1_ng_template_0_Template(rf, ctx) {
}
function ResultComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ResultComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.title);
  }
}
function ResultComponent_div_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.title);
  }
}
function ResultComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, ResultComponent_div_2_1_Template, 1, 1, null, 3)(2, ResultComponent_div_2_span_2_Template, 2, 1, "span", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-title");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.isTitleString);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isTitleString);
  }
}
function ResultComponent_4_ng_template_0_Template(rf, ctx) {
}
function ResultComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ResultComponent_4_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.message);
  }
}
function ResultComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.message);
  }
}
function ResultComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "a", 6);
    ɵɵlistener("click", function ResultComponent_div_6_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.buttonClick($event));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-button");
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r5.buttonType);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r5.buttonText, " ");
  }
}
var _ResultComponent = class _ResultComponent {
  get title() {
    return this._title;
  }
  set title(value) {
    if (this.isTemplateRef(value)) {
      this.isTitleString = false;
    } else {
      this.isTitleString = true;
    }
    this._title = value;
  }
  get message() {
    return this._message;
  }
  set message(value) {
    if (this.isTemplateRef(value)) {
      this.isMessageString = false;
    } else {
      this.isMessageString = true;
    }
    this._message = value;
  }
  constructor() {
    this.prefixCls = "am-result";
    this.isTitleString = true;
    this.isMessageString = true;
    this.onButtonClick = new EventEmitter();
    this.role = "alert";
    this.amResult = true;
  }
  buttonClick(event) {
    this.onButtonClick.emit(event);
  }
  isTemplateRef(value) {
    if (value) {
      return value instanceof TemplateRef;
    }
    return false;
  }
};
_ResultComponent.ɵfac = function ResultComponent_Factory(t) {
  return new (t || _ResultComponent)();
};
_ResultComponent.ɵcmp = ɵɵdefineComponent({
  type: _ResultComponent,
  selectors: [["Result"], ["nzm-result"]],
  hostVars: 3,
  hostBindings: function ResultComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("role", ctx.role);
      ɵɵclassProp("am-result", ctx.amResult);
    }
  },
  inputs: {
    title: "title",
    imgUrl: "imgUrl",
    buttonText: "buttonText",
    buttonType: "buttonType",
    img: "img",
    message: "message"
  },
  outputs: {
    onButtonClick: "onButtonClick"
  },
  decls: 7,
  vars: 7,
  consts: [[3, "class", 4, "ngIf"], [3, "class", "ngStyle", 4, "ngIf"], [3, "ngClass"], [4, "ngIf"], [3, "ngTemplateOutlet"], [3, "ngStyle"], ["Button", "", 3, "type", "click"]],
  template: function ResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ResultComponent_div_0_Template, 2, 4, "div", 0)(1, ResultComponent_div_1_Template, 1, 6, "div", 1)(2, ResultComponent_div_2_Template, 3, 5, "div", 0);
      ɵɵelementStart(3, "div", 2);
      ɵɵtemplate(4, ResultComponent_4_Template, 1, 1, null, 3)(5, ResultComponent_span_5_Template, 2, 1, "span", 3);
      ɵɵelementEnd();
      ɵɵtemplate(6, ResultComponent_div_6_Template, 3, 5, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.img);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.img && ctx.imgUrl);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.title);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.prefixCls + "-message");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.isMessageString);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isMessageString);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.buttonText);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var ResultComponent = _ResultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultComponent, [{
    type: Component,
    args: [{
      selector: "Result, nzm-result",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div *ngIf="img" class="{{ prefixCls }}-pic">
  <ng-template [ngTemplateOutlet]="img"></ng-template>
</div>
<div *ngIf="!img && imgUrl" class="{{ prefixCls }}-pic" [ngStyle]="{ backgroundImage: 'url(' + imgUrl + ')' }"></div>
<div *ngIf="title" class="{{ prefixCls }}-title">
  <ng-template *ngIf="!isTitleString" [ngTemplateOutlet]="title"></ng-template>
  <span *ngIf="isTitleString">{{ title }}</span>
</div>
<div [ngClass]="prefixCls + '-message'">
  <ng-template *ngIf="!isMessageString" [ngTemplateOutlet]="message"></ng-template>
  <span *ngIf="isMessageString">{{ message }}</span>
</div>
<div *ngIf="buttonText" class="{{ prefixCls }}-button">
  <a Button [type]="buttonType" (click)="buttonClick($event)">
    {{ buttonText }}
  </a>
</div>
`
    }]
  }], () => [], {
    title: [{
      type: Input
    }],
    imgUrl: [{
      type: Input
    }],
    buttonText: [{
      type: Input
    }],
    buttonType: [{
      type: Input
    }],
    img: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    onButtonClick: [{
      type: Output
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    amResult: [{
      type: HostBinding,
      args: ["class.am-result"]
    }]
  });
})();
var _ResultModule = class _ResultModule {
};
_ResultModule.ɵfac = function ResultModule_Factory(t) {
  return new (t || _ResultModule)();
};
_ResultModule.ɵmod = ɵɵdefineNgModule({
  type: _ResultModule,
  declarations: [ResultComponent],
  imports: [CommonModule, IconModule],
  exports: [ResultComponent]
});
_ResultModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule]
});
var ResultModule = _ResultModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResultModule, [{
    type: NgModule,
    args: [{
      declarations: [ResultComponent],
      exports: [ResultComponent],
      imports: [CommonModule, IconModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-slider.mjs
function SliderMarksComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("ngClass", item_r1.className)("ngStyle", item_r1.style);
  }
}
function SliderStepsComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    ɵɵproperty("ngClass", item_r1.stepClass)("ngStyle", item_r1.stepStyle);
  }
}
function SliderTrackComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.className)("ngStyle", ctx_r0.elStyle);
  }
}
var _SliderHandleComponent = class _SliderHandleComponent {
  set min(value) {
    this._min = value;
  }
  set max(value) {
    this._max = value;
  }
  set minBound(value) {
    this._minBound = value;
  }
  set maxBound(value) {
    this._maxBound = value;
  }
  set step(value) {
    this._step = value;
  }
  set value(value) {
    this._value = value;
    if (this._value) {
      this.left = this.calcOffset(this._value);
    }
  }
  set disabled(value) {
    this._disabled = value;
  }
  set sliderLength(value) {
    this._sliderLength = value;
  }
  set sliderStart(value) {
    this._sliderStart = value;
  }
  get handleStyle() {
    return this._handleStyle;
  }
  set handleStyle(value) {
    this._handleStyle = value;
  }
  /* 手势操作 */
  panstart(event) {
    if (!this._disabled) {
      this._startX = event && event.changedTouches && event.changedTouches[0] && event.changedTouches[0].clientX;
      this._handleStatus = "start";
      this._isDraging = true;
    }
  }
  panmove(event) {
    event.preventDefault();
    if (!this._disabled && this._isDraging) {
      const pos = event.changedTouches[0].clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      if (this._oldValue !== this._value) {
        this._oldValue = this._value;
        this.onChange.emit(this._value);
      }
    }
  }
  panend(event) {
    event.preventDefault();
    if (!this._disabled && this._isDraging) {
      this._handleStatus = "end";
      this._isDraging = false;
      const pos = event.changedTouches[0].clientX;
      this._value = Math.round(this.calcValueByPos(pos));
      this.left = this.calcOffset(this._value);
      this.onAfterChange.emit(this._value);
    }
  }
  constructor(_elf, _sanitizer) {
    this._elf = _elf;
    this._sanitizer = _sanitizer;
    this._disabled = false;
    this._marks = {};
    this._isDraging = false;
    this.onChange = new EventEmitter();
    this.onAfterChange = new EventEmitter();
    this.mouseDown = (event) => {
      if (!this._disabled && this.isMouseTarget(event)) {
        this._startX = event.clientX;
        this._handleStatus = "start";
        this._isDraging = true;
        document.addEventListener("mousemove", this.mouseMove, false);
        document.addEventListener("mouseup", this.mouseUp, false);
        this.pauseEvent(event);
      }
    };
    this.mouseMove = (event) => {
      if (!this._disabled && this._isDraging) {
        this.pauseEvent(event);
        const pos = event.clientX;
        this._value = Math.round(this.calcValueByPos(pos));
        this.left = this.calcOffset(this._value);
        if (this._oldValue !== this._value) {
          this._oldValue = this._value;
          this.onChange.emit(this._value);
        }
      }
    };
    this.mouseUp = (event) => {
      if (!this._disabled && this._isDraging) {
        this._handleStatus = "end";
        this._isDraging = false;
        const pos = event.clientX;
        this._value = Math.round(this.calcValueByPos(pos));
        this.left = this.calcOffset(this._value);
        this.onAfterChange.emit(this._value);
      }
    };
  }
  calcValueByPos(pos) {
    const offset = pos - this._sliderStart;
    let value = this.calcValue(offset);
    if (value <= this._minBound) {
      value = this._minBound;
    }
    if (value >= this._maxBound) {
      value = this._maxBound;
    }
    const closestPoint = this.getClosestPoint(value);
    return this._step === null ? closestPoint : parseFloat(closestPoint.toFixed(this.getPrecision(this._step)));
  }
  calcValue(offset) {
    const ratio = Math.abs(Math.max(offset, 0) / this._sliderLength);
    const value = ratio * (this._max - this._min) + this._min;
    return value;
  }
  getClosestPoint(val) {
    const points = Object.keys(this._marks).map(parseFloat);
    if (this._step !== null) {
      const closestStep = Math.round((val - this._min) / this._step) * this._step + this._min;
      points.push(closestStep);
    }
    const diffs = points.map(function(point) {
      return Math.abs(val - point);
    });
    return points[diffs.indexOf(Math.min.apply(Math, this.toConsumableArray(diffs)))];
  }
  getPrecision(step) {
    const stepString = step.toString();
    let precision = 0;
    if (stepString.indexOf(".") >= 0) {
      precision = stepString.length - stepString.indexOf(".") - 1;
    }
    return precision;
  }
  calcOffset(value) {
    const ratio = (value - this._min) / (this._max - this._min);
    return ratio * 100;
  }
  pauseEvent(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  isMouseTarget(event) {
    let target = event.target;
    let parentFound = false;
    while (target !== null && !parentFound) {
      if (target === this._elf.nativeElement) {
        parentFound = true;
      }
      target = target.parentElement;
    }
    return parentFound;
  }
  toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      const arr2 = Array(arr.length);
      for (let i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
  }
  ngOnInit() {
    const self = this;
    this._elf.nativeElement.addEventListener("mousedown", this.mouseDown, false);
    this._handleOffsetX = this._elf.nativeElement.getBoundingClientRect().x;
    this.left = this.calcOffset(this._value);
    this._minBound = this._minBound === void 0 ? this._min : this._minBound;
    this._maxBound = this._maxBound === void 0 ? this._max : this._maxBound;
  }
  ngOnDestroy() {
    document.removeEventListener("mousemove", this.mouseMove, false);
    document.removeEventListener("mouseup", this.mouseUp, false);
  }
};
_SliderHandleComponent.ɵfac = function SliderHandleComponent_Factory(t) {
  return new (t || _SliderHandleComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer));
};
_SliderHandleComponent.ɵcmp = ɵɵdefineComponent({
  type: _SliderHandleComponent,
  selectors: [["SliderHandle"], ["nzm-slider-handle"]],
  hostBindings: function SliderHandleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart", function SliderHandleComponent_touchstart_HostBindingHandler($event) {
        return ctx.panstart($event);
      })("touchmove", function SliderHandleComponent_touchmove_HostBindingHandler($event) {
        return ctx.panmove($event);
      })("touchend", function SliderHandleComponent_touchend_HostBindingHandler($event) {
        return ctx.panend($event);
      });
    }
  },
  inputs: {
    min: "min",
    max: "max",
    minBound: "minBound",
    maxBound: "maxBound",
    step: "step",
    value: "value",
    disabled: "disabled",
    sliderLength: "sliderLength",
    sliderStart: "sliderStart",
    handleStyle: "handleStyle"
  },
  outputs: {
    onChange: "onChange",
    onAfterChange: "onAfterChange"
  },
  decls: 1,
  vars: 3,
  consts: [["role", "slider", 1, "am-slider-handle", 3, "ngStyle"]],
  template: function SliderHandleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵstyleProp("left", ctx.left, "%");
      ɵɵproperty("ngStyle", ctx.handleStyle);
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2
});
var SliderHandleComponent = _SliderHandleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderHandleComponent, [{
    type: Component,
    args: [{
      selector: "SliderHandle, nzm-slider-handle",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div role="slider" class="am-slider-handle" [ngStyle]="handleStyle" [style.left.%]="left"></div>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DomSanitizer
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minBound: [{
      type: Input
    }],
    maxBound: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    sliderLength: [{
      type: Input
    }],
    sliderStart: [{
      type: Input
    }],
    handleStyle: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onAfterChange: [{
      type: Output
    }],
    panstart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    panmove: [{
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    panend: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }]
  });
})();
var _SliderMarksComponent = class _SliderMarksComponent {
  set min(value) {
    if (value && value <= this._max) {
      this._min = value;
    }
  }
  set max(value) {
    if (value && value >= this._min) {
      this._max = value;
    }
  }
  set marks(value) {
    this._marks = value;
  }
  set included(value) {
    this._included = value;
  }
  set upperBound(value) {
    if (value && value !== this._upperBound) {
      this._upperBound = value;
      this.setActiveCls();
    }
  }
  set lowerBound(value) {
    if (value && value !== this.lowerBound) {
      this._lowerBound = value;
      this.setActiveCls();
    }
  }
  get class() {
    return this._className;
  }
  constructor(_elf) {
    this._elf = _elf;
    this.markArray = [];
    this._min = 0;
    this._max = 100;
    this._marks = {};
    this._included = true;
    this._className = "am-slider-mark";
    this.onChange = new EventEmitter();
    this.onAfterChange = new EventEmitter();
  }
  getMarks(marksKeys) {
    this.markArray = [];
    marksKeys.map(parseFloat).sort((a, b) => a - b).map((point) => {
      const markItem = {
        markLabel: "",
        point: "",
        className: {},
        style: {}
      };
      const markPoint = this._marks[point];
      const markPointIsObject = typeof markPoint === "object";
      const markLabel = markPointIsObject ? markPoint.label : markPoint;
      if (!markLabel && markLabel !== 0) {
        return null;
      }
      const isActive = !this._included && point === this._upperBound || this._included && point <= this._upperBound && point >= this._lowerBound;
      const markClassName = {
        [`${this._className}-text`]: true,
        [`${this._className}-text-active`]: isActive
      };
      const bottomStyle = {
        marginBottom: "-50%",
        bottom: `${(point - this._min) / this._range * 100}%`
      };
      const leftStyle = {
        width: `${this._markWidth}%`,
        marginLeft: `${-this._markWidth / 2}%`,
        left: `${(point - this._min) / this._range * 100}%`
      };
      const style2 = leftStyle;
      const markStyle = markPointIsObject ? __spreadValues(__spreadValues({}, style2), markPoint.style) : style2;
      markItem.markLabel = markLabel;
      markItem.point = point;
      markItem.className = Object.keys(markClassName).join(" ");
      markItem.style = markStyle;
      this.markArray.push(markItem);
    });
  }
  setActiveCls() {
    for (let i = 0; i < this.markArray.length; i++) {
      const point = this.markArray[i].point;
      const isActive = !this._included && point === this._upperBound || this._included && point <= this._upperBound && point >= this._lowerBound;
      this.markArray[i].className = {
        [`${this._className}-text`]: true,
        [`${this._className}-text-active`]: isActive
      };
    }
  }
  setMarksLable() {
    for (let i = 0; i < this.markArray.length; i++) {
      const markEle = this._elf.nativeElement.getElementsByClassName(this._className + "-text")[i];
      markEle.innerHTML = this.markArray[i].markLabel;
    }
  }
  ngOnInit() {
    const marksKeys = Object.keys(this._marks);
    const marksCount = marksKeys.length;
    const unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
    this._markWidth = unit * 0.9;
    this._range = this._max - this._min;
    this.getMarks(marksKeys);
  }
  ngAfterViewInit() {
    this.setMarksLable();
  }
};
_SliderMarksComponent.ɵfac = function SliderMarksComponent_Factory(t) {
  return new (t || _SliderMarksComponent)(ɵɵdirectiveInject(ElementRef));
};
_SliderMarksComponent.ɵcmp = ɵɵdefineComponent({
  type: _SliderMarksComponent,
  selectors: [["SliderMarks"], ["nzm-slider-marks"]],
  hostVars: 2,
  hostBindings: function SliderMarksComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.class);
    }
  },
  inputs: {
    min: "min",
    max: "max",
    marks: "marks",
    included: "included",
    upperBound: "upperBound",
    lowerBound: "lowerBound"
  },
  outputs: {
    onChange: "onChange",
    onAfterChange: "onAfterChange"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle"]],
  template: function SliderMarksComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SliderMarksComponent_span_0_Template, 1, 2, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.markArray);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle],
  encapsulation: 2
});
var SliderMarksComponent = _SliderMarksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderMarksComponent, [{
    type: Component,
    args: [{
      selector: "SliderMarks, nzm-slider-marks",
      encapsulation: ViewEncapsulation$1.None,
      template: '<span *ngFor="let item of markArray" [ngClass]="item.className" [ngStyle]="item.style"> </span>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    marks: [{
      type: Input
    }],
    included: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    lowerBound: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onAfterChange: [{
      type: Output
    }],
    class: [{
      type: HostBinding
    }]
  });
})();
var _SliderStepsComponent = class _SliderStepsComponent {
  set min(value) {
    if (value && value <= this._max) {
      this._min = value;
    }
  }
  set max(value) {
    if (value && value >= this._min) {
      this._max = value;
    }
  }
  set marks(value) {
    this._marks = value;
  }
  set step(value) {
    this._step = value;
  }
  set included(value) {
    this._included = value;
  }
  set dots(value) {
    this._dots = value;
  }
  set upperBound(value) {
    if (value !== void 0 && value !== this._upperBound) {
      this._upperBound = value;
      this.setActiveCls();
    }
  }
  set lowerBound(value) {
    if (value !== void 0 && value !== this.lowerBound) {
      this._lowerBound = value;
      this.setActiveCls();
    }
  }
  get class() {
    return "am-slider-step";
  }
  constructor(_elf) {
    this._elf = _elf;
    this.prefixCls = "am-slider";
    this.stepArray = [];
    this._min = 0;
    this._max = 100;
    this._marks = {};
    this._included = true;
    this._dots = false;
  }
  calPoints() {
    const points = Object.keys(this._marks).map(parseFloat);
    if (this._dots) {
      for (let i = this._min; i <= this._max; i = i + this._step) {
        if (points.indexOf(i) < 0) {
          points.push(i);
        }
      }
    }
    return points;
  }
  getSteps(points) {
    const range = this._max - this._min;
    this.stepArray = [];
    points.map((point) => {
      const stepItem = {
        stepStyle: {},
        stepClass: {},
        point: null
      };
      const offset = `${Math.abs(point - this._min) / range * 100}%`;
      const isActived = !this._included && point === this._upperBound || this._included && point <= this._upperBound && point >= this._lowerBound;
      let style2 = __spreadValues({
        left: offset
      }, this._dotStyle);
      if (isActived) {
        style2 = __spreadValues(__spreadValues({}, style2), this._activeDotStyle);
      }
      const pointClassName = {
        [`${this.prefixCls}-dot`]: true,
        [`${this.prefixCls}-dot-active`]: isActived
      };
      stepItem.point = point;
      stepItem.stepStyle = style2;
      stepItem.stepClass = pointClassName;
      this.stepArray.push(stepItem);
    });
  }
  setActiveCls() {
    for (let i = 0; i < this.stepArray.length; i++) {
      const point = this.stepArray[i].point;
      const isActived = !this._included && point === this._upperBound || this._included && point <= this._upperBound && point >= this._lowerBound;
      this.stepArray[i].stepClass = {
        [`${this.prefixCls}-dot`]: true,
        [`${this.prefixCls}-dot-active`]: isActived
      };
    }
  }
  ngOnInit() {
    const points = this.calPoints();
    this.getSteps(points);
  }
};
_SliderStepsComponent.ɵfac = function SliderStepsComponent_Factory(t) {
  return new (t || _SliderStepsComponent)(ɵɵdirectiveInject(ElementRef));
};
_SliderStepsComponent.ɵcmp = ɵɵdefineComponent({
  type: _SliderStepsComponent,
  selectors: [["SliderSteps"], ["nzm-slider-steps"]],
  hostVars: 2,
  hostBindings: function SliderStepsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassMap(ctx.class);
    }
  },
  inputs: {
    min: "min",
    max: "max",
    marks: "marks",
    step: "step",
    included: "included",
    dots: "dots",
    upperBound: "upperBound",
    lowerBound: "lowerBound"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle"]],
  template: function SliderStepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SliderStepsComponent_span_0_Template, 1, 2, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.stepArray);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle],
  encapsulation: 2
});
var SliderStepsComponent = _SliderStepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderStepsComponent, [{
    type: Component,
    args: [{
      selector: "SliderSteps, nzm-slider-steps",
      encapsulation: ViewEncapsulation$1.None,
      template: '<span *ngFor="let item of stepArray" [ngClass]="item.stepClass" [ngStyle]="item.stepStyle"> </span>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    marks: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    included: [{
      type: Input
    }],
    dots: [{
      type: Input
    }],
    upperBound: [{
      type: Input
    }],
    lowerBound: [{
      type: Input
    }],
    class: [{
      type: HostBinding
    }]
  });
})();
var _SliderTrackComponent = class _SliderTrackComponent {
  get className() {
    return this._className;
  }
  set className(value) {
    this._className = value;
  }
  get included() {
    return this._included;
  }
  set included(value) {
    this._included = value;
  }
  set offset(value) {
    this._offset = value;
  }
  set length(value) {
    this._length = value;
  }
  set style(value) {
    this._style = value;
  }
  constructor(_elf, _sanitizer) {
    this._elf = _elf;
    this._sanitizer = _sanitizer;
    this.prefixCls = "am-slider";
    this._included = true;
  }
  ngOnChanges() {
    const positonStyle = {
      left: `${this._offset}%`,
      width: `${this._length}%`
    };
    this.elStyle = __spreadValues(__spreadValues({}, this._style), positonStyle);
  }
};
_SliderTrackComponent.ɵfac = function SliderTrackComponent_Factory(t) {
  return new (t || _SliderTrackComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DomSanitizer));
};
_SliderTrackComponent.ɵcmp = ɵɵdefineComponent({
  type: _SliderTrackComponent,
  selectors: [["SliderTrack"], ["nzm-slider-track"]],
  inputs: {
    className: "className",
    included: "included",
    offset: "offset",
    length: "length",
    style: "style"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"]],
  template: function SliderTrackComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SliderTrackComponent_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.included);
    }
  },
  dependencies: [NgClass, NgIf, NgStyle],
  encapsulation: 2
});
var SliderTrackComponent = _SliderTrackComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderTrackComponent, [{
    type: Component,
    args: [{
      selector: "SliderTrack, nzm-slider-track",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div *ngIf="included" [ngClass]="className" [ngStyle]="elStyle"></div>\n'
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: DomSanitizer
  }], {
    className: [{
      type: Input
    }],
    included: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    style: [{
      type: Input
    }]
  });
})();
var _SliderComponent = class _SliderComponent {
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = value;
  }
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = value;
  }
  get step() {
    return this._step;
  }
  set step(value) {
    this._step = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.setValue(value);
  }
  set defaultValue(value) {
    this._defaultValue = value;
    this.setValue(value);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this.setCls();
  }
  get marks() {
    return this._marks;
  }
  set marks(value) {
    this._marks = value;
  }
  get dots() {
    return this._dots;
  }
  set dots(value) {
    this._dots = value;
  }
  get included() {
    return this._included;
  }
  set included(value) {
    this._included = value;
  }
  get handleStyle() {
    return this._handleStyle;
  }
  set handleStyle(value) {
    this._handleStyle = value;
  }
  get trackStyle() {
    return this._trackStyle;
  }
  set trackStyle(value) {
    this._trackStyle = value;
  }
  get railStyle() {
    return this._railStyle;
  }
  set railStyle(value) {
    this._railStyle = value;
  }
  constructor(_elf) {
    this._elf = _elf;
    this.prefixCls = "am-slider";
    this.offset = 0;
    this.length = 0;
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._defaultValue = 0;
    this._disabled = false;
    this._marks = {};
    this._dots = false;
    this._included = true;
    this._trackStyle = {};
    this.onAfterChange = new EventEmitter();
    this.onChange = new EventEmitter();
    this.amSliderWrapper = true;
    this._ngModelOnChange = () => {
    };
    this._ngModelOnTouched = () => {
    };
  }
  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }
  handleChange(e) {
    setTimeout(() => {
      this.setTrack(e);
      this._value = e;
    }, 10);
    this.onChange.emit(e);
    this._ngModelOnChange(e);
  }
  handleAfterChange(e) {
    setTimeout(() => {
      this.setTrack(e);
      this._value = e;
    }, 10);
    this.onAfterChange.emit(e);
  }
  valueRange() {
    if (this._value < this._min) {
      this._value = this._min;
    }
    if (this._value > this._max) {
      this._value = this._max;
    }
  }
  ngOnInit() {
    this.setCls();
    this.setValue(this._value);
    const sliderCoords = this._elf.nativeElement.getElementsByClassName("am-slider")[0].getBoundingClientRect();
    this.sliderLength = sliderCoords.width;
    this.sliderStart = sliderCoords.left;
  }
  writeValue(value) {
    this.setValue(value, true);
  }
  setValue(value, isWriteValue = false) {
    if (value === 0 || value) {
      this._value = value;
    } else {
      this._value = this._defaultValue;
    }
    this.valueRange();
    this.setTrack(this._value);
    if (isWriteValue) {
      this._ngModelOnChange(this._value);
    } else {
      this.onAfterChange.emit(this._value);
    }
  }
  setTrack(e) {
    this.offset = 0;
    this.length = (e - this._min) * 100 / (this._max - this._min);
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
};
_SliderComponent.ɵfac = function SliderComponent_Factory(t) {
  return new (t || _SliderComponent)(ɵɵdirectiveInject(ElementRef));
};
_SliderComponent.ɵcmp = ɵɵdefineComponent({
  type: _SliderComponent,
  selectors: [["Slider"], ["nzm-slider"]],
  hostVars: 2,
  hostBindings: function SliderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-slider-wrapper", ctx.amSliderWrapper);
    }
  },
  inputs: {
    min: "min",
    max: "max",
    step: "step",
    value: "value",
    defaultValue: "defaultValue",
    disabled: "disabled",
    marks: "marks",
    dots: "dots",
    included: "included",
    handleStyle: "handleStyle",
    trackStyle: "trackStyle",
    railStyle: "railStyle"
  },
  outputs: {
    onAfterChange: "onAfterChange",
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _SliderComponent),
    multi: true
  }])],
  decls: 6,
  vars: 30,
  consts: [[1, "am-slider", 3, "ngClass"], [1, "am-slider-rail", 3, "ngStyle"], [3, "className", "offset", "length", "included"], [3, "max", "min", "dots", "step", "marks", "lowerBound", "upperBound", "included"], [3, "max", "min", "value", "step", "disabled", "handleStyle", "sliderStart", "sliderLength", "onChange", "onAfterChange"], [3, "max", "min", "marks", "lowerBound", "upperBound", "included"]],
  template: function SliderComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1)(2, "SliderTrack", 2)(3, "SliderSteps", 3);
      ɵɵelementStart(4, "SliderHandle", 4);
      ɵɵlistener("onChange", function SliderComponent_Template_SliderHandle_onChange_4_listener($event) {
        return ctx.handleChange($event);
      })("onAfterChange", function SliderComponent_Template_SliderHandle_onAfterChange_4_listener($event) {
        return ctx.handleAfterChange($event);
      });
      ɵɵelementEnd();
      ɵɵelement(5, "SliderMarks", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.sliderCls);
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ctx.railStyle);
      ɵɵadvance(1);
      ɵɵstyleMap(ctx.trackStyle);
      ɵɵproperty("className", "am-slider-track")("offset", ctx.offset)("length", ctx.length)("included", ctx.included);
      ɵɵadvance(1);
      ɵɵproperty("max", ctx.max)("min", ctx.min)("dots", ctx.dots)("step", ctx.step)("marks", ctx.marks)("lowerBound", ctx.min)("upperBound", ctx.value)("included", ctx.included);
      ɵɵadvance(1);
      ɵɵproperty("max", ctx.max)("min", ctx.min)("value", ctx.value)("step", ctx.step)("disabled", ctx.disabled)("handleStyle", ctx.handleStyle)("sliderStart", ctx.sliderStart)("sliderLength", ctx.sliderLength);
      ɵɵadvance(1);
      ɵɵproperty("max", ctx.max)("min", ctx.min)("marks", ctx.marks)("lowerBound", ctx.min)("upperBound", ctx.value)("included", ctx.included);
    }
  },
  dependencies: [NgClass, NgStyle, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
  encapsulation: 2
});
var SliderComponent = _SliderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      selector: "Slider , nzm-slider",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SliderComponent),
        multi: true
      }],
      template: `<div class="am-slider" [ngClass]="sliderCls">
  <div class="am-slider-rail" [ngStyle]="railStyle"></div>
  <SliderTrack
    [className]="'am-slider-track'"
    [style]="trackStyle"
    [offset]="offset"
    [length]="length"
    [included]="included"
  ></SliderTrack>
  <SliderSteps
    [max]="max"
    [min]="min"
    [dots]="dots"
    [step]="step"
    [marks]="marks"
    [lowerBound]="min"
    [upperBound]="value"
    [included]="included"
  ></SliderSteps>
  <SliderHandle
    [max]="max"
    [min]="min"
    [value]="value"
    [step]="step"
    [disabled]="disabled"
    [handleStyle]="handleStyle"
    [sliderStart]="sliderStart"
    [sliderLength]="sliderLength"
    (onChange)="handleChange($event)"
    (onAfterChange)="handleAfterChange($event)"
  ></SliderHandle>
  <SliderMarks
    [max]="max"
    [min]="min"
    [marks]="marks"
    [lowerBound]="min"
    [upperBound]="value"
    [included]="included"
  ></SliderMarks>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    marks: [{
      type: Input
    }],
    dots: [{
      type: Input
    }],
    included: [{
      type: Input
    }],
    handleStyle: [{
      type: Input
    }],
    trackStyle: [{
      type: Input
    }],
    railStyle: [{
      type: Input
    }],
    onAfterChange: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    amSliderWrapper: [{
      type: HostBinding,
      args: ["class.am-slider-wrapper"]
    }]
  });
})();
var _SliderModule = class _SliderModule {
};
_SliderModule.ɵfac = function SliderModule_Factory(t) {
  return new (t || _SliderModule)();
};
_SliderModule.ɵmod = ɵɵdefineNgModule({
  type: _SliderModule,
  declarations: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
  imports: [CommonModule],
  exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent]
});
_SliderModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var SliderModule = _SliderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderModule, [{
    type: NgModule,
    args: [{
      exports: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
      declarations: [SliderComponent, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-range.mjs
function RangeComponent_SliderTrack_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SliderTrack", 6);
  }
  if (rf & 2) {
    const off_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.trackStyle[i_r3]);
    ɵɵproperty("className", "am-slider-track")("included", ctx_r0.included)("offset", off_r2)("length", ctx_r0.length[i_r3]);
  }
}
function RangeComponent_SliderHandle_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "SliderHandle", 7);
    ɵɵlistener("onChange", function RangeComponent_SliderHandle_4_Template_SliderHandle_onChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.handleChange($event, i_r5));
    })("onAfterChange", function RangeComponent_SliderHandle_4_Template_SliderHandle_onAfterChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.handleAfterChange($event, i_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("max", ctx_r1.max)("min", ctx_r1.min)("maxBound", ctx_r1.maxBound[i_r5])("minBound", ctx_r1.minBound[i_r5])("value", val_r4)("step", ctx_r1.step)("disabled", ctx_r1.disabled)("sliderLength", ctx_r1.sliderLength)("sliderStart", ctx_r1.sliderStart)("handleStyle", ctx_r1.handleStyle[i_r5]);
  }
}
var _RangeComponent = class _RangeComponent {
  get min() {
    return this._min;
  }
  set min(value) {
    this._min = value;
  }
  get max() {
    return this._max;
  }
  set max(value) {
    this._max = value;
  }
  get step() {
    return this._step;
  }
  set step(value) {
    this._step = value;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.setValue(value);
  }
  set defaultValue(value) {
    this._defaultValue = value;
    this._value = this._defaultValue;
    this.setValue(value);
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  get marks() {
    return this._marks;
  }
  set marks(value) {
    this._marks = value;
  }
  get dots() {
    return this._dots;
  }
  set dots(value) {
    this._dots = value;
  }
  get included() {
    return this._included;
  }
  set included(value) {
    this._included = value;
  }
  set count(value) {
    this._count = value;
  }
  set allowCross(value) {
    this._allowCross = value;
    this.setValueBound();
  }
  set pushable(value) {
    this._pushable = value;
    if (this.verifyPushable()) {
      this.setValueBound();
    }
  }
  get handleStyle() {
    return this._handleStyle;
  }
  set handleStyle(value) {
    this._handleStyle = value;
  }
  get trackStyle() {
    return this._trackStyle;
  }
  set trackStyle(value) {
    this._trackStyle = value;
  }
  get railStyle() {
    return this._railStyle;
  }
  set railStyle(value) {
    this._railStyle = value;
  }
  constructor(_elf) {
    this._elf = _elf;
    this.prefixCls = "am-slider";
    this.offset = [];
    this.length = [];
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._defaultValue = [0, 0, 0];
    this._disabled = false;
    this._marks = {};
    this._dots = false;
    this._included = true;
    this._count = 1;
    this._allowCross = true;
    this._handleStyle = [];
    this._trackStyle = [];
    this.onChange = new EventEmitter();
    this.onAfterChange = new EventEmitter();
    this.amWrapper = true;
    this._ngModelOnChange = () => {
    };
    this._ngModelOnTouched = () => {
    };
  }
  setCls() {
    this.sliderCls = {
      [`${this.prefixCls}-disabled`]: this._disabled
    };
  }
  initialValue() {
    const minTemp = this._min;
    if (!this.verifyPushable()) {
      this._pushable = 0;
      console.warn("pushable设置无效，已大于有些value间隔，被强制设为0");
    }
    const initialValue = Array.apply(null, Array(this._count + 1)).map(function() {
      return minTemp;
    });
    this._defaultValue = this._defaultValue !== void 0 ? this._defaultValue : initialValue;
    this._value = this._value !== void 0 ? this._value : this._defaultValue;
    this._count = this._value.length - 1;
    for (let i = 0; i < this._value.length; i++) {
      if (this._value[i] < this._min) {
        this._value[i] = this._min;
      } else if (this._value[i] > this._max) {
        this._value[i] = this._max;
      }
    }
    if (this._count > 0) {
      this.upperBound = Math.max(...this._value);
      this.lowerBound = Math.min(...this._value);
    }
  }
  handleChange(e, i) {
    let temp = [...this._value];
    temp[i] = e;
    this.upperBound = Math.max(...temp);
    this.lowerBound = Math.min(...temp);
    this.setTrackStyle(temp);
    this.onChange.emit(temp);
  }
  handleAfterChange(e, i) {
    setTimeout(() => {
      this._value[i] = e;
      this.upperBound = Math.max(...this._value);
      this.lowerBound = Math.min(...this._value);
      this.setTrackStyle(this._value);
      this.onAfterChange.emit(this._value);
      this._ngModelOnChange(this._value);
      this.setValueBound();
    }, 0);
  }
  setTrackStyle(value) {
    if (value && value.length === this._count + 1) {
      value.sort((a, b) => a - b);
      for (let i = 0; i < this._count; i++) {
        this.offset[i] = value[i] * 100 / (this._max - this._min);
        this.length[i] = (value[i + 1] - value[i]) * 100 / (this._max - this._min);
      }
    }
  }
  setValueBound() {
    this.maxBound = [];
    this.minBound = [];
    if (this._allowCross && this._pushable === void 0 || this._handleCount <= 1) {
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = this._max;
        this.minBound[i] = this._min;
      }
    } else {
      if (this._pushable === void 0) {
        this._pushable = 0;
      }
      for (let i = 0; i < this._handleCount; i++) {
        this.maxBound[i] = i === this._handleCount - 1 ? this._max : this._value[i + 1] - this._pushable;
        this.minBound[i] = i === 0 ? this._min : this._value[i - 1] + this._pushable;
      }
    }
  }
  verifyPushable() {
    for (let i = 1; i < this._handleCount; i++) {
      const diff = this._value[i] - this._value[i - 1];
      if (diff < this._pushable) {
        return false;
      }
    }
    return true;
  }
  writeValue(value) {
    this.setValue(value, true);
  }
  setValue(value, isWriteValue = false) {
    if (value) {
      this._value = value;
      this._handleCount = this._value.length + 1;
      this.initialValue();
      this.setValueBound();
      this.setCls();
      this.setTrackStyle(this._value);
      if (isWriteValue) {
        this._ngModelOnChange(this._value);
      } else {
        this.onAfterChange.emit(this._value);
      }
    }
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
  ngOnInit() {
    this.initialValue();
    this.setValueBound();
    this._handleCount = this._count + 1;
    this.setCls();
    const sliderCoords = this._elf.nativeElement.getElementsByClassName("am-slider")[0].getBoundingClientRect();
    this.sliderLength = sliderCoords.width;
    this.sliderStart = sliderCoords.left;
  }
};
_RangeComponent.ɵfac = function RangeComponent_Factory(t) {
  return new (t || _RangeComponent)(ɵɵdirectiveInject(ElementRef));
};
_RangeComponent.ɵcmp = ɵɵdefineComponent({
  type: _RangeComponent,
  selectors: [["Range"], ["nzm-range"]],
  hostVars: 2,
  hostBindings: function RangeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-slider-wrapper", ctx.amWrapper);
    }
  },
  inputs: {
    min: "min",
    max: "max",
    step: "step",
    value: "value",
    defaultValue: "defaultValue",
    disabled: "disabled",
    marks: "marks",
    dots: "dots",
    included: "included",
    count: "count",
    allowCross: "allowCross",
    pushable: "pushable",
    handleStyle: "handleStyle",
    trackStyle: "trackStyle",
    railStyle: "railStyle"
  },
  outputs: {
    onChange: "onChange",
    onAfterChange: "onAfterChange"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _RangeComponent),
    multi: true
  }])],
  decls: 6,
  vars: 16,
  consts: [[1, "am-slider", 3, "ngClass"], [1, "am-slider-rail", 3, "ngStyle"], [3, "className", "included", "style", "offset", "length", 4, "ngFor", "ngForOf"], [3, "max", "min", "dots", "step", "marks", "upperBound", "lowerBound"], [3, "max", "min", "maxBound", "minBound", "value", "step", "disabled", "sliderLength", "sliderStart", "handleStyle", "onChange", "onAfterChange", 4, "ngFor", "ngForOf"], [3, "max", "min", "marks", "upperBound", "lowerBound"], [3, "className", "included", "offset", "length"], [3, "max", "min", "maxBound", "minBound", "value", "step", "disabled", "sliderLength", "sliderStart", "handleStyle", "onChange", "onAfterChange"]],
  template: function RangeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "div", 1);
      ɵɵtemplate(2, RangeComponent_SliderTrack_2_Template, 1, 6, "SliderTrack", 2);
      ɵɵelement(3, "SliderSteps", 3);
      ɵɵtemplate(4, RangeComponent_SliderHandle_4_Template, 1, 10, "SliderHandle", 4);
      ɵɵelement(5, "SliderMarks", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ctx.sliderCls);
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ctx.railStyle);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.offset);
      ɵɵadvance(1);
      ɵɵproperty("max", ctx.max)("min", ctx.min)("dots", ctx.dots)("step", ctx.step)("marks", ctx.marks)("upperBound", ctx.upperBound)("lowerBound", ctx.lowerBound);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.value);
      ɵɵadvance(1);
      ɵɵproperty("max", ctx.max)("min", ctx.min)("marks", ctx.marks)("upperBound", ctx.upperBound)("lowerBound", ctx.lowerBound);
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle, SliderHandleComponent, SliderMarksComponent, SliderStepsComponent, SliderTrackComponent],
  encapsulation: 2
});
var RangeComponent = _RangeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeComponent, [{
    type: Component,
    args: [{
      selector: "Range , nzm-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RangeComponent),
        multi: true
      }],
      template: `<div class="am-slider" [ngClass]="sliderCls">
  <div class="am-slider-rail" [ngStyle]="railStyle"></div>
  <SliderTrack
    *ngFor="let off of offset; let i = index"
    [className]="'am-slider-track'"
    [included]="included"
    [style]="trackStyle[i]"
    [offset]="off"
    [length]="length[i]"
  ></SliderTrack>
  <SliderSteps
    [max]="max"
    [min]="min"
    [dots]="dots"
    [step]="step"
    [marks]="marks"
    [upperBound]="upperBound"
    [lowerBound]="lowerBound"
  ></SliderSteps>
  <SliderHandle
    *ngFor="let val of value; let i = index"
    [max]="max"
    [min]="min"
    [maxBound]="maxBound[i]"
    [minBound]="minBound[i]"
    [value]="val"
    [step]="step"
    [disabled]="disabled"
    [sliderLength]="sliderLength"
    [sliderStart]="sliderStart"
    [handleStyle]="handleStyle[i]"
    (onChange)="handleChange($event, i)"
    (onAfterChange)="handleAfterChange($event, i)"
  ></SliderHandle>
  <SliderMarks
    [max]="max"
    [min]="min"
    [marks]="marks"
    [upperBound]="upperBound"
    [lowerBound]="lowerBound"
  ></SliderMarks>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    marks: [{
      type: Input
    }],
    dots: [{
      type: Input
    }],
    included: [{
      type: Input
    }],
    count: [{
      type: Input
    }],
    allowCross: [{
      type: Input
    }],
    pushable: [{
      type: Input
    }],
    handleStyle: [{
      type: Input
    }],
    trackStyle: [{
      type: Input
    }],
    railStyle: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onAfterChange: [{
      type: Output
    }],
    amWrapper: [{
      type: HostBinding,
      args: ["class.am-slider-wrapper"]
    }]
  });
})();
var _RangeModule = class _RangeModule {
};
_RangeModule.ɵfac = function RangeModule_Factory(t) {
  return new (t || _RangeModule)();
};
_RangeModule.ɵmod = ɵɵdefineNgModule({
  type: _RangeModule,
  declarations: [RangeComponent],
  imports: [CommonModule, SliderModule],
  exports: [RangeComponent]
});
_RangeModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SliderModule]
});
var RangeModule = _RangeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeModule, [{
    type: NgModule,
    args: [{
      exports: [RangeComponent],
      declarations: [RangeComponent],
      imports: [CommonModule, SliderModule]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-pagination.mjs
function PaginationComponent_Flex_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r3.locale.prevText, " ");
  }
}
function PaginationComponent_Flex_1_4_ng_template_0_Template(rf, ctx) {
}
function PaginationComponent_Flex_1_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PaginationComponent_Flex_1_4_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.locale.prevText);
  }
}
function PaginationComponent_Flex_1_FlexItem_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "FlexItem", 5)(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "/ ");
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r5.prefixCls, "-wrap");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r5.current);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r5.total);
  }
}
function PaginationComponent_Flex_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r6.locale.nextText, " ");
  }
}
function PaginationComponent_Flex_1_9_ng_template_0_Template(rf, ctx) {
}
function PaginationComponent_Flex_1_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PaginationComponent_Flex_1_9_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.locale.nextText);
  }
}
function PaginationComponent_Flex_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "Flex")(1, "FlexItem")(2, "a", 2);
    ɵɵlistener("onClick", function PaginationComponent_Flex_1_Template_a_onClick_2_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onClick(ctx_r10.current - 1));
    });
    ɵɵtemplate(3, PaginationComponent_Flex_1_ng_container_3_Template, 2, 1, "ng-container", 0)(4, PaginationComponent_Flex_1_4_Template, 1, 1, null, 0);
    ɵɵelementEnd()();
    ɵɵtemplate(5, PaginationComponent_Flex_1_FlexItem_5_Template, 6, 5, "FlexItem", 3);
    ɵɵelementStart(6, "FlexItem")(7, "a", 2);
    ɵɵlistener("onClick", function PaginationComponent_Flex_1_Template_a_onClick_7_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.onClick(ctx_r12.current + 1));
    });
    ɵɵtemplate(8, PaginationComponent_Flex_1_ng_container_8_Template, 2, 1, "ng-container", 0)(9, PaginationComponent_Flex_1_9_Template, 1, 1, null, 0);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-wrap-btn ", ctx_r0.prefixCls, "-wrap-btn-prev");
    ɵɵadvance(1);
    ɵɵproperty("inline", true)("disabled", ctx_r0.current <= 1 || ctx_r0.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.locale.prevText));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.locale.prevText));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.simple);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate2("", ctx_r0.prefixCls, "-wrap-btn ", ctx_r0.prefixCls, "-wrap-btn-next");
    ɵɵadvance(1);
    ɵɵproperty("inline", true)("disabled", ctx_r0.current >= ctx_r0.total || ctx_r0.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.locale.nextText));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.locale.nextText));
  }
}
function PaginationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtext(3, "/");
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-wrap");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.current);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.total);
  }
}
function PaginationComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r13.prefixCls, "-wrap-dot ", ctx_r13.current === i_r15 + 1 ? ctx_r13.prefixCls + "-wrap-dot-active" : "", "");
  }
}
function PaginationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, PaginationComponent_div_3_div_1_Template, 2, 4, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-wrap");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.getNumber(ctx_r2.total));
  }
}
var _PaginationComponent = class _PaginationComponent {
  get locale() {
    return this._locale;
  }
  set locale(v) {
    this._locale = v;
    this.hasSetLocale = true;
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
  constructor(_localeProviderService) {
    this._localeProviderService = _localeProviderService;
    this.prefixCls = "am-pagination";
    this.hasSetLocale = false;
    this._locale = {
      prevText: "",
      nextText: ""
    };
    this._unsubscribe$ = new Subject();
    this.mode = "button";
    this.current = 1;
    this.total = 0;
    this.simple = false;
    this.disabled = false;
    this.onChange = new EventEmitter();
  }
  isTemplateRef(key) {
    return key instanceof TemplateRef;
  }
  onClick(p) {
    this.current = p;
    this.onChange.emit(p);
  }
  getNumber(p) {
    return new Array(p);
  }
  ngOnInit() {
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      if (!this.hasSetLocale) {
        this._locale = this._localeProviderService.getLocaleSubObj("Pagination");
      }
    });
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
  return new (t || _PaginationComponent)(ɵɵdirectiveInject(LocaleProviderService));
};
_PaginationComponent.ɵcmp = ɵɵdefineComponent({
  type: _PaginationComponent,
  selectors: [["Pagination"], ["nzm-pagination"]],
  inputs: {
    mode: "mode",
    current: "current",
    total: "total",
    simple: "simple",
    disabled: "disabled",
    locale: "locale"
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 4,
  vars: 7,
  consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], ["Button", "", 3, "inline", "disabled", "onClick"], ["aria-live", "assertive", 3, "class", 4, "ngIf"], [3, "ngTemplateOutlet"], ["aria-live", "assertive"], [1, "active"], [3, "class", 4, "ngFor", "ngForOf"]],
  template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵtemplate(1, PaginationComponent_Flex_1_Template, 10, 17, "Flex", 0)(2, PaginationComponent_div_2_Template, 6, 5, "div", 1)(3, PaginationComponent_div_3_Template, 2, 4, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate2("", ctx.prefixCls, " ", ctx.prefixCls, "-align-center");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.mode === "button");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.mode === "number");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.mode === "pointer");
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet, ButtonComponent, FlexComponent, FlexItemComponent],
  encapsulation: 2
});
var PaginationComponent = _PaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationComponent, [{
    type: Component,
    args: [{
      selector: "Pagination, nzm-pagination",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="{{ prefixCls }} {{ prefixCls }}-align-center">
  <Flex *ngIf="mode === 'button'">
    <FlexItem class="{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-prev">
      <a Button [inline]="true" [disabled]="current <= 1 || disabled" (onClick)="onClick(current - 1)">
        <ng-container *ngIf="!isTemplateRef(locale.prevText)">
          {{ locale.prevText }}
        </ng-container>
        <ng-template *ngIf="isTemplateRef(locale.prevText)" [ngTemplateOutlet]="locale.prevText"></ng-template>
      </a>
    </FlexItem>
    <FlexItem class="{{ prefixCls }}-wrap" aria-live="assertive" *ngIf="!simple">
      <span class="active">{{ current }}</span
      >/
      <span>{{ total }}</span>
    </FlexItem>
    <FlexItem class="{{ prefixCls }}-wrap-btn {{ prefixCls }}-wrap-btn-next">
      <a Button [inline]="true" [disabled]="current >= total || disabled" (onClick)="onClick(current + 1)">
        <ng-container *ngIf="!isTemplateRef(locale.nextText)">
          {{ locale.nextText }}
        </ng-container>
        <ng-template *ngIf="isTemplateRef(locale.nextText)" [ngTemplateOutlet]="locale.nextText"></ng-template>
      </a>
    </FlexItem>
  </Flex>

  <div class="{{ prefixCls }}-wrap" *ngIf="mode === 'number'">
    <span class="active">{{ current }}</span
    >/<span>{{ total }}</span>
  </div>

  <div class="{{ prefixCls }}-wrap" *ngIf="mode === 'pointer'">
    <div
      *ngFor="let number of getNumber(total); let i = index"
      class="{{ prefixCls }}-wrap-dot {{ current === i + 1 ? prefixCls + '-wrap-dot-active' : '' }}"
    >
      <span></span>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LocaleProviderService
  }], {
    mode: [{
      type: Input
    }],
    current: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    simple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }]
  });
})();
var _PaginationModule = class _PaginationModule {
};
_PaginationModule.ɵfac = function PaginationModule_Factory(t) {
  return new (t || _PaginationModule)();
};
_PaginationModule.ɵmod = ɵɵdefineNgModule({
  type: _PaginationModule,
  declarations: [PaginationComponent],
  imports: [CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule],
  exports: [PaginationComponent]
});
_PaginationModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule]
});
var PaginationModule = _PaginationModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, FlexModule, IconModule, LocaleProviderModule],
      declarations: [PaginationComponent],
      exports: [PaginationComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-tag.mjs
function TagComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("click", function TagComponent_div_0_div_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onTagClose());
    });
    ɵɵelement(1, "Icon", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-close");
    ɵɵadvance(1);
    ɵɵproperty("type", "cross-circle")("size", "xs");
  }
}
function TagComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("click", function TagComponent_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onClick());
    });
    ɵɵelementStart(1, "div");
    ɵɵprojection(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, TagComponent_div_0_div_3_Template, 2, 5, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-text");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.closable && !ctx_r0.disabled && !ctx_r0.small);
  }
}
var _c028 = ["*"];
var _TagComponent = class _TagComponent {
  get small() {
    return this._small;
  }
  set small(v) {
    this._small = v;
    this.setClassMap();
  }
  get closable() {
    return this._closable;
  }
  set closable(v) {
    this._closable = v;
    this.setClassMap();
  }
  set selected(v) {
    this._selected = v;
    this.setClassMap();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    this.setClassMap();
  }
  constructor() {
    this.prefixCls = "am-tag";
    this.closed = false;
    this.wrapCls = {};
    this._small = false;
    this._closable = false;
    this._selected = false;
    this._disabled = false;
    this.onChange = new EventEmitter();
    this.onClose = new EventEmitter();
    this.afterClose = new EventEmitter();
  }
  onClick() {
    if (this._disabled) {
      return;
    }
    this._selected = !this._selected;
    this.onChange.emit(this._selected);
    this.setClassMap();
  }
  onTagClose() {
    this.onClose.emit();
    this.closed = true;
    this.afterClose.emit();
  }
  setClassMap() {
    this.wrapCls = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-normal`]: !this._disabled && (!this._selected || this._small || this._closable),
      [`${this.prefixCls}-small`]: this._small,
      [`${this.prefixCls}-active`]: this._selected && !this._disabled && !this._small && !this._closable,
      [`${this.prefixCls}-disabled`]: this._disabled,
      [`${this.prefixCls}-closable`]: this._closable
    };
  }
  ngOnInit() {
    this.setClassMap();
  }
};
_TagComponent.ɵfac = function TagComponent_Factory(t) {
  return new (t || _TagComponent)();
};
_TagComponent.ɵcmp = ɵɵdefineComponent({
  type: _TagComponent,
  selectors: [["Tag"], ["nzm-tag"]],
  inputs: {
    small: "small",
    closable: "closable",
    selected: "selected",
    disabled: "disabled"
  },
  outputs: {
    onChange: "onChange",
    onClose: "onClose",
    afterClose: "afterClose"
  },
  ngContentSelectors: _c028,
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["role", "button", "aria-label", "remove tag", 3, "class", "click", 4, "ngIf"], ["role", "button", "aria-label", "remove tag", 3, "click"], ["aria-hidden", "true", 3, "type", "size"]],
  template: function TagComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, TagComponent_div_0_Template, 4, 5, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.closed);
    }
  },
  dependencies: [NgClass, NgIf, IconComponent],
  encapsulation: 2
});
var TagComponent = _TagComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagComponent, [{
    type: Component,
    args: [{
      selector: "Tag, nzm-tag",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div *ngIf="!closed" [ngClass]="wrapCls" (click)="onClick()">
  <div class="{{ prefixCls }}-text">
    <ng-content></ng-content>
  </div>
  <div
    *ngIf="closable && !disabled && !small"
    role="button"
    class="{{ prefixCls }}-close"
    aria-label="remove tag"
    (click)="onTagClose()"
  >
    <Icon aria-hidden="true" [type]="'cross-circle'" [size]="'xs'"></Icon>
  </div>
</div>
`
    }]
  }], () => [], {
    small: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    afterClose: [{
      type: Output
    }]
  });
})();
var _TagModule = class _TagModule {
};
_TagModule.ɵfac = function TagModule_Factory(t) {
  return new (t || _TagModule)();
};
_TagModule.ɵmod = ɵɵdefineNgModule({
  type: _TagModule,
  declarations: [TagComponent],
  imports: [CommonModule, IconModule],
  exports: [TagComponent]
});
_TagModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule]
});
var TagModule = _TagModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule],
      declarations: [TagComponent],
      exports: [TagComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-menu.mjs
function SubMenuComponent_ListItem_1_ng_template_2_label_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 6);
    ɵɵlistener("onChange", function SubMenuComponent_ListItem_1_ng_template_2_label_0_Template_label_onChange_0_listener() {
      ɵɵrestoreView(_r9);
      const dataItem_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onClick(dataItem_r1));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("checked", dataItem_r1.checked)("disabled", dataItem_r1.disabled);
  }
}
function SubMenuComponent_ListItem_1_ng_template_2_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 7);
    ɵɵlistener("onChange", function SubMenuComponent_ListItem_1_ng_template_2_label_1_Template_label_onChange_0_listener() {
      ɵɵrestoreView(_r13);
      const dataItem_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onClick(dataItem_r1));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("checked", dataItem_r1.checked)("disabled", dataItem_r1.disabled);
  }
}
function SubMenuComponent_ListItem_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SubMenuComponent_ListItem_1_ng_template_2_label_0_Template, 1, 2, "label", 4)(1, SubMenuComponent_ListItem_1_ng_template_2_label_1_Template, 1, 2, "label", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r3.multiSelect);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.multiSelect);
  }
}
function SubMenuComponent_ListItem_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ListItem", 2);
    ɵɵtext(1);
    ɵɵtemplate(2, SubMenuComponent_ListItem_1_ng_template_2_Template, 2, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r1 = ctx.$implicit;
    const _r4 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("className", ctx_r0.getClass(dataItem_r1))("extra", _r4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", dataItem_r1.label, " ");
  }
}
function MenuComponent_FlexItem_2_ListItem_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ListItem", 8);
    ɵɵlistener("click", function MenuComponent_FlexItem_2_ListItem_2_Template_ListItem_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const dataItem_r3 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onClickFirstLevelItem(dataItem_r3));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("className", ctx_r2.getClass(dataItem_r3));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", dataItem_r3.label, " ");
  }
}
function MenuComponent_FlexItem_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "FlexItem")(1, "List", 6);
    ɵɵtemplate(2, MenuComponent_FlexItem_2_ListItem_2_Template, 2, 2, "ListItem", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.data);
  }
}
function MenuComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "a", 9);
    ɵɵlistener("onClick", function MenuComponent_div_5_Template_a_onClick_1_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onMenuCancel());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 10);
    ɵɵlistener("onClick", function MenuComponent_div_5_Template_a_onClick_3_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onMenuOk());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.multiSelectMenuBtnsCls);
    ɵɵadvance(1);
    ɵɵproperty("className", "am-multi-select-btns-btn")("inline", true);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.locale.cancelText, " ");
    ɵɵadvance(1);
    ɵɵproperty("className", "am-multi-select-btns-btn")("inline", true)("type", "primary");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.locale.okText, " ");
  }
}
var _SubMenuComponent = class _SubMenuComponent {
  get subMenuPrefixCls() {
    return this._subMenuPrefixCls;
  }
  set subMenuPrefixCls(v) {
    this._subMenuPrefixCls = v;
  }
  get subMenuData() {
    return this._subMenuData;
  }
  set subMenuData(v) {
    this._subMenuData = v;
  }
  get multiSelect() {
    return this._multiSelect;
  }
  set multiSelect(v) {
    this._multiSelect = v;
  }
  constructor() {
    this.prefixCls = "am-sub-menu";
    this.onSel = new EventEmitter();
  }
  onClick(dataItem) {
    this.onSel.emit(dataItem);
  }
  selected(dataItem) {
    return this.showSelect && this.selItem.length > 0 && this.selItem.indexOf(dataItem.value) !== -1;
  }
  getClass(dataItem) {
    let name = this.radioPrefixCls + "-item ";
    name += this.selected(dataItem) ? this._subMenuPrefixCls + "-item-selected" : "";
    name += dataItem.disabled ? this._subMenuPrefixCls + "-item-disabled" : "";
    return name;
  }
  ngOnChanges(changes) {
    this._subMenuData.map((item) => {
      item.checked = this.selected(item);
    });
  }
};
_SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) {
  return new (t || _SubMenuComponent)();
};
_SubMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _SubMenuComponent,
  selectors: [["SubMenu"], ["nzm-sub-menu"]],
  inputs: {
    radioPrefixCls: "radioPrefixCls",
    showSelect: "showSelect",
    selItem: "selItem",
    subMenuPrefixCls: "subMenuPrefixCls",
    subMenuData: "subMenuData",
    multiSelect: "multiSelect"
  },
  outputs: {
    onSel: "onSel"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 4,
  consts: [[2, "padding", "0"], ["key", "i", 3, "className", "extra", 4, "ngFor", "ngForOf"], ["key", "i", 3, "className", "extra"], ["extra", ""], ["Radio", "", 3, "checked", "disabled", "onChange", 4, "ngIf"], ["Checkbox", "", 3, "checked", "disabled", "onChange", 4, "ngIf"], ["Radio", "", 3, "checked", "disabled", "onChange"], ["Checkbox", "", 3, "checked", "disabled", "onChange"]],
  template: function SubMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "List", 0);
      ɵɵtemplate(1, SubMenuComponent_ListItem_1_Template, 4, 3, "ListItem", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.subMenuPrefixCls);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.subMenuData);
    }
  },
  dependencies: [NgForOf, NgIf, ListComponent, ListItemComponent, RadioComponent, CheckboxComponent],
  encapsulation: 2
});
var SubMenuComponent = _SubMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubMenuComponent, [{
    type: Component,
    args: [{
      selector: "SubMenu, nzm-sub-menu",
      encapsulation: ViewEncapsulation$1.None,
      template: '<List class="{{ subMenuPrefixCls }}" style="padding: 0">\n  <ListItem\n    *ngFor="let dataItem of subMenuData; let i = index"\n    key="i"\n    [className]="getClass(dataItem)"\n    [extra]="extra"\n  >\n    {{ dataItem.label }}\n\n    <ng-template #extra>\n      <label\n        Radio\n        *ngIf="!multiSelect"\n        [checked]="dataItem.checked"\n        [disabled]="dataItem.disabled"\n        (onChange)="onClick(dataItem)"\n      >\n      </label>\n      <label\n        Checkbox\n        *ngIf="multiSelect"\n        [checked]="dataItem.checked"\n        [disabled]="dataItem.disabled"\n        (onChange)="onClick(dataItem)"\n      >\n      </label>\n    </ng-template>\n  </ListItem>\n</List>\n'
    }]
  }], () => [], {
    onSel: [{
      type: Output
    }],
    radioPrefixCls: [{
      type: Input
    }],
    showSelect: [{
      type: Input
    }],
    selItem: [{
      type: Input
    }],
    subMenuPrefixCls: [{
      type: Input
    }],
    subMenuData: [{
      type: Input
    }],
    multiSelect: [{
      type: Input
    }]
  });
})();
var _MenuComponent = class _MenuComponent {
  get data() {
    return this._data;
  }
  set data(v) {
    this._data = v;
    this.initData();
  }
  constructor(_localeProviderService) {
    this._localeProviderService = _localeProviderService;
    this.prefixCls = "am-menu";
    this.subMenuPrefixCls = "am-sub-menu";
    this.radioPrefixCls = "am-radio";
    this.multiSelectMenuBtnsCls = "am-multi-select-btns";
    this.menuSelectContanerPrefixCls = "am-menu-select-container";
    this.locale = {
      okText: "",
      cancelText: ""
    };
    this._data = [];
    this._unsubscribe$ = new Subject();
    this.level = 2;
    this.value = [];
    this.height = document.documentElement.clientHeight / 2;
    this.multiSelect = false;
    this.onChange = new EventEmitter();
    this.onOk = new EventEmitter();
    this.onCancel = new EventEmitter();
  }
  onMenuOk() {
    this.onOk.emit(this.value);
  }
  onMenuCancel() {
    this.onCancel.emit();
  }
  getNewFsv() {
    let firstValue = "";
    if (this.value && this.value.length) {
      firstValue = this.value[0];
    } else if (this._data && this._data.length && !this._data[0].isLeaf) {
      firstValue = this._data[0].value;
    }
    return firstValue;
  }
  onClickFirstLevelItem(dataItem) {
    this.firstLevelSelectValue = dataItem.value;
    if (dataItem.isLeaf && this.onChange) {
      this.onChange.emit([dataItem.value]);
    }
    this.initData();
  }
  onClickSubMenuItem(dataItem) {
    this.value = this.getSelectValue(dataItem);
    this.initData();
    setTimeout(() => {
      this.onChange.emit(this.value);
    }, 300);
  }
  getSelectValue(dataItem) {
    if (this.multiSelect) {
      if (this.value && this.value.length > 0) {
        if (this.level === 2 && this.value[0] !== this.firstLevelSelectValue) {
          return [this.firstLevelSelectValue, [dataItem.value]];
        } else {
          if (this.level == 1) {
            const chosenValues = Array.from(this.value);
            const existIndex = chosenValues.indexOf(dataItem.value);
            if (existIndex === -1) {
              chosenValues.push(dataItem.value);
            } else {
              chosenValues.splice(existIndex, 1);
            }
            return chosenValues;
          } else {
            const chosenValues = Array.from(this.value[1]);
            const existIndex = chosenValues.indexOf(dataItem.value);
            if (existIndex === -1) {
              chosenValues.push(dataItem.value);
            } else {
              chosenValues.splice(existIndex, 1);
            }
            return [this.firstLevelSelectValue, chosenValues];
          }
        }
      } else {
        return this.level === 2 ? [this.firstLevelSelectValue, [dataItem.value]] : [dataItem.value];
      }
    }
    return this.level === 2 ? [this.firstLevelSelectValue, dataItem.value] : [dataItem.value];
  }
  initData() {
    this.subMenuData = this._data;
    if (this.level === 2) {
      let parent = this._data;
      if (this.firstLevelSelectValue && this.firstLevelSelectValue !== "") {
        parent = this._data.filter((dataItem) => dataItem.value === this.firstLevelSelectValue);
      }
      if (parent[0] && parent[0].children && parent[0].isLeaf !== true) {
        this.subMenuData = parent[0].children;
      } else {
        this.subMenuData = [];
      }
    }
    let subValue = this.value && this.value.length > 0 && [...this.value] || [];
    if (this.level === 2 && subValue.length > 1) {
      subValue.shift();
      if (this.multiSelect) {
        subValue = subValue[0];
      }
    }
    this.subSelInitItem = this.subMenuData.filter((dataItem) => subValue.indexOf(dataItem.value) !== -1).map((item) => {
      return item.value;
    });
    const parentValue = this.value && this.value.length > 1 && this.level === 2 ? this.value[0] : null;
    this.showSelect = true;
    if (this.level === 2 && parentValue !== this.firstLevelSelectValue) {
      this.showSelect = false;
    }
  }
  getClass(dataItem) {
    return this.dataItemSelected(dataItem) ? this.prefixCls + "-selected" : "";
  }
  dataItemSelected(dataItem) {
    return dataItem.value === this.firstLevelSelectValue;
  }
  ngOnInit() {
    this._localeProviderService.localeChange.pipe(takeUntil(this._unsubscribe$)).subscribe((_) => {
      this.locale = this._localeProviderService.getLocaleSubObj("Menu");
    });
    this.firstLevelSelectValue = this.getNewFsv();
    this.heightStyle = {
      height: this.height + "px"
    };
    this.initData();
  }
  ngOnDestroy() {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
};
_MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || _MenuComponent)(ɵɵdirectiveInject(LocaleProviderService));
};
_MenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _MenuComponent,
  selectors: [["Menu"], ["nzm-menu"]],
  inputs: {
    data: "data",
    level: "level",
    value: "value",
    height: "height",
    multiSelect: "multiSelect"
  },
  outputs: {
    onChange: "onChange",
    onOk: "onOk",
    onCancel: "onCancel"
  },
  decls: 6,
  vars: 21,
  consts: [[3, "ngStyle", "direction", "align"], [3, "align"], [4, "ngIf"], ["role", "tabpanel", "aria-hidden", "false"], [3, "subMenuPrefixCls", "radioPrefixCls", "subMenuData", "selItem", "showSelect", "multiSelect", "onSel"], [3, "class", 4, "ngIf"], ["role", "tablist"], ["role", "tab", 3, "className", "click", 4, "ngFor", "ngForOf"], ["role", "tab", 3, "className", "click"], ["Button", "", 3, "className", "inline", "onClick"], ["Button", "", 3, "className", "inline", "type", "onClick"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "Flex", 0)(1, "Flex", 1);
      ɵɵtemplate(2, MenuComponent_FlexItem_2_Template, 3, 1, "FlexItem", 2);
      ɵɵelementStart(3, "FlexItem", 3)(4, "SubMenu", 4);
      ɵɵlistener("onSel", function MenuComponent_Template_SubMenu_onSel_4_listener($event) {
        return ctx.onClickSubMenuItem($event);
      });
      ɵɵelementEnd()()();
      ɵɵtemplate(5, MenuComponent_div_5_Template, 5, 10, "div", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.prefixCls);
      ɵɵproperty("ngStyle", ctx.heightStyle)("direction", "column")("align", "stretch");
      ɵɵadvance(1);
      ɵɵclassMap(ctx.menuSelectContanerPrefixCls);
      ɵɵproperty("align", "start");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.level == 2);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.menuSelectContanerPrefixCls, "-submenu");
      ɵɵadvance(1);
      ɵɵproperty("subMenuPrefixCls", ctx.subMenuPrefixCls)("radioPrefixCls", ctx.radioPrefixCls)("subMenuData", ctx.subMenuData)("selItem", ctx.subSelInitItem)("showSelect", ctx.showSelect)("multiSelect", ctx.multiSelect);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.multiSelect);
    }
  },
  dependencies: [NgForOf, NgIf, NgStyle, FlexComponent, FlexItemComponent, ListComponent, ListItemComponent, ButtonComponent, SubMenuComponent],
  encapsulation: 2
});
var MenuComponent = _MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuComponent, [{
    type: Component,
    args: [{
      selector: "Menu, nzm-menu",
      encapsulation: ViewEncapsulation$1.None,
      template: `<Flex class="{{ prefixCls }}" [ngStyle]="heightStyle" [direction]="'column'" [align]="'stretch'">
  <Flex class="{{ menuSelectContanerPrefixCls }}" [align]="'start'">
    <FlexItem *ngIf="level == 2">
      <List role="tablist">
        <ListItem
          role="tab"
          *ngFor="let dataItem of data; let i = index"
          [className]="getClass(dataItem)"
          (click)="onClickFirstLevelItem(dataItem)"
        >
          {{ dataItem.label }}
        </ListItem>
      </List>
    </FlexItem>

    <FlexItem role="tabpanel" aria-hidden="false" class="{{ menuSelectContanerPrefixCls }}-submenu">
      <SubMenu
        [subMenuPrefixCls]="subMenuPrefixCls"
        [radioPrefixCls]="radioPrefixCls"
        [subMenuData]="subMenuData"
        [selItem]="subSelInitItem"
        [showSelect]="showSelect"
        [multiSelect]="multiSelect"
        (onSel)="onClickSubMenuItem($event)"
      >
      </SubMenu>
    </FlexItem>
  </Flex>

  <div *ngIf="multiSelect" class="{{ multiSelectMenuBtnsCls }}">
    <a Button [className]="'am-multi-select-btns-btn'" [inline]="true" (onClick)="onMenuCancel()">
      {{ locale.cancelText }}
    </a>
    <a Button [className]="'am-multi-select-btns-btn'" [inline]="true" [type]="'primary'" (onClick)="onMenuOk()">
      {{ locale.okText }}
    </a>
  </div>
</Flex>
`
    }]
  }], () => [{
    type: LocaleProviderService
  }], {
    data: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    multiSelect: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onOk: [{
      type: Output
    }],
    onCancel: [{
      type: Output
    }]
  });
})();
var _MenuModule = class _MenuModule {
};
_MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || _MenuModule)();
};
_MenuModule.ɵmod = ɵɵdefineNgModule({
  type: _MenuModule,
  declarations: [MenuComponent, SubMenuComponent],
  imports: [CommonModule, FlexModule, ListModule, RadioModule, CheckboxModule, ButtonModule, LocaleProviderModule, FormsModule],
  exports: [MenuComponent, SubMenuComponent]
});
_MenuModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FlexModule, ListModule, RadioModule, CheckboxModule, ButtonModule, LocaleProviderModule, FormsModule]
});
var MenuModule = _MenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FlexModule, ListModule, RadioModule, CheckboxModule, ButtonModule, LocaleProviderModule, FormsModule],
      exports: [MenuComponent, SubMenuComponent],
      declarations: [MenuComponent, SubMenuComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-drawer.mjs
function DrawerComponent_ng_template_1_Template(rf, ctx) {
}
function DrawerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5);
    ɵɵlistener("touchstart", function DrawerComponent_div_4_Template_div_touchstart_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onTouchStart($event));
    })("touchmove", function DrawerComponent_div_4_Template_div_touchmove_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onTouchMove($event));
    })("touchend", function DrawerComponent_div_4_Template_div_touchend_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onTouchEnd());
    })("touchcancle", function DrawerComponent_div_4_Template_div_touchcancle_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onTouchEnd());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-draghandle");
    ɵɵproperty("ngStyle", ctx_r1.dragHandleStyle);
  }
}
var _c029 = ["*"];
var _DrawerComponent = class _DrawerComponent {
  get docked() {
    return this._docked;
  }
  set docked(v) {
    this._docked = v;
    this.dockedCls = v;
  }
  get open() {
    return this._open;
  }
  set open(v) {
    this._open = v;
    this.openCls = v;
  }
  set position(v) {
    this._position = v;
    this.right = false;
    this.left = false;
    this.top = false;
    this.bottom = false;
    switch (v) {
      case "right":
        this.right = true;
        break;
      case "left":
        this.left = true;
        break;
      case "top":
        this.top = true;
        break;
      case "bottom":
        this.bottom = true;
        break;
    }
  }
  constructor(_el) {
    this._el = _el;
    this.prefixCls = "am-drawer";
    this.sidebarStyleFinal = {};
    this.contentStyleFinal = {};
    this.overlayStyleFinal = {};
    this.sidebarWidth = 0;
    this.sidebarHeight = 0;
    this.sidebarTop = 0;
    this.dragHandleTop = 0;
    this.touchIdentifier = null;
    this.touchStartX = null;
    this.touchStartY = null;
    this.touchCurrentX = null;
    this.touchCurrentY = null;
    this.touchSupported = typeof window === "object" && "ontouchstart" in window;
    this._docked = false;
    this._open = false;
    this._position = "left";
    this.sidebarStyle = {};
    this.contentStyle = {};
    this.overlayStyle = {};
    this.dragHandleStyle = {};
    this.transitions = true;
    this.touch = true;
    this.enableDragHandle = false;
    this.dragToggleDistance = 30;
    this.onOpenChange = new EventEmitter();
    this.am = true;
    this.left = this._position === "left";
    this.right = this._position === "right";
    this.top = this._position == "top";
    this.bottom = this._position == "bottom";
    this.dockedCls = this._docked;
    this.openCls = this._open;
  }
  onOverlayClicked() {
    if (this._open) {
      this.onOpenChange.emit(true);
    }
  }
  isTouching() {
    return this.touchIdentifier !== null;
  }
  onTouchStart(event) {
    const touch = event.changedTouches[0];
    this.touchIdentifier = touch.identifier;
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.touchCurrentX = touch.clientX;
    this.touchCurrentY = touch.clientY;
  }
  onTouchMove(ev) {
    for (let ind = 0; ind < ev.changedTouches.length; ind++) {
      if (ev.changedTouches[ind].identifier === this.touchIdentifier) {
        this.touchCurrentX = ev.changedTouches[ind].clientX;
        this.touchCurrentY = ev.changedTouches[ind].clientY;
        break;
      }
    }
    this.update();
  }
  onTouchEnd() {
    const touchWidth = this.touchSidebarWidth();
    if (!this._open && touchWidth > this.dragToggleDistance) {
      this.onOpenChange.emit(!this._open);
    }
    const touchHeight = this.touchSidebarHeight();
    if (!this._open && touchHeight > this.dragToggleDistance) {
      this.onOpenChange.emit(!this._open);
    }
    this.touchIdentifier = null;
    this.touchStartX = null;
    this.touchStartY = null;
    this.touchCurrentX = null;
    this.touchCurrentY = null;
    this.update();
  }
  saveSidebarSize() {
    const sidebar = this._el.nativeElement.querySelector("#sidebar");
    const dragHandle = this._el.nativeElement.querySelector("#dragHandle");
    const width = sidebar.offsetWidth;
    const height = sidebar.offsetHeight;
    const sidebarTop = this.getOffset(sidebar).top;
    const dragHandleTop = this.getOffset(dragHandle).top;
    if (width !== this.sidebarWidth) {
      this.sidebarWidth = width;
    }
    if (height !== this.sidebarHeight) {
      this.sidebarHeight = height;
    }
    if (sidebarTop !== this.sidebarTop) {
      this.sidebarTop = sidebarTop;
    }
    if (dragHandleTop !== this.dragHandleTop) {
      this.dragHandleTop = dragHandleTop;
    }
  }
  touchSidebarWidth() {
    if (this._position === "right") {
      return Math.min(window.innerWidth - this.touchCurrentX, this.sidebarWidth);
    }
    if (this._position === "left") {
      return Math.min(this.touchCurrentX, this.sidebarWidth);
    }
  }
  touchSidebarHeight() {
    if (this._position === "bottom") {
      return Math.min(this._el.nativeElement.offsetHeight - this.touchCurrentY + this._el.nativeElement.offsetTop, this.sidebarHeight);
    }
    if (this._position === "top") {
      return Math.min(this.touchCurrentY - this.dragHandleTop, this.sidebarHeight);
    }
  }
  renderStyle({
    sidebarStyle,
    isTouching,
    overlayStyle,
    contentStyle
  }) {
    if (this._position === "right" || this._position === "left") {
      sidebarStyle.transform = `translateX(0%)`;
      sidebarStyle.WebkitTransform = `translateX(0%)`;
      if (isTouching) {
        const percentage = this.touchSidebarWidth() / this.sidebarWidth;
        if (this._position === "right") {
          sidebarStyle.transform = `translateX(${(1 - percentage) * 100}%)`;
          sidebarStyle.WebkitTransform = `translateX(${(1 - percentage) * 100}%)`;
        }
        if (this._position === "left") {
          sidebarStyle.transform = `translateX(-${(1 - percentage) * 100}%)`;
          sidebarStyle.WebkitTransform = `translateX(-${(1 - percentage) * 100}%)`;
        }
        overlayStyle.opacity = percentage;
        overlayStyle.visibility = "visible";
      }
      if (contentStyle) {
        contentStyle[this._position] = `${this.sidebarWidth}px`;
      }
    }
    if (this._position === "top" || this._position === "bottom") {
      sidebarStyle.transform = `translateY(0%)`;
      sidebarStyle.WebkitTransform = `translateY(0%)`;
      if (isTouching) {
        const percentage = this.touchSidebarHeight() / this.sidebarHeight;
        if (this._position === "bottom") {
          sidebarStyle.transform = `translateY(${(1 - percentage) * 100}%)`;
          sidebarStyle.WebkitTransform = `translateY(${(1 - percentage) * 100}%)`;
        }
        if (this._position === "top") {
          sidebarStyle.transform = `translateY(-${(1 - percentage) * 100}%)`;
          sidebarStyle.WebkitTransform = `translateY(-${(1 - percentage) * 100}%)`;
        }
        overlayStyle.opacity = percentage;
        overlayStyle.visibility = "visible";
      }
      if (contentStyle) {
        contentStyle[this._position] = `${this.sidebarHeight}px`;
      }
    }
  }
  update() {
    const sidebarStyle = __spreadValues({}, this.sidebarStyle);
    const contentStyle = __spreadValues({}, this.contentStyle);
    const overlayStyle = __spreadValues({}, this.overlayStyle);
    if (this.isTouching()) {
      this.renderStyle({
        sidebarStyle,
        isTouching: true,
        contentStyle: void 0,
        overlayStyle
      });
    } else if (this._docked) {
      this.dockedCls = true;
      this.renderStyle({
        sidebarStyle,
        isTouching: void 0,
        contentStyle,
        overlayStyle: void 0
      });
    } else if (this._open) {
      this.openCls = true;
      this.renderStyle({
        sidebarStyle,
        isTouching: void 0,
        contentStyle: void 0,
        overlayStyle: void 0
      });
      overlayStyle.opacity = 1;
      overlayStyle.visibility = "visible";
    }
    if (this.isTouching() || !this.transitions) {
      sidebarStyle.transition = "none";
      sidebarStyle.WebkitTransition = "none";
      contentStyle.transition = "none";
      overlayStyle.transition = "none";
    }
    this.sidebarStyleFinal = sidebarStyle;
    this.contentStyleFinal = contentStyle;
    this.overlayStyleFinal = overlayStyle;
  }
  getOffset(ele) {
    let el = ele;
    let _x = 0;
    let _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return {
      top: _y,
      left: _x
    };
  }
  ngAfterViewChecked() {
    if (!this.isTouching()) {
      this.saveSidebarSize();
    }
  }
  ngOnChanges() {
    this.update();
  }
};
_DrawerComponent.ɵfac = function DrawerComponent_Factory(t) {
  return new (t || _DrawerComponent)(ɵɵdirectiveInject(ElementRef));
};
_DrawerComponent.ɵcmp = ɵɵdefineComponent({
  type: _DrawerComponent,
  selectors: [["Drawer"], ["nzm-drawer"]],
  hostVars: 14,
  hostBindings: function DrawerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("am-drawer", ctx.am)("am-drawer-left", ctx.left)("am-drawer-right", ctx.right)("am-drawer-top", ctx.top)("am-drawer-bottom", ctx.bottom)("am-drawer-docked", ctx.dockedCls)("am-drawer-open", ctx.openCls);
    }
  },
  inputs: {
    sidebar: "sidebar",
    sidebarStyle: "sidebarStyle",
    contentStyle: "contentStyle",
    overlayStyle: "overlayStyle",
    dragHandleStyle: "dragHandleStyle",
    transitions: "transitions",
    touch: "touch",
    enableDragHandle: "enableDragHandle",
    dragToggleDistance: "dragToggleDistance",
    docked: "docked",
    open: "open",
    position: "position"
  },
  outputs: {
    onOpenChange: "onOpenChange"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c029,
  decls: 6,
  vars: 11,
  consts: [["id", "sidebar", 1, "am-drawer-sidebar", 3, "ngStyle"], [3, "ngTemplateOutlet"], ["role", "presentation", "ref", "overlay", 3, "ngStyle", "click"], ["ref", "content", 3, "ngStyle"], ["id", "dragHandle", 3, "class", "ngStyle", "touchstart", "touchmove", "touchend", "touchcancle", 4, "ngIf"], ["id", "dragHandle", 3, "ngStyle", "touchstart", "touchmove", "touchend", "touchcancle"]],
  template: function DrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, DrawerComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 2);
      ɵɵlistener("click", function DrawerComponent_Template_div_click_2_listener() {
        return ctx.onOverlayClicked();
      });
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 3);
      ɵɵtemplate(4, DrawerComponent_div_4_Template, 1, 4, "div", 4);
      ɵɵprojection(5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ctx.sidebarStyleFinal);
      ɵɵadvance(1);
      ɵɵproperty("ngTemplateOutlet", ctx.sidebar);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-overlay");
      ɵɵproperty("ngStyle", ctx.overlayStyleFinal);
      ɵɵadvance(1);
      ɵɵclassMapInterpolate1("", ctx.prefixCls, "-content");
      ɵɵproperty("ngStyle", ctx.contentStyleFinal);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.touch && ctx.touchSupported && !ctx.open && !ctx.docked && ctx.enableDragHandle);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var DrawerComponent = _DrawerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerComponent, [{
    type: Component,
    args: [{
      selector: "Drawer, nzm-drawer",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="am-drawer-sidebar" [ngStyle]="sidebarStyleFinal" id="sidebar">\n  <ng-template [ngTemplateOutlet]="sidebar"></ng-template>\n</div>\n<div\n  role="presentation"\n  class="{{ prefixCls }}-overlay"\n  ref="overlay"\n  [ngStyle]="overlayStyleFinal"\n  (click)="onOverlayClicked()"\n></div>\n<div class="{{ prefixCls }}-content" [ngStyle]="contentStyleFinal" ref="content">\n  <div\n    *ngIf="touch && touchSupported && !open && !docked && enableDragHandle"\n    id="dragHandle"\n    class="{{ prefixCls }}-draghandle"\n    [ngStyle]="dragHandleStyle"\n    (touchstart)="onTouchStart($event)"\n    (touchmove)="onTouchMove($event)"\n    (touchend)="onTouchEnd()"\n    (touchcancle)="onTouchEnd()"\n  ></div>\n  <ng-content></ng-content>\n</div>\n'
    }]
  }], () => [{
    type: ElementRef
  }], {
    sidebar: [{
      type: Input
    }],
    sidebarStyle: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    overlayStyle: [{
      type: Input
    }],
    dragHandleStyle: [{
      type: Input
    }],
    transitions: [{
      type: Input
    }],
    touch: [{
      type: Input
    }],
    enableDragHandle: [{
      type: Input
    }],
    dragToggleDistance: [{
      type: Input
    }],
    docked: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    onOpenChange: [{
      type: Output
    }],
    am: [{
      type: HostBinding,
      args: ["class.am-drawer"]
    }],
    left: [{
      type: HostBinding,
      args: ["class.am-drawer-left"]
    }],
    right: [{
      type: HostBinding,
      args: ["class.am-drawer-right"]
    }],
    top: [{
      type: HostBinding,
      args: ["class.am-drawer-top"]
    }],
    bottom: [{
      type: HostBinding,
      args: ["class.am-drawer-bottom"]
    }],
    dockedCls: [{
      type: HostBinding,
      args: ["class.am-drawer-docked"]
    }],
    openCls: [{
      type: HostBinding,
      args: ["class.am-drawer-open"]
    }]
  });
})();
var _DrawerModule = class _DrawerModule {
};
_DrawerModule.ɵfac = function DrawerModule_Factory(t) {
  return new (t || _DrawerModule)();
};
_DrawerModule.ɵmod = ɵɵdefineNgModule({
  type: _DrawerModule,
  declarations: [DrawerComponent],
  imports: [CommonModule],
  exports: [DrawerComponent]
});
_DrawerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var DrawerModule = _DrawerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [DrawerComponent],
      exports: [DrawerComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-swipe-action.mjs
var _c030 = ["leftBtnRef"];
var _c116 = ["rightBtnRef"];
var _c26 = ["contentRef"];
var _c33 = ["coverRef"];
function SwipeActionComponent_div_0_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function SwipeActionComponent_div_0_div_3_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r13);
      const btn_r11 = restoredCtx.$implicit;
      const ctx_r12 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r12.onBtnClick($event, btn_r11));
    });
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const btn_r11 = ctx.$implicit;
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate2("", ctx_r10.prefixCls, "-btn ", btn_r11.className, "");
    ɵɵproperty("ngStyle", btn_r11.style);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r10.prefixCls, "-btn-text");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", btn_r11.text || "Click", " ");
  }
}
function SwipeActionComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 8);
    ɵɵtemplate(2, SwipeActionComponent_div_0_div_3_div_2_Template, 3, 9, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r5.prefixCls, "-actions ", ctx_r5.prefixCls, "-actions-left");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r5.left);
  }
}
function SwipeActionComponent_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10);
    ɵɵlistener("click", function SwipeActionComponent_div_0_div_4_div_2_Template_div_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r18);
      const btn_r16 = restoredCtx.$implicit;
      const ctx_r17 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r17.onBtnClick($event, btn_r16));
    });
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const btn_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵclassMapInterpolate2("", ctx_r15.prefixCls, "-btn ", btn_r16.className, "");
    ɵɵproperty("ngStyle", btn_r16.style);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r15.prefixCls, "-btn-text");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", btn_r16.text || "Click", " ");
  }
}
function SwipeActionComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 11);
    ɵɵtemplate(2, SwipeActionComponent_div_0_div_4_div_2_Template, 3, 9, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate2("", ctx_r6.prefixCls, "-actions ", ctx_r6.prefixCls, "-actions-right");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r6.right);
  }
}
function SwipeActionComponent_div_0_ng_template_7_Template(rf, ctx) {
}
function SwipeActionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", null, 4);
    ɵɵtemplate(3, SwipeActionComponent_div_0_div_3_Template, 3, 5, "div", 1)(4, SwipeActionComponent_div_0_div_4_Template, 3, 5, "div", 1);
    ɵɵelementStart(5, "div", 5, 6);
    ɵɵlistener("touchstart", function SwipeActionComponent_div_0_Template_div_touchstart_5_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onTouchStart($event));
    })("touchmove", function SwipeActionComponent_div_0_Template_div_touchmove_5_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onTouchMove($event));
    })("touchend", function SwipeActionComponent_div_0_Template_div_touchend_5_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.onTouchEnd($event));
    });
    ɵɵtemplate(7, SwipeActionComponent_div_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵproperty("ngClass", ctx_r0.wrapCls);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-cover");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.left && ctx_r0.left.length > 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.right && ctx_r0.right.length > 0);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-content");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function SwipeActionComponent_div_1_ng_template_2_Template(rf, ctx) {
}
function SwipeActionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 6);
    ɵɵtemplate(2, SwipeActionComponent_div_1_ng_template_2_Template, 0, 0, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-content");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", _r3);
  }
}
function SwipeActionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c42 = ["*"];
var _SwipeActionComponent = class _SwipeActionComponent {
  constructor() {
    this.prefixCls = "am-swipe";
    this.wrapCls = {};
    this._swiping = false;
    this._openedLeft = false;
    this._openedRight = false;
    this.left = [];
    this.right = [];
    this.autoClose = false;
    this.disabled = false;
    this.onOpen = new EventEmitter();
    this.onClose = new EventEmitter();
    this.onCloseSwipe = (ev) => {
      if (!(this._openedLeft || this._openedRight)) {
        return;
      }
      const pNode = ev.target.closest(`.${this.prefixCls}-actions`);
      if (!pNode) {
        this.close();
      }
    };
  }
  setClassMap() {
    this.wrapCls = {
      [this.prefixCls]: true,
      [`${this.prefixCls}-swiping`]: this._swiping
    };
  }
  close() {
    if (this._openedLeft || this._openedRight) {
      this.onClose.emit();
    }
    this.setBtnStyle(0);
    this._openedLeft = false;
    this._openedRight = false;
  }
  setBtnStyle(value) {
    if (this._btnsLeftWidth === 0 || this._btnsRightWidth === 0) {
      this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
      this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
    }
    const limit = value > 0 ? this._btnsLeftWidth : -this._btnsRightWidth;
    const contentLeft = this.getContentEasing(value, limit);
    this.content.nativeElement.style.left = `${contentLeft}px`;
    this.cover.nativeElement.style.display = Math.abs(value) > 0 ? "block" : "none";
    this.cover.nativeElement.style.left = `${contentLeft}px`;
  }
  getContentEasing(value, limit) {
    return Math.abs(value) - Math.abs(limit) > 0 ? limit : value;
  }
  onTouchStart(e) {
    this._startX = e.changedTouches[0].clientX;
    this._swiping = true;
  }
  onTouchMove(e) {
    const deltaX = e.changedTouches[0].clientX - this._startX;
    this._needShowRight = deltaX < -5 && this.right.length > 0;
    this._needShowLeft = deltaX > 5 && this.left.length > 0;
    if (this.leftBtnRef) {
      this.leftBtnRef.nativeElement.style.visibility = this._needShowRight ? "hidden" : "visible";
    }
    if (this.rightBtnRef) {
      this.rightBtnRef.nativeElement.style.visibility = this._needShowLeft ? "hidden" : "visible";
    }
    this.setBtnStyle(deltaX);
  }
  onTouchEnd(e) {
    const deltaX = e.changedTouches[0].clientX - this._startX;
    const needOpenRight = this._needShowRight && Math.abs(deltaX) > this._btnsRightWidth / 2;
    const needOpenLeft = this._needShowLeft && Math.abs(deltaX) > this._btnsLeftWidth / 2;
    if (needOpenRight) {
      this.doOpenRight();
    } else if (needOpenLeft) {
      this.doOpenLeft();
    } else {
      this.close();
    }
    this._swiping = false;
    this._needShowLeft = false;
    this._needShowRight = false;
  }
  doOpenLeft() {
    this.open(this._btnsLeftWidth, true, false);
  }
  doOpenRight() {
    this.open(-this._btnsRightWidth, false, true);
  }
  onBtnClick(ev, btn) {
    const onPress = btn.onPress;
    if (onPress) {
      onPress(ev);
    }
    if (this.autoClose) {
      this.close();
    }
  }
  open(value, openedLeft, openedRight) {
    this.onOpen.emit();
    this._openedLeft = openedLeft;
    this._openedRight = openedRight;
    this.setBtnStyle(value);
  }
  ngOnInit() {
    this.setClassMap();
  }
  ngAfterViewInit() {
    this._btnsLeftWidth = this.leftBtnRef ? this.leftBtnRef.nativeElement.offsetWidth : 0;
    this._btnsRightWidth = this.rightBtnRef ? this.rightBtnRef.nativeElement.offsetWidth : 0;
    document.body.addEventListener("touchstart", this.onCloseSwipe, true);
  }
  ngOnDestroy() {
    document.body.removeEventListener("touchstart", this.onCloseSwipe, true);
  }
};
_SwipeActionComponent.ɵfac = function SwipeActionComponent_Factory(t) {
  return new (t || _SwipeActionComponent)();
};
_SwipeActionComponent.ɵcmp = ɵɵdefineComponent({
  type: _SwipeActionComponent,
  selectors: [["SwipeAction"], ["nzm-swipe-action"]],
  viewQuery: function SwipeActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c030, 5);
      ɵɵviewQuery(_c116, 5);
      ɵɵviewQuery(_c26, 5);
      ɵɵviewQuery(_c33, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.leftBtnRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rightBtnRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cover = _t.first);
    }
  },
  inputs: {
    left: "left",
    right: "right",
    autoClose: "autoClose",
    disabled: "disabled"
  },
  outputs: {
    onOpen: "onOpen",
    onClose: "onClose"
  },
  ngContentSelectors: _c42,
  decls: 4,
  vars: 2,
  consts: [[3, "ngClass", 4, "ngIf"], [3, "class", 4, "ngIf"], ["content", ""], [3, "ngClass"], ["coverRef", ""], [3, "touchstart", "touchmove", "touchend"], ["contentRef", ""], [3, "ngTemplateOutlet"], ["leftBtnRef", ""], ["role", "button", 3, "class", "ngStyle", "click", 4, "ngFor", "ngForOf"], ["role", "button", 3, "ngStyle", "click"], ["rightBtnRef", ""]],
  template: function SwipeActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, SwipeActionComponent_div_0_Template, 8, 10, "div", 0)(1, SwipeActionComponent_div_1_Template, 3, 4, "div", 1)(2, SwipeActionComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", (ctx.left.length != 0 || ctx.right.length != 0) && !ctx.disabled);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !((ctx.left.length != 0 || ctx.right.length != 0) && !ctx.disabled));
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var SwipeActionComponent = _SwipeActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwipeActionComponent, [{
    type: Component,
    args: [{
      selector: "SwipeAction, nzm-swipe-action",
      encapsulation: ViewEncapsulation$1.None,
      template: `<div *ngIf="(left.length != 0 || right.length != 0) && !disabled" [ngClass]="wrapCls">
  <div class="{{ prefixCls }}-cover" #coverRef></div>
  <div *ngIf="left && left.length > 0" class="{{ prefixCls }}-actions {{ prefixCls }}-actions-left" #leftBtnRef>
    <div
      *ngFor="let btn of left"
      class="{{ prefixCls }}-btn {{ btn.className }}"
      [ngStyle]="btn.style"
      role="button"
      (click)="onBtnClick($event, btn)"
    >
      <div class="{{ prefixCls }}-btn-text">
        {{ btn.text || 'Click' }}
      </div>
    </div>
  </div>
  <div *ngIf="right && right.length > 0" class="{{ prefixCls }}-actions {{ prefixCls }}-actions-right" #rightBtnRef>
    <div
      *ngFor="let btn of right"
      class="{{ prefixCls }}-btn {{ btn.className }}"
      [ngStyle]="btn.style"
      role="button"
      (click)="onBtnClick($event, btn)"
    >
      <div class="{{ prefixCls }}-btn-text">
        {{ btn.text || 'Click' }}
      </div>
    </div>
  </div>
  <div
    class="{{ prefixCls }}-content"
    #contentRef
    (touchstart)="onTouchStart($event)"
    (touchmove)="onTouchMove($event)"
    (touchend)="onTouchEnd($event)"
  >
    <ng-template [ngTemplateOutlet]="content"></ng-template>
  </div>
</div>
<div *ngIf="!((left.length != 0 || right.length != 0) && !disabled)" class="{{ prefixCls }}-content" #contentRef>
  <ng-template [ngTemplateOutlet]="content"></ng-template>
</div>

<ng-template #content>
  <ng-content></ng-content>
</ng-template>
`
    }]
  }], () => [], {
    leftBtnRef: [{
      type: ViewChild,
      args: ["leftBtnRef"]
    }],
    rightBtnRef: [{
      type: ViewChild,
      args: ["rightBtnRef"]
    }],
    content: [{
      type: ViewChild,
      args: ["contentRef"]
    }],
    cover: [{
      type: ViewChild,
      args: ["coverRef"]
    }],
    left: [{
      type: Input
    }],
    right: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    onOpen: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }]
  });
})();
var _SwipeActionModule = class _SwipeActionModule {
};
_SwipeActionModule.ɵfac = function SwipeActionModule_Factory(t) {
  return new (t || _SwipeActionModule)();
};
_SwipeActionModule.ɵmod = ɵɵdefineNgModule({
  type: _SwipeActionModule,
  declarations: [SwipeActionComponent],
  imports: [CommonModule],
  exports: [SwipeActionComponent]
});
_SwipeActionModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var SwipeActionModule = _SwipeActionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SwipeActionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [SwipeActionComponent],
      declarations: [SwipeActionComponent],
      providers: []
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-pull-to-refresh.mjs
var _c031 = ["pullToRefresh"];
function PullToRefreshComponent_div_2_1_ng_template_0_Template(rf, ctx) {
}
function PullToRefreshComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PullToRefreshComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.headerIndicator[ctx_r4.state.currentState]);
  }
}
function PullToRefreshComponent_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.headerIndicator[ctx_r5.state.currentState]);
  }
}
function PullToRefreshComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, PullToRefreshComponent_div_2_1_Template, 1, 1, null, 6)(2, PullToRefreshComponent_div_2_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isTemplateRef(ctx_r0.headerIndicator[ctx_r0.state.currentState]));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isTemplateRef(ctx_r0.headerIndicator[ctx_r0.state.currentState]));
  }
}
function PullToRefreshComponent_div_6_1_ng_template_0_Template(rf, ctx) {
}
function PullToRefreshComponent_div_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PullToRefreshComponent_div_6_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.footerIndicator[ctx_r7.state.currentState]);
  }
}
function PullToRefreshComponent_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.footerIndicator[ctx_r8.state.currentState]);
  }
}
function PullToRefreshComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, PullToRefreshComponent_div_6_1_Template, 1, 1, null, 6)(2, PullToRefreshComponent_div_6_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isTemplateRef(ctx_r2.footerIndicator[ctx_r2.state.currentState]));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footerIndicator[ctx_r2.state.currentState]));
  }
}
function PullToRefreshComponent_div_7_1_ng_template_0_Template(rf, ctx) {
}
function PullToRefreshComponent_div_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PullToRefreshComponent_div_7_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.footerIndicator[ctx_r10.state.currentState]);
  }
}
function PullToRefreshComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.footerIndicator[ctx_r11.state.currentState]);
  }
}
function PullToRefreshComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, PullToRefreshComponent_div_7_1_Template, 1, 1, null, 6)(2, PullToRefreshComponent_div_7_ng_container_2_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.isTemplateRef(ctx_r3.footerIndicator[ctx_r3.state.currentState]));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.isTemplateRef(ctx_r3.footerIndicator[ctx_r3.state.currentState]));
  }
}
var _c117 = ["*"];
var _PullToRefreshComponent = class _PullToRefreshComponent {
  get direction() {
    return this._direction;
  }
  set direction(value) {
    this._direction = value;
    this.refreshUp = this._direction === "up" || this._direction === "";
    this.refreshDown = this._direction === "down" || this._direction === "";
  }
  get headerIndicator() {
    return this._headerIndicator;
  }
  set headerIndicator(value) {
    Object.assign(this._headerIndicator, value);
  }
  get footerIndicator() {
    return this._footerIndicator;
  }
  set footerIndicator(value) {
    Object.assign(this._footerIndicator, value);
  }
  touchstart(e) {
    this._startTime = Date.now();
    if (this._direction === "down" || this._direction === "" && !this._endReach) {
      if (this.ele.nativeElement.scrollTop > 0) {
        this.startY = void 0;
        return;
      }
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this.state.drag = void 0;
    } else {
      this.startY = e && e.changedTouches && e.changedTouches[0] && e.changedTouches[0].clientY;
      this._clientHeight = this._pullToRefresh.element.nativeElement.clientHeight;
      this._currentContentHeight = this.ele.nativeElement.clientHeight;
    }
    this.transtionCls = "";
  }
  touchmove(e) {
    if (this._direction === "down" || this._direction === "" && !this._endReach) {
      if (this.ele.nativeElement.scrollTop > 0) {
        return;
      }
      let distanceY = e.changedTouches[0].clientY - this.startY;
      this.state.drag = distanceY >= 0;
      if (this.state.drag) {
        if (e.cancelable) {
          e.preventDefault();
        }
      } else {
        return;
      }
      if (distanceY > this.damping) {
        distanceY = distanceY / (distanceY + this.damping) * this.damping * 2;
      } else if (distanceY < 0) {
        distanceY = 0;
      }
      if (distanceY > this.distanceToRefresh) {
        this.state.currentState = "activate";
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
      }
      this.style = {
        "-webkit-transform": "translate3d( 0, " + distanceY + "px, 0 )",
        transform: "translate3d( 0, " + distanceY + "px, 0 )"
      };
    } else {
      let distanceY = e.changedTouches[0].clientY - this.startY;
      if (Math.abs(this._lastContentOffset) < this._clientHeight - this._currentContentHeight - this.distanceToRefresh || distanceY > 0) {
        this.state.drag = false;
      } else {
        this.state.drag = true;
      }
      if (this.state.drag) {
        if (e.cancelable) {
          e.preventDefault();
        }
      } else {
        return;
      }
      distanceY = -(distanceY / (distanceY - this.damping)) * this.damping;
      if (Math.abs(distanceY) > this.distanceToRefresh) {
        this.state.currentState = "activate";
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
      }
      this.style = {
        "-webkit-transform": "translate3d( 0, " + distanceY + "px, 0 )",
        transform: "translate3d( 0, " + distanceY + "px, 0 )"
      };
    }
  }
  touchend(e) {
    if (!this.startY || this.state.drag === false) {
      return;
    }
    const distanceY = e.changedTouches[0].clientY - this.startY;
    if (Math.abs(distanceY) >= this.distanceToRefresh) {
      this.state.currentState = "release";
      if (this._direction === "down" || this._direction === "" && !this._endReach) {
        this.translateY(this.distanceToRefresh + 1);
      } else {
        this.translateY(-this.distanceToRefresh - 1);
      }
      if (this._ngModelOnChange) {
        this._ngModelOnChange(this.state);
      }
      setTimeout(() => {
        this.state.currentState = "finish";
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
        if (this._direction === "down" || this._direction === "" && !this._endReach) {
          this.onRefresh.emit("down");
        } else {
          this.translateY(-this.distanceToRefresh - 1);
          this.onRefresh.emit("up");
        }
        setTimeout(() => {
          this.state.currentState = "deactivate";
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
          this.translateY(0);
        }, 0);
      }, 500);
    } else {
      this.translateY(0);
    }
  }
  touchcancel() {
    this.translateY(0);
  }
  scroll(evt) {
    this._endTime = Date.now();
    const contentOffset = evt.target.scrollTop;
    this._lastContentOffset = contentOffset;
    if (this._direction === "") {
      if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight === evt.target.scrollHeight) {
        setTimeout(() => {
          this._endReach = true;
        }, 100);
      } else {
        this._endReach = false;
      }
    }
    if (!this.endReachedRefresh || this._direction !== "down") {
      return;
    }
    if (contentOffset > 0 && evt.target.scrollTop + this.ele.nativeElement.clientHeight > evt.target.scrollHeight - this.distanceToRefresh && this._endTime - this._startTime >= 100) {
      this._startTime = this._endTime;
      if (this.refreshing) {
        this.state.currentState = "release";
        if (this._ngModelOnChange) {
          this._ngModelOnChange(this.state);
        }
      }
      setTimeout(() => {
        if (this.endReachedRefresh) {
          this.onRefresh.emit("endReachedRefresh");
        }
        if (this.refreshing) {
          this.state.currentState = "finish";
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
        }
      }, 500);
    } else {
      setTimeout(() => {
        if (this.refreshing) {
          this.state.currentState = "finish";
          if (this._ngModelOnChange) {
            this._ngModelOnChange(this.state);
          }
        }
      }, 500);
    }
  }
  constructor(ele) {
    this.ele = ele;
    this.transtionCls = {};
    this.style = {
      "-webkit-transform": "translate3d( 0, 0, 0 )",
      transform: "translate3d( 0, 0, 0 )"
    };
    this.state = {
      currentState: "deactivate",
      drag: false
    };
    this._headerIndicator = {
      activate: "松开立即刷新",
      deactivate: "下拉可以刷新",
      release: "刷新中。。。",
      finish: "完成刷新"
    };
    this._footerIndicator = {
      activate: "松开立即刷新",
      deactivate: "上拉可以刷新",
      release: "刷新中。。。",
      finish: "完成刷新"
    };
    this._startTime = 0;
    this._endTime = 0;
    this._endReach = false;
    this._direction = "";
    this._clientHeight = 0;
    this._currentContentHeight = 0;
    this._lastContentOffset = 0;
    this.distanceToRefresh = 25;
    this.damping = 100;
    this.endReachedRefresh = false;
    this.refreshing = false;
    this.onRefresh = new EventEmitter();
    this.refresh = true;
    this.container = true;
    this.refreshUp = this._direction === "up" || this._direction === "";
    this.refreshDown = this._direction === "down" || this._direction === "";
  }
  isTemplateRef(value) {
    return value instanceof TemplateRef;
  }
  translateY(distanceY) {
    this.transtionCls = "am-pull-to-refresh-transition";
    this.style = {
      "-webkit-transform": "translate3d( 0, " + distanceY + "px, 0 )",
      transform: "translate3d( 0, " + distanceY + "px, 0 )"
    };
  }
  writeValue(value) {
    if (value !== null) {
      this.state = value;
    }
  }
  registerOnChange(fn) {
    this._ngModelOnChange = fn;
  }
  registerOnTouched(fn) {
    this._ngModelOnTouched = fn;
  }
};
_PullToRefreshComponent.ɵfac = function PullToRefreshComponent_Factory(t) {
  return new (t || _PullToRefreshComponent)(ɵɵdirectiveInject(ElementRef));
};
_PullToRefreshComponent.ɵcmp = ɵɵdefineComponent({
  type: _PullToRefreshComponent,
  selectors: [["PullToRefresh"], ["nzm-pull-to-refresh"]],
  viewQuery: function PullToRefreshComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c031, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._pullToRefresh = _t.first);
    }
  },
  hostVars: 8,
  hostBindings: function PullToRefreshComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("touchstart", function PullToRefreshComponent_touchstart_HostBindingHandler($event) {
        return ctx.touchstart($event);
      })("touchmove", function PullToRefreshComponent_touchmove_HostBindingHandler($event) {
        return ctx.touchmove($event);
      })("touchend", function PullToRefreshComponent_touchend_HostBindingHandler($event) {
        return ctx.touchend($event);
      })("touchcancel", function PullToRefreshComponent_touchcancel_HostBindingHandler() {
        return ctx.touchcancel();
      })("scroll", function PullToRefreshComponent_scroll_HostBindingHandler($event) {
        return ctx.scroll($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("am-pull-to-refresh", ctx.refresh)("super-container", ctx.container)("am-pull-to-refresh-up", ctx.refreshUp)("am-pull-to-refresh-down", ctx.refreshDown);
    }
  },
  inputs: {
    distanceToRefresh: "distanceToRefresh",
    damping: "damping",
    endReachedRefresh: "endReachedRefresh",
    refreshing: "refreshing",
    direction: "direction",
    headerIndicator: "headerIndicator",
    footerIndicator: "footerIndicator"
  },
  outputs: {
    onRefresh: "onRefresh"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _PullToRefreshComponent),
    multi: true
  }])],
  ngContentSelectors: _c117,
  decls: 8,
  vars: 5,
  consts: [[1, "am-pull-to-refresh-content-wrapper"], [1, "am-pull-to-refresh-content", 3, "ngClass", "ngStyle"], ["class", "am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator", 4, "ngIf"], ["pullToRefresh", ""], ["class", "am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator", 4, "ngIf"], [1, "am-pull-to-refresh-indicator", "am-pull-to-refresh-header-indicator"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "am-pull-to-refresh-indicator", "am-pull-to-refresh-footer-indicator"]],
  template: function PullToRefreshComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵtemplate(2, PullToRefreshComponent_div_2_Template, 3, 2, "div", 2);
      ɵɵelementStart(3, "div", null, 3);
      ɵɵprojection(5);
      ɵɵtemplate(6, PullToRefreshComponent_div_6_Template, 3, 2, "div", 4);
      ɵɵelementEnd();
      ɵɵtemplate(7, PullToRefreshComponent_div_7_Template, 3, 2, "div", 4);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ctx.transtionCls)("ngStyle", ctx.style);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.refreshDown);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.direction === "down" && ctx.endReachedRefresh);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.refreshUp);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  encapsulation: 2
});
var PullToRefreshComponent = _PullToRefreshComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PullToRefreshComponent, [{
    type: Component,
    args: [{
      selector: "PullToRefresh, nzm-pull-to-refresh",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => PullToRefreshComponent),
        multi: true
      }],
      template: `<div class="am-pull-to-refresh-content-wrapper">
  <div class="am-pull-to-refresh-content" [ngClass]="transtionCls" [ngStyle]="style">
    <div *ngIf="refreshDown" class="am-pull-to-refresh-indicator am-pull-to-refresh-header-indicator">
      <ng-template
        *ngIf="isTemplateRef(headerIndicator[state.currentState])"
        [ngTemplateOutlet]="headerIndicator[state.currentState]"
      ></ng-template>
      <ng-container *ngIf="!isTemplateRef(headerIndicator[state.currentState])">{{
        headerIndicator[state.currentState]
      }}</ng-container>
    </div>
    <div #pullToRefresh>
      <ng-content></ng-content>
      <div
        *ngIf="direction === 'down' && endReachedRefresh"
        class="am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator"
      >
        <ng-template
          *ngIf="isTemplateRef(footerIndicator[state.currentState])"
          [ngTemplateOutlet]="footerIndicator[state.currentState]"
        ></ng-template>
        <ng-container *ngIf="!isTemplateRef(footerIndicator[state.currentState])">{{
          footerIndicator[state.currentState]
        }}</ng-container>
      </div>
    </div>
    <div *ngIf="refreshUp" class="am-pull-to-refresh-indicator am-pull-to-refresh-footer-indicator">
      <ng-template
        *ngIf="isTemplateRef(footerIndicator[state.currentState])"
        [ngTemplateOutlet]="footerIndicator[state.currentState]"
      ></ng-template>
      <ng-container *ngIf="!isTemplateRef(footerIndicator[state.currentState])">{{
        footerIndicator[state.currentState]
      }}</ng-container>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }], {
    _pullToRefresh: [{
      type: ViewChild,
      args: ["pullToRefresh", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    distanceToRefresh: [{
      type: Input
    }],
    damping: [{
      type: Input
    }],
    endReachedRefresh: [{
      type: Input
    }],
    refreshing: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    headerIndicator: [{
      type: Input
    }],
    footerIndicator: [{
      type: Input
    }],
    onRefresh: [{
      type: Output
    }],
    refresh: [{
      type: HostBinding,
      args: ["class.am-pull-to-refresh"]
    }],
    container: [{
      type: HostBinding,
      args: ["class.super-container"]
    }],
    refreshUp: [{
      type: HostBinding,
      args: ["class.am-pull-to-refresh-up"]
    }],
    refreshDown: [{
      type: HostBinding,
      args: ["class.am-pull-to-refresh-down"]
    }],
    touchstart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    touchmove: [{
      type: HostListener,
      args: ["touchmove", ["$event"]]
    }],
    touchend: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    touchcancel: [{
      type: HostListener,
      args: ["touchcancel"]
    }],
    scroll: [{
      type: HostListener,
      args: ["scroll", ["$event"]]
    }]
  });
})();
var _PullToRefreshModule = class _PullToRefreshModule {
};
_PullToRefreshModule.ɵfac = function PullToRefreshModule_Factory(t) {
  return new (t || _PullToRefreshModule)();
};
_PullToRefreshModule.ɵmod = ɵɵdefineNgModule({
  type: _PullToRefreshModule,
  declarations: [PullToRefreshComponent],
  imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
  exports: [PullToRefreshComponent]
});
_PullToRefreshModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule]
});
var PullToRefreshModule = _PullToRefreshModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PullToRefreshModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, FormsModule, ReactiveFormsModule],
      exports: [PullToRefreshComponent],
      declarations: [PullToRefreshComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile.mjs
var _NgZorroAntdMobileModule = class _NgZorroAntdMobileModule {
  static forRoot() {
    return {
      ngModule: _NgZorroAntdMobileModule
    };
  }
};
_NgZorroAntdMobileModule.ɵfac = function NgZorroAntdMobileModule_Factory(t) {
  return new (t || _NgZorroAntdMobileModule)();
};
_NgZorroAntdMobileModule.ɵmod = ɵɵdefineNgModule({
  type: _NgZorroAntdMobileModule,
  exports: [ActivityIndicatorModule, CardModule, TabsModule, TabBarModule, ButtonModule, SwitchModule, SearchBarModule, StepperModule, StepsModule, CheckboxModule, ProgressModule, SegmentedControlModule, BadgeModule, CarouselModule, ActionSheetModule, AccordionModule, NoticeBarModule, IconModule, ToastModule, RadioModule, ModalModule, PopoverModule, PopoverItemModule, NavBarModule, ListModule, CalendarModule, InputItemModule, FlexModule, GridModule, RangeModule, SliderModule, TextareaItemModule, NgZorroAntdMobilePipesModule, PickerModule, PickerViewModule, ImagePickerModule, ResultModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, NgZorroAntdMobilePipesModule, PaginationModule, TagModule, MenuModule, DatePickerModule, DatePickerViewModule, DrawerModule, PullToRefreshModule, SwipeActionModule]
});
_NgZorroAntdMobileModule.ɵinj = ɵɵdefineInjector({
  imports: [ActivityIndicatorModule, CardModule, TabsModule, TabBarModule, ButtonModule, SwitchModule, SearchBarModule, StepperModule, StepsModule, CheckboxModule, ProgressModule, SegmentedControlModule, BadgeModule, CarouselModule, ActionSheetModule, AccordionModule, NoticeBarModule, IconModule, ToastModule, RadioModule, ModalModule, PopoverModule, PopoverItemModule, NavBarModule, ListModule, CalendarModule, InputItemModule, FlexModule, GridModule, RangeModule, SliderModule, TextareaItemModule, NgZorroAntdMobilePipesModule, PickerModule, PickerViewModule, ImagePickerModule, ResultModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, NgZorroAntdMobilePipesModule, PaginationModule, TagModule, MenuModule, DatePickerModule, DatePickerViewModule, DrawerModule, PullToRefreshModule, SwipeActionModule]
});
var NgZorroAntdMobileModule = _NgZorroAntdMobileModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgZorroAntdMobileModule, [{
    type: NgModule,
    args: [{
      providers: [],
      exports: [ActivityIndicatorModule, CardModule, TabsModule, TabBarModule, ButtonModule, SwitchModule, SearchBarModule, StepperModule, StepsModule, CheckboxModule, ProgressModule, SegmentedControlModule, BadgeModule, CarouselModule, ActionSheetModule, AccordionModule, NoticeBarModule, IconModule, ToastModule, RadioModule, ModalModule, PopoverModule, PopoverItemModule, NavBarModule, ListModule, CalendarModule, InputItemModule, FlexModule, GridModule, RangeModule, SliderModule, TextareaItemModule, NgZorroAntdMobilePipesModule, PickerModule, PickerViewModule, ImagePickerModule, ResultModule, WhiteSpaceModule, WingBlankModule, LocaleProviderModule, NgZorroAntdMobilePipesModule, PaginationModule, TagModule, MenuModule, DatePickerModule, DatePickerViewModule, DrawerModule, PullToRefreshModule, SwipeActionModule]
    }]
  }], null, null);
})();
export {
  AccordionComponent,
  AccordionGroupComponent,
  AccordionModule,
  AccordionService,
  Action,
  ActionSheetService as ActionSheet,
  ActionSheetComponent,
  ActionSheetModule,
  ActionSheetOptions,
  ActionSheetRef,
  ActionSheetService,
  ActionSheetWithOptions,
  ActivityIndicatorComponent,
  ActivityIndicatorModule,
  AgreeItemComponent,
  BadgeComponent,
  BadgeModule,
  BriefComponent,
  ButtonComponent,
  ButtonModule,
  CalendarComponent,
  CalendarConfirmPanelComponent,
  CalendarDatePickerComponent,
  CalendarHeaderComponent,
  CalendarModule,
  CalendarShortcutPanelComponent,
  CalendarSingleMonthComponent,
  CalendarTimePickerComponent,
  CalendarWeekPanelComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  CardModule,
  CarouselComponent,
  CarouselModule,
  CarouselSlideComponent,
  CheckboxComponent,
  CheckboxItemComponent,
  CheckboxModule,
  CustomInputComponent,
  CustomInputService,
  CustomKeyboardComponent,
  DateModels,
  DatePickerComponent,
  DatePickerDirective,
  DatePickerModule,
  DatePickerOptions,
  DatePickerViewComponent,
  DatePickerViewModule,
  DefaultTabBarComponent,
  DotIndicatorComponent,
  DrawerComponent,
  DrawerModule,
  FlexComponent,
  FlexItemComponent,
  FlexModule,
  GridComponent,
  GridModule,
  IconComponent,
  IconModule,
  ImagePickerComponent,
  ImagePickerModule,
  InputItemComponent,
  InputItemModule,
  LOCAL_PROVIDER_TOKEN,
  ListComponent,
  ListItemComponent,
  ListModule,
  LocaleProviderModule,
  LocaleProviderPipe,
  LocaleProviderService,
  MenuComponent,
  MenuModule,
  ModalService as Modal,
  ModalBaseOptions,
  ModalComponent,
  ModalModule,
  ModalOptions,
  ModalRef,
  ModalService,
  ModalServiceComponent,
  NavBarComponent,
  NavBarModule,
  NgZorroAntdMobileModule,
  NgZorroAntdMobilePipesModule,
  NoticeBarComponent,
  NoticeBarModule,
  PaginationComponent,
  PaginationModule,
  PickerService as Picker,
  PickerComponent,
  PickerDirective,
  PickerModule,
  PickerOptions,
  PickerRef,
  PickerService,
  PickerViewComponent,
  PickerViewModule,
  PopoverComponent,
  PopoverComponentOptions,
  PopoverDirective,
  PopoverItemComponent,
  PopoverItemModule,
  PopoverModule,
  PopoverOptions,
  PopoverOptionsFactory,
  ProgressComponent,
  ProgressModule,
  PullToRefreshComponent,
  PullToRefreshModule,
  RadioComponent,
  RadioItemComponent,
  RadioItemGroupComponent,
  RadioModule,
  RangeComponent,
  RangeModule,
  ResultComponent,
  ResultModule,
  SafeHTMLPipe,
  SearchBarComponent,
  SearchBarModule,
  SegmentedControlComponent,
  SegmentedControlModule,
  ShareActionSheetWithOptions,
  ShareOption,
  SliderComponent,
  SliderHandleComponent,
  SliderMarksComponent,
  SliderModule,
  SliderStepsComponent,
  SliderTrackComponent,
  StepComponent,
  StepDirectionEnum,
  StepStatusEnum,
  StepperComponent,
  StepperModule,
  StepsComponent,
  StepsModule,
  SubMenuComponent,
  SwipeActionComponent,
  SwipeActionModule,
  SwitchComponent,
  SwitchModule,
  TabBarComponent,
  TabBarItemComponent,
  TabBarModule,
  TabPaneBodyComponent,
  TabPaneComponent,
  TabsComponent,
  TabsModule,
  TagComponent,
  TagModule,
  TextareaItemComponent,
  TextareaItemModule,
  ToastService as Toast,
  ToastComponent,
  ToastModule,
  ToastOptions,
  ToastService,
  WhiteSpaceComponent,
  WhiteSpaceModule,
  WingBlankComponent,
  WingBlankModule,
  da_DK,
  en_US,
  formatDate,
  mergeDateTime,
  ru_RU,
  sv_SE,
  zh_CN
};
/*! Bundled license information:

ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-core.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-core.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

ng-zorro-antd-mobile/fesm2022/ng-zorro-antd-mobile-core.mjs:
  (**
   * @license
   * Copyright Alibaba.com All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
   *)
*/
//# sourceMappingURL=ng-zorro-antd-mobile.js.map
