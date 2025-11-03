const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(217 91% 60% / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(217 91% 60% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
      
      {/* Animated dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" 
           style={{ animationDuration: '3s' }} />
      <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-accent rounded-full animate-ping" 
           style={{ animationDuration: '4s', animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" 
           style={{ animationDuration: '5s', animationDelay: '2s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </div>
  );
};

export default GridBackground;
