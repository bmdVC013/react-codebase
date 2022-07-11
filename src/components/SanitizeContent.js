import React from "react";
import DOMPurify from "dompurify";

const SanitizeContent = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    ></div>
  );
};

export default SanitizeContent;
