import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import {
  isPresetColor,
  isStatusColor,
  presetColors,
  statusColors
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
  NgIf
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tag.mjs
function NzTagComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 1);
    ɵɵlistener("click", function NzTagComponent_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.closeTag($event));
    });
    ɵɵelementEnd();
  }
}
var _c0 = ["*"];
var _NzTagComponent = class _NzTagComponent {
  constructor(cdr, renderer, elementRef, directionality) {
    this.cdr = cdr;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.isPresetColor = false;
    this.nzMode = "default";
    this.nzChecked = false;
    this.nzBordered = true;
    this.nzOnClose = new EventEmitter();
    this.nzCheckedChange = new EventEmitter();
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  updateCheckedStatus() {
    if (this.nzMode === "checkable") {
      this.nzChecked = !this.nzChecked;
      this.nzCheckedChange.emit(this.nzChecked);
    }
  }
  closeTag(e) {
    this.nzOnClose.emit(e);
    if (!e.defaultPrevented) {
      this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
  }
  clearPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    const regexp = new RegExp(`(ant-tag-(?:${[...presetColors, ...statusColors].join("|")}))`, "g");
    const classname = hostElement.classList.toString();
    const matches = [];
    let match = regexp.exec(classname);
    while (match !== null) {
      matches.push(match[1]);
      match = regexp.exec(classname);
    }
    hostElement.classList.remove(...matches);
  }
  setPresetColor() {
    const hostElement = this.elementRef.nativeElement;
    this.clearPresetColor();
    if (!this.nzColor) {
      this.isPresetColor = false;
    } else {
      this.isPresetColor = isPresetColor(this.nzColor) || isStatusColor(this.nzColor);
    }
    if (this.isPresetColor) {
      hostElement.classList.add(`ant-tag-${this.nzColor}`);
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.setPresetColor();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzTagComponent.ɵfac = function NzTagComponent_Factory(t) {
  return new (t || _NzTagComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzTagComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTagComponent,
  selectors: [["nz-tag"]],
  hostAttrs: [1, "ant-tag"],
  hostVars: 12,
  hostBindings: function NzTagComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzTagComponent_click_HostBindingHandler() {
        return ctx.updateCheckedStatus();
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.nzColor);
      ɵɵclassProp("ant-tag-has-color", ctx.nzColor && !ctx.isPresetColor)("ant-tag-checkable", ctx.nzMode === "checkable")("ant-tag-checkable-checked", ctx.nzChecked)("ant-tag-rtl", ctx.dir === "rtl")("ant-tag-borderless", !ctx.nzBordered);
    }
  },
  inputs: {
    nzMode: "nzMode",
    nzColor: "nzColor",
    nzChecked: "nzChecked",
    nzBordered: "nzBordered"
  },
  outputs: {
    nzOnClose: "nzOnClose",
    nzCheckedChange: "nzCheckedChange"
  },
  exportAs: ["nzTag"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["nz-icon", "", "nzType", "close", "class", "ant-tag-close-icon", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 1, "ant-tag-close-icon", 3, "click"]],
  template: function NzTagComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, NzTagComponent_span_1_Template, 1, 0, "span", 0);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzMode === "closeable");
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTagComponent = _NzTagComponent;
__decorate([InputBoolean()], NzTagComponent.prototype, "nzChecked", void 0);
__decorate([InputBoolean()], NzTagComponent.prototype, "nzBordered", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagComponent, [{
    type: Component,
    args: [{
      selector: "nz-tag",
      exportAs: "nzTag",
      preserveWhitespaces: false,
      template: `
    <ng-content></ng-content>
    <span
      nz-icon
      nzType="close"
      class="ant-tag-close-icon"
      *ngIf="nzMode === 'closeable'"
      tabindex="-1"
      (click)="closeTag($event)"
    ></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-tag",
        "[style.background-color]": `isPresetColor ? '' : nzColor`,
        "[class.ant-tag-has-color]": `nzColor && !isPresetColor`,
        "[class.ant-tag-checkable]": `nzMode === 'checkable'`,
        "[class.ant-tag-checkable-checked]": `nzChecked`,
        "[class.ant-tag-rtl]": `dir === 'rtl'`,
        "[class.ant-tag-borderless]": `!nzBordered`,
        "(click)": "updateCheckedStatus()"
      },
      imports: [NzIconModule, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzMode: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzChecked: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzOnClose: [{
      type: Output
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var _NzTagModule = class _NzTagModule {
};
_NzTagModule.ɵfac = function NzTagModule_Factory(t) {
  return new (t || _NzTagModule)();
};
_NzTagModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTagModule,
  imports: [NzTagComponent],
  exports: [NzTagComponent]
});
_NzTagModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTagComponent]
});
var NzTagModule = _NzTagModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTagModule, [{
    type: NgModule,
    args: [{
      imports: [NzTagComponent],
      exports: [NzTagComponent]
    }]
  }], null, null);
})();
export {
  NzTagComponent,
  NzTagModule
};
//# sourceMappingURL=ng-zorro-antd_tag.js.map
