const object1 = {
    a: 1,
    b: 2
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}