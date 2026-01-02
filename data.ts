
import { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: 21,
    title: "Bài 21: Số có hai chữ số",
    icon: "🔢",
    raw_html: `<p>Học về chục và đơn vị. Số có hai chữ số gồm chữ số hàng chục và hàng đơn vị.</p>`,
    sections: {
      trac_nghiem: [
        { 
          question: "Có bao nhiêu khối lập phương trong hình?", 
          options: ["23", "32", "20", "3"], 
          answer: "23",
          visual: { type: 'blocks', value: { tens: 2, ones: 3 } }
        },
        { 
          question: "Đếm số bông hoa đỏ dưới đây:", 
          options: ["12", "10", "15", "8"], 
          answer: "12",
          visual: { type: 'counting', items: ['🌹'], count: 12 }
        },
        // Thêm các bài tập khác tương tự...
        ...Array.from({ length: 8 }, (_, i) => ({
           question: `Số gồm ${i+2} chục và 5 đơn vị là?`,
           options: [`${(i+2)*10+5}`, "52", "25", "5"],
           answer: `${(i+2)*10+5}`
        }))
      ],
      dung_sai: [{
        question: "Quan sát hình và chọn Đúng/Sai:",
        statements: [
          { text: "Hình có 3 chục khối vuông", isCorrect: false, visual: { type: 'blocks', value: { tens: 2, ones: 5 } } },
          { text: "Số lượng quả táo là 10", isCorrect: true, visual: { type: 'counting', items: ['🍎'], count: 10 } },
          { text: "Số 40 là số tròn chục", isCorrect: true },
          { text: "Số 15 gồm 5 chục và 1 đơn vị", isCorrect: false },
          { text: "Mỗi bó que tính là 1 chục", isCorrect: true },
          { text: "Số 99 là số lớn nhất có 2 chữ số", isCorrect: true },
          { text: "Đọc số 21 là hai mươi một", isCorrect: false },
          { text: "Số 50 có chữ số hàng đơn vị là 0", isCorrect: true },
          { text: "10 đơn vị bằng 1 chục", isCorrect: true },
          { text: "Số tròn chục bé nhất là 0", isCorrect: false }
        ]
      }],
      dien_so: [
        { question: "Có tất cả ? khối vuông", answer: 34, visual: { type: 'blocks', value: { tens: 3, ones: 4 } } },
        { question: "Số quả cam bé đếm được là ?", answer: 15, visual: { type: 'counting', items: ['🍊'], count: 15 } },
        ...Array.from({ length: 8 }, (_, i) => ({
           question: `Điền số: ${20+i}, ${21+i}, ?`,
           answer: 22+i
        }))
      ]
    }
  },
  {
    id: 31,
    title: "Bài 31: Hình khối",
    icon: "📦",
    raw_html: `<p>Khối lập phương và khối hộp chữ nhật.</p>`,
    sections: {
      trac_nghiem: [
        { 
          question: "Vật nào có dạng khối lập phương?", 
          options: ["Xúc xắc", "Hộp sữa", "Bút chì", "Quả bóng"], 
          answer: "Xúc xắc",
          visual: { type: 'blocks', value: { tens: 0, ones: 1, style: 'cube' } }
        },
        ...Array.from({ length: 9 }, (_, i) => ({
           question: `Hình có mấy mặt?`,
           options: ["4", "6", "8", "12"],
           answer: "6"
        }))
      ],
      dung_sai: [{
        question: "Chọn Đúng/Sai:",
        statements: [
          { text: "Viên gạch là khối hộp chữ nhật", isCorrect: true },
          { text: "Quả bóng là khối lập phương", isCorrect: false },
          { text: "Khối lập phương có 6 mặt", isCorrect: true },
          { text: "Tủ lạnh thường là khối hộp chữ nhật", isCorrect: true },
          { text: "Khối cầu có cạnh", isCorrect: false },
          { text: "Hộp quà vuông là khối lập phương", isCorrect: true },
          { text: "Bút chì là khối hộp", isCorrect: false },
          { text: "Quyển sách là khối hộp chữ nhật", isCorrect: true },
          { text: "Khối lập phương các mặt đều bằng nhau", isCorrect: true },
          { text: "Mặt khối hộp chữ nhật có thể là hình vuông", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Khối lập phương có ? mặt", answer: 6 },
        ...Array.from({ length: 9 }, (_, i) => ({
           question: `Có ? khối hộp chữ nhật trong hình`,
           answer: 2
        }))
      ]
    }
  },
  {
    id: 33,
    title: "Bài 33: Giờ đúng trên đồng hồ",
    icon: "⏰",
    raw_html: `<p>Khi kim dài chỉ số 12, kim ngắn chỉ vào số nào thì đó là bấy nhiêu giờ.</p>`,
    sections: {
      trac_nghiem: [
        { 
          question: "Đồng hồ chỉ mấy giờ?", 
          options: ["3 giờ", "12 giờ", "6 giờ", "9 giờ"], 
          answer: "3 giờ",
          visual: { type: 'clock', value: 3 }
        },
        { 
          question: "Bé đi học lúc 7 giờ. Đồng hồ nào đúng?", 
          options: ["Đồng hồ A", "Đồng hồ B", "Đồng hồ C", "Đồng hồ D"], 
          answer: "Đồng hồ A",
          visual: { type: 'clock', value: 7 }
        },
        ...Array.from({ length: 8 }, (_, i) => ({
           question: `${(i%12)+1} giờ đúng thì kim dài chỉ số mấy?`,
           options: ["12", "6", "3", "9"],
           answer: "12"
        }))
      ],
      dung_sai: [{
        question: "Quan sát đồng hồ:",
        statements: [
          { text: "Đồng hồ đang chỉ 10 giờ", isCorrect: true, visual: { type: 'clock', value: 10 } },
          { text: "Kim ngắn chỉ giờ, kim dài chỉ phút", isCorrect: true },
          { text: "Khi 12 giờ, hai kim trùng nhau", isCorrect: true },
          { text: "6 giờ đúng kim dài chỉ số 6", isCorrect: false },
          { text: "Mỗi số trên đồng hồ cách nhau 5 phút", isCorrect: true },
          { text: "Đồng hồ có 12 số", isCorrect: true },
          { text: "Kim dài quay nhanh hơn kim ngắn", isCorrect: true },
          { text: "Đồng hồ chỉ 2 giờ", isCorrect: false, visual: { type: 'clock', value: 3 } },
          { text: "Buổi sáng bé ngủ dậy lúc 6 giờ", isCorrect: true },
          { text: "1 giờ chiều là 13 giờ", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Đồng hồ chỉ ? giờ", answer: 5, visual: { type: 'clock', value: 5 } },
        { question: "Lúc 9 giờ, kim ngắn chỉ số ?", answer: 9 },
        ...Array.from({ length: 8 }, (_, i) => ({
           question: `Đồng hồ chỉ ${i+1} giờ thì kim dài chỉ số ?`,
           answer: 12
        }))
      ]
    }
  },
  {
    id: 25,
    title: "Bài 25: Dài hơn, ngắn hơn",
    icon: "📏",
    raw_html: `<p>So sánh độ dài vật dụng bằng thước kẻ.</p>`,
    sections: {
      trac_nghiem: [
        { 
          question: "Cái bút chì dài bao nhiêu cm?", 
          options: ["8cm", "10cm", "5cm", "12cm"], 
          answer: "8cm",
          visual: { type: 'ruler', value: 8 }
        },
        ...Array.from({ length: 9 }, (_, i) => ({
           question: `Vật nào ngắn hơn?`,
           options: ["Bút chì", "Thước kẻ", "Cục tẩy", "Quyển vở"],
           answer: "Cục tẩy"
        }))
      ],
      dung_sai: [{
        question: "So sánh độ dài:",
        statements: [
          { text: "Bút chì dài 10cm", isCorrect: true, visual: { type: 'ruler', value: 10 } },
          { text: "Thước kẻ ngắn hơn bút chì", isCorrect: false },
          { text: "Gang tay bé khoảng 12cm", isCorrect: true },
          { text: "Sân trường đo bằng bước chân", isCorrect: true },
          { text: "Đơn vị đo độ dài là cm", isCorrect: true },
          { text: "Vạch số 0 là vạch bắt đầu", isCorrect: true },
          { text: "Số 5 lớn hơn số 3 nên 5cm > 3cm", isCorrect: true },
          { text: "Đo bằng thước phải đặt chéo vật", isCorrect: false },
          { text: "1 chục cm là 10cm", isCorrect: true },
          { text: "Bút bi dài hơn cục tẩy", isCorrect: true }
        ]
      }],
      dien_so: [
        { question: "Bút chì dài ? cm", answer: 7, visual: { type: 'ruler', value: 7 } },
        ...Array.from({ length: 9 }, (_, i) => ({
           question: `${i+1}cm + 2cm = ? cm`,
           answer: i+3
        }))
      ]
    }
  }
  // Các bài khác sẽ được bổ sung Visual tự động dựa trên Logic tương tự...
];
