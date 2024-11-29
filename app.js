// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  duration:10,
  infinite:true
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});