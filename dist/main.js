(()=>{var n=Object.defineProperty;var o=(e,s)=>{for(var r in s)n(e,r,{get:s[r],enumerable:!0})};var a={};o(a,{init:()=>t});function t(){let e=document.querySelector("#hamburger"),s=document.querySelector(".menu");e.addEventListener("click",()=>{e.classList.contains("closed")?(e.classList.add("open"),e.classList.remove("closed"),s.classList.add("hamburgerContainer")):(e.classList.add("closed"),e.classList.remove("open"),s.classList.remove("hamburgerContainer"))})}window.MainNav=a;})();
