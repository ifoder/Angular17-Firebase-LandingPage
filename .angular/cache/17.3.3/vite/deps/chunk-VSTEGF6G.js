import {
  DateHelperService,
  NzI18nModule,
  NzI18nPipe,
  NzI18nService
} from "./chunk-RCQ74I4I.js";
import {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService
} from "./chunk-N7EO5KHK.js";
import {
  NzConnectedOverlayDirective,
  NzOverlayModule
} from "./chunk-E4ULPRCK.js";
import {
  NzButtonComponent,
  NzButtonModule
} from "./chunk-T4KVFTV6.js";
import {
  NzTransitionPatchDirective
} from "./chunk-NPFQICFZ.js";
import {
  NzWaveDirective
} from "./chunk-UZPRKK5P.js";
import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule
} from "./chunk-3UTWO7T6.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  slideMotion
} from "./chunk-4YZFO5HL.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import {
  reqAnimFrame
} from "./chunk-4NQDKSHT.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  getStatusClassNames,
  isNil,
  isNotNil,
  warn
} from "./chunk-A4L4YVTT.js";
import {
  Platform
} from "./chunk-HH3PCEGU.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-M6FD3VIN.js";
import {
  isValid
} from "./chunk-EIPRZNBF.js";
import {
  AsyncPipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  takeUntil,
  withLatestFrom
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-time-picker.mjs
var _c0 = ["hourListElement"];
var _c1 = ["minuteListElement"];
var _c2 = ["secondListElement"];
var _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.dateHelper.format(ctx_r0.time == null ? null : ctx_r0.time.value, ctx_r0.format) || " ");
  }
}
function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r12);
      const hour_r8 = ɵɵnextContext().$implicit;
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.selectHour(hour_r8));
    });
    ɵɵelementStart(1, "div", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const hour_r8 = ɵɵnextContext().$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r9.isSelectedHour(hour_r8))("ant-picker-time-panel-cell-disabled", hour_r8.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, hour_r8.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_ul_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_ul_2_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const hour_r8 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r7.nzHideDisabledOptions && hour_r8.disabled));
  }
}
function NzTimePickerPanelComponent_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6, 7);
    ɵɵtemplate(2, NzTimePickerPanelComponent_ul_2_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.hourRange)("ngForTrackBy", ctx_r1.trackByFn);
  }
}
function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r20);
      const minute_r16 = ɵɵnextContext().$implicit;
      const ctx_r18 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r18.selectMinute(minute_r16));
    });
    ɵɵelementStart(1, "div", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const minute_r16 = ɵɵnextContext().$implicit;
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r17.isSelectedMinute(minute_r16))("ant-picker-time-panel-cell-disabled", minute_r16.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, minute_r16.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_ul_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_ul_3_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const minute_r16 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r15.nzHideDisabledOptions && minute_r16.disabled));
  }
}
function NzTimePickerPanelComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6, 12);
    ɵɵtemplate(2, NzTimePickerPanelComponent_ul_3_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.minuteRange)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r28);
      const second_r24 = ɵɵnextContext().$implicit;
      const ctx_r26 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r26.selectSecond(second_r24));
    });
    ɵɵelementStart(1, "div", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const second_r24 = ɵɵnextContext().$implicit;
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r25.isSelectedSecond(second_r24))("ant-picker-time-panel-cell-disabled", second_r24.disabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, second_r24.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_ul_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTimePickerPanelComponent_ul_4_ng_container_2_li_1_Template, 4, 8, "li", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const second_r24 = ctx.$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r23.nzHideDisabledOptions && second_r24.disabled));
  }
}
function NzTimePickerPanelComponent_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6, 13);
    ɵɵtemplate(2, NzTimePickerPanelComponent_ul_4_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r3.secondRange)("ngForTrackBy", ctx_r3.trackByFn);
  }
}
function NzTimePickerPanelComponent_ul_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 10);
    ɵɵlistener("click", function NzTimePickerPanelComponent_ul_5_ng_container_2_Template_li_click_1_listener() {
      const restoredCtx = ɵɵrestoreView(_r34);
      const range_r32 = restoredCtx.$implicit;
      const ctx_r33 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r33.select12Hours(range_r32));
    });
    ɵɵelementStart(2, "div", 11);
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const range_r32 = ctx.$implicit;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("ant-picker-time-panel-cell-selected", ctx_r31.isSelected12Hours(range_r32));
    ɵɵadvance(2);
    ɵɵtextInterpolate(range_r32.value);
  }
}
function NzTimePickerPanelComponent_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 6, 14);
    ɵɵtemplate(2, NzTimePickerPanelComponent_ul_5_ng_container_2_Template, 4, 3, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r4.use12HoursRange);
  }
}
function NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template(rf, ctx) {
}
function NzTimePickerPanelComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_div_1_ng_template_1_Template, 0, 0, "ng-template", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.nzAddOn);
  }
}
function NzTimePickerPanelComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, NzTimePickerPanelComponent_div_6_div_1_Template, 2, 1, "div", 17);
    ɵɵelementStart(2, "ul", 18)(3, "li", 19)(4, "a", 20);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_Template_a_click_4_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext();
      return ɵɵresetView(ctx_r37.onClickNow());
    });
    ɵɵtext(5);
    ɵɵpipe(6, "nzI18n");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "li", 21)(8, "button", 22);
    ɵɵlistener("click", function NzTimePickerPanelComponent_div_6_Template_button_click_8_listener() {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext();
      return ɵɵresetView(ctx_r39.onClickOk());
    });
    ɵɵtext(9);
    ɵɵpipe(10, "nzI18n");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.nzAddOn);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r5.nzNowText || ɵɵpipeBind1(6, 3, "Calendar.lang.now"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r5.nzOkText || ɵɵpipeBind1(10, 5, "Calendar.lang.ok"), " ");
  }
}
var _c4 = ["inputElement"];
function NzTimePickerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r5 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("nzType", suffixIcon_r5);
  }
}
function NzTimePickerComponent_nz_form_item_feedback_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-form-item-feedback-icon", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("status", ctx_r2.status);
  }
}
function NzTimePickerComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10);
    ɵɵlistener("click", function NzTimePickerComponent_span_7_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onClickClearBtn($event));
    });
    ɵɵelement(1, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("aria-label", ctx_r3.nzClearText)("title", ctx_r3.nzClearText);
  }
}
function NzTimePickerComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "nz-time-picker-panel", 15);
    ɵɵlistener("ngModelChange", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.value = $event);
    })("ngModelChange", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onPanelValueChange($event));
    })("closePanel", function NzTimePickerComponent_ng_template_8_Template_nz_time_picker_panel_closePanel_3_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.closePanel());
    });
    ɵɵpipe(4, "async");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("@slideMotion", "enter");
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ctx_r4.nzPopupClassName)("format", ctx_r4.nzFormat)("nzHourStep", ctx_r4.nzHourStep)("nzMinuteStep", ctx_r4.nzMinuteStep)("nzSecondStep", ctx_r4.nzSecondStep)("nzDisabledHours", ctx_r4.nzDisabledHours)("nzDisabledMinutes", ctx_r4.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.nzDisabledSeconds)("nzPlaceHolder", ctx_r4.nzPlaceHolder || ɵɵpipeBind1(4, 19, ctx_r4.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r4.nzHideDisabledOptions)("nzUse12Hours", ctx_r4.nzUse12Hours)("nzDefaultOpenValue", ctx_r4.nzDefaultOpenValue)("nzAddOn", ctx_r4.nzAddOn)("nzClearText", ctx_r4.nzClearText)("nzNowText", ctx_r4.nzNowText)("nzOkText", ctx_r4.nzOkText)("nzAllowEmpty", ctx_r4.nzAllowEmpty)("ngModel", ctx_r4.value);
  }
}
var TimeHolder = class {
  setMinutes(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setMinutes(value);
      this.update();
    }
    return this;
  }
  setHours(value, disabled) {
    if (!disabled) {
      this.initValue();
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && value !== 12) {
          this.value.setHours(value + 12);
        } else if (this.selected12Hours === "AM" && value === 12) {
          this.value.setHours(0);
        } else {
          this.value.setHours(value);
        }
      } else {
        this.value.setHours(value);
      }
      this.update();
    }
    return this;
  }
  setSeconds(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setSeconds(value);
      this.update();
    }
    return this;
  }
  setUse12Hours(value) {
    this._use12Hours = value;
    return this;
  }
  get changes() {
    return this._changes.asObservable();
  }
  setValue(value, use12Hours) {
    if (isNotNil(use12Hours)) {
      this._use12Hours = use12Hours;
    }
    if (value !== this.value) {
      this._value = value;
      if (isNotNil(this.value)) {
        if (this._use12Hours && isNotNil(this.hours)) {
          this.selected12Hours = this.hours >= 12 ? "PM" : "AM";
        }
      } else {
        this._clear();
      }
    }
    return this;
  }
  initValue() {
    if (isNil(this.value)) {
      this.setValue(/* @__PURE__ */ new Date(), this._use12Hours);
    }
  }
  clear() {
    this._clear();
    this.update();
  }
  get isEmpty() {
    return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
  }
  _clear() {
    this._value = void 0;
    this.selected12Hours = void 0;
  }
  update() {
    if (this.isEmpty) {
      this._value = void 0;
    } else {
      if (isNotNil(this.hours)) {
        this.value.setHours(this.hours);
      }
      if (isNotNil(this.minutes)) {
        this.value.setMinutes(this.minutes);
      }
      if (isNotNil(this.seconds)) {
        this.value.setSeconds(this.seconds);
      }
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && this.hours < 12) {
          this.value.setHours(this.hours + 12);
        }
        if (this.selected12Hours === "AM" && this.hours >= 12) {
          this.value.setHours(this.hours - 12);
        }
      }
    }
    this.changed();
  }
  changed() {
    this._changes.next(this.value);
  }
  /**
   * @description
   * UI view hours
   * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
   */
  get viewHours() {
    return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
  }
  setSelected12Hours(value) {
    if (value.toUpperCase() !== this.selected12Hours) {
      this.selected12Hours = value.toUpperCase();
      this.update();
    }
  }
  get value() {
    return this._value || this._defaultOpenValue;
  }
  get hours() {
    return this.value?.getHours();
  }
  get minutes() {
    return this.value?.getMinutes();
  }
  get seconds() {
    return this.value?.getSeconds();
  }
  setDefaultOpenValue(value) {
    this._defaultOpenValue = value;
    return this;
  }
  constructor() {
    this.selected12Hours = void 0;
    this._use12Hours = false;
    this._changes = new Subject();
  }
  calculateViewHour(value) {
    const selected12Hours = this.selected12Hours;
    if (selected12Hours === "PM" && value > 12) {
      return value - 12;
    }
    if (selected12Hours === "AM" && value === 0) {
      return 12;
    }
    return value;
  }
};
function makeRange(length, step = 1, start = 0) {
  return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
var _NzTimePickerPanelComponent = class _NzTimePickerPanelComponent {
  set nzAllowEmpty(value) {
    if (isNotNil(value)) {
      this._allowEmpty = value;
    }
  }
  get nzAllowEmpty() {
    return this._allowEmpty;
  }
  set nzDisabledHours(value) {
    this._disabledHours = value;
    if (this._disabledHours) {
      this.buildHours();
    }
  }
  get nzDisabledHours() {
    return this._disabledHours;
  }
  set nzDisabledMinutes(value) {
    if (isNotNil(value)) {
      this._disabledMinutes = value;
      this.buildMinutes();
    }
  }
  get nzDisabledMinutes() {
    return this._disabledMinutes;
  }
  set nzDisabledSeconds(value) {
    if (isNotNil(value)) {
      this._disabledSeconds = value;
      this.buildSeconds();
    }
  }
  get nzDisabledSeconds() {
    return this._disabledSeconds;
  }
  set format(value) {
    if (isNotNil(value)) {
      this._format = value;
      this.enabledColumns = 0;
      const charSet = new Set(value);
      this.hourEnabled = charSet.has("H") || charSet.has("h");
      this.minuteEnabled = charSet.has("m");
      this.secondEnabled = charSet.has("s");
      if (this.hourEnabled) {
        this.enabledColumns++;
      }
      if (this.minuteEnabled) {
        this.enabledColumns++;
      }
      if (this.secondEnabled) {
        this.enabledColumns++;
      }
      if (this.nzUse12Hours) {
        this.build12Hours();
      }
    }
  }
  get format() {
    return this._format;
  }
  set nzHourStep(value) {
    if (isNotNil(value)) {
      this._nzHourStep = value;
      this.buildHours();
    }
  }
  get nzHourStep() {
    return this._nzHourStep;
  }
  set nzMinuteStep(value) {
    if (isNotNil(value)) {
      this._nzMinuteStep = value;
      this.buildMinutes();
    }
  }
  get nzMinuteStep() {
    return this._nzMinuteStep;
  }
  set nzSecondStep(value) {
    if (isNotNil(value)) {
      this._nzSecondStep = value;
      this.buildSeconds();
    }
  }
  get nzSecondStep() {
    return this._nzSecondStep;
  }
  trackByFn(index) {
    return index;
  }
  buildHours() {
    let hourRanges = 24;
    let disabledHours = this.nzDisabledHours?.();
    let startIndex = 0;
    if (this.nzUse12Hours) {
      hourRanges = 12;
      if (disabledHours) {
        if (this.time.selected12Hours === "PM") {
          disabledHours = disabledHours.filter((i) => i >= 12).map((i) => i > 12 ? i - 12 : i);
        } else {
          disabledHours = disabledHours.filter((i) => i < 12 || i === 24).map((i) => i === 24 || i === 0 ? 12 : i);
        }
      }
      startIndex = 1;
    }
    this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((r) => ({
      index: r,
      disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
    }));
    if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
      const temp = [...this.hourRange];
      temp.unshift(temp[temp.length - 1]);
      temp.splice(temp.length - 1, 1);
      this.hourRange = temp;
    }
  }
  buildMinutes() {
    this.minuteRange = makeRange(60, this.nzMinuteStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
    }));
  }
  buildSeconds() {
    this.secondRange = makeRange(60, this.nzSecondStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
    }));
  }
  build12Hours() {
    const isUpperFormat = this._format.includes("A");
    this.use12HoursRange = [{
      index: 0,
      value: isUpperFormat ? "AM" : "am"
    }, {
      index: 1,
      value: isUpperFormat ? "PM" : "pm"
    }];
  }
  buildTimes() {
    this.buildHours();
    this.buildMinutes();
    this.buildSeconds();
    this.build12Hours();
  }
  scrollToTime(delay = 0) {
    if (this.hourEnabled && this.hourListElement) {
      this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, "hour");
    }
    if (this.minuteEnabled && this.minuteListElement) {
      this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, "minute");
    }
    if (this.secondEnabled && this.secondListElement) {
      this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, "second");
    }
    if (this.nzUse12Hours && this.use12HoursListElement) {
      const selectedHours = this.time.selected12Hours;
      const index = selectedHours === "AM" ? 0 : 1;
      this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, "12-hour");
    }
  }
  selectHour(hour) {
    this.time.setHours(hour.index, hour.disabled);
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds || this._disabledMinutes) {
      this.buildSeconds();
    }
  }
  selectMinute(minute) {
    this.time.setMinutes(minute.index, minute.disabled);
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  selectSecond(second) {
    this.time.setSeconds(second.index, second.disabled);
  }
  select12Hours(value) {
    this.time.setSelected12Hours(value.value);
    if (this._disabledHours) {
      this.buildHours();
    }
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  scrollToSelected(instance, index, duration = 0, unit) {
    if (!instance) {
      return;
    }
    const transIndex = this.translateIndex(index, unit);
    const currentOption = instance.children[transIndex] || instance.children[0];
    this.scrollTo(instance, currentOption.offsetTop, duration);
  }
  translateIndex(index, unit) {
    if (unit === "hour") {
      return this.calcIndex(this.nzDisabledHours?.(), this.hourRange.map((item) => item.index).indexOf(index));
    } else if (unit === "minute") {
      return this.calcIndex(this.nzDisabledMinutes?.(this.time.hours), this.minuteRange.map((item) => item.index).indexOf(index));
    } else if (unit === "second") {
      return this.calcIndex(this.nzDisabledSeconds?.(this.time.hours, this.time.minutes), this.secondRange.map((item) => item.index).indexOf(index));
    } else {
      return this.calcIndex([], this.use12HoursRange.map((item) => item.index).indexOf(index));
    }
  }
  scrollTo(element, to, duration) {
    if (duration <= 0) {
      element.scrollTop = to;
      return;
    }
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;
    this.ngZone.runOutsideAngular(() => {
      reqAnimFrame(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
          return;
        }
        this.scrollTo(element, to, duration - 10);
      });
    });
  }
  calcIndex(array, index) {
    if (array?.length && this.nzHideDisabledOptions) {
      return index - array.reduce((pre, value) => pre + (value < index ? 1 : 0), 0);
    } else {
      return index;
    }
  }
  changed() {
    if (this.onChange) {
      this.onChange(this.time.value);
    }
  }
  touched() {
    if (this.onTouch) {
      this.onTouch();
    }
  }
  timeDisabled(value) {
    const hour = value.getHours();
    const minute = value.getMinutes();
    const second = value.getSeconds();
    return (this.nzDisabledHours?.().indexOf(hour) ?? -1) > -1 || (this.nzDisabledMinutes?.(hour).indexOf(minute) ?? -1) > -1 || (this.nzDisabledSeconds?.(hour, minute).indexOf(second) ?? -1) > -1;
  }
  onClickNow() {
    const now = /* @__PURE__ */ new Date();
    if (this.timeDisabled(now)) {
      return;
    }
    this.time.setValue(now);
    this.changed();
    this.closePanel.emit();
  }
  onClickOk() {
    this.time.setValue(this.time.value, this.nzUse12Hours);
    this.changed();
    this.closePanel.emit();
  }
  isSelectedHour(hour) {
    return hour.index === this.time.viewHours;
  }
  isSelectedMinute(minute) {
    return minute.index === this.time.minutes;
  }
  isSelectedSecond(second) {
    return second.index === this.time.seconds;
  }
  isSelected12Hours(value) {
    return value.value.toUpperCase() === this.time.selected12Hours;
  }
  constructor(ngZone, cdr, dateHelper, elementRef) {
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.dateHelper = dateHelper;
    this.elementRef = elementRef;
    this._nzHourStep = 1;
    this._nzMinuteStep = 1;
    this._nzSecondStep = 1;
    this.unsubscribe$ = new Subject();
    this._format = "HH:mm:ss";
    this._disabledHours = () => [];
    this._disabledMinutes = () => [];
    this._disabledSeconds = () => [];
    this._allowEmpty = true;
    this.time = new TimeHolder();
    this.hourEnabled = true;
    this.minuteEnabled = true;
    this.secondEnabled = true;
    this.firstScrolled = false;
    this.enabledColumns = 3;
    this.nzInDatePicker = false;
    this.nzHideDisabledOptions = false;
    this.nzUse12Hours = false;
    this.closePanel = new EventEmitter();
  }
  ngOnInit() {
    this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.changed();
      this.touched();
      this.scrollToTime(120);
    });
    this.buildTimes();
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.scrollToTime();
        this.firstScrolled = true;
      });
      fromEvent(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
        event.preventDefault();
      });
    });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzUse12Hours,
      nzDefaultOpenValue
    } = changes;
    if (!nzUse12Hours?.previousValue && nzUse12Hours?.currentValue) {
      this.build12Hours();
      this.enabledColumns++;
    }
    if (nzDefaultOpenValue?.currentValue) {
      this.time.setDefaultOpenValue(this.nzDefaultOpenValue || /* @__PURE__ */ new Date());
    }
  }
  writeValue(value) {
    this.time.setValue(value, this.nzUse12Hours);
    this.buildTimes();
    if (value && this.firstScrolled) {
      this.scrollToTime(120);
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
};
_NzTimePickerPanelComponent.ɵfac = function NzTimePickerPanelComponent_Factory(t) {
  return new (t || _NzTimePickerPanelComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(ElementRef));
};
_NzTimePickerPanelComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTimePickerPanelComponent,
  selectors: [["nz-time-picker-panel"]],
  viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.hourListElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minuteListElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.secondListElement = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.use12HoursListElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-picker-time-panel"],
  hostVars: 12,
  hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
    }
  },
  inputs: {
    nzInDatePicker: "nzInDatePicker",
    nzAddOn: "nzAddOn",
    nzHideDisabledOptions: "nzHideDisabledOptions",
    nzClearText: "nzClearText",
    nzNowText: "nzNowText",
    nzOkText: "nzOkText",
    nzPlaceHolder: "nzPlaceHolder",
    nzUse12Hours: "nzUse12Hours",
    nzDefaultOpenValue: "nzDefaultOpenValue",
    nzAllowEmpty: "nzAllowEmpty",
    nzDisabledHours: "nzDisabledHours",
    nzDisabledMinutes: "nzDisabledMinutes",
    nzDisabledSeconds: "nzDisabledSeconds",
    format: "format",
    nzHourStep: "nzHourStep",
    nzMinuteStep: "nzMinuteStep",
    nzSecondStep: "nzSecondStep"
  },
  outputs: {
    closePanel: "closePanel"
  },
  exportAs: ["nzTimePickerPanel"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NzTimePickerPanelComponent,
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 7,
  vars: 6,
  consts: [["class", "ant-picker-header", 4, "ngIf"], [1, "ant-picker-content"], ["class", "ant-picker-time-panel-column", "style", "position: relative;", 4, "ngIf"], ["class", "ant-picker-footer", 4, "ngIf"], [1, "ant-picker-header"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], ["hourListElement", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled", "click", 4, "ngIf"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [4, "ngFor", "ngForOf"], [1, "ant-picker-footer"], ["class", "ant-picker-footer-extra", 4, "ngIf"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [1, "ant-picker-footer-extra"], [3, "ngTemplateOutlet"]],
  template: function NzTimePickerPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTimePickerPanelComponent_div_0_Template, 3, 1, "div", 0);
      ɵɵelementStart(1, "div", 1);
      ɵɵtemplate(2, NzTimePickerPanelComponent_ul_2_Template, 3, 2, "ul", 2)(3, NzTimePickerPanelComponent_ul_3_Template, 3, 2, "ul", 2)(4, NzTimePickerPanelComponent_ul_4_Template, 3, 2, "ul", 2)(5, NzTimePickerPanelComponent_ul_5_Template, 3, 1, "ul", 2);
      ɵɵelementEnd();
      ɵɵtemplate(6, NzTimePickerPanelComponent_div_6_Template, 11, 7, "div", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.nzInDatePicker);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hourEnabled);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.minuteEnabled);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.secondEnabled);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzUse12Hours);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.nzInDatePicker);
    }
  },
  dependencies: [NgIf, NgForOf, DecimalPipe, NgTemplateOutlet, NzI18nModule, NzI18nPipe, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTimePickerPanelComponent = _NzTimePickerPanelComponent;
__decorate([InputBoolean()], NzTimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerPanelComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-time-picker-panel",
      exportAs: "nzTimePickerPanel",
      template: `
    <div *ngIf="nzInDatePicker" class="ant-picker-header">
      <div class="ant-picker-header-view">{{ dateHelper.format($any(time?.value), format) || '&nbsp;' }}</div>
    </div>
    <div class="ant-picker-content">
      <ul *ngIf="hourEnabled" #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let hour of hourRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && hour.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectHour(hour)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
            [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="minuteEnabled" #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let minute of minuteRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && minute.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectMinute(minute)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
            [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="secondEnabled" #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let second of secondRange; trackBy: trackByFn">
          <li
            *ngIf="!(nzHideDisabledOptions && second.disabled)"
            class="ant-picker-time-panel-cell"
            (click)="selectSecond(second)"
            [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
            [class.ant-picker-time-panel-cell-disabled]="second.disabled"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
          </li>
        </ng-container>
      </ul>
      <ul *ngIf="nzUse12Hours" #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
        <ng-container *ngFor="let range of use12HoursRange">
          <li
            (click)="select12Hours(range)"
            class="ant-picker-time-panel-cell"
            [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
          >
            <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
          </li>
        </ng-container>
      </ul>
    </div>
    <div *ngIf="!nzInDatePicker" class="ant-picker-footer">
      <div *ngIf="nzAddOn" class="ant-picker-footer-extra">
        <ng-template [ngTemplateOutlet]="nzAddOn"></ng-template>
      </div>
      <ul class="ant-picker-ranges">
        <li class="ant-picker-now">
          <a (click)="onClickNow()">
            {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}
          </a>
        </li>
        <li class="ant-picker-ok">
          <button nz-button type="button" nzSize="small" nzType="primary" (click)="onClickOk()">
            {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}
          </button>
        </li>
      </ul>
    </div>
  `,
      host: {
        class: "ant-picker-time-panel",
        "[class.ant-picker-time-panel-column-0]": `enabledColumns === 0 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-1]": `enabledColumns === 1 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-2]": `enabledColumns === 2 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-3]": `enabledColumns === 3 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-narrow]": `enabledColumns < 3`,
        "[class.ant-picker-time-panel-placement-bottomLeft]": `!nzInDatePicker`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NzTimePickerPanelComponent,
        multi: true
      }],
      imports: [NgIf, NgForOf, DecimalPipe, NgTemplateOutlet, NzI18nModule, NzButtonModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateHelperService
  }, {
    type: ElementRef
  }], {
    hourListElement: [{
      type: ViewChild,
      args: ["hourListElement", {
        static: false
      }]
    }],
    minuteListElement: [{
      type: ViewChild,
      args: ["minuteListElement", {
        static: false
      }]
    }],
    secondListElement: [{
      type: ViewChild,
      args: ["secondListElement", {
        static: false
      }]
    }],
    use12HoursListElement: [{
      type: ViewChild,
      args: ["use12HoursListElement", {
        static: false
      }]
    }],
    nzInDatePicker: [{
      type: Input
    }],
    nzAddOn: [{
      type: Input
    }],
    nzHideDisabledOptions: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    closePanel: [{
      type: Output
    }],
    nzAllowEmpty: [{
      type: Input
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input
    }],
    nzMinuteStep: [{
      type: Input
    }],
    nzSecondStep: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "timePicker";
var _NzTimePickerComponent = class _NzTimePickerComponent {
  emitValue(value) {
    this.setValue(value, true);
    if (this._onChange) {
      this._onChange(this.value);
    }
    if (this._onTouched) {
      this._onTouched();
    }
  }
  setValue(value, syncPreValue = false) {
    if (syncPreValue) {
      this.preValue = isValid(value) ? new Date(value) : null;
    }
    this.value = isValid(value) ? new Date(value) : null;
    this.inputValue = this.dateHelper.format(value, this.nzFormat);
    this.cdr.markForCheck();
  }
  open() {
    if (this.nzDisabled || this.nzOpen) {
      return;
    }
    this.focus();
    this.nzOpen = true;
    this.nzOpenChange.emit(this.nzOpen);
  }
  close() {
    this.nzOpen = false;
    this.cdr.markForCheck();
    this.nzOpenChange.emit(this.nzOpen);
  }
  updateAutoFocus() {
    if (this.isInit && !this.nzDisabled) {
      if (this.nzAutoFocus) {
        this.renderer.setAttribute(this.inputRef.nativeElement, "autofocus", "autofocus");
      } else {
        this.renderer.removeAttribute(this.inputRef.nativeElement, "autofocus");
      }
    }
  }
  onClickClearBtn(event) {
    event.stopPropagation();
    this.emitValue(null);
  }
  onClickOutside(event) {
    if (!this.element.nativeElement.contains(event.target)) {
      this.setCurrentValueAndClose();
    }
  }
  onFocus(value) {
    this.focused = value;
    if (!value) {
      if (this.checkTimeValid(this.value)) {
        this.setCurrentValueAndClose();
      } else {
        this.setValue(this.preValue);
        this.close();
      }
    }
  }
  focus() {
    if (this.inputRef.nativeElement) {
      this.inputRef.nativeElement.focus();
    }
  }
  blur() {
    if (this.inputRef.nativeElement) {
      this.inputRef.nativeElement.blur();
    }
  }
  onKeyupEsc() {
    this.setValue(this.preValue);
  }
  onKeyupEnter() {
    if (this.nzOpen && isValid(this.value)) {
      this.setCurrentValueAndClose();
    } else if (!this.nzOpen) {
      this.open();
    }
  }
  onInputChange(str) {
    if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
      this.open();
      this.parseTimeString(str);
    }
  }
  onPanelValueChange(value) {
    this.setValue(value);
    this.focus();
  }
  closePanel() {
    this.inputRef.nativeElement.blur();
  }
  setCurrentValueAndClose() {
    this.emitValue(this.value);
    this.close();
  }
  constructor(nzConfigService, i18n, element, renderer, cdr, dateHelper, platform, directionality, nzFormStatusService, nzFormNoStatusService) {
    this.nzConfigService = nzConfigService;
    this.i18n = i18n;
    this.element = element;
    this.renderer = renderer;
    this.cdr = cdr;
    this.dateHelper = dateHelper;
    this.platform = platform;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.isInit = false;
    this.focused = false;
    this.inputValue = "";
    this.value = null;
    this.preValue = null;
    this.i18nPlaceHolder$ = of(void 0);
    this.overlayPositions = [{
      offsetY: 3,
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      offsetY: -3,
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom"
    }, {
      offsetY: 3,
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }, {
      offsetY: -3,
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom"
    }];
    this.dir = "ltr";
    this.prefixCls = "ant-picker";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
    this.nzId = null;
    this.nzSize = null;
    this.nzStatus = "";
    this.nzHourStep = 1;
    this.nzMinuteStep = 1;
    this.nzSecondStep = 1;
    this.nzClearText = "clear";
    this.nzNowText = "";
    this.nzOkText = "";
    this.nzPopupClassName = "";
    this.nzPlaceHolder = "";
    this.nzFormat = "HH:mm:ss";
    this.nzOpen = false;
    this.nzUse12Hours = false;
    this.nzSuffixIcon = "clock-circle";
    this.nzOpenChange = new EventEmitter();
    this.nzHideDisabledOptions = false;
    this.nzAllowEmpty = true;
    this.nzDisabled = false;
    this.nzAutoFocus = false;
    this.nzBackdrop = false;
    this.nzBorderless = false;
    this.nzInputReadOnly = false;
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
    this.inputSize = Math.max(8, this.nzFormat.length) + 2;
    this.origin = new CdkOverlayOrigin(this.element);
    this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngOnChanges(changes) {
    const {
      nzUse12Hours,
      nzFormat,
      nzDisabled,
      nzAutoFocus,
      nzStatus
    } = changes;
    if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
      this.nzFormat = "h:mm:ss a";
    }
    if (nzDisabled) {
      const value = nzDisabled.currentValue;
      const input = this.inputRef.nativeElement;
      if (value) {
        this.renderer.setAttribute(input, "disabled", "");
      } else {
        this.renderer.removeAttribute(input, "disabled");
      }
    }
    if (nzAutoFocus) {
      this.updateAutoFocus();
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
  }
  parseTimeString(str) {
    const value = this.dateHelper.parseTime(str, this.nzFormat) || null;
    if (isValid(value)) {
      this.value = value;
      this.cdr.markForCheck();
    }
  }
  ngAfterViewInit() {
    this.isInit = true;
    this.updateAutoFocus();
  }
  writeValue(time) {
    let result;
    if (time instanceof Date) {
      result = time;
    } else if (isNil(time)) {
      result = null;
    } else {
      warn('Non-Date type is not recommended for time-picker, use "Date" type.');
      result = new Date(time);
    }
    this.setValue(result, true);
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  checkTimeValid(value) {
    if (!value) {
      return true;
    }
    const disabledHours = this.nzDisabledHours?.();
    const disabledMinutes = this.nzDisabledMinutes?.(value.getHours());
    const disabledSeconds = this.nzDisabledSeconds?.(value.getHours(), value.getMinutes());
    return !(disabledHours?.includes(value.getHours()) || disabledMinutes?.includes(value.getMinutes()) || disabledSeconds?.includes(value.getSeconds()));
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.element.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.element.nativeElement, status2);
      }
    });
  }
};
_NzTimePickerComponent.ɵfac = function NzTimePickerComponent_Factory(t) {
  return new (t || _NzTimePickerComponent)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(NzI18nService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DateHelperService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8), ɵɵdirectiveInject(NzFormNoStatusService, 8));
};
_NzTimePickerComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTimePickerComponent,
  selectors: [["nz-time-picker"]],
  viewQuery: function NzTimePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c4, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputRef = _t.first);
    }
  },
  hostAttrs: [1, "ant-picker"],
  hostVars: 12,
  hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function NzTimePickerComponent_click_HostBindingHandler() {
        return ctx.open();
      });
    }
    if (rf & 2) {
      ɵɵclassProp("ant-picker-large", ctx.nzSize === "large")("ant-picker-small", ctx.nzSize === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir === "rtl")("ant-picker-borderless", ctx.nzBorderless);
    }
  },
  inputs: {
    nzId: "nzId",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzHourStep: "nzHourStep",
    nzMinuteStep: "nzMinuteStep",
    nzSecondStep: "nzSecondStep",
    nzClearText: "nzClearText",
    nzNowText: "nzNowText",
    nzOkText: "nzOkText",
    nzPopupClassName: "nzPopupClassName",
    nzPlaceHolder: "nzPlaceHolder",
    nzAddOn: "nzAddOn",
    nzDefaultOpenValue: "nzDefaultOpenValue",
    nzDisabledHours: "nzDisabledHours",
    nzDisabledMinutes: "nzDisabledMinutes",
    nzDisabledSeconds: "nzDisabledSeconds",
    nzFormat: "nzFormat",
    nzOpen: "nzOpen",
    nzUse12Hours: "nzUse12Hours",
    nzSuffixIcon: "nzSuffixIcon",
    nzHideDisabledOptions: "nzHideDisabledOptions",
    nzAllowEmpty: "nzAllowEmpty",
    nzDisabled: "nzDisabled",
    nzAutoFocus: "nzAutoFocus",
    nzBackdrop: "nzBackdrop",
    nzBorderless: "nzBorderless",
    nzInputReadOnly: "nzInputReadOnly"
  },
  outputs: {
    nzOpenChange: "nzOpenChange"
  },
  exportAs: ["nzTimePicker"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: _NzTimePickerComponent,
    multi: true
  }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 16,
  consts: [[1, "ant-picker-input"], ["type", "text", "autocomplete", "off", 3, "size", "placeholder", "ngModel", "disabled", "readOnly", "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape"], ["inputElement", ""], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], [3, "status", 4, "ngIf"], ["class", "ant-picker-clear", 3, "click", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn", "detach", "overlayOutsideClick"], ["nz-icon", "", 3, "nzType"], [3, "status"], [1, "ant-picker-clear", 3, "click"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill"], [1, "ant-picker-dropdown", 2, "position", "relative"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngClass", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel", "ngModelChange", "closePanel"]],
  template: function NzTimePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "input", 1, 2);
      ɵɵlistener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.inputValue = $event;
      })("focus", function NzTimePickerComponent_Template_input_focus_1_listener() {
        return ctx.onFocus(true);
      })("blur", function NzTimePickerComponent_Template_input_blur_1_listener() {
        return ctx.onFocus(false);
      })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_1_listener() {
        return ctx.onKeyupEnter();
      })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_1_listener() {
        return ctx.onKeyupEsc();
      })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.onInputChange($event);
      });
      ɵɵpipe(3, "async");
      ɵɵelementEnd();
      ɵɵelementStart(4, "span", 3);
      ɵɵtemplate(5, NzTimePickerComponent_ng_container_5_Template, 2, 1, "ng-container", 4)(6, NzTimePickerComponent_nz_form_item_feedback_icon_6_Template, 1, 1, "nz-form-item-feedback-icon", 5);
      ɵɵelementEnd();
      ɵɵtemplate(7, NzTimePickerComponent_span_7_Template, 2, 2, "span", 6);
      ɵɵelementEnd();
      ɵɵtemplate(8, NzTimePickerComponent_ng_template_8_Template, 5, 21, "ng-template", 7);
      ɵɵlistener("detach", function NzTimePickerComponent_Template_ng_template_detach_8_listener() {
        return ctx.close();
      })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_8_listener($event) {
        return ctx.onClickOutside($event);
      });
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || ɵɵpipeBind1(3, 14, ctx.i18nPlaceHolder$))("ngModel", ctx.inputValue)("disabled", ctx.nzDisabled)("readOnly", ctx.nzInputReadOnly);
      ɵɵattribute("id", ctx.nzId);
      ɵɵadvance(4);
      ɵɵproperty("nzStringTemplateOutlet", ctx.nzSuffixIcon);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.hasFeedback && !!ctx.status);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value);
      ɵɵadvance(1);
      ɵɵproperty("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions)("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown");
    }
  },
  dependencies: [AsyncPipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzFormPatchModule, NzFormItemFeedbackIconComponent, NgIf, NzTimePickerPanelComponent, NgClass, NzOverlayModule, NzConnectedOverlayDirective, OverlayModule, CdkConnectedOverlay],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzTimePickerComponent = _NzTimePickerComponent;
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzHourStep", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzMinuteStep", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzSecondStep", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzClearText", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzNowText", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzOkText", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzPopupClassName", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzFormat", void 0);
__decorate([WithConfig(), InputBoolean()], NzTimePickerComponent.prototype, "nzUse12Hours", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzSuffixIcon", void 0);
__decorate([InputBoolean()], NzTimePickerComponent.prototype, "nzHideDisabledOptions", void 0);
__decorate([WithConfig(), InputBoolean()], NzTimePickerComponent.prototype, "nzAllowEmpty", void 0);
__decorate([InputBoolean()], NzTimePickerComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzTimePickerComponent.prototype, "nzAutoFocus", void 0);
__decorate([WithConfig()], NzTimePickerComponent.prototype, "nzBackdrop", void 0);
__decorate([InputBoolean()], NzTimePickerComponent.prototype, "nzBorderless", void 0);
__decorate([InputBoolean()], NzTimePickerComponent.prototype, "nzInputReadOnly", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "nz-time-picker",
      exportAs: "nzTimePicker",
      template: `
    <div class="ant-picker-input">
      <input
        #inputElement
        [attr.id]="nzId"
        type="text"
        [size]="inputSize"
        autocomplete="off"
        [placeholder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
        [(ngModel)]="inputValue"
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        (focus)="onFocus(true)"
        (blur)="onFocus(false)"
        (keyup.enter)="onKeyupEnter()"
        (keyup.escape)="onKeyupEsc()"
        (ngModelChange)="onInputChange($event)"
      />
      <span class="ant-picker-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <span nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
        <nz-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></nz-form-item-feedback-icon>
      </span>
      <span *ngIf="nzAllowEmpty && !nzDisabled && value" class="ant-picker-clear" (click)="onClickClearBtn($event)">
        <span
          nz-icon
          nzType="close-circle"
          nzTheme="fill"
          [attr.aria-label]="nzClearText"
          [attr.title]="nzClearText"
        ></span>
      </span>
    </div>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayPositions]="overlayPositions"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-picker-dropdown'"
      (detach)="close()"
      (overlayOutsideClick)="onClickOutside($event)"
    >
      <div [@slideMotion]="'enter'" class="ant-picker-dropdown" style="position: relative">
        <div class="ant-picker-panel-container">
          <div tabindex="-1" class="ant-picker-panel">
            <nz-time-picker-panel
              [ngClass]="nzPopupClassName"
              [format]="nzFormat"
              [nzHourStep]="nzHourStep"
              [nzMinuteStep]="nzMinuteStep"
              [nzSecondStep]="nzSecondStep"
              [nzDisabledHours]="nzDisabledHours"
              [nzDisabledMinutes]="nzDisabledMinutes"
              [nzDisabledSeconds]="nzDisabledSeconds"
              [nzPlaceHolder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
              [nzHideDisabledOptions]="nzHideDisabledOptions"
              [nzUse12Hours]="nzUse12Hours"
              [nzDefaultOpenValue]="nzDefaultOpenValue"
              [nzAddOn]="nzAddOn"
              [nzClearText]="nzClearText"
              [nzNowText]="nzNowText"
              [nzOkText]="nzOkText"
              [nzAllowEmpty]="nzAllowEmpty"
              [(ngModel)]="value"
              (ngModelChange)="onPanelValueChange($event)"
              (closePanel)="closePanel()"
            ></nz-time-picker-panel>
          </div>
        </div>
      </div>
    </ng-template>
  `,
      host: {
        class: "ant-picker",
        "[class.ant-picker-large]": `nzSize === 'large'`,
        "[class.ant-picker-small]": `nzSize === 'small'`,
        "[class.ant-picker-disabled]": `nzDisabled`,
        "[class.ant-picker-focused]": `focused`,
        "[class.ant-picker-rtl]": `dir === 'rtl'`,
        "[class.ant-picker-borderless]": `nzBorderless`,
        "(click)": "open()"
      },
      animations: [slideMotion],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NzTimePickerComponent,
        multi: true
      }],
      imports: [AsyncPipe, FormsModule, NzOutletModule, NzIconModule, NzFormPatchModule, NgIf, NzTimePickerPanelComponent, NgClass, NzOverlayModule, OverlayModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NzI18nService
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: DateHelperService
  }, {
    type: Platform
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
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
    inputRef: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input
    }],
    nzMinuteStep: [{
      type: Input
    }],
    nzSecondStep: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPopupClassName: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzAddOn: [{
      type: Input
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzHideDisabledOptions: [{
      type: Input
    }],
    nzAllowEmpty: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input
    }],
    nzInputReadOnly: [{
      type: Input
    }]
  });
})();
var _NzTimePickerModule = class _NzTimePickerModule {
};
_NzTimePickerModule.ɵfac = function NzTimePickerModule_Factory(t) {
  return new (t || _NzTimePickerModule)();
};
_NzTimePickerModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTimePickerModule,
  imports: [NzTimePickerComponent, NzTimePickerPanelComponent],
  exports: [NzTimePickerPanelComponent, NzTimePickerComponent]
});
_NzTimePickerModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTimePickerComponent, NzTimePickerPanelComponent]
});
var NzTimePickerModule = _NzTimePickerModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimePickerComponent, NzTimePickerPanelComponent],
      exports: [NzTimePickerPanelComponent, NzTimePickerComponent]
    }]
  }], null, null);
})();

export {
  NzTimePickerPanelComponent,
  NzTimePickerComponent,
  NzTimePickerModule
};
//# sourceMappingURL=chunk-VSTEGF6G.js.map
