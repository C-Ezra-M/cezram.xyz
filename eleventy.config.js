import { feedPlugin } from "@11ty/eleventy-plugin-rss"
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { IdAttributePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import { outdent } from "outdent";
import { minify } from "terser";
import { pokemonIcon, youtube } from "./shortcodes.js";
import { fmtDate, fmtFullDate, jsonParse, sortExp, toDateObject, yamlParse } from "./filters.js";

export default function (eleventyConfig) {
	/** @type markdownIt.Options */
	const mdOptions = {
		linkify: true,
		html: true,
	}
	//eleventyConfig.setTemplateFormats("html,liquid,njk,md");
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPassthroughCopy({
		static: "/",
	});
	eleventyConfig.addShortcode("pkmnIcon", pokemonIcon)
	eleventyConfig.addPairedShortcode("float", content => {
		return outdent`<div class="float">
			${content}
			</div>`
	})
	//eleventyConfig.addPassthroughCopy("not_found.md", "not_found.html");
    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/blog/feed.xml",
		collection: {
			name: "post", // iterate over `collections.post`
			limit: 20,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "cezram.xyz Blog",
			subtitle: "",
			base: "https://cezram.xyz/",
			author: {
				name: "C.Ezra.M",
				email: "",
			}
		}
    });
	eleventyConfig.setLibrary("md", markdownIt(mdOptions));
	eleventyConfig.addFilter("jsmin", async function (code) {
		try {
			const minified = await minify(code);
			return minified.code;
		} catch (err) {
			console.error("Terser error: ", err);
			// Fail gracefully.
			return code;
		}
	});
	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && (process.env.ELEVENTY_RUN_MODE === "build" || process.env.EXCLUDE_DRAFTS)) {
			return false;
		}
	});
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addShortcode("youtube", youtube);
	eleventyConfig.addFilter("fmtdate", fmtDate);
	eleventyConfig.addFilter("fmtFullDate", fmtFullDate);
	eleventyConfig.addFilter("sort_exp", sortExp)
	eleventyConfig.addFilter("jsonparse", jsonParse)
	eleventyConfig.addFilter("yamlparse", yamlParse)
	eleventyConfig.addFilter("toDateObject", toDateObject)
}