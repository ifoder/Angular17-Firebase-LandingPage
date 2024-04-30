import {
  MenuService,
  NzIsMenuInsideDropDownToken,
  NzMenuModule
} from "./chunk-K6UE26X2.js";
import {
  NzButtonGroupComponent
} from "./chunk-BMWXHJR6.js";
import {
  POSITION_MAP
} from "./chunk-65EYJIO4.js";
import {
  NzNoAnimationDirective
} from "./chunk-HVVV2P4P.js";
import {
  slideMotion
} from "./chunk-BJIJDVLR.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean
} from "./chunk-A4L4YVTT.js";
import {
  ConnectionPositionPair,
  Overlay
} from "./chunk-NRW7HDG5.js";
import {
  ESCAPE,
  hasModifierKey
} from "./chunk-27BDGVS6.js";
import {
  TemplatePortal
} from "./chunk-2CGA3OMX.js";
import {
  Platform
} from "./chunk-HH3PCEGU.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NgClass,
  NgStyle
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
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
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  Subscription,
  auditTime,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  fromEvent,
  map,
  mapTo,
  merge,
  switchMap,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-dropdown.mjs
function NzDropdownMenuComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 0);
    ɵɵlistener("@slideMotion.done", function NzDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onAnimationEvent($event));
    })("mouseenter", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.setMouseState(true));
    })("mouseleave", function NzDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.setMouseState(false));
    });
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-dropdown-rtl", ctx_r0.dir === "rtl");
    ɵɵproperty("ngClass", ctx_r0.nzOverlayClassName)("ngStyle", ctx_r0.nzOverlayStyle)("@slideMotion", void 0)("@.disabled", !!(ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r0.noAnimation == null ? null : ctx_r0.noAnimation.nzNoAnimation);
  }
}
var _c0 = ["*"];
var NZ_CONFIG_MODULE_NAME = "dropDown";
var listOfPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var _NzDropDownDirective = class _NzDropDownDirective {
  setDropdownMenuValue(key, value) {
    if (this.nzDropdownMenu) {
      this.nzDropdownMenu.setValue(key, value);
    }
  }
  constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.overlay = overlay;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.platform = platform;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.overlayRef = null;
    this.destroy$ = new Subject();
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown");
    this.inputVisible$ = new BehaviorSubject(false);
    this.nzTrigger$ = new BehaviorSubject("hover");
    this.overlayClose$ = new Subject();
    this.nzDropdownMenu = null;
    this.nzTrigger = "hover";
    this.nzMatchWidthElement = null;
    this.nzBackdrop = false;
    this.nzClickHide = true;
    this.nzDisabled = false;
    this.nzVisible = false;
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.nzPlacement = "bottomLeft";
    this.nzVisibleChange = new EventEmitter();
  }
  ngAfterViewInit() {
    if (this.nzDropdownMenu) {
      const nativeElement = this.elementRef.nativeElement;
      const hostMouseState$ = merge(fromEvent(nativeElement, "mouseenter").pipe(mapTo(true)), fromEvent(nativeElement, "mouseleave").pipe(mapTo(false)));
      const menuMouseState$ = this.nzDropdownMenu.mouseState$;
      const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
      const hostClickState$ = fromEvent(nativeElement, "click").pipe(map(() => !this.nzVisible));
      const visibleStateByTrigger$ = this.nzTrigger$.pipe(switchMap((trigger) => {
        if (trigger === "hover") {
          return mergedMouseState$;
        } else if (trigger === "click") {
          return hostClickState$;
        } else {
          return EMPTY;
        }
      }));
      const descendantMenuItemClick$ = this.nzDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.nzClickHide), mapTo(false));
      const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.nzDisabled));
      const visible$ = merge(this.inputVisible$, domTriggerVisible$);
      combineLatest([visible$, this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$)).subscribe((visible) => {
        const element = this.nzMatchWidthElement ? this.nzMatchWidthElement.nativeElement : nativeElement;
        const triggerWidth = element.getBoundingClientRect().width;
        if (this.nzVisible !== visible) {
          this.nzVisibleChange.emit(visible);
        }
        this.nzVisible = visible;
        if (visible) {
          if (!this.overlayRef) {
            this.overlayRef = this.overlay.create({
              positionStrategy: this.positionStrategy,
              minWidth: triggerWidth,
              disposeOnNavigation: true,
              hasBackdrop: this.nzBackdrop && this.nzTrigger === "click",
              scrollStrategy: this.overlay.scrollStrategies.reposition()
            });
            merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter((e) => e.keyCode === ESCAPE && !hasModifierKey(e)))).pipe(takeUntil(this.destroy$)).subscribe(() => {
              this.overlayClose$.next(false);
            });
          } else {
            const overlayConfig = this.overlayRef.getConfig();
            overlayConfig.minWidth = triggerWidth;
          }
          this.positionStrategy.withPositions([POSITION_MAP[this.nzPlacement], ...listOfPositions]);
          if (!this.portal || this.portal.templateRef !== this.nzDropdownMenu.templateRef) {
            this.portal = new TemplatePortal(this.nzDropdownMenu.templateRef, this.viewContainerRef);
          }
          this.overlayRef.attach(this.portal);
        } else {
          if (this.overlayRef) {
            this.overlayRef.detach();
          }
        }
      });
      this.nzDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.toState === "void") {
          if (this.overlayRef) {
            this.overlayRef.dispose();
          }
          this.overlayRef = null;
        }
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
  ngOnChanges(changes) {
    const {
      nzVisible,
      nzDisabled,
      nzOverlayClassName,
      nzOverlayStyle,
      nzTrigger
    } = changes;
    if (nzTrigger) {
      this.nzTrigger$.next(this.nzTrigger);
    }
    if (nzVisible) {
      this.inputVisible$.next(this.nzVisible);
    }
    if (nzDisabled) {
      const nativeElement = this.elementRef.nativeElement;
      if (this.nzDisabled) {
        this.renderer.setAttribute(nativeElement, "disabled", "");
        this.inputVisible$.next(false);
      } else {
        this.renderer.removeAttribute(nativeElement, "disabled");
      }
    }
    if (nzOverlayClassName) {
      this.setDropdownMenuValue("nzOverlayClassName", this.nzOverlayClassName);
    }
    if (nzOverlayStyle) {
      this.setDropdownMenuValue("nzOverlayStyle", this.nzOverlayStyle);
    }
  }
};
_NzDropDownDirective.ɵfac = function NzDropDownDirective_Factory(t) {
  return new (t || _NzDropDownDirective)(ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(Platform));
};
_NzDropDownDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownDirective,
  selectors: [["", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-trigger"],
  inputs: {
    nzDropdownMenu: "nzDropdownMenu",
    nzTrigger: "nzTrigger",
    nzMatchWidthElement: "nzMatchWidthElement",
    nzBackdrop: "nzBackdrop",
    nzClickHide: "nzClickHide",
    nzDisabled: "nzDisabled",
    nzVisible: "nzVisible",
    nzOverlayClassName: "nzOverlayClassName",
    nzOverlayStyle: "nzOverlayStyle",
    nzPlacement: "nzPlacement"
  },
  outputs: {
    nzVisibleChange: "nzVisibleChange"
  },
  exportAs: ["nzDropdown"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzDropDownDirective = _NzDropDownDirective;
__decorate([WithConfig(), InputBoolean()], NzDropDownDirective.prototype, "nzBackdrop", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzClickHide", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzDropDownDirective.prototype, "nzVisible", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-dropdown]",
      exportAs: "nzDropdown",
      host: {
        class: "ant-dropdown-trigger"
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: Overlay
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: Platform
  }], {
    nzDropdownMenu: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzMatchWidthElement: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzClickHide: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzVisibleChange: [{
      type: Output
    }]
  });
})();
var _NzContextMenuServiceModule = class _NzContextMenuServiceModule {
};
_NzContextMenuServiceModule.ɵfac = function NzContextMenuServiceModule_Factory(t) {
  return new (t || _NzContextMenuServiceModule)();
};
_NzContextMenuServiceModule.ɵmod = ɵɵdefineNgModule({
  type: _NzContextMenuServiceModule
});
_NzContextMenuServiceModule.ɵinj = ɵɵdefineInjector({});
var NzContextMenuServiceModule = _NzContextMenuServiceModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuServiceModule, [{
    type: NgModule
  }], null, null);
})();
var _NzDropDownADirective = class _NzDropDownADirective {
  constructor() {
  }
};
_NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) {
  return new (t || _NzDropDownADirective)();
};
_NzDropDownADirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropDownADirective,
  selectors: [["a", "nz-dropdown", ""]],
  hostAttrs: [1, "ant-dropdown-link"],
  standalone: true
});
var NzDropDownADirective = _NzDropDownADirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownADirective, [{
    type: Directive,
    args: [{
      selector: "a[nz-dropdown]",
      host: {
        class: "ant-dropdown-link"
      },
      standalone: true
    }]
  }], () => [], null);
})();
var _NzDropdownButtonDirective = class _NzDropdownButtonDirective {
  constructor(renderer, nzButtonGroupComponent, elementRef) {
    this.renderer = renderer;
    this.nzButtonGroupComponent = nzButtonGroupComponent;
    this.elementRef = elementRef;
  }
  ngAfterViewInit() {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    if (this.nzButtonGroupComponent && parentElement) {
      this.renderer.addClass(parentElement, "ant-dropdown-button");
    }
  }
};
_NzDropdownButtonDirective.ɵfac = function NzDropdownButtonDirective_Factory(t) {
  return new (t || _NzDropdownButtonDirective)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NzButtonGroupComponent, 9), ɵɵdirectiveInject(ElementRef));
};
_NzDropdownButtonDirective.ɵdir = ɵɵdefineDirective({
  type: _NzDropdownButtonDirective,
  selectors: [["", "nz-button", "", "nz-dropdown", ""]],
  standalone: true
});
var NzDropdownButtonDirective = _NzDropdownButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button][nz-dropdown]",
      standalone: true
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: NzButtonGroupComponent,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }, {
    type: ElementRef
  }], null);
})();
var _NzDropdownMenuComponent = class _NzDropdownMenuComponent {
  onAnimationEvent(event) {
    this.animationStateChange$.emit(event);
  }
  setMouseState(visible) {
    this.mouseState$.next(visible);
  }
  setValue(key, value) {
    this[key] = value;
    this.cdr.markForCheck();
  }
  constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.viewContainerRef = viewContainerRef;
    this.nzMenuService = nzMenuService;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.mouseState$ = new BehaviorSubject(false);
    this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
    this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
    this.animationStateChange$ = new EventEmitter();
    this.nzOverlayClassName = "";
    this.nzOverlayStyle = {};
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterContentInit() {
    this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzDropdownMenuComponent.ɵfac = function NzDropdownMenuComponent_Factory(t) {
  return new (t || _NzDropdownMenuComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzDropdownMenuComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzDropdownMenuComponent,
  selectors: [["nz-dropdown-menu"]],
  viewQuery: function NzDropdownMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzDropdownMenu"],
  standalone: true,
  features: [ɵɵProvidersFeature([
    MenuService,
    /** menu is inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useValue: true
    }
  ]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  consts: [[1, "ant-dropdown", 3, "ngClass", "ngStyle", "nzNoAnimation", "mouseenter", "mouseleave"]],
  template: function NzDropdownMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzDropdownMenuComponent_ng_template_0_Template, 2, 7, "ng-template");
    }
  },
  dependencies: [NgClass, NgStyle, NzNoAnimationDirective],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzDropdownMenuComponent = _NzDropdownMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropdownMenuComponent, [{
    type: Component,
    args: [{
      selector: `nz-dropdown-menu`,
      exportAs: `nzDropdownMenu`,
      animations: [slideMotion],
      providers: [
        MenuService,
        /** menu is inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useValue: true
        }
      ],
      template: `
    <ng-template>
      <div
        class="ant-dropdown"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="nzOverlayClassName"
        [ngStyle]="nzOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NgClass, NgStyle, NzNoAnimationDirective],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: MenuService
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
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var _NzDropDownModule = class _NzDropDownModule {
};
_NzDropDownModule.ɵfac = function NzDropDownModule_Factory(t) {
  return new (t || _NzDropDownModule)();
};
_NzDropDownModule.ɵmod = ɵɵdefineNgModule({
  type: _NzDropDownModule,
  imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
  exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
});
_NzDropDownModule.ɵinj = ɵɵdefineInjector({
  imports: [NzContextMenuServiceModule, NzMenuModule]
});
var NzDropDownModule = _NzDropDownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective, NzContextMenuServiceModule],
      exports: [NzMenuModule, NzDropDownDirective, NzDropDownADirective, NzDropdownMenuComponent, NzDropdownButtonDirective]
    }]
  }], null, null);
})();
var LIST_OF_POSITIONS = [new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "top"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "start",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "bottom"
}), new ConnectionPositionPair({
  originX: "start",
  originY: "top"
}, {
  overlayX: "end",
  overlayY: "top"
})];
var _NzContextMenuService = class _NzContextMenuService {
  constructor(ngZone, overlay) {
    this.ngZone = ngZone;
    this.overlay = overlay;
    this.overlayRef = null;
    this.closeSubscription = Subscription.EMPTY;
  }
  create($event, nzDropdownMenuComponent) {
    this.close(true);
    const {
      x,
      y
    } = $event;
    if ($event instanceof MouseEvent) {
      $event.preventDefault();
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo({
      x,
      y
    }).withPositions(LIST_OF_POSITIONS).withTransformOriginOn(".ant-dropdown");
    this.overlayRef = this.overlay.create({
      positionStrategy,
      disposeOnNavigation: true,
      scrollStrategy: this.overlay.scrollStrategies.close()
    });
    this.closeSubscription = new Subscription();
    this.closeSubscription.add(nzDropdownMenuComponent.descendantMenuItemClick$.subscribe(() => this.close()));
    this.closeSubscription.add(this.ngZone.runOutsideAngular(() => merge(fromEvent(document, "click").pipe(
      filter((event) => !!this.overlayRef && !this.overlayRef.overlayElement.contains(event.target)),
      /** handle firefox contextmenu event **/
      filter((event) => event.button !== 2)
    ), fromEvent(document, "keydown").pipe(filter((event) => event.key === "Escape"))).pipe(first()).subscribe(() => this.ngZone.run(() => this.close()))));
    return this.overlayRef.attach(new TemplatePortal(nzDropdownMenuComponent.templateRef, nzDropdownMenuComponent.viewContainerRef));
  }
  close(clear = false) {
    if (this.overlayRef) {
      this.overlayRef.detach();
      if (clear) {
        this.overlayRef.dispose();
      }
      this.overlayRef = null;
      this.closeSubscription.unsubscribe();
    }
  }
};
_NzContextMenuService.ɵfac = function NzContextMenuService_Factory(t) {
  return new (t || _NzContextMenuService)(ɵɵinject(NgZone), ɵɵinject(Overlay));
};
_NzContextMenuService.ɵprov = ɵɵdefineInjectable({
  token: _NzContextMenuService,
  factory: _NzContextMenuService.ɵfac,
  providedIn: NzContextMenuServiceModule
});
var NzContextMenuService = _NzContextMenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContextMenuService, [{
    type: Injectable,
    args: [{
      providedIn: NzContextMenuServiceModule
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Overlay
  }], null);
})();

export {
  NzDropDownDirective,
  NzContextMenuServiceModule,
  NzDropDownADirective,
  NzDropdownButtonDirective,
  NzDropdownMenuComponent,
  NzDropDownModule,
  NzContextMenuService
};
//# sourceMappingURL=chunk-WO5QZKSO.js.map
