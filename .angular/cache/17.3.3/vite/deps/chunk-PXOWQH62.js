import {
  NzIconDirective,
  NzIconModule
} from "./chunk-6SU7ZL5H.js";
import {
  PlatformModule
} from "./chunk-KFL6KJZO.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-DVRA4BNT.js";
import {
  InputNumber
} from "./chunk-O6NELX6U.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-Y4OPO6BX.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-avatar.mjs
var _c0 = ["textEl"];
function NzAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.nzIcon);
  }
}
function NzAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 3);
    ɵɵlistener("error", function NzAvatarComponent_Conditional_1_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.imgError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r1.nzSrc, ɵɵsanitizeUrl);
    ɵɵattribute("srcset", ctx_r1.nzSrcSet)("alt", ctx_r1.nzAlt);
  }
}
function NzAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4, 5);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.nzText);
  }
}
var _c1 = ["*"];
var NZ_CONFIG_MODULE_NAME = "avatar";
var _NzAvatarComponent = class _NzAvatarComponent {
  constructor(nzConfigService, elementRef, cdr) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShape = "circle";
    this.nzSize = "default";
    this.nzGap = 4;
    this.nzError = new EventEmitter();
    this.hasText = false;
    this.hasSrc = true;
    this.hasIcon = false;
    this.classMap = {};
    this.customSize = null;
    this.el = this.elementRef.nativeElement;
  }
  imgError($event) {
    this.nzError.emit($event);
    if (!$event.defaultPrevented) {
      this.hasSrc = false;
      this.hasIcon = false;
      this.hasText = false;
      if (this.nzIcon) {
        this.hasIcon = true;
      } else if (this.nzText) {
        this.hasText = true;
      }
      this.cdr.detectChanges();
      this.setSizeStyle();
      this.calcStringSize();
    }
  }
  ngOnChanges() {
    this.hasText = !this.nzSrc && !!this.nzText;
    this.hasIcon = !this.nzSrc && !!this.nzIcon;
    this.hasSrc = !!this.nzSrc;
    this.setSizeStyle();
    this.calcStringSize();
  }
  ngAfterViewInit() {
    this.calcStringSize();
  }
  calcStringSize() {
    if (!this.hasText || !this.textEl) {
      return;
    }
    const textEl = this.textEl.nativeElement;
    const childrenWidth = textEl.offsetWidth;
    const avatarWidth = this.el.getBoundingClientRect?.().width ?? 0;
    const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
    const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
    textEl.style.transform = `scale(${scale}) translateX(-50%)`;
    textEl.style.lineHeight = this.customSize || "";
  }
  setSizeStyle() {
    if (typeof this.nzSize === "number") {
      this.customSize = `${this.nzSize}px`;
    } else {
      this.customSize = null;
    }
    this.cdr.markForCheck();
  }
};
_NzAvatarComponent.ɵfac = function NzAvatarComponent_Factory(t) {
  return new (t || _NzAvatarComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzAvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAvatarComponent,
  selectors: [["nz-avatar"]],
  viewQuery: function NzAvatarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEl = _t.first);
    }
  },
  hostAttrs: [1, "ant-avatar"],
  hostVars: 20,
  hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
      ɵɵclassProp("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    }
  },
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize",
    nzGap: "nzGap",
    nzText: "nzText",
    nzSrc: "nzSrc",
    nzSrcSet: "nzSrcSet",
    nzAlt: "nzAlt",
    nzIcon: "nzIcon"
  },
  outputs: {
    nzError: "nzError"
  },
  exportAs: ["nzAvatar"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 3,
  consts: [["nz-icon", "", 3, "nzType"], [3, "src"], ["class", "ant-avatar-string"], [3, "src", "error"], [1, "ant-avatar-string"], ["textEl", ""]],
  template: function NzAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzAvatarComponent_Conditional_0_Template, 1, 1, "span", 0)(1, NzAvatarComponent_Conditional_1_Template, 1, 3, "img", 1)(2, NzAvatarComponent_Conditional_2_Template, 3, 1, "span", 2);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzIcon && ctx.hasIcon ? 0 : -1);
      ɵɵadvance(1);
      ɵɵconditional(1, ctx.nzSrc && ctx.hasSrc ? 1 : -1);
      ɵɵadvance(1);
      ɵɵconditional(2, ctx.nzText && ctx.hasText ? 2 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, PlatformModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzAvatarComponent = _NzAvatarComponent;
__decorate([WithConfig()], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([WithConfig()], NzAvatarComponent.prototype, "nzSize", void 0);
__decorate([WithConfig(), InputNumber()], NzAvatarComponent.prototype, "nzGap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar",
      exportAs: "nzAvatar",
      standalone: true,
      imports: [NzIconModule, PlatformModule],
      template: `
    @if (nzIcon && hasIcon) {
      <span nz-icon [nzType]="nzIcon"></span>
    }
    @if (nzSrc && hasSrc) {
      <img [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    }
    @if (nzText && hasText) {
      <span class="ant-avatar-string" #textEl>{{ nzText }}</span>
    }
  `,
      host: {
        class: "ant-avatar",
        "[class.ant-avatar-lg]": `nzSize === 'large'`,
        "[class.ant-avatar-sm]": `nzSize === 'small'`,
        "[class.ant-avatar-square]": `nzShape === 'square'`,
        "[class.ant-avatar-circle]": `nzShape === 'circle'`,
        "[class.ant-avatar-icon]": `nzIcon`,
        "[class.ant-avatar-image]": `hasSrc `,
        "[style.width]": "customSize",
        "[style.height]": "customSize",
        "[style.line-height]": "customSize",
        // nzSize type is number when customSize is true
        "[style.font-size.px]": "(hasIcon && customSize) ? $any(nzSize) / 2 : null"
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzSrc: [{
      type: Input
    }],
    nzSrcSet: [{
      type: Input
    }],
    nzAlt: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzError: [{
      type: Output
    }],
    textEl: [{
      type: ViewChild,
      args: ["textEl", {
        static: false
      }]
    }]
  });
})();
var _NzAvatarGroupComponent = class _NzAvatarGroupComponent {
};
_NzAvatarGroupComponent.ɵfac = function NzAvatarGroupComponent_Factory(t) {
  return new (t || _NzAvatarGroupComponent)();
};
_NzAvatarGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAvatarGroupComponent,
  selectors: [["nz-avatar-group"]],
  hostAttrs: [1, "ant-avatar-group"],
  exportAs: ["nzAvatarGroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NzAvatarGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzAvatarGroupComponent = _NzAvatarGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar-group",
      exportAs: "nzAvatarGroup",
      standalone: true,
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-avatar-group"
      }
    }]
  }], null, null);
})();
var _NzAvatarModule = class _NzAvatarModule {
};
_NzAvatarModule.ɵfac = function NzAvatarModule_Factory(t) {
  return new (t || _NzAvatarModule)();
};
_NzAvatarModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAvatarModule,
  imports: [NzAvatarComponent, NzAvatarGroupComponent],
  exports: [NzAvatarComponent, NzAvatarGroupComponent]
});
_NzAvatarModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAvatarComponent]
});
var NzAvatarModule = _NzAvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarModule, [{
    type: NgModule,
    args: [{
      exports: [NzAvatarComponent, NzAvatarGroupComponent],
      imports: [NzAvatarComponent, NzAvatarGroupComponent]
    }]
  }], null, null);
})();

export {
  NzAvatarComponent,
  NzAvatarGroupComponent,
  NzAvatarModule
};
//# sourceMappingURL=chunk-PXOWQH62.js.map
