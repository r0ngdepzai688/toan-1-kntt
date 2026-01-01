
import React, { useState, useEffect } from 'react';
import { AppMode, SectionType, Lesson } from './types';
import { lessonsData } from './data';

const getEncouragement = (isCorrect: boolean) => {
  const correct = ["Giỏi quá! 🌟", "Tuyệt vời luôn! 🚀", "Con làm đúng rồi đó!", "Quá xuất sắc! 🏆", "Rô-bốt tự hào về con! 🤖"];
  const wrong = ["Mình thử lại nhé! 💪", "Cố lên, sắp được rồi!", "Con cứ bình tĩnh suy nghĩ nha!", "Gần đúng rồi, thử lại nào!", "Rô-bốt tin con làm được! ✨"];
  return (isCorrect ? correct : wrong)[Math.floor(Math.random() * (isCorrect ? correct.length : wrong.length))];
};

const Confetti: React.FC = () => {
  const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <div 
          key={i} 
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}vw`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.KID);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.LY_THUYET);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ msg: string; type: 'success' | 'error' | null }>({ msg: "Chào con! Chúng mình cùng học Toán nhé! 👋", type: null });
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('grade1_math_progress');
    if (saved) setCompletedLessons(JSON.parse(saved));
    const s = localStorage.getItem('grade1_math_score');
    if (s) setScore(parseInt(s));
  }, []);

  useEffect(() => {
    localStorage.setItem('grade1_math_progress', JSON.stringify(completedLessons));
    localStorage.setItem('grade1_math_score', score.toString());
  }, [completedLessons, score]);

  const currentLesson = lessonsData[currentLessonIndex];

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback({ msg: getEncouragement(true), type: 'success' });
    } else {
      setFeedback({ msg: getEncouragement(false), type: 'error' });
    }
    setTimeout(() => setFeedback(f => ({ ...f, type: null })), 2000);
  };

  const finishLesson = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
    setShowConfetti(true);
    setFeedback({ msg: "Tuyệt đỉnh! Con đã nhận được thêm sao may mắn! 🎉⭐", type: 'success' });
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-teal-50 selection:bg-teal-200">
      {showConfetti && <Confetti />}
      
      <header className="bg-teal-500 text-white p-4 shadow-md flex justify-between items-center shrink-0 z-10">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl">🎒</span>
          <span className="hidden md:inline">Toán 1 – Kết nối tri thức</span>
          <span className="md:hidden">Toán 1</span>
        </h1>
        <button 
          onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)}
          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1 rounded-full font-bold text-sm hover:bg-white/30 transition-all"
        >
          {mode === AppMode.KID ? '👩‍🏫 Giáo viên' : '🧒 Bé học'}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 bg-white border-r border-teal-100 flex flex-col shrink-0">
          <div className="p-4 border-b border-teal-50 font-bold text-teal-800 hidden md:flex items-center gap-2">
            🗺️ <span>Lộ trình học</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
            {lessonsData.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => {
                  setCurrentLessonIndex(idx);
                  setActiveSection(SectionType.LY_THUYET);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all relative ${
                  currentLessonIndex === idx 
                    ? 'bg-yellow-100 ring-2 ring-yellow-400 shadow-sm' 
                    : 'hover:bg-teal-50 text-gray-500'
                }`}
              >
                <span className="text-2xl">{lesson.icon}</span>
                <div className="hidden md:block text-left overflow-hidden">
                  <p className="text-[10px] font-bold text-teal-600 uppercase">Bài {lesson.id}</p>
                  <p className="text-sm font-semibold truncate">{lesson.title.split(': ')[1]}</p>
                </div>
                {completedLessons.includes(lesson.id) && (
                  <span className="absolute top-1 right-1 md:relative md:ml-auto text-yellow-500">⭐</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-teal-100 flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-4xl shadow-inner animate-bounce">
                🤖
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-bold text-teal-900">Bé Rô-bốt đồng hành cùng con!</h2>
                <p className="text-teal-600 font-bold">{currentLesson.title}</p>
                <div className="mt-2 w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-yellow-400 h-full transition-all duration-500" 
                    style={{ width: `${(completedLessons.length / lessonsData.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Feedback Alert */}
            <div className={`p-4 rounded-2xl border-2 mb-6 transition-all ${
              feedback.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' :
              feedback.type === 'error' ? 'bg-orange-50 border-orange-200 text-orange-700 animate-shake' :
              'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <p className="font-bold flex items-center justify-center gap-2">
                <span className="text-xl">{feedback.type === 'success' ? '✅' : feedback.type === 'error' ? '❌' : '🤖'}</span>
                {feedback.msg}
              </p>
            </div>

            {/* Mode Selector */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {[
                { type: SectionType.LY_THUYET, label: 'Lý thuyết', color: 'bg-pink-400' },
                { type: SectionType.TRAC_NGHIEM, label: 'Trắc nghiệm', color: 'bg-purple-500' },
                { type: SectionType.DUNG_SAI, label: 'Đúng / Sai', color: 'bg-orange-400' },
                { type: SectionType.DIEN_SO, label: 'Điền số', color: 'bg-green-500' },
              ].map((tab) => (
                <button
                  key={tab.type}
                  onClick={() => setActiveSection(tab.type)}
                  className={`px-6 py-3 rounded-xl text-white font-bold transition-all ${
                    activeSection === tab.type ? `${tab.color} scale-105 shadow-md` : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-teal-50 min-h-[400px]">
              {activeSection === SectionType.LY_THUYET && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-teal-800 mb-4">📖 Kiến thức cần nhớ</h3>
                  <div 
                    className="prose prose-teal max-w-none text-gray-700 text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: currentLesson.raw_html }}
                  />
                </div>
              )}

              {activeSection === SectionType.TRAC_NGHIEM && (
                <div className="space-y-8">
                  {currentLesson.sections.trac_nghiem.map((q, idx) => (
                    <div key={idx} className="bg-purple-50/50 p-6 rounded-3xl border border-purple-100">
                      <p className="text-lg font-bold text-gray-800 mb-4">{idx + 1}. {q.question}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(opt === q.answer)}
                            className="p-4 text-left rounded-2xl bg-white hover:bg-purple-100 text-purple-800 font-bold border border-purple-200 transition-all shadow-sm"
                          >
                            <span className="mr-2 text-purple-300">●</span> {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === SectionType.DUNG_SAI && (
                <div className="space-y-8">
                  {currentLesson.sections.dung_sai.map((q, idx) => (
                    <div key={idx} className="space-y-4">
                      <p className="text-lg font-bold text-gray-800">{q.question}</p>
                      {q.statements.map((s, sIdx) => (
                        <div key={sIdx} className="flex flex-col md:flex-row items-center justify-between p-4 bg-orange-50/50 rounded-2xl gap-4 border border-orange-100">
                          <span className="font-bold text-orange-900 text-center md:text-left">{s.text}</span>
                          <div className="flex gap-2">
                            <button onClick={() => handleAnswer(s.isCorrect)} className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">ĐÚNG</button>
                            <button onClick={() => handleAnswer(!s.isCorrect)} className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">SAI</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeSection === SectionType.DIEN_SO && (
                <div className="space-y-8">
                  {currentLesson.sections.dien_so.map((q, idx) => (
                    <div key={idx} className="bg-green-50/50 p-6 rounded-3xl border border-green-100 flex flex-col md:flex-row items-center gap-4">
                      <p className="text-lg font-bold text-gray-800 flex-1">{idx + 1}. {q.question}</p>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          className="w-24 p-2 border-2 border-green-200 rounded-xl text-center font-bold focus:border-green-500 outline-none"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAnswer((e.target as HTMLInputElement).value.toString().toLowerCase() === q.answer.toString().toLowerCase());
                              (e.target as HTMLInputElement).value = '';
                            }
                          }}
                        />
                        <button 
                          className="bg-green-600 text-white px-4 py-2 rounded-xl font-bold"
                          onClick={(e) => {
                            const input = e.currentTarget.previousSibling as HTMLInputElement;
                            handleAnswer(input.value.toString().toLowerCase() === q.answer.toString().toLowerCase());
                            input.value = '';
                          }}
                        >Kiểm tra</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-10 mb-20 flex flex-col items-center gap-4">
              <button 
                onClick={finishLesson}
                className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 px-12 py-4 rounded-full font-black text-xl shadow-[0_6px_0_0_#d97706] active:shadow-none active:translate-y-1 transition-all"
              >
                ⭐ Hoàn thành bài học!
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Teacher Mode Overlay */}
      {mode === AppMode.TEACHER && (
        <div className="fixed inset-0 bg-teal-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-[2rem] p-8 shadow-2xl overflow-y-auto max-h-[80vh] custom-scrollbar">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-teal-800">👩‍🏫 Dành cho Giáo viên</h2>
              <button onClick={() => setMode(AppMode.KID)} className="text-gray-400 hover:text-gray-600">Đóng</button>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-teal-50 rounded-2xl">
                  <p className="text-sm text-teal-600 font-bold">Số bài đã xong</p>
                  <p className="text-3xl font-black">{completedLessons.length}</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-2xl">
                  <p className="text-sm text-yellow-600 font-bold">Tổng điểm bé đạt</p>
                  <p className="text-3xl font-black">{score}</p>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 className="font-bold mb-4">🔑 Đáp án nhanh bài đang học:</h3>
                <div className="space-y-2 text-sm">
                  <p><b>Trắc nghiệm:</b> {currentLesson.sections.trac_nghiem.map(q => q.answer).join(', ')}</p>
                  <p><b>Điền số:</b> {currentLesson.sections.dien_so.map(q => q.answer).join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
