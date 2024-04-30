import {
  NzHighlightModule,
  NzHighlightPipe
} from "./chunk-UZSYOOGM.js";
import {
  NzNoAnimationDirective
} from "./chunk-HVVV2P4P.js";
import {
  NzOutletModule,
  NzStringTemplateOutletDirective
} from "./chunk-I37PCP7C.js";
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-ZDRZN5Y6.js";
import {
  treeCollapseMotion
} from "./chunk-BJIJDVLR.js";
import {
  NzConfigService,
  WithConfig
} from "./chunk-7CXXYODY.js";
import {
  InputBoolean
} from "./chunk-A4L4YVTT.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport
} from "./chunk-DHXGQT7V.js";
import {
  Directionality
} from "./chunk-UA6AN7W3.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-M6FD3VIN.js";
import {
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-VFCSK5OE.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Host,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  ViewChild,
  forwardRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
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
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-2P2HMI5Y.js";
import {
  BehaviorSubject,
  Subject,
  fromEvent,
  takeUntil
} from "./chunk-ELRSAQZ7.js";
import {
  __decorate
} from "./chunk-ECDNAN6X.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-tree.mjs
var NzTreeNode = class _NzTreeNode {
  get treeService() {
    return this.service || this.parentNode && this.parentNode.treeService;
  }
  /**
   * Init nzTreeNode
   *
   * @param option: user's input
   * @param parent
   * @param service: base nzTreeService
   */
  constructor(option, parent = null, service = null) {
    this._title = "";
    this.level = 0;
    this.parentNode = null;
    this._icon = "";
    this._children = [];
    this._isLeaf = false;
    this._isChecked = false;
    this._isSelectable = false;
    this._isDisabled = false;
    this._isDisableCheckbox = false;
    this._isExpanded = false;
    this._isHalfChecked = false;
    this._isSelected = false;
    this._isLoading = false;
    this.canHide = false;
    this.isMatched = false;
    this.service = null;
    if (option instanceof _NzTreeNode) {
      return option;
    }
    this.service = service || null;
    this.origin = option;
    this.key = option.key;
    this.parentNode = parent;
    this._title = option.title || "---";
    this._icon = option.icon || "";
    this._isLeaf = option.isLeaf || false;
    this._children = [];
    this._isChecked = option.checked || false;
    this._isSelectable = option.disabled || option.selectable !== false;
    this._isDisabled = option.disabled || false;
    this._isDisableCheckbox = option.disableCheckbox || false;
    this._isExpanded = option.isLeaf ? false : option.expanded || false;
    this._isHalfChecked = false;
    this._isSelected = !option.disabled && option.selected || false;
    this._isLoading = false;
    this.isMatched = false;
    if (parent) {
      this.level = parent.level + 1;
    } else {
      this.level = 0;
    }
    if (typeof option.children !== "undefined" && option.children !== null) {
      option.children.forEach((nodeOptions) => {
        const s = this.treeService;
        if (s && !s.isCheckStrictly && option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
          nodeOptions.checked = option.checked;
        }
        this._children.push(new _NzTreeNode(nodeOptions, this));
      });
    }
  }
  /**
   * auto generate
   * get
   * set
   */
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
    this.update();
  }
  get icon() {
    return this._icon;
  }
  set icon(value) {
    this._icon = value;
    this.update();
  }
  get children() {
    return this._children;
  }
  set children(value) {
    this._children = value;
    this.update();
  }
  get isLeaf() {
    return this._isLeaf;
  }
  set isLeaf(value) {
    this._isLeaf = value;
    this.update();
  }
  get isChecked() {
    return this._isChecked;
  }
  set isChecked(value) {
    this._isChecked = value;
    this.origin.checked = value;
    this.afterValueChange("isChecked");
  }
  get isHalfChecked() {
    return this._isHalfChecked;
  }
  set isHalfChecked(value) {
    this._isHalfChecked = value;
    this.afterValueChange("isHalfChecked");
  }
  get isSelectable() {
    return this._isSelectable;
  }
  set isSelectable(value) {
    this._isSelectable = value;
    this.update();
  }
  get isDisabled() {
    return this._isDisabled;
  }
  set isDisabled(value) {
    this._isDisabled = value;
    this.update();
  }
  get isDisableCheckbox() {
    return this._isDisableCheckbox;
  }
  set isDisableCheckbox(value) {
    this._isDisableCheckbox = value;
    this.update();
  }
  get isExpanded() {
    return this._isExpanded;
  }
  set isExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
    this.afterValueChange("reRender");
  }
  get isSelected() {
    return this._isSelected;
  }
  set isSelected(value) {
    this._isSelected = value;
    this.origin.selected = value;
    this.afterValueChange("isSelected");
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(value) {
    this._isLoading = value;
    this.update();
  }
  setSyncChecked(checked = false, halfChecked = false) {
    this.setChecked(checked, halfChecked);
    if (this.treeService && !this.treeService.isCheckStrictly) {
      this.treeService.conduct(this);
    }
  }
  setChecked(checked = false, halfChecked = false) {
    this.origin.checked = checked;
    this.isChecked = checked;
    this.isHalfChecked = halfChecked;
  }
  setExpanded(value) {
    this._isExpanded = value;
    this.origin.expanded = value;
    this.afterValueChange("isExpanded");
  }
  getParentNode() {
    return this.parentNode;
  }
  getChildren() {
    return this.children;
  }
  /**
   * Support appending child nodes by position. Leaf node cannot be appended.
   */
  addChildren(children, childPos = -1) {
    if (!this.isLeaf) {
      children.forEach((node) => {
        const refreshLevel = (n) => {
          n.getChildren().forEach((c) => {
            c.level = c.getParentNode().level + 1;
            c.origin.level = c.level;
            refreshLevel(c);
          });
        };
        let child = node;
        if (child instanceof _NzTreeNode) {
          child.parentNode = this;
        } else {
          child = new _NzTreeNode(node, this);
        }
        child.level = this.level + 1;
        child.origin.level = child.level;
        refreshLevel(child);
        try {
          childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
        } catch (e) {
        }
      });
      this.origin.children = this.getChildren().map((v) => v.origin);
      this.isLoading = false;
    }
    this.afterValueChange("addChildren");
    this.afterValueChange("reRender");
  }
  clearChildren() {
    this.afterValueChange("clearChildren");
    this.children = [];
    this.origin.children = [];
    this.afterValueChange("reRender");
  }
  remove() {
    const parentNode = this.getParentNode();
    if (parentNode) {
      parentNode.children = parentNode.getChildren().filter((v) => v.key !== this.key);
      parentNode.origin.children = parentNode.origin.children.filter((v) => v.key !== this.key);
      this.afterValueChange("remove");
      this.afterValueChange("reRender");
    }
  }
  afterValueChange(key) {
    if (this.treeService) {
      switch (key) {
        case "isChecked":
          this.treeService.setCheckedNodeList(this);
          break;
        case "isHalfChecked":
          this.treeService.setHalfCheckedNodeList(this);
          break;
        case "isExpanded":
          this.treeService.setExpandedNodeList(this);
          break;
        case "isSelected":
          this.treeService.setNodeActive(this);
          break;
        case "clearChildren":
          this.treeService.afterRemove(this.getChildren());
          break;
        case "remove":
          this.treeService.afterRemove([this]);
          break;
        case "reRender":
          this.treeService.flattenTreeData(this.treeService.rootNodes, this.treeService.getExpandedNodeList().map((v) => v.key));
          break;
      }
    }
    this.update();
  }
  update() {
    if (this.component) {
      this.component.markForCheck();
    }
  }
};
function isCheckDisabled(node) {
  const {
    isDisabled,
    isDisableCheckbox
  } = node;
  return !!(isDisabled || isDisableCheckbox);
}
function isInArray(needle, haystack) {
  return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
function getPosition(level, index) {
  return `${level}-${index}`;
}
function getKey(key, pos) {
  if (key !== null && key !== void 0) {
    return key;
  }
  return pos;
}
function flattenTreeData(treeNodeList = [], expandedKeys = []) {
  const expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  const flattenList = [];
  function dig(list, parent = null) {
    return list.map((treeNode, index) => {
      const pos = getPosition(parent ? parent.pos : "0", index);
      const mergedKey = getKey(treeNode.key, pos);
      treeNode.isStart = [...parent ? parent.isStart : [], index === 0];
      treeNode.isEnd = [...parent ? parent.isEnd : [], index === list.length - 1];
      const flattenNode = {
        parent,
        pos,
        children: [],
        data: treeNode,
        isStart: [...parent ? parent.isStart : [], index === 0],
        isEnd: [...parent ? parent.isEnd : [], index === list.length - 1]
      };
      flattenList.push(flattenNode);
      if (expandedKeys === true || expandedKeySet.has(mergedKey) || treeNode.isExpanded) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
var _NzTreeBaseService = class _NzTreeBaseService {
  constructor() {
    this.DRAG_SIDE_RANGE = 0.25;
    this.DRAG_MIN_GAP = 2;
    this.isCheckStrictly = false;
    this.isMultiple = false;
    this.rootNodes = [];
    this.flattenNodes$ = new BehaviorSubject([]);
    this.selectedNodeList = [];
    this.expandedNodeList = [];
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    this.matchedNodeList = [];
  }
  /**
   * reset tree nodes will clear default node list
   */
  initTree(nzNodes) {
    this.rootNodes = nzNodes;
    this.expandedNodeList = [];
    this.selectedNodeList = [];
    this.halfCheckedNodeList = [];
    this.checkedNodeList = [];
    this.matchedNodeList = [];
  }
  flattenTreeData(nzNodes, expandedKeys = []) {
    this.flattenNodes$.next(flattenTreeData(nzNodes, expandedKeys).map((item) => item.data));
  }
  getSelectedNode() {
    return this.selectedNode;
  }
  /**
   * get some list
   */
  getSelectedNodeList() {
    return this.conductNodeState("select");
  }
  /**
   * get checked node keys
   */
  getCheckedNodeKeys() {
    const keys = [];
    const checkedNodes = this.getCheckedNodeList();
    const calc = (nodes) => {
      nodes.forEach((node) => {
        keys.push(node.key);
        if (node.children.length < 1)
          return;
        calc(node.children);
      });
    };
    calc(checkedNodes);
    return keys;
  }
  /**
   * return checked nodes
   */
  getCheckedNodeList() {
    return this.conductNodeState("check");
  }
  getHalfCheckedNodeList() {
    return this.conductNodeState("halfCheck");
  }
  /**
   * return expanded nodes
   */
  getExpandedNodeList() {
    return this.conductNodeState("expand");
  }
  /**
   * return search matched nodes
   */
  getMatchedNodeList() {
    return this.conductNodeState("match");
  }
  isArrayOfNzTreeNode(value) {
    return value.every((item) => item instanceof NzTreeNode);
  }
  /**
   * set drag node
   */
  setSelectedNode(node) {
    this.selectedNode = node;
  }
  /**
   * set node selected status
   */
  setNodeActive(node) {
    if (!this.isMultiple && node.isSelected) {
      this.selectedNodeList.forEach((n) => {
        if (node.key !== n.key) {
          n.isSelected = false;
        }
      });
      this.selectedNodeList = [];
    }
    this.setSelectedNodeList(node, this.isMultiple);
  }
  /**
   * add or remove node to selectedNodeList
   */
  setSelectedNodeList(node, isMultiple = false) {
    const index = this.getIndexOfArray(this.selectedNodeList, node.key);
    if (isMultiple) {
      if (node.isSelected && index === -1) {
        this.selectedNodeList.push(node);
      }
    } else {
      if (node.isSelected && index === -1) {
        this.selectedNodeList = [node];
      }
    }
    if (!node.isSelected) {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
    }
  }
  /**
   * merge checked nodes
   */
  setHalfCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.halfCheckedNodeList, node.key);
    if (node.isHalfChecked && index === -1) {
      this.halfCheckedNodeList.push(node);
    } else if (!node.isHalfChecked && index > -1) {
      this.halfCheckedNodeList = this.halfCheckedNodeList.filter((n) => node.key !== n.key);
    }
  }
  setCheckedNodeList(node) {
    const index = this.getIndexOfArray(this.checkedNodeList, node.key);
    if (node.isChecked && index === -1) {
      this.checkedNodeList.push(node);
    } else if (!node.isChecked && index > -1) {
      this.checkedNodeList = this.checkedNodeList.filter((n) => node.key !== n.key);
    }
  }
  /**
   * conduct checked/selected/expanded keys
   */
  conductNodeState(type = "check") {
    let resultNodesList = [];
    switch (type) {
      case "select":
        resultNodesList = this.selectedNodeList;
        break;
      case "expand":
        resultNodesList = this.expandedNodeList;
        break;
      case "match":
        resultNodesList = this.matchedNodeList;
        break;
      case "check":
        resultNodesList = this.checkedNodeList;
        const isIgnore = (node) => {
          const parentNode = node.getParentNode();
          if (parentNode) {
            if (this.checkedNodeList.findIndex((n) => n.key === parentNode.key) > -1) {
              return true;
            } else {
              return isIgnore(parentNode);
            }
          }
          return false;
        };
        if (!this.isCheckStrictly) {
          resultNodesList = this.checkedNodeList.filter((n) => !isIgnore(n));
        }
        break;
      case "halfCheck":
        if (!this.isCheckStrictly) {
          resultNodesList = this.halfCheckedNodeList;
        }
        break;
    }
    return resultNodesList;
  }
  /**
   * set expanded nodes
   */
  setExpandedNodeList(node) {
    if (node.isLeaf) {
      return;
    }
    const index = this.getIndexOfArray(this.expandedNodeList, node.key);
    if (node.isExpanded && index === -1) {
      this.expandedNodeList.push(node);
    } else if (!node.isExpanded && index > -1) {
      this.expandedNodeList.splice(index, 1);
    }
  }
  setMatchedNodeList(node) {
    const index = this.getIndexOfArray(this.matchedNodeList, node.key);
    if (node.isMatched && index === -1) {
      this.matchedNodeList.push(node);
    } else if (!node.isMatched && index > -1) {
      this.matchedNodeList.splice(index, 1);
    }
  }
  /**
   * check state
   *
   * @param isCheckStrictly
   */
  refreshCheckState(isCheckStrictly = false) {
    if (isCheckStrictly) {
      return;
    }
    this.checkedNodeList.forEach((node) => {
      this.conduct(node, isCheckStrictly);
    });
  }
  // reset other node checked state based current node
  conduct(node, isCheckStrictly = false) {
    const isChecked = node.isChecked;
    if (node && !isCheckStrictly) {
      this.conductUp(node);
      this.conductDown(node, isChecked);
    }
  }
  /**
   * 1、children half checked
   * 2、children all checked, parent checked
   * 3、no children checked
   */
  conductUp(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      if (!isCheckDisabled(parentNode)) {
        if (parentNode.children.every((child) => isCheckDisabled(child) || !child.isHalfChecked && child.isChecked)) {
          parentNode.isChecked = true;
          parentNode.isHalfChecked = false;
        } else if (parentNode.children.some((child) => child.isHalfChecked || child.isChecked)) {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = true;
        } else {
          parentNode.isChecked = false;
          parentNode.isHalfChecked = false;
        }
      }
      this.setCheckedNodeList(parentNode);
      this.setHalfCheckedNodeList(parentNode);
      this.conductUp(parentNode);
    }
  }
  /**
   * reset child check state
   */
  conductDown(node, value) {
    if (!isCheckDisabled(node)) {
      node.isChecked = value;
      node.isHalfChecked = false;
      this.setCheckedNodeList(node);
      this.setHalfCheckedNodeList(node);
      node.children.forEach((n) => {
        this.conductDown(n, value);
      });
    }
  }
  /**
   * flush after delete node
   */
  afterRemove(nodes) {
    const loopNode = (node) => {
      this.selectedNodeList = this.selectedNodeList.filter((n) => n.key !== node.key);
      this.expandedNodeList = this.expandedNodeList.filter((n) => n.key !== node.key);
      this.checkedNodeList = this.checkedNodeList.filter((n) => n.key !== node.key);
      if (node.children) {
        node.children.forEach((child) => {
          loopNode(child);
        });
      }
    };
    nodes.forEach((n) => {
      loopNode(n);
    });
    this.refreshCheckState(this.isCheckStrictly);
  }
  /**
   * drag event
   */
  refreshDragNode(node) {
    if (node.children.length === 0) {
      this.conductUp(node);
    } else {
      node.children.forEach((child) => {
        this.refreshDragNode(child);
      });
    }
  }
  // reset node level
  resetNodeLevel(node) {
    const parentNode = node.getParentNode();
    if (parentNode) {
      node.level = parentNode.level + 1;
    } else {
      node.level = 0;
    }
    for (const child of node.children) {
      this.resetNodeLevel(child);
    }
  }
  calcDropPosition(event) {
    const {
      clientY
    } = event;
    const {
      top,
      bottom,
      height
    } = event.target.getBoundingClientRect();
    const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
    if (clientY <= top + des) {
      return -1;
    } else if (clientY >= bottom - des) {
      return 1;
    }
    return 0;
  }
  /**
   * drop
   * 0: inner -1: pre 1: next
   */
  dropAndApply(targetNode, dragPos = -1) {
    if (!targetNode || dragPos > 1) {
      return;
    }
    const treeService = targetNode.treeService;
    const targetParent = targetNode.getParentNode();
    const isSelectedRootNode = this.selectedNode.getParentNode();
    if (isSelectedRootNode) {
      isSelectedRootNode.children = isSelectedRootNode.children.filter((n) => n.key !== this.selectedNode.key);
    } else {
      this.rootNodes = this.rootNodes.filter((n) => n.key !== this.selectedNode.key);
    }
    switch (dragPos) {
      case 0:
        targetNode.addChildren([this.selectedNode]);
        this.resetNodeLevel(targetNode);
        break;
      case -1:
      case 1:
        const tIndex = dragPos === 1 ? 1 : 0;
        if (targetParent) {
          targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
          const parentNode = this.selectedNode.getParentNode();
          if (parentNode) {
            this.resetNodeLevel(parentNode);
          }
        } else {
          const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
          this.rootNodes.splice(targetIndex, 0, this.selectedNode);
          this.rootNodes[targetIndex].parentNode = null;
          this.resetNodeLevel(this.rootNodes[targetIndex]);
        }
        break;
    }
    this.rootNodes.forEach((child) => {
      if (!child.treeService) {
        child.service = treeService;
      }
      this.refreshDragNode(child);
    });
  }
  /**
   * emit Structure
   * eventName
   * node
   * event: MouseEvent / DragEvent
   * dragNode
   */
  formatEvent(eventName, node, event) {
    const emitStructure = {
      eventName,
      node,
      event
    };
    switch (eventName) {
      case "dragstart":
      case "dragenter":
      case "dragover":
      case "dragleave":
      case "drop":
      case "dragend":
        Object.assign(emitStructure, {
          dragNode: this.getSelectedNode()
        });
        break;
      case "click":
      case "dblclick":
        Object.assign(emitStructure, {
          selectedKeys: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          nodes: this.selectedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.selectedNodeList.map((n) => n.key)
        });
        break;
      case "check":
        const checkedNodeList = this.getCheckedNodeList();
        Object.assign(emitStructure, {
          checkedKeys: checkedNodeList
        });
        Object.assign(emitStructure, {
          nodes: checkedNodeList
        });
        Object.assign(emitStructure, {
          keys: checkedNodeList.map((n) => n.key)
        });
        break;
      case "search":
        Object.assign(emitStructure, {
          matchedKeys: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          nodes: this.getMatchedNodeList()
        });
        Object.assign(emitStructure, {
          keys: this.getMatchedNodeList().map((n) => n.key)
        });
        break;
      case "expand":
        Object.assign(emitStructure, {
          nodes: this.expandedNodeList
        });
        Object.assign(emitStructure, {
          keys: this.expandedNodeList.map((n) => n.key)
        });
        break;
    }
    return emitStructure;
  }
  /**
   * New functions for flatten nodes
   */
  getIndexOfArray(list, key) {
    return list.findIndex((v) => v.key === key);
  }
  /**
   * Render by nzCheckedKeys
   * When keys equals null, just render with checkStrictly
   *
   * @param keys
   * @param checkStrictly
   */
  conductCheck(keys, checkStrictly) {
    this.checkedNodeList = [];
    this.halfCheckedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        if (keys === null) {
          node.isChecked = !!node.origin.checked;
        } else {
          if (isInArray(node.key, keys || [])) {
            node.isChecked = true;
            node.isHalfChecked = false;
          } else {
            node.isChecked = false;
            node.isHalfChecked = false;
          }
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
    this.refreshCheckState(checkStrictly);
  }
  conductExpandedKeys(keys = []) {
    const expandedKeySet = new Set(keys === true ? [] : keys);
    this.expandedNodeList = [];
    const calc = (nodes) => {
      nodes.forEach((node) => {
        node.setExpanded(keys === true || expandedKeySet.has(node.key) || node.isExpanded === true);
        if (node.isExpanded) {
          this.setExpandedNodeList(node);
        }
        if (node.children.length > 0) {
          calc(node.children);
        }
      });
    };
    calc(this.rootNodes);
  }
  conductSelectedKeys(keys, isMulti) {
    this.selectedNodeList.forEach((node) => node.isSelected = false);
    this.selectedNodeList = [];
    const calc = (nodes) => nodes.every((node) => {
      if (isInArray(node.key, keys)) {
        node.isSelected = true;
        this.setSelectedNodeList(node);
        if (!isMulti) {
          return false;
        }
      } else {
        node.isSelected = false;
      }
      if (node.children.length > 0) {
        return calc(node.children);
      }
      return true;
    });
    calc(this.rootNodes);
  }
  /**
   * Expand parent nodes by child node
   *
   * @param node
   */
  expandNodeAllParentBySearch(node) {
    const calc = (n) => {
      if (n) {
        n.canHide = false;
        n.setExpanded(true);
        this.setExpandedNodeList(n);
        if (n.getParentNode()) {
          return calc(n.getParentNode());
        }
      }
    };
    calc(node.getParentNode());
  }
};
_NzTreeBaseService.ɵfac = function NzTreeBaseService_Factory(t) {
  return new (t || _NzTreeBaseService)();
};
_NzTreeBaseService.ɵprov = ɵɵdefineInjectable({
  token: _NzTreeBaseService,
  factory: _NzTreeBaseService.ɵfac
});
var NzTreeBaseService = _NzTreeBaseService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeBaseService, [{
    type: Injectable
  }], null, null);
})();
var NzTreeHigherOrderServiceToken = new InjectionToken("NzTreeHigherOrder");
var NzTreeBase = class {
  constructor(nzTreeService) {
    this.nzTreeService = nzTreeService;
  }
  /**
   * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
   */
  coerceTreeNodes(value) {
    let nodes = [];
    if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
      nodes = value.map((item) => new NzTreeNode(item, null, this.nzTreeService));
    } else {
      nodes = value.map((item) => {
        item.service = this.nzTreeService;
        return item;
      });
    }
    return nodes;
  }
  /**
   * Get all nodes({@link NzTreeNode})
   */
  getTreeNodes() {
    return this.nzTreeService.rootNodes;
  }
  /**
   * Get {@link NzTreeNode} with key
   */
  getTreeNodeByKey(key) {
    const nodes = [];
    const getNode = (node) => {
      nodes.push(node);
      node.getChildren().forEach((n) => {
        getNode(n);
      });
    };
    this.getTreeNodes().forEach((n) => {
      getNode(n);
    });
    return nodes.find((n) => n.key === key) || null;
  }
  /**
   * Get checked nodes(merged)
   */
  getCheckedNodeList() {
    return this.nzTreeService.getCheckedNodeList();
  }
  /**
   * Get selected nodes
   */
  getSelectedNodeList() {
    return this.nzTreeService.getSelectedNodeList();
  }
  /**
   * Get half checked nodes
   */
  getHalfCheckedNodeList() {
    return this.nzTreeService.getHalfCheckedNodeList();
  }
  /**
   * Get expanded nodes
   */
  getExpandedNodeList() {
    return this.nzTreeService.getExpandedNodeList();
  }
  /**
   * Get matched nodes(if nzSearchValue is not null)
   */
  getMatchedNodeList() {
    return this.nzTreeService.getMatchedNodeList();
  }
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree.mjs
function NzTreeIndentComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("ant-tree-indent-unit", !ctx_r0.nzSelectMode)("ant-select-tree-indent-unit", ctx_r0.nzSelectMode)("ant-select-tree-indent-unit-start", ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-tree-indent-unit-start", !ctx_r0.nzSelectMode && ctx_r0.nzIsStart[i_r2])("ant-select-tree-indent-unit-end", ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2])("ant-tree-indent-unit-end", !ctx_r0.nzSelectMode && ctx_r0.nzIsEnd[i_r2]);
  }
}
var _c0 = ["builtin", ""];
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-tree-switcher-icon", ctx_r5.nzSelectMode)("ant-tree-switcher-icon", !ctx_r5.nzSelectMode);
  }
}
var _c1 = (a0, a1) => ({
  $implicit: a0,
  origin: a1
});
function NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzExpandedIcon)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r4.context, ctx_r4.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_0_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isLoading)("ngIfElse", _r3);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵproperty("nzType", ctx_r8.isSwitcherOpen ? "minus-square" : "plus-square");
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_1_Template, 1, 1, "span", 5)(2, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_span_2_Template, 1, 0, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.isShowLineIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.isShowLineIcon);
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("nzStringTemplateOutlet", ctx_r6.nzExpandedIcon)("nzStringTemplateOutletContext", ɵɵpureFunction2(2, _c1, ctx_r6.context, ctx_r6.context.origin));
  }
}
function NzTreeNodeSwitcherComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeSwitcherComponent_ng_container_1_ng_container_1_Template, 2, 5, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r3 = ɵɵreference(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.isLoading)("ngIfElse", _r3);
  }
}
function NzTreeNodeSwitcherComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 9);
  }
  if (rf & 2) {
    ɵɵproperty("nzSpin", true);
  }
}
function NzTreeNodeTitleComponent_ng_template_0_Template(rf, ctx) {
}
function NzTreeNodeTitleComponent_ng_container_1_span_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(3);
    ɵɵproperty("nzType", ctx_r4.icon);
  }
}
function NzTreeNodeTitleComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span")(1, "span");
    ɵɵtemplate(2, NzTreeNodeTitleComponent_ng_container_1_span_1_span_2_Template, 1, 1, "span", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("ant-tree-icon__open", ctx_r3.isSwitcherOpen)("ant-tree-icon__close", ctx_r3.isSwitcherClose)("ant-tree-icon_loading", ctx_r3.isLoading)("ant-select-tree-iconEle", ctx_r3.selectMode)("ant-tree-iconEle", !ctx_r3.selectMode);
    ɵɵadvance(1);
    ɵɵclassProp("ant-select-tree-iconEle", ctx_r3.selectMode)("ant-select-tree-icon__customize", ctx_r3.selectMode)("ant-tree-iconEle", !ctx_r3.selectMode)("ant-tree-icon__customize", !ctx_r3.selectMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.icon);
  }
}
function NzTreeNodeTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeNodeTitleComponent_ng_container_1_span_1_Template, 3, 19, "span", 3);
    ɵɵelement(2, "span", 4);
    ɵɵpipe(3, "nzHighlight");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.icon && ctx_r1.showIcon);
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ɵɵpipeBind4(3, 2, ctx_r1.title, ctx_r1.matchedValue, "i", "font-highlight"), ɵɵsanitizeHtml);
  }
}
function NzTreeNodeTitleComponent_nz_tree_drop_indicator_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-tree-drop-indicator", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("dropPosition", ctx_r2.dragPosition)("level", ctx_r2.context.level);
  }
}
function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node-switcher", 4);
    ɵɵlistener("click", function NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template_nz_tree_node_switcher_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clickExpand($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzShowExpand", ctx_r0.nzShowExpand)("nzShowLine", ctx_r0.nzShowLine)("nzExpandedIcon", ctx_r0.nzExpandedIcon)("nzSelectMode", ctx_r0.nzSelectMode)("context", ctx_r0.nzTreeNode)("isLeaf", ctx_r0.isLeaf)("isExpanded", ctx_r0.isExpanded)("isLoading", ctx_r0.isLoading);
  }
}
function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node-checkbox", 5);
    ɵɵlistener("click", function NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template_nz_tree_node_checkbox_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.clickCheckBox($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("nzSelectMode", ctx_r1.nzSelectMode)("isChecked", ctx_r1.isChecked)("isHalfChecked", ctx_r1.isHalfChecked)("isDisabled", ctx_r1.isDisabled)("isDisableCheckbox", ctx_r1.isDisableCheckbox);
  }
}
var _c2 = ["nzTreeTemplate"];
function NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_ng_template_1_Template(rf, ctx) {
}
var _c3 = (a0) => ({
  $implicit: a0
});
function NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    ɵɵnextContext(2);
    const _r3 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, node_r5));
  }
}
function NzTreeComponent_cdk_virtual_scroll_viewport_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 8);
    ɵɵtemplate(1, NzTreeComponent_cdk_virtual_scroll_viewport_6_ng_container_1_Template, 2, 4, "ng-container", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("height", ctx_r0.nzVirtualHeight);
    ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r0.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r0.nzSelectMode);
    ɵɵproperty("itemSize", ctx_r0.nzVirtualItemSize)("minBufferPx", ctx_r0.nzVirtualMinBufferPx)("maxBufferPx", ctx_r0.nzVirtualMaxBufferPx);
    ɵɵadvance(1);
    ɵɵproperty("cdkVirtualForOf", ctx_r0.nzFlattenNodes)("cdkVirtualForTrackBy", ctx_r0.trackByFlattenNode);
  }
}
function NzTreeComponent_div_7_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTreeComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NzTreeComponent_div_7_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const node_r8 = ctx.$implicit;
    ɵɵnextContext(2);
    const _r3 = ɵɵreference(9);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r3)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, node_r8));
  }
}
function NzTreeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, NzTreeComponent_div_7_ng_container_1_Template, 2, 4, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("ant-select-tree-list-holder-inner", ctx_r1.nzSelectMode)("ant-tree-list-holder-inner", !ctx_r1.nzSelectMode);
    ɵɵproperty("@.disabled", ctx_r1.beforeInit || !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("@treeCollapseMotion", ctx_r1.nzFlattenNodes.length);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.nzFlattenNodes)("ngForTrackBy", ctx_r1.trackByFlattenNode);
  }
}
function NzTreeComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-tree-node", 13);
    ɵɵlistener("nzExpandChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzExpandChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.eventTriggerChanged($event));
    })("nzClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzClick_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.eventTriggerChanged($event));
    })("nzDblClick", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzDblClick_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.eventTriggerChanged($event));
    })("nzContextMenu", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzContextMenu_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.eventTriggerChanged($event));
    })("nzCheckBoxChange", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzCheckBoxChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.eventTriggerChanged($event));
    })("nzOnDragStart", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragStart_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r17 = ɵɵnextContext();
      return ɵɵresetView(ctx_r17.eventTriggerChanged($event));
    })("nzOnDragEnter", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnter_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.eventTriggerChanged($event));
    })("nzOnDragOver", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragOver_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r19 = ɵɵnextContext();
      return ɵɵresetView(ctx_r19.eventTriggerChanged($event));
    })("nzOnDragLeave", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragLeave_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r20 = ɵɵnextContext();
      return ɵɵresetView(ctx_r20.eventTriggerChanged($event));
    })("nzOnDragEnd", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDragEnd_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.eventTriggerChanged($event));
    })("nzOnDrop", function NzTreeComponent_ng_template_8_Template_nz_tree_node_nzOnDrop_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r22 = ɵɵnextContext();
      return ɵɵresetView(ctx_r22.eventTriggerChanged($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const treeNode_r10 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("icon", treeNode_r10.icon)("title", treeNode_r10.title)("isLoading", treeNode_r10.isLoading)("isSelected", treeNode_r10.isSelected)("isDisabled", treeNode_r10.isDisabled)("isMatched", treeNode_r10.isMatched)("isExpanded", treeNode_r10.isExpanded)("isLeaf", treeNode_r10.isLeaf)("isStart", treeNode_r10.isStart)("isEnd", treeNode_r10.isEnd)("isChecked", treeNode_r10.isChecked)("isHalfChecked", treeNode_r10.isHalfChecked)("isDisableCheckbox", treeNode_r10.isDisableCheckbox)("isSelectable", treeNode_r10.isSelectable)("canHide", treeNode_r10.canHide)("nzTreeNode", treeNode_r10)("nzSelectMode", ctx_r2.nzSelectMode)("nzShowLine", ctx_r2.nzShowLine)("nzExpandedIcon", ctx_r2.nzExpandedIcon)("nzDraggable", ctx_r2.nzDraggable)("nzCheckable", ctx_r2.nzCheckable)("nzShowExpand", ctx_r2.nzShowExpand)("nzAsyncData", ctx_r2.nzAsyncData)("nzSearchValue", ctx_r2.nzSearchValue)("nzHideUnMatched", ctx_r2.nzHideUnMatched)("nzBeforeDrop", ctx_r2.nzBeforeDrop)("nzShowIcon", ctx_r2.nzShowIcon)("nzTreeTemplate", ctx_r2.nzTreeTemplate || ctx_r2.nzTreeTemplateChild);
  }
}
var _NzTreeDropIndicatorComponent = class _NzTreeDropIndicatorComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.level = 1;
    this.direction = "ltr";
    this.style = {};
  }
  ngOnChanges(_changes) {
    this.renderIndicator(this.dropPosition, this.direction);
  }
  renderIndicator(dropPosition, direction = "ltr") {
    const offset = 4;
    const startPosition = direction === "ltr" ? "left" : "right";
    const endPosition = direction === "ltr" ? "right" : "left";
    const style = {
      [startPosition]: `${offset}px`,
      [endPosition]: "0px"
    };
    switch (dropPosition) {
      case -1:
        style.top = `${-3}px`;
        break;
      case 1:
        style.bottom = `${-3}px`;
        break;
      case 0:
        style.bottom = `${-3}px`;
        style[startPosition] = `${offset + 24}px`;
        break;
      default:
        style.display = "none";
        break;
    }
    this.style = style;
    this.cdr.markForCheck();
  }
};
_NzTreeDropIndicatorComponent.ɵfac = function NzTreeDropIndicatorComponent_Factory(t) {
  return new (t || _NzTreeDropIndicatorComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeDropIndicatorComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeDropIndicatorComponent,
  selectors: [["nz-tree-drop-indicator"]],
  hostVars: 4,
  hostBindings: function NzTreeDropIndicatorComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleMap(ctx.style);
      ɵɵclassProp("ant-tree-drop-indicator", true);
    }
  },
  inputs: {
    dropPosition: "dropPosition",
    level: "level",
    direction: "direction"
  },
  exportAs: ["NzTreeDropIndicator"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 0,
  vars: 0,
  template: function NzTreeDropIndicatorComponent_Template(rf, ctx) {
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeDropIndicatorComponent = _NzTreeDropIndicatorComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeDropIndicatorComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-drop-indicator",
      exportAs: "NzTreeDropIndicator",
      template: ``,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-tree-drop-indicator]": "true",
        "[style]": "style"
      },
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    dropPosition: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    direction: [{
      type: Input
    }]
  });
})();
var _NzTreeIndentComponent = class _NzTreeIndentComponent {
  constructor() {
    this.nzTreeLevel = 0;
    this.nzIsStart = [];
    this.nzIsEnd = [];
    this.nzSelectMode = false;
    this.listOfUnit = [];
  }
  ngOnChanges(changes) {
    const {
      nzTreeLevel
    } = changes;
    if (nzTreeLevel) {
      this.listOfUnit = [...new Array(nzTreeLevel.currentValue || 0)];
    }
  }
};
_NzTreeIndentComponent.ɵfac = function NzTreeIndentComponent_Factory(t) {
  return new (t || _NzTreeIndentComponent)();
};
_NzTreeIndentComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeIndentComponent,
  selectors: [["nz-tree-indent"]],
  hostVars: 5,
  hostBindings: function NzTreeIndentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("aria-hidden", true);
      ɵɵclassProp("ant-tree-indent", !ctx.nzSelectMode)("ant-select-tree-indent", ctx.nzSelectMode);
    }
  },
  inputs: {
    nzTreeLevel: "nzTreeLevel",
    nzIsStart: "nzIsStart",
    nzIsEnd: "nzIsEnd",
    nzSelectMode: "nzSelectMode"
  },
  exportAs: ["nzTreeIndent"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "ant-tree-indent-unit", "ant-select-tree-indent-unit", "ant-select-tree-indent-unit-start", "ant-tree-indent-unit-start", "ant-select-tree-indent-unit-end", "ant-tree-indent-unit-end", 4, "ngFor", "ngForOf"]],
  template: function NzTreeIndentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeIndentComponent_span_0_Template, 1, 12, "span", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.listOfUnit);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeIndentComponent = _NzTreeIndentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeIndentComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-indent",
      exportAs: "nzTreeIndent",
      template: `
    <span
      [class.ant-tree-indent-unit]="!nzSelectMode"
      [class.ant-select-tree-indent-unit]="nzSelectMode"
      [class.ant-select-tree-indent-unit-start]="nzSelectMode && nzIsStart[i]"
      [class.ant-tree-indent-unit-start]="!nzSelectMode && nzIsStart[i]"
      [class.ant-select-tree-indent-unit-end]="nzSelectMode && nzIsEnd[i]"
      [class.ant-tree-indent-unit-end]="!nzSelectMode && nzIsEnd[i]"
      *ngFor="let _ of listOfUnit; let i = index"
    ></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[attr.aria-hidden]": "true",
        "[class.ant-tree-indent]": "!nzSelectMode",
        "[class.ant-select-tree-indent]": "nzSelectMode"
      },
      imports: [NgForOf],
      standalone: true
    }]
  }], null, {
    nzTreeLevel: [{
      type: Input
    }],
    nzIsStart: [{
      type: Input
    }],
    nzIsEnd: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeBuiltinCheckboxComponent = class _NzTreeNodeBuiltinCheckboxComponent {
  constructor() {
    this.nzSelectMode = false;
  }
};
_NzTreeNodeBuiltinCheckboxComponent.ɵfac = function NzTreeNodeBuiltinCheckboxComponent_Factory(t) {
  return new (t || _NzTreeNodeBuiltinCheckboxComponent)();
};
_NzTreeNodeBuiltinCheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeBuiltinCheckboxComponent,
  selectors: [["nz-tree-node-checkbox", "builtin", ""]],
  hostVars: 16,
  hostBindings: function NzTreeNodeBuiltinCheckboxComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree-checkbox", ctx.nzSelectMode)("ant-select-tree-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-checkbox-disabled", ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox))("ant-tree-checkbox", !ctx.nzSelectMode)("ant-tree-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-checkbox-disabled", !ctx.nzSelectMode && (ctx.isDisabled || ctx.isDisableCheckbox));
    }
  },
  inputs: {
    nzSelectMode: "nzSelectMode",
    isChecked: "isChecked",
    isHalfChecked: "isHalfChecked",
    isDisabled: "isDisabled",
    isDisableCheckbox: "isDisableCheckbox"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 1,
  vars: 4,
  template: function NzTreeNodeBuiltinCheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span");
    }
    if (rf & 2) {
      ɵɵclassProp("ant-tree-checkbox-inner", !ctx.nzSelectMode)("ant-select-tree-checkbox-inner", ctx.nzSelectMode);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeBuiltinCheckboxComponent = _NzTreeNodeBuiltinCheckboxComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeBuiltinCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-checkbox[builtin]",
      template: `
    <span [class.ant-tree-checkbox-inner]="!nzSelectMode" [class.ant-select-tree-checkbox-inner]="nzSelectMode"></span>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-checkbox]": `nzSelectMode`,
        "[class.ant-select-tree-checkbox-checked]": `nzSelectMode && isChecked`,
        "[class.ant-select-tree-checkbox-indeterminate]": `nzSelectMode && isHalfChecked`,
        "[class.ant-select-tree-checkbox-disabled]": `nzSelectMode && (isDisabled || isDisableCheckbox)`,
        "[class.ant-tree-checkbox]": `!nzSelectMode`,
        "[class.ant-tree-checkbox-checked]": `!nzSelectMode && isChecked`,
        "[class.ant-tree-checkbox-indeterminate]": `!nzSelectMode && isHalfChecked`,
        "[class.ant-tree-checkbox-disabled]": `!nzSelectMode && (isDisabled || isDisableCheckbox)`
      },
      standalone: true
    }]
  }], null, {
    nzSelectMode: [{
      type: Input
    }],
    isChecked: [{
      type: Input
    }],
    isHalfChecked: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isDisableCheckbox: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeSwitcherComponent = class _NzTreeNodeSwitcherComponent {
  constructor() {
    this.nzSelectMode = false;
  }
  get isShowLineIcon() {
    return !this.isLeaf && !!this.nzShowLine;
  }
  get isShowSwitchIcon() {
    return !this.isLeaf && !this.nzShowLine;
  }
  get isSwitcherOpen() {
    return !!this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
};
_NzTreeNodeSwitcherComponent.ɵfac = function NzTreeNodeSwitcherComponent_Factory(t) {
  return new (t || _NzTreeNodeSwitcherComponent)();
};
_NzTreeNodeSwitcherComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeSwitcherComponent,
  selectors: [["nz-tree-node-switcher"]],
  hostVars: 16,
  hostBindings: function NzTreeNodeSwitcherComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree-switcher", ctx.nzSelectMode)("ant-select-tree-switcher-noop", ctx.nzSelectMode && ctx.isLeaf)("ant-select-tree-switcher_open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-switcher_close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-switcher", !ctx.nzSelectMode)("ant-tree-switcher-noop", !ctx.nzSelectMode && ctx.isLeaf)("ant-tree-switcher_open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-switcher_close", !ctx.nzSelectMode && ctx.isSwitcherClose);
    }
  },
  inputs: {
    nzShowExpand: "nzShowExpand",
    nzShowLine: "nzShowLine",
    nzExpandedIcon: "nzExpandedIcon",
    nzSelectMode: "nzSelectMode",
    context: "context",
    isLeaf: "isLeaf",
    isLoading: "isLoading",
    isExpanded: "isExpanded"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 4,
  vars: 2,
  consts: [[4, "ngIf"], ["loadingTemplate", ""], [4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["nz-icon", "", "nzType", "caret-down"], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", "nzType", "file", "class", "ant-tree-switcher-line-icon", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], ["nz-icon", "", "nzType", "file", 1, "ant-tree-switcher-line-icon"], ["nz-icon", "", "nzType", "loading", 1, "ant-tree-switcher-loading-icon", 3, "nzSpin"]],
  template: function NzTreeNodeSwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeNodeSwitcherComponent_ng_container_0_Template, 2, 2, "ng-container", 0)(1, NzTreeNodeSwitcherComponent_ng_container_1_Template, 2, 2, "ng-container", 0)(2, NzTreeNodeSwitcherComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isShowSwitchIcon);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzShowLine);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeSwitcherComponent = _NzTreeNodeSwitcherComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeSwitcherComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-switcher",
      template: `
    <ng-container *ngIf="isShowSwitchIcon">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <span
            nz-icon
            nzType="caret-down"
            [class.ant-select-tree-switcher-icon]="nzSelectMode"
            [class.ant-tree-switcher-icon]="!nzSelectMode"
          ></span>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="nzShowLine">
      <ng-container *ngIf="!isLoading; else loadingTemplate">
        <ng-container *nzStringTemplateOutlet="nzExpandedIcon; context: { $implicit: context, origin: context.origin }">
          <span
            *ngIf="isShowLineIcon"
            nz-icon
            [nzType]="isSwitcherOpen ? 'minus-square' : 'plus-square'"
            class="ant-tree-switcher-line-icon"
          ></span>
          <span *ngIf="!isShowLineIcon" nz-icon nzType="file" class="ant-tree-switcher-line-icon"></span>
        </ng-container>
      </ng-container>
    </ng-container>
    <ng-template #loadingTemplate>
      <span nz-icon nzType="loading" [nzSpin]="true" class="ant-tree-switcher-loading-icon"></span>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-switcher]": "nzSelectMode",
        "[class.ant-select-tree-switcher-noop]": "nzSelectMode && isLeaf",
        "[class.ant-select-tree-switcher_open]": "nzSelectMode && isSwitcherOpen",
        "[class.ant-select-tree-switcher_close]": "nzSelectMode && isSwitcherClose",
        "[class.ant-tree-switcher]": "!nzSelectMode",
        "[class.ant-tree-switcher-noop]": "!nzSelectMode && isLeaf",
        "[class.ant-tree-switcher_open]": "!nzSelectMode && isSwitcherOpen",
        "[class.ant-tree-switcher_close]": "!nzSelectMode && isSwitcherClose"
      },
      imports: [NzIconModule, NgIf, NzOutletModule],
      standalone: true
    }]
  }], null, {
    nzShowExpand: [{
      type: Input
    }],
    nzShowLine: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    isLeaf: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeTitleComponent = class _NzTreeNodeTitleComponent {
  get canDraggable() {
    return this.draggable && !this.isDisabled ? true : null;
  }
  get matchedValue() {
    return this.isMatched ? this.searchValue : "";
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.treeTemplate = null;
    this.selectMode = false;
    this.showIndicator = true;
  }
  ngOnChanges(changes) {
    const {
      showIndicator,
      dragPosition
    } = changes;
    if (showIndicator || dragPosition) {
      this.cdr.markForCheck();
    }
  }
};
_NzTreeNodeTitleComponent.ɵfac = function NzTreeNodeTitleComponent_Factory(t) {
  return new (t || _NzTreeNodeTitleComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
};
_NzTreeNodeTitleComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeTitleComponent,
  selectors: [["nz-tree-node-title"]],
  hostVars: 21,
  hostBindings: function NzTreeNodeTitleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("title", ctx.title)("draggable", ctx.canDraggable)("aria-grabbed", ctx.canDraggable);
      ɵɵclassProp("draggable", ctx.canDraggable)("ant-select-tree-node-content-wrapper", ctx.selectMode)("ant-select-tree-node-content-wrapper-open", ctx.selectMode && ctx.isSwitcherOpen)("ant-select-tree-node-content-wrapper-close", ctx.selectMode && ctx.isSwitcherClose)("ant-select-tree-node-selected", ctx.selectMode && ctx.isSelected)("ant-tree-node-content-wrapper", !ctx.selectMode)("ant-tree-node-content-wrapper-open", !ctx.selectMode && ctx.isSwitcherOpen)("ant-tree-node-content-wrapper-close", !ctx.selectMode && ctx.isSwitcherClose)("ant-tree-node-selected", !ctx.selectMode && ctx.isSelected);
    }
  },
  inputs: {
    searchValue: "searchValue",
    treeTemplate: "treeTemplate",
    draggable: "draggable",
    showIcon: "showIcon",
    selectMode: "selectMode",
    context: "context",
    icon: "icon",
    title: "title",
    isLoading: "isLoading",
    isSelected: "isSelected",
    isDisabled: "isDisabled",
    isMatched: "isMatched",
    isExpanded: "isExpanded",
    isLeaf: "isLeaf",
    showIndicator: "showIndicator",
    dragPosition: "dragPosition"
  },
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "dropPosition", "level", 4, "ngIf"], [3, "ant-tree-icon__open", "ant-tree-icon__close", "ant-tree-icon_loading", "ant-select-tree-iconEle", "ant-tree-iconEle", 4, "ngIf"], [1, "ant-tree-title", 3, "innerHTML"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"], [3, "dropPosition", "level"]],
  template: function NzTreeNodeTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NzTreeNodeTitleComponent_ng_template_0_Template, 0, 0, "ng-template", 0)(1, NzTreeNodeTitleComponent_ng_container_1_Template, 4, 7, "ng-container", 1)(2, NzTreeNodeTitleComponent_nz_tree_drop_indicator_2_Template, 1, 2, "nz-tree-drop-indicator", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngTemplateOutlet", ctx.treeTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c1, ctx.context, ctx.context.origin));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.treeTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showIndicator);
    }
  },
  dependencies: [NgTemplateOutlet, NgIf, NzIconModule, NzIconDirective, NzHighlightModule, NzHighlightPipe, NzTreeDropIndicatorComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeTitleComponent = _NzTreeNodeTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node-title",
      template: `
    <ng-template
      [ngTemplateOutlet]="treeTemplate"
      [ngTemplateOutletContext]="{ $implicit: context, origin: context.origin }"
    ></ng-template>
    <ng-container *ngIf="!treeTemplate">
      <span
        *ngIf="icon && showIcon"
        [class.ant-tree-icon__open]="isSwitcherOpen"
        [class.ant-tree-icon__close]="isSwitcherClose"
        [class.ant-tree-icon_loading]="isLoading"
        [class.ant-select-tree-iconEle]="selectMode"
        [class.ant-tree-iconEle]="!selectMode"
      >
        <span
          [class.ant-select-tree-iconEle]="selectMode"
          [class.ant-select-tree-icon__customize]="selectMode"
          [class.ant-tree-iconEle]="!selectMode"
          [class.ant-tree-icon__customize]="!selectMode"
        >
          <span nz-icon *ngIf="icon" [nzType]="icon"></span>
        </span>
      </span>
      <span class="ant-tree-title" [innerHTML]="title | nzHighlight: matchedValue : 'i' : 'font-highlight'"></span>
    </ng-container>
    <nz-tree-drop-indicator
      *ngIf="showIndicator"
      [dropPosition]="dragPosition"
      [level]="context.level"
    ></nz-tree-drop-indicator>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[attr.title]": "title",
        "[attr.draggable]": "canDraggable",
        "[attr.aria-grabbed]": "canDraggable",
        "[class.draggable]": "canDraggable",
        "[class.ant-select-tree-node-content-wrapper]": `selectMode`,
        "[class.ant-select-tree-node-content-wrapper-open]": `selectMode && isSwitcherOpen`,
        "[class.ant-select-tree-node-content-wrapper-close]": `selectMode && isSwitcherClose`,
        "[class.ant-select-tree-node-selected]": `selectMode && isSelected`,
        "[class.ant-tree-node-content-wrapper]": `!selectMode`,
        "[class.ant-tree-node-content-wrapper-open]": `!selectMode && isSwitcherOpen`,
        "[class.ant-tree-node-content-wrapper-close]": `!selectMode && isSwitcherClose`,
        "[class.ant-tree-node-selected]": `!selectMode && isSelected`
      },
      imports: [NgTemplateOutlet, NgIf, NzIconModule, NzHighlightModule, NzTreeDropIndicatorComponent],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    searchValue: [{
      type: Input
    }],
    treeTemplate: [{
      type: Input
    }],
    draggable: [{
      type: Input
    }],
    showIcon: [{
      type: Input
    }],
    selectMode: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isMatched: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    isLeaf: [{
      type: Input
    }],
    showIndicator: [{
      type: Input
    }],
    dragPosition: [{
      type: Input
    }]
  });
})();
var _NzTreeNodeBuiltinComponent = class _NzTreeNodeBuiltinComponent {
  /**
   * default set
   */
  get displayStyle() {
    return this.nzSearchValue && this.nzHideUnMatched && !this.isMatched && !this.isExpanded && this.canHide ? "none" : "";
  }
  get isSwitcherOpen() {
    return this.isExpanded && !this.isLeaf;
  }
  get isSwitcherClose() {
    return !this.isExpanded && !this.isLeaf;
  }
  /**
   * collapse node
   *
   * @param event
   */
  clickExpand(event) {
    event.preventDefault();
    if (!this.isLoading && !this.isLeaf) {
      if (this.nzAsyncData && this.nzTreeNode.children.length === 0 && !this.isExpanded) {
        this.nzTreeNode.isLoading = true;
      }
      this.nzTreeNode.setExpanded(!this.isExpanded);
    }
    this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("expand", this.nzTreeNode, event);
    this.nzExpandChange.emit(eventNext);
  }
  clickSelect(event) {
    event.preventDefault();
    if (this.isSelectable && !this.isDisabled) {
      this.nzTreeNode.isSelected = !this.nzTreeNode.isSelected;
    }
    this.nzTreeService.setSelectedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("click", this.nzTreeNode, event);
    this.nzClick.emit(eventNext);
  }
  dblClick(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent("dblclick", this.nzTreeNode, event);
    this.nzDblClick.emit(eventNext);
  }
  contextMenu(event) {
    event.preventDefault();
    const eventNext = this.nzTreeService.formatEvent("contextmenu", this.nzTreeNode, event);
    this.nzContextMenu.emit(eventNext);
  }
  /**
   * check node
   *
   * @param event
   */
  clickCheckBox(event) {
    event.preventDefault();
    if (this.isDisabled || this.isDisableCheckbox) {
      return;
    }
    this.nzTreeNode.isChecked = !this.nzTreeNode.isChecked;
    this.nzTreeNode.isHalfChecked = false;
    this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
    const eventNext = this.nzTreeService.formatEvent("check", this.nzTreeNode, event);
    this.nzCheckBoxChange.emit(eventNext);
  }
  clearDragClass() {
    const dragClass = ["drag-over-gap-top", "drag-over-gap-bottom", "drag-over", "drop-target"];
    dragClass.forEach((e) => {
      this.renderer.removeClass(this.elementRef.nativeElement, e);
    });
  }
  /**
   * drag event
   *
   * @param e
   */
  handleDragStart(e) {
    try {
      e.dataTransfer.setData("text/plain", this.nzTreeNode.key);
    } catch (error) {
    }
    this.nzTreeService.setSelectedNode(this.nzTreeNode);
    this.draggingKey = this.nzTreeNode.key;
    const eventNext = this.nzTreeService.formatEvent("dragstart", this.nzTreeNode, e);
    this.nzOnDragStart.emit(eventNext);
  }
  handleDragEnter(e) {
    e.preventDefault();
    this.showIndicator = this.nzTreeNode.key !== this.nzTreeService.getSelectedNode()?.key;
    this.renderIndicator(2);
    this.ngZone.run(() => {
      const eventNext = this.nzTreeService.formatEvent("dragenter", this.nzTreeNode, e);
      this.nzOnDragEnter.emit(eventNext);
    });
  }
  handleDragOver(e) {
    e.preventDefault();
    const dropPosition = this.nzTreeService.calcDropPosition(e);
    if (this.dragPos !== dropPosition) {
      this.clearDragClass();
      this.renderIndicator(dropPosition);
      if (!(this.dragPos === 0 && this.isLeaf)) {
        this.renderer.addClass(this.elementRef.nativeElement, this.dragPosClass[this.dragPos]);
        this.renderer.addClass(this.elementRef.nativeElement, "drop-target");
      }
    }
    const eventNext = this.nzTreeService.formatEvent("dragover", this.nzTreeNode, e);
    this.nzOnDragOver.emit(eventNext);
  }
  handleDragLeave(e) {
    e.preventDefault();
    this.renderIndicator(2);
    this.clearDragClass();
    const eventNext = this.nzTreeService.formatEvent("dragleave", this.nzTreeNode, e);
    this.nzOnDragLeave.emit(eventNext);
  }
  handleDragDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    this.ngZone.run(() => {
      this.showIndicator = false;
      this.clearDragClass();
      const node = this.nzTreeService.getSelectedNode();
      if (!node || node && node.key === this.nzTreeNode.key || this.dragPos === 0 && this.isLeaf) {
        return;
      }
      const dropEvent = this.nzTreeService.formatEvent("drop", this.nzTreeNode, e);
      const dragEndEvent = this.nzTreeService.formatEvent("dragend", this.nzTreeNode, e);
      if (this.nzBeforeDrop) {
        this.nzBeforeDrop({
          dragNode: this.nzTreeService.getSelectedNode(),
          node: this.nzTreeNode,
          pos: this.dragPos
        }).subscribe((canDrop) => {
          if (canDrop) {
            this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
          }
          this.nzOnDrop.emit(dropEvent);
          this.nzOnDragEnd.emit(dragEndEvent);
        });
      } else if (this.nzTreeNode) {
        this.nzTreeService.dropAndApply(this.nzTreeNode, this.dragPos);
        this.nzOnDrop.emit(dropEvent);
      }
    });
  }
  handleDragEnd(e) {
    e.preventDefault();
    this.ngZone.run(() => {
      if (!this.nzBeforeDrop) {
        this.draggingKey = null;
        const eventNext = this.nzTreeService.formatEvent("dragend", this.nzTreeNode, e);
        this.nzOnDragEnd.emit(eventNext);
      } else {
        this.draggingKey = null;
        this.markForCheck();
      }
    });
  }
  /**
   * Listening to dragging events.
   */
  handDragEvent() {
    this.ngZone.runOutsideAngular(() => {
      if (this.nzDraggable) {
        const nativeElement = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        fromEvent(nativeElement, "dragstart").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragStart(e));
        fromEvent(nativeElement, "dragenter").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragEnter(e));
        fromEvent(nativeElement, "dragover").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragOver(e));
        fromEvent(nativeElement, "dragleave").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragLeave(e));
        fromEvent(nativeElement, "drop").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragDrop(e));
        fromEvent(nativeElement, "dragend").pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleDragEnd(e));
      } else {
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    });
  }
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzTreeService, ngZone, renderer, elementRef, cdr, noAnimation) {
    this.nzTreeService = nzTreeService;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.noAnimation = noAnimation;
    this.icon = "";
    this.title = "";
    this.isLoading = false;
    this.isSelected = false;
    this.isDisabled = false;
    this.isMatched = false;
    this.isStart = [];
    this.isEnd = [];
    this.nzHideUnMatched = false;
    this.nzNoAnimation = false;
    this.nzSelectMode = false;
    this.nzShowIcon = false;
    this.nzTreeTemplate = null;
    this.nzSearchValue = "";
    this.nzDraggable = false;
    this.nzClick = new EventEmitter();
    this.nzDblClick = new EventEmitter();
    this.nzContextMenu = new EventEmitter();
    this.nzCheckBoxChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnDragStart = new EventEmitter();
    this.nzOnDragEnter = new EventEmitter();
    this.nzOnDragOver = new EventEmitter();
    this.nzOnDragLeave = new EventEmitter();
    this.nzOnDrop = new EventEmitter();
    this.nzOnDragEnd = new EventEmitter();
    this.destroy$ = new Subject();
    this.dragPos = 2;
    this.dragPosClass = {
      0: "drag-over",
      1: "drag-over-gap-bottom",
      "-1": "drag-over-gap-top"
    };
    this.draggingKey = null;
    this.showIndicator = false;
  }
  ngOnInit() {
    this.nzTreeNode.component = this;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "mousedown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.nzSelectMode) {
          event.preventDefault();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzDraggable
    } = changes;
    if (nzDraggable) {
      this.handDragEvent();
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  renderIndicator(dropPosition) {
    this.ngZone.run(() => {
      this.showIndicator = dropPosition !== 2;
      if (this.nzTreeNode.key === this.nzTreeService.getSelectedNode()?.key || dropPosition === 0 && this.isLeaf) {
        return;
      }
      this.dragPos = dropPosition;
      this.cdr.markForCheck();
    });
  }
};
_NzTreeNodeBuiltinComponent.ɵfac = function NzTreeNodeBuiltinComponent_Factory(t) {
  return new (t || _NzTreeNodeBuiltinComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzTreeNodeBuiltinComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeNodeBuiltinComponent,
  selectors: [["nz-tree-node", "builtin", ""]],
  hostVars: 36,
  hostBindings: function NzTreeNodeBuiltinComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.displayStyle);
      ɵɵclassProp("ant-select-tree-treenode", ctx.nzSelectMode)("ant-select-tree-treenode-disabled", ctx.nzSelectMode && ctx.isDisabled)("ant-select-tree-treenode-switcher-open", ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-select-tree-treenode-switcher-close", ctx.nzSelectMode && ctx.isSwitcherClose)("ant-select-tree-treenode-checkbox-checked", ctx.nzSelectMode && ctx.isChecked)("ant-select-tree-treenode-checkbox-indeterminate", ctx.nzSelectMode && ctx.isHalfChecked)("ant-select-tree-treenode-selected", ctx.nzSelectMode && ctx.isSelected)("ant-select-tree-treenode-loading", ctx.nzSelectMode && ctx.isLoading)("ant-tree-treenode", !ctx.nzSelectMode)("ant-tree-treenode-disabled", !ctx.nzSelectMode && ctx.isDisabled)("ant-tree-treenode-switcher-open", !ctx.nzSelectMode && ctx.isSwitcherOpen)("ant-tree-treenode-switcher-close", !ctx.nzSelectMode && ctx.isSwitcherClose)("ant-tree-treenode-checkbox-checked", !ctx.nzSelectMode && ctx.isChecked)("ant-tree-treenode-checkbox-indeterminate", !ctx.nzSelectMode && ctx.isHalfChecked)("ant-tree-treenode-selected", !ctx.nzSelectMode && ctx.isSelected)("ant-tree-treenode-loading", !ctx.nzSelectMode && ctx.isLoading)("dragging", ctx.draggingKey === ctx.nzTreeNode.key);
    }
  },
  inputs: {
    icon: "icon",
    title: "title",
    isLoading: "isLoading",
    isSelected: "isSelected",
    isDisabled: "isDisabled",
    isMatched: "isMatched",
    isExpanded: "isExpanded",
    isLeaf: "isLeaf",
    isChecked: "isChecked",
    isHalfChecked: "isHalfChecked",
    isDisableCheckbox: "isDisableCheckbox",
    isSelectable: "isSelectable",
    canHide: "canHide",
    isStart: "isStart",
    isEnd: "isEnd",
    nzTreeNode: "nzTreeNode",
    nzShowLine: "nzShowLine",
    nzShowExpand: "nzShowExpand",
    nzCheckable: "nzCheckable",
    nzAsyncData: "nzAsyncData",
    nzHideUnMatched: "nzHideUnMatched",
    nzNoAnimation: "nzNoAnimation",
    nzSelectMode: "nzSelectMode",
    nzShowIcon: "nzShowIcon",
    nzExpandedIcon: "nzExpandedIcon",
    nzTreeTemplate: "nzTreeTemplate",
    nzBeforeDrop: "nzBeforeDrop",
    nzSearchValue: "nzSearchValue",
    nzDraggable: "nzDraggable"
  },
  outputs: {
    nzClick: "nzClick",
    nzDblClick: "nzDblClick",
    nzContextMenu: "nzContextMenu",
    nzCheckBoxChange: "nzCheckBoxChange",
    nzExpandChange: "nzExpandChange",
    nzOnDragStart: "nzOnDragStart",
    nzOnDragEnter: "nzOnDragEnter",
    nzOnDragOver: "nzOnDragOver",
    nzOnDragLeave: "nzOnDragLeave",
    nzOnDrop: "nzOnDrop",
    nzOnDragEnd: "nzOnDragEnd"
  },
  exportAs: ["nzTreeBuiltinNode"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  attrs: _c0,
  decls: 4,
  vars: 22,
  consts: [[3, "nzTreeLevel", "nzSelectMode", "nzIsStart", "nzIsEnd"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click", 4, "ngIf"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click", 4, "ngIf"], [3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "searchValue", "treeTemplate", "draggable", "showIcon", "selectMode", "context", "showIndicator", "dragPosition", "dblclick", "click", "contextmenu"], [3, "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzSelectMode", "context", "isLeaf", "isExpanded", "isLoading", "click"], ["builtin", "", 3, "nzSelectMode", "isChecked", "isHalfChecked", "isDisabled", "isDisableCheckbox", "click"]],
  template: function NzTreeNodeBuiltinComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "nz-tree-indent", 0);
      ɵɵtemplate(1, NzTreeNodeBuiltinComponent_nz_tree_node_switcher_1_Template, 1, 8, "nz-tree-node-switcher", 1)(2, NzTreeNodeBuiltinComponent_nz_tree_node_checkbox_2_Template, 1, 5, "nz-tree-node-checkbox", 2);
      ɵɵelementStart(3, "nz-tree-node-title", 3);
      ɵɵlistener("dblclick", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_dblclick_3_listener($event) {
        return ctx.dblClick($event);
      })("click", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_click_3_listener($event) {
        return ctx.clickSelect($event);
      })("contextmenu", function NzTreeNodeBuiltinComponent_Template_nz_tree_node_title_contextmenu_3_listener($event) {
        return ctx.contextMenu($event);
      });
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("nzTreeLevel", ctx.nzTreeNode.level)("nzSelectMode", ctx.nzSelectMode)("nzIsStart", ctx.isStart)("nzIsEnd", ctx.isEnd);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzShowExpand);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzCheckable);
      ɵɵadvance(1);
      ɵɵproperty("icon", ctx.icon)("title", ctx.title)("isLoading", ctx.isLoading)("isSelected", ctx.isSelected)("isDisabled", ctx.isDisabled)("isMatched", ctx.isMatched)("isExpanded", ctx.isExpanded)("isLeaf", ctx.isLeaf)("searchValue", ctx.nzSearchValue)("treeTemplate", ctx.nzTreeTemplate)("draggable", ctx.nzDraggable)("showIcon", ctx.nzShowIcon)("selectMode", ctx.nzSelectMode)("context", ctx.nzTreeNode)("showIndicator", ctx.showIndicator)("dragPosition", ctx.dragPos);
    }
  },
  dependencies: [NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NgIf, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTreeNodeBuiltinComponent = _NzTreeNodeBuiltinComponent;
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzShowLine", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzShowExpand", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzCheckable", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzAsyncData", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzHideUnMatched", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzNoAnimation", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzSelectMode", void 0);
__decorate([InputBoolean()], NzTreeNodeBuiltinComponent.prototype, "nzShowIcon", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeNodeBuiltinComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-node[builtin]",
      exportAs: "nzTreeBuiltinNode",
      template: `
    <nz-tree-indent
      [nzTreeLevel]="nzTreeNode.level"
      [nzSelectMode]="nzSelectMode"
      [nzIsStart]="isStart"
      [nzIsEnd]="isEnd"
    ></nz-tree-indent>
    <nz-tree-node-switcher
      *ngIf="nzShowExpand"
      [nzShowExpand]="nzShowExpand"
      [nzShowLine]="nzShowLine"
      [nzExpandedIcon]="nzExpandedIcon"
      [nzSelectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [isLeaf]="isLeaf"
      [isExpanded]="isExpanded"
      [isLoading]="isLoading"
      (click)="clickExpand($event)"
    ></nz-tree-node-switcher>
    <nz-tree-node-checkbox
      builtin
      *ngIf="nzCheckable"
      (click)="clickCheckBox($event)"
      [nzSelectMode]="nzSelectMode"
      [isChecked]="isChecked"
      [isHalfChecked]="isHalfChecked"
      [isDisabled]="isDisabled"
      [isDisableCheckbox]="isDisableCheckbox"
    ></nz-tree-node-checkbox>
    <nz-tree-node-title
      [icon]="icon"
      [title]="title"
      [isLoading]="isLoading"
      [isSelected]="isSelected"
      [isDisabled]="isDisabled"
      [isMatched]="isMatched"
      [isExpanded]="isExpanded"
      [isLeaf]="isLeaf"
      [searchValue]="nzSearchValue"
      [treeTemplate]="nzTreeTemplate"
      [draggable]="nzDraggable"
      [showIcon]="nzShowIcon"
      [selectMode]="nzSelectMode"
      [context]="nzTreeNode"
      [showIndicator]="showIndicator"
      [dragPosition]="dragPos"
      (dblclick)="dblClick($event)"
      (click)="clickSelect($event)"
      (contextmenu)="contextMenu($event)"
    ></nz-tree-node-title>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      host: {
        "[class.ant-select-tree-treenode]": `nzSelectMode`,
        "[class.ant-select-tree-treenode-disabled]": `nzSelectMode && isDisabled`,
        "[class.ant-select-tree-treenode-switcher-open]": `nzSelectMode && isSwitcherOpen`,
        "[class.ant-select-tree-treenode-switcher-close]": `nzSelectMode && isSwitcherClose`,
        "[class.ant-select-tree-treenode-checkbox-checked]": `nzSelectMode && isChecked`,
        "[class.ant-select-tree-treenode-checkbox-indeterminate]": `nzSelectMode && isHalfChecked`,
        "[class.ant-select-tree-treenode-selected]": `nzSelectMode && isSelected`,
        "[class.ant-select-tree-treenode-loading]": `nzSelectMode && isLoading`,
        "[class.ant-tree-treenode]": `!nzSelectMode`,
        "[class.ant-tree-treenode-disabled]": `!nzSelectMode && isDisabled`,
        "[class.ant-tree-treenode-switcher-open]": `!nzSelectMode && isSwitcherOpen`,
        "[class.ant-tree-treenode-switcher-close]": `!nzSelectMode && isSwitcherClose`,
        "[class.ant-tree-treenode-checkbox-checked]": `!nzSelectMode && isChecked`,
        "[class.ant-tree-treenode-checkbox-indeterminate]": `!nzSelectMode && isHalfChecked`,
        "[class.ant-tree-treenode-selected]": `!nzSelectMode && isSelected`,
        "[class.ant-tree-treenode-loading]": `!nzSelectMode && isLoading`,
        "[class.dragging]": `draggingKey === nzTreeNode.key`,
        "[style.display]": "displayStyle"
      },
      imports: [NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NgIf, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent],
      standalone: true
    }]
  }], () => [{
    type: NzTreeBaseService
  }, {
    type: NgZone
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], {
    icon: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    isLoading: [{
      type: Input
    }],
    isSelected: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isMatched: [{
      type: Input
    }],
    isExpanded: [{
      type: Input
    }],
    isLeaf: [{
      type: Input
    }],
    isChecked: [{
      type: Input
    }],
    isHalfChecked: [{
      type: Input
    }],
    isDisableCheckbox: [{
      type: Input
    }],
    isSelectable: [{
      type: Input
    }],
    canHide: [{
      type: Input
    }],
    isStart: [{
      type: Input
    }],
    isEnd: [{
      type: Input
    }],
    nzTreeNode: [{
      type: Input
    }],
    nzShowLine: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input
    }],
    nzCheckable: [{
      type: Input
    }],
    nzAsyncData: [{
      type: Input
    }],
    nzHideUnMatched: [{
      type: Input
    }],
    nzNoAnimation: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }],
    nzShowIcon: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzBeforeDrop: [{
      type: Input
    }],
    nzSearchValue: [{
      type: Input
    }],
    nzDraggable: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }],
    nzDblClick: [{
      type: Output
    }],
    nzContextMenu: [{
      type: Output
    }],
    nzCheckBoxChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnDragStart: [{
      type: Output
    }],
    nzOnDragEnter: [{
      type: Output
    }],
    nzOnDragOver: [{
      type: Output
    }],
    nzOnDragLeave: [{
      type: Output
    }],
    nzOnDrop: [{
      type: Output
    }],
    nzOnDragEnd: [{
      type: Output
    }]
  });
})();
var _NzTreeService = class _NzTreeService extends NzTreeBaseService {
  constructor() {
    super();
  }
};
_NzTreeService.ɵfac = function NzTreeService_Factory(t) {
  return new (t || _NzTreeService)();
};
_NzTreeService.ɵprov = ɵɵdefineInjectable({
  token: _NzTreeService,
  factory: _NzTreeService.ɵfac
});
var NzTreeService = _NzTreeService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeService, [{
    type: Injectable
  }], () => [], null);
})();
function NzTreeServiceFactory() {
  const higherOrderService = inject(NzTreeHigherOrderServiceToken, {
    skipSelf: true,
    optional: true
  });
  const treeService = inject(NzTreeService);
  return higherOrderService ?? treeService;
}
var NZ_CONFIG_MODULE_NAME = "tree";
var _NzTreeComponent = class _NzTreeComponent extends NzTreeBase {
  writeValue(value) {
    this.handleNzData(value);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Render all properties of nzTree
   *
   * @param changes: all changes from @Input
   */
  renderTreeProperties(changes) {
    let useDefaultExpandedKeys = false;
    let expandAll = false;
    const {
      nzData,
      nzExpandedKeys,
      nzSelectedKeys,
      nzCheckedKeys,
      nzCheckStrictly,
      nzExpandAll,
      nzMultiple,
      nzSearchValue
    } = changes;
    if (nzExpandAll) {
      useDefaultExpandedKeys = true;
      expandAll = this.nzExpandAll;
    }
    if (nzMultiple) {
      this.nzTreeService.isMultiple = this.nzMultiple;
    }
    if (nzCheckStrictly) {
      this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
    }
    if (nzData) {
      this.handleNzData(this.nzData);
    }
    if (nzCheckedKeys) {
      this.handleCheckedKeys(this.nzCheckedKeys);
    }
    if (nzCheckStrictly) {
      this.handleCheckedKeys(null);
    }
    if (nzExpandedKeys || nzExpandAll) {
      useDefaultExpandedKeys = true;
      this.handleExpandedKeys(expandAll || this.nzExpandedKeys);
    }
    if (nzSelectedKeys) {
      this.handleSelectedKeys(this.nzSelectedKeys, this.nzMultiple);
    }
    if (nzSearchValue) {
      if (!(nzSearchValue.firstChange && !this.nzSearchValue)) {
        useDefaultExpandedKeys = false;
        this.handleSearchValue(nzSearchValue.currentValue, this.nzSearchFunc);
        this.nzSearchValueChange.emit(this.nzTreeService.formatEvent("search", null, null));
      }
    }
    const currentExpandedKeys = this.getExpandedNodeList().map((v) => v.key);
    const newExpandedKeys = useDefaultExpandedKeys ? expandAll || this.nzExpandedKeys : currentExpandedKeys;
    this.handleFlattenNodes(this.nzTreeService.rootNodes, newExpandedKeys);
  }
  trackByFlattenNode(_, node) {
    return node.key;
  }
  // Deal with properties
  /**
   * nzData
   *
   * @param value
   */
  handleNzData(value) {
    if (Array.isArray(value)) {
      const data = this.coerceTreeNodes(value);
      this.nzTreeService.initTree(data);
    }
  }
  handleFlattenNodes(data, expandKeys = []) {
    this.nzTreeService.flattenTreeData(data, expandKeys);
  }
  handleCheckedKeys(keys) {
    this.nzTreeService.conductCheck(keys, this.nzCheckStrictly);
  }
  handleExpandedKeys(keys = []) {
    this.nzTreeService.conductExpandedKeys(keys);
  }
  handleSelectedKeys(keys, isMulti) {
    this.nzTreeService.conductSelectedKeys(keys, isMulti);
  }
  handleSearchValue(value, searchFunc) {
    const dataList = flattenTreeData(this.nzTreeService.rootNodes, true).map((v) => v.data);
    const checkIfMatched = (node) => {
      if (searchFunc) {
        return searchFunc(node.origin);
      }
      return !value || !node.title.toLowerCase().includes(value.toLowerCase()) ? false : true;
    };
    dataList.forEach((v) => {
      v.isMatched = checkIfMatched(v);
      v.canHide = !v.isMatched;
      if (!v.isMatched) {
        v.setExpanded(false);
        this.nzTreeService.setExpandedNodeList(v);
      } else {
        this.nzTreeService.expandNodeAllParentBySearch(v);
      }
      this.nzTreeService.setMatchedNodeList(v);
    });
  }
  /**
   * Handle emit event
   *
   * @param event
   * handle each event
   */
  eventTriggerChanged(event) {
    const node = event.node;
    switch (event.eventName) {
      case "expand":
        this.renderTree();
        this.nzExpandChange.emit(event);
        break;
      case "click":
        this.nzClick.emit(event);
        break;
      case "dblclick":
        this.nzDblClick.emit(event);
        break;
      case "contextmenu":
        this.nzContextMenu.emit(event);
        break;
      case "check":
        this.nzTreeService.setCheckedNodeList(node);
        if (!this.nzCheckStrictly) {
          this.nzTreeService.conduct(node);
        }
        const eventNext = this.nzTreeService.formatEvent("check", node, event.event);
        this.nzCheckBoxChange.emit(eventNext);
        const checkedKeys = this.nzTreeService.getCheckedNodeKeys();
        this.nzCheckedKeysChange.emit(checkedKeys);
        break;
      case "dragstart":
        if (node.isExpanded) {
          node.setExpanded(!node.isExpanded);
          this.renderTree();
        }
        this.nzOnDragStart.emit(event);
        break;
      case "dragenter":
        const selectedNode = this.nzTreeService.getSelectedNode();
        if (selectedNode && selectedNode.key !== node.key && !node.isExpanded && !node.isLeaf) {
          node.setExpanded(true);
          this.renderTree();
        }
        this.nzOnDragEnter.emit(event);
        break;
      case "dragover":
        this.nzOnDragOver.emit(event);
        break;
      case "dragleave":
        this.nzOnDragLeave.emit(event);
        break;
      case "dragend":
        this.nzOnDragEnd.emit(event);
        break;
      case "drop":
        this.renderTree();
        this.nzOnDrop.emit(event);
        break;
    }
  }
  /**
   * Click expand icon
   */
  renderTree() {
    this.handleFlattenNodes(this.nzTreeService.rootNodes, this.getExpandedNodeList().map((v) => v.key));
    this.cdr.markForCheck();
  }
  // Handle emit event end
  constructor(nzTreeService, nzConfigService, cdr, directionality, noAnimation) {
    super(nzTreeService);
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzShowIcon = false;
    this.nzHideUnMatched = false;
    this.nzBlockNode = false;
    this.nzExpandAll = false;
    this.nzSelectMode = false;
    this.nzCheckStrictly = false;
    this.nzShowExpand = true;
    this.nzShowLine = false;
    this.nzCheckable = false;
    this.nzAsyncData = false;
    this.nzDraggable = false;
    this.nzMultiple = false;
    this.nzVirtualItemSize = 28;
    this.nzVirtualMaxBufferPx = 500;
    this.nzVirtualMinBufferPx = 28;
    this.nzVirtualHeight = null;
    this.nzData = [];
    this.nzExpandedKeys = [];
    this.nzSelectedKeys = [];
    this.nzCheckedKeys = [];
    this.nzSearchValue = "";
    this.nzFlattenNodes = [];
    this.beforeInit = true;
    this.dir = "ltr";
    this.nzExpandedKeysChange = new EventEmitter();
    this.nzSelectedKeysChange = new EventEmitter();
    this.nzCheckedKeysChange = new EventEmitter();
    this.nzSearchValueChange = new EventEmitter();
    this.nzClick = new EventEmitter();
    this.nzDblClick = new EventEmitter();
    this.nzContextMenu = new EventEmitter();
    this.nzCheckBoxChange = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnDragStart = new EventEmitter();
    this.nzOnDragEnter = new EventEmitter();
    this.nzOnDragOver = new EventEmitter();
    this.nzOnDragLeave = new EventEmitter();
    this.nzOnDrop = new EventEmitter();
    this.nzOnDragEnd = new EventEmitter();
    this.HIDDEN_STYLE = {
      width: 0,
      height: 0,
      display: "flex",
      overflow: "hidden",
      opacity: 0,
      border: 0,
      padding: 0,
      margin: 0
    };
    this.HIDDEN_NODE_STYLE = {
      position: "absolute",
      pointerEvents: "none",
      visibility: "hidden",
      height: 0,
      overflow: "hidden"
    };
    this.destroy$ = new Subject();
    this.onChange = () => null;
    this.onTouched = () => null;
  }
  ngOnInit() {
    this.nzTreeService.flattenNodes$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.nzFlattenNodes = !!this.nzVirtualHeight && this.nzHideUnMatched && this.nzSearchValue?.length > 0 ? data.filter((d) => !d.canHide) : data;
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnChanges(changes) {
    this.renderTreeProperties(changes);
  }
  ngAfterViewInit() {
    this.beforeInit = false;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzTreeComponent.ɵfac = function NzTreeComponent_Factory(t) {
  return new (t || _NzTreeComponent)(ɵɵdirectiveInject(NzTreeBaseService), ɵɵdirectiveInject(NzConfigService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(NzNoAnimationDirective, 9));
};
_NzTreeComponent.ɵcmp = ɵɵdefineComponent({
  type: _NzTreeComponent,
  selectors: [["nz-tree"]],
  contentQueries: function NzTreeComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c2, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
    }
  },
  viewQuery: function NzTreeComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkVirtualScrollViewport, 5, CdkVirtualScrollViewport);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostVars: 20,
  hostBindings: function NzTreeComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("ant-select-tree", ctx.nzSelectMode)("ant-select-tree-show-line", ctx.nzSelectMode && ctx.nzShowLine)("ant-select-tree-icon-hide", ctx.nzSelectMode && !ctx.nzShowIcon)("ant-select-tree-block-node", ctx.nzSelectMode && ctx.nzBlockNode)("ant-tree", !ctx.nzSelectMode)("ant-tree-rtl", ctx.dir === "rtl")("ant-tree-show-line", !ctx.nzSelectMode && ctx.nzShowLine)("ant-tree-icon-hide", !ctx.nzSelectMode && !ctx.nzShowIcon)("ant-tree-block-node", !ctx.nzSelectMode && ctx.nzBlockNode)("draggable-tree", ctx.nzDraggable);
    }
  },
  inputs: {
    nzShowIcon: "nzShowIcon",
    nzHideUnMatched: "nzHideUnMatched",
    nzBlockNode: "nzBlockNode",
    nzExpandAll: "nzExpandAll",
    nzSelectMode: "nzSelectMode",
    nzCheckStrictly: "nzCheckStrictly",
    nzShowExpand: "nzShowExpand",
    nzShowLine: "nzShowLine",
    nzCheckable: "nzCheckable",
    nzAsyncData: "nzAsyncData",
    nzDraggable: "nzDraggable",
    nzMultiple: "nzMultiple",
    nzExpandedIcon: "nzExpandedIcon",
    nzVirtualItemSize: "nzVirtualItemSize",
    nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
    nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
    nzVirtualHeight: "nzVirtualHeight",
    nzTreeTemplate: "nzTreeTemplate",
    nzBeforeDrop: "nzBeforeDrop",
    nzData: "nzData",
    nzExpandedKeys: "nzExpandedKeys",
    nzSelectedKeys: "nzSelectedKeys",
    nzCheckedKeys: "nzCheckedKeys",
    nzSearchValue: "nzSearchValue",
    nzSearchFunc: "nzSearchFunc"
  },
  outputs: {
    nzExpandedKeysChange: "nzExpandedKeysChange",
    nzSelectedKeysChange: "nzSelectedKeysChange",
    nzCheckedKeysChange: "nzCheckedKeysChange",
    nzSearchValueChange: "nzSearchValueChange",
    nzClick: "nzClick",
    nzDblClick: "nzDblClick",
    nzContextMenu: "nzContextMenu",
    nzCheckBoxChange: "nzCheckBoxChange",
    nzExpandChange: "nzExpandChange",
    nzOnDragStart: "nzOnDragStart",
    nzOnDragEnter: "nzOnDragEnter",
    nzOnDragOver: "nzOnDragOver",
    nzOnDragLeave: "nzOnDragLeave",
    nzOnDrop: "nzOnDrop",
    nzOnDragEnd: "nzOnDragEnd"
  },
  exportAs: ["nzTree"],
  standalone: true,
  features: [ɵɵProvidersFeature([NzTreeService, {
    provide: NzTreeBaseService,
    useFactory: NzTreeServiceFactory
  }, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzTreeComponent),
    multi: true
  }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
  decls: 10,
  vars: 6,
  consts: [[3, "ngStyle"], [1, "ant-tree-treenode", 3, "ngStyle"], [1, "ant-tree-indent"], [1, "ant-tree-indent-unit"], [1, "ant-tree-list", 2, "position", "relative"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "itemSize", "minBufferPx", "maxBufferPx", "height", 4, "ngIf"], [3, "ant-select-tree-list-holder-inner", "ant-tree-list-holder-inner", "nzNoAnimation", 4, "ngIf"], ["nodeTemplate", ""], [3, "itemSize", "minBufferPx", "maxBufferPx"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "nzNoAnimation"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["builtin", "", 3, "icon", "title", "isLoading", "isSelected", "isDisabled", "isMatched", "isExpanded", "isLeaf", "isStart", "isEnd", "isChecked", "isHalfChecked", "isDisableCheckbox", "isSelectable", "canHide", "nzTreeNode", "nzSelectMode", "nzShowLine", "nzExpandedIcon", "nzDraggable", "nzCheckable", "nzShowExpand", "nzAsyncData", "nzSearchValue", "nzHideUnMatched", "nzBeforeDrop", "nzShowIcon", "nzTreeTemplate", "nzExpandChange", "nzClick", "nzDblClick", "nzContextMenu", "nzCheckBoxChange", "nzOnDragStart", "nzOnDragEnter", "nzOnDragOver", "nzOnDragLeave", "nzOnDragEnd", "nzOnDrop"]],
  template: function NzTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div");
      ɵɵelement(1, "input", 0);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 1)(3, "div", 2);
      ɵɵelement(4, "div", 3);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "div", 4);
      ɵɵtemplate(6, NzTreeComponent_cdk_virtual_scroll_viewport_6_Template, 2, 11, "cdk-virtual-scroll-viewport", 5)(7, NzTreeComponent_div_7_Template, 2, 9, "div", 6);
      ɵɵelementEnd();
      ɵɵtemplate(8, NzTreeComponent_ng_template_8_Template, 1, 28, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ctx.HIDDEN_STYLE);
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ctx.HIDDEN_NODE_STYLE);
      ɵɵadvance(3);
      ɵɵclassProp("ant-select-tree-list", ctx.nzSelectMode);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.nzVirtualHeight);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.nzVirtualHeight);
    }
  },
  dependencies: [NgStyle, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, NgIf, CdkVirtualForOf, NgTemplateOutlet, NzNoAnimationDirective, NgForOf, NzTreeNodeBuiltinComponent],
  encapsulation: 2,
  data: {
    animation: [treeCollapseMotion]
  },
  changeDetection: 0
});
var NzTreeComponent = _NzTreeComponent;
__decorate([InputBoolean(), WithConfig()], NzTreeComponent.prototype, "nzShowIcon", void 0);
__decorate([InputBoolean(), WithConfig()], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
__decorate([InputBoolean(), WithConfig()], NzTreeComponent.prototype, "nzBlockNode", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzExpandAll", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzSelectMode", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzShowExpand", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzShowLine", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzCheckable", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzAsyncData", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzDraggable", void 0);
__decorate([InputBoolean()], NzTreeComponent.prototype, "nzMultiple", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree",
      exportAs: "nzTree",
      animations: [treeCollapseMotion],
      template: `
    <div>
      <input [ngStyle]="HIDDEN_STYLE" />
    </div>
    <div class="ant-tree-treenode" [ngStyle]="HIDDEN_NODE_STYLE">
      <div class="ant-tree-indent">
        <div class="ant-tree-indent-unit"></div>
      </div>
    </div>
    <div class="ant-tree-list" [class.ant-select-tree-list]="nzSelectMode" style="position: relative">
      <cdk-virtual-scroll-viewport
        *ngIf="nzVirtualHeight"
        [class.ant-select-tree-list-holder-inner]="nzSelectMode"
        [class.ant-tree-list-holder-inner]="!nzSelectMode"
        [itemSize]="nzVirtualItemSize"
        [minBufferPx]="nzVirtualMinBufferPx"
        [maxBufferPx]="nzVirtualMaxBufferPx"
        [style.height]="nzVirtualHeight"
      >
        <ng-container *cdkVirtualFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
          <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
        </ng-container>
      </cdk-virtual-scroll-viewport>

      <div
        *ngIf="!nzVirtualHeight"
        [class.ant-select-tree-list-holder-inner]="nzSelectMode"
        [class.ant-tree-list-holder-inner]="!nzSelectMode"
        [@.disabled]="beforeInit || !!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@treeCollapseMotion]="nzFlattenNodes.length"
      >
        <ng-container *ngFor="let node of nzFlattenNodes; trackBy: trackByFlattenNode">
          <ng-template [ngTemplateOutlet]="nodeTemplate" [ngTemplateOutletContext]="{ $implicit: node }"></ng-template>
        </ng-container>
      </div>
    </div>
    <ng-template #nodeTemplate let-treeNode>
      <nz-tree-node
        builtin
        [icon]="treeNode.icon"
        [title]="treeNode.title"
        [isLoading]="treeNode.isLoading"
        [isSelected]="treeNode.isSelected"
        [isDisabled]="treeNode.isDisabled"
        [isMatched]="treeNode.isMatched"
        [isExpanded]="treeNode.isExpanded"
        [isLeaf]="treeNode.isLeaf"
        [isStart]="treeNode.isStart"
        [isEnd]="treeNode.isEnd"
        [isChecked]="treeNode.isChecked"
        [isHalfChecked]="treeNode.isHalfChecked"
        [isDisableCheckbox]="treeNode.isDisableCheckbox"
        [isSelectable]="treeNode.isSelectable"
        [canHide]="treeNode.canHide"
        [nzTreeNode]="treeNode"
        [nzSelectMode]="nzSelectMode"
        [nzShowLine]="nzShowLine"
        [nzExpandedIcon]="nzExpandedIcon"
        [nzDraggable]="nzDraggable"
        [nzCheckable]="nzCheckable"
        [nzShowExpand]="nzShowExpand"
        [nzAsyncData]="nzAsyncData"
        [nzSearchValue]="nzSearchValue"
        [nzHideUnMatched]="nzHideUnMatched"
        [nzBeforeDrop]="nzBeforeDrop"
        [nzShowIcon]="nzShowIcon"
        [nzTreeTemplate]="nzTreeTemplate || nzTreeTemplateChild"
        (nzExpandChange)="eventTriggerChanged($event)"
        (nzClick)="eventTriggerChanged($event)"
        (nzDblClick)="eventTriggerChanged($event)"
        (nzContextMenu)="eventTriggerChanged($event)"
        (nzCheckBoxChange)="eventTriggerChanged($event)"
        (nzOnDragStart)="eventTriggerChanged($event)"
        (nzOnDragEnter)="eventTriggerChanged($event)"
        (nzOnDragOver)="eventTriggerChanged($event)"
        (nzOnDragLeave)="eventTriggerChanged($event)"
        (nzOnDragEnd)="eventTriggerChanged($event)"
        (nzOnDrop)="eventTriggerChanged($event)"
      ></nz-tree-node>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzTreeService, {
        provide: NzTreeBaseService,
        useFactory: NzTreeServiceFactory
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeComponent),
        multi: true
      }],
      host: {
        "[class.ant-select-tree]": `nzSelectMode`,
        "[class.ant-select-tree-show-line]": `nzSelectMode && nzShowLine`,
        "[class.ant-select-tree-icon-hide]": `nzSelectMode && !nzShowIcon`,
        "[class.ant-select-tree-block-node]": `nzSelectMode && nzBlockNode`,
        "[class.ant-tree]": `!nzSelectMode`,
        "[class.ant-tree-rtl]": `dir === 'rtl'`,
        "[class.ant-tree-show-line]": `!nzSelectMode && nzShowLine`,
        "[class.ant-tree-icon-hide]": `!nzSelectMode && !nzShowIcon`,
        "[class.ant-tree-block-node]": `!nzSelectMode && nzBlockNode`,
        "[class.draggable-tree]": `nzDraggable`
      },
      imports: [NgStyle, CdkVirtualScrollViewport, CdkFixedSizeVirtualScroll, NgIf, CdkVirtualForOf, NgTemplateOutlet, NzNoAnimationDirective, NgForOf, NzTreeNodeBuiltinComponent],
      standalone: true
    }]
  }], () => [{
    type: NzTreeBaseService
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
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
    nzShowIcon: [{
      type: Input
    }],
    nzHideUnMatched: [{
      type: Input
    }],
    nzBlockNode: [{
      type: Input
    }],
    nzExpandAll: [{
      type: Input
    }],
    nzSelectMode: [{
      type: Input
    }],
    nzCheckStrictly: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input
    }],
    nzShowLine: [{
      type: Input
    }],
    nzCheckable: [{
      type: Input
    }],
    nzAsyncData: [{
      type: Input
    }],
    nzDraggable: [{
      type: Input
    }],
    nzMultiple: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualHeight: [{
      type: Input
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzBeforeDrop: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzExpandedKeys: [{
      type: Input
    }],
    nzSelectedKeys: [{
      type: Input
    }],
    nzCheckedKeys: [{
      type: Input
    }],
    nzSearchValue: [{
      type: Input
    }],
    nzSearchFunc: [{
      type: Input
    }],
    nzTreeTemplateChild: [{
      type: ContentChild,
      args: ["nzTreeTemplate", {
        static: true
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        read: CdkVirtualScrollViewport
      }]
    }],
    nzExpandedKeysChange: [{
      type: Output
    }],
    nzSelectedKeysChange: [{
      type: Output
    }],
    nzCheckedKeysChange: [{
      type: Output
    }],
    nzSearchValueChange: [{
      type: Output
    }],
    nzClick: [{
      type: Output
    }],
    nzDblClick: [{
      type: Output
    }],
    nzContextMenu: [{
      type: Output
    }],
    nzCheckBoxChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnDragStart: [{
      type: Output
    }],
    nzOnDragEnter: [{
      type: Output
    }],
    nzOnDragOver: [{
      type: Output
    }],
    nzOnDragLeave: [{
      type: Output
    }],
    nzOnDrop: [{
      type: Output
    }],
    nzOnDragEnd: [{
      type: Output
    }]
  });
})();
var _NzTreeModule = class _NzTreeModule {
};
_NzTreeModule.ɵfac = function NzTreeModule_Factory(t) {
  return new (t || _NzTreeModule)();
};
_NzTreeModule.ɵmod = ɵɵdefineNgModule({
  type: _NzTreeModule,
  imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent, NzTreeDropIndicatorComponent],
  exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
});
_NzTreeModule.ɵinj = ɵɵdefineInjector({
  imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeNodeSwitcherComponent, NzTreeNodeTitleComponent]
});
var NzTreeModule = _NzTreeModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeModule, [{
    type: NgModule,
    args: [{
      imports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent, NzTreeNodeSwitcherComponent, NzTreeNodeBuiltinCheckboxComponent, NzTreeNodeTitleComponent, NzTreeDropIndicatorComponent],
      exports: [NzTreeComponent, NzTreeNodeBuiltinComponent, NzTreeIndentComponent]
    }]
  }], null, null);
})();

export {
  NzTreeNode,
  NzTreeBaseService,
  NzTreeHigherOrderServiceToken,
  NzTreeBase,
  NzTreeIndentComponent,
  NzTreeNodeBuiltinCheckboxComponent,
  NzTreeNodeSwitcherComponent,
  NzTreeNodeTitleComponent,
  NzTreeNodeBuiltinComponent,
  NzTreeService,
  NzTreeServiceFactory,
  NzTreeComponent,
  NzTreeModule
};
//# sourceMappingURL=chunk-BMZSUJR6.js.map
