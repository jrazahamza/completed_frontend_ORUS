import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Footer from "./Footer";
import NavigationalHeader from "./NavigationalHeader";


import imagesData from "../JSON/image.json";
import Couple from "../Images/couple2.png";
import CoupleHover from "../Images/couple.png";
import Family from "../Images/family2.png";
import FamilyHover from "../Images/family.png";
import Friends from "../Images/friends2.png";
import FriendsHover from "../Images/friends.png";

// Month Images
import Jan from "../Images/jan.png";
import JanHover from "../Images/january.png";
import Feb from "../Images/feb.png";
import FebHover from "../Images/feburary.png";
import Mar from "../Images/mar.png";
import MarHover from "../Images/march.png";
import April from "../Images/apr.png";
import AprilHover from "../Images/april.png";
import May from "../Images/may.png";
import MayHover from "../Images/may2.png";
import June from "../Images/june.png";
import JuneHover from "../Images/june2.png";
import July from "../Images/july.png";
import JulyHover from "../Images/july2.png";
import Aug from "../Images/aug.png";
import AugustHover from "../Images/aug2.png";
import Sept from "../Images/sept.png";
import SeptemberHover from "../Images/september.png";
import Oct from "../Images/oct.png";
import OctoberHover from "../Images/octomber.png";
import Nov from "../Images/nov.png";
import NovemberHover from "../Images/november.png";
import Dec from "../Images/dec.png";
import DecemberHover from "../Images/Dec2.png";

// Adventures:
import Winter from '../Images/winter.png';
import WinterHover from '../Images/winter2.png';
import Food from '../Images/foodandent.png';
import FoodHover from '../Images/foodandent2.png';
import Adventure from '../Images/adventue.png';
import AdventureHover from '../Images/advanture2.png';
import Sports from '../Images/sports.png';
import SportsHover from '../Images/sports2.png';
import Summer from '../Images/Summer.png';
import SummerHover from '../Images/summer2.png';
import Night from '../Images/night.png';
import NightHover from '../Images/night2.png';
import Festival from '../Images/Festavil.png';
import FestivalHover from '../Images/festival2.png';
import Luxary from '../Images/Luxary.png';
import LuxaryHover from '../Images/luxary2.png';
import AdventureSeeker from '../Images/advaantureentireprice.png';
import AdventureSeekerHover from '../Images/advanturesite.png';
import FamTraveller from '../Images/Family tarviller.png';
import FamTravelHover from '../Images/Familttravel.png';  
import Back from '../Images/backpacker2.png';
import BackHover from '../Images/backpacker2.png';
import Itiinary from '../Images/itinary planner.png';
import ItiinaryHover from '../Images/ItinaryPlaner.png';
import Traveller from '../Images/social traveler.png';
import TravellerHover from '../Images/socailtraveller.png';
import Wander from '../Images/creative.png';
import WanderHover from '../Images/creative2.png';
import Culture from '../Images/culture.png';
import CultureHover from '../Images/dulture.png';

import Solo from "../Images/solo2.png";
import SoloHover from "../Images/solo.png";
import hoverPng from "../Images/Animations/Animations/Solo.mp4";
import CouplePng from "../Images/Animations/Animations/Couple.mp4";
import FamilyPng from "../Images/Animations/Animations/Family.mp4";
import friendsPng from "../Images/Animations/Animations/Friends.mp4";
import JanuaryPng from '../Images/Animations/Animations/Skype_Picture_2024_10_07T15_56_05_970Z.jpeg';
import WinterPng from '../Images/Animations/Animations/Winter Activities.mp4';
import FoodPng from '../Images/Animations/Animations/Food & Enter.mp4';
import AdventurePng from '../Images/Animations/Animations/Adventurer.mp4';
import SportsPng from '../Images/Animations/Animations/Sport.mp4';
import SummerPng from '../Images/Animations/Animations/Summer activities.mp4';
import NightPng from '../Images/Animations/Animations/Night Life.mp4';
import FestivalPng from '../Images/Animations/Animations/Festivals.mp4';
import LuxaryPng  from '../Images/Animations/Animations/Luxury traveler.mp4';
import AdventureSeekerPng from '../Images/Animations/Animations/Adventure seeker.mp4';
import FamTravelPng from '../Images/Animations/Animations/Family traveler.mp4';
import BackPng from '../Images/Animations/Animations/Backpacker.mp4';
import ititaryPng from '../Images/Animations/Animations/Itinerary Planner.mp4';
import TravellerPng from '../Images/Animations/Animations/Social Travelers.mp4';
import WanderPng from '../Images/Animations/Animations/Creative wanderar.mp4';
import CulturePng from '../Images/Animations/Animations/Cultural Explorer.mp4';
import BackImage from '../Images/back.png';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';


const imageMap = {
  WinterPng,
  FoodPng,
  AdventurePng,
  SportsPng,
  SummerPng,
  NightPng,
  FestivalPng,
  LuxaryPng,
  AdventureSeekerPng,
  FamTravelPng,
  BackPng,
  ititaryPng,
  TravellerPng,
  WanderPng,
  CulturePng,
  Solo,
  SoloHover,
  Couple,
  CoupleHover,
  Family,
  FamilyHover,
  Friends,
  FriendsHover,
  Jan,
  JanHover,
  Feb,
  FebHover,
  Mar,
  MarHover,
  April,
  AprilHover,
  May,
  MayHover,
  June,
  JuneHover,
  July,
  JulyHover,
  Aug,
  AugustHover,
  Sept,
  SeptemberHover,
  Oct,
  OctoberHover,
  Nov,
  NovemberHover,
  Dec,
  DecemberHover,
  Winter,
  WinterHover,
  Food,
  FoodHover,
  Adventure,
  AdventureHover,
  Sports,
  SportsHover,
  Summer,
  SummerHover,
  Night,
  NightHover,
  Festival,
  FestivalHover,
  Luxary,
  LuxaryHover,
  AdventureSeeker,
  AdventureSeekerHover,
  FamTraveller,
  FamTravelHover,
  Back,
  BackHover,
  Itiinary,
  ItiinaryHover,
  Traveller,
  TravellerHover,
  Wander,
  WanderHover,
  Culture,
  CultureHover,
  hoverPng,
  CouplePng,
  FamilyPng,
  friendsPng,
  JanuaryPng,
};


const Questions = () => {
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [recommendation, setRecommendation] = useState("");

  useEffect(() => {
    setQuestions(imagesData.questions);
  }, []);

  const handleAnswer = (questionId, answer, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setSelectedImage(option.img);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleHover = (option) => {
    setHoveredOption(option.label);
    if (option.videoSrc) {
      setVideoSrc(imageMap[option.videoSrc] || option.videoSrc);
    }
  };

  const handleMouseLeave = () => {
    setHoveredOption(null);
    setVideoSrc(null);
  };

  const generateRecommendation = () => {
    const mostFrequentAnswer = Object.values(answers).reduce((acc, value, _, arr) => {
      const count = arr.filter(item => item === value).length;
      return count > acc.count ? { label: value, count } : acc;
    }, { label: "", count: 0 });

    if (mostFrequentAnswer.label === "Solo") {
      return "You should consider a solo adventure to explore the world on your own!";
    } else if (mostFrequentAnswer.label === "Couple") {
      return "A romantic getaway with your partner would be a perfect option!";
    } else if (mostFrequentAnswer.label === "Family") {
      return "A family vacation to create unforgettable memories!";
    } else {
      return "Explore a group adventure with friends and create lasting bonds!";
    }
  };

  const handleFinish = () => {
    const rec = generateRecommendation();
    setRecommendation(rec);
  };

  if (!questions.length) return <p>Loading...</p>;


  return (
    <div>
      <NavigationalHeader />
      <div className="h-screen flex flex-col items-center bg-cover bg-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Travel Recommendation Quiz</h1>

      {/* Display Question */}
      <div
      
        className="w-full max-w-lg bg-white p-6 rounded-lg hover:bg-gradient-to-r shadow-md"
        style={{ backgroundImage: `url(${BackImage})` }}
      >
        <p className="text-lg font-semibold text-gray-700 text-center">
          {questions[currentIndex].question}
        </p>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {questions[currentIndex].options.map((option) => (
            <label
              key={option.label}
              className={`flex flex-col items-center gap-2 cursor-pointer p-4 rounded-lg border h-36 ${
                answers[questions[currentIndex].id] === option.label
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onMouseEnter={() => handleHover(option)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleAnswer(questions[currentIndex].id, option.label, option)}
            >
              <input
                type="radio"
                name={`question-${questions[currentIndex].id}`}
                value={option.label}
                checked={answers[questions[currentIndex].id] === option.label}
                onChange={() => handleAnswer(questions[currentIndex].id, option.label, option)}
                className="hidden"
              />
              <img
                src={
                  hoveredOption === option.label && option.hoverImg
                    ? imageMap[option.hoverImg]
                    : selectedImage && selectedImage === option.img
                    ? imageMap[option.img]
                    : imageMap[option.img]
                }
                alt={option.label}
                className="w-16 h-16"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {videoSrc && (
        <div className="mt-6 w-full max-w-lg">
          <video autoPlay loop muted controls width="600">
            <source src={videoSrc} type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      )}

      <div className="flex justify-between mt-6 w-full max-w-lg">
        {currentIndex === questions.length - 1 ? (
          <button
            onClick={handleFinish}
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
          >
            Finish
          </button>
        ) : (
          <>
            <button
              onClick={handlePrevious}
              className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              Next
            </button>
          </>
        )}
      </div>

   <Link to='/IntinaryCreated'>   {recommendation && (
        <div className="mt-6 w-full max-w-lg bg-indigo-100 p-4 rounded-lg text-indigo-800 font-medium text-center">
          <p>{recommendation}</p>
        </div>
      )} </Link>
    </div>
      <Footer />
      <Carousel>
      <Carousel.Item>
      
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Questions;
