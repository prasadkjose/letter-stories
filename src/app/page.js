import GSAPWrapper from "@layouts/components/GSAPWrapper";
import ShortBanner from "@layouts/components/ShortBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getRegularPage } from "@lib/contentParser";

const Home = async () => {
  const adultData = await getRegularPage("adult");
  const childrenData = await getRegularPage("children");

  return (
    <GSAPWrapper>
      <SeoMeta title="Home" />
      <div className="section container">
        <div className="row justify-center">
          <div className="lg:col-6">
            <ShortBanner data={adultData.frontmatter.shortbanner} />
          </div>
          <div className="lg:col-6">
            <ShortBanner data={childrenData.frontmatter.shortbanner} />
          </div>
        </div>
      </div>
    </GSAPWrapper>
  );
};

export default Home;
