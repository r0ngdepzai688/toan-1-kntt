
import React, { useState, useEffect } from 'react';
import { AppMode, SectionType, Lesson, VisualData } from './types';
import { lessonsData } from './data';

const VisualRenderer: React.FC<{ data?: VisualData }> = ({ data }) => {
  if (!data) return null;

  switch (data.type) {
    case 'clock':
      const hour = data.value || 12;
      const hourAngle = (hour % 12) * 30;
      return (
        <div className="flex justify-center my-4">
          <svg width="160" height="160" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="white" stroke="#14b8a6" strokeWidth="3" />
            {[...Array(12)].map((_, i) => {
              const ang = (i + 1) * 30 * (Math.PI / 180);
              const x = 50 + 35 * Math.sin(ang);
              const y = 50 - 35 * Math.cos(ang);
              return <text key={i} x={x} y={y} fontSize="6" textAnchor="middle" alignmentBaseline="middle" fontWeight="bold" fill="#0f766e">{i+1}</text>;
            })}
            {/* Kim phút (số 12) */}
            <line x1="50" y1="50" x2="50" y2="20" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" />
            {/* Kim giờ */}
            <line 
              x1="50" y1="50" 
              x2={50 + 20 * Math.sin(hourAngle * Math.PI / 180)} 
              y2={50 - 20 * Math.cos(hourAngle * Math.PI / 180)} 
              stroke="#be123c" strokeWidth="3" strokeLinecap="round" 
            />
            <circle cx="50" cy="50" r="3" fill="#0f766e" />
          </svg>
        </div>
      );

    case 'blocks':
      const { tens = 0, ones = 0 } = data.value || {};
      return (
        <div className="flex flex-wrap justify-center gap-4 my-4 p-4 bg-teal-50 rounded-2xl border-2 border-dashed border-teal-200">
          {Array.from({ length: tens }).map((_, i) => (
            <div key={`tens-${i}`} className="flex flex-col gap-0.5">
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} className="w-5 h-5 bg-orange-400 border border-orange-600 rounded-sm shadow-sm"></div>
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-1 max-w-[60px] items-end">
            {Array.from({ length: ones }).map((_, i) => (
              <div key={`ones-${i}`} className="w-5 h-5 bg-yellow-400 border border-yellow-600 rounded-sm shadow-sm"></div>
            ))}
          </div>
        </div>
      );

    case 'counting':
      return (
        <div className="flex flex-wrap justify-center gap-2 my-4 p-4 bg-blue-50 rounded-2xl border-2 border-dashed border-blue-200">
          {Array.from({ length: data.count || 0 }).map((_, i) => (
            <span key={i} className="text-3xl animate-pulse" style={{ animationDelay: `${i*0.1}s` }}>
              {data.items?.[0] || '🍎'}
            </span>
          ))}
        </div>
      );

    case 'ruler':
      const length = data.value || 5;
      return (
        <div className="flex flex-col items-center my-6 gap-2">
          {/* Vật đo (Bút chì) */}
          <div className="relative h-6 bg-yellow-500 rounded-r-full border-y border-yellow-700 self-start ml-[20px]" style={{ width: `${length * 20}px` }}>
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-red-600 rounded-l-sm"></div>
            <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-yellow-900 border-y-[6px] border-y-transparent"></div>
          </div>
          {/* Thước kẻ */}
          <div className="w-[300px] h-12 bg-white border-2 border-gray-400 relative rounded-md shadow-sm overflow-hidden">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="absolute bottom-0 flex flex-col items-center" style={{ left: `${i * 20}px` }}>
                <div className={`w-0.5 bg-gray-600 ${i % 5 === 0 ? 'h-5' : 'h-3'}`}></div>
                <span className="text-[10px] font-bold text-gray-500">{i}</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

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
        <div className="flex flex-col">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">🎒</span>
            <span className="hidden md:inline">Toán 1 – Kết nối tri thức</span>
            <span className="md:hidden">Toán 1</span>
          </h1>
          <span className="text-[10px] text-teal-100 font-bold opacity-80 mt-[-2px]">
            Code by Nguyen Hai Duong_0966635663
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1 rounded-full font-bold text-sm hover:bg-white/30 transition-all"
          >
            {mode === AppMode.KID ? '👩‍🏫 Giáo viên' : '🧒 Bé học'}
          </button>
        </div>
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
            {/* Feedback Alert */}
            <div className={`p-4 rounded-2xl border-2 mb-6 transition-all ${
              feedback.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' :
              feedback.type === 'error' ? 'bg-orange-50 border-orange-200 text-orange-700 animate-shake' :
              'bg-blue-50 border-blue-200 text-blue-700'
            }`}>
              <p className="font-bold flex items-center justify-center gap-2 text-center">
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
                <div className="space-y-12">
                  {currentLesson.sections.trac_nghiem.map((q, idx) => (
                    <div key={idx} className="bg-purple-50/30 p-8 rounded-[2.5rem] border-2 border-purple-100 flex flex-col items-center">
                      <p className="text-xl font-bold text-gray-800 mb-6 text-center">{idx + 1}. {q.question}</p>
                      <VisualRenderer data={q.visual} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
                        {q.options.map((opt, oIdx) => (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(opt === q.answer)}
                            className="p-5 text-center rounded-2xl bg-white hover:bg-purple-500 hover:text-white text-purple-800 font-black border-2 border-purple-200 transition-all shadow-sm active:scale-95"
                          >
                            {opt}
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
                    <div key={idx} className="space-y-6">
                      <p className="text-lg font-bold text-gray-800 border-b-2 border-orange-100 pb-2">{q.question}</p>
                      {q.statements.map((s, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center p-6 bg-orange-50/50 rounded-3xl border-2 border-orange-100 gap-4">
                          <VisualRenderer data={s.visual} />
                          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                            <span className="font-bold text-orange-900 text-lg text-center md:text-left flex-1">{s.text}</span>
                            <div className="flex gap-4">
                              <button onClick={() => handleAnswer(s.isCorrect)} className="px-8 py-3 bg-green-500 text-white font-black rounded-2xl hover:bg-green-600 shadow-[0_4px_0_0_#15803d] active:shadow-none active:translate-y-1 transition-all">ĐÚNG</button>
                              <button onClick={() => handleAnswer(!s.isCorrect)} className="px-8 py-3 bg-red-500 text-white font-black rounded-2xl hover:bg-red-600 shadow-[0_4px_0_0_#b91c1c] active:shadow-none active:translate-y-1 transition-all">SAI</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {activeSection === SectionType.DIEN_SO && (
                <div className="space-y-12">
                  {currentLesson.sections.dien_so.map((q, idx) => (
                    <div key={idx} className="bg-green-50/30 p-8 rounded-[2.5rem] border-2 border-green-100 flex flex-col items-center">
                      <p className="text-xl font-bold text-gray-800 mb-4 text-center">{idx + 1}. {q.question}</p>
                      <VisualRenderer data={q.visual} />
                      <div className="flex gap-4 mt-6 w-full max-w-sm">
                        <input 
                          type="text" 
                          placeholder="Số mấy nhỉ?"
                          className="flex-1 p-4 border-4 border-green-200 rounded-2xl text-center font-black text-2xl text-green-700 focus:border-green-500 outline-none shadow-inner"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleAnswer((e.target as HTMLInputElement).value.toString().toLowerCase() === q.answer.toString().toLowerCase());
                              (e.target as HTMLInputElement).value = '';
                            }
                          }}
                        />
                        <button 
                          className="bg-green-600 text-white px-6 py-4 rounded-2xl font-black text-xl shadow-[0_4px_0_0_#15803d] active:shadow-none active:translate-y-1 transition-all"
                          onClick={(e) => {
                            const input = e.currentTarget.previousSibling as HTMLInputElement;
                            handleAnswer(input.value.toString().toLowerCase() === q.answer.toString().toLowerCase());
                            input.value = '';
                          }}
                        >Gửi</button>
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

      <footer className="bg-white border-t border-teal-50 p-2 text-center">
         <p className="text-[10px] text-teal-400 font-bold">
           © 2025 Nguyen Hai Duong_0966635663 - Toán 1 Kết nối tri thức
         </p>
      </footer>

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
                <p className="text-xs text-gray-400 text-center mb-4 italic">Bản quyền phần mềm thuộc về Nguyen Hai Duong - 0966635663</p>
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
