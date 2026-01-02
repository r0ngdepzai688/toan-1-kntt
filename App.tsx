
import React, { useState, useEffect } from 'react';
import { AppMode, SectionType, Lesson, VisualData, LessonResult } from './types';
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
      return (
        <div className={`grid grid-cols-5 gap-3 my-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border-2 border-blue-100 shadow-sm`}>
          {Array.from({ length: data.count || 0 }).map((_, i) => (
            <span key={i} className="text-4xl drop-shadow-sm flex items-center justify-center">
              {data.items?.[i % (data.items?.length || 1)] || '🍎'}
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
            <line x1="20" y1="50" x2="380" y2="50" stroke="#64748b" strokeWidth="2" />
            {[...Array(11)].map((_, i) => (
              <g key={i}>
                <line x1={20 + i * 36} y1="45" x2={20 + i * 36} y2="55" stroke="#64748b" strokeWidth="2" />
                <text x={20 + i * 36} y="75" fontSize="10" textAnchor="middle" fill="#475569">{i*10}</text>
              </g>
            ))}
            {jumpTo > 0 && <path d={`M 20 50 Q ${20 + (jumpTo/20)*36} 10 ${20 + (jumpTo/10)*36} 50`} fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4" />}
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

const Confetti: React.FC = () => {
  const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];
  return (
    <>
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="confetti-piece" style={{ left: `${Math.random() * 100}vw`, backgroundColor: colors[Math.floor(Math.random() * colors.length)], animationDelay: `${Math.random() * 2}s`, animationDuration: `${2 + Math.random() * 2}s` }} />
      ))}
    </>
  );
};

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.KID);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.LY_THUYET);
  const [allLessonScores, setAllLessonScores] = useState<Record<number, number>>({});
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  
  // Trạng thái bài làm của bài học hiện tại
  const [currentAnswers, setCurrentAnswers] = useState<LessonResult>({
    tracNghiemAnswers: {},
    dienSoAnswers: {},
    dungSaiAnswers: {}
  });
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem('lesson_progress_v3');
    const savedScores = localStorage.getItem('lesson_scores_v3');
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    if (savedScores) setAllLessonScores(JSON.parse(savedScores));
  }, []);

  const currentLesson = lessonsData[currentLessonIndex];

  const handleTracNghiem = (idx: number, opt: string) => {
    if (isReviewMode) return;
    setCurrentAnswers(prev => ({
      ...prev,
      tracNghiemAnswers: { ...prev.tracNghiemAnswers, [idx]: opt }
    }));
  };

  const handleDungSai = (qIdx: number, sIdx: number, val: boolean) => {
    if (isReviewMode) return;
    setCurrentAnswers(prev => ({
      ...prev,
      dungSaiAnswers: { ...prev.dungSaiAnswers, [`${qIdx}-${sIdx}`]: val }
    }));
  };

  const handleDienSo = (idx: number, val: string) => {
    if (isReviewMode) return;
    setCurrentAnswers(prev => ({
      ...prev,
      dienSoAnswers: { ...prev.dienSoAnswers, [idx]: val }
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    let totalCount = 0;

    currentLesson.sections.trac_nghiem.forEach((q, i) => {
      totalCount++;
      if (currentAnswers.tracNghiemAnswers[i] === q.answer) correctCount++;
    });

    currentLesson.sections.dung_sai.forEach((q, qi) => {
      q.statements.forEach((s, si) => {
        totalCount++;
        if (currentAnswers.dungSaiAnswers[`${qi}-${si}`] === s.isCorrect) correctCount++;
      });
    });

    currentLesson.sections.dien_so.forEach((q, i) => {
      totalCount++;
      if (currentAnswers.dienSoAnswers[i]?.trim().toLowerCase() === q.answer.toString().toLowerCase()) correctCount++;
    });

    return { correctCount, totalCount };
  };

  const finishLesson = () => {
    const { correctCount } = calculateScore();
    const newScores = { ...allLessonScores, [currentLesson.id]: correctCount };
    const newProgress = Array.from(new Set([...completedLessons, currentLesson.id]));
    
    setAllLessonScores(newScores);
    setCompletedLessons(newProgress);
    
    localStorage.setItem('lesson_scores_v3', JSON.stringify(newScores));
    localStorage.setItem('lesson_progress_v3', JSON.stringify(newProgress));
    
    setShowResultModal(true);
    if (correctCount > 0) setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const resetLesson = (idx: number) => {
    setCurrentLessonIndex(idx);
    setActiveSection(SectionType.LY_THUYET);
    setCurrentAnswers({ tracNghiemAnswers: {}, dienSoAnswers: {}, dungSaiAnswers: {} });
    setIsReviewMode(false);
  };

  const getOptionStyle = (qIdx: number, opt: string, correctAns: string) => {
    const selected = currentAnswers.tracNghiemAnswers[qIdx] === opt;
    if (isReviewMode) {
      if (opt === correctAns) return "bg-emerald-500 text-white border-emerald-600 ring-4 ring-emerald-200";
      if (selected && opt !== correctAns) return "bg-rose-500 text-white border-rose-600 ring-4 ring-rose-200";
      return "bg-slate-100 text-slate-400 border-slate-200";
    }
    if (selected) return "bg-sky-500 text-white border-sky-600 shadow-md scale-[1.02]";
    return "bg-white hover:bg-sky-50 text-slate-700 border-slate-200";
  };

  const getDungSaiStyle = (qIdx: number, sIdx: number, btnVal: boolean, isCorrectVal: boolean) => {
    const selectedVal = currentAnswers.dungSaiAnswers[`${qIdx}-${sIdx}`];
    const isSelected = selectedVal === btnVal;
    
    if (isReviewMode) {
      if (btnVal === isCorrectVal) return "bg-emerald-500 text-white border-emerald-600";
      if (isSelected && btnVal !== isCorrectVal) return "bg-rose-500 text-white border-rose-600";
      return "bg-slate-100 text-slate-400 border-slate-200";
    }
    if (isSelected) return btnVal ? "bg-emerald-500 text-white" : "bg-rose-500 text-white";
    return "bg-white hover:bg-slate-100 text-slate-700 border-slate-200";
  };

  const getDienSoStyle = (qIdx: number, correctAns: string) => {
    if (!isReviewMode) return "border-slate-200 focus:border-sky-500";
    const userVal = currentAnswers.dienSoAnswers[qIdx]?.trim().toLowerCase() || "";
    if (userVal === correctAns.toLowerCase()) return "bg-emerald-50 border-emerald-400 text-emerald-700";
    return "bg-rose-50 border-rose-400 text-rose-700";
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 selection:bg-sky-200">
      {showConfetti && <Confetti />}
      
      <header className="bg-sky-600 text-white p-4 shadow-lg flex justify-between items-center shrink-0 z-10 border-b-4 border-sky-700">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl drop-shadow-sm">🎒</span>
            <span className="hidden md:inline drop-shadow-sm uppercase tracking-tight font-black">Toán 1 – Kết nối tri thức</span>
          </h1>
          <span className="text-[10px] text-sky-100 font-bold opacity-90 mt-[-2px] tracking-wide">Code by Nguyen Hai Duong_0966635663</span>
        </div>
        <button onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)} className="bg-white text-sky-700 px-4 py-1.5 rounded-full font-black text-xs hover:bg-sky-50 transition-all shadow-md">
          {mode === AppMode.KID ? '👩‍🏫 GIÁO VIÊN' : '🧒 BÉ HỌC'}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-20 md:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 shadow-sm">
          <div className="p-4 border-b border-slate-100 font-bold text-sky-800 hidden md:flex items-center gap-2 bg-sky-50/50 uppercase text-xs">🗺️ Lộ trình học tập</div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3">
            {lessonsData.map((lesson, idx) => (
              <button key={lesson.id} onClick={() => resetLesson(idx)} className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all relative group ${currentLessonIndex === idx ? 'bg-sky-100 ring-2 ring-sky-400 shadow-md translate-x-1' : 'hover:bg-slate-50 text-slate-500'}`}>
                <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform">{lesson.icon}</span>
                <div className="hidden md:block text-left overflow-hidden">
                  <p className="text-[10px] font-black text-sky-600 uppercase mb-0.5">Bài {lesson.id}</p>
                  <p className="text-xs font-bold truncate leading-tight text-slate-700">{lesson.title.split(': ')[1]}</p>
                </div>
                {completedLessons.includes(lesson.id) && <span className="absolute top-1 right-1 md:relative md:ml-auto text-yellow-500 animate-pulse">⭐</span>}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-6 bg-slate-50">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {[
                { type: SectionType.LY_THUYET, label: 'LÝ THUYẾT', color: 'bg-indigo-500', icon: '📖' },
                { type: SectionType.TRAC_NGHIEM, label: 'TRẮC NGHIỆM', color: 'bg-violet-600', icon: '🎯' },
                { type: SectionType.DUNG_SAI, label: 'ĐÚNG / SAI', color: 'bg-orange-500', icon: '⚖️' },
                { type: SectionType.DIEN_SO, label: 'ĐIỀN SỐ', color: 'bg-emerald-600', icon: '✍️' },
              ].map((tab) => (
                <button key={tab.type} onClick={() => setActiveSection(tab.type)} className={`flex items-center gap-2 px-6 py-3 rounded-xl text-white font-black transition-all shadow-md ${activeSection === tab.type ? `${tab.color} scale-105 ring-4 ring-white shadow-xl` : 'bg-slate-400 opacity-80'}`}>
                  <span className="text-xl">{tab.icon}</span><span className="text-xs tracking-wider">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl border-2 border-slate-100 min-h-[500px]">
              {activeSection === SectionType.LY_THUYET && (
                <div className="animate-in fade-in duration-500">
                  <div className="flex items-center gap-4 mb-8"><span className="text-5xl">{currentLesson.icon}</span><h3 className="text-2xl font-black text-slate-800 uppercase leading-tight">{currentLesson.title}</h3></div>
                  <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: currentLesson.raw_html }} />
                </div>
              )}

              {activeSection === SectionType.TRAC_NGHIEM && (
                <div className="space-y-12">
                  {currentLesson.sections.trac_nghiem.map((q, idx) => (
                    <div key={idx} className="bg-slate-50/50 p-8 rounded-[2.5rem] border-2 border-slate-100 flex flex-col items-center">
                      <div className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-4">{idx + 1}</div>
                      <p className="text-xl font-black text-slate-800 mb-6 text-center leading-snug">{q.question}</p>
                      <VisualRenderer data={q.visual} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
                        {q.options.map((opt, oIdx) => (
                          <button key={oIdx} onClick={() => handleTracNghiem(idx, opt)} className={`p-4 text-center rounded-2xl font-black border-2 transition-all active:scale-95 ${getOptionStyle(idx, opt, q.answer)}`}>
                            {opt}
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
                    <div key={idx} className="space-y-6">
                      <p className="text-lg font-black text-slate-800 border-b-2 border-orange-100 pb-2 uppercase tracking-tight">{q.question}</p>
                      {q.statements.map((s, sIdx) => (
                        <div key={sIdx} className="flex flex-col items-center p-6 bg-slate-50/50 rounded-3xl border-2 border-slate-100 gap-4">
                          <VisualRenderer data={s.visual} />
                          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                            <span className="font-black text-slate-800 text-lg text-center md:text-left flex-1">{s.text}</span>
                            <div className="flex gap-2">
                              <button onClick={() => handleDungSai(idx, sIdx, true)} className={`px-6 py-2 font-black rounded-xl border-2 transition-all ${getDungSaiStyle(idx, sIdx, true, s.isCorrect)}`}>ĐÚNG</button>
                              <button onClick={() => handleDungSai(idx, sIdx, false)} className={`px-6 py-2 font-black rounded-xl border-2 transition-all ${getDungSaiStyle(idx, sIdx, false, s.isCorrect)}`}>SAI</button>
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
                    <div key={idx} className="bg-slate-50/50 p-8 rounded-[2.5rem] border-2 border-slate-100 flex flex-col items-center">
                      <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-4">{idx + 1}</div>
                      <p className="text-xl font-black text-slate-800 mb-6 text-center leading-snug">{q.question}</p>
                      <VisualRenderer data={q.visual} />
                      <div className="mt-6 flex flex-col items-center gap-2">
                        <input type="text" disabled={isReviewMode} value={currentAnswers.dienSoAnswers[idx] || ""} onChange={(e) => handleDienSo(idx, e.target.value)} className={`p-4 border-4 rounded-2xl text-center font-black text-2xl outline-none w-32 ${getDienSoStyle(idx, q.answer.toString())}`} />
                        {isReviewMode && currentAnswers.dienSoAnswers[idx]?.trim().toLowerCase() !== q.answer.toString().toLowerCase() && (
                          <p className="text-emerald-600 font-bold text-sm">Đáp án đúng: {q.answer}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 mb-20 flex justify-center">
              {!isReviewMode && (
                <button onClick={finishLesson} className="bg-yellow-400 hover:bg-yellow-500 text-sky-900 px-16 py-5 rounded-full font-black text-2xl shadow-[0_6px_0_0_#ca8a04] active:shadow-none active:translate-y-1 transition-all">
                  ⭐ NỘP BÀI HỌC
                </button>
              )}
              {isReviewMode && (
                 <div className="bg-sky-100 text-sky-800 px-8 py-4 rounded-full font-black border-2 border-sky-300">
                    🔍 ĐANG XEM LẠI BÀI LÀM
                 </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t p-4 text-center text-[10px] text-slate-400 font-bold">© 2025 – CODE BY NGUYEN HAI DUONG_0966635663 – TOÁN 1 KẾT NỐI TRI THỨC</footer>

      {/* Result Modal */}
      {showResultModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-md rounded-[3rem] p-10 text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-tight">Kết quả của bé</h2>
            <div className="text-5xl font-black text-sky-600 my-6 flex items-center justify-center gap-2">
              {calculateScore().correctCount} <span className="text-slate-300 text-2xl">/</span> {calculateScore().totalCount}
            </div>
            <p className="text-slate-500 font-bold mb-8">
              {calculateScore().correctCount === calculateScore().totalCount ? "Tuyệt vời! Bé đạt điểm tuyệt đối!" : "Bé làm tốt lắm, hãy xem lại những câu chưa đúng nhé!"}
            </p>
            <div className="grid grid-cols-1 gap-4">
              <button onClick={() => { setShowResultModal(false); setIsReviewMode(true); }} className="bg-sky-500 text-white py-4 rounded-2xl font-black shadow-md hover:bg-sky-600">XEM LẠI BÀI LÀM</button>
              <button onClick={() => { setShowResultModal(false); resetLesson((currentLessonIndex + 1) % lessonsData.length); }} className="bg-emerald-500 text-white py-4 rounded-2xl font-black shadow-md hover:bg-emerald-600">TIẾP TỤC BÀI KHÁC</button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Mode Modal */}
      {mode === AppMode.TEACHER && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
            <button onClick={() => setMode(AppMode.KID)} className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold hover:bg-slate-200">✕</button>
            <div className="flex items-center gap-4 mb-10"><span className="text-4xl">👩‍🏫</span><h2 className="text-3xl font-black text-slate-800 uppercase">Tiến độ của Học sinh</h2></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 flex flex-col items-center">
                <span className="text-xs font-black text-sky-600 uppercase mb-2">Số bài hoàn thành</span>
                <span className="text-4xl font-black text-sky-900">{completedLessons.length} / {lessonsData.length}</span>
              </div>
              <div className="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 flex flex-col items-center">
                <span className="text-xs font-black text-emerald-600 uppercase mb-2">Tổng sao đạt được</span>
                <span className="text-4xl font-black text-emerald-900">{Object.values(allLessonScores).reduce((a, b) => a + b, 0)} ⭐</span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border-2 border-slate-100 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-200 text-slate-600 font-black uppercase tracking-widest text-[10px]">
                  <tr>
                    <th className="px-6 py-4">Bài học</th>
                    <th className="px-6 py-4">Trạng thái</th>
                    <th className="px-6 py-4">Điểm số</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {lessonsData.map(l => (
                    <tr key={l.id} className="hover:bg-white transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-700">{l.title}</td>
                      <td className="px-6 py-4">
                        {completedLessons.includes(l.id) 
                          ? <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase">Hoàn thành</span> 
                          : <span className="px-3 py-1 bg-slate-100 text-slate-400 rounded-full text-[10px] font-black uppercase">Chưa học</span>}
                      </td>
                      <td className="px-6 py-4 font-black text-sky-600 text-lg">{allLessonScores[l.id] || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center text-xs font-bold text-slate-400 italic">Hệ thống quản lý giáo dục cá nhân - Nguyen Hai Duong</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
