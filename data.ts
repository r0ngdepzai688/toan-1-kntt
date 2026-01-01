
import { Lesson } from './types';

const generateTracNghiem = (count: number, generator: (i: number) => { q: string, opts: string[], a: string }) => 
  Array.from({ length: count }, (_, i) => {
    const data = generator(i);
    return { question: data.q, options: data.opts, answer: data.a };
  });

const generateDienSo = (count: number, generator: (i: number) => { q: string, a: string | number }) => 
  Array.from({ length: count }, (_, i) => {
    const data = generator(i);
    return { question: data.q, answer: data.a };
  });

const generateDungSai = (count: number, generator: (i: number) => { text: string, isCorrect: boolean }) => [{
  question: "Em hãy chọn Đúng hoặc Sai cho các câu dưới đây:",
  statements: Array.from({ length: count }, (_, i) => generator(i))
}];

export const lessonsData: Lesson[] = [
  {
    id: 21,
    title: "Bài 21: Số có hai chữ số",
    icon: "🔢",
    raw_html: `
      <div class='space-y-4'>
        <p><b>1. Chục và đơn vị:</b> 10 đơn vị được gọi là <b>1 chục</b>.</p>
        <p><b>2. Các số tròn chục:</b> 10 (mười), 20 (hai mươi), 30 (ba mươi), 40 (bốn mươi), 50 (năm mươi), 60 (sáu mươi), 70 (bảy mươi), 80 (tám mươi), 90 (chín mươi).</p>
        <p><b>3. Số có hai chữ số:</b> Gồm chữ số hàng chục viết trước, chữ số hàng đơn vị viết sau.</p>
      </div>
    `,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: i === 0 ? "Số 25 gồm mấy chục và mấy đơn vị?" : `Số gồm ${i+1} chục và 0 đơn vị là?`,
        opts: i === 0 ? ["2 chục và 5 đơn vị", "5 chục và 2 đơn vị", "20 chục và 5", "2 và 5"] : [`${(i+1)*10}`, `${i+1}`, `1${i+1}`, "0"],
        a: i === 0 ? "2 chục và 5 đơn vị" : `${(i+1)*10}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: i % 2 === 0 ? `Số ${10 + i * 5} là số tròn chục.` : `Số ${11 + i} có 3 chữ số.`,
        isCorrect: i % 2 === 0
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số gồm ${i+2} chục và ${i} đơn vị viết là?`,
        a: (i+2)*10 + i
      }))
    }
  },
  {
    id: 22,
    title: "Bài 22: So sánh số có hai chữ số",
    icon: "⚖️",
    raw_html: `
      <div class='space-y-4'>
        <p><b>Quy tắc so sánh:</b></p>
        <p>1. So sánh chữ số <b>hàng chục</b>: Số nào có hàng chục lớn hơn thì số đó lớn hơn.</p>
        <p>2. Nếu hàng chục bằng nhau: So sánh chữ số <b>hàng đơn vị</b>. Số nào có hàng đơn vị lớn hơn thì số đó lớn hơn.</p>
      </div>
    `,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số nào lớn nhất trong ba số: ${20+i}, ${35+i}, ${15+i}?`,
        opts: [`${20+i}`, `${35+i}`, `${15+i}`, "10"],
        a: `${35+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `${20+i} > ${10+i}`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Điền số thích hợp: ${30+i} < ? < ${32+i}`,
        a: 31+i
      }))
    }
  },
  {
    id: 23,
    title: "Bài 23: Bảng các số từ 1 đến 100",
    icon: "📋",
    raw_html: `<p>Bảng số từ 1 đến 100 giúp chúng ta biết thứ tự các số. Các số liên tiếp hơn kém nhau 1 đơn vị.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số đứng ngay sau số ${80+i} là?`,
        opts: [`${81+i}`, `${79+i}`, `${80+i}`, "100"],
        a: `${81+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Số ${i+1} đứng trước số ${i+2}`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số đứng ngay trước ${50+i} là?`,
        a: 49+i
      }))
    }
  },
  {
    id: 24,
    title: "Bài 24: Luyện tập chung",
    icon: "🧩",
    raw_html: `<p>Ôn tập tổng hợp về các số trong phạm vi 100: Đọc, viết và so sánh.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số 'Năm mươi ${i === 5 ? "lăm" : i}' viết là?`,
        opts: [`5${i}`, `50${i}`, `${i}5`, "5"],
        a: `5${i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Số ${i+10} có chữ số hàng chục là ${Math.floor((i+10)/10)}`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số gồm ${i+3} chục và 0 đơn vị là?`,
        a: (i+3)*10
      }))
    }
  },
  {
    id: 25,
    title: "Bài 25: Dài hơn, ngắn hơn",
    icon: "📏",
    raw_html: `<p>So sánh độ dài hai vật bằng cách đặt chúng cạnh nhau. Vật nào dài hơn sẽ thò ra ngoài nhiều hơn.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Cái thước ${25+i}cm và bút chì ${10+i}cm. Vật nào dài hơn?`,
        opts: ["Cái thước", "Bút chì", "Bằng nhau", "Không biết"],
        a: "Cái thước"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Gang tay của mẹ dài hơn gang tay của bé.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Nếu A dài hơn B, B dài hơn C thì A ... hơn C? (điền: dài hoặc ngắn)`,
        a: "dài"
      }))
    }
  },
  {
    id: 26,
    title: "Bài 26: Đơn vị đo độ dài",
    icon: "📐",
    raw_html: `<p>Đơn vị đo độ dài thông dụng là <b>xăng-ti-mét (cm)</b>. Khi đo, đặt vạch 0 của thước trùng với một đầu của vật.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `${10+i}cm + 5cm bằng bao nhiêu?`,
        opts: [`${15+i}cm`, `${15+i}`, `${10+i}cm`, "20cm"],
        a: `${15+i}cm`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Đơn vị xăng-ti-mét viết tắt là "cm".`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Đo bút chì thấy vạch 10cm. Vậy bút dài ? cm`,
        a: 10
      }))
    }
  },
  {
    id: 27,
    title: "Bài 27: Thực hành và trải nghiệm đo độ dài",
    icon: "🚶",
    raw_html: `<p>Bé có thể đo bằng gang tay, bước chân hoặc các vật trung gian như que tính.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Bé đo bàn học được ${5+i} gang tay. Gang tay là đơn vị đo?`,
        opts: ["Độ dài", "Khối lượng", "Thời gian", "Số lượng"],
        a: "Độ dài"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Dùng bước chân để đo chiều dài sân trường là hợp lý.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Một bước chân bé dài 30cm. Hai bước chân dài ? cm`,
        a: 60
      }))
    }
  },
  {
    id: 28,
    title: "Bài 28: Phép cộng (không nhớ) trong phạm vi 100",
    icon: "➕",
    raw_html: `<p>Cộng số có hai chữ số: cộng đơn vị với đơn vị, cộng chục với chục.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `${20+i} + 10 bằng?`,
        opts: [`${30+i}`, `${20+i}`, `${10+i}`, "40"],
        a: `${30+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `${30 + i} + 0 = ${30 + i}`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `40 + ${i*2} = ?`,
        a: 40 + i*2
      }))
    }
  },
  {
    id: 29,
    title: "Bài 29: Phép trừ (không nhớ) trong phạm vi 100",
    icon: "➖",
    raw_html: `<p>Trừ số có hai chữ số: trừ đơn vị cho đơn vị, trừ chục cho chục.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `${50+i} - 10 bằng?`,
        opts: [`${40+i}`, `${50+i}`, `${60+i}`, "30"],
        a: `${40+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `${80 - i} < 90`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `70 - ${i*5} = ?`,
        a: 70 - i*5
      }))
    }
  },
  {
    id: 30,
    title: "Bài 30: Luyện tập chung",
    icon: "🧪",
    raw_html: `<p>Luyện tập kĩ năng cộng, trừ nhẩm và đặt tính rồi tính trong phạm vi 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Kết quả của ${40+i} + 20 là?`,
        opts: [`${60+i}`, `${50+i}`, `${70+i}`, "80"],
        a: `${60+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Cộng 20 với 30 được 50.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `90 - 40 + ${i} = ?`,
        a: 50 + i
      }))
    }
  },
  {
    id: 31,
    title: "Bài 31: Hình khối, khối lập phương, khối hộp chữ nhật",
    icon: "📦",
    raw_html: `<p>Phân biệt khối lập phương (6 mặt hình vuông) và khối hộp chữ nhật (6 mặt hình chữ nhật).</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Đồ vật nào có dạng khối lập phương?`,
        opts: ["Con xúc xắc", "Hộp sữa", "Quả bóng", "Cái bút"],
        a: "Con xúc xắc"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Khối lập phương có các mặt bằng nhau.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Khối hộp chữ nhật có ? mặt.`,
        a: 6
      }))
    }
  },
  {
    id: 32,
    title: "Bài 32: Các ngày trong tuần",
    icon: "📅",
    raw_html: `<p>Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Ngày sau Thứ Ba là ngày nào?`,
        opts: ["Thứ Tư", "Thứ Hai", "Thứ Năm", "Chủ Nhật"],
        a: "Thứ Tư"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Một tuần lễ có 7 ngày.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Sau Thứ Sáu là Thứ ?`,
        a: "Bảy"
      }))
    }
  },
  {
    id: 33,
    title: "Bài 33: Giờ đúng trên đồng hồ",
    icon: "⏰",
    raw_html: `<p>Kim ngắn chỉ giờ, kim dài chỉ phút. Giờ đúng là khi kim dài chỉ vào số 12.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Kim ngắn chỉ số ${i+1}, kim dài chỉ số 12. Là mấy giờ?`,
        opts: [`${i+1} giờ`, "12 giờ", "6 giờ", "Giờ sai"],
        a: `${i+1} giờ`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Kim dài chỉ số 12 là giờ đúng.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Lúc 8 giờ, kim dài chỉ số ?`,
        a: 12
      }))
    }
  },
  {
    id: 34,
    title: "Bài 34: Luyện tập chung",
    icon: "🔄",
    raw_html: `<p>Ôn tập về thời gian, thứ ngày và xem đồng hồ giờ đúng.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Bé đi ngủ lúc 9 giờ tối. Kim ngắn chỉ số mấy?`,
        opts: ["9", "12", "6", "3"],
        a: "9"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Thứ Bảy và Chủ Nhật là ngày cuối tuần.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Hôm nay Thứ Hai, ngày mai Thứ ?`,
        a: "Ba"
      }))
    }
  },
  {
    id: 35,
    title: "Bài 35: Các số đến 100 (Ôn tập)",
    icon: "💯",
    raw_html: `<p>Tổng ôn tập về cấu tạo số, thứ tự số và so sánh các số đến 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số lớn nhất có hai chữ số là?`,
        opts: ["99", "100", "90", "10"],
        a: "99"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `99 bé hơn 100.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số tròn chục đứng sau 80 là?`,
        a: 90
      }))
    }
  },
  {
    id: 36,
    title: "Bài 36: Ôn tập phép cộng, phép trừ",
    icon: "🧮",
    raw_html: `<p>Ôn tập các phép tính cộng, trừ không nhớ trong phạm vi 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Kết quả của 70 - 20 + ${i} là?`,
        opts: [`${50+i}`, "50", "90", "0"],
        a: `${50+i}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `40 + 50 = 90.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `88 - 8 = ?`,
        a: 80
      }))
    }
  },
  {
    id: 37,
    title: "Bài 37: Ôn tập hình học và đo lường",
    icon: "📐",
    raw_html: `<p>Ôn tập về hình phẳng, hình khối và đo độ dài bằng xăng-ti-mét.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Hình nào có 3 cạnh?`,
        opts: ["Hình tam giác", "Hình vuông", "Hình tròn", "Khối hộp"],
        a: "Hình tam giác"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Khối hộp chữ nhật có 6 mặt.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Đo thước thấy vạch 15. Độ dài là ? cm`,
        a: 15
      }))
    }
  },
  {
    id: 38,
    title: "Bài 38: Ôn tập chung (1)",
    icon: "📚",
    raw_html: `<p>Ôn tập tổng hợp kiến thức từ đầu năm học lớp 1.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số gồm ${i+1} chục và ${i+1} đơn vị là?`,
        opts: [`${(i+1)*11}`, `${(i+1)*10}`, "11", "22"],
        a: `${(i+1)*11}`
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Số ${i+10} là số có hai chữ số.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số đứng trước 10 là?`,
        a: 9
      }))
    }
  },
  {
    id: 39,
    title: "Bài 39: Ôn tập chung (2)",
    icon: "📝",
    raw_html: `<p>Tiếp tục ôn tập các dạng toán trọng tâm của chương trình.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Tính: 30 + 40 - 10 = ?`,
        opts: ["60", "70", "50", "80"],
        a: "60"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Cộng 50 với 50 được 100.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số tròn chục lớn hơn 50 và nhỏ hơn 70 là?`,
        a: 60
      }))
    }
  },
  {
    id: 40,
    title: "Bài 40: Ôn tập cuối học kì 2",
    icon: "⏳",
    raw_html: `<p>Ôn tập kiến thức trọng tâm học kì 2 để chuẩn bị kết thúc năm học.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Nếu Thứ Ba là ngày 10, thì Thứ Tư là ngày mấy?`,
        opts: ["11", "12", "9", "8"],
        a: "11"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Một tuần có 7 ngày.`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Đồng hồ chỉ 10 giờ đúng. Kim dài chỉ số ?`,
        a: 12
      }))
    }
  },
  {
    id: 41,
    title: "Bài 41: Ôn tập cuối năm",
    icon: "🎓",
    raw_html: `<p>Chúc mừng bé đã hoàn thành năm học lớp 1! Hãy ôn tập lần cuối để sẵn sàng lên lớp 2 nhé.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số lớn nhất có 3 chữ số mà bé học ở lớp 1 là?`,
        opts: ["100", "99", "10", "1"],
        a: "100"
      })),
      dung_sai: generateDungSai(10, (i) => ({
        text: `Bé đã học toán rất chăm chỉ!`,
        isCorrect: true
      })),
      dien_so: generateDienSo(10, (i) => ({
        q: `Số gồm 10 chục gọi là một ?`,
        a: "trăm"
      }))
    }
  }
];
