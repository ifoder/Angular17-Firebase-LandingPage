import {
  NzProgressComponent,
  NzProgressModule
} from "./chunk-634NN52Q.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-622ZWALK.js";
import {
  NzDestroyService
} from "./chunk-LSYZCG4Q.js";
import "./chunk-OQ6NSBV4.js";
import {
  Directionality
} from "./chunk-LRQUJQFB.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-XMHT23O6.js";
import "./chunk-MRMDAZCE.js";
import {
  InputBoolean,
  toBoolean
} from "./chunk-D5P6R4L2.js";
import "./chunk-ZLMMQMEL.js";
import "./chunk-QOMEDUQU.js";
import "./chunk-KFN4XCC3.js";
import "./chunk-Z5YEAFHA.js";
import {
  NgClass,
  NgIf,
  NgTemplateOutlet
} from "./chunk-DIUYAEL7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-FNVBMXYR.js";
import {
  Subject,
  Subscription,
  filter,
  fromEvent,
  merge,
  startWith,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-KA6IPRFH.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-steps.mjs
var _c0 = ["processDotTemplate"];
var _c1 = ["itemContainer"];
function NzStepComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function NzStepComponent_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "nz-progress", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzPercent", ctx_r7.nzPercentage)("nzWidth", ctx_r7.nzSize === "small" ? 32 : 40)("nzFormat", ctx_r7.nullProcessFormat)("nzStrokeWidth", 4);
  }
}
function NzStepComponent_ng_template_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵelement(1, "span", 16);
    ɵɵelementEnd();
  }
}
function NzStepComponent_ng_template_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵelement(1, "span", 17);
    ɵɵelementEnd();
  }
}
function NzStepComponent_ng_template_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r10.index + 1, " ");
  }
}
function NzStepComponent_ng_template_4_span_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r13 = ctx.$implicit;
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzType", !ctx_r12.oldAPIIcon && icon_r13)("ngClass", ctx_r12.oldAPIIcon && icon_r13);
  }
}
function NzStepComponent_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, NzStepComponent_ng_template_4_span_4_ng_container_1_Template, 2, 2, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r11.nzIcon);
  }
}
function NzStepComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzStepComponent_ng_template_4_div_0_Template, 2, 4, "div", 11)(1, NzStepComponent_ng_template_4_span_1_Template, 2, 0, "span", 12)(2, NzStepComponent_ng_template_4_span_2_Template, 2, 0, "span", 12)(3, NzStepComponent_ng_template_4_span_3_Template, 2, 1, "span", 12)(4, NzStepComponent_ng_template_4_span_4_Template, 2, 1, "span", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.showProgress);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.nzStatus === "finish" && !ctx_r2.nzIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.nzStatus === "error");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r2.nzStatus === "process" || ctx_r2.nzStatus === "wait") && !ctx_r2.nzIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.nzIcon);
  }
}
function NzStepComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
}
function NzStepComponent_ng_template_5_ng_template_3_Template(rf, ctx) {
}
var _c2 = (a0, a1, a2) => ({
  $implicit: a0,
  status: a1,
  index: a2
});
function NzStepComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtemplate(1, NzStepComponent_ng_template_5_ng_template_1_Template, 1, 0, "ng-template", null, 19, ɵɵtemplateRefExtractor)(3, NzStepComponent_ng_template_5_ng_template_3_Template, 0, 0, "ng-template", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r15 = ɵɵreference(2);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.customProcessTemplate || _r15)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c2, _r15, ctx_r3.nzStatus, ctx_r3.index));
  }
}
function NzStepComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.nzTitle);
  }
}
function NzStepComponent_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r17.nzSubtitle);
  }
}
function NzStepComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, NzStepComponent_div_9_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzSubtitle);
  }
}
function NzStepComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r6.nzDescription);
  }
}
var _c3 = ["*"];
var _NzStepComponent = class _NzStepComponent {
  get nzStatus() {
    return this._status;
  }
  set nzStatus(status) {
    this._status = status;
    this.isCustomStatus = true;
  }
  get nzIcon() {
    return this._icon;
  }
  set nzIcon(value) {
    if (!(value instanceof TemplateRef)) {
      this.oldAPIIcon = typeof value === "string" && value.indexOf("anticon") > -1;
    } else {
    }
    this._icon = value;
  }
  get showProgress() {
    return this.nzPercentage !== null && !this.nzIcon && this.nzStatus === "process" && this.nzPercentage >= 0 && this.nzPercentage <= 100;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(current) {
    this._currentIndex = current;
    if (!this.isCustomStatus) {
      this._status = current > this.index ? "finish" : current === this.index ? this.outStatus || "" : "wait";
    }
  }
  constructor(cdr, ngZone, destroy$) {
    this.cdr = cdr;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.nzDisabled = false;
    this.nzPercentage = null;
    this.nzSize = "default";
    this.isCustomStatus = false;
    this._status = "wait";
    this.oldAPIIcon = true;
    this.direction = "horizontal";
    this.index = 0;
    this.last = false;
    this.outStatus = "process";
    this.showProcessDot = false;
    this.clickable = false;
    this.clickOutsideAngular$ = new Subject();
    this.nullProcessFormat = () => null;
    this._currentIndex = 0;
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => fromEvent(this.itemContainer.nativeElement, "click").pipe(filter(() => this.clickable && this.currentIndex !== this.index && !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
      this.clickOutsideAngular$.next(this.index);
    }));
  }
  enable() {
    this.nzDisabled = false;
    this.cdr.markForCheck();
  }
  disable() {
    this.nzDisabled = true;
    this.cdr.markForCheck();
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
};
_NzStepComponent.ɵfac = function NzStepComponent_Factory(t) {
  return new (t || _NzStepComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(NzDestroyService));
};
_NzStepComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzStepComponent,
  selectors: [["nz-step"]],
  viewQuery: function NzStepComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.processDotTemplate = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemContainer = _t.first);
    }
  },
  hostAttrs: [1, "ant-steps-item"],
  hostVars: 16,
  hostBindings: function NzStepComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-steps-item-wait", ctx.nzStatus === "wait")("ant-steps-item-process", ctx.nzStatus === "process")("ant-steps-item-finish", ctx.nzStatus === "finish")("ant-steps-item-error", ctx.nzStatus === "error")("ant-steps-item-active", ctx.currentIndex === ctx.index)("ant-steps-item-disabled", ctx.nzDisabled)("ant-steps-item-custom", !!ctx.nzIcon)("ant-steps-next-error", ctx.outStatus === "error" && ctx.currentIndex === ctx.index + 1);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzSubtitle: "nzSubtitle",
    nzDescription: "nzDescription",
    nzDisabled: "nzDisabled",
    nzPercentage: "nzPercentage",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzIcon: "nzIcon"
  },
  exportAs: ["nzStep"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 12,
  vars: 8,
  consts: [[1, "ant-steps-item-container", 3, "tabindex"], ["itemContainer", ""], ["class", "ant-steps-item-tail", 4, "ngIf"], [1, "ant-steps-item-icon"], [3, "ngIf"], [1, "ant-steps-item-content"], [1, "ant-steps-item-title"], [4, "nzStringTemplateOutlet"], ["class", "ant-steps-item-subtitle", 4, "ngIf"], [1, "ant-steps-item-description"], [1, "ant-steps-item-tail"], ["class", "ant-steps-progress-icon", 4, "ngIf"], ["class", "ant-steps-icon", 4, "ngIf"], [1, "ant-steps-progress-icon"], ["nzType", "circle", 3, "nzPercent", "nzWidth", "nzFormat", "nzStrokeWidth"], [1, "ant-steps-icon"], ["nz-icon", "", "nzType", "check"], ["nz-icon", "", "nzType", "close"], ["nz-icon", "", 3, "nzType", "ngClass"], ["processDotTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-steps-icon-dot"], [1, "ant-steps-item-subtitle"]],
  template: function NzStepComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵtemplate(2, NzStepComponent_div_2_Template, 1, 0, "div", 2);
      ɵɵelementStart(3, "div", 3);
      ɵɵtemplate(4, NzStepComponent_ng_template_4_Template, 5, 5, "ng-template", 4)(5, NzStepComponent_ng_template_5_Template, 4, 6, "ng-template", 4);
      ɵɵelementEnd();
      ɵɵelementStart(6, "div", 5)(7, "div", 6);
      ɵɵtemplate(8, NzStepComponent_ng_container_8_Template, 2, 1, "ng-container", 7)(9, NzStepComponent_div_9_Template, 2, 1, "div", 8);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 9);
      ɵɵtemplate(11, NzStepComponent_ng_container_11_Template, 2, 1, "ng-container", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("tabindex", ctx.clickable && !ctx.nzDisabled ? 0 : null);
      ɵɵattribute("role", ctx.clickable && !ctx.nzDisabled ? "button" : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.last !== true);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.showProcessDot);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showProcessDot);
      ɵɵadvance(3);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzTitle);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzSubtitle);
      ɵɵadvance(2);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzDescription);
    }
  },
  dependencies: [NgIf, NzProgressModule, NzProgressComponent, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NgClass, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzStepComponent = _NzStepComponent;
__decorate([InputBoolean()], NzStepComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-step",
      exportAs: "nzStep",
      preserveWhitespaces: false,
      template: `
    <div
      #itemContainer
      class="ant-steps-item-container"
      [attr.role]="clickable && !nzDisabled ? 'button' : null"
      [tabindex]="clickable && !nzDisabled ? 0 : null"
    >
      <div class="ant-steps-item-tail" *ngIf="last !== true"></div>
      <div class="ant-steps-item-icon">
        <ng-template [ngIf]="!showProcessDot">
          <div *ngIf="showProgress" class="ant-steps-progress-icon">
            <nz-progress
              [nzPercent]="nzPercentage"
              nzType="circle"
              [nzWidth]="nzSize === 'small' ? 32 : 40"
              [nzFormat]="nullProcessFormat"
              [nzStrokeWidth]="4"
            ></nz-progress>
          </div>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'finish' && !nzIcon"
            ><span nz-icon nzType="check"></span
          ></span>
          <span class="ant-steps-icon" *ngIf="nzStatus === 'error'"><span nz-icon nzType="close"></span></span>
          <span class="ant-steps-icon" *ngIf="(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon">
            {{ index + 1 }}
          </span>
          <span class="ant-steps-icon" *ngIf="nzIcon">
            <ng-container *nzStringTemplateOutlet="nzIcon; let icon">
              <span nz-icon [nzType]="!oldAPIIcon && icon" [ngClass]="oldAPIIcon && icon"></span>
            </ng-container>
          </span>
        </ng-template>
        <ng-template [ngIf]="showProcessDot">
          <span class="ant-steps-icon">
            <ng-template #processDotTemplate>
              <span class="ant-steps-icon-dot"></span>
            </ng-template>
            <ng-template
              [ngTemplateOutlet]="customProcessTemplate || processDotTemplate"
              [ngTemplateOutletContext]="{
                $implicit: processDotTemplate,
                status: nzStatus,
                index: index
              }"
            ></ng-template>
          </span>
        </ng-template>
      </div>
      <div class="ant-steps-item-content">
        <div class="ant-steps-item-title">
          <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          <div *ngIf="nzSubtitle" class="ant-steps-item-subtitle">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </div>
        </div>
        <div class="ant-steps-item-description">
          <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
        </div>
      </div>
    </div>
  `,
      host: {
        class: "ant-steps-item",
        "[class.ant-steps-item-wait]": 'nzStatus === "wait"',
        "[class.ant-steps-item-process]": 'nzStatus === "process"',
        "[class.ant-steps-item-finish]": 'nzStatus === "finish"',
        "[class.ant-steps-item-error]": 'nzStatus === "error"',
        "[class.ant-steps-item-active]": "currentIndex === index",
        "[class.ant-steps-item-disabled]": "nzDisabled",
        "[class.ant-steps-item-custom]": "!!nzIcon",
        "[class.ant-steps-next-error]": '(outStatus === "error") && (currentIndex === index + 1)'
      },
      providers: [NzDestroyService],
      imports: [NgIf, NzProgressModule, NzIconModule, NzOutletModule, NgClass, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    processDotTemplate: [{
      type: ViewChild,
      args: ["processDotTemplate", {
        static: false
      }]
    }],
    itemContainer: [{
      type: ViewChild,
      args: ["itemContainer", {
        static: true
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzPercentage: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }]
  });
})();
var _NzStepsComponent = class _NzStepsComponent {
  set nzProgressDot(value) {
    if (value instanceof TemplateRef) {
      this.showProcessDot = true;
      this.customProcessDotTemplate = value;
    } else {
      this.showProcessDot = toBoolean(value);
    }
    this.updateChildrenSteps();
  }
  constructor(ngZone, cdr, directionality, destroy$) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this.nzCurrent = 0;
    this.nzDirection = "horizontal";
    this.nzLabelPlacement = "horizontal";
    this.nzType = "default";
    this.nzSize = "default";
    this.nzStartIndex = 0;
    this.nzStatus = "process";
    this.nzIndexChange = new EventEmitter();
    this.indexChangeSubscription = Subscription.EMPTY;
    this.showProcessDot = false;
    this.showProgress = false;
    this.dir = "ltr";
  }
  ngOnChanges(changes) {
    if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent || changes.nzSize) {
      this.updateChildrenSteps();
    }
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.updateChildrenSteps();
  }
  ngAfterContentInit() {
    if (this.steps) {
      this.steps.changes.pipe(startWith(null), takeUntil(this.destroy$)).subscribe(() => {
        this.updateHostProgressClass();
        this.updateChildrenSteps();
      });
    }
  }
  updateHostProgressClass() {
    if (this.steps && !this.showProcessDot) {
      this.showProgress = !!this.steps.toArray().find((step) => step.nzPercentage !== null);
    }
  }
  updateChildrenSteps() {
    if (this.steps) {
      const length = this.steps.length;
      this.steps.toArray().forEach((step, index) => {
        Promise.resolve().then(() => {
          step.nzSize = this.nzSize;
          step.outStatus = this.nzStatus;
          step.showProcessDot = this.showProcessDot;
          if (this.customProcessDotTemplate) {
            step.customProcessTemplate = this.customProcessDotTemplate;
          }
          step.clickable = this.nzIndexChange.observers.length > 0;
          step.direction = this.nzDirection;
          step.index = index + this.nzStartIndex;
          step.currentIndex = this.nzCurrent;
          step.last = length === index + 1;
          step.markForCheck();
        });
      });
      this.indexChangeSubscription.unsubscribe();
      this.indexChangeSubscription = merge(...this.steps.map((step) => step.clickOutsideAngular$)).pipe(takeUntil(this.destroy$)).subscribe((index) => {
        if (this.nzIndexChange.observers.length) {
          this.ngZone.run(() => this.nzIndexChange.emit(index));
        }
      });
    }
  }
};
_NzStepsComponent.ɵfac = function NzStepsComponent_Factory(t) {
  return new (t || _NzStepsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzDestroyService));
};
_NzStepsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzStepsComponent,
  selectors: [["nz-steps"]],
  contentQueries: function NzStepsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzStepComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.steps = _t);
    }
  },
  hostAttrs: [1, "ant-steps"],
  hostVars: 18,
  hostBindings: function NzStepsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-steps-horizontal", ctx.nzDirection === "horizontal")("ant-steps-vertical", ctx.nzDirection === "vertical")("ant-steps-label-horizontal", ctx.nzDirection === "horizontal")("ant-steps-label-vertical", (ctx.showProcessDot || ctx.nzLabelPlacement === "vertical") && ctx.nzDirection === "horizontal")("ant-steps-dot", ctx.showProcessDot)("ant-steps-small", ctx.nzSize === "small")("ant-steps-navigation", ctx.nzType === "navigation")("ant-steps-rtl", ctx.dir === "rtl")("ant-steps-with-progress", ctx.showProgress);
    }
  },
  inputs: {
    nzCurrent: "nzCurrent",
    nzDirection: "nzDirection",
    nzLabelPlacement: "nzLabelPlacement",
    nzType: "nzType",
    nzSize: "nzSize",
    nzStartIndex: "nzStartIndex",
    nzStatus: "nzStatus",
    nzProgressDot: "nzProgressDot"
  },
  outputs: {
    nzIndexChange: "nzIndexChange"
  },
  exportAs: ["nzSteps"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c3,
  decls: 1,
  vars: 0,
  template: function NzStepsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzStepsComponent = _NzStepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-steps",
      exportAs: "nzSteps",
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-steps",
        "[class.ant-steps-horizontal]": `nzDirection === 'horizontal'`,
        "[class.ant-steps-vertical]": `nzDirection === 'vertical'`,
        "[class.ant-steps-label-horizontal]": `nzDirection === 'horizontal'`,
        "[class.ant-steps-label-vertical]": `(showProcessDot || nzLabelPlacement === 'vertical') && nzDirection === 'horizontal'`,
        "[class.ant-steps-dot]": "showProcessDot",
        "[class.ant-steps-small]": `nzSize === 'small'`,
        "[class.ant-steps-navigation]": `nzType === 'navigation'`,
        "[class.ant-steps-rtl]": `dir === 'rtl'`,
        "[class.ant-steps-with-progress]": "showProgress"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    steps: [{
      type: ContentChildren,
      args: [NzStepComponent]
    }],
    nzCurrent: [{
      type: Input
    }],
    nzDirection: [{
      type: Input
    }],
    nzLabelPlacement: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStartIndex: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzProgressDot: [{
      type: Input
    }],
    nzIndexChange: [{
      type: Output
    }]
  });
})();
var _NzStepsModule = class _NzStepsModule {
};
_NzStepsModule.ɵfac = function NzStepsModule_Factory(t) {
  return new (t || _NzStepsModule)();
};
_NzStepsModule.ɵmod = ɵɵdefineNgModule({
  type: _NzStepsModule,
  imports: [NzStepsComponent, NzStepComponent],
  exports: [NzStepsComponent, NzStepComponent]
});
_NzStepsModule.ɵinj = ɵɵdefineInjector({
  imports: [NzStepComponent]
});
var NzStepsModule = _NzStepsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStepsModule, [{
    type: NgModule,
    args: [{
      imports: [NzStepsComponent, NzStepComponent],
      exports: [NzStepsComponent, NzStepComponent]
    }]
  }], null, null);
})();
export {
  NzStepComponent,
  NzStepsComponent,
  NzStepsModule
};
//# sourceMappingURL=ng-zorro-antd_steps.js.map
