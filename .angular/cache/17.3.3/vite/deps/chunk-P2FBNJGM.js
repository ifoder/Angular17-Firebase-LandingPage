import {
  FocusMonitor
} from "./chunk-SMTBLDGX.js";
import {
  NzFormStatusService
} from "./chunk-EH3GTNUW.js";
import {
  InputBoolean
} from "./chunk-O6NELX6U.js";
import {
  Directionality
} from "./chunk-JPPYGJGR.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-GDRTQ7JS.js";
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
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-Y4OPO6BX.js";
import {
  Subject,
  fromEvent,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-checkbox.mjs
var _c0 = ["*"];
var _c1 = ["inputElement"];
var _c2 = ["nz-checkbox", ""];
var _forTrack3 = ($index, $item) => $item.value;
function NzCheckboxGroupComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 0);
    ɵɵlistener("nzCheckedChange", function NzCheckboxGroupComponent_For_1_Template_label_nzCheckedChange_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r7);
      const option_r1 = restoredCtx.$implicit;
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onCheckedChange(option_r1, $event));
    });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzDisabled", option_r1.disabled || ctx_r0.nzDisabled)("nzChecked", option_r1.checked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(option_r1.label);
  }
}
var _NzCheckboxWrapperComponent = class _NzCheckboxWrapperComponent {
  constructor() {
    this.nzOnChange = new EventEmitter();
    this.checkboxList = [];
  }
  addCheckbox(value) {
    this.checkboxList.push(value);
  }
  removeCheckbox(value) {
    this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
  }
  onChange() {
    const listOfCheckedValue = this.checkboxList.filter((item) => item.nzChecked).map((item) => item.nzValue);
    this.nzOnChange.emit(listOfCheckedValue);
  }
};
_NzCheckboxWrapperComponent.ɵfac = function NzCheckboxWrapperComponent_Factory(t) {
  return new (t || _NzCheckboxWrapperComponent)();
};
_NzCheckboxWrapperComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxWrapperComponent,
  selectors: [["nz-checkbox-wrapper"]],
  hostAttrs: [1, "ant-checkbox-group"],
  outputs: {
    nzOnChange: "nzOnChange"
  },
  exportAs: ["nzCheckboxWrapper"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzCheckboxWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCheckboxWrapperComponent = _NzCheckboxWrapperComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxWrapperComponent, [{
    type: Component,
    args: [{
      selector: "nz-checkbox-wrapper",
      exportAs: "nzCheckboxWrapper",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-checkbox-group"
      },
      standalone: true
    }]
  }], null, {
    nzOnChange: [{
      type: Output
    }]
  });
})();
var _NzCheckboxComponent = class _NzCheckboxComponent {
  innerCheckedChange(checked) {
    if (!this.nzDisabled) {
      this.nzChecked = checked;
      this.onChange(this.nzChecked);
      this.nzCheckedChange.emit(this.nzChecked);
      if (this.nzCheckboxWrapperComponent) {
        this.nzCheckboxWrapperComponent.onChange();
      }
    }
  }
  writeValue(value) {
    this.nzChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(ngZone, elementRef, nzCheckboxWrapperComponent, cdr, focusMonitor, directionality, nzFormStatusService) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.nzCheckboxWrapperComponent = nzCheckboxWrapperComponent;
    this.cdr = cdr;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.nzFormStatusService = nzFormStatusService;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.nzCheckedChange = new EventEmitter();
    this.nzValue = null;
    this.nzAutoFocus = false;
    this.nzDisabled = false;
    this.nzIndeterminate = false;
    this.nzChecked = false;
    this.nzId = null;
  }
  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.addCheckbox(this);
    }
    this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        event.preventDefault();
        this.focus();
        if (this.nzDisabled) {
          return;
        }
        this.ngZone.run(() => {
          this.innerCheckedChange(!this.nzChecked);
          this.cdr.markForCheck();
        });
      });
      fromEvent(this.inputElement.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => event.stopPropagation());
    });
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    if (this.nzCheckboxWrapperComponent) {
      this.nzCheckboxWrapperComponent.removeCheckbox(this);
    }
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzCheckboxComponent.ɵfac = function NzCheckboxComponent_Factory(t) {
  return new (t || _NzCheckboxComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NzCheckboxWrapperComponent, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzFormStatusService, 8));
};
_NzCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxComponent,
  selectors: [["", "nz-checkbox", ""]],
  viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-checkbox-wrapper"],
  hostVars: 6,
  hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzValue: "nzValue",
    nzAutoFocus: "nzAutoFocus",
    nzDisabled: "nzDisabled",
    nzIndeterminate: "nzIndeterminate",
    nzChecked: "nzChecked",
    nzId: "nzId"
  },
  outputs: {
    nzCheckedChange: "nzCheckedChange"
  },
  exportAs: ["nzCheckbox"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCheckboxComponent),
    multi: true
  }]), ɵɵStandaloneFeature],
  attrs: _c2,
  ngContentSelectors: _c0,
  decls: 6,
  vars: 11,
  consts: [[1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "checked", "ngModel", "disabled", "ngModelChange"], ["inputElement", ""], [1, "ant-checkbox-inner"]],
  template: function NzCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "span", 0)(1, "input", 1, 2);
      ɵɵlistener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.innerCheckedChange($event);
      });
      ɵɵelementEnd();
      ɵɵelement(3, "span", 3);
      ɵɵelementEnd();
      ɵɵelementStart(4, "span");
      ɵɵprojection(5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled)("ant-checkbox-indeterminate", ctx.nzIndeterminate);
      ɵɵadvance(1);
      ɵɵproperty("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled);
      ɵɵattribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("id", ctx.nzId);
    }
  },
  dependencies: [FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel],
  encapsulation: 2,
  changeDetection: 0
});
var NzCheckboxComponent = _NzCheckboxComponent;
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzIndeterminate", void 0);
__decorate([InputBoolean()], NzCheckboxComponent.prototype, "nzChecked", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "[nz-checkbox]",
      exportAs: "nzCheckbox",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [attr.id]="nzId"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content></ng-content></span>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxComponent),
        multi: true
      }],
      host: {
        class: "ant-checkbox-wrapper",
        "[class.ant-checkbox-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-checkbox-wrapper-checked]": "nzChecked",
        "[class.ant-checkbox-rtl]": `dir === 'rtl'`
      },
      imports: [FormsModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: NzCheckboxWrapperComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: FocusMonitor
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
  }], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzValue: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzChecked: [{
      type: Input
    }],
    nzId: [{
      type: Input
    }]
  });
})();
var _NzCheckboxGroupComponent = class _NzCheckboxGroupComponent {
  onCheckedChange(option, checked) {
    option.checked = checked;
    this.onChange(this.options);
  }
  constructor(elementRef, focusMonitor, cdr, directionality) {
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.cdr = cdr;
    this.directionality = directionality;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.options = [];
    this.nzDisabled = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.isNzDisableFirstChange = true;
  }
  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this.destroy$.next();
    this.destroy$.complete();
  }
  writeValue(value) {
    this.options = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
};
_NzCheckboxGroupComponent.ɵfac = function NzCheckboxGroupComponent_Factory(t) {
  return new (t || _NzCheckboxGroupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusMonitor), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8));
};
_NzCheckboxGroupComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzCheckboxGroupComponent,
  selectors: [["nz-checkbox-group"]],
  hostAttrs: [1, "ant-checkbox-group"],
  hostVars: 2,
  hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-checkbox-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzDisabled: "nzDisabled"
  },
  exportAs: ["nzCheckboxGroup"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzCheckboxGroupComponent),
    multi: true
  }]), ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  consts: [["nz-checkbox", "", 1, "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked", "nzCheckedChange"], ["nz-checkbox", "", "class", "ant-checkbox-group-item", 3, "nzDisabled", "nzChecked"]],
  template: function NzCheckboxGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵrepeaterCreate(0, NzCheckboxGroupComponent_For_1_Template, 3, 3, "label", 1, _forTrack3);
    }
    if (rf & 2) {
      ɵɵrepeater(ctx.options);
    }
  },
  dependencies: [NzCheckboxComponent],
  encapsulation: 2
});
var NzCheckboxGroupComponent = _NzCheckboxGroupComponent;
__decorate([InputBoolean()], NzCheckboxGroupComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-checkbox-group",
      exportAs: "nzCheckboxGroup",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @for (option of options; track option.value) {
      <label
        nz-checkbox
        class="ant-checkbox-group-item"
        [nzDisabled]="option.disabled || nzDisabled"
        [nzChecked]="option.checked!"
        (nzCheckedChange)="onCheckedChange(option, $event)"
      >
        <span>{{ option.label }}</span>
      </label>
    }
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxGroupComponent),
        multi: true
      }],
      host: {
        class: "ant-checkbox-group",
        "[class.ant-checkbox-group-rtl]": `dir === 'rtl'`
      },
      imports: [NzCheckboxComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzDisabled: [{
      type: Input
    }]
  });
})();
var _NzCheckboxModule = class _NzCheckboxModule {
};
_NzCheckboxModule.ɵfac = function NzCheckboxModule_Factory(t) {
  return new (t || _NzCheckboxModule)();
};
_NzCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: _NzCheckboxModule,
  imports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
  exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
});
_NzCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [NzCheckboxComponent, NzCheckboxGroupComponent]
});
var NzCheckboxModule = _NzCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
      exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
    }]
  }], null, null);
})();

export {
  NzCheckboxWrapperComponent,
  NzCheckboxComponent,
  NzCheckboxGroupComponent,
  NzCheckboxModule
};
//# sourceMappingURL=chunk-P2FBNJGM.js.map
