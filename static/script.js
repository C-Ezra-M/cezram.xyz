function getSplashList(fileContent) {
    return fileContent
        .replace(/^#.+\n/gm, "") // delete all lines beginning with a #
        .split("\n")
        .filter(e => e.length > 0)
        .map(e => e
            .replace(/\\n/g, "\n") // convert all "\n" to newlines
            .replace(/\\\\/g, "\\") // double backslash becomes single backslash
        )
}

$.ready().then(async () => {
    $("#mode-switcher").checked = await localforage.getItem("lightMode")
    $("#mode-switcher").addEventListener("change", function () {
        localforage.setItem("lightMode", this.checked)
    })
    fetch("/splashes.txt")
        .then(async (resp) => {
            $("#splash").innerText = getSplashList(await resp.text())[Math.floor(new Date().getUTCHours() / 8)]
        })
        .catch(reason => console.log(reason));
})