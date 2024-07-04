function vibrate() {
    if (window.navigator) {
        setInterval(() => {
            window.navigator.vibrate([500,100,2000])
        }, 2600);
    }
}

