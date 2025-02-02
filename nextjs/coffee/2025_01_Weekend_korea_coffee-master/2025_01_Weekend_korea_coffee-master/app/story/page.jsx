"use client";
import Banner from "@/widgets/banner/Banner";
import Motto from "@/widgets/motto/Motto";
import Motto2 from "@/widgets/motto/Motto2";
import Motto3 from "@/widgets/motto/Motto3";
import Sample from "@/shared/Sample";
import { MSG } from "@/constant/msg";
import StoryFadeIn from "@/shared/StoryFadeIn";

const Page = () => {
  return (
    <main>
      <StoryFadeIn />
      <Motto2 />
      <Motto3 />
    </main>
  );
};

export default Page;
