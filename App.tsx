
import React, { useState, useEffect } from 'react';
import { AppMode, SectionType, Lesson } from './types';
import { lessonsData } from './data';

const getEncouragement = (isCorrect: boolean) => {
  const correct = ["Giỏi quá! 🌟", "Tuyệt vời luôn! 🚀", "Con làm đúng rồi đó!", "Quá xuất sắc! 🏆"];
  const wrong = ["Mình thử lại nhé! 💪", "Cố lên, sắp được rồi!", "Con cứ bình tĩnh suy nghĩ nha!", "Gần đúng rồi, thử lại nào!"];
  return (isCorrect ? correct : wrong)[Math.floor(Math.random() * (isCorrect ? correct.length : wrong.length))];
};

const Confetti: React.FC = () => {
  const pieces = Array.from({ length: 50 });
  return (
    <>
      {pieces.map((_, i) => (
        <div 
          key={i} 
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}vw`,
            backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
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

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('grade1_math_progress');
    const savedScore = localStorage.getItem('grade1_math_score');
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    if (savedScore) setScore(parseInt(savedScore));
  }, []);

  // Save progress to localStorage
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
    setTimeout(() => setFeedback(f => ({ ...f, type: null })), 2500);
  };

  const finishLesson = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
    setShowConfetti(true);
    setFeedback({ msg: "Chúc mừng con đã hoàn thành bài học! 🎉⭐", type: 'success' });
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Kết quả học Toán lớp 1',
      text: `Con đã hoàn thành ${completedLessons.length} bài học và đạt được ${score} điểm trong ứng dụng Toán 1! 🌟`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert("Tính năng chia sẻ chưa hỗ trợ trên trình duyệt này. Hãy copy link nhé!");
      }
    } catch (err) {
      console.log('Error sharing:', err);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-teal-50 selection:bg-teal-200">
      {showConfetti && <Confetti />}
      
      {/* Top Bar */}
      <header className="bg-teal-500 text-white p-4 shadow-md flex justify-between items-center shrink-0 z-10">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl drop-shadow-sm">🎒</span>
          <span className="hidden md:inline drop-shadow-sm">Toán 1 – Kết nối tri thức</span>
          <span className="md:hidden">Toán 1</span>
        </h1>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)}
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full font-bold text-sm hover:bg-white/30 transition-all flex items-center gap-2"
          >
            {mode === AppMode.KID ? '👩‍🏫 Cô giáo' : '🧒 Bé học'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 bg-white border-r border-teal-100 flex flex-col shrink-0 shadow-sm">
          <div className="p-4 border-b border-teal-50 font-bold text-teal-800 hidden md:flex items-center gap-2">
            🗺️ <span>Bản đồ học tập</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
            {lessonsData.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => {
                  setCurrentLessonIndex(idx);
                  setActiveSection(SectionType.LY_THUYET);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 relative ${
                  currentLessonIndex === idx 
                    ? 'bg-yellow-100 ring-2 ring-yellow-400 shadow-md transform scale-[1.02]' 
                    : 'hover:bg-teal-50 text-gray-500 hover:text-teal-700'
                }`}
              >
                <span className={`text-2xl ${currentLessonIndex === idx ? 'grayscale-0' : 'grayscale-[0.5]'}`}>{lesson.icon}</span>
                <div className="hidden md:block text-left overflow-hidden">
                  <p className={`text-[10px] font-bold uppercase ${currentLessonIndex === idx ? 'text-teal-600' : 'text-gray-400'}`}>Bài {lesson.id}</p>
                  <p className="text-sm font-semibold truncate">{lesson.title.split(': ')[1]}</p>
                </div>
                {completedLessons.includes(lesson.id) && (
                  <span className="absolute top-1 right-1 md:relative md:ml-auto text-yellow-500 animate-pulse text-xs">⭐</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar bg-teal-50/20 p-4 md:p-8">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header Card */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-teal-100 flex flex-col md:flex-row items-center gap-6 mb-8 transform hover:shadow-md transition-shadow">
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center text-5xl shadow-inner group-hover:rotate-12 transition-transform cursor-pointer">
                  🤖
                </div>
                <div className="absolute -top-1 -right-1 bg-yellow-400 text-white p-1 rounded-full animate-bounce shadow-sm">
                  ✨
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-teal-900">Bé Rô-bốt chào con! 👋</h2>
                <p className="text-teal-600 font-bold text-lg mb-2">{currentLesson.title}</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 h-4 rounded-full overflow-hidden border border-gray-200">
                    <div 
                      className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-full transition-all duration-1000 ease-out shadow-sm" 
                      style={{ width: `${(completedLessons.length / lessonsData.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-black text-teal-700">{Math.round((completedLessons.length / lessonsData.length) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Feedback Alert */}
            <div className={`mb-6 p-4 rounded-3xl border-2 transition-all duration-300 transform ${
              feedback.type === 'success' ? 'bg-green-50 border-green-200 text-green-700 scale-105' :
              feedback.type === 'error' ? 'bg-orange-50 border-orange-200 text-orange-700 animate-shake' :
              'bg-blue-50 border-blue-200 text-blue-700'
            } ${!feedback.type ? 'opacity-90 shadow-sm' : 'shadow-lg'}`}>
              <p className="font-bold flex items-center justify-center gap-3 text-lg">
                <span className="text-2xl">{feedback.type === 'success' ? '🎉' : feedback.type === 'error' ? '💡' : '🤖'}</span>
                {feedback.msg}
              </p>
            </div>

            {/* Mode Selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { type: SectionType.LY_THUYET, label: 'Lý thuyết', emoji: '🌸', color: 'bg-pink-400' },
                { type: SectionType.TRAC_NGHIEM, label: 'Trắc nghiệm', emoji: '🟣', color: 'bg-purple-500' },
                { type: SectionType.DUNG_SAI, label: 'Đúng / Sai', emoji: '🟠', color: 'bg-orange-400' },
                { type: SectionType.DIEN_SO, label: 'Điền số', emoji: '🟢', color: 'bg-green-500' },
              ].map((tab) => (
                <button
                  key={tab.type}
                  onClick={() => setActiveSection(tab.type)}
                  className={`p-4 rounded-2xl text-white font-bold transition-all shadow-sm flex flex-col items-center gap-1 ${
                    activeSection === tab.type 
                      ? `${tab.color} scale-105 shadow-md ring-4 ring-white` 
                      : 'bg-gray-300 hover:bg-gray-400 opacity-80'
                  }`}
                >
                  <span className="text-xl">{tab.emoji}</span>
                  <span className="text-xs md:text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Task Content */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-teal-50 min-h-[400px]">
              {activeSection === SectionType.LY_THUYET && (
                <div className="animate-in fade-in zoom-in duration-300">
                  <h3 className="text-xl font-bold text-teal-800 mb-6 flex items-center gap-2">
                    <span className="text-2xl">📖</span> Cùng tìm hiểu bài học nào!
                  </h3>
                  <div className="prose prose-teal max-w-none text-gray-700 text-lg leading-relaxed bg-teal-50/30 p-6 rounded-2xl border border-teal-50">
                    {currentLesson.raw_html}
                  </div>
                </div>
              )}

              {activeSection === SectionType.TRAC_NGHIEM && (
                <div className="space-y-6">
                  {currentLesson.sections.trac_nghiem.map((q, idx) => (
                    <div key={idx} className="bg-purple-50/30 p-6 rounded-3xl border border-purple-100">
                      <p className="text-lg font-bold text-gray-800 mb-4">{idx + 1}. {q.question}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(opt === q.answer)}
                            className="p-4 text-left rounded-2xl bg-white hover:bg-purple-100 text-purple-800 font-bold border border-purple-200 transition-all hover:scale-[1.02] active:scale-95 shadow-sm"
                          >
                            <span className="inline-block w-8 h-8 rounded-full bg-purple-100 text-center leading-8 mr-2 text-sm">{String.fromCharCode(65 + oIdx)}</span>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === SectionType.DUNG_SAI && (
                <div className="space-y-6">
                  {currentLesson.sections.dung_sai.map((q, idx) => (
                    <div key={idx} className="bg-orange-50/30 p-6 rounded-3xl border border-orange-100">
                      <p className="text-lg font-bold text-gray-800 mb-4">{idx + 1}. {q.question}</p>
                      <div className="space-y-4">
                        {q.statements.map((s, sIdx) => (
                          <div key={sIdx} className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-2xl gap-4 border border-orange-100 shadow-sm">
                            <span className="font-bold text-orange-900 text-center md:text-left">{s.text}</span>
                            <div className="flex gap-3">
                              <button 
                                onClick={() => handleAnswer(s.isCorrect === true)}
                                className="px-8 py-3 bg-green-500 text-white font-black rounded-xl hover:bg-green-600 shadow-md transform active:translate-y-1 transition-all"
                              >
                                ĐÚNG
                              </button>
                              <button 
                                onClick={() => handleAnswer(s.isCorrect === false)}
                                className="px-8 py-3 bg-red-500 text-white font-black rounded-xl hover:bg-red-600 shadow-md transform active:translate-y-1 transition-all"
                              >
                                SAI
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeSection === SectionType.DIEN_SO && (
                <div className="space-y-6">
                  {currentLesson.sections.dien_so.map((q, idx) => (
                    <div key={idx} className="bg-green-50/30 p-6 rounded-3xl border border-green-100 flex flex-col md:flex-row items-center gap-6">
                      <p className="text-lg font-bold text-gray-800 flex-1">{idx + 1}. {q.question}</p>
                      <div className="flex gap-3 shrink-0">
                        <input 
                          type="text" 
                          placeholder="Số?"
                          className="w-28 p-4 border-4 border-green-200 rounded-2xl text-center text-2xl font-black focus:border-green-500 outline-none shadow-inner"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              const val = (e.target as HTMLInputElement).value;
                              handleAnswer(val.toString().toLowerCase() === q.answer.toString().toLowerCase());
                              (e.target as HTMLInputElement).value = '';
                            }
                          }}
                        />
                        <button 
                          className="bg-green-600 text-white px-6 py-4 rounded-2xl font-black hover:bg-green-700 shadow-lg active:scale-90 transition-all"
                          onClick={(e) => {
                            const input = (e.currentTarget.previousSibling as HTMLInputElement);
                            handleAnswer(input.value.toString().toLowerCase() === q.answer.toString().toLowerCase());
                            input.value = '';
                          }}
                        >
                          OK!
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Action Bar */}
            <div className="mt-12 mb-8 flex flex-col items-center gap-4">
              <button 
                onClick={finishLesson}
                className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 px-16 py-5 rounded-[2rem] font-black text-2xl shadow-[0_10px_0_0_#d97706] hover:shadow-[0_8px_0_0_#d97706] active:shadow-none active:translate-y-2 transition-all flex items-center gap-4 group"
              >
                <span className="group-hover:rotate-12 transition-transform">⭐</span>
                Hoàn thành bài học!
                <span className="group-hover:-rotate-12 transition-transform">⭐</span>
              </button>
              <p className="text-teal-600 font-bold text-sm italic">"Hoàn thành để nhận thêm sao may mắn từ Rô-bốt nhé!"</p>
            </div>
          </div>
        </main>
      </div>

      {/* Teacher Overlay */}
      {mode === AppMode.TEACHER && (
        <div className="fixed inset-0 bg-teal-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl border-4 border-white/20">
            <div className="bg-teal-600 p-8 text-white flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-black mb-1">👩‍🏫 Quản lý Học tập</h2>
                <p className="opacity-80 font-bold">Dành cho Phụ huynh & Cô giáo</p>
              </div>
              <button onClick={() => setMode(AppMode.KID)} className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-6 rounded-3xl border-2 border-yellow-100 flex items-center gap-6">
                  <span className="text-5xl">⭐</span>
                  <div>
                    <p className="text-yellow-700 font-black text-lg">Bài học đã xong</p>
                    <p className="text-4xl font-black text-yellow-900">{completedLessons.length} / {lessonsData.length}</p>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-3xl border-2 border-green-100 flex items-center gap-6">
                  <span className="text-5xl">🎯</span>
                  <div>
                    <p className="text-green-700 font-black text-lg">Tổng điểm đạt được</p>
                    <p className="text-4xl font-black text-green-900">{score}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={handleShare}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700 transition-all"
                >
                  📤 Chia sẻ thành tích của bé
                </button>
              </div>

              <div className="bg-gray-50 p-8 rounded-[2rem] border-2 border-gray-100">
                <h3 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                  🔍 Sổ tay đáp án: <span className="text-teal-600">{currentLesson.title.split(': ')[0]}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-black text-purple-700 uppercase text-sm tracking-widest">Trắc nghiệm</h4>
                    {currentLesson.sections.trac_nghiem.map((q, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-purple-50 text-sm">
                        <span className="font-bold text-gray-400 mr-2">Q{i+1}:</span> {q.answer}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-black text-green-700 uppercase text-sm tracking-widest">Điền số</h4>
                    {currentLesson.sections.dien_so.map((q, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-green-50 text-sm">
                        <span className="font-bold text-gray-400 mr-2">Q{i+1}:</span> {q.answer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border-t flex justify-center">
              <button 
                onClick={() => setMode(AppMode.KID)} 
                className="px-12 py-3 bg-teal-600 text-white rounded-full font-black text-lg hover:bg-teal-700 shadow-xl"
              >
                QUAY LẠI HỌC THÔI!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
