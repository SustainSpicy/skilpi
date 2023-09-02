import React from "react";

const PostCard = ({
  username,
  display_name,
  profile_picture,
  imageUrl,
  number_of_likes,
  comments,
  comment_text,
}) => {
  return (
    <div className=" w-[380px] bg-white rounded-2xl flex-col justify-start items-start inline-flex">
      <div className="Top self-stretch px-4 py-2 rounded-tl-2xl rounded-tr-2xl justify-start items-center gap-2 inline-flex">
        <div className=" grow shrink basis-0 h-10 justify-start items-center gap-2 flex">
          <img
            className="Avatar w-10 h-10 rounded-full"
            src={profile_picture}
          />
          <div className=" grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
            <div className=" self-stretch">
              <span className="text-neutral-900 text-base font-bold">
                {display_name}
              </span>
              <span className="text-black text-base font-medium"> </span>
            </div>
            <div className=" self-stretch text-slate-600 text-base font-normal">
              @{username}
            </div>
          </div>
        </div>
        <div className="More w-6 h-6 relative" />
      </div>
      <div className="Img self-stretch h-[334px] flex-col justify-start items-start gap-2 flex">
        <img className="Img self-stretch grow shrink basis-0" src={imageUrl} />
      </div>
      <div className="Actions self-stretch p-4 justify-between items-start gap-8 inline-flex">
        <div className="Frame2 justify-start items-start gap-6 flex">
          <div className="Likes h-6 justify-start items-center gap-2 flex">
            <img src="/heart.png" className="Heart w-6 h-6 relative" />
            <div className=" text-slate-600 text-xs font-medium">
              {number_of_likes}
            </div>
          </div>
          <div className="Comments h-6 justify-start items-center gap-2 flex">
            <img src="/comment.png" className="Heart w-6 h-6 relative" />
            <div className=" text-slate-600 text-xs font-medium">
              {comments.length}
            </div>
          </div>
        </div>
        <div className="Bookmark justify-start items-center gap-2 flex">
          <div className="Bookmark w-6 h-6 relative" />
        </div>
      </div>
      <div className="Caption self-stretch  px-4 pt-2 pb-4 rounded-bl-2xl rounded-br-2xl border-t border-gray-100 flex-col justify-start items-start gap-2 flex">
        <div className="NameUsername self-stretch">
          <span className="text-neutral-900 text-base font-bold">
            {" "}
            {display_name}
          </span>
          <span className="text-black text-base font-medium"> </span>
          <span className="text-slate-600 text-base font-normal">
            {" "}
            @{username}
          </span>
        </div>
        {comments.map((comment, index) => {
          return (
            <div
              key={index}
              className=" self-stretch text-neutral-900 text-base font-normal"
            >
              - {comment.comment_text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;
