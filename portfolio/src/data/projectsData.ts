// src/projects.ts

/* Tier Description:
Tier 4: Large Projects. Important. Must have a link for user to try/test.  
Tier 3: Work-related projects. Important. Examples of experience.
Tier 2: Medium-sized projects. Semi-important. Completed 
Tier 1: Small/simple projects. Not important. Incomplete
*/

import { type Project } from '../types/IProject'; // Import the interface

// Import images
import UnoHome from '../assets/images/projects/UnoHome.png';
import TheHobbyHubHome from '../assets/images/projects/TheHobbyHubHome.png';
import DVDCentral3 from '../assets/images/projects/DVDCentral3.jpg';
import Criptografia from '../assets/images/projects/Criptografia.jpg';

import SpaceFighters from '../assets/images/projects/SpaceFighters.jpg';
import GroceryListDemo from '../assets/images/projects/GroceryListDemo.jpg';
import GalleryAppDemo from '../assets/images/projects/GalleryAppDemo.jpg';
import OCEPIContact1 from '../assets/images/projects/OCEPI-Contact1.png';
import ICACHome from '../assets/images/projects/ICACHome.jpeg';
import ICACMeetingTimes from '../assets/images/projects/ICACMeetingTimes.jpg';
import NCJTCHome from '../assets/images/projects/NCJTCHome.jpeg';
import NCJTCPayments01 from '../assets/images/projects/NCJTCPayments01.png';
import NCJTCPayments02 from '../assets/images/projects/NCJTCPayments02.png';




export const projectsData: Project[] = [
    {
    id: 1,
    tier: 4,
    date: "2024-05",
    featured: true,
    title: "Uno Park",
    images: [UnoHome],
    categories: ["Unity", "API", "C#", "Videogame", "3D" ],
    summary: "Uno Park is a fully-featured 3D game developed using C# and Unity game engine. A re-design of the classic UNO experience.",
    description: `**"Uno Park"** is a 3D Unity game developed as my final project for the Software Development AAS program at Fox Valley Technical College. \n\nWhile most classmates created 2D games and programs, I chose to self-learn *Unity 3D* for a more challenging experience. \n\nMy partner, _[Austin Steffes](https://www.linkedin.com/in/austin-steffes/)_, handled the **server-side backend**, database, and part of the game API using **Microsoft Azure**, while I focused on **Unity development**. This included world modeling, menu design, camera movement, animations, and overall game functionality. \n\nThe game idea was designed around the camera movement and animation. I aimed to showcase a park-themed environment with in-game objects acting as interactive menus for a better immersive experience.`,
    video: "https://www.youtube.com/embed/H7cmYf08RQY?feature=oembed",
    link: "https://github.com/Cdguzmanr/UnoPark-Unity.git",
    play: "https://play.unity.com/en/games/892bb4cc-a19a-4142-9b00-5ecce18e1062/uno-park"
  },
  {
    id: 2,
    tier: 1,
    date: "2024-04",
    featured: false,
    title: "The Hobby Hub",
    images: [TheHobbyHubHome],
    categories: [".Net", "C#", "Agile Methodologies","Form"],
    summary: "A ASP.Net application built in collaboration with a multidiciplinary team of developers following Agile Methodologies.",
    description: `This is my final project for the Agile Methodologies class, where I worked with three other developers using SCRUM for project management. The Hobby Hub is an **ASP.NET MVC** project built with **.NET Core**, following a code-first database approach using **Microsoft Entity Framework**. To ensure data security, we implemented **GUIDs** for unique identifiers and hashed user passwords. \n\nThe project features **JavaScript animations** and design elements to enhance the user experience. We also used CodePen.io to draw inspiration from public scripts, modifying the code to fit the MVC structure and meet specific project requirements.`,
    video: "https://www.youtube.com/embed/eUvfKQzT1qs?feature=oembed",
    link: "https://github.com/Cdguzmanr/TheHobbyHub.git",
    play: ""
  },
  {
    id: 3,
    date: "2024-03",
    tier: 2,
    featured: false,
    title: "DVD Central",
    images: [DVDCentral3],
    categories: [".Net", "C#", "API", "DevOps", "MVC"],
    summary: "A scalable e-commerce web application built using ASP.NET MVC and Microsoft SQL Server.",
    description: `DVD Central is the main project developed in my ASP.Net class (3rd Term), and half of Advanced Software Development (4th term). \n\nThe project was **developed individually** to practice and improve the knowledge worked in class, including Object Oriented Programming (OOP), **ASP .Net**, **Model-View-Controller (MVC)**, **Mode-View-Viewmodel (MVVM)**, Source control using **Git**, **Microsoft Azure** (DevOps, SQL Database, API Keys), Visual Studio development environment, among others.`,
    video: "https://www.youtube.com/embed/tHnoCH-a7KA?feature=oembed",
    link: "https://github.com/Cdguzmanr/DVDCentral_Advanced.git",
    play: ""
  },
  {
    id: 4,
    date: "2022-03",
    tier: 2,
    featured: true,
    title: "Criptografia",
    images: [Criptografia],
    categories: ["Python", "Cybersecurity"],
    summary: "A Python script app to code and decode text in 8 different cryptography methods: Caesar Cipher, Key-based Cipher, Vigenère Substitution, XOR Substitution with Key, Reversed Word, Reversed Message, Telephone Cipher, Binary Cipher",
    description: `**Criptografia** is a **Python-based** script application developed as my first project for the *Programming Workshop* course at the Costa Rica Institute of Technology.\n\nThis project enables users to **encode and decode** text using eight different cryptographic methods, offering a hands-on exploration of fundamental encryption techniques.\n## Supported Cryptography Methods:\n1. **Caesar Cipher** - Shifts each letter in the text by a fixed number of positions.\n2. **Key-Based Cipher** - Encrypts text using a user-defined key for character substitution.\n3. **Vigenère Cipher** - Uses a keyword to perform polyalphabetic substitution.\n4. **XOR Substitution with Key** - Applies a bitwise XOR operation with a key for encryption.\n5. **Reversed Word** - Reverses individual words while maintaining their original order.\n6. **Reversed Message** - Reverses the entire message for simple obfuscation.\n7. **Telephone Cipher** - Mimics the transformation of letters to numbers as seen on a telephone keypad.\n8. **Binary Cipher** - Converts text into its binary representation.\n\nThis project helped me develop foundational programming skills, including string manipulation, algorithm design, and user input handling in Python.`,
    video: "https://www.youtube.com/embed/McWwvHpWrZU?si=rT5b-0qPrZPakPbm",
    link: "https://github.com/Cdguzmanr/Cdguzmanr-TP1-Carlos-Samuel-",
    play: ""
  },
  {
    id: 5,
    date: "2023-05",
    tier: 2,
    featured: false,
    title: "Space Fighters",
    images: [SpaceFighters],
    categories: ["C++", "Videogame", "DevOps"],
    summary: "A 2D space shooter game inspired by Galaga, featuring a power-up system, enhanced graphics, and an improved background. Built as a C++ class project.",
    description: "**Space Fighters** is a **2D space shooter game** inspired by *Galaga*, developed as the final project for my *C++* course at Fox Valley Technical College.\n\nOur instructor provided the core structure, and our team of four focused on implementing **extra features** to enhance gameplay.\n\n## Key Features:\n- **Power-Up System:** Defeated enemies had a probability of dropping power-ups, adding strategic depth to the game.\n- **First Implemented Power-Up:** A **red power-up** that increased the ship's attack speed.\n- **Enhanced Graphics:** I redesigned the spaceship and power-up visuals, using distinct color patterns to represent different abilities.\n- **Improved Background Design:** We refined the game's aesthetic for a more modern look.\n\nAs our **first major project** in C++, we faced technical challenges but leveraged creativity to push the game's mechanics forward. While only one power-up was fully implemented due to time constraints, we successfully established the **framework for future expansions**.",
    video: "https://www.youtube.com/embed/JNAJQLihZww?si=ETTBARcbXyD5rp-k",
    link: "https://github.com/Cdguzmanr/SpaceFighters",
    play: ""
  },
  {
    id: 6,
    date: "2024-02",
    tier: 1,
    featured: false,
    title: "Grocery List",
    images: [GroceryListDemo],
    categories: ["Java", "Android", "API"],
    summary: "A mobile app built in Android Studio to manage grocery lists, featuring API authentication, item tracking, and camera integration for adding images.",
    description: "**Grocery List** is a **mobile app** developed in *Android Studio* as part of my *Mobile Development* course. The project focused on integrating **APIs** to manage data between views.\n\n## Key Features:\n1. **Login & Profile Management:** Users enter their name, which is verified against an API managed by our instructor (*Brian Foote*). If the profile exists, their grocery list is retrieved; otherwise, they are prompted to create an account.\n2. **Grocery List Management:** Displays a list of grocery items, each with a name, image, and checkbox for tracking. Users can navigate between different list views (*master list, marked items, etc.*).\n3. **Item Modification & Camera Integration:** Users can add new items, edit details, and capture images using their phone's camera, offering a hands-on experience with Android device functionalities.\n\nThis project strengthened my skills in **Android development**, **API handling**, and **camera integration**, allowing me to build a fully interactive and dynamic mobile experience.",
    video: "https://www.youtube.com/embed/XUImmFdMdQI?si=fcgH174Ce_Rr1z9R",
    link: "https://github.com/Cdguzmanr/Android-GroceryList",
    play: ""
  },
  {
    id: 7,
    tier: 1,
    date: "2024-03",
    featured: false,
    title: "Gallery App",
    images: [GalleryAppDemo],
    categories: ["Java", "Android"],
    summary: "An Android app displaying image-text cards with data imported from external files, featuring animations and an interactive flipping effect.",
    description: "**Gallery App** is a **mobile application** developed in *Android Studio* as part of my *Mobile Development* course. The project focused on importing **text data from external files** to improve data management and dynamically display content.\n\n## Key Features:\n1. **Card-Based Display:** Each card presents an image and text on the front and back. I chose to showcase *touristic areas of Costa Rica*, making the app both functional and visually engaging.\n2. **Data Import from External Files:** Reads text data from `.txt` files, making the project more structured and scalable.\n3. **Custom Animations & Card Flipping:** Implemented visual enhancements beyond the class requirements, adding animations for flipping and transitioning between cards.\n\nAs one of my **first Android projects**, this app reflects my early exploration of **front-end design**, **data handling**, and **animation effects**. While my technical skills were still developing, my motivation to push beyond expectations set the foundation for my continuous learning and growth as a developer.",
    video: "https://www.youtube.com/embed/35e5nI2LJzQ?si=2Cs65NG9Vx0Yx2xD",
    link: "https://github.com/Cdguzmanr/Android-GalleryApp",
    play: ""
  },
  {
    id: 8,
    tier: 3,
    date: "2025-05",
    featured: true,
    title: "OCEPI Contact Form",
    images: [OCEPIContact1],
    categories: [".Net", "API", "Dynamics", "jQuery", "DevOps", "C#", "Form"],
    summary: "A dynamic Contact-Us form with integration to Microsoft Dynamics for Case creation and automatic email sender.",
    description: `During my time as a Software Engineer for the *National Criminal Justice Training Center* (NCJTC), I was requested to create a *Contact-Us* form for **The Online Child Exploitation Prevention Initiative** (OCEPI).\n\nAiming to expand the organization's reach, the contact form must open a way of direct comunication between new customers and the OCEPI committee.\n\nTherefore, I created a new "Contact Us" section at the botton of OCEPI's page. By clicking the main button, a **collapsible panel** or "accordion display" will drop and show the form.\n\n ## Main Features:
    \n- Phone number **format mapping**
    \n- **Google reCaptcha v2** verification for security
    \n- Integration with the **Microsoft Dynamcis** API to create a user case on form submission
    \n- **Email sender** integration to notify the OCEPI committee about new form submissions`,
    video: "https://www.youtube.com/embed/rFljYV70tZo?si=FJYjD818N9JRh8h4",
    link: "https://www.icactaskforce.org/OCEPI",
    play: ""
  },
  {
    id: 9,
    tier: 3,
    date: "2025-06",
    featured: true,
    title: "ICAC Training Meeting Times",
    images: [ICACHome, ICACMeetingTimes],
    categories: [".Net", "API", "SQL", "jQuery", "DevOps", "C#"],
    summary: "New feature to allow Admins to add and modify Meeting times for Training Instances in all ICAC web platforms",
    description: `During my time as a Software Engineer for the *National Criminal Justice Training Center* (NCJTC), our team was requested to design a way to manage and display meeting times for the different trainings available in the **Internet Crimes Against Children Taskforce** (ICAC) website.\n\nTo achieve this, I created a new section in the **Training Details** page of ICAC Admin's site, so that staff members can **modify the Day of week and time schedule**. All changes saved in this page would then reflect at the Training Details page of ICAC's public site.\n\n## Main Features:
    \n- On/Off **toggle** to enable Meeting Times feature and display data in public site
    \n- Dropdown to select Time Zone
    \n- **Dropdown** to select Day of Week based on Training's Start and End Date
    \n- +Add and -Remove buttons to manage several schedules as needed
    \n- Integration with FVTC's **API** to reflect instant changes from Admin site into the Public site
    \n- **Database** connection to store changes on Update`,
    video: "https://www.youtube.com/embed/qilCFrIhE6A?si=ZfTR6sLGCdLb21kF",
    link: "https://www.icactaskforce.org/search-results",
    play: ""
  },
  {
    id: 10,
    tier: 3,
    date: "2025-06",
    featured: true,
    title: "NCJTC Performance Update",
    images: [NCJTCHome, NCJTCPayments01, NCJTCPayments02],
    categories: [".Net", "API", "jQuery", "DevOps", "C#", "SQL"],
    summary: "A major refactoring and optimization project to improve the loading speed and usability of NCJTC's payments page, reducing load times in half, and implementing new features for a smoother user experience.",
    description: `As the main software engineer at the **National Criminal Justice Training Center (NCJTC)**, I identified and resolved a critical performance issue with the organization's payments page. Previously, users had to wait up to half a minute for the page to load, often causing browsers to freeze or mark the site as *“not responding.”* This issue stemmed from synchronous JavaScript calls and inefficient controller logic that attempted to load all data (registrations, organizations, and payment requests) upfront. To address this, I **redesigned the page's backend and frontend workflows.**
    \n\n## Main Tasks: 
    \n- Refactored the **Payments controller** to handle large datasets asynchronously, loading the BillMyOrg modal and Payment History section in the background.
    \n- Implemented **loading placeholder animations** to provide a smoother user experience while data loads.
    \n- Optimized JavaScript functions and controller methods, allowing the **Payments Page to load instantly**, and cutting the **data load time by more than half**.
    \n\nThis project transformed one of NCJTC's most important user-facing features into a fast, reliable, and user-friendly payment system. It showcased my ability to work independently on a large-scale .NET application, applying skills in performance optimization, asynchronous programming, JavaScript refactoring, and full-stack debugging.`,
    video: "https://www.youtube.com/embed/iTTFHd_OHi8?si=8AVcxJEulllfFGk6",
    link: "https://ncjtc.fvtc.edu",
    play: ""
  },
  
];
