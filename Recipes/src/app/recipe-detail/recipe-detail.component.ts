import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe;
  recipes = [
      {
        "type": "Breakfast",
        "title": "Fried Chicken and Waffles",
        "servingSize": 4,
        "readyTime": 55,
        "difficulyRating": 2.5,
        "starRating": 4.5,
        "imageURL": "./assets/Chicken_and_Waffles.jpg",
        "ingredients": "4 eggs, 1/4 cup heavy cream, 2 tablespoons cayenne pepper, 1 tablespoon salt, 1 tablespoon ground black pepper, 2 cups all-purpose flour, 1 cup cornstarch, 1 quart peanut oil, 8 chicken tenders, 1 cup mayonnaise, 1/4 cup maple syrup, 2 teaspoons prepared horseradish, 1 teaspoon dry mustard powder, 12 slices bacon, 8 thin slices Cheddar cheese, 8 plain frozen waffles",
        "directions": "1. Whisk together the eggs, cream, cayenne pepper, 1 tablespoon salt, and black pepper in a large bowl. In a paper bag, shake together the flour, cornstarch, and 1 tablespoon salt. 2. Dip the chicken into the beaten egg mixture, then place into the flour mixture and shake to coat. Place the breaded chicken onto a wire rack; do not stack. Let the chicken rest for 20 minutes to allow the coating to set. 3. Heat about 3 inches of oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C). In small batches, fry chicken 5 to 8 minutes until golden brown. Remove chicken, and drain on paper towels. Set aside or keep warm in a a low oven. 4. Combine the mayonnaise, maple syrup, horseradish, and mustard powder in a medium bowl. Place the bacon in a large, deep skillet, and cook over medium-high heat, turning occasionally, until evenly browned, about 10 minutes. Drain the bacon slices on a paper towel-lined plate. 5. To assemble the sandwiches: Place 4 waffles on a cookie sheet, top each waffle with 2 chicken tenders, 3 slices of bacon, and 2 slices of Cheddar. Broil the sandwich for a 3 to 5 minutes until the cheese melts. Spread 3 tablespoons of the maple mayonnaise on the remaining 4 waffles and place on top of the sandwich."
    },
    {
        "type": "Breakfast",
        "title": "Pancakes",
        "servingSize": 4,
        "readyTime": 25,
        "difficulyRating": 1,
        "starRating": 5,
        "imageURL": "./assets/Pancakes.jpg",
        "ingredients": "1 cup sifted self-rising flour, 1 cup milk, 1 egg, 2 tablespoons vegetable oil",
        "directions": "1. Beat eggs, oil, and milk together, and add to flour. Stir until combined. 2. Heat a greased griddle until drops of water sprinkled on it evaporate noisily. Pour 1/8 to 1/4 cup batter onto the griddle. Turn over with a metal spatula when bubbles begin to form on top. Cook second side to a golden brown color."
    },
    {
        "type": "Breakfast",
        "title": "Eggs Benedict",
        "servingSize": 2,
        "readyTime": 30,
        "difficulyRating": 3.5,
        "starRating": 4,
        "imageURL": "./assets/Eggs_Benedict.jpg",
        "ingredients": "4 egg yolks, 3 1/2 tablespoons lemon juice, 1 pinch ground white pepper, 1/8 teaspoon Worcestershire sauce, 1 tablespoon water, 1 cup butter (melted), 1/4 teaspoon salt, 8 eggs, 1 teaspoon distilled white vinegar, 8 strips Canadian-style bacon, 4 English muffins (split), 2 tablespoons butter (softened)",
        "directions": "1. To Make Hollandaise: Fill the bottom of a double boiler part-way with water. Make sure that water does not touch the top pan. Bring water to a gentle simmer. In the top of the double boiler, whisk together egg yolks, lemon juice, white pepper, Worcestershire sauce, and 1 tablespoon water. 2. Add the melted butter to egg yolk mixture 1 or 2 tablespoons at a time while whisking yolks constantly. If hollandaise begins to get too thick, add a teaspoon or two of hot water. Continue whisking until all butter is incorporated. Whisk in salt, then remove from heat. Place a lid on pan to keep sauce warm. 3. Preheat oven on broiler setting. To Poach Eggs: Fill a large saucepan with 3 inches of water. Bring water to a gentle simmer, then add vinegar. Carefully break eggs into simmering water, and allow to cook for 2 1/2 to 3 minutes. Yolks should still be soft in center. Remove eggs from water with a slotted spoon and set on a warm plate 4. While eggs are poaching, brown the bacon in a medium skillet over medium-high heat and toast the English muffins on a baking sheet under the broiler. 5. Spread toasted muffins with softened butter, and top each one with a slice of bacon, followed by one poached egg. Place 2 muffins on each plate and drizzle with hollandaise sauce. Sprinkle with chopped chives and serve immediately."
    },
    {
        "type": "Lunch",
        "title": "Tomato Bacon Grilled Cheese",
        "servingSize": 1,
        "readyTime": 10,
        "difficulyRating": 1,
        "starRating": 4.3,
        "imageURL": "./assets/Grilled_Cheese.jpg",
        "ingredients": "8 slices bacon, 1/4 cup butter (softened), 8 slices white bread, 8 slices American cheese, 8 slices tomato",
        "directions": "1. Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, and set aside. 2. Heat a large skillet over medium heat. Spread butter onto one side of each slice of bread. Lay 4 slices of bread, butter side down, in the skillet. Top with a slice of cheese, 2 slices tomato, bacon, and another slice of cheese. Cover with a slice of bread, butter side out. Fry sandwiches until golden on both sides."
    },
    {
        "type": "Lunch",
        "title": "Grilled Fish Tacos",
        "servingSize": 6,
        "readyTime": 404,
        "difficulyRating": 4,
        "starRating": 4.5,
        "imageURL": "./assets/Grilled_Fish_Tacos.jpg",
        "ingredients": "1/4 cup distilled white vinegar, 2 tablespoons fresh lime juice, 2 teaspoons lime zest, 1 1/2 teaspoons honey, 2 cloves garlic (minched), 1/2 teaspoon cumin, 1/2 teaspoon chili powder, 1 teaspoon seafood seasoning, 1/2 teaspoon ground black pepper, 1 teaspoon hot pepper sauce (or to taste), 1 pound tilapia fillets (cut into chunks), 1 (8 ounce) container light sour cream, 1/2 cup adobo sauce from chipotle peppers, 2 tablespoons fresh lime juice, 2 teaspoons lime zest, 1/4 teaspoon cumin, 1/4 teaspoon chili powder, 1/2 teaspoon seafood seasoning, salt and pepper to taste, 1 (10 ounce) package tortillas, 3 ripe tomatoes (seeded and diced), 1 bunch cilantro (chopped), 1 small head cabbage (cored and shredded), 2 limes, cut in wedges",
        "directions": "1. To make the marinade, whisk together the olive oil, vinegar, lime juice, lime zest, honey, garlic, cumin, chili powder, seafood seasoning, black pepper, and hot sauce in a bowl until blended. Place the tilapia in a shallow dish, and pour the marinade over the fish. Cover, and refrigerate 6 to 8 hours. 2. To make the dressing, combine the sour cream and adobo sauce in a bowl. Stir in the lime juice, lime zest, cumin, chili powder, seafood seasoning. Add salt, and pepper in desired amounts. Cover, and refrigerate until needed. 3. Preheat an outdoor grill for high heat and lightly oil grate. Set grate 4 inches from the heat. 4. Remove fish from marinade, drain off any excess and discard marinade. Grill fish pieces until easily flaked with a fork, turning once, about 9 minutes. 5. Assemble tacos by placing fish pieces in the center of tortillas with desired amounts of tomatoes, cilantro, and cabbage; drizzle with dressing. To serve, roll up tortillas around fillings, and garnish with lime wedges."
    },
    {
        "type": "Lunch",
        "title": "Slow Cooker BBQ Chicken",
        "servingSize": 8,
        "readyTime": 395,
        "difficulyRating": 1,
        "starRating": 4.5,
        "imageURL": "./assets/BBQ_Chicken.jpg",
        "ingredients": "4 large skinless/boneless chicken breast halves, 1 cup ketchup, 2 tablespoons mustard, 2 teaspoons lemon juice, 1/4 teaspoon garlic powder, 1/2 cup maple syrup, 2 tablespoons Worcestershire sauce, 1/2 teaspoon chili powder, 1/8 teaspoon cayenne pepper, 2 dashes hot pepper sauce, 8 sandwich rolls",
        "directions": "1. Place the chicken breasts into the bottom of a slow cooker. In a bowl, stir together the ketchup, mustard, lemon juice, garlic powder, maple syrup, Worcestershire sauce, chili powder, cayenne pepper, and hot sauce until the mixture is well blended. 2. Pour the sauce over the chicken, set the cooker to Low, and cook for 6 hours. Shred the chicken with two forks, and cook for 30 more minutes. Serve the chicken and sauce spooned into the sandwich rolls."
    },
    {
        "type": "Dinner",
        "title": "Lasagna",
        "servingSize": 12,
        "readyTime": 195,
        "difficulyRating": 4,
        "starRating": 5,
        "imageURL": "./assets/Lasagna.jpg",
        "ingredients": "1 pound sweet Italian sausage, 3/4 pound lean ground beef, 1/2 cup minced onion, 2 cloves garlic (crushed), 1 (28 ounce) can crushed tomatoes, 2 (6 ounce) cans tomato paste, 2 (6.5 ounce) canned tomato sauce, 1/2 cup water, 2 tablespoons white sugar, 1 1/2 teaspoons dried basil leaves, 1/2 teaspoon fennel seeds, 1 teaspoon Italian seasoning, 1 tablespoon salt, 1/4 teaspoon ground black pepper, 4 tablespoons chopped fresh parsley, 12 lasagna noodles, 16 ounces ricotta cheese, 1 egg, 1/2 teaspoon salt, 3/4 pound mozzarella cheese (sliced), 3/4 cup grated Parmesan cheese",
        "directions": "1. In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally. 2. Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt. 3. Preheat oven to 375 degrees F (190 degrees C). 4. To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese. 5. Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving."
    },
    {
        "type": "Dinner",
        "title": "Spicy Garlic Lime Chicken",
        "servingSize": 4,
        "readyTime": 25,
        "difficulyRating": 2.5,
        "starRating": 4.5,
        "imageURL": "./assets/Spicy_Garlic_Lime_Chicken.jpg",
        "ingredients": "3/4 teaspoon salt, 1/4 teaspoon black pepper, 1/4 teaspoon cayenne pepper, 1/8 teaspoon paprika, 1/4 teaspoon garlic powder, 1/8 teaspoon onion powder, 1/4 teaspoon dried thyme, 1/4 dried parsley, 4 boneless/skinless chicken breast halves, 2 tablespoons butter, 1 tablespoon olive oil, 2 teaspoons garlic powder, 3 tablespoons lime juice",
        "directions": "1. In a small bowl, mix together salt, black pepper, cayenne, paprika, 1/4 teaspoon garlic powder, onion powder, thyme and parsley. Sprinkle spice mixture generously on both sides of chicken breasts. 2. Heat butter and olive oil in a large heavy skillet over medium heat. Saute chicken until golden brown, about 6 minutes on each side. Sprinkle with 2 teaspoons garlic powder and lime juice. Cook 5 minutes more, stirring frequently to coat evenly with sauce."
    },
    {
        "type": "Dinner",
        "title": "Turkey Burgers",
        "servingSize": 12,
        "readyTime": 30,
        "difficulyRating": 1,
        "starRating": 3.5,
        "imageURL": "./assets/Turkey_Burger.jpg",
        "ingredients": "1 pound ground turkey, 1 packet dry onion soup mix, 1/2 cup water, 1/2 teaspoon salt, 1/2 teaspoon ground black pepper",
        "directions": "1. Preheat a grill for high heat. 2. In a large bowl, combine the ground turkey, soup mix, and water. Season with salt and pepper. Mix lightly using your hands, and form into 4 patties. 3. Lightly oil the grill grate. Grill patties 5 to 10 minutes per side, until well done."
    },
    {
        "type": "Dinner",
        "title": "Enchiladas",
        "servingSize": 6,
        "readyTime": 60,
        "difficulyRating": 2,
        "starRating": 4,
        "imageURL": "./assets/Enchiladas.jpg",
        "ingredients": "2 pounds lean ground beef, 1 large chopped onion, 1/8 teaspoon garlic salt, 12 (8 inch) flour tortillas, 2 teaspoons vegetable oil, 8 ounces shredded Colby cheese, 2 (19 ounce) canned enchilada sauce",
        "directions": "1. Preheat oven to 350 degrees F (175 degrees C). 2. In a heavy saucepan or skillet, brown the ground beef and onions. Season the ground beef mixture with garlic salt and set aside. 3. In a skillet, fry the tortillas in vegetable oil. Spoon some meat mixture and cheese into the center of each tortilla, roll them up and arrange them in a 9x13 inch baking dish or oblong pan. Pour the enchilada sauce over the rolled enchiladas and top with any remaining meat or cheese. 4. Bake in the preheated 350 degrees F (175 degrees C) for 20 to 30 minutes."
    }
  ]

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.paramMap.get('title');
    this.recipe = this.recipes.find(m => m.title === id);
    console.log("id = " + id);
  }

  onClick() {
    this._router.navigate(['/recipes']);
  }
}
