/* STEP 2: Reference the HEADER and the SECTION elements with variables */
let header = document.querySelector('header');
let section = document.querySelector('section');


// STEP 3a: Create the asynchronous function populate()
async function populate() {

    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4: Store the URL of a JSON file in a variable */

    //My URL
    //const requestURL = "https://aaliyah033.github.io/lesson-10/js/i-scream.json"; //this is the url from github of the i-scream.json

    //Nibras URL added 
    const requestURL = "https://nibraskhalid.github.io/COMP1073Week10/js/i-scream.json";
    
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(requestURL); 
    
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request); //awaits just waits for fetch comnad to send the reponse before wiaiting

    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iScream = await response.json(); //await for the reponse in json format 
    
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream); //this will print the json object to the console
    
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iScream);
    
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iScream);
   
    
}
populate(); //invoke the populate function

// STEP 3b: Call the populate() function


/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    const headerH1 = document.createElement('h1');
    
    // Grab the company name from the JSON object and use it for the text node
    headerH1.textContent = jsonObj.companyName;
    
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.append(headerH1);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Attache the JSON topFlavors object to a variable
    let topFlavors = jsonObj.topFlavors;
    console.log(topFlavors);
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i ++) {
        // STEP 10e: build HTML elements for the content
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let ul = document.createElement('ul');

        //For lab 4: adding elements to get the calories annd the type 
        let caloriesListed = document.createElement('li');
        let typeListed = document.createElement('li');

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i]['name'];

        //NIBRAS URL
        image.setAttribute('src', 'https://nibraskhalid.github.io/COMP1073Week10/images/'+ topFlavors[i].image);

         //MY URLS
        //image.setAttribute('src', 'https://aaliyah033.github.io/lesson-10/images/'+ topFlavors[i].image);

         //image.setAttribute('src','./images/' + topFlavors[i].image);
        let ingredients = topFlavors[i].ingredients;
        // STEP 10g: Build a loop for the ingredients array in the JSON
        for(let j=0;j<ingredients.length;j++){
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            // add the ingredient to the UL
            ul.appendChild(listItem);
        }
        
        // for lab 4: Add the calories and type to the list 
        //notes: using switch and if so it targets both 2.
        //add color so it shows,(no need it now works/shows) --- because its already wrotten in JSON no need to wrote again
        const caloriesColor = 'red';
        switch(topFlavors[i].type){
            case 'ice-cream':
               if(topFlavors[i].calories === 400){
                    console.log(topFlavors[i]);
                    caloriesListed.style.color = caloriesColor;
                    caloriesListed.style.color = caloriesColor;
                }
                break;
            case 'sorbet':
                if(topFlavors[i].calories === 350){
                    console.log(topFlavors[i]);
                    caloriesListed.style.color = caloriesColor;
                }
                break;
            case 'frozen-yogurt':
                if(topFlavors[i].calories === 50){
                    console.log(topFlavors[i]);
                    caloriesListed.style.color = caloriesColor;
                }
                break;
            case 'Gelato':
                if(topFlavors[i].calories === 240){
                    console.log(topFlavors[i]);
                    caloriesListed.style.color = caloriesColor;
                }
                break;       
                
        }
            // Lab 4: to display the information
            caloriesListed.textContent=`Calories: ${topFlavors[i].calories}`;
            typeListed.textContent=`Type: ${topFlavors[i].type}`;
            //Lab 4: added append for the type and calories
                ul.append(typeListed);
                ul.append(caloriesListed);

       

        // STEP 10h: Append each of the above HTML elements to the ARTICLE element
        article.appendChild(h2);
        article.appendChild(image);
        article.appendChild(ul); //this will also target the append of type and calories
        
        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        section.appendChild(article);
    };
};
//now lab 4
// STEP 11: The instructor will edit the JSON file - refresh your page to see the updated content

// STEP 12: Change the URL in STEP 3 to point to the JSON file in the local /js folder in order to prepare for today's lab


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations

