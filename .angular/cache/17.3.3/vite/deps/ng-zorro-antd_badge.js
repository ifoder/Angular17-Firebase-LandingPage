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
  zoomBadgeMotion
} from "./chunk-BJIJDVLR.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean
} from "./chunk-A4L4YVTT.js";
import "./chunk-GRCHAQNP.js";
import "./chunk-PA6IY4WI.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  NgStyle
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Host,
  Input,
  NgModule,
  Optional,
  Renderer2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-badge.mjs
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const i_r4 = ɵɵnextContext(2).$index;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassProp("current", p_r10 === ctx_r9.countArray[i_r4]);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", p_r10, " ");
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template, 2, 3, "p", 2, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵrepeater(ctx_r8.countSingleArray);
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 0);
    ɵɵtemplate(1, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.$index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleProp("transform", "translateY(" + -ctx_r2.countArray[i_r4] * 100 + "%)");
    ɵɵproperty("nzNoAnimation", ctx_r2.noAnimation);
    ɵɵadvance(1);
    ɵɵconditional(1, !ctx_r2.nzDot && ctx_r2.countArray[i_r4] !== void 0 ? 1 : -1);
  }
}
function NzBadgeSupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Template, 2, 4, "span", 3, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.maxNumberArray);
  }
}
function NzBadgeSupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r1.nzOverflowCount, "+ ");
  }
}
function NzBadgeComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.nzText);
  }
}
function NzBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 1);
    ɵɵelementStart(1, "span", 2);
    ɵɵtemplate(2, NzBadgeComponent_Conditional_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ant-badge-status-dot ant-badge-status-", ctx_r0.nzStatus || ctx_r0.presetColor, "");
    ɵɵstyleProp("background", !ctx_r0.presetColor && ctx_r0.nzColor);
    ɵɵproperty("ngStyle", ctx_r0.nzStyle);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
function NzBadgeComponent_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-badge-sup", 3);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("nzOffset", ctx_r3.nzOffset)("nzSize", ctx_r3.nzSize)("nzTitle", ctx_r3.nzTitle)("nzStyle", ctx_r3.nzStyle)("nzDot", ctx_r3.nzDot)("nzOverflowCount", ctx_r3.nzOverflowCount)("disableAnimation", !!(ctx_r3.nzStandalone || ctx_r3.nzStatus || ctx_r3.nzColor || (ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)))("nzCount", ctx_r3.nzCount)("noAnimation", !!(ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation));
  }
}
function NzBadgeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzBadgeComponent_ng_container_2_Conditional_1_Template, 1, 9, "nz-badge-sup", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r1.showSup ? 1 : -1);
  }
}
var _c0 = ["*"];
function NzRibbonComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.nzText);
  }
}
var _NzBadgeSupComponent = class _NzBadgeSupComponent {
  constructor() {
    this.nzStyle = null;
    this.nzDot = false;
    this.nzOverflowCount = 99;
    this.disableAnimation = false;
    this.noAnimation = false;
    this.nzSize = "default";
    this.maxNumberArray = [];
    this.countArray = [];
    this.count = 0;
    this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  generateMaxNumberArray() {
    this.maxNumberArray = this.nzOverflowCount.toString().split("");
  }
  ngOnInit() {
    this.generateMaxNumberArray();
  }
  ngOnChanges(changes) {
    const {
      nzOverflowCount,
      nzCount
    } = changes;
    if (nzCount && typeof nzCount.currentValue === "number") {
      this.count = Math.max(0, nzCount.currentValue);
      this.countArray = this.count.toString().split("").map((item) => +item);
    }
    if (nzOverflowCount) {
      this.generateMaxNumberArray();
    }
  }
};
_NzBadgeSupComponent.ɵfac = function NzBadgeSupComponent_Factory(t) {
  return new (t || _NzBadgeSupComponent)();
};
_NzBadgeSupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBadgeSupComponent,
  selectors: [["nz-badge-sup"]],
  hostAttrs: [1, "ant-scroll-number"],
  hostVars: 17,
  hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
      ɵɵsyntheticHostProperty("@.disabled", ctx.disableAnimation)("@zoomBadgeMotion", void 0);
      ɵɵstyleMap(ctx.nzStyle);
      ɵɵstyleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
      ɵɵclassProp("ant-badge-count", !ctx.nzDot)("ant-badge-count-sm", ctx.nzSize === "small")("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
    }
  },
  inputs: {
    nzOffset: "nzOffset",
    nzTitle: "nzTitle",
    nzStyle: "nzStyle",
    nzDot: "nzDot",
    nzOverflowCount: "nzOverflowCount",
    disableAnimation: "disableAnimation",
    nzCount: "nzCount",
    noAnimation: "noAnimation",
    nzSize: "nzSize"
  },
  exportAs: ["nzBadgeSup"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[1, "ant-scroll-number-only", 3, "nzNoAnimation"], [1, "ant-scroll-number-only-unit"], ["class", "ant-scroll-number-only-unit", 3, "current"], ["class", "ant-scroll-number-only", 3, "nzNoAnimation", "transform"]],
  template: function NzBadgeSupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzBadgeSupComponent_Conditional_0_Template, 2, 0)(1, NzBadgeSupComponent_Conditional_1_Template, 1, 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.count <= ctx.nzOverflowCount ? 0 : 1);
    }
  },
  dependencies: [NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBadgeMotion]
  },
  changeDetection: 0
});
var NzBadgeSupComponent = _NzBadgeSupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeSupComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge-sup",
      exportAs: "nzBadgeSup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      standalone: true,
      imports: [NzNoAnimationDirective],
      template: `
    @if (count <= nzOverflowCount) {
      @for (n of maxNumberArray; track n; let i = $index) {
        <span
          [nzNoAnimation]="noAnimation"
          class="ant-scroll-number-only"
          [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
        >
          @if (!nzDot && countArray[i] !== undefined) {
            @for (p of countSingleArray; track p) {
              <p class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            }
          }
        </span>
      }
    } @else {
      {{ nzOverflowCount }}+
    }
  `,
      host: {
        class: "ant-scroll-number",
        "[@.disabled]": `disableAnimation`,
        "[@zoomBadgeMotion]": "",
        "[attr.title]": `nzTitle === null ? '' : nzTitle || nzCount`,
        "[style]": `nzStyle`,
        "[style.right.px]": `nzOffset && nzOffset[0] ? -nzOffset[0] : null`,
        "[style.margin-top.px]": `nzOffset && nzOffset[1] ? nzOffset[1] : null`,
        "[class.ant-badge-count]": `!nzDot`,
        "[class.ant-badge-count-sm]": `nzSize === 'small'`,
        "[class.ant-badge-dot]": `nzDot`,
        "[class.ant-badge-multiple-words]": `countArray.length >= 2`
      }
    }]
  }], () => [], {
    nzOffset: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzOverflowCount: [{
      type: Input
    }],
    disableAnimation: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    noAnimation: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var badgePresetColors = ["pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"];
var NZ_CONFIG_MODULE_NAME = "badge";
var _NzBadgeComponent = class _NzBadgeComponent {
  constructor(nzConfigService, renderer, cdr, elementRef, directionality, noAnimation) {
    this.nzConfigService = nzConfigService;
    this.renderer = renderer;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.showSup = false;
    this.presetColor = null;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.nzShowZero = false;
    this.nzShowDot = true;
    this.nzStandalone = false;
    this.nzDot = false;
    this.nzOverflowCount = 99;
    this.nzColor = void 0;
    this.nzStyle = null;
    this.nzText = null;
    this.nzSize = "default";
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareBadgeForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareBadgeForRtl();
  }
  ngOnChanges(changes) {
    const {
      nzColor,
      nzShowDot,
      nzDot,
      nzCount,
      nzShowZero
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
    if (nzShowDot || nzDot || nzCount || nzShowZero) {
      this.showSup = this.nzShowDot && this.nzDot || typeof this.nzCount === "number" && this.nzCount > 0 || typeof this.nzCount === "number" && this.nzCount <= 0 && this.nzShowZero;
    }
  }
  prepareBadgeForRtl() {
    if (this.isRtlLayout) {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-badge-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-badge-rtl");
    }
  }
  get isRtlLayout() {
    return this.dir === "rtl";
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzBadgeComponent.ɵfac = function NzBadgeComponent_Factory(t) {
  return new (t || _NzBadgeComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzBadgeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBadgeComponent,
  selectors: [["nz-badge"]],
  hostAttrs: [1, "ant-badge"],
  hostVars: 4,
  hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || ctx.nzStatus || ctx.nzColor));
    }
  },
  inputs: {
    nzShowZero: "nzShowZero",
    nzShowDot: "nzShowDot",
    nzStandalone: "nzStandalone",
    nzDot: "nzDot",
    nzOverflowCount: "nzOverflowCount",
    nzColor: "nzColor",
    nzStyle: "nzStyle",
    nzText: "nzText",
    nzTitle: "nzTitle",
    nzStatus: "nzStatus",
    nzCount: "nzCount",
    nzOffset: "nzOffset",
    nzSize: "nzSize"
  },
  exportAs: ["nzBadge"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 2,
  consts: [[4, "nzStringTemplateOutlet"], [3, "ngStyle"], [1, "ant-badge-status-text"], [3, "nzOffset", "nzSize", "nzTitle", "nzStyle", "nzDot", "nzOverflowCount", "disableAnimation", "nzCount", "noAnimation"]],
  template: function NzBadgeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzBadgeComponent_Conditional_0_Template, 3, 7);
      ɵɵprojection(1);
      ɵɵtemplate(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzStatus || ctx.nzColor ? 0 : -1);
      ɵɵadvance(2);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzCount);
    }
  },
  dependencies: [NgStyle, NzBadgeSupComponent, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [zoomBadgeMotion]
  },
  changeDetection: 0
});
var NzBadgeComponent = _NzBadgeComponent;
__decorate([InputBoolean()], NzBadgeComponent.prototype, "nzShowZero", void 0);
__decorate([InputBoolean()], NzBadgeComponent.prototype, "nzShowDot", void 0);
__decorate([InputBoolean()], NzBadgeComponent.prototype, "nzStandalone", void 0);
__decorate([InputBoolean()], NzBadgeComponent.prototype, "nzDot", void 0);
__decorate([WithConfig()], NzBadgeComponent.prototype, "nzOverflowCount", void 0);
__decorate([WithConfig()], NzBadgeComponent.prototype, "nzColor", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge",
      exportAs: "nzBadge",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      animations: [zoomBadgeMotion],
      standalone: true,
      imports: [NgStyle, NzBadgeSupComponent, NzOutletModule],
      template: `
    @if (nzStatus || nzColor) {
      <span
        class="ant-badge-status-dot ant-badge-status-{{ nzStatus || presetColor }}"
        [style.background]="!presetColor && nzColor"
        [ngStyle]="nzStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
    <ng-content />
    <ng-container *nzStringTemplateOutlet="nzCount">
      @if (showSup) {
        <nz-badge-sup
          [nzOffset]="nzOffset"
          [nzSize]="nzSize"
          [nzTitle]="nzTitle"
          [nzStyle]="nzStyle"
          [nzDot]="nzDot"
          [nzOverflowCount]="nzOverflowCount"
          [disableAnimation]="!!(nzStandalone || nzStatus || nzColor || noAnimation?.nzNoAnimation)"
          [nzCount]="nzCount"
          [noAnimation]="!!noAnimation?.nzNoAnimation"
        />
      }
    </ng-container>
  `,
      host: {
        class: "ant-badge",
        "[class.ant-badge-status]": "nzStatus",
        "[class.ant-badge-not-a-wrapper]": "!!(nzStandalone || nzStatus || nzColor)"
      }
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
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
  }], {
    nzShowZero: [{
      type: Input
    }],
    nzShowDot: [{
      type: Input
    }],
    nzStandalone: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzOverflowCount: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzRibbonComponent = class _NzRibbonComponent {
  constructor() {
    this.nzPlacement = "end";
    this.nzText = null;
    this.presetColor = null;
  }
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
  }
};
_NzRibbonComponent.ɵfac = function NzRibbonComponent_Factory(t) {
  return new (t || _NzRibbonComponent)();
};
_NzRibbonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzRibbonComponent,
  selectors: [["nz-ribbon"]],
  hostAttrs: [1, "ant-ribbon-wrapper"],
  inputs: {
    nzColor: "nzColor",
    nzPlacement: "nzPlacement",
    nzText: "nzText"
  },
  exportAs: ["nzRibbon"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 4,
  vars: 11,
  consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"], [1, "ant-ribbon-text"]],
  template: function NzRibbonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵelementStart(1, "div", 0);
      ɵɵtemplate(2, NzRibbonComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
      ɵɵelement(3, "div", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵclassMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
      ɵɵstyleProp("background-color", !ctx.presetColor && ctx.nzColor);
      ɵɵclassProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
      ɵɵadvance(1);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzText);
      ɵɵadvance(1);
      ɵɵstyleProp("color", !ctx.presetColor && ctx.nzColor);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzRibbonComponent = _NzRibbonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRibbonComponent, [{
    type: Component,
    args: [{
      selector: "nz-ribbon",
      exportAs: "nzRibbon",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [NzOutletModule],
      template: `
    <ng-content></ng-content>
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">
        <span class="ant-ribbon-text">{{ nzText }}</span>
      </ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `,
      host: {
        class: "ant-ribbon-wrapper"
      }
    }]
  }], () => [], {
    nzColor: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }]
  });
})();
var _NzBadgeModule = class _NzBadgeModule {
};
_NzBadgeModule.ɵfac = function NzBadgeModule_Factory(t) {
  return new (t || _NzBadgeModule)();
};
_NzBadgeModule.ɵmod = ɵɵdefineNgModule({
  type: _NzBadgeModule,
  imports: [NzBadgeComponent, NzRibbonComponent],
  exports: [NzBadgeComponent, NzRibbonComponent]
});
_NzBadgeModule.ɵinj = ɵɵdefineInjector({
  imports: [NzBadgeComponent, NzRibbonComponent]
});
var NzBadgeModule = _NzBadgeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeModule, [{
    type: NgModule,
    args: [{
      exports: [NzBadgeComponent, NzRibbonComponent],
      imports: [NzBadgeComponent, NzRibbonComponent]
    }]
  }], null, null);
})();
export {
  NzBadgeComponent,
  NzBadgeModule,
  NzRibbonComponent
};
//# sourceMappingURL=ng-zorro-antd_badge.js.map
