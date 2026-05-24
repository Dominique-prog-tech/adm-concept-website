import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "ADM-Concept Blog",
    description:
      "Klantcases, productupdates en inzichten over maatwerksoftware en digitalisering in België.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      author: post.data.author,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>nl-be</language>`,
  });
}
