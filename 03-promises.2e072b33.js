function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("1GAPJ");const r={form:document.querySelector(".form"),inputDelay:document.querySelector("input[name=delay]"),inputDelayStep:document.querySelector("input[name=step]"),inputAmount:document.querySelector("input[name=amount]")};function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.form.addEventListener("submit",(function(t){t.preventDefault();let n=Number(r.inputDelay.value),o=Number(r.inputAmount.value),i=Number(r.inputDelayStep.value);for(let t=1;t<=o;t+=1)l(t,n).then((({position:t,delay:n})=>{console.log(t),e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=i}));
//# sourceMappingURL=03-promises.2e072b33.js.map
