export {};
// const pets: Pet[] = [
//   {
//     id: 1,
//     type: "Giant Panda",
//     name: "Lucas",
//     description: "Native to central China, giant pandas have come to symbolize vulnerable species.",
//     image: "../../assets/card-img/card-1.jpg",
//   },
//   {
//     id: 2,
//     type: "Madagascarian Lemur",
//     name: "Andy",
//     description: "Lemurs are considered the world’s most endangered group of mammals.",
//     image: "../../assets/card-img/card-2.jpg",
//   },
//   {
//     id: 3,
//     type: "Gorilla in Congo",
//     name: "Glen",
//     description: "Variety of snacks very important for the healthy life of gorillas and his plenty of babies.",
//     image: "../../assets/card-img/card-3.jpg",
//   },
//   {
//     id: 4,
//     type: "Chinese Alligator",
//     name: "Mike",
//     description: "From nose to tail, belly to back, hard scales protect this petite alligator.",
//     image: "../../assets/card-img/card-4.jpg",
//   },
//   {
//     id: 5,
//     type: "West End Bald Eagles",
//     name: "Sam &amp; Lora",
//     description: "Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.",
//     image: "../../assets/card-img/card-5.jpg",
//   },
//   {
//     id: 6,
//     type: "Australian Koala",
//     name: "Liz",
//     description: "The elevated walkways bring you to eye level with the koalas as they perch in their forest.",
//     image: "../../assets/card-img/card-6.jpg",
//   },
//   {
//     id: 7,
//     type: "African Lion",
//     name: "Shake",
//     description: "Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.",
//     image: "../../assets/card-img/card-7.jpg",
//   },
//   {
//     id: 8,
//     type: "Sumatran Tiger",
//     name: "Senja",
//     description: "Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.",
//     image: "../../assets/card-img/card-8.jpg",
//   },
// ];
// const feedbacks: Feedback[] = [
//     {
//         id: 1,
//         name: "Karen Maithlan",
//         date: "June 2020",
//         city: "New Jersey",
//         comment: "I am writing to thank you for your mission is to bring people closer to nature! Like myself, children were very impressed by the opportunity to explore the life of incredible animals in real-time.",
//     },
//     {
//         id: 2,
//         name: "Carol Larsen",
//         date: "November 2020",
//         city: "Toronto",
//         comment: "We so enjoy the ever-evolving selection of animals from around the globe. THANK YOU for sharing these fascinating animal friends with us so that we may learn and increase our understanding of the animal kingdom.",
//     },
//     {
//         id: 3,
//         name: "Carol Larsen",
//         date: "June 2020",
//         city: "Amsterdam",
//         comment: "I want to thank you for the amazing sites you find to put your cameras to let each of us see things that we would probably never see on our own. There are so many positives on Zoo Online and I'm grateful for it. Thank you so much!",
//     },
//     {
//         id: 4,
//         name: "C. Stockman",
//         date: "February 2020",
//         city: "London",
//         comment: "A fantastic experience for kids and adults alike! If anyone is looking for an attraction that educates people on wild animals – it's for you! I highly recommend seeing for yourself the variety of animals on your screen.",
//     },
//   ];
// function delay(ms: number): Promise<void> {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
//   export async function getPets(): Promise<Pet[]> {
//     await delay(800); // имитация запроса
//     return pets;
//   }
//   export async function getFeedback(): Promise<Feedback[]> {
//     await delay(800);
//     return feedbacks;
//   }
//   export async function getAnimalById(id: number): Promise<Pet | undefined> {
//     await delay(500);
//     return pets.find((pet) => pet.id === id);
//   }
//# sourceMappingURL=mockApi.js.map