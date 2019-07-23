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
img: "../../images/adirondack-toboggan.png"
)
