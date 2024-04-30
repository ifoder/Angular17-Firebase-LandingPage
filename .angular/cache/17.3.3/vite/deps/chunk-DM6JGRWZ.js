import {
  Directive,
  NgModule,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵstyleProp
} from "./chunk-2P2HMI5Y.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-trans-button.mjs
var _NzTransButtonDirective = class _NzTransButtonDirective {
};
_NzTransButtonDirective.ɵfac = function NzTransButtonDirective_Factory(t) {
  return new (t || _NzTransButtonDirective)();
};
_NzTransButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzTransButtonDirective,
  selectors: [["button", "nz-trans-button", ""]],
  hostVars: 8,
  hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    }
  },
  standalone: true
});
var NzTransButtonDirective = _NzTransButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-trans-button]",
      host: {
        "[style.border]": '"0"',
        "[style.background]": '"transparent"',
        "[style.padding]": '"0"',
        "[style.line-height]": '"inherit"'
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTransButtonModule = class _NzTransButtonModule {
};
_NzTransButtonModule.ɵfac = function NzTransButtonModule_Factory(t) {
  return new (t || _NzTransButtonModule)();
};
_NzTransButtonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTransButtonModule,
  imports: [NzTransButtonDirective],
  exports: [NzTransButtonDirective]
});
_NzTransButtonModule.ɵinj = ɵɵdefineInjector({});
var NzTransButtonModule = _NzTransButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    }]
  }], null, null);
})();

export {
  NzTransButtonDirective,
  NzTransButtonModule
};
//# sourceMappingURL=chunk-DM6JGRWZ.js.map
