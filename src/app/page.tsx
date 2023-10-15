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
import {
  Fees,
  aboutContent,
  callForPaper,
  committees,
  importDates,
  venueContent,
} from "@/contents";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    {
      title: "about",
    },

    {
      title: "venue",
    },

    {
      title: "call for papers",
    },

    {
      title: "important dates",
    },

    {
      title: "commitees",
    },

    {
      title: "fees",
    },
  ];

  return (
    <div>
      {/* <div>this is the homepage</div> */}
      <Header />
      <div className="md:mx-[100px] mx-[20px] mt-[50px]">
        <Hero />
        <div className="mb-[20px]">
          <Tab
            tabs={tabs}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>

        {activeIndex === 0 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full"
            >
              {/* {aboutContent} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {activeIndex === 1 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full"
            >
              {/* {venueContent} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {activeIndex === 2 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full "
            >
              {/* {callForPaper} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {activeIndex === 3 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full"
            >
              {/* {importDates} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {activeIndex === 4 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full"
            >
              {/* {committees} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {activeIndex === 5 && (
          <div>
            <ReactMarkdown
              remarkPlugins={[gfm] as any}
              rehypePlugins={[rehypeRaw] as any}
              className="prose !max-w-full"
            >
              {/* {Fees} */}
              ### The site under maintenance
            </ReactMarkdown>
          </div>
        )}

        {/* <Card1 /> */}
      </div>

      <div className="mt-[30px]">
        <Footer />
      </div>
    </div>
  );
}
