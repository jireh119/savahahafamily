// STAGES 배열은 이전과 동일하게 유지
const STAGES = [
  /* ---------- Stage 1 ---------- */
  [
    {en:"cat",ko:"고양이"},{en:"dog",ko:"개"},{en:"bird",ko:"새"},{en:"fish",ko:"물고기"},{en:"ant",ko:"개미"},
    {en:"bee",ko:"벌"},{en:"pig",ko:"돼지"},{en:"cow",ko:"소"},{en:"duck",ko:"오리"},{en:"hen",ko:"암탉"},
    {en:"egg",ko:"달걀"},{en:"milk",ko:"우유"},{en:"book",ko:"책"},{en:"pen",ko:"펜"},{en:"bag",ko:"가방"},
    {en:"bed",ko:"침대"},{en:"sun",ko:"해"},{en:"moon",ko:"달"},{en:"star",ko:"별"},{en:"ball",ko:"공"}
  ],
  /* ---------- Stage 2 ---------- */
  [
    {en:"mom",ko:"엄마"},{en:"dad",ko:"아빠"},{en:"brother",ko:"형"},{en:"sister",ko:"누나"},{en:"baby",ko:"아기"},
    {en:"grandpa",ko:"할아버지"},{en:"grandma",ko:"할머니"},{en:"hand",ko:"손"},{en:"foot",ko:"발"},{en:"leg",ko:"다리"},
    {en:"arm",ko:"팔"},{en:"head",ko:"머리"},{en:"eye",ko:"눈"},{en:"nose",ko:"코"},{en:"mouth",ko:"입"},
    {en:"ear",ko:"귀"},{en:"hair",ko:"머리카락"},{en:"face",ko:"얼굴"},{en:"tooth",ko:"이"},{en:"finger",ko:"손가락"}
  ],
  /* ---------- Stage 3 ---------- */
  [
    {en:"red",ko:"빨강"},{en:"blue",ko:"파랑"},{en:"green",ko:"초록"},{en:"yellow",ko:"노랑"},{en:"orange",ko:"주황"},
    {en:"purple",ko:"보라"},{en:"pink",ko:"분홍"},{en:"black",ko:"검정"},{en:"white",ko:"흰색"},{en:"brown",ko:"갈색"},
    {en:"one",ko:"하나"},{en:"two",ko:"둘"},{en:"three",ko:"셋"},{en:"four",ko:"넷"},{en:"five",ko:"다섯"},
    {en:"six",ko:"여섯"},{en:"seven",ko:"일곱"},{en:"eight",ko:"여덟"},{en:"nine",ko:"아홉"},{en:"ten",ko:"열"}
  ],
  /* ---------- Stage 4 ---------- */
  [
    {en:"rice",ko:"밥"},{en:"bread",ko:"빵"},{en:"soup",ko:"수프"},{en:"meat",ko:"고기"},{en:"chicken",ko:"닭고기"},
    {en:"apple",ko:"사과"},{en:"banana",ko:"바나나"},{en:"grape",ko:"포도"},{en:"orange",ko:"오렌지"},{en:"lemon",ko:"레몬"},
    {en:"carrot",ko:"당근"},{en:"potato",ko:"감자"},{en:"tomato",ko:"토마토"},{en:"corn",ko:"옥수수"},{en:"water",ko:"물"},
    {en:"juice",ko:"주스"},{en:"tea",ko:"차"},{en:"soda",ko:"탄산음료"},{en:"sugar",ko:"설탕"},{en:"salt",ko:"소금"}
  ],
  /* ---------- Stage 5 ---------- */
  [
    {en:"school",ko:"학교"},{en:"class",ko:"수업"},{en:"teacher",ko:"선생님"},{en:"student",ko:"학생"},{en:"desk",ko:"책상"},
    {en:"chair",ko:"의자"},{en:"pencil",ko:"연필"},{en:"ruler",ko:"자"},{en:"eraser",ko:"지우개"},{en:"paper",ko:"종이"},
    {en:"notebook",ko:"공책"},{en:"backpack",ko:"배낭"},{en:"clock",ko:"시계"},{en:"door",ko:"문"},{en:"window",ko:"창문"},
    {en:"computer",ko:"컴퓨터"},{en:"marker",ko:"마커"},{en:"board",ko:"칠판"},{en:"bell",ko:"종"},{en:"map",ko:"지도"}
  ],
  /* ---------- Stage 6 ---------- */
  [
    {en:"go",ko:"가다"},{en:"come",ko:"오다"},{en:"see",ko:"보다"},{en:"look",ko:"쳐다보다"},{en:"eat",ko:"먹다"},
    {en:"drink",ko:"마시다"},{en:"run",ko:"달리다"},{en:"walk",ko:"걷다"},{en:"jump",ko:"뛰다"},{en:"sit",ko:"앉다"},
    {en:"stand",ko:"서다"},{en:"read",ko:"읽다"},{en:"write",co:"쓰다"},{en:"play",ko:"놀다"},{en:"sing",ko:"노래하다"},
    {en:"dance",ko:"춤추다"},{en:"sleep",ko:"자다"},{en:"smile",ko:"웃다"},{en:"cry",ko:"울다"},{en:"help",ko:"돕다"}
  ],
  /* ---------- Stage 7 ---------- */
  [
    {en:"big",ko:"큰"},{en:"small",ko:"작은"},{en:"tall",ko:"키큰"},{en:"short",ko:"키작은"},{en:"long",ko:"긴"},
    {en:"fast",ko:"빠른"},{en:"slow",ko:"느린"},{en:"hot",ko:"뜨거운"},{en:"cold",ko:"차가운"},{en:"warm",ko:"따뜻한"},
    {en:"happy",ko:"행복한"},{en:"sad",ko:"슬픈"},{en:"good",ko:"좋은"},{en:"bad",ko:"나쁜"},{en:"easy",ko:"쉬운"},
    {en:"hard",ko:"어려운"},{en:"clean",ko:"깨끗한"},{en:"dirty",:"더러운"},{en:"new",ko:"새로운"},{en:"old",ko:"낡은"}
  ],
  /* ---------- Stage 8 ---------- */
  [
    {en:"home",ko:"집"},{en:"park",ko:"공원"},{en:"zoo",ko:"동물원"},{en:"farm",ko:"농장"},{en:"bank",ko:"은행"},
    {en:"hospital",ko:"병원"},{en:"store",ko:"가게"},{en:"market",ko:"시장"},{en:"church",ko:"교회"},{en:"post office",ko:"우체국"},
    {en:"airport",ko:"공항"},{en:"bus",ko:"버스"},{en:"station",ko:"역"},{en:"street",ko:"거리"},{en:"road",ko:"도로"},
    {en:"bridge",ko:"다리"},{en:"river",ko:"강"},{en:"mountain",:"산"},{en:"beach",ko:"해변"},{en:"playground",ko:"놀이터"}
  ],
  /* ---------- Stage 9 ---------- */
  [
    {en:"day",ko:"낮"},{en:"night",ko:"밤"},{en:"morning",ko:"아침"},{en:"afternoon",ko:"오후"},{en:"evening",ko:"저녁"},
    {en:"today",ko:"오늘"},{en:"tomorrow",ko:"내일"},{en:"yesterday",ko:"어제"},{en:"week",ko:"주"},{en:"month",ko:"달"},
    {en:"year",ko:"년"},{en:"spring",ko:"봄"},{en:"summer",ko:"여름"},{en:"autumn",ko:"가을"},{en:"winter",ko:"겨울"},
    {en:"sunny",ko:"맑은"},{en:"rainy",ko:"비오는"},{en:"cloudy",ko:"흐린"},{en:"snowy",ko:"눈오는"},{en:"windy",ko:"바람부는"}
  ],
  /* ---------- Stage 10 ---------- */
  [
    {en:"phone",ko:"전화기"},{en:"toy",ko:"장난감"},{en:"picture",ko:"그림"},{en:"key",ko:"열쇠"},
    {en:"box",ko:"상자"},{en:"gift",ko:"선물"},{en:"money",ko:"돈"},{en:"card",ko:"카드"},
    {en:"ticket",ko:"티켓"},{en:"music",ko:"음악"},{en:"movie",ko:"영화"},{en:"game",ko:"게임"},
    {en:"idea",ko:"아이디어"},{en:"love",ko:"사랑"},{en:"ride",ko:"타다"},{en:"open",ko:"열다"},
    {en:"close",ko:"닫다"},{en:"wait",ko:"기다리다"},{en:"think",ko:"생각하다"},{en:"learn",ko:"배우다"}
  ]
];

// 악 타입 포켓몬은 블래키만 남김
const DARK_POKEMON_NAMES = ["블래키"]; 

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
const umbreonContainer = $("#umbreon-container"); // 블래키 컨테이너
const shadowballEffect = $("#shadowball-effect"); // 섀도우볼 효과
const houseContainer = $("#house-container");     // 집 이미지 컨테이너
const shieldEffect = $("#shield-effect");         // 방어막 효과
const houseExplosion = $("#house-explosion");     // 집 폭발 이펙트
const livesCountDisplay = $("#lives-count");      // 남은 기회 텍스트 표시
const enemyAttackDisplay = $("#enemy-attack");
const finalMessage = $("#final-msg");
const scoreboardTable = $("#scoreboard-table");
const restartBtn = $("#restart-btn");

// 집 이미지 단계 (lives에 따라 변경)
const HOUSE_IMAGES = [
    'house_damaged_3.png', // 0 lives (가장 파괴됨)
    'house_damaged_2.png', // 1-2 lives
    'house_damaged_1.png', // 3-4 lives
    'house_intact.png'     // 5 lives (온전한 집)
];

// 게임 시작 핸들러
startBtn.onclick = () => {
    userName = nameInput.value.trim();
    if (userName.length === 0) {
        userName = "용감한 친구";
    }
    startScreen.style.display = "none";
    gameScreen.style.display = "flex";
    
    // 게임 변수 초기화
    stage = 0;
    currentQuestionIndex = 0;
    lives = 5;
    
    // 초기화 및 상태 설정
    updateHouseVisual(lives); // 초기 집 상태 (온전한 집)
    houseExplosion.classList.remove('show'); // 폭발 효과 숨김
    enemyAttackDisplay.textContent = "";     // 공격 메시지 초기화

    umbreonContainer.style.opacity = '1';
    umbreonContainer.style.transform = 'translateX(0)';

    nextQuestion();
};

function nextQuestion() {
    // 모든 버튼 활성화 및 이전 피드백 색상 제거
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("correct", "wrong");
    });
    
    // 섀도우볼, 방어막 애니메이션 클래스 제거 (재사용을 위해)
    shadowballEffect.classList.remove('shadowball-active');
    shieldEffect.classList.remove('shield-active');
    
    // 목숨이 0 이하면 게임 오버
    if (lives <= 0) {
        return gameOver();
    }

    // 현재 스테이지 20문제를 모두 맞췄으면 다음 스테이지로
    if (currentQuestionIndex >= 20) {
        stage++;
        currentQuestionIndex = 0; // 다음 스테이지는 0번 인덱스부터 다시 시작
        if (stage >= 10) {
            return victory();
        }
    }

    const currentStageWords = STAGES[stage];
    const item = currentStageWords[currentQuestionIndex];

    stageInfo.textContent = `Stage ${stage + 1} (문제 ${currentQuestionIndex + 1}/20)`;
    questionText.textContent = `"${item.en}" 뜻은?`;
    livesCountDisplay.textContent = lives; // 남은 기회 텍스트 업데이트
    enemyAttackDisplay.textContent = ""; // 이전 공격 메시지 지우기

    renderOptions(item);
}

function renderOptions(correctItem) {
    const incorrectOptionsPool = STAGES[stage].filter(o => o !== correctItem);
    const shuffledIncorrect = shuffle(incorrectOptionsPool).slice(0, 3);
    
    const options = shuffle([correctItem, ...shuffledIncorrect]);

    optionsContainer.innerHTML = "";
    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option.ko;
        btn.onclick = () => checkAnswer(option === correctItem, btn);
        optionsContainer.append(btn);
    });
}

function checkAnswer(isCorrect, clickedButton) {
    // 모든 버튼 비활성화 (중복 클릭 방지)
    Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);

    // 섀도우볼 애니메이션 시작 준비
    shadowballEffect.classList.remove('shadowball-active');
    // 다음 줄은 애니메이션 재시작을 위한 트릭입니다. (DOM reflow 강제)
    void shadowballEffect.offsetWidth; 
    shadowballEffect.classList.add('shadowball-active');

    if (isCorrect) {
        clickedButton.classList.add("correct");
        enemyAttackDisplay.style.color = "#28a745";
        enemyAttackDisplay.textContent = "👍 정답입니다! 가족을 지켰어요!";
        
        // 방어막 애니메이션 시작 (섀도우볼 도착 시점에 맞춰)
        setTimeout(() => {
            shieldEffect.classList.remove('shield-active'); // 애니메이션 재시작을 위해
            void shieldEffect.offsetWidth; // Reflow 강제
            shieldEffect.classList.add('shield-active');
        }, 500); // 섀도우볼이 집에 도달하기 직전
        
        // 모든 애니메이션 완료 후 다음 문제로
        setTimeout(() => {
            currentQuestionIndex++;
            nextQuestion();
        }, 1200); // 섀도우볼/방어막 애니메이션 완료 시간(1초)보다 길게 대기
    } else {
        clickedButton.classList.add("wrong");
        lives--;
        livesCountDisplay.textContent = lives; // 남은 기회 텍스트 업데이트
        
        const randomPokemonIndex = Math.floor(Math.random() * DARK_POKEMON_NAMES.length);
        const attackingPokemonName = DARK_POKEMON_NAMES[randomPokemonIndex];
        
        enemyAttackDisplay.style.color = "#e74c3c";
        enemyAttackDisplay.textContent = `🚨 ${attackingPokemonName}의 공격! 집이 흔들립니다!`;

        // 섀도우볼이 집에 부딪히는 효과 및 집 이미지 업데이트
        // 이 부분은 섀도우볼 애니메이션 시작과 동시에 진행되어야 함.
        // 폭발 애니메이션은 섀도우볼이 집에 닿는 1초 뒤에 발생
        setTimeout(() => {
            updateHouseVisual(lives); // 집 이미지 교체
            if (lives <= 0) {
                houseExplosion.classList.add('show'); // 폭발 효과 표시
                enemyAttackDisplay.textContent = `💥 ${userName} 님의 집이 파괴되었습니다!`;
                // 폭발 애니메이션 후 게임 오버 처리
                setTimeout(() => {
                    gameOver();
                }, 1500); // 폭발 애니메이션 재생 시간
            } else {
                currentQuestionIndex++;
                nextQuestion();
            }
        }, 1000); // 섀도우볼 애니메이션 완료 시점에 맞춰
    }
}

// 집 이미지 업데이트 함수
function updateHouseVisual(currentLives) {
    let houseImageIndex;
    if (currentLives <= 0) {
        houseImageIndex = 0; // HOUSE_IMAGES[0] = house_damaged_3.png
    } else if (currentLives <= 2) {
        houseImageIndex = 1; // HOUSE_IMAGES[1] = house_damaged_2.png
    } else if (currentLives <= 4) {
        houseImageIndex = 2; // HOUSE_IMAGES[2] = house_damaged_1.png
    } else {
        houseImageIndex = 3; // HOUSE_IMAGES[3] = house_intact.png
    }
    houseContainer.style.backgroundImage = `url('${HOUSE_IMAGES[houseImageIndex]}')`;
}


function gameOver() {
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";
    finalMessage.textContent = `${userName} 님, 아쉽게도 패배했습니다! 😢 도달 단계: ${stage + 1}, 맞힌 단어 수: ${currentQuestionIndex}개`;
    saveScore(userName, stage, currentQuestionIndex);
    showScoreboard();
}

function victory() {
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";
    finalMessage.textContent = `축하합니다 ${userName} 님! 10단계 클리어 🎉 하하 패밀리를 지켜냈어요!`;
    saveScore(userName, 9, 20); // 마지막 단계(9)의 20문제 모두 맞춤
    showScoreboard();
}

function saveScore(name, reachedStage, correctWordsInStage) {
    const scores = JSON.parse(localStorage.getItem("hahaScores") || "[]");
    scores.push({
        name: name,
        stage: reachedStage + 1,
        correct: correctWordsInStage,
        timestamp: Date.now()
    });
    localStorage.setItem("hahaScores", JSON.stringify(scores.slice(-15)));
}

function showScoreboard() {
    const scores = JSON.parse(localStorage.getItem("hahaScores") || "[]");
    scoreboardTable.innerHTML = "<tr><th>이름</th><th>도달 단계</th><th>맞힌 단어수</th></tr>";
    
    scores.sort((a, b) => b.timestamp - a.timestamp).forEach(record => {
        const row = scoreboardTable.insertRow(-1);
        row.insertCell(0).textContent = record.name;
        row.insertCell(1).textContent = record.stage;
        row.insertCell(2).textContent = record.correct;
    });
}

restartBtn.onclick = () => {
    location.reload();
};
