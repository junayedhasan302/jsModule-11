/*
ask 2: buildProfileCard(user) — Template Literals  
Given { name, title, company }, return a multiline string using 
template literal interpolation only. 

Input:   
{ name: "Arif", title: "Developer", company: "Programming Hero" } 
Output:
"Arif\nDeveloper at Programming Hero"

*/

const buildProfileCard = (user) => `${user.name}\n ${user.title}, at ${user.company}`;
user1 = {
    name: "Junayed",
    title: "Developer",
    company: "Programming Hero"
}
console.log(buildProfileCard(user1));