"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=s(function(z,q){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),l=require('@stdlib/math-base-assert-is-positive-zerof/dist');function R(e,r,i,f){var u,t,a,n;if(e<=0)return NaN;if(e===1||i===0)return r[f];for(t=f,n=0;n<e&&(a=r[t],a!==a);n++)t+=i;if(n===e)return NaN;for(u=a,n+=1,n;n<e;n++)t+=i,a=r[t],!j(a)&&(a>u||a===u&&l(a))&&(u=a);return u}q.exports=R
});var x=s(function(A,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),b=v();function k(e,r,i){return b(e,r,i,_(e,i))}m.exports=k
});var y=s(function(B,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=x(),O=v();E(c,"ndarray",O);p.exports=c
});var P=require("path").join,Z=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),h=y(),o,d=Z(P(__dirname,"./native.js"));g(d)?o=h:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
