# Responsive Kanban Board

A visually accurate and fully responsive **Kanban board** built to replicate the provided Figma design.  
The application features multiple task columns, styled task cards, and a static side panel for a professional and cohesive user experience.

---

## 🚀 Features

- **Custom Branding**
  - Favicon and page title match the application’s theme.
- **Kanban Board Layout**
  - Multiple columns (e.g., *To Do*, *In Progress*, *Done*) following the exact Figma layout.
- **Pixel-Perfect Styling**
  - Colours, typography, spacing, and shadows match Figma specifications.
- **Fully Responsive**
  - Adapts seamlessly between desktop and mobile views as per Figma’s responsive design.
- **Task Cards**
  - Styled cards with clear titles, borders, padding, and shadows for easy readability.  
  - **Hover effects and transitions** for smooth and engaging interactivity.
- **Static Side Panel**
  - Contains correct icons, text, and branding elements, structured for a polished look.

---

## 📱 Responsiveness

- **Desktop/Laptop** → Full Kanban board with side panel.
- **Mobile** → Compact design that maintains usability and readability.

---

## 2. JavaScript Task Entry System

A JavaScript-based system that allows users to input three tasks with full details while ensuring data validation and consistency.

### Features
- Prompt users to enter **title**, **description**, and **status** for two tasks
- Automatically converts status input to **lowercase**
- Validates status to accept only `todo`, `doing`, or `done`, prompting repeatedly until valid
- Displays **completed tasks** (status: `done`) in the console
- Shows a motivational message if no tasks are completed:  
  `"No tasks completed, let's get to work!"`  
- Assigns **unique incremental IDs** to each task
- Alerts users when the **last allowed task** is added

---

## 3. Dynamic Task Board

A modular JavaScript-powered Kanban board where tasks are dynamically created from initial data, automatically placed in the correct columns, and can be viewed or edited via a responsive modal.

### Features
- Tasks are rendered from initial data using JavaScript, placed into the correct columns based on their status. 
- Clicking a task opens a modal with editable **title**, **description**, and **status** 
- Modal is fully responsive for mobile devices.
- Modular JavaScript functions improve maintainability. 

### How it works
- Tasks are dynamically created from an initial array using JavaScript functions.
- Each task is appended to the correct column (`todo`, `doing`, `done`) using a modular function. 
- Clicking a task opens a modal that displays the task’s title, description, and status.
- The modal allows users to edit task details and is fully responsive for mobile devices. 

## How to Use
1. Open `index.html` in your browser  
2. View tasks in their respective columns  
3. Click on any task to open the modal  
4. Edit the title, description, or status in the modal  
5. Close the modal by clicking the “X” button 

---

## 🛠️ Tech Stack

- **HTML**  
- **CSS** 
- **JavaScript**  

---

## 📸 Kanban Board Preview

### Desktop View
![Desktop Preview](./assets/desktop.png)

### Mobile View
![Mobile Preview](./assets/mobile.png)

---

## 📷 Javascript task entry system preview  

### User Input View  
![User Input](./assets/user-input.png)

### Invalid Status  
![Invalid Status](./assets/invalid-input-error.png)

### Console Log Output  
![Console Log Output](./assets/output.png)

### Task Limit Alert
![Task Limit Alert](./assets/limit-message.png)  

### console array output
![Console Array Output](./assets/Screenshot%202025-09-07%20165407.png)

---

## 📸 Dynamic Task Board Modal Overview  

### Desktop View
![Desktop Preview](./assets/desktop-modal.png)

### Mobile View
![Mobile Preview](./assets/mobile-modal.png)