const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
    },
    {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
        "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
    },
    {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
    },
  ];


  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];
  
  console.log(CATEGORIES.find((cat) => cat.name === 'society').color);

// Selecting DOM Elemenets
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
async function loadFacts() {
    const res = await fetch('https://saigxkkdnknpibkhofnx.supabase.co/rest/v1/facts', {
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaWd4a2tkbmtucGlia2hvZm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwOTExNzMsImV4cCI6MTk5OTY2NzE3M30.B2HaCcf_WzZ1sXsYk4ss1IPnNbiYRiU38YQrrP_AjSU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhaWd4a2tkbmtucGlia2hvZm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwOTExNzMsImV4cCI6MTk5OTY2NzE3M30.B2HaCcf_WzZ1sXsYk4ss1IPnNbiYRiU38YQrrP_AjSU",
    }
});
const data = await res.json()
//const filteredData = data.filter((fact)=>fact.category === 'society');
createFactsList(data)
}


function createFactsList(dataArray) {

    const htmlArr = dataArray.map(
        (fact) => `<li class="fact">
        <p>
        ${fact.text}
        <a 
            class="source" href="${fact.source}"
            target="_blank">(Source)</a>
        </p>
        <span class="tag" style="background-color: 
        ${CATEGORIES.find((cat) => cat.name === fact.category).color};">${fact.category}</span>
        </li>`
    );
    console.log(htmlArr)
    const html = htmlArr.join("");
    factsList.insertAdjacentHTML("afterbegin", html);

}


// Toggle form visibility
btn.addEventListener("click", function() {
    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        btn.textContent = "Close"
    } else { 
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});






/*

function calcFactAge(year){
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;

    if (age >= 0)
        return age;
    else
        return "Impossible year"
}



const calcFactAge2 = (year) =>
    year <= new Date().getFullYear()
    ? new Date().getFullYear - year
    : "Impossible year. Year needs to be less or equal ${new Date().getFullYear()}";

let votesInteresting = 20;
let votesMindblowing = 15;

const text = "Lisbon is the capital of Portugal";

if (votesInteresting === votesMindblowing) {
    alert(" This fact is equally interesting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
    console.log('Interesting fact!');
} else if (votesInteresting < votesMindblowing ) {
    console.log('Mindblowing fact!!');
}


let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
    totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, check more sources..."

    alert(message);

    */