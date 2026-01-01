
export enum AppMode {
  KID = 'KID',
  TEACHER = 'TEACHER'
}

export enum SectionType {
  TRAC_NGHIEM = 'TRAC_NGHIEM',
  DUNG_SAI = 'DUNG_SAI',
  DIEN_SO = 'DIEN_SO',
  LY_THUYET = 'LY_THUYET'
}

export interface TracNghiemQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface Statement {
  text: string;
  isCorrect: boolean;
}

export interface DungSaiQuestion {
  question: string;
  statements: Statement[];
}

export interface DienSoQuestion {
  question: string;
  answer: string | number;
}

export interface LessonSections {
  trac_nghiem: TracNghiemQuestion[];
  dung_sai: DungSaiQuestion[];
  dien_so: DienSoQuestion[];
}

export interface Lesson {
  id: number;
  title: string;
  icon: string;
  raw_html: string;
  sections: LessonSections;
}
