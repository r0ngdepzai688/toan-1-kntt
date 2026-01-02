
import React, { useState, useEffect, useMemo } from 'react';
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
          <svg width="160" height="160" viewBox="0 0 100 100" className="drop-shadow-lg">
            <circle cx="50" cy="50" r="48" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="4" />
            {[...Array(12)].map((_, i) => {
              const ang = (i + 1) * 30 * (Math.PI / 180);
              const x = 50 + 36 * Math.sin(ang);
              const y = 50 - 36 * Math.cos(ang);
              return <text key={i} x={x} y={y} fontSize="8" textAnchor="middle" alignmentBaseline="middle" fontWeight="800" fill="#0369a1">{i+1}</text>;
            })}
            <line x1="50" y1="50" x2="50" y2="18" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="50" y1="50" x2={50 + 22 * Math.sin(hourAngle * Math.PI / 180)} y2={50 - 22 * Math.cos(hourAngle * Math.PI / 180)} stroke="#e11d48" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="50" r="4" fill="#1e293b" />
          </svg>
        </div>
      );
    case 'blocks':
      const { tens = 0, ones = 0 } = data.value || {};
      return (
        <div className="flex flex-wrap justify-center gap-4 my-6 p-6 bg-white rounded-3xl border-4 border-dashed border-teal-100 shadow-inner">
          <div className="flex gap-1.5">
            {Array.from({ length: tens }).map((_, i) => (
              <div key={`tens-${i}`} className="flex flex-col border border-teal-600 rounded-sm overflow-hidden bg-teal-500">
                {Array.from({ length: 10 }).map((_, j) => (
                  <div key={j} className="w-5 h-5 border-b border-teal-700 last:border-0 relative"><div className="absolute inset-0 bg-white/10"></div></div>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 max-w-[100px] items-end">
            {Array.from({ length: ones }).map((_, i) => (
              <div key={`ones-${i}`} className="w-5 h-5 bg-amber-400 border border-amber-600 rounded-sm shadow-sm relative"><div className="absolute inset-0 bg-white/20"></div></div>
            ))}
          </div>
        </div>
      );
    case 'counting':
      return (
        <div className="grid grid-cols-5 gap-2 my-6 p-4 bg-sky-50 rounded-2xl border-2 border-sky-100">
          {Array.from({ length: data.count || 0 }).map((_, i) => (
            <span key={i} className="text-3xl flex items-center justify-center">{data.items?.[i % (data.items?.length || 1)] || '🍎'}</span>
          ))}
        </div>
      );
    case 'shapes':
      const shapeType = data.value || 'triangle';
      const color = data.color || '#f43f5e';
      return (
        <div className="flex justify-center my-6">
          <svg width="100" height="100" viewBox="0 0 100 100">
            {shapeType === 'triangle' && <polygon points="50,10 90,85 10,85" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'square' && <rect x="15" y="15" width="70" height="70" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'circle' && <circle cx="50" cy="50" r="40" fill={color} stroke="black" strokeWidth="2" />}
            {shapeType === 'rectangle' && <rect x="10" y="25" width="80" height="50" fill={color} stroke="black" strokeWidth="2" />}
          </svg>
        </div>
      );
    case 'ruler':
      const lengthVal = data.value || 5;
      return (
        <div className="flex flex-col items-center my-6 gap-2 w-full">
          <div className="relative h-6 self-start ml-[30px] bg-emerald-500 rounded-sm" style={{ width: `${lengthVal * 25}px` }}>
             <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-emerald-700 border-y-[6px] border-y-transparent"></div>
          </div>
          <div className="w-full h-12 bg-amber-50 border border-amber-200 relative rounded shadow-sm">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="absolute bottom-0 flex flex-col items-center" style={{ left: `${i * 25 + 30}px` }}>
                <div className={`w-0.5 bg-amber-700 ${i % 5 === 0 ? 'h-4' : 'h-2'}`}></div>
                <span className="text-[10px] font-bold text-amber-900 mt-1">{i}</span>
              </div>
            ))}
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
  const [visitStats, setVisitStats] = useState<Record<string, number>>({});
  
  const [currentAnswers, setCurrentAnswers] = useState<LessonResult>({
    tracNghiemAnswers: {},
    dienSoAnswers: {},
    dungSaiAnswers: {}
  });
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Tải dữ liệu cũ
    const savedProgress = localStorage.getItem('lesson_progress_v4');
    const savedScores = localStorage.getItem('lesson_scores_v4');
    const savedStats = localStorage.getItem('visit_stats_v1');
    
    if (savedProgress) setCompletedLessons(JSON.parse(savedProgress));
    if (savedScores) setAllLessonScores(JSON.parse(savedScores));
    
    const stats = savedStats ? JSON.parse(savedStats) : {};
    const today = new Date().toISOString().split('T')[0];
    stats[today] = (stats[today] || 0) + 1;
    setVisitStats(stats);
    localStorage.setItem('visit_stats_v1', JSON.stringify(stats));
  }, []);

  const currentLesson = lessonsData[currentLessonIndex];

  const handleTracNghiem = (idx: number, opt: string) => { if (!isReviewMode) setCurrentAnswers(p => ({ ...p, tracNghiemAnswers: { ...p.tracNghiemAnswers, [idx]: opt } })); };
  const handleDungSai = (qIdx: number, sIdx: number, val: boolean) => { if (!isReviewMode) setCurrentAnswers(p => ({ ...p, dungSaiAnswers: { ...p.dungSaiAnswers, [`${qIdx}-${sIdx}`]: val } })); };
  const handleDienSo = (idx: number, val: string) => { if (!isReviewMode) setCurrentAnswers(p => ({ ...p, dienSoAnswers: { ...p.dienSoAnswers, [idx]: val } })); };

  const calculateScore = () => {
    let correctCount = 0;
    let totalCount = 0;
    let wrongList: string[] = [];

    currentLesson.sections.trac_nghiem.forEach((q, i) => {
      totalCount++;
      if (currentAnswers.tracNghiemAnswers[i] === q.answer) correctCount++;
      else wrongList.push(`Trắc nghiệm câu ${i + 1}`);
    });

    currentLesson.sections.dung_sai.forEach((q, qi) => {
      q.statements.forEach((s, si) => {
        totalCount++;
        if (currentAnswers.dungSaiAnswers[`${qi}-${si}`] === s.isCorrect) correctCount++;
        else wrongList.push(`Đúng/Sai - ${s.text}`);
      });
    });

    currentLesson.sections.dien_so.forEach((q, i) => {
      totalCount++;
      if (currentAnswers.dienSoAnswers[i]?.trim().toLowerCase() === q.answer.toString().toLowerCase()) correctCount++;
      else wrongList.push(`Điền số câu ${i + 1}`);
    });

    return { correctCount, totalCount, wrongList };
  };

  const finishLesson = () => {
    const { correctCount } = calculateScore();
    const newScores = { ...allLessonScores, [currentLesson.id]: correctCount };
    setAllLessonScores(newScores);
    if (!completedLessons.includes(currentLesson.id)) setCompletedLessons([...completedLessons, currentLesson.id]);
    
    localStorage.setItem('lesson_scores_v4', JSON.stringify(newScores));
    localStorage.setItem('lesson_progress_v4', JSON.stringify([...completedLessons, currentLesson.id]));
    
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

  const monthlyStats = useMemo(() => {
    const monthly: Record<string, number> = {};
    Object.entries(visitStats).forEach(([date, count]) => {
      const month = date.substring(0, 7); // YYYY-MM
      monthly[month] = (monthly[month] || 0) + count;
    });
    return monthly;
  }, [visitStats]);

  // Styles for Review
  const getOptionStyle = (qIdx: number, opt: string, correctAns: string) => {
    const selected = currentAnswers.tracNghiemAnswers[qIdx] === opt;
    if (isReviewMode) {
      if (opt === correctAns) return "bg-emerald-500 text-white border-emerald-600 shadow-lg scale-105 z-10";
      if (selected && opt !== correctAns) return "bg-rose-500 text-white border-rose-600 opacity-80";
      return "bg-slate-50 text-slate-300 border-slate-100";
    }
    return selected ? "bg-sky-500 text-white border-sky-600 shadow-md translate-y-[-2px]" : "bg-white hover:bg-sky-50 text-slate-700 border-slate-200";
  };

  const getDungSaiStyle = (qIdx: number, sIdx: number, btnVal: boolean, isCorrectVal: boolean) => {
    const selectedVal = currentAnswers.dungSaiAnswers[`${qIdx}-${sIdx}`];
    const isSelected = selectedVal === btnVal;
    if (isReviewMode) {
      if (btnVal === isCorrectVal) return "bg-emerald-500 text-white border-emerald-600";
      if (isSelected && btnVal !== isCorrectVal) return "bg-rose-500 text-white border-rose-600";
      return "bg-slate-50 text-slate-300 border-slate-100";
    }
    if (isSelected) return btnVal ? "bg-emerald-500 text-white" : "bg-rose-500 text-white";
    return "bg-white hover:bg-slate-50 text-slate-700 border-slate-200";
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 selection:bg-sky-200">
      {showConfetti && <Confetti />}
      
      <header className="bg-sky-600 text-white p-4 shadow-lg flex justify-between items-center shrink-0 z-10 border-b-4 border-sky-700">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold flex items-center gap-2 uppercase tracking-tighter">🎒 Toán 1 – Kết nối tri thức</h1>
          <span className="text-[10px] text-sky-100 font-bold opacity-80 mt-[-2px]">Code by Nguyen Hai Duong_0966635663</span>
        </div>
        <button onClick={() => setMode(mode === AppMode.KID ? AppMode.TEACHER : AppMode.KID)} className="bg-white text-sky-700 px-4 py-1.5 rounded-full font-black text-xs hover:bg-sky-50 transition-all shadow-md">
          {mode === AppMode.KID ? '👩‍🏫 GIÁO VIÊN' : '🧒 BÉ HỌC'}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-20 md:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-100 font-bold text-sky-800 hidden md:flex items-center gap-2 bg-sky-50/50 uppercase text-xs">🗺️ Bài học của bé</div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-3">
            {lessonsData.map((lesson, idx) => (
              <button key={lesson.id} onClick={() => resetLesson(idx)} className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all relative group ${currentLessonIndex === idx ? 'bg-sky-100 ring-2 ring-sky-400 shadow-md translate-x-1' : 'hover:bg-slate-50 text-slate-500'}`}>
                <span className="text-3xl filter drop-shadow-sm">{lesson.icon}</span>
                <div className="hidden md:block text-left overflow-hidden">
                  <p className="text-[10px] font-black text-sky-600 uppercase">Bài {lesson.id}</p>
                  <p className="text-xs font-bold truncate text-slate-700">{lesson.title.split(': ')[1]}</p>
                </div>
                {completedLessons.includes(lesson.id) && <span className="absolute top-1 right-1 md:relative md:ml-auto text-yellow-500 animate-pulse">⭐</span>}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-6 bg-slate-50">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-wrap gap-2 mb-8 justify-center sticky top-0 z-20 bg-slate-50/90 backdrop-blur py-2">
              {[
                { type: SectionType.LY_THUYET, label: 'LÝ THUYẾT', color: 'bg-indigo-500', icon: '📖' },
                { type: SectionType.TRAC_NGHIEM, label: 'TRẮC NGHIỆM', color: 'bg-violet-600', icon: '🎯' },
                { type: SectionType.DUNG_SAI, label: 'ĐÚNG / SAI', color: 'bg-orange-500', icon: '⚖️' },
                { type: SectionType.DIEN_SO, label: 'ĐIỀN SỐ', color: 'bg-emerald-600', icon: '✍️' },
              ].map((tab) => (
                <button key={tab.type} onClick={() => setActiveSection(tab.type)} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-black transition-all shadow-md ${activeSection === tab.type ? `${tab.color} scale-105 ring-4 ring-white shadow-xl` : 'bg-slate-400 opacity-80 hover:opacity-100'}`}>
                  <span className="text-xl">{tab.icon}</span><span className="text-xs">{tab.label}</span>
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
                      <div className="bg-violet-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-4 shadow-sm">{idx + 1}</div>
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
                            <span className="font-black text-slate-800 text-lg text-center md:text-left flex-1 leading-tight">{s.text}</span>
                            <div className="flex gap-2">
                              <button onClick={() => handleDungSai(idx, sIdx, true)} className={`px-6 py-2.5 font-black rounded-xl border-2 transition-all ${getDungSaiStyle(idx, sIdx, true, s.isCorrect)}`}>ĐÚNG</button>
                              <button onClick={() => handleDungSai(idx, sIdx, false)} className={`px-6 py-2.5 font-black rounded-xl border-2 transition-all ${getDungSaiStyle(idx, sIdx, false, s.isCorrect)}`}>SAI</button>
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
                      <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-4 shadow-sm">{idx + 1}</div>
                      <p className="text-xl font-black text-slate-800 mb-6 text-center leading-snug">{q.question}</p>
                      <VisualRenderer data={q.visual} />
                      <div className="mt-6 flex flex-col items-center gap-2">
                        <input type="text" disabled={isReviewMode} value={currentAnswers.dienSoAnswers[idx] || ""} onChange={(e) => handleDienSo(idx, e.target.value)} className={`p-4 border-4 rounded-2xl text-center font-black text-3xl outline-none w-32 transition-all ${isReviewMode ? (currentAnswers.dienSoAnswers[idx]?.trim().toLowerCase() === q.answer.toString().toLowerCase() ? "bg-emerald-50 border-emerald-400 text-emerald-700" : "bg-rose-50 border-rose-400 text-rose-700") : "border-slate-200 focus:border-sky-500"}`} />
                        {isReviewMode && currentAnswers.dienSoAnswers[idx]?.trim().toLowerCase() !== q.answer.toString().toLowerCase() && (
                          <div className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-lg font-bold text-sm">Đáp án đúng: <span className="text-lg">{q.answer}</span></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10 mb-20 flex justify-center">
              {!isReviewMode ? (
                <button onClick={finishLesson} className="bg-yellow-400 hover:bg-yellow-500 text-sky-900 px-16 py-5 rounded-full font-black text-2xl shadow-[0_6px_0_0_#ca8a04] active:shadow-none active:translate-y-1 transition-all">⭐ NỘP BÀI HỌC</button>
              ) : (
                <div className="bg-sky-100 text-sky-800 px-8 py-4 rounded-full font-black border-2 border-sky-300 flex items-center gap-3 animate-pulse">
                    <span className="text-2xl">🔍</span> ĐANG XEM LẠI BÀI LÀM
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-white border-t p-4 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">© 2025 – CODE BY NGUYEN HAI DUONG_0966635663 – TOÁN 1 KẾT NỐI TRI THỨC</footer>

      {/* Result Modal */}
      {showResultModal && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-white w-full max-w-lg rounded-[3rem] p-10 text-center shadow-2xl animate-in zoom-in duration-300">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-black text-slate-800 mb-2 uppercase tracking-tight">KẾT QUẢ CỦA BÉ</h2>
            <div className="text-5xl font-black text-sky-600 my-6 flex items-center justify-center gap-2">
              {calculateScore().correctCount} <span className="text-slate-300 text-2xl">/</span> {calculateScore().totalCount}
            </div>
            
            {calculateScore().wrongList.length > 0 && (
              <div className="mb-8 text-left max-h-40 overflow-y-auto custom-scrollbar bg-rose-50 p-4 rounded-2xl border border-rose-100">
                <p className="text-rose-700 font-black text-xs uppercase mb-2">Cần xem lại:</p>
                <ul className="text-slate-600 text-sm font-bold space-y-1 list-disc pl-5">
                  {calculateScore().wrongList.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={() => { setShowResultModal(false); setIsReviewMode(true); }} className="bg-sky-500 text-white py-4 rounded-2xl font-black shadow-md hover:bg-sky-600 transition-all">XEM LẠI BÀI LÀM</button>
              <button onClick={() => { setShowResultModal(false); resetLesson((currentLessonIndex + 1) % lessonsData.length); }} className="bg-emerald-500 text-white py-4 rounded-2xl font-black shadow-md hover:bg-emerald-600 transition-all">TIẾP TỤC HỌC</button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Mode Modal */}
      {mode === AppMode.TEACHER && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-10 overflow-hidden">
          <div className="bg-white w-full max-w-5xl h-full max-h-[90vh] rounded-[3rem] p-6 md:p-10 shadow-2xl relative flex flex-col">
            <button onClick={() => setMode(AppMode.KID)} className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold hover:bg-slate-200 transition-colors">✕</button>
            <div className="flex items-center gap-4 mb-8 shrink-0"><span className="text-4xl">👩‍🏫</span><h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Bảng Quản Lý Giáo Viên</h2></div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar space-y-8 pr-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-6 bg-sky-50 rounded-3xl border-2 border-sky-100 flex flex-col items-center">
                  <span className="text-xs font-black text-sky-600 uppercase mb-2">Đã hoàn thành</span>
                  <span className="text-4xl font-black text-sky-900">{completedLessons.length} <small className="text-lg opacity-50">/{lessonsData.length}</small></span>
                </div>
                <div className="p-6 bg-emerald-50 rounded-3xl border-2 border-emerald-100 flex flex-col items-center">
                  <span className="text-xs font-black text-emerald-600 uppercase mb-2">Tổng Sao đạt được</span>
                  <span className="text-4xl font-black text-emerald-900">{Object.values(allLessonScores).reduce((a, b) => a + b, 0)} ⭐</span>
                </div>
                <div className="p-6 bg-amber-50 rounded-3xl border-2 border-amber-100 flex flex-col items-center">
                  <span className="text-xs font-black text-amber-600 uppercase mb-2">Truy cập hôm nay</span>
                  <span className="text-4xl font-black text-amber-900">{visitStats[new Date().toISOString().split('T')[0]] || 0} 👤</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Thống kê Truy cập */}
                <div className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm">
                  <h3 className="text-lg font-black text-slate-800 uppercase mb-4 flex items-center gap-2">📊 Thống kê truy cập</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">Theo Tháng:</p>
                      {Object.entries(monthlyStats).sort((a,b) => b[0].localeCompare(a[0])).map(([month, count]) => (
                        <div key={month} className="flex justify-between items-center py-2 border-b last:border-0">
                          <span className="font-black text-slate-700">Tháng {month.split('-')[1]}/{month.split('-')[0]}</span>
                          <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full font-black">{count} lượt</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 max-h-40 overflow-y-auto custom-scrollbar">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-2">Chi tiết theo ngày (7 ngày gần nhất):</p>
                      {Object.entries(visitStats).sort((a,b) => b[0].localeCompare(a[0])).slice(0, 7).map(([date, count]) => (
                        <div key={date} className="flex justify-between items-center py-1.5 text-sm">
                          <span className="font-bold text-slate-600">{date.split('-').reverse().join('/')}</span>
                          <span className="font-black text-slate-900">{count} lượt</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Danh sách bài học */}
                <div className="bg-slate-50 p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm">
                  <h3 className="text-lg font-black text-slate-800 uppercase mb-4 flex items-center gap-2">📑 Kết quả từng bài</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="text-xs text-slate-400 uppercase font-black tracking-widest">
                        <tr className="border-b">
                          <th className="pb-3">Bài học</th>
                          <th className="pb-3 text-center">Điểm</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {lessonsData.map(l => (
                          <tr key={l.id} className="group">
                            <td className="py-3 font-bold text-slate-600 group-hover:text-sky-600 transition-colors">{l.id}. {l.title.split(': ')[1]}</td>
                            <td className="py-3 text-center">
                              {completedLessons.includes(l.id) 
                                ? <span className="font-black text-emerald-600">{allLessonScores[l.id] || 0} ⭐</span> 
                                : <span className="text-slate-300 font-bold italic text-xs">Chưa học</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t text-center text-xs font-bold text-slate-400 italic shrink-0 uppercase tracking-widest">
              Hệ thống quản lý thông minh - Thiết kế bởi Nguyen Hai Duong
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
