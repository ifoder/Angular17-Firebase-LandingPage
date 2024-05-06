import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  NzBreakpointEnum,
  NzBreakpointService,
  gridResponsiveMap
} from "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  InputNumber,
  warn
} from "./chunk-A4L4YVTT.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import {
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  NgModule,
  Optional,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  auditTime,
  merge,
  startWith,
  switchMap,
  takeUntil,
  tap
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-descriptions.mjs
function NzDescriptionsItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
var _c0 = ["*"];
function NzDescriptionsComponent_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r5.nzTitle);
  }
}
function NzDescriptionsComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_0_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzTitle);
  }
}
function NzDescriptionsComponent_Conditional_0_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r6.nzExtra);
  }
}
function NzDescriptionsComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_0_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzExtra);
  }
}
function NzDescriptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_0_Conditional_1_Template, 2, 1, "div", 3)(2, NzDescriptionsComponent_Conditional_0_Conditional_2_Template, 2, 1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r0.nzTitle ? 1 : -1);
    ɵɵadvance(1);
    ɵɵconditional(2, ctx_r0.nzExtra ? 2 : -1);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r14.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_template_5_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 10)(1, "div", 11)(2, "span", 12);
    ɵɵtemplate(3, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_container_3_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 13);
    ɵɵtemplate(5, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_ng_template_5_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext().$implicit;
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵproperty("colSpan", item_r14.span);
    ɵɵadvance(2);
    ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r19.nzColon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r14.title);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", item_r14.content);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r14.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 12);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(2, "td", 15);
    ɵɵtemplate(3, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r14 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r14.title);
    ɵɵadvance(1);
    ɵɵproperty("colSpan", item_r14.span * 2 - 1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r14.content);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_0_Template, 6, 5, "td", 9)(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Conditional_1_Template, 4, 3);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵconditional(0, !ctx_r13.nzBordered ? 0 : 1);
  }
}
function NzDescriptionsComponent_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 8);
    ɵɵrepeaterCreate(1, NzDescriptionsComponent_Conditional_4_For_1_For_2_Template, 2, 1, null, null, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵrepeater(row_r8);
  }
}
function NzDescriptionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzDescriptionsComponent_Conditional_4_For_1_Template, 3, 0, "tr", 16, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r39 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r39.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 10)(1, "div", 11)(2, "span", 12);
    ɵɵtemplate(3, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_ng_container_3_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵproperty("colSpan", item_r39.span);
    ɵɵadvance(2);
    ɵɵclassProp("ant-descriptions-item-no-colon", !ctx_r37.nzColon);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r39.title);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_ng_template_3_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 10)(1, "div", 11)(2, "span", 13);
    ɵɵtemplate(3, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_ng_template_3_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    ɵɵproperty("colSpan", item_r46.span);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", item_r46.content);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 8);
    ɵɵrepeaterCreate(1, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_2_Template, 4, 4, "td", 9, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵelementStart(3, "tr", 8);
    ɵɵrepeaterCreate(4, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_For_5_Template, 4, 2, "td", 9, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r32 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵrepeater(row_r32);
    ɵɵadvance(3);
    ɵɵrepeater(row_r32);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzDescriptionsComponent_Conditional_5_Conditional_0_For_1_Template, 6, 0, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r29.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r60 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r60.title, " ");
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 17);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r60 = ctx.$implicit;
    ɵɵproperty("colSpan", item_r60.span);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", item_r60.title);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_ng_template_1_Template(rf, ctx) {
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 15);
    ɵɵtemplate(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_ng_template_1_Template, 0, 0, "ng-template", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r67 = ctx.$implicit;
    ɵɵproperty("colSpan", item_r67.span);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", item_r67.content);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 8);
    ɵɵrepeaterCreate(1, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_2_Template, 2, 2, "td", 18, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
    ɵɵelementStart(3, "tr", 8);
    ɵɵrepeaterCreate(4, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_For_5_Template, 2, 2, "td", 19, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r53 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵrepeater(row_r53);
    ɵɵadvance(3);
    ɵɵrepeater(row_r53);
  }
}
function NzDescriptionsComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzDescriptionsComponent_Conditional_5_Conditional_1_For_1_Template, 6, 0, null, null, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵrepeater(ctx_r30.itemMatrix);
  }
}
function NzDescriptionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzDescriptionsComponent_Conditional_5_Conditional_0_Template, 2, 0)(1, NzDescriptionsComponent_Conditional_5_Conditional_1_Template, 2, 0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵconditional(0, !ctx_r2.nzBordered ? 0 : 1);
  }
}
var _NzDescriptionsItemComponent = class _NzDescriptionsItemComponent {
  constructor() {
    this.nzSpan = 1;
    this.nzTitle = "";
    this.inputChange$ = new Subject();
  }
  ngOnChanges() {
    this.inputChange$.next();
  }
  ngOnDestroy() {
    this.inputChange$.complete();
  }
};
_NzDescriptionsItemComponent.ɵfac = function NzDescriptionsItemComponent_Factory(t) {
  return new (t || _NzDescriptionsItemComponent)();
};
_NzDescriptionsItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDescriptionsItemComponent,
  selectors: [["nz-descriptions-item"]],
  viewQuery: function NzDescriptionsItemComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    nzSpan: "nzSpan",
    nzTitle: "nzTitle"
  },
  exportAs: ["nzDescriptionsItem"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzDescriptionsItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzDescriptionsItemComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzDescriptionsItemComponent = _NzDescriptionsItemComponent;
__decorate([InputNumber()], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-descriptions-item",
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
      exportAs: "nzDescriptionsItem",
      preserveWhitespaces: false,
      standalone: true
    }]
  }], null, {
    content: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    nzSpan: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "descriptions";
var defaultColumnMap = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1
};
var _NzDescriptionsComponent = class _NzDescriptionsComponent {
  constructor(nzConfigService, cdr, breakpointService, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBordered = false;
    this.nzLayout = "horizontal";
    this.nzColumn = defaultColumnMap;
    this.nzSize = "default";
    this.nzTitle = "";
    this.nzColon = true;
    this.itemMatrix = [];
    this.realColumn = 3;
    this.dir = "ltr";
    this.breakpoint = NzBreakpointEnum.md;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    if (changes.nzColumn) {
      this.prepareMatrix();
    }
  }
  ngAfterContentInit() {
    const contentChange$ = this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$));
    merge(contentChange$, contentChange$.pipe(switchMap(() => merge(...this.items.map((i) => i.inputChange$)).pipe(auditTime(16)))), this.breakpointService.subscribe(gridResponsiveMap).pipe(tap((bp) => this.breakpoint = bp))).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.prepareMatrix();
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Prepare the render matrix according to description items' spans.
   */
  prepareMatrix() {
    if (!this.items) {
      return;
    }
    let currentRow = [];
    let width = 0;
    const column = this.realColumn = this.getColumn();
    const items = this.items.toArray();
    const length = items.length;
    const matrix = [];
    const flushRow = () => {
      matrix.push(currentRow);
      currentRow = [];
      width = 0;
    };
    for (let i = 0; i < length; i++) {
      const item = items[i];
      const {
        nzTitle: title,
        content,
        nzSpan: span
      } = item;
      width += span;
      if (width >= column) {
        if (width > column) {
          warn(`"nzColumn" is ${column} but we have row length ${width}`);
        }
        currentRow.push({
          title,
          content,
          span: column - (width - span)
        });
        flushRow();
      } else if (i === length - 1) {
        currentRow.push({
          title,
          content,
          span: column - (width - span)
        });
        flushRow();
      } else {
        currentRow.push({
          title,
          content,
          span
        });
      }
    }
    this.itemMatrix = matrix;
  }
  getColumn() {
    if (typeof this.nzColumn !== "number") {
      return this.nzColumn[this.breakpoint];
    }
    return this.nzColumn;
  }
};
_NzDescriptionsComponent.ɵfac = function NzDescriptionsComponent_Factory(t) {
  return new (t || _NzDescriptionsComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzBreakpointService), ɵɵdirectiveInject(Directionality, 8));
};
_NzDescriptionsComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDescriptionsComponent,
  selectors: [["nz-descriptions"]],
  contentQueries: function NzDescriptionsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzDescriptionsItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  hostAttrs: [1, "ant-descriptions"],
  hostVars: 8,
  hostBindings: function NzDescriptionsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-descriptions-bordered", ctx.nzBordered)("ant-descriptions-middle", ctx.nzSize === "middle")("ant-descriptions-small", ctx.nzSize === "small")("ant-descriptions-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzBordered: "nzBordered",
    nzLayout: "nzLayout",
    nzColumn: "nzColumn",
    nzSize: "nzSize",
    nzTitle: "nzTitle",
    nzExtra: "nzExtra",
    nzColon: "nzColon"
  },
  exportAs: ["nzDescriptions"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 3,
  consts: [["class", "ant-descriptions-header"], [1, "ant-descriptions-view"], [1, "ant-descriptions-header"], ["class", "ant-descriptions-title"], ["class", "ant-descriptions-extra"], [1, "ant-descriptions-title"], [4, "nzStringTemplateOutlet"], [1, "ant-descriptions-extra"], [1, "ant-descriptions-row"], ["class", "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item", 3, "colSpan"], [1, "ant-descriptions-item-container"], [1, "ant-descriptions-item-label"], [1, "ant-descriptions-item-content"], [3, "ngTemplateOutlet"], [1, "ant-descriptions-item-content", 3, "colSpan"], ["class", "ant-descriptions-row"], [1, "ant-descriptions-item-label", 3, "colSpan"], ["class", "ant-descriptions-item-label", 3, "colSpan"], ["class", "ant-descriptions-item-content", 3, "colSpan"]],
  template: function NzDescriptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzDescriptionsComponent_Conditional_0_Template, 3, 2, "div", 0);
      ɵɵelementStart(1, "div", 1)(2, "table")(3, "tbody");
      ɵɵtemplate(4, NzDescriptionsComponent_Conditional_4_Template, 2, 0)(5, NzDescriptionsComponent_Conditional_5_Template, 2, 1);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.nzTitle || ctx.nzExtra ? 0 : -1);
      ɵɵadvance(4);
      ɵɵconditional(4, ctx.nzLayout === "horizontal" ? 4 : -1);
      ɵɵadvance(1);
      ɵɵconditional(5, ctx.nzLayout === "vertical" ? 5 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzDescriptionsComponent = _NzDescriptionsComponent;
__decorate([InputBoolean(), WithConfig()], NzDescriptionsComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig()], NzDescriptionsComponent.prototype, "nzColumn", void 0);
__decorate([WithConfig()], NzDescriptionsComponent.prototype, "nzSize", void 0);
__decorate([WithConfig(), InputBoolean()], NzDescriptionsComponent.prototype, "nzColon", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-descriptions",
      exportAs: "nzDescriptions",
      preserveWhitespaces: false,
      template: `
    @if (nzTitle || nzExtra) {
      <div class="ant-descriptions-header">
        @if (nzTitle) {
          <div class="ant-descriptions-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </div>
        }
        @if (nzExtra) {
          <div class="ant-descriptions-extra">
            <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
          </div>
        }
      </div>
    }

    <div class="ant-descriptions-view">
      <table>
        <tbody>
          @if (nzLayout === 'horizontal') {
            @for (row of itemMatrix; track row; let i = $index) {
              <tr class="ant-descriptions-row">
                @for (item of row; track item; let isLast = $last) {
                  @if (!nzBordered) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                        </span>
                      </div>
                    </td>
                  } @else {
                    <td class="ant-descriptions-item-label">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                    <td class="ant-descriptions-item-content" [colSpan]="item.span * 2 - 1">
                      <ng-template [ngTemplateOutlet]="item.content"></ng-template>
                    </td>
                  }
                }
              </tr>
            }
          }

          @if (nzLayout === 'vertical') {
            @if (!nzBordered) {
              @for (row of itemMatrix; track row; let i = $index) {
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-label" [class.ant-descriptions-item-no-colon]="!nzColon">
                          <ng-container *nzStringTemplateOutlet="item.title">
                            {{ item.title }}
                          </ng-container>
                        </span>
                      </div>
                    </td>
                  }
                </tr>
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item" [colSpan]="item.span">
                      <div class="ant-descriptions-item-container">
                        <span class="ant-descriptions-item-content">
                          <ng-template [ngTemplateOutlet]="item.content" />
                        </span>
                      </div>
                    </td>
                  }
                </tr>
              }
            } @else {
              @for (row of itemMatrix; track row; let i = $index) {
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item-label" [colSpan]="item.span">
                      <ng-container *nzStringTemplateOutlet="item.title">
                        {{ item.title }}
                      </ng-container>
                    </td>
                  }
                </tr>
                <tr class="ant-descriptions-row">
                  @for (item of row; track item; let isLast = $last) {
                    <td class="ant-descriptions-item-content" [colSpan]="item.span">
                      <ng-template [ngTemplateOutlet]="item.content" />
                    </td>
                  }
                </tr>
              }
            }
          }
        </tbody>
      </table>
    </div>
  `,
      host: {
        class: "ant-descriptions",
        "[class.ant-descriptions-bordered]": "nzBordered",
        "[class.ant-descriptions-middle]": 'nzSize === "middle"',
        "[class.ant-descriptions-small]": 'nzSize === "small"',
        "[class.ant-descriptions-rtl]": 'dir === "rtl"'
      },
      imports: [NzOutletModule, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    items: [{
      type: ContentChildren,
      args: [NzDescriptionsItemComponent]
    }],
    nzBordered: [{
      type: Input
    }],
    nzLayout: [{
      type: Input
    }],
    nzColumn: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzColon: [{
      type: Input
    }]
  });
})();
var _NzDescriptionsModule = class _NzDescriptionsModule {
};
_NzDescriptionsModule.ɵfac = function NzDescriptionsModule_Factory(t) {
  return new (t || _NzDescriptionsModule)();
};
_NzDescriptionsModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDescriptionsModule,
  imports: [NzDescriptionsComponent, NzDescriptionsItemComponent],
  exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
});
_NzDescriptionsModule.ɵinj = ɵɵdefineInjector({
  imports: [NzDescriptionsComponent]
});
var NzDescriptionsModule = _NzDescriptionsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDescriptionsModule, [{
    type: NgModule,
    args: [{
      imports: [NzDescriptionsComponent, NzDescriptionsItemComponent],
      exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
    }]
  }], null, null);
})();
export {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
};
//# sourceMappingURL=ng-zorro-antd_descriptions.js.map
