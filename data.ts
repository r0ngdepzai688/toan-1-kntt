
import { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: 21,
    title: "Bài 21: Số có hai chữ số",
    icon: "🔢",
    raw_html: "Các số từ 11 đến 20, các số tròn chục và các số đến 99. Học cách đọc và viết các số có hai chữ số.",
    sections: {
      trac_nghiem: [
        { question: "Số 25 gồm mấy chục và mấy đơn vị?", options: ["2 chục và 5 đơn vị", "5 chục và 2 đơn vị", "20 chục và 5 đơn vị", "2 chục và 50 đơn vị"], answer: "2 chục và 5 đơn vị" },
        { question: "Số 'Ba mươi sáu' được viết là:", options: ["306", "63", "36", "30"], answer: "36" }
      ],
      dung_sai: [
        { question: "Chọn Đúng hoặc Sai cho các phát biểu sau:", statements: [{ text: "Số 10 là số tròn chục nhỏ nhất", isCorrect: true }, { text: "Số 99 là số có 1 chữ số", isCorrect: false }] }
      ],
      dien_so: [
        { question: "23 gồm ? chục và 3 đơn vị.", answer: 2 },
        { question: "Số tròn chục đứng sau 40 là?", answer: 50 }
      ]
    }
  },
  {
    id: 22,
    title: "Bài 22: So sánh số có hai chữ số",
    icon: "⚖️",
    raw_html: "Học cách so sánh hai số dựa vào hàng chục trước, sau đó đến hàng đơn vị.",
    sections: {
      trac_nghiem: [
        { question: "Số nào lớn hơn trong cặp (35, 53)?", options: ["35", "53", "Bằng nhau", "Không biết"], answer: "53" },
        { question: "Điền dấu thích hợp: 45 ... 41", options: [">", "<", "=", "±"], answer: ">" }
      ],
      dung_sai: [
        { question: "Kiểm tra kết quả:", statements: [{ text: "24 < 19", isCorrect: false }, { text: "80 > 79", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Số lớn nhất trong các số 12, 18, 32 là?", answer: 32 }
      ]
    }
  },
  {
    id: 23,
    title: "Bài 23: Bảng các số từ 1 đến 100",
    icon: "📋",
    raw_html: "Làm quen với bảng số 1-100, nhận biết thứ tự và quy luật của các số.",
    sections: {
      trac_nghiem: [
        { question: "Số lớn nhất có hai chữ số là?", options: ["10", "99", "100", "90"], answer: "99" },
        { question: "Số 100 đọc là gì?", options: ["Mười mươi", "Một trăm", "Một nghìn", "Mười chục"], answer: "Một trăm" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "Số 100 có 3 chữ số", isCorrect: true }, { text: "Các số tròn chục đều kết thúc bằng số 0", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Số đứng liền sau 99 là?", answer: 100 }
      ]
    }
  },
  {
    id: 24,
    title: "Bài 24: Luyện tập chung",
    icon: "🧩",
    raw_html: "Ôn tập tổng hợp về các số đến 100.",
    sections: {
      trac_nghiem: [
        { question: "Số 'Bảy mươi mốt' viết là:", options: ["71", "17", "70", "701"], answer: "71" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "60 gồm 6 chục và 0 đơn vị", isCorrect: true }] }
      ],
      dien_so: [
        { question: "30 + 20 bằng bao nhiêu?", answer: 50 }
      ]
    }
  },
  {
    id: 25,
    title: "Bài 25: Dài hơn, ngắn hơn",
    icon: "📏",
    raw_html: "So sánh trực quan độ dài của hai vật thể.",
    sections: {
      trac_nghiem: [
        { question: "Cái thước kẻ thường ... cái bút chì.", options: ["Ngắn hơn", "Dài hơn", "Bằng", "Nặng hơn"], answer: "Dài hơn" }
      ],
      dung_sai: [
        { question: "So sánh:", statements: [{ text: "Bút chì ngắn hơn thước kẻ", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Nếu vật A dài hơn vật B, thì vật B ... vật A.", answer: "ngắn hơn" }
      ]
    }
  },
  {
    id: 26,
    title: "Bài 26: Đơn vị đo độ dài",
    icon: "📐",
    raw_html: "Làm quen với đơn vị đo xăng-ti-mét (cm) và cách dùng thước đo.",
    sections: {
      trac_nghiem: [
        { question: "Xăng-ti-mét viết tắt là:", options: ["m", "dm", "cm", "mm"], answer: "cm" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "Khi đo phải đặt vạch số 0 trùng với đầu vật", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Cây bút dài 12 ... (viết tên đơn vị)", answer: "cm" }
      ]
    }
  },
  {
    id: 27,
    title: "Bài 27: Thực hành ước lượng và đo độ dài",
    icon: "🖐️",
    raw_html: "Thực hành đo bằng gang tay, bước chân và thước kẻ.",
    sections: {
      trac_nghiem: [
        { question: "Gang tay của em dài khoảng bao nhiêu?", options: ["1 cm", "10 cm", "100 cm", "1000 cm"], answer: "10 cm" }
      ],
      dung_sai: [
        { question: "Ước lượng:", statements: [{ text: "Bàn học cao khoảng 60 cm", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Đo độ dài bằng ... chân.", answer: "bước" }
      ]
    }
  },
  {
    id: 28,
    title: "Bài 28: Luyện tập chung",
    icon: "🏗️",
    raw_html: "Ôn tập về đo lường và so sánh độ dài.",
    sections: {
      trac_nghiem: [
        { question: "Vật nào thường dài nhất?", options: ["Cái tẩy", "Bút chì", "Cái giường", "Quyển vở"], answer: "Cái giường" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "15 cm > 10 cm", isCorrect: true }] }
      ],
      dien_so: [
        { question: "9 cm + 1 cm = ? cm", answer: 10 }
      ]
    }
  },
  {
    id: 29,
    title: "Bài 29: Phép cộng (không nhớ) số có hai chữ số với số có một chữ số",
    icon: "➕",
    raw_html: "Cộng hàng đơn vị trước, giữ nguyên hàng chục.",
    sections: {
      trac_nghiem: [
        { question: "41 + 5 = ?", options: ["45", "46", "56", "91"], answer: "46" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "20 + 4 = 24", isCorrect: true }] }
      ],
      dien_so: [
        { question: "71 + 5 = ?", answer: 76 }
      ]
    }
  },
  {
    id: 30,
    title: "Bài 30: Phép cộng (không nhớ) số có hai chữ số với số có hai chữ số",
    icon: "➕➕",
    raw_html: "Cộng đơn vị với đơn vị, chục với chục.",
    sections: {
      trac_nghiem: [
        { question: "32 + 15 = ?", options: ["47", "37", "42", "57"], answer: "47" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "24 + 30 = 54", isCorrect: true }] }
      ],
      dien_so: [
        { question: "13 + 21 = ?", answer: 34 }
      ]
    }
  },
  {
    id: 31,
    title: "Bài 31: Phép trừ (không nhớ) số có hai chữ số cho số có một chữ số",
    icon: "➖",
    raw_html: "Trừ ở hàng đơn vị, giữ nguyên hàng chục.",
    sections: {
      trac_nghiem: [
        { question: "76 - 5 = ?", options: ["71", "61", "70", "26"], answer: "71" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "34 - 4 = 30", isCorrect: true }] }
      ],
      dien_so: [
        { question: "18 - 5 = ?", answer: 13 }
      ]
    }
  },
  {
    id: 32,
    title: "Bài 32: Phép trừ (không nhớ) số có hai chữ số cho số có hai chữ số",
    icon: "➖➖",
    raw_html: "Trừ đơn vị cho đơn vị, chục cho chục.",
    sections: {
      trac_nghiem: [
        { question: "76 - 32 = ?", options: ["44", "42", "34", "54"], answer: "44" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "52 - 20 = 32", isCorrect: true }] }
      ],
      dien_so: [
        { question: "68 - 15 = ?", answer: 53 }
      ]
    }
  },
  {
    id: 33,
    title: "Bài 33: Luyện tập chung",
    icon: "🛠️",
    raw_html: "Ôn tập các phép cộng, trừ trong phạm vi 100.",
    sections: {
      trac_nghiem: [
        { question: "Kết quả của 20 + 30 - 10 là:", options: ["40", "50", "60", "30"], answer: "40" }
      ],
      dung_sai: [
        { question: "Tính toán:", statements: [{ text: "40 + 50 = 90", isCorrect: true }] }
      ],
      dien_so: [
        { question: "90 - 40 = ?", answer: 50 }
      ]
    }
  },
  {
    id: 34,
    title: "Bài 34: Xem giờ đúng trên đồng hồ",
    icon: "⏰",
    raw_html: "Kim dài chỉ số 12, kim ngắn chỉ số mấy thì đó là bấy nhiêu giờ.",
    sections: {
      trac_nghiem: [
        { question: "Đồng hồ có kim ngắn chỉ số 7, kim dài chỉ số 12 là mấy giờ?", options: ["7 giờ", "12 giờ", "5 giờ", "19 giờ"], answer: "7 giờ" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "Khi kim dài và kim ngắn cùng chỉ số 12 là 12 giờ", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Lúc 9 giờ, kim dài chỉ vào số nào?", answer: 12 }
      ]
    }
  },
  {
    id: 35,
    title: "Bài 35: Các ngày trong tuần",
    icon: "📅",
    raw_html: "Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.",
    sections: {
      trac_nghiem: [
        { question: "Ngày sau Thứ Bảy là ngày nào?", options: ["Thứ Hai", "Chủ Nhật", "Thứ Sáu", "Thứ Năm"], answer: "Chủ Nhật" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "Một tuần có 8 ngày", isCorrect: false }] }
      ],
      dien_so: [
        { question: "Sau Thứ Hai là Thứ ...?", answer: "Ba" }
      ]
    }
  },
  {
    id: 36,
    title: "Bài 36: Thực hành xem lịch và giờ",
    icon: "🗓️",
    raw_html: "Kết hợp xem tờ lịch và xem giờ trên đồng hồ.",
    sections: {
      trac_nghiem: [
        { question: "Nếu hôm nay là Thứ Hai ngày 7 thì hôm qua là ngày mấy?", options: ["6", "8", "1", "5"], answer: "6" }
      ],
      dung_sai: [
        { question: "Chọn:", statements: [{ text: "Mai đi học lúc 7 giờ sáng", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Ngày mai là Thứ ... nếu hôm nay là Thứ Ba?", answer: "Tư" }
      ]
    }
  },
  {
    id: 37,
    title: "Bài 37: Luyện tập chung",
    icon: "🕒",
    raw_html: "Ôn tập tổng hợp về thời gian và lịch.",
    sections: {
      trac_nghiem: [
        { question: "Em ngủ dậy lúc mấy giờ sáng?", options: ["6 giờ", "12 giờ", "2 giờ", "8 giờ"], answer: "6 giờ" }
      ],
      dung_sai: [
        { question: "Đúng hay sai?", statements: [{ text: "Một tuần em đi học 5 ngày (từ thứ 2 đến thứ 6)", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Số ngày trong một tuần là?", answer: 7 }
      ]
    }
  },
  {
    id: 38,
    title: "Bài 38: Ôn tập các số và phép tính trong phạm vi 10",
    icon: "🔢",
    raw_html: "Ôn lại kiến thức học kỳ 1 về các số nhỏ hơn 10.",
    sections: {
      trac_nghiem: [
        { question: "Số nào lớn nhất trong các số: 3, 7, 5, 9?", options: ["3", "7", "5", "9"], answer: "9" }
      ],
      dung_sai: [
        { question: "Tính:", statements: [{ text: "3 + 4 = 7", isCorrect: true }] }
      ],
      dien_so: [
        { question: "10 - 6 = ?", answer: 4 }
      ]
    }
  },
  {
    id: 39,
    title: "Bài 39: Ôn tập các số và phép tính trong phạm vi 100",
    icon: "💯",
    raw_html: "Ôn tập tổng kết về số và phép tính cộng trừ không nhớ.",
    sections: {
      trac_nghiem: [
        { question: "Số tròn chục lớn nhất là?", options: ["10", "90", "100", "50"], answer: "90" }
      ],
      dung_sai: [
        { question: "Kiểm tra:", statements: [{ text: "45 + 10 = 55", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Số gồm 8 chục và 0 đơn vị là?", answer: 80 }
      ]
    }
  },
  {
    id: 40,
    title: "Bài 40: Ôn tập hình học và đo lường",
    icon: "🎨",
    raw_html: "Ôn tập nhận biết hình khối (lập phương, hộp chữ nhật) và đơn vị cm.",
    sections: {
      trac_nghiem: [
        { question: "Hình nào có 4 cạnh bằng nhau?", options: ["Hình vuông", "Hình tròn", "Hình tam giác", "Hình chữ nhật"], answer: "Hình vuông" }
      ],
      dung_sai: [
        { question: "Hình khối:", statements: [{ text: "Viên xúc xắc là khối lập phương", isCorrect: true }] }
      ],
      dien_so: [
        { question: "Đoạn thẳng dài 10 cm, bớt đi 2 cm còn ... cm?", answer: 8 }
      ]
    }
  },
  {
    id: 41,
    title: "Bài 41: Luyện tập chung",
    icon: "🎓",
    raw_html: "Bài ôn tập cuối cùng cho cả năm học lớp 1.",
    sections: {
      trac_nghiem: [
        { question: "Hôm nay là Thứ Ba ngày 11, Thứ Sáu tuần này là ngày mấy?", options: ["13", "14", "15", "12"], answer: "14" }
      ],
      dung_sai: [
        { question: "Tổng kết:", statements: [{ text: "Em đã hoàn thành chương trình Toán lớp 1!", isCorrect: true }] }
      ],
      dien_so: [
        { question: "20 + 30 + 40 = ?", answer: 90 }
      ]
    }
  }
];
