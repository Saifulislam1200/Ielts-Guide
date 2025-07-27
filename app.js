// App.js

// Show section and store last visited
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  document.querySelector(`#${sectionId}`).classList.remove('hidden');

  document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
  const target = Array.from(document.querySelectorAll('.sidebar ul li')).find(li => li.getAttribute('onclick')?.includes(sectionId));
  if (target) target.classList.add('active');

  localStorage.setItem('lastSection', sectionId);
}

// Load last visited section on page load
window.onload = () => {
  const lastSection = localStorage.getItem('lastSection') || 'intro';
  showSection(lastSection);

  // Load progress if exists
  document.querySelectorAll('.card').forEach(card => {
    const id = card.dataset.id;
    const select = card.querySelector('select');
    const saved = localStorage.getItem(`progress-${id}`);
    if (saved && select) select.value = saved;
  });
}

// Update study card progress
function updateProgress(id, value) {
  localStorage.setItem(`progress-${id}`, value);
}

// Typing speed test
let startTime;
function calculateSpeed() {
  const input = document.getElementById('typingArea').value;
  if (!startTime) startTime = new Date().getTime();

  const elapsedMinutes = (new Date().getTime() - startTime) / 60000;
  const words = input.trim().split(/\s+/).length;
  const wpm = Math.round(words / elapsedMinutes);

  document.getElementById('wpm').innerText = isNaN(wpm) ? 0 : wpm;
}

// Vocabulary generator
const words = [
  { word: 'Coherent', meaning: 'Logical and consistent' },
  { word: 'Articulate', meaning: 'Express fluently and clearly' },
  { word: 'Substantiate', meaning: 'Provide evidence to support' },
  { word: 'Ambiguous', meaning: 'Open to multiple interpretations' },
  { word: 'Concise', meaning: 'Giving a lot of info clearly in few words' },
];

function getNewWord() {
  const random = words[Math.floor(Math.random() * words.length)];
  document.getElementById('word').innerText = random.word;
  document.getElementById('meaning').innerText = random.meaning;
}
function openModal(title, text) {
  const modal = document.getElementById('customModal');
  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('customModal');
  modal.classList.add('hidden');
}
function openModuleModal(title, content) {
  document.getElementById('modalModuleTitle').innerHTML = title;
  document.getElementById('modalModuleText').innerHTML = content;
  document.getElementById('moduleModal').classList.remove('hidden');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
}
const questions = {
  part1: [
    "What is your full name?", "Do you work or are you a student?", "What do you do in your free time?",
    "Do you enjoy reading?", "Where do you live?", "Do you like your neighborhood?",
    "Do you often use public transportation?", "What kind of weather do you like?",
    "Do you prefer the morning or evening?", "Do you have many friends?",
    "How often do you use the internet?", "What kind of music do you like?",
    "Do you enjoy cooking?", "What is your favorite food?", "Do you like watching movies?",
    "What is your favorite holiday?", "Do you enjoy traveling?", "Have you ever been abroad?",
    "Do you enjoy outdoor activities?", "Do you prefer tea or coffee?",
    "Do you exercise regularly?", "How do you usually spend your weekends?",
    "Do you enjoy shopping?", "What kind of clothes do you usually wear?",
    "What languages do you speak?", "Do you enjoy learning new things?",
    "Do you prefer books or movies?", "How do you usually get to work/school?",
    "What time do you usually wake up?", "Do you keep a diary or journal?",
    "Do you enjoy celebrating birthdays?", "Do you enjoy working in a team?",
    "Do you use social media?", "Do you prefer cats or dogs?",
    "Do you enjoy gardening?", "Do you prefer a quiet place or a busy place?",
    "What is your favorite season?", "Do you often go to the cinema?",
    "Do you prefer writing by hand or typing?", "Do you like to plan things or be spontaneous?"
  ],
  part2: [
    "Describe a person you admire.", "Describe your favorite teacher.",
    "Describe a place you like to visit.", "Talk about a memorable trip.",
    "Describe a useful piece of technology.", "Talk about a recent celebration.",
    "Describe a difficult decision you made.", "Talk about your favorite movie.",
    "Describe a book you recently read.", "Talk about a successful person you know.",
    "Describe a habit you would like to develop.", "Talk about a time you were late.",
    "Describe a family event.", "Talk about a new skill you learned.",
    "Describe a historical event.", "Talk about a goal you achieved.",
    "Describe a friend you trust.", "Talk about a gift you received.",
    "Describe an outdoor activity.", "Talk about a restaurant you like.",
    "Describe your ideal job.", "Talk about your childhood memory.",
    "Describe a time you were proud.", "Talk about your favorite sport.",
    "Describe a situation when you helped someone.", "Talk about something you want to learn.",
    "Describe a special day in your life.", "Talk about your future plans.",
    "Describe your dream house.", "Talk about your daily routine."
  ],
  part3: [
    "Why is it important to have hobbies?", "How has technology changed communication?",
    "Why do people like to travel?", "How important is family in today’s society?",
    "What are the benefits of reading?", "Why do people enjoy watching sports?",
    "What makes a good teacher?", "How do advertisements affect buying decisions?",
    "Is it better to study alone or in a group?", "How important is environmental awareness?",
    "What can be done to improve public transport?", "Why do people immigrate to other countries?",
    "What are the pros and cons of online learning?", "How can governments reduce traffic congestion?",
    "Why do people enjoy art and music?", "How does media influence public opinion?",
    "What role does education play in personal development?", "How does fashion impact society?",
    "Why do people start their own business?", "How important is tourism for a country?",
    "Should children be given homework?", "How can people maintain work-life balance?",
    "What are the challenges of living in big cities?", "Why do people attend university?",
    "What is the role of sports in education?", "How can people manage stress?",
    "What are the advantages of learning a second language?", "Why do people volunteer?",
    "How does culture shape identity?", "What makes a good public speaker?"
  ]
};

function generateQuestion(part) {
  const qList = questions[part];
  const randomQ = qList[Math.floor(Math.random() * qList.length)];
  document.getElementById(`${part}-question`).innerHTML = randomQ;
}
let learnedCount = 0;

function getNewWord() {
  const random = vocabList[Math.floor(Math.random() * vocabList.length)];
  document.getElementById("word").textContent = random.word;
  document.getElementById("meaning").textContent = random.meaning;
  document.getElementById("meaning_bn").textContent = random.meaning_bn || "–";
  document.getElementById("example").textContent = random.example;
  document.getElementById("type").textContent = random.type;
  learnedCount++;
  document.getElementById("wordCount").textContent = learnedCount;
}


function speakWord() {
  const word = document.getElementById("word").textContent;
  if ('speechSynthesis' in window && word !== "Click 'New Word'") {
    const utter = new SpeechSynthesisUtterance(word);
    utter.lang = 'en-US';
    speechSynthesis.speak(utter);
  }
}
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
function closeSidebarOnMobile() {
  if (window.innerWidth <= 768) {
    document.querySelector('.sidebar').classList.remove('active');
  }
}
