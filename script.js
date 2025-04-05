document.addEventListener("scroll", function () {
    let popup = document.getElementById("connectPopup");
    if (window.scrollY > 200) {
        popup.classList.add("show-popup");
    } else {
        popup.classList.remove("show-popup");
    }
});

/* job listing */
const jobs = [
    {
        profile: "Software Engineer",
        company: "Google",
        location: "Bangalore, India",
        salary: "₹12,00,000 - ₹20,00,000 per year",
        description: "Develop scalable software solutions for global users.",
        details: "• Strong coding skills in Java, Python. \n• Experience with cloud platforms.\n• Excellent problem-solving skills.",
        jobType: "Full-time",
        postedDate: "Posted 5 days ago"
    },
    {
        profile: "Data Scientist",
        company: "Microsoft",
        location: "Hyderabad, India",
        salary: "₹15,00,000 - ₹22,00,000 per year",
        description: "Analyze and model complex business data.",
        details: "• Proficient in R, Python, SQL.\n• Strong analytical and statistical skills.\n• Experience in AI/ML projects.",
        jobType: "Full-time",
        postedDate: "Posted 3 days ago"
    },
    // Add more jobs here...
];

// Function to display jobs
function displayJobs(filteredJobs = jobs) {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = ""; // Clear existing job listings

    filteredJobs.forEach((job, index) => {
        jobListings.innerHTML += `
            <div class="job-card" onclick="showDetails(${index})">
                <h2>${job.profile}</h2>
                <p class="company">${job.company} - ${job.location}</p>
                <p class="salary">${job.salary}</p>
                <p class="job-type">${job.jobType}</p>
                <p class="posted-date">${job.postedDate}</p>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
    });
}

// Function to show job details
function showDetails(index) {
    const job = jobs[index];
    const jobDetails = document.getElementById("job-details");
    jobDetails.innerHTML = `
        <h2>${job.profile}</h2>
        <p class="company">${job.company} - ${job.location}</p>
        <p class="salary">${job.salary}</p>
        <p class="job-type">${job.jobType}</p>
        <p class="posted-date">${job.postedDate}</p>
        <button class="apply-btn">Apply Now</button>
        <div class="details">
            <h3>Job details</h3>
            <p>${job.details.replace(/\n/g, "<br>")}</p>
        </div>
    `;
}

// Function to filter jobs
function filterJobs() {
    const location = document.getElementById("location-filter").value;
    const salary = document.getElementById("salary-filter").value;
    const jobType = document.getElementById("job-type-filter").value;

    const filteredJobs = jobs.filter(job => {
        const jobLocation = job.location.split(",")[0]; // Extract city from location
        const minSalary = parseInt(job.salary.split("-")[0].replace(/[^0-9]/g, "")); // Extract minimum salary

        return (!location || jobLocation === location) &&
               (!salary || minSalary >= parseInt(salary)) &&
               (!jobType || job.jobType === jobType);
    });

    displayJobs(filteredJobs);
}

// Event listener for filters
document.getElementById("apply-filters").addEventListener("click", filterJobs);

// Initial load of jobs
displayJobs();


/*  intership listing */



const internships = [
    {
        profile: "Web Development Intern",
        company: "Google",
        location: "Bangalore, India",
        stipend: "₹10,000 - ₹15,000 per month",
        description: "Work on building and optimizing web applications.",
        details: "• Proficiency in HTML, CSS, JavaScript.\n• Familiarity with frameworks like React or Angular.\n• Good problem-solving skills."
    },
    {
        profile: "Data Science Intern",
        company: "Microsoft",
        location: "Hyderabad, India",
        stipend: "₹12,000 - ₹18,000 per month",
        description: "Analyze business data to derive insights.",
        details: "• Proficiency in Python and R.\n• Familiarity with machine learning algorithms.\n• Strong analytical and problem-solving skills."
    },
    {
        profile: "AI/ML Intern",
        company: "Facebook",
        location: "Mumbai, India",
        stipend: "₹15,000 - ₹20,000 per month",
        description: "Work on AI and ML-based projects.",
        details: "• Strong background in TensorFlow, PyTorch.\n• Experience with neural networks.\n• Ability to deploy AI models to production."
    },
    {
        profile: "Content Writing Intern",
        company: "Amazon",
        location: "Pune, India",
        stipend: "₹8,000 - ₹12,000 per month",
        description: "Write creative content for blogs and social media.",
        details: "• Excellent writing skills.\n• Proficiency in SEO and content marketing.\n• Ability to meet deadlines."
    },
];

// Generate internship listings dynamically
function generateInternships() {
    const internshipList = document.getElementById("internship-listings");
    internshipList.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const internship = internships[i % internships.length];
        const internshipCard = document.createElement("div");
        internshipCard.classList.add("job-card");
        internshipCard.innerHTML = `
            <h2>${internship.profile}</h2>
            <p class="company">${internship.company} - ${internship.location}</p>
            <p class="salary">${internship.stipend}</p>
            <p>${internship.description}</p>
        `;
        internshipCard.addEventListener("click", () => showDetails(i));
        internshipList.appendChild(internshipCard);
    }
}

// Show internship details when clicked
function showDetails(index) {
    const internship = internships[index % internships.length];
    const detailsBox = document.getElementById("internship-details");
    detailsBox.innerHTML = `
        <h2>${internship.profile}</h2>
        <p class="company">${internship.company} - ${internship.location}</p>
        <p class="salary">${internship.stipend}</p>
        <div class="details">
            <h3>Internship Details</h3>
            <p>${internship.details.replace(/\n/g, "<br>")}</p>
        </div>
    `;
}

// Initialize
document.addEventListener("DOMContentLoaded", generateInternships);
