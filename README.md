# 🔢 OOP Counter with State-Driven UI

**Designed and Developed by Linh Nguyen**


![Project Logo Image](images/counter_logo.png)

---

## 📌 Project Overview

This project demonstrates how to build a **reusable Counter component** using **JavaScript Object Oriented Programming**.

The goal of the assignment is to create a UI component that manages its own **internal state** and updates the interface whenever that state changes.

The counter behaves like a reusable **UI widget** that can be instantiated multiple times on the same page.

In addition to the working component, the project includes a **documentation style webpage** explaining how the component works and how developers can use it.

---

## 🎯 Learning Objectives

This project focuses on several important development concepts.

- Encapsulation  
- State-driven UI updates  
- DOM manipulation inside a class  
- Separation of concerns  
- Technical documentation and communication  
- Object oriented programming in JavaScript  

---

## ⚙️ Counter Component Features

The **Counter class** provides a simple interactive UI with the following functionality.

**Increment Button**  
Increases the counter value.

**Decrement Button**  
Decreases the counter value.

**Reset Button**  
Resets the counter value to zero.

**Custom Initial Value**  
Each counter instance can start with a different number.

**Inactive Button State**  
When the count reaches zero, the decrement and reset buttons visually appear inactive.

**Negative Value Protection**  
The counter never goes below zero.

**Multiple Instances**  
Several counters can run independently on the same page.

---

## 🧬 StepCounter Advanced Component

The project also includes an advanced counter called **StepCounter**.

This class extends the base **Counter** class and demonstrates **inheritance and polymorphism**.

Additional functionality includes:

- Custom step value  
- Increment and decrement using the step value  
- Default step value of 1 if none is provided  

Example

```javascript
new StepCounter("#counter-container4", 5, 10);
```
This creates a counter that starts at 5 and increases or decreases by 10.

---

## 🧠 How the Counter Works
The component is built around two main responsibilities.

- ```mount()```:
Creates the DOM elements and inserts them into the container.

- ```update()```
Updates the UI whenever the internal state changes.

This structure separates UI rendering from logic, making the component easier to maintain and extend.

---

## 🧪 Live Demo

The documentation page includes several working counters.

- Counter starting at **0**
- Counter starting at **6**
- Counter starting at **8**
- **StepCounter** incrementing by **10**

Each instance operates independently and demonstrates the reusable nature of the component.

---

## 📱 Responsive Design

The page is designed using a **mobile-first approach**.

Features include:

- Responsive layout using a custom CSS grid system
- Mobile hamburger navigation
- Smooth scrolling navigation
- Layout adaptation from mobile to desktop

---

## 🧰 Technologies Used

- HTML5
- SCSS
- JavaScript ES Modules
- Object Oriented Programming
- CSS Grid

---

## 📋 Assignment Requirements

This project fulfills the assignment requirements by implementing:

- A reusable Counter component
- State driven UI updates
- Conditional class toggling
- Multiple component instances on the same page
- Inheritance using a subclass
- A documentation style webpage

---

## 👩‍💻 Author

**Linh Nguyen**  
Interactive Media Design Student