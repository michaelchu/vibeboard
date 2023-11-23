import { Avatar, Rating } from "flowbite-react";
import { lorem } from "../../util/helpers.ts";
import React from "react";
import { KeyboardProps } from "../../util/types.ts";
import CommentsCard from "./CommentsCard.tsx";
import Ratings from "./Ratings.tsx";

export default function DesktopDetailSection({
  keyboard,
  publicUrl,
}: {
  keyboard: KeyboardProps;
  publicUrl: string;
}) {
  return (
    <div className="w-full h-full items-center justify-center py-8">
      <div className="pb-8 flex items-center space-x-2">
        <Avatar
          img={
            "https://cdn.tailkit.com/media/placeholders/avatar-iFgRcqHznqg-160x160.jpg"
          }
          size={"lg"}
        />
        <div>
          <p className={"text-xl"}>{keyboard.theme_name}</p>
          <p className="font-light text-lg text-gray-500">
            {lorem.generateWords(2)}
          </p>
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </Rating>
        </div>
      </div>
      <img alt={"#"} src={publicUrl} className={"p-10"} />
      <h2 className={"text-xl font-bold py-4 mt-4"}>Description</h2>
      <p className={"text-sm"}>{keyboard.description}</p>
      <h2 className={"text-xl font-bold py-4 mt-4"}>Ratings & Reviews</h2>
      <Ratings />
      <h2 className={"text-xl font-bold py-4 mt-4"}>Comments</h2>
      <CommentsCard />
    </div>
  );
}
