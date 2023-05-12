const data = [{
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
    prereq: "None",
    description: "None",
    repeatability: "No",
    classType: "naturalSciences"
},
{
    num: "",
    name: "Natural Science Approved Course",
    creditHours: 3,
    prereq: "None",
    description: "None",
    repeatability: "No",
    classType: "naturalSciences"
},
{
    num: "",
    name: "Natural Science Approved Laboratory",
    creditHours: 1,
    prereq: "None",
    description: "None",
    repeatability: "No",
    classType: "naturalSciencesLab"
},
{
    num: "",
    name: "Natural Science Approved Laboratory",
    creditHours: 1,
    prereq: "None",
    description: "None",
    repeatability: "No",
    classType: "naturalSciencesLab"
},
{
    num: "",
    name: "",
    creditHours: "",
    prereq: "",
    description: "",
    repeatability: "",
    classType: ""
},
{
    num: "CORE",
    name: "Language, Philosophy, and Culture",
    creditHours: 3,
    prereq: "None",
    description: "None",
    repeatability: "No",
    classType: "culture"
},
]

const creativeArts = [
    {
        num: "ARTS 1304",
        name: "Art History II (15th Century to the Present)",
        creditHours: 3,
        prereq: "ENGL 1301.",
        description: "Art and its relationship to society in and for which it was made from the Renaissance to the present.",
        repeatability: "No"
    },
    {
        num: "DANC 2303",
        name: "Introduction to Dance",
        creditHours: 3,
        prereq: "ENGL 1302.",
        description: "An introductory class to dance as an art form with an overview of the dance techniques, history, and choreography of major dance genres.",
        repeatability: "Yes"
    },
    {
        num: "DRAM 1310",
        name: "Introduction to Theatre",
        creditHours: 3,
        prereq: "None",
        description: "Students will gain a genuine appreciation for the art and craft of theatre by reading, attending, and writing critically about plays.",
        repeatability: "No"
    },
    {
        num: "INDS 2355",
        name: "Design History I",
        creditHours: 3,
        prereq: "Credit for or concurrent enrollment in ENGL 1302.",
        description: "Survey of the history of design and art from the age of the industrial revolution to the postwar period with emphasis on the influence of cultural, philosophical, and technical forces.",
        repeatability: "No"
    },
    {
        num: "PHIL 1361",
        name: "Philosophy and the Arts",
        creditHours: 3,
        prereq: "ENGL 1301.",
        description: "Introduction to philosophical topics in the visual and performing arts, including criticism, interpretation, moral issues, and cultural contexts.",
        repeatability: "No"
    },
]