export function fmtDate(/** @type Date */ date) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Warsaw",
        dateStyle: "full",
    }).format(date)
}