//1. Đếm số sinh viên có điểm trung bình từ 5 trở lên. 
db.sinhvien.find(
    {
        diemTB: { $gte: 5}
    }
).count()

//3.Liệt kê danh sách sinh viên không có số điện thoại hoặc email. 
db.sinhvien.find(
    {
        $or: [
            {
                dsDienthoai: { $size:  0}
            },
            {
                email: {$size: 0 }
            }
        ]
    }
)

// 4. Liệt kê danh sách sinh viên có từ 2 số điện thoại trở lên. 
db.sinhvien.find(
    {
        $and: [
            {
                dsDienthoai: {$not : {$size: 0}}
            },
            {
                dsDienthoai: {$not : {$size: 1}}
            }
        ]
    }
)

//5. Liệt kê danh sách sinh viên có lót chữ “Văn”, không phân biệt chữ hoa chữ thường.
db.sinhvien.find(
    {
        ho: { $regex: /Văn$/i}
    }
)

