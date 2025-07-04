# CrackIT
My BCA Final year project . An Aptitude and Technical round Preperation website for IT Students.


CrackIT – A Comprehensive IT Aptitude & Interview Preparation Platform

CrackIT is an online training platform designed to help IT students prepare for aptitude tests, technical interviews, and mock assessments. The platform provides a structured, interactive, and responsive learning environment, integrating a curated set of questions, mock tests, and personalized feedback tools.


🚀 Introduction

CrackIT bridges the gap between academic learning and industry demands. With categorized practice areas, timed mock tests, and real-time performance analytics, it prepares students for placement exams and technical rounds efficiently.


🎯 Key Features

    📚 Topic-wise preparation across aptitude, programming, and reasoning

    🧠 Timed mock tests with difficulty levels (Easy, Medium, Hard)

    📈 Detailed result analytics and instant feedback

    🤖 Tech/HR interview Q&A modules

    📝 Feedback form with automated email response

    🔒 Firebase authentication (email/Google login)

    💡 Responsive, dark/light theme user interface

    🎯 Admin CRUD functionality for managing question banks


🧩 Modules

👨‍🎓 User Module

    Authentication – Gmail/Google-based login and password reset

    Topics & Practice – Topic-wise MCQs and practice tests

    Mock Tests – Timed evaluations across topics

    Result Analytics – Post-test insights with solutions

    Tech/HR Interview Questions – Frequently asked Q&A sets

    Feedback System – Bug reporting and user queries with EmailJS integration

👨‍💼 Admin Module

    CRUD Questions – Add, update, delete, and manage questions

    Feedback Store – View and respond to submitted user feedback



🛠️ Tech Stack

Frontend

    HTML, CSS, JavaScript

    Tailwind CSS / Bootstrap 5

    Boxicons, FontAwesome

    Google Fonts (Inter)

Backend / Database

    Firebase – Authentication & user data

    Supabase – Question bank and mock test data (PostgreSQL)

    EmailJS – Feedback and email automation

Deployment & Tools

    Netlify – Frontend deployment

    VS Code – Development IDE


📦 Database Schema Highlights

🔐 User Table

    id, name, email, password_hash

🧾 Questions Table

    id, question, option1-4, correct_option, explanation, difficulty

📝 Mock Test Table

    Same structure + topic, subtopic



🖥️ System Requirements

Hardware

    8 GB RAM, Quad-core CPU, SSD storage

Software

    Windows/Linux/macOS

    Netlify / Firebase / Supabase accounts


📈 Project Scope

    Responsive across devices

    Real-world simulation via mock tests

    Role-based admin and user access

    Built for scalability and future integrations


⚠️ Known Limitations

    No native backend server (if hosted only on Netlify)

    No AI-based recommendations or adaptive learning (yet)

    Lacks mobile app support

    No SMS/email alerts for test progress


🔮 Future Enhancements

    Mobile app version (Android/iOS)

    Online code execution for technical rounds

    Role-based access (mentors, reviewers, etc.)

    AI-driven personalized question sets

    Payment gateway integration for premium modules



