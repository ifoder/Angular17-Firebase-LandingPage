import {
  NzI18nService
} from "./chunk-55VXEKD3.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  NzConfigService
} from "./chunk-7CXXYODY.js";
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
  TemplatePortal
} from "./chunk-2CGA3OMX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  TemplateRef,
  Type,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  startWith,
  takeUntil
} from "./chunk-ELRSAQZ7.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-empty.mjs
function NzEmptyComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "img", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("src", ctx_r4.nzNotFoundImage, ɵɵsanitizeUrl)("alt", ctx_r4.isContentString ? ctx_r4.nzNotFoundContent : "empty");
  }
}
function NzEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmptyComponent_Conditional_1_ng_container_0_Template, 2, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}
function NzEmptyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-simple");
  }
}
function NzEmptyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty-default");
  }
}
function NzEmptyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmptyComponent_Conditional_2_Conditional_0_Template, 1, 0, "nz-empty-simple")(1, NzEmptyComponent_Conditional_2_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r1.nzNotFoundImage === "simple" ? 0 : 1);
  }
}
function NzEmptyComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.isContentString ? ctx_r7.nzNotFoundContent : ctx_r7.locale["description"], " ");
  }
}
function NzEmptyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 5);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzNotFoundContent);
  }
}
function NzEmptyComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r8.nzNotFoundFooter, " ");
  }
}
function NzEmptyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, NzEmptyComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzNotFoundFooter);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r2.content, " ");
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("cdkPortalOutlet", ctx_r3.contentPortal);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r0.contentType === "string" ? 0 : 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty", 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-empty");
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template, 1, 0)(1, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template, 1, 0)(2, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    let NzEmbedEmptyComponent_Conditional_1_Conditional_0_contFlowTmp;
    ɵɵconditional(0, (NzEmbedEmptyComponent_Conditional_1_Conditional_0_contFlowTmp = ctx_r5.size) === "normal" ? 0 : NzEmbedEmptyComponent_Conditional_1_Conditional_0_contFlowTmp === "small" ? 1 : 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(0, ctx_r1.specificContent !== null ? 0 : -1);
  }
}
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken("nz-empty-component-name");
var _NzEmptyDefaultComponent = class _NzEmptyDefaultComponent {
};
_NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) {
  return new (t || _NzEmptyDefaultComponent)();
};
_NzEmptyDefaultComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptyDefaultComponent,
  selectors: [["nz-empty-default"]],
  exportAs: ["nzEmptyDefault"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 12,
  vars: 0,
  consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
  template: function NzEmptyDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1)(2, "g", 2);
      ɵɵelement(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
      ɵɵelementEnd();
      ɵɵelement(8, "path", 8);
      ɵɵelementStart(9, "g", 9);
      ɵɵelement(10, "ellipse", 10)(11, "path", 11);
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyDefaultComponent = _NzEmptyDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyDefaultComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-default",
      exportAs: "nzEmptyDefault",
      standalone: true,
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var _NzEmptySimpleComponent = class _NzEmptySimpleComponent {
};
_NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) {
  return new (t || _NzEmptySimpleComponent)();
};
_NzEmptySimpleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptySimpleComponent,
  selectors: [["nz-empty-simple"]],
  exportAs: ["nzEmptySimple"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 6,
  vars: 0,
  consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
  template: function NzEmptySimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "ellipse", 2);
      ɵɵelementStart(3, "g", 3);
      ɵɵelement(4, "path", 4)(5, "path", 5);
      ɵɵelementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptySimpleComponent = _NzEmptySimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptySimpleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-simple",
      exportAs: "nzEmptySimple",
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `,
      standalone: true
    }]
  }], null, null);
})();
var NzEmptyDefaultImages = ["default", "simple"];
var _NzEmptyComponent = class _NzEmptyComponent {
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.nzNotFoundImage = "default";
    this.isContentString = false;
    this.isImageBuildIn = true;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;
    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === "string";
    }
    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || "default";
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex((i) => i === image) > -1;
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Empty");
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) {
  return new (t || _NzEmptyComponent)(ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzEmptyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmptyComponent,
  selectors: [["nz-empty"]],
  hostAttrs: [1, "ant-empty"],
  inputs: {
    nzNotFoundImage: "nzNotFoundImage",
    nzNotFoundContent: "nzNotFoundContent",
    nzNotFoundFooter: "nzNotFoundFooter"
  },
  exportAs: ["nzEmpty"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 5,
  vars: 3,
  consts: [[1, "ant-empty-image"], ["class", "ant-empty-description"], ["class", "ant-empty-footer"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]],
  template: function NzEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzEmptyComponent_Conditional_1_Template, 1, 1, "ng-container")(2, NzEmptyComponent_Conditional_2_Template, 2, 1);
      ɵɵelementEnd();
      ɵɵtemplate(3, NzEmptyComponent_Conditional_3_Template, 2, 1, "p", 1)(4, NzEmptyComponent_Conditional_4_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵconditional(1, !ctx.isImageBuildIn ? 1 : 2);
      ɵɵadvance(2);
      ɵɵconditional(3, ctx.nzNotFoundContent !== null ? 3 : -1);
      ɵɵadvance(1);
      ɵɵconditional(4, ctx.nzNotFoundFooter ? 4 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyComponent = _NzEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty",
      exportAs: "nzEmpty",
      template: `
    <div class="ant-empty-image">
      @if (!isImageBuildIn) {
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      } @else {
        @if (nzNotFoundImage === 'simple') {
          <nz-empty-simple />
        } @else {
          <nz-empty-default />
        }
      }
    </div>
    @if (nzNotFoundContent !== null) {
      <p class="ant-empty-description">
        <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
          {{ isContentString ? nzNotFoundContent : locale['description'] }}
        </ng-container>
      </p>
    }

    @if (nzNotFoundFooter) {
      <div class="ant-empty-footer">
        <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
          {{ nzNotFoundFooter }}
        </ng-container>
      </div>
    }
  `,
      host: {
        class: "ant-empty"
      },
      imports: [NzOutletModule, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }], {
    nzNotFoundImage: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNotFoundFooter: [{
      type: Input
    }]
  });
})();
function getEmptySize(componentName) {
  switch (componentName) {
    case "table":
    case "list":
      return "normal";
    case "select":
    case "tree-select":
    case "cascader":
    case "transfer":
      return "small";
    default:
      return "";
  }
}
var _NzEmbedEmptyComponent = class _NzEmbedEmptyComponent {
  constructor(configService, viewContainerRef, cdr, injector) {
    this.configService = configService;
    this.viewContainerRef = viewContainerRef;
    this.cdr = cdr;
    this.injector = injector;
    this.contentType = "string";
    this.size = "";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }
    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }
  ngOnInit() {
    this.subscribeDefaultEmptyContentChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  renderEmpty() {
    const content = this.content;
    if (typeof content === "string") {
      this.contentType = "string";
    } else if (content instanceof TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = "template";
      this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof Type) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = "component";
      this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = "string";
      this.contentPortal = void 0;
    }
    this.cdr.detectChanges();
  }
  subscribeDefaultEmptyContentChange() {
    this.configService.getConfigChangeEventForComponent("empty").pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }
  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent("empty") || {}).nzDefaultEmptyContent;
  }
};
_NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) {
  return new (t || _NzEmbedEmptyComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Injector));
};
_NzEmbedEmptyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzEmbedEmptyComponent,
  selectors: [["nz-embed-empty"]],
  inputs: {
    nzComponentName: "nzComponentName",
    specificContent: "specificContent"
  },
  exportAs: ["nzEmbedEmpty"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[3, "cdkPortalOutlet"], ["nzNotFoundImage", "simple", 1, "ant-empty-normal"], ["nzNotFoundImage", "simple", 1, "ant-empty-small"]],
  template: function NzEmbedEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzEmbedEmptyComponent_Conditional_0_Template, 2, 1)(1, NzEmbedEmptyComponent_Conditional_1_Template, 1, 1);
    }
    if (rf & 2) {
      ɵɵconditional(0, ctx.content ? 0 : 1);
    }
  },
  dependencies: [NzEmptyComponent, PortalModule, CdkPortalOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmbedEmptyComponent = _NzEmbedEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmbedEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-embed-empty",
      exportAs: "nzEmbedEmpty",
      template: `
    @if (content) {
      @if (contentType === 'string') {
        {{ content }}
      } @else {
        <ng-template [cdkPortalOutlet]="contentPortal" />
      }
    } @else {
      @if (specificContent !== null) {
        @switch (size) {
          @case ('normal') {
            <nz-empty class="ant-empty-normal" nzNotFoundImage="simple" />
          }
          @case ('small') {
            <nz-empty class="ant-empty-small" nzNotFoundImage="simple" />
          }
          @default {
            <nz-empty />
          }
        }
      }
    }
  `,
      imports: [NzEmptyComponent, PortalModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }], {
    nzComponentName: [{
      type: Input
    }],
    specificContent: [{
      type: Input
    }]
  });
})();
var _NzEmptyModule = class _NzEmptyModule {
};
_NzEmptyModule.ɵfac = function NzEmptyModule_Factory(t) {
  return new (t || _NzEmptyModule)();
};
_NzEmptyModule.ɵmod = ɵɵdefineNgModule({
  type: _NzEmptyModule,
  imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  exports: [NzEmptyComponent, NzEmbedEmptyComponent]
});
_NzEmptyModule.ɵinj = ɵɵdefineInjector({
  imports: [NzEmptyComponent, NzEmbedEmptyComponent]
});
var NzEmptyModule = _NzEmptyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyModule, [{
    type: NgModule,
    args: [{
      imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();

export {
  NZ_EMPTY_COMPONENT_NAME,
  NzEmptyDefaultComponent,
  NzEmptySimpleComponent,
  NzEmptyComponent,
  NzEmbedEmptyComponent,
  NzEmptyModule
};
//# sourceMappingURL=chunk-I52UDDYB.js.map
