/* ==========================
RISE & SHINE APP
SCRIPT.JS PART 1
========================== */

const affirmations = [

"I am disciplined.",
"I am focused.",
"I am improving every day.",
"I attract success.",
"I can achieve my goals.",
"I am stronger than my fears.",
"I am becoming successful.",
"I am committed to growth.",
"I believe in myself.",
"I deserve success.",
"I am confident.",
"I learn from my mistakes.",
"I am building my future.",
"I stay consistent.",
"I never give up.",
"I am capable of greatness.",
"I trust the process.",
"I am improving my mindset.",
"I work hard every day.",
"I attract positive energy.",
"I am in control of my life.",
"I choose success.",
"I stay motivated.",
"I am becoming wealthier.",
"I am creating opportunities.",
"I can overcome challenges.",
"I am growing stronger.",
"I stay calm under pressure.",
"I am worthy of happiness.",
"I believe in my dreams.",
"I am focused on my goals.",
"I take action daily.",
"I am mentally strong.",
"I learn something new every day.",
"I am preparing for success.",
"I can achieve anything I set my mind to.",
"I am becoming a better version of myself.",
"I stay patient and persistent.",
"I attract abundance.",
"I am responsible for my success.",
"I think positively.",
"I am grateful for my progress.",
"I choose discipline over excuses.",
"I am full of potential.",
"I stay committed to my vision.",
"I am building good habits.",
"I am confident in my abilities.",
"I stay productive.",
"I deserve a successful future.",
"I am becoming financially free.",
"I work with purpose.",
"I have the power to change my life.",
"I embrace challenges.",
"I am improving my skills.",
"I stay determined.",
"I am resilient.",
"I can handle difficult situations.",
"I am moving forward every day.",
"I trust myself.",
"I attract success and prosperity.",
"I am ambitious.",
"I stay focused on what matters.",
"I am proud of my progress.",
"I choose growth.",
"I am building a successful life.",
"I am courageous.",
"I believe in endless possibilities.",
"I am creating the future I want.",
"I stay disciplined even when it's hard.",
"I am learning and evolving.",
"I am worthy of respect.",
"I have a strong mindset.",
"I can achieve financial success.",
"I stay dedicated.",
"I am grateful for every opportunity.",
"I am becoming more confident daily.",
"I choose excellence.",
"I stay committed to my goals.",
"I can achieve greatness.",
"I am powerful.",
"I believe success is possible for me.",
"I am persistent.",
"I stay positive.",
"I am capable of amazing things.",
"I am becoming wiser every day.",
"I take responsibility for my future.",
"I am motivated to succeed.",
"I stay consistent with my efforts.",
"I am creating a life I love.",
"I believe in my journey.",
"I am focused on growth.",
"I can conquer my fears.",
"I am improving my discipline.",
"I attract good opportunities.",
"I stay patient.",
"I am unstoppable.",
"I choose success every day.",
"I am destined for greatness.",
"I am making progress daily.",
"I am confident, disciplined, and successful.",
"I wake up with purpose.",
"I am becoming more disciplined each day.",
"I am worthy of every good thing coming my way.",
"I stay committed to my goals.",
"I have a winning mindset.",
"I am constantly improving.",
"I am capable of achieving extraordinary things.",
"I choose progress over perfection.",
"I am becoming financially successful.",
"I attract success through hard work.",
"I am focused on my priorities.",
"I trust my abilities.",
"I am building a strong future.",
"I stay positive in difficult situations.",
"I have the courage to take action.",
"I am stronger than any obstacle.",
"I believe in my potential.",
"I am creating new opportunities daily.",
"I am dedicated to self-improvement.",
"I am becoming more productive.",
"I stay calm and confident.",
"I deserve a life of abundance.",
"I am proud of who I am becoming.",
"I trust the timing of my life.",
"I have everything I need to succeed.",
"I am growing every day.",
"I choose faith over fear.",
"I am capable of learning anything.",
"I remain focused on my vision.",
"I attract positive people into my life.",
"I am determined to win.",
"I have a clear purpose.",
"I am becoming more successful every day.",
"I can overcome any challenge.",
"I stay motivated and inspired.",
"I believe in my dreams.",
"I am worthy of love and respect.",
"I am building a life of meaning.",
"I stay disciplined even when nobody is watching.",
"I trust myself to make good decisions.",
"I am becoming mentally stronger.",
"I focus on solutions, not problems.",
"I have unlimited potential.",
"I am improving my habits daily.",
"I stay committed to my growth.",
"I am creating wealth and success.",
"I have the power to change my story.",
"I am learning from every experience.",
"I stay confident in my journey.",
"I deserve to achieve my goals.",
"I am becoming the person I admire.",
"I stay consistent with my efforts.",
"I am grateful for my progress.",
"I believe in endless possibilities.",
"I take control of my future.",
"I am capable of greatness.",
"I choose to be resilient.",
"I am becoming more courageous.",
"I stay focused on my mission.",
"I have the strength to keep going.",
"I am worthy of success and happiness.",
"I trust my journey.",
"I attract opportunities for growth.",
"I am confident in my skills.",
"I am creating a better tomorrow.",
"I stay patient while working toward success.",
"I choose to improve every day.",
"I am becoming more confident.",
"I believe success belongs to me too.",
"I stay strong through challenges.",
"I am committed to excellence.",
"I have a positive attitude.",
"I trust that my hard work will pay off.",
"I am becoming a leader.",
"I stay focused on what I can control.",
"I am creating the life I want.",
"I have a strong and healthy mindset.",
"I choose determination over excuses.",
"I am making a difference in my life.",
"I stay motivated to achieve my goals.",
"I am capable of achieving financial freedom.",
"I trust in my abilities and talents.",
"I am building a legacy.",
"I remain focused and disciplined.",
"I am becoming more successful with every step.",
"I have the courage to follow my dreams.",
"I am worthy of achieving greatness.",
"I choose confidence every day.",
"I stay committed to my purpose.",
"I am creating success through consistency.",
"I trust myself completely.",
"I am capable of handling anything that comes my way.",
"I choose to grow through every challenge.",
"I am becoming stronger, wiser, and better.",
"I attract abundance and prosperity.",
"I stay determined until I succeed.",
"I am unstoppable in pursuing my goals.",
"I believe in myself completely."

];

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

let goals =
JSON.parse(localStorage.getItem("goals")) || [];

let visions =
JSON.parse(localStorage.getItem("visions")) || [];

let dailyChallenges =
JSON.parse(localStorage.getItem("dailyChallenges")) || {
quotesRead: 0,
favoriteSaved: false,
goalCompleted: false,
journalWritten: false
};


/* ==========================
XP SYSTEM
========================== */

let xp =
parseInt(localStorage.getItem("xp")) || 0;

let level =
parseInt(localStorage.getItem("level")) || 1;

function updateXP(){

document.getElementById("userXP").innerText =
xp;

document.getElementById("userLevel").innerText =
level;

document.getElementById("xpFill").style.width =
xp + "%";

}

function addXP(amount){
    

xp += amount;

if(xp >= 100){

xp -= 100;

level++;
alert(
"🎉 LEVEL UP!\n\nYou reached Level " + level
);

}

localStorage.setItem("xp", xp);
localStorage.setItem("level", level);

updateXP();
updateChallenges();

}




/* PAGE NAVIGATION */

function showSection(id){

document.querySelectorAll(".page")
.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(id)
.classList.add("active");

}

/* RANDOM QUOTE */

function generateQuote(){

const random =
Math.floor(Math.random() * quotes.length);

const selected =
quotes[random];

document.getElementById("dailyQuote").innerText =
selected.quote;

document.getElementById("quoteAuthor").innerText =
"- " + selected.author;


}




/* RANDOM AFFIRMATION */

function generateAffirmation(){

const random =
Math.floor(
Math.random()*affirmations.length
);

document.getElementById(
"affirmationText"
).innerText =
affirmations[random];

}

/* SAVE FAVORITE */

function saveFavorite(){

const quote =
document.getElementById(
"dailyQuote"
).innerText;

if(!favorites.includes(quote)){

favorites.push(quote);
addXP(2);
dailyChallenges.favoriteSaved = true;

updateChallenges();

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

loadFavorites();

}

}


/* LOAD QUOTES */

function loadQuotes(){

const container =
document.getElementById("quoteContainer");

if(!container) return;

container.innerHTML = "";

quotes.forEach(item=>{

container.innerHTML += `

<div class="quote-item">

<p>${item.quote}</p>

<small>- ${item.author}</small>

</div>

`;

});

}




/* LOAD FAVORITES */

function loadFavorites(){

const container =
document.getElementById(
"favoriteContainer"
);

if(!container) return;

container.innerHTML = "";

favorites.forEach((quote,index)=>{

container.innerHTML += `

<div class="favorite-card">

<p>${quote}</p>

<button onclick="removeFavorite(${index})">

Remove

</button>

</div>

`;

});

}

/* REMOVE FAVORITE */

function removeFavorite(index){

favorites.splice(index,1);

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

loadFavorites();

}
/* ==========================
GOAL TRACKER
========================== */

function addGoal(){

const input =
document.getElementById("goalInput");

if(!input || input.value.trim()==="")
return;

goals.push({
text:input.value,
completed:false
});

localStorage.setItem(
"goals",
JSON.stringify(goals)
);

input.value="";

loadGoals();

}

function loadGoals(){

const goalList =
document.getElementById("goalList");

if(!goalList) return;

goalList.innerHTML="";

goals.forEach((goal,index)=>{

goalList.innerHTML += `

<div class="goal-item ${goal.completed ? 'completed':''}">

<span>${goal.text}</span>

<div>

<button onclick="completeGoal(${index})">


✓

</button>

<button onclick="deleteGoal(${index})">

✕

</button>

</div>

</div>

`;

});

updateDashboard();

}

function completeGoal(index){


goals[index].completed =
!goals[index].completed;

if(goals[index].completed){
    addXP(10);
    dailyChallenges.goalCompleted = true;

updateChallenges();
}

localStorage.setItem(
"goals",
JSON.stringify(goals)
);

loadGoals();

addXP(10);

}

function deleteGoal(index){

goals.splice(index,1);

localStorage.setItem(
"goals",
JSON.stringify(goals)
);

loadGoals();

}

/* ==========================
VISION BOARD
========================== */

function addVision(){

const input =
document.getElementById("visionInput");

if(!input || input.value.trim()==="")
return;

visions.push(input.value);

localStorage.setItem(
"visions",
JSON.stringify(visions)
);

input.value="";

loadVisionBoard();

}

function loadVisionBoard(){

const board =
document.getElementById("visionBoard");

if(!board) return;

board.innerHTML="";

visions.forEach((dream,index)=>{

board.innerHTML += `

<div class="vision-item">

<span>${dream}</span>

<button onclick="deleteVision(${index})">

Delete

</button>

</div>

`;

});

}

function deleteVision(index){

visions.splice(index,1);

localStorage.setItem(
"visions",
JSON.stringify(visions)
);

loadVisionBoard();

}

/* ==========================
DASHBOARD
========================== */

function updateDashboard(){

const totalGoals =
document.getElementById("totalGoals");

const completedGoals =
document.getElementById("completedGoals");

const favoriteQuotes =
document.getElementById("favoriteQuotes");

const goalCount =
document.getElementById("goalCount");

const favoriteCount =
document.getElementById("favoriteCount");

if(totalGoals)
totalGoals.innerText =
goals.length;

if(completedGoals)
completedGoals.innerText =
goals.filter(g=>g.completed).length;

if(favoriteQuotes)
favoriteQuotes.innerText =
favorites.length;

if(goalCount)
goalCount.innerText =
goals.length;

if(favoriteCount)
favoriteCount.innerText =
favorites.length;


}

/* ==========================
DARK MODE
========================== */

const darkToggle =
document.getElementById(
"darkModeToggle"
);

if(darkToggle){

darkToggle.addEventListener(
"change",
function(){

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(
"darkMode",
document.body.classList.contains(
"dark-mode"
)
);

}
);

}

if(
localStorage.getItem("darkMode")
==="true"
){

document.body.classList.add(
"dark-mode"
);

}

/* ==========================
LOADER
========================== */

window.addEventListener(
"load",
()=>{

const loader =
document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.display="none";

},1500);

}

});

/* ==========================
DAILY STREAK
========================== */

let streak =
parseInt(
localStorage.getItem("streak")
) || 0;

let lastVisit =
localStorage.getItem("lastVisit");

let today =
new Date().toDateString();

if(lastVisit !== today){

streak++;

localStorage.setItem(
"streak",
streak
);

localStorage.setItem(
"lastVisit",
today
);

}

const streakCount =
document.getElementById(
"streakCount"
);

const dailyStreak =
document.getElementById(
"dailyStreak"
);

if(streakCount)
streakCount.innerText =
streak;

if(dailyStreak)
dailyStreak.innerText =
streak;

/* ==========================
APP STARTUP
========================== */

loadFavorites();
loadGoals();
loadVisionBoard();
updateDashboard();
generateQuote();
loadQuotes();
loadJournal();
loadProgress();
loadAchievements();


function resetApp(){


console.log("RESET WORKING");

localStorage.clear();

location.reload();

}


const authorToggle =
document.getElementById("authorToggle");

if(authorToggle){

authorToggle.addEventListener("change",()=>{

const author =
document.getElementById("quoteAuthor");

if(authorToggle.checked){

author.style.display = "block";

}else{

author.style.display = "none";

}

});

}

window.addEventListener("load", function () {

let streak = localStorage.getItem("streak");

if (streak === null) {
    streak = 1;
    localStorage.setItem("streak", 1);
}

document.getElementById("streakCount").textContent = streak;

});

function searchQuotes() {

let input = document.getElementById("searchQuote");
let filter = input.value.toLowerCase();

let quotes = document.querySelectorAll(".quote-item");

quotes.forEach(q => {
    let text = q.textContent.toLowerCase();

    if (text.includes(filter)) {
        q.style.display = "block";
    } else {
        q.style.display = "none";
    }
});

}


function filterCategory(category){

const container =
document.getElementById("quoteContainer");

if(!container) return;

container.innerHTML = "";

quotes.forEach(item=>{

if(category === "all" || item.category === category){

container.innerHTML += `

<div class="quote-item">

<p>${item.quote}</p>

<small>- ${item.author}</small>

</div>

`;

}

});

}

/* ==========================
JOURNAL
========================== */

function saveJournal(){

const text =
document.getElementById("journalText").value;

localStorage.setItem(
"journalEntry",
text
);

addXP(5);
dailyChallenges.journalWritten = true;

updateChallenges();

document.getElementById(
"journalSaved"
).innerText =
"✅ Journal Saved!";

}

function loadJournal(){

const saved =
localStorage.getItem(
"journalEntry"
);

if(saved){

document.getElementById(
"journalText"
).value = saved;

}

}

function loadProgress(){

const created =
goals.length;

const completed =
goals.filter(goal => goal.completed).length;

const favoritesCount =
favorites.length;

document.getElementById("progressGoals").innerText =
created;

document.getElementById("progressCompleted").innerText =
completed;

document.getElementById("progressFavorites").innerText =
favoritesCount;

document.getElementById("progressStreak").innerText =
streak;

}

function loadAchievements(){

const list =
document.getElementById("achievementList");

if(!list) return;

list.innerHTML = "";

if(goals.filter(g => g.completed).length >= 1){

list.innerHTML += `
<div class="achievement-card">
🥉 First Goal Completed
</div>
`;

}

if(streak >= 7){

list.innerHTML += `
<div class="achievement-card">
🥈 7 Day Streak
</div>
`;

}

if(streak >= 30){

list.innerHTML += `
<div class="achievement-card">
🥇 30 Day Streak
</div>
`;

}

if(favorites.length >= 10){

list.innerHTML += `
<div class="achievement-card">
💎 Quote Collector
</div>
`;

}

if(goals.length >= 10){

list.innerHTML += `
<div class="achievement-card">
👑 Motivation Master
</div>
`;

}

}



function completeGoal(index){


goals[index].completed =
!goals[index].completed;

if(goals[index].completed){
    addXP(10);
}

localStorage.setItem(
"goals",
JSON.stringify(goals)
);

loadGoals();

addXP(10);

}

function updateChallenges(){

const quotes =
document.getElementById("challengeQuotes");

const favorite =
document.getElementById("challengeFavorite");

const goal =
document.getElementById("challengeGoal");

const journal =
document.getElementById("challengeJournal");

if(quotes){
quotes.innerHTML =
dailyChallenges.quotesRead >= 5
? "✅ Read 5 Quotes"
: "⬜ Read 5 Quotes";
}

if(favorite){
favorite.innerHTML =
dailyChallenges.favoriteSaved
? "✅ Save 1 Favorite Quote"
: "⬜ Save 1 Favorite Quote";
}

if(goal){
goal.innerHTML =
dailyChallenges.goalCompleted
? "✅ Complete 1 Goal"
: "⬜ Complete 1 Goal";
}

if(journal){
journal.innerHTML =
dailyChallenges.journalWritten
? "✅ Write 1 Journal Entry"
: "⬜ Write 1 Journal Entry";
}

localStorage.setItem(
"dailyChallenges",
JSON.stringify(dailyChallenges)
);

}

function backupData(){

const data = {

favorites,
goals,
visions,
xp,
level,
streak

};

const blob = new Blob(
[JSON.stringify(data)],
{type:"application/json"}
);

const a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "rise-and-shine-backup.json";

a.click();

}

window.addEventListener("load", function(){

document.getElementById("restoreFile")
.addEventListener("change", restoreData);

});

function restoreData(event){

const file = event.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

const data =
JSON.parse(e.target.result);

localStorage.setItem(
"favorites",
JSON.stringify(data.favorites || [])
);

localStorage.setItem(
"goals",
JSON.stringify(data.goals || [])
);

localStorage.setItem(
"visions",
JSON.stringify(data.visions || [])
);

localStorage.setItem(
"xp",
data.xp || 0
);

localStorage.setItem(
"level",
data.level || 1
);

localStorage.setItem(
"streak",
data.streak || 0
);

goals = data.goals || [];
favorites = data.favorites || [];
visions = data.visions || [];

xp = data.xp || 0;
level = data.level || 1;
streak = data.streak || 0;

alert("Backup restored successfully!");

location.reload();

};

reader.readAsText(file);

}

function toggleMenu(){

const menu =
document.getElementById("moreMenu");

if(menu.style.display === "block"){

menu.style.display = "none";

}else{

menu.style.display = "block";

}

}

function saveUserName(){

const name =
document.getElementById("userNameInput").value;

if(name.trim() === ""){
alert("Enter your name");
return;
}

localStorage.setItem(
"userName",
name
);

location.reload();

}

window.onload = function(){

const savedName =
localStorage.getItem("userName");
const mainContent = document.getElementById("mainContent");

if(localStorage.getItem("onboardingCompleted") === "true"){

    document.getElementById("onboarding1").style.display = "none";
    mainContent.style.display = "block";

}else{

    document.getElementById("onboarding1").style.display = "flex";
    mainContent.style.display = "none";

}

if(savedName){

document.getElementById(
"profileName"
).textContent = savedName;

document.getElementById(
"welcomeSetup"
).style.display = "none";

}

};

function nextScreen(){

document.getElementById("onboarding1").style.display = "none";

document.getElementById("onboarding2").style.display = "block";

}

function goToScreen3(){

if(selectedAge === ""){

alert("Please select your age range");

return;

}

localStorage.setItem(
"userAge",
selectedAge
);

document.getElementById("onboarding2").style.display = "none";

document.getElementById("onboarding3").style.display = "block";

}

function saveName(){

    let userName =
    document.getElementById("userName").value;

    if(userName.trim() === ""){
        alert("Please enter your name");
        return;
    }

    localStorage.setItem("userName", userName);

    document.getElementById("onboarding3").style.display = "none";
    document.getElementById("onboarding4").style.display = "block";

}

let selectedGender = "";

function selectGender(button, gender){

selectedGender = gender;

document
.querySelectorAll(".option-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}


let selectedAge = "";

function selectAge(button, age){

    selectedAge = age;

    document
    .querySelectorAll(".age-options button")
    .forEach(btn => {
        btn.classList.remove("selected-age");
    });

    button.classList.add("selected-age");
}



function goToScreen5(){

if(selectedGender === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userGender",
selectedGender
);

document.getElementById("onboarding4").style.display = "none";

document.getElementById("onboarding5").style.display = "block";
}

let selectedRelationship = "";

function selectRelationship(button, relationship){

selectedRelationship = relationship;

document
.querySelectorAll(".relationship-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen6(){

if(selectedRelationship === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"relationshipStatus",
selectedRelationship
);

document.getElementById("onboarding5").style.display = "none";

document.getElementById("onboarding6").style.display = "block";
}

let religiousChoice = "";

function selectReligionChoice(button, choice){

religiousChoice = choice;

document
.querySelectorAll("#onboarding6 .option-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen7(){

if(religiousChoice === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"religiousChoice",
religiousChoice
);

document.getElementById("onboarding6").style.display = "none";

document.getElementById("onboarding7").style.display = "block";

}

let selectedBelief = "";

function selectBelief(button, belief){

selectedBelief = belief;

document
.querySelectorAll(".belief-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen8(){

if(selectedBelief === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userBelief",
selectedBelief
);

document.getElementById("onboarding7").style.display = "none";

document.getElementById("onboarding8").style.display = "block";

}

let selectedMotivation = "";

function selectMotivation(button, motivation){

selectedMotivation = motivation;

document
.querySelectorAll(".motivation-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen9(){

if(selectedMotivation === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userMotivation",
selectedMotivation
);

document.getElementById("onboarding8").style.display = "none";

document.getElementById("onboarding9").style.display = "block";

}

let selectedUnmotivated = "";

function selectUnmotivated(button, choice){

selectedUnmotivated = choice;

document
.querySelectorAll(".unmotivated-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen10(){

if(selectedUnmotivated === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userUnmotivatedAction",
selectedUnmotivated
);

document.getElementById("onboarding9").style.display = "none";

document.getElementById("onboarding10").style.display = "block";

}


let selectedDays = [];

function toggleDay(button, day){

if(selectedDays.includes(day)){

selectedDays =
selectedDays.filter(d => d !== day);

button.classList.remove("selected-age");

}else{

selectedDays.push(day);

button.classList.add("selected-age");

}

}

function goToScreen11(){

if(selectedDays.length === 0){

alert("Select at least one day");

return;

}

localStorage.setItem(
"userRoutineDays",
JSON.stringify(selectedDays)
);

document.getElementById("onboarding10").style.display = "none";

document.getElementById("onboarding11").style.display = "block";

}

let selectedImprove = "";

function selectImprove(button, area){

selectedImprove = area;

document
.querySelectorAll(".improve-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen12(){

if(selectedImprove === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userImproveArea",
selectedImprove
);

document.getElementById("onboarding11").style.display = "none";

document.getElementById("onboarding12").style.display = "block";

}

let selectedFrequency = "";

function selectFrequency(button, frequency){

selectedFrequency = frequency;

document
.querySelectorAll(".frequency-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen13(){

if(selectedFrequency === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userFrequency",
selectedFrequency
);

document.getElementById("onboarding12").style.display = "none";

document.getElementById("onboarding13").style.display = "block";

}

let selectedMotivationType = "";

function selectMotivationType(button, type){

selectedMotivationType = type;

document
.querySelectorAll(".motivation-type-card")
.forEach(card => {

card.classList.remove("selected-age");

});

button.classList.add("selected-age");

}

function goToScreen14(){

if(selectedMotivationType === ""){

alert("Please select an option");

return;

}

localStorage.setItem(
"userMotivationType",
selectedMotivationType
);

document.getElementById("onboarding13").style.display = "none";

document.getElementById("onboarding14").style.display = "block";

}

function goToScreen15(){

const goal1 =
document.getElementById("goal1").value;

const goal2 =
document.getElementById("goal2").value;

const goal3 =
document.getElementById("goal3").value;

if(goal1 === "" || goal2 === "" || goal3 === ""){

alert("Please enter all 3 goals");

return;

}

localStorage.setItem("goal1", goal1);
localStorage.setItem("goal2", goal2);
localStorage.setItem("goal3", goal3);

const name =
localStorage.getItem("userName");

document.getElementById(
"summaryText"
).innerHTML =

"Welcome <b>" + name +
"</b>!<br><br>" +

"Your journey starts today.<br>" +

"Rise & Shine will help you stay motivated, build consistency, and achieve your goals one day at a time.";

document.getElementById("onboarding14").style.display = "none";

document.getElementById("onboarding15").style.display = "block";


} 

function finishOnboarding(){

localStorage.setItem("onboardingCompleted","true");

// Hide the last onboarding screen
document.getElementById("onboarding15").style.display = "none";

// Show the main app
document.getElementById("mainContent").style.display = "block";

}

function showInfo(title, value){

document.getElementById(
"popupTitle"
).textContent = title;

document.getElementById(
"popupValue"
).textContent = value || "Not Set";

document.getElementById(
"infoPopup"
).style.display = "flex";

}

function closePopup(){

document.getElementById(
"infoPopup"
).style.display = "none";

}

