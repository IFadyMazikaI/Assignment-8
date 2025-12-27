var recipes = [
          {
    name: "Cheesy Beef Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    rate: "4.7",
    reviews: "(614 reviews)",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "3 people",
    badge1: "Easy",
    badge2: "American",
    desc: "Juicy beef burger loaded with melted cheddar and fresh toppings in a toasted bun",
    ingredients: {
      ing1: "450g ground beef",
      ing2: "3 burger buns",
      ing3: "3 slices cheddar cheese",
      ing4: "1 tomato sliced",
      ing5: "Lettuce leaves",
      ing6: "1/2 onion sliced",
      ing7: "2 tsp garlic powder",
      ing8: "Salt & black pepper to taste",
      ing9: "1 tbsp butter (for toasting buns)",
      ing10: "Ketchup or burger sauce"
    },
    instructions: {
      step1: "Shape ground beef into 3 equal patties and season with salt, pepper, and garlic powder.",
      step2: "Heat a skillet or grill pan over medium-high heat.",
      step3: "Cook patties 3–4 minutes per side until browned and juicy.",
      step4: "Place a slice of cheddar on each patty and cover to melt (about 1 minute).",
      step5: "Toast buns with butter until golden.",
      step6: "Assemble: bun → sauce → lettuce → burger patty → tomato → onion → bun.",
      step7: "Serve hot with fries or side of choice."
    },
    nutrition: {
      calories: "620 kcal",
      protein: "28g",
      carbs: "40g",
      fat: "37g",
      fiber: "2.5g",
      sodium: "750mg"
    },
    tips: {
      tip1: "Do not press the patty while cooking to keep it juicy.",
      tip2: "Add a bit of Worcestershire sauce to beef for deeper flavor.",
      tip3: "Use brioche buns for a richer taste.",
      tip4: "Let patties rest 2 minutes before assembling."
    }
  },
  {
    name: "BBQ Pulled Pork",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
    rate: "4.7",
    reviews:"(412 reviews)",
    prepTime: "40 min",
    cookTime: "13 min",
    servings: "4 people",
    badge1: "Easy",
    badge2: "American",
    desc:"Slow-cooked tender pork in smoky barbecue sauce",
    ingredients: {
      ing1: "1kg pork shoulder",
      ing2: "1 cup BBQ sauce",
      ing3: "1/2 cup apple cider vinegar",
      ing4: "2 tablespoons brown sugar",
      ing5: "1 tablespoon paprika",
      ing6: "1 tablespoon garlic powder",
      ing7: "Burger buns",
      ing8: "Coleslaw for serving",
    },
    instructions: {
      step1:"Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      step2:"Preheat oven to 350°F (175°C). Place pork shoulder in a roasting pan. Pour BBQ sauce and apple cider vinegar over the pork. Cover with foil and roast for 2 hours.",
      step3:"Remove foil and roast for an additional 30 minutes.",
      step4:"Let the pork cool for 10 minutes before slicing. Serve with coleslaw and burger buns.",
      step5:"Return shredded pork to slow cooker, mix with BBQ sauce.",
      step6:"Cover and cook on low heat for 2 hours or until pork is tender."
    },
    nutrition: {
      calories: "520 kcal",
      protein: "27g",
      carbs: "63g",
      fat: "18g",
      fiber: "3g",
      sodium: "410mg",
    },
    tips:{
        tip1:"Preheat oven to 350°F (175°C).",
        tip2:"Place pork shoulder in a roasting pan.",
        tip3:"Pour BBQ sauce and apple cider vinegar over the pork.",
        tip4:"Cover with foil and roast for 2 hours."
    }
  },
  {
  name: "Grilled Shrimp Skewers",
  image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
  rate: "4.6",
  reviews:"(290 reviews)",
  prepTime: "47 min",
  cookTime: "10 min",
  servings: "2 people",
  badge1: "Easy",
  badge2: "Seafood",
  desc:"Juicy grilled shrimp marinated in lemon garlic butter",
  ingredients: {
    ing1: "400g shrimp, peeled",
    ing2: "3 tbsp melted butter",
    ing3: "2 cloves garlic, minced",
    ing4: "1 tbsp lemon juice",
    ing5: "1 tsp paprika",
    ing6: "1 tsp black pepper",
    ing7: "Skewers",
    ing8: "Chopped parsley",
  },
  instructions: {
    step1:"Mix butter, lemon juice, garlic and spices.",
    step2:"Coat shrimp and rest 10 minutes.",
    step3:"Put shrimp on skewers.",
    step4:"Grill 2–3 minutes each side until pink.",
    step5:"Remove, garnish with parsley.",
    step6:"Serve hot with dipping sauce."
  },
  nutrition: {
    calories: "290 kcal",
    protein: "23g",
    carbs: "4g",
    fat: "19g",
    fiber: "1g",
    sodium: "300mg",
  },
  tips:{
    tip1:"Don't over grill shrimp.",
    tip2:"Soak wooden skewers before grill.",
    tip3:"Add chili flakes for spice.",
    tip4:"Serve with garlic aioli."
  }
},

{
  name: "Fresh Garden Salad",
  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  rate: "4.5",
  reviews:"(210 reviews)",
  prepTime: "12 min",
  cookTime: "0 min",
  servings: "3 people",
  badge1: "Easy",
  badge2: "Healthy",
  desc:"Crispy fresh vegetables with olive lemon dressing",
  ingredients: {
    ing1: "1 cucumber, sliced",
    ing2: "2 tomatoes, diced",
    ing3: "1 carrot, shredded",
    ing4: "1/2 lettuce head, chopped",
    ing5: "2 tbsp olive oil",
    ing6: "1 tbsp lemon juice",
    ing7: "Salt",
    ing8: "Black pepper",
  },
  instructions: {
    step1:"Chop all vegetables.",
    step2:"Mix oil, lemon, salt and pepper.",
    step3:"Pour dressing over salad.",
    step4:"Toss gently to combine.",
    step5:"Chill 5 minutes before serving.",
    step6:"Add seeds or nuts if you like."
  },
  nutrition: {
    calories: "140 kcal",
    protein: "3g",
    carbs: "12g",
    fat: "9g",
    fiber: "4g",
    sodium: "80mg",
  },
  tips:{
    tip1:"Use extra virgin olive oil.",
    tip2:"Add feta if not vegan.",
    tip3:"Keep lettuce dry before dressing.",
    tip4:"Serve immediately after mix."
  }
},

{
  name: "Beef Tacos",
  image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
  rate: "4.8",
  reviews:"(512 reviews)",
  prepTime: "45 min",
  cookTime: "45 min",
  servings: "4 people",
  badge1: "Intermediate",
  badge2: "Mexican",
  desc:"Crispy tacos filled with seasoned beef and cheese",
  ingredients: {
    ing1: "500g minced beef",
    ing2: "Taco shells",
    ing3: "1 tsp chili powder",
    ing4: "1 tsp cumin",
    ing5: "1 tsp garlic powder",
    ing6: "1/2 cup cheddar cheese",
    ing7: "Chopped onions",
    ing8: "Taco sauce",
  },
  instructions: {
    step1:"Sauté onions then add beef.",
    step2:"Add spices and mix well.",
    step3:"Cook 8–10 minutes until done.",
    step4:"Fill taco shells with beef.",
    step5:"Top with cheese and sauce.",
    step6:"Serve with lime slices."
  },
  nutrition: {
    calories: "450 kcal",
    protein: "25g",
    carbs: "35g",
    fat: "23g",
    fiber: "2g",
    sodium: "310mg",
  },
  tips:{
    tip1:"Warm shells before fill.",
    tip2:"Add jalapeños for extra heat.",
    tip3:"Do not overfill tacos.",
    tip4:"Serve with sour cream."
  }
},

{
  name: "Herb Rice Bowl",
  image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
  rate: "4.4",
  reviews:"(178 reviews)",
  prepTime: "25 min",
  cookTime: "15 min",
  servings: "2 people",
  badge1: "Easy",
  badge2: "Asian Fusion",
  desc:"Steamed rice tossed with butter and mixed herbs",
  ingredients: {
    ing1: "1 cup basmati rice",
    ing2: "2 cups water",
    ing3: "1 tbsp butter",
    ing4: "1 tsp salt",
    ing5: "Mixed herbs",
    ing6: "Black pepper",
    ing7: "Green onions",
    ing8: "Soy sauce optional",
  },
  instructions: {
    step1:"Wash rice until water runs clear.",
    step2:"Boil water, add salt and rice.",
    step3:"Cook 12–15 minutes covered.",
    step4:"Fluff with fork then add butter.",
    step5:"Mix herbs and garnish onions.",
    step6:"Serve with your favorite protein."
  },
  nutrition: {
    calories: "310 kcal",
    protein: "5g",
    carbs: "56g",
    fat: "7g",
    fiber: "1g",
    sodium: "400mg",
  },
  tips:{
    tip1:"Use broth instead of water for flavor.",
    tip2:"Let rice rest after cook.",
    tip3:"Add sesame oil for aroma.",
    tip4:"Pair with grilled chicken."
  }
},

{
  name: "Crispy Samosa",
  image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
  rate: "4.3",
  reviews:"(140 reviews)",
  prepTime: "50 min",
  cookTime: "8 min",
  servings: "5 pieces",
  badge1: "Hard",
  badge2: "Indian",
  desc:"Crunchy fried pastry stuffed with spiced potatoes",
  ingredients: {
    ing1: "Samosa sheets or dough",
    ing2: "3 boiled potatoes mashed",
    ing3: "1 tsp curry powder",
    ing4: "1 tsp cumin seeds",
    ing5: "1 tsp turmeric",
    ing6: "Salt",
    ing7: "Chopped peas",
    ing8: "Oil for frying",
  },
  instructions: {
    step1:"Cook cumin seeds in pan until aroma.",
    step2:"Add potatoes, peas and spices.",
    step3:"Cook 3 minutes then cool.",
    step4:"Fold sheets into triangle pockets.",
    step5:"Fill and seal edges with water.",
    step6:"Fry until golden brown."
  },
  nutrition: {
    calories: "160 kcal",
    protein: "3g",
    carbs: "18g",
    fat: "8g",
    fiber: "2g",
    sodium: "190mg",
  },
  tips:{
    tip1:"Keep oil medium heat.",
    tip2:"Seal edges tightly.",
    tip3:"Serve with mint chutney.",
    tip4:"Don't fry cold filling."
  }
},

{
  name: "Seafood Soup",
  image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
  rate: "4.6",
  reviews:"(260 reviews)",
  prepTime: "15 min",
  cookTime: "30 min",
  servings: "3 bowls",
  badge1: "Intermediate",
  badge2: "Seafood",
  desc:"Warm broth loaded with shrimp, fish and herbs",
  ingredients:{
    ing1:"300g mixed seafood",
    ing2:"4 cups fish broth",
    ing3:"2 garlic cloves",
    ing4:"1 onion diced",
    ing5:"1 tsp thyme",
    ing6:"1 tsp black pepper",
    ing7:"2 tbsp olive oil",
    ing8:"Lemon slices"
  },
  instructions:{
    step1:"Sauté onion and garlic in oil.",
    step2:"Add broth and spices.",
    step3:"Boil then add seafood.",
    step4:"Cook 10 minutes.",
    step5:"Serve with lemon slices.",
    step6:"Garnish parsley."
  },
  nutrition:{ calories:"260 kcal", protein:"20g", carbs:"6g", fat:"16g", fiber:"1g", sodium:"570mg"},
  tips:{
    tip1:"Do not boil seafood too long.",
    tip2:"Use fresh herbs.",
    tip3:"Add cream for richer soup.",
    tip4:"Pair with toasted bread."
  }
},

{
  name: "Classic Lasagna",
  image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
  rate:"4.9",
  reviews:"(600 reviews)",
  prepTime:"45 min",
  cookTime:"35 min",
  servings:"6 slices",
  badge1:"Hard",
  badge2:"Italian",
  desc:"Layered pasta with meat sauce and creamy béchamel",
  ingredients:{
    ing1:"Lasagna sheets",
    ing2:"400g minced beef",
    ing3:"2 cups tomato sauce",
    ing4:"1 cup béchamel",
    ing5:"Mozzarella cheese",
    ing6:"Parmesan",
    ing7:"1 tsp oregano",
    ing8:"Salt & pepper"
  },
  instructions:{
    step1:"Cook pasta sheets 6 min.",
    step2:"Cook beef then add sauce and spices.",
    step3:"Layer pasta → sauce → béchamel → cheese.",
    step4:"Repeat layers 3 times.",
    step5:"Bake 30–35 minutes.",
    step6:"Cool 10 min before slicing."
  },
  nutrition:{calories:"590 kcal", protein:"31g", carbs:"48g", fat:"32g", fiber:"3g", sodium:"620mg"},
  tips:{
    tip1:"Make sauce thick not watery.",
    tip2:"Grate cheese fresh.",
    tip3:"Rest before slice.",
    tip4:"Use glass tray."
  }
},

{
  name:"Creamy Basil Pasta",
  image:"https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
  rate:"4.5",
  reviews:"(222 reviews)",
  prepTime:"14 min",
  cookTime:"12 min",
  servings:"2 plates",
  badge1:"Easy",
  badge2:"Italian",
  desc:"Cream sauce pasta with basil and parmesan",
  ingredients:{
    ing1:"300g pasta",
    ing2:"1 cup cream",
    ing3:"2 garlic cloves",
    ing4:"1/3 cup parmesan",
    ing5:"Basil blended",
    ing6:"Pepper",
    ing7:"Salt",
    ing8:"1 tbsp butter"
  },
  instructions:{
    step1:"Cook pasta.",
    step2:"Sauté garlic in butter.",
    step3:"Add cream.",
    step4:"Add parmesan and basil paste.",
    step5:"Mix pasta with sauce.",
    step6:"Serve hot."
  },
  nutrition:{calories:"430 kcal", protein:"12g", carbs:"63g", fat:"15g", fiber:"2g", sodium:"370mg"},
  tips:{
    tip1:"Add basil at low heat.",
    tip2:"Save pasta water for texture.",
    tip3:"Don't burn garlic.",
    tip4:"Serve immediately."
  }
}

  
];


var mealCard=document.getElementById("mealCard");


function randomRecipe(){
    var index = Math.floor(Math.random() * recipes.length);
    var box="";

    var warning = "";
    var prep = +recipes[index].prepTime.replace(" min", "").replace("min", "");
    if (prep >= 45) { 
    warning = `<div class="meal-time d-flex align-items-center rounded-3">
        <span class="ms-3"><i class="fa-solid fa-warning text-danger"></i></span>
        <div class="meal-time-detail ms-2 p-3">
            <span class="d-block fw-semibold color-wine">Extended Preparation Time</span>
            <span class="text-danger">
            This recipe requires more than 45 minutes to prepare. Plan accordingly!
            </span>
        </div>
        </div>`;
    }
    
        box+=`
          <div class="mycard-lft">
            <div class="card-image position-relative">
              <div class="badge-1 position-absolute w-100">
                <span
                  class="bg-white rounded-pill p-2 position-absolute badge-position" id="mealRate"
                  ><i class="fa-solid fa-star text-warning"></i>${recipes[index].rate}
                  <span class="text-secondary">${recipes[index].reviews}</span></span
                >
              </div>
              <img
                class="w-100 image-hero" id="mealImage"
                src="${recipes[index].image}"
                alt="pasta"
              />
              <div
                class="badge-data d-flex justify-content-between justify-content-sm-around position-absolute bg-white rounded-4 p-3 badge-position2"
              >
                <div class="left-part text-center">
                  <span><i class="fa-solid fa-clock color-orange"></i></span>
                  <span class="text-secondary d-block">Prep Time</span>
                  <span class="fw-bold" id="mealPrepTime">${recipes[index].prepTime}</span>
                </div>
                <div class="middle-part text-center">
                  <span><i class="fa-solid fa-fire-burner color-red"></i></span>
                  <span class="text-secondary d-block">Cook Time</span>
                  <span class="fw-bold" id="mealCookTime">${recipes[index].cookTime}</span>
                </div>
                <div class="right-part text-center">
                  <span><i class="fa-solid fa-users color-blue"></i></span>
                  <span class="text-secondary d-block">Servings</span>
                  <span class="fw-bold" id="mealServings">${recipes[index].servings}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mycard-right p-3 px-xl-5">
            <div
              class="mycard-right-logos d-flex flex-row-reverse pt-3 color-orange"
            >
              <span class="logo-bg p-3 rounded-4"
                ><i class="fa-solid fa-share-nodes"></i
              ></span>
              <span class="me-3 logo-bg p-3 rounded-4"
                ><i class="fa-solid fa-bookmark"></i
              ></span>
            </div>
            <div class="badges-right mt-3">
              <span class="rounded-pill color-green px-3 me-2 py-1" id="mealDifficulty"
                >${recipes[index].badge1}</span
              >
              <span class="rounded-pill color-blue bg-color-blue px-3 py-1" id="mealCuisine"
                >${recipes[index].badge2}</span
              >
            </div>
            <div class="meal-about">
              <h1 class="pt-3 fw-semibold" id="mealName">${recipes[index].name}</h1>
              <p class="text-secondary" id="mealDescription">
                ${recipes[index].desc}
              </p>
            </div>
            ${warning}
            <ul class="nav nav-tabs active pt-3 px-lg-4" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  <span class="nav-font tabs-md"
                    ><i class="fa-solid fa-list-check"></i> Ingredients</span
                  >
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  <span class="nav-font tabs-md"
                    ><i class="fa-solid fa-book-open"></i> Instructions</span
                  >
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  <span class="nav-font tabs-md"
                    ><i class="fa-solid fa-chart-pie"></i> Nutrition</span
                  >
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="disabled-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#disabled-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="disabled-tab-pane"
                  aria-selected="false"
                >
                  <span class="nav-font tabs-md"
                    ><i class="fa-solid fa-lightbulb"></i> Chef's Tips</span
                  >
                </button>
              </li>
            </ul>
            <div class="tab-content mt-3 rounded-3 mycont" id="myTabContent">
              <div
                class="tab-pane fade show active p-3 rounded-3 ing-card-bg"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    1
                  </span>
                  ${recipes[index].ingredients.ing1}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    2
                  </span>
                  ${recipes[index].ingredients.ing2}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    3
                  </span>
                  ${recipes[index].ingredients.ing3}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    4
                  </span>
                  ${recipes[index].ingredients.ing4}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    5
                  </span>
                  ${recipes[index].ingredients.ing5}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    6
                  </span>
                  ${recipes[index].ingredients.ing6}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    7
                  </span>
                  ${recipes[index].ingredients.ing7}
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-circle text-white fw-bold text-center me-2 number-style"
                  >
                    8
                  </span>
                  ${recipes[index].ingredients.ing8}
                </span>
              </div>
              <div
                class="tab-pane fade p-3"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabindex="0"
              >
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width"
                  >
                    1
                  </span>
                  ${recipes[index].instructions.step1} 
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width"
                  >
                    2
                  </span>
                  ${recipes[index].instructions.step2} 
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width"
                  >
                    3
                  </span>
                  ${recipes[index].instructions.step3} 
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width4"
                  >
                  4
                  </span>
                  ${recipes[index].instructions.step4} 
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width"
                  >
                    5
                  </span>
                  ${recipes[index].instructions.step5} 
                </span>
                <span class="d-flex align-items-center mb-3">
                  <span
                    class="rounded-4 text-white fw-bold text-center me-3 bg-orange fs-4 p-3 ins-width"
                  >
                    6
                  </span>
                  ${recipes[index].instructions.step6} 
                </span>
              </div>
              <div
                class="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabindex="0"
              >
                <div class="all-cards d-md-flex flex-md-wrap gap-md-2">
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo1 rounded-3 text-center"><i class="fa-solid fa-fire first-logo"></i></span> Calories</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.calories}</span>
                  </div>
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo2 rounded-3 text-center"><i class="fa-solid fa-dumbbell second-logo"></i></span> Protein</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.protein}</span>
                  </div>
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo3 rounded-3 text-center"><i class="fa-brands fa-pagelines third-logo"></i></span> Carbohydrates</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.carbs}</span>
                  </div>
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo4 rounded-3 text-center"><i class="fa-solid fa-droplet fourth-logo"></i></span> Fat</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.fat}</span>
                  </div>
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo5 rounded-3 text-center"><i class="fa-solid fa-seedling fifth-logo"></i></span> Fiber</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.fiber}</span>
                  </div>
                  <div class="mycardd mb-3 rounded-3 d-flex justify-content-between p-4">
                    <span class="d-flex align-items-center"><span class="bg-logo bg-logo6 rounded-3 text-center"><i class="fa-solid fa-cube sixth-logo"></i></span> Sodium</span>
                    <span class=" fw-semibold">${recipes[index].nutrition.sodium}</span>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="disabled-tab-pane"
                role="tabpanel"
                aria-labelledby="disabled-tab"
                tabindex="0"
              >
                <div class="tips d-flex align-items-center rounded-3 mb-3">
                  <span class="ms-3"
                    ><i class="fa-solid fa-circle-check check-color"></i></i
                  ></span>
                  <div class="tips-detail p-3">
                    <span>
                      ${recipes[index].tips.tip1}
                    </span>
                  </div>
                </div>
                <div class="tips d-flex align-items-center rounded-3 mb-3">
                  <span class="ms-3"
                    ><i class="fa-solid fa-circle-check check-color"></i></i
                  ></span>
                  <div class="tips-detail p-3">
                    <span>
                      ${recipes[index].tips.tip2}
                    </span>
                  </div>
                </div>
                <div class="tips d-flex align-items-center rounded-3 mb-3">
                  <span class="ms-3"
                    ><i class="fa-solid fa-circle-check check-color"></i></i
                  ></span>
                  <div class="tips-detail p-3">
                    <span>
                      ${recipes[index].tips.tip3}
                    </span>
                  </div>
                </div>
                <div class="tips d-flex align-items-center rounded-3 mb-3">
                  <span class="ms-3"
                    ><i class="fa-solid fa-circle-check check-color"></i></i
                  ></span>
                  <div class="tips-detail p-3">
                    <span>
                      ${recipes[index].tips.tip4}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mycard-border border border-opacity-10 my-4 w-100"></div>
            <button class="logo-color text-white rounded-3 p-2 btn mybtn" onclick="randomRecipe()"><i class="fa-solid fa-rotate"></i> Try Another Recipe </button>
          </div>`;
    
    mealCard.innerHTML=box;
}
