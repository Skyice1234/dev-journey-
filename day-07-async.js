// ====== PART 1 - Basic Promise ======
const orderFood = new Promise ((resolve,reject) =>{
    const foodAvailable = true;

    if (foodAvailable) {
        resolve("Your order is ready!");
    } else {"Out of stock!"};
});

orderFood
.then(message => console.log(message))
.catch(error => console.log(error));

// ====== PART 2 - Promise with Delay ======

const getWeather = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(
                {city: "Abuja",
                temp: 32,
                condition: "Sunny"
                }
            );
        }, 2000);
    });
};

getWeather()
.then(data => console.log(`Weather in ${data.city}: ${data.temp}C, ${data.condition}`))
.catch(err => console.log("Error:", err));

// ====== PART 3 - Async/Await Version ======

const showWeather = async() => {
    try {
        const data = await getWeather();
        console.log (`Async/Await - ${data.city}: ${data.temp}C`);
    } catch (error) {
        console.log("Error", error);
    }
};

showWeather();
 
// ====== PART 4 - Async/Await with error handling ======
const getUserData = async (id) => {
    try {
        if(id <= 0) throw new Error("Invalid ID!")
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();
        console.log (`User: ${user.name}, Email: ${user.email}`);
    } catch (error) {
        console.log("Caught error:", error.message);
    }
};
getUserData(1);
getUserData(-1);