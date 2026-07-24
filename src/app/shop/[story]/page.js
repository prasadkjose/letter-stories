import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Contact from "@layouts/Contact";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getListPage } from "@lib/contentParser";

// Helper to get story items from adult.md features list
const getStories = async () => {
  const pageData = await getListPage("src/content/adult.md");
  const features = pageData.frontmatter.features;
  if (!features || !features.list) return [];
  return features.list.map((item, index) => ({
    ...item,
    slug: `story_${index + 1}`,
  }));
};

// Dynamic page for individual story /shop/story_1, /shop/story_2, etc.
const StoryPage = async props => {
  const params = await props.params;
  const { story } = params;

  const stories = await getStories();
  const storyData = stories.find(s => s.slug === story);

  // Fallback title if story not found
  const title = storyData?.title || "Story Not Found";

  return (
    <GSAPWrapper>
      <SeoMeta title={title} />
      <Contact
        data={{
          frontmatter: { title },
          content: storyData?.content || "",
        }}
      />
    </GSAPWrapper>
  );
};

export default StoryPage;

export async function generateStaticParams() {
  const stories = await getStories();
  return stories.map(item => ({
    story: item.slug,
  }));
}
