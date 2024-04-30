import {
  NzInputGroupWhitSuffixOrPrefixDirective
} from "./chunk-AEBRTEDK.js";
import "./chunk-NGEBQP6D.js";
import "./chunk-N7EO5KHK.js";
import {
  NzNoAnimationDirective
} from "./chunk-HVVV2P4P.js";
import "./chunk-NA7MVJ2Z.js";
import "./chunk-A7RVIN62.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import "./chunk-ZDRZN5Y6.js";
import {
  slideMotion
} from "./chunk-BJIJDVLR.js";
import "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  scrollIntoView
} from "./chunk-A4L4YVTT.js";
import "./chunk-TLRFD67R.js";
import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig
} from "./chunk-NRW7HDG5.js";
import "./chunk-DHXGQT7V.js";
import {
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  TAB,
  UP_ARROW
} from "./chunk-27BDGVS6.js";
import {
  TemplatePortal
} from "./chunk-2CGA3OMX.js";
import "./chunk-GRCHAQNP.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-M6FD3VIN.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  DOCUMENT,
  NgClass,
  NgForOf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Inject,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  Subscription,
  defer,
  delay,
  filter,
  fromEvent,
  merge,
  switchMap,
  take,
  takeUntil,
  tap
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-auto-complete.mjs
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.nzLabel);
  }
}
var _c0 = [[["nz-auto-option"]]];
var _c1 = ["nz-auto-option"];
var _c2 = ["*"];
var _c3 = ["panel"];
var _c4 = ["content"];
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) {
}
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-auto-option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    ɵɵproperty("nzValue", option_r9.value)("nzLabel", option_r9.label);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r9.label, " ");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_nz_auto_option_0_Template, 2, 3, "nz-auto-option", 7);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngForOf", ctx_r5.normalizedDataSource);
  }
}
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0, 1);
    ɵɵlistener("@slideMotion.done", function NzAutocompleteComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onAnimationEvent($event));
    });
    ɵɵelementStart(2, "div", 2)(3, "div", 3);
    ɵɵtemplate(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, null, 4);
    ɵɵelementEnd()()();
    ɵɵtemplate(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 5, ɵɵtemplateRefExtractor)(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const _r4 = ɵɵreference(6);
    const _r6 = ɵɵreference(8);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-select-dropdown-hidden", !ctx_r0.showPanel)("ant-select-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation)("@slideMotion", void 0)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation));
    ɵɵadvance(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nzDataSource ? _r6 : _r4);
  }
}
var _NzAutocompleteOptgroupComponent = class _NzAutocompleteOptgroupComponent {
  constructor() {
  }
};
_NzAutocompleteOptgroupComponent.ɵfac = function NzAutocompleteOptgroupComponent_Factory(t) {
  return new (t || _NzAutocompleteOptgroupComponent)();
};
_NzAutocompleteOptgroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAutocompleteOptgroupComponent,
  selectors: [["nz-auto-optgroup"]],
  inputs: {
    nzLabel: "nzLabel"
  },
  exportAs: ["nzAutoOptgroup"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 1,
  consts: [[1, "ant-select-item", "ant-select-item-group"], [4, "nzStringTemplateOutlet"]],
  template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c0);
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵelementEnd();
      ɵɵprojection(2);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzLabel);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzAutocompleteOptgroupComponent = _NzAutocompleteOptgroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptgroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-optgroup",
      exportAs: "nzAutoOptgroup",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NzOutletModule],
      template: `
    <div class="ant-select-item ant-select-item-group">
      <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
    </div>
    <ng-content select="nz-auto-option"></ng-content>
  `
    }]
  }], () => [], {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _NzAutocompleteOptionComponent = class _NzAutocompleteOptionComponent {
  constructor(ngZone, changeDetectorRef, element, nzAutocompleteOptgroupComponent) {
    this.ngZone = ngZone;
    this.changeDetectorRef = changeDetectorRef;
    this.element = element;
    this.nzAutocompleteOptgroupComponent = nzAutocompleteOptgroupComponent;
    this.nzDisabled = false;
    this.selectionChange = new EventEmitter();
    this.mouseEntered = new EventEmitter();
    this.active = false;
    this.selected = false;
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.element.nativeElement, "mouseenter").pipe(filter(() => this.mouseEntered.observers.length > 0), takeUntil(this.destroy$)).subscribe(() => {
        this.ngZone.run(() => this.mouseEntered.emit(this));
      });
      fromEvent(this.element.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => event.preventDefault());
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
  select(emit = true) {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
    if (emit) {
      this.emitSelectionChangeEvent();
    }
  }
  deselect() {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
    this.emitSelectionChangeEvent();
  }
  /** Git display label */
  getLabel() {
    return this.nzLabel || this.nzValue.toString();
  }
  /** Set active (only styles) */
  setActiveStyles() {
    if (!this.active) {
      this.active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  /** Unset active (only styles) */
  setInactiveStyles() {
    if (this.active) {
      this.active = false;
      this.changeDetectorRef.markForCheck();
    }
  }
  scrollIntoViewIfNeeded() {
    scrollIntoView(this.element.nativeElement);
  }
  selectViaInteraction() {
    if (!this.nzDisabled) {
      this.selected = !this.selected;
      if (this.selected) {
        this.setActiveStyles();
      } else {
        this.setInactiveStyles();
      }
      this.emitSelectionChangeEvent(true);
      this.changeDetectorRef.markForCheck();
    }
  }
  emitSelectionChangeEvent(isUserInput = false) {
    this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
  }
};
_NzAutocompleteOptionComponent.ɵfac = function NzAutocompleteOptionComponent_Factory(t) {
  return new (t || _NzAutocompleteOptionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzAutocompleteOptgroupComponent, 8));
};
_NzAutocompleteOptionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAutocompleteOptionComponent,
  selectors: [["nz-auto-option"]],
  hostAttrs: ["role", "menuitem", 1, "ant-select-item", "ant-select-item-option"],
  hostVars: 10,
  hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() {
        return ctx.selectViaInteraction();
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
      ɵɵclassProp("ant-select-item-option-grouped", ctx.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected", ctx.selected)("ant-select-item-option-active", ctx.active)("ant-select-item-option-disabled", ctx.nzDisabled);
    }
  },
  inputs: {
    nzValue: "nzValue",
    nzLabel: "nzLabel",
    nzDisabled: "nzDisabled"
  },
  outputs: {
    selectionChange: "selectionChange",
    mouseEntered: "mouseEntered"
  },
  exportAs: ["nzAutoOption"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-select-item-option-content"]],
  template: function NzAutocompleteOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzAutocompleteOptionComponent = _NzAutocompleteOptionComponent;
__decorate([InputBoolean()], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-option",
      exportAs: "nzAutoOption",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `
    <div class="ant-select-item-option-content">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        role: "menuitem",
        class: "ant-select-item ant-select-item-option",
        "[class.ant-select-item-option-grouped]": "nzAutocompleteOptgroupComponent",
        "[class.ant-select-item-option-selected]": "selected",
        "[class.ant-select-item-option-active]": "active",
        "[class.ant-select-item-option-disabled]": "nzDisabled",
        "[attr.aria-selected]": "selected.toString()",
        "[attr.aria-disabled]": "nzDisabled.toString()",
        "(click)": "selectViaInteraction()"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: NzAutocompleteOptgroupComponent,
    decorators: [{
      type: Optional
    }]
  }], {
    nzValue: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    mouseEntered: [{
      type: Output
    }]
  });
})();
var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
  multi: true
};
function getNzAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var _NzAutocompleteTriggerDirective = class _NzAutocompleteTriggerDirective {
  /** Current active option */
  get activeOption() {
    if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
      return this.nzAutocomplete.activeItem;
    } else {
      return null;
    }
  }
  constructor(ngZone, elementRef, overlay, viewContainerRef, nzInputGroupWhitSuffixOrPrefixDirective, document) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.nzInputGroupWhitSuffixOrPrefixDirective = nzInputGroupWhitSuffixOrPrefixDirective;
    this.document = document;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.panelOpen = false;
    this.destroy$ = new Subject();
    this.overlayRef = null;
    this.portal = null;
    this.previousValue = null;
  }
  ngAfterViewInit() {
    if (this.nzAutocomplete) {
      this.nzAutocomplete.animationStateChange.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.toState === "void") {
          if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
          }
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.destroyPanel();
  }
  writeValue(value) {
    this.ngZone.runOutsideAngular(() => Promise.resolve(null).then(() => this.setTriggerValue(value)));
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    const element = this.elementRef.nativeElement;
    element.disabled = isDisabled;
    this.closePanel();
  }
  openPanel() {
    this.previousValue = this.elementRef.nativeElement.value;
    this.attachOverlay();
    this.updateStatus();
  }
  closePanel() {
    if (this.panelOpen) {
      this.nzAutocomplete.isOpen = this.panelOpen = false;
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayOutsideClickSubscription.unsubscribe();
        this.optionsChangeSubscription.unsubscribe();
        this.portal = null;
      }
    }
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
    if (keyCode === ESCAPE) {
      event.preventDefault();
    }
    if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
      if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
        this.setTriggerValue(this.previousValue);
      }
      this.closePanel();
    } else if (this.panelOpen && keyCode === ENTER) {
      if (this.nzAutocomplete.showPanel) {
        event.preventDefault();
        if (this.activeOption) {
          this.activeOption.selectViaInteraction();
        } else {
          this.closePanel();
        }
      }
    } else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
      event.stopPropagation();
      event.preventDefault();
      if (keyCode === UP_ARROW) {
        this.nzAutocomplete.setPreviousItemActive();
      } else {
        this.nzAutocomplete.setNextItemActive();
      }
      if (this.activeOption) {
        this.activeOption.scrollIntoViewIfNeeded();
      }
      this.doBackfill();
    }
  }
  handleInput(event) {
    const target = event.target;
    const document = this.document;
    let value = target.value;
    if (target.type === "number") {
      value = value === "" ? null : parseFloat(value);
    }
    if (this.previousValue !== value) {
      this.previousValue = value;
      this.onChange(value);
      if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  handleFocus() {
    if (this.canOpen()) {
      this.openPanel();
    }
  }
  handleBlur() {
    this.onTouched();
  }
  /**
   * Subscription data source changes event
   */
  subscribeOptionsChange() {
    const optionChanges = this.nzAutocomplete.options.changes.pipe(tap(() => this.positionStrategy.reapplyLastPosition()), delay(0));
    return optionChanges.subscribe(() => {
      this.resetActiveItem();
      if (this.panelOpen) {
        this.overlayRef.updatePosition();
      }
    });
  }
  /**
   * Subscription option changes event and set the value
   */
  subscribeSelectionChange() {
    return this.nzAutocomplete.selectionChange.subscribe((option) => {
      this.setValueAndClose(option);
    });
  }
  subscribeOverlayOutsideClick() {
    return this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))).subscribe(() => {
      this.closePanel();
    });
  }
  attachOverlay() {
    if (!this.nzAutocomplete) {
      throw getNzAutocompleteMissingPanelError();
    }
    if (!this.portal && this.nzAutocomplete.template) {
      this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
    }
    if (!this.overlayRef) {
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.selectionChangeSubscription = this.subscribeSelectionChange();
      this.optionsChangeSubscription = this.subscribeOptionsChange();
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
      this.overlayRef.detachments().pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.closePanel();
      });
    }
    this.nzAutocomplete.isOpen = this.panelOpen = true;
  }
  updateStatus() {
    if (this.overlayRef) {
      this.overlayRef.updateSize({
        width: this.nzAutocomplete.nzWidth || this.getHostWidth()
      });
    }
    this.nzAutocomplete.setVisibility();
    this.resetActiveItem();
    if (this.activeOption) {
      this.activeOption.scrollIntoViewIfNeeded();
    }
  }
  destroyPanel() {
    if (this.overlayRef) {
      this.closePanel();
    }
  }
  getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      // default host element width
      width: this.nzAutocomplete.nzWidth || this.getHostWidth()
    });
  }
  getConnectedElement() {
    return this.nzInputGroupWhitSuffixOrPrefixDirective ? this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef : this.elementRef;
  }
  getHostWidth() {
    return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  getOverlayPosition() {
    const positions = [new ConnectionPositionPair({
      originX: "start",
      originY: "bottom"
    }, {
      overlayX: "start",
      overlayY: "top"
    }), new ConnectionPositionPair({
      originX: "start",
      originY: "top"
    }, {
      overlayX: "start",
      overlayY: "bottom"
    })];
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPositions(positions).withTransformOriginOn(".ant-select-dropdown");
    return this.positionStrategy;
  }
  resetActiveItem() {
    const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
    this.nzAutocomplete.clearSelectedOptions(null, true);
    if (index !== -1) {
      this.nzAutocomplete.setActiveItem(index);
      this.nzAutocomplete.activeItem.select(false);
    } else {
      this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
    }
  }
  setValueAndClose(option) {
    const value = option.nzValue;
    this.setTriggerValue(option.getLabel());
    this.onChange(value);
    this.elementRef.nativeElement.focus();
    this.closePanel();
  }
  setTriggerValue(value) {
    const option = this.nzAutocomplete.getOption(value);
    const displayValue = option ? option.getLabel() : value;
    this.elementRef.nativeElement.value = displayValue != null ? displayValue : "";
    if (!this.nzAutocomplete.nzBackfill) {
      this.previousValue = displayValue;
    }
  }
  doBackfill() {
    if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
      this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
    }
  }
  canOpen() {
    const element = this.elementRef.nativeElement;
    return !element.readOnly && !element.disabled;
  }
};
_NzAutocompleteTriggerDirective.ɵfac = function NzAutocompleteTriggerDirective_Factory(t) {
  return new (t || _NzAutocompleteTriggerDirective)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(NzInputGroupWhitSuffixOrPrefixDirective, 8), ɵɵdirectiveInject(DOCUMENT, 8));
};
_NzAutocompleteTriggerDirective.ɵdir = ɵɵdefineDirective({
  type: _NzAutocompleteTriggerDirective,
  selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]],
  hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"],
  hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() {
        return ctx.handleFocus();
      })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() {
        return ctx.handleBlur();
      })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      });
    }
  },
  inputs: {
    nzAutocomplete: "nzAutocomplete"
  },
  exportAs: ["nzAutocompleteTrigger"],
  standalone: true,
  features: [ɵɵProvidersFeature([NZ_AUTOCOMPLETE_VALUE_ACCESSOR])]
});
var NzAutocompleteTriggerDirective = _NzAutocompleteTriggerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteTriggerDirective, [{
    type: Directive,
    args: [{
      selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
      exportAs: "nzAutocompleteTrigger",
      providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
      standalone: true,
      host: {
        autocomplete: "off",
        "aria-autocomplete": "list",
        "(focusin)": "handleFocus()",
        "(blur)": "handleBlur()",
        "(input)": "handleInput($event)",
        "(keydown)": "handleKeydown($event)"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: NzInputGroupWhitSuffixOrPrefixDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    nzAutocomplete: [{
      type: Input
    }]
  });
})();
function normalizeDataSource(value) {
  return value?.map((item) => {
    if (typeof item === "number" || typeof item === "string") {
      return {
        label: item.toString(),
        value: item.toString()
      };
    }
    return item;
  });
}
var _NzAutocompleteComponent = class _NzAutocompleteComponent {
  /**
   * Options accessor, its source may be content or dataSource
   */
  get options() {
    if (this.nzDataSource) {
      return this.fromDataSourceOptions;
    } else {
      return this.fromContentOptions;
    }
  }
  constructor(changeDetectorRef, ngZone, directionality, noAnimation) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.nzDefaultActiveFirstOption = true;
    this.nzBackfill = false;
    this.compareWith = (o1, o2) => o1 === o2;
    this.selectionChange = new EventEmitter();
    this.showPanel = true;
    this.isOpen = false;
    this.activeItem = null;
    this.dir = "ltr";
    this.normalizedDataSource = [];
    this.destroy$ = new Subject();
    this.animationStateChange = new EventEmitter();
    this.activeItemIndex = -1;
    this.selectionChangeSubscription = Subscription.EMPTY;
    this.optionMouseEnterSubscription = Subscription.EMPTY;
    this.dataSourceChangeSubscription = Subscription.EMPTY;
    this.optionSelectionChanges = defer(() => {
      if (this.options) {
        return merge(...this.options.map((option) => option.selectionChange));
      }
      return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.optionSelectionChanges));
    });
    this.optionMouseEnter = defer(() => {
      if (this.options) {
        return merge(...this.options.map((option) => option.mouseEntered));
      }
      return this.ngZone.onStable.asObservable().pipe(take(1), switchMap(() => this.optionMouseEnter));
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.changeDetectorRef.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzDataSource
    } = changes;
    if (nzDataSource) {
      this.normalizedDataSource = normalizeDataSource(nzDataSource.currentValue);
    }
  }
  onAnimationEvent(event) {
    this.animationStateChange.emit(event);
  }
  ngAfterContentInit() {
    if (!this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngAfterViewInit() {
    if (this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngOnDestroy() {
    this.dataSourceChangeSubscription.unsubscribe();
    this.selectionChangeSubscription.unsubscribe();
    this.optionMouseEnterSubscription.unsubscribe();
    this.dataSourceChangeSubscription = this.selectionChangeSubscription = this.optionMouseEnterSubscription = null;
    this.destroy$.next();
    this.destroy$.complete();
  }
  setVisibility() {
    this.showPanel = !!this.options.length;
    this.changeDetectorRef.markForCheck();
  }
  setActiveItem(index) {
    const activeItem = this.options.get(index);
    if (activeItem && !activeItem.active) {
      this.activeItem = activeItem;
      this.activeItemIndex = index;
      this.clearSelectedOptions(this.activeItem);
      this.activeItem.setActiveStyles();
    } else {
      this.activeItem = null;
      this.activeItemIndex = -1;
      this.clearSelectedOptions();
    }
    this.changeDetectorRef.markForCheck();
  }
  setNextItemActive() {
    const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
    this.setActiveItem(nextIndex);
  }
  setPreviousItemActive() {
    const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
    this.setActiveItem(previousIndex);
  }
  getOptionIndex(value) {
    return this.options.reduce((result, current, index) => result === -1 ? this.compareWith(value, current.nzValue) ? index : -1 : result, -1);
  }
  getOption(value) {
    return this.options.find((item) => this.compareWith(value, item.nzValue)) || null;
  }
  optionsInit() {
    this.setVisibility();
    this.subscribeOptionChanges();
    const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
    this.dataSourceChangeSubscription = changes.subscribe((e) => {
      if (!e.dirty && this.isOpen) {
        setTimeout(() => this.setVisibility());
      }
      this.subscribeOptionChanges();
    });
  }
  /**
   * Clear the status of options
   */
  clearSelectedOptions(skip, deselect = false) {
    this.options.forEach((option) => {
      if (option !== skip) {
        if (deselect) {
          option.deselect();
        }
        option.setInactiveStyles();
      }
    });
  }
  subscribeOptionChanges() {
    this.selectionChangeSubscription.unsubscribe();
    this.selectionChangeSubscription = this.optionSelectionChanges.pipe(filter((event) => event.isUserInput)).subscribe((event) => {
      event.source.select();
      event.source.setActiveStyles();
      this.activeItem = event.source;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event.source, true);
      this.selectionChange.emit(event.source);
    });
    this.optionMouseEnterSubscription.unsubscribe();
    this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((event) => {
      event.setActiveStyles();
      this.activeItem = event;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event);
    });
  }
};
_NzAutocompleteComponent.ɵfac = function NzAutocompleteComponent_Factory(t) {
  return new (t || _NzAutocompleteComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzAutocompleteComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzAutocompleteComponent,
  selectors: [["nz-autocomplete"]],
  contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzAutocompleteOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromContentOptions = _t);
    }
  },
  viewQuery: function NzAutocompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(NzAutocompleteOptionComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fromDataSourceOptions = _t);
    }
  },
  inputs: {
    nzWidth: "nzWidth",
    nzOverlayClassName: "nzOverlayClassName",
    nzOverlayStyle: "nzOverlayStyle",
    nzDefaultActiveFirstOption: "nzDefaultActiveFirstOption",
    nzBackfill: "nzBackfill",
    compareWith: "compareWith",
    nzDataSource: "nzDataSource"
  },
  outputs: {
    selectionChange: "selectionChange"
  },
  exportAs: ["nzAutocomplete"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  consts: [[1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "ngClass", "ngStyle", "nzNoAnimation"], ["panel", ""], [2, "max-height", "256px", "overflow-y", "auto", "overflow-anchor", "none"], [2, "display", "flex", "flex-direction", "column"], [4, "ngTemplateOutlet"], ["contentTemplate", ""], ["optionsTemplate", ""], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]],
  template: function NzAutocompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
    }
  },
  dependencies: [NgClass, NgForOf, NgStyle, NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzAutocompleteComponent = _NzAutocompleteComponent;
__decorate([InputBoolean()], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
__decorate([InputBoolean()], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteComponent, [{
    type: Component,
    args: [{
      selector: "nz-autocomplete",
      exportAs: "nzAutocomplete",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [NgClass, NgForOf, NgStyle, NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
      template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [class.ant-select-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
      >
        <div style="max-height: 256px; overflow-y: auto; overflow-anchor: none;">
          <div style="display: flex; flex-direction: column;">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate"></ng-template>
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content></ng-content>
      </ng-template>
      <ng-template #optionsTemplate>
        <nz-auto-option *ngFor="let option of normalizedDataSource" [nzValue]="option.value" [nzLabel]="option.label">
          {{ option.label }}
        </nz-auto-option>
      </ng-template>
    </ng-template>
  `,
      animations: [slideMotion]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NgZone
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
    nzWidth: [{
      type: Input
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzDefaultActiveFirstOption: [{
      type: Input
    }],
    nzBackfill: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    nzDataSource: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    fromContentOptions: [{
      type: ContentChildren,
      args: [NzAutocompleteOptionComponent, {
        descendants: true
      }]
    }],
    fromDataSourceOptions: [{
      type: ViewChildren,
      args: [NzAutocompleteOptionComponent]
    }],
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: false
      }]
    }]
  });
})();
var _NzAutocompleteModule = class _NzAutocompleteModule {
};
_NzAutocompleteModule.ɵfac = function NzAutocompleteModule_Factory(t) {
  return new (t || _NzAutocompleteModule)();
};
_NzAutocompleteModule.ɵmod = ɵɵdefineNgModule({
  type: _NzAutocompleteModule,
  imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
  exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
});
_NzAutocompleteModule.ɵinj = ɵɵdefineInjector({
  imports: [NzAutocompleteOptgroupComponent]
});
var NzAutocompleteModule = _NzAutocompleteModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteModule, [{
    type: NgModule,
    args: [{
      exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
    }]
  }], null, null);
})();
export {
  NZ_AUTOCOMPLETE_VALUE_ACCESSOR,
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptgroupComponent,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective,
  NzOptionSelectionChange,
  getNzAutocompleteMissingPanelError
};
//# sourceMappingURL=ng-zorro-antd_auto-complete.js.map
