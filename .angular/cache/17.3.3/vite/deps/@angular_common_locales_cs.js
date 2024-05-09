import "./chunk-JN3CWD3G.js";

// node_modules/@angular/common/locales/cs.mjs
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length;
  if (i === 1 && v === 0)
    return 1;
  if (i === Math.floor(i) && (i >= 2 && i <= 4) && v === 0)
    return 3;
  if (!(v === 0))
    return 4;
  return 5;
}
var cs_default = ["cs", [["dop.", "odp."], u, u], u, [["N", "P", "Ú", "S", "Č", "P", "S"], ["ne", "po", "út", "st", "čt", "pá", "so"], ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"], ["ne", "po", "út", "st", "čt", "pá", "so"]], u, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]], [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["led", "úno", "bře", "dub", "kvě", "čvn", "čvc", "srp", "zář", "říj", "lis", "pro"], ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"]], [["př.n.l.", "n.l."], ["př. n. l.", "n. l."], ["před naším letopočtem", "našeho letopočtu"]], 1, [6, 0], ["dd.MM.yy", "d. M. y", "d. MMMM y", "EEEE d. MMMM y"], ["H:mm", "H:mm:ss", "H:mm:ss z", "H:mm:ss zzzz"], ["{1} {0}", u, u, u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "CZK", "Kč", "česká koruna", { "AUD": ["AU$", "$"], "BYN": [u, "р."], "CSK": ["Kčs"], "CZK": ["Kč"], "ILS": [u, "₪"], "INR": [u, "₹"], "JPY": ["JP¥", "¥"], "PHP": [u, "₱"], "RON": [u, "L"], "RUR": [u, "р."], "TWD": ["NT$"], "USD": ["US$", "$"], "VND": [u, "₫"], "XEU": ["ECU"], "XXX": [] }, "ltr", plural];
export {
  cs_default as default
};
/*! Bundled license information:

@angular/common/locales/cs.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@angular_common_locales_cs.js.map
