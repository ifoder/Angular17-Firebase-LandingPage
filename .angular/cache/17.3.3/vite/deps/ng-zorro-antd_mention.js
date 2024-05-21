import {
  NzEmbedEmptyComponent,
  NzEmptyModule
} from "./chunk-FLLAAANE.js";
import "./chunk-RCQ74I4I.js";
import "./chunk-7BZHZZSQ.js";
import {
  DEFAULT_MENTION_BOTTOM_POSITIONS,
  DEFAULT_MENTION_TOP_POSITIONS
} from "./chunk-CYLUOZYS.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-N7EO5KHK.js";
import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig
} from "./chunk-2WDYTXJ5.js";
import "./chunk-GWWQI25Q.js";
import {
  TemplatePortal
} from "./chunk-2CGA3OMX.js";
import {
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  TAB,
  UP_ARROW
} from "./chunk-27BDGVS6.js";
import "./chunk-I37PCP7C.js";
import {
  NzDestroyService
} from "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  getCaretCoordinates,
  getMentions,
  getStatusClassNames
} from "./chunk-A4L4YVTT.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-PA6IY4WI.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-M6FD3VIN.js";
import "./chunk-EIPRZNBF.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  DOCUMENT,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  forwardRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Observable,
  Subject,
  Subscription,
  distinctUntilChanged,
  fromEvent,
  map,
  merge,
  of,
  startWith,
  switchMap,
  takeUntil,
  withLatestFrom
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-mention.mjs
var _c0 = ["items"];
function NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c1 = (a0) => ({
  $implicit: a0
});
function NzMentionComponent_ng_template_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzMentionComponent_ng_template_1_For_3_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const suggestion_r5 = ɵɵnextContext().$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.suggestionTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c1, suggestion_r5));
  }
}
function NzMentionComponent_ng_template_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const suggestion_r5 = ɵɵnextContext().$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r12.nzValueWith(suggestion_r5), " ");
  }
}
function NzMentionComponent_ng_template_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 5, 6);
    ɵɵlistener("click", function NzMentionComponent_ng_template_1_For_3_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r17);
      const suggestion_r5 = restoredCtx.$implicit;
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.selectSuggestion(suggestion_r5));
    });
    ɵɵtemplate(2, NzMentionComponent_ng_template_1_For_3_Conditional_2_Template, 1, 4, "ng-container")(3, NzMentionComponent_ng_template_1_For_3_Conditional_3_Template, 1, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const $index_r6 = ctx.$index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("ant-mentions-dropdown-menu-item-active", $index_r6 === ctx_r3.activeIndex)("ant-mentions-dropdown-menu-item-selected", $index_r6 === ctx_r3.activeIndex);
    ɵɵadvance(2);
    ɵɵconditional(2, ctx_r3.suggestionTemplate ? 2 : 3);
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "span", 9);
    ɵɵelementEnd();
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵelement(1, "nz-embed-empty", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("specificContent", ctx_r19.nzNotFoundContent);
  }
}
function NzMentionComponent_ng_template_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵtemplate(1, NzMentionComponent_ng_template_1_Conditional_4_Conditional_1_Template, 2, 0, "span")(2, NzMentionComponent_ng_template_1_Conditional_4_Conditional_2_Template, 2, 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵconditional(1, ctx_r4.nzLoading ? 1 : 2);
  }
}
function NzMentionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "ul", 3);
    ɵɵrepeaterCreate(2, NzMentionComponent_ng_template_1_For_3_Template, 4, 5, "li", 11, ɵɵrepeaterTrackByIdentity);
    ɵɵtemplate(4, NzMentionComponent_ng_template_1_Conditional_4_Template, 3, 1, "li", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r0.filteredSuggestions);
    ɵɵadvance(2);
    ɵɵconditional(4, ctx_r0.filteredSuggestions.length === 0 ? 4 : -1);
  }
}
function NzMentionComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 12);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("status", ctx_r2.status);
  }
}
var _c2 = ["*"];
var _NzMentionSuggestionDirective = class _NzMentionSuggestionDirective {
};
_NzMentionSuggestionDirective.ɵfac = function NzMentionSuggestionDirective_Factory(t) {
  return new (t || _NzMentionSuggestionDirective)();
};
_NzMentionSuggestionDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMentionSuggestionDirective,
  selectors: [["", "nzMentionSuggestion", ""]],
  exportAs: ["nzMentionSuggestion"],
  standalone: true
});
var NzMentionSuggestionDirective = _NzMentionSuggestionDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionSuggestionDirective, [{
    type: Directive,
    args: [{
      selector: "[nzMentionSuggestion]",
      exportAs: "nzMentionSuggestion",
      standalone: true
    }]
  }], null, null);
})();
var NZ_MENTION_CONFIG = {
  split: " "
};
var _NzMentionService = class _NzMentionService {
  constructor() {
    this.triggerChange$ = new Subject();
  }
  triggerChanged() {
    return this.triggerChange$.asObservable();
  }
  registerTrigger(trigger) {
    if (this.trigger !== trigger) {
      this.trigger = trigger;
      this.triggerChange$.next(trigger);
    }
  }
  ngOnDestroy() {
    this.triggerChange$.complete();
  }
};
_NzMentionService.ɵfac = function NzMentionService_Factory(t) {
  return new (t || _NzMentionService)();
};
_NzMentionService.ɵprov = ɵɵdefineInjectable({
  token: _NzMentionService,
  factory: _NzMentionService.ɵfac
});
var NzMentionService = _NzMentionService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionService, [{
    type: Injectable
  }], null, null);
})();
var NZ_MENTION_TRIGGER_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NzMentionTriggerDirective),
  multi: true
};
var _NzMentionTriggerDirective = class _NzMentionTriggerDirective {
  constructor(el, ngZone, ref, destroy$, nzMentionService) {
    this.el = el;
    this.ngZone = ngZone;
    this.ref = ref;
    this.destroy$ = destroy$;
    this.nzMentionService = nzMentionService;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.onFocusin = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onInput = new EventEmitter();
    this.onKeydown = new EventEmitter();
    this.onClick = new EventEmitter();
  }
  completeEvents() {
    this.onFocusin.complete();
    this.onBlur.complete();
    this.onInput.complete();
    this.onKeydown.complete();
    this.onClick.complete();
  }
  focus(caretPos = null) {
    this.el.nativeElement.focus();
    this.el.nativeElement.setSelectionRange(caretPos, caretPos);
  }
  insertMention(mention) {
    const value = this.el.nativeElement.value;
    const insertValue = `${mention.mention}${NZ_MENTION_CONFIG.split}`;
    const newValue = [value.slice(0, mention.startPos + 1), insertValue, value.slice(mention.endPos, value.length)].join("");
    this.el.nativeElement.value = newValue;
    this.focus(mention.startPos + insertValue.length + 1);
    this.onChange(newValue);
    this.value = newValue;
  }
  writeValue(value) {
    this.value = value;
    if (typeof value === "string") {
      this.el.nativeElement.value = value;
    } else {
      this.el.nativeElement.value = "";
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  ngAfterViewInit() {
    this.nzMentionService.registerTrigger(this);
    this.setupEventListener("blur", this.onBlur);
    this.setupEventListener("focusin", this.onFocusin);
    this.setupEventListener("input", this.onInput, true);
    this.setupEventListener("click", this.onClick, true);
    this.setupEventListener("keydown", this.onKeydown, true);
  }
  ngOnDestroy() {
    this.completeEvents();
  }
  setupEventListener(eventName, eventEmitter, shouldPassEvent = false) {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.el.nativeElement, eventName).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (eventEmitter.observers.length) {
          this.ngZone.run(() => {
            eventEmitter.emit(shouldPassEvent ? event : void 0);
            this.ref.markForCheck();
          });
        }
      });
    });
  }
};
_NzMentionTriggerDirective.ɵfac = function NzMentionTriggerDirective_Factory(t) {
  return new (t || _NzMentionTriggerDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzMentionService));
};
_NzMentionTriggerDirective.ɵdir = ɵɵdefineDirective({
  type: _NzMentionTriggerDirective,
  selectors: [["input", "nzMentionTrigger", ""], ["textarea", "nzMentionTrigger", ""]],
  hostAttrs: ["autocomplete", "off"],
  outputs: {
    onFocusin: "onFocusin",
    onBlur: "onBlur",
    onInput: "onInput",
    onKeydown: "onKeydown",
    onClick: "onClick"
  },
  exportAs: ["nzMentionTrigger"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzDestroyService, NZ_MENTION_TRIGGER_ACCESSOR])]
});
var NzMentionTriggerDirective = _NzMentionTriggerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionTriggerDirective, [{
    type: Directive,
    args: [{
      selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]",
      exportAs: "nzMentionTrigger",
      providers: [NzDestroyService, NZ_MENTION_TRIGGER_ACCESSOR],
      host: {
        autocomplete: "off"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: NzMentionService
  }], {
    onFocusin: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var _NzMentionComponent = class _NzMentionComponent {
  set suggestionChild(value) {
    if (value) {
      this.suggestionTemplate = value;
    }
  }
  get triggerNativeElement() {
    return this.trigger.el.nativeElement;
  }
  get focusItemElement() {
    const itemArr = this.items?.toArray();
    if (itemArr && itemArr[this.activeIndex]) {
      return itemArr[this.activeIndex].nativeElement;
    }
    return null;
  }
  constructor(ngZone, ngDocument, directionality, cdr, overlay, viewContainerRef, elementRef, renderer, nzMentionService, destroy$, nzFormStatusService, nzFormNoStatusService) {
    this.ngZone = ngZone;
    this.ngDocument = ngDocument;
    this.directionality = directionality;
    this.cdr = cdr;
    this.overlay = overlay;
    this.viewContainerRef = viewContainerRef;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.nzMentionService = nzMentionService;
    this.destroy$ = destroy$;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this.nzValueWith = (value) => value;
    this.nzPrefix = "@";
    this.nzLoading = false;
    this.nzNotFoundContent = "无匹配结果，轻敲空格完成输入";
    this.nzPlacement = "bottom";
    this.nzSuggestions = [];
    this.nzStatus = "";
    this.nzOnSelect = new EventEmitter();
    this.nzOnSearchChange = new EventEmitter();
    this.isOpen = false;
    this.filteredSuggestions = [];
    this.suggestionTemplate = null;
    this.activeIndex = -1;
    this.dir = "ltr";
    this.prefixCls = "ant-mentions";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.previousValue = null;
    this.cursorMention = null;
    this.overlayRef = null;
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.nzMentionService.triggerChanged().subscribe((trigger) => {
      this.trigger = trigger;
      this.bindTriggerEvents();
      this.closeDropdown();
      this.overlayRef = null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      nzSuggestions,
      nzStatus
    } = changes;
    if (nzSuggestions) {
      if (this.isOpen) {
        this.previousValue = null;
        this.activeIndex = -1;
        this.resetDropdown(false);
      }
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  ngAfterViewInit() {
    this.items.changes.pipe(startWith(this.items), switchMap(() => {
      const items = this.items.toArray();
      return new Observable((subscriber) => this.ngZone.runOutsideAngular(() => merge(...items.map((item) => fromEvent(item.nativeElement, "mousedown"))).subscribe(subscriber)));
    })).subscribe((event) => {
      event.preventDefault();
    });
  }
  ngOnDestroy() {
    this.closeDropdown();
  }
  closeDropdown() {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.overlayOutsideClickSubscription.unsubscribe();
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }
  openDropdown() {
    this.attachOverlay();
    this.isOpen = true;
    this.cdr.markForCheck();
  }
  getMentions() {
    return this.trigger ? getMentions(this.trigger.value, this.nzPrefix) : [];
  }
  selectSuggestion(suggestion) {
    const value = this.nzValueWith(suggestion);
    this.trigger.insertMention({
      mention: value,
      startPos: this.cursorMentionStart,
      endPos: this.cursorMentionEnd
    });
    this.nzOnSelect.emit(suggestion);
    this.closeDropdown();
    this.activeIndex = -1;
  }
  handleInput(event) {
    const target = event.target;
    this.trigger.onChange(target.value);
    this.trigger.value = target.value;
    this.resetDropdown();
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
      this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
      event.preventDefault();
    } else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
      this.resetDropdown();
      event.stopPropagation();
    } else {
      if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
        this.closeDropdown();
        return;
      }
      if (this.isOpen && keyCode === UP_ARROW) {
        this.setPreviousItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
      if (this.isOpen && keyCode === DOWN_ARROW) {
        this.setNextItemActive();
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }
  handleClick() {
    this.resetDropdown();
  }
  bindTriggerEvents() {
    this.trigger.onInput.subscribe((e) => this.handleInput(e));
    this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
    this.trigger.onClick.subscribe(() => this.handleClick());
  }
  suggestionsFilter(value, emit) {
    const suggestions = value.substring(1);
    if (this.previousValue === value && value !== this.cursorMention[0]) {
      return;
    }
    this.previousValue = value;
    if (emit) {
      this.nzOnSearchChange.emit({
        value: this.cursorMention.substring(1),
        prefix: this.cursorMention[0]
      });
    }
    const searchValue = suggestions.toLowerCase();
    this.filteredSuggestions = this.nzSuggestions.filter((suggestion) => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
  }
  resetDropdown(emit = true) {
    this.resetCursorMention();
    if (typeof this.cursorMention !== "string" || !this.canOpen()) {
      this.closeDropdown();
      return;
    }
    this.suggestionsFilter(this.cursorMention, emit);
    const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
    this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
    this.openDropdown();
  }
  setNextItemActive() {
    this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1 ? this.activeIndex + 1 : 0;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  setPreviousItemActive() {
    this.activeIndex = this.activeIndex - 1 < 0 ? this.filteredSuggestions.length - 1 : this.activeIndex - 1;
    this.cdr.markForCheck();
    this.scrollToFocusItem();
  }
  scrollToFocusItem() {
    if (this.focusItemElement) {
      this.focusItemElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
  canOpen() {
    const element = this.triggerNativeElement;
    return !element.readOnly && !element.disabled;
  }
  resetCursorMention() {
    const value = this.triggerNativeElement.value.replace(/[\r\n]/g, NZ_MENTION_CONFIG.split) || "";
    const selectionStart = this.triggerNativeElement.selectionStart;
    const prefix = typeof this.nzPrefix === "string" ? [this.nzPrefix] : this.nzPrefix;
    let i = prefix.length;
    while (i >= 0) {
      const startPos = value.lastIndexOf(prefix[i], selectionStart);
      const endPos = value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) > -1 ? value.indexOf(NZ_MENTION_CONFIG.split, selectionStart) : value.length;
      const mention = value.substring(startPos, endPos);
      if (startPos > 0 && value[startPos - 1] !== NZ_MENTION_CONFIG.split || startPos < 0 || mention.includes(prefix[i], 1) || mention.includes(NZ_MENTION_CONFIG.split)) {
        this.cursorMention = null;
        this.cursorMentionStart = -1;
        this.cursorMentionEnd = -1;
      } else {
        this.cursorMention = mention;
        this.cursorMentionStart = startPos;
        this.cursorMentionEnd = endPos;
        return;
      }
      i--;
    }
  }
  updatePositions() {
    const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
    const top = coordinates.top - this.triggerNativeElement.getBoundingClientRect().height - this.triggerNativeElement.scrollTop + (this.nzPlacement === "bottom" ? coordinates.height - 6 : -6);
    const left = coordinates.left - this.triggerNativeElement.scrollLeft;
    this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
    if (this.nzPlacement === "bottom") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_BOTTOM_POSITIONS]);
    }
    if (this.nzPlacement === "top") {
      this.positionStrategy.withPositions([...DEFAULT_MENTION_TOP_POSITIONS]);
    }
    this.positionStrategy.apply();
  }
  subscribeOverlayOutsideClick() {
    const canCloseDropdown = (event) => {
      const clickTarget = event.target;
      return this.isOpen && clickTarget !== this.trigger.el.nativeElement && !this.overlayRef?.overlayElement.contains(clickTarget);
    };
    const subscription = new Subscription();
    subscription.add(this.overlayRef.outsidePointerEvents().subscribe((event) => canCloseDropdown(event) && this.closeDropdown()));
    subscription.add(this.ngZone.runOutsideAngular(() => fromEvent(this.ngDocument, "touchend").subscribe((event) => canCloseDropdown(event) && this.ngZone.run(() => this.closeDropdown()))));
    return subscription;
  }
  attachOverlay() {
    if (!this.overlayRef) {
      this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
      this.overlayRef = this.overlay.create(this.getOverlayConfig());
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
    }
    this.updatePositions();
  }
  getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      disposeOnNavigation: true
    });
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
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.trigger.el).withPositions(positions).withFlexibleDimensions(false).withPush(false);
    return this.positionStrategy;
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.elementRef.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, status2);
      }
    });
  }
};
_NzMentionComponent.ɵfac = function NzMentionComponent_Factory(t) {
  return new (t || _NzMentionComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(DOCUMENT, 8), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzMentionService), ɵɵdirectiveInject(NzDestroyService), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzMentionComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzMentionComponent,
  selectors: [["nz-mention"]],
  contentQueries: function NzMentionComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NzMentionSuggestionDirective, 5, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionChild = _t.first);
    }
  },
  viewQuery: function NzMentionComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 5);
      ɵɵviewQuery(_c0, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.suggestionsTemp = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  hostAttrs: [1, "ant-mentions"],
  hostVars: 2,
  hostBindings: function NzMentionComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-mentions-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzValueWith: "nzValueWith",
    nzPrefix: "nzPrefix",
    nzLoading: "nzLoading",
    nzNotFoundContent: "nzNotFoundContent",
    nzPlacement: "nzPlacement",
    nzSuggestions: "nzSuggestions",
    nzStatus: "nzStatus"
  },
  outputs: {
    nzOnSelect: "nzOnSelect",
    nzOnSearchChange: "nzOnSearchChange"
  },
  exportAs: ["nzMention"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzMentionService, NzDestroyService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 1,
  consts: [["suggestions", ""], ["class", "ant-mentions-suffix", 3, "status"], [1, "ant-mentions-dropdown"], ["role", "menu", "tabindex", "0", 1, "ant-mentions-dropdown-menu"], ["class", "ant-mentions-dropdown-menu-item ant-mentions-dropdown-menu-item-disabled"], ["role", "menuitem", "tabindex", "-1", 1, "ant-mentions-dropdown-menu-item", 3, "click"], ["items", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-mentions-dropdown-menu-item", "ant-mentions-dropdown-menu-item-disabled"], ["nz-icon", "", "nzType", "loading"], ["nzComponentName", "select", 3, "specificContent"], ["class", "ant-mentions-dropdown-menu-item", "role", "menuitem", "tabindex", "-1", 3, "ant-mentions-dropdown-menu-item-active", "ant-mentions-dropdown-menu-item-selected"], [1, "ant-mentions-suffix", 3, "status"]],
  template: function NzMentionComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, NzMentionComponent_ng_template_1_Template, 5, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NzMentionComponent_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 1);
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵconditional(3, ctx.hasFeedback && !!ctx.status ? 3 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective, NzEmptyModule, NzEmbedEmptyComponent, NzFormPatchModule, NzFormItemFeedbackIconComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzMentionComponent = _NzMentionComponent;
__decorate([InputBoolean()], NzMentionComponent.prototype, "nzLoading", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionComponent, [{
    type: Component,
    args: [{
      selector: "nz-mention",
      exportAs: "nzMention",
      template: `
    <ng-content></ng-content>
    <ng-template #suggestions>
      <div class="ant-mentions-dropdown">
        <ul class="ant-mentions-dropdown-menu" role="menu" tabindex="0">
          @for (suggestion of filteredSuggestions; track suggestion) {
            <li
              #items
              class="ant-mentions-dropdown-menu-item"
              role="menuitem"
              tabindex="-1"
              [class.ant-mentions-dropdown-menu-item-active]="$index === activeIndex"
              [class.ant-mentions-dropdown-menu-item-selected]="$index === activeIndex"
              (click)="selectSuggestion(suggestion)"
            >
              @if (suggestionTemplate) {
                <ng-container *ngTemplateOutlet="suggestionTemplate; context: { $implicit: suggestion }" />
              } @else {
                {{ nzValueWith(suggestion) }}
              }
            </li>
          }

          @if (filteredSuggestions.length === 0) {
            <li class="ant-mentions-dropdown-menu-item ant-mentions-dropdown-menu-item-disabled">
              @if (nzLoading) {
                <span><span nz-icon nzType="loading"></span></span>
              } @else {
                <span>
                  <nz-embed-empty nzComponentName="select" [specificContent]="nzNotFoundContent!" />
                </span>
              }
            </li>
          }
        </ul>
      </div>
    </ng-template>
    @if (hasFeedback && !!status) {
      <nz-form-item-feedback-icon class="ant-mentions-suffix" [status]="status" />
    }
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzMentionService, NzDestroyService],
      host: {
        class: "ant-mentions",
        "[class.ant-mentions-rtl]": `dir === 'rtl'`
      },
      imports: [NgTemplateOutlet, NzIconModule, NzEmptyModule, NzFormPatchModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: Overlay
  }, {
    type: ViewContainerRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: NzMentionService
  }, {
    type: NzDestroyService
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzValueWith: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSuggestions: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOnSelect: [{
      type: Output
    }],
    nzOnSearchChange: [{
      type: Output
    }],
    suggestionsTemp: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    items: [{
      type: ViewChildren,
      args: ["items", {
        read: ElementRef
      }]
    }],
    suggestionChild: [{
      type: ContentChild,
      args: [NzMentionSuggestionDirective, {
        static: false,
        read: TemplateRef
      }]
    }]
  });
})();
var COMPONENTS = [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective];
var _NzMentionModule = class _NzMentionModule {
};
_NzMentionModule.ɵfac = function NzMentionModule_Factory(t) {
  return new (t || _NzMentionModule)();
};
_NzMentionModule.ɵmod = ɵɵdefineNgModule({
  type: _NzMentionModule,
  imports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective],
  exports: [NzMentionComponent, NzMentionTriggerDirective, NzMentionSuggestionDirective]
});
_NzMentionModule.ɵinj = ɵɵdefineInjector({
  imports: [NzMentionComponent]
});
var NzMentionModule = _NzMentionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMentionModule, [{
    type: NgModule,
    args: [{
      imports: [...COMPONENTS],
      exports: [...COMPONENTS]
    }]
  }], null, null);
})();
export {
  NZ_MENTION_TRIGGER_ACCESSOR,
  NzMentionComponent,
  NzMentionModule,
  NzMentionService,
  NzMentionSuggestionDirective,
  NzMentionTriggerDirective
};
//# sourceMappingURL=ng-zorro-antd_mention.js.map
