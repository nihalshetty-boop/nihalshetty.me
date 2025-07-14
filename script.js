// Portfolio Data
const portfolioData = {
    name: "Nihal Shetty",
    title: "Software Engineer / Full Stack Developer",
    email: "nihalshetty2001@gmail.com",
    linkedin: "https://linkedin.com/in/nihaldshetty/",
    github: "https://github.com/nihalshetty-boop",
    resume: "assets/nihalshettyresume.pdf",
    
    about: `I'm a passionate full-stack developer with hands-on experience building scalable web and mobile applications using technologies like React, Node.js, FastAPI, MongoDB, and Swift. I’ve contributed to impactful projects across startups and academic environments—ranging from full-stack learning platforms to native iOS games—focusing on performance, usability, and clean architecture. With a strong foundation in data structures, backend systems, and cloud deployment (AWS, GCP, Docker), I enjoy working across the stack to solve real-world problems and deliver polished user experiences. I’ve also explored areas like CI/CD, authentication, and real-time communication, and I'm always excited to learn and apply new technologies to build meaningful software. I recently graduated with an M.S. in Computer Science at Indiana University, and I’m actively seeking full-time software engineering roles where I can contribute to impactful products and grow as a developer.
When I'm not coding, you can find me exploring new technologies or contributing to open source projects.`,
    
    projects: [
        {
            title: "Listri, an E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            tech: "React, Node.js, MongoDB, Stripe, Redux",
            link: "https://github.com/nihalshetty-boop/listri"
        },
        {
            title: "MyGlanceThing",
            description: "A open source project that allows you to create a glanceable dashboard of your important data on the Spotify Car Thing.",
            tech: "Electron, Vite, React, CSS, Node.js",
            link: "https://github.com/nihalshetty-boop/MyGlanceThing"
        },
        {
            title: "2048-iOS",
            description: "A-based services.",
            tech: "JavaScript, OpenWeather API, Chart.js, Geolocation API",
            link: "https://github.com/nihalshetty-boop/2048-iOS"
        },
        {
            title: "CourseCraft Learning Management System",
            description: "Developed a full-stack Learning Management System enabling instructors to create, manage and organize courses, assignments and student interactions. Optimized load times and database queries to improve overall performance,",
            tech: "React, Express, Firebase, NodeJS",
            link: "https://github.com/nihalshetty-boop/CourseCraft-LMS"
        },
        {
            title: "Portfolio Website",
            description: "This very terminal-style portfolio website you're currently viewing! Built with vanilla JavaScript and CSS.",
            tech: "HTML, CSS, JavaScript",
            link: "https://github.com/nihalshetty-boop/nihalshetty.me"
        },
        {
            title: "Syntax Analyser for C",
            description: "A syntax analyser for C language that follows the rules of the C language and checks for errors in the code.",
            tech: "Lex, C",
            link: "https://github.com/nihalshetty-boop/Syntax-Analyser-for-C"
        },
        {
            title: "Sorting Algorithms Visualizer",
            description: "A sorting algorithms visualizer that allows you to visualize how different sorting algorithms work.",
            tech: "HTML, CSS, JavaScript, PHP",
            link: "https://github.com/nihalshetty-boop/Sorting-Algorithm-Visualiser"
        }

    ],
    
    experience: [
        {
            title: "Senior Consultant",
            company: "Heartland Community Network",
            date: "June 2025 – Present",
            description: "Partnered with small businesses and organizations across Indiana to identify operational challenges and deliver tailored software solutions through web and app development."
        },
        {
            title: "Full Stack Developer Intern",
            company: "Hyphenova",
            date: "August 2024 – December 2024",
            description: "Led the development of key user-facing features including onboarding, profile, chat and creator pages using custom component libraries and structured form handling, improving input validation and overall UX consistency."
        },
        {
            title: "Full Stack Engineer Intern",
            company: "Y STEM & Chess Inc.",
            date: "May 2024 – August 2024",
            description: "Assisted in migrating the company’s main platform from Angular to React, restructuring components and implementing routing via React Router to improve maintainability and frontend performance."
        },
        {
            title: "FOSSEE Intern",
            company: "Indian Institute of Technology – Bombay",
            date: "March 2022 - October 2022",
            description: "Spearheaded a critical Moodle platform upgrade for the Spoken Tutorial initiative by analyzing over 2,000 relational database tables and optimizing 32 performance-critical ones, ensuring schema alignment and improved query efficiency."
        }
    ],
    
    skills: {
        "Programming Languages": ["Python", "Java", "C", "C++", "JavaScript", "TypeScript", "SQL", "Kotlin", "Swift", "PHP", "R", "MATLAB"],
        "Web & App Development": ["React", "Angular", "Node.js", "Express", "Android Studio", "Xcode", "HTML", "CSS", "Flask", "Django", "Bootstrap", "MERN & MEAN Stack", "Streamlit", "Redux", "REST API", "Spring Boot", "Electron", "Vite", "GraphQL"],
        "Databases/Datastores": ["SQL", "MongoDB", "PostgreSQL", "Firebase", "RDBMS", "MySQL", "Redis"],
        "Cloud & DevOps": ["AWS", "GCP", "CI/CD", "Docker", "Kubernetes", "K8s", "GitHub Actions"],
        "Miscellaneous": ["Data Structures", "Algorithms", "Linux", "Microsoft Azure", "Agile", "Git", "Jira", "Postman", "VS Code", "Version Control", "Operating Systems", "Computer Networks", "TCP/IP"]
    },
    
    publications: [
        {
            title: "Conversational AI Based College Enquiry Chatbot",
            journal: "IJRASET",
            date: "2023",
            link: "https://doi.org/10.22214/ijraset.2023.51324"
        }
    ]
};

// ASCII Art for the name
const asciiArt = `
███╗   ██╗██╗██╗  ██╗ █████╗ ██╗     
████╗  ██║██║██║  ██║██╔══██╗██║     
██╔██╗ ██║██║███████║███████║██║     
██║╚██╗██║██║██╔══██║██╔══██║██║     
██║ ╚████║██║██║  ██║██║  ██║███████╗ 
╚═╝  ╚═══╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ 
                                      
Software Engineer / Full Stack Developer
`;

// SVG icons
const icons = {
    resume: `<svg class='info-icon' viewBox='0 0 20 20' fill='none'><path d='M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.83a2 2 0 0 0-.59-1.41l-3.83-3.83A2 2 0 0 0 10.17 2H6zm4 1.5V7a1 1 0 0 0 1 1h3.5' stroke='#00ffb3' stroke-width='1.2'/></svg>`,
    github: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z' stroke='#00ffff' stroke-width='1.2'/></svg>`,
    linkedin: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M6.94 19.5V9.5H3.5v10h3.44zm-1.72-11.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm4.78 11.5h3.44v-5.5c0-1.32.47-2.22 1.65-2.22 1.17 0 1.65.9 1.65 2.22v5.5h3.44v-6.5c0-2.22-1.18-3.25-2.76-3.25-1.28 0-1.85.7-2.17 1.19h.03V9.5h-3.44c.05.66 0 10 0 10z' stroke='#00ffff' stroke-width='1.2'/></svg>`,
    email: `<svg class='info-icon' viewBox='0 0 24 24' fill='none'><path d='M4 4h16v16H4V4zm8 8l8-6H4l8 6zm0 2l-8-6v12h16V8l-8 6z' stroke='#00ffff' stroke-width='1.2'/></svg>`,
};

// Terminal functionality
class Terminal {
    constructor() {
        this.output = document.getElementById('output');
        this.commandInput = document.getElementById('command-input');
        this.loadingScreen = document.getElementById('loading-screen');
        this.terminal = document.getElementById('terminal');
        this.commandHistory = [];
        this.historyIndex = -1;
        this.loadingTimeout = null;
        this.loadingSkipped = false;
        
        this.commands = {
            help: this.showHelp.bind(this),
            about: this.showAbout.bind(this),
            projects: this.showProjects.bind(this),
            experience: this.showExperience.bind(this),
            skills: this.showSkills.bind(this),
            publications: this.showPublications.bind(this),
            clear: this.clear.bind(this),
            contact: this.showContact.bind(this),
            resume: this.openResume.bind(this),
            ls: this.listCommands.bind(this),
            whoami: this.showAbout.bind(this),
            'show-all': this.showAll.bind(this)
        };
        
        this.init();
    }
    
    init() {
        this.startLoadingAnimation();
        this.setupEventListeners();
        // Add skip animation for dev: minimize icon
        const minimizeBtn = this.loadingScreen.querySelector('.minimize');
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => {
                this.skipLoadingAnimation();
            });
        }
        // Easter egg: close icon hides everything
        const closeBtn = this.loadingScreen.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.loadingScreen.style.display = 'none';
                this.terminal.style.display = 'none';
            });
        }
    }
    
    startLoadingAnimation() {
        const loadingMessages = [
            "Initializing terminal...",
            "Loading system modules...",
            "Establishing connection...",
            "Loading portfolio data...",
            "System ready!"
        ];
        
        let messageIndex = 0;
        const loadingMessage = document.getElementById('loading-message');
        
        const updateMessage = () => {
            if (this.loadingSkipped) return; // If skipped, do nothing
            if (messageIndex < loadingMessages.length) {
                loadingMessage.textContent = loadingMessages[messageIndex];
                messageIndex++;
                this.loadingTimeout = setTimeout(updateMessage, 800);
            } else {
                this.loadingTimeout = setTimeout(() => {
                    if (this.loadingSkipped) return;
                    this.loadingScreen.style.display = 'none';
                    this.terminal.classList.remove('hidden');
                    this.showWelcome();
                    this.commandInput.focus();
                }, 1000);
            }
        };
        
        updateMessage();
    }

    skipLoadingAnimation() {
        this.loadingSkipped = true;
        if (this.loadingTimeout) clearTimeout(this.loadingTimeout);
        this.loadingScreen.style.display = 'none';
        this.terminal.classList.remove('hidden');
        this.showWelcome();
        this.commandInput.focus();
    }
    
    setupEventListeners() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.processCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            }
        });
        
        // Focus input when clicking anywhere in terminal
        this.terminal.addEventListener('click', () => {
            this.commandInput.focus();
        });
    }
    
    showWelcome() {
        this.output.innerHTML = '';
        this.output.innerHTML = `
            <div class="terminal-main-flex">
                <div class="ascii-art" id="ascii-art"></div>
                <div class="info-block" id="info-block"></div>
            </div>
        `;
        document.getElementById('ascii-art').textContent = asciiArt;
        document.getElementById('info-block').innerHTML = `
            <div class="info-name">Nihal Dayanand Shetty</div>
            <div class="info-separator"></div>
            <a class="info-link" href="${portfolioData.resume}">${icons.resume} Resume &rarr; <span style="font-size:14px;">View my resume</span></a>
            <a class="info-link" href="${portfolioData.github}" target="_blank">${icons.github} GitHub &rarr; <span style="font-size:14px;">https://github.com/nihalshetty-boop</span></a>
            <a class="info-link" href="${portfolioData.linkedin}" target="_blank">${icons.linkedin} LinkedIn &rarr; <span style="font-size:14px;">https://www.linkedin.com/in/nihaldshetty/</span></a>
            <a class="info-link" href="mailto:${portfolioData.email}">${icons.email} Email &rarr; <span style="font-size:14px;">${portfolioData.email}</span></a>
        `;
        this.addToOutput(`
            <div class="content-section">
                <div class="section-content">
                    Welcome to my terminal portfolio! Type <span class="help-command">help</span> to see available commands.
                </div>
            </div>
        `);
    }
    
    processCommand() {
        const command = this.commandInput.value.trim().toLowerCase();
        this.commandInput.value = '';
        
        if (command === '') return;
        
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;
        
        this.addToOutput(`<div class="command-history">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="command">${command}</span>
        </div>`);
        
        if (this.commands[command]) {
            this.commands[command]();
        } else {
            this.addToOutput(`<div class="command-history">
                <div class="output">Command not found: ${command}. Type <span class="help-command">help</span> for available commands.</div>
            </div>`);
        }
    }
    
    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex > 0) {
            this.historyIndex--;
            this.commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.commandInput.value = this.commandHistory[this.historyIndex];
        } else if (direction === 'down' && this.historyIndex === this.commandHistory.length - 1) {
            this.historyIndex++;
            this.commandInput.value = '';
        }
        
        this.commandInput.setSelectionRange(this.commandInput.value.length, this.commandInput.value.length);
    }
    
    addToOutput(content) {
        this.output.innerHTML += content;
        this.scrollToBottom();
    }
    
    scrollToBottom() {
        const terminalBody = this.terminal.querySelector('.terminal-body');
        if (!terminalBody) return;
        const target = terminalBody.scrollHeight - terminalBody.clientHeight;
        const step = 8; 
        function animateScroll() {
            const current = terminalBody.scrollTop;
            if (current < target) {
                terminalBody.scrollTop = Math.min(current + step, target);
                requestAnimationFrame(animateScroll);
            }
        }
        animateScroll();
    }
    
    // Command implementations
    showHelp() {
        const helpContent = `
            <div class="command-history">
                <div class="output">
                    <div class="help-section">
                        <span class="help-command">show-all</span>
                        <span class="help-description">- Show all sections at once</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">about</span>
                        <span class="help-description">- Learn more about me</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">projects</span>
                        <span class="help-description">- View my projects</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">experience</span>
                        <span class="help-description">- View my work experience</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">skills</span>
                        <span class="help-description">- View my technical skills</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">publications</span>
                        <span class="help-description">- View my publications</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">contact</span>
                        <span class="help-description">- Get my contact information</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">resume</span>
                        <span class="help-description">- Download my resume</span>
                    </div>
                    <div class="help-section">
                        <span class="help-command">clear</span>
                        <span class="help-description">- Clear the terminal</span>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(helpContent);
    }

    showAll() {
        this.showAbout();
        this.showProjects();
        this.showExperience();
        this.showSkills();
        this.showPublications();
        this.showContact();
    }
    
    showAbout() {
        const aboutContent = `
            <div class="command-history">
                <div class="output">
                    <div class="content-section">
                        <div class="section-title">About Me</div>
                        <div class="section-content">${portfolioData.about}</div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(aboutContent);
    }
    
    showProjects() {
        let projectsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Projects</div>
                    <div class="projects-grid">
        `;
        
        portfolioData.projects.forEach(project => {
            projectsContent += `
                <div class="project-card">
                    <div class="project-title">${project.title}</div>
                    <div class="project-description">${project.description}</div>
                    <div class="project-tech">Tech: ${project.tech}</div>
                    <a href="${project.link}" class="link" target="_blank">View Project →</a>
                </div>
            `;
        });
        
        projectsContent += `
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(projectsContent);
    }
    
    showExperience() {
        let experienceContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Work Experience</div>
        `;
        
        portfolioData.experience.forEach(exp => {
            experienceContent += `
                <div class="experience-item">
                    <div class="experience-title">${exp.title}</div>
                    <div class="experience-company">${exp.company}</div>
                    <div class="experience-date">${exp.date}</div>
                    <div class="experience-description">${exp.description}</div>
                </div>
            `;
        });
        
        experienceContent += `
                </div>
            </div>
        `;
        this.addToOutput(experienceContent);
    }
    
    showSkills() {
        let skillsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Technical Skills</div>
                    <div class="skills-grid">
        `;
        
        Object.entries(portfolioData.skills).forEach(([category, skills]) => {
            skillsContent += `
                <div class="skill-category">
                    <div class="skill-category-title">${category}</div>
                    <div class="skill-badges">
            `;
            
            skills.forEach(skill => {
                skillsContent += `<span class="skill-badge">${skill}</span>`;
            });
            
            skillsContent += `
                    </div>
                </div>
            `;
        });
        
        skillsContent += `
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(skillsContent);
    }
    
    showPublications() {
        let publicationsContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Publications</div>
        `;
        
        portfolioData.publications.forEach(pub => {
            publicationsContent += `
                <div class="experience-item">
                    <div class="experience-title">${pub.title}</div>
                    <div class="experience-company">${pub.journal}</div>
                    <div class="experience-date">${pub.date}</div>
                    <a href="${pub.link}" class="link" target="_blank">Read Publication →</a>
                </div>
            `;
        });
        
        publicationsContent += `
                </div>
            </div>
        `;
        this.addToOutput(publicationsContent);
    }
    
    showContact() {
        const contactContent = `
            <div class="command-history">
                <div class="output">
                    <div class="section-title">Contact Information</div>
                    <div class="content-section">
                        <div class="section-content">
                            <strong>Email:</strong> <a href="mailto:${portfolioData.email}" class="link">${portfolioData.email}</a><br>
                            <strong>LinkedIn:</strong> <a href="${portfolioData.linkedin}" class="link" target="_blank">${portfolioData.linkedin}</a><br>
                            <strong>GitHub:</strong> <a href="${portfolioData.github}" class="link" target="_blank">${portfolioData.github}</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        this.addToOutput(contactContent);
    }
    
    openResume() {
        const pdfOverlay = document.getElementById('pdf-viewer-overlay');
        if (pdfOverlay) pdfOverlay.classList.remove('hidden');
        this.addToOutput(`
            <div class="command-history">
                <div class="output">Opening resume in viewer...</div>
            </div>
        `);
    }
    
    clear() {
        this.output.innerHTML = '';
        this.showWelcome();
    }
    
    listCommands() {
        this.showHelp();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
    if (window.setupPDFViewer) window.setupPDFViewer();
}); 