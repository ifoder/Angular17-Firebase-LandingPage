import {
  NzIconDirective,
  NzIconModule
} from "./chunk-6SU7ZL5H.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-5ERIQKMK.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-DVRA4BNT.js";
import {
  InputNumber,
  isNotNil
} from "./chunk-O6NELX6U.js";
import {
  Directionality
} from "./chunk-JPPYGJGR.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-D5TAH3ZD.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-Y4OPO6BX.js";
import {
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __objRest
} from "./chunk-JN3CWD3G.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-progress.mjs
function NzProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzType", ctx_r5.icon);
  }
}
function NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formatter_r9 = ctx.$implicit;
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", formatter_r9(ctx_r8.nzPercent), " ");
  }
}
var _c0 = (a0) => ({
  $implicit: a0
});
function NzProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r6.formatter)("nzStringTemplateOutletContext", ɵɵpureFunction1(2, _c0, ctx_r6.nzPercent));
  }
}
function NzProgressComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, NzProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6)(2, NzProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r7 = ɵɵreference(3);
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.nzFormat)("ngIfElse", _r7);
  }
}
function NzProgressComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.nzShowInfo);
  }
}
function NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(4);
    ɵɵstyleProp("width", ctx_r14.nzSuccessPercent, "%")("border-radius", ctx_r14.nzStrokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
  }
}
function NzProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14);
    ɵɵelement(2, "div", 15);
    ɵɵtemplate(3, NzProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r12.nzPercent, "%")("border-radius", ctx_r12.nzStrokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.nzStrokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.nzSuccessPercent || ctx_r12.nzSuccessPercent === 0);
  }
}
function NzProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) {
}
function NzProgressComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11)(2, NzProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r10.isSteps);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzProgressComponent_div_3_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 20);
  }
  if (rf & 2) {
    const step_r17 = ctx.$implicit;
    ɵɵproperty("ngStyle", step_r17);
  }
}
function NzProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) {
}
function NzProgressComponent_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, NzProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19)(2, NzProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r11.steps);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function NzProgressComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, NzProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, NzProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.isSteps);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isSteps);
  }
}
function NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "stop");
  }
  if (rf & 2) {
    const i_r23 = ctx.$implicit;
    ɵɵattribute("offset", i_r23.offset)("stop-color", i_r23.color);
  }
}
function NzProgressComponent_div_4__svg_defs_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "defs")(1, "linearGradient", 24);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("id", "gradient-" + ctx_r19.gradientId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r19.circleGradient);
  }
}
function NzProgressComponent_div_4__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "path", 26);
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", p_r24.strokePathStyle);
    ɵɵattribute("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.nzStrokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.nzPercent ? ctx_r20.strokeWidth : 0);
  }
}
function NzProgressComponent_div_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
  }
}
function NzProgressComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 21);
    ɵɵtemplate(2, NzProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    ɵɵelement(3, "path", 22);
    ɵɵtemplate(4, NzProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);
    ɵɵelementEnd();
    ɵɵtemplate(5, NzProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    ɵɵstyleProp("width", ctx_r3.nzWidth, "px")("height", ctx_r3.nzWidth, "px")("font-size", ctx_r3.nzWidth * 0.15 + 6, "px");
    ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.isGradient);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1);
  }
}
function stripPercentToNumber(percent) {
  return +percent.replace("%", "");
}
var sortGradient = (gradients) => {
  let tempArr = [];
  Object.keys(gradients).forEach((key) => {
    const value = gradients[key];
    const formatKey = stripPercentToNumber(key);
    if (!isNaN(formatKey)) {
      tempArr.push({
        key: formatKey,
        value
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr;
};
var handleCircleGradient = (strokeColor) => sortGradient(strokeColor).map(({
  key,
  value
}) => ({
  offset: `${key}%`,
  color: value
}));
var handleLinearGradient = (strokeColor) => {
  const _a = strokeColor, {
    from = "#1890ff",
    to = "#1890ff",
    direction = "to right"
  } = _a, rest = __objRest(_a, [
    "from",
    "to",
    "direction"
  ]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest).map(({
      key,
      value
    }) => `${value} ${key}%`).join(", ");
    return `linear-gradient(${direction}, ${sortedGradients})`;
  }
  return `linear-gradient(${direction}, ${from}, ${to})`;
};
var gradientIdSeed = 0;
var NZ_CONFIG_MODULE_NAME = "progress";
var statusIconNameMap = /* @__PURE__ */ new Map([["success", "check"], ["exception", "close"]]);
var statusColorMap = /* @__PURE__ */ new Map([["normal", "#108ee9"], ["exception", "#ff5500"], ["success", "#87d068"]]);
var defaultFormatter = (p) => `${p}%`;
var _NzProgressComponent = class _NzProgressComponent {
  get formatter() {
    return this.nzFormat || defaultFormatter;
  }
  get status() {
    return this.nzStatus || this.inferredStatus;
  }
  get strokeWidth() {
    return this.nzStrokeWidth || (this.nzType === "line" && this.nzSize !== "small" ? 8 : 6);
  }
  get isCircleStyle() {
    return this.nzType === "circle" || this.nzType === "dashboard";
  }
  constructor(cdr, nzConfigService, directionality) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowInfo = true;
    this.nzWidth = 132;
    this.nzStrokeColor = void 0;
    this.nzSize = "default";
    this.nzPercent = 0;
    this.nzStrokeWidth = void 0;
    this.nzGapDegree = void 0;
    this.nzType = "line";
    this.nzGapPosition = "top";
    this.nzStrokeLinecap = "round";
    this.nzSteps = 0;
    this.steps = [];
    this.lineGradient = null;
    this.isGradient = false;
    this.isSteps = false;
    this.gradientId = gradientIdSeed++;
    this.progressCirclePath = [];
    this.trailPathStyle = null;
    this.dir = "ltr";
    this.trackByFn = (index) => `${index}`;
    this.cachedStatus = "normal";
    this.inferredStatus = "normal";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzSteps,
      nzGapPosition,
      nzStrokeLinecap,
      nzStrokeColor,
      nzGapDegree,
      nzType,
      nzStatus,
      nzPercent,
      nzSuccessPercent,
      nzStrokeWidth
    } = changes;
    if (nzStatus) {
      this.cachedStatus = this.nzStatus || this.cachedStatus;
    }
    if (nzPercent || nzSuccessPercent) {
      const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
      if (fillAll) {
        if (isNotNil(this.nzSuccessPercent) && this.nzSuccessPercent >= 100 || this.nzSuccessPercent === void 0) {
          this.inferredStatus = "success";
        }
      } else {
        this.inferredStatus = this.cachedStatus;
      }
    }
    if (nzStatus || nzPercent || nzSuccessPercent || nzStrokeColor) {
      this.updateIcon();
    }
    if (nzStrokeColor) {
      this.setStrokeColor();
    }
    if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent || nzStrokeColor || nzStrokeColor) {
      this.getCirclePaths();
    }
    if (nzPercent || nzSteps || nzStrokeWidth) {
      this.isSteps = this.nzSteps > 0;
      if (this.isSteps) {
        this.getSteps();
      }
    }
  }
  ngOnInit() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateIcon();
      this.setStrokeColor();
      this.getCirclePaths();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateIcon() {
    const ret = statusIconNameMap.get(this.status);
    this.icon = ret ? ret + (this.isCircleStyle ? "-o" : "-circle-fill") : "";
  }
  /**
   * Calculate step render configs.
   */
  getSteps() {
    const current = Math.floor(this.nzSteps * (this.nzPercent / 100));
    const stepWidth = this.nzSize === "small" ? 2 : 14;
    const steps = [];
    for (let i = 0; i < this.nzSteps; i++) {
      let color;
      if (i <= current - 1) {
        color = this.nzStrokeColor;
      }
      const stepStyle = {
        backgroundColor: `${color}`,
        width: `${stepWidth}px`,
        height: `${this.strokeWidth}px`
      };
      steps.push(stepStyle);
    }
    this.steps = steps;
  }
  /**
   * Calculate paths when the type is circle or dashboard.
   */
  getCirclePaths() {
    if (!this.isCircleStyle) {
      return;
    }
    const values = isNotNil(this.nzSuccessPercent) ? [this.nzSuccessPercent, this.nzPercent] : [this.nzPercent];
    const radius = 50 - this.strokeWidth / 2;
    const gapPosition = this.nzGapPosition || (this.nzType === "circle" ? "top" : "bottom");
    const len = Math.PI * 2 * radius;
    const gapDegree = this.nzGapDegree || (this.nzType === "circle" ? 0 : 75);
    let beginPositionX = 0;
    let beginPositionY = -radius;
    let endPositionX = 0;
    let endPositionY = radius * -2;
    switch (gapPosition) {
      case "left":
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = radius * 2;
        endPositionY = 0;
        break;
      case "right":
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = radius * -2;
        endPositionY = 0;
        break;
      case "bottom":
        beginPositionY = radius;
        endPositionY = radius * 2;
        break;
      default:
    }
    this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
    this.trailPathStyle = {
      strokeDasharray: `${len - gapDegree}px ${len}px`,
      strokeDashoffset: `-${gapDegree / 2}px`,
      transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"
    };
    this.progressCirclePath = values.map((value, index) => {
      const isSuccessPercent = values.length === 2 && index === 0;
      return {
        stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
        strokePathStyle: {
          stroke: !this.isGradient ? isSuccessPercent ? statusColorMap.get("success") : this.nzStrokeColor : null,
          transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s",
          strokeDasharray: `${(value || 0) / 100 * (len - gapDegree)}px ${len}px`,
          strokeDashoffset: `-${gapDegree / 2}px`
        }
      };
    }).reverse();
  }
  setStrokeColor() {
    const color = this.nzStrokeColor;
    const isGradient = this.isGradient = !!color && typeof color !== "string";
    if (isGradient && !this.isCircleStyle) {
      this.lineGradient = handleLinearGradient(color);
    } else if (isGradient && this.isCircleStyle) {
      this.circleGradient = handleCircleGradient(this.nzStrokeColor);
    } else {
      this.lineGradient = null;
      this.circleGradient = [];
    }
  }
};
_NzProgressComponent.ɵfac = function NzProgressComponent_Factory(t) {
  return new (t || _NzProgressComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(Directionality, 8));
};
_NzProgressComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzProgressComponent,
  selectors: [["nz-progress"]],
  inputs: {
    nzShowInfo: "nzShowInfo",
    nzWidth: "nzWidth",
    nzStrokeColor: "nzStrokeColor",
    nzSize: "nzSize",
    nzFormat: "nzFormat",
    nzSuccessPercent: "nzSuccessPercent",
    nzPercent: "nzPercent",
    nzStrokeWidth: "nzStrokeWidth",
    nzGapDegree: "nzGapDegree",
    nzStatus: "nzStatus",
    nzType: "nzType",
    nzGapPosition: "nzGapPosition",
    nzStrokeLinecap: "nzStrokeLinecap",
    nzSteps: "nzSteps"
  },
  exportAs: ["nzProgress"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 17,
  consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]],
  template: function NzProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      ɵɵelementStart(2, "div", 1);
      ɵɵtemplate(3, NzProgressComponent_div_3_Template, 3, 2, "div", 2)(4, NzProgressComponent_div_4_Template, 6, 15, "div", 3);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵclassProp("ant-progress-line", ctx.nzType === "line")("ant-progress-small", ctx.nzSize === "small")("ant-progress-default", ctx.nzSize === "default")("ant-progress-show-info", ctx.nzShowInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
      ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzType === "line");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isCircleStyle);
    }
  },
  dependencies: [NgIf, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgClass, NgTemplateOutlet, NgForOf, NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var NzProgressComponent = _NzProgressComponent;
__decorate([WithConfig()], NzProgressComponent.prototype, "nzShowInfo", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeColor", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzSize", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzPercent", void 0);
__decorate([WithConfig(), InputNumber()], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
__decorate([WithConfig(), InputNumber()], NzProgressComponent.prototype, "nzGapDegree", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzGapPosition", void 0);
__decorate([WithConfig()], NzProgressComponent.prototype, "nzStrokeLinecap", void 0);
__decorate([InputNumber()], NzProgressComponent.prototype, "nzSteps", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-progress",
      exportAs: "nzProgress",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgIf, NzIconModule, NzOutletModule, NgClass, NgTemplateOutlet, NgForOf, NgStyle],
      template: `
    <ng-template #progressInfoTemplate>
      <span class="ant-progress-text" *ngIf="nzShowInfo">
        <ng-container *ngIf="(status === 'exception' || status === 'success') && !nzFormat; else formatTemplate">
          <span nz-icon [nzType]="icon"></span>
        </ng-container>
        <ng-template #formatTemplate>
          <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: nzPercent }; let formatter">
            {{ formatter(nzPercent) }}
          </ng-container>
        </ng-template>
      </span>
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="nzType === 'line'"
      [class.ant-progress-small]="nzSize === 'small'"
      [class.ant-progress-default]="nzSize === 'default'"
      [class.ant-progress-show-info]="nzShowInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      <!-- line progress -->
      <div *ngIf="nzType === 'line'">
        <!-- normal line style -->
        <ng-container *ngIf="!isSteps">
          <div class="ant-progress-outer" *ngIf="!isSteps">
            <div class="ant-progress-inner">
              <div
                class="ant-progress-bg"
                [style.width.%]="nzPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.background]="!isGradient ? nzStrokeColor : null"
                [style.background-image]="isGradient ? lineGradient : null"
                [style.height.px]="strokeWidth"
              ></div>
              <div
                *ngIf="nzSuccessPercent || nzSuccessPercent === 0"
                class="ant-progress-success-bg"
                [style.width.%]="nzSuccessPercent"
                [style.border-radius]="nzStrokeLinecap === 'round' ? '100px' : '0'"
                [style.height.px]="strokeWidth"
              ></div>
            </div>
          </div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </ng-container>
        <!-- step style -->
        <div class="ant-progress-steps-outer" *ngIf="isSteps">
          <div *ngFor="let step of steps; let i = index" class="ant-progress-steps-item" [ngStyle]="step"></div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </div>
      </div>

      <!-- circle / dashboard progress -->
      <div
        [style.width.px]="this.nzWidth"
        [style.height.px]="this.nzWidth"
        [style.fontSize.px]="this.nzWidth * 0.15 + 6"
        class="ant-progress-inner"
        [class.ant-progress-circle-gradient]="isGradient"
        *ngIf="isCircleStyle"
      >
        <svg class="ant-progress-circle " viewBox="0 0 100 100">
          <defs *ngIf="isGradient">
            <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop *ngFor="let i of circleGradient" [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
            </linearGradient>
          </defs>
          <path
            class="ant-progress-circle-trail"
            stroke="#f3f3f3"
            fill-opacity="0"
            [attr.stroke-width]="strokeWidth"
            [attr.d]="pathString"
            [ngStyle]="trailPathStyle"
          ></path>
          <path
            *ngFor="let p of progressCirclePath; trackBy: trackByFn"
            class="ant-progress-circle-path"
            fill-opacity="0"
            [attr.d]="pathString"
            [attr.stroke-linecap]="nzStrokeLinecap"
            [attr.stroke]="p.stroke"
            [attr.stroke-width]="nzPercent ? strokeWidth : 0"
            [ngStyle]="p.strokePathStyle"
          ></path>
        </svg>
        <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
      </div>
    </div>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzShowInfo: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzStrokeColor: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzSuccessPercent: [{
      type: Input
    }],
    nzPercent: [{
      type: Input
    }],
    nzStrokeWidth: [{
      type: Input
    }],
    nzGapDegree: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzGapPosition: [{
      type: Input
    }],
    nzStrokeLinecap: [{
      type: Input
    }],
    nzSteps: [{
      type: Input
    }]
  });
})();
var _NzProgressModule = class _NzProgressModule {
};
_NzProgressModule.ɵfac = function NzProgressModule_Factory(t) {
  return new (t || _NzProgressModule)();
};
_NzProgressModule.ɵmod = ɵɵdefineNgModule({
  type: _NzProgressModule,
  imports: [NzProgressComponent],
  exports: [NzProgressComponent]
});
_NzProgressModule.ɵinj = ɵɵdefineInjector({
  imports: [NzProgressComponent]
});
var NzProgressModule = _NzProgressModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzProgressModule, [{
    type: NgModule,
    args: [{
      imports: [NzProgressComponent],
      exports: [NzProgressComponent]
    }]
  }], null, null);
})();

export {
  NzProgressComponent,
  NzProgressModule
};
//# sourceMappingURL=chunk-RCYWWOVL.js.map
