
//Thêm một file .json vào database

//mongoimport --db <tên_database> --collection <tên_collection> --file <đường_dẫn_đến_file_json>
//ex: di chuyển tới folder chứa file.json và gõ:  mongoimport --db truonghoc --collection lophoc --file lophoc.json

//Bài tập về collection restaurants

// 1. Hiển thị tất cả các documents có trong collection restaurants.
db.restaurants.find()

// 2. Hiển thị tất cả các documents có trong collection restaurants, tuy nhiên chỉ xuất các fields
// restaurant_id, name, borough and zip code và không xuất field _id.
db.restaurants.find({ restaurant_id: 1, borough: 1, zip: 1, _id: 0 })

// 3. Hiển thị 5 documents tiếp theo sau khi bỏ qua 5 documents đầu tiên có trong collection
// restaurants với field borough có giá trị là Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5).skip(5)

// 4. Hiển thị tất cả các documents có trong collection restaurants với điều kiện score trong field
// grades lớn hơn 80 và nhỏ hơn 100.
db.restaurants.find({ $and: [{ 'grades.score': { $gt: 80 } }, { 'grades.score': { $lt: 100 } }] })

// 5. Hiển thị tất cả các documents có trong collection restaurants với điều kiện giá trị coord trong
// field address nhỏ hơn -95.754168
db.restaurants.find({ "address.crood": { $lt: -95.754168 } })

// 6.Hiển thị tất cả các documents có trong collection restaurants, tuy nhiên chỉ xuất các fields restaurant Id,
//  name, borough, cuisine với name có chứa 3 ký tự bắt đầu là 'Wil'.
db.restaurant_id.find({ "name": /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })

// 7. Name có chứa 3 ký tự cuối cùng là 'ces'.
db.restaurant_id.find({ "name": /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })

// 8.Hiển thị tất cả các documents có trong collection restaurants với field cusine có giá trị là American hoặc Chinese
db.restaurants.find({ $or: [{ cuisine: 'American' }, { cuisine: 'Chinese' }] })

//cach 2:
db.restaurants.find({ cuisine: { $in: ['American', 'Chinese'] } })

// 9. Hiển thị tất cả các documents có trong collection restaurants với giá trị score của field grades không lớn hơn 10.
db.restaurants.find({ 'grades.score': { $not: { $gt: 10 } } })


//Insert

// 1.Thêm 2 documents restaurants với thông tin như sau: 
// db.restaurants.insertMany( [{ address: {street: '63 Ky Dong', zipcode: '11374'}, cuisine: 'Vietnamese', name: 'Lobster Bay', restaurant_id: '40356666', like:23000, share:4000 }, { address: {street: '73rd Floor Landmark 81', zipcode: '11374'}, cuisine: 'Vietnamese', name: 'Truffle', restaurant_id: '40357777', like:29000, share:3000 }]) 
db.restaurants.insertMany(
    [
        {
            address:
                { street: '63 Ky Dong', zipcode: '11374' },
            cuisine: 'Vietnamese',
            name: 'Lobster Bay',
            restaurant_id: '40356666'
            , like: 23000,
            share: 4000
        },
        {
            address: { street: '73rd Floor Landmark 81', zipcode: '11374' },
            cuisine: 'Vietnamese',
            name: 'Truffle',
            restaurant_id: '40357777',
            like: 29000,
            share: 3000
        }
    ]
) 

//2. Cập nhật thuộc tính assigndate là ngày hiện hành cho các document có zipcode: ’11374’. 
db.restaurants.updateMany(
    {
        'address.zipcode' : '11374'
    },
    {
        $currentDate: { assigndate  : true}
    }
)

//4. Tăng lượt like lên 100, lượt share lên 200 cho các nhà hàng Vietnamese. 
db.restaurants.updateMany(
    {
        cuisine : 'Vietnamese'
    },
    {
        $inc: {
            like: 100,
            share: 200
        }
    }
)

//Hiển thị các document thoả các điều kiện field grade = ‘A’, score = 11, 
// date= "2014-08-11T00:00:00Z".
db.restaurants.find(
    {
        $and: [
            {
                'grades.grade' :  { $eq: 'A'}
            },
            {
                'grades.score' :  { $eq : 11}
            },
            {
                'grades.date' :   ISODate("2014-08-11T00:00:00Z")
            }
        ]
    }
)

//Hiển thị các document có phần tử thứ 2 của mảng grades có grade là "A" và score là 9 
// date là "2014-08-11T00:00:00Z".
db.restaurants.find(
    {
        $and: [
            {
                'grades.1.grade' :  { $eq: 'A'}
            },
            {
                'grades.1.score' :  { $eq : 11}
            },
            {
                'grades.1.date' :   ISODate("2014-08-11T00:00:00Z")
            }
        ]
    }
)
