import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  InputNumber
} from "./chunk-A4L4YVTT.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NgIf,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Optional,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2P2HMI5Y.js";
import {
  BehaviorSubject,
  ReplaySubject,
  Subject,
  debounce,
  distinctUntilChanged,
  startWith,
  switchMap,
  takeUntil,
  timer
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵelement(1, "i", 4)(2, "i", 4)(3, "i", 4)(4, "i", 4);
    ɵɵelementEnd();
  }
}
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.nzTip);
  }
}
function NzSpinComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 5);
    ɵɵtemplate(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6)(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵclassProp("ant-spin-rtl", ctx_r2.dir === "rtl")("ant-spin-spinning", ctx_r2.isLoading)("ant-spin-lg", ctx_r2.nzSize === "large")("ant-spin-sm", ctx_r2.nzSize === "small")("ant-spin-show-text", ctx_r2.nzTip);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.nzIndicator || _r1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.nzTip);
  }
}
function NzSpinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵclassProp("ant-spin-blur", ctx_r3.isLoading);
  }
}
var _c0 = ["*"];
var NZ_CONFIG_MODULE_NAME = "spin";
var _NzSpinComponent = class _NzSpinComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzIndicator = null;
    this.nzSize = "default";
    this.nzTip = null;
    this.nzDelay = 0;
    this.nzSimple = false;
    this.nzSpinning = true;
    this.destroy$ = new Subject();
    this.spinning$ = new BehaviorSubject(this.nzSpinning);
    this.delay$ = new ReplaySubject(1);
    this.isLoading = false;
    this.dir = "ltr";
  }
  ngOnInit() {
    const loading$ = this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay) => {
      if (delay === 0) {
        return this.spinning$;
      }
      return this.spinning$.pipe(debounce((spinning) => timer(spinning ? delay : 0)));
    }), takeUntil(this.destroy$));
    loading$.subscribe((loading) => {
      this.isLoading = loading;
      this.cdr.markForCheck();
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzSpinning,
      nzDelay
    } = changes;
    if (nzSpinning) {
      this.spinning$.next(this.nzSpinning);
    }
    if (nzDelay) {
      this.delay$.next(this.nzDelay);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSpinComponent.ɵfac = function NzSpinComponent_Factory(t) {
  return new (t || _NzSpinComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzSpinComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSpinComponent,
  selectors: [["nz-spin"]],
  hostVars: 2,
  hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-spin-nested-loading", !ctx.nzSimple);
    }
  },
  inputs: {
    nzIndicator: "nzIndicator",
    nzSize: "nzSize",
    nzTip: "nzTip",
    nzDelay: "nzDelay",
    nzSimple: "nzSimple",
    nzSpinning: "nzSpinning"
  },
  exportAs: ["nzSpin"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 2,
  consts: [["defaultTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
  template: function NzSpinComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzSpinComponent_div_2_Template, 4, 12, "div", 1)(3, NzSpinComponent_div_3_Template, 2, 2, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.isLoading);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.nzSimple);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var NzSpinComponent = _NzSpinComponent;
__decorate([WithConfig()], NzSpinComponent.prototype, "nzIndicator", void 0);
__decorate([InputNumber()], NzSpinComponent.prototype, "nzDelay", void 0);
__decorate([InputBoolean()], NzSpinComponent.prototype, "nzSimple", void 0);
__decorate([InputBoolean()], NzSpinComponent.prototype, "nzSpinning", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    <div *ngIf="isLoading">
      <div
        class="ant-spin"
        [class.ant-spin-rtl]="dir === 'rtl'"
        [class.ant-spin-spinning]="isLoading"
        [class.ant-spin-lg]="nzSize === 'large'"
        [class.ant-spin-sm]="nzSize === 'small'"
        [class.ant-spin-show-text]="nzTip"
      >
        <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate"></ng-template>
        <div class="ant-spin-text" *ngIf="nzTip">{{ nzTip }}</div>
      </div>
    </div>
    <div *ngIf="!nzSimple" class="ant-spin-container" [class.ant-spin-blur]="isLoading">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgIf, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input
    }],
    nzSimple: [{
      type: Input
    }],
    nzSpinning: [{
      type: Input
    }]
  });
})();
var _NzSpinModule = class _NzSpinModule {
};
_NzSpinModule.ɵfac = function NzSpinModule_Factory(t) {
  return new (t || _NzSpinModule)();
};
_NzSpinModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSpinModule,
  imports: [NzSpinComponent],
  exports: [NzSpinComponent]
});
_NzSpinModule.ɵinj = ɵɵdefineInjector({});
var NzSpinModule = _NzSpinModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

export {
  NzSpinComponent,
  NzSpinModule
};
//# sourceMappingURL=chunk-4KTUHT5S.js.map
