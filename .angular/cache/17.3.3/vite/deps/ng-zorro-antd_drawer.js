import {
  FocusTrapFactory
} from "./chunk-NGEBQP6D.js";
import {
  overlayZIndexSetter
} from "./chunk-65EYJIO4.js";
import {
  NzNoAnimationDirective
} from "./chunk-HVVV2P4P.js";
import "./chunk-NA7MVJ2Z.js";
import "./chunk-A7RVIN62.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  isTemplateRef,
  toCssPixel
} from "./chunk-A4L4YVTT.js";
import "./chunk-TLRFD67R.js";
import {
  Overlay,
  OverlayConfig,
  OverlayKeyboardDispatcher
} from "./chunk-NRW7HDG5.js";
import "./chunk-DHXGQT7V.js";
import {
  ESCAPE
} from "./chunk-27BDGVS6.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-2CGA3OMX.js";
import "./chunk-GRCHAQNP.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  DOCUMENT,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __objRest
} from "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-drawer.mjs
var _c0 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_Conditional_1_Template_div_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.maskClick());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r2.nzMaskStyle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r14 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzType", closeIcon_r14);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r16);
      const ctx_r15 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r15.closeClick());
    });
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r10.nzCloseIcon);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r17.nzTitle, ɵɵsanitizeHtml);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r11.nzTitle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r18.nzExtra, ɵɵsanitizeHtml);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r12.nzExtra);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵtemplate(2, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template, 2, 1, "button", 12)(3, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template, 2, 1, "div", 13);
    ɵɵelementEnd();
    ɵɵtemplate(4, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template, 2, 1, "div", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("ant-drawer-header-close-only", !ctx_r3.nzTitle);
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r3.nzClosable ? 2 : -1);
    ɵɵadvance(1);
    ɵɵconditional(3, ctx_r3.nzTitle ? 3 : -1);
    ɵɵadvance(1);
    ɵɵconditional(4, ctx_r3.nzExtra ? 4 : -1);
  }
}
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r19.nzContent)("ngTemplateOutletContext", ctx_r19.templateContext);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template, 1, 2, "ng-container");
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r5.isNzContentTemplateRef ? 0 : -1);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 22);
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r21.contentFromContentChild);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Conditional_9_Conditional_0_Template, 1, 1, null, 22);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵconditional(0, ctx_r6.contentFromContentChild && (ctx_r6.isOpen || ctx_r6.inAnimation) ? 0 : -1);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ctx_r23.nzFooter, ɵɵsanitizeHtml);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzFooter);
  }
}
function NzDrawerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NzDrawerComponent_ng_template_0_Conditional_1_Template, 1, 1, "div", 2);
    ɵɵelementStart(2, "div")(3, "div", 3)(4, "div", 4);
    ɵɵtemplate(5, NzDrawerComponent_ng_template_0_Conditional_5_Template, 5, 5, "div", 5);
    ɵɵelementStart(6, "div", 6);
    ɵɵtemplate(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7)(8, NzDrawerComponent_ng_template_0_Conditional_8_Template, 1, 1)(9, NzDrawerComponent_ng_template_0_Conditional_9_Template, 1, 1);
    ɵɵelementEnd();
    ɵɵtemplate(10, NzDrawerComponent_ng_template_0_Conditional_10_Template, 2, 1, "div", 8);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("transform", ctx_r0.offsetTransform)("transition", ctx_r0.placementChanging ? "none" : null)("z-index", ctx_r0.nzZIndex);
    ɵɵclassProp("ant-drawer-rtl", ctx_r0.dir === "rtl")("ant-drawer-open", ctx_r0.isOpen)("no-mask", !ctx_r0.nzMask)("ant-drawer-top", ctx_r0.nzPlacement === "top")("ant-drawer-bottom", ctx_r0.nzPlacement === "bottom")("ant-drawer-right", ctx_r0.nzPlacement === "right")("ant-drawer-left", ctx_r0.nzPlacement === "left");
    ɵɵproperty("nzNoAnimation", ctx_r0.nzNoAnimation);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r0.nzMask ? 1 : -1);
    ɵɵadvance(1);
    ɵɵclassMapInterpolate1("ant-drawer-content-wrapper ", ctx_r0.nzWrapClassName, "");
    ɵɵstyleProp("width", ctx_r0.width)("height", ctx_r0.height)("transform", ctx_r0.transform)("transition", ctx_r0.placementChanging ? "none" : null);
    ɵɵadvance(2);
    ɵɵstyleProp("height", ctx_r0.isLeftOrRight ? "100%" : null);
    ɵɵadvance(1);
    ɵɵconditional(5, ctx_r0.nzTitle || ctx_r0.nzClosable ? 5 : -1);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r0.nzBodyStyle);
    ɵɵadvance(2);
    ɵɵconditional(8, ctx_r0.nzContent ? 8 : 9);
    ɵɵadvance(2);
    ɵɵconditional(10, ctx_r0.nzFooter ? 10 : -1);
  }
}
var _NzDrawerContentDirective = class _NzDrawerContentDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
};
_NzDrawerContentDirective.ɵfac = function NzDrawerContentDirective_Factory(t) {
  return new (t || _NzDrawerContentDirective)(ɵɵdirectiveInject(TemplateRef));
};
_NzDrawerContentDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDrawerContentDirective,
  selectors: [["", "nzDrawerContent", ""]],
  exportAs: ["nzDrawerContent"],
  standalone: true
});
var NzDrawerContentDirective = _NzDrawerContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDrawerContent]",
      exportAs: "nzDrawerContent",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var DRAWER_DEFAULT_SIZE = 378;
var DRAWER_LARGE_SIZE = 736;
var NZ_DRAWER_DATA = new InjectionToken("NZ_DRAWER_DATA");
var NzDrawerRef = class {
};
var DRAWER_ANIMATE_DURATION = 300;
var NZ_CONFIG_MODULE_NAME = "drawer";
var _NzDrawerComponent = class _NzDrawerComponent extends NzDrawerRef {
  set nzVisible(value) {
    this.isOpen = value;
  }
  get nzVisible() {
    return this.isOpen;
  }
  get offsetTransform() {
    if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
      return null;
    }
    switch (this.nzPlacement) {
      case "left":
        return `translateX(${this.nzOffsetX}px)`;
      case "right":
        return `translateX(-${this.nzOffsetX}px)`;
      case "top":
        return `translateY(${this.nzOffsetY}px)`;
      case "bottom":
        return `translateY(-${this.nzOffsetY}px)`;
    }
  }
  get transform() {
    if (this.isOpen) {
      return null;
    }
    switch (this.nzPlacement) {
      case "left":
        return `translateX(-100%)`;
      case "right":
        return `translateX(100%)`;
      case "top":
        return `translateY(-100%)`;
      case "bottom":
        return `translateY(100%)`;
    }
  }
  get width() {
    if (this.isLeftOrRight) {
      const defaultWidth = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
      return this.nzWidth === void 0 ? toCssPixel(defaultWidth) : toCssPixel(this.nzWidth);
    }
    return null;
  }
  get height() {
    if (!this.isLeftOrRight) {
      const defaultHeight = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
      return this.nzHeight === void 0 ? toCssPixel(defaultHeight) : toCssPixel(this.nzHeight);
    }
    return null;
  }
  get isLeftOrRight() {
    return this.nzPlacement === "left" || this.nzPlacement === "right";
  }
  get afterOpen() {
    return this.nzAfterOpen.asObservable();
  }
  get afterClose() {
    return this.nzAfterClose.asObservable();
  }
  get isNzContentTemplateRef() {
    return isTemplateRef(this.nzContent);
  }
  constructor(cdr, document, nzConfigService, renderer, overlay, injector, changeDetectorRef, focusTrapFactory, viewContainerRef, overlayKeyboardDispatcher, directionality) {
    super();
    this.cdr = cdr;
    this.document = document;
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.overlay = overlay;
    this.injector = injector;
    this.changeDetectorRef = changeDetectorRef;
    this.focusTrapFactory = focusTrapFactory;
    this.viewContainerRef = viewContainerRef;
    this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzCloseIcon = "close";
    this.nzClosable = true;
    this.nzMaskClosable = true;
    this.nzMask = true;
    this.nzCloseOnNavigation = true;
    this.nzNoAnimation = false;
    this.nzKeyboard = true;
    this.nzPlacement = "right";
    this.nzSize = "default";
    this.nzMaskStyle = {};
    this.nzBodyStyle = {};
    this.nzZIndex = 1e3;
    this.nzOffsetX = 0;
    this.nzOffsetY = 0;
    this.componentInstance = null;
    this.componentRef = null;
    this.nzOnViewInit = new EventEmitter();
    this.nzOnClose = new EventEmitter();
    this.nzVisibleChange = new EventEmitter();
    this.destroy$ = new Subject();
    this.placementChanging = false;
    this.placementChangeTimeoutId = -1;
    this.isOpen = false;
    this.inAnimation = false;
    this.templateContext = {
      $implicit: void 0,
      drawerRef: this
    };
    this.nzAfterOpen = new Subject();
    this.nzAfterClose = new Subject();
    this.nzDirection = void 0;
    this.dir = "ltr";
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.nzDirection || this.directionality.value;
    this.attachOverlay();
    this.updateOverlayStyle();
    this.updateBodyOverflow();
    this.templateContext = {
      $implicit: this.nzData || this.nzContentParams,
      drawerRef: this
    };
    this.changeDetectorRef.detectChanges();
  }
  ngAfterViewInit() {
    this.attachBodyContent();
    if (this.nzOnViewInit.observers.length) {
      setTimeout(() => {
        this.nzOnViewInit.emit();
      });
    }
  }
  ngOnChanges(changes) {
    const {
      nzPlacement,
      nzVisible
    } = changes;
    if (nzVisible) {
      const value = changes.nzVisible.currentValue;
      if (value) {
        this.open();
      } else {
        this.close();
      }
    }
    if (nzPlacement && !nzPlacement.isFirstChange()) {
      this.triggerPlacementChangeCycleOnce();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    clearTimeout(this.placementChangeTimeoutId);
    this.disposeOverlay();
  }
  getAnimationDuration() {
    return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
  }
  // Disable the transition animation temporarily when the placement changing
  triggerPlacementChangeCycleOnce() {
    if (!this.nzNoAnimation) {
      this.placementChanging = true;
      this.changeDetectorRef.markForCheck();
      clearTimeout(this.placementChangeTimeoutId);
      this.placementChangeTimeoutId = setTimeout(() => {
        this.placementChanging = false;
        this.changeDetectorRef.markForCheck();
      }, this.getAnimationDuration());
    }
  }
  close(result) {
    this.isOpen = false;
    this.inAnimation = true;
    this.nzVisibleChange.emit(false);
    this.updateOverlayStyle();
    this.overlayKeyboardDispatcher.remove(this.overlayRef);
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.updateBodyOverflow();
      this.restoreFocus();
      this.inAnimation = false;
      this.nzAfterClose.next(result);
      this.nzAfterClose.complete();
      this.componentInstance = null;
      this.componentRef = null;
    }, this.getAnimationDuration());
  }
  open() {
    this.attachOverlay();
    this.isOpen = true;
    this.inAnimation = true;
    this.nzVisibleChange.emit(true);
    this.overlayKeyboardDispatcher.add(this.overlayRef);
    this.updateOverlayStyle();
    this.updateBodyOverflow();
    this.savePreviouslyFocusedElement();
    this.trapFocus();
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.inAnimation = false;
      this.changeDetectorRef.detectChanges();
      this.nzAfterOpen.next();
    }, this.getAnimationDuration());
  }
  getContentComponent() {
    return this.componentInstance;
  }
  getContentComponentRef() {
    return this.componentRef;
  }
  closeClick() {
    this.nzOnClose.emit();
  }
  maskClick() {
    if (this.nzMaskClosable && this.nzMask) {
      this.nzOnClose.emit();
    }
  }
  attachBodyContent() {
    this.bodyPortalOutlet.dispose();
    if (this.nzContent instanceof Type) {
      const childInjector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NzDrawerRef,
          useValue: this
        }, {
          provide: NZ_DRAWER_DATA,
          useValue: this.nzData
        }]
      });
      const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
      this.componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
      this.componentInstance = this.componentRef.instance;
      Object.assign(this.componentRef.instance, this.nzData || this.nzContentParams);
      this.componentRef.changeDetectorRef.detectChanges();
    }
  }
  attachOverlay() {
    if (!this.overlayRef) {
      this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
      overlayZIndexSetter(this.overlayRef, this.nzZIndex);
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.overlayRef.keydownEvents().pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
          this.nzOnClose.emit();
        }
      });
      this.overlayRef.detachments().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.disposeOverlay();
      });
    }
  }
  disposeOverlay() {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }
  getOverlayConfig() {
    return new OverlayConfig({
      disposeOnNavigation: this.nzCloseOnNavigation,
      positionStrategy: this.overlay.position().global(),
      scrollStrategy: this.overlay.scrollStrategies.block()
    });
  }
  updateOverlayStyle() {
    if (this.overlayRef && this.overlayRef.overlayElement) {
      this.renderer.setStyle(this.overlayRef.overlayElement, "pointer-events", this.isOpen ? "auto" : "none");
    }
  }
  updateBodyOverflow() {
    if (this.overlayRef) {
      if (this.isOpen) {
        this.overlayRef.getConfig().scrollStrategy.enable();
      } else {
        this.overlayRef.getConfig().scrollStrategy.disable();
      }
    }
  }
  savePreviouslyFocusedElement() {
    if (this.document && !this.previouslyFocusedElement) {
      this.previouslyFocusedElement = this.document.activeElement;
      if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.blur === "function") {
        this.previouslyFocusedElement.blur();
      }
    }
  }
  trapFocus() {
    if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
      this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
      this.focusTrap.focusInitialElement();
    }
  }
  restoreFocus() {
    if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === "function") {
      this.previouslyFocusedElement.focus();
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }
};
_NzDrawerComponent.ɵfac = function NzDrawerComponent_Factory(t) {
  return new (t || _NzDrawerComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusTrapFactory), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(OverlayKeyboardDispatcher), ɵɵdirectiveInject(Directionality, 8));
};
_NzDrawerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDrawerComponent,
  selectors: [["nz-drawer"]],
  contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzDrawerContentDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentFromContentChild = _t.first);
    }
  },
  viewQuery: function NzDrawerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(CdkPortalOutlet, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drawerTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.bodyPortalOutlet = _t.first);
    }
  },
  inputs: {
    nzContent: "nzContent",
    nzCloseIcon: "nzCloseIcon",
    nzClosable: "nzClosable",
    nzMaskClosable: "nzMaskClosable",
    nzMask: "nzMask",
    nzCloseOnNavigation: "nzCloseOnNavigation",
    nzNoAnimation: "nzNoAnimation",
    nzKeyboard: "nzKeyboard",
    nzTitle: "nzTitle",
    nzExtra: "nzExtra",
    nzFooter: "nzFooter",
    nzPlacement: "nzPlacement",
    nzSize: "nzSize",
    nzMaskStyle: "nzMaskStyle",
    nzBodyStyle: "nzBodyStyle",
    nzWrapClassName: "nzWrapClassName",
    nzWidth: "nzWidth",
    nzHeight: "nzHeight",
    nzZIndex: "nzZIndex",
    nzOffsetX: "nzOffsetX",
    nzOffsetY: "nzOffsetY",
    nzVisible: "nzVisible"
  },
  outputs: {
    nzOnViewInit: "nzOnViewInit",
    nzOnClose: "nzOnClose",
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzDrawer"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], ["class", "ant-drawer-mask", 3, "ngStyle"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], ["class", "ant-drawer-header", 3, "ant-drawer-header-close-only"], [1, "ant-drawer-body", 3, "ngStyle"], ["cdkPortalOutlet", ""], ["class", "ant-drawer-footer"], [1, "ant-drawer-mask", 3, "ngStyle", "click"], [1, "ant-drawer-header"], [1, "ant-drawer-header-title"], ["aria-label", "Close", "class", "ant-drawer-close", "style", "--scroll-bar: 0px;"], ["class", "ant-drawer-title"], ["class", "ant-drawer-extra"], ["aria-label", "Close", 1, "ant-drawer-close", 2, "--scroll-bar", "0px", 3, "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"], [1, "ant-drawer-title"], [3, "innerHTML"], [1, "ant-drawer-extra"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngTemplateOutlet"], [1, "ant-drawer-footer"]],
  template: function NzDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzDrawerComponent_ng_template_0_Template, 11, 39, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NzNoAnimationDirective, NgStyle, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, PortalModule, CdkPortalOutlet, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzDrawerComponent = _NzDrawerComponent;
__decorate([InputBoolean()], NzDrawerComponent.prototype, "nzClosable", void 0);
__decorate([WithConfig(), InputBoolean()], NzDrawerComponent.prototype, "nzMaskClosable", void 0);
__decorate([WithConfig(), InputBoolean()], NzDrawerComponent.prototype, "nzMask", void 0);
__decorate([WithConfig(), InputBoolean()], NzDrawerComponent.prototype, "nzCloseOnNavigation", void 0);
__decorate([InputBoolean()], NzDrawerComponent.prototype, "nzNoAnimation", void 0);
__decorate([InputBoolean()], NzDrawerComponent.prototype, "nzKeyboard", void 0);
__decorate([WithConfig()], NzDrawerComponent.prototype, "nzDirection", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerComponent, [{
    type: Component,
    args: [{
      selector: "nz-drawer",
      exportAs: "nzDrawer",
      template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        @if (nzMask) {
          <div class="ant-drawer-mask" (click)="maskClick()" [ngStyle]="nzMaskStyle"></div>
        }
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              @if (nzTitle || nzClosable) {
                <div class="ant-drawer-header" [class.ant-drawer-header-close-only]="!nzTitle">
                  <div class="ant-drawer-header-title">
                    @if (nzClosable) {
                      <button
                        (click)="closeClick()"
                        aria-label="Close"
                        class="ant-drawer-close"
                        style="--scroll-bar: 0px;"
                      >
                        <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                          <span nz-icon [nzType]="closeIcon"></span>
                        </ng-container>
                      </button>
                    }

                    @if (nzTitle) {
                      <div class="ant-drawer-title">
                        <ng-container *nzStringTemplateOutlet="nzTitle">
                          <div [innerHTML]="nzTitle"></div>
                        </ng-container>
                      </div>
                    }
                  </div>
                  @if (nzExtra) {
                    <div class="ant-drawer-extra">
                      <ng-container *nzStringTemplateOutlet="nzExtra">
                        <div [innerHTML]="nzExtra"></div>
                      </ng-container>
                    </div>
                  }
                </div>
              }
              <div class="ant-drawer-body" [ngStyle]="nzBodyStyle">
                <ng-template cdkPortalOutlet />
                @if (nzContent) {
                  @if (isNzContentTemplateRef) {
                    <ng-container *ngTemplateOutlet="$any(nzContent); context: templateContext" />
                  }
                } @else {
                  @if (contentFromContentChild && (isOpen || inAnimation)) {
                    <ng-template [ngTemplateOutlet]="contentFromContentChild" />
                  }
                }
              </div>
              @if (nzFooter) {
                <div class="ant-drawer-footer">
                  <ng-container *nzStringTemplateOutlet="nzFooter">
                    <div [innerHTML]="nzFooter"></div>
                  </ng-container>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzNoAnimationDirective, NgStyle, NzOutletModule, NzIconModule, PortalModule, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: Overlay
  }, {
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusTrapFactory
  }, {
    type: ViewContainerRef
  }, {
    type: OverlayKeyboardDispatcher
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzContent: [{
      type: Input
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzClosable: [{
      type: Input
    }],
    nzMaskClosable: [{
      type: Input
    }],
    nzMask: [{
      type: Input
    }],
    nzCloseOnNavigation: [{
      type: Input
    }],
    nzNoAnimation: [{
      type: Input
    }],
    nzKeyboard: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzMaskStyle: [{
      type: Input
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzWrapClassName: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzHeight: [{
      type: Input
    }],
    nzZIndex: [{
      type: Input
    }],
    nzOffsetX: [{
      type: Input
    }],
    nzOffsetY: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzOnViewInit: [{
      type: Output
    }],
    nzOnClose: [{
      type: Output
    }],
    nzVisibleChange: [{
      type: Output
    }],
    drawerTemplate: [{
      type: ViewChild,
      args: ["drawerTemplate", {
        static: true
      }]
    }],
    bodyPortalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: false
      }]
    }],
    contentFromContentChild: [{
      type: ContentChild,
      args: [NzDrawerContentDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    nzDirection: []
  });
})();
var DrawerBuilderForService = class {
  constructor(overlay, options) {
    this.overlay = overlay;
    this.options = options;
    this.unsubscribe$ = new Subject();
    const _a = this.options, {
      nzOnCancel
    } = _a, componentOption = __objRest(_a, [
      "nzOnCancel"
    ]);
    this.overlayRef = this.overlay.create();
    this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
    this.updateOptions(componentOption);
    this.drawerRef.savePreviouslyFocusedElement();
    this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.drawerRef.open();
    });
    this.drawerRef.nzOnClose.subscribe(() => {
      if (nzOnCancel) {
        nzOnCancel().then((canClose) => {
          if (canClose !== false) {
            this.drawerRef.close();
          }
        });
      } else {
        this.drawerRef.close();
      }
    });
    this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.overlayRef.dispose();
      this.drawerRef = null;
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    });
  }
  getInstance() {
    return this.drawerRef;
  }
  updateOptions(options) {
    Object.assign(this.drawerRef, options);
  }
};
var _NzDrawerService = class _NzDrawerService {
  constructor(overlay) {
    this.overlay = overlay;
  }
  create(options) {
    return new DrawerBuilderForService(this.overlay, options).getInstance();
  }
};
_NzDrawerService.ɵfac = function NzDrawerService_Factory(t) {
  return new (t || _NzDrawerService)(ɵɵinject(Overlay));
};
_NzDrawerService.ɵprov = ɵɵdefineInjectable({
  token: _NzDrawerService,
  factory: _NzDrawerService.ɵfac
});
var NzDrawerService = _NzDrawerService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerService, [{
    type: Injectable
  }], () => [{
    type: Overlay
  }], null);
})();
var _NzDrawerModule = class _NzDrawerModule {
};
_NzDrawerModule.ɵfac = function NzDrawerModule_Factory(t) {
  return new (t || _NzDrawerModule)();
};
_NzDrawerModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDrawerModule,
  imports: [NzDrawerComponent, NzDrawerContentDirective],
  exports: [NzDrawerComponent, NzDrawerContentDirective]
});
_NzDrawerModule.ɵinj = ɵɵdefineInjector({
  providers: [NzDrawerService],
  imports: [NzDrawerComponent]
});
var NzDrawerModule = _NzDrawerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDrawerComponent, NzDrawerContentDirective],
      providers: [NzDrawerService],
      exports: [NzDrawerComponent, NzDrawerContentDirective]
    }]
  }], null, null);
})();
export {
  DRAWER_ANIMATE_DURATION,
  DRAWER_DEFAULT_SIZE,
  DRAWER_LARGE_SIZE,
  DrawerBuilderForService,
  NZ_DRAWER_DATA,
  NzDrawerComponent,
  NzDrawerContentDirective,
  NzDrawerModule,
  NzDrawerRef,
  NzDrawerService
};
//# sourceMappingURL=ng-zorro-antd_drawer.js.map
