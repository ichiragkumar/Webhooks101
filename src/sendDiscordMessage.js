
const sendDiscordMessage = async (newUser)=> { 
    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify({ 
        content: 
        `{
           userName: ${newUser.name}
           Age: ${newUser.age}
           Gender: ${newUser.gender}
           This user has been added to the database
      }
        `
      }),
      
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("congratulations you have new subscribed user");


}


export default sendDiscordMessage;
  