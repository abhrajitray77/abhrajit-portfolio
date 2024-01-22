import "katex/dist/katex.min.css";

import React from "react";

import { Barlow } from "next/font/google";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import fallbackImg from "@/public/assets/gradient.webp";


interface MarkdownRendererProps {
  content: string;
}

// Utility function to extract text from React nodes
function extractTextFromReactNodes(node: React.ReactNode): string {
  if (typeof node === "string") {
    return node;
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNodes).join("");
  }
  if (node && typeof node === "object" && "props" in node) {
    return extractTextFromReactNodes(node.props.children);
  }
  return "";
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      className={`leading-relaxed tracking-wide whitespace-pre-wrap`}
      remarkPlugins={[remarkGfm, [remarkMath, { singleDollarTextMath: true }]]}
      rehypePlugins={[rehypeKatex, rehypeSlug, rehypeAutolinkHeadings]}
      components={{
/*         code(props) {
          const { children, className } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <CodeBlock match={match}>{children}</CodeBlock>
          ) : (
            <code
              className={cn(
                className,
                "text-sm font-mono font-thin bg-secondary rounded-sm p-1"
              )}
            >
              {children}
            </code>
          );
        }, */
/*         pre: ({ children }) => (
          <pre className="relative overflow-x-auto rounded-xl">
            <CopyToClipboardButton
              textToCopy={extractTextFromReactNodes(children)}
              className="absolute w-8 h-8 m-1 rounded-lg right-1 top-2 bg-background"
            />
            {children}
          </pre>
        ), */
        a: ({ node, ...props }) => (
          <a className="text-blue-500 hover:underline" {...props} />
        ),
/*         table(props) {
          const { children } = props;
          return (
            <Table className="relative my-2 overflow-x-auto rounded-lg bg-background">
              {children}
            </Table>
          );
        }, */
/*         thead(props) {
          return <TableHeader>{props.children}</TableHeader>;
        },
        tbody(props) {
          return <TableBody>{props.children}</TableBody>;
        },
        tr(props) {
          return <TableRow>{props.children}</TableRow>;
        },
        th(props) {
          return <TableHead>{props.children}</TableHead>;
        },
        td(props) {
          return (
            <TableCell className="font-medium">{props.children}</TableCell>
          );
        }, */
        h1({ children }) {
          return (
            <h1 className="text-4xl font-semibold md:text-5xl">{children}</h1>
          );
        },
        h2({ children }) {
          return (
            <h2 className="text-3xl font-semibold md:text-4xl">{children}</h2>
          );
        },
        h3({ children }) {
          return (
            <h3 className="text-2xl font-semibold md:text-3xl">{children}</h3>
          );
        },
        h4({ children }) {
          return (
            <h4 className="text-xl font-semibold md:text-2xl">{children}</h4>
          );
        },
        h5({ children }) {
          return (
            <h5 className="text-lg font-semibold md:text-xl">{children}</h5>
          );
        },
        h6({ children }) {
          return (
            <h6 className="text-base font-semibold md:text-lg">{children}</h6>
          );
        },
        // p: ({ children, node }) => {
        //   // @ts-ignore
        //   if (node.children[0].tagName === "img") {
        //     const image = node?.children[0];
        //     // @ts-ignore
        //     const metastring = image.properties.alt;
        //     const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        //     const metaWidth = metastring.match(/\{(\d+)x/);
        //     const metaHeight = metastring.match(/x(\d+)\}/);
        //     const width = metaWidth ? metaWidth[1] : "800";
        //     // only values in multiples of 100s work
        //     const height = metaHeight ? metaHeight[1] : "400";
        //     const isPriority = metastring?.toLowerCase().match("{priority}");
        //     const hasCaption = metastring?.toLowerCase().includes("{caption:");
        //     const caption = metastring?.match(/{caption: (.*?)}/)?.pop();
        //     return (
        //       <div
        //         className={`w-full h-[${height}px] border-[1px] border-border p-2 rounded-xl`}
        //       >
        //         <Image
        //           // @ts-ignore
        //           src={image.properties.src || fallbackImg}
        //           width={width}
        //           height={height}
        //           className="object-cover rounded-lg w-full h-[revert-layer]"
        //           alt={alt}
        //           priority={isPriority}
        //         />
        //         {hasCaption ? (
        //           <div className="text-sm text-muted" aria-label={caption}>
        //             {caption}
        //           </div>
        //         ) : null}
        //       </div>
        //     );
        //   }
        //   return (
        //     <p
        //       className={`${barlow.variable} font-markdown text-base md:text-lg font-normal`}
        //     >
        //       {children}
        //     </p>
        //   );
        //},
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;