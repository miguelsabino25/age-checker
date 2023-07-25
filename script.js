const yearOfBirthInput = document.getElementById("yearOfBirth");
const genderMasculine = document.getElementById("genderMasculine");
const genderFemale = document.getElementById("genderFemale");
const checkAge = document.getElementById("checkAge");
const ageGender = document.getElementById("ageGender");

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const calculateAge = () => {
  return currentYear - yearOfBirthInput.value;
};

const manOrWoman = () => {
  if (genderMasculine.checked) {
    return "Homem";
  } else {
    return "Mulher";
  }
};

const pictureAge = () => {
  if (calculateAge() > 0 && calculateAge() < 12 && manOrWoman() === "Homem") {
    return "https://media.gettyimages.com/id/1056360056/pt/foto/toddler-boy-enjoys-playing-with-toys-in-waiting-room.jpg?s=612x612&w=0&k=20&c=wUxmxtQhKj0agqQk6Ji6BSWCUBPRMUrYamtKFw9fv10=";
  } else if (
    calculateAge() > 0 &&
    calculateAge() < 12 &&
    manOrWoman() === "Mulher"
  ) {
    return "https://media.gettyimages.com/id/1217348754/pt/foto/look-whos-walking.jpg?s=612x612&w=0&k=20&c=r7I-FYg2wGzJQlaVbyHLTbqLFJDbiGDfhPsJsMPC5RU=";
  } else if (
    calculateAge() > 12 &&
    calculateAge() < 18 &&
    manOrWoman() === "Homem"
  ) {
    return "https://st.depositphotos.com/1011643/2674/i/600/depositphotos_26746623-stock-photo-highschool-boy-with-friends-on.jpg";
  } else if (
    calculateAge() > 12 &&
    calculateAge() < 18 &&
    manOrWoman() === "Mulher"
  ) {
    return "https://img.quizur.com/f/img5ec5d9ef13c903.95768196.jpg?lastEdited=1590024691";
  } else if (
    calculateAge() > 18 &&
    calculateAge() < 60 &&
    manOrWoman() === "Homem"
  ) {
    return "https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/359391251_6051310824998408_3102640372636858457_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG3YZjmDk_uW1WR1DwUZ6rRxqXsblZ0OsTGpexuVnQ6xMcED8O9BT58Zo7gh7p1_GEpzLXpA9omnjTOhuIHHIop&_nc_ohc=7XE8ctFptSsAX9BTaZz&_nc_ht=scontent-gig4-1.xx&oh=00_AfBkh-hkulVNhV7npwPiYWW5ubbUeVaksD3826foD1UQig&oe=64C5978D";
  } else if (
    calculateAge() > 18 &&
    calculateAge() < 60 &&
    manOrWoman() === "Mulher"
  ) {
    return "https://scontent-gig4-1.xx.fbcdn.net/v/t39.30808-6/349773404_968862180804255_3196252533270903588_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEqobBDHP_B6dCl_R8howE3y_7aWFjWydXL_tpYWNbJ1aWzK0qm-0MqWbJs90WVx-B57Et7yHkYVY0AP4GNyUgK&_nc_ohc=sK5nqRxjMdEAX_ABEnt&_nc_ht=scontent-gig4-1.xx&oh=00_AfCvEUORThlA3aniREpmOploASHARhBAEY3TrymvpVqGCQ&oe=64C5854B";
  } else if (calculateAge() > 60 && manOrWoman() === "Homem") {
    return "https://corasenior.com.br/wp-content/uploads/2020/09/idoso-sociedade-cora-residencial-para-idosos.jpg";
  } else if (calculateAge() > 60 && manOrWoman() === "Mulher") {
    return "https://regenerati.com.br/wp-content/uploads/2022/02/papel-do-idoso-na-sociedade.jpg";
  }
};

const paragraph = document.createElement("p");
const image = document.createElement("img");

checkAge.addEventListener("click", (event) => {
  event.preventDefault();
  const age = calculateAge();
  const gender = manOrWoman();
  paragraph.innerText = `Detectamos ${gender} com ${age} anos`;
  ageGender.appendChild(paragraph);
  image.src = pictureAge();
  ageGender.appendChild(image);
});
