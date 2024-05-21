import {
  NzToolTipComponent,
  NzTooltipBaseDirective
} from "./chunk-5Y2P373U.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-T4KVFTV6.js";
import {
  NzTransitionPatchDirective
} from "./chunk-NPFQICFZ.js";
import {
  NzWaveDirective
} from "./chunk-UZPRKK5P.js";
import {
  NzI18nModule,
  NzI18nPipe
} from "./chunk-55VXEKD3.js";
import "./chunk-SWLH6A5W.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-Z4EPM4PK.js";
import {
  A11yModule,
  CdkTrapFocus
} from "./chunk-NGEBQP6D.js";
import "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
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
  zoomBigMotion
} from "./chunk-BJIJDVLR.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  wrapIntoObservable
} from "./chunk-A4L4YVTT.js";
import "./chunk-ZGPWTRIH.js";
import "./chunk-TLRFD67R.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-3UTWO7T6.js";
import "./chunk-SOPZD4MF.js";
import "./chunk-2CGA3OMX.js";
import "./chunk-27BDGVS6.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-GRCHAQNP.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-PA6IY4WI.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  finalize,
  first,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadValues
} from "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popconfirm.mjs
var _c0 = ["okBtn"];
var _c1 = ["cancelBtn"];
function NzPopconfirmComponent_ng_template_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "span", 16);
    ɵɵelementEnd();
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzType", icon_r11 || "exclamation-circle");
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzPopconfirmComponent_ng_template_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementStart(2, "div", 17);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzIcon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r3.nzTitle);
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.nzCancelText);
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "nzI18n");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "Modal.cancelText"));
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r8.nzOkText);
  }
}
function NzPopconfirmComponent_ng_template_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "nzI18n");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "Modal.okText"));
  }
}
function NzPopconfirmComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵtemplate(2, NzPopconfirmComponent_ng_template_0_div_2_Template, 2, 0, "div", 4);
    ɵɵelementStart(3, "div", 5)(4, "div")(5, "div", 6)(6, "div", 7);
    ɵɵtemplate(7, NzPopconfirmComponent_ng_template_0_ng_container_7_Template, 4, 2, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9)(9, "button", 10, 11);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_9_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.onCancel());
    });
    ɵɵtemplate(11, NzPopconfirmComponent_ng_template_0_ng_container_11_Template, 2, 1, "ng-container", 12)(12, NzPopconfirmComponent_ng_template_0_ng_container_12_Template, 3, 3, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 13, 14);
    ɵɵlistener("click", function NzPopconfirmComponent_ng_template_0_Template_button_click_13_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onConfirm());
    });
    ɵɵtemplate(15, NzPopconfirmComponent_ng_template_0_ng_container_15_Template, 2, 1, "ng-container", 12)(16, NzPopconfirmComponent_ng_template_0_ng_container_16_Template, 3, 3, "ng-container", 12);
    ɵɵelementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-popover-rtl", ctx_r0.dir === "rtl");
    ɵɵproperty("cdkTrapFocusAutoCapture", ctx_r0.nzAutoFocus !== null)("ngClass", ctx_r0._classMap)("ngStyle", ctx_r0.nzOverlayStyle)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.nzPopconfirmShowArrow);
    ɵɵadvance(5);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzTitle);
    ɵɵadvance(2);
    ɵɵproperty("nzSize", "small");
    ɵɵattribute("cdkFocusInitial", ctx_r0.nzAutoFocus === "cancel" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.nzCancelText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.nzCancelText);
    ɵɵadvance(1);
    ɵɵproperty("nzSize", "small")("nzType", ctx_r0.nzOkType !== "danger" ? ctx_r0.nzOkType : "primary")("nzDanger", ctx_r0.nzOkDanger || ctx_r0.nzOkType === "danger")("nzLoading", ctx_r0.confirmLoading);
    ɵɵattribute("cdkFocusInitial", ctx_r0.nzAutoFocus === "ok" || null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.nzOkText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.nzOkText);
  }
}
var NZ_CONFIG_MODULE_NAME = "popconfirm";
var _NzPopconfirmDirective = class _NzPopconfirmDirective extends NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return __spreadValues({
      nzOkText: ["nzOkText", () => this.nzOkText],
      nzOkType: ["nzOkType", () => this.nzOkType],
      nzOkDanger: ["nzOkDanger", () => this.nzOkDanger],
      nzCancelText: ["nzCancelText", () => this.nzCancelText],
      nzBeforeConfirm: ["nzBeforeConfirm", () => this.nzBeforeConfirm],
      nzCondition: ["nzCondition", () => this.nzCondition],
      nzIcon: ["nzIcon", () => this.nzIcon],
      nzPopconfirmShowArrow: ["nzPopconfirmShowArrow", () => this.nzPopconfirmShowArrow],
      nzPopconfirmBackdrop: ["nzBackdrop", () => this.nzPopconfirmBackdrop],
      nzAutoFocus: ["nzAutoFocus", () => this.nzAutofocus]
    }, super.getProxyPropertyMap());
  }
  constructor(elementRef, hostView, renderer, noAnimation, nzConfigService) {
    super(elementRef, hostView, renderer, noAnimation, nzConfigService);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.trigger = "click";
    this.placement = "top";
    this.nzCondition = false;
    this.nzPopconfirmShowArrow = true;
    this.nzPopconfirmBackdrop = false;
    this.nzAutofocus = null;
    this.visibleChange = new EventEmitter();
    this.nzOnCancel = new EventEmitter();
    this.nzOnConfirm = new EventEmitter();
    this.componentRef = this.hostView.createComponent(NzPopconfirmComponent);
  }
  /**
   * @override
   */
  createComponent() {
    super.createComponent();
    this.component.nzOnCancel.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nzOnCancel.emit();
    });
    this.component.nzOnConfirm.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.nzOnConfirm.emit();
    });
  }
};
_NzPopconfirmDirective.ɵfac = function NzPopconfirmDirective_Factory(t) {
  return new (t || _NzPopconfirmDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(NzConfigService));
};
_NzPopconfirmDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPopconfirmDirective,
  selectors: [["", "nz-popconfirm", ""]],
  hostVars: 2,
  hostBindings: function NzPopconfirmDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-popover-open", ctx.visible);
    }
  },
  inputs: {
    arrowPointAtCenter: ["nzPopconfirmArrowPointAtCenter", "arrowPointAtCenter"],
    title: ["nzPopconfirmTitle", "title"],
    directiveTitle: ["nz-popconfirm", "directiveTitle"],
    trigger: ["nzPopconfirmTrigger", "trigger"],
    placement: ["nzPopconfirmPlacement", "placement"],
    origin: ["nzPopconfirmOrigin", "origin"],
    mouseEnterDelay: ["nzPopconfirmMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: ["nzPopconfirmMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: ["nzPopconfirmOverlayClassName", "overlayClassName"],
    overlayStyle: ["nzPopconfirmOverlayStyle", "overlayStyle"],
    visible: ["nzPopconfirmVisible", "visible"],
    nzOkText: "nzOkText",
    nzOkType: "nzOkType",
    nzOkDanger: "nzOkDanger",
    nzCancelText: "nzCancelText",
    nzBeforeConfirm: "nzBeforeConfirm",
    nzIcon: "nzIcon",
    nzCondition: "nzCondition",
    nzPopconfirmShowArrow: "nzPopconfirmShowArrow",
    nzPopconfirmBackdrop: "nzPopconfirmBackdrop",
    nzAutofocus: "nzAutofocus"
  },
  outputs: {
    visibleChange: "nzPopconfirmVisibleChange",
    nzOnCancel: "nzOnCancel",
    nzOnConfirm: "nzOnConfirm"
  },
  exportAs: ["nzPopconfirm"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var NzPopconfirmDirective = _NzPopconfirmDirective;
__decorate([InputBoolean()], NzPopconfirmDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([InputBoolean()], NzPopconfirmDirective.prototype, "nzOkDanger", void 0);
__decorate([InputBoolean()], NzPopconfirmDirective.prototype, "nzCondition", void 0);
__decorate([InputBoolean()], NzPopconfirmDirective.prototype, "nzPopconfirmShowArrow", void 0);
__decorate([WithConfig()], NzPopconfirmDirective.prototype, "nzPopconfirmBackdrop", void 0);
__decorate([WithConfig()], NzPopconfirmDirective.prototype, "nzAutofocus", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popconfirm]",
      exportAs: "nzPopconfirm",
      host: {
        "[class.ant-popover-open]": "visible"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: NzConfigService
  }], {
    arrowPointAtCenter: [{
      type: Input,
      args: ["nzPopconfirmArrowPointAtCenter"]
    }],
    title: [{
      type: Input,
      args: ["nzPopconfirmTitle"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popconfirm"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopconfirmTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopconfirmPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopconfirmOrigin"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopconfirmMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopconfirmOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopconfirmOverlayStyle"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopconfirmVisible"]
    }],
    nzOkText: [{
      type: Input
    }],
    nzOkType: [{
      type: Input
    }],
    nzOkDanger: [{
      type: Input
    }],
    nzCancelText: [{
      type: Input
    }],
    nzBeforeConfirm: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzCondition: [{
      type: Input
    }],
    nzPopconfirmShowArrow: [{
      type: Input
    }],
    nzPopconfirmBackdrop: [{
      type: Input
    }],
    nzAutofocus: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopconfirmVisibleChange"]
    }],
    nzOnCancel: [{
      type: Output
    }],
    nzOnConfirm: [{
      type: Output
    }]
  });
})();
var _NzPopconfirmComponent = class _NzPopconfirmComponent extends NzToolTipComponent {
  constructor(cdr, elementRef, directionality, document, noAnimation) {
    super(cdr, directionality, noAnimation);
    this.elementRef = elementRef;
    this.nzCondition = false;
    this.nzPopconfirmShowArrow = true;
    this.nzOkType = "primary";
    this.nzOkDanger = false;
    this.nzAutoFocus = null;
    this.nzBeforeConfirm = null;
    this.nzOnCancel = new Subject();
    this.nzOnConfirm = new Subject();
    this._trigger = "click";
    this.elementFocusedBeforeModalWasOpened = null;
    this._prefix = "ant-popover";
    this.confirmLoading = false;
    this.document = document;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this.nzOnCancel.complete();
    this.nzOnConfirm.complete();
  }
  /**
   * @override
   */
  show() {
    if (!this.nzCondition) {
      this.capturePreviouslyFocusedElement();
      super.show();
    } else {
      this.onConfirm();
    }
  }
  hide() {
    super.hide();
    this.restoreFocus();
  }
  handleConfirm() {
    this.nzOnConfirm.next();
    super.hide();
  }
  onCancel() {
    this.nzOnCancel.next();
    super.hide();
  }
  onConfirm() {
    if (this.nzBeforeConfirm) {
      const observable = wrapIntoObservable(this.nzBeforeConfirm()).pipe(first());
      this.confirmLoading = true;
      observable.pipe(finalize(() => {
        this.confirmLoading = false;
        this.cdr.markForCheck();
      }), takeUntil(this.nzVisibleChange), takeUntil(this.destroy$)).subscribe((value) => {
        if (value) {
          this.handleConfirm();
        }
      });
    } else {
      this.handleConfirm();
    }
  }
  capturePreviouslyFocusedElement() {
    if (this.document) {
      this.elementFocusedBeforeModalWasOpened = this.document.activeElement;
    }
  }
  restoreFocus() {
    const toFocus = this.elementFocusedBeforeModalWasOpened;
    if (toFocus && typeof toFocus.focus === "function") {
      const activeElement = this.document.activeElement;
      const element = this.elementRef.nativeElement;
      if (!activeElement || activeElement === this.document.body || activeElement === element || element.contains(activeElement)) {
        toFocus.focus();
      }
    }
  }
};
_NzPopconfirmComponent.ɵfac = function NzPopconfirmComponent_Factory(t) {
  return new (t || _NzPopconfirmComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzPopconfirmComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPopconfirmComponent,
  selectors: [["nz-popconfirm"]],
  viewQuery: function NzPopconfirmComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5, ElementRef);
      ɵɵviewQuery(_c1, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.okBtn = _t);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelBtn = _t);
    }
  },
  exportAs: ["nzPopconfirmComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], ["cdkTrapFocus", "", 1, "ant-popover", 3, "cdkTrapFocusAutoCapture", "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], ["class", "ant-popover-arrow", 4, "ngIf"], [1, "ant-popover-inner"], [1, "ant-popover-inner-content"], [1, "ant-popover-message"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-buttons"], ["nz-button", "", 3, "nzSize", "click"], ["cancelBtn", ""], [4, "ngIf"], ["nz-button", "", 3, "nzSize", "nzType", "nzDanger", "nzLoading", "click"], ["okBtn", ""], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], [1, "ant-popover-message-title"], ["nz-icon", "", "nzTheme", "fill", 3, "nzType"]],
  template: function NzPopconfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPopconfirmComponent_ng_template_0_Template, 17, 21, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzPopconfirmComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        return ctx.onClickOutside($event);
      })("detach", function NzPopconfirmComponent_Template_ng_template_detach_0_listener() {
        return ctx.hide();
      })("positionChange", function NzPopconfirmComponent_Template_ng_template_positionChange_0_listener($event) {
        return ctx.onPositionChange($event);
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, A11yModule, CdkTrapFocus, NgClass, NgStyle, NzNoAnimationDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzI18nModule, NzI18nPipe],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzPopconfirmComponent = _NzPopconfirmComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-popconfirm",
      exportAs: "nzPopconfirmComponent",
      preserveWhitespaces: false,
      animations: [zoomBigMotion],
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
    >
      <div
        cdkTrapFocus
        [cdkTrapFocusAutoCapture]="nzAutoFocus !== null"
        class="ant-popover"
        [ngClass]="_classMap"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow" *ngIf="nzPopconfirmShowArrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner">
            <div>
              <div class="ant-popover-inner-content">
                <div class="ant-popover-message">
                  <ng-container *nzStringTemplateOutlet="nzTitle">
                    <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
                      <span nz-icon [nzType]="icon || 'exclamation-circle'" nzTheme="fill"></span>
                    </ng-container>
                    <div class="ant-popover-message-title">{{ nzTitle }}</div>
                  </ng-container>
                </div>
                <div class="ant-popover-buttons">
                  <button
                    nz-button
                    #cancelBtn
                    [nzSize]="'small'"
                    (click)="onCancel()"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'cancel' || null"
                  >
                    <ng-container *ngIf="nzCancelText">{{ nzCancelText }}</ng-container>
                    <ng-container *ngIf="!nzCancelText">{{ 'Modal.cancelText' | nzI18n }}</ng-container>
                  </button>
                  <button
                    nz-button
                    #okBtn
                    [nzSize]="'small'"
                    [nzType]="nzOkType !== 'danger' ? nzOkType : 'primary'"
                    [nzDanger]="nzOkDanger || nzOkType === 'danger'"
                    [nzLoading]="confirmLoading"
                    (click)="onConfirm()"
                    [attr.cdkFocusInitial]="nzAutoFocus === 'ok' || null"
                  >
                    <ng-container *ngIf="nzOkText">{{ nzOkText }}</ng-container>
                    <ng-container *ngIf="!nzOkText">{{ 'Modal.okText' | nzI18n }}</ng-container>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, A11yModule, NgClass, NgStyle, NzNoAnimationDirective, NgIf, NzOutletModule, NzIconModule, NzButtonModule, NzI18nModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], {
    okBtn: [{
      type: ViewChildren,
      args: ["okBtn", {
        read: ElementRef
      }]
    }],
    cancelBtn: [{
      type: ViewChildren,
      args: ["cancelBtn", {
        read: ElementRef
      }]
    }]
  });
})();
var _NzPopconfirmModule = class _NzPopconfirmModule {
};
_NzPopconfirmModule.ɵfac = function NzPopconfirmModule_Factory(t) {
  return new (t || _NzPopconfirmModule)();
};
_NzPopconfirmModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPopconfirmModule,
  imports: [NzPopconfirmComponent, NzPopconfirmDirective],
  exports: [NzPopconfirmComponent, NzPopconfirmDirective]
});
_NzPopconfirmModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPopconfirmComponent]
});
var NzPopconfirmModule = _NzPopconfirmModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopconfirmModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopconfirmComponent, NzPopconfirmDirective],
      exports: [NzPopconfirmComponent, NzPopconfirmDirective]
    }]
  }], null, null);
})();
export {
  NzPopconfirmComponent,
  NzPopconfirmDirective,
  NzPopconfirmModule
};
//# sourceMappingURL=ng-zorro-antd_popconfirm.js.map
