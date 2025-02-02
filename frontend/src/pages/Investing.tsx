import Navigation from "@/components/landing/Navigation1";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ChapterLayout from '@/components/learning/ChapterLayout';
import ChapterContent from '@/components/learning/ChapterContent';
import ChapterQuiz from '@/components/learning/ChapterQuiz';
import { investingBasicsContent, investingBasicsQuiz, investingPracticeQuiz } from "@/data/investing/basics";
import { Routes, Route } from "react-router-dom";

const chapters = [
  {
    title: "Investment Basics",
    description: "Learn the fundamentals of investing and market principles",
    path: "/investing/basics"
  },
  {
    title: "Stock Market",
    description: "Understanding how to invest in stocks and equity markets",
    path: "/investing/stocks"
  },
  {
    title: "Portfolio Management",
    description: "Learn to build and manage a diversified investment portfolio",
    path: "/investing/portfolio"
  },
  {
    title: "Risk Management",
    description: "Strategies to assess and manage investment risks effectively",
    path: "/investing/risk"
  },
  {
    title: "Retirement Planning",
    description: "Plan your long-term investment strategy for retirement",
    path: "/investing/retirement"
  }
];

const customStyles = {
  container: "container-padding py-12 md:py-24",
  banner: "bg-color-5 backdrop-blur-sm p-8 rounded-xl mb-16 shadow-lg mt-8",
  bannerHeader: "text-center mb-12",
  bannerTitle: "heading-xl mb-4 text-primary",
  bannerSubtitle: "text-xl text-neutral-600 max-w-2xl mx-auto",
  chaptersContainer: "max-w-3xl mx-auto",
  chaptersList: "relative",
  verticalLine: "absolute left-4 top-0 bottom-0 w-0.5 bg-n-8",
  chapterItem: "flex items-center gap-8 mb-8 group",
  chapterMarker: "relative z-10 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center",
  chapterCross: "text-primary font-bold text-lg",
  chapterContent: "flex-1 bg-color-5 p-6 rounded-xl shadow-sm border border-neutral-200 hover:shadow-lg transition-all",
  chapterTitle: "text-xl font-semibold mb-2 text-primary",
  chapterDescription: "text-neutral-600"
};

const Investing = () => {
  return (
    <Routes>
      <Route index element={
        <div className="min-h-screen bg-neutral-100">
          <Navigation />
          <div className={customStyles.container}>
            <div className={customStyles.banner}>
              <div className={customStyles.bannerHeader}>
                <motion.h1 
                  className={customStyles.bannerTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Master Investing
                </motion.h1>
                <motion.p 
                  className={customStyles.bannerSubtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Learn essential investment strategies to grow your wealth
                </motion.p>
              </div>
            </div>

            <div className={customStyles.chaptersContainer}>
              <div className={customStyles.chaptersList}>
                <div className={customStyles.verticalLine} />
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.title}
                    className={customStyles.chapterItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className={customStyles.chapterMarker}>
                      <span className={customStyles.chapterCross}>×</span>
                    </div>
                    <Link to={chapter.path} className="flex-1">
                      <div className={customStyles.chapterContent}>
                        <h3 className={customStyles.chapterTitle}>{chapter.title}</h3>
                        <p className={customStyles.chapterDescription}>{chapter.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      } />
      <Route path="basics" element={<ChapterLayout chapterTitle="Investment Basics" />}>
        <Route path="content" element={<ChapterContent title="Investment Basics" content={investingBasicsContent} />} />
        <Route path="basic-quiz" element={<ChapterQuiz title="Basic Concepts Quiz" questions={investingBasicsQuiz} isBasic={true} />} />
        <Route path="practice-quiz" element={<ChapterQuiz title="Practice Scenarios" questions={investingPracticeQuiz} isBasic={false} />} />
      </Route>
    </Routes>
  );
};

export default Investing;