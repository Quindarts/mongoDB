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

