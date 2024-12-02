import React, { useState } from "react";

const Slider = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How would you describe your personality??",
      options: [
        { id: "Alone", label: "Alone", video: "/videos/paris.mp4" },
        { id: "couple", label: "Couple", video: "/videos/tokyo.mp4" },
        { id: "Married", label: "Married", video: "/videos/new-york.mp4" },
      ],
    },
    {
        id: 2,
        question: "Select your preferred avatar.",
        options: [
          { id: "adventurer", label: "Adventurer", video: "/videos/adventurer.mp4" },
          { id: "beach", label: "Beach Lover", video: "/videos/beach-lover.mp4" },
          { id: "nature", label: "Nature Explorer", video: "/videos/nature.mp4" },
        
        ],
      },
      {
        id: 3,
        question: "Which continents interest you?",
        options: [
          { id: "africa", label: "Africa", video: "/videos/africa.mp4" },
          { id: "asia", label: "Asia", video: "/videos/asia.mp4" },
          { id: "europe", label: "Europe", video: "/videos/europe.mp4" },
        
        ],
      },
      {
        id: 4,
        question: "Your preferred travel month.",
        options: [
          { id: "january", label: "January", video: "/videos/january.mp4" },
          { id: "february", label: "February", video: "/videos/february.mp4" },
          { id: "march", label: "March", video: "/videos/march.mp4" },
        
        ],
      },
      {
        id: 5,
        question: "Specify the length of your trip.",
        options: [
          { id: "weekend", label: "Weekend (2-3 days)", video: "/videos/weekend.mp4" },
          { id: "short", label: "Short Trip (4-6 days)", video: "/videos/short-trip.mp4" },
          { id: "one-week", label: "One Week", video: "/videos/one-week.mp4" },
     
        ],
      },
      {
        id: 6,
        question: "Will you be traveling with a companion?",
        options: [
          { id: "solo", label: "Solo Traveler", video: "/videos/solo.mp4" },
          { id: "family", label: "With Family", video: "/videos/family.mp4" },
          { id: "friends", label: "With Friends", video: "/videos/friends.mp4" },
       
        ],
      },
      {
        id: 7,
        question: "Select the activities you’d like to include.",
        options: [
          { id: "sightseeing", label: "Sightseeing", video: "/videos/sightseeing.mp4" },
          { id: "beach", label: "Relaxing at the Beach", video: "/videos/beach.mp4" },
          { id: "adventure", label: "Adventure Activities", video: "/videos/adventure.mp4" },
       
        ],
      },
      {
        id: 8,
        question: "Please specify your budget.",
        options: [
          { id: "budget", label: "Budget Travel ($0-$1,000)", video: "/videos/budget.mp4" },
          { id: "midrange", label: "Mid-Range ($1,000-$3,000)", video: "/videos/midrange.mp4" },
          { id: "luxury", label: "Luxury ($3,000+)", video: "/videos/luxury.mp4" },
        ],
      },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-800  p-4">
        <h1 className="text-xl font-bold mb-4">Travel Questions</h1>
        <div className="space-y-6">
          {questions.map((q) => (
            <div key={q.id} className="space-y-2">
              <h2 className="text-lg">{q.question}</h2>
              <div className="space-y-1">
                {q.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionClick(opt)}
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selectedOption?.id === opt.id
                        ? "bg-blue-500"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Your Selection</h1>
        {selectedOption ? (
          <div className="space-y-4">
            <h2 className="text-lg">{`You selected: ${selectedOption.label}`}</h2>
            <video
              src={selectedOption.video}
              autoPlay
              loop
              muted
              className="w-full max-w-2xl rounded shadow-lg"
            ></video>
          </div>
        ) : (
          <p className="text-gray-500">Select an option to see the animation!</p>
        )}
      </div>
    </div>
  );
};

export default Slider;
