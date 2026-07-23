import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";

const ShortBanner = ({ data }) => {
  const { icon, image, title, subtitle, content, link } = data;
  return (
    <div className="feature-card m-4 flex h-full flex-col rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none">
      {icon && !image && (
        <div className="feature-card-icon inline-flex h-20 w-20 self-center justify-center rounded-md border border-[#fff7f3] text-primary">
          <FeatherIcon icon={icon} />
        </div>
      )}
      {image && (
        <div className="relative flex-1 min-h-[220px]">
          <ImageFallback
            className="object-cover"
            src={image}
            fill={true}
            priority={true}
          />
        </div>
      )}
      <h3 className="h4 mb-2 mt-6">{title}</h3>
      <div className="inline-flex rounded-md border border-[#fff7f3] text-primary">
        {icon && (
          <>
            <FeatherIcon className="mr-1" icon={icon} />
            <h6 className="italic h6 mb-6">{subtitle}</h6>{" "}
          </>
        )}
      </div>

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
