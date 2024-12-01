interface SectionProps {
  id: string;
  title: string;
  content: Array<{
    type: "text" | "blocks";
    textContent?: string;
    blocks?: Array<{
      title: string;
      items: string[];
    }>;
  }>;
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-16 lg:px-24 max-w-screen-xl mx-auto border-b border-gray-200"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
      <div className="text-base sm:text-lg leading-7 text-gray-700 w-full">
        {content.map((blockGroup, index) => {
          if (blockGroup.type === "text" && blockGroup.textContent) {
            return (
              <p key={index} className="mb-8">
                {blockGroup.textContent}
              </p>
            );
          }

          if (blockGroup.type === "blocks" && blockGroup.blocks) {
            const numBlocks = blockGroup.blocks.length;
            let gridColsClass = "grid-cols-1";
            if (numBlocks === 2 || numBlocks === 4)
              gridColsClass = "sm:grid-cols-2";
            if (numBlocks === 3 || numBlocks === 6)
              gridColsClass = "sm:grid-cols-3";
            else if (numBlocks >= 7) gridColsClass = "sm:grid-cols-4";

            return (
              <div key={index} className={`grid ${gridColsClass} gap-8 mb-8`}>
                {blockGroup.blocks.map((block, blockIndex) => (
                  <div key={blockIndex} className="flex-1">
                    <h4 className="bg-blue-300 p-2 rounded mb-2 text-center font-bold text-lg">
                      {block.title}
                    </h4>
                    <ul className="list-disc pl-6 space-y-4">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
    </section>
  );
};

export default Section;
