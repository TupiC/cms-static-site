(()=>{var o=Object.defineProperty;var c=(s,a)=>{for(var i in a)o(s,i,{get:a[i],enumerable:!0})};var e={};c(e,{init:()=>t});function t(){let s=document.querySelector("#hamburger");s.addEventListener("click",()=>{s.classList.contains("closed")?(s.classList.add("open"),s.classList.remove("closed")):(s.classList.add("closed"),s.classList.remove("open"))})}window.MainNav=e;})();
