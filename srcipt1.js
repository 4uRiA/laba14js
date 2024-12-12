const environment = {
    season: prompt("Введите текущее время года (зима, весна, лето, осень):"),
    timeOfDay: prompt("Введите текущее время суток (утро, обед, вечер, ночь):")
};

const FamilyMemberTemplate = {
    fullName: "",
    age: 0,
    favoriteSeason: ""
};

function createFamilyMember() {
    const member = Object.create(FamilyMemberTemplate);
    member.fullName = prompt("Введите имя члена семьи:");
    member.age = parseInt(prompt("Введите возраст члена семьи:"), 10);
    member.favoriteSeason = prompt("Введите любимое время года (зима, весна, лето, осень):");
    return member;
}

const familyGroup = {
    father: createFamilyMember(),
    mother: createFamilyMember(),
    child: createFamilyMember(),
    pet: {}
};

familyGroup.pet.name = prompt("Введите имя питомца:");
familyGroup.pet.age = parseInt(prompt("Введите возраст питомца:"), 10);
familyGroup.pet.type = prompt("Введите тип питомца (собака, кошка):");

function checkPetActivity() {
    const pet = familyGroup.pet;
    if (pet.type === "собака") {
        if (environment.timeOfDay === "утро") {
            if (familyGroup.child.age < 18) {
                document.write(`${familyGroup.father.fullName} выгуливает ${pet.name}`);
            } else {
                document.write(`${familyGroup.child.fullName} выгуливает ${pet.name}`);
            }
        }
    } else if (pet.type === "кошка") {
        if (environment.timeOfDay === "ночь") {
            document.write(`${pet.name} ловит мышей`);
        }
    } else {
        document.write(`Питомец: ${pet.name}, Возраст: ${pet.age}, Тип: ${pet.type}`);
    }
}

function checkFavoriteSeason() {
    for (const member in familyGroup) {
        if (member !== "pet") { 
            const familyMember = familyGroup[member];
            if (familyMember.favoriteSeason === environment.season && 
                (environment.timeOfDay === "обед" || environment.timeOfDay === "вечер")) {
                
                switch (environment.season) {
                    case "зима":
                        document.write(`${familyMember.fullName} лепит снеговика`);
                        break;
                    case "лето":
                        document.write(`${familyMember.fullName} загорает`);
                        break;
                    case "осень":
                        document.write(`${familyMember.fullName} смотрит фильм`);
                        break;
                    case "весна":
                        document.write(`${familyMember.fullName} гуляет с другом`);
                        break;
                }
            }
        }
    }
}

checkFavoriteSeason();
checkPetActivity();
