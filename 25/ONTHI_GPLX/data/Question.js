export const data = [
    {
        "id": 1,
        "type": "Toàn bộ câu hỏi trong bộ đề thi",
        "description": "Toàn bộ 450 câu hỏi ôn thi, đề thi 30 câu hỏi, thi 20 phút, đúng 28/30 câu là đạt",
        "questions": []
    },
    {
        "id": 2,
        "type": "Khái niệm và quy tắc giao thông đường bộ",
        "description": "Có 9/75 câu hỏi:\nKhái niệm: câu 1 đến câu 13;\nQuy tắc: câu 14 đến câu 72;\nTốc độ: câu 73 đến câu 75",
        "questions": [
            {
                "id": 1,
                "content": "Khái niệm \"đường bộ\" được hiểu như thế nào là đúng ?",
                "img": null,
                "answers": [
                    {
                        "id": 1,
                        "answer": "1- Đường, cầu đường bộ",
                        "check": 1
                    },
                    {
                        "id": 2,
                        "answer": "2- Hầm đường bộ, bến phà đường bộ",
                        "check": 1
                    },
                    {
                        "id": 3,
                        "answer": "3- Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác",
                        "check": 0
                    }
                ],
                "explain": "Đường bộ thì chỉ líên quan đến đường không bao gồm công trình phụ trợ",
                "top50": 1
            },
            {
                "id": 2,
                "content": "Khái niệm \"công trình đường bộ\" được hiểu như thế nào là đúng ? ",
                "img": null,
                "answers": [
                    {
                        "id": 4,
                        "answer": "1- Đường bộ, nơi dừng xe, đỗ xe trên đường bộ , đèn tín hiệu, biển báo hiệu, vạch kẻ đường, cọc tiêu",
                        "check": 1
                    },
                    {
                        "id": 5,
                        "answer": "2- Rào chắn, đảo giao thông, dải phân cách, cột cây số, tường, kè, hệ thống thoát nước, trạm kiểm tra trọng tải xe, trạm thu phí và các công trình, thiết bị phụ trợ khác",
                        "check": 1
                    },
                    {
                        "id": 6,
                        "answer": "3- Đường bộ, nơi dừng xe, đỗ xe trong khu vực nhà ga đường sắt, cảng hàng không",
                        "check": 0
                    }
                ],
                "explain": "Công trình đường bộ không bao gồm đường bộ trong nhà ga, đường sắt, hải cảng hàng không. Còn lại đều đúng.",
                "top50": 1
            },
            {
                "id": 3,
                "content": "\"Vạch kẻ đường\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 7,
                        "answer": "1- Vạch kẻ đường là vạch chỉ sự phân chia làn đường , trí hoặc hướng đi , vị trí dừng lại ",
                        "check": 1
                    },
                    {
                        "id": 8,
                        "answer": "2- Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đổ trên đường",
                        "check": 0
                    },
                    {
                        "id": 9,
                        "answer": "3- Tất cả các ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 4,
                "content": "Khái niệm \"Phần đường xe chạy\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 10,
                        "answer": "1- Là phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại",
                        "check": 1
                    },
                    {
                        "id": 11,
                        "answer": "2- Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông",
                        "check": 0
                    },
                    {
                        "id": 12,
                        "answer": "3- Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 5,
                "content": "Khái niệm \"làn đường\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 13,
                        "answer": "1- Là một phần của đường được chia theo chiều ngang của đường, có bề rộng đủ cho xe đỗ an toàn",
                        "check": 0
                    },
                    {
                        "id": 14,
                        "answer": "2- Là một phần của đường xe chạy được chia theo chiều dọc của đường , có bề rộng đủ cho xe chạy an toàn",
                        "check": 1
                    },
                    {
                        "id": 15,
                        "answer": "3- Cả 2 ý trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 6,
                "content": "Khái niệm \"khổ giới hạn của đường bộ\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 16,
                        "answer": "1- Là khoảng trống có kích thước giới hạn về chiều cao , chiều rộng của đường , cầu , bến phà , hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn",
                        "check": 1
                    },
                    {
                        "id": 17,
                        "answer": "2- Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn",
                        "check": 0
                    },
                    {
                        "id": 18,
                        "answer": "3- Là khoảng trống có kích thước giới hạn về chiều cao của cầu, bến phà, hầm trên đường bộ để các xe đi qua được an toàn",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 7,
                "content": "Khái niệm \"đường phổ\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 19,
                        "answer": "1- Đường phố là đường đô thị , gồm lòng đường và hè phố",
                        "check": 1
                    },
                    {
                        "id": 20,
                        "answer": "2- Đường phố là đường bộ ngoài đô thị có lòng đường đủ rộng cho các phương tiện giao thông qua lại",
                        "check": 0
                    },
                    {
                        "id": 21,
                        "answer": "3- Cả 2 ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 8,
                "content": "Khái niệm \"dải phân cách\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 22,
                        "answer": "1- Là bộ phận của đường để phân chia mặt đường thành | hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ",
                        "check": 1
                    },
                    {
                        "id": 23,
                        "answer": "2- Là bộ phận của đường để xác định ranh giới của đất dành cho đường bộ theo chiều ngang của đường",
                        "check": 0
                    },
                    {
                        "id": 24,
                        "answer": "3- Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 9,
                "content": "Dải phân cách trên đường bộ có những loại nào?",
                "img": null,
                "answers": [
                    {
                        "id": 25,
                        "answer": "1- Loại cố định",
                        "check": 1
                    },
                    {
                        "id": 26,
                        "answer": "2- Loại di động",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 10,
                "content": "Khái niệm \"đường cao tốc\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 27,
                        "answer": "1- Là đường dành cho xe cơ giới , có dải phân cách chia đường cho xe chạy hai chiều riêng biệt , không giao nhau cùng mức với một hoặc các đường khác ; được bố trí đầy đủ trang thiết bị phục vụ , đảm bảo giao thông liên tục , an toàn , rút ngắn thời gian hành trình và chỉ cho xe ra , vào ở những điểm nhất định",
                        "check": 1
                    },
                    {
                        "id": 28,
                        "answer": "2- là đường chỉ dành cho xe cơ giới chạy với tốc độ cao, có dải phân cách chia đường cho xe chạy hai chiều ngược nhau riêng biệt; không giao cắt cùng mức với đường khác, bố trí đầy đủ các trang thiết bị phục vụ đảm bảo giao thông an toàn và rút ngắn thời gian hành trình",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 11,
                "content": "Khái niệm \"đường chính\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 29,
                        "answer": "1- Đường chính là đường đảm bảo giao thông chủ yếu trong khu vực ",
                        "check": 1
                    },
                    {
                        "id": 30,
                        "answer": "2- Đường chính là đường quốc lộ được đặt tên, số hiệu do cơ quan có thẩm quyền nhân loại và quyết định",
                        "check": 0
                    },
                    {
                        "id": 31,
                        "answer": "3- Đường chính là đường trong đô thị hoặc đường tỉnh",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 12,
                "content": "Khái niệm \"đường ưu tiên\" được hiểu thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 32,
                        "answer": "1- Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ phải nhường đường cho các phương tiện đến từ hướng khác khi qua nơi giao nhau, có thể được cắm biển báo hiệu đường ưu tiên",
                        "check": 0
                    },
                    {
                        "id": 33,
                        "answer": "2- Đường ưu tiên là đường mà trên đó phương tiện tham gia giao thông đường bộ được các phương tiện đến từ hướng khác nhường đường khi qua nơi đường giao nhau , được cắm biển báo hiệu đường ưu tiên",
                        "check": 1
                    },
                    {
                        "id": 34,
                        "answer": "3- Đường ưu tiên là đường chỉ dành cho một số loại phương tiện giao thông , được cắm biển báo hiệu đường ưu tiên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 13,
                "content": "\"Phương tiện giao thông đường bộ\" bao gồm những loại nào?",
                "img": null,
                "answers": [
                    {
                        "id": 35,
                        "answer": "1- Phương tiện giao thông cơ giới đường bộ , phương tiện | giao thông thô sơ đường bộ ",
                        "check": 1
                    },
                    {
                        "id": 36,
                        "answer": "2- Phương tiện giao thông thô sơ đường bộ, phương tiện giao thông cơ giới đường bộ và xe máy chuyên dụng",
                        "check": 0
                    },
                    {
                        "id": 37,
                        "answer": "3- Cả 2 ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": "Xe máy chuyên dùng không thuộc vào phương tiện giao thông đường bộ. Nó thuộc vào phương tiện giao thông cơ giới đường bộ.",
                "top50": 1
            },
            {
                "id": 14,
                "content": "Các hành vi nào dưới đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 38,
                        "answer": "1- Phá hoại đường, cầu, hầm, bến phà đường bộ, phá hoại đèn tín hiệu, cọc tiêu, biển báo hiệu, gương cầu, dải phân cách",
                        "check": 1
                    },
                    {
                        "id": 39,
                        "answer": "2- Phá hoại hệ thống thoát nước và các công trình, thiết bị khác thuộc kết cấu hạ tầng giao thông đường bộ",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 15,
                "content": "Hành vi đua xe cơ giới, xe máy chuyên dùng không bảo đảm tiêu chuẩn an toàn kỹ thuật và bảo vệ môi trường tham gia giao thông đường bộ có bị nghiêm cấm hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 40,
                        "answer": "1- Không bị nghiêm cấm",
                        "check": 0
                    },
                    {
                        "id": 41,
                        "answer": "2- Bị nghiêm cấm",
                        "check": 1
                    },
                    {
                        "id": 42,
                        "answer": "3- Bị nghiêm cấm tùy theo các tuyến đường",
                        "check": 0
                    },
                    {
                        "id": 43,
                        "answer": "4- Bị nghiêm cấm tùy theo loại xe",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 16,
                "content": "Những hành vi nào dưới đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 44,
                        "answer": "1- Đua xe, cổ vũ đua xe, tổ chức đua xe trái phép",
                        "check": 1
                    },
                    {
                        "id": 45,
                        "answer": "2- Lạng lách, đánh võng",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 17,
                "content": "Người điều khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy có bị nghiêm cấm hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 46,
                        "answer": "1- Bị nghiêm cấm",
                        "check": 1
                    },
                    {
                        "id": 47,
                        "answer": "2- Không bị nghiêm cấm",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 18,
                "content": "Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu hoặc hơi thở có nồng độ cồn vượt quá bao nhiêu thì bị cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 48,
                        "answer": "1- Người điều khiển xe ô tô, xe máy, xe kéo chuyên dùng trên đường mà trong máu có nồng độ cồn vượt quá 50 miligam/100 mililit máu hoặc 0,25 miligam/1 lit khí thở",
                        "check": 0
                    },
                    {
                        "id": 49,
                        "answer": "2- Người điều khiển xe ô tô, máy kéo, xe máy chuyên dùng trên đường mà trong máu hoặc hơi thở có nồng độ cồn",
                        "check": 1
                    },
                    {
                        "id": 50,
                        "answer": "3- Người điều khiển xe ô tô, xe máy, máy kéo chuyên dùng trên đường mà trong máu có nồng độ cồn vượt quá 80 miligam/100 mililit máu hoặc 40 miligam/1 lit khí thở",
                        "check": 0
                    }
                ],
                "explain": "Điều khiển xe ô tô thì không được phép có nồng độ cồn (câu 2)",
                "top50": 1
            },
            {
                "id": 19,
                "content": "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong máu có nồng độ cồn vượt quá bao nhiêu thì bị cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 51,
                        "answer": "1- Nồng độ cồn vượt quá 50 miligam/100 mililit máu",
                        "check": 1
                    },
                    {
                        "id": 52,
                        "answer": "2- Nồng độ cồn vượt quá 40 miligam/100 mililit máu",
                        "check": 0
                    },
                    {
                        "id": 53,
                        "answer": "3- Nồng độ cồn vượt quá 30 miligam/100 mililit máu",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 20,
                "content": "Người điều khiển xe mô tô, xe gắn máy trên đường mà trong khí thở có nồng độ cồn vượt quá bao nhiêu thì bị cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 54,
                        "answer": "1- Nồng độ cồn vượt quá 0,25 miligam/1 lít khí thở",
                        "check": 1
                    },
                    {
                        "id": 55,
                        "answer": "2- Nồng độ cồn vượt quá 0,20 miligam/1 lít khí thở",
                        "check": 0
                    },
                    {
                        "id": 56,
                        "answer": "3- Nồng độ cồn vượt quá 0,15 miligam/1 lít khí thở",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 21,
                "content": "Hành vi giao xe cơ giới, xe máy chuyên dùng cho người không đủ điều kiện để điều khiển xe tham gia giao thông có bị nghiêm cấm hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 57,
                        "answer": "1- Không bị nghiêm cấm",
                        "check": 0
                    },
                    {
                        "id": 58,
                        "answer": "2- Bị nghiêm cấm",
                        "check": 1
                    },
                    {
                        "id": 59,
                        "answer": "3- Nghiêm cấm tùy từng trường hợp",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 22,
                "content": "Hành vi điều khiển xe cơ giới chạy quá tốc độ quy định, giành đường, vượt ẩu có bị nghiêm cấm hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 60,
                        "answer": "1- Bị nghiêm cấm",
                        "check": 1
                    },
                    {
                        "id": 61,
                        "answer": "2- Bị nghiêm cấm tùy từng trường hợp",
                        "check": 0
                    },
                    {
                        "id": 62,
                        "answer": "3- Không bị nghiêm cấm",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 23,
                "content": "Những hành vi nào sau đây bị cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 63,
                        "answer": "1- Bấm còi, rú ga liên tục, bấm còi trong thời gian từ 22 giờ đến 5 giờ",
                        "check": 1
                    },
                    {
                        "id": 64,
                        "answer": "2- Bấm còi hơi, sử dụng đèn chiếu xa trong khu đô thị và khu dân cư, trừ các xe ưu tiên khi đang làm nhiệm vụ",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 24,
                "content": "Các hành vi nào sau đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 65,
                        "answer": "1- Lắp đặt, sử dụng còi, đèn không đúng thiết kế của nhà sản xuất đối với từng loại xe cơ giới",
                        "check": 1
                    },
                    {
                        "id": 66,
                        "answer": "2- Sử dụng thiết bị âm thanh gây mất trật tự an toàn giao thông, trật tự công cộng",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 25,
                "content": "Trong hoạt động vận tải đường bộ, các hành vi nào sau đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 67,
                        "answer": "1- Vận chuyển hàng cấm lưu thông",
                        "check": 1
                    },
                    {
                        "id": 68,
                        "answer": "2- Vận chuyển trái phép hoặc không thực hiện đầy đủ các quy định về vận chuyển hàng nguy hiểm, động vật hoang dã",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 26,
                "content": "Trong hoạt động vận tải khách, những hành vi nào ghi dưới đây bị cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 69,
                        "answer": "1- Đe dọa, xúc phạm, tranh giành, lôi kéo hành khách; bắt ép hành khách sử dụng dịch vụ ngoài ý muốn",
                        "check": 1
                    },
                    {
                        "id": 70,
                        "answer": "2- Chuyển tải, xuống khách hoặc các hành vi khác nhằm trốn tránh phát hiện xe chở quá tải, quá sô người quy định",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 27,
                "content": "Hành vi bỏ trốn sau khi gây tai nạn để trốn tránh trách nhiệm hoặc khi có điều kiện mà cố ý không cứu giúp người bị tai nạn giao thông có bị nghiệm cấm hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 71,
                        "answer": "1- Không bị nghiêm cấm",
                        "check": 0
                    },
                    {
                        "id": 72,
                        "answer": "2- Nghiêm cấm tùy từng trường hợp cụ thể",
                        "check": 0
                    },
                    {
                        "id": 73,
                        "answer": "3- Bị nghiêm cấm",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 28,
                "content": "Khi xảy ra tai nạn giao thông, những hành vi nào sau đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 74,
                        "answer": "1- Xâm phạm tính mạng, sức khỏe, tài sản của người bị tai nạn giao thông; xâm phạm tính mạng, sức khỏe, tài sản của người gây tai nạn giao thông",
                        "check": 1
                    },
                    {
                        "id": 75,
                        "answer": "2- Lợi dụng việc xảy ra tai nạn giao thông để hành hung, đe dọa, xúi giục, gây sức ép, làm mất trật tự, cản trở việc xử lý tai nạn giao thông",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 29,
                "content": "Những hành vi nào dưới đây bị nghiêm cấm?",
                "img": null,
                "answers": [
                    {
                        "id": 76,
                        "answer": "1- Sử dụng hè phố để đi bộ",
                        "check": 0
                    },
                    {
                        "id": 77,
                        "answer": "2- Sử dụng lòng đường, lề đường trái phép",
                        "check": 1
                    },
                    {
                        "id": 78,
                        "answer": "3- Sử dụng hè phố trái phép",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 30,
                "content": "Việc sản xuất, mua bán, sử dụng biển số xe cơ giới, e máy chuyên dùng được quy định như thế nào trong Luật giao thông đường bộ?",
                "img": null,
                "answers": [
                    {
                        "id": 79,
                        "answer": "1- Nghiêm cấm sản xuất, được phép sử dụng",
                        "check": 0
                    },
                    {
                        "id": 80,
                        "answer": "2- Nghiêm cấm mua bán, cho phép sử dụng",
                        "check": 0
                    },
                    {
                        "id": 81,
                        "answer": "3- Nghiêm cấm sản xuất, mua bán, sử dụng trái phép",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 31,
                "content": "Người lái xe không được vượt xe khác khi gặp trường hợp nào ghi dưới đây?",
                "img": null,
                "answers": [
                    {
                        "id": 82,
                        "answer": "1- Trên cầu hẹp có một làn xe; nơi đường giao nhau, đường bộ giao nhau cùng mức với đường sắt",
                        "check": 1
                    },
                    {
                        "id": 83,
                        "answer": "2- Điều kiện thời tiết hoặc đường không bảo đảm an toàn cho việc vượt, xe ưu tiên đang phát tín hiệu ưu tiên làm nhiệm vụ",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 32,
                "content": "Ở những nơi nòa không được quay đầu xe?",
                "img": null,
                "answers": [
                    {
                        "id": 84,
                        "answer": "1- Ở phần đường dành cho người đi bộ qua đường, đường hẹp, đường dốc, đoạn đường cong tầm nhìn bị che khuất",
                        "check": 1
                    },
                    {
                        "id": 85,
                        "answer": "2- Tại nơi đường bộ giao nhau cùng mức",
                        "check": 0
                    },
                    {
                        "id": 86,
                        "answer": "3- Trên cầu, đầu cầu, gầm cầu vượt, ngầm, trong hầm đường bộ, đường cao tốc, tại nơi đường bộ giao nhau cùng mức với đường sắt",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 33,
                "content": "Ở những nơi nào không được lùi xe?",
                "img": null,
                "answers": [
                    {
                        "id": 87,
                        "answer": "1- Ở khu vực cho phép đỗ xe",
                        "check": 0
                    },
                    {
                        "id": 88,
                        "answer": "2- Ở khu vực cấm dừng và trên phần đường dành cho người đi bộ qua đường",
                        "check": 1
                    },
                    {
                        "id": 89,
                        "answer": "3- Nơi đường bộ giao nhau, đường bộ giao nhau cùng mức với đường sắt, nơi tầm nhìn bị che khuất, trong hầm đường bộ, đường cao tốc",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 34,
                "content": "Người điều khiển phương tiện giao thông trên đường phố có được dừng xe, đỗ xxe trên miệng cống thoát nước, miệng hầm của đường điện thoại, điện cao thế, chỗ dành riêng cho xe chữa cháy lấy nước hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 90,
                        "answer": "1- Được dừng xe, đỗ xe trong các trường hợp cần thiết",
                        "check": 0
                    },
                    {
                        "id": 91,
                        "answer": "2- Không được dừng xe, đỗ xe",
                        "check": 1
                    },
                    {
                        "id": 92,
                        "answer": "3- Được dừng xe, đỗ xe",
                        "check": 0
                    },
                    {
                        "id": 93,
                        "answer": "4- Được dừng xe",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 35,
                "content": "Khi điều khiển xe trên đường cao tốc, những việc nào không cho phép?",
                "img": null,
                "answers": [
                    {
                        "id": 94,
                        "answer": "1- Cho xe chạy ở làn dừng xe khẩn cấp và phần lề đường; quay đầu xe, lùi xe; cho xe chạy quá tốc độ tối đa và dưới tốc độ tối thiểu ghi trên biển báo, sơn kẻ trên mặt đường",
                        "check": 1
                    },
                    {
                        "id": 95,
                        "answer": "2- Cho xe chạy quá tốc độ tối thiểu và dưới tốc độ tối đa ghi trên biển báo, sơn kẻ trên mặt đường",
                        "check": 0
                    },
                    {
                        "id": 96,
                        "answer": "3- Dừng xe, đỗ xe ở nơi quy định",
                        "check": 0
                    }
                ],
                "explain": "Không cho phép cho xe chạy ở làn dừng xe khẩn cấp là đúng rồi",
                "top50": 1
            },
            {
                "id": 36,
                "content": "Khi xe kéo xe và xe kéo rơ moóc, những hành vi nào không được phép?",
                "img": null,
                "answers": [
                    {
                        "id": 97,
                        "answer": "1- Xe kéo rơ moóc, xe kéo sơ mi rơ moóc kéo thêm rơ moóc hoặc xe kéo",
                        "check": 1
                    },
                    {
                        "id": 98,
                        "answer": "2- Chở người trên xe được kéo; kéo theo xe thô sơ, xe gắn máy, xe mô tô",
                        "check": 1
                    },
                    {
                        "id": 99,
                        "answer": "3- Chở hàng trên rơ moóc hoặc sơ mi rơ moóc",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 37,
                "content": "Người điều khiển xe mô tô hai bánh, ba bánh, xe gắn máy có được phép sử dụng xe để kéo, đẩy các xe khác, vật khác khi tham gia giao thông không?",
                "img": null,
                "answers": [
                    {
                        "id": 100,
                        "answer": "1- Được phép",
                        "check": 0
                    },
                    {
                        "id": 101,
                        "answer": "2- Tùy trường hợp",
                        "check": 0
                    },
                    {
                        "id": 102,
                        "answer": "3- Không được phép",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 38,
                "content": "Người ngồi trên xe mô tô hai bánh, ba bánh, xe gắn máy khi tham gia giao thông không được thực hiện những hành vi nào dưới đây?",
                "img": null,
                "answers": [
                    {
                        "id": 103,
                        "answer": "1- Đội mũ bảo hiểm và cài quai đúng quy cách",
                        "check": 0
                    },
                    {
                        "id": 104,
                        "answer": "2- Sử dụng ô, bám, kéo hoặc đẩy các phương tiện khác",
                        "check": 1
                    },
                    {
                        "id": 105,
                        "answer": "3- Đứng trên yên, giá đèo hàng hoặc ngồi trên tay lái, các hàng vi khác gây mất trật tự an toàn giao thông",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 39,
                "content": "Người ngồi trên xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy khi tham gia giao thông có được mang, vác vật cồng kềnh hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 106,
                        "answer": "1- Được mang, vác tùy từng trường hợp cụ thể",
                        "check": 0
                    },
                    {
                        "id": 107,
                        "answer": "2- Không được mang, vác",
                        "check": 1
                    },
                    {
                        "id": 108,
                        "answer": "3- Được mang, vác nhưng phải đảm bảo an toàn giao thông",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 40,
                "content": "Khi điều khiển xe mô tô hai bánh, xe mô tô ba bánh, xe gắn máy, những hành vi nào không được phép?",
                "img": null,
                "answers": [
                    {
                        "id": 109,
                        "answer": "1- Buông cả hai tay hoặc đi xe bằng một bánh đối với xe hai bánh, bằng một bánh đối với xe ba bánh; chạy quá tốc độ quy định",
                        "check": 1
                    },
                    {
                        "id": 110,
                        "answer": "2- Sử đụng xe để kéo, đẩy xe khác, vật khác và chở đồ cồng kềnh; để chân chống quẹt xuống đất và các hành vi gây mất trật tự an toàn giao thông",
                        "check": 1
                    },
                    {
                        "id": 111,
                        "answer": "3- Chạy đúng tốc độ quy định và chấp hành đúng quy tắc giao thông đường bộ",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 41,
                "content": "Việc họp chợ, tụ tập động người trái phép, thả rông súc vật trên đường bộ có được phép hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 112,
                        "answer": "1- Không được phép",
                        "check": 1
                    },
                    {
                        "id": 113,
                        "answer": "2- Được phép",
                        "check": 0
                    },
                    {
                        "id": 114,
                        "answer": "3- Được phép trong một số trường hợp cụ thể",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 42,
                "content": "Bảo đảm trật tự, an toàn giao thông đường bộ là trách nhiệm của ai?",
                "img": null,
                "answers": [
                    {
                        "id": 115,
                        "answer": "1- Là trách nhiệm của ngành Giao thông vận tải và ngành Công an",
                        "check": 0
                    },
                    {
                        "id": 116,
                        "answer": "2- Là trách nhiệm của cơ quan, tổ chức, cá nhân",
                        "check": 1
                    },
                    {
                        "id": 117,
                        "answer": "3- Là trách nhiệm của cảnh sát giao thông",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 43,
                "content": "Người tham gia giao thông phải chấp hành quy tắc nào dưới đây?",
                "img": null,
                "answers": [
                    {
                        "id": 118,
                        "answer": "1- Phải đi bên trái của đường đi, đi đúng làn đường, phần đường quy định và phỉa chấp hành biển báo hiệu đường bộ; xe ô tô có trang bị dây an toàn thì người lái xe phải thắt dây an toàn",
                        "check": 0
                    },
                    {
                        "id": 119,
                        "answer": "2- Phải đi bên phải theo chiều đi của mình, đi đúng làn đường, phần đường quy định và phải chấp hành hệ thống báo hiệu đường bộ; xe ô tô có trang bị dây an toàn thì người lái xe và người ngồi trên hàng ghế phía trước trong xe ô tô phải thắt dây an toàn",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 44,
                "content": "Tại nơi đường giao nhau, khi đèn điều khiển giao thông có tín hiệu vàng, người điều khiển phương tiện phải thực hiện như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 120,
                        "answer": "1- Phải cho xe dừng lại trước vạch dừng, trừ trường hợp đã đi quá vạch dừng thì được đi tiếp; trong trường hợp tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát, nhường đường cho người đi bộ qua đường",
                        "check": 1
                    },
                    {
                        "id": 121,
                        "answer": "2- Phải cho xe nhanh chóng vượt qua vạch dừng để đi qua đường giao nhau và chú ý đảm bảo an toán, khi đèn tín hiệu vàng nhấp nháy là được đi nhưng phải giảm tốc độ, chú ý quan sát người đi bộ để đảm bảo an toàn",
                        "check": 0
                    },
                    {
                        "id": 122,
                        "answer": "3- Cả 2 ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 45,
                "content": "Biển báo hiệu đường bộ gồm những nhóm nào, ý nghĩa của từng nhóm?",
                "img": null,
                "answers": [
                    {
                        "id": 123,
                        "answer": "1- Nhóm biển báo cấm để biểu thị các điều cấm, nhóm biển báo hiệu nguy hiểm để cảnh báo các tình huống nguy hiểm có thể xảy ra; nhóm biển hiệu lệnh để báo hiệu các hiệu lệnh phải thi hành",
                        "check": 1
                    },
                    {
                        "id": 124,
                        "answer": "2- Nhóm biển chỉ dẫn để chỉ dẫn hướng đi hoặc các điều cần biết; nhóm biển phụ để thuyết minh bổ sung các loại biển báo cấm, biển báo nguy hiểm, biển hiệu lệnh và biển chỉ dẫn",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 46,
                "content": "Tại nơi đường giao nhau, khi người điều khiển giao thông ra hiệu lệnh bằng hai tay hoặc một tay giang ngang để báo hiệu thì người tham gia giao thông phải đi như thế nào là đúng quy tắc giao thông?",
                "img": null,
                "answers": [
                    {
                        "id": 125,
                        "answer": "1- Người tham gia giao thông ở phía trước và ở phía sau người điều khiển tham gia giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi",
                        "check": 1
                    },
                    {
                        "id": 126,
                        "answer": "2- Người tham gia giao thông ở phía trước và phía sau người điều khiển giao thông được đi thẳng; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi thẳng và rẽ phải",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 47,
                "content": "Tại nơi giao nhau, khi người điều khiển giao thông ra hiệu lệnh giơ tay thẳng đừng để báo hiệu thì người tham gia giao thông phải đi như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 127,
                        "answer": "1- Người tham gia giao thông ở phía trước và phía sau người điều khiển giao thông phải dừng lại; người tham gia giao thông ở phía bên phải và bên trái người điều khiển được đi ",
                        "check": 0
                    },
                    {
                        "id": 128,
                        "answer": "2- Người tham gia giao thông các hướng phải dừng lại",
                        "check": 1
                    },
                    {
                        "id": 129,
                        "answer": "3- Tất cả các trường hợp trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 48,
                "content": "Tại nơi đường giao nhau, khi người ddieuf khiển giao thông ra hiệu lệnh bằng tay phải giơ về phía trước để báo hiệu thì người tham gia giao thông phải đi như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 130,
                        "answer": "1- Người tham gia giao thông ở phía sau người điều khiển ohair dừng lại; người ở phía trước người điều khiển được rẽ trái; người ở phía bên trái người điều khiển được rẽ trái; người đi bộ qua đường phải dừng lại sau lưng người điều khiển giao thông",
                        "check": 0
                    },
                    {
                        "id": 131,
                        "answer": "2- Người tham gia giao thông ở phía sau và bên phải người điều khiển phải dừng lại; người ở phía trước người điều khiển được rẽ phải; người ở phía bên trái người điều khiển giao thông được đi tất cả các hướng; người đi bộ qua đường phải đi sau lưng người điều khiển giao thông",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 49,
                "content": "Trên đường giao thông, khi hiệu lệnh của người điều khiển giao thông trái với hiệu lệnh của đèn hoặc biển báo thì người tham gia giao thông phải chấp hành hiệu lệnh nào?",
                "img": null,
                "answers": [
                    {
                        "id": 132,
                        "answer": "1- Hiệu lệnh của người điều khiển giao thông",
                        "check": 1
                    },
                    {
                        "id": 133,
                        "answer": "2- Hiệu lệnh của đền điều khiển giao thông",
                        "check": 0
                    },
                    {
                        "id": 134,
                        "answer": "3- Hiệu lệnh của biển báo hiệu đường bộ",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 50,
                "content": "Tại nơi có biển hiệu cố định lại có báo hiệu tạm thời thì người tham gia giao thông phỉa chấp hành hiệu lệnh của biển báo nào?",
                "img": null,
                "answers": [
                    {
                        "id": 135,
                        "answer": "1- Biển báo hiệu cố định",
                        "check": 0
                    },
                    {
                        "id": 136,
                        "answer": "2- Biển báo tạm thời",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 51,
                "content": "Trên đường có nhiều làn đường cho xe đi cùng chiều được phân biệt bằng vạch kẻ phân làn đường, người điều khiển phương tiện phải cho xe đi như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 137,
                        "answer": "1- Cho xe đi bất kì làn đường nào, khi cần thiết phải chuyển làn đường, người lái xe phải có đèn tín hiệu báo trước và phải đảm bảo an toàn",
                        "check": 0
                    },
                    {
                        "id": 138,
                        "answer": "2- Phải cho xe đi một trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép; khi chuyển làn đường cần phải có tín hiệu báo trước và phỉa đảm bảo an toàn",
                        "check": 1
                    },
                    {
                        "id": 139,
                        "answer": "3- Phải cho xe đi trong một làn đường, khi chuyển làn đường phải có tín hiệu báo trước, chú ý quan sát để đảm bảo an toàn",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 52,
                "content": "Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ và xe cơ giới phải đi như thế nào là đúng quy tắc giao thông?",
                "img": null,
                "answers": [
                    {
                        "id": 140,
                        "answer": "1- Xe thô sơ phải đi trên làn đường bên trái trong cùng, xe cơ giới, xe máy chuyên dụng đi trên làn đường bên phải",
                        "check": 0
                    },
                    {
                        "id": 141,
                        "answer": "2- Xe thô sơ phỉa đi trên làn đường bên phải trong cùng; xe cơ giới, xe máy chuyên dụng đi trên làn đường bên trái",
                        "check": 1
                    },
                    {
                        "id": 142,
                        "answer": "3- Xe thô sơ đi trên làn đường phù hợp không gây cản trở giao thông, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên phải",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 53,
                "content": "Trên đường có nhiều làn đường, người điều khiển phương tiện tham gia giao thông sử dụng làn đường như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 143,
                        "answer": "1- Trên đường có nhiều là đường cho xe đi cùng chiều được phân biệt bằng vạch lẻ phân làn đường, người điều khiển phương tiện phải cho xe đi trong một làn đường và chỉ được chuyển làn đường ở những nơi cho phép, khi chuyển làn đường phải có tín hiệu báo trước và đảm bảo an toàn",
                        "check": 1
                    },
                    {
                        "id": 144,
                        "answer": "2- Phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn đi về bên trái",
                        "check": 0
                    },
                    {
                        "id": 145,
                        "answer": "3- Trên đường một chiều có vạch kẻ phân làn đường, xe thô sơ phải đi trên làn đường bên phải trong cùng, xe cơ giới, xe máy chuyên dùng đi trên làn đường bên trái, phương tiện tham gia giao thông đường bộ di chuyển với tốc độ thấp hơn đi về bên phải",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 54,
                "content": "Khi điều khiển xe chạy trên đoạn đường vòng, đầu dốc và các vị trí có tầm nhìn hạn chế người lái xe muốn vượt xe khác thì phải xử lí như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 146,
                        "answer": "1- Nháy đèn pha kết hợp với tín hiệu còi cho xe trước biết để xe mình vượt",
                        "check": 0
                    },
                    {
                        "id": 147,
                        "answer": "2- Không được vượt",
                        "check": 1
                    },
                    {
                        "id": 148,
                        "answer": "3- Nếu thấy không có xe đi ngược chiều và đủ rộng thì có thể cho xe vượt nhưng phải đảm bảo an toàn",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 55,
                "content": "Khi vượt xe khác người lái xe phải thực hiện như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 149,
                        "answer": "1- Phải báo hiệu bằng đèn hoặc còi; trong đo thị và nơi đông dân cư từ 22h đến 05 giờ chỉ được báo hiệu xin vượt bằng đèn",
                        "check": 1
                    },
                    {
                        "id": 150,
                        "answer": "2- Xe xin vượt chỉ được vượt khi không có chướng ngại vật ở phía trước, không có xe chạy ngược chiều trong đoạn đừng định vượt, xe chạy trước không có tín hiệu vượt xe khác và đã tránh về bên phải",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 56,
                "content": "Khi điều khiển xe máy trên đường biết có xe sau xin vượt nếu đủ điều kiện an toàn người lái xe phải làm gì?",
                "img": null,
                "answers": [
                    {
                        "id": 151,
                        "answer": "1- Tăng tốc độ và ra hiệu cho xe sau vượt, không được gây trở ngại cho xe sau vượt",
                        "check": 0
                    },
                    {
                        "id": 152,
                        "answer": "2- Người điều khiển phương tiện phía trước phải giảm tốc độ, đi sát về bên phải của phần đường xe chạy cho đến khi xe sau đã vượt qua, không được gây trở ngại cho xe sau vượt",
                        "check": 1
                    },
                    {
                        "id": 153,
                        "answer": "3- Cho xe tránh về bên trái mình và ra hiệu cho xe sau vượt, nếu có chướng ngại vật phía trước hoặc thiếu điều kiện an toàn chưa cho vượt được thì phải ra hiệu cho xe sau biết, cấm gây trở ngại cho xe sau xin vượt",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 57,
                "content": "Xe sau có thể vượt lên bên phải xe khác đang chạy phía trước trong trường hợp nào?",
                "img": null,
                "answers": [
                    {
                        "id": 154,
                        "answer": "1- Khi xe phía trước có tín hiệu rẽ trái hoặc đang rẽ trái; khi xe điện đang chạy giữa đường",
                        "check": 1
                    },
                    {
                        "id": 155,
                        "answer": "2- Khi xe chuyên dùng đang làm việc trên đường mà không thể vượt bên trái được",
                        "check": 1
                    },
                    {
                        "id": 156,
                        "answer": "3- Khi có đủ khoảng trống để vượt xe",
                        "check": 0
                    }
                ],
                "explain": "Chú ý câu này hỏi Vượt phải, chỉ trường hợp đặc biệt mới được vượt phải. Câu 3 sai vì đây là trường hợp vượt bình thường, còn cả câu 1 và 2 được phép vượt phải",
                "top50": 1
            },
            {
                "id": 58,
                "content": "Trong khu dân cư, ở nơi nào cho phép người lái xe, người điều khiển xe máy chuyên dùng được quay đầu xe?",
                "img": null,
                "answers": [
                    {
                        "id": 157,
                        "answer": "1- Ở nơi đường giao nhau và nơi có biển báo cho phép quay đầu xe",
                        "check": 1
                    },
                    {
                        "id": 158,
                        "answer": "2- Nơi có đường rộng để cho các loại xe chạy một chiều",
                        "check": 0
                    },
                    {
                        "id": 159,
                        "answer": "3- Ở bất kì nơi nào",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 59,
                "content": "Người lái xe phải làm gì khi quay đầu xe trên cầu, gầm cầu vượt, đường ngầm hay khu vực đường bộ giao nhau cùng mức với đường sắt?",
                "img": null,
                "answers": [
                    {
                        "id": 160,
                        "answer": "1- Không được quay đầu xe",
                        "check": 1
                    },
                    {
                        "id": 161,
                        "answer": "2- Lợi dụng chỗ rộng và phải có người làm tín hiệu sau xe để đảm bảo an toàn",
                        "check": 0
                    },
                    {
                        "id": 162,
                        "answer": "3- Lợi dụng chỗ rộng có thể quay đầu được để quay đầu xe cho an toàn",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 60,
                "content": "Khi muốn chuyển hướng, người lái xe phải thực hiện như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 163,
                        "answer": "1- Người điều khiển phương tiện phỉa tăng tốc độ và có tín hiệu báo hướng để rẽ",
                        "check": 0
                    },
                    {
                        "id": 164,
                        "answer": "2- Người điều khiển phương tiện phải giảm tốc độ và có tín hiệu báo hướng rẽ, chỉ cho rẽ chuyến hướng khi quan sát thấy không gây trở ngại hoặc nguy hiểm cho người và phương tiện khác",
                        "check": 1
                    },
                    {
                        "id": 165,
                        "answer": "3- Trong khi chuyển hướng, người lái xe, người điều khiển xe máy chuyên dùng phải nhường quyền đi trước cho người đi bộ, người đi xe đạp đang đi trên phần đường dành riêng cho họ, nhường đường cho các xe đi ngược chiều",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 61,
                "content": "Khi lùi xe người lái xe phải làm gì để đảm bảo an toàn?",
                "img": null,
                "answers": [
                    {
                        "id": 166,
                        "answer": "1- Quan sát phía trước và cho lùi xe",
                        "check": 0
                    },
                    {
                        "id": 167,
                        "answer": "2- Lợi dụng nơi đường giao nhau đủ chiều rộng để lùi",
                        "check": 0
                    },
                    {
                        "id": 168,
                        "answer": "3- Phải quan sát phía sau, có tín hiệu cần thiết và chỉ khi nào thấy không nguy hiểm mới được lùi",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 62,
                "content": "Khi tránh xe đi ngược chiều, các xe phải nhường đường như thế nào là đúng?",
                "img": null,
                "answers": [
                    {
                        "id": 169,
                        "answer": "1- Nơi đường hẹp chỉ đủ cho một xe chạy và có chỗ tránh xe thì xe nào ở gần chỗ tránh hơn phải vào vị trí nhanh, nhường đường cho xe kia đi",
                        "check": 1
                    },
                    {
                        "id": 170,
                        "answer": "2- Xe xuống dốc phải nhường đường cho xe đang lên dốc, xe nào có chướng ngại vật phía trước phải nhường đường cho xe không có chướng ngại vật đi trước",
                        "check": 1
                    },
                    {
                        "id": 171,
                        "answer": "3- Xe lên dốc phải nhường đường cho xe xuống dốc",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 63,
                "content": "Ban đêm xe cơ giới đi ngược chiều gặp nhau, đèn chiếu sáng phải được sử dụng như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 172,
                        "answer": "1- Phải chuyển từ đèn chiếu sáng gần sang đèn chiếu xa",
                        "check": 0
                    },
                    {
                        "id": 173,
                        "answer": "2- Phải chuyển từ đèn chiếu xa sang đèn chiếu gần",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 64,
                "content": "Trên đường không phân chia thành hai chiều xe chạy riêng biệt, hai xe đi ngược chiều tránh nhau như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 174,
                        "answer": "1- Người điều khiển phải tăng tốc độ",
                        "check": 0
                    },
                    {
                        "id": 175,
                        "answer": "2- Người điều khiển ohair cho xe đi về bên trái theo chiều xe chạy của mình",
                        "check": 0
                    },
                    {
                        "id": 176,
                        "answer": "3- Người điều khiển phải giảm tốc độ và cho xe đi về bên phải theo chiều xe chạy của mình",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 65,
                "content": "Bên trái đường một chiều, người lái xe có được dừng, đỗ xe hay không?",
                "img": null,
                "answers": [
                    {
                        "id": 177,
                        "answer": "1- Được dừng, đỗ xe tùy từng trường hợp cụ thể nhưng phải đảm bảo an toàn",
                        "check": 0
                    },
                    {
                        "id": 178,
                        "answer": "2- Được dừng xe, không được đỗ xe",
                        "check": 0
                    },
                    {
                        "id": 179,
                        "answer": "3- Không được dừng xe, đỗ xe",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 66,
                "content": "Người lái xe được dừng xe, đỗ xe trong các trường hợp nào sau đây?",
                "img": null,
                "answers": [
                    {
                        "id": 180,
                        "answer": "1- Trên đường có đủ bề rộng đủ cho hai làn xe, ngoài phạm vi 5 mét hai bên cổng trụ sở cơ quan, tổ chức",
                        "check": 1
                    },
                    {
                        "id": 181,
                        "answer": "2- Trước cổng và trong ohamj vi 5 mét hai bên cổng trụ sở, cơ quan",
                        "check": 0
                    },
                    {
                        "id": 182,
                        "answer": "3- Trên đường có bề rộng đủ cho một làn xe, ngoài phạm vi 5 mét hai bên cổng trụ sở cơ quan, tổ chức",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 67,
                "content": "Người điều khiển phương tiện khi muốn dừng hoặc đỗ xe trên đường bộ phải thực hiện như thế nào? ",
                "img": null,
                "answers": [
                    {
                        "id": 183,
                        "answer": "1- Có tín hiệu báo cho người điều khiển phương tiện khác biết",
                        "check": 1
                    },
                    {
                        "id": 184,
                        "answer": "2- Cho xe dừng, đỗ ở nơi đã xây dựng điểm dừng, đỗ xe; nơi có lề đường rộng hoặc khu đất ở bên ngoài phần đường xe chạy; trường hợp lề đường hẹp hoặc không có lề đường thì phải cho xe dừng, đỗ sát mép đường phía bên phải theo chiều đi của mình",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 68,
                "content": "Khi dừng xe, đỗ xe tại nơi được phép trên đường phố, người điều khiển phương tiện phải tuân theo những quy định nào ghi dưới đây?",
                "img": null,
                "answers": [
                    {
                        "id": 185,
                        "answer": "1- Phải cho dừng xe, đỗ sát lề đường, hè phố phía bên trái theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, hè phố quá 0,3 mét và không gây cản trở, nguy hiểm cho giao thông. Trường hợp đường phố hẹp, phải dừng xe, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường tối thiểu 15 mét",
                        "check": 0
                    },
                    {
                        "id": 186,
                        "answer": "2- Phải cho xe dừng, đỗ sát lề đường, hè phố phía bên phải theo chiều đi của mình; bánh xe gần nhất không được cách xa lề đường, hè phố quá 0,25met và không gây cản trở, nguy hiểm cho giao thông. Trường hợp đường phố hẹp phỉa dừng xe, đỗ xe ở vị trí cách xe ô tô đang đỗ bên kia đường tối thiểu 20 mét",
                        "check": 1
                    },
                    {
                        "id": 187,
                        "answer": "3- Tất cả các ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 69,
                "content": "Khi xêsp hàng hóa vượt phía trước và phía sau của xe ô tô chở hàng tham gia giao thông, ban ngày và ban đêm phải có cờ, đèn báo tín hiệu như thế nào là đúng quy tắc giao thông?",
                "img": null,
                "answers": [
                    {
                        "id": 188,
                        "answer": "1- Ban ngày phải có cờ báo hiệu màu xanh, ban đêm hoặc khi trời tối phải có đèn sáng báo hiệu",
                        "check": 0
                    },
                    {
                        "id": 189,
                        "answer": "2- Ban ngày phải có cờ báo hiệu màu đỏ, ban đêm hoặc khi trời tối phải có đèn đỏ báo hiệu",
                        "check": 1
                    },
                    {
                        "id": 190,
                        "answer": "3- Tất cả các ý nêu trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 70,
                "content": "Xe vận tải hàng có thùng cố định, bảo đảm an toàn giao thông được phép chở người trong những trường hợp nào?",
                "img": null,
                "answers": [
                    {
                        "id": 191,
                        "answer": "1- Chở người đi làm nhiệm vụ phòng, chống thiên tai hoặc thực hiện nhiệm vụ khẩn cấp; chở cán bộ chiến sỹ của lực lượng vũ trang nhân dân đi làm nhiệm vụ; chở người bị nạn đi cấp cứu",
                        "check": 1
                    },
                    {
                        "id": 192,
                        "answer": "2- Chở công nhân duy tu, bảo dưỡng đường bộ; chở người đi học thực hành lái xe trên xe tập lái; chở người diễu hành theo đoàn; giải tỏa người ra khỏi khu vực nguy hiểm hoặc trong trường hợp khẩn cấp theo quy định của pháp luật",
                        "check": 1
                    },
                    {
                        "id": 193,
                        "answer": "3- Được phép chở người nhưng phải đảm bảo an toàn ",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 71,
                "content": "Khi có tín hiệu của xe ưu tiên, người tham gia giao thông phải làm gì?",
                "img": null,
                "answers": [
                    {
                        "id": 194,
                        "answer": "1- Phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên trái để nhường đường",
                        "check": 0
                    },
                    {
                        "id": 195,
                        "answer": "2- Phải nhanh chóng tăng tốc độ, tránh sát lề đường để nhường đường cho xe ưu tiên, cấm các hành vi gây cản trở xe ưu tiên",
                        "check": 0
                    },
                    {
                        "id": 196,
                        "answer": "3- Phải nhanh chóng giảm tốc độ, tránh hoặc dừng lại sát lề đường bên phải để nhường đường, không được gây cản trở xe được quyển ưu tiên",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 72,
                "content": "Thứ tự xe nào được quyền ưu tiên đi trước khi qua đường giao nhau?",
                "img": null,
                "answers": [
                    {
                        "id": 197,
                        "answer": "1- Xe cứu thương đang thực hiện nhiệm vụ cấp cứu",
                        "check": 0
                    },
                    {
                        "id": 198,
                        "answer": "2- Xe quân sự, xe công an đi làm nhiệm vụ đặc biệt khẩn cấp, đoàn xe có cảnh sát dẫn đường",
                        "check": 0
                    },
                    {
                        "id": 199,
                        "answer": "3- Xe chữa cháy đi làm nhiệm vụ",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 73,
                "content": "Xe máy kéo, xe công nông, xe lam, xe lôi máy, xe xích lô máy, xe ba gác máy, xe máy chuyên dùng và các loại xe tương tự (loại đang được phép hoạt động) tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
                "img": null,
                "answers": [
                    {
                        "id": 200,
                        "answer": "1- 60km/h",
                        "check": 0
                    },
                    {
                        "id": 201,
                        "answer": "2- 50km/h",
                        "check": 0
                    },
                    {
                        "id": 202,
                        "answer": "3- 40km/h",
                        "check": 0
                    },
                    {
                        "id": 203,
                        "answer": "4- 30km/h",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 74,
                "content": "Trên đương bộ trong khu vực đông dân cư, xe mô tô hai bánh, xe gắn máy tham gia giao thông với tốc độ tối đa cho phép là bao nhiêu?",
                "img": null,
                "answers": [
                    {
                        "id": 204,
                        "answer": "1- 60km/h",
                        "check": 0
                    },
                    {
                        "id": 205,
                        "answer": "2- 50km/h",
                        "check": 0
                    },
                    {
                        "id": 206,
                        "answer": "3- 40km/h",
                        "check": 1
                    },
                    {
                        "id": 207,
                        "answer": "4- 30km/h",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 75,
                "content": "Trên đường cao tốc, trừ khi nhập làn và tách làn, với điều kiện mặt đường khô ráo, xe cơ giới đang chạy với tốc độ đến 60km/h, người lái xe phải duy trì khoảng cách an toàn với xe đnag chạy phía trước tối thiểu là bao nhiêu?",
                "img": null,
                "answers": [
                    {
                        "id": 208,
                        "answer": "1- 30m",
                        "check": 1
                    },
                    {
                        "id": 209,
                        "answer": "2- 40m",
                        "check": 0
                    },
                    {
                        "id": 210,
                        "answer": "3- 50m",
                        "check": 0
                    },
                    {
                        "id": 211,
                        "answer": "4- 60m ",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            }
        ]
    },
    {
        "id": 3,
        "type": "Văn hóa, đạo đức nghề nghiệp người lái xe",
        "description": "Có 1/5 câu hỏi:\nCâu 76 đến câu 80",
        "questions": [
            {
                "id": 76,
                "content": "Đạo đức cơ bản của mỗi người, của người lái xe thể hiện ở những điểm nào ghi ở dưới đây?",
                "img": null,
                "answers": [
                    {
                        "id": 212,
                        "answer": "1- Tính trung thực và tính nguyên tắc; tính khiêm tốn và lòng dũng cảm.",
                        "check": 1
                    },
                    {
                        "id": 213,
                        "answer": "2- Tình yêu lao động và tình thương yêu con người.",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 77,
                "content": "Một số nét đẹp về truyền thống đạo đức của mỗi con người Việt Nam theo tư tưởng của Chủ tịch Hồ Chí Minh là?",
                "img": null,
                "answers": [
                    {
                        "id": 214,
                        "answer": "1- Cần kiệm: Là lao động cần cù, siêng năng; làm việc có kế hoạch, sáng tạo có năng suất cao, với tinh thần tự lực cách sinh, không lười biếng, không ỷ lại, không dựa dẫm; tiết kiệm sức lao động, tiết kiệm thì giờ, tiết kiệm tiền của dân, của nước, của bản thân mình, không hao phí, không bừa bãi, không phô trương hình thức",
                        "check": 1
                    },
                    {
                        "id": 215,
                        "answer": "2- Liêm chính: Là không tham ô và luôn luôn tôn trọng, giữ gìn của công, của nhân dân; ngay thẳng, không tà, đúng đắn, chính trực, việc phải dù nhỏ cũng làm, việc trái dù nhỏ cũng tránh",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 78,
                "content": "Khái niệm về đạo đức nghề nghiệp của người lái xe kinh doanh vận tải được hiểu như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 216,
                        "answer": "1- Luôn ghi nhớ và thực hiện lời dạy của Bác: “Yêu xe như con, quý xăng như máu”; nắm vững quy định của pháp luật, nghiêm chỉnh chấp hành Luật Giao thông đường bộ, lái xe an toàn; có ý thức tổ chức kỷ luật, chấp hành nội dung, quy chế xây dựng đơn vị nơi mình công tác; có tinh thần hợp tác, giúp đỡ đồng nghiệp; có ý thức bảo vệ môi trường; luôn tu dưỡng bản thân, có lối sống lành mạnh, tác phong công nghiệp",
                        "check": 1
                    },
                    {
                        "id": 217,
                        "answer": "2- Đối với hành khách phải kính trọng, thân ái, giúp đỡ; đối với khách hàng phải có trách nhiệm, hợp tác, thực hiện đầy đủ hợp đồng vận tải; đối với người than gia giao thông phải tôn trọng, bảo vệ.",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 79,
                "content": "Người lái xe kinh doanh vận tải khi thực hiện tốt việc rèn luyện, nâng cao trách nhiệm, đạo đức nghề nghiệp sẽ thu được kết quả như thế nào?",
                "img": null,
                "answers": [
                    {
                        "id": 218,
                        "answer": "1- Được khách hàng, xã hội tôn trọng; được đồng nghiệp quý mến, giúp đỡ; được doanh nghiệp tin dùng và đóng góp nhiều cho xã hội",
                        "check": 1
                    },
                    {
                        "id": 219,
                        "answer": "2- Thu hút được khách hàng, góp phần quan trọng trong xây dựng thương hiệu, kinh doanh có hiệu quả cao",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 80,
                "content": "Hãy nêu trách nhiệm cơ bản của các tổ chức trong việc quản lý, giáo dục và nâng cao đạo đức nghề nghiệp của người lái xe?",
                "img": null,
                "answers": [
                    {
                        "id": 220,
                        "answer": "1- Tuyên truyền phổ biến các quy định của pháp luật đặc biệt là các quy định của Luật Giao thông đường bộ, các văn bản quản lý về vận tải để người lái xe biết và thực hiện; thường xuyên kiểm tra giám sát người lái xe thực hiện các nội quy, quy chế của đơn vị",
                        "check": 1
                    },
                    {
                        "id": 221,
                        "answer": "2- Hiểu tâm lý, nguyện vọng người lái xe, động viên họ trong lúc khó khăn, thực hiện đầy đủ các quy định của pháp luật về quyền lợi của người lao động, quan tâm đến đời sống vật chất tinh thần của họ, có chế động thưởng phạt nghiêm minh giúp họ hoàn thành nhiệm vụ",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            }
        ]
    },
    {
        "id": 4,
        "type": "Hệ thống biển báo hiệu đường bộ",
        "description": "Có 5/35 câu hỏi:\nCâu 81 đến câu 115",
        "questions": [
            {
                "id": 81,
                "content": "Biển nào cấm người đi bộ?",
                "img": "https://i.imgur.com/8TFl49d.png",
                "answers": [
                    {
                        "id": 222,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 223,
                        "answer": "2- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 224,
                        "answer": "3- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 225,
                        "answer": "4- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 82,
                "content": "Gặp biển nào người lái xe phải nhường đường cho người đi bộ?",
                "img": "https://i.imgur.com/8TFl49d.png",
                "answers": [
                    {
                        "id": 226,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 227,
                        "answer": "2- Biển 3",
                        "check": 0
                    },
                    {
                        "id": 228,
                        "answer": "3- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 229,
                        "answer": "4- Biển 1 và 3",
                        "check": 0
                    }
                ],
                "explain": "Biển 1 báo có đường đi bộ cắt ngang nên phải nhường. Biển 2 cấm người đi bộ. Biển 3 báo đường dành cho người đi bộ (xe không được vào).",
                "top50": 1
            },
            {
                "id": 83,
                "content": "Biển nào chỉ đường dành cho người đi bộ, các loại xe không được đi vào khi gặp biển này?",
                "img": "https://i.imgur.com/8TFl49d.png",
                "answers": [
                    {
                        "id": 230,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 231,
                        "answer": "2- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 232,
                        "answer": "3- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 233,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 84,
                "content": "Biển nào cấm mọi loại xe cơ giới đi vào, trừ xe gắn máy, mô tô hai bánh và các loại xe ưu tiên theo luật định?",
                "img": "https://i.imgur.com/vPtCopH.png",
                "answers": [
                    {
                        "id": 234,
                        "answer": "1- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 235,
                        "answer": "2- Biển 2 và 3",
                        "check": 1
                    },
                    {
                        "id": 236,
                        "answer": "3- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 237,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": "Biển 2 và biển 3 không cấm xe ô tô (không rơ móc) nên đều sai. Biển 1 cấm xe ô tô nhưng không cấm xe hai bánh.",
                "top50": 1
            },
            {
                "id": 85,
                "content": "Biển nào cấm ô tô tải?",
                "img": "https://i.imgur.com/40StUIQ.png",
                "answers": [
                    {
                        "id": 238,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 239,
                        "answer": "2- Biển 2 và 3",
                        "check": 0
                    },
                    {
                        "id": 240,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 86,
                "content": "Biển nào cấm máy kéo?",
                "img": "https://i.imgur.com/ecFESpP.png",
                "answers": [
                    {
                        "id": 241,
                        "answer": "1- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 242,
                        "answer": "2- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 243,
                        "answer": "3- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 244,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 87,
                "content": "Biển nào báo hiệu sắp đến chỗ giao nhau nguy hiểm?",
                "img": "https://i.imgur.com/ambscop.png",
                "answers": [
                    {
                        "id": 245,
                        "answer": "1- Biển 1 và 3",
                        "check": 1
                    },
                    {
                        "id": 246,
                        "answer": "2- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 247,
                        "answer": "3- Biển 2 và 3",
                        "check": 0
                    },
                    {
                        "id": 248,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 88,
                "content": "Biển nào báo hiệu sắp đến chỗ giao nhau với đường sắt có rào chắn?",
                "img": "https://i.imgur.com/6SuWKuD.png",
                "answers": [
                    {
                        "id": 249,
                        "answer": "1- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 250,
                        "answer": "2- Biển 2 và 3",
                        "check": 1
                    },
                    {
                        "id": 251,
                        "answer": "3- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 252,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 89,
                "content": "Biển báo nào báo hiệu giao nhau có tín hiệu đèn?",
                "img": "https://i.imgur.com/6SuWKuD.png",
                "answers": [
                    {
                        "id": 253,
                        "answer": "1- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 254,
                        "answer": "2- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 255,
                        "answer": "3- Biển 2",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 90,
                "content": "Biển báo nào báo hiệu nguy hiểm giao nhau với đường sắt?",
                "img": "https://i.imgur.com/BWp8N5Q.png",
                "answers": [
                    {
                        "id": 256,
                        "answer": "1- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 257,
                        "answer": "2- Biển 1 và 3",
                        "check": 1
                    },
                    {
                        "id": 258,
                        "answer": "3- Cả ba biển",
                        "check": 0
                    },
                    {
                        "id": 259,
                        "answer": "4- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 91,
                "content": "Biển báo nào báo hiệu đường sắt giao nhau với đường bộ không có rào chắn?",
                "img": "https://i.imgur.com/yjyYxWh.png",
                "answers": [
                    {
                        "id": 260,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 261,
                        "answer": "2- Biển 2 và 3",
                        "check": 0
                    },
                    {
                        "id": 262,
                        "answer": "3- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 263,
                        "answer": "4- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 92,
                "content": "Biển báo nào báo hiệu cửa chui?",
                "img": "https://i.imgur.com/AClSZ18.png",
                "answers": [
                    {
                        "id": 264,
                        "answer": "1- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 265,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 266,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 93,
                "content": "Biển báo nào báo hiệu \"Hết đoạn đường ưu tiên\"?",
                "img": "https://i.imgur.com/Rrohsi0.png",
                "answers": [
                    {
                        "id": 267,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 268,
                        "answer": "2- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 269,
                        "answer": "3- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 270,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 94,
                "content": "Biển báo nào báo hiệu, chỉ dẫn xe đi đường này được quyền ưu tiên qua nơi giao nhau?",
                "img": "https://i.imgur.com/yddvVV8.png",
                "answers": [
                    {
                        "id": 271,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 272,
                        "answer": "2- Biển 3",
                        "check": 0
                    },
                    {
                        "id": 273,
                        "answer": "3- Biển 2",
                        "check": 0
                    }
                ],
                "explain": "Biển 1 là giao nhau với đường không ưu tiên (được ưu tiên). Biển 3 là bắt đầu vào đường ưu tiên (nên cũng được ưu tiên). Vì vậy hai biển này đều đúng.",
                "top50": 1
            },
            {
                "id": 95,
                "content": "Biển báo nào báo hiệu giao nhau với đường không ưu tiên?",
                "img": "https://i.imgur.com/yddvVV8.png",
                "answers": [
                    {
                        "id": 274,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 275,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 276,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 96,
                "content": "Biển báo nào báo hiệu giao nhau với đường ưu tiên?",
                "img": "https://i.imgur.com/yddvVV8.png",
                "answers": [
                    {
                        "id": 277,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 278,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 279,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": "Biển 1 là giao nhau với đường không ưu tiên. Biển 3 là bắt đầu vào đường ưu tiên. Chú ý nhầm biển đường ưu tiên và biển đường không ưu tiên.",
                "top50": 1
            },
            {
                "id": 97,
                "content": "Biến báo nào báo hiệu nguy hiểm đường bị hẹp?",
                "img": "https://i.imgur.com/94ixZ4F.png",
                "answers": [
                    {
                        "id": 280,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 281,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 282,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 98,
                "content": "Khi gặp biển báo nào người lái xe phải giảm tốc độ, chú ý xe đi ngược chiều, xe đi phía đường bị hẹp phải nhường đường cho xe đi ngược chiều?",
                "img": "https://i.imgur.com/aBMVE3A.png",
                "answers": [
                    {
                        "id": 283,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 284,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 285,
                        "answer": "3- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 286,
                        "answer": "4- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 99,
                "content": "Biển báo nào báo hiệu giao nhau với đường ưu tiên?",
                "img": "https://i.imgur.com/joPYqrq.png",
                "answers": [
                    {
                        "id": 287,
                        "answer": "1- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 288,
                        "answer": "2- Biển 1 và 2",
                        "check": 1
                    },
                    {
                        "id": 289,
                        "answer": "3- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 100,
                "content": "Biển báo nào báo hiệu \"Đường giao nhau\" của các tuyến đường cùng cấp?",
                "img": "https://i.imgur.com/joPYqrq.png",
                "answers": [
                    {
                        "id": 290,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 291,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 292,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 101,
                "content": "Biển báo nào báo hiệu giao nhau với đường không ưu tiên?",
                "img": "https://i.imgur.com/joPYqrq.png",
                "answers": [
                    {
                        "id": 293,
                        "answer": "1- Không biển nào",
                        "check": 0
                    },
                    {
                        "id": 294,
                        "answer": "2- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 295,
                        "answer": "3- Biển 2 và 3",
                        "check": 1
                    },
                    {
                        "id": 296,
                        "answer": "4- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 102,
                "content": "Biển báo nào báo hiệu đường hai chiều?",
                "img": "https://i.imgur.com/bivIT9L.png",
                "answers": [
                    {
                        "id": 297,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 298,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 299,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 103,
                "content": "Biển báo nào báo hiệu phải giảm tốc độ, nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp?",
                "img": "https://i.imgur.com/bivIT9L.png",
                "answers": [
                    {
                        "id": 300,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 301,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 302,
                        "answer": "3- Biển 3",
                        "check": 1
                    },
                    {
                        "id": 303,
                        "answer": "4- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 104,
                "content": "Biển nào chỉ dẫn được ưu tiên qua đường hẹp?",
                "img": "https://i.imgur.com/bivIT9L.png",
                "answers": [
                    {
                        "id": 304,
                        "answer": "1- Biển 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 305,
                        "answer": "2- Biển 1 và 2",
                        "check": 1
                    },
                    {
                        "id": 306,
                        "answer": "3- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 105,
                "content": "Biển nào báo hiệu cấm xe mô tô ba bánh đi vào?",
                "img": "https://i.imgur.com/GIsOTgI.png",
                "answers": [
                    {
                        "id": 307,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 308,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 309,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": "Biển 1 cấm phương tiện 3 bánh trở xuống. Biển 2 cấm phương tiện 3 bánh trở lên.",
                "top50": 1
            },
            {
                "id": 106,
                "content": "Biển nào báo hiệu cấm xe mô tô hai bánh đi vào?",
                "img": "https://i.imgur.com/GIsOTgI.png",
                "answers": [
                    {
                        "id": 310,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 311,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 312,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 107,
                "content": "Khi gặp biển nào thì xe mô tô hai bánh được đi vào?",
                "img": "https://i.imgur.com/YKkP22F.png",
                "answers": [
                    {
                        "id": 313,
                        "answer": "1- Không biển nào",
                        "check": 0
                    },
                    {
                        "id": 314,
                        "answer": "2- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 315,
                        "answer": "3- Biển 2 và 3",
                        "check": 1
                    },
                    {
                        "id": 316,
                        "answer": "4- Cả 3 biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 108,
                "content": "Biển nào xe mô tô hai bánh được đi vào?",
                "img": "https://i.imgur.com/YKkP22F.png",
                "answers": [
                    {
                        "id": 317,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 318,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 319,
                        "answer": "3- Cả ba biển",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 109,
                "content": "Biển nào xe mô tô hai bánh không được đi vào?",
                "img": "https://i.imgur.com/u7CdQl6.png",
                "answers": [
                    {
                        "id": 320,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 321,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 322,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 110,
                "content": "Ba biển này có ý nghĩa hiệu lực như nào?",
                "img": "https://i.imgur.com/LHkllGD.png",
                "answers": [
                    {
                        "id": 323,
                        "answer": "1- Cấm các loại xe ở biển phụ đi vào",
                        "check": 1
                    },
                    {
                        "id": 324,
                        "answer": "2- Cấm các loại xe cơ giới đi vào trừ loại xe ở biển phụ",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 111,
                "content": "Biển nào cho phép ô tô con được vượt?",
                "img": "https://i.imgur.com/08J8acR.png",
                "answers": [
                    {
                        "id": 325,
                        "answer": "1- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 326,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 327,
                        "answer": "3- Biển 2 và 3",
                        "check": 0
                    }
                ],
                "explain": "Biển 2 cấm ô tô con vượt lên, nên không chọn. Biển 1 hết lệnh cấm vượt nên ô tô con được vượt. Biển 3 cấm xe tải vượt nên ô tô con được vượt.",
                "top50": 1
            },
            {
                "id": 112,
                "content": "Biển nào không cho phép ô tô con vượt?",
                "img": "https://i.imgur.com/08J8acR.png",
                "answers": [
                    {
                        "id": 328,
                        "answer": "4- Biển 1 và 3",
                        "check": 1
                    },
                    {
                        "id": 329,
                        "answer": "1- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 330,
                        "answer": "2- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 331,
                        "answer": "3- Biển 3",
                        "check": 0
                    }
                ],
                "explain": "Biển 1 hết hiệu lực cấm vượt. Biển 3 cấm ô tô tải vượt nên không áp dụng với ô tô con. Nên chỉ có biển 2 là được áp dụng.",
                "top50": 1
            },
            {
                "id": 113,
                "content": "Biển nào cấm ô tô tải vượt?",
                "img": "https://i.imgur.com/08J8acR.png",
                "answers": [
                    {
                        "id": 332,
                        "answer": "1- Biển 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 333,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 334,
                        "answer": "3- Biển 2 và 3",
                        "check": 0
                    },
                    {
                        "id": 335,
                        "answer": "4- Biển 1 và 3",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 1
            },
            {
                "id": 114,
                "content": "Biển nào cấm quay xe?",
                "img": "https://i.imgur.com/7YhDUNW.png",
                "answers": [
                    {
                        "id": 336,
                        "answer": "1- Biển 1",
                        "check": 0
                    },
                    {
                        "id": 337,
                        "answer": "2- Biển 2",
                        "check": 1
                    },
                    {
                        "id": 338,
                        "answer": "3- Không biển nào",
                        "check": 0
                    }
                ],
                "explain": "Đáp án theo quy chuẩn QCVN41:2012 thì Biển 1: Cấm rẽ trái và cấm cả quay đầu. Biển 2 cấm quay đầu nhưng được rẽ trái. Do đó câu trả lời đúng là cả Biển 1 và Biển 2.",
                "top50": 1
            },
            {
                "id": 115,
                "content": "Biển nào cấm rẽ trái?",
                "img": "https://i.imgur.com/aKh39NJ.png",
                "answers": [
                    {
                        "id": 339,
                        "answer": "1- Biển 1",
                        "check": 1
                    },
                    {
                        "id": 340,
                        "answer": "2- Biển 2",
                        "check": 0
                    },
                    {
                        "id": 341,
                        "answer": "3- Cả 2 biển",
                        "check": 0
                    }
                ],
                "explain": "Đáp án theo quy chuẩn QCVN41:2012 thì Biển 1: Cấm rẽ trái và cấm cả quay đầu. Biển 2 cấm quay đầu nhưng được rẽ trái.",
                "top50": 1
            }
        ]
    },
    {
        "id": 5,
        "type": "Giải các thế sa hình",
        "description": "Có 5/35 câu hỏi: \nCâu 116 đến câu 150",
        "questions": [
            {
                "id": 116,
                "content": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/356.jpg",
                "answers": [
                    {
                        "id": 342,
                        "answer": "1- Xe tải, xe lam, xe con, mô tô",
                        "check": 0
                    },
                    {
                        "id": 343,
                        "answer": "2- Xe tải, mô tô, xe lam, xe con",
                        "check": 1
                    },
                    {
                        "id": 344,
                        "answer": "3- Xe lam, xe tải, xe con, mô tô",
                        "check": 0
                    },
                    {
                        "id": 345,
                        "answer": "4- Mô tô, xe lam, xe tải, xe con",
                        "check": 0
                    }
                ],
                "explain": "Theo thứ tự:\n\n1. Không có xe vào giao lộ.\n2. Không có xe ưu tiên.\n3. Theo đường ưu tiên: Xe tải và xe mô tô nằm trên đường ưu tiên nên được đi trước. Trong đó, xe tải đi thẳng nên được đi trước, còn lại là xe mô tô. Tương tự: xe lam và xe con cùng nằm trên đường không ưu tiên, tuy nhiên xe lam đi thẳng nên được đi trước, xe con rẽ trái đi sau cùng.",
                "top50": 0
            },
            {
                "id": 117,
                "content": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/359.jpg",
                "answers": [
                    {
                        "id": 346,
                        "answer": "1- Xe tải, xe lam, mô tô",
                        "check": 0
                    },
                    {
                        "id": 347,
                        "answer": "2- Xe lam, xe tải, mô tô",
                        "check": 0
                    },
                    {
                        "id": 348,
                        "answer": "3- Mô tô, xe lam, xe tải",
                        "check": 1
                    },
                    {
                        "id": 349,
                        "answer": "4- Xe lam, mô tô, xe tải",
                        "check": 0
                    }
                ],
                "explain": "Theo thứ tự\n\n1. Không có xe đã vào giao lộ.\n2. Không có xe ưu tiên.\n3. Không có biển báo hiệu đường ưu tiên.\n4. Vậy các xe cùng cấp: Xe bên phải trống được đi trước: vậy là xe mô tô đi trước, sau khi mô tô đi rồi thì bên phải xe lam trống nên xe lam đi tiếp theo, cuối cùng là xe tải.",
                "top50": 1
            },
            {
                "id": 118,
                "content": "Trường hợp này xe nào được quyền đi trước?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/361.jpg",
                "answers": [
                    {
                        "id": 350,
                        "answer": "1- Mô tô",
                        "check": 0
                    },
                    {
                        "id": 351,
                        "answer": "2- Xe con",
                        "check": 1
                    }
                ],
                "explain": "Xe mô tô gặp biển STOP nên dừng lại nhường đường.",
                "top50": 1
            },
            {
                "id": 119,
                "content": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/362.jpg",
                "answers": [
                    {
                        "id": 352,
                        "answer": "1- Xe lam, xe cứu thương, xe con",
                        "check": 1
                    },
                    {
                        "id": 353,
                        "answer": "2- Xe cứu thương, xe con, xe lam",
                        "check": 0
                    },
                    {
                        "id": 354,
                        "answer": "3- Xe con, xe lam, xe cứu thương",
                        "check": 0
                    }
                ],
                "explain": "Giải thích: Theo thứ tự\n\n1. Xe lam đã vào giao lộ nên được đi trước.\n2. Xe cứu thương là xe ưu tiên nên đi tiếp theo.\n3. Cuối cùng là xe con",
                "top50": 1
            },
            {
                "id": 120,
                "content": "Xe nào được quyền đi trước trong trường hợp này?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/364.jpg",
                "answers": [
                    {
                        "id": 355,
                        "answer": "1– Mô tô",
                        "check": 0
                    },
                    {
                        "id": 356,
                        "answer": "2- Xe cứu thương",
                        "check": 1
                    }
                ],
                "explain": "Xe cứu thương là xe ưu tiên nên được đi trước.",
                "top50": 1
            },
            {
                "id": 121,
                "content": "Theo tín hiệu đèn, xe nào được phép đi?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/368.jpg",
                "answers": [
                    {
                        "id": 357,
                        "answer": "1- Xe con và xe khách",
                        "check": 1
                    },
                    {
                        "id": 358,
                        "answer": "2- Mô tô",
                        "check": 0
                    }
                ],
                "explain": "Xe con và xe khách đèn xanh nên được đi.",
                "top50": 1
            },
            {
                "id": 122,
                "content": "Theo tín hiệu đèn, xe nào được quyền đi là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/369.jpg",
                "answers": [
                    {
                        "id": 359,
                        "answer": "1- Xe khách, mô tô",
                        "check": 0
                    },
                    {
                        "id": 360,
                        "answer": "2- Xe tải, mô tô",
                        "check": 0
                    },
                    {
                        "id": 361,
                        "answer": "3- Xe con, xe tải",
                        "check": 1
                    }
                ],
                "explain": "Xe con và xe tải đèn xanh nên được đi.",
                "top50": 1
            },
            {
                "id": 123,
                "content": "Các xe đi theo mũi tên, xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/372.jpg",
                "answers": [
                    {
                        "id": 362,
                        "answer": "1- Xe khách, xe tải, mô tô",
                        "check": 1
                    },
                    {
                        "id": 363,
                        "answer": "2- Xe tải, xe con, mô tô",
                        "check": 0
                    },
                    {
                        "id": 364,
                        "answer": "3- Xe khách, xe con, mô tô",
                        "check": 0
                    }
                ],
                "explain": "Xe khách đi sai hướng (lẽ ra phải rẽ trái). Xe tải vượt đèn đỏ. Xe mô tô đi sai hướng (lẽ ra phải rẽ trái)",
                "top50": 1
            },
            {
                "id": 124,
                "content": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/373.jpg",
                "answers": [
                    {
                        "id": 365,
                        "answer": "1– Xe khách, xe tải, mô tô, xe con",
                        "check": 0
                    },
                    {
                        "id": 366,
                        "answer": "2- Xe con, xe khách, xe tải, mô tô",
                        "check": 0
                    },
                    {
                        "id": 367,
                        "answer": "3- Mô tô, xe tải, xe khách, xe con",
                        "check": 1
                    },
                    {
                        "id": 368,
                        "answer": "4- Mô tô, xe tải, xe con, xe khách",
                        "check": 0
                    }
                ],
                "explain": "Nơi giao nhau cùng cấp, không có biển báo hiệu đi theo vòng xuyến thì nhường cho xe bên phải. Bên phải xe mô tô không vướng xe khác nên không phải nhường. Xe mô tô đi trước. Sau khi mô tô đi rồi thì xe tải bên phải không vướng nên đi tiếp theo. Cứ như vậy cho đến hết.",
                "top50": 1
            },
            {
                "id": 125,
                "content": "Trong trường hợp này xe nào đỗ vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/374.jpg",
                "answers": [
                    {
                        "id": 369,
                        "answer": "1- Xe tải",
                        "check": 1
                    },
                    {
                        "id": 370,
                        "answer": "2- Xe con và mô tô",
                        "check": 0
                    },
                    {
                        "id": 371,
                        "answer": "3- Cả ba xe",
                        "check": 0
                    },
                    {
                        "id": 372,
                        "answer": "4- Xe con và xe tải",
                        "check": 0
                    }
                ],
                "explain": "Quan sát biển báo phụ bên dưới biển cấm dừng và đỗ, đó là hình xe tải. Ý nghĩa: cấm xe tải dừng và đỗ ở đây.",
                "top50": 1
            },
            {
                "id": 126,
                "content": "Xe nào được quyền đi trước?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/375.jpg",
                "answers": [
                    {
                        "id": 373,
                        "answer": "1- Xe tải",
                        "check": 0
                    },
                    {
                        "id": 374,
                        "answer": "2- Xe con",
                        "check": 1
                    },
                    {
                        "id": 375,
                        "answer": "3- Xe lam",
                        "check": 0
                    }
                ],
                "explain": "Xe con nằm trên đường ưu tiên nên được đi trước.",
                "top50": 1
            },
            {
                "id": 127,
                "content": "Theo mũi tên, những hướng nào xe gắn máy đi được?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/376.jpg",
                "answers": [
                    {
                        "id": 376,
                        "answer": "1- Cả ba hướng",
                        "check": 1
                    },
                    {
                        "id": 377,
                        "answer": "2- Hướng 1 và 3",
                        "check": 0
                    },
                    {
                        "id": 378,
                        "answer": "3- Chỉ hướng 1",
                        "check": 0
                    }
                ],
                "explain": "Hướng số 2 cấm xe mô tô nên xe gắn máy vào được.",
                "top50": 1
            },
            {
                "id": 128,
                "content": "Xe nào đỗ vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/377.jpg",
                "answers": [
                    {
                        "id": 379,
                        "answer": "1- Cả hai xe",
                        "check": 1
                    },
                    {
                        "id": 380,
                        "answer": "2- Không xe nào vi phạm",
                        "check": 0
                    },
                    {
                        "id": 381,
                        "answer": "3- Chỉ xe mô tô vi phạm",
                        "check": 0
                    },
                    {
                        "id": 382,
                        "answer": "4- Chỉ xe tải vi phạm",
                        "check": 0
                    }
                ],
                "explain": "Biển phụ dặt dưới biển báo cấm dừng và đỗ mang ý nghĩa là: Cấm dừng và đỗ phía trước và sau biển này.",
                "top50": 1
            },
            {
                "id": 129,
                "content": "Xe nào đỗ vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/378.jpg",
                "answers": [
                    {
                        "id": 383,
                        "answer": "1- Mô tô",
                        "check": 0
                    },
                    {
                        "id": 384,
                        "answer": "2- Xe tải",
                        "check": 0
                    },
                    {
                        "id": 385,
                        "answer": "3- Cả ba xe",
                        "check": 1
                    },
                    {
                        "id": 386,
                        "answer": "4- Mô tô và xe tải",
                        "check": 0
                    }
                ],
                "explain": "Xe tải đỗ ngược chiều. Xe mô tô đỗ trên vạch người đi bộ. Xe con cán qua vạch dừng.",
                "top50": 1
            },
            {
                "id": 130,
                "content": "Xe tải kéo mô tô ba bánh như hình này có đúng quy tắc giao thông không?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/379.jpg",
                "answers": [
                    {
                        "id": 387,
                        "answer": "1- Đúng",
                        "check": 0
                    },
                    {
                        "id": 388,
                        "answer": "2- Không đúng",
                        "check": 1
                    }
                ],
                "explain": "Có biển báo cấm ô tô kéo mooc. Với lại, theo quy định, ô tô không được kéo xe mô tô.",
                "top50": 1
            },
            {
                "id": 131,
                "content": "Xe nào được quyền đi trước trong trường hợp này?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/386.jpg",
                "answers": [
                    {
                        "id": 389,
                        "answer": "1- Xe lam",
                        "check": 0
                    },
                    {
                        "id": 390,
                        "answer": "2- Xe xích lô",
                        "check": 1
                    }
                ],
                "explain": "Xe cùng cấp, xe nào bên phải trống được đi trước.",
                "top50": 1
            },
            {
                "id": 132,
                "content": "Thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/389.jpg",
                "answers": [
                    {
                        "id": 391,
                        "answer": "1- Xe lam, mô tô, xe con, xe đạp",
                        "check": 0
                    },
                    {
                        "id": 392,
                        "answer": "2- Xe con, xe đạp, mô tô, xe lam",
                        "check": 0
                    },
                    {
                        "id": 393,
                        "answer": "3- Xe lam, xe con, mô tô + xe đạp",
                        "check": 0
                    },
                    {
                        "id": 394,
                        "answer": "4- Mô tô + xe đạp, xe lam, xe con",
                        "check": 1
                    }
                ],
                "explain": "Xe con vượt qua vạch liền nên vi phạm.",
                "top50": 1
            },
            {
                "id": 133,
                "content": "Xe nào được quyền đi trước trong trường hợp này?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/394.jpg",
                "answers": [
                    {
                        "id": 395,
                        "answer": "1- Mô tô",
                        "check": 1
                    },
                    {
                        "id": 396,
                        "answer": "2- Xe con",
                        "check": 0
                    }
                ],
                "explain": "Người điều khiển giao thông giơ tay thẳng đứng thì tất cả các xe phải dừng lại, trừ xe đã vào giao lộ.",
                "top50": 1
            },
            {
                "id": 134,
                "content": "Xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/396.jpg",
                "answers": [
                    {
                        "id": 397,
                        "answer": "1- Xe khách",
                        "check": 0
                    },
                    {
                        "id": 398,
                        "answer": "2- Mô tô",
                        "check": 0
                    },
                    {
                        "id": 399,
                        "answer": "3- Xe con",
                        "check": 1
                    },
                    {
                        "id": 400,
                        "answer": "4- Xe con và mô tô",
                        "check": 0
                    }
                ],
                "explain": "Người điều khiển giao thông giơ 2 tay dang ngang thì phía trước và phía sau người điều khiển phải dừng lại, bên phải và bên trái được đi.",
                "top50": 1
            },
            {
                "id": 135,
                "content": "Các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/397.jpg",
                "answers": [
                    {
                        "id": 401,
                        "answer": "1- Các xe ở phía tay phải và tay trái của người điều khiển được phép đi thẳng",
                        "check": 0
                    },
                    {
                        "id": 402,
                        "answer": "2- Cho phép các xe ở mọi hướng được rẽ phải",
                        "check": 0
                    },
                    {
                        "id": 403,
                        "answer": "3- Tất cả các xe phải dừng lại trước ngã tư, trừ những xe đã ở trong ngã tư được phép tiếp tục đi",
                        "check": 1
                    }
                ],
                "explain": "Biển báo Hướng đi thẳng phải theo. Trong khi đó, xe con đang có ý định rẽ trái, xe mô tô có ý định rẽ phải nên vi phạm.",
                "top50": 1
            },
            {
                "id": 136,
                "content": "Theo hướng mũi tên, xe nào được phép đi?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/398.jpg",
                "answers": [
                    {
                        "id": 404,
                        "answer": "1- Mô tô, xe con",
                        "check": 0
                    },
                    {
                        "id": 405,
                        "answer": "2- Xe con, xe tải",
                        "check": 0
                    },
                    {
                        "id": 406,
                        "answer": "3- Mô tô, xe tải",
                        "check": 1
                    },
                    {
                        "id": 407,
                        "answer": "4- Cả ba xe",
                        "check": 0
                    }
                ],
                "explain": "Bạn nhìn thấy biến báo Giao nhau với đường ưu tiên, bên dưới biển báo chính có gắn thêm biển phụ chỉ hướng đường ưu tiên. Như vậy, xe mô tô nằm trên đường ưu tiên nên được đi trước. Xe con và xe của bạn nằm trên đường không ưu tiên, nhường xe bên phải nên xe con đi trước xe của bạn.",
                "top50": 1
            },
            {
                "id": 137,
                "content": "Trong hình dưới đây, xe nào chấp hành đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/407-1.jpg",
                "answers": [
                    {
                        "id": 408,
                        "answer": "1- Xe khách, mô tô",
                        "check": 0
                    },
                    {
                        "id": 409,
                        "answer": "2- Tất cả các loại xe trên",
                        "check": 1
                    },
                    {
                        "id": 410,
                        "answer": "3- Không xe nào chấp hành đúng quy tắc giao thông",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 138,
                "content": "Theo hướng mũi tên, những hướng nào xe mô tô được phép đi.",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/408.jpg",
                "answers": [
                    {
                        "id": 411,
                        "answer": "1- Cả ba hướng",
                        "check": 0
                    },
                    {
                        "id": 412,
                        "answer": "2- Hướng 1 và 2",
                        "check": 0
                    },
                    {
                        "id": 413,
                        "answer": "3- Hướng 1 và 3",
                        "check": 1
                    },
                    {
                        "id": 414,
                        "answer": "4- Hướng 2 và 3",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 139,
                "content": "Trong trường hợp này, thứ tự các xe đi như thế nào là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/409.jpg",
                "answers": [
                    {
                        "id": 415,
                        "answer": "1- Xe công an, xe quân sự, xe con + mô tô",
                        "check": 0
                    },
                    {
                        "id": 416,
                        "answer": "2- Xe quân sự, xe công an, xe con + mô tô",
                        "check": 1
                    },
                    {
                        "id": 417,
                        "answer": "3- Xe mô tô + xe con, xe quân sự, xe công an",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 140,
                "content": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/412.jpg",
                "answers": [
                    {
                        "id": 418,
                        "answer": "1- Xe con (E), mô tô (C)",
                        "check": 1
                    },
                    {
                        "id": 419,
                        "answer": "2- Xe tải (A), mô tô (D)",
                        "check": 0
                    },
                    {
                        "id": 420,
                        "answer": "3- Xe khách (B), mô tô (C)",
                        "check": 0
                    },
                    {
                        "id": 421,
                        "answer": "4- Xe khách (B), mô tô (D)",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 141,
                "content": "Trong hình dưới, những xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/417.jpg",
                "answers": [
                    {
                        "id": 422,
                        "answer": "1- Xe con (B), mô tô (C)",
                        "check": 0
                    },
                    {
                        "id": 423,
                        "answer": "2- Xe con (A), mô tô (C)",
                        "check": 0
                    },
                    {
                        "id": 424,
                        "answer": "3- Xe con (E), mô tô (D)",
                        "check": 1
                    },
                    {
                        "id": 425,
                        "answer": "4- Tất cả các loại xe trên",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 142,
                "content": "Theo tín hiệu đèn, xe nào phải dừng lại là đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/422.jpg",
                "answers": [
                    {
                        "id": 426,
                        "answer": "1- Xe khách, mô tô",
                        "check": 0
                    },
                    {
                        "id": 427,
                        "answer": "2- Xe tải, mô tô",
                        "check": 0
                    },
                    {
                        "id": 428,
                        "answer": "3- Xe con, xe tải",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 143,
                "content": "Bạn có được phép vượt xe mô tô phía trước không?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/425.jpg",
                "answers": [
                    {
                        "id": 429,
                        "answer": "1- Cho phép",
                        "check": 0
                    },
                    {
                        "id": 430,
                        "answer": "2- Không được vượt",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 144,
                "content": "Theo tín hiệu đèn của xe cơ giới, xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/428.jpg",
                "answers": [
                    {
                        "id": 431,
                        "answer": "1- Xe mô tô",
                        "check": 1
                    },
                    {
                        "id": 432,
                        "answer": "2- Xe ô tô con",
                        "check": 1
                    },
                    {
                        "id": 433,
                        "answer": "3- Không xe nào vi phạm",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 145,
                "content": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/429.jpg",
                "answers": [
                    {
                        "id": 434,
                        "answer": "1- Xe con",
                        "check": 0
                    },
                    {
                        "id": 435,
                        "answer": "2- Xe tải",
                        "check": 1
                    },
                    {
                        "id": 436,
                        "answer": "3- Xe con, xe tải",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 146,
                "content": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/430.jpg",
                "answers": [
                    {
                        "id": 437,
                        "answer": "1- Xe tải, xe con",
                        "check": 0
                    },
                    {
                        "id": 438,
                        "answer": "2- Xe khách, xe con",
                        "check": 0
                    },
                    {
                        "id": 439,
                        "answer": "3- Xe khách, xe tải",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 147,
                "content": "Các xe đi theo hướng mũi tên, xe nào vi phạm quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/431.jpg",
                "answers": [
                    {
                        "id": 440,
                        "answer": "1- Xe con, xe tải, xe khách",
                        "check": 0
                    },
                    {
                        "id": 441,
                        "answer": "2- Xe tải, xe khách, xe mô tô",
                        "check": 1
                    },
                    {
                        "id": 442,
                        "answer": "3- Xe khách, xe mô tô, xe con",
                        "check": 0
                    },
                    {
                        "id": 443,
                        "answer": "4- Cả bốn xe",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 148,
                "content": "Các xe đi theo hướng mũi tên, xe nào chấp hành đúng quy tắc giao thông?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/434.jpg",
                "answers": [
                    {
                        "id": 444,
                        "answer": "1- Xe tải, mô tô",
                        "check": 0
                    },
                    {
                        "id": 445,
                        "answer": "2- Xe khách, mô tô",
                        "check": 1
                    },
                    {
                        "id": 446,
                        "answer": "3- Xe tải, xe con",
                        "check": 0
                    },
                    {
                        "id": 447,
                        "answer": "4- Mô tô, xe con",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 149,
                "content": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/436.jpg",
                "answers": [
                    {
                        "id": 448,
                        "answer": "1- Xe của bạn, mô tô, xe con",
                        "check": 0
                    },
                    {
                        "id": 449,
                        "answer": "2- Xe con, xe của bạn, mô tô",
                        "check": 0
                    },
                    {
                        "id": 450,
                        "answer": "3- Mô tô, xe con, xe của bạn",
                        "check": 1
                    }
                ],
                "explain": null,
                "top50": 0
            },
            {
                "id": 150,
                "content": "Các xe đi theo thứ tự nào là đúng quy tắc giao thông đường bộ?",
                "img": "https://hoclaixemoto.com/wp-content/uploads/2019/07/437.jpg",
                "answers": [
                    {
                        "id": 451,
                        "answer": "1- Xe của bạn, mô tô, xe con",
                        "check": 0
                    },
                    {
                        "id": 452,
                        "answer": "2- Xe con, xe của bạn, mô tô",
                        "check": 1
                    },
                    {
                        "id": 453,
                        "answer": "3- Mô tô, xe con, xe của bạn",
                        "check": 0
                    }
                ],
                "explain": null,
                "top50": 0
            }
        ]
    }
]