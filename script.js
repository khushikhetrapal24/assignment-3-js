const menus=[];
// STEP 1 - Define your page variable
 let page = 0;
// STEP 2 - Define all your querySelector variables that you'll need to display all info.
// Consider using embedded objects that allows you use salad.title and salad.price to access the DOM elements
const menuTitle = document.querySelector('#menutitle');
const nextBtn = document.querySelector('#nextMenu');
const soupName = document.querySelector('#soupName');
const saladName = document.querySelector('#saladName');
const lighterFare = document.querySelector('#lighterFareName');
const entree = document.querySelector('#entreeName');
const soupPrice = document.querySelector('#soupPrice');
const saladPrice = document.querySelector('#saladPrice');
const lighterFarePrice = document.querySelector('#lighterFarePrice');
const entreePrice = document.querySelector('#entreePrice');
const prevBtn = document.querySelector('#previousMenu');

// STEP 3 - Define a function called display that accepts a parameter called todaysmenu (Which is an object)
// The function will display all prices and menu items based off of todaysmenu via your querySelector variables defined above

function display(menus1){
    menuTitle.textContent = menus[page].title;
    soupName.textContent = menus[page].soup;
    saladName.textContent = menus[page].salad;
    lighterFareName.textContent = menus[page].lighterFare;
    entreeName.textContent = menus[page].entree;
    soupPrice.textContent = menus[page].soupPrice;
    saladPrice.textContent = menus[page].saladPrice;
    lighterFarePrice.textContent = menus[page].lighterFarePrice;
    entreePrice.textContent = menus[page].entreePrice;
  }
  async function getMenus() {
    const jsonf = await fetch(
      "https://gist.githubusercontent.com/khushikhetrapal24/04d9f46b03031839b96aa81022a826cd/raw/ab68e6b82433e4e924de63f728b1ceba850bad53/menu.json");
    const data = await jsonf.json();
    menus.push(...data);
    display();
  }
  
  
getMenus();

// STEP 4 - Create a function called next, that will increment your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page variable
function next()
      {
        if (page === menus.length-1){
          page = 0;
        }
        else {
          page = page + 1;  
        }
        display();
      }
// STEP 5 - Create a function called previous, that will decrement your page counter by 1,
// then run your display function using as the argument, the current menu as determined by your page varibale
function previous()
      {
        if (page === 0){
          page = 4;
        }
        else {
          page = page - 1;  
        }
        display();
      }
// STEP 6 - Ensure that you cover the potential bug of your functions next/prev being called multiple times
// which will eventually move the page value outside the bounds of your array.  Fix that.


// STEP 7 - Add click event listeners to both arrow buttons calling the appropriate function.
      nextBtn.addEventListener("click",next);
      prevBtn.addEventListener("click",previous);

// STEP 8 - Almost done, but why doesn't the info display right away upon page load?  Fix it.
