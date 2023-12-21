// 1. Xuất toàn bộ danh sách xe máy.
db.xe.find({
    $or:[
        {
            'local.tenloai' : {$eq: 'Xe gắn máy'}
        },
        {
            'loai.tenloai' : {$eq: 'Xe máy'}
        }
    ]
})

// 6. Xuất danh sách xe máy Honda có giá từ 15.000.000 trở lên. 
db.xe.find({
    $and:[
        {
            'ten' : { $eq: 'Honda'}
        },
        {
            gia: {$gte: 15000000}
        }
    ]
})

//9. Đếm có bao nhiêu xe có năm sản xuất 1992. 
db.xe.find({
    namsx: { $eq : 1992}

}).count()

// 11. Cập nhật mã loại của ô tô thành ‘001CAR’. 
db.xe.updateMany(
    {
        'loai.tenloai' : { $eq :  'Ô tô'}
    },
    {
        $set: { 
            'loai.maloai' : '001CAR'
        }
    }
)

// 12. Cập nhật giá của tất cả giá xe máy tăng thêm 1.000.000. 
db.xe.updateMany(
    {
        $or: [
            {
                'loai.tenloai' : {$eq : 'Xe gắn máy'}
            },
            {
                'loai.tenloai' :  {$eq: 'Xe máy'}
            }
        ]
    },
    {
        $inc: {
            gia: 1000000
        }
    }
)

// 13. Cập nhật giá của tất cả giá ô tô lên 0.5 lần. 
db.xe.updateMany(
    {
        'loai.tenloai':  { $eq:  'Ô tô'}
    },
    {
        $mul : {
            gia: 1.5
        }
    }
)

// 15. Thêm 1 thuộc tính màu xe có các giá trị đỏ, đen, trắng cho tất cả xe ô tô.
db.Xe.update(
    {
        'loai.tenloai' : { $eq: 'Ô tô'}
    },
    {
        $set: {
            mauxe: [ 'đỏ', 'đen', 'trắng' ]
        }
    },
    {
        upsert: false,
        multi: true
    }
)

//9. Tất cả xe Ford có năm sản xuất từ trước năm 2000 được cập nhật ngày bán là ngày hiện hành.
db.xe.updateMany(
    {
        $and: [
            {
                ten : 'Ford'
            },
            {
                namsx: { $lt: 2000}
            }
        ]
    },
    {
        $set: {
            ngayban : new Date()
        }
    }
)

// 10. Đổi tất cả tên thuộc tính của tất cả các document trong collection Xe sang English 
// (Ví dụ: tenname,namsxyear, loai categories, …)
db.xe.updateMany(
    {},
    {
        $rename: {
            'ma' : 'id',
            'ten' : 'name',
            'namsv' : 'year',
            'hinhanh': 'image',
            'loai': 'categories'
        }
    }
)

// 11. Các xe Ford được cập nhật thêm thuộc tính như sau soluong(20,30,50).
db.xe.updateMany(
    {
        ten: {$eq :  'Ford'}
    },
    {
        $set: {
            soluong : [20, 30, 50]
        }
    }
)