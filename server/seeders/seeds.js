const db = require('../config/connection');
const { Hero, User } = require('../models');

db.once('open', async () => {
  // create Test User
  const seedUsers = [
    {
      username: 'test',
      email: 'test@test.com',
      password: 'test123',
    },
  ];

  // create Featured Heroes
  const seedHeroes = [
    {
      index: 1,
      name: 'Iron Man',
      bio: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.',
      trivia: "Did you know Iron Man's suit can lift up to 100 tons?",
      image: 'https://marvelous-project-3.s3.us-east-2.amazonaws.com/iron-man.jpg',
    },
    {
      index: 2,
      name: 'Thor',
      bio: 'Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.',
      trivia: 'Did you know Thor could time travel?',
      image: 'https://marvelous-project-3.s3.us-east-2.amazonaws.com/thor.jpeg',
    },
    {
      index: 3,
      name: 'Black Widow',
      bio: 'Despite her origins as an agent of evil, Natasha Romanoff has become a force for good in the world of covert intelligence and super heroics. Like her namesake arachnid, Romanoff is stealthy, precise, and absolutely lethal. She is the Black Widow.',
      trivia: 'Did you know she does ballet?',
      image: 'https://marvelous-project-3.s3.us-east-2.amazonaws.com/black-widow.jpg',
    },
    {
      index: 4,
      name: 'Dr. Strange',
      bio: 'Once a highly successful, yet notably egotistical, surgeon, Doctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen.',
      trivia: 'Did you know he needs poisonous food to survive?',
      image: 'https://marvelous-project-3.s3.us-east-2.amazonaws.com/doctor-strange.jpg',
    },
    {
      index: 5,
      name: 'Shang Chi',
      bio: 'A renowned criminal sired a child who he raised as his heir to an insidious secret society and named him Shang-Chi, the “rising and advancing of the spirit.” In a hidden, ancient fortress in China, the boy became adept at both a multitude of martial arts and philosophical disciplines, completely unaware of his father’s evil pursuits.',
      trivia: 'Did you know he gave anger management lessons to Wolverine?',
      image: 'https://marvelous-project-3.s3.us-east-2.amazonaws.com/shang-chi.jpg',
    },
  ];

  await User.deleteMany({});
  console.log('--- REMOVING ALL USERS ---');
  await User.insertMany(seedUsers);
  console.log('--- INSERTING USERS ---');
  await Hero.deleteMany({});
  console.log('--- REMOVING ALL HEROES ---');
  await Hero.insertMany(seedHeroes);
  console.log('--- INSERTING HEROES ---');

  console.log('- - - - - - - - - - - - -');
  console.log('--- SEEDING COMPLETE ---');
  process.exit(0);
});
