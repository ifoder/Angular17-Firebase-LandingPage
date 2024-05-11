import {
  InputBoolean,
  toCssPixel
} from "./chunk-A4L4YVTT.js";
import "./chunk-PA6IY4WI.js";
import {
  NgForOf,
  NgIf,
  NgStyle
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-2P2HMI5Y.js";
import "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import {
  __spreadValues
} from "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-skeleton.mjs
var _c0 = ["nzType", "button"];
var _c1 = ["nzType", "avatar"];
var _c2 = ["nzType", "input"];
var _c3 = ["nzType", "image"];
function NzSkeletonComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "nz-skeleton-element", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzSize", ctx_r2.avatar.size || "default")("nzShape", ctx_r2.avatar.shape || "circle");
  }
}
function NzSkeletonComponent_ng_container_0_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "h3", 7);
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵstyleProp("width", ctx_r3.toCSSUnit(ctx_r3.title.width));
  }
}
function NzSkeletonComponent_ng_container_0_ul_4_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li");
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵstyleProp("width", ctx_r5.toCSSUnit(ctx_r5.widthList[i_r7]));
  }
}
function NzSkeletonComponent_ng_container_0_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 8);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_ul_4_li_1_Template, 1, 2, "li", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.rowsList);
  }
}
function NzSkeletonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzSkeletonComponent_ng_container_0_div_1_Template, 2, 2, "div", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵtemplate(3, NzSkeletonComponent_ng_container_0_h3_3_Template, 1, 2, "h3", 3)(4, NzSkeletonComponent_ng_container_0_ul_4_Template, 2, 1, "ul", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r0.nzAvatar);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !!ctx_r0.nzTitle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !!ctx_r0.nzParagraph);
  }
}
function NzSkeletonComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
  }
}
var _c4 = ["*"];
var _NzSkeletonElementDirective = class _NzSkeletonElementDirective {
  constructor() {
    this.nzActive = false;
    this.nzBlock = false;
  }
};
_NzSkeletonElementDirective.ɵfac = function NzSkeletonElementDirective_Factory(t) {
  return new (t || _NzSkeletonElementDirective)();
};
_NzSkeletonElementDirective.ɵdir = ɵɵdefineDirective({
  type: _NzSkeletonElementDirective,
  selectors: [["nz-skeleton-element"]],
  hostAttrs: [1, "ant-skeleton", "ant-skeleton-element"],
  hostVars: 4,
  hostBindings: function NzSkeletonElementDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-active", ctx.nzActive)("ant-skeleton-block", ctx.nzBlock);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzType: "nzType",
    nzBlock: "nzBlock"
  },
  standalone: true
});
var NzSkeletonElementDirective = _NzSkeletonElementDirective;
__decorate([InputBoolean()], NzSkeletonElementDirective.prototype, "nzBlock", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementDirective, [{
    type: Directive,
    args: [{
      selector: "nz-skeleton-element",
      host: {
        class: "ant-skeleton ant-skeleton-element",
        "[class.ant-skeleton-active]": "nzActive",
        "[class.ant-skeleton-block]": "nzBlock"
      },
      standalone: true
    }]
  }], () => [], {
    nzActive: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzBlock: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementButtonComponent = class _NzSkeletonElementButtonComponent {
  constructor() {
    this.nzShape = "default";
    this.nzSize = "default";
  }
};
_NzSkeletonElementButtonComponent.ɵfac = function NzSkeletonElementButtonComponent_Factory(t) {
  return new (t || _NzSkeletonElementButtonComponent)();
};
_NzSkeletonElementButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementButtonComponent,
  selectors: [["nz-skeleton-element", "nzType", "button"]],
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 1,
  vars: 8,
  consts: [[1, "ant-skeleton-button"]],
  template: function NzSkeletonElementButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-button-round", ctx.nzShape === "round")("ant-skeleton-button-circle", ctx.nzShape === "circle")("ant-skeleton-button-lg", ctx.nzSize === "large")("ant-skeleton-button-sm", ctx.nzSize === "small");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementButtonComponent = _NzSkeletonElementButtonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementButtonComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="button"]',
      template: `
    <span
      class="ant-skeleton-button"
      [class.ant-skeleton-button-round]="nzShape === 'round'"
      [class.ant-skeleton-button-circle]="nzShape === 'circle'"
      [class.ant-skeleton-button-lg]="nzSize === 'large'"
      [class.ant-skeleton-button-sm]="nzSize === 'small'"
    ></span>
  `,
      standalone: true
    }]
  }], null, {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementAvatarComponent = class _NzSkeletonElementAvatarComponent {
  constructor() {
    this.nzShape = "circle";
    this.nzSize = "default";
    this.styleMap = {};
  }
  ngOnChanges(changes) {
    if (changes.nzSize && typeof this.nzSize === "number") {
      const sideLength = `${this.nzSize}px`;
      this.styleMap = {
        width: sideLength,
        height: sideLength,
        "line-height": sideLength
      };
    } else {
      this.styleMap = {};
    }
  }
};
_NzSkeletonElementAvatarComponent.ɵfac = function NzSkeletonElementAvatarComponent_Factory(t) {
  return new (t || _NzSkeletonElementAvatarComponent)();
};
_NzSkeletonElementAvatarComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementAvatarComponent,
  selectors: [["nz-skeleton-element", "nzType", "avatar"]],
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c1,
  decls: 1,
  vars: 9,
  consts: [[1, "ant-skeleton-avatar", 3, "ngStyle"]],
  template: function NzSkeletonElementAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-avatar-square", ctx.nzShape === "square")("ant-skeleton-avatar-circle", ctx.nzShape === "circle")("ant-skeleton-avatar-lg", ctx.nzSize === "large")("ant-skeleton-avatar-sm", ctx.nzSize === "small");
      ɵɵproperty("ngStyle", ctx.styleMap);
    }
  },
  dependencies: [NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementAvatarComponent = _NzSkeletonElementAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementAvatarComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="avatar"]',
      template: `
    <span
      class="ant-skeleton-avatar"
      [class.ant-skeleton-avatar-square]="nzShape === 'square'"
      [class.ant-skeleton-avatar-circle]="nzShape === 'circle'"
      [class.ant-skeleton-avatar-lg]="nzSize === 'large'"
      [class.ant-skeleton-avatar-sm]="nzSize === 'small'"
      [ngStyle]="styleMap"
    ></span>
  `,
      imports: [NgStyle],
      standalone: true
    }]
  }], null, {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementInputComponent = class _NzSkeletonElementInputComponent {
  constructor() {
    this.nzSize = "default";
  }
};
_NzSkeletonElementInputComponent.ɵfac = function NzSkeletonElementInputComponent_Factory(t) {
  return new (t || _NzSkeletonElementInputComponent)();
};
_NzSkeletonElementInputComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementInputComponent,
  selectors: [["nz-skeleton-element", "nzType", "input"]],
  inputs: {
    nzSize: "nzSize"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c2,
  decls: 1,
  vars: 4,
  consts: [[1, "ant-skeleton-input"]],
  template: function NzSkeletonElementInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", 0);
    }
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-input-lg", ctx.nzSize === "large")("ant-skeleton-input-sm", ctx.nzSize === "small");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementInputComponent = _NzSkeletonElementInputComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementInputComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="input"]',
      template: `
    <span
      class="ant-skeleton-input"
      [class.ant-skeleton-input-lg]="nzSize === 'large'"
      [class.ant-skeleton-input-sm]="nzSize === 'small'"
    ></span>
  `,
      standalone: true
    }]
  }], null, {
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzSkeletonElementImageComponent = class _NzSkeletonElementImageComponent {
};
_NzSkeletonElementImageComponent.ɵfac = function NzSkeletonElementImageComponent_Factory(t) {
  return new (t || _NzSkeletonElementImageComponent)();
};
_NzSkeletonElementImageComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonElementImageComponent,
  selectors: [["nz-skeleton-element", "nzType", "image"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c3,
  decls: 3,
  vars: 0,
  consts: [[1, "ant-skeleton-image"], ["viewBox", "0 0 1098 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-skeleton-image-svg"], ["d", "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", 1, "ant-skeleton-image-path"]],
  template: function NzSkeletonElementImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span", 0);
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonElementImageComponent = _NzSkeletonElementImageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonElementImageComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: 'nz-skeleton-element[nzType="image"]',
      template: `
    <span class="ant-skeleton-image">
      <svg class="ant-skeleton-image-svg" viewBox="0 0 1098 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z"
          class="ant-skeleton-image-path"
        />
      </svg>
    </span>
  `,
      standalone: true
    }]
  }], null, null);
})();
var _NzSkeletonComponent = class _NzSkeletonComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.nzActive = false;
    this.nzLoading = true;
    this.nzRound = false;
    this.nzTitle = true;
    this.nzAvatar = false;
    this.nzParagraph = true;
    this.rowsList = [];
    this.widthList = [];
  }
  toCSSUnit(value = "") {
    return toCssPixel(value);
  }
  getTitleProps() {
    const hasAvatar = !!this.nzAvatar;
    const hasParagraph = !!this.nzParagraph;
    let width = "";
    if (!hasAvatar && hasParagraph) {
      width = "38%";
    } else if (hasAvatar && hasParagraph) {
      width = "50%";
    }
    return __spreadValues({
      width
    }, this.getProps(this.nzTitle));
  }
  getAvatarProps() {
    const shape = !!this.nzTitle && !this.nzParagraph ? "square" : "circle";
    const size = "large";
    return __spreadValues({
      shape,
      size
    }, this.getProps(this.nzAvatar));
  }
  getParagraphProps() {
    const hasAvatar = !!this.nzAvatar;
    const hasTitle = !!this.nzTitle;
    const basicProps = {};
    if (!hasAvatar || !hasTitle) {
      basicProps.width = "61%";
    }
    if (!hasAvatar && hasTitle) {
      basicProps.rows = 3;
    } else {
      basicProps.rows = 2;
    }
    return __spreadValues(__spreadValues({}, basicProps), this.getProps(this.nzParagraph));
  }
  getProps(prop) {
    return prop && typeof prop === "object" ? prop : {};
  }
  getWidthList() {
    const {
      width,
      rows
    } = this.paragraph;
    let widthList = [];
    if (width && Array.isArray(width)) {
      widthList = width;
    } else if (width && !Array.isArray(width)) {
      widthList = [];
      widthList[rows - 1] = width;
    }
    return widthList;
  }
  updateProps() {
    this.title = this.getTitleProps();
    this.avatar = this.getAvatarProps();
    this.paragraph = this.getParagraphProps();
    this.rowsList = [...Array(this.paragraph.rows)];
    this.widthList = this.getWidthList();
    this.cdr.markForCheck();
  }
  ngOnInit() {
    this.updateProps();
  }
  ngOnChanges(changes) {
    if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
      this.updateProps();
    }
  }
};
_NzSkeletonComponent.ɵfac = function NzSkeletonComponent_Factory(t) {
  return new (t || _NzSkeletonComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzSkeletonComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzSkeletonComponent,
  selectors: [["nz-skeleton"]],
  hostAttrs: [1, "ant-skeleton"],
  hostVars: 6,
  hostBindings: function NzSkeletonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-skeleton-with-avatar", !!ctx.nzAvatar)("ant-skeleton-active", ctx.nzActive)("ant-skeleton-round", !!ctx.nzRound);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzLoading: "nzLoading",
    nzRound: "nzRound",
    nzTitle: "nzTitle",
    nzAvatar: "nzAvatar",
    nzParagraph: "nzParagraph"
  },
  exportAs: ["nzSkeleton"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c4,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], ["class", "ant-skeleton-header", 4, "ngIf"], [1, "ant-skeleton-content"], ["class", "ant-skeleton-title", 3, "width", 4, "ngIf"], ["class", "ant-skeleton-paragraph", 4, "ngIf"], [1, "ant-skeleton-header"], ["nzType", "avatar", 3, "nzSize", "nzShape"], [1, "ant-skeleton-title"], [1, "ant-skeleton-paragraph"], [3, "width", 4, "ngFor", "ngForOf"]],
  template: function NzSkeletonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzSkeletonComponent_ng_container_0_Template, 5, 3, "ng-container", 0)(1, NzSkeletonComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.nzLoading);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.nzLoading);
    }
  },
  dependencies: [NzSkeletonElementDirective, NzSkeletonElementAvatarComponent, NgIf, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSkeletonComponent = _NzSkeletonComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-skeleton",
      exportAs: "nzSkeleton",
      host: {
        class: "ant-skeleton",
        "[class.ant-skeleton-with-avatar]": "!!nzAvatar",
        "[class.ant-skeleton-active]": "nzActive",
        "[class.ant-skeleton-round]": "!!nzRound"
      },
      template: `
    <ng-container *ngIf="nzLoading">
      <div class="ant-skeleton-header" *ngIf="!!nzAvatar">
        <nz-skeleton-element
          nzType="avatar"
          [nzSize]="avatar.size || 'default'"
          [nzShape]="avatar.shape || 'circle'"
        ></nz-skeleton-element>
      </div>
      <div class="ant-skeleton-content">
        <h3 *ngIf="!!nzTitle" class="ant-skeleton-title" [style.width]="toCSSUnit(title.width)"></h3>
        <ul *ngIf="!!nzParagraph" class="ant-skeleton-paragraph">
          <li *ngFor="let row of rowsList; let i = index" [style.width]="toCSSUnit(widthList[i])"></li>
        </ul>
      </div>
    </ng-container>
    <ng-container *ngIf="!nzLoading">
      <ng-content></ng-content>
    </ng-container>
  `,
      imports: [NzSkeletonElementDirective, NzSkeletonElementAvatarComponent, NgIf, NgForOf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    nzActive: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzRound: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzAvatar: [{
      type: Input
    }],
    nzParagraph: [{
      type: Input
    }]
  });
})();
var _NzSkeletonModule = class _NzSkeletonModule {
};
_NzSkeletonModule.ɵfac = function NzSkeletonModule_Factory(t) {
  return new (t || _NzSkeletonModule)();
};
_NzSkeletonModule.ɵmod = ɵɵdefineNgModule({
  type: _NzSkeletonModule,
  imports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent],
  exports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]
});
_NzSkeletonModule.ɵinj = ɵɵdefineInjector({});
var NzSkeletonModule = _NzSkeletonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSkeletonModule, [{
    type: NgModule,
    args: [{
      imports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent],
      exports: [NzSkeletonElementDirective, NzSkeletonComponent, NzSkeletonElementButtonComponent, NzSkeletonElementAvatarComponent, NzSkeletonElementImageComponent, NzSkeletonElementInputComponent]
    }]
  }], null, null);
})();
export {
  NzSkeletonComponent,
  NzSkeletonElementAvatarComponent,
  NzSkeletonElementButtonComponent,
  NzSkeletonElementDirective,
  NzSkeletonElementImageComponent,
  NzSkeletonElementInputComponent,
  NzSkeletonModule
};
//# sourceMappingURL=ng-zorro-antd_skeleton.js.map
