const using = src => new Promise(res => {
    const script = document.createElement('script');
    script.onload = res;
    script.src = src;
    document.head.appendChild(script);
});

(async() => {
    await using('./js/lib/jquery.min.js');
    await using('./js/lib/jquery-ui.js');
    await using('./js/index.js');
}) ();