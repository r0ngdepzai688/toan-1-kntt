
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
        <div className="flex justify-center my-6">
          <svg width="180" height="180" viewBox="0 0 100 100" className="drop-shadow-lg">
            <circle cx="50" cy="50" r="48" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />
            {[...Array(12)].map((_, i) => {
              const ang = (i + 1) * 30 * (Math.PI / 180);
              const x = 50 + 36 * Math.sin(ang);
              const y = 50 - 36 * Math.cos(ang);
              return <text key={i} x={x} y={y} fontSize="8" textAnchor="middle" alignmentBaseline="middle" fontWeight="800" fill="#0369a1">{i+1}</text>;
            })}
            <line x1="50" y1="50" x2="50" y2="18" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            <line 
              x1="50" y1="50" 
              x2={50 + 22 * Math.sin(hourAngle * Math.PI / 180)} 
              y2={50 - 22 * Math.cos(hourAngle * Math.PI / 180)} 
              stroke="#e11d48" strokeWidth="4" strokeLinecap="round" 
            />
            <circle cx="50" cy="50" r="4" fill="#1e293b" />
          </svg>
        </div>
      );

    case 'blocks':
      const { tens = 0, ones = 0 } = data.value || {};
      return (
        <div className="flex flex-wrap justify-center gap-6 my-6 p-6 bg-white rounded-3xl border-4 border-dashed border-teal-200 shadow-inner">
          <div className="flex gap-2">
            {Array.from({ length: tens }).map((_, i) => (
              <div key={`tens-${i}`} className="flex flex-col border-2 border-teal-600 rounded-md overflow-hidden bg-teal-500 shadow-md">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="w-6 h-6 border-b border-teal-700 last:border-0 relative">
                    <div className="absolute inset-0 bg-white/10"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 max-w-[120px] content-end">
            {Array.from({ length: ones }).map((_, i) => (
              <div key={`ones-${i}`} className="w-6 h-6 bg-amber-400 border-2 border-amber-600 rounded-md shadow-md relative">
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
            ))}
          </div>
        </div>
      );

    case 'counting':
      const items = data.items || ['🍎'];
      return (
        <div className={`grid ${data.count && data.count > 10 ? 'grid-cols-5' : 'grid-cols-5'} gap-3 my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-100 shadow-sm`}>
          {Array.from({ length: data.count || 0 }).map((_, i) => (
            <span key={i} className="text-4xl hover:scale-125 transition-transform cursor-pointer drop-shadow-sm flex items-center justify-center">
              {items[i % items.length]}
            </span>
          ))}
        </div>
      );

    case 'shapes':
      const shapeType = data.value || 'triangle';
      const color = data.color || '#f43f5e';
      return (
        <div className="flex justify-center my-6">
          <svg width="120" height="120" viewBox="0 0 100 100">
            {shapeType === 'triangle' && <polygon points="50,10 90,85 10,85" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'square' && <rect x="15" y="15" width="70" height="70" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'circle' && <circle cx="50" cy="50" r="40" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'rectangle' && <rect x="10" y="25" width="80" height="50" fill={color} stroke="black" strokeWidth="2" />}
          </svg>
        </div>
      );

    case 'number_line':
      const jumpTo = data.value || 0;
      return (
        <div className="w-full max-w-md my-8 px-4 overflow-x-auto">
          <svg width="400" height="80" viewBox="0 0 400 80">
            <line x1="20" y1="50" x2="380" y2="50" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />
            {[...Array(11)].map((_, i) => (
              <g key={i}>
                <line x1={20 + i * 36} y1="45" x2={20 + i * 36} y2="55" stroke="#64748b" strokeWidth="2" />
                <text x={20 + i * 36} y="75" fontSize="10" textAnchor="middle" fill="#475569">{i*10}</text>
              </g>
            ))}
            {jumpTo > 0 && (
              <path 
                d={`M 20 50 Q ${20 + (jumpTo/20)*36} 10 ${20 + (jumpTo/10)*36} 50`} 
                fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4"
              />
            )}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
              </marker>
            </defs>
          </svg>
        </div>
      );

    case 'ruler':
      const lengthVal = data.value || 5;
      return (
        <div className="flex flex-col items-center my-8 gap-4 w-full">
          <div className="relative h-8 self-start ml-[40px] shadow-md rounded-sm bg-gradient-to-r from-emerald-400 to-emerald-500" style={{ width: `${lengthVal * 30}px` }}>
             <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[14px] border-l-emerald-700 border-y-[8px] border-y-transparent"></div>
          </div>
          <div className="w-full h-16 bg-amber-50 border-2 border-amber-200 relative rounded-lg shadow-sm">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="absolute bottom-0 flex flex-col items-center" style={{ left: `${i * 30 + 40}px` }}>
                <div className={`w-0.5 bg-amber-700 ${i % 5 === 0 ? 'h-6' : 'h-3'}`}></div>
                <span className="text-xs font-bold text-amber-900 mt-1">{i}</span>
              </div>
            ))}
            <span className="absolute right-2 bottom-1 text-[10px] italic text-amber-800">cm</span>
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
    const saved = localStorage.getItem('grade1_math_progress_v2');
    if (saved) setCompletedLessons(JSON.parse(saved));
    const s = localStorage.getItem('grade1_math_score_v2');
    if (s) setScore(parseInt(s));
  }, []);

  useEffect(() => {
    localStorage.setItem('grade1_math_progress_v2', JSON.stringify(completedLessons));
    localStorage.setItem('grade1_math_score_v2', score.toString());
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
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 selection:bg-sky-200">
      {showConfetti && <Confetti />}
      
      <header className="bg-sky-600 text-white p-4 shadow-lg flex justify-between items-center shrink-0 z-10 border-b-4 border-sky-700">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">🎒</span>
            <span className="hidden md:inline drop-shadow-sm uppercase tracking-tight">Toán 1 – Kết nối tri thức (Tập 2)</span>
            <span className="md:hidden drop-shadow-sm uppercase">Toán 1 - T2</span>
          </h1>
          <span className="text-[10px] text-sky-100 font-bold opacity-90 mt-[-2px] tracking-wide">
            Code by Nguyen Hai Duong_0966635663
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex bg-sky-500/50 px-3 py-1 rounded-full items-center gap-2 border border-sky-400">
            <span className="text-yellow-300">⭐</span>
            <span className="font-bold text-sm">{score}</span>
          </div>
          <button 
            onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)}
            className="bg-white text-sky-700 px-4 py-1.5 rounded-full font-black text-xs hover:bg-sky-50 transition-all shadow-md active:translate-y-0.5"
          >
            {mode === AppMode.KID ? '👩‍🏫 GIÁO VIÊN' : '🧒 BÉ HỌC'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-20 md:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 shadow-sm">
          <div className="p-4 border-b border-slate-100 font-bold text-sky-800 hidden md:flex items-center gap-2 bg-sky-50/50">
            <span className="text-xl">🗺️</span> <span className="uppercase text-sm tracking-wider">Lộ trình học tập</span>
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3">
            {lessonsData.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => {
                  setCurrentLessonIndex(idx);
                  setActiveSection(SectionType.LY_THUYET);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all relative group ${
                  currentLessonIndex === idx 
                    ? 'bg-sky-100 ring-2 ring-sky-400 shadow-md translate-x-1' 
                    : 'hover:bg-slate-50 text-slate-500'
                }`}
              >
                <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{lesson.icon}</span>
                <div className="hidden md:block text-left overflow-hidden">
                  <p className="text-[10px] font-black text-sky-600 uppercase mb-0.5">Bài {lesson.id}</p>
                  <p className="text-xs font-bold truncate leading-tight text-slate-700">{lesson.title.split(': ')[1]}</p>
                </div>
                {completedLessons.includes(lesson.id) && (
                  <span className="absolute top-1 right-1 md:relative md:ml-auto text-yellow-500 animate-pulse">⭐</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-8 bg-sky-50/30">
          <div className="max-w-4xl mx-auto w-full">
            {/* Feedback Alert */}
            <div className={`p-5 rounded-3xl border-4 mb-8 transition-all shadow-lg transform ${
              feedback.type === 'success' ? 'bg-emerald-50 border-emerald-300 text-emerald-800 scale-105' :
              feedback.type === 'error' ? 'bg-rose-50 border-rose-300 text-rose-800 animate-shake' :
              'bg-white border-sky-100 text-sky-800'
            }`}>
              <div className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-sm ${
                   feedback.type === 'success' ? 'bg-emerald-200' :
                   feedback.type === 'error' ? 'bg-rose-200' : 'bg-sky-100'
                }`}>
                  {feedback.type === 'success' ? '✅' : feedback.type === 'error' ? '❌' : '🤖'}
                </div>
                <p className="font-black text-xl tracking-tight">
                  {feedback.msg}
                </p>
              </div>
            </div>

            {/* Mode Selector */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {[
                { type: SectionType.LY_THUYET, label: 'LÝ THUYẾT', color: 'bg-indigo-500', icon: '📖' },
                { type: SectionType.TRAC_NGHIEM, label: 'TRẮC NGHIỆM', color: 'bg-violet-600', icon: '🎯' },
                { type: SectionType.DUNG_SAI, label: 'ĐÚNG / SAI', color: 'bg-orange-500', icon: '⚖️' },
                { type: SectionType.DIEN_SO, label: 'ĐIỀN SỐ', color: 'bg-emerald-600', icon: '✍️' },
              ].map((tab) => (
                <button
                  key={tab.type}
                  onClick={() => setActiveSection(tab.type)}
                  className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-white font-black transition-all shadow-md active:scale-95 ${
                    activeSection === tab.type 
                    ? `${tab.color} scale-105 ring-4 ring-white shadow-xl` 
                    : 'bg-slate-400 hover:bg-slate-500 opacity-80'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="text-sm tracking-wider">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-[3rem] p-6 md:p-12 shadow-xl border-2 border-slate-100 min-h-[500px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -z-0 opacity-50"></div>
              
              <div className="relative z-10">
                {activeSection === SectionType.LY_THUYET && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-4 mb-8">
                       <span className="text-5xl">{currentLesson.icon}</span>
                       <div>
                         <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight">{currentLesson.title}</h3>
                         <div className="h-1.5 w-24 bg-sky-500 rounded-full mt-2"></div>
                       </div>
                    </div>
                    <div 
                      className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ __html: currentLesson.raw_html }}
                    />
                  </div>
                )}

                {activeSection === SectionType.TRAC_NGHIEM && (
                  <div className="space-y-16">
                    {currentLesson.sections.trac_nghiem.map((q, idx) => (
                      <div key={idx} className="bg-slate-50/50 p-8 rounded-[3rem] border-2 border-slate-100 flex flex-col items-center group hover:border-violet-200 transition-colors">
                        <div className="bg-violet-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black mb-6 shadow-md">
                          {idx + 1}
                        </div>
                        <p className="text-2xl font-black text-slate-800 mb-8 text-center max-w-2xl leading-snug">{q.question}</p>
                        <VisualRenderer data={q.visual} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-10">
                          {q.options.map((opt, oIdx) => (
                            <button
                              key={oIdx}
                              onClick={() => handleAnswer(opt === q.answer)}
                              className="p-6 text-center rounded-[2rem] bg-white hover:bg-violet-600 hover:text-white text-slate-700 font-black text-lg border-2 border-slate-200 hover:border-violet-600 transition-all shadow-sm active:scale-95 group-hover:shadow-md"
                            >
                              <span className="mr-2 text-violet-400 group-hover:text-white/50">{['A','B','C','D'][oIdx]}.</span> {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === SectionType.DUNG_SAI && (
                  <div className="space-y-10">
                    {currentLesson.sections.dung_sai.map((q, idx) => (
                      <div key={idx} className="space-y-8">
                        <p className="text-xl font-black text-slate-800 border-b-4 border-orange-100 pb-3 uppercase tracking-tight">{q.question}</p>
                        {q.statements.map((s, sIdx) => (
                          <div key={sIdx} className="flex flex-col items-center p-8 bg-slate-50/50 rounded-[2.5rem] border-2 border-slate-100 gap-6 transition-transform hover:scale-[1.01]">
                            <VisualRenderer data={s.visual} />
                            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">
                              <span className="font-black text-slate-800 text-xl text-center md:text-left flex-1 leading-tight">{s.text}</span>
                              <div className="flex gap-4 w-full md:w-auto">
                                <button 
                                  onClick={() => handleAnswer(s.isCorrect)} 
                                  className="flex-1 md:flex-none px-10 py-4 bg-emerald-500 text-white font-black rounded-2xl hover:bg-emerald-600 shadow-[0_6px_0_0_#059669] active:shadow-none active:translate-y-1 transition-all text-lg"
                                >
                                  ĐÚNG
                                </button>
                                <button 
                                  onClick={() => handleAnswer(!s.isCorrect)} 
                                  className="flex-1 md:flex-none px-10 py-4 bg-rose-500 text-white font-black rounded-2xl hover:bg-rose-600 shadow-[0_6px_0_0_#e11d48] active:shadow-none active:translate-y-1 transition-all text-lg"
                                >
                                  SAI
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {activeSection === SectionType.DIEN_SO && (
                  <div className="space-y-16">
                    {currentLesson.sections.dien_so.map((q, idx) => (
                      <div key={idx} className="bg-slate-50/50 p-8 rounded-[3rem] border-2 border-slate-100 flex flex-col items-center hover:border-emerald-200 transition-colors">
                        <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black mb-6 shadow-md">
                          {idx + 1}
                        </div>
                        <p className="text-2xl font-black text-slate-800 mb-6 text-center leading-snug max-w-2xl">{q.question}</p>
                        <VisualRenderer data={q.visual} />
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-sm">
                          <input 
                            type="text" 
                            placeholder="Điền số..."
                            className="flex-1 p-5 border-4 border-slate-200 rounded-[1.5rem] text-center font-black text-3xl text-emerald-700 focus:border-emerald-500 outline-none shadow-inner bg-white"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleAnswer((e.target as HTMLInputElement).value.toString().trim().toLowerCase() === q.answer.toString().trim().toLowerCase());
                                (e.target as HTMLInputElement).value = '';
                              }
                            }}
                          />
                          <button 
                            className="bg-emerald-600 text-white px-8 py-5 rounded-[1.5rem] font-black text-xl shadow-[0_6px_0_0_#059669] active:shadow-none active:translate-y-1 transition-all"
                            onClick={(e) => {
                              const input = e.currentTarget.previousSibling as HTMLInputElement;
                              handleAnswer(input.value.toString().trim().toLowerCase() === q.answer.toString().trim().toLowerCase());
                              input.value = '';
                            }}
                          > KIỂM TRA </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 mb-24 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg border border-sky-100">
                <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">Tiến độ bài học</span>
                <div className="w-48 h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${(completedLessons.length / lessonsData.length) * 100}%` }}
                  ></div>
                </div>
                <span className="font-black text-sky-600">{Math.round((completedLessons.length / lessonsData.length) * 100)}%</span>
              </div>
              
              <button 
                onClick={finishLesson}
                className="group relative bg-yellow-400 hover:bg-yellow-500 text-sky-900 px-16 py-6 rounded-[2.5rem] font-black text-2xl shadow-[0_8px_0_0_#ca8a04] active:shadow-none active:translate-y-2 transition-all overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                   ⭐ HOÀN THÀNH BÀI {currentLesson.id}
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-slate-200 p-4 text-center shrink-0">
         <p className="text-xs text-slate-400 font-bold tracking-tight">
           © 2025 – CODE BY NGUYEN HAI DUONG_0966635663 – TOÁN 1 KẾT NỐI TRI THỨC (TẬP 2)
         </p>
      </footer>

      {/* Teacher Mode Overlay */}
      {mode === AppMode.TEACHER && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-3xl rounded-[3rem] p-10 shadow-2xl overflow-y-auto max-h-[85vh] custom-scrollbar border-4 border-sky-200">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <span className="text-4xl">👩‍🏫</span>
                <h2 className="text-3xl font-black text-slate-800 tracking-tight uppercase">Bảng điều khiển Giáo viên</h2>
              </div>
              <button 
                onClick={() => setMode(AppMode.KID)} 
                className="bg-slate-100 hover:bg-slate-200 text-slate-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-sm"
              >
                <span className="text-2xl">✕</span>
              </button>
            </div>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-sky-50 rounded-[2.5rem] border-2 border-sky-100 shadow-sm">
                  <p className="text-xs text-sky-600 font-black uppercase tracking-widest mb-2">Bài học đã đạt</p>
                  <p className="text-5xl font-black text-sky-900">{completedLessons.length} <span className="text-2xl text-sky-400">/ {lessonsData.length}</span></p>
                </div>
                <div className="p-8 bg-amber-50 rounded-[2.5rem] border-2 border-amber-100 shadow-sm">
                  <p className="text-xs text-amber-600 font-black uppercase tracking-widest mb-2">Tổng số sao (Điểm)</p>
                  <p className="text-5xl font-black text-amber-900">{score} <span className="text-2xl text-amber-400">⭐</span></p>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🔑</span>
                  <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Đáp án bài học hiện tại</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="font-black text-indigo-600 text-xs uppercase tracking-widest">Trắc nghiệm</p>
                    <div className="flex flex-wrap gap-2">
                      {currentLesson.sections.trac_nghiem.map((q, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-lg border font-bold text-slate-600 shadow-sm">{i+1}: {q.answer}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="font-black text-emerald-600 text-xs uppercase tracking-widest">Điền số</p>
                    <div className="flex flex-wrap gap-2">
                      {currentLesson.sections.dien_so.map((q, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-lg border font-bold text-slate-600 shadow-sm">{i+1}: {q.answer}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t-2 border-slate-100 italic text-slate-400 text-sm">
                Ứng dụng giáo dục được phát triển bởi <span className="font-bold text-sky-500">Nguyen Hai Duong</span><br/>
                Số điện thoại hỗ trợ: <span className="font-bold">0966635663</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
