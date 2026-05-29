export type Review = {
  name: string;
  rating: number;
  text: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    name: "Marta R.",
    rating: 5,
    text: "O'Connor & Sons did an outstanding job upgrading our electrical panel. They were professional, on time, and cleaned up everything afterward. I feel so much safer with the new setup.",
    avatar: "https://ui-avatars.com/api/?name=Marta+R&background=266021&color=fff&size=40",
  },
  {
    name: "Willie L.",
    rating: 5,
    text: "Had them install EV chargers in my garage. Fast, clean work, and they explained every step. Couldn't be happier with the service.",
    avatar: "https://ui-avatars.com/api/?name=Willie+L&background=266021&color=fff&size=40",
  },
  {
    name: "S.Q.",
    rating: 5,
    text: "As a property owner in Palo Alto, I've used many contractors. O'Connor & Sons stands out for their reliability and quality. They handle all our electrical needs across multiple units.",
    avatar: "https://ui-avatars.com/api/?name=SQ&background=266021&color=fff&size=40",
  },
  {
    name: "R.O.",
    rating: 5,
    text: "Called them for an emergency issue in Menlo Park — they arrived within the hour and fixed everything quickly. Very fair pricing and excellent communication throughout.",
    avatar: "https://ui-avatars.com/api/?name=RO&background=266021&color=fff&size=40",
  },
  {
    name: "James T.",
    rating: 5,
    text: "These guys rewired our entire kitchen during a remodel. Incredibly clean work, passed inspection first try, and they were a pleasure to have on-site. Highly recommend.",
    avatar: "https://ui-avatars.com/api/?name=James+T&background=266021&color=fff&size=40",
  },
  {
    name: "Lisa M.",
    rating: 5,
    text: "Smart home wiring done right. They integrated all our devices seamlessly and walked us through the setup. Truly a tech-forward electrical company.",
    avatar: "https://ui-avatars.com/api/?name=Lisa+M&background=266021&color=fff&size=40",
  },
];
