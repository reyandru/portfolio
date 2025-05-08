import React, { useState, useEffect, useRef } from 'react';
import {
  Work1, Work2, Work3, Work4, Work5, Work6, Work7,
  GetFormAdmin, ContactSupport, Tutorial3, EditProfile, PopupEditProfile
} from '../assets/assests';
import '../styles/works.css';

const workProjects = [
  {
    link: 'https://reyandru.github.io/Frontend-Challenge-3/',
    img: Work1,
    alt: 'Work 1',
    title: '3-column preview card component',
    description: 'Three containers featuring different car brands with unique hover effects.',
    programming_language: 'HTML, CSS',
  },
  {
    link: 'https://reyandru.github.io/Four-card-featured-section/',
    img: Work2,
    alt: 'Work 2',
    title: 'Four card featured section',
    description: 'A clean, multi-column layout challenge ideal for beginners to practice responsiveness.',
    programming_language: 'HTML, CSS',
  },
  {
    link: 'https://reyandru.github.io/RPS/',
    img: Work3,
    alt: 'Work 3',
    title: 'Rock, Paper and Scissors game!',
    description: 'A simple implementation of the Rock, Paper, Scissors game using JavaScript.',
    programming_language: 'HTML, CSS, JavaScript',
  },
  {
    link: 'https://reyandru.github.io/recipe-page-main/',
    img: Work4,
    alt: 'Work 4',
    title: 'Recipe page',
    description: 'A static recipe page displaying ingredients and cooking instructions.',
    programming_language: 'HTML, CSS',
  },
  {
    link: 'https://reyandru.github.io/Frontend-Challenge-7/',
    img: Work5,
    alt: 'Work 5',
    title: 'Order Summary',
    description: 'An order summary component featuring pricing details and a checkout option.',
    programming_language: 'HTML, CSS',
  },
  {
    link: 'https://reyandru.github.io/Frontend-Challenge-5/',
    img: Work6,
    alt: 'Work 6',
    title: 'Product preview card component',
    description: 'A product preview card showcasing an item with price and description.',
    programming_language: 'HTML, CSS',
  },
  {
    link: 'https://reyandru.github.io/FEC11---huddle-landing-page-with-alternating-feature-blocks-master/',
    img: Work7,
    alt: 'Work 7',
    title: 'Huddle landing page with alternating feature blocks',
    description: 'A responsive landing page layout featuring alternating blocks of content.',
    programming_language: 'HTML, CSS',
  },
  
];

const ojtTask = [
  {
    img: GetFormAdmin,
    alt: 'Get form Admin',
    title: 'OJT - Get Form Admin',
    description: 'A form interface for admins to collect data from different institutes.',
    programming_language_framework: 'React.js, CSS',
  },
  {
    img: ContactSupport,
    alt: 'Contact support page',
    title: 'OJT - Contact Support',
    description: 'A support page where users can contact administrators.',
    programming_language_framework: 'React.js, CSS',
  },
  {
    img: Tutorial3,
    alt: 'Tutorial 3',
    title: 'OJT - Tutorial Page',
    description: 'A tutorial walkthrough interface for new users.',
    programming_language_framework: 'React.js, CSS',
  },
  {
    img: EditProfile,
    alt: 'Edit profile page',
    title: 'OJT - Edit Profile',
    description: 'A page that allows users to update their profile information.',
    programming_language_framework: 'React.js, CSS',
  },
  {
    img: PopupEditProfile,
    alt: 'Popup edit profile',
    title: 'OJT - Popup Edit Profile',
    description: 'A modal popup for quick profile edits without page navigation.',
    programming_language_framework: 'React.js, CSS',
  },
];

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <section className="works_section">
      <h1>My Works</h1>
      <div className="work-photos">
        {[...workProjects, ...ojtTask].map((project, index) => (
          <div
            key={index}
            className="work-item"
            onClick={() => openModal(project)}
          >
            <div className="image-wrapper">
              <img src={project.img} alt={project.alt} className="works_images" />
              <div className="image-overlay">
                <p className="overlay-title">{project.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay">
          <div className="modal-projects" ref={modalRef}>
            <div className="close-conts">
              <button className="close-modal" onClick={handleClose}>
                X
              </button>
            </div>

            <img src={selectedProject.img} alt={selectedProject.alt} className="photos" />

            <div className="works-text">
              <h1 className="work-title">Title: {selectedProject.title}</h1>
              <p className="work-description">Description: {selectedProject.description}</p>
              <p className="prog-lang">Programming Language: {selectedProject.programming_language}</p>
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  View the project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Works;
