import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
// import Blog from "./Blog";
import { Link } from "react-router-dom";
const CardBlog = ({
  id,
  title,
  author_details,
  excerpt,
  date,
  featured_media_url,
  slug,
}) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <Link to={`/articles/${slug}/${id}`}>
      <div className="w-full h-full flex flex-col justify-start items-start shadow-md rounded-2xl bg-white cursor-pointer duration-300 ease-in-out hover:shadow-lg hover:-mt-5">
        <div className="w-full">
          {featured_media_url && (
            <img
              src={featured_media_url}
              alt={title.rendered}
              className="rounded-t-2xl"
            />
          )}
        </div>
        <div className="p-4 flex justify-center items-start flex-col gap-4 h-[260px] md:h-fit">
          <div className="flex justify-center items-center gap-4">
            {author_details && (
              <span className="flex justify-center items-center gap-2">
                <FontAwesomeIcon className="text-gray50" icon={faUser} />
                <small className="block capitalize">
                  {author_details.name}
                </small>
              </span>
            )}
            {/* <span className="flex justify-center items-center gap-2">
              <FontAwesomeIcon className="text-gray50" icon={faUser} />
              <small className="block capitalize">{author}</small>
            </span> */}
            <span className="flex justify-center items-center gap-2">
              <FontAwesomeIcon className="text-gray50" icon={faCalendarDays} />
              <small className="block capitalize">{formatDate(date)}</small>
            </span>
          </div>
          <H4
            h4Title={title.rendered}
            h4ExtraClass="font-medium text-black900"
          />
          <Paragraph paraText={excerpt.rendered} width="text-gray50" />
        </div>
      </div>
    </Link>
  );
};
export default CardBlog;
