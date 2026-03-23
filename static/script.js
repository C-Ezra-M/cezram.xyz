$.ready().then(async () => {
    $("#mode-switcher").checked = await localforage.getItem("lightMode")
    $("#mode-switcher").addEventListener("change", function () {
        localforage.setItem("lightMode", this.checked)
    })
})