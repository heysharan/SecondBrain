import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
    return (
        <div>
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200 max-w-72 items-center">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500">
                        {type === 'twitter' ? <TwitterIcon width="20px" height="20px"/> : <YoutubeIcon width="20px" height="20px"/>}
                    </div>
                    <p>{title}</p>
                </div>
                <div className="flex">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div className="pr-2 text-gray-500">
                        <DeleteIcon />
                    </div>
                </div>
            </div>
            <div className="pt-4">
                {type === 'youtube' && <iframe
                    className="w-full rounded-lg"
                    src={link.replace('watch', 'embed').replace('?v=', '/')}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>}
                {type === 'twitter' && <blockquote className="twitter-tweet">
                    <a href={link.replace('x.com', 'twitter.com')}></a>
                </blockquote>}
            </div>
        </div>
        </div>
    );
};