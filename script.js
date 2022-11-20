// const data = [
//    {
//       name: "Vitor",
//       country: "Brazil",
//       nickname: "@iezzy",
//       phone: "21 998217465",
//       gender: "male",
//    },
//    {
//       name: "Fernanda",
//       country: "Brazil",
//       nickname: "@iezzy",
//       phone: "21 998217465",
//       gender: "female",
//    },
//    {
//       name: "Juliana",
//       country: "Brazil",
//       nickname: "@iezzy",
//       phone: "21 998217465",
//       gender: "female",
//    },
//    {
//       name: "Joaquim",
//       country: "Brazil",
//       nickname: "@iezzy",
//       phone: "21 998217465",
//       gender: "male",
//    },
// ];

const container = document.getElementsByClassName("containerCards")[0];

function addUsers(data) {
   data.map((user) => {
      container.innerHTML += `
      <div class="card ${user.gender}">
            <div>
               <img src=${user.picture.large} alt="Avatar" />
               <h1>${user.name.first + " " + user.name.last}</h1>
               <h2>${user.location.country}</h2>
            </div>
            <button>${user.login.username}</button>
            <button>${user.phone}</button>
         </div>`;
   });
}

const getUserAPI = async () => {
   const response = await fetch("https://randomuser.me/api/?results=20");

   if (response.status === 200) {
      const data = await response.json();

      return data.results;
   }
};

const addUsersAPI = async () => {
   const data = await getUserAPI();

   addUsers(data);
};

addUsersAPI();
