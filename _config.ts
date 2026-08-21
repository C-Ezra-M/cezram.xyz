import lume from "lume/mod.ts";

const site = lume({
    location: new URL("https://cezram.xyz"),
});

site.add("static", ".")

export default site;
