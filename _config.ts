import lume from "lume/mod.ts";
import plaintext from "lume/plugins/plaintext.ts";
import metas from "lume/plugins/metas.ts";
import date from "lume/plugins/date.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";

const site = lume({
    location: new URL("https://cezram.xyz"),
});

site.add("static", ".")
site.use(plaintext())
site.use(metas())
site.use(date({
    formats: {
        "FULL_DATE": "PPPP",
        "FULL_DATETIME": "PPPPpp",
    }
}))
site.use(slugifyUrls())

site.ignore("rarezen")

site.preprocess([".md"], (pages) => {
    pages.forEach((page) => page.data.templateEngine = ["vto", "md"])
});

export default site;
