// Testimoni per kategori
// Key = id kategori dari categories.js
// Untuk menambah testimoni baru, tambahkan objek ke array kategori yang sesuai
const testimonials = {
  all: [
    { name: "Andi",   avatar: null, text: "Platform paling seru yang pernah aku coba! 🔥",        rating: 5 },
    { name: "Bella",  avatar: null, text: "Rekomen banget buat nemenin waktu luang.",              rating: 5 },
    { name: "Cleo",   avatar: null, text: "UI-nya cakep, partnernya juga asik-asik 😍",            rating: 4 },
    { name: "Dion",   avatar: null, text: "Worth it banget, pasti balik lagi!",                   rating: 5 },
  ],
  game: [
    { name: "Raka",   avatar: null, text: "Seru banget main bareng, nggak boring sama sekali 🎮",  rating: 5 },
    { name: "Gilang", avatar: null, text: "GG abis, auto rank up ditemani dia ⚡",                 rating: 5 },
    { name: "Nabil",  avatar: null, text: "Sabar banget ngajarin, padahal aku newbie haha",        rating: 4 },
    { name: "Kevin",  avatar: null, text: "Party bareng tiap malem, adiktif banget!",              rating: 5 },
  ],
  chat: [
    { name: "Sinta",  avatar: null, text: "Nyaman banget diajak ngobrol, seru & thoughtful 💬",   rating: 5 },
    { name: "Maya",   avatar: null, text: "Curhatan aku direspons dengan hangat banget.",          rating: 5 },
    { name: "Rere",   avatar: null, text: "Conversation-nya mengalir, nggak awkward sama sekali", rating: 4 },
    { name: "Nita",   avatar: null, text: "Bisa ngobrol sampe lupa waktu, recommended!",          rating: 5 },
  ],
  chill: [
    { name: "Tara",   avatar: null, text: "Santai bareng sambil makan snack, perfect! ☕",         rating: 5 },
    { name: "Hendra", avatar: null, text: "Vibes-nya cocok banget buat healing weekday.",          rating: 5 },
    { name: "Desi",   avatar: null, text: "Calm & cozy, exactly what I needed.",                   rating: 5 },
    { name: "Zaki",   avatar: null, text: "Nemenin sambil dengerin musik, so relaxing~",           rating: 4 },
  ],
  movie: [
    { name: "Pandu",  avatar: null, text: "Bahas plot twist bareng seru banget! 🎬",               rating: 5 },
    { name: "Irene",  avatar: null, text: "Dia tau banyak film bagus, rekomen semua!",             rating: 5 },
    { name: "Bagas",  avatar: null, text: "Nonton bareng + review langsung, keren!",               rating: 4 },
    { name: "Karin",  avatar: null, text: "Nggak kerasa udah marathon 5 episode 😂",               rating: 5 },
  ],
  music: [
    { name: "Riza",   avatar: null, text: "Selera musiknya mirip banget sama aku! 🎧",             rating: 5 },
    { name: "Salsa",  avatar: null, text: "Dibuatin playlist yang bikin semangat seharian.",       rating: 5 },
    { name: "Farid",  avatar: null, text: "Nemenin dengerin album baru, great taste!",             rating: 4 },
    { name: "Putri",  avatar: null, text: "Tiba-tiba nemu lagu favorit baru gara-gara dia.",      rating: 5 },
  ],
  photo: [
    { name: "Sekar",  avatar: null, text: "Pose-nya natural banget, hasil foto cakep! 📸",         rating: 5 },
    { name: "Rizal",  avatar: null, text: "Sabar banget nemenin hunting foto sampe sore.",         rating: 5 },
    { name: "Aulia",  avatar: null, text: "Lightingnya bisa diatur, profesional banget!",          rating: 4 },
    { name: "Rama",   avatar: null, text: "Foto bareng asik, hasilnya masuk IG semua!",            rating: 5 },
  ],
};

export default testimonials;
