import {
  NzToolTipModule,
  NzTooltipDirective
} from "./chunk-ALNUVXIG.js";
import {
  NzTransButtonDirective,
  NzTransButtonModule
} from "./chunk-DM6JGRWZ.js";
import {
  NzI18nService
} from "./chunk-RCQ74I4I.js";
import "./chunk-7BZHZZSQ.js";
import {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputModule
} from "./chunk-AUQ4TUQW.js";
import "./chunk-NGEBQP6D.js";
import "./chunk-N7EO5KHK.js";
import "./chunk-T5XCZF5M.js";
import "./chunk-HVVV2P4P.js";
import "./chunk-NA7MVJ2Z.js";
import "./chunk-A7RVIN62.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import "./chunk-BJIJDVLR.js";
import {
  NzDestroyService,
  NzResizeService,
  cancelRequestAnimationFrame,
  reqAnimFrame
} from "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  InputNumber,
  isStyleSupport,
  measure
} from "./chunk-A4L4YVTT.js";
import "./chunk-EIPRZNBF.js";
import "./chunk-TLRFD67R.js";
import "./chunk-2WDYTXJ5.js";
import "./chunk-GWWQI25Q.js";
import "./chunk-2CGA3OMX.js";
import {
  ENTER,
  ESCAPE
} from "./chunk-27BDGVS6.js";
import "./chunk-GRCHAQNP.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  Platform
} from "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import "./chunk-M6FD3VIN.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  Subscription,
  from,
  fromEvent,
  switchMap,
  take,
  takeUntil,
  withLatestFrom
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var _Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
_Clipboard.ɵfac = function Clipboard_Factory(t) {
  return new (t || _Clipboard)(ɵɵinject(DOCUMENT));
};
_Clipboard.ɵprov = ɵɵdefineInjectable({
  token: _Clipboard,
  factory: _Clipboard.ɵfac,
  providedIn: "root"
});
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
_CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
  return new (t || _CdkCopyToClipboard)(ɵɵdirectiveInject(Clipboard), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};
_CdkCopyToClipboard.ɵdir = ɵɵdefineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: ["cdkCopyToClipboard", "text"],
    attempts: ["cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  },
  standalone: true
});
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
_ClipboardModule.ɵfac = function ClipboardModule_Factory(t) {
  return new (t || _ClipboardModule)();
};
_ClipboardModule.ɵmod = ɵɵdefineNgModule({
  type: _ClipboardModule,
  imports: [CdkCopyToClipboard],
  exports: [CdkCopyToClipboard]
});
_ClipboardModule.ɵinj = ɵɵdefineInjector({});
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-typography.mjs
function NzTextCopyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzType", icon_r1);
  }
}
var _c0 = ["textarea"];
function NzTextEditComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 2, 3);
    ɵɵlistener("blur", function NzTextEditComponent_ng_template_0_Template_textarea_blur_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.confirm());
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 4);
    ɵɵlistener("click", function NzTextEditComponent_ng_template_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.confirm());
    });
    ɵɵelement(3, "span", 5);
    ɵɵelementEnd();
  }
}
function NzTextEditComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const icon_r8 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzType", icon_r8);
  }
}
function NzTextEditComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function NzTextEditComponent_ng_template_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onClick());
    });
    ɵɵtemplate(1, NzTextEditComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzTooltipTitle", ctx_r1.tooltip === null ? null : ctx_r1.tooltip || (ctx_r1.locale == null ? null : ctx_r1.locale.edit));
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r1.icon);
  }
}
var _c1 = ["ellipsisContainer"];
var _c2 = ["expandable"];
var _c3 = ["contentTemplate"];
function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!content"]);
  }
}
function NzTypographyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 1);
    ɵɵtext(1);
  }
  if (rf & 2) {
    const content_r5 = ctx.content;
    ɵɵproperty("ngIf", !content_r5);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", content_r5, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r11.nzSuffix);
  }
}
var _c4 = (a0) => ({
  content: a0
});
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r1)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c4, ctx_r7.nzContent));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r13.ellipsisStr);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r14.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9, 10);
    ɵɵlistener("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() {
      ɵɵrestoreView(_r18);
      const ctx_r17 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r17.onExpand());
    });
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r15.locale == null ? null : ctx_r15.locale.expand, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", null, 7);
    ɵɵtemplate(2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 1)(3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 1)(4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 8);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r8.isEllipsis);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.nzSuffix);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.nzExpandable && ctx_r8.isEllipsis);
  }
}
function NzTypographyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 4)(2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r9 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.expanded || !ctx_r2.hasOperationsWithEllipsis && ctx_r2.nzEllipsisRows === 1 && !ctx_r2.hasEllipsisObservers || ctx_r2.canCssEllipsis || ctx_r2.nzSuffix && ctx_r2.expanded)("ngIfElse", _r9);
  }
}
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-edit", 11);
    ɵɵlistener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.onEndEditing($event));
    })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() {
      ɵɵrestoreView(_r20);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onStartEditing());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r3.nzContent)("icon", ctx_r3.nzEditIcon)("tooltip", ctx_r3.nzEditTooltip);
  }
}
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-text-copy", 12);
    ɵɵlistener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) {
      ɵɵrestoreView(_r23);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.onTextCopy($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r4.copyText)("tooltips", ctx_r4.nzCopyTooltips)("icons", ctx_r4.nzCopyIcons);
  }
}
var _c5 = ["*"];
var _NzTextCopyComponent = class _NzTextCopyComponent {
  constructor(host, cdr, clipboard, i18n) {
    this.host = host;
    this.cdr = cdr;
    this.clipboard = clipboard;
    this.i18n = i18n;
    this.copied = false;
    this.copyId = -1;
    this.nativeElement = this.host.nativeElement;
    this.copyTooltip = null;
    this.copedTooltip = null;
    this.copyIcon = "copy";
    this.copedIcon = "check";
    this.destroy$ = new Subject();
    this.icons = ["copy", "check"];
    this.textCopy = new EventEmitter();
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.updateTooltips();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      tooltips,
      icons
    } = changes;
    if (tooltips) {
      this.updateTooltips();
    }
    if (icons) {
      this.updateIcons();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.copyId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  onClick() {
    if (this.copied) {
      return;
    }
    this.copied = true;
    this.cdr.detectChanges();
    const text = this.text;
    this.textCopy.emit(text);
    this.clipboard.copy(text);
    this.onCopied();
  }
  onCopied() {
    clearTimeout(this.copyId);
    this.copyId = setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 3e3);
  }
  updateTooltips() {
    if (this.tooltips === null) {
      this.copedTooltip = null;
      this.copyTooltip = null;
    } else if (Array.isArray(this.tooltips)) {
      const [copyTooltip, copedTooltip] = this.tooltips;
      this.copyTooltip = copyTooltip || this.locale?.copy;
      this.copedTooltip = copedTooltip || this.locale?.copied;
    } else {
      this.copyTooltip = this.locale?.copy;
      this.copedTooltip = this.locale?.copied;
    }
    this.cdr.markForCheck();
  }
  updateIcons() {
    const [copyIcon, copedIcon] = this.icons;
    this.copyIcon = copyIcon;
    this.copedIcon = copedIcon;
    this.cdr.markForCheck();
  }
};
_NzTextCopyComponent.ɵfac = function NzTextCopyComponent_Factory(t) {
  return new (t || _NzTextCopyComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Clipboard), ɵɵdirectiveInject(NzI18nService));
};
_NzTextCopyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextCopyComponent,
  selectors: [["nz-text-copy"]],
  inputs: {
    text: "text",
    tooltips: "tooltips",
    icons: "icons"
  },
  outputs: {
    textCopy: "textCopy"
  },
  exportAs: ["nzTextCopy"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextCopyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function NzTextCopyComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      ɵɵtemplate(1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-typography-copy-success", ctx.copied);
      ɵɵproperty("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
      ɵɵadvance(1);
      ɵɵproperty("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
    }
  },
  dependencies: [NzToolTipModule, NzTooltipDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextCopyComponent = _NzTextCopyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextCopyComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-copy",
      exportAs: "nzTextCopy",
      template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <span nz-icon [nzType]="icon"></span>
      </ng-container>
    </button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      imports: [NzToolTipModule, NzTransButtonModule, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Clipboard
  }, {
    type: NzI18nService
  }], {
    text: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    textCopy: [{
      type: Output
    }]
  });
})();
var _NzTextEditComponent = class _NzTextEditComponent {
  set textarea(textarea) {
    this.textarea$.next(textarea);
  }
  constructor(ngZone, host, cdr, i18n, destroy$) {
    this.ngZone = ngZone;
    this.host = host;
    this.cdr = cdr;
    this.i18n = i18n;
    this.destroy$ = destroy$;
    this.editing = false;
    this.icon = "edit";
    this.startEditing = new EventEmitter();
    this.endEditing = new EventEmitter(true);
    this.nativeElement = this.host.nativeElement;
    this.textarea$ = new BehaviorSubject(null);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.textarea$.pipe(switchMap((textarea) => (
      // Caretaker note: we explicitly should call `subscribe()` within the root zone.
      // `runOutsideAngular(() => fromEvent(...))` will just create an observable within the root zone,
      // but `addEventListener` is called when the `fromEvent` is subscribed.
      textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "keydown").subscribe(subscriber))) : EMPTY
    )), takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode !== ESCAPE && event.keyCode !== ENTER) {
        return;
      }
      this.ngZone.run(() => {
        if (event.keyCode === ESCAPE) {
          this.onCancel();
        } else {
          this.onEnter(event);
        }
        this.cdr.markForCheck();
      });
    });
    this.textarea$.pipe(switchMap((textarea) => textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "input").subscribe(subscriber))) : EMPTY), takeUntil(this.destroy$)).subscribe((event) => {
      this.currentText = event.target.value;
    });
  }
  onClick() {
    this.beforeText = this.text;
    this.currentText = this.beforeText;
    this.editing = true;
    this.startEditing.emit();
    this.focusAndSetValue();
  }
  confirm() {
    this.editing = false;
    this.endEditing.emit(this.currentText);
  }
  onEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.confirm();
  }
  onCancel() {
    this.currentText = this.beforeText;
    this.confirm();
  }
  focusAndSetValue() {
    const onStable$ = this.ngZone.isStable ? from(Promise.resolve()) : this.ngZone.onStable.pipe(take(1));
    this.ngZone.runOutsideAngular(() => {
      onStable$.pipe(withLatestFrom(this.textarea$), takeUntil(this.destroy$)).subscribe(([, textarea]) => {
        if (textarea) {
          textarea.nativeElement.focus();
          textarea.nativeElement.value = this.currentText || "";
          this.autosizeDirective.resizeToFitContent();
          this.cdr.markForCheck();
        }
      });
    });
  }
};
_NzTextEditComponent.ɵfac = function NzTextEditComponent_Factory(t) {
  return new (t || _NzTextEditComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(NzDestroyService));
};
_NzTextEditComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTextEditComponent,
  selectors: [["nz-text-edit"]],
  viewQuery: function NzTextEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(NzAutosizeDirective, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textarea = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.autosizeDirective = _t.first);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    tooltip: "tooltip"
  },
  outputs: {
    startEditing: "startEditing",
    endEditing: "endEditing"
  },
  exportAs: ["nzTextEdit"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService]), ɵɵStandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [[3, "ngIf", "ngIfElse"], ["notEditing", ""], ["nz-input", "", "nzAutosize", "", 3, "blur"], ["textarea", ""], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "nzTooltipTitle", "click"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTextEditComponent_ng_template_0_Template, 4, 0, "ng-template", 0)(1, NzTextEditComponent_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.editing)("ngIfElse", _r2);
    }
  },
  dependencies: [NgIf, NzInputModule, NzInputDirective, NzAutosizeDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzToolTipModule, NzTooltipDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextEditComponent = _NzTextEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextEditComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-edit",
      exportAs: "nzTextEdit",
      template: `
    <ng-template [ngIf]="editing" [ngIfElse]="notEditing">
      <textarea #textarea nz-input nzAutosize (blur)="confirm()"></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <span nz-icon nzType="enter"></span>
      </button>
    </ng-template>

    <ng-template #notEditing>
      <button
        nz-tooltip
        nz-trans-button
        class="ant-typography-edit"
        [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
        (click)="onClick()"
      >
        <ng-container *nzStringTemplateOutlet="icon; let icon">
          <span nz-icon [nzType]="icon"></span>
        </ng-container>
      </button>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService],
      imports: [NgIf, NzInputModule, NzTransButtonModule, NzIconModule, NzToolTipModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }], {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    startEditing: [{
      type: Output
    }],
    endEditing: [{
      type: Output
    }],
    textarea: [{
      type: ViewChild,
      args: ["textarea", {
        static: false
      }]
    }],
    autosizeDirective: [{
      type: ViewChild,
      args: [NzAutosizeDirective, {
        static: false
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "typography";
var EXPAND_ELEMENT_CLASSNAME = "ant-typography-expand";
var _NzTypographyComponent = class _NzTypographyComponent {
  get hasEllipsisObservers() {
    return this.nzOnEllipsis.observers.length > 0;
  }
  get canCssEllipsis() {
    return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
  }
  get hasOperationsWithEllipsis() {
    return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
  }
  get copyText() {
    return typeof this.nzCopyText === "string" ? this.nzCopyText : this.nzContent;
  }
  constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.cdr = cdr;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.platform = platform;
    this.i18n = i18n;
    this.resizeService = resizeService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzCopyable = false;
    this.nzEditable = false;
    this.nzDisabled = false;
    this.nzExpandable = false;
    this.nzEllipsis = false;
    this.nzCopyTooltips = void 0;
    this.nzCopyIcons = ["copy", "check"];
    this.nzEditTooltip = void 0;
    this.nzEditIcon = "edit";
    this.nzEllipsisRows = 1;
    this.nzContentChange = new EventEmitter();
    this.nzCopy = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnEllipsis = new EventEmitter();
    this.expandableBtnElementCache = null;
    this.editing = false;
    this.cssEllipsis = false;
    this.isEllipsis = true;
    this.expanded = false;
    this.ellipsisStr = "...";
    this.dir = "ltr";
    this.viewInit = false;
    this.rfaId = -1;
    this.destroy$ = new Subject();
    this.windowResizeSubscription = Subscription.EMPTY;
    this.document = document;
  }
  onTextCopy(text) {
    this.nzCopy.emit(text);
  }
  onStartEditing() {
    this.editing = true;
  }
  onEndEditing(text) {
    this.editing = false;
    this.nzContentChange.emit(text);
    if (this.nzContent === text) {
      this.renderOnNextFrame();
    }
    this.cdr.markForCheck();
  }
  onExpand() {
    this.isEllipsis = false;
    this.expanded = true;
    this.nzExpandChange.emit();
    this.nzOnEllipsis.emit(false);
  }
  canUseCSSEllipsis() {
    if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
      return false;
    }
    if (this.hasEllipsisObservers) {
      return false;
    }
    if (this.nzEllipsisRows === 1) {
      return isStyleSupport("textOverflow");
    } else {
      return isStyleSupport("webkitLineClamp");
    }
  }
  renderOnNextFrame() {
    cancelRequestAnimationFrame(this.rfaId);
    if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
      return;
    }
    this.rfaId = reqAnimFrame(() => {
      this.syncEllipsis();
    });
  }
  getOriginContentViewRef() {
    const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
      content: this.nzContent
    });
    viewRef.detectChanges();
    return {
      viewRef,
      removeView: () => {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
      }
    };
  }
  syncEllipsis() {
    if (this.cssEllipsis) {
      return;
    }
    const {
      viewRef,
      removeView
    } = this.getOriginContentViewRef();
    const fixedNodes = [this.textCopyRef, this.textEditRef].filter((e) => e && e.nativeElement).map((e) => e.nativeElement);
    const expandableBtnElement = this.getExpandableBtnElement();
    if (expandableBtnElement) {
      fixedNodes.push(expandableBtnElement);
    }
    const {
      contentNodes,
      text,
      ellipsis
    } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
    removeView();
    this.ellipsisText = text;
    if (ellipsis !== this.isEllipsis) {
      this.isEllipsis = ellipsis;
      this.nzOnEllipsis.emit(ellipsis);
    }
    const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
    while (ellipsisContainerNativeElement.firstChild) {
      this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
    }
    contentNodes.forEach((n) => {
      this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
    });
    this.cdr.markForCheck();
  }
  // Need to create the element for calculation size before view init
  getExpandableBtnElement() {
    if (this.nzExpandable) {
      const expandText = this.locale ? this.locale.expand : "";
      const cache = this.expandableBtnElementCache;
      if (!cache || cache.innerText === expandText) {
        const el = this.document.createElement("a");
        el.className = EXPAND_ELEMENT_CLASSNAME;
        el.innerText = expandText;
        this.expandableBtnElementCache = el;
      }
      return this.expandableBtnElementCache;
    } else {
      this.expandableBtnElementCache = null;
      return null;
    }
  }
  renderAndSubscribeWindowResize() {
    if (this.platform.isBrowser) {
      this.windowResizeSubscription.unsubscribe();
      this.cssEllipsis = this.canUseCSSEllipsis();
      this.renderOnNextFrame();
      this.windowResizeSubscription = this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.renderOnNextFrame());
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.viewInit = true;
    this.renderAndSubscribeWindowResize();
  }
  ngOnChanges(changes) {
    const {
      nzCopyable,
      nzEditable,
      nzExpandable,
      nzEllipsis,
      nzContent,
      nzEllipsisRows,
      nzSuffix
    } = changes;
    if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
      if (this.nzEllipsis) {
        if (this.expanded) {
          this.windowResizeSubscription.unsubscribe();
        } else {
          this.renderAndSubscribeWindowResize();
        }
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.expandableBtnElementCache = null;
    this.windowResizeSubscription.unsubscribe();
  }
};
_NzTypographyComponent.ɵfac = function NzTypographyComponent_Factory(t) {
  return new (t || _NzTypographyComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(NzResizeService), ɵɵdirectiveInject(Directionality, 8));
};
_NzTypographyComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTypographyComponent,
  selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]],
  viewQuery: function NzTypographyComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(NzTextEditComponent, 5);
      ɵɵviewQuery(NzTextCopyComponent, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textEditRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textCopyRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ellipsisContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandableBtn = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
    }
  },
  hostVars: 26,
  hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
      ɵɵclassProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-single-line", ctx.nzEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    }
  },
  inputs: {
    nzCopyable: "nzCopyable",
    nzEditable: "nzEditable",
    nzDisabled: "nzDisabled",
    nzExpandable: "nzExpandable",
    nzEllipsis: "nzEllipsis",
    nzCopyTooltips: "nzCopyTooltips",
    nzCopyIcons: "nzCopyIcons",
    nzEditTooltip: "nzEditTooltip",
    nzEditIcon: "nzEditIcon",
    nzContent: "nzContent",
    nzEllipsisRows: "nzEllipsisRows",
    nzType: "nzType",
    nzCopyText: "nzCopyText",
    nzSuffix: "nzSuffix"
  },
  outputs: {
    nzContentChange: "nzContentChange",
    nzCopy: "nzCopy",
    nzExpandChange: "nzExpandChange",
    nzOnEllipsis: "nzOnEllipsis"
  },
  exportAs: ["nzTypography"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c5,
  decls: 5,
  vars: 3,
  consts: [["contentTemplate", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["jsEllipsis", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["ellipsisContainer", ""], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], ["expandable", ""], [3, "text", "icon", "tooltip", "endEditing", "startEditing"], [3, "text", "tooltips", "icons", "textCopy"]],
  template: function NzTypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 1)(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 2)(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 3);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.editing);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzEditable);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzCopyable && !ctx.editing);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTypographyComponent = _NzTypographyComponent;
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([WithConfig(), InputNumber()], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyComponent, [{
    type: Component,
    args: [{
      selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
      exportAs: "nzTypography",
      template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template
          [ngTemplateOutlet]="contentTemplate"
          [ngTemplateOutletContext]="{ content: nzContent }"
        ></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">
          {{ locale?.expand }}
        </a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      host: {
        "[class.ant-typography]": "!editing",
        "[class.ant-typography-rtl]": 'dir === "rtl"',
        "[class.ant-typography-edit-content]": "editing",
        "[class.ant-typography-secondary]": 'nzType === "secondary"',
        "[class.ant-typography-warning]": 'nzType === "warning"',
        "[class.ant-typography-danger]": 'nzType === "danger"',
        "[class.ant-typography-success]": 'nzType === "success"',
        "[class.ant-typography-disabled]": "nzDisabled",
        "[class.ant-typography-ellipsis]": "nzEllipsis && !expanded",
        "[class.ant-typography-single-line]": "nzEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-single-line]": "canCssEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-multiple-line]": "canCssEllipsis && nzEllipsisRows > 1",
        "[style.-webkit-line-clamp]": "(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null"
      },
      imports: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: NzI18nService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzResizeService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzCopyable: [{
      type: Input
    }],
    nzEditable: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzExpandable: [{
      type: Input
    }],
    nzEllipsis: [{
      type: Input
    }],
    nzCopyTooltips: [{
      type: Input
    }],
    nzCopyIcons: [{
      type: Input
    }],
    nzEditTooltip: [{
      type: Input
    }],
    nzEditIcon: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzEllipsisRows: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzCopyText: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzContentChange: [{
      type: Output
    }],
    nzCopy: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnEllipsis: [{
      type: Output
    }],
    textEditRef: [{
      type: ViewChild,
      args: [NzTextEditComponent, {
        static: false
      }]
    }],
    textCopyRef: [{
      type: ViewChild,
      args: [NzTextCopyComponent, {
        static: false
      }]
    }],
    ellipsisContainer: [{
      type: ViewChild,
      args: ["ellipsisContainer", {
        static: false
      }]
    }],
    expandableBtn: [{
      type: ViewChild,
      args: ["expandable", {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: false
      }]
    }]
  });
})();
var _NzTypographyModule = class _NzTypographyModule {
};
_NzTypographyModule.ɵfac = function NzTypographyModule_Factory(t) {
  return new (t || _NzTypographyModule)();
};
_NzTypographyModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTypographyModule,
  imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
  exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
});
_NzTypographyModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
});
var NzTypographyModule = _NzTypographyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyModule, [{
    type: NgModule,
    args: [{
      imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
      exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
    }]
  }], null, null);
})();
export {
  NzTextCopyComponent,
  NzTextEditComponent,
  NzTypographyComponent,
  NzTypographyModule
};
//# sourceMappingURL=ng-zorro-antd_typography.js.map
