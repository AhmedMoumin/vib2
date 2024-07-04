function vibrate() {
    if (window.navigator) {
        setInterval(() => {
            window.navigator.vibrate([500,100,2000])
        }, 2600);
        
        Notification.requestPermission().then(perm => {
            if (perm) {
                new Notification("Ohhh yeah !", {
                    body:"Put me in your Pussy !",
                    icon:"https://cdn-icons-png.flaticon.com/128/16481/16481673.png"
                })
            }
        })
    }

}
