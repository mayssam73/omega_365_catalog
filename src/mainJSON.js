const data = [
    {
        num: "COSC 1336",
        name: "Computer Science and Programming",
        creditHours: 3,
        prereq: "A grade of C- or better in MATH 1314 or equivalent.",
        description: "Introduction to problem solving through computer programming. Students will learn the fundamental principles of computer science, basic hardware and software components of a computer system, computational thinking, basic algorithms, and programming concepts. Students will get hands-on experience in problem solving by designing, writing, testing and debugging programs in a modern programming language.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC 1437",
        name: "Introduction to Programming",
        creditHours: 4,
        prereq: "A grade of C- or better in COSC 1336, and credit for or concurrent enrollment in MATH 2413.",
        description: "Fundamental concepts of structured programming; procedures and elementary data structures with a focus on problem solving strategies and implementation; computer organization, structured procedural programming, C/C++ programming language, and algorithm design.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "ENGL 1301",
        name: "First Year Writing I",
        creditHours: 3,
        prereq: "A TSI placement score of at least 340, and an essay score of at least a 4 on the TSI Writing Assessment; or a placement score of less than 340, and an ABE Diagnostic level of at least 4, and an essay score of at least 5 on the TSI Writing Assessment; and a score ranging from 351 to 390 on the TSI Reading Assessment. Students may exempt the TSI by obtaining satisfactory scores on other accepted standardized tests. See http://www.uh.edu/ussc/tsi/ for details.",
        description: "None",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "ENGL 1302",
        name: "First Year Writing II",
        creditHours: 3,
        prereq: "ENGL 1301 or equivalent.",
        description: "Detailed study of the principles of rhetoric as applied to analyzing and writing argumentative and persuasive essays; principles and methods of research, culminating in writing a substantial research paper.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "HIST 1301",
        name: "The U.S. to 1877",
        creditHours: 3,
        prereq: "None",
        description: "The social, economic, and political history of the United States to 1877.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "HIST 1302",
        name: "The U.S. Since 1877",
        creditHours: 3,
        prereq: "None",
        description: "The social, economic, and political history of the United States since 1877.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "GOVT 2306",
        name: "US and Texas Constitution and Politics",
        creditHours: 3,
        prereq: "None",
        description: "Introduction to the constitutions and politics of the United States and Texas, emphasizing constitutional structure, federalism, separation of powers, limited government, public opinion, elections, and civil liberties. (Introductory category).",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "GOVT 2305",
        name: "US Government: Congress, President, & Courts",
        creditHours: 3,
        prereq: "None",
        description: "Introduction to the institutions of government with an emphasis on the congress, the president, and the federal courts. (Introductory category).",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "MATH 2413",
        name: "Calculus I",
        creditHours: 4,
        prereq: "Credit for MATH 2312 with a grade of C- or higher, or a satisfactory score on a placement examination.",
        description: "Calculus of rational functions, limits, derivatives, applications of the derivative, antiderivatives, the definite integral with applications, mean value theorem, fundamental theorem of calculus, and numerical integration.",
        repeatability: "Yes",
        classType: "None"
    },
    {
        num: "MATH 2414",
        name: "Calculus II",
        creditHours: 4,
        prereq: "Credit for MATH 2413 with a grade of C- or higher.",
        description: "Calculus of transcendental functions: additional techniques and applications of integration, indeterminate forms, improper integrals, Taylor’s formula, and infinite series.",
        repeatability: "Yes",
        classType: "None"
    },
    {
        num: "COSC 2436",
        name: "Programming and Data Structures",
        creditHours: 4,
        prereq: "A grade of C- or better in COSC 1437 and credit for or concurrent enrollment in MATH 2414.",
        description: "Introduction to fundamental data structures: arrays, lists, stacks, queues, hash tables, trees; sorting and searching; graph algorithms; design, analysis, and comparison of algorithms. Correctness verification techniques such as assertions and invariants. Review program specification, unit testing, and debugging.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "CORE",
        name: "Creative Arts",
        creditHours: 3,
        prereq: "None",
        description: "None",
        repeatability: "No",
        classType: "Creative Arts"
    },
    {
        num: "COSC 2425",
        name: "Computer Organization and Architecture",
        creditHours: 4,
        prereq: "A grade of C- or better in COSC 1437.",
        description: "Low-level computer design, basics of digital design, and hardware/software interface; Principles of pipelining and caching, instruction pipelining, SIMD and multiprocessor systems.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC 3360",
        name: "Fundamentals of Operating Systems",
        creditHours: 3,
        prereq: "COSC majors and minors: A grade of C- or better in COSC 2436 and COSC 2425; CpE majors: A grade of C- or better in COSC 2320 AND ECE 5367.",
        description: "Operating system; sequential processes, concurrent processes, deadlock, mutual exclusion, semaphores; memory management, processor management, peripheral device management.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "MATH 2318",
        name: "Linear Algebra OR",
        creditHours: 3,
        prereq: "Credit for or concurrent enrollment in MATH 2414.",
        description: "Solutions of systems of linear equations, matrices, vector spaces, linear transformations, similarity, eigenvalues and eigenvectors.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "MATH 3336",
        name: "Discrete Mathematics OR",
        creditHours: 3,
        prereq: "MATH 2318 or equivalent.",
        description: "Topics selected from logic, set theory, combinatorics, and graph theory.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "MATH 3321",
        name: "Engineering Mathematics",
        creditHours: "",
        prereq: "MATH 2414.",
        description: "First order ordinary differential equations and initial value problems; higher order differential equations; vector spaces, matrices, determinants, eigenvectors and eigenvalues; applications to systems of first order equations; Laplace transforms.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC 3336",
        name: "Computing Structures",
        creditHours: "",
        prereq: "A grade of C- or better in MATH 2318 or MATH 3321, and COSC 2425.",
        description: "Introduce methods of reasoning used in computer science; logical notation and proof methods; induction and recursion; sets, functions, and relations; graphs; the growth of functions; annotated programs and loop invariants.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "",
        name: "Natural Science Approved Course",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences"
    },
    {
        num: "",
        name: "Natural Science Approved Course",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences"
    },
    {
        num: "",
        name: "Natural Science Approved Laboratory",
        creditHours: 1,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences Lab"
    },
    {
        num: "",
        name: "Natural Science Approved Laboratory",
        creditHours: 1,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences Lab"
    },
    {
        num: "",
        name: "",
        creditHours: "",
        prereq: "",
        description: "",
        repeatability: "",
        classType: "None"
    },
    {
        num: "CORE",
        name: "Language, Philosophy, and Culture",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Philosophy Culture"
    },
    {
        num: "COSC 3340",
        name: "Introduction to Automata and Computability",
        creditHours: 3,
        prereq: "A grade of C- or better in MATH 3336, and COSC 2320 or COSC 2436.",
        description: "Introduction to automata theory (finite-state automata, push-down automata, Turing machines); formal systems (regular and context-free languages and grammars); computability, Church-Turing thesis.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC 3380",
        name: "Database Systems",
        creditHours: 3,
        prereq: "A grade of C- or better in COSC 2320 or COSC 2436.",
        description: "Declared Computer Science majors and minors, and Computer Engineering majors. Database design with ER model, relational model and normalization up to 3NF/BCNF normal forms. Relational algebra and basic SQL queries combining filters, joins and aggregations. SQL transaction processing. Overview of DBMS internal subsystems including: storage, indexing, query optimizer, locking, recovery manager, security mechanisms. Database application development.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC 3320",
        name: "Algorithms and Data Structures",
        creditHours: 3,
        prereq: "A grade of C- or better in MATH 3336, and COSC 2320 or COSC 2436.",
        description: "Algorithm analysis and design, heuristics; advanced tree structures; advanced hashing techniques; sorting and searching; graphs, sets. NP-Completeness, Time and Space complexities.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "CORE",
        name: "Social and Behavioral Sciences",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Social Behavioral"
    },
    {
        num: "MATH 3339",
        name: "Statistics for the Sciences",
        creditHours: 3,
        prereq: "MATH 2414.",
        description: "Graphical and descriptive methods in statistics, probability, random variables and distributions, sampling, estimation, hypothesis testing, regression, analysis of variance, exploratory and diagnostics, statistical computing.",
        repeatability: "Yes",
        classType: "None"
    },
    {
        num: "",
        name: "Natural Science Approved Course",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences"
    },
    {
        num: "CORE",
        name: "Writing in the Disciplines",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Writing Disciplines"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives"
    },
    {
        num: "",
        name: "Natural Science Approved Course",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Natural Sciences"
    },
    {
        num: "COSC 4351",
        name: "Fundamentals of Software Engineering OR",
        creditHours: 3,
        prereq: "COSC majors and minors: A grade of C- or better in COSC 3320 and MATH 3336; CpE majors: A grade of C- or better in COSC 2320 and MATH 3336.",
        description: "Introduction to the concepts of software engineering. Identification of problems related to the development of large software systems. Software project planning, requirements analysis, design, implementation, quality assurance and maintenance.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "",
        name: "",
        creditHours: "",
        prereq: "",
        description: "",
        repeatability: "",
        classType: "None"
    },
    {
        num: "COSC 4353",
        name: "Software Design",
        creditHours: 3,
        prereq: "A grade of C- or better in COSC 3320, and MATH 3336 or COSC 3336.",
        description: "Object-oriented paradigm, classes, object relationship, software architecture, object modeling technique, design metrics, software development patterns, practices, and principles.",
        repeatability: "No",
        classType: "None"
    },
    {
        num: "COSC XXXX",
        name: "COSC Advanced Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "COSC Electives"
    },
    {
        num: "COSC XXXX",
        name: "COSC Advanced Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "COSC Electives"
    },
    {
        num: "COSC XXXX",
        name: "COSC Advanced Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "COSC Electives"
    },
    {
        num: "COSC XXXX",
        name: "COSC Advanced Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "COSC Electives"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 3"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 3"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 3"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 3,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 3"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 1,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 1"
    },
    {
        num: "",
        name: "Minor / Free Elective",
        creditHours: 1,
        prereq: "None.",
        description: "None.",
        repeatability: "No",
        classType: "Free Electives 1"
    },
]