const e=document.querySelector(".data-start"),t=document.querySelector(".data-stop");let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{console.log(`I love async JS!  ${Math.random()}`)}),1e3)})),t.addEventListener("click",(()=>{clearInterval(l),console.log(`Interval with id ${l} has stopped!`)}));
//# sourceMappingURL=01-color-switcher.58712fdf.js.map
