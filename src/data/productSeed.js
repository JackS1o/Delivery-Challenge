const products = [
  {
    name: "Coca-Cola",
    price: 5.00,
    description: "Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.",
  },
  {
    name: "Pepsi",
    price: 5.00,
    description: "Pepsi is a carbonated soft drink manufactured by PepsiCo.",
  },
  {
    name: "Fanta",
    price: 5.00,
    description: "Fanta is a brand of fruit-flavored carbonated soft drinks created by The Coca-Cola Company.",
  },
  {
    name: "Sprite",
    price: 5.00,
    description: "Sprite is a colorless, lemon and lime-flavored soft drink created by The Coca-Cola Company.",
  },
  {
    name: "Diet Coke",
    price: 5.00,
    description: "Diet Coke is a sugar-free soft drink produced and distributed by The Coca-Cola Company.",
  },
  {
    name: "Diet Pepsi",
    price: 5.00,
    description: "Diet Pepsi is a sugar-free soft drink produced and distributed by PepsiCo.",
  },
  {
    name: "Diet Fanta",
    price: 5.00,
    description: "Diet Fanta is a sugar-free soft drink produced and distributed by The Coca-Cola Company.",
  },
  {
    name: "Diet Sprite",
    price: 5.00,
    description: "Diet Sprite is a sugar-free soft drink produced and distributed by The Coca-Cola Company.",
  },
  {
    name: "Coca-Cola Zero",
    price: 5.00,
    description: "Coca-Cola Zero is a sugar-free soft drink produced and distributed by The Coca-Cola Company.",
  },
  {
    name: "Hamburger",
    price: 10.00,
    description: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
  },
  {
    name: "Cheeseburger",
    price: 10.00,
    description: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition.",
  },
  {
    name: "Fries",
    price: 5.00,
    description: "French fries, or simply fries, chips, finger chips, or French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.",
  },
  {
    name: "Chicken Nuggets",
    price: 10.00,
    description: "Chicken nuggets are chicken pieces made from chicken breast or thigh meat, formed into a small patty or ball shape, then breaded and deep-fried.",
  },
  {
    name: "Chicken Wings",
    price: 10.00,
    description: "Chicken wings are chicken drummettes or wing sections, usually separated at the joint, that are generally deep-fried after being coated in a batter or seasoned flour.",
  },
  {
    name: "Chicken Sandwich",
    price: 10.00,
    description: "A chicken sandwich is a sandwich made with chicken as the main ingredient. It is often served on a bun or roll.",
  },
  {
    name: "Chicken Salad",
    price: 10.00,
    description: "Chicken salad is a salad made with chicken as the main ingredient. It is often served on a bun or roll.",
  },
  {
    name: "Chicken Strips",
    price: 10.00,
    description: "Chicken strips are chicken pieces made from chicken breast or thigh meat, formed into a small patty or ball shape, then breaded and deep-fried.",
  },
  {
    name: "Hot Dog",
    price: 10.00,
    description: "A hot dog is a cooked sausage, traditionally grilled or steamed and served in a sliced bun.",
  },
  {
    name: "Pizza",
    price: 15.00,
    description: "Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
  },
  {
    name: "Pasta",
    price: 15.00,
    description: "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.",
  },
  {
    name: "Spaghetti",
    price: 15.00,
    description: "Spaghetti is a long, thin, solid, cylindrical pasta. It is a staple food of traditional Italian cuisine.",
  },
  {
    name: "Lasagna",
    price: 15.00,
    description: "Lasagna is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù, vegetables, and cheese, and seasonings such as garlic, oregano, and basil.",
  },
  {
    name: "Ravioli",
    price: 15.00,
    description: "Ravioli is a type of pasta consisting of a filling sealed between two layers of thin pasta dough.",
  },
  {
    name: "Macaroni",
    price: 15.00,
    description: "Macaroni is a type of dry pasta shaped like small tubes.",
  },
  {
    name: "Tacos",
    price: 15.00,
    description: "A taco is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling.",
  },
  {
    name: "Burrito",
    price: 15.00,
    description: "A burrito is a type of Mexican and Tex-Mex food, consisting of a wheat flour tortilla wrapped or folded into a cylindrical shape to completely enclose the filling.",
  },
  {
    name: "Chips",
    price: 5.00,
    description: "Chips are a variety of finger foods made from potato, corn, or other root vegetables.",
  },
  {
    name: "Salsa",
    price: 5.00,
    description: "Salsa is a Mexican sauce, made from a variety of ingredients, including tomatoes, chiles, onions, garlic, and cilantro.",
  },
  {
    name: "Guacamole",
    price: 5.00,
    description: "Guacamole is an avocado-based dip, spread, or salad first developed by the Aztecs.",
  },
  {
    name: "Nachos",
    price: 5.00,
    description: "Nachos are tortilla chips covered with melted cheese, often served as an appetizer or snack.",
  },
  {
    name: "Quesadilla",
    price: 5.00,
    description: "A quesadilla is a tortilla-based dish made with cheese, often with other ingredients such as vegetables or meat.",
  },
  {
    name: "Tortilla",
    price: 5.00,
    description: "A tortilla is a thin, flat round bread made from corn or wheat flour.",
  },
  {
    name: "Tortilla Chips",
    price: 5.00,
    description: "Tortilla chips are thin, flat, round chips made from corn tortillas.",
  },
  {
    name: "Tortilla Wrap",
    price: 5.00,
    description: "A tortilla wrap is a thin, flat, round bread made from corn or wheat flour.",
  },
  {
    name: "ice cream",
    price: 5.00,
    description: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
  },
  {
    name: "ice cream cone",
    price: 5.00,
    description: "An ice cream cone is a cone-shaped waffle or wafer cone that is typically filled with ice cream.",
  },
  {
    name: "Milkshake",
    price: 5.00,
    description: "A milkshake is a sweet, cold beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.",
  },
  {
    name: "Cupcake",
    price: 5.00,
    description: "A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup.",
  },
  {
    name: "Donut",
    price: 5.00,
    description: "A donut or doughnut is a type of fried dough confectionery or dessert food.",
  },
  {
    name: "Candy",
    price: 5.00,
    description: "Candy is a confection that features sugar as a principal ingredient.",
  },
  {
    name: "Candy Bar",
    price: 5.00,
    description: "A candy bar is a chocolate bar made with a combination of chocolate, sugar, and other ingredients.",
  },
  {
    name: "Chocolate",
    price: 5.00,
    description: "Chocolate is a typically sweet, usually brown food preparation of Theobroma cacao seeds, roasted and ground.",
  },
  {
    name: "Chocolate Bar",
    price: 5.00,
    description: "A chocolate bar is a confection in an oblong or rectangular form containing chocolate, which may also contain layerings or mixtures that include nuts, fruit, caramel, nougat, and wafers.",
  },
  {
    name: "Chocolate Chip Cookies",
    price: 5.00,
    description: "Chocolate chip cookies are drop cookies that feature chocolate chips or chocolate morsels as a distinguishing ingredient.",
  },
  {
    name: "MC Chicken",
    price: 10.00,
    description: "The McChicken is a chicken sandwich sold by international fast food restaurant chain McDonald's.",
  },
  {
    name: "McDouble",
    price: 10.00,
    description: "The McDouble is a hamburger sold by international fast food restaurant chain McDonald's.",
  },
  {
    name: "McNuggets",
    price: 10.00,
    description: "McNuggets are chicken nuggets sold by international fast food restaurant chain McDonald's.",
  },
  {
    name: "McRib",
    price: 10.00,
    description: "The McRib is a boneless pork sandwich sold by international fast food restaurant chain McDonald's.",
  },
  {
    name: "Big Mac",
    price: 10.00,
    description: "The Big Mac is a hamburger sold by international fast food restaurant chain McDonald's.",
  },
  {
    name: "French Fries",
    price: 10.00,
    description: "French fries, or simply fries, chips, finger chips, or French-fried potatoes, are batonnet or allumette-cut deep-fried potatoes.",
  },
];

module.exports = products;
