# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Brewery.create(name: "Adirondack Toboggan Company Microbrewery",
brewery_type: "micro",
street: "202A W Main St",
city: "Gouverneur",
state: "New York",
postal_code: "13642-1334",
longitude: "-75.4748923846074",
latitude: "44.3323731052224",
phone: "3157716313",
website_url: "http://www.adktoboggan.net",
img: "https://img-vimbly-com-images.imgix.net/full_photos/brewery-generic-1.jpg?auto=compress&fit=crop&h=490&ixlib=php-1.2.1&w=730"
)

Brewery.create(
    name: "Lafayette Brewing Co",
    brewery_type: "brewpub",
    street: "391 Washington St",
    city: "Buffalo",
    state: "New York",
    postal_code: "14203-2108",
    longitude: "-78.8734526",
    latitude: "42.8847967",
    phone: "7168560062",
    website_url: "http://www.panamericangrill.com",
    img: "http://lafbrewco.com/wp-content/uploads/2017/06/Rocco_web.jpg"
)

Brewery.create(
    name: "Rohrbach's Railroad St Brewery",
    brewery_type: "micro",
    street: "97 Railroad St",
    city: "Rochester",
    state: "New York",
    postal_code: "14609-6039",
    longitude: "-77.586694",
    latitude: "43.163275",
    phone: "5855468020",
    website_url: "http://www.rohrbachs.com",
    img: "https://static1.squarespace.com/static/5a79dfb8e45a7c67d33917b0/t/5a79fc978165f570c8b72a06/1519226817900/Rohrbach+Scotch+Ale"
)

Brewery.create(
    name: "Brown's Brewing Co",
    brewery_type: "brewpub",
    street: "50 Factory Hill Rd",
    city: "North Hoosick",
    state: "New York",
    postal_code: "12133",
    longitude: "-73.3451582057618",
    latitude: "42.9266144376744",
    phone: "5182732337",
    website_url: "http://www.brownsbrewing.com",
    img: 'https://brownsbrewing.com/wp-content/uploads/2016/10/Browns_Keystone_complete.png'
)

Brewery.create(
    name: "Erie Canal Brewing Company",
    brewery_type: "micro",
    street: "135 S Peterboro St",
    city: "Canastota",
    state: "New York",
    postal_code: "13032-1409",
    longitude: "-75.7515320204082",
    latitude: "43.0785763673469",
    phone: "3155105001",
    website_url: "http://www.eriecanalbrewingcompany.com",
    img: "https://img-vimbly-com-images.imgix.net/full_photos/brewery-generic-6.jpg?auto=compress&fit=crop&h=490&ixlib=php-1.2.1&w=730"
)

Brewery.create(
    name: "Irish Mafia Brewing Co",
    brewery_type: "brewpub",
    street: "2971 Whalen Rd",
    city: "Bloomfield",
    state: "New York",
    postal_code: "14469-9786",
    longitude: "-77.3893869584766",
    latitude: "42.8926813391929",
    phone: "5852715172",
    website_url: "http://www.irishmafiabrewing.com",
    img: "https://static1.squarespace.com/static/5728c6014c2f851f786ae277/t/5809767fd2b857cd7715e4fd/1467385328000/"
)

Brewery.create(
    name: "Lost Kingdom Brewery / Firehouse Distillery",
    brewery_type: "micro",
    street: "7160 Main St",
    city: "Ovid",
    state: "New York",
    postal_code: "14521-9401",
    longitude: "-76.8228132942931",
    latitude: "42.6772422121693",
    phone: "6074034020",
    website_url: "http://www.firehousedistillery.net",
    img: "https://images.squarespace-cdn.com/content/v1/555cd8b8e4b0c647a26e43c9/1506459686885-B76J5FZ6XW6O8DBARS2W/ke17ZwdGBToddI8pDm48kB-rZGgHnZ8M0DUmsuBBQORZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIw1YlAVDHIdEvyJmYFES6z0i1bAEs6Q_zcE90GsgxxzcKMshLAGzx4R3EDFOm1kBS/Generic+Taps.jpg?format=300w"
)
