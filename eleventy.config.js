import { feedPlugin } from "@11ty/eleventy-plugin-rss"
import { IdAttributePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
	const mdOptions = {
		linkify: true,
	}
	//eleventyConfig.setTemplateFormats("html,liquid,njk,md");
	eleventyConfig.addPlugin(IdAttributePlugin);
	eleventyConfig.addPassthroughCopy({
		"static/pkgs": "/",
		static: "/",
	});
	//eleventyConfig.addPassthroughCopy("not_found.md", "not_found.html");
    eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "post", // iterate over `collections.post`
			limit: 20,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "The Ezranians Blog",
			subtitle: "",
			base: "https://cezram.neocities.org/b/",
			author: {
				name: "C.Ezra.M",
				email: "",
			}
		}
    });
	eleventyConfig.setLibrary("md", markdownIt(mdOptions));
}