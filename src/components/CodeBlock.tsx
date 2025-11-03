import { useEffect, useState } from "react";

const codeSnippets = [
  {
    language: "python",
    code: `def hire_kinjal():
    # Best ROI decision ever
    return "10x productivity boost"`,
  },
  {
    language: "sql",
    code: `SELECT employee_name 
FROM candidates 
WHERE skills = 'extraordinary'
LIMIT 1; -- It's me :)`,
  },
  {
    language: "javascript",
    code: `const bestHire = () => {
  console.log("Hire me!");
  return "instant regret if you don't";
};`,
  },
];

const CodeBlock = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
      setCharIndex(0);
      setDisplayedCode("");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (charIndex < codeSnippets[currentSnippet].code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(
          (prev) => prev + codeSnippets[currentSnippet].code[charIndex]
        );
        setCharIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentSnippet]);

  return (
    <div className="relative bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-auto text-muted-foreground text-xs">
          {codeSnippets[currentSnippet].language}
        </span>
      </div>
      <pre className="text-foreground whitespace-pre-wrap">
        <code>{displayedCode}</code>
        <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1"></span>
      </pre>
    </div>
  );
};

export default CodeBlock;
