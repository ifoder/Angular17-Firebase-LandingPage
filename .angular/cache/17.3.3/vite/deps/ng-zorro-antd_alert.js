import {
  NzIconDirective,
  NzIconModule
} from "./chunk-6SU7ZL5H.js";
import "./chunk-KFL6KJZO.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-5ERIQKMK.js";
import {
  slideAlertMotion
} from "./chunk-7G2DOQ3U.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-DVRA4BNT.js";
import {
  InputBoolean
} from "./chunk-O6NELX6U.js";
import {
  Directionality
} from "./chunk-JPPYGJGR.js";
import "./chunk-XVKPKO6U.js";
import "./chunk-YHGTLF3J.js";
import "./chunk-KEURSAC6.js";
import "./chunk-2XPBCZRL.js";
import "./chunk-D5TAH3ZD.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Optional,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-Y4OPO6BX.js";
import {
  Subject,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-JN3CWD3G.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-alert.mjs
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r5.nzIcon);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r6.nzIconType || ctx_r6.inferredIconType)("nzTheme", ctx_r6.iconTheme);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r1.nzIcon ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r10.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r8.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r9.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1, "span", 10)(2, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r2.nzMessage ? 1 : -1);
    ɵɵadvance(1);
    ɵɵconditional(2, ctx_r2.nzDescription ? 2 : -1);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r12.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 16);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r15.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template, 3, 1, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r13.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 15);
    ɵɵlistener("click", function NzAlertComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.closeAlert());
    });
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template, 1, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r4.nzCloseText ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵlistener("@slideAlertMotion.done", function NzAlertComponent_Conditional_0_Template_div_animation_slideAlertMotion_done_0_listener() {
      ɵɵrestoreView(_r19);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.onFadeAnimationDone());
    });
    ɵɵtemplate(1, NzAlertComponent_Conditional_0_Conditional_1_Template, 3, 1, "div", 2)(2, NzAlertComponent_Conditional_0_Conditional_2_Template, 3, 2, "div", 3)(3, NzAlertComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 4)(4, NzAlertComponent_Conditional_0_Conditional_4_Template, 3, 1, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-alert-rtl", ctx_r0.dir === "rtl")("ant-alert-success", ctx_r0.nzType === "success")("ant-alert-info", ctx_r0.nzType === "info")("ant-alert-warning", ctx_r0.nzType === "warning")("ant-alert-error", ctx_r0.nzType === "error")("ant-alert-no-icon", !ctx_r0.nzShowIcon)("ant-alert-banner", ctx_r0.nzBanner)("ant-alert-closable", ctx_r0.nzCloseable)("ant-alert-with-description", !!ctx_r0.nzDescription);
    ɵɵproperty("@.disabled", ctx_r0.nzNoAnimation)("@slideAlertMotion", void 0);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r0.nzShowIcon ? 1 : -1);
    ɵɵadvance(1);
    ɵɵconditional(2, ctx_r0.nzMessage || ctx_r0.nzDescription ? 2 : -1);
    ɵɵadvance(1);
    ɵɵconditional(3, ctx_r0.nzAction ? 3 : -1);
    ɵɵadvance(1);
    ɵɵconditional(4, ctx_r0.nzCloseable || ctx_r0.nzCloseText ? 4 : -1);
  }
}
var NZ_CONFIG_MODULE_NAME = "alert";
var _NzAlertComponent = class _NzAlertComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzAction = null;
    this.nzCloseText = null;
    this.nzIconType = null;
    this.nzMessage = null;
    this.nzDescription = null;
    this.nzType = "info";
    this.nzCloseable = false;
    this.nzShowIcon = false;
    this.nzBanner = false;
    this.nzNoAnimation = false;
    this.nzIcon = null;
    this.nzOnClose = new EventEmitter();
    this.closed = false;
    this.iconTheme = "fill";
    this.inferredIconType = "info-circle";
    this.dir = "ltr";
    this.isTypeSet = false;
    this.isShowIconSet = false;
    this.destroy$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  closeAlert() {
    this.closed = true;
  }
  onFadeAnimationDone() {
    if (this.closed) {
      this.nzOnClose.emit(true);
    }
  }
  ngOnChanges(changes) {
    const {
      nzShowIcon,
      nzDescription,
      nzType,
      nzBanner
    } = changes;
    if (nzShowIcon) {
      this.isShowIconSet = true;
    }
    if (nzType) {
      this.isTypeSet = true;
      switch (this.nzType) {
        case "error":
          this.inferredIconType = "close-circle";
          break;
        case "success":
          this.inferredIconType = "check-circle";
          break;
        case "info":
          this.inferredIconType = "info-circle";
          break;
        case "warning":
          this.inferredIconType = "exclamation-circle";
          break;
      }
    }
    if (nzDescription) {
      this.iconTheme = this.nzDescription ? "outline" : "fill";
    }
    if (nzBanner) {
      if (!this.isTypeSet) {
        this.nzType = "warning";
      }
      if (!this.isShowIconSet) {
        this.nzShowIcon = true;
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzAlertComponent.ɵfac = function NzAlertComponent_Factory(t) {
  return new (t || _NzAlertComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzAlertComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAlertComponent,
  selectors: [["nz-alert"]],
  inputs: {
    nzAction: "nzAction",
    nzCloseText: "nzCloseText",
    nzIconType: "nzIconType",
    nzMessage: "nzMessage",
    nzDescription: "nzDescription",
    nzType: "nzType",
    nzCloseable: "nzCloseable",
    nzShowIcon: "nzShowIcon",
    nzBanner: "nzBanner",
    nzNoAnimation: "nzNoAnimation",
    nzIcon: "nzIcon"
  },
  outputs: {
    nzOnClose: "nzOnClose"
  },
  exportAs: ["nzAlert"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [["class", "ant-alert", 3, "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description"], [1, "ant-alert"], ["class", "ant-alert-icon"], ["class", "ant-alert-content"], ["class", "ant-alert-action"], ["type", "button", "tabindex", "0", "class", "ant-alert-close-icon"], [1, "ant-alert-icon"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"], [1, "ant-alert-content"], ["class", "ant-alert-message"], ["class", "ant-alert-description"], [1, "ant-alert-message"], [1, "ant-alert-description"], [1, "ant-alert-action"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], [1, "ant-alert-close-text"], ["nz-icon", "", "nzType", "close"]],
  template: function NzAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzAlertComponent_Conditional_0_Template, 5, 24, "div", 0);
    }
    if (rf & 2) {
      ɵɵconditional(0, !ctx.closed ? 0 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [slideAlertMotion]
  },
  changeDetection: 0
});
var NzAlertComponent = _NzAlertComponent;
__decorate([WithConfig(), InputBoolean()], NzAlertComponent.prototype, "nzCloseable", void 0);
__decorate([WithConfig(), InputBoolean()], NzAlertComponent.prototype, "nzShowIcon", void 0);
__decorate([InputBoolean()], NzAlertComponent.prototype, "nzBanner", void 0);
__decorate([InputBoolean()], NzAlertComponent.prototype, "nzNoAnimation", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertComponent, [{
    type: Component,
    args: [{
      selector: "nz-alert",
      exportAs: "nzAlert",
      animations: [slideAlertMotion],
      standalone: true,
      imports: [NzIconModule, NzOutletModule],
      template: `
    @if (!closed) {
      <div
        class="ant-alert"
        [class.ant-alert-rtl]="dir === 'rtl'"
        [class.ant-alert-success]="nzType === 'success'"
        [class.ant-alert-info]="nzType === 'info'"
        [class.ant-alert-warning]="nzType === 'warning'"
        [class.ant-alert-error]="nzType === 'error'"
        [class.ant-alert-no-icon]="!nzShowIcon"
        [class.ant-alert-banner]="nzBanner"
        [class.ant-alert-closable]="nzCloseable"
        [class.ant-alert-with-description]="!!nzDescription"
        [@.disabled]="nzNoAnimation"
        [@slideAlertMotion]
        (@slideAlertMotion.done)="onFadeAnimationDone()"
      >
        @if (nzShowIcon) {
          <div class="ant-alert-icon">
            @if (nzIcon) {
              <ng-container *nzStringTemplateOutlet="nzIcon"></ng-container>
            } @else {
              <span nz-icon [nzType]="nzIconType || inferredIconType" [nzTheme]="iconTheme"></span>
            }
          </div>
        }

        @if (nzMessage || nzDescription) {
          <div class="ant-alert-content">
            @if (nzMessage) {
              <span class="ant-alert-message">
                <ng-container *nzStringTemplateOutlet="nzMessage">{{ nzMessage }}</ng-container>
              </span>
            }
            @if (nzDescription) {
              <span class="ant-alert-description">
                <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
              </span>
            }
          </div>
        }

        @if (nzAction) {
          <div class="ant-alert-action">
            <ng-container *nzStringTemplateOutlet="nzAction">{{ nzAction }}</ng-container>
          </div>
        }

        @if (nzCloseable || nzCloseText) {
          <button type="button" tabindex="0" class="ant-alert-close-icon" (click)="closeAlert()">
            @if (nzCloseText) {
              <ng-container *nzStringTemplateOutlet="nzCloseText">
                <span class="ant-alert-close-text">{{ nzCloseText }}</span>
              </ng-container>
            } @else {
              <span nz-icon nzType="close"></span>
            }
          </button>
        }
      </div>
    }
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false
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
    nzAction: [{
      type: Input
    }],
    nzCloseText: [{
      type: Input
    }],
    nzIconType: [{
      type: Input
    }],
    nzMessage: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzCloseable: [{
      type: Input
    }],
    nzShowIcon: [{
      type: Input
    }],
    nzBanner: [{
      type: Input
    }],
    nzNoAnimation: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzOnClose: [{
      type: Output
    }]
  });
})();
var _NzAlertModule = class _NzAlertModule {
};
_NzAlertModule.ɵfac = function NzAlertModule_Factory(t) {
  return new (t || _NzAlertModule)();
};
_NzAlertModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAlertModule,
  imports: [NzAlertComponent],
  exports: [NzAlertComponent]
});
_NzAlertModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAlertComponent]
});
var NzAlertModule = _NzAlertModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertModule, [{
    type: NgModule,
    args: [{
      exports: [NzAlertComponent],
      imports: [NzAlertComponent]
    }]
  }], null, null);
})();
export {
  NzAlertComponent,
  NzAlertModule
};
//# sourceMappingURL=ng-zorro-antd_alert.js.map
