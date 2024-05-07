import {
  AbstractUserDataWriter,
  Bytes,
  DatabaseId,
  DocumentKey,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  FieldPath$1,
  FirestoreError,
  GeoPoint,
  QueryDocumentSnapshot,
  QuerySnapshot,
  Timestamp,
  WriteBatch,
  __PRIVATE_cast,
  __PRIVATE_debugAssert,
  __PRIVATE_isBase64Available,
  __PRIVATE_logWarn,
  __PRIVATE_validateIsNotUsedTogether,
  addDoc,
  arrayRemove,
  arrayUnion,
  clearIndexedDbPersistence,
  collection,
  collectionGroup,
  connectFirestoreEmulator,
  deleteDoc,
  deleteField,
  disableNetwork,
  doc,
  enableIndexedDbPersistence,
  enableMultiTabIndexedDbPersistence,
  enableNetwork,
  endAt,
  endBefore,
  ensureFirestoreConfigured,
  executeWrite,
  getDoc,
  getDocFromCache,
  getDocFromServer,
  getDocs,
  getDocsFromCache,
  getDocsFromServer,
  increment,
  limit,
  limitToLast,
  loadBundle,
  namedQuery,
  onSnapshot,
  onSnapshotsInSync,
  orderBy,
  pe,
  query,
  queryEqual,
  refEqual,
  runTransaction,
  serverTimestamp,
  setDoc,
  setLogLevel,
  snapshotEqual,
  startAfter,
  startAt,
  updateDoc,
  waitForPendingWrites,
  where
} from "./chunk-VNBQNBJZ.js";
import {
  firebase
} from "./chunk-QN5Y54JU.js";
import {
  Component,
  getModularInstance
} from "./chunk-TI24BFSE.js";

// node_modules/@firebase/firestore-compat/dist/index.esm2017.js
var name = "@firebase/firestore-compat";
var version = "0.3.28";
function validateSetOptions(methodName, options) {
  if (options === void 0) {
    return {
      merge: false
    };
  }
  if (options.mergeFields !== void 0 && options.merge !== void 0) {
    throw new FirestoreError("invalid-argument", `Invalid options passed to function ${methodName}(): You cannot specify both "merge" and "mergeFields".`);
  }
  return options;
}
function assertUint8ArrayAvailable() {
  if (typeof Uint8Array === "undefined") {
    throw new FirestoreError("unimplemented", "Uint8Arrays are not available in this environment.");
  }
}
function assertBase64Available() {
  if (!__PRIVATE_isBase64Available()) {
    throw new FirestoreError("unimplemented", "Blobs are unavailable in Firestore in this environment.");
  }
}
var Blob = class _Blob {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  static fromBase64String(base64) {
    assertBase64Available();
    return new _Blob(Bytes.fromBase64String(base64));
  }
  static fromUint8Array(array) {
    assertUint8ArrayAvailable();
    return new _Blob(Bytes.fromUint8Array(array));
  }
  toBase64() {
    assertBase64Available();
    return this._delegate.toBase64();
  }
  toUint8Array() {
    assertUint8ArrayAvailable();
    return this._delegate.toUint8Array();
  }
  isEqual(other) {
    return this._delegate.isEqual(other._delegate);
  }
  toString() {
    return "Blob(base64: " + this.toBase64() + ")";
  }
};
function isPartialObserver(obj) {
  return implementsAnyMethods(obj, ["next", "error", "complete"]);
}
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  const object = obj;
  for (const method of methods) {
    if (method in object && typeof object[method] === "function") {
      return true;
    }
  }
  return false;
}
var IndexedDbPersistenceProvider = class {
  enableIndexedDbPersistence(firestore, forceOwnership) {
    return enableIndexedDbPersistence(firestore._delegate, { forceOwnership });
  }
  enableMultiTabIndexedDbPersistence(firestore) {
    return enableMultiTabIndexedDbPersistence(firestore._delegate);
  }
  clearIndexedDbPersistence(firestore) {
    return clearIndexedDbPersistence(firestore._delegate);
  }
};
var Firestore = class {
  constructor(databaseIdOrApp, _delegate, _persistenceProvider) {
    this._delegate = _delegate;
    this._persistenceProvider = _persistenceProvider;
    this.INTERNAL = {
      delete: () => this.terminate()
    };
    if (!(databaseIdOrApp instanceof DatabaseId)) {
      this._appCompat = databaseIdOrApp;
    }
  }
  get _databaseId() {
    return this._delegate._databaseId;
  }
  settings(settingsLiteral) {
    const currentSettings = this._delegate._getSettings();
    if (!settingsLiteral.merge && currentSettings.host !== settingsLiteral.host) {
      __PRIVATE_logWarn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}.");
    }
    if (settingsLiteral.merge) {
      settingsLiteral = Object.assign(Object.assign({}, currentSettings), settingsLiteral);
      delete settingsLiteral.merge;
    }
    this._delegate._setSettings(settingsLiteral);
  }
  useEmulator(host, port, options = {}) {
    connectFirestoreEmulator(this._delegate, host, port, options);
  }
  enableNetwork() {
    return enableNetwork(this._delegate);
  }
  disableNetwork() {
    return disableNetwork(this._delegate);
  }
  enablePersistence(settings) {
    let synchronizeTabs = false;
    let experimentalForceOwningTab = false;
    if (settings) {
      synchronizeTabs = !!settings.synchronizeTabs;
      experimentalForceOwningTab = !!settings.experimentalForceOwningTab;
      __PRIVATE_validateIsNotUsedTogether("synchronizeTabs", synchronizeTabs, "experimentalForceOwningTab", experimentalForceOwningTab);
    }
    return synchronizeTabs ? this._persistenceProvider.enableMultiTabIndexedDbPersistence(this) : this._persistenceProvider.enableIndexedDbPersistence(this, experimentalForceOwningTab);
  }
  clearPersistence() {
    return this._persistenceProvider.clearIndexedDbPersistence(this);
  }
  terminate() {
    if (this._appCompat) {
      this._appCompat._removeServiceInstance("firestore-compat");
      this._appCompat._removeServiceInstance("firestore");
    }
    return this._delegate._delete();
  }
  waitForPendingWrites() {
    return waitForPendingWrites(this._delegate);
  }
  onSnapshotsInSync(arg) {
    return onSnapshotsInSync(this._delegate, arg);
  }
  get app() {
    if (!this._appCompat) {
      throw new FirestoreError("failed-precondition", "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    }
    return this._appCompat;
  }
  collection(pathString) {
    try {
      return new CollectionReference(this, collection(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "collection()", "Firestore.collection()");
    }
  }
  doc(pathString) {
    try {
      return new DocumentReference2(this, doc(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "doc()", "Firestore.doc()");
    }
  }
  collectionGroup(collectionId) {
    try {
      return new Query(this, collectionGroup(this._delegate, collectionId));
    } catch (e) {
      throw replaceFunctionName(e, "collectionGroup()", "Firestore.collectionGroup()");
    }
  }
  runTransaction(updateFunction) {
    return runTransaction(this._delegate, (transaction) => updateFunction(new Transaction(this, transaction)));
  }
  batch() {
    ensureFirestoreConfigured(this._delegate);
    return new WriteBatch2(new WriteBatch(this._delegate, (mutations) => executeWrite(this._delegate, mutations)));
  }
  loadBundle(bundleData) {
    return loadBundle(this._delegate, bundleData);
  }
  namedQuery(name2) {
    return namedQuery(this._delegate, name2).then((expQuery) => {
      if (!expQuery) {
        return null;
      }
      return new Query(
        this,
        // We can pass `expQuery` here directly since named queries don't have a UserDataConverter.
        // Otherwise, we would have to create a new ExpQuery and pass the old UserDataConverter.
        expQuery
      );
    });
  }
};
var UserDataWriter = class extends AbstractUserDataWriter {
  constructor(firestore) {
    super();
    this.firestore = firestore;
  }
  convertBytes(bytes) {
    return new Blob(new Bytes(bytes));
  }
  convertReference(name2) {
    const key = this.convertDocumentKey(name2, this.firestore._databaseId);
    return DocumentReference2.forKey(
      key,
      this.firestore,
      /* converter= */
      null
    );
  }
};
function setLogLevel2(level) {
  setLogLevel(level);
}
var Transaction = class {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(_firestore);
  }
  get(documentRef) {
    const ref = castReference(documentRef);
    return this._delegate.get(ref).then((result) => new DocumentSnapshot2(this._firestore, new DocumentSnapshot(this._firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, ref.converter)));
  }
  set(documentRef, data, options) {
    const ref = castReference(documentRef);
    if (options) {
      validateSetOptions("Transaction.set", options);
      this._delegate.set(ref, data, options);
    } else {
      this._delegate.set(ref, data);
    }
    return this;
  }
  update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
    const ref = castReference(documentRef);
    if (arguments.length === 2) {
      this._delegate.update(ref, dataOrField);
    } else {
      this._delegate.update(ref, dataOrField, value, ...moreFieldsAndValues);
    }
    return this;
  }
  delete(documentRef) {
    const ref = castReference(documentRef);
    this._delegate.delete(ref);
    return this;
  }
};
var WriteBatch2 = class {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  set(documentRef, data, options) {
    const ref = castReference(documentRef);
    if (options) {
      validateSetOptions("WriteBatch.set", options);
      this._delegate.set(ref, data, options);
    } else {
      this._delegate.set(ref, data);
    }
    return this;
  }
  update(documentRef, dataOrField, value, ...moreFieldsAndValues) {
    const ref = castReference(documentRef);
    if (arguments.length === 2) {
      this._delegate.update(ref, dataOrField);
    } else {
      this._delegate.update(ref, dataOrField, value, ...moreFieldsAndValues);
    }
    return this;
  }
  delete(documentRef) {
    const ref = castReference(documentRef);
    this._delegate.delete(ref);
    return this;
  }
  commit() {
    return this._delegate.commit();
  }
};
var FirestoreDataConverter = class _FirestoreDataConverter {
  constructor(_firestore, _userDataWriter, _delegate) {
    this._firestore = _firestore;
    this._userDataWriter = _userDataWriter;
    this._delegate = _delegate;
  }
  fromFirestore(snapshot, options) {
    const expSnapshot = new QueryDocumentSnapshot(
      this._firestore._delegate,
      this._userDataWriter,
      snapshot._key,
      snapshot._document,
      snapshot.metadata,
      /* converter= */
      null
    );
    return this._delegate.fromFirestore(new QueryDocumentSnapshot2(this._firestore, expSnapshot), options !== null && options !== void 0 ? options : {});
  }
  toFirestore(modelObject, options) {
    if (!options) {
      return this._delegate.toFirestore(modelObject);
    } else {
      return this._delegate.toFirestore(modelObject, options);
    }
  }
  // Use the same instance of `FirestoreDataConverter` for the given instances
  // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
  // compare equal for two objects created with the same converter instance.
  static getInstance(firestore, converter) {
    const converterMapByFirestore = _FirestoreDataConverter.INSTANCES;
    let untypedConverterByConverter = converterMapByFirestore.get(firestore);
    if (!untypedConverterByConverter) {
      untypedConverterByConverter = /* @__PURE__ */ new WeakMap();
      converterMapByFirestore.set(firestore, untypedConverterByConverter);
    }
    let instance = untypedConverterByConverter.get(converter);
    if (!instance) {
      instance = new _FirestoreDataConverter(firestore, new UserDataWriter(firestore), converter);
      untypedConverterByConverter.set(converter, instance);
    }
    return instance;
  }
};
FirestoreDataConverter.INSTANCES = /* @__PURE__ */ new WeakMap();
var DocumentReference2 = class _DocumentReference {
  constructor(firestore, _delegate) {
    this.firestore = firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(firestore);
  }
  static forPath(path, firestore, converter) {
    if (path.length % 2 !== 0) {
      throw new FirestoreError("invalid-argument", `Invalid document reference. Document references must have an even number of segments, but ${path.canonicalString()} has ${path.length}`);
    }
    return new _DocumentReference(firestore, new DocumentReference(firestore._delegate, converter, new DocumentKey(path)));
  }
  static forKey(key, firestore, converter) {
    return new _DocumentReference(firestore, new DocumentReference(firestore._delegate, converter, key));
  }
  get id() {
    return this._delegate.id;
  }
  get parent() {
    return new CollectionReference(this.firestore, this._delegate.parent);
  }
  get path() {
    return this._delegate.path;
  }
  collection(pathString) {
    try {
      return new CollectionReference(this.firestore, collection(this._delegate, pathString));
    } catch (e) {
      throw replaceFunctionName(e, "collection()", "DocumentReference.collection()");
    }
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof DocumentReference)) {
      return false;
    }
    return refEqual(this._delegate, other);
  }
  set(value, options) {
    options = validateSetOptions("DocumentReference.set", options);
    try {
      if (options) {
        return setDoc(this._delegate, value, options);
      } else {
        return setDoc(this._delegate, value);
      }
    } catch (e) {
      throw replaceFunctionName(e, "setDoc()", "DocumentReference.set()");
    }
  }
  update(fieldOrUpdateData, value, ...moreFieldsAndValues) {
    try {
      if (arguments.length === 1) {
        return updateDoc(this._delegate, fieldOrUpdateData);
      } else {
        return updateDoc(this._delegate, fieldOrUpdateData, value, ...moreFieldsAndValues);
      }
    } catch (e) {
      throw replaceFunctionName(e, "updateDoc()", "DocumentReference.update()");
    }
  }
  delete() {
    return deleteDoc(this._delegate);
  }
  onSnapshot(...args) {
    const options = extractSnapshotOptions(args);
    const observer = wrapObserver(args, (result) => new DocumentSnapshot2(this.firestore, new DocumentSnapshot(this.firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, this._delegate.converter)));
    return onSnapshot(this._delegate, options, observer);
  }
  get(options) {
    let snap;
    if ((options === null || options === void 0 ? void 0 : options.source) === "cache") {
      snap = getDocFromCache(this._delegate);
    } else if ((options === null || options === void 0 ? void 0 : options.source) === "server") {
      snap = getDocFromServer(this._delegate);
    } else {
      snap = getDoc(this._delegate);
    }
    return snap.then((result) => new DocumentSnapshot2(this.firestore, new DocumentSnapshot(this.firestore._delegate, this._userDataWriter, result._key, result._document, result.metadata, this._delegate.converter)));
  }
  withConverter(converter) {
    return new _DocumentReference(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
};
function replaceFunctionName(e, original, updated) {
  e.message = e.message.replace(original, updated);
  return e;
}
function extractSnapshotOptions(args) {
  for (const arg of args) {
    if (typeof arg === "object" && !isPartialObserver(arg)) {
      return arg;
    }
  }
  return {};
}
function wrapObserver(args, wrapper) {
  var _a, _b;
  let userObserver;
  if (isPartialObserver(args[0])) {
    userObserver = args[0];
  } else if (isPartialObserver(args[1])) {
    userObserver = args[1];
  } else if (typeof args[0] === "function") {
    userObserver = {
      next: args[0],
      error: args[1],
      complete: args[2]
    };
  } else {
    userObserver = {
      next: args[1],
      error: args[2],
      complete: args[3]
    };
  }
  return {
    next: (val) => {
      if (userObserver.next) {
        userObserver.next(wrapper(val));
      }
    },
    error: (_a = userObserver.error) === null || _a === void 0 ? void 0 : _a.bind(userObserver),
    complete: (_b = userObserver.complete) === null || _b === void 0 ? void 0 : _b.bind(userObserver)
  };
}
var DocumentSnapshot2 = class {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get ref() {
    return new DocumentReference2(this._firestore, this._delegate.ref);
  }
  get id() {
    return this._delegate.id;
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get exists() {
    return this._delegate.exists();
  }
  data(options) {
    return this._delegate.data(options);
  }
  get(fieldPath, options) {
    return this._delegate.get(fieldPath, options);
  }
  isEqual(other) {
    return snapshotEqual(this._delegate, other._delegate);
  }
};
var QueryDocumentSnapshot2 = class extends DocumentSnapshot2 {
  data(options) {
    const data = this._delegate.data(options);
    if (this._delegate._converter) {
      return data;
    } else {
      __PRIVATE_debugAssert(data !== void 0, "Document in a QueryDocumentSnapshot should exist");
      return data;
    }
  }
};
var Query = class _Query {
  constructor(firestore, _delegate) {
    this.firestore = firestore;
    this._delegate = _delegate;
    this._userDataWriter = new UserDataWriter(firestore);
  }
  where(fieldPath, opStr, value) {
    try {
      return new _Query(this.firestore, query(this._delegate, where(fieldPath, opStr, value)));
    } catch (e) {
      throw replaceFunctionName(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  orderBy(fieldPath, directionStr) {
    try {
      return new _Query(this.firestore, query(this._delegate, orderBy(fieldPath, directionStr)));
    } catch (e) {
      throw replaceFunctionName(e, /(orderBy|where)\(\)/, "Query.$1()");
    }
  }
  limit(n) {
    try {
      return new _Query(this.firestore, query(this._delegate, limit(n)));
    } catch (e) {
      throw replaceFunctionName(e, "limit()", "Query.limit()");
    }
  }
  limitToLast(n) {
    try {
      return new _Query(this.firestore, query(this._delegate, limitToLast(n)));
    } catch (e) {
      throw replaceFunctionName(e, "limitToLast()", "Query.limitToLast()");
    }
  }
  startAt(...args) {
    try {
      return new _Query(this.firestore, query(this._delegate, startAt(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "startAt()", "Query.startAt()");
    }
  }
  startAfter(...args) {
    try {
      return new _Query(this.firestore, query(this._delegate, startAfter(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "startAfter()", "Query.startAfter()");
    }
  }
  endBefore(...args) {
    try {
      return new _Query(this.firestore, query(this._delegate, endBefore(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "endBefore()", "Query.endBefore()");
    }
  }
  endAt(...args) {
    try {
      return new _Query(this.firestore, query(this._delegate, endAt(...args)));
    } catch (e) {
      throw replaceFunctionName(e, "endAt()", "Query.endAt()");
    }
  }
  isEqual(other) {
    return queryEqual(this._delegate, other._delegate);
  }
  get(options) {
    let query2;
    if ((options === null || options === void 0 ? void 0 : options.source) === "cache") {
      query2 = getDocsFromCache(this._delegate);
    } else if ((options === null || options === void 0 ? void 0 : options.source) === "server") {
      query2 = getDocsFromServer(this._delegate);
    } else {
      query2 = getDocs(this._delegate);
    }
    return query2.then((result) => new QuerySnapshot2(this.firestore, new QuerySnapshot(this.firestore._delegate, this._userDataWriter, this._delegate, result._snapshot)));
  }
  onSnapshot(...args) {
    const options = extractSnapshotOptions(args);
    const observer = wrapObserver(args, (snap) => new QuerySnapshot2(this.firestore, new QuerySnapshot(this.firestore._delegate, this._userDataWriter, this._delegate, snap._snapshot)));
    return onSnapshot(this._delegate, options, observer);
  }
  withConverter(converter) {
    return new _Query(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
};
var DocumentChange = class {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get type() {
    return this._delegate.type;
  }
  get doc() {
    return new QueryDocumentSnapshot2(this._firestore, this._delegate.doc);
  }
  get oldIndex() {
    return this._delegate.oldIndex;
  }
  get newIndex() {
    return this._delegate.newIndex;
  }
};
var QuerySnapshot2 = class {
  constructor(_firestore, _delegate) {
    this._firestore = _firestore;
    this._delegate = _delegate;
  }
  get query() {
    return new Query(this._firestore, this._delegate.query);
  }
  get metadata() {
    return this._delegate.metadata;
  }
  get size() {
    return this._delegate.size;
  }
  get empty() {
    return this._delegate.empty;
  }
  get docs() {
    return this._delegate.docs.map((doc2) => new QueryDocumentSnapshot2(this._firestore, doc2));
  }
  docChanges(options) {
    return this._delegate.docChanges(options).map((docChange) => new DocumentChange(this._firestore, docChange));
  }
  forEach(callback, thisArg) {
    this._delegate.forEach((snapshot) => {
      callback.call(thisArg, new QueryDocumentSnapshot2(this._firestore, snapshot));
    });
  }
  isEqual(other) {
    return snapshotEqual(this._delegate, other._delegate);
  }
};
var CollectionReference = class _CollectionReference extends Query {
  constructor(firestore, _delegate) {
    super(firestore, _delegate);
    this.firestore = firestore;
    this._delegate = _delegate;
  }
  get id() {
    return this._delegate.id;
  }
  get path() {
    return this._delegate.path;
  }
  get parent() {
    const docRef = this._delegate.parent;
    return docRef ? new DocumentReference2(this.firestore, docRef) : null;
  }
  doc(documentPath) {
    try {
      if (documentPath === void 0) {
        return new DocumentReference2(this.firestore, doc(this._delegate));
      } else {
        return new DocumentReference2(this.firestore, doc(this._delegate, documentPath));
      }
    } catch (e) {
      throw replaceFunctionName(e, "doc()", "CollectionReference.doc()");
    }
  }
  add(data) {
    return addDoc(this._delegate, data).then((docRef) => new DocumentReference2(this.firestore, docRef));
  }
  isEqual(other) {
    return refEqual(this._delegate, other._delegate);
  }
  withConverter(converter) {
    return new _CollectionReference(this.firestore, converter ? this._delegate.withConverter(FirestoreDataConverter.getInstance(this.firestore, converter)) : this._delegate.withConverter(null));
  }
};
function castReference(documentRef) {
  return __PRIVATE_cast(documentRef, DocumentReference);
}
var FieldPath2 = class _FieldPath {
  /**
   * Creates a FieldPath from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames - A list of field names.
   */
  constructor(...fieldNames) {
    this._delegate = new FieldPath(...fieldNames);
  }
  static documentId() {
    return new _FieldPath(FieldPath$1.keyField().canonicalString());
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof FieldPath)) {
      return false;
    }
    return this._delegate._internalPath.isEqual(other._internalPath);
  }
};
var FieldValue = class _FieldValue {
  constructor(_delegate) {
    this._delegate = _delegate;
  }
  static serverTimestamp() {
    const delegate = serverTimestamp();
    delegate._methodName = "FieldValue.serverTimestamp";
    return new _FieldValue(delegate);
  }
  static delete() {
    const delegate = deleteField();
    delegate._methodName = "FieldValue.delete";
    return new _FieldValue(delegate);
  }
  static arrayUnion(...elements) {
    const delegate = arrayUnion(...elements);
    delegate._methodName = "FieldValue.arrayUnion";
    return new _FieldValue(delegate);
  }
  static arrayRemove(...elements) {
    const delegate = arrayRemove(...elements);
    delegate._methodName = "FieldValue.arrayRemove";
    return new _FieldValue(delegate);
  }
  static increment(n) {
    const delegate = increment(n);
    delegate._methodName = "FieldValue.increment";
    return new _FieldValue(delegate);
  }
  isEqual(other) {
    return this._delegate.isEqual(other._delegate);
  }
};
var firestoreNamespace = {
  Firestore,
  GeoPoint,
  Timestamp,
  Blob,
  Transaction,
  WriteBatch: WriteBatch2,
  DocumentReference: DocumentReference2,
  DocumentSnapshot: DocumentSnapshot2,
  Query,
  QueryDocumentSnapshot: QueryDocumentSnapshot2,
  QuerySnapshot: QuerySnapshot2,
  CollectionReference,
  FieldPath: FieldPath2,
  FieldValue,
  setLogLevel: setLogLevel2,
  CACHE_SIZE_UNLIMITED: pe
};
function configureForFirebase(firebase2, firestoreFactory) {
  firebase2.INTERNAL.registerComponent(new Component("firestore-compat", (container) => {
    const app = container.getProvider("app-compat").getImmediate();
    const firestoreExp = container.getProvider("firestore").getImmediate();
    return firestoreFactory(app, firestoreExp);
  }, "PUBLIC").setServiceProps(Object.assign({}, firestoreNamespace)));
}
function registerFirestore(instance) {
  configureForFirebase(instance, (app, firestoreExp) => new Firestore(app, firestoreExp, new IndexedDbPersistenceProvider()));
  instance.registerVersion(name, version);
}
registerFirestore(firebase);
/*! Bundled license information:

@firebase/firestore-compat/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-XH6Y7NFP.js.map
