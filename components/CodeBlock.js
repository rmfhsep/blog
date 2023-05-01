import SyntaxHighlighter from "react-syntax-highlighter"

export default function CodeBlock ({children}) {
    return (
      <div>
        <button>카피</button>
        <SyntaxHighlighter>{children}</SyntaxHighlighter>
      </div>
    );
}