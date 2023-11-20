fetch("https://api.ipify.org?format=json")
    .then(res => res.json())
    .then(json => {
        console.log(json.ip)
        fetch("https://ip-api.com/json/" + json.ip + "?fields=183103")
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setInterval(() => {
                const dd = new Date();
                const timezone = dd.toLocaleString(`en-AU`, {timeZone: `${json.timezone}`});
                const ht = dd.getHours();
                const mt = dd.getMinutes();
                const st = dd.getSeconds();
                document.getElementById("time").innerHTML = timezone.replace(",", "");
                document.getElementsByTagName("title")[0].textContent = ("0" + ht).substr(-2) + ":" + ("0" + mt).substr(-2) + ":" + ("0" + st).substr(-2);
            }, 1);
        });
    });
