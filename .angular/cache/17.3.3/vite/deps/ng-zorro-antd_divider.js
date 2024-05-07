import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-622ZWALK.js";
import {
  InputBoolean
} from "./chunk-D5P6R4L2.js";
import "./chunk-QOMEDUQU.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-FNVBMXYR.js";
import "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-KA6IPRFH.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-divider.mjs
function NzDividerComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.nzText);
  }
}
function NzDividerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1);
    ɵɵtemplate(1, NzDividerComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
var _NzDividerComponent = class _NzDividerComponent {
  constructor() {
    this.nzType = "horizontal";
    this.nzOrientation = "center";
    this.nzDashed = false;
    this.nzPlain = false;
  }
};
_NzDividerComponent.ɵfac = function NzDividerComponent_Factory(t) {
  return new (t || _NzDividerComponent)();
};
_NzDividerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDividerComponent,
  selectors: [["nz-divider"]],
  hostAttrs: [1, "ant-divider"],
  hostVars: 16,
  hostBindings: function NzDividerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed);
    }
  },
  inputs: {
    nzText: "nzText",
    nzType: "nzType",
    nzOrientation: "nzOrientation",
    nzDashed: "nzDashed",
    nzPlain: "nzPlain"
  },
  exportAs: ["nzDivider"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "ant-divider-inner-text"], [1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]],
  template: function NzDividerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzDividerComponent_Conditional_0_Template, 2, 1, "span", 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzText ? 0 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzDividerComponent = _NzDividerComponent;
__decorate([InputBoolean()], NzDividerComponent.prototype, "nzDashed", void 0);
__decorate([InputBoolean()], NzDividerComponent.prototype, "nzPlain", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDividerComponent, [{
    type: Component,
    args: [{
      selector: "nz-divider",
      exportAs: "nzDivider",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzText) {
      <span class="ant-divider-inner-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
  `,
      host: {
        class: "ant-divider",
        "[class.ant-divider-horizontal]": `nzType === 'horizontal'`,
        "[class.ant-divider-vertical]": `nzType === 'vertical'`,
        "[class.ant-divider-with-text]": `nzText`,
        "[class.ant-divider-plain]": `nzPlain`,
        "[class.ant-divider-with-text-left]": `nzText && nzOrientation === 'left'`,
        "[class.ant-divider-with-text-right]": `nzText && nzOrientation === 'right'`,
        "[class.ant-divider-with-text-center]": `nzText && nzOrientation === 'center'`,
        "[class.ant-divider-dashed]": `nzDashed`
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    nzText: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzOrientation: [{
      type: Input
    }],
    nzDashed: [{
      type: Input
    }],
    nzPlain: [{
      type: Input
    }]
  });
})();
var _NzDividerModule = class _NzDividerModule {
};
_NzDividerModule.ɵfac = function NzDividerModule_Factory(t) {
  return new (t || _NzDividerModule)();
};
_NzDividerModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDividerModule,
  imports: [NzDividerComponent],
  exports: [NzDividerComponent]
});
_NzDividerModule.ɵinj = ɵɵdefineInjector({
  imports: [NzDividerComponent]
});
var NzDividerModule = _NzDividerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDividerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDividerComponent],
      exports: [NzDividerComponent]
    }]
  }], null, null);
})();
export {
  NzDividerComponent,
  NzDividerModule
};
//# sourceMappingURL=ng-zorro-antd_divider.js.map
