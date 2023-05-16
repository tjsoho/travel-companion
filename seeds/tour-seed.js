const { Tour } = require('../models');

const tourData = [
    {
        location: 'Sydney',
        title: "Harbour Highlights Cruise",
        category: "Site Seeing",
        difficulty_level: "Easy",
        description: "Set sail on a breathtaking journey through Sydney's world-famous harbor. Cruise past iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge, while enjoying stunning views of the city skyline. Learn about the history and significance of these architectural marvels as you glide along the glistening waters. This tour is a perfect introduction to Sydney's beauty and charm.",
        person_limit: 200,
        cost: 99,
    },
    {
        location: 'Sydney',
        title: "Blue Mountains Day Trip",
        category: "Escape the City",
        difficulty_level: "Easy",
        description: "Escape the city and venture into the breathtaking beauty of the Blue Mountains. Explore ancient rainforests, marvel at stunning waterfalls, and witness the iconic Three Sisters rock formation. Breathe in the fresh mountain air as you embark on scenic bushwalks, keeping an eye out for unique wildlife. Immerse yourself in the tranquility of nature and experience the serenity of the Blue Mountains.",
        person_limit: 200,
        cost: 99,
    },
    {
        location: 'Sydney',
        title: "Rocks Herritage Walk",
        category: "Physical Activity",
        difficulty_level: "Easy",
        description: "Step back in time as you explore the historic precinct of The Rocks. Wander through cobblestone lanes lined with charming sandstone buildings, and delve into Sydney's convict past. Learn intriguing stories of the early settlers, visit hidden art galleries, and immerse yourself in the vibrant atmosphere of the local markets. Uncover the layers of history that shaped modern Sydney.",
        person_limit: 10,
        cost: 49,
    },
    {
        location: 'Sydney',
        title: "Bondi Beach Surfing Lesson",
        category: "Physical Activity",
        difficulty_level: "Hard",
        description: "Catch the waves and ride the surf at the world-famous Bondi Beach. Join a professional surf instructor who will guide you through the exhilarating process of catching your first wave. Feel the thrill of gliding across the water and experience the laid-back beach culture that defines Bondi. This tour is perfect for adventure seekers and those looking to embrace the true essence of Australian beach life.",
        person_limit: 5,
        cost: 49,
    },
    {
        location: 'Sydney',
        title: "Harbour Kayak Adventure",
        category: "Physical Activity",
        difficulty_level: "Moderate",
        description: "Paddle your way through the pristine waters of Sydney Harbour on an exhilarating kayak adventure. Explore secluded coves, glide beneath towering cliffs, and get up close to marine life as you navigate the sparkling harbor. Enjoy the unique perspective of the city from the water and witness the harmony between nature and urban landscapes. This tour is perfect for those seeking an active and immersive Sydney experience.",
        person_limit: 5,
        cost: 79,
    },
    {
        location: 'Sydney',
        title: "Sydney Food Safari",
        category: "Food and Drink",
        difficulty_level: "Easy",
        description: "Prepare to tantalize your taste buds on a gastronomic safari through the flavors of Sydney. From iconic fish markets to bustling Chinatown, explore the city's diverse culinary landscape. Sample fresh seafood, savor multicultural street food, and indulge in world-class dining experiences with stunning harbor views. Let Sydney's culinary delights captivate your senses and leave you craving for more!",
        person_limit: 10,
        cost: 29,
    },
    {
        location: "Brisbane",
        title: "Brisbane River Adventure",
        category: "Site Seeing",
        difficulty_level: "Easy",
        description: "Cruise along the Brisbane River and discover the city's rich history and vibrant culture. Glide past iconic landmarks like the Story Bridge and South Bank, while enjoying stunning views of the city skyline. Learn about the history and significance of these architectural marvels as you glide along the glistening waters. This tour is a perfect introduction to Brisbane's beauty and charm.",
        person_limit: 200,
        cost: 99,
    },
    {
        location: "Brisbane",
        title: "Lone Pine Koala Sanctuary",
        category: "Escape the City",
        difficulty_level: "Easy",
        description: "Escape the city and venture into the breathtaking beauty of the Lone Pine Koala Sanctuary. Explore ancient rainforests, marvel at stunning waterfalls, and witness the iconic Three Sisters rock formation. Breathe in the fresh mountain air as you embark on scenic bushwalks, keeping an eye out for unique wildlife. Immerse yourself in the tranquility of nature and experience the serenity of the Blue Mountains.",
        person_limit: 10,
        cost: 149,
    },
    {
        location: "Brisbane",
        title: "Brisbane City Bike Tour",
        category: "Physical Activity",
        difficulty_level: "Moderate",
        description: "Explore the city's vibrant neighborhoods and iconic landmarks on a guided bike tour. Cycle along the Brisbane River, stopping at scenic viewpoints and hidden gems along the way. Learn about the city's rich history and culture from your local guide, and discover the best places to eat, drink, and play. This tour is perfect for those seeking an active and immersive Brisbane experience.",
        person_limit: 10,
        cost: 49,
    },
    {
        location: "Brisbane",
        title: "Brisbane Food Safari",
        category: "Food and Drink",
        difficulty_level: "Easy",
        description: "Prepare to tantalize your taste buds on a gastronomic safari through the flavors of Brisbane. From iconic fish markets to bustling Chinatown, explore the city's diverse culinary landscape. Sample fresh seafood, savor multicultural street food, and indulge in world-class dining experiences with stunning river views. Let Brisbane's culinary delights captivate your senses and leave you craving for more!",
        person_limit: 8,
        cost: 29,
    },
    {
        location: "Brisbane",
        title: "Brisbane River Kayak Adventure",
        category: "Physical Activity",
        difficulty_level: "Moderate",
        description: "Paddle your way through the pristine waters of Brisbane River on an exhilarating kayak adventure. Explore secluded coves, glide beneath towering cliffs, and get up close to marine life as you navigate the sparkling river. Enjoy the unique perspective of the city from the water and witness the harmony between nature and urban landscapes. This tour is perfect for those seeking an active and immersive Brisbane experience.",
        person_limit: 5,
        cost: 79,
    },

    {
        location: "Melbourne",
        title: "Melbourne City Bike Tour",
        category: "Physical Activity",
        difficulty_level: "Moderate",
        description: "Explore the city's vibrant neighborhoods and iconic landmarks on a guided bike tour. Cycle along the Yarra River, stopping at scenic viewpoints and hidden gems along the way. Learn about the city's rich history and culture from your local guide, and discover the best places to eat, drink, and play. This tour is perfect for those seeking an active and immersive Melbourne experience.",
        person_limit: 10,
        cost: 49,
    },
    {
        location: "Melbourne",
        title: "Melbourne Food Safari",
        category: "Food and Drink",
        difficulty_level: "Easy",
        description: "Prepare to tantalize your taste buds on a gastronomic safari through the flavors of Melbourne. From iconic fish markets to bustling Chinatown, explore the city's diverse culinary landscape. Sample fresh seafood, savor multicultural street food, and indulge in world-class dining experiences with stunning river views. Let Melbourne's culinary delights captivate your senses and leave you craving for more!",
        person_limit: 8,
        cost: 29,
    },
    {
        location: "Melbourne",
        title: "Coffee and Culture",
        category: "Food and Drink",
        difficulty_level: "Easy",
        description: "Discover the city's vibrant coffee culture on a guided walking tour. Visit iconic cafes, sample delicious brews, and learn about the history of coffee in Melbourne. Explore the city's hidden gems and discover the best places to eat, drink, and play. This tour is perfect for those seeking an immersive Melbourne experience.",
        person_limit: 6,
        cost: 19,
    },
    {
        location: "Melbourne",
        title: "Street Art Tour",
        category: "Art and Culture",
        difficulty_level: "Easy",
        description: "Discover the city's vibrant street art scene on a guided walking tour. Visit iconic murals, learn about the artists, and explore the city's hidden gems. Discover the best places to eat, drink, and play. This tour is perfect for those seeking an immersive Melbourne experience.",
        person_limit: 6,
        cost: 19,
    },
    {
        location: "Melbourne",
        title: "Sporting History Tour",
        category: "Sport and Culture",
        difficulty_level: "Easy",
        description: "Discover the city's rich sporting history on a guided walking tour. Visit iconic stadiums, learn about the athletes, and explore the city's hidden gems. Discover the best places to eat, drink, and play. This tour is perfect for those seeking an immersive Melbourne experience.",
        person_limit: 15,
        cost: 29,
    },
    {
        location: "Melbourne",
        title: "Victoria Markets Tour",
        category: "Art and Fashion",
        difficulty_level: "Easy",
        description: "Discover the city's vibrant markets on a guided walking tour. Visit iconic stalls, sample delicious food, and explore the city's hidden gems. Discover the best places to eat, drink, and play. This tour is perfect for those seeking an immersive Melbourne experience.",
        person_limit: 12,
        cost: 19,
    },
]

const seedTours = () => Tour.bulkCreate(tourData);

module.exports = seedTours;

