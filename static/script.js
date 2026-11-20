function parseSplash(text) {
    return text
        .replace(/\\(?!\\)/g, "\n")
        .replace(/\\\\/g, "\\")
}

$.ready().then(async () => {
    $("#mode-switcher").checked = await localforage.getItem("lightMode")
    $("#mode-switcher").addEventListener("change", function () {
        localforage.setItem("lightMode", this.checked)
    })
    fetch("/splashes.txt")
        .then(async (resp) => {
            $("#splash").innerText = parseSplash((await resp.text()).split("\n")[0])
        })
        .catch(reason => console.log(reason));
})