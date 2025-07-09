// STAGES 배열은 이전과 동일하게 유지
const STAGES = [
  /* ... (STAGES 배열 내용은 그대로) ... */
];

const DARK_POKEMON_NAMES = ["블래키", "다크라이", "돈크로우", "마기라스"];

const $ = sel => document.querySelector(sel);
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

let userName = "", stage = 0, currentQuestionIndex = 0, lives = 5;

// DOM Elements
const startScreen = $("#start-screen");
const gameScreen = $("#game-screen");
const endScreen = $("#end-screen");
const nameInput = $("#name-input");
const startBtn = $("#start-btn");
const stageInfo = $("#stage-info");
const questionText = $("#question");
const optionsContainer = $("#options");
const umbreonContainer = $("#umbreon-container");
const shadowballEffect = $("#shadowball-effect");
const houseContainer = $("#house-container");
const shieldEffect = $("#shield-effect");
const houseExplosion = $("#house-explosion");
const livesCountDisplay = $("#lives-count");
const enemyAttackDisplay = $("#enemy-attack");
const finalMessage = $("#final-msg");
const scoreboardTable = $("#scoreboard-table");
const restartBtn = $("#restart-btn");

const HOUSE_IMAGES = [
    'house_damaged_3.png',
    'house_damaged_2.png',
    'house_damaged_1.png',
    'house_intact.png'
];

startBtn.onclick = () => {
    userName = nameInput.value.trim();
    if (userName.length === 0) {
        userName = "용감한 친구";
    }
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";

    stage = 0;
    currentQuestionIndex = 0;
    lives = 5;

    updateHouseVisual(lives);
    houseExplosion.classList.remove('show');
    enemyAttackDisplay.textContent = "";

    umbreonContainer.style.opacity = '1';
    umbreonContainer.style.transform = 'translateX(0)';

    nextQuestion();
};

function nextQuestion() {
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });

    shadowballEffect.classList.remove('shadowball-active');
    shieldEffect.classList.remove('shield-active');

    if (lives <= 0) {
        return gameOver();
    }

    if (currentQuestionIndex >= 20) {
        stage++;
        currentQuestionIndex = 0;
        if (stage >= 10) {
            return victory();
        }
    }

    const currentStageWords = STAGES
