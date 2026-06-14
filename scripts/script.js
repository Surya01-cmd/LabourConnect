const jobs = [
{
title: "Construction Helper",
location: "Jodhpur",
salary: "₹700/day"
},
{
title: "Electrician",
location: "Jaipur",
salary: "₹1200/day"
},
{
title: "Plumber",
location: "Bikaner",
salary: "₹1000/day"
},
{
title: "Painter",
location: "Udaipur",
salary: "₹900/day"
}
];

function loadJobs() {

const container =
document.getElementById("jobContainer");

jobs.forEach(job => {

const card =
document.createElement("div");

card.classList.add("job-card");

card.innerHTML = `
<h3>${job.title}</h3>
<p><strong>Location:</strong> ${job.location}</p>
<p><strong>Salary:</strong> ${job.salary}</p>
<button onclick="applyJob('${job.title}')">
Apply Now
</button>
`;

container.appendChild(card);
});
}

function applyJob(jobTitle){
alert(`Applied for ${jobTitle}`);
}

function showJobs(){
document
.getElementById("jobs")
.scrollIntoView({
behavior:"smooth"
});
}

loadJobs();