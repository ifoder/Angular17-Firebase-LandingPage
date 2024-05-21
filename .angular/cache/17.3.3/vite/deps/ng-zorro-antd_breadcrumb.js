import {
  NzDropDownDirective,
  NzDropDownModule
} from "./chunk-QGWADWOQ.js";
import "./chunk-PQYY24V6.js";
import "./chunk-T4KVFTV6.js";
import "./chunk-NPFQICFZ.js";
import "./chunk-UZPRKK5P.js";
import "./chunk-Z4EPM4PK.js";
import "./chunk-4NQDKSHT.js";
import "./chunk-WD2DFVI4.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import "./chunk-HVVV2P4P.js";
import "./chunk-NA7MVJ2Z.js";
import "./chunk-A7RVIN62.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import "./chunk-BJIJDVLR.js";
import "./chunk-7CXXYODY.js";
import {
  InputBoolean,
  PREFIX
} from "./chunk-A4L4YVTT.js";
import "./chunk-3UTWO7T6.js";
import "./chunk-SOPZD4MF.js";
import "./chunk-2CGA3OMX.js";
import "./chunk-27BDGVS6.js";
import "./chunk-HH3PCEGU.js";
import "./chunk-GRCHAQNP.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import "./chunk-PA6IY4WI.js";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router
} from "./chunk-UZVDMXWE.js";
import "./chunk-437BBMU4.js";
import "./chunk-WK2VJHMP.js";
import {
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Injector,
  Input,
  NgModule,
  Optional,
  Renderer2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2P2HMI5Y.js";
import {
  Subject,
  filter,
  startWith,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";
import "./chunk-47AXDMZD.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs
var _c0 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2);
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    ɵɵelement(2, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("nzDropdownMenu", ctx_r0.nzOverlay);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 3);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(4);
    ɵɵproperty("ngTemplateOutlet", _r4);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r7.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "nz-breadcrumb-separator");
    ɵɵtemplate(1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r2.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
}
var _forTrack1 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-breadcrumb-item")(1, "a", 0);
    ɵɵlistener("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r8);
      const breadcrumb_r2 = restoredCtx.$implicit;
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.navigate(breadcrumb_r2.url, $event));
    });
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵattribute("href", breadcrumb_r2.url, ɵɵsanitizeUrl);
    ɵɵadvance(1);
    ɵɵtextInterpolate(breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵrepeater(ctx_r0.breadcrumbs);
  }
}
var _NzBreadCrumbSeparatorComponent = class _NzBreadCrumbSeparatorComponent {
};
_NzBreadCrumbSeparatorComponent.ɵfac = function NzBreadCrumbSeparatorComponent_Factory(t) {
  return new (t || _NzBreadCrumbSeparatorComponent)();
};
_NzBreadCrumbSeparatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbSeparatorComponent,
  selectors: [["nz-breadcrumb-separator"]],
  hostAttrs: [1, "ant-breadcrumb-separator"],
  exportAs: ["nzBreadcrumbSeparator"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
var NzBreadCrumbSeparatorComponent = _NzBreadCrumbSeparatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-breadcrumb-separator",
      exportAs: "nzBreadcrumbSeparator",
      standalone: true,
      template: `<ng-content></ng-content>`,
      host: {
        class: "ant-breadcrumb-separator"
      }
    }]
  }], null, null);
})();
var NzBreadcrumb = class {
};
var _NzBreadCrumbItemComponent = class _NzBreadCrumbItemComponent {
  constructor(nzBreadCrumbComponent) {
    this.nzBreadCrumbComponent = nzBreadCrumbComponent;
  }
};
_NzBreadCrumbItemComponent.ɵfac = function NzBreadCrumbItemComponent_Factory(t) {
  return new (t || _NzBreadCrumbItemComponent)(ɵɵdirectiveInject(NzBreadcrumb));
};
_NzBreadCrumbItemComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbItemComponent,
  selectors: [["nz-breadcrumb-item"]],
  inputs: {
    nzOverlay: "nzOverlay"
  },
  exportAs: ["nzBreadcrumbItem"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 5,
  vars: 2,
  consts: [["class", "ant-breadcrumb-overlay-link", "nz-dropdown", "", 3, "nzDropdownMenu"], ["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nz-icon", "", "nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
  template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 0)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1)(2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator")(3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵconditional(0, !!ctx.nzOverlay ? 0 : 1);
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzDropDownDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzBreadCrumbItemComponent = _NzBreadCrumbItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb-item",
      exportAs: "nzBreadcrumbItem",
      preserveWhitespaces: false,
      standalone: true,
      imports: [NgTemplateOutlet, NzBreadCrumbSeparatorComponent, NzDropDownModule, NzIconModule, NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <span nz-icon nzType="down"></span>
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], () => [{
    type: NzBreadcrumb
  }], {
    nzOverlay: [{
      type: Input
    }]
  });
})();
var _NzBreadCrumbComponent = class _NzBreadCrumbComponent {
  constructor(injector, cdr, elementRef, renderer, directionality) {
    this.injector = injector;
    this.cdr = cdr;
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.nzAutoGenerate = false;
    this.nzSeparator = "/";
    this.nzRouteLabel = "breadcrumb";
    this.nzRouteLabelFn = (label) => label;
    this.breadcrumbs = [];
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.destroy$),
        startWith(true)
        // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch (e) {
      throw new Error(`${PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = "", breadcrumbs = []) {
    const children = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        const routeUrl = child.snapshot.url.map((segment) => segment.path).filter((path) => path).join("/");
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: nextUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === "rtl") {
      this.renderer.addClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, "ant-breadcrumb-rtl");
    }
  }
};
_NzBreadCrumbComponent.ɵfac = function NzBreadCrumbComponent_Factory(t) {
  return new (t || _NzBreadCrumbComponent)(ɵɵdirectiveInject(Injector), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Directionality, 8));
};
_NzBreadCrumbComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzBreadCrumbComponent,
  selectors: [["nz-breadcrumb"]],
  hostAttrs: [1, "ant-breadcrumb"],
  inputs: {
    nzAutoGenerate: "nzAutoGenerate",
    nzSeparator: "nzSeparator",
    nzRouteLabel: "nzRouteLabel",
    nzRouteLabelFn: "nzRouteLabelFn"
  },
  exportAs: ["nzBreadcrumb"],
  standalone: true,
  features: [ɵɵProvidersFeature([{
    provide: NzBreadcrumb,
    useExisting: _NzBreadCrumbComponent
  }]), ɵɵStandaloneFeature],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [[3, "click"]],
  template: function NzBreadCrumbComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
      ɵɵtemplate(1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵconditional(1, ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
    }
  },
  dependencies: [NzBreadCrumbItemComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzBreadCrumbComponent = _NzBreadCrumbComponent;
__decorate([InputBoolean()], NzBreadCrumbComponent.prototype, "nzAutoGenerate", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-breadcrumb",
      exportAs: "nzBreadcrumb",
      preserveWhitespaces: false,
      providers: [{
        provide: NzBreadcrumb,
        useExisting: NzBreadCrumbComponent
      }],
      standalone: true,
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: "ant-breadcrumb"
      }
    }]
  }], () => [{
    type: Injector
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAutoGenerate: [{
      type: Input
    }],
    nzSeparator: [{
      type: Input
    }],
    nzRouteLabel: [{
      type: Input
    }],
    nzRouteLabelFn: [{
      type: Input
    }]
  });
})();
var _NzBreadCrumbModule = class _NzBreadCrumbModule {
};
_NzBreadCrumbModule.ɵfac = function NzBreadCrumbModule_Factory(t) {
  return new (t || _NzBreadCrumbModule)();
};
_NzBreadCrumbModule.ɵmod = ɵɵdefineNgModule({
  type: _NzBreadCrumbModule,
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
  exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
});
_NzBreadCrumbModule.ɵinj = ɵɵdefineInjector({
  imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
});
var NzBreadCrumbModule = _NzBreadCrumbModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBreadCrumbModule, [{
    type: NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();
export {
  NzBreadCrumbComponent,
  NzBreadCrumbItemComponent,
  NzBreadCrumbModule,
  NzBreadCrumbSeparatorComponent
};
//# sourceMappingURL=ng-zorro-antd_breadcrumb.js.map
