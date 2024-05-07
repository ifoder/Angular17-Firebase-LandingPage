import {
  NzToolTipComponent,
  NzTooltipBaseDirective,
  isTooltipEmpty
} from "./chunk-Z7TUDTAJ.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-OR3XDGBB.js";
import {
  NzNoAnimationDirective
} from "./chunk-HVVV2P4P.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  zoomBigMotion
} from "./chunk-BJIJDVLR.js";
import "./chunk-NA7MVJ2Z.js";
import "./chunk-A7RVIN62.js";
import {
  CdkConnectedOverlay,
  OverlayModule
} from "./chunk-7OFVZOUP.js";
import "./chunk-SOPZD4MF.js";
import "./chunk-27BDGVS6.js";
import "./chunk-2CGA3OMX.js";
import "./chunk-GRCHAQNP.js";
import "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean
} from "./chunk-A4L4YVTT.js";
import "./chunk-HH3PCEGU.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-PA6IY4WI.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
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
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2P2HMI5Y.js";
import "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadValues
} from "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-popover.mjs
function NzPopoverComponent_ng_template_0_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, NzPopoverComponent_ng_template_0_div_6_ng_container_1_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzTitle);
  }
}
function NzPopoverComponent_ng_template_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.nzContent);
  }
}
function NzPopoverComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6)(5, "div");
    ɵɵtemplate(6, NzPopoverComponent_ng_template_0_div_6_Template, 2, 1, "div", 7);
    ɵɵelementStart(7, "div", 8);
    ɵɵtemplate(8, NzPopoverComponent_ng_template_0_ng_container_8_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-popover-rtl", ctx_r0.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r0._classMap)("ngStyle", ctx_r0.nzOverlayStyle)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@zoomBigMotion", "active");
    ɵɵadvance(6);
    ɵɵproperty("ngIf", ctx_r0.nzTitle);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzContent);
  }
}
var NZ_CONFIG_MODULE_NAME = "popover";
var _NzPopoverDirective = class _NzPopoverDirective extends NzTooltipBaseDirective {
  getProxyPropertyMap() {
    return __spreadValues({
      nzPopoverBackdrop: ["nzBackdrop", () => this.nzPopoverBackdrop]
    }, super.getProxyPropertyMap());
  }
  constructor(elementRef, hostView, renderer, noAnimation, nzConfigService) {
    super(elementRef, hostView, renderer, noAnimation, nzConfigService);
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.trigger = "hover";
    this.placement = "top";
    this.nzPopoverBackdrop = false;
    this.visibleChange = new EventEmitter();
    this.componentRef = this.hostView.createComponent(NzPopoverComponent);
  }
};
_NzPopoverDirective.ɵfac = function NzPopoverDirective_Factory(t) {
  return new (t || _NzPopoverDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzNoAnimationDirective, 9), ɵɵdirectiveInject(NzConfigService));
};
_NzPopoverDirective.ɵdir = ɵɵdefineDirective({
  type: _NzPopoverDirective,
  selectors: [["", "nz-popover", ""]],
  hostVars: 2,
  hostBindings: function NzPopoverDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-popover-open", ctx.visible);
    }
  },
  inputs: {
    arrowPointAtCenter: ["nzPopoverArrowPointAtCenter", "arrowPointAtCenter"],
    title: ["nzPopoverTitle", "title"],
    content: ["nzPopoverContent", "content"],
    directiveTitle: ["nz-popover", "directiveTitle"],
    trigger: ["nzPopoverTrigger", "trigger"],
    placement: ["nzPopoverPlacement", "placement"],
    origin: ["nzPopoverOrigin", "origin"],
    visible: ["nzPopoverVisible", "visible"],
    mouseEnterDelay: ["nzPopoverMouseEnterDelay", "mouseEnterDelay"],
    mouseLeaveDelay: ["nzPopoverMouseLeaveDelay", "mouseLeaveDelay"],
    overlayClassName: ["nzPopoverOverlayClassName", "overlayClassName"],
    overlayStyle: ["nzPopoverOverlayStyle", "overlayStyle"],
    nzPopoverBackdrop: "nzPopoverBackdrop"
  },
  outputs: {
    visibleChange: "nzPopoverVisibleChange"
  },
  exportAs: ["nzPopover"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature]
});
var NzPopoverDirective = _NzPopoverDirective;
__decorate([InputBoolean()], NzPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([WithConfig()], NzPopoverDirective.prototype, "nzPopoverBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-popover]",
      exportAs: "nzPopover",
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
      args: ["nzPopoverArrowPointAtCenter"]
    }],
    title: [{
      type: Input,
      args: ["nzPopoverTitle"]
    }],
    content: [{
      type: Input,
      args: ["nzPopoverContent"]
    }],
    directiveTitle: [{
      type: Input,
      args: ["nz-popover"]
    }],
    trigger: [{
      type: Input,
      args: ["nzPopoverTrigger"]
    }],
    placement: [{
      type: Input,
      args: ["nzPopoverPlacement"]
    }],
    origin: [{
      type: Input,
      args: ["nzPopoverOrigin"]
    }],
    visible: [{
      type: Input,
      args: ["nzPopoverVisible"]
    }],
    mouseEnterDelay: [{
      type: Input,
      args: ["nzPopoverMouseEnterDelay"]
    }],
    mouseLeaveDelay: [{
      type: Input,
      args: ["nzPopoverMouseLeaveDelay"]
    }],
    overlayClassName: [{
      type: Input,
      args: ["nzPopoverOverlayClassName"]
    }],
    overlayStyle: [{
      type: Input,
      args: ["nzPopoverOverlayStyle"]
    }],
    nzPopoverBackdrop: [{
      type: Input
    }],
    visibleChange: [{
      type: Output,
      args: ["nzPopoverVisibleChange"]
    }]
  });
})();
var _NzPopoverComponent = class _NzPopoverComponent extends NzToolTipComponent {
  constructor(cdr, directionality, noAnimation) {
    super(cdr, directionality, noAnimation);
    this._prefix = "ant-popover";
  }
  get hasBackdrop() {
    return this.nzTrigger === "click" ? this.nzBackdrop : false;
  }
  isEmpty() {
    return isTooltipEmpty(this.nzTitle) && isTooltipEmpty(this.nzContent);
  }
};
_NzPopoverComponent.ɵfac = function NzPopoverComponent_Factory(t) {
  return new (t || _NzPopoverComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzPopoverComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzPopoverComponent,
  selectors: [["nz-popover"]],
  exportAs: ["nzPopoverComponent"],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 6,
  consts: [["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPush", "nzArrowPointAtCenter", "overlayOutsideClick", "detach", "positionChange"], ["overlay", "cdkConnectedOverlay"], [1, "ant-popover", 3, "ngClass", "ngStyle", "nzNoAnimation"], [1, "ant-popover-content"], [1, "ant-popover-arrow"], [1, "ant-popover-arrow-content"], ["role", "tooltip", 1, "ant-popover-inner"], ["class", "ant-popover-title", 4, "ngIf"], [1, "ant-popover-inner-content"], [4, "nzStringTemplateOutlet"], [1, "ant-popover-title"]],
  template: function NzPopoverComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzPopoverComponent_ng_template_0_Template, 9, 9, "ng-template", 0, 1, ɵɵtemplateRefExtractor);
      ɵɵlistener("overlayOutsideClick", function NzPopoverComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
        return ctx.onClickOutside($event);
      })("detach", function NzPopoverComponent_Template_ng_template_detach_0_listener() {
        return ctx.hide();
      })("positionChange", function NzPopoverComponent_Template_ng_template_positionChange_0_listener($event) {
        return ctx.onPositionChange($event);
      });
    }
    if (rf & 2) {
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayOpen", ctx._visible)("cdkConnectedOverlayPush", ctx.cdkConnectedOverlayPush)("nzArrowPointAtCenter", ctx.nzArrowPointAtCenter);
    }
  },
  dependencies: [OverlayModule, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NgClass, NgStyle, NzNoAnimationDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion]
  },
  changeDetection: 0
});
var NzPopoverComponent = _NzPopoverComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverComponent, [{
    type: Component,
    args: [{
      selector: "nz-popover",
      exportAs: "nzPopoverComponent",
      animations: [zoomBigMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="cdkConnectedOverlayPush"
      [nzArrowPointAtCenter]="nzArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="nzOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow">
            <span class="ant-popover-arrow-content"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="nzTitle">
                <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
              </div>
              <div class="ant-popover-inner-content">
                <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      imports: [OverlayModule, NzOverlayModule, NgClass, NgStyle, NzNoAnimationDirective, NgIf, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], null);
})();
var _NzPopoverModule = class _NzPopoverModule {
};
_NzPopoverModule.ɵfac = function NzPopoverModule_Factory(t) {
  return new (t || _NzPopoverModule)();
};
_NzPopoverModule.ɵmod = ɵɵdefineNgModule({
  type: _NzPopoverModule,
  imports: [NzPopoverDirective, NzPopoverComponent],
  exports: [NzPopoverDirective, NzPopoverComponent]
});
_NzPopoverModule.ɵinj = ɵɵdefineInjector({
  imports: [NzPopoverComponent]
});
var NzPopoverModule = _NzPopoverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NzPopoverDirective, NzPopoverComponent],
      exports: [NzPopoverDirective, NzPopoverComponent]
    }]
  }], null, null);
})();
export {
  NzPopoverComponent,
  NzPopoverDirective,
  NzPopoverModule
};
//# sourceMappingURL=ng-zorro-antd_popover.js.map
