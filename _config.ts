import lume from "lume/mod.ts";
import plaintext from "lume/plugins/plaintext.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
    location: new URL("https://cezram.xyz"),
});

site.add("static", ".")
site.use(plaintext())
site.use(metas())

export default site;
