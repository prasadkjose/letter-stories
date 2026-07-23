import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";

const ShortBanner = ({ data }) => {
  const { icon, image, title, content, link } = data;
  return (
    <div className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
      {icon && (
        <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
          <FeatherIcon icon={icon} />
        </div>
      )}
      {image && (
        <ImageFallback
          className=" relative object-contain "
          src={image}
          fill={true}
          priority={true}
        />
      )}
      <h3 className="h4 mb-5 mt-6">{title}</h3>
      <p>{content}</p>
      {link && (
        <div className="mt-5">
          <Link className="btn btn-primary" href={link.href}>
            {link.label}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShortBanner;
