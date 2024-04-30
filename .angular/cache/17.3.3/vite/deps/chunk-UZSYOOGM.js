import {
  NgModule,
  Pipe,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe
} from "./chunk-2P2HMI5Y.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-highlight.mjs
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
function encodeEntities(value) {
  return value.replace(/&/g, "&amp;").replace(SURROGATE_PAIR_REGEXP, (match) => {
    const hi = match.charCodeAt(0);
    const low = match.charCodeAt(1);
    return `&#${(hi - 55296) * 1024 + (low - 56320) + 65536};`;
  }).replace(NON_ALPHANUMERIC_REGEXP, (match) => `&#${match.charCodeAt(0)};`).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var _NzHighlightPipe = class _NzHighlightPipe {
  constructor() {
    this.UNIQUE_WRAPPERS = ["##==-open_tag-==##", "##==-close_tag-==##"];
  }
  transform(value, highlightValue, flags, klass) {
    if (!highlightValue) {
      return value;
    }
    const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$&"), flags);
    const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
    return encodeEntities(wrapValue).replace(new RegExp(this.UNIQUE_WRAPPERS[0], "g"), klass ? `<span class="${klass}">` : "<span>").replace(new RegExp(this.UNIQUE_WRAPPERS[1], "g"), "</span>");
  }
};
_NzHighlightPipe.ɵfac = function NzHighlightPipe_Factory(t) {
  return new (t || _NzHighlightPipe)();
};
_NzHighlightPipe.ɵpipe = ɵɵdefinePipe({
  name: "nzHighlight",
  type: _NzHighlightPipe,
  pure: true,
  standalone: true
});
var NzHighlightPipe = _NzHighlightPipe;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHighlightPipe, [{
    type: Pipe,
    args: [{
      name: "nzHighlight",
      pure: true,
      standalone: true
    }]
  }], null, null);
})();
var _NzHighlightModule = class _NzHighlightModule {
};
_NzHighlightModule.ɵfac = function NzHighlightModule_Factory(t) {
  return new (t || _NzHighlightModule)();
};
_NzHighlightModule.ɵmod = ɵɵdefineNgModule({
  type: _NzHighlightModule,
  imports: [NzHighlightPipe],
  exports: [NzHighlightPipe]
});
_NzHighlightModule.ɵinj = ɵɵdefineInjector({});
var NzHighlightModule = _NzHighlightModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHighlightModule, [{
    type: NgModule,
    args: [{
      imports: [NzHighlightPipe],
      exports: [NzHighlightPipe]
    }]
  }], null, null);
})();

export {
  NzHighlightPipe,
  NzHighlightModule
};
//# sourceMappingURL=chunk-UZSYOOGM.js.map
