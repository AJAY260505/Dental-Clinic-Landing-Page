"use client";

const reviews = [
  {
    name: "Ajay J",
    avatar: "/avatars/1.jpg",
    review: "Excellent care! Dr. Rahman is the best in Madurai.",
  },
  {
    name: "Srinath R",
    avatar: "/avatars/2.jpg",
    review: "Very clean clinic and great experience overall!",
  },
  {
    name: "Densingh D",
    avatar: "/avatars/3.jpg",
    review: "Staff is friendly and treatment was painless.",
  },
  {
    name: "Jayanth Moulee C",
    avatar: "/avatars/4.jpg",
    review: "Affordable pricing and good follow-up care.",
  },
  {
    name: "Darunesh R",
    avatar: "/avatars/5.jpg",
    review: "I’m very satisfied, highly recommend!",
  },
];

export const ReviewTicker = () => {
  return (
    <section className="bg-primary py-10 overflow-hidden">
      <div className="relative group">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((r, idx) => (
            <div
              key={idx}
              className="w-[280px] mx-3 bg-white text-gray-800 rounded-xl p-4 shadow-md shrink-0 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center">
                {/* Stars */}
                <p className="text-yellow-400 text-lg mb-2">★ ★ ★ ★ ★</p>

                {/* Avatar */}
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-primary"
                />

                {/* Name */}
                <p className="font-bold text-primary text-lg mb-1">{r.name}</p>

                {/* Review */}
                <p className="text-sm text-gray-600">{r.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
