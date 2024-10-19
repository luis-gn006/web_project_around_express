const doesUserExist = (req, res, next) => {
  if (!users[req.params.id]) {
    res.send('Este usuario no existe');
    return;
  }


  next();
};