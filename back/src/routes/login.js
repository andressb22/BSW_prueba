const { Router } = require("express");
const router = Router();

const users = [
  {
    id: 1,
    email: "example@gmail.com",
    password: "12345678A$",
    coord: { lat:4.6219452,lng: -74.1478768},
  },
  {
    id: 2,
    email: "notexample@gmail.com",
    password: "87654321A$",
    coord: {lat:4.6337865, lng: -74.1133577 },
  },
];

function validateUser(email, password) {
  const user = users.find(
    (users) => users.email === email && users.password === password
  );
  return user;
}

router.post("/LogIn", (req, res) => {
  const { email, password } = req.body;

  const userData = validateUser(email, password);
 

  if (userData == undefined) {
    res.status(401).json({
      status: false,
      msg: "User not found incorrect password or email address",
      userData: null,
    });

    return;
  }

  res.status(200).json({
    status: true,
    msg: "User validated",
    userData:{
      id:userData.id,
      coord:userData.coord
    },
  });

});

module.exports = router;
