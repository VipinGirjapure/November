  // const handleRegister = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       fields.email,
  //       fields.password
  //     );
  //     if (user.user.uid) {
  //       setIsLogIn(true);
  //       console.log(user);
  //       const myRef = ref(database, "chat-rooms/" + user.user.uid);
  //       const res = await set(myRef, {
  //         email: fields.email,
  //         name: fields.name,
  //         username: fields.name.toLowerCase().replace(" ", "-"),
  //         age: fields.age,
  //         online: false,
  //         timestamp: new Date(),
  //       });
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };