
import { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: 21,
    title: "Bài 21: Số có hai chữ số",
    icon: "🔢",
    raw_html: `
      <div class='space-y-4'>
        <p><b>1. Chục và đơn vị:</b> 10 đơn vị được gọi là <b>1 chục</b>.</p>
        <p><b>2. Số có hai chữ số:</b> Gồm chữ số <b>hàng chục</b> đứng trước và chữ số <b>hàng đơn vị</b> đứng sau.</p>
        <p>Ví dụ: 25 gồm 2 chục và 5 đơn vị. Đọc là: <i>Hai mươi lăm</i>.</p>
      </div>
    `,
    sections: {
      trac_nghiem: [
        { question: "Có bao nhiêu khối lập phương trong hình?", options: ["23", "32", "20", "3"], answer: "23", visual: { type: 'blocks', value: { tens: 2, ones: 3 } } },
        { question: "Đếm số bông hoa dưới đây:", options: ["12", "15", "10", "8"], answer: "12", visual: { type: 'counting', items: ['🌹'], count: 12 } },
        { question: "Số 'Bốn mươi lăm' được viết là?", options: ["54", "405", "45", "40"], answer: "45" },
        { question: "Số gồm 3 chục và 0 đơn vị là?", options: ["30", "3", "13", "33"], answer: "30", visual: { type: 'blocks', value: { tens: 3, ones: 0 } } },
        { question: "Đọc số 51 là?", options: ["Năm mươi một", "Năm mươi mốt", "Năm một", "Mười lăm"], answer: "Năm mươi mốt" },
        { question: "Số nào là số tròn chục?", options: ["15", "20", "22", "9"], answer: "20" },
        { question: "Số 99 gồm mấy chục và mấy đơn vị?", options: ["9 chục và 9 đơn vị", "90 chục và 9 đơn vị", "9 và 9", "Chín chục"], answer: "9 chục và 9 đơn vị" },
        { question: "Số đứng liền sau số 19 là?", answer: "20", options: ["18", "20", "21", "10"] },
        { question: "Đếm số ngôi sao:", options: ["10", "15", "20", "25"], answer: "15", visual: { type: 'counting', items: ['⭐'], count: 15 } },
        { question: "Số 'Tám mươi tư' viết là?", options: ["84", "48", "804", "80"], answer: "84" }
      ],
      dung_sai: [{
        question: "Chọn Đúng hoặc Sai cho các phát biểu sau:",
        statements: [
          { text: "Số 30 là số tròn chục.", isCorrect: true },
          { text: "Số 25 có chữ số hàng chục là 5.", isCorrect: false },
          { text: "10 đơn vị bằng 1 chục.", isCorrect: true },
          { text: "Số liền trước 100 là 99.", isCorrect: true },
          { text: "Đọc số 15 là mười năm.", isCorrect: false },
          { text: "Hình này có 4 chục khối vuông.", isCorrect: true, visual: { type: 'blocks', value: { tens: 4, ones: 0 } } },
          { text: "Số lớn nhất có 2 chữ số là 90.", isCorrect: false },
          { text: "Số lượng táo là 8.", isCorrect: true, visual: { type: 'counting', items: ['🍎'], count: 8 } },
          { text: "Số 70 đọc là bảy mươi.", isCorrect: true },
          { text: "Số tròn chục bé nhất là 10.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Có tất cả ? khối vuông trong hình.", answer: "34", visual: { type: 'blocks', value: { tens: 3, ones: 4 } } },
        { question: "Số quả cam là ?", answer: "11", visual: { type: 'counting', items: ['🍊'], count: 11 } },
        { question: "Số 'Sáu mươi bảy' viết là ?", answer: "67" },
        { question: "Số gồm 2 chục và 2 đơn vị là ?", answer: "22" },
        { question: "Số đứng giữa 29 và 31 là ?", answer: "30" },
        { question: "4 chục và ? đơn vị bằng 48.", answer: "8" },
        { question: "Có ? chục trong số 90.", answer: "9" },
        { question: "Điền số tiếp theo: 10, 20, 30, ?", answer: "40" },
        { question: "Số quả dâu tây là ?", answer: "14", visual: { type: 'counting', items: ['🍓'], count: 14 } },
        { question: "Số bé nhất có hai chữ số là ?", answer: "10" }
      ]
    }
  },
  {
    id: 22,
    title: "Bài 22: So sánh số có hai chữ số",
    icon: "⚖️",
    raw_html: `
      <div class='space-y-4'>
        <p><b>Quy tắc so sánh:</b></p>
        <p>1. So sánh <b>hàng chục</b>: Số nào có hàng chục lớn hơn thì số đó lớn hơn.</p>
        <p>2. Nếu hàng chục bằng nhau: So sánh <b>hàng đơn vị</b>.</p>
      </div>
    `,
    sections: {
      trac_nghiem: [
        { question: "Số nào lớn hơn trong cặp (35, 53)?", options: ["35", "53", "Bằng nhau", "Không biết"], answer: "53" },
        { question: "Điền dấu thích hợp: 42 ... 47", options: [">", "<", "=", "+"], answer: "<" },
        { question: "Số bé nhất trong các số 21, 12, 32 là?", options: ["21", "12", "32", "1"], answer: "12" },
        { question: "Tìm số lớn nhất trong hình khối:", options: ["25", "30", "15", "10"], answer: "30", visual: { type: 'blocks', value: { tens: 3, ones: 0 } } },
        { question: "Sắp xếp từ bé đến lớn: 10, 30, 20?", options: ["10, 20, 30", "30, 20, 10", "10, 30, 20", "20, 10, 30"], answer: "10, 20, 30" },
        { question: "Số nào lớn hơn 50 nhưng nhỏ hơn 52?", options: ["49", "50", "51", "53"], answer: "51" },
        { question: "So sánh 4 chục và 40 đơn vị?", options: [">", "<", "=", "Không rõ"], answer: "=" },
        { question: "Số lớn nhất có 2 chữ số là?", options: ["90", "99", "100", "91"], answer: "99" },
        { question: "Nhìn trục số, số nào lớn hơn 30?", options: ["20", "10", "40", "0"], answer: "40", visual: { type: 'number_line', value: 40 } },
        { question: "76 ... 67. Dấu cần điền là?", options: [">", "<", "=", "x"], answer: ">" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "25 > 52", isCorrect: false },
          { text: "30 < 40", isCorrect: true },
          { text: "Chữ số hàng chục của 81 lớn hơn 18.", isCorrect: true },
          { text: "88 = 88", isCorrect: true },
          { text: "Số 9 lớn hơn số 10.", isCorrect: false },
          { text: "1 chục > 9 đơn vị.", isCorrect: true },
          { text: "99 là số lớn nhất.", isCorrect: false },
          { text: "45 < 41", isCorrect: false },
          { text: "Số tròn chục 70 > 60.", isCorrect: true },
          { text: "Số 0 bé nhất.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Số lớn nhất trong các số 12, 18, 32 là ?", answer: "32" },
        { question: "Điền dấu > hoặc < : 25 ... 52", answer: "<" },
        { question: "Số nào đứng trước số 100?", answer: "99" },
        { question: "Số bé nhất trong các số 40, 30, 50 là ?", answer: "30" },
        { question: "Số chẵn đứng sau 2 là ?", answer: "4" },
        { question: "56 ... 65. Điền dấu < hoặc > ?", answer: "<" },
        { question: "Số tròn chục đứng sau 80 là ?", answer: "90" },
        { question: "9 chục ... 90 đơn vị. Điền dấu =, <, > ?", answer: "=" },
        { question: "Sắp xếp 5, 15, 10 từ bé đến lớn: 5, ?, 15", answer: "10" },
        { question: "Số nhỏ nhất có hai chữ số là ?", answer: "10" }
      ]
    }
  },
  {
    id: 23,
    title: "Bài 23: Bảng các số từ 1 đến 100",
    icon: "📋",
    raw_html: `<p>Bảng số từ 1 đến 100 giúp em thấy thứ tự các số. Các số liên tiếp hơn kém nhau 1 đơn vị.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số đứng sau 89 là?", options: ["88", "90", "91", "100"], answer: "90" },
        { question: "Số tròn chục đứng trước 100 là?", options: ["90", "99", "10", "80"], answer: "90" },
        { question: "Số 100 có mấy chữ số?", options: ["1", "2", "3", "4"], answer: "3" },
        { question: "Đếm nhảy 10: 10, 20, 30, ... số tiếp theo là?", options: ["31", "40", "50", "35"], answer: "40" },
        { question: "Trong bảng số, số nào đứng ngay trước số 1?", options: ["0", "2", "10", "Không có"], answer: "0" },
        { question: "Có bao nhiêu số tròn chục từ 10 đến 100?", options: ["9", "10", "11", "8"], answer: "10" },
        { question: "Số lớn nhất có 2 chữ số?", options: ["100", "99", "90", "91"], answer: "99" },
        { question: "Tìm số trên trục số:", options: ["30", "40", "50", "60"], answer: "50", visual: { type: 'number_line', value: 50 } },
        { question: "Dãy số nào đúng thứ tự?", options: ["1, 2, 3", "3, 2, 1", "1, 3, 2", "0, 5, 2"], answer: "1, 2, 3" },
        { question: "Số 'Một trăm' viết là?", options: ["10", "100", "001", "1000"], answer: "100" }
      ],
      dung_sai: [{
        question: "Kiểm tra bảng số:",
        statements: [
          { text: "Bảng số bắt đầu từ số 1.", isCorrect: true },
          { text: "Số 100 đứng sau số 99.", isCorrect: true },
          { text: "Có 10 số tròn chục từ 10 đến 100.", isCorrect: true },
          { text: "Số 45 đứng trước số 44.", isCorrect: false },
          { text: "Bảng số có 100 số (từ 1-100).", isCorrect: true },
          { text: "Số 0 là số có 1 chữ số.", isCorrect: true },
          { text: "Số liền sau 67 là 66.", isCorrect: false },
          { text: "Số liền trước 100 là 99.", isCorrect: true },
          { text: "Số tròn chục 50 đứng sau 60.", isCorrect: false },
          { text: "Số bé nhất có 3 chữ số là 100.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Số đứng liền sau 99 là ?", answer: "100" },
        { question: "Điền số: 34, 35, ?", answer: "36" },
        { question: "Điền số: 20, 19, ?", answer: "18" },
        { question: "Số gồm 1 trăm, 0 chục, 0 đơn vị là ?", answer: "100" },
        { question: "Có ? số tròn chục từ 10 đến 100.", answer: "10" },
        { question: "Số ngay trước số 10 là ?", answer: "9" },
        { question: "Số lớn nhất có hai chữ số là ?", answer: "99" },
        { question: "Điền số: 97, 98, ?, 100", answer: "99" },
        { question: "Số tròn chục đứng sau 40 là ?", answer: "50" },
        { question: "Số ở vị trí 60 trên trục số là ?", answer: "60", visual: { type: 'number_line', value: 60 } }
      ]
    }
  },
  {
    id: 24,
    title: "Bài 24: Luyện tập chung",
    icon: "🧩",
    raw_html: `<p>Ôn tập tổng hợp về các số trong phạm vi 100: Đọc, viết, cấu tạo số và so sánh.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số 'Năm mươi lăm' viết là?", options: ["55", "505", "50", "15"], answer: "55" },
        { question: "Số nào bé nhất?", options: ["12", "21", "20", "22"], answer: "12" },
        { question: "Tìm số khối vuông:", options: ["42", "24", "40", "20"], answer: "42", visual: { type: 'blocks', value: { tens: 4, ones: 2 } } },
        { question: "Số 67 gồm?", options: ["6 chục và 7 đơn vị", "7 chục và 6 đơn vị", "6 và 7", "60 chục"], answer: "6 chục và 7 đơn vị" },
        { question: "Số tròn chục nào đứng giữa 30 và 50?", options: ["35", "40", "45", "50"], answer: "40" },
        { question: "Đếm số trái tim:", options: ["10", "12", "14", "16"], answer: "12", visual: { type: 'counting', items: ['❤️'], count: 12 } },
        { question: "Số đứng liền trước 80 là?", options: ["79", "81", "70", "80"], answer: "79" },
        { question: "88 ... 98. Điền dấu?", options: [">", "<", "=", "+"], answer: "<" },
        { question: "Số gồm 1 trăm là số?", options: ["10", "100", "1", "0"], answer: "100" },
        { question: "Đọc số 41 là?", options: ["Bốn mươi một", "Bốn mươi mốt", "Bốn một", "Mười bốn"], answer: "Bốn mươi mốt" }
      ],
      dung_sai: [{
        question: "Ôn tập kiến thức:",
        statements: [
          { text: "Số 20 gọi là hai mươi hoặc 2 chục.", isCorrect: true },
          { text: "Số 44 có hai chữ số giống nhau.", isCorrect: true },
          { text: "Số tròn chục luôn tận cùng bằng số 0.", isCorrect: true },
          { text: "Số 100 là số lớn nhất có 2 chữ số.", isCorrect: false },
          { text: "78 < 87", isCorrect: true },
          { text: "Hình có 1 chục khối vuông.", isCorrect: false, visual: { type: 'blocks', value: { tens: 2, ones: 0 } } },
          { text: "Số liền sau 9 là 10.", isCorrect: true },
          { text: "Số gồm 5 chục và 5 đơn vị là 505.", isCorrect: false },
          { text: "15 đọc là mười lăm.", isCorrect: true },
          { text: "Bảng số có 100 số.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Số 'Chín mươi tư' viết là ?", answer: "94" },
        { question: "Số đứng giữa 66 và 68 là ?", answer: "67" },
        { question: "Có tất cả ? khối vuông.", answer: "25", visual: { type: 'blocks', value: { tens: 2, ones: 5 } } },
        { question: "Số tròn chục bé nhất là ?", answer: "10" },
        { question: "Điền số: 40, 50, 60, ?", answer: "70" },
        { question: "Số gồm 8 chục và 1 đơn vị là ?", answer: "81" },
        { question: "Có ? quả dứa.", answer: "13", visual: { type: 'counting', items: ['🍍'], count: 13 } },
        { question: "Số lớn nhất có 1 chữ số là ?", answer: "9" },
        { question: "Điền dấu > hoặc < : 81 ... 18", answer: ">" },
        { question: "Số mười lăm viết là ?", answer: "15" }
      ]
    }
  },
  {
    id: 25,
    title: "Bài 25: Dài hơn, ngắn hơn",
    icon: "📏",
    raw_html: `<p>Để so sánh độ dài, em đặt một đầu của hai vật bằng nhau. Vật nào thò ra dài hơn thì vật đó <b>dài hơn</b>.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Cái bút chì này dài bao nhiêu cm?", options: ["5cm", "8cm", "10cm", "12cm"], answer: "8cm", visual: { type: 'ruler', value: 8 } },
        { question: "Dùng thước đo, vật dài hơn là?", options: ["Bút chì", "Thước kẻ", "Cục tẩy", "Ghim giấy"], answer: "Thước kẻ" },
        { question: "Gang tay của mẹ như thế nào so với bé?", options: ["Dài hơn", "Ngắn hơn", "Bằng nhau", "Không biết"], answer: "Dài hơn" },
        { question: "Thước kẻ dài 15cm, bút chì dài 10cm. Cái nào ngắn hơn?", options: ["Thước kẻ", "Bút chì", "Bằng nhau", "Không rõ"], answer: "Bút chì" },
        { question: "Vật dài 5cm trên thước là?", options: ["Bút chì", "Cục tẩy", "Cái kéo", "Quyển vở"], answer: "Bút chì", visual: { type: 'ruler', value: 5 } },
        { question: "Đơn vị xăng-ti-mét viết tắt là?", options: ["m", "cm", "kg", "l"], answer: "cm" },
        { question: "So sánh độ dài bước chân và gang tay?", options: ["Bước chân dài hơn", "Gang tay dài hơn", "Bằng nhau", "Không rõ"], answer: "Bước chân dài hơn" },
        { question: "Vạch số mấy là vạch bắt đầu trên thước?", options: ["1", "0", "10", "100"], answer: "0" },
        { question: "Thanh gỗ 20cm và thanh gỗ 30cm. Thanh nào dài hơn?", options: ["20cm", "30cm", "Bằng nhau", "Không biết"], answer: "30cm" },
        { question: "Nhìn hình, vật dài nhất là?", options: ["A", "B", "C", "D"], answer: "A", visual: { type: 'ruler', value: 10 } }
      ],
      dung_sai: [{
        question: "So sánh độ dài:",
        statements: [
          { text: "Bút bi dài hơn cục tẩy.", isCorrect: true },
          { text: "Thước kẻ luôn ngắn hơn bút chì.", isCorrect: false },
          { text: "Khi đo phải đặt đầu vật sát vạch số 0.", isCorrect: true },
          { text: "Gang tay bé dài khoảng 50cm.", isCorrect: false },
          { text: "Dài 8cm ngắn hơn 10cm.", isCorrect: true },
          { text: "Vật này dài 6cm.", isCorrect: true, visual: { type: 'ruler', value: 6 } },
          { text: "Đơn vị đo độ dài lớp 1 học là 'cm'.", isCorrect: true },
          { text: "Bàn học dài hơn quyển sách.", isCorrect: true },
          { text: "Một bước chân dài khoảng 5cm.", isCorrect: false },
          { text: "Cái kim ngắn hơn cái sào.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Bút chì dài ? cm trong hình.", answer: "7", visual: { type: 'ruler', value: 7 } },
        { question: "Đơn vị đo độ dài xăng-ti-mét viết tắt là ?", answer: "cm" },
        { question: "10cm + 5cm = ? cm", answer: "15" },
        { question: "Số vạch bắt đầu trên thước kẻ là ?", answer: "0" },
        { question: "Cái thước dài 20cm, bút dài 12cm. Thước dài hơn bút ? cm", answer: "8" },
        { question: "Vật đo dài ? cm trên thước.", answer: "4", visual: { type: 'ruler', value: 4 } },
        { question: "20cm - 10cm = ? cm", answer: "10" },
        { question: "Nếu A dài hơn B, B dài hơn C thì A ... hơn C? (dài/ngắn)", answer: "dài" },
        { question: "Một tuần có ? ngày.", answer: "7" },
        { question: "Số vạch cuối cùng trên thước kẻ 10cm là số ?", answer: "10" }
      ]
    }
  },
  {
    id: 26,
    title: "Bài 26: Đơn vị đo độ dài",
    icon: "📐",
    raw_html: `<p>Học về <b>Xăng-ti-mét (cm)</b>. Khi đo, em nhớ đặt vạch số 0 trùng với một đầu của vật nhé!</p>`,
    sections: {
      trac_nghiem: [
        { question: "Xăng-ti-mét viết tắt là?", options: ["cm", "mm", "dm", "m"], answer: "cm" },
        { question: "Tính: 10cm + 20cm = ?", options: ["30", "30cm", "10cm", "20cm"], answer: "30cm" },
        { question: "Dùng thước đo bút chì được 9 vạch. Bút dài?", options: ["9cm", "10cm", "8cm", "0cm"], answer: "9cm", visual: { type: 'ruler', value: 9 } },
        { question: "Số vạch lớn nhất trên thước 10cm là?", options: ["0", "1", "10", "100"], answer: "10" },
        { question: "Để đo quyển vở, em dùng?", options: ["Cân", "Thước", "Đồng hồ", "Lịch"], answer: "Thước" },
        { question: "15cm - 5cm = ?", options: ["10", "10cm", "20cm", "5cm"], answer: "10cm" },
        { question: "Vật dài 3cm là?", options: ["Cục tẩy", "Cái bàn", "Cái giường", "Ô tô"], answer: "Cục tẩy", visual: { type: 'ruler', value: 3 } },
        { question: "Khi đo, đầu vật phải trùng vạch số mấy?", options: ["1", "0", "5", "10"], answer: "0" },
        { question: "2 chục cm là bao nhiêu cm?", options: ["2cm", "20cm", "12cm", "200cm"], answer: "20cm" },
        { question: "Thước kẻ của bé thường dài?", options: ["20cm", "20m", "2cm", "100cm"], answer: "20cm" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "cm là viết tắt của xăng-ti-mét.", isCorrect: true },
          { text: "10cm + 10cm = 20.", isCorrect: false },
          { text: "Thước kẻ dùng để đo độ dài.", isCorrect: true },
          { text: "Vật này dài 5cm.", isCorrect: true, visual: { type: 'ruler', value: 5 } },
          { text: "Đo độ dài phải đặt thước chéo.", isCorrect: false },
          { text: "Số vạch 0 nằm ở đầu thước.", isCorrect: true },
          { text: "8cm > 10cm.", isCorrect: false },
          { text: "Bút chì dài hơn 1cm.", isCorrect: true },
          { text: "Đo bằng thước đo kết quả chính xác.", isCorrect: true },
          { text: "Gang tay bé dài 100cm.", isCorrect: false }
        ]
      }],
      dien_so: [
        { question: "12cm + 3cm = ? cm", answer: "15" },
        { question: "20cm - 10cm = ? cm", answer: "10" },
        { question: "Độ dài bút chì là ? cm", answer: "8", visual: { type: 'ruler', value: 8 } },
        { question: "Xăng-ti-mét viết tắt là ?", answer: "cm" },
        { question: "Số đứng trước 10 trên thước là ?", answer: "9" },
        { question: "Có ? cm trong 1 chục cm.", answer: "10" },
        { question: "Đo vật thấy vạch 6. Vật dài ? cm", answer: "6" },
        { question: "4cm + ? cm = 10cm", answer: "6" },
        { question: "9cm - ? cm = 5cm", answer: "4" },
        { question: "Số vạch bắt đầu là ?", answer: "0" }
      ]
    }
  },
  {
    id: 27,
    title: "Bài 27: Thực hành và trải nghiệm đo độ dài",
    icon: "🚶",
    raw_html: `<p>Bé hãy dùng gang tay, bước chân, que tính để đo các đồ vật trong nhà nhé!</p>`,
    sections: {
      trac_nghiem: [
        { question: "Đo cái bàn bằng gang tay được 5 gang tay. 5 là?", options: ["Kết quả đo", "Số lượng bàn", "Thời gian", "Cân nặng"], answer: "Kết quả đo" },
        { question: "Để đo sân trường, em nên dùng?", options: ["Gang tay", "Bước chân", "Que tính", "Thước kẻ nhỏ"], answer: "Bước chân" },
        { question: "Gang tay của bé khoảng bao nhiêu cm?", options: ["10-15cm", "100cm", "1cm", "50cm"], answer: "10-15cm" },
        { question: "Đo chiều dài quyển vở bằng gì tiện nhất?", options: ["Bước chân", "Gang tay", "Sải tay", "Cái cây"], answer: "Gang tay" },
        { question: "Dùng que tính đo được 3 que tính. Vật dài?", options: ["3 que tính", "3cm", "3 gang tay", "3 bước"], answer: "3 que tính" },
        { question: "Khi đo bằng gang tay, em phải?", options: ["Đặt các gang tay sát nhau", "Đặt cách xa nhau", "Đặt chéo nhau", "Không cần đặt sát"], answer: "Đặt các gang tay sát nhau" },
        { question: "Vật nào dài nhất?", options: ["1 gang tay", "1 bước chân", "1 sải tay", "1 ngón tay"], answer: "1 sải tay" },
        { question: "Số bước chân bé đo từ cổng vào lớp là 20. 20 là?", options: ["Độ dài", "Số học sinh", "Số lớp", "Thời gian"], answer: "Độ dài" },
        { question: "Đo cái bút bằng que tính được?", options: ["1 que tính", "10 que tính", "100 que tính", "0 que tính"], answer: "1 que tính" },
        { question: "Đo bằng thước cm cho kết quả?", options: ["Chính xác nhất", "Không chính xác", "Tạm được", "Sai"], answer: "Chính xác nhất" }
      ],
      dung_sai: [{
        question: "Thực hành đo lường:",
        statements: [
          { text: "Một bước chân bé dài hơn một gang tay.", isCorrect: true },
          { text: "Dùng gang tay đo độ dài không cần sát nhau.", isCorrect: false },
          { text: "Kết quả đo bằng gang tay mỗi người có thể khác nhau.", isCorrect: true },
          { text: "Đo bằng thước kẻ cho kết quả giống nhau.", isCorrect: true },
          { text: "Quyển sách dài khoảng 2 gang tay bé.", isCorrect: true },
          { text: "Bé có thể đo chiều cao bằng gang tay.", isCorrect: true },
          { text: "Đo sân trường bằng gang tay là nhanh nhất.", isCorrect: false },
          { text: "Que tính có thể dùng làm đơn vị đo.", isCorrect: true },
          { text: "10 gang tay dài hơn 2 gang tay.", isCorrect: true },
          { text: "Sải tay là khoảng cách từ vai đến cổ.", isCorrect: false }
        ]
      }],
      dien_so: [
        { question: "Bé đo cái bàn được ? gang tay.", answer: "5" },
        { question: "Chiều dài quyển vở khoảng ? gang tay.", answer: "2" },
        { question: "Đo bút chì bằng que tính được ? que tính.", answer: "1" },
        { question: "Bước chân bé dài hơn gang tay bé khoảng ? cm.", answer: "10" },
        { question: "Đo cái giường được ? sải tay.", answer: "2" },
        { question: "Dùng ? tay để đo chiều dài mặt bàn.", answer: "gang" },
        { question: "1 sải tay của bé khoảng ? cm.", answer: "100" },
        { question: "Có ? ngày trong một tuần lễ.", answer: "7" },
        { question: "Đo độ dài bằng thước ta dùng đơn vị ? (viết tắt).", answer: "cm" },
        { question: "Số bước chân từ cửa vào bàn là ? bước.", answer: "4" }
      ]
    }
  },
  {
    id: 28,
    title: "Bài 28: Phép cộng (không nhớ) trong phạm vi 100",
    icon: "➕",
    raw_html: `<p>Cộng số có hai chữ số: cộng <b>hàng đơn vị với hàng đơn vị</b>, cộng <b>hàng chục với hàng chục</b>.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Tính: 30 + 20 = ?", options: ["50", "40", "60", "32"], answer: "50" },
        { question: "25 + 4 = ?", options: ["29", "21", "65", "24"], answer: "29" },
        { question: "Tính tổng số khối vuông:", options: ["35", "53", "45", "54"], answer: "35", visual: { type: 'blocks', value: { tens: 3, ones: 5 } } },
        { question: "42 + 13 = ?", options: ["55", "54", "45", "65"], answer: "55" },
        { question: "Kết quả của 60 + 10 là?", options: ["70", "50", "80", "16"], answer: "70" },
        { question: "Tính số ngôi sao: 5 sao xanh + 5 sao đỏ = ?", options: ["10", "15", "5", "0"], answer: "10", visual: { type: 'counting', items: ['⭐', '🌟'], count: 10 } },
        { question: "71 + 8 = ?", options: ["79", "78", "89", "80"], answer: "79" },
        { question: "20 + 30 + 10 = ?", options: ["60", "50", "40", "100"], answer: "60" },
        { question: "Điền số trên trục số: 30 + 20 = ?", options: ["50", "40", "60", "70"], answer: "50", visual: { type: 'number_line', value: 50 } },
        { question: "40 + 5 = ?", options: ["45", "54", "50", "40"], answer: "45" }
      ],
      dung_sai: [{
        question: "Kiểm tra phép tính:",
        statements: [
          { text: "30 + 40 = 70.", isCorrect: true },
          { text: "21 + 5 = 25.", isCorrect: false },
          { text: "50 + 0 = 50.", isCorrect: true },
          { text: "12 + 12 = 24.", isCorrect: true },
          { text: "80 + 10 = 100.", isCorrect: false },
          { text: "Hình có 2 chục + 3 đơn vị = 23 khối.", isCorrect: true, visual: { type: 'blocks', value: { tens: 2, ones: 3 } } },
          { text: "66 + 3 = 69.", isCorrect: true },
          { text: "1 chục + 1 chục = 2 chục.", isCorrect: true },
          { text: "40 + 40 = 90.", isCorrect: false },
          { text: "90 + 5 = 95.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "20 + 30 = ?", answer: "50" },
        { question: "42 + 2 = ?", answer: "44" },
        { question: "60 + ? = 70", answer: "10" },
        { question: "Có tất cả ? khối vuông.", answer: "31", visual: { type: 'blocks', value: { tens: 3, ones: 1 } } },
        { question: "80 + 10 = ?", answer: "90" },
        { question: "15 + 4 = ?", answer: "19" },
        { question: "3 chục + 5 đơn vị = ?", answer: "35" },
        { question: "70 + ? = 100", answer: "30" },
        { question: "Số dâu tây là ? quả.", answer: "12", visual: { type: 'counting', items: ['🍓'], count: 12 } },
        { question: "90 + 9 = ?", answer: "99" }
      ]
    }
  },
  {
    id: 29,
    title: "Bài 29: Phép trừ (không nhớ) trong phạm vi 100",
    icon: "➖",
    raw_html: `<p>Trừ số có hai chữ số: trừ <b>hàng đơn vị cho hàng đơn vị</b>, trừ <b>hàng chục cho hàng chục</b>.</p>`,
    sections: {
      trac_nghiem: [
        { question: "50 - 20 = ?", options: ["30", "40", "70", "20"], answer: "30" },
        { question: "48 - 6 = ?", options: ["42", "40", "32", "54"], answer: "42" },
        { question: "Trừ khối vuông: 45 - 5 = ?", options: ["40", "45", "35", "50"], answer: "40", visual: { type: 'blocks', value: { tens: 4, ones: 5 } } },
        { question: "90 - 40 = ?", options: ["50", "40", "60", "30"], answer: "50" },
        { question: "67 - 12 = ?", options: ["55", "54", "45", "65"], answer: "55" },
        { question: "Tính: 80 - 10 - 10 = ?", options: ["60", "70", "50", "80"], answer: "60" },
        { question: "Số táo còn lại: 10 quả - 3 quả ăn mất = ?", options: ["7", "8", "10", "13"], answer: "7", visual: { type: 'counting', items: ['🍎'], count: 7 } },
        { question: "79 - 8 = ?", options: ["71", "70", "69", "80"], answer: "71" },
        { question: "Điền số trên trục số: 50 - 30 = ?", options: ["20", "30", "10", "40"], answer: "20", visual: { type: 'number_line', value: 20 } },
        { question: "100 - 50 = ?", options: ["50", "40", "60", "100"], answer: "50" }
      ],
      dung_sai: [{
        question: "Phép trừ đúng hay sai?",
        statements: [
          { text: "90 - 30 = 60.", isCorrect: true },
          { text: "45 - 4 = 40.", isCorrect: false },
          { text: "80 - 0 = 80.", isCorrect: true },
          { text: "55 - 11 = 44.", isCorrect: true },
          { text: "100 - 10 = 80.", isCorrect: false },
          { text: "Hình có 4 chục - 2 chục = 20 khối.", isCorrect: true, visual: { type: 'blocks', value: { tens: 4, ones: 0 } } },
          { text: "78 - 8 = 70.", isCorrect: true },
          { text: "Số trừ đi chính nó bằng 0.", isCorrect: true },
          { text: "60 - 40 = 10.", isCorrect: false },
          { text: "39 - 9 = 30.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "70 - 40 = ?", answer: "30" },
        { question: "58 - 8 = ?", answer: "50" },
        { question: "90 - ? = 60", answer: "30" },
        { question: "Số khối vuông còn lại là ?", answer: "22", visual: { type: 'blocks', value: { tens: 2, ones: 2 } } },
        { question: "40 - 10 = ?", answer: "30" },
        { question: "26 - 4 = ?", answer: "22" },
        { question: "100 - ? = 50", answer: "50" },
        { question: "8 chục - 3 chục = ? chục.", answer: "5" },
        { question: "Có 15 quả lê, bé ăn 5 quả, còn ? quả.", answer: "10", visual: { type: 'counting', items: ['🍐'], count: 10 } },
        { question: "99 - 9 = ?", answer: "90" }
      ]
    }
  },
  {
    id: 30,
    title: "Bài 30: Luyện tập chung",
    icon: "🧪",
    raw_html: `<p>Luyện tập kĩ năng cộng, trừ không nhớ trong phạm vi 100.</p>`,
    sections: {
      trac_nghiem: [
        { question: "40 + 50 = ?", options: ["90", "80", "100", "70"], answer: "90" },
        { question: "75 - 5 = ?", options: ["70", "80", "65", "75"], answer: "70" },
        { question: "Cộng khối vuông: 20 + 15 = ?", options: ["35", "25", "45", "15"], answer: "35", visual: { type: 'blocks', value: { tens: 3, ones: 5 } } },
        { question: "Tính nhẩm: 60 - 40 + 20 = ?", options: ["40", "20", "60", "0"], answer: "40" },
        { question: "Số thích hợp: 32 + 7 ... 40?", options: [">", "<", "=", "+"], answer: "<" },
        { question: "Đếm ngôi sao: 10 sao + 4 sao = ?", options: ["14", "10", "4", "24"], answer: "14", visual: { type: 'counting', items: ['🌟'], count: 14 } },
        { question: "88 - 8 + 10 = ?", options: ["90", "80", "100", "70"], answer: "90" },
        { question: "Số tròn chục bé nhất?", options: ["10", "20", "0", "1"], answer: "10" },
        { question: "Nhìn trục số, 40 + 30 = ?", options: ["70", "60", "50", "80"], answer: "70", visual: { type: 'number_line', value: 70 } },
        { question: "95 - 15 = ?", options: ["80", "90", "70", "100"], answer: "80" }
      ],
      dung_sai: [{
        question: "Phép tính đúng sai:",
        statements: [
          { text: "50 + 50 = 100.", isCorrect: true },
          { text: "67 - 7 = 60.", isCorrect: true },
          { text: "40 - 40 = 0.", isCorrect: true },
          { text: "1 chục + 5 đơn vị = 51.", isCorrect: false },
          { text: "80 - 20 = 50.", isCorrect: false },
          { text: "20 + 20 = 40 khối vuông.", isCorrect: true, visual: { type: 'blocks', value: { tens: 4, ones: 0 } } },
          { text: "99 - 9 = 90.", isCorrect: true },
          { text: "30 + 10 = 40.", isCorrect: true },
          { text: "70 - 70 = 1.", isCorrect: false },
          { text: "45 + 5 = 50.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "30 + 60 = ?", answer: "90" },
        { question: "48 - 8 = ?", answer: "40" },
        { question: "25 + ? = 29", answer: "4" },
        { question: "Có ? khối vuông đỏ.", answer: "26", visual: { type: 'blocks', value: { tens: 2, ones: 6 } } },
        { question: "100 - ? = 10", answer: "90" },
        { question: "55 + 4 = ?", answer: "59" },
        { question: "Số chục của 80 là ?", answer: "8" },
        { question: "Điền số: 90, 80, 70, ?", answer: "60" },
        { question: "Có ? bông hoa hồng.", answer: "11", visual: { type: 'counting', items: ['🌹'], count: 11 } },
        { question: "40 + 40 - 10 = ?", answer: "70" }
      ]
    }
  },
  {
    id: 31,
    title: "Bài 31: Hình khối (Lập phương, hộp chữ nhật)",
    icon: "📦",
    raw_html: `<p>Bé hãy phân biệt <b>khối lập phương</b> (giống xúc xắc) và <b>khối hộp chữ nhật</b> (giống hộp sữa, quyển sách) nhé!</p>`,
    sections: {
      trac_nghiem: [
        { question: "Đồ vật nào có dạng khối lập phương?", options: ["Xúc xắc", "Hộp sữa", "Bút chì", "Quả bóng"], answer: "Xúc xắc" },
        { question: "Quyển sách toán có dạng khối gì?", options: ["Khối lập phương", "Khối hộp chữ nhật", "Hình vuông", "Hình tròn"], answer: "Khối hộp chữ nhật" },
        { question: "Khối lập phương có mấy mặt?", options: ["4", "6", "8", "12"], answer: "6" },
        { question: "Hình này là khối gì?", options: ["Khối lập phương", "Khối hộp chữ nhật", "Hình cầu", "Hình vuông"], answer: "Khối lập phương", visual: { type: 'blocks', value: { tens: 0, ones: 1 } } },
        { question: "Tủ lạnh nhà bé thường có dạng khối gì?", options: ["Khối hộp chữ nhật", "Khối lập phương", "Hình cầu", "Hình trụ"], answer: "Khối hộp chữ nhật" },
        { question: "Đồ vật nào giống khối hộp chữ nhật?", options: ["Viên gạch", "Quả cam", "Cái phễu", "Cái nón"], answer: "Viên gạch" },
        { question: "Khối lập phương có các mặt là hình gì?", options: ["Hình vuông", "Hình chữ nhật", "Hình tròn", "Hình tam giác"], answer: "Hình vuông" },
        { question: "Hình bên dưới có mấy khối hộp chữ nhật?", options: ["1", "2", "3", "0"], answer: "2", visual: { type: 'blocks', value: { tens: 2, ones: 0 } } },
        { question: "Bể cá cảnh thường có dạng khối?", options: ["Khối hộp chữ nhật", "Khối lập phương", "Hình tròn", "Không rõ"], answer: "Khối hộp chữ nhật" },
        { question: "Xúc xắc có bao nhiêu chấm ở các mặt cộng lại?", options: ["21", "20", "22", "15"], answer: "21" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "Viên gạch có dạng khối hộp chữ nhật.", isCorrect: true },
          { text: "Quả bóng có dạng khối lập phương.", isCorrect: false },
          { text: "Khối lập phương có 6 mặt bằng nhau.", isCorrect: true },
          { text: "Hộp sữa có dạng khối hộp chữ nhật.", isCorrect: true },
          { text: "Khối hộp chữ nhật chỉ có 4 mặt.", isCorrect: false },
          { text: "Hình lập phương có thể lăn được.", isCorrect: false },
          { text: "Tất cả các mặt của khối lập phương là hình vuông.", isCorrect: true },
          { text: "Bút chì có dạng khối hộp chữ nhật.", isCorrect: false },
          { text: "Khối hộp chữ nhật có 8 đỉnh.", isCorrect: true },
          { text: "Xúc xắc là khối lập phương.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Khối lập phương có ? mặt.", answer: "6" },
        { question: "Hộp phấn có dạng khối ? (lập phương/hộp chữ nhật)", answer: "lập phương" },
        { question: "Khối hộp chữ nhật có ? mặt.", answer: "6" },
        { question: "Có ? khối lập phương trong hình.", answer: "1", visual: { type: 'blocks', value: { tens: 0, ones: 1 } } },
        { question: "Quyển sách là khối hộp ? nhật.", answer: "chữ" },
        { question: "Bể cá là khối hộp ? nhật.", answer: "chữ" },
        { question: "Khối lập phương có ? đỉnh.", answer: "8" },
        { question: "Số mặt của khối hộp chữ nhật là ?", answer: "6" },
        { question: "Vật giống xúc xắc là khối ? phương.", answer: "lập" },
        { question: "Bao diêm là khối hộp ? nhật.", answer: "chữ" }
      ]
    }
  },
  {
    id: 32,
    title: "Bài 32: Các ngày trong tuần",
    icon: "📅",
    raw_html: `<p>Một tuần lễ có <b>7 ngày</b>: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Một tuần lễ có bao nhiêu ngày?", options: ["5", "6", "7", "8"], answer: "7" },
        { question: "Ngày đầu tiên của tuần lễ là?", options: ["Thứ Hai", "Chủ Nhật", "Thứ Bảy", "Thứ Ba"], answer: "Thứ Hai" },
        { question: "Ngày cuối cùng của tuần lễ là?", options: ["Thứ Bảy", "Chủ Nhật", "Thứ Hai", "Thứ Sáu"], answer: "Chủ Nhật" },
        { question: "Sau Thứ Ba là Thứ mấy?", options: ["Thứ Hai", "Thứ Tư", "Thứ Năm", "Chủ Nhật"], answer: "Thứ Tư" },
        { question: "Các ngày nghỉ cuối tuần là?", options: ["Thứ Bảy, Chủ Nhật", "Thứ Hai, Thứ Ba", "Thứ Sáu, Thứ Bảy", "Chủ Nhật"], answer: "Thứ Bảy, Chủ Nhật" },
        { question: "Nếu hôm nay là Thứ Năm, ngày mai là?", options: ["Thứ Sáu", "Thứ Tư", "Thứ Bảy", "Chủ Nhật"], answer: "Thứ Sáu" },
        { question: "Nếu hôm nay là Thứ Hai, hôm qua là?", options: ["Thứ Ba", "Thứ Hai", "Chủ Nhật", "Thứ Bảy"], answer: "Chủ Nhật" },
        { question: "Em đi học vào các ngày nào?", options: ["Thứ Hai đến Thứ Sáu", "Thứ Bảy, Chủ Nhật", "Cả tuần", "Không ngày nào"], answer: "Thứ Hai đến Thứ Sáu" },
        { question: "Giữa Thứ Tư và Thứ Sáu là Thứ mấy?", options: ["Thứ Ba", "Thứ Năm", "Thứ Bảy", "Chủ Nhật"], answer: "Thứ Năm" },
        { question: "Một tháng thường có bao nhiêu tuần?", options: ["1", "2", "4", "10"], answer: "4" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai về thời gian?",
        statements: [
          { text: "Thứ Hai đứng trước Thứ Ba.", isCorrect: true },
          { text: "Một tuần lễ có 10 ngày.", isCorrect: false },
          { text: "Chủ Nhật là ngày cuối tuần.", isCorrect: true },
          { text: "Sau Thứ Bảy là Thứ Tám.", isCorrect: false },
          { text: "Thứ Tư đứng giữa Thứ Ba và Thứ Năm.", isCorrect: true },
          { text: "Bé nghỉ học vào Thứ Bảy và Chủ Nhật.", isCorrect: true },
          { text: "Thứ Sáu là ngày cuối tuần.", isCorrect: false },
          { text: "Một tuần có 7 ngày.", isCorrect: true },
          { text: "Hôm nay là Thứ Ba thì ngày mai là Thứ Tư.", isCorrect: true },
          { text: "Hôm qua là Thứ Hai thì hôm nay là Thứ Ba.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Một tuần lễ có ? ngày.", answer: "7" },
        { question: "Sau Thứ Sáu là Thứ ?", answer: "Bảy" },
        { question: "Trước Thứ Hai là Chủ ?", answer: "Nhật" },
        { question: "Thứ Hai rồi đến Thứ ?", answer: "Ba" },
        { question: "Bé đi học ? ngày trong tuần.", answer: "5" },
        { question: "Ngày nghỉ là Thứ Bảy và Chủ ?", answer: "Nhật" },
        { question: "Thứ ? đứng giữa Thứ Hai và Thứ Tư.", answer: "Ba" },
        { question: "Hôm nay Thứ Năm, ngày mai Thứ ?", answer: "Sáu" },
        { question: "Hôm nay Thứ Hai, hôm qua là Chủ ?", answer: "Nhật" },
        { question: "Một tháng có khoảng ? tuần.", answer: "4" }
      ]
    }
  },
  {
    id: 33,
    title: "Bài 33: Giờ đúng trên đồng hồ",
    icon: "⏰",
    raw_html: `<p>Bé hãy nhớ: <b>Kim ngắn chỉ giờ</b>, <b>Kim dài chỉ phút</b>. Khi kim dài chỉ vào số 12, đó là giờ đúng!</p>`,
    sections: {
      trac_nghiem: [
        { question: "Đồng hồ chỉ mấy giờ?", options: ["3 giờ", "12 giờ", "6 giờ", "9 giờ"], answer: "3 giờ", visual: { type: 'clock', value: 3 } },
        { question: "Lúc 7 giờ đúng, kim dài chỉ vào số nào?", options: ["7", "12", "6", "1"], answer: "12" },
        { question: "Đồng hồ này chỉ mấy giờ?", options: ["10 giờ", "12 giờ", "2 giờ", "5 giờ"], answer: "10 giờ", visual: { type: 'clock', value: 10 } },
        { question: "Kim ngắn chỉ số 6, kim dài chỉ số 12 là mấy giờ?", options: ["6 giờ", "12 giờ", "9 giờ", "3 giờ"], answer: "6 giờ" },
        { question: "Bé ngủ dậy lúc 6 giờ sáng. Đồng hồ nào đúng?", options: ["Đồng hồ 6h", "Đồng hồ 12h", "Đồng hồ 3h", "Đồng hồ 9h"], answer: "Đồng hồ 6h", visual: { type: 'clock', value: 6 } },
        { question: "Lúc 12 giờ đúng, hai kim đồng hồ như thế nào?", options: ["Trùng nhau", "Thẳng hàng", "Vuông góc", "Rời nhau"], answer: "Trùng nhau" },
        { question: "Kim dài quay nhanh hay chậm hơn kim ngắn?", options: ["Nhanh hơn", "Chậm hơn", "Bằng nhau", "Không quay"], answer: "Nhanh hơn" },
        { question: "Đồng hồ chỉ mấy giờ?", options: ["1 giờ", "2 giờ", "3 giờ", "12 giờ"], answer: "1 giờ", visual: { type: 'clock', value: 1 } },
        { question: "Bé đi ngủ lúc 9 giờ tối. Kim ngắn chỉ số?", options: ["9", "12", "6", "10"], answer: "9" },
        { question: "Trên mặt đồng hồ có bao nhiêu số?", options: ["10", "12", "24", "60"], answer: "12" }
      ],
      dung_sai: [{
        question: "Xem đồng hồ:",
        statements: [
          { text: "Kim ngắn chỉ giờ.", isCorrect: true },
          { text: "Kim dài chỉ số 6 là giờ đúng.", isCorrect: false },
          { text: "Đồng hồ này đang chỉ 5 giờ.", isCorrect: true, visual: { type: 'clock', value: 5 } },
          { text: "Mỗi số trên đồng hồ cách nhau 5 phút.", isCorrect: true },
          { text: "Đồng hồ có 12 số từ 1 đến 12.", isCorrect: true },
          { text: "Lúc 9 giờ, kim dài chỉ số 9.", isCorrect: false },
          { text: "Kim ngắn quay chậm hơn kim dài.", isCorrect: true },
          { text: "Đồng hồ chỉ 12 giờ khi cả hai kim chỉ số 12.", isCorrect: true },
          { text: "8 giờ sáng là lúc bé đi học.", isCorrect: true },
          { text: "Đồng hồ chỉ 2 giờ.", isCorrect: false, visual: { type: 'clock', value: 4 } }
        ]
      }],
      dien_so: [
        { question: "Đồng hồ chỉ ? giờ.", answer: "2", visual: { type: 'clock', value: 2 } },
        { question: "Lúc 8 giờ đúng, kim dài chỉ số ?.", answer: "12" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "11", visual: { type: 'clock', value: 11 } },
        { question: "Kim ngắn chỉ giờ, kim ? chỉ phút.", answer: "dài" },
        { question: "Lúc 12 giờ, kim ngắn chỉ số ?.", answer: "12" },
        { question: "Bé đi học lúc ? giờ sáng.", answer: "7" },
        { question: "Mặt đồng hồ có ? số.", answer: "12" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "9", visual: { type: 'clock', value: 9 } },
        { question: "9 giờ tối là ? giờ đêm.", answer: "21" },
        { question: "Lúc ? giờ đúng thì hai kim trùng nhau.", answer: "12" }
      ]
    }
  },
  {
    id: 34,
    title: "Bài 34: Luyện tập chung",
    icon: "🔄",
    raw_html: `<p>Ôn tập về thời gian, thứ ngày và cách xem đồng hồ giờ đúng.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Ngày nghỉ cuối tuần là?", options: ["Thứ Bảy", "Thứ Hai", "Thứ Tư", "Thứ Năm"], answer: "Thứ Bảy" },
        { question: "Đồng hồ chỉ 4 giờ. Kim ngắn chỉ số mấy?", options: ["4", "12", "6", "1"], answer: "4", visual: { type: 'clock', value: 4 } },
        { question: "Một tuần có mấy ngày?", options: ["7", "5", "6", "8"], answer: "7" },
        { question: "Sau Thứ Năm là Thứ mấy?", options: ["Thứ Sáu", "Thứ Tư", "Thứ Bảy", "Chủ Nhật"], answer: "Thứ Sáu" },
        { question: "Đồng hồ chỉ mấy giờ?", options: ["8 giờ", "12 giờ", "4 giờ", "2 giờ"], answer: "8 giờ", visual: { type: 'clock', value: 8 } },
        { question: "Bé đi học từ Thứ mấy?", options: ["Thứ Hai", "Thứ Bảy", "Chủ Nhật", "Thứ Năm"], answer: "Thứ Hai" },
        { question: "Lúc 1 giờ đúng, kim dài chỉ số?", options: ["12", "1", "6", "11"], answer: "12" },
        { question: "Nếu hôm nay Thứ Ba, hôm qua là?", options: ["Thứ Hai", "Thứ Tư", "Thứ Năm", "Chủ Nhật"], answer: "Thứ Hai" },
        { question: "Đồng hồ chỉ 12 giờ.", options: ["Hai kim trùng nhau", "Hai kim thẳng hàng", "Hai kim vuông góc", "Không rõ"], answer: "Hai kim trùng nhau", visual: { type: 'clock', value: 12 } },
        { question: "Một tuần có bao nhiêu ngày đi học?", options: ["5", "7", "2", "0"], answer: "5" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "Một tuần có 7 ngày.", isCorrect: true },
          { text: "Thứ Bảy là ngày đi học.", isCorrect: false },
          { text: "Đồng hồ chỉ 3 giờ.", isCorrect: true, visual: { type: 'clock', value: 3 } },
          { text: "Kim dài chỉ phút.", isCorrect: true },
          { text: "Sau Chủ Nhật là Thứ Hai.", isCorrect: true },
          { text: "Trước Thứ Hai là Thứ Ba.", isCorrect: false },
          { text: "Lúc 6 giờ, kim dài chỉ số 12.", isCorrect: true },
          { text: "Kim ngắn chỉ phút.", isCorrect: false },
          { text: "Đồng hồ chỉ 10 giờ.", isCorrect: true, visual: { type: 'clock', value: 10 } },
          { text: "Thứ Năm đứng sau Thứ Tư.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Một tuần có ? ngày.", answer: "7" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "5", visual: { type: 'clock', value: 5 } },
        { question: "Hôm nay Thứ Hai, ngày mai Thứ ?.", answer: "Ba" },
        { question: "Lúc 10 giờ, kim dài chỉ số ?.", answer: "12" },
        { question: "Bé nghỉ học Thứ Bảy và Chủ ?.", answer: "Nhật" },
        { question: "Sau Thứ Sáu là Thứ ?.", answer: "Bảy" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "1", visual: { type: 'clock', value: 1 } },
        { question: "Có ? ngày đi học trong tuần.", answer: "5" },
        { question: "Thứ ? đứng giữa Thứ Tư và Thứ Sáu.", answer: "Năm" },
        { question: "12 giờ đúng kim dài chỉ số ?.", answer: "12" }
      ]
    }
  },
  {
    id: 35,
    title: "Bài 35: Các số đến 100 (Ôn tập)",
    icon: "💯",
    raw_html: `<p>Ôn tập các số đến 100: Cấu tạo số, thứ tự số và cách so sánh các số.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số lớn nhất có 2 chữ số là?", options: ["99", "100", "90", "10"], answer: "99" },
        { question: "Số bé nhất có 2 chữ số là?", options: ["10", "11", "1", "0"], answer: "10" },
        { question: "Số đứng trước 100 là?", options: ["99", "90", "10", "1"], answer: "99" },
        { question: "Số tròn chục nào lớn nhất?", options: ["90", "100", "10", "80"], answer: "90" },
        { question: "Tìm số trên trục số:", options: ["80", "90", "70", "100"], answer: "80", visual: { type: 'number_line', value: 80 } },
        { question: "45 gồm?", options: ["4 chục và 5 đơn vị", "5 chục và 4 đơn vị", "4 và 5", "40"], answer: "4 chục và 5 đơn vị" },
        { question: "Số nào lớn hơn 88?", options: ["87", "89", "80", "18"], answer: "89" },
        { question: "Số lượng ngôi sao là?", options: ["20", "25", "30", "15"], answer: "20", visual: { type: 'counting', items: ['⭐'], count: 20 } },
        { question: "Đọc số 71 là?", options: ["Bảy mươi một", "Bảy mươi mốt", "Bảy một", "Mười bảy"], answer: "Bảy mươi mốt" },
        { question: "Có mấy chục trong số 100?", options: ["10", "1", "100", "0"], answer: "10" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "99 bé hơn 100.", isCorrect: true },
          { text: "Số tròn chục bé nhất là 0.", isCorrect: false },
          { text: "Hình có 5 chục khối vuông.", isCorrect: true, visual: { type: 'blocks', value: { tens: 5, ones: 0 } } },
          { text: "Số 100 có 3 chữ số.", isCorrect: true },
          { text: "Số 25 gồm 5 chục và 2 đơn vị.", isCorrect: false },
          { text: "Số đứng sau 49 là 50.", isCorrect: true },
          { text: "Bảng số 1-100 có 100 số.", isCorrect: true },
          { text: "Số bé nhất có 1 chữ số là 0.", isCorrect: true },
          { text: "Số 80 đọc là tám mươi.", isCorrect: true },
          { text: "77 > 88.", isCorrect: false }
        ]
      }],
      dien_so: [
        { question: "Số lớn nhất có hai chữ số là ?", answer: "99" },
        { question: "Số tròn chục đứng sau 80 là ?", answer: "90" },
        { question: "Điền số: 88, 89, ?", answer: "90" },
        { question: "Có ? khối vuông đỏ.", answer: "45", visual: { type: 'blocks', value: { tens: 4, ones: 5 } } },
        { question: "Số gồm 6 chục và 6 đơn vị là ?", answer: "66" },
        { question: "Số đứng giữa 98 và 100 là ?", answer: "99" },
        { question: "Có ? quả dứa.", answer: "12", visual: { type: 'counting', items: ['🍍'], count: 12 } },
        { question: "Số mười lăm viết là ?", answer: "15" },
        { question: "Điền dấu > hoặc < : 91 ... 19", answer: ">" },
        { question: "Số tròn chục đứng trước 20 là ?", answer: "10" }
      ]
    }
  },
  {
    id: 36,
    title: "Bài 36: Ôn tập phép cộng, phép trừ",
    icon: "🧮",
    raw_html: `<p>Ôn tập các phép tính cộng, trừ không nhớ trong phạm vi 100. Bé hãy nhẩm thật kỹ nhé!</p>`,
    sections: {
      trac_nghiem: [
        { question: "40 + 30 = ?", options: ["70", "60", "80", "10"], answer: "70" },
        { question: "85 - 5 = ?", options: ["80", "90", "75", "85"], answer: "80" },
        { question: "Tính: 10 + 20 + 30 = ?", options: ["60", "50", "40", "100"], answer: "60" },
        { question: "Kết quả của 77 - 7 là?", options: ["70", "77", "80", "60"], answer: "70" },
        { question: "Trên trục số: 40 + 20 = ?", options: ["60", "50", "70", "40"], answer: "60", visual: { type: 'number_line', value: 60 } },
        { question: "42 + 6 = ?", options: ["48", "46", "58", "42"], answer: "48" },
        { question: "Tính số quả: 10 táo + 5 cam = ?", options: ["15", "10", "5", "20"], answer: "15", visual: { type: 'counting', items: ['🍎', '🍊'], count: 15 } },
        { question: "90 - 40 = ?", options: ["50", "40", "60", "30"], answer: "50" },
        { question: "Cộng khối vuông: 30 + 10 = ?", options: ["40", "30", "50", "10"], answer: "40", visual: { type: 'blocks', value: { tens: 4, ones: 0 } } },
        { question: "100 - 50 = ?", options: ["50", "40", "60", "100"], answer: "50" }
      ],
      dung_sai: [{
        question: "Phép tính đúng sai:",
        statements: [
          { text: "20 + 20 = 40.", isCorrect: true },
          { text: "55 - 5 = 5.", isCorrect: false },
          { text: "80 + 0 = 80.", isCorrect: true },
          { text: "1 chục + 1 chục = 20.", isCorrect: true },
          { text: "45 + 4 = 49.", isCorrect: true },
          { text: "90 - 90 = 0.", isCorrect: true },
          { text: "15 - 5 = 0.", isCorrect: false },
          { text: "30 + 30 = 60 khối.", isCorrect: true, visual: { type: 'blocks', value: { tens: 6, ones: 0 } } },
          { text: "70 - 10 = 50.", isCorrect: false },
          { text: "100 - 50 = 50.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "50 + 40 = ?", answer: "90" },
        { question: "78 - 8 = ?", answer: "70" },
        { question: "20 + ? = 100", answer: "80" },
        { question: "Có ? khối vuông.", answer: "35", visual: { type: 'blocks', value: { tens: 3, ones: 5 } } },
        { question: "90 - ? = 40", answer: "50" },
        { question: "11 + 8 = ?", answer: "19" },
        { question: "4 chục + 4 chục = ? chục.", answer: "8" },
        { question: "60 + 5 = ?", answer: "65" },
        { question: "Bé có 10 kẹo, mẹ cho thêm 5 kẹo, có ? kẹo.", answer: "15", visual: { type: 'counting', items: ['🍬'], count: 15 } },
        { question: "100 - 100 = ?", answer: "0" }
      ]
    }
  },
  {
    id: 37,
    title: "Bài 37: Ôn tập hình học và đo lường",
    icon: "📐",
    raw_html: `<p>Ôn tập về các hình phẳng (tam giác, vuông, tròn, chữ nhật), hình khối và đo độ dài bằng cm.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Hình nào có 3 cạnh?", options: ["Hình tam giác", "Hình vuông", "Hình tròn", "Hình chữ nhật"], answer: "Hình tam giác", visual: { type: 'shapes', value: 'triangle' } },
        { question: "Viên gạch là khối gì?", options: ["Khối hộp chữ nhật", "Khối lập phương", "Hình tròn", "Hình tam giác"], answer: "Khối hộp chữ nhật" },
        { question: "Hình vuông có mấy cạnh?", options: ["4", "3", "5", "0"], answer: "4", visual: { type: 'shapes', value: 'square' } },
        { question: "Đo bút chì thấy vạch 10cm. Bút dài?", options: ["10cm", "9cm", "11cm", "0cm"], answer: "10cm", visual: { type: 'ruler', value: 10 } },
        { question: "Đồ vật nào giống hình tròn?", options: ["Đĩa nhạc", "Cái bàn vuông", "Quyển sách", "Cái bút"], answer: "Đĩa nhạc", visual: { type: 'shapes', value: 'circle' } },
        { question: "Xúc xắc là khối?", options: ["Khối lập phương", "Khối hộp chữ nhật", "Hình cầu", "Hình vuông"], answer: "Khối lập phương" },
        { question: "Hình chữ nhật có mấy cạnh?", options: ["4", "3", "6", "2"], answer: "4", visual: { type: 'shapes', value: 'rectangle' } },
        { question: "Thước kẻ dùng để?", options: ["Đo độ dài", "Xem giờ", "Cân nặng", "Đếm số"], answer: "Đo độ dài" },
        { question: "Hình nào có các cạnh bằng nhau?", options: ["Hình vuông", "Hình tròn", "Hình chữ nhật", "Không hình nào"], answer: "Hình vuông" },
        { question: "Bút chì dài 5cm. Vẽ thêm 2cm là?", options: ["7cm", "5cm", "2cm", "3cm"], answer: "7cm", visual: { type: 'ruler', value: 7 } }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "Hình tam giác có 3 đỉnh.", isCorrect: true },
          { text: "Hình vuông có 4 cạnh bằng nhau.", isCorrect: true },
          { text: "Khối lập phương có 6 mặt.", isCorrect: true },
          { text: "Thước kẻ đo bằng đơn vị 'kg'.", isCorrect: false },
          { text: "Hình tròn không có cạnh.", isCorrect: true },
          { text: "Vật này dài 4cm.", isCorrect: true, visual: { type: 'ruler', value: 4 } },
          { text: "Hình chữ nhật giống hình vuông.", isCorrect: false },
          { text: "Xúc xắc là khối hộp chữ nhật.", isCorrect: false },
          { text: "Bàn học dài hơn bút chì.", isCorrect: true },
          { text: "Hình này là hình tam giác.", isCorrect: true, visual: { type: 'shapes', value: 'triangle', color: 'blue' } }
        ]
      }],
      dien_so: [
        { question: "Hình vuông có ? cạnh.", answer: "4" },
        { question: "Hình tam giác có ? cạnh.", answer: "3" },
        { question: "Khối lập phương có ? mặt.", answer: "6" },
        { question: "Độ dài bút chì là ? cm.", answer: "6", visual: { type: 'ruler', value: 6 } },
        { question: "Hộp sữa là khối hộp ? nhật.", answer: "chữ" },
        { question: "Đo vạch 9 là ? cm.", answer: "9" },
        { question: "Hình tròn không có ?.", answer: "cạnh" },
        { question: "Hình có 4 cạnh bằng nhau là hình ?.", answer: "vuông" },
        { question: "Xúc xắc là khối ? phương.", answer: "lập" },
        { question: "Có ? cm trong 1 chục cm.", answer: "10" }
      ]
    }
  },
  {
    id: 38,
    title: "Bài 38: Ôn tập chung (1)",
    icon: "📚",
    raw_html: `<p>Ôn tập tổng hợp về số, phép tính và hình học trong học kì 2.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số 'Tám mươi lăm' viết là?", options: ["85", "58", "805", "15"], answer: "85" },
        { question: "40 + 50 - 10 = ?", options: ["80", "90", "100", "70"], answer: "80" },
        { question: "Vật dài 8cm là?", options: ["Bút chì", "Thước", "Cục tẩy", "Keo dán"], answer: "Bút chì", visual: { type: 'ruler', value: 8 } },
        { question: "Khối lập phương có mấy mặt?", options: ["6", "4", "8", "12"], answer: "6" },
        { question: "Số bé nhất có 2 chữ số?", options: ["10", "11", "1", "0"], answer: "10" },
        { question: "Hình tam giác có mấy cạnh?", options: ["3", "4", "0", "1"], answer: "3", visual: { type: 'shapes', value: 'triangle' } },
        { question: "Một tuần có mấy ngày?", options: ["7", "5", "6", "10"], answer: "7" },
        { question: "Đồng hồ chỉ mấy giờ?", options: ["5 giờ", "12 giờ", "6 giờ", "10 giờ"], answer: "5 giờ", visual: { type: 'clock', value: 5 } },
        { question: "90 - 40 = ?", options: ["50", "40", "60", "30"], answer: "50" },
        { question: "Số chục của 75 là?", options: ["7", "5", "70", "75"], answer: "7" }
      ],
      dung_sai: [{
        question: "Ôn tập kiến thức:",
        statements: [
          { text: "99 là số lớn nhất có 2 chữ số.", isCorrect: true },
          { text: "Hình tròn có 4 cạnh.", isCorrect: false },
          { text: "100 - 50 = 50.", isCorrect: true },
          { text: "Xúc xắc là khối hộp chữ nhật.", isCorrect: false },
          { text: "Một tuần có 7 ngày.", isCorrect: true },
          { text: "Hình có 2 chục khối vuông.", isCorrect: true, visual: { type: 'blocks', value: { tens: 2, ones: 0 } } },
          { text: "Kim dài chỉ giờ.", isCorrect: false },
          { text: "Số tròn chục bé nhất là 10.", isCorrect: true },
          { text: "45 < 54.", isCorrect: true },
          { text: "cm là đơn vị đo độ dài.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "30 + 40 = ?", answer: "70" },
        { question: "90 - ? = 50", answer: "40" },
        { question: "Có ? khối vuông.", answer: "24", visual: { type: 'blocks', value: { tens: 2, ones: 4 } } },
        { question: "Đồng hồ chỉ ? giờ.", answer: "10", visual: { type: 'clock', value: 10 } },
        { question: "Số đứng sau 99 là ?", answer: "100" },
        { question: "1 tuần có ? ngày.", answer: "7" },
        { question: "Hình vuông có ? cạnh.", answer: "4" },
        { question: "Số gồm 5 chục và 1 đơn vị là ?", answer: "51" },
        { question: "Có ? quả dứa.", answer: "15", visual: { type: 'counting', items: ['🍍'], count: 15 } },
        { question: "20cm + 10cm = ? cm", answer: "30" }
      ]
    }
  },
  {
    id: 39,
    title: "Bài 39: Ôn tập chung (2)",
    icon: "📝",
    raw_html: `<p>Tiếp tục ôn tập các kiến thức về thời gian, hình khối và bài toán có lời văn.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Lan có 10 kẹo, Mai có 5 kẹo. Cả hai có?", options: ["15", "10", "5", "20"], answer: "15" },
        { question: "Sáng nay Thứ Tư, ngày mai Thứ mấy?", options: ["Thứ Năm", "Thứ Ba", "Thứ Sáu", "Chủ Nhật"], answer: "Thứ Năm" },
        { question: "Đồ vật giống khối lập phương là?", options: ["Hộp phấn vuông", "Quyển vở", "Cái bút", "Quả bóng"], answer: "Hộp phấn vuông" },
        { question: "Tính: 80 - 20 - 10 = ?", options: ["50", "60", "40", "70"], answer: "50" },
        { question: "Đồng hồ chỉ 9 giờ. Kim ngắn chỉ số?", options: ["9", "12", "6", "3"], answer: "9", visual: { type: 'clock', value: 9 } },
        { question: "Bé đi học lúc mấy giờ?", options: ["7 giờ sáng", "12 giờ đêm", "6 giờ tối", "Không đi"], answer: "7 giờ sáng" },
        { question: "Số khối vuông là?", options: ["36", "63", "30", "6"], answer: "36", visual: { type: 'blocks', value: { tens: 3, ones: 6 } } },
        { question: "Hình chữ nhật có mấy cạnh?", options: ["4", "3", "0", "1"], answer: "4", visual: { type: 'shapes', value: 'rectangle' } },
        { question: "40cm + 5cm = ?", options: ["45cm", "40cm", "5cm", "50cm"], answer: "45cm" },
        { question: "Số 100 đọc là?", options: ["Một trăm", "Mười chục", "Một nghìn", "Mười"], answer: "Một trăm" }
      ],
      dung_sai: [{
        question: "Đúng hay Sai?",
        statements: [
          { text: "Bé nghỉ học vào Thứ Bảy.", isCorrect: true },
          { text: "1 chục bằng 10 đơn vị.", isCorrect: true },
          { text: "Hình tròn có 1 cạnh cong.", isCorrect: true },
          { text: "Đồng hồ chỉ 6 giờ đúng.", isCorrect: true, visual: { type: 'clock', value: 6 } },
          { text: "90 - 0 = 0.", isCorrect: false },
          { text: "Số liền trước 50 là 49.", isCorrect: true },
          { text: "Khối hộp chữ nhật có 4 mặt.", isCorrect: false },
          { text: "Một tuần lễ có 7 ngày.", isCorrect: true },
          { text: "44 là số có hai chữ số giống nhau.", isCorrect: true },
          { text: "Hình này có 12 ngôi sao.", isCorrect: true, visual: { type: 'counting', items: ['⭐'], count: 12 } }
        ]
      }],
      dien_so: [
        { question: "15 + 4 = ?", answer: "19" },
        { question: "20 - 10 = ?", answer: "10" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "3", visual: { type: 'clock', value: 3 } },
        { question: "Một tuần lễ có ? ngày.", answer: "7" },
        { question: "Có ? khối vuông đỏ.", answer: "21", visual: { type: 'blocks', value: { tens: 2, ones: 1 } } },
        { question: "Số 'Tám mươi' viết là ?", answer: "80" },
        { question: "Hôm nay Thứ Năm, ngày mai Thứ ?.", answer: "Sáu" },
        { question: "100 - ? = 50", answer: "50" },
        { question: "Có ? chú cá.", answer: "10", visual: { type: 'counting', items: ['🐟'], count: 10 } },
        { question: "Hình tam giác có ? cạnh.", answer: "3" }
      ]
    }
  },
  {
    id: 40,
    title: "Bài 40: Ôn tập cuối học kì 2",
    icon: "⏳",
    raw_html: `<p>Ôn tập kiến thức trọng tâm học kì 2 chuẩn bị cho bài kiểm tra cuối năm.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số lớn nhất trong các số: 70, 90, 80, 100?", options: ["70", "90", "80", "100"], answer: "100" },
        { question: "Đồng hồ chỉ 11 giờ. Kim ngắn chỉ số?", options: ["11", "12", "6", "1"], answer: "11", visual: { type: 'clock', value: 11 } },
        { question: "Tính: 45 + 4 = ?", options: ["49", "41", "54", "44"], answer: "49" },
        { question: "Hình nào không có cạnh?", options: ["Hình tròn", "Hình vuông", "Hình tam giác", "Hình chữ nhật"], answer: "Hình tròn", visual: { type: 'shapes', value: 'circle' } },
        { question: "Số tròn chục bé nhất?", options: ["10", "20", "0", "100"], answer: "10" },
        { question: "Bé đo thước được 12 vạch. Bút dài?", options: ["12cm", "11cm", "13cm", "12"], answer: "12cm", visual: { type: 'ruler', value: 12 } },
        { question: "Một tuần có mấy ngày đi học?", options: ["5", "7", "2", "6"], answer: "5" },
        { question: "Số khối vuông là?", options: ["52", "25", "50", "20"], answer: "52", visual: { type: 'blocks', value: { tens: 5, ones: 2 } } },
        { question: "99 - 9 = ?", options: ["90", "99", "100", "9"], answer: "90" },
        { question: "Đọc số 81 là?", options: ["Tám mươi mốt", "Tám mươi một", "Tám một", "Mười tám"], answer: "Tám mươi mốt" }
      ],
      dung_sai: [{
        question: "Kiểm tra kiến thức cuối kì:",
        statements: [
          { text: "Thứ Bảy là ngày nghỉ.", isCorrect: true },
          { text: "100 có 3 chữ số.", isCorrect: true },
          { text: "6 giờ chiều là lúc bé đi học.", isCorrect: false },
          { text: "Khối lập phương giống xúc xắc.", isCorrect: true },
          { text: "Hình vuông có 3 cạnh.", isCorrect: false },
          { text: "40 + 40 = 80.", isCorrect: true },
          { text: "Số lượng táo là 15 quả.", isCorrect: true, visual: { type: 'counting', items: ['🍎'], count: 15 } },
          { text: "Kim ngắn chỉ giờ.", isCorrect: true },
          { text: "cm là đơn vị đo thời gian.", isCorrect: false },
          { text: "Số liền trước 10 là 9.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "60 + 30 = ?", answer: "90" },
        { question: "88 - 8 = ?", answer: "80" },
        { question: "Số gồm 9 chục và 9 đơn vị là ?", answer: "99" },
        { question: "Đồng hồ chỉ ? giờ.", answer: "4", visual: { type: 'clock', value: 4 } },
        { question: "Một tuần có ? ngày.", answer: "7" },
        { question: "Có ? khối lập phương đỏ.", answer: "33", visual: { type: 'blocks', value: { tens: 3, ones: 3 } } },
        { question: "Số đứng trước 100 là ?", answer: "99" },
        { question: "Hình tam giác có ? đỉnh.", answer: "3" },
        { question: "40cm + 10cm = ? cm", answer: "50" },
        { question: "Có ? chục trong 100.", answer: "10" }
      ]
    }
  },
  {
    id: 41,
    title: "Bài 41: Ôn tập cuối năm",
    icon: "🎓",
    raw_html: `<p>Chúc mừng bé đã hoàn thành năm học lớp 1! Hãy ôn tập tổng hợp để sẵn sàng lên lớp 2 nhé.</p>`,
    sections: {
      trac_nghiem: [
        { question: "Số lớn nhất có 2 chữ số?", options: ["99", "100", "90", "10"], answer: "99" },
        { question: "Tính: 100 - 50 = ?", options: ["50", "40", "60", "100"], answer: "50" },
        { question: "Đồng hồ chỉ 12 giờ đúng.", options: ["Hai kim trùng nhau", "Hai kim thẳng hàng", "Hai kim vuông góc", "Không rõ"], answer: "Hai kim trùng nhau", visual: { type: 'clock', value: 12 } },
        { question: "Hình vuông có mấy cạnh?", options: ["4", "3", "5", "0"], answer: "4", visual: { type: 'shapes', value: 'square' } },
        { question: "Bé đo thước được 10 vạch. Bút dài?", options: ["10cm", "9cm", "11cm", "0cm"], answer: "10cm", visual: { type: 'ruler', value: 10 } },
        { question: "Một tuần có mấy ngày?", options: ["7", "5", "6", "10"], answer: "7" },
        { question: "Số chục của 85 là?", options: ["8", "5", "80", "85"], answer: "8" },
        { question: "Khối lập phương có mấy mặt?", options: ["6", "4", "8", "12"], answer: "6" },
        { question: "Tìm số trên trục số:", options: ["90", "100", "80", "0"], answer: "90", visual: { type: 'number_line', value: 90 } },
        { question: "Đọc số 100 là?", options: ["Một trăm", "Mười chục", "Một nghìn", "Mười"], answer: "Một trăm" }
      ],
      dung_sai: [{
        question: "Tổng kết kiến thức:",
        statements: [
          { text: "Bé đã học toán rất giỏi!", isCorrect: true },
          { text: "Toán lớp 1 thật thú vị.", isCorrect: true },
          { text: "Số 0 là số bé nhất.", isCorrect: true },
          { text: "Hình tròn có 4 cạnh.", isCorrect: false },
          { text: "Một tuần lễ có 7 ngày.", isCorrect: true },
          { text: "Hình có 1 trăm khối vuông.", isCorrect: true, visual: { type: 'blocks', value: { tens: 10, ones: 0 } } },
          { text: "100 > 99.", isCorrect: true },
          { text: "Hôm nay Thứ Hai, ngày mai Thứ Ba.", isCorrect: true },
          { text: "Xúc xắc là khối lập phương.", isCorrect: true },
          { text: "Bé chuẩn bị lên lớp 2.", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "50 + 50 = ?", answer: "100" },
        { question: "100 - ? = 10", answer: "90" },
        { question: "Có ? khối vuông.", answer: "42", visual: { type: 'blocks', value: { tens: 4, ones: 2 } } },
        { question: "Đồng hồ chỉ ? giờ.", answer: "12", visual: { type: 'clock', value: 12 } },
        { question: "Một tuần có ? ngày.", answer: "7" },
        { question: "Hình tam giác có ? cạnh.", answer: "3" },
        { question: "Số gồm 1 trăm là ?", answer: "100" },
        { question: "90 + 10 = ?", answer: "100" },
        { question: "Có ? ngôi sao may mắn.", answer: "10", visual: { type: 'counting', items: ['⭐'], count: 10 } },
        { question: "Bé đạt điểm ? cho năm học này.", answer: "10" }
      ]
    }
  }
];
