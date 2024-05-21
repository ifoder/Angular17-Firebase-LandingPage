import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import "./chunk-7CXXYODY.js";
import "./chunk-A4L4YVTT.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  Optional,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  ReplaySubject,
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-timeline.mjs
var _c0 = ["template"];
function NzTimelineItemComponent_ng_template_0_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r4.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzTimelineItemComponent_ng_template_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzLabel);
  }
}
function NzTimelineItemComponent_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.nzDot);
  }
}
function NzTimelineItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 1);
    ɵɵtemplate(1, NzTimelineItemComponent_ng_template_0_div_1_Template, 2, 1, "div", 2);
    ɵɵelement(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵtemplate(4, NzTimelineItemComponent_ng_template_0_ng_container_4_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵprojection(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-timeline-item-right", (ctx_r0.nzPosition || ctx_r0.position) === "right")("ant-timeline-item-left", (ctx_r0.nzPosition || ctx_r0.position) === "left")("ant-timeline-item-last", ctx_r0.isLast);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.nzLabel);
    ɵɵadvance(2);
    ɵɵstyleProp("border-color", ctx_r0.borderColor);
    ɵɵclassProp("ant-timeline-item-head-red", ctx_r0.nzColor === "red")("ant-timeline-item-head-blue", ctx_r0.nzColor === "blue")("ant-timeline-item-head-green", ctx_r0.nzColor === "green")("ant-timeline-item-head-gray", ctx_r0.nzColor === "gray")("ant-timeline-item-head-custom", !!ctx_r0.nzDot);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzDot);
  }
}
var _c1 = ["*"];
function NzTimelineComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzTimelineComponent_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function NzTimelineComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimelineComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r5.template);
  }
}
function NzTimelineComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 4);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(5);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵtemplate(2, NzTimelineComponent_ng_template_4_li_0_ng_container_3_span_2_Template, 1, 0, "span", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r8.nzPendingDot, " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.nzPendingDot);
  }
}
function NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.isPendingBoolean ? "" : ctx_r9.nzPending, " ");
  }
}
function NzTimelineComponent_ng_template_4_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 6);
    ɵɵelement(1, "div", 7);
    ɵɵelementStart(2, "div", 8);
    ɵɵtemplate(3, NzTimelineComponent_ng_template_4_li_0_ng_container_3_Template, 3, 2, "ng-container", 9);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 10);
    ɵɵtemplate(5, NzTimelineComponent_ng_template_4_li_0_ng_container_5_Template, 2, 1, "ng-container", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzPendingDot);
    ɵɵadvance(2);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r7.nzPending);
  }
}
function NzTimelineComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTimelineComponent_ng_template_4_li_0_Template, 6, 2, "li", 5);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r3.nzPending);
  }
}
var TimelineTimeDefaultColors = ["red", "blue", "green", "grey", "gray"];
var _TimelineService = class _TimelineService {
  constructor() {
    this.check$ = new ReplaySubject(1);
  }
  markForCheck() {
    this.check$.next();
  }
};
_TimelineService.ɵfac = function TimelineService_Factory(t) {
  return new (t || _TimelineService)();
};
_TimelineService.ɵprov = ɵɵdefineInjectable({
  token: _TimelineService,
  factory: _TimelineService.ɵfac
});
var TimelineService = _TimelineService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineService, [{
    type: Injectable
  }], null, null);
})();
function isDefaultColor(color) {
  return TimelineTimeDefaultColors.findIndex((i) => i === color) !== -1;
}
var _NzTimelineItemComponent = class _NzTimelineItemComponent {
  constructor(cdr, timelineService) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.nzColor = "blue";
    this.isLast = false;
    this.borderColor = null;
  }
  ngOnChanges(changes) {
    this.timelineService.markForCheck();
    if (changes.nzColor) {
      this.updateCustomColor();
    }
  }
  detectChanges() {
    this.cdr.detectChanges();
  }
  updateCustomColor() {
    this.borderColor = isDefaultColor(this.nzColor) ? null : this.nzColor;
  }
};
_NzTimelineItemComponent.ɵfac = function NzTimelineItemComponent_Factory(t) {
  return new (t || _NzTimelineItemComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimelineService));
};
_NzTimelineItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTimelineItemComponent,
  selectors: [["nz-timeline-item"], ["", "nz-timeline-item", ""]],
  viewQuery: function NzTimelineItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzPosition: "nzPosition",
    nzColor: "nzColor",
    nzDot: "nzDot",
    nzLabel: "nzLabel"
  },
  exportAs: ["nzTimelineItem"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  consts: [["template", ""], [1, "ant-timeline-item"], ["class", "ant-timeline-item-label", 4, "ngIf"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], [1, "ant-timeline-item-label"]],
  template: function NzTimelineItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTimelineItemComponent_ng_template_0_Template, 7, 20, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    }
  },
  dependencies: [NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTimelineItemComponent = _NzTimelineItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-timeline-item, [nz-timeline-item]",
      exportAs: "nzTimelineItem",
      template: `
    <ng-template #template>
      <li
        class="ant-timeline-item"
        [class.ant-timeline-item-right]="(nzPosition || position) === 'right'"
        [class.ant-timeline-item-left]="(nzPosition || position) === 'left'"
        [class.ant-timeline-item-last]="isLast"
      >
        <div *ngIf="nzLabel" class="ant-timeline-item-label">
          <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
        </div>
        <div class="ant-timeline-item-tail"></div>
        <div
          class="ant-timeline-item-head"
          [class.ant-timeline-item-head-red]="nzColor === 'red'"
          [class.ant-timeline-item-head-blue]="nzColor === 'blue'"
          [class.ant-timeline-item-head-green]="nzColor === 'green'"
          [class.ant-timeline-item-head-gray]="nzColor === 'gray'"
          [class.ant-timeline-item-head-custom]="!!nzDot"
          [style.border-color]="borderColor"
        >
          <ng-container *nzStringTemplateOutlet="nzDot">{{ nzDot }}</ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-content></ng-content>
        </div>
      </li>
    </ng-template>
  `,
      imports: [NgIf, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TimelineService
  }], {
    template: [{
      type: ViewChild,
      args: ["template", {
        static: false
      }]
    }],
    nzPosition: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }]
  });
})();
var _NzTimelineComponent = class _NzTimelineComponent {
  constructor(cdr, timelineService, directionality) {
    this.cdr = cdr;
    this.timelineService = timelineService;
    this.directionality = directionality;
    this.nzMode = "left";
    this.nzReverse = false;
    this.isPendingBoolean = false;
    this.timelineItems = [];
    this.dir = "ltr";
    this.hasLabelItem = false;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzMode,
      nzReverse,
      nzPending
    } = changes;
    if (simpleChangeActivated(nzMode) || simpleChangeActivated(nzReverse)) {
      this.updateChildren();
    }
    if (nzPending) {
      this.isPendingBoolean = nzPending.currentValue === true;
    }
  }
  ngOnInit() {
    this.timelineService.check$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.updateChildren();
    this.listOfItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateChildren();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  updateChildren() {
    if (this.listOfItems && this.listOfItems.length) {
      const length = this.listOfItems.length;
      let hasLabelItem = false;
      this.listOfItems.forEach((item, index) => {
        item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
        item.position = getInferredTimelineItemPosition(index, this.nzMode);
        if (!hasLabelItem && item.nzLabel) {
          hasLabelItem = true;
        }
        item.detectChanges();
      });
      this.timelineItems = this.nzReverse ? this.listOfItems.toArray().reverse() : this.listOfItems.toArray();
      this.hasLabelItem = hasLabelItem;
    } else {
      this.timelineItems = [];
      this.hasLabelItem = false;
    }
    this.cdr.markForCheck();
  }
};
_NzTimelineComponent.ɵfac = function NzTimelineComponent_Factory(t) {
  return new (t || _NzTimelineComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(TimelineService), ɵɵdirectiveInject(Directionality, 8));
};
_NzTimelineComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTimelineComponent,
  selectors: [["nz-timeline"]],
  contentQueries: function NzTimelineComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzTimelineItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listOfItems = _t);
    }
  },
  inputs: {
    nzMode: "nzMode",
    nzPending: "nzPending",
    nzPendingDot: "nzPendingDot",
    nzReverse: "nzReverse"
  },
  exportAs: ["nzTimeline"],
  standalone: true,
  features: [ɵɵProvidersFeature([TimelineService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 7,
  vars: 15,
  consts: [[1, "ant-timeline"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["pendingTemplate", ""], [3, "ngTemplateOutlet"], ["class", "ant-timeline-item ant-timeline-item-pending", 4, "ngIf"], [1, "ant-timeline-item", "ant-timeline-item-pending"], [1, "ant-timeline-item-tail"], [1, "ant-timeline-item-head", "ant-timeline-item-head-custom", "ant-timeline-item-head-blue"], [4, "nzStringTemplateOutlet"], [1, "ant-timeline-item-content"], ["nz-icon", "", "nzType", "loading", 4, "ngIf"], ["nz-icon", "", "nzType", "loading"]],
  template: function NzTimelineComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "ul", 0);
      ɵɵtemplate(1, NzTimelineComponent_ng_container_1_Template, 1, 1, "ng-container", 1)(2, NzTimelineComponent_ng_container_2_Template, 2, 1, "ng-container", 2)(3, NzTimelineComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
      ɵɵelementEnd();
      ɵɵtemplate(4, NzTimelineComponent_ng_template_4_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
      ɵɵprojection(6);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-timeline-label", ctx.hasLabelItem)("ant-timeline-right", !ctx.hasLabelItem && ctx.nzMode === "right")("ant-timeline-alternate", ctx.nzMode === "alternate" || ctx.nzMode === "custom")("ant-timeline-pending", !!ctx.nzPending)("ant-timeline-reverse", ctx.nzReverse)("ant-timeline-rtl", ctx.dir === "rtl");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzReverse);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.timelineItems);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.nzReverse);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgForOf, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTimelineComponent = _NzTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      selector: "nz-timeline",
      providers: [TimelineService],
      exportAs: "nzTimeline",
      template: `
    <ul
      class="ant-timeline"
      [class.ant-timeline-label]="hasLabelItem"
      [class.ant-timeline-right]="!hasLabelItem && nzMode === 'right'"
      [class.ant-timeline-alternate]="nzMode === 'alternate' || nzMode === 'custom'"
      [class.ant-timeline-pending]="!!nzPending"
      [class.ant-timeline-reverse]="nzReverse"
      [class.ant-timeline-rtl]="dir === 'rtl'"
    >
      <!-- pending dot (reversed) -->
      <ng-container *ngIf="nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- timeline items -->
      <ng-container *ngFor="let item of timelineItems">
        <ng-template [ngTemplateOutlet]="item.template"></ng-template>
      </ng-container>
      <ng-container *ngIf="!nzReverse" [ngTemplateOutlet]="pendingTemplate"></ng-container>
      <!-- pending dot -->
    </ul>
    <ng-template #pendingTemplate>
      <li *ngIf="nzPending" class="ant-timeline-item ant-timeline-item-pending">
        <div class="ant-timeline-item-tail"></div>
        <div class="ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue">
          <ng-container *nzStringTemplateOutlet="nzPendingDot">
            {{ nzPendingDot }}
            <span *ngIf="!nzPendingDot" nz-icon nzType="loading"></span>
          </ng-container>
        </div>
        <div class="ant-timeline-item-content">
          <ng-container *nzStringTemplateOutlet="nzPending">
            {{ isPendingBoolean ? '' : nzPending }}
          </ng-container>
        </div>
      </li>
    </ng-template>
    <!-- Grasp items -->
    <ng-content></ng-content>
  `,
      imports: [NgIf, NgTemplateOutlet, NgForOf, NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: TimelineService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfItems: [{
      type: ContentChildren,
      args: [NzTimelineItemComponent]
    }],
    nzMode: [{
      type: Input
    }],
    nzPending: [{
      type: Input
    }],
    nzPendingDot: [{
      type: Input
    }],
    nzReverse: [{
      type: Input
    }]
  });
})();
function simpleChangeActivated(simpleChange) {
  return !!(simpleChange && (simpleChange.previousValue !== simpleChange.currentValue || simpleChange.isFirstChange()));
}
function getInferredTimelineItemPosition(index, mode) {
  return mode === "custom" ? void 0 : mode === "left" ? "left" : mode === "right" ? "right" : mode === "alternate" && index % 2 === 0 ? "left" : "right";
}
var _NzTimelineModule = class _NzTimelineModule {
};
_NzTimelineModule.ɵfac = function NzTimelineModule_Factory(t) {
  return new (t || _NzTimelineModule)();
};
_NzTimelineModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTimelineModule,
  imports: [NzTimelineItemComponent, NzTimelineComponent],
  exports: [NzTimelineItemComponent, NzTimelineComponent]
});
_NzTimelineModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTimelineItemComponent, NzTimelineComponent]
});
var NzTimelineModule = _NzTimelineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimelineModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimelineItemComponent, NzTimelineComponent],
      exports: [NzTimelineItemComponent, NzTimelineComponent]
    }]
  }], null, null);
})();
export {
  NzTimelineComponent,
  NzTimelineItemComponent,
  NzTimelineModule,
  TimelineService
};
//# sourceMappingURL=ng-zorro-antd_timeline.js.map
