"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tab from "@/components/Tab";
import Card1 from "@/components/cards/Card1";
import { useState } from "react";
import { aboutContent } from "@/contents/about";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "Shop",
    },

    {
      title: "Job",
    },

    {
      title: "Portfolio",
    },
  ];

  return (
    <div>
      {/* <div>this is the homepage</div> */}

      <div className="md:mx-[200px] mx-[20px]">
        <Header />
        <Hero />
        <Tab
          tabs={tabs}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        {activeIndex === 1 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose"
            >
              {aboutContent}
            </ReactMarkdown>
          </div>
        )}

        <Card1 />
        <Footer />
      </div>
    </div>
  );
}
