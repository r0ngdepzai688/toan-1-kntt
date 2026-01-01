
import { Lesson } from './types';

// Hàm hỗ trợ tạo nhanh danh sách bài tập để đảm bảo số lượng 10 bài/dạng
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

export const lessonsData: Lesson[] = [
  {
    id: 21,
    title: "Bài 21: Số có hai chữ số",
    icon: "🔢",
    raw_html: `
      <div class='space-y-4'>
        <p><b>1. Các số từ 20 đến 100:</b></p>
        <p>Số có hai chữ số gồm chữ số <b>hàng chục</b> (đứng trước) và chữ số <b>hàng đơn vị</b> (đứng sau).</p>
        <p>Ví dụ: <b>35</b> gồm 3 chục và 5 đơn vị. Đọc là: Ba mươi lăm.</p>
        <p><b>2. Các số tròn chục:</b> 10, 20, 30, 40, 50, 60, 70, 80, 90.</p>
      </div>
    `,
    sections: {
      trac_nghiem: [
        { question: "Số 25 gồm mấy chục và mấy đơn vị?", options: ["2 chục và 5 đơn vị", "5 chục và 2 đơn vị", "20 chục và 5 đơn vị", "2 chục và 50 đơn vị"], answer: "2 chục và 5 đơn vị" },
        { question: "Số 'Ba mươi sáu' được viết là:", options: ["306", "63", "36", "30"], answer: "36" },
        { question: "Số gồm 4 chục và 0 đơn vị là:", options: ["4", "40", "14", "44"], answer: "40" },
        { question: "Số 51 đọc là:", options: ["Năm mươi một", "Năm mươi mốt", "Năm một", "Năm mốt"], answer: "Năm mươi mốt" },
        { question: "Số đứng liền sau số 19 là:", options: ["18", "20", "21", "10"], answer: "20" },
        { question: "Số tròn chục lớn nhất có hai chữ số là:", options: ["10", "90", "99", "100"], answer: "90" },
        { question: "Số 74 gồm:", options: ["7 chục và 4 đơn vị", "4 chục và 7 đơn vị", "70 chục và 4 đơn vị", "7 và 4"], answer: "7 chục và 4 đơn vị" },
        { question: "Số 'Tám mươi lăm' viết là:", options: ["805", "58", "85", "80"], answer: "85" },
        { question: "Trong số 62, chữ số 6 chỉ:", options: ["6 đơn vị", "6 chục", "60 chục", "Không biết"], answer: "6 chục" },
        { question: "Số bé nhất có hai chữ số là:", options: ["0", "1", "10", "11"], answer: "10" }
      ],
      dung_sai: [{ 
        question: "Chọn Đúng hoặc Sai:", 
        statements: [
          { text: "Số 10 là số tròn chục nhỏ nhất", isCorrect: true },
          { text: "Số 99 là số có 1 chữ số", isCorrect: false },
          { text: "Số 20 gọi là hai mươi hoặc 2 chục", isCorrect: true },
          { text: "Số 15 đọc là mười năm", isCorrect: false },
          { text: "Số 44 có hai chữ số giống nhau", isCorrect: true },
          { text: "Số tròn chục luôn có chữ số 0 ở cuối", isCorrect: true },
          { text: "Số 5 chục và 5 đơn vị là 505", isCorrect: false },
          { text: "Số 70 đọc là bảy mươi", isCorrect: true },
          { text: "Số 32 gồm 2 chục và 3 đơn vị", isCorrect: false },
          { text: "Số liền trước 21 là 20", isCorrect: true }
        ] 
      }],
      dien_so: [
        { question: "23 gồm ? chục và 3 đơn vị.", answer: 2 },
        { question: "Số tròn chục đứng sau 40 là?", answer: 50 },
        { question: "8 chục và 7 đơn vị viết là ?", answer: 87 },
        { question: "Số gồm 9 chục và 0 đơn vị là ?", answer: 90 },
        { question: "Số 14 gồm 1 chục và ? đơn vị.", answer: 4 },
        { question: "Số ba mươi hai viết là ?", answer: 32 },
        { question: "Số sáu mươi viết là ?", answer: 60 },
        { question: "Số mười lăm viết là ?", answer: 15 },
        { question: "Số 48 gồm ? chục và 8 đơn vị.", answer: 4 },
        { question: "Số tròn chục đứng trước 20 là ?", answer: 10 }
      ]
    }
  },
  {
    id: 22,
    title: "Bài 22: So sánh số có hai chữ số",
    icon: "⚖️",
    raw_html: `
      <div class='space-y-4'>
        <p><b>Quy tắc so sánh số có hai chữ số:</b></p>
        <ul class='list-decimal pl-5'>
          <li>Số nào có <b>chữ số hàng chục</b> lớn hơn thì số đó lớn hơn.</li>
          <li>Nếu chữ số hàng chục bằng nhau, ta so sánh <b>chữ số hàng đơn vị</b>.</li>
        </ul>
        <p>Ví dụ: <b>42 > 39</b> (vì 4 chục > 3 chục). <b>42 < 45</b> (vì hàng chục bằng 4, nhưng 2 đơn vị < 5 đơn vị).</p>
      </div>
    `,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số nào lớn nhất trong các số: ${20+i}, ${30+i}, ${10+i}?`,
        opts: [`${20+i}`, `${30+i}`, `${10+i}`, "0"],
        a: `${30+i}`
      })),
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "25 > 52", isCorrect: false },
          { text: "30 < 40", isCorrect: true },
          { text: "67 = 67", isCorrect: true },
          { text: "1 chục > 9 đơn vị", isCorrect: true },
          { text: "99 < 100", isCorrect: true },
          { text: "5 chục và 2 đơn vị > 50", isCorrect: true },
          { text: "88 < 87", isCorrect: false },
          { text: "Số bé nhất có hai chữ số là 11", isCorrect: false },
          { text: "45 > 41", isCorrect: true },
          { text: "70 là số tròn chục", isCorrect: true }
        ]
      }],
      dien_so: generateDienSo(10, (i) => ({
        q: `Điền số thích hợp: ${10+i} < ? < ${12+i}`,
        a: 11+i
      }))
    }
  },
  {
    id: 23,
    title: "Bài 23: Bảng các số từ 1 đến 100",
    icon: "📋",
    raw_html: `<p>Bảng số từ 1 đến 100 giúp em thấy thứ tự các số. Các số liên tiếp hơn kém nhau 1 đơn vị. Các số cùng một cột hơn kém nhau 1 chục.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({
        q: `Số đứng ngay sau số ${80+i} là?`,
        opts: [`${81+i}`, `${79+i}`, `${80+i}`, "100"],
        a: `${81+i}`
      })),
      dung_sai: [{
        question: "Sự thật về bảng số:",
        statements: Array(10).fill(null).map((_, i) => ({ text: `Số ${90+i} nằm sau số 10`, isCorrect: true }))
      }],
      dien_so: generateDienSo(10, (i) => ({ q: `Số đứng trước ${50+i} là?`, a: 49+i }))
    }
  },
  {
    id: 24,
    title: "Bài 24: Luyện tập chung",
    icon: "🧩",
    raw_html: `<p>Ôn tập lại cách đọc, viết và so sánh các số đến 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Số 'Bốn mươi ${i}' viết là?`, opts: [`4${i}`, `40${i}`, `${i}4`, "4"], a: `4${i}` })),
      dung_sai: [{ question: "Đúng hay Sai?", statements: Array(10).fill(null).map((_, i) => ({ text: `${10+i} là số tròn chục`, isCorrect: (10+i)%10===0 })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Số gồm ${i+1} chục và 5 đơn vị là?`, a: (i+1)*10 + 5 }))
    }
  },
  {
    id: 25,
    title: "Bài 25: Dài hơn, ngắn hơn",
    icon: "📏",
    raw_html: `<p>Để so sánh độ dài, ta đặt một đầu của hai vật bằng nhau. Vật nào thò ra nhiều hơn thì vật đó <b>dài hơn</b>.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Cái thước ${20+i}cm so với bút chì ${10+i}cm thì?`, opts: ["Dài hơn", "Ngắn hơn", "Bằng nhau", "Không biết"], a: "Dài hơn" })),
      dung_sai: [{ question: "So sánh độ dài:", statements: Array(10).fill(null).map((_, i) => ({ text: `Cây sào dài hơn cái kim`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Nếu A dài hơn B, B dài hơn C thì A ... hơn C? (điền: dài hoặc ngắn)`, a: "dài" }))
    }
  },
  {
    id: 26,
    title: "Bài 26: Đơn vị đo độ dài",
    icon: "📐",
    raw_html: `<p>Đơn vị đo độ dài là <b>xăng-ti-mét</b>, viết tắt là <b>cm</b>. Ta dùng thước có vạch chia để đo.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `10cm + ${i}cm = ?`, opts: [`${10+i}cm`, `${10+i}`, `${i}cm`, "20cm"], a: `${10+i}cm` })),
      dung_sai: [{ question: "Đúng hay Sai?", statements: Array(10).fill(null).map((_, i) => ({ text: `Đo bằng thước phải đặt vạch 0 vào đầu vật`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Dùng thước đo bút chì thấy vạch 8 thì bút dài ? cm`, a: 8 }))
    }
  },
  {
    id: 27,
    title: "Bài 27: Thực hành và trải nghiệm đo độ dài",
    icon: "🚶",
    raw_html: `<p>Em có thể dùng gang tay, bước chân hoặc thước để đo độ dài các vật quanh mình.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Đo cái bàn bằng gang tay, kết quả là 5 gang tay. 5 gang tay là?`, opts: ["Độ dài", "Cân nặng", "Thời gian", "Số lượng"], a: "Độ dài" })),
      dung_sai: [{ question: "Đo lường thực tế:", statements: Array(10).fill(null).map((_, i) => ({ text: `Một bước chân dài hơn một gang tay`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Bé đo quyển vở được 2 gang tay. Vậy vở dài ? gang tay`, a: 2 }))
    }
  },
  {
    id: 28,
    title: "Bài 28: Phép cộng (không nhớ) trong phạm vi 100",
    icon: "➕",
    raw_html: `<p>Cộng số có hai chữ số: cộng hàng đơn vị với hàng đơn vị, hàng chục với hàng chục.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `20 + ${i*10} = ?`, opts: [`${20+i*10}`, "100", "0", "10"], a: `${20+i*10}` })),
      dung_sai: [{ question: "Tính nhẩm:", statements: Array(10).fill(null).map((_, i) => ({ text: `30 + 10 = 40`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `42 + ${i} = ?`, a: 42+i }))
    }
  },
  {
    id: 29,
    title: "Bài 29: Phép trừ (không nhớ) trong phạm vi 100",
    icon: "➖",
    raw_html: `<p>Trừ số có hai chữ số: trừ hàng đơn vị cho hàng đơn vị, hàng chục cho hàng chục.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `50 - ${i*5} = ?`, opts: [`${50-i*5}`, "0", "10", "100"], a: `${50-i*5}` })),
      dung_sai: [{ question: "Tính đúng sai:", statements: Array(10).fill(null).map((_, i) => ({ text: `90 - 40 = 50`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `88 - ${i} = ?`, a: 88-i }))
    }
  },
  {
    id: 30,
    title: "Bài 30: Luyện tập chung",
    icon: "🧪",
    raw_html: `<p>Luyện tập các phép tính cộng, trừ không nhớ trong phạm vi 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Kết quả của ${30+i} + 10 là?`, opts: [`${40+i}`, `${20+i}`, "50", "0"], a: `${40+i}` })),
      dung_sai: [{ question: "Kiểm tra kết quả:", statements: Array(10).fill(null).map((_, i) => ({ text: `20 + 20 = 40`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `65 - 5 = ?`, a: 60 }))
    }
  },
  {
    id: 31,
    title: "Bài 31: Hình khối, khối lập phương, khối hộp chữ nhật",
    icon: "📦",
    raw_html: `<p>Làm quen với <b>khối lập phương</b> (giống con xúc xắc) và <b>khối hộp chữ nhật</b> (giống hộp sữa).</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Hộp sữa có dạng khối gì?`, opts: ["Khối hộp chữ nhật", "Khối lập phương", "Hình tròn", "Hình vuông"], a: "Khối hộp chữ nhật" })),
      dung_sai: [{ question: "Phân biệt hình khối:", statements: Array(10).fill(null).map((_, i) => ({ text: `Khối lập phương có các mặt bằng nhau`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Xúc xắc có dạng khối lập ...?`, a: "phương" }))
    }
  },
  {
    id: 32,
    title: "Bài 32: Các ngày trong tuần",
    icon: "📅",
    raw_html: `<p>Một tuần lễ có <b>7 ngày</b>: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Ngày sau Thứ Ba là?`, opts: ["Thứ Tư", "Thứ Hai", "Chủ Nhật", "Thứ Bảy"], a: "Thứ Tư" })),
      dung_sai: [{ question: "Thứ tự ngày:", statements: Array(10).fill(null).map((_, i) => ({ text: `Một tuần có 7 ngày`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Thứ Hai rồi đến Thứ ...?`, a: "Ba" }))
    }
  },
  {
    id: 33,
    title: "Bài 33: Giờ đúng trên đồng hồ",
    icon: "⏰",
    raw_html: `<p>Kim ngắn chỉ <b>giờ</b>, kim dài chỉ <b>phút</b>. Khi kim dài chỉ số 12, đó là giờ đúng.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Kim ngắn chỉ số 3, kim dài chỉ số 12 là mấy giờ?`, opts: ["3 giờ", "12 giờ", "6 giờ", "9 giờ"], a: "3 giờ" })),
      dung_sai: [{ question: "Đọc đồng hồ:", statements: Array(10).fill(null).map((_, i) => ({ text: `Kim ngắn quay chậm hơn kim dài`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Kim ngắn chỉ số 7, kim dài chỉ số 12 là ? giờ`, a: 7 }))
    }
  },
  {
    id: 34,
    title: "Bài 34: Luyện tập chung",
    icon: "🔄",
    raw_html: `<p>Ôn tập về thời gian (ngày, tuần) và xem giờ trên đồng hồ.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Nếu hôm nay là Thứ Năm, ngày mai là?`, opts: ["Thứ Sáu", "Thứ Tư", "Thứ Bảy", "Chủ Nhật"], a: "Thứ Sáu" })),
      dung_sai: [{ question: "Thời gian:", statements: Array(10).fill(null).map((_, i) => ({ text: `Thứ Bảy và Chủ Nhật là ngày nghỉ`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Một tuần có ? ngày`, a: 7 }))
    }
  },
  {
    id: 35,
    title: "Bài 35: Các số đến 100 (Ôn tập)",
    icon: "💯",
    raw_html: `<p>Ôn tập lại toàn bộ các số từ 1 đến 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Số lớn nhất có 2 chữ số là?`, opts: ["99", "100", "90", "10"], a: "99" })),
      dung_sai: [{ question: "Đúng hay Sai?", statements: Array(10).fill(null).map((_, i) => ({ text: `100 là số có 3 chữ số`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Số tròn chục bé nhất là?`, a: 10 }))
    }
  },
  {
    id: 36,
    title: "Bài 36: Ôn tập phép cộng, phép trừ",
    icon: "🧮",
    raw_html: `<p>Ôn tập phép cộng và phép trừ không nhớ trong phạm vi 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `${40+i} + 5 = ?`, opts: [`${45+i}`, "50", "40", "0"], a: `${45+i}` })),
      dung_sai: [{ question: "Tính nhẩm nhanh:", statements: Array(10).fill(null).map((_, i) => ({ text: `50 - 20 = 30`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `70 + 30 = ?`, a: 100 }))
    }
  },
  {
    id: 37,
    title: "Bài 37: Ôn tập hình học và đo lường",
    icon: "📐",
    raw_html: `<p>Ôn tập về các hình phẳng, hình khối và đơn vị xăng-ti-mét.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Hình vuông có mấy cạnh?`, opts: ["4", "3", "5", "0"], a: "4" })),
      dung_sai: [{ question: "Hình học:", statements: Array(10).fill(null).map((_, i) => ({ text: `Viên gạch có dạng khối hộp chữ nhật`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Đo độ dài ta dùng đơn vị ? (viết tắt)`, a: "cm" }))
    }
  },
  {
    id: 38,
    title: "Bài 38: Ôn tập chung",
    icon: "📚",
    raw_html: `<p>Ôn tập tổng hợp kiến thức học kỳ 2.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Số đứng giữa 89 và 91 là?`, opts: ["90", "88", "92", "100"], a: "90" })),
      dung_sai: [{ question: "Kiến thức:", statements: Array(10).fill(null).map((_, i) => ({ text: `2 chục là 20`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `5 chục và 5 đơn vị là ?`, a: 55 }))
    }
  },
  {
    id: 39,
    title: "Bài 39: Ôn tập cuối học kì 2 (Số và phép tính)",
    icon: "📝",
    raw_html: `<p>Luyện tập kĩ năng tính toán với các số đến 100.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Tính: 20 + 30 + 10 = ?`, opts: ["60", "50", "40", "100"], a: "60" })),
      dung_sai: [{ question: "Phép tính:", statements: Array(10).fill(null).map((_, i) => ({ text: `100 - 50 = 50`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `45 + 4 = ?`, a: 49 }))
    }
  },
  {
    id: 40,
    title: "Bài 40: Ôn tập cuối học kì 2 (Hình học, đo lường, thời gian)",
    icon: "⏳",
    raw_html: `<p>Ôn tập về hình khối, đo độ dài và cách xem đồng hồ, lịch.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Chủ Nhật là ngày thứ mấy trong tuần?`, opts: ["Ngày cuối tuần", "Ngày đầu tuần", "Thứ Hai", "Thứ Bảy"], a: "Ngày cuối tuần" })),
      dung_sai: [{ question: "Thời gian và hình khối:", statements: Array(10).fill(null).map((_, i) => ({ text: `Khối lập phương có 6 mặt`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `8 giờ đúng thì kim dài chỉ số ?`, a: 12 }))
    }
  },
  {
    id: 41,
    title: "Bài 41: Ôn tập cuối năm",
    icon: "🎓",
    raw_html: `<p>Chúc mừng bé đã hoàn thành chương trình Toán lớp 1! Hãy cùng ôn lại những gì thú vị nhất nhé.</p>`,
    sections: {
      trac_nghiem: generateTracNghiem(10, (i) => ({ q: `Số tròn chục lớn nhất là?`, opts: ["90", "100", "80", "10"], a: "90" })),
      dung_sai: [{ question: "Lời khen:", statements: Array(10).fill(null).map((_, i) => ({ text: `Bé đã học toán rất giỏi!`, isCorrect: true })) }],
      dien_so: generateDienSo(10, (i) => ({ q: `Số gồm 10 chục là ?`, a: 100 }))
    }
  }
];
