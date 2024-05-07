import {
  Directive,
  Input,
  NgModule,
  setClassMetadata,
  ɵɵclassProp,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵstyleProp
} from "./chunk-FNVBMXYR.js";
import "./chunk-ELRSAQZ7.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-KA6IPRFH.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-flex.mjs
var _NzFlexDirective = class _NzFlexDirective {
  constructor() {
    this.nzVertical = false;
    this.nzJustify = "normal";
    this.nzAlign = "normal";
    this.nzGap = 0;
    this.nzWrap = "nowrap";
    this.nzFlex = "unset";
  }
  get gap() {
    switch (this.nzGap) {
      case "small":
        return "8px";
      case "middle":
        return "16px";
      case "large":
        return "24px";
      default:
        if (typeof this.nzGap === "number") {
          return `${this.nzGap}px`;
        }
        return this.nzGap;
    }
  }
};
_NzFlexDirective.ɵfac = function NzFlexDirective_Factory(t) {
  return new (t || _NzFlexDirective)();
};
_NzFlexDirective.ɵdir = ɵɵdefineDirective({
  type: _NzFlexDirective,
  selectors: [["", "nz-flex", ""], ["nz-flex"]],
  hostAttrs: [1, "ant-flex"],
  hostVars: 60,
  hostBindings: function NzFlexDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("gap", ctx.gap)("flex", ctx.nzFlex);
      ɵɵclassProp("ant-flex-vertical", ctx.nzVertical)("ant-flex-justify-flex-start", ctx.nzJustify === "flex-start")("ant-flex-justify-center", ctx.nzJustify === "center")("ant-flex-justify-flex-end", ctx.nzJustify === "flex-end")("ant-flex-justify-space-between", ctx.nzJustify === "space-between")("ant-flex-justify-space-around", ctx.nzJustify === "space-around")("ant-flex-justify-space-evenly", ctx.nzJustify === "space-evenly")("ant-flex-justify-start", ctx.nzJustify === "start")("ant-flex-justify-end", ctx.nzJustify === "end")("ant-flex-justify-right", ctx.nzJustify === "right")("ant-flex-justify-left", ctx.nzJustify === "left")("ant-flex-justify-stretch", ctx.nzJustify === "stretch")("ant-flex-justify-normal", ctx.nzJustify === "normal")("ant-flex-align-flex-start", ctx.nzAlign === "flex-start")("ant-flex-align-center", ctx.nzAlign === "center")("ant-flex-align-flex-end", ctx.nzAlign === "flex-end")("ant-flex-align-space-between", ctx.nzAlign === "space-between")("ant-flex-align-space-around", ctx.nzAlign === "space-around")("ant-flex-align-space-evenly", ctx.nzAlign === "space-evenly")("ant-flex-align-start", ctx.nzAlign === "start")("ant-flex-align-end", ctx.nzAlign === "end")("ant-flex-align-right", ctx.nzAlign === "right")("ant-flex-align-left", ctx.nzAlign === "left")("ant-flex-align-stretch", ctx.nzAlign === "stretch")("ant-flex-align-normal", ctx.nzAlign === "normal")("ant-flex-wrap-wrap", ctx.nzWrap === "wrap")("ant-flex-wrap-wrap-reverse", ctx.nzWrap === "wrap-reverse")("ant-flex-wrap-nowrap", ctx.nzWrap === "nowrap");
    }
  },
  inputs: {
    nzVertical: "nzVertical",
    nzJustify: "nzJustify",
    nzAlign: "nzAlign",
    nzGap: "nzGap",
    nzWrap: "nzWrap",
    nzFlex: "nzFlex"
  },
  exportAs: ["nzFlex"],
  standalone: true
});
var NzFlexDirective = _NzFlexDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFlexDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-flex],nz-flex",
      exportAs: "nzFlex",
      standalone: true,
      host: {
        class: "ant-flex",
        "[class.ant-flex-vertical]": `nzVertical`,
        "[class.ant-flex-justify-flex-start]": `nzJustify === 'flex-start'`,
        "[class.ant-flex-justify-center]": `nzJustify === 'center'`,
        "[class.ant-flex-justify-flex-end]": `nzJustify === 'flex-end'`,
        "[class.ant-flex-justify-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-flex-justify-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-flex-justify-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-flex-justify-start]": `nzJustify === 'start'`,
        "[class.ant-flex-justify-end]": `nzJustify === 'end'`,
        "[class.ant-flex-justify-right]": `nzJustify === 'right'`,
        "[class.ant-flex-justify-left]": `nzJustify === 'left'`,
        "[class.ant-flex-justify-stretch]": `nzJustify === 'stretch'`,
        "[class.ant-flex-justify-normal]": `nzJustify === 'normal'`,
        "[class.ant-flex-align-flex-start]": `nzAlign === 'flex-start'`,
        "[class.ant-flex-align-center]": `nzAlign === 'center'`,
        "[class.ant-flex-align-flex-end]": `nzAlign === 'flex-end'`,
        "[class.ant-flex-align-space-between]": `nzAlign === 'space-between'`,
        "[class.ant-flex-align-space-around]": `nzAlign === 'space-around'`,
        "[class.ant-flex-align-space-evenly]": `nzAlign === 'space-evenly'`,
        "[class.ant-flex-align-start]": `nzAlign === 'start'`,
        "[class.ant-flex-align-end]": `nzAlign === 'end'`,
        "[class.ant-flex-align-right]": `nzAlign === 'right'`,
        "[class.ant-flex-align-left]": `nzAlign === 'left'`,
        "[class.ant-flex-align-stretch]": `nzAlign === 'stretch'`,
        "[class.ant-flex-align-normal]": `nzAlign === 'normal'`,
        "[class.ant-flex-wrap-wrap]": `nzWrap === 'wrap'`,
        "[class.ant-flex-wrap-wrap-reverse]": `nzWrap === 'wrap-reverse'`,
        "[class.ant-flex-wrap-nowrap]": `nzWrap === 'nowrap'`,
        "[style.gap]": `gap`,
        "[style.flex]": `nzFlex`
      }
    }]
  }], null, {
    nzVertical: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzAlign: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzWrap: [{
      type: Input
    }],
    nzFlex: [{
      type: Input
    }]
  });
})();
var _NzFlexModule = class _NzFlexModule {
};
_NzFlexModule.ɵfac = function NzFlexModule_Factory(t) {
  return new (t || _NzFlexModule)();
};
_NzFlexModule.ɵmod = ɵɵdefineNgModule({
  type: _NzFlexModule,
  imports: [NzFlexDirective],
  exports: [NzFlexDirective]
});
_NzFlexModule.ɵinj = ɵɵdefineInjector({});
var NzFlexModule = _NzFlexModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFlexModule, [{
    type: NgModule,
    args: [{
      imports: [NzFlexDirective],
      exports: [NzFlexDirective]
    }]
  }], null, null);
})();
export {
  NzFlexDirective,
  NzFlexModule
};
//# sourceMappingURL=ng-zorro-antd_flex.js.map
