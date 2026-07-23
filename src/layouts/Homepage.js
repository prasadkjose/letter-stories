import Cta from "@layouts/components/Cta";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import ShortIntro from "@layouts/partials/ShortIntro";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";

const Homepage = ({ data }) => {
  const { frontmatter } = data;
  const { banner, brands, features, intro, speciality, testimonial } =
    frontmatter;
  return (
    <>
      <HomeBanner banner={banner} brands={brands} />
      <Features features={features} />
      <ShortIntro intro={intro} />
      <SpecialFeatures speciality={speciality} />
      <Testimonial testimonial={testimonial} />
      <Cta />
    </>
  );
};

export default Homepage;
