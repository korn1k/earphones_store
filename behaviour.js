// This function changes page layout. There is one page for HTML, so it hides and displays content when it is requested
function changePage(id) { // start of changePage
    if (id == "page1") {
        document.getElementById("cartSecondPage").style.display = "none";
        document.getElementById("index").style.display = "initial";
    } else if (id == "page4") {
        if (cart.length == 0) {
            alert("Your cart is empty!");
        } else {
            document.getElementById("index").style.display = "none";
            document.getElementById("cartSecondPage").style.display = "initial";
        }
    }
} // finish of page

// Create two arrays
var cart = [];
var items = [];

// This function creates a constructor for the main page.
function Catalog(id, brand, name, gender, price, qtyOnHand, maxPerCustomer, category, shippingCost, reviews, description, image) { // start catalog
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.gender = gender;
    this.price = price;
    this.qtyOnHand = qtyOnHand;
    this.maxPerCustomer = maxPerCustomer;
    this.category = category;
    this.shippingCost = shippingCost;
    this.reviews = reviews;
    this.description = description;
    this.image = image;

    // Change currency: CAD AND USD respectively
    this.convertor = function () {
        var currency = document.getElementById("currencySelector").value;
            if (currency == "CAD") {
                return this.price.toFixed(2);
            } else if (currency == "USD") {
                return (this.price / 1.5674).toFixed(2);
            }
        }
} // finish of catalog

// This function creates a constructor for the cart page
function constructorAddToCart(id, name, orderQnt, image, price) { // start of constructorAddToCart
    this.id = id;
    this.name = name;
    this.orderQnt = orderQnt;
    this.image = image;
    this.price = price;
} // finish of constructorAddToCart

// Initialize values
items.push(new Catalog("IWD1", "Apple", "AirPods", "Neutral", 201.62, 15, 15, "Wireless", 15, "Anonym:\nMy wife got me these for my birthday. Pretty good earbuds! I will say that they won’t stay in my ears during workouts but that’s been an issue for me with almost every earbuds out there. Got some wing tips to keep them in and problem solved. I also have a pair of JLab Jbuds Air Icon for my workouts so the Airpods will be for casual activities. Overall solid set to hang out!", "The new AirPods combine intelligent design with breakthrough technology and crystal clear sound. Powered by the new Apple H1 headphone chip, AirPods now feature hands-free access to Siri using just your voice. And up to 3 hours of talk time on a single charge.", "images/airpods.png"));
items.push(new Catalog("IWD2", "JBL", "SkullCandy", "Neutral", 69.51, 20, 20, "Wireless", 20, "Anonym:\nMy husband has bigger ears than the average person so these were perfect. The tiny little “standard” size ones that come from every brand would fall out and he couldn’t even dream of trying to exercise in them. These are perfect. They are bulky for a normal ear sized person, but for him they are great, even for running. Sound great too.", "Slim, streamlined, and truly wireless, Skullcandy Indy lets you experience your soundtrack with a whole new level of freedom. From the streets to the mountains, you can count on excellent water-resistance, unique touch controls, and a remarkable 16 hours of battery life.", "images/skullcandy.png"));
items.push(new Catalog("IWD3", "JBL", "JBuds", "Male", 48.66, 102, 10, "Wireless", 5, "Anonym:\nThey are great looking, but right out of the box the left ear piece doesn't connect. Looking online, this seems to be an issue others have had too. I got them at a great price and would love to exchange them.", "The JBuds Air Sport feature an over-ear hook for sport-focused activities with 40 hours of playtime. The earbuds hold a 6-hour battery life in each earbud and 34+ additional hours in the charging case. Built for fitness, the JBuds Air Sport are IP66 sweat resistant and have Be Aware Audio, designed to let ambient noise in while outside running for safe listening.", "images/JBuds.png"));
items.push(new Catalog("IWD4", "JBL", "Anker", "Male", 83.42, 506, 20, "Wireless", 10, "Anonym:\nUnfortunately, I am having the hardest time trying to keep these charged. Purchased only about two weeks ago and they only charge above 20% when the entire case is plugged in. The beauty of this type of earbud is to be able to charge them on the go. Without that functionality consistently, I can't recommend them.", "Soundcore Liberty Air offers both impressive sound and complete freedom from wires. Custom graphene-coated drivers deliver sound with unprecedented clarity and accurate sound reproduction across the entire frequency range. Unlike many truly-wireless earphones, Liberty Air provides in-ear stereo calls. For crystal-clear voice pick-up, the dual-microphones are equipped with uplink noise reduction technology to filter out ambient noise. Calls and music can also be controlled directly from the touchpad on the earbud for ease-of-use. When you take Liberty Air out of the charging case, they automatically turn on and connect to your device. The latest Bluetooth 5.0 technology maintains an ultra-stable connection for skip-free streaming. 5 hours of continuous playtime can be extended by up to 15 hours using the included charging case.", "images/anker.png"));
items.push(new Catalog("IWD5", "PRIM", "Bose", "Male", 213.24, 1000, 50, "Wireless", 60, "Anonym:\nwhen i use them they are great, sound is beautiful but the phone feature is no good when i hear the other person it comes in as a computer talking to you like a robot and i have to hang up and call again so that don't happen again.i forgot to mention i got these as a Bday Gift.", "Demanding workouts demand SoundSport® Free wireless headphones. They’re completely free of wires and packed full of technology. Some wireless headphones pop, crack and hiss from a weak wireless connection, but these earbuds are designed to play reliably and consistently. No matter if your phone is in your hand, your pocket or strapped to your arm. Or in your nearby gym bag. Sweat a lot? Don’t sweat it. These earbuds are designed to keep rain and moisture out. Worried about losing an earbud? Don’t sweat that either. Bose® StayHear®+ Sport tips on each lightweight earbud stay comfortably and securely in place all workout long. And the Bose Connect app helps you track them if misplaced. When you’re done working out, the magnetized case also keeps the earbuds securely in place while they recharge. Off a single charge, the earbuds can play for up to five hours—long enough to power you through almost any workout. A fully charged case gives you two additional earbud charges—or up to 10 hours of battery life. Voice prompts talk you through Bluetooth® pairing. You also can use the right earbud to take calls and access your phone’s Siri or your Google Assistant™—while your left ear remains open to the world around you.", "images/bose.png"));
items.push(new Catalog("IWD6", "PRIM", "JLab", "Female", 120.34, 123, 30, "Kids", 15, "Anonym:\nMy two year old loved her headphones. We used them during a long road trip. Only complaint is that sometimes the volume was a touch too low. I wish the volume would be able to go up a little bit more than it actually did. Aside that no complaints. On the flip side, I didn't have to worry about her turning the volume up too high and hurting her ears.", "JLab JBuddies Studio Over-Ear Folding Kids Headphones - Comfort for home or school. Style to suit any budding fashionista. JLab's Over-Ear Cloud Foam cushions offer ultimate comfort for homework session focus- without the rock-star price tag. The smooth-sliding metal adjustments and feather-light build give you the long-lasting, all-day comfort you require. They'll be their favorite wearable accessory. JBuddies offer safe volume control through vigorous testing and built-in volume regulators to ensure kids never rock out past 85db. Trust that young, sensitive ears aren't damaged. Built for all growing shapes and sizes, the smooth-sliding metal adjustments and feather-light build are ready to hit the road or use in class for ages 6-16. The plush circular ear cups rotate 80 degrees and fold up in the palm of your hand so they can fit snuggly in any backpack. Not to mention a lifetime warranty.", "images/JLab.png"));
items.push(new Catalog("IWD7", "PRIM", "eKids", "Female", 475.12, 53, 2, "Kids", 16, "Anonym:\nWithout that functionality consistently, I can't recommend them.", "Hit the streets groovin’ to your favorite music with these Disney Frozen 2 Headphones. These great sounding headphones have a built-in volume limiter that protects hearing and makes listening to music safe for little ears. The eKids Frozen 2 Wired Over-Ear Headphones Will make the perfect give for your loved one this holiday season!", "images/eKids.png"));
items.push(new Catalog("IWD8", "UBI", "Marvel", "Neutral", 900, 54, 6, "Kids", 67, "Anonym:\nOmg! These are terrible! I got them for my sons birthday since he likes to listen to Justin Bieber and Michael Jackson a lot. He kept saying something was wrong with the songs he was listening to. I put the volume all the way up and listened to it for myself and you can’t even hear the voices in the songs. It’s so faded and blocks out much of the audio and it ruins any thing you’re trying to listen to! I wish I would’ve looked at these reviews before purchasing.", "Give your child the gift of a listening experience with crisp, quality sounding headphones. These headphones are parent approved with an adjustable volume limiter that provide a safe and optimal listening experience for your young one. Each headphone features an adjustable headband and padded pivoting ear cushions to provide a comfortable custom fit while your child listens to their favorite tunes. Offered in a variety of fun characters these headphones are guaranteed to be kid approved as they jam out to their favorite song. Connect these wired headphones to any audio device with the line-in jack allowing them to listen to high-quality music wherever they would like.", "images/marvel.png"));
items.push(new Catalog("IWD9", "UBI", "LOL", "Neutral", 228, 32, 12, "Kids", 100, "Anonym:\nLooking online, this seems to be an issue others have had too. I got them at a great price and would love to exchange them.", "Rock out to all your favorite music with L.O.L. Surprise Kid-Safe Headphones! These headphones feature unique volume limiting technology that works great at preventing kids from listening to music at levels that could potentially damage their hearing. Comfort is made a top priority with these headphones with their cushioned adjustable head strap able to fit any sized head and cushioned earcups that fit nicely over the ears for a comfortable listen. Compatible with any portable audio devices via a 3.5mm audio jack, these headphones feature a fun and vibrant design with your favorite L.O.L. Surprise dolls and stylish Bow on top, so you can strut your stuff and sing along to all your favorite music all day long!", "images/LOL.png"));
items.push(new Catalog("IWD10", "UBI", "Sharper", "Male", 923.12, 12, 23, "Kids", 123, "Anonym:\nMy niece loves them but they already broke. She has only had them since Christmas. Very disappointed.", "Put on your Cat Ear headphones and listen to your favorite tunes as they were meant to be heard - in stunning high definition audio! Turn on your LED cat-ear lights when you are in the mood for solid or flashing lights. Not only are these headphones fun, the high-fidelity sound enriches your favorite audio. The built-in Bluetooth allows for wireless listening while the included aux cable allows you to plug in for wired sound. Control the music, volume, and calls by using your device or the control panel on the earcup. Thick cushioning at the headband and earcups provides for a comfortable listening experience. Compact design folds down to a small, portable size.", "images/sharper.png"));
items.push(new Catalog("IWD11", "PROF", "Solo3", "Male", 123.43, 15, 54, "On-Ear", 54, "Anonym:\nPros: I love using it for day to day things like jogging, gym or just about anything else. The battery last a long time! I’m so glad I don’t have to change it so often. The sound quality is not bad at all as well. It doesn’t fall out my ears like the AirPods do. I only payed $125 so that’s a bargain! Cons: As much as I enjoy using it, I wouldn’t actually pay $300 for this product.", "Step, jog or run to your beat with the Solo 3 wireless headphones by Beats! Thanks to a battery life of 40 hours, Beats Solo 3 Wireless is your perfect everyday reliable headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Have a great sound and voice experience with on-ear controls and beam-forming mics for some quality wireless listening freedom. The adjustable on-ear and comfort-cushion ear cups let you customize your Solo 3 Wireless headphones for all-day comfort.", "images/solo3.png"));
items.push(new Catalog("IWD12", "PROF", "Noise", "Female", 492.12, 53, 12, "On-Ear", 12, "Anonym:\nsound Stuttering while playing music... noise canceling is weak everytime when startup i need to deactivate NC", "Zone out and tune in with these sleek black Sony WH-CH700NÂ headphones. A single charge lets you take on the day with a 35-hour wireless playback and hands-free calling. These headphones also allow up to 50 hours of wired listening with the supplied cable. Thanks to Sony's handy build, you can optimize noise cancellation or connect to your smartphone at the push of a button.", "images/noise.png"));
items.push(new Catalog("IWD13", "PROF", "Studio 3", "Neutral", 123, 53, 9, "On-Ear", 53, "Anonym:\nI Love these headphones because when i wear the headphones to school i feel good cancel noise from the outside. i use my headphones on my PC, and my phone.", "Premium sound with fine-tuned acoustics and Pure ANCBeats Studio3 Wireless headphones deliver a premium listening experience with Pure Adaptive Noise Cancelling (Pure ANC) to actively block external noise, and real-time audio calibration to preserve clarity, range and emotion. It continuously pinpoints external sounds to block while automatically responding to individual fit in real-time, optimizing sound output to preserve a premium listening experience the way artists intended.Driven by the Apple W1 chipBeats and Apple are changing the way you listen to music with the Apple W1 chip in Beats Studio3 Wireless headphones. Incorporating the efficient W1 chip brings seamless setup and switching for your Apple devices,* up to 22 hours of battery life for all-day fully-featured playback with Pure ANC on, and Fast Fuel technology for 3 hours of play with a 10-minute charge. Pure ANC-off for low power mode provides up to 40 hours of battery life.*Requires iCloud account and macOS Sierra, iOS 10, watchOS 3 or later versionsStay connected. Stay in the zone.Take calls, skip songs, control your volume and activate Siri using the convenient multi-function on-ear controls. The Apple W1 chip offers Class 1 Bluetooth® connectivity to seamlessly sync to your devices, so you can easily move about, keep the music going and stay productive all day.Designed to fit youThe Beats Studio3 Wireless headphone is designed for long-term comfort to match its impressive battery life of up to 22 hours for all-day play. The soft over-ear cushions feature advanced venting and signature ergonomic pivoting for a custom, flexible fit for any head shape. The holistic design is lightweight, durable and comfortable, so you can get lost in your music.", "images/studio3.png"));
items.push(new Catalog("IWD14", "New Bose", "Outdoor", "Neutral", 678, 53, 10, "On-Ear", 43, "Anonym:\nThese are great with my tablet, cell phone and computer. I wear these to the gym and work great no matter if I'm bent over or laying down, they stay on my head.", "Hear your music the way it was supposed to sound with outdoor headphones from Sony. Noise-reducing design and stereo sound make for a stylish way to listen to your favorite songs. The earpads' leatherette cushions keeps your ears comfortable. Standard 3.5-mm plug will fit in most MP3 players, iPods, or other audio devices.", "images/outdoor.png"));
items.push(new Catalog("IWD15", "New Bose", "JLabStudio", "Female", 172, 53, 10, "On-Ear", 12, "Anonym:\nI was gifted a pair of these headphones and I got to admit they are the best headphones that I've ever received hands down when my pair of do stop working if they ever stop working I will be buying another pair", "The Studio Wireless headphones feature a long 30+ hour battery life, so you can jam out for days. Cloud Foam™ earcups bring studio comfort to you, plus adjustable and foldable hinges mean you can bring them anywhere. Control all of your music on the side of the earcup, as well as answer and hang up phone calls. Custom EQ3 Sound allows you to choose your tune between Signature, Balanced, and Bass Boost.", "images/studio.png"));
items.push(new Catalog("IWD16", "JBuddies", "Studio", "Female", 120.54, 12, 5, "Kids", 12, "Anonym:\nUnfortunately, I am having the hardest time trying to keep these charged. Purchased only about two weeks ago and they only charge above 20% when the entire case is plugged in. The beauty of this type of earbud is to be able to charge them on the go. Without that functionality consistently, I can't recommend them.", "Soundcore Liberty Air offers both impressive sound and complete freedom from wires. Custom graphene-coated drivers deliver sound with unprecedented clarity and accurate sound reproduction across the entire frequency range. Unlike many truly-wireless earphones, Liberty Air provides in-ear stereo calls. For crystal-clear voice pick-up, the dual-microphones are equipped with uplink noise reduction technology to filter out ambient noise. Calls and music can also be controlled directly from the touchpad on the earbud for ease-of-use. When you take Liberty Air out of the charging case, they automatically turn on and connect to your device. The latest Bluetooth 5.0 technology maintains an ultra-stable connection for skip-free streaming. 5 hours of continuous playtime can be extended by up to 15 hours using the included charging case.", "images/studioGirl.png"));
// end of initializing

// This function checks the current date and outputs "Today is [month] [date], [year]"
function dateCheck() { // start of dateCheck
    var currentDate = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("date").innerHTML = "Today is " + months[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear();
} // end of dateCheck

// This function unchecks all the filters if "All" - category is checked 
function unCheck() { // start of unCheck
    var unCheck = document.getElementsByName('brand');
        if (document.getElementById("basic").checked == true) {
            for (var k = 0; k < unCheck.length; k++) {
                unCheck[k].checked = false;
            }
        }
} // end of unCheck

// This function analyzes checked filters (Brands and Categories); as a result of that, it outputs tables.
function displayItems() { // start of displayItems
    var checkedValueBra = [];
    var checkedValueCat = [];
    var checkedBoxesBra = document.getElementsByClassName('brands');
    var checkedBoxesCat = document.getElementsByClassName('categories');
        document.getElementById("outputArea").innerHTML = "";
        unCheck();

        // check what brands are checked
        for (var l = 0; checkedBoxesBra[l]; ++l) {
            if (checkedBoxesBra[l].checked == true) {
                checkedValueBra.push(checkedBoxesBra[l].value);
            }
        } // end of check brands
            // check what "categories: kids, on-ear, wireless" are checked
            for (var i = 0; checkedBoxesCat[i]; ++i) {
                if (checkedBoxesCat[i].checked == true) {
                    checkedValueCat.push(checkedBoxesCat[i].value);
                }
            } // end of categories: kids, on-ear, wireless
                
                // output tables depending on selected filters
                for (var x = 0; x < items.length; x++) {
                    if (document.getElementById("basic").checked == true) { // check if we check "All"
                        createTable(x);
                    } else if (checkedValueBra.length == 0) {
                        for (var y = 0; y < checkedValueCat.length; y++) {
                            if (checkedValueCat[y] == items[x].category) { // compare checked values with categories
                                createTable(x);
                            }
                        }
                    } else if (checkedValueCat.length == 0) {
                        for (var z = 0; z < checkedValueBra.length; z++) {
                            if (checkedValueBra[z] == items[x].brand) { // compare checked values with brands
                                createTable(x);
                            }
                        }
                    } else {
                        for (var p = 0; p < checkedValueBra.length; p++) {
                            for (var q = 0; q < checkedValueCat.length; q++) {
                                if (checkedValueBra[p] == items[x].brand && checkedValueCat[q] == items[x].category) { // compare both checked brands and categories for output
                                    createTable(x);
                                }
                            }   
                        }
                    }   
                } // end of output tables
            
            // uncheck "boxes" for brands and do "alert" when nothing is found
            if (document.getElementById("outputArea").innerHTML == "") {
                var unCheckCat = document.getElementsByName("category");
                    for (var e = 0; e < unCheckCat.length; e++) {
                        unCheckCat[e].checked = false;
                    }

                alert("Oops! We cannot find items by selected parameters!");
                document.getElementById("basic").checked = true;
                displayItems();
            } // end of uncheck "boxes" for brands and do "alert" when nothing is found
} // end of displayItems

// This function checks "order: Low-price to high, High-to low, and Featured" to sort items
function orderFilter() { // start of orderFilter
    var orderBy = document.getElementById("SortByType").value;
        if (orderBy == "Featured") {
            items.sort(function(a, b) {return b.qtyOnHand - a.qtyOnHand;});
        } else if (orderBy == "Low-price to high") {
            items.sort(function(a, b) {return a.price - b.price;});
        } else if (orderBy == "High-price to low") {
            items.sort(function(a, b) {return b.price - a.price;});
        }

        displayItems();
} // end of orderFilter

// This function gets values from "displayItems()" and creates tables
function createTable(x) { // start of createTable
    var output = document.getElementById("outputArea");
    var table = document.createElement("table");
    var sign = document.getElementById("currencySelector").value;
        if (sign == "CAD") {
            sign = "C$";
        } else {
            sign = "$";
        }
        table.className = "mainList";
        // table.style.cssFloat = "right";
        // table.style.width = "25%";
            for (var y = 0; y < 6; y++) { // create rows
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");        
                    if (y == 0) { // cell 1
                        td1.appendChild(document.createTextNode(items[x].id));
                        td2.appendChild(document.createTextNode("MODEL: " + items[x].name));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 1) { // 2
                        var img = document.createElement("img");
                        img.src = items[x].image;
                        img.className = "images";

                        // click on image to see reviews, description and leave review
                        img.addEventListener("click", function () { // start of function
                            var feedback = prompt("What do you want to do?\n1 = Check Description\n2 = Check Reviews\n3 = Leave Review");
                            var lReview = undefined;
                            var nReview = undefined;
                                if (feedback == null) {
                                    return;
                                } else if (feedback.toLowerCase() == "check description" || feedback.toLowerCase() == "description" || feedback == 1) {
                                    alert(items[x].name + ":\n\n" + items[x].description);
                                } else if (feedback.toLowerCase() == "check reviews" || feedback.toLowerCase() == "reviews" || feedback == 2) {
                                    alert(items[x].name + ":\n\n" + items[x].reviews);
                                } else if (feedback.toLowerCase() == "leave review" || feedback.toLowerCase() == "review" || feedback == 3) {
                                    nReview = prompt("What is your nickname?\n[It is necessary to include your nickname to leave own review!]");
                                    if (nReview == "") {
                                    nReview = "Anonym";
                                    }
                                    lReview = prompt("To leave your review, please write it in the following box:");
                                    items[x].reviews += "\n\n" + nReview + ":\n" + lReview;
                                    alert("Thank you for adding your review! We appreciate it!");
                                } else {
                                    alert("You entered incorrect value!");
                                }}); // end of function
                            td1.appendChild(img);
                            td1.colSpan = 2;
                            tr.appendChild(td1);
                    } else if (y == 2) { // cell 3
                        td1.appendChild(document.createTextNode("BRAND: " + items[x].brand));
                        td2.appendChild(document.createTextNode("PRICE: " + sign + items[x].convertor()));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 3) { // cell 4
                        td1.appendChild(document.createTextNode("QNT ON HAND: " + items[x].qtyOnHand));
                        td1.id = "T" + items[x].id;
                        td2.appendChild(document.createTextNode("MAX QNT TO GET: " + items[x].maxPerCustomer));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 4) { // cell 5
                        td1.appendChild(document.createTextNode("CATEGORY: " + items[x].category));
                        td2.appendChild(document.createTextNode("GENDER: " + items[x].gender));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 5) { // cell 6
                        var inputB = document.createElement("input")
                        var inputT = document.createElement("input");
                        inputT.type = "text";
                        inputT.id = "M" + items[x].id; // add ID to call it
                        inputT.placeholder = "Order quantity";

                        // check if there is "readOnly" and do what to do if not
                        inputT.addEventListener("focus", function () {if (document.getElementById(this.id).value != "Sold out!" && document.getElementById(this.id).value != "Max per customer!") {document.getElementById(this.id).value = ""; document.getElementById(this.id).style.backgroundColor = "#dfe6e9";}});
                        // end of check
                        inputB.type = "button";
                        inputB.name = items[x].name;
                        inputB.id = items[x].id; // add ID to call it
                        inputB.value = "Add to Cart";
                        inputB.addEventListener("click", addToCart);
                        inputB.style.width = "100%";
                        inputB.style.height = "100%";
                        inputT.style.width = "100%";
                        inputT.style.height = "100%";
                        td1.appendChild(inputT);
                        td2.appendChild(inputB);
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    }
                table.appendChild(tr);
            } // end of rows
    output.appendChild(table);
} // end of createTable

// This function adds items to cart
function addToCart() { // start addToCart
    var found = false; // default values is false because it is possible not to find a selected item
        for (var x = 0; x < items.length; x++) { // start of loop through all items
            if (this.id == items[x].id) { // if we find an item with the same id as for a clicked button, do the following:
                var qntOrder = document.getElementById("M" + items[x].id).value; // grab value of qnt
                    if (qntOrder > 0 && qntOrder <= items[x].maxPerCustomer && qntOrder % 1 == 0 && items[x].qtyOnHand >= qntOrder) { // check input qnt
                        qntOrder = parseInt(qntOrder);
                        for (var y = 0; y < cart.length; y++) { // check cart
                            if (this.id == cart[y].id) { // if a selected ID is already inside of cart, do the following:
                                cart[y].orderQnt += qntOrder;
                                    if (cart[y].orderQnt > items[x].maxPerCustomer) { // if qnt is bigger than maxPerCustomer 
                                        qntOrder = Math.abs(cart[y].orderQnt - items[x].maxPerCustomer - qntOrder);
                                        cart[y].orderQnt = items[x].maxPerCustomer;
                                    } // end of qnt is bigger than maxPerCustomer
                                    found = true; // check that we found an item
                                    cart[y].price += qntOrder * items[x].convertor(); // calculate price
                                break; // break loop
                            } else {
                                found = false;
                            } // end of inside of cart
                        } // end of cart check

                        // if we found nothing, check if cart length is 4 to ensure that a user cannot select more than 4 different items || I showed you this one; yes, it is stupid, but I added it just for extra filtering
                        if (found == false) {
                            if (cart.length == 4) { // if it equals to the maximum number of different items to order, do the following:
                                alert("Oops, you reached the maximum number (4) of different items to add!\nBuy those to continue your shopping!");
                                document.getElementById("M" + items[x].id).value = "";
                                break;
                            } else { // if else, we just create a new cart item
                            cart.push(new constructorAddToCart(this.id, this.name, qntOrder, items[x].image, items[x].convertor() * qntOrder));
                            }
                        } // end of found nothing

                        // Check different possibilities for input field
                        items[x].qtyOnHand = items[x].qtyOnHand - qntOrder;
                        document.getElementById("T" + items[x].id).innerHTML = "QNT ON HAND: " + items[x].qtyOnHand;
                        document.getElementById("M" + items[x].id).style.backgroundColor = "#2ecc71"; // #fdcb6e #2ecc71
                            if (qntOrder == 1) {
                                document.getElementById("M" + items[x].id).value = qntOrder + " item added!";
                            } else if (qntOrder == 0) { 
                                document.getElementById("M" + items[x].id).value = "Max per customer!";
                                document.getElementById("M" + items[x].id).style.backgroundColor = "#3498db"; // #3498db #0984e3
                                document.getElementById("M" + items[x].id).readOnly = true;
                            } else {
                                document.getElementById("M" + items[x].id).value = qntOrder + " items added!";
                            }
                            cartLogo(); // change cartLogo if something is inside of one`s cart
                            console.log(cart);
                    } else {
                        document.getElementById("M" + items[x].id).style.backgroundColor = "#ff4757";
                        document.getElementById("M" + items[x].id).value = "Invalid value!";
                    }
                    if (items[x].qtyOnHand == 0) {
                        document.getElementById("M" + items[x].id).value = "Sold out!";
                        document.getElementById("M" + items[x].id).style.backgroundColor = "#fdcb6e";
                        document.getElementById("M" + items[x].id).readOnly = true;
                    }
            } // end of if this.id equals to existing id inside of "items` array"
        }
        displayCart();
} // end of addToCart

// This function changes cartLogo if something is inside of our cart
function cartLogo() { // start of cartLogo
    if (cart.length > 0) {
        document.getElementById("cart").src = "images/fullCart.png";
    } else if (cart.length == 0) {
        document.getElementById("cart").src = "images/emptyCart.png";
    }
} // end of cartLogo

// This function creates tables and calculates subtotal and total, including taxes and original prices
function displayCart() { // start of displayCart
    document.getElementById("itemsList").innerHTML = "";
    var sign = document.getElementById("currencySelector").value;
    const HST = 0.05;
    const WEB_TAX = 0.10;
    var subtotal = 0;
    var total = 0;
        if (sign == "CAD") {
            sign = "C$";
        } else {
            sign = "$";
        }
        for (let x = 0; x < cart.length; x++) { // start of table creation
            subtotal += cart[x].price;
            var output = document.getElementById("itemsList");
            var table = document.createElement("table");
            table.style.className = "cartTable";
            // table.style.width = "20%";
            // table.style.cssFloat = "left";

            for (var y = 0; y < 4; y++) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");
                    if (y == 0) {
                        td1.appendChild(document.createTextNode(cart[x].id));
                        td2.appendChild(document.createTextNode("MODEL: " + cart[x].name));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 1) {
                        var img = document.createElement("img");
                        img.src = cart[x].image;
                        td1.appendChild(img);
                        td1.colSpan = 2;
                        tr.appendChild(td1);
                    } else if (y == 2) {
                        td1.appendChild(document.createTextNode("ORDER QNT: " + cart[x].orderQnt));
                        td2.appendChild(document.createTextNode("PRICE: " + sign + cart[x].price.toFixed(2)));
                        tr.appendChild(td1);
                        tr.appendChild(td2);
                    } else if (y == 3) {
                        var input = document.createElement("input");
                        input.type = "button";
                        td1.colSpan = 2;
                        input.name = cart[x].name;
                        input.id = cart[x].id;
                        input.style.width = "100%";
                        input.style.height = "100%";
                        input.value = "Remove from cart";
                        input.addEventListener("click", function () {
                            cart.splice(x, 1);
                            cartLogo();
                            displayCart();
                            if (cart.length == 0) { // if nothing is inside of our cart
                                alert("You should have at least one item to make a purchase!");
                                changePage("page1");
                                window.location.reload(); // reload page to reset filters
                            } // end of "if nothing.."
                        });
                        td1.appendChild(input);
                        tr.appendChild(td1);
                    }
                    table.appendChild(tr);
            }
            output.appendChild(table);
        } // end of table creation

        // calculate total
        total = subtotal + subtotal * HST + subtotal * WEB_TAX;
        document.getElementById("finalOutput").innerHTML = "SUBTOTAL: " + sign + " " + subtotal.toFixed(2) + "<br />";
        document.getElementById("finalOutput").innerHTML += "TOTAL: " + sign + " " + total.toFixed(2);
        console.log(total);
} // end of displayCart

// This function works as a reset for our cart. If we click on it, we make a purchase and continue to do our shopping
function confirmPurchase() { // start of confirmPurchase
    alert("You made a purchase in our store. Thank you for being with us!\nWe hope to see you again. :)");
    cart = [];
    console.log(cart);
    displayCart();
    cartLogo();
    changePage("page1");
        for (var b = 0; b < 3; b++) { // uncheck categories if one clicks
            document.getElementsByClassName("categories")[b].checked = false;
        }
            for (var d = 0; d < 6; d++) { // uncheck brands if one clicks
                document.getElementsByClassName("brands")[d].checked = false;
            }
                document.getElementById("basic").checked = true; // check "All" if one clicks
                    displayItems();
} // end of confirmPurchase