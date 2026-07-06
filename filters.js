export function fmtDate(/** @type Date */ date) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Warsaw",
        dateStyle: "full",
    }).format(date)
}

export function sortExp(/** @type any[] */ array, /** @type string */ ...exp) {
    return array.toSorted(new Function(...exp))
}