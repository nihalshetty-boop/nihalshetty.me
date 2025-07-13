// Portfolio Data
const portfolioData = {
    name: "Nihal Shetty",
    title: "Software Engineer / Full Stack Developer",
    email: "nihalshetty2001@gmail.com",
    linkedin: "https://linkedin.com/in/nihaldshetty/",
    github: "https://github.com/nihalshetty-boop",
    resume: "assets/nihalshettyresume.pdf",
    
    about: `I'm a passionate full stack developer with expertise in modern web technologies. 
I love building scalable applications and solving complex problems. 
When I'm not coding, you can find me exploring new technologies or contributing to open source projects.`,
    
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            tech: "React, Node.js, MongoDB, Stripe, Redux",
            link: "https://github.com/nihal/ecommerce"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            tech: "Vue.js, Express.js, PostgreSQL, Socket.io",
            link: "https://github.com/nihal/taskmanager"
        },
        {
            title: "Weather Dashboard",
            description: "A weather application that provides real-time weather data, forecasts, and interactive maps with location-based services.",
            tech: "JavaScript, OpenWeather API, Chart.js, Geolocation API",
            link: "https://github.com/nihal/weather-app"
        },
        {
            title: "Portfolio Website",
            description: "This very terminal-style portfolio website you're currently viewing! Built with vanilla JavaScript and CSS.",
            tech: "HTML, CSS, JavaScript, Terminal UI",
            link: "https://github.com/nihal/portfolio"
        }
    ],
    
    experience: [
        {
            title: "Senior Full Stack Developer",
            company: "TechCorp Inc.",
            date: "2022 - Present",
            description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for code quality and deployment."
        },
        {
            title: "Full Stack Developer",
            company: "StartupXYZ",
            date: "2020 - 2022",
            description: "Built and maintained multiple web applications, worked with React, Node.js, and various cloud services. Collaborated with cross-functional teams."
        },
        {
            title: "Frontend Developer",
            company: "WebSolutions Ltd.",
            date: "2018 - 2020",
            description: "Developed responsive user interfaces, optimized application performance, and worked closely with designers to implement pixel-perfect designs."
        }
    ],
    
    skills: {
        "Frontend": ["React", "Vue.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Sass/SCSS", "Bootstrap", "Tailwind CSS"],
        "Backend": ["Node.js", "Express.js", "Python", "Django", "Java", "Spring Boot", "REST APIs", "GraphQL"],
        "Database": ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
        "DevOps": ["Docker", "AWS", "Heroku", "CI/CD", "Git", "Linux"],
        "Tools": ["VS Code", "Postman", "Jira", "Figma", "Adobe XD"]
    },
    
    publications: [
        {
            title: "Building Scalable Web Applications with Microservices",
            journal: "Tech Journal",
            date: "2023",
            link: "https://example.com/publication1"
        },
        {
            title: "Modern JavaScript Patterns for Better Code Quality",
            journal: "Developer Weekly",
            date: "2022",
            link: "https://example.com/publication2"
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
            whoami: this.showAbout.bind(this)
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
        // Clear output to prevent duplicate welcome messages
        this.output.innerHTML = '';
        // Recreate the flex structure
        this.output.innerHTML = `
            <div class="terminal-main-flex">
                <div class="ascii-art" id="ascii-art"></div>
                <div class="info-block" id="info-block"></div>
            </div>
        `;
        // Render ASCII art left, info block right
        document.getElementById('ascii-art').textContent = asciiArt;
        document.getElementById('info-block').innerHTML = `
            <div class="info-name">Nihal</div>
            <div class="info-separator"></div>
            <a class="info-link" href="${portfolioData.resume}">${icons.resume} Resume &rarr; <span style="font-size:14px;">View my resume</span></a>
            <a class="info-link" href="${portfolioData.github}" target="_blank">${icons.github} GitHub &rarr; <span style="font-size:14px;">https://github.com/nihalshetty-boop</span></a>
            <a class="info-link" href="${portfolioData.linkedin}" target="_blank">${icons.linkedin} LinkedIn &rarr; <span style="font-size:14px;">https://www.linkedin.com/in/nihaldshetty/</span></a>
            <a class="info-link" href="mailto:${portfolioData.email}">${icons.email} Email &rarr; <span style="font-size:14px;">${portfolioData.email}</span></a>
        `;
        // Add help prompt below
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
        
        // Add to command history
        this.commandHistory.push(command);
        this.historyIndex = this.commandHistory.length;
        
        // Display command
        this.addToOutput(`<div class="command-history">
            <span class="prompt">visitor@portfolio:~$</span>
            <span class="command">${command}</span>
        </div>`);
        
        // Process command
        if (this.commands[command]) {
            this.commands[command]();
        } else {
            this.addToOutput(`<div class="command-history">
                <div class="output">Command not found: ${command}. Type <span class="help-command">help</span> for available commands.</div>
            </div>`);
        }
        
        // Scroll to bottom
        this.scrollToBottom();
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
        
        // Move cursor to end
        this.commandInput.setSelectionRange(this.commandInput.value.length, this.commandInput.value.length);
    }
    
    addToOutput(content) {
        this.output.innerHTML += content;
    }
    
    scrollToBottom() {
        const terminalBody = this.terminal.querySelector('.terminal-body');
        if (!terminalBody) return;
        const target = terminalBody.scrollHeight - terminalBody.clientHeight;
        const step = 20; // pixels per frame (adjust for speed)
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
                        <span class="help-command">help</span>
                        <span class="help-description">- Show this help message</span>
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
                    <ul class="skill-list">
            `;
            
            skills.forEach(skill => {
                skillsContent += `<li>${skill}</li>`;
            });
            
            skillsContent += `
                    </ul>
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
        // Show the PDF overlay
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

// Remove PDF viewer logic from here

// Initialize terminal when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
    if (window.setupPDFViewer) window.setupPDFViewer();
}); 